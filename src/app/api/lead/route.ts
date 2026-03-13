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
  return serviceLabels[serviceType] || serviceType || "IP Kamera";
}

function buildSubject(lead: LeadRecord): string {
  const serviceLabel = getServiceLabel(lead.service_type);

  return truncate(
    ["Yeni Lead", serviceLabel, lead.name || "İsimsiz", lead.city || lead.district || "Konum yok"].join(" - "),
    180
  );
}

function buildEmailHtml(lead: LeadRecord): string {
  const serviceLabel = getServiceLabel(lead.service_type);

  return `
    <div style="font-family:Arial,sans-serif;color:#111;line-height:1.5;">
      <h2 style="margin:0 0 16px;">Yeni Lead Geldi</h2>
      <table style="border-collapse:collapse;width:100%;max-width:760px;margin-bottom:20px;">
        <tr><td style="padding:8px 12px;border:1px solid #ddd;font-weight:bold;background:#f7f7f7;">Lead ID</td><td style="padding:8px 12px;border:1px solid #ddd;">${valueOrDash(lead.lead_id)}</td></tr>
        <tr><td style="padding:8px 12px;border:1px solid #ddd;font-weight:bold;background:#f7f7f7;">Tarih</td><td style="padding:8px 12px;border:1px solid #ddd;">${valueOrDash(lead.timestamp)}</td></tr>
        <tr><td style="padding:8px 12px;border:1px solid #ddd;font-weight:bold;background:#f7f7f7;">Ad Soyad</td><td style="padding:8px 12px;border:1px solid #ddd;">${valueOrDash(lead.name)}</td></tr>
        <tr><td style="padding:8px 12px;border:1px solid #ddd;font-weight:bold;background:#f7f7f7;">Telefon</td><td style="padding:8px 12px;border:1px solid #ddd;">${valueOrDash(lead.phone)}</td></tr>
        <tr><td style="padding:8px 12px;border:1px solid #ddd;font-weight:bold;background:#f7f7f7;">E-posta</td><td style="padding:8px 12px;border:1px solid #ddd;">${valueOrDash(lead.email)}</td></tr>
        <tr><td style="padding:8px 12px;border:1px solid #ddd;font-weight:bold;background:#f7f7f7;">Şehir</td><td style="padding:8px 12px;border:1px solid #ddd;">${valueOrDash(lead.city)}</td></tr>
        <tr><td style="padding:8px 12px;border:1px solid #ddd;font-weight:bold;background:#f7f7f7;">İlçe</td><td style="padding:8px 12px;border:1px solid #ddd;">${valueOrDash(lead.district)}</td></tr>
        <tr><td style="padding:8px 12px;border:1px solid #ddd;font-weight:bold;background:#f7f7f7;">Hizmet Türü</td><td style="padding:8px 12px;border:1px solid #ddd;">${valueOrDash(serviceLabel)}</td></tr>
        <tr><td style="padding:8px 12px;border:1px solid #ddd;font-weight:bold;background:#f7f7f7;">Mekan Türü</td><td style="padding:8px 12px;border:1px solid #ddd;">${valueOrDash(lead.location_type)}</td></tr>
        <tr><td style="padding:8px 12px;border:1px solid #ddd;font-weight:bold;background:#f7f7f7;">Kamera Sayısı</td><td style="padding:8px 12px;border:1px solid #ddd;">${valueOrDash(lead.camera_count)}</td></tr>
        <tr><td style="padding:8px 12px;border:1px solid #ddd;font-weight:bold;background:#f7f7f7;">Mesaj</td><td style="padding:8px 12px;border:1px solid #ddd;">${valueOrDash(lead.message)}</td></tr>
      </table>
      <table style="border-collapse:collapse;width:100%;max-width:760px;color:#333;">
        <tr><td style="padding:8px 12px;border:1px solid #ddd;font-weight:bold;background:#f7f7f7;">Sayfa URL</td><td style="padding:8px 12px;border:1px solid #ddd;">${valueOrDash(lead.page_url)}</td></tr>
        <tr><td style="padding:8px 12px;border:1px solid #ddd;font-weight:bold;background:#f7f7f7;">Form Kaynağı</td><td style="padding:8px 12px;border:1px solid #ddd;">${valueOrDash(lead.form_source)}</td></tr>
        <tr><td style="padding:8px 12px;border:1px solid #ddd;font-weight:bold;background:#f7f7f7;">UTM Source</td><td style="padding:8px 12px;border:1px solid #ddd;">${valueOrDash(lead.utm_source)}</td></tr>
        <tr><td style="padding:8px 12px;border:1px solid #ddd;font-weight:bold;background:#f7f7f7;">UTM Medium</td><td style="padding:8px 12px;border:1px solid #ddd;">${valueOrDash(lead.utm_medium)}</td></tr>
        <tr><td style="padding:8px 12px;border:1px solid #ddd;font-weight:bold;background:#f7f7f7;">UTM Campaign</td><td style="padding:8px 12px;border:1px solid #ddd;">${valueOrDash(lead.utm_campaign)}</td></tr>
        <tr><td style="padding:8px 12px;border:1px solid #ddd;font-weight:bold;background:#f7f7f7;">UTM Term</td><td style="padding:8px 12px;border:1px solid #ddd;">${valueOrDash(lead.utm_term)}</td></tr>
        <tr><td style="padding:8px 12px;border:1px solid #ddd;font-weight:bold;background:#f7f7f7;">GCLID</td><td style="padding:8px 12px;border:1px solid #ddd;">${valueOrDash(lead.gclid)}</td></tr>
        <tr><td style="padding:8px 12px;border:1px solid #ddd;font-weight:bold;background:#f7f7f7;">Call Status</td><td style="padding:8px 12px;border:1px solid #ddd;">${valueOrDash(lead.call_status)}</td></tr>
        <tr><td style="padding:8px 12px;border:1px solid #ddd;font-weight:bold;background:#f7f7f7;">Lead Status</td><td style="padding:8px 12px;border:1px solid #ddd;">${valueOrDash(lead.lead_status)}</td></tr>
        <tr><td style="padding:8px 12px;border:1px solid #ddd;font-weight:bold;background:#f7f7f7;">Notlar</td><td style="padding:8px 12px;border:1px solid #ddd;">${valueOrDash(lead.notes)}</td></tr>
      </table>
    </div>
  `;
}

