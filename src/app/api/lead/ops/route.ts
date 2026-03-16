import { NextRequest, NextResponse } from "next/server";
import {
  normalizeLeadOpsUpdate,
  type LeadOpsUpdateInput,
} from "@/lib/lead-ops";

const GOOGLE_SHEETS_OPS_WEBHOOK_URL =
  process.env.GOOGLE_SHEETS_OPS_WEBHOOK_URL ||
  process.env.GOOGLE_SHEETS_WEBHOOK_URL ||
  process.env.GOOGLE_SCRIPT_WEBHOOK_URL;

export async function POST(req: NextRequest) {
  let rawBody: LeadOpsUpdateInput;

  try {
    rawBody = (await req.json()) as LeadOpsUpdateInput;
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Geçersiz istek verisi.",
      },
      { status: 400 }
    );
  }

  const normalized = normalizeLeadOpsUpdate(rawBody);

  if (!normalized.valid) {
    return NextResponse.json(
      {
        success: false,
        message: normalized.errors[0],
        errors: normalized.errors,
      },
      { status: 400 }
    );
  }

  if (!GOOGLE_SHEETS_OPS_WEBHOOK_URL) {
    return NextResponse.json(
      {
        success: false,
        message: "GOOGLE_SHEETS_OPS_WEBHOOK_URL tanımlı değil.",
      },
      { status: 503 }
    );
  }

  try {
    const response = await fetch(GOOGLE_SHEETS_OPS_WEBHOOK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        action: "update_lead",
        ...normalized.data,
      }),
      cache: "no-store",
    });

    const result = (await response.json().catch(() => null)) as
      | {
          success?: boolean;
          ok?: boolean;
          updated?: boolean;
          error?: string;
        }
      | null;

    if (!response.ok || result?.success === false || result?.ok === false) {
      return NextResponse.json(
        {
          success: false,
          message: result?.error || "Lead operasyon güncellemesi başarısız.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      updated: result?.updated ?? true,
      lead_id: normalized.data.lead_id,
    });
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message:
          error instanceof Error
            ? error.message
            : "Lead operasyon güncellemesi başarısız.",
      },
      { status: 502 }
    );
  }
}
