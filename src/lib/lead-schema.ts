/**
 * BL-02 — Lead kolon standardı ve veri şeması
 *
 * Bu dosya tüm lead verisi için tek kaynak görevi görür.
 * Hem /api/lead hem /api/quote bu şemayı kullanır.
 * Google Sheets webhook'a giden veri bu şemaya göre normalize edilir.
 */

import { getPageType } from "@/lib/lead-security";
import { isValidTurkishPhone, normalizeTurkishPhone } from "@/lib/phone";

export const CALL_STATUSES = [
  "aranmadi",
  "arandi",
  "ulasilamadi",
  "tekrar_ara",
  "randevu",
  "kapandi",
] as const;

export type CallStatus = (typeof CALL_STATUSES)[number];

export const LEAD_STATUSES = [
  "yeni",
  "teklif_verildi",
  "kazanildi",
  "kaybedildi",
  "spam",
] as const;

export type LeadStatus = (typeof LEAD_STATUSES)[number];

export const FORM_SOURCES = [
  "quote_form",
  "istanbul_ip_kamera",
  "istanbul_kamera_kurulum",
  "istanbul_kamera_bakim",
  "istanbul_kamera_teknik_servis",
  "istanbul_alarm",
  "istanbul_yangin_alarm",
  "istanbul_kartli_gecis",
  "istanbul_lead_form",
  "landing_page",
  "landing_quote_form",
  "alarm_landing_page",
  "whatsapp",
  "phone_call",
  "manual",
] as const;

export type FormSource = (typeof FORM_SOURCES)[number] | string;

export interface LeadRecord {
  lead_id: string;
  timestamp: string;
  form_source: FormSource;
  page_url: string;
  service_type: string;
  city: string;
  district: string;
  name: string;
  phone: string;
  email: string;
  location_type: string;
  camera_count: string;
  message: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  gclid: string;
  call_status: CallStatus;
  lead_status: LeadStatus;
  assigned_to: string;
  notes: string;
}

export const SHEET_COLUMNS: (keyof LeadRecord)[] = [
  "lead_id",
  "timestamp",
  "form_source",
  "page_url",
  "service_type",
  "city",
  "district",
  "name",
  "phone",
  "email",
  "location_type",
  "camera_count",
  "message",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "gclid",
  "call_status",
  "lead_status",
  "assigned_to",
  "notes",
];

export interface RawLeadInput {
  name?: string;
  full_name?: string;
  customer_name?: string;

  phone?: string;
  gsm?: string;
  mobile?: string;
  telephone?: string;

  email?: string;
  mail?: string;

  city?: string;
  district?: string;
  il?: string;
  ilce?: string;

  service_type?: string;
  service?: string;
  hizmet?: string;

  location_type?: string;
  placeType?: string;
  mekan_tipi?: string;
  property_type?: string;

  camera_count?: string;
  cameraCount?: string;
  kamera_sayisi?: string;

  message?: string;
  note?: string;
  notes?: string;
  aciklama?: string;

  page_url?: string;
  page?: string;
  url?: string;
  page_type?: string;

  form_source?: string;

  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  referrer?: string;
  page_title?: string;
  page_path?: string;
  session_id?: string;
  landing_page_url?: string;
  landing_page_type?: string;
  landing_page_path?: string;
  landing_timestamp?: string;
  gclid?: string;
  fbclid?: string;
  msclkid?: string;

  website?: string;
  company_website?: string;

  lead_id?: string;
  timestamp?: string;
}

function cleanString(value: unknown): string {
  return String(value ?? "")
    .replace(/\s+/g, " ")
    .trim();
}

function safeLower(value: unknown): string {
  return cleanString(value).toLocaleLowerCase("tr-TR");
}

export function normalizePhone(value: string): string {
  return normalizeTurkishPhone(value);
}

