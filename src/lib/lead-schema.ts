/**
 * BL-02: Lead Kolon Standardı ve Veri Şeması
 *
 * Bu dosya tüm lead verisi için tek kaynak (single source of truth) görevi görür.
 * Hem /api/lead hem /api/quote bu şemayı kullanır.
 * Google Sheets webhook'a giden veri bu şemaya göre normalize edilir.
 *
 * LEAD_ENGINE.md'deki kolon standardına birebir uyumludur.
 */

// ─── Lead Status Enum ────────────────────────────────────────
export const LEAD_STATUSES = [
  "Yeni",
  "Arandı",
  "Teklif",
  "Kazanıldı",
  "Kaybedildi",
] as const;

export type LeadStatus = (typeof LEAD_STATUSES)[number];

// ─── Form Source Identifier ──────────────────────────────────
export const FORM_SOURCES = [
  "quote_form",           // QuoteForm (genel teklif)
  "istanbul_ip_kamera",   // IstanbulIpCameraQuoteForm
  "landing_page",         // /teklif/* landing page formları
  "whatsapp",             // WhatsApp click (tracking only)
  "phone_call",           // Phone click (tracking only)
] as const;

export type FormSource = (typeof FORM_SOURCES)[number];

// ─── Standart Lead Şeması ────────────────────────────────────
// Google Sheets'e giden kolon sırası bu interface'i takip eder.
export interface LeadRecord {
  // ── Zaman ──
  timestamp: string;           // ISO 8601 — Europe/Istanbul

  // ── Müşteri Bilgisi ──
  name: string;                // müşteri adı
  phone: string;               // normalize edilmiş: 05XX XXX XX XX
  email: string;               // opsiyonel

  // ── Konum ──
  city: string;                // il adı
  district: string;            // ilçe adı

  // ── Hizmet Detayı ──
  service_type: string;        // kamera | alarm | yangin | kartli-gecis | komple | ...
  location_type: string;       // ev | villa | isyeri | magaza | apartman-site | fabrika-depo | ...
  camera_count: string;        // 2-4 | 4-8 | 8-16 | 16+
  message: string;             // serbest metin / proje notu

  // ── Tracking / Attribution ──
  page_url: string;            // lead geldiği URL
  form_source: FormSource;     // formu tanımlayan sabit
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  gclid: string;

  // ── CRM Alanları (Sheet'te manuel doldurulur) ──
  lead_status: LeadStatus;
  assigned_to: string;
  offer_amount: string;
  lost_reason: string;
  notes: string;
}

// ─── Google Sheets Kolon Sırası ──────────────────────────────
// Webhook'a gönderirken bu sıra korunmalıdır.
// Sheet'in ilk satırı bu header'ları içermelidir.
export const SHEET_COLUMNS: (keyof LeadRecord)[] = [
  "timestamp",
  "name",
  "phone",
  "email",
  "city",
  "district",
  "service_type",
  "location_type",
  "camera_count",
  "message",
  "page_url",
  "form_source",
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "gclid",
  "lead_status",
  "assigned_to",
  "offer_amount",
  "lost_reason",
  "notes",
];

// ─── Normalize Helper ────────────────────────────────────────
// Farklı form payload'larını standart LeadRecord'a çevirir.

export function normalizePhone(value: string): string {
  const digits = value.replace(/\D/g, "");

  // +90 5XX → 05XX
  if (digits.startsWith("90") && digits.length === 12) {
    return `0${digits.slice(2)}`;
  }

  // 5XX (başında 0 yok) → 05XX
  if (digits.length === 10 && digits.startsWith("5")) {
    return `0${digits}`;
  }

  return digits;
}

export function formatTimestamp(): string {
  return new Date().toLocaleString("tr-TR", {
    timeZone: "Europe/Istanbul",
  });
}

interface RawLeadInput {
  // Müşteri
  name?: string;
  phone?: string;
  email?: string;

  // Konum
  city?: string;
  district?: string;

  // Hizmet
  service_type?: string;
  location_type?: string;
  camera_count?: string;
  cameraCount?: string;       // eski form uyumu
  message?: string;
  note?: string;              // QuoteForm uyumu
  placeType?: string;         // eski form uyumu

  // Tracking
  page?: string;
  page_url?: string;
  form_source?: FormSource;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  gclid?: string;
}

/**
 * Ham form verisini standart LeadRecord'a dönüştürür.
 * Tüm alanlar string olarak normalize edilir.
 * CRM alanları default değerlerle doldurulur.
 */
export function buildLeadRecord(
  raw: RawLeadInput,
  source: FormSource
): LeadRecord {
  return {
    // Zaman
    timestamp: formatTimestamp(),

    // Müşteri
    name: (raw.name || "").trim(),
    phone: normalizePhone(raw.phone || ""),
    email: (raw.email || "").trim(),

    // Konum
    city: (raw.city || "").trim(),
    district: (raw.district || "").trim(),

    // Hizmet
    service_type: (raw.service_type || "").trim(),
    location_type: (raw.location_type || raw.placeType || "").trim(),
    camera_count: (raw.camera_count || raw.cameraCount || "").trim(),
    message: (raw.message || raw.note || "").trim(),

    // Tracking
    page_url: (raw.page_url || raw.page || "").trim(),
    form_source: source,
    utm_source: (raw.utm_source || "").trim(),
    utm_medium: (raw.utm_medium || "").trim(),
    utm_campaign: (raw.utm_campaign || "").trim(),
    utm_term: (raw.utm_term || "").trim(),
    gclid: (raw.gclid || "").trim(),

    // CRM — varsayılan
    lead_status: "Yeni",
    assigned_to: "",
    offer_amount: "",
    lost_reason: "",
    notes: "",
  };
}

/**
 * LeadRecord'u Sheet webhook'a gönderilecek düz objeye çevirir.
 * Kolon sırası SHEET_COLUMNS'u takip eder.
 */
export function toSheetPayload(
  lead: LeadRecord
): Record<string, string> {
  const payload: Record<string, string> = {};
  for (const col of SHEET_COLUMNS) {
    payload[col] = lead[col] || "";
  }
  return payload;
}
