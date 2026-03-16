import {
  CALL_STATUSES,
  LEAD_STATUSES,
  type CallStatus,
  type LeadStatus,
} from "@/lib/lead-schema";

export interface LeadOpsUpdateInput {
  lead_id?: unknown;
  call_status?: unknown;
  lead_status?: unknown;
  assigned_to?: unknown;
  notes_append?: unknown;
  first_call_at?: unknown;
  last_action_at?: unknown;
}

export interface NormalizedLeadOpsUpdate {
  lead_id: string;
  call_status?: CallStatus;
  lead_status?: LeadStatus;
  assigned_to?: string;
  notes_append?: string;
}

function cleanString(value: unknown): string {
  return String(value ?? "").replace(/\s+/g, " ").trim();
}

function isValidIsoDateTime(value: string) {
  if (!value) {
    return false;
  }

  const parsed = Date.parse(value);
  return Number.isFinite(parsed);
}

function normalizeOptionalStatus<T extends string>(
  value: unknown,
  allowed: readonly T[]
): T | undefined {
  const normalized = cleanString(value).toLocaleLowerCase("tr-TR") as T;

  if (!normalized) {
    return undefined;
  }

  return allowed.includes(normalized) ? normalized : undefined;
}

function buildOpsNotes(input: LeadOpsUpdateInput) {
  const notes = [
    cleanString(input.notes_append),
    isValidIsoDateTime(cleanString(input.first_call_at))
      ? `first_call_at:${cleanString(input.first_call_at)}`
      : "",
    isValidIsoDateTime(cleanString(input.last_action_at))
      ? `last_action_at:${cleanString(input.last_action_at)}`
      : "",
  ].filter(Boolean);

  return notes.join(" | ");
}

export function normalizeLeadOpsUpdate(
  input: LeadOpsUpdateInput
): { valid: true; data: NormalizedLeadOpsUpdate } | { valid: false; errors: string[] } {
  const leadId = cleanString(input.lead_id);
  const callStatus = normalizeOptionalStatus(input.call_status, CALL_STATUSES);
  const leadStatus = normalizeOptionalStatus(input.lead_status, LEAD_STATUSES);
  const assignedTo = cleanString(input.assigned_to);
  const notesAppend = buildOpsNotes(input);
  const errors: string[] = [];

  if (!leadId) {
    errors.push("lead_id zorunludur.");
  }

  if (cleanString(input.call_status) && !callStatus) {
    errors.push("Geçersiz call_status değeri.");
  }

  if (cleanString(input.lead_status) && !leadStatus) {
    errors.push("Geçersiz lead_status değeri.");
  }

  if (
    !callStatus &&
    !leadStatus &&
    !assignedTo &&
    !notesAppend
  ) {
    errors.push("Güncellenecek en az bir operasyon alanı gönderilmelidir.");
  }

  if (cleanString(input.first_call_at) && !isValidIsoDateTime(cleanString(input.first_call_at))) {
    errors.push("Geçersiz first_call_at değeri.");
  }

  if (cleanString(input.last_action_at) && !isValidIsoDateTime(cleanString(input.last_action_at))) {
    errors.push("Geçersiz last_action_at değeri.");
  }

  if (errors.length > 0) {
    return {
      valid: false,
      errors,
    };
  }

  return {
    valid: true,
    data: {
      lead_id: leadId,
      ...(callStatus ? { call_status: callStatus } : {}),
      ...(leadStatus ? { lead_status: leadStatus } : {}),
      ...(assignedTo ? { assigned_to: assignedTo } : {}),
      ...(notesAppend ? { notes_append: notesAppend } : {}),
    },
  };
}
