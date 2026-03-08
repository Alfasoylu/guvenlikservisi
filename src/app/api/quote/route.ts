import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    const {
      name,
      phone,
      email,
      city,
      service_type,
      location_type,
      note,
      utm_source,
      utm_medium,
      utm_campaign,
      page_url,
      timestamp,
    } = data;

    if (!name?.trim() || !phone?.trim()) {
      return NextResponse.json(
        { success: false, message: "Ad Soyad ve Telefon zorunludur." },
        { status: 400 }
      );
    }

    const formattedTime = timestamp
      ? new Date(timestamp).toLocaleString("tr-TR", { timeZone: "Europe/Istanbul" })
      : new Date().toLocaleString("tr-TR", { timeZone: "Europe/Istanbul" });

    const serviceLabels: Record<string, string> = {
      kamera: "Güvenlik Kamerası",
      alarm: "Alarm Sistemi",
      yangin: "Yangın Alarm Sistemi",
      "kartli-gecis": "Kartlı Geçiş Sistemi",
      hepsi: "Hepsi / Komple Güvenlik",
    };

    const serviceLabel = serviceLabels[service_type] || service_type || "-";

    await resend.emails.send({
      from: "Güvenlik Servisi <noreply@guvenlikservisi.com>",
      to: "info@guvenlikservisi.com",
      replyTo: email || undefined,
      subject: `Yeni Teklif Talebi: ${serviceLabel} - ${name} - ${city || "-"}`,
      text: `YENİ TEKLİF TALEBİ
===================
Ad Soyad     : ${name}
Telefon      : ${phone}
E-posta      : ${email || "-"}
Şehir        : ${city || "-"}
Hizmet Türü  : ${serviceLabel}
Mekan Türü   : ${location_type || "-"}
Not          : ${note || "-"}

TRACKING BİLGİSİ
-----------------
Kaynak       : ${utm_source || "-"}
Araç         : ${utm_medium || "-"}
Kampanya     : ${utm_campaign || "-"}
Sayfa        : ${page_url || "-"}
Zaman        : ${formattedTime}
`,
    });

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