export function formatTimestamp(): string {
  return new Intl.DateTimeFormat("tr-TR", {
    timeZone: "Europe/Istanbul",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).format(new Date());
}

export function createLeadId(): string {
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const dd = String(now.getDate()).padStart(2, "0");
  const hh = String(now.getHours()).padStart(2, "0");
  const mi = String(now.getMinutes()).padStart(2, "0");
  const ss = String(now.getSeconds()).padStart(2, "0");
  const rand = Math.random().toString(36).slice(2, 7).toUpperCase();

  return `LD-${yyyy}${mm}${dd}-${hh}${mi}${ss}-${rand}`;
}

function normalizeServiceType(value: string): string {
  const v = safeLower(value);
  const normalizedSlug = v.replace(/_/g, "-");

  if (!v) return "";

  if (
    normalizedSlug.includes("kartli-gecis") ||
    v.includes("kartlı geçiş") ||
    v.includes("kartli gecis")
  ) {
    return "kartli-gecis";
  }

  if (normalizedSlug.includes("yangin") || v.includes("yangın") || v.includes("yangin")) {
    return "yangin";
  }

  if (
    normalizedSlug.includes("teknik-servis") ||
    normalizedSlug.includes("bakim") ||
    normalizedSlug.includes("ariza") ||
    normalizedSlug.includes("uzaktan-izleme") ||
    normalizedSlug.includes("nvr") ||
    v.includes("bakım") ||
    v.includes("bakim") ||
    v.includes("arıza") ||
    v.includes("ariza") ||
    v.includes("teknik servis") ||
    v.includes("uzaktan izleme") ||
    v.includes("servis")
  ) {
    return "bakim-servis";
  }

  if (normalizedSlug.includes("apartman-site") || v.includes("apartman") || v.includes("site")) {
    return "apartman-site";
  }

  if (
    normalizedSlug.includes("fabrika-depo") ||
    v.includes("fabrika") ||
    v.includes("depo")
  ) {
    return "fabrika-depo";
  }

  if (
    normalizedSlug.includes("isyeri") ||
    v.includes("işyeri") ||
    v.includes("isyeri") ||
    v.includes("ofis")
  ) {
    return "isyeri";
  }

  if (normalizedSlug.includes("alarm") && !normalizedSlug.includes("yangin")) {
    return "alarm";
  }

  if (
    normalizedSlug.includes("kamera") ||
    normalizedSlug.includes("cctv") ||
    v.includes("ip kamera") ||
    v.includes("güvenlik kamerası") ||
    v.includes("guvenlik kamerasi")
  ) {
    return "kamera";
  }

  if (v.includes("komple") || v.includes("hepsi")) {
    return "komple";
  }

  return cleanString(value);
}

function normalizeLocationType(value: string): string {
  const v = safeLower(value);

  if (!v) return "";

  if (v.includes("ev") || v.includes("daire")) return "ev / daire";
  if (v.includes("villa")) return "villa";
  if (v.includes("apartman") || v.includes("site")) return "apartman / site";
  if (v.includes("ofis")) return "ofis";
  if (v.includes("işyeri") || v.includes("isyeri")) return "isyeri";
  if (v.includes("mağaza") || v.includes("magaza")) return "magaza";
  if (v.includes("fabrika")) return "fabrika";
  if (v.includes("depo")) return "depo";

  return cleanString(value);
}

function normalizeCameraCount(value: string): string {
  const v = cleanString(value);

  if (!v) return "";

  return v
    .replace(/\s+/g, "")
    .replace(/adet/gi, "")
    .replace(/kamera/gi, "")
    .trim();
}

function normalizeFormSource(
  rawSource: unknown,
  pageUrl: string,
  fallbackSource: FormSource,
): FormSource {
  const value = safeLower(rawSource);

  if (!value) {
    return pageUrl.includes("/teklif/") ? "landing_page" : fallbackSource;
  }

  if (value.includes("whatsapp")) return "whatsapp";
  if (value.includes("phone")) return "phone_call";
  if (value.includes("manual")) return "manual";
  if (value.includes("alarm_landing_page")) return "alarm_landing_page";
  if (value.includes("landing_quote_form")) return "landing_quote_form";
  if (value.includes("istanbul_kamera_teknik_servis"))
    return "istanbul_kamera_teknik_servis";
  if (value.includes("istanbul_kamera_bakim")) return "istanbul_kamera_bakim";
  if (value.includes("istanbul_kamera_kurulum"))
    return "istanbul_kamera_kurulum";
  if (value.includes("istanbul_ip_kamera")) return "istanbul_ip_kamera";
  if (value.includes("istanbul_kartli_gecis"))
    return "istanbul_kartli_gecis";
  if (value.includes("istanbul_yangin_alarm"))
    return "istanbul_yangin_alarm";
  if (value.includes("istanbul_alarm")) return "istanbul_alarm";
  if (value.includes("istanbul_lead_form")) return "istanbul_lead_form";
  if (value.includes("landing")) return "landing_page";
  if (value.includes("quote")) return "quote_form";
  if (pageUrl.includes("/teklif/")) return "landing_page";

  return cleanString(rawSource) || fallbackSource;
}

function isValidEmail(value: string) {
  if (!value) return true;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function buildLeadRecord(
  raw: RawLeadInput,
  source: FormSource,
): LeadRecord {
  const page_url = cleanString(raw.page_url || raw.page || raw.url);
  const normalizedSource = normalizeFormSource(
    raw.form_source,
    page_url,
    source,
  );
  const pageType = getPageType(page_url, raw.page_type);
  const normalizedPhone = normalizePhone(
    raw.phone || raw.gsm || raw.mobile || raw.telephone || "",
  );

  const notes = [
    cleanString(raw.notes),
    cleanString(raw.form_source)
      ? `form_source_raw:${cleanString(raw.form_source)}`
      : "",
    pageType ? `page_type:${pageType}` : "",
    cleanString(raw.utm_content)
      ? `utm_content:${cleanString(raw.utm_content)}`
      : "",
    cleanString(raw.referrer) ? `referrer:${cleanString(raw.referrer)}` : "",
    cleanString(raw.page_title)
      ? `page_title:${cleanString(raw.page_title)}`
      : "",
    cleanString(raw.page_path) ? `page_path:${cleanString(raw.page_path)}` : "",
    cleanString(raw.session_id)
      ? `session_id:${cleanString(raw.session_id)}`
      : "",
    cleanString(raw.landing_page_url)
      ? `landing_page_url:${cleanString(raw.landing_page_url)}`
      : "",
    cleanString(raw.landing_page_type)
      ? `landing_page_type:${cleanString(raw.landing_page_type)}`
      : "",
    cleanString(raw.landing_page_path)
      ? `landing_page_path:${cleanString(raw.landing_page_path)}`
      : "",
    cleanString(raw.landing_timestamp)
      ? `landing_timestamp:${cleanString(raw.landing_timestamp)}`
      : "",
    cleanString(raw.fbclid) ? `fbclid:${cleanString(raw.fbclid)}` : "",
    cleanString(raw.msclkid) ? `msclkid:${cleanString(raw.msclkid)}` : "",
  ]
    .filter(Boolean)
    .join(" | ");

  return {
    lead_id: cleanString(raw.lead_id) || createLeadId(),
    timestamp: cleanString(raw.timestamp) || formatTimestamp(),
    form_source: normalizedSource,
    page_url,
    service_type: normalizeServiceType(
      raw.service_type || raw.service || raw.hizmet || "",
    ),
    city: cleanString(raw.city || raw.il),
    district: cleanString(raw.district || raw.ilce),
    name: cleanString(raw.name || raw.full_name || raw.customer_name),
    phone: normalizedPhone,
    email: cleanString(raw.email || raw.mail),
    location_type: normalizeLocationType(
      raw.location_type ||
        raw.placeType ||
        raw.mekan_tipi ||
        raw.property_type ||
        "",
    ),
    camera_count: normalizeCameraCount(
      raw.camera_count || raw.cameraCount || raw.kamera_sayisi || "",
    ),
    message: cleanString(raw.message || raw.note || raw.aciklama),
    utm_source: cleanString(raw.utm_source),
    utm_medium: cleanString(raw.utm_medium),
    utm_campaign: cleanString(raw.utm_campaign),
    utm_term: cleanString(raw.utm_term),
    gclid: cleanString(raw.gclid),
    call_status: "aranmadi",
    lead_status: "yeni",
    assigned_to: "",
    notes,
  };
}

export function toSheetPayload(lead: LeadRecord): Record<string, string> {
  const payload: Record<string, string> = {};

  for (const column of SHEET_COLUMNS) {
    payload[column] = String(lead[column] ?? "");
  }

  return payload;
}

export function validateLeadRecord(
  lead: LeadRecord,
  raw?: RawLeadInput,
): {
  valid: boolean;
  errors: string[];
} {
  const errors: string[] = [];
  const rawName = cleanString(
    raw?.name || raw?.full_name || raw?.customer_name,
  );
  const rawPhone = cleanString(
    raw?.phone || raw?.gsm || raw?.mobile || raw?.telephone,
  );
  const rawEmail = cleanString(raw?.email || raw?.mail);

  if (!lead.name) {
    errors.push(
      rawName ? "Geçerli bir ad soyad girin." : "Ad soyad zorunludur.",
    );
  }

  if (!rawPhone) {
    errors.push("Telefon numarası zorunludur.");
  } else if (!lead.phone || !isValidTurkishPhone(rawPhone)) {
    errors.push("Geçerli bir telefon numarası girin. Örnek: 05XX XXX XX XX");
  }

  if (rawEmail && !isValidEmail(rawEmail)) {
    errors.push("Geçerli bir e-posta adresi girin.");
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}
