import type { LeadRecord } from "@/lib/lead-schema";
import { getPagePath } from "@/lib/lead-security";

function maskPhone(phone: string) {
  if (!phone) return "";
  return `***${phone.slice(-4)}`;
}

function normalizeError(error: unknown) {
  if (error instanceof Error) {
    return {
      name: error.name,
      message: error.message,
    };
  }

  return {
    message: String(error),
  };
}

export function buildLeadLogContext(
  lead: Pick<
    LeadRecord,
    "lead_id" | "form_source" | "page_url" | "service_type" | "city" | "phone"
  >,
  extras?: Record<string, unknown>
) {
  return {
    lead_id: lead.lead_id,
    form_source: lead.form_source,
    page_path: getPagePath(lead.page_url),
    service_type: lead.service_type,
    city: lead.city,
    phone: maskPhone(lead.phone),
    ...extras,
  };
}

export function logLeadWarning(event: string, context: Record<string, unknown>) {
  console.warn(`[lead] ${event}`, context);
}

export function logLeadError(event: string, context: Record<string, unknown>, error?: unknown) {
  console.error(`[lead] ${event}`, {
    ...context,
    ...(error ? { error: normalizeError(error) } : {}),
  });
}
