import { NextResponse } from "next/server";

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

    console.log("Yeni lead geldi:", {
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
      createdAt: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Sunucu hatası oluştu." },
      { status: 500 }
    );
  }
}
