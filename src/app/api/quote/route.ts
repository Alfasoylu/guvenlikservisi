import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  buildLeadRecord,
  toSheetPayload,
  validateLeadRecord,
  type LeadRecord,
} from "@/lib/lead-schema";
import { checkDuplicateLead } from "@/lib/check-duplicate-lead";

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

  const parts = [
    "Yeni Teklif Talebi",
    serviceLabel,
    lead.name || "İsimsiz",
    lead.city || "Şehir yok",
  ];

  return truncate(parts.join(" - "), 180);
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
    secure: false,
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

function extractClientIp(req: NextRequest) {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) return forwarded.split(",")[0].trim();
  return req.headers.get("x-real-ip") || "";
}

export async function POST(req: NextRequest) {
  try {
    const rawBody = await req.json();

    const lead = buildLeadRecord(rawBody, "quote_form");

    const duplicateCheck = await checkDuplicateLead(lead.phone);

    if (duplicateCheck.duplicate) {
      lead.notes = [
        "duplicate: yes",
        `type:${duplicateCheck.duplicate_type}`,
        `lead:${duplicateCheck.matched_lead_id}`,
      ].join(" | ");
    }

    const validation = validateLeadRecord(lead);

    if (!validation.valid) {
      return NextResponse.json(
        { success: false, message: validation.errors.join(", ") },
        { status: 400 }
      );
    }

    const clientIp = extractClientIp(req);

    console.log("lead received", {
      lead_id: lead.lead_id,
      phone: lead.phone,
      ip: clientIp,
    });

    const [emailResult, sheetsResult] = await Promise.allSettled([
      sendLeadEmail(lead),
      postToGoogleSheets(lead),
    ]);

    if (emailResult.status === "rejected")
      console.error(emailResult.reason);

    if (sheetsResult.status === "rejected")
      console.error(sheetsResult.reason);

    return NextResponse.json({
      success: true,
      lead_id: lead.lead_id,
    });
  } catch (error) {
    console.error("lead api error", error);

    return NextResponse.json(
      {
        success: false,
        message: "Sunucu hatası",
      },
      { status: 500 }
    );
  }
}
