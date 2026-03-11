import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import {
  buildLeadRecord,
  toSheetPayload,
  type LeadRecord,
} from "@/lib/lead-schema";

const resend = new Resend(process.env.RESEND_API_KEY);

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

function buildEmailText(lead: LeadRecord): string {
  const serviceLabel = serviceLabels[lead.service_type] || lead.service_type || "-";

  return `YENİ TEKLİF TALEBİ
===================
Tarih        : ${lead.timestamp}
Ad Soyad     : ${lead.name}
Telefon      : ${lead.phone}
E-posta      : ${lead.email || "-"}
Şehir        : ${lead.city || "-"}
İlçe         : ${lead.district || "-"}
Hizmet Türü  : ${serviceLabel}
Mekan Türü   : ${lead.location_type || "-"}
Kamera Sayısı: ${lead.camera_count || "-"}
Not          : ${lead.message || "-"}

TRACKING BİLGİSİ
-----------------
Sayfa        : ${lead.page_url || "-"}
Form Kaynağı : ${lead.form_source}
Kaynak       : ${lead.utm_source || "-"}
Araç         : ${lead.utm_medium || "-"}
Kampanya     : ${lead.utm_campaign || "-"}
Terim        : ${lead.utm_term || "-"}
GCLID        : ${lead.gclid || "-"}
`;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Standart lead kaydı oluştur
    const lead = buildLeadRecord(body, "quote_form");

    // Temel validasyon
    if (!lead.name || !lead.phone) {
      return NextResponse.json(
        { success: false, message: "Ad Soyad ve Telefon zorunludur." },
        { status: 400 }
      );
    }

    const serviceLabel = serviceLabels[lead.service_type] || lead.service_type || "Genel Teklif";

    // E-posta + Google Sheets paralel gönderim
    await Promise.all([
      resend.emails.send({
        from: "Güvenlik Servisi <noreply@guvenlikservisi.com>",
        to: "info@guvenlikservisi.com",
        replyTo: lead.email || undefined,
        subject: `Yeni Teklif Talebi: ${serviceLabel} - ${lead.name} - ${lead.city || "-"}`,
        text: buildEmailText(lead),
      }),

      fetch(GOOGLE_SHEETS_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
      { success: false, message: "E-posta gönderilemedi. Lütfen bizi doğrudan arayın." },
      { status: 500 }
    );
  }
}
