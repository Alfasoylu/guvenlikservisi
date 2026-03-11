import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  buildLeadRecord,
  toSheetPayload,
  validateLeadRecord,
  type LeadRecord,
} from "@/lib/lead-schema";
import { checkDuplicateLead } from "@/lib/check-duplicate-lead";

const GOOGLE_SCRIPT_WEBHOOK_URL =
  process.env.GOOGLE_SCRIPT_WEBHOOK_URL ||
  "https://script.google.com/macros/s/AKfycbwj7IR_6by0dSuRKc-IZsErBpmbcRvKe23Fhxtkh8aiKav1uV_PHSXH65f2H05-SXu0WQ/exec";

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

  const parts = [
    "Yeni Lead",
    serviceLabel,
    lead.name || "İsimsiz",
    lead.city || lead.district || "Konum yok",
  ];

  return truncate(parts.join(" - "), 180);
}

function buildEmailHtml(lead: LeadRecord): string {
  const serviceLabel = getServiceLabel(lead.service_type);

  return `
    <div style="font-family:Arial,sans-serif;color:#111;line-height:1.5;">
      <h2 style="margin:0 0 16px;">Yeni Lead Geldi</h2>

      <table style="border-collapse:collapse;width:100%;max-width:760px;margin-bottom:20px;">
        <tr>
          <td style="padding:8px 12px;border:1px solid #ddd;font-weight:bold;background:#f7f7f7;">Lead ID</td>
          <td style="padding:8px 12px;border:1px solid #ddd;">${valueOrDash(lead.lead_id)}</td>
        </tr>
        <tr>
          <td style="padding:8px 12px;border:1px solid #ddd;font-weight:bold;background:#f7f7f7;">Tarih</td>
          <td style="padding:8px 12px;border:1px solid #ddd;">${valueOrDash(lead.timestamp)}</td>
        </tr>
        <tr>
          <td style="padding:8px 12px;border:1px solid #ddd;font-weight:bold;background:#f7f7f7;">Ad Soyad</td>
          <td style="padding:8px 12px;border:1px solid #ddd;">${valueOrDash(lead.name)}</td>
        </tr>
        <tr>
          <td style="padding:8px 12px;border:1px solid #ddd;font-weight:bold;background:#f7f7f7;">Telefon</td>
          <td style="padding:8px 12px;border:1px solid #ddd;">${valueOrDash(lead.phone)}</td>
        </tr>
        <tr>
          <td style="padding:8px 12px;border:1px solid #ddd;font-weight:bold;background:#f7f7f7;">E-posta</td>
          <td style="padding:8px 12px;border:1px solid #ddd;">${valueOrDash(lead.email)}</td>
        </tr>
        <tr>
          <td style="padding:8px 12px;border:1px solid #ddd;font-weight:bold;background:#f7f7f7;">Şehir</td>
          <td style="padding:8px 12px;border:1px solid #ddd;">${valueOrDash(lead.city)}</td>
        </tr>
        <tr>
          <td style="padding:8px 12px;border:1px solid #ddd;font-weight:bold;background:#f7f7f7;">İlçe</td>
          <td style="padding:8px 12px;border:1px solid #ddd;">${valueOrDash(lead.district)}</td>
        </tr>
        <tr>
          <td style="padding:8px 12px;border:1px solid #ddd;font-weight:bold;background:#f7f7f7;">Hizmet Türü</td>
          <td style="padding:8px 12px;border:1px solid #ddd;">${valueOrDash(serviceLabel)}</td>
        </tr>
        <tr>
          <td style="padding:8px 12px;border:1px solid #ddd;font-weight:bold;background:#f7f7f7;">Mekan Türü</td>
          <td style="padding:8px 12px;border:1px solid #ddd;">${valueOrDash(lead.location_type)}</td>
        </tr>
        <tr>
          <td style="padding:8px 12px;border:1px solid #ddd;font-weight:bold;background:#f7f7f7;">Kamera Sayısı</td>
          <td style="padding:8px 12px;border:1px solid #ddd;">${valueOrDash(lead.camera_count)}</td>
        </tr>
        <tr>
          <td style="padding:8px 12px;border:1px solid #ddd;font-weight:bold;background:#f7f7f7;">Mesaj</td>
          <td style="padding:8px 12px;border:1px solid #ddd;">${valueOrDash(lead.message)}</td>
        </tr>
      </table>

      <table style="border-collapse:collapse;width:100%;max-width:760px;color:#333;">
        <tr>
          <td style="padding:8px 12px;border:1px solid #ddd;font-weight:bold;background:#f7f7f7;">Sayfa URL</td>
          <td style="padding:8px 12px;border:1px solid #ddd;">${valueOrDash(lead.page_url)}</td>
        </tr>
        <tr>
          <td style="padding:8px 12px;border:1px solid #ddd;font-weight:bold;background:#f7f7f7;">Form Kaynağı</td>
          <td style="padding:8px 12px;border:1px solid #ddd;">${valueOrDash(lead.form_source)}</td>
        </tr>
        <tr>
          <td style="padding:8px 12px;border:1px solid #ddd;font-weight:bold;background:#f7f7f7;">UTM Source</td>
          <td style="padding:8px 12px;border:1px solid #ddd;">${valueOrDash(lead.utm_source)}</td>
        </tr>
        <tr>
          <td style="padding:8px 12px;border:1px solid #ddd;font-weight:bold;background:#f7f7f7;">UTM Medium</td>
          <td style="padding:8px 12px;border:1px solid #ddd;">${valueOrDash(lead.utm_medium)}</td>
        </tr>
        <tr>
          <td style="padding:8px 12px;border:1px solid #ddd;font-weight:bold;background:#f7f7f7;">UTM Campaign</td>
          <td style="padding:8px 12px;border:1px solid #ddd;">${valueOrDash(lead.utm_campaign)}</td>
        </tr>
        <tr>
          <td style="padding:8px 12px;border:1px solid #ddd;font-weight:bold;background:#f7f7f7;">UTM Term</td>
          <td style="padding:8px 12px;border:1px solid #ddd;">${valueOrDash(lead.utm_term)}</td>
        </tr>
        <tr>
          <td style="padding:8px 12px;border:1px solid #ddd;font-weight:bold;background:#f7f7f7;">GCLID</td>
          <td style="padding:8px 12px;border:1px solid #ddd;">${valueOrDash(lead.gclid)}</td>
        </tr>
        <tr>
          <td style="padding:8px 12px;border:1px solid #ddd;font-weight:bold;background:#f7f7f7;">Call Status</td>
          <td style="padding:8px 12px;border:1px solid #ddd;">${valueOrDash(lead.call_status)}</td>
        </tr>
        <tr>
          <td style="padding:8px 12px;border:1px solid #ddd;font-weight:bold;background:#f7f7f7;">Lead Status</td>
          <td style="padding:8px 12px;border:1px solid #ddd;">${valueOrDash(lead.lead_status)}</td>
        </tr>
        <tr>
          <td style="padding:8px 12px;border:1px solid #ddd;font-weight:bold;background:#f7f7f7;">Notlar</td>
          <td style="padding:8px 12px;border:1px solid #ddd;">${valueOrDash(lead.notes)}</td>
        </tr>
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
    const response = await fetch(GOOGLE_SCRIPT_WEBHOOK_URL, {
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

function extractClientIp(req: NextRequest): string {
  const forwardedFor = req.headers.get("x-forwarded-for");
  if (forwardedFor) {
    return forwardedFor.split(",")[0]?.trim() || "";
  }

  return req.headers.get("x-real-ip") || "";
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

  try {
    const lead = buildLeadRecord(
      typeof rawBody === "object" && rawBody !== null
        ? (rawBody as Record<string, unknown>)
        : {},
      "istanbul_ip_kamera"
    );

    const duplicateCheck = await checkDuplicateLead(lead.phone);

    if (duplicateCheck.duplicate) {
      const duplicateNote = [
        "duplicate: yes",
        `type: ${duplicateCheck.duplicate_type || "duplicate"}`,
        `matched_lead_id: ${duplicateCheck.matched_lead_id || ""}`,
        `matched_timestamp: ${duplicateCheck.matched_timestamp || ""}`,
        `matched_form_source: ${duplicateCheck.matched_form_source || ""}`,
        `matched_page_url: ${duplicateCheck.matched_page_url || ""}`,
      ].join(" | ");

      lead.notes = lead.notes
        ? `${lead.notes} | ${duplicateNote}`
        : duplicateNote;
    }

    const validation = validateLeadRecord(lead);

    if (!validation.valid) {
      return NextResponse.json(
        {
          success: false,
          message: validation.errors.join(", "),
        },
        { status: 400 }
      );
    }

    const clientIp = extractClientIp(req);
    const userAgent = req.headers.get("user-agent") || "";

    console.log("New lead received:", {
      lead_id: lead.lead_id,
      name: lead.name,
      phone: lead.phone,
      page_url: lead.page_url,
      form_source: lead.form_source,
      client_ip: clientIp,
      user_agent: userAgent,
      notes: lead.notes,
    });

    const [emailResult, sheetsResult] = await Promise.allSettled([
      sendLeadEmail(lead),
      postToGoogleSheets(lead),
    ]);

    if (emailResult.status === "rejected") {
      console.error("Lead email send failed:", emailResult.reason);
    }

    if (sheetsResult.status === "rejected") {
      console.error("Lead sheets sync failed:", sheetsResult.reason);
    }

    if (
      emailResult.status === "rejected" &&
      sheetsResult.status === "rejected"
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Sunucu hatası oluştu.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Lead başarıyla alındı.",
        lead_id: lead.lead_id,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Lead API fatal error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Sunucu hatası oluştu.",
      },
      { status: 500 }
    );
  }
}
