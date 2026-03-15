import { createHash } from "node:crypto";

function collapseWhitespace(value: unknown) {
  return String(value ?? "").replace(/\s+/g, " ").trim();
}

function getPagePath(pageUrl: string) {
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

function createShortHash(value: string) {
  return createHash("sha1").update(value).digest("hex").slice(0, 16);
}

function createMessageFingerprint(message: string) {
  const normalized = collapseWhitespace(message).toLocaleLowerCase("tr-TR");

  if (!normalized) {
    return "no-message";
  }

  return createShortHash(normalized.slice(0, 240));
}

export interface DuplicateLeadFingerprintInput {
  phone: string;
  serviceType: string;
  pageUrl: string;
  message: string;
}

export function buildDuplicateLeadFingerprint(
  input: DuplicateLeadFingerprintInput
) {
  const phone = collapseWhitespace(input.phone);
  const serviceType = collapseWhitespace(input.serviceType).toLocaleLowerCase("tr-TR");
  const pagePath = getPagePath(input.pageUrl) || "";
  const messageHash = createMessageFingerprint(input.message);

  return {
    phone,
    serviceType,
    pagePath,
    messageHash,
    key: [phone, serviceType, pagePath, messageHash].join("|"),
  };
}

