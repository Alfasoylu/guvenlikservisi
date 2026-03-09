import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      phone,
      district,
      placeType,
      cameraCount,
      message,
      page,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_term,
      gclid,
    } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { success: false, message: "Eksik alanlar var." },
        { status: 400 }
      );
    }

    const createdAt = new Date().toLocaleString("tr-TR", {
      timeZone: "Europe/Istanbul",
    });

    await resend.emails.send({
      from: "Güvenlik Servisi <onboarding@resend.dev>",
      to: ["destek@soyluelektronik.com"],
      subject: "Yeni IP Kamera Montaj Lead'i",
      html: `
        <h2>Yeni Lead Geldi</h2>
        <p><strong>Ad Soyad:</strong> ${name}</p>
        <p><strong>Telefon:</strong> ${phone}</p>
        <p><strong>İlçe:</strong> ${district || "-"}</p>
        <p><strong>Mekan Türü:</strong> ${placeType || "-"}</p>
        <p><strong>Kamera Sayısı:</strong> ${cameraCount || "-"}</p>
        <p><strong>Mesaj:</strong> ${message || "-"}</p>
        <hr />
        <p><strong>Sayfa:</strong> ${page || "-"}</p>
        <p><strong>UTM Source:</strong> ${utm_source || "-"}</p>
        <p><strong>UTM Medium:</strong> ${utm_medium || "-"}</p>
        <p><strong>UTM Campaign:</strong> ${utm_campaign || "-"}</p>
        <p><strong>UTM Term:</strong> ${utm_term || "-"}</p>
        <p><strong>GCLID:</strong> ${gclid || "-"}</p>
        <p><strong>Tarih:</strong> ${createdAt}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Lead gönderim hatası:", error);

    return NextResponse.json(
      { success: false, message: "Sunucu hatası oluştu." },
      { status: 500 }
    );
  }
}
