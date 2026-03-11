import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  buildLeadRecord,
  toSheetPayload,
  type LeadRecord,
} from "@/lib/lead-schema";

const GOOGLE_SHEETS_WEBHOOK_URL =
  process.env.GOOGLE_SHEETS_WEBHOOK_URL ||
  "https://script.google.com/macros/s/AKfycbzPkLPYKrFWNoojFflh0M8q9S77GSYBAdGzfl2wBs6ANBZ0cg50VI9LQ1BTTskxQKaJ-Q/exec";

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
  hepsi: "Hepsi / Komple Güvenlik",
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

function buildEmailHtml(lead: LeadRecord): string {
  const serviceLabel =
    serviceLabels[lead.service_type] || lead.service_type || "-";

  return `
    <div style="font-family:Arial,sans-serif;color:#111;">
      <h2 style="margin-bottom:16px;">Yeni Teklif Talebi</h2>

      <table style="border-collapse:collapse;font-family:Arial,sans-serif;width:100%;max-width:720px;">
        <tr>
          <td style="padding:6px 12px;font-weight:bold;border:1px solid #ddd;">Tarih</td>
          <td style="padding:6px 12px;border:1px solid #ddd;">${valueOrDash(lead.timestamp)}</td>
        </tr>
        <tr>
          <td style="padding:6px 12px;font-weight:bold;border:1px solid #ddd;">Ad Soyad</td>
          <td style="padding:6px 12px;border:1px solid #ddd;">${valueOrDash(lead.name)}</td>
        </tr>
        <tr>
          <td style="padding:6px 12px;font-weight:bold;border:1px solid #ddd;">Telefon</td>
          <td style="padding:6px 12px;border:1px solid #ddd;">${valueOrDash(lead.phone)}</td>
        </tr>
        <tr>
          <td style="padding:6px 12px;font-weight:bold;border:1px solid #ddd;">E-posta</td>
          <td style="padding:6px 12px;border:1px solid #ddd;">${valueOrDash(lead.email)}</td>
        </tr>
        <tr>
          <td style="padding:6px 12px;font-weight:bold;border:1px solid #ddd;">Şehir</td>
          <td style="padding:6px 12px;border:1px solid #ddd;">${valueOrDash(lead.city)}</td>
        </tr>
        <tr>
          <td style="padding:6px 12px;font-weight:bold;border:1px solid #ddd;">İlçe</td>
          <td style="padding:6px 12px;border:1px solid #ddd;">${valueOrDash(lead.district)}</td>
        </tr>
        <tr>
          <td style="padding:6px 12px;font-weight:bold;border:1px solid #ddd;">Hizmet Türü</td>
          <td style="padding:6px 12px;border:1px solid #ddd;">${valueOrDash(serviceLabel)}</td>
        </tr>
        <tr>
          <td style="padding:6px 12px;font-weight:bold;border:1px solid #ddd;">Mekan Türü</td>
          <td style="padding:6px 12px;border:1px solid #ddd;">${valueOrDash(lead.location_type)}</td>
        </tr>
        <tr>
          <td style="padding:6px 12px;font-weight:bold;border:1px solid #ddd;">Kamera Sayısı</td>
          <td style="padding:6px 12px;border:1px solid #ddd;">${valueOrDash(lead.camera_count)}</td>
        </tr>
        <tr>
          <td style="padding:6px 12px;font-weight:bold;border:1px solid #ddd;">Mesaj</td>
          <td style="padding:6px 12px;border:1px solid #ddd;">${valueOrDash(lead.message)}</td>
        </tr>
      </table>

      <hr style="margin:20px 0;border:none;border-top:1px solid #eee;" />

      <table style="border-collapse:collapse;font-family:Arial,sans-serif;width:100%;max-width:720px;color:#444;">
        <tr>
          <td style="padding:6px 12px;font-weight:bold;border:1px solid #ddd;">Lead ID</td>
          <td style="padding:6px 12px;border:1px solid #ddd;">${valueOrDash(lead.lead_id)}</td>
        </tr>
        <tr>
          <td style="padding:6px 12px;font-weight:bold;border:1px solid #ddd;">Sayfa</td>
          <td style="padding:6px 12px;border:1px solid #ddd;">${valueOrDash(lead.page_url)}</td>
        </tr>
        <tr>
          <td style="padding:6px 12px;font-weight:bold;border:1px solid #ddd;">Form Kaynağı</td>
          <td style="padding:6px 12px;border:1px solid #ddd;">${valueOrDash(lead.form_source)}</td>
        </tr>
        <tr>
          <td style="padding:6px 12px;font-weight:bold;border:1px solid #ddd;">UTM Source</td>
          <td style="padding:6px 12px;border:1px solid #ddd;">${valueOrDash(lead.utm_source)}</td>
        </tr>
        <tr>
          <td style="padding:6px 12px;font-weight:bold;border:1px solid #ddd;">UTM Medium</td>
          <td style="padding:6px 12px;border:1px solid #ddd;">${valueOrDash(lead.utm_medium)}</td>
        </tr>
        <tr>
          <td style="padding:6px 12px;font-weight:bold;border:1px solid #ddd;">UTM Campaign</td>
          <td style="padding:6px 12px;border:1px solid #ddd;">${valueOrDash(lead.utm_campaign)}</td>
        </tr>
        <tr>
          <td style="padding:6px 12px;font-weight:bold;border:1px solid #ddd;">UTM Term</td>
          <td style="padding:6px 12px;border:1px solid #ddd;">${valueOrDash(lead.utm_term)}</td>
        </tr>
        <tr>
          <td style="padding:6px 12px;font-weight:bold;border:1px solid #ddd;">GCLID</td>
          <td style="padding:6px 12px;border:1px solid #ddd;">${valueOrDash(lead.gclid)}</td>
        </tr>
      </table>
    </div>
  `;
}

