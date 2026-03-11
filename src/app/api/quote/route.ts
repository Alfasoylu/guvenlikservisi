import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import {
  buildLeadRecord,
  toSheetPayload,
  type LeadRecord,
} from "@/lib/lead-schema";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const GOOGLE_SHEETS_WEBHOOK_URL =
  "https://script.google.com/macros/s/AKfycbzIdSeqPEF2IGNF1LoNaNv65ZUqwnIqE-uEDlzbPEz2vWXol_u-MSDMZMC_CcODd6wUdw/exec";

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

function buildEmailHtml(lead: LeadRecord): string {
  const serviceLabel =
    serviceLabels[lead.service_type] || lead.service_type || "-";

  return `
    <h2>Yeni Teklif Talebi</h2>

    <table style="border-collapse:collapse;font-family:sans-serif;">
      <tr>
        <td style="padding:4px 12px;font-weight:bold;">Tarih</td>
        <td style="padding:4px 12px;">${lead.created_at}</td>
      </tr>
      <tr>
        <td style="padding:4px 12px;font-weight:bold;">Ad Soyad</td>
        <td style="padding:4px 12px;">${lead.customer_name || "-"}</td>
      </tr>
      <tr>
        <td style="padding:4px 12px;font-weight:bold;">Telefon</td>
        <td style="padding:4px 12px;">${lead.phone_normalized || lead.phone_raw || "-"}</td>
      </tr>
      <tr>
        <td style="padding:4px 12px;font-weight:bold;">E-posta</td>
        <td style="padding:4px 12px;">${lead.email || "-"}</td>
      </tr>
      <tr>
        <td style="padding:4px 12px;font-weight:bold;">Şehir</td>
        <td style="padding:4px 12px;">${lead.city || "-"}</td>
      </tr>
      <tr>
        <td style="padding:4px 12px;font-weight:bold;">İlçe</td>
        <td style="padding:4px 12px;">${lead.district || "-"}</td>
      </tr>
      <tr>
        <td style="padding:4px 12px;font-weight:bold;">Hizmet Türü</td>
        <td style="padding:4px 12px;">${serviceLabel}</td>
      </tr>
      <tr>
        <td style="padding:4px 12px;font-weight:bold;">Mesaj</td>
        <td style="padding:4px 12px;">${lead.message || "-"}</td>
      </tr>
    </table>

    <hr style="margin:16px 0;" />

    <table style="border-collapse:collapse;font-family:sans-serif;color:#666;">
      <tr>
        <td style="padding:4px 12px;font-weight:bold;">Lead ID</td>
        <td style="padding:4px 12px;">${lead.lead_id}</td>
      </tr>
      <tr>
        <td style="padding:4px 12px;font-weight:bold;">Sayfa</td>
        <td style="padding:4px 12px;">${lead.source_page || "-"}</td>
      </tr>
      <tr>
        <td style="padding:4px 12px;font-weight:bold;">Landing Slug</td>
        <td style="padding:4px 12px;">${lead.landing_slug || "-"}</td>
      </tr>
      <tr>
        <td style="padding:4px 12px;font-weight:bold;">Kaynak</td>
        <td style="padding:4px 12px;">${lead.source_type || "-"}</td>
      </tr>
      <tr>
        <td style="padding:4px 12px;font-weight:bold;">UTM Source</td>
        <td style="padding:4px 12px;">${lead.utm_source || "-"}</td>
      </tr>
      <tr>
        <td style="padding:4px 12px;font-weight:bold;">UTM Medium</td>
        <td style="padding:4px 12px;">${lead.utm_medium || "-"}</td>
      </tr>
      <tr>
        <td style="padding:4px 12px;font-weight:bold;">UTM Campaign</td>
        <td style="padding:4px 12px;">${lead.utm_campaign || "-"}</td>
      </tr>
      <tr>
        <td style="padding:4px 12px;font-weight:bold;">UTM Term</td>
        <td style="padding:4px 12px;">${lead.utm_term || "-"}</td>
      </tr>
      <tr>
        <td style="padding:4px 12px;font-weight:bold;">UTM Content</td>
        <td style="padding:4px 12px;">${lead.utm_content || "-"}</td>
      </tr>
      <tr>
        <td style="padding:4px 12px;font-weight:bold;">GCLID</td>
        <td style="padding:4px 12px;">${lead.gclid || "-"}</td>
      </tr>
      <tr>
        <td style="padding:4px 12px;font-weight:bold;">FBCLID</td>
        <td style="padding:4px 12px;">${lead.fbclid || "-"}</td>
      </tr>
      <tr>
        <td style="padding:4px 12px;font-weight:bold;">Cihaz</td>
        <td style="padding:4px 12px;">${lead.device_type || "-"}</td>
      </tr>
      <tr>
        <td style="padding:4px 12px;font-weight:bold;">Referrer</td>
        <td style="padding:4px 12px;">${lead.referrer || "-"}</td>
      </tr>
    </table>
  `;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const lead = buildLeadRecord(body, "quote_form");

    if (!lead.customer_name || !lead.phone_raw) {
      return NextResponse.json(
        {
          success: false,
          message: "Ad Soyad ve Telefon zorunludur.",
        },
        { status: 400 }
      );
    }

    const serviceLabel =
      serviceLabels[lead.service_type] ||
      lead.service_type ||
      "Genel Teklif";

    await Promise.all([
      transporter.sendMail({
        from: `"Güvenlik Servisi" <${process.env.SMTP_USER}>`,
        to: "info@guvenlikservisi.com",
        subject: `Yeni Teklif Talebi: ${serviceLabel} - ${lead.customer_name} - ${lead.city || "-"}`,
        html: buildEmailHtml(lead),
      }),

      fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(toSheetPayload(lead)),
      }),
    ]);

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
