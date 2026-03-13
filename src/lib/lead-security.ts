import type { NextRequest } from "next/server";
import { createHash } from "node:crypto";

const HONEYPOT_FIELDS = ["website", "company_website"] as const;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 8;
const RATE_LIMIT_MIN_INTERVAL_MS = 8 * 1000;
const DUPLICATE_WINDOW_MS = 10 * 60 * 1000;

type ThrottleEntry = {
  count: number;
  windowStartedAt: number;
  lastAttemptAt: number;
};

type DuplicateEntry = {
  createdAt: number;
  leadId: string;
};

const throttleStore = new Map<string, ThrottleEntry>();
const duplicateStore = new Map<string, DuplicateEntry>();

function collapseWhitespace(value: unknown) {
  return String(value ?? "").replace(/\s+/g, " ").trim();
}

function createShortHash(value: string) {
  return createHash("sha1").update(value).digest("hex").slice(0, 16);
}

function cleanupStore<T extends { lastAttemptAt?: number; createdAt?: number }>(
  store: Map<string, T>,
  maxAgeMs: number
) {
  const now = Date.now();

  for (const [key, entry] of store.entries()) {
    const createdAt = entry.createdAt ?? entry.lastAttemptAt ?? 0;

    if (now - createdAt > maxAgeMs) {
      store.delete(key);
    }
  }
}

export function getPagePath(pageUrl: string) {
  const safeUrl = collapseWhitespace(pageUrl);

  if (!safeUrl) {
    return "";
  }

  try {
    return new URL(safeUrl).pathname || "";
  } catch {
    return safeUrl.startsWith("/") ? safeUrl : "";
  }
}

export function getPageType(pageUrl: string, explicitPageType?: unknown) {
  const provided = collapseWhitespace(explicitPageType).toLowerCase();

  if (provided) {
    return provided;
  }

  const pagePath = getPagePath(pageUrl);

  if (!pagePath) return "";
  if (pagePath.startsWith("/teklif/")) return "landing_page";
  if (pagePath.startsWith("/blog/")) return "blog_post";

  const segments = pagePath.split("/").filter(Boolean);

  if (segments.length === 1) return "city_page";
  if (segments.length === 2) return "city_service_page";

  return "site_page";
}

export function getHoneypotValue(raw: Record<string, unknown>) {
  for (const field of HONEYPOT_FIELDS) {
    const value = collapseWhitespace(raw[field]);

    if (value) {
      return value;
    }
  }

  return "";
}

export function extractClientIp(req: NextRequest) {
  const forwardedFor = req.headers.get("x-forwarded-for");

  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "";
  }

  return req.headers.get("x-real-ip") || "";
}

export function getClientFingerprint(req: NextRequest, phone: string) {
  const clientIp = extractClientIp(req);
  const userAgent = req.headers.get("user-agent") || "";
  const fallback = `${userAgent.slice(0, 120)}|${phone || "no-phone"}`;

  return {
    clientIp,
    userAgent,
    clientKey: clientIp || `ua:${createShortHash(fallback)}`,
  };
}

export function checkSubmissionThrottle(input: {
  clientKey: string;
  phone: string;
  pageUrl: string;
}) {
  cleanupStore(throttleStore, RATE_LIMIT_WINDOW_MS);

  const now = Date.now();
  const pagePath = getPagePath(input.pageUrl) || "unknown-page";
  const identityKey = `identity:${createShortHash(`${input.clientKey}|${input.phone}|${pagePath}`)}`;
  const windowKey = `window:${input.clientKey}`;

  const identityEntry = throttleStore.get(identityKey);

  if (identityEntry && now - identityEntry.lastAttemptAt < RATE_LIMIT_MIN_INTERVAL_MS) {
    const remainingMs = RATE_LIMIT_MIN_INTERVAL_MS - (now - identityEntry.lastAttemptAt);
    identityEntry.lastAttemptAt = now;
    throttleStore.set(identityKey, identityEntry);

    return {
      allowed: false,
      reason: "cooldown",
      retryAfterSeconds: Math.ceil(remainingMs / 1000),
    };
  }

  const windowEntry = throttleStore.get(windowKey);

  if (!windowEntry || now - windowEntry.windowStartedAt > RATE_LIMIT_WINDOW_MS) {
    throttleStore.set(windowKey, {
      count: 1,
      windowStartedAt: now,
      lastAttemptAt: now,
    });
  } else {
    if (windowEntry.count >= RATE_LIMIT_MAX_REQUESTS) {
      return {
        allowed: false,
        reason: "rate_limit",
        retryAfterSeconds: Math.ceil(
          (RATE_LIMIT_WINDOW_MS - (now - windowEntry.windowStartedAt)) / 1000
        ),
      };
    }

    windowEntry.count += 1;
    windowEntry.lastAttemptAt = now;
    throttleStore.set(windowKey, windowEntry);
  }

  throttleStore.set(identityKey, {
    count: 1,
    windowStartedAt: now,
    lastAttemptAt: now,
  });

  return {
    allowed: true,
    reason: "ok",
    retryAfterSeconds: 0,
  };
}

function createMessageFingerprint(message: string) {
  const normalized = collapseWhitespace(message).toLocaleLowerCase("tr-TR");

  if (!normalized) {
    return "no-message";
  }

  return createShortHash(normalized.slice(0, 240));
}

export function findRecentDuplicateLead(input: {
  phone: string;
  serviceType: string;
  pageUrl: string;
  message: string;
}) {
  cleanupStore(duplicateStore, DUPLICATE_WINDOW_MS);

  if (!input.phone) {
    return {
      duplicate: false,
      leadId: "",
    };
  }

  const key = [
    input.phone,
    collapseWhitespace(input.serviceType).toLocaleLowerCase("tr-TR"),
    getPagePath(input.pageUrl) || "",
    createMessageFingerprint(input.message),
  ].join("|");

  const match = duplicateStore.get(key);

  if (!match) {
    return {
      duplicate: false,
      leadId: "",
    };
  }

  if (Date.now() - match.createdAt > DUPLICATE_WINDOW_MS) {
    duplicateStore.delete(key);

    return {
      duplicate: false,
      leadId: "",
    };
  }

  return {
    duplicate: true,
    leadId: match.leadId,
  };
}

export function registerRecentLeadSubmission(input: {
  leadId: string;
  phone: string;
  serviceType: string;
  pageUrl: string;
  message: string;
}) {
  cleanupStore(duplicateStore, DUPLICATE_WINDOW_MS);

  if (!input.phone) {
    return;
  }

  const key = [
    input.phone,
    collapseWhitespace(input.serviceType).toLocaleLowerCase("tr-TR"),
    getPagePath(input.pageUrl) || "",
    createMessageFingerprint(input.message),
  ].join("|");

  duplicateStore.set(key, {
    createdAt: Date.now(),
    leadId: input.leadId,
  });
}