function createTransporter() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS } = process.env;

  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
    throw new Error("SMTP environment variables are missing.");
  }

  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT || 587),
    secure: Number(SMTP_PORT || 587) === 465,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
  });
}

async function postToGoogleSheets(lead: LeadRecord) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 12000);

  try {
    const response = await fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(toSheetPayload(lead)),
      signal: controller.signal,
      cache: "no-store",
    });

    const text = await response.text();

    if (!response.ok) {
      throw new Error(`Sheets webhook failed: ${response.status} ${text}`);
    }

    return text;
  } finally {
    clearTimeout(timeout);
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const lead = buildLeadRecord(body, "quote_form");

    if (!lead.name || !lead.phone) {
      return NextResponse.json(
        {
          success: false,
          message: "Ad Soyad ve Telefon zorunludur.",
        },
        { status: 400 }
      );
    }

    const transporter = createTransporter();
    const serviceLabel =
      serviceLabels[lead.service_type] || lead.service_type || "Genel Teklif";

    const [emailResult, sheetsResult] = await Promise.allSettled([
      transporter.sendMail({
        from: `"Güvenlik Servisi" <${process.env.SMTP_USER}>`,
        to: "info@guvenlikservisi.com",
        subject: `Yeni Teklif Talebi: ${serviceLabel} - ${lead.name} - ${lead.city || "-"}`,
        html: buildEmailHtml(lead),
        replyTo: lead.email || process.env.SMTP_USER,
      }),
      postToGoogleSheets(lead),
    ]);

    if (emailResult.status === "rejected") {
      console.error("Email send failed:", emailResult.reason);
    }

    if (sheetsResult.status === "rejected") {
      console.error("Sheets webhook failed:", sheetsResult.reason);
    }

    if (
      emailResult.status === "rejected" &&
      sheetsResult.status === "rejected"
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Bir hata oluştu. Lütfen bizi doğrudan arayın.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Talebiniz alındı. En kısa sürede sizi arayacağız.",
    });
  } catch (error) {
    console.error("Quote API error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Bir hata oluştu. Lütfen bizi doğrudan arayın.",
      },
      { status: 500 }
    );
  }
}
