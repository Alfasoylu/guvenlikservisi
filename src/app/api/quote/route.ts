import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  buildLeadRecord,
  toSheetPayload,
  validateLeadRecord,
  type LeadRecord,
  type RawLeadInput,
} from "@/lib/lead-schema";
import { checkDuplicateLead } from "@/lib/check-duplicate-lead";
import { buildLeadLogContext, logLeadError, logLeadWarning } from "@/lib/lead-logging";
import {
  checkSubmissionThrottle,
  findRecentDuplicateLead,
  getClientFingerprint,
  getHoneypotValue,
  registerRecentLeadSubmission,
} from "@/lib/lead-security";

const GOOGLE_SHEETS_WEBHOOK_URL =
  process.env.GOOGLE_SHEETS_WEBHOOK_URL ||
  "https://script.google.com/macros/s/AKfycbwj7IR_6byOdSuRKc-lZsErBpmbcRvKe23Fhxthk8aiKav1uV_PHSXH65f2H05-SXuOWQ/exec";

const NOTIFICATION_EMAIL =
  process.env.LEAD_NOTIFICATION_EMAIL || "info@guvenlikservisi.com";

const REQUEST_TIMEOUT_MS = 12000;

const serviceLabels: Record<string, string> = {
  kamera: "Güvenlik Kamerası",
  alarm: "Alarm Sistemi",
  yangin: "Yangın Alarm Sistemi",
  "kartli-gecis": "Kartlı Geçiş Sistemi",
  "apartman-site": "Apartman / Site Güvenlik",
  isyeri: "İşyeri Güvenlik Sistemi",
  "fabrika-depo": "Fabrika / Depo Güvenlik",
  "bakim-servis": "Bakım / Servis / Uzaktan İzleme",
  komple: "Komple Güvenlik Çözümü",
  hepsi: "Komple Güvenlik Çözümü",
};