function getRequiredEnv(name: "SMTP_HOST" | "SMTP_USER" | "SMTP_PASS"): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`${name} environment variable is missing.`);
  }
  return value;
}

function createTransporter() {
  const host = getRequiredEnv("SMTP_HOST");
  const user = getRequiredEnv("SMTP_USER");
  const pass = getRequiredEnv("SMTP_PASS");
  const port = Number(process.env.SMTP_PORT || 587);

  return nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });
}

async function postToGoogleSheets(lead: LeadRecord): Promise<void> {
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

    const text = await response.text();

    if (!response.ok) {
      throw new Error(`Sheets webhook failed: ${response.status} ${text}`);
    }
  } finally {
    clearTimeout(timer);
  }
}

async function sendLeadEmail(lead: LeadRecord): Promise<void> {
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
  let rawBody: unknown = null;

  try {
    rawBody = await req.json();
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Geçersiz istek verisi.",
      },
      { status: 400 }
    );
  }

  const safeRawBody =
    typeof rawBody === "object" && rawBody !== null ? (rawBody as RawLeadInput) : {};

  if (getHoneypotValue(safeRawBody as Record<string, unknown>)) {
    logLeadWarning("honeypot_blocked", {
      page_url: safeRawBody.page_url || safeRawBody.page || "",
      form_source: safeRawBody.form_source || "istanbul_ip_kamera",
    });

    return createQuietSuccessResponse();
  }

  try {
    const lead = buildLeadRecord(safeRawBody, "istanbul_ip_kamera");
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

    const validation = validateLeadRecord(lead, safeRawBody);

    if (!validation.valid) {
      logLeadWarning("validation_failed", buildLeadLogContext(lead, {
        errors: validation.errors,
      }));

      return NextResponse.json(
        {
          success: false,
          message: validation.errors[0],
        },
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
      const duplicateNote = [
        lead.notes,
        "duplicate:yes",
        `type:${duplicateCheck.duplicate_type || "duplicate"}`,
        `matched_lead_id:${duplicateCheck.matched_lead_id || ""}`,
        `matched_timestamp:${duplicateCheck.matched_timestamp || ""}`,
        `matched_form_source:${duplicateCheck.matched_form_source || ""}`,
        `matched_page_url:${duplicateCheck.matched_page_url || ""}`,
      ]
        .filter(Boolean)
        .join(" | ");

      lead.notes = duplicateNote;
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

    if (
      emailResult.status === "rejected" &&
      sheetsResult.status === "rejected"
    ) {
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

    return NextResponse.json(
      {
        success: true,
        message: "Lead başarıyla alındı.",
        lead_id: lead.lead_id,
      },
      { status: 200 }
    );
  } catch (error) {
    logLeadError("lead_api_fatal", {
      page_url: safeRawBody.page_url || safeRawBody.page || "",
      form_source: safeRawBody.form_source || "istanbul_ip_kamera",
    }, error);

    return NextResponse.json(
      {
        success: false,
        message: "Sunucu hatası oluştu.",
      },
      { status: 500 }
    );
  }
}
