import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT || 587),
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

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

    await transporter.sendMail({
      from: `"Güvenlik Servisi" <${process.env.SMTP_USER}>`,
      to: "info@guvenlikservisi.com",
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