function escapeHtml(value: unknown): string {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function valueOrDash(value: unknown): string {
  const safe = String(value ?? "").trim();
  return safe ? escapeHtml(safe) : "-";
}

function truncate(value: string, maxLength: number): string {
  return value.length > maxLength ? value.slice(0, maxLength) : value;
}

function getServiceLabel(serviceType: string): string {
  return serviceLabels[serviceType] || serviceType || "Genel Teklif";
}

function buildSubject(lead: LeadRecord): string {
  const serviceLabel = getServiceLabel(lead.service_type);

  return truncate(
    ["Yeni Teklif Talebi", serviceLabel, lead.name || "İsimsiz", lead.city || "Şehir yok"].join(" - "),
    180
  );
}

function buildEmailHtml(lead: LeadRecord): string {
  const serviceLabel = getServiceLabel(lead.service_type);

  return `
<div style="font-family:Arial,sans-serif;color:#111;line-height:1.5;">
<h2>Yeni Teklif Talebi</h2>
<table border="1" cellpadding="8" cellspacing="0" style="border-collapse:collapse;width:100%;max-width:760px;">
<tr><td><b>Lead ID</b></td><td>${valueOrDash(lead.lead_id)}</td></tr>
<tr><td><b>Tarih</b></td><td>${valueOrDash(lead.timestamp)}</td></tr>
<tr><td><b>Ad Soyad</b></td><td>${valueOrDash(lead.name)}</td></tr>
<tr><td><b>Telefon</b></td><td>${valueOrDash(lead.phone)}</td></tr>
<tr><td><b>E-posta</b></td><td>${valueOrDash(lead.email)}</td></tr>
<tr><td><b>Şehir</b></td><td>${valueOrDash(lead.city)}</td></tr>
<tr><td><b>İlçe</b></td><td>${valueOrDash(lead.district)}</td></tr>
<tr><td><b>Hizmet Türü</b></td><td>${valueOrDash(serviceLabel)}</td></tr>
<tr><td><b>Mekan Türü</b></td><td>${valueOrDash(lead.location_type)}</td></tr>
<tr><td><b>Kamera Sayısı</b></td><td>${valueOrDash(lead.camera_count)}</td></tr>
<tr><td><b>Mesaj</b></td><td>${valueOrDash(lead.message)}</td></tr>
<tr><td><b>Sayfa</b></td><td>${valueOrDash(lead.page_url)}</td></tr>
<tr><td><b>Form Kaynağı</b></td><td>${valueOrDash(lead.form_source)}</td></tr>
<tr><td><b>Notlar</b></td><td>${valueOrDash(lead.notes)}</td></tr>
</table>
</div>
`;
}

function getRequiredEnv(name: "SMTP_HOST" | "SMTP_USER" | "SMTP_PASS"): string {
  const value = process.env[name];
  if (!value) throw new Error(`${name} missing`);
  return value;
}

function createTransporter() {
  return nodemailer.createTransport({
    host: getRequiredEnv("SMTP_HOST"),
    port: Number(process.env.SMTP_PORT || 587),
    secure: Number(process.env.SMTP_PORT || 587) === 465,
    auth: {
      user: getRequiredEnv("SMTP_USER"),
      pass: getRequiredEnv("SMTP_PASS"),
    },
  });
}

async function postToGoogleSheets(lead: LeadRecord) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);

  try {
    const response = await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toSheetPayload(lead)),
      cache: "no-store",
      signal: controller.signal,
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Sheets error ${response.status} ${text}`);
    }
  } finally {
    clearTimeout(timer);
  }
}

async function sendLeadEmail(lead: LeadRecord) {
  const transporter = createTransporter();

  await transporter.sendMail({
    from: `"Güvenlik Servisi" <${process.env.SMTP_USER}>`,
    to: NOTIFICATION_EMAIL,
    replyTo: lead.email || process.env.SMTP_USER,
    subject: buildSubject(lead),
    html: buildEmailHtml(lead),
  });
}

function createQuietSuccessResponse(message = "Talebiniz alındı. Ekibimiz kısa süre içinde sizinle iletişime geçecek.") {
  return NextResponse.json(
    {
      success: true,
      ignored: true,
      message,
    },
    { status: 200 }
  );
}

export async function POST(req: NextRequest) {
  let rawBody: RawLeadInput;

  try {
    rawBody = (await req.json()) as RawLeadInput;
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Geçersiz istek verisi.",
      },
      { status: 400 }
    );
  }

  if (getHoneypotValue(rawBody as Record<string, unknown>)) {
    logLeadWarning("honeypot_blocked", {
      page_url: rawBody.page_url || rawBody.page || "",
      form_source: rawBody.form_source || "quote_form",
    });

    return createQuietSuccessResponse();
  }

  const lead = buildLeadRecord(rawBody, "quote_form");
  const clientFingerprint = getClientFingerprint(req, lead.phone);
  const throttle = checkSubmissionThrottle({
    clientKey: clientFingerprint.clientKey,
    phone: lead.phone,
    pageUrl: lead.page_url,
  });

  if (!throttle.allowed) {
    logLeadWarning("submission_throttled", buildLeadLogContext(lead, {
      reason: throttle.reason,
      retry_after_seconds: throttle.retryAfterSeconds,
      client_ip: clientFingerprint.clientIp,
    }));

    return NextResponse.json(
      {
        success: false,
        message:
          "Çok hızlı tekrar gönderim algılandı. Lütfen kısa bir süre bekleyip tekrar deneyin.",
      },
      { status: 429 }
    );
  }

  const validation = validateLeadRecord(lead, rawBody);

  if (!validation.valid) {
    logLeadWarning("validation_failed", buildLeadLogContext(lead, {
      errors: validation.errors,
    }));

    return NextResponse.json(
      { success: false, message: validation.errors[0] },
      { status: 400 }
    );
  }

  const localDuplicate = findRecentDuplicateLead({
    phone: lead.phone,
    serviceType: lead.service_type,
    pageUrl: lead.page_url,
    message: lead.message,
  });

  if (localDuplicate.duplicate) {
    logLeadWarning("duplicate_suppressed", buildLeadLogContext(lead, {
      matched_lead_id: localDuplicate.leadId,
    }));

    return NextResponse.json(
      {
        success: true,
        duplicate: true,
        message: "Talebiniz zaten alındı. Ekibimiz kısa süre içinde sizinle iletişime geçecek.",
      },
      { status: 200 }
    );
  }

  const duplicateCheck = await checkDuplicateLead(lead.phone);

  if (duplicateCheck.duplicate) {
    lead.notes = [
      lead.notes,
      "duplicate:yes",
      `type:${duplicateCheck.duplicate_type}`,
      `lead:${duplicateCheck.matched_lead_id}`,
    ]
      .filter(Boolean)
      .join(" | ");
  }

  const [emailResult, sheetsResult] = await Promise.allSettled([
    sendLeadEmail(lead),
    postToGoogleSheets(lead),
  ]);

  if (emailResult.status === "rejected") {
    logLeadError(
      "email_send_failed",
      buildLeadLogContext(lead, {
        client_ip: clientFingerprint.clientIp,
      }),
      emailResult.reason
    );
  }

  if (sheetsResult.status === "rejected") {
    logLeadError(
      "sheets_sync_failed",
      buildLeadLogContext(lead, {
        client_ip: clientFingerprint.clientIp,
      }),
      sheetsResult.reason
    );
  }

  if (emailResult.status === "rejected" && sheetsResult.status === "rejected") {
    return NextResponse.json(
      {
        success: false,
        message: "Talebiniz şu anda işlenemedi. Lütfen kısa süre sonra tekrar deneyin.",
      },
      { status: 500 }
    );
  }

  registerRecentLeadSubmission({
    leadId: lead.lead_id,
    phone: lead.phone,
    serviceType: lead.service_type,
    pageUrl: lead.page_url,
    message: lead.message,
  });

  return NextResponse.json({
    success: true,
    lead_id: lead.lead_id,
    message: "Talebiniz alındı. Ekibimiz kısa süre içinde sizinle iletişime geçecek.",
  });
}
