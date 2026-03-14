"use client";

import { useRef, useState } from "react";
import { usePathname } from "next/navigation";
import {
  CheckCircle,
  ChevronDown,
  Loader2,
  MessageCircle,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { useLandingAttribution } from "@/components/forms/useLandingAttribution";
import { siteConfig } from "@/data/site-config";
import {
  formatTurkishPhoneInput,
  getTurkishPhoneValidationMessage,
  normalizeTurkishPhone,
} from "@/lib/phone";
import { pushAnalyticsEvent } from "@/lib/analytics";

const istanbulDistricts = [
  "Adalar",
  "Arnavutköy",
  "Ataşehir",
  "Avcılar",
  "Bağcılar",
  "Bahçelievler",
  "Bakırköy",
  "Başakşehir",
  "Bayrampaşa",
  "Beşiktaş",
  "Beykoz",
  "Beylikdüzü",
  "Beyoğlu",
  "Büyükçekmece",
  "Çatalca",
  "Çekmeköy",
  "Esenler",
  "Esenyurt",
  "Eyüpsultan",
  "Fatih",
  "Gaziosmanpaşa",
  "Güngören",
  "Kadıköy",
  "Kağıthane",
  "Kartal",
  "Küçükçekmece",
  "Maltepe",
  "Pendik",
  "Sancaktepe",
  "Sarıyer",
  "Silivri",
  "Sultanbeyli",
  "Sultangazi",
  "Şile",
  "Şişli",
  "Tuzla",
  "Ümraniye",
  "Üsküdar",
  "Zeytinburnu",
];

const serviceOptions = [
  { value: "kamera", label: "Kamera Sistemi" },
  { value: "alarm", label: "Alarm Sistemi" },
  { value: "yangin", label: "Yangın Alarm Sistemi" },
  { value: "kartli-gecis", label: "Kartlı Geçiş Sistemi" },
  { value: "apartman-site", label: "Apartman / Site Güvenlik" },
  { value: "isyeri", label: "İşyeri Güvenlik Sistemi" },
  { value: "komple", label: "Komple Güvenlik Çözümü" },
];

interface QuickLeadFormProps {
  defaultService?: string;
  defaultDistrict?: string;
  formSource?: string;
  className?: string;
  heading?: string;
  subheading?: string;
  whatsappMessage?: string;
}

interface FormState {
  name: string;
  phone: string;
  district: string;
  service_type: string;
  camera_count: string;
  message: string;
  website: string; // honeypot
}

function buildInitialForm(
  defaultService: string,
  defaultDistrict: string,
): FormState {
  return {
    name: "",
    phone: "",
    district: defaultDistrict,
    service_type: defaultService,
    camera_count: "",
    message: "",
    website: "",
  };
}

export default function QuickLeadForm({
  defaultService = "",
  defaultDistrict = "",
  formSource = "istanbul_lead_form",
  className = "",
  heading = "Hızlı Teklif Al",
  subheading = "Bilgilerinizi bırakın, aynı gün dönüş yapalım.",
  whatsappMessage = "Merhaba, güvenlik sistemi hakkında bilgi almak istiyorum.",
}: QuickLeadFormProps) {
  const [form, setForm] = useState<FormState>(() =>
    buildInitialForm(defaultService, defaultDistrict),
  );
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [errors, setErrors] = useState<
    Partial<Record<keyof FormState, string>>
  >({});
  const [showExtras, setShowExtras] = useState(false);
  const hasTrackedStart = useRef(false);
  const attribution = useLandingAttribution();
  const pathname = usePathname();

  function validate(): boolean {
    const newErrors: Partial<Record<keyof FormState, string>> = {};

    if (!form.name.trim() || form.name.trim().length < 2) {
      newErrors.name = "Ad soyad zorunludur.";
    }

    const phoneError = getTurkishPhoneValidationMessage(form.phone);
    if (phoneError) {
      newErrors.phone = phoneError;
    }

    if (form.message.length > 500) {
      newErrors.message = "Mesaj 500 karakteri geçemez.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) {
    const { name, value } = e.target;
    const nextValue = name === "phone" ? formatTurkishPhoneInput(value) : value;
    setForm((prev) => ({ ...prev, [name]: nextValue }));

    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
    if (status === "error") {
      setStatus("idle");
      setFeedbackMessage("");
    }
  }

  function trackFormStart() {
    if (hasTrackedStart.current) return;
    hasTrackedStart.current = true;
    pushAnalyticsEvent("view_lead_form", {
      page_path: pathname || "",
      lead_channel: "form",
      form_source: formSource,
      service_type: form.service_type || defaultService || "",
    });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    setFeedbackMessage("");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...attribution,
          name: form.name.trim(),
          phone: normalizeTurkishPhone(form.phone),
          city: "İstanbul",
          district: form.district,
          service_type: form.service_type,
          camera_count: form.camera_count,
          message: form.message.trim(),
          form_source: formSource,
          page_url:
            attribution.page_url ||
            (typeof window !== "undefined" ? window.location.href : ""),
          website: form.website,
          page_title: typeof document !== "undefined" ? document.title : "",
        }),
      });

      const result = (await response.json().catch(() => null)) as {
        success?: boolean;
        message?: string;
      } | null;

      if (!response.ok) {
        throw new Error(result?.message || "FORM_SUBMIT_FAILED");
      }

      setStatus("success");
      setFeedbackMessage(result?.message || "");

      pushAnalyticsEvent("submit_lead_form", {
        page_path: pathname || "",
        lead_channel: "form",
        form_source: formSource,
        service_type: form.service_type || defaultService || "",
        event_category: "lead",
        value: 1,
      });

      pushAnalyticsEvent("lead_form_success", {
        page_path: pathname || "",
        form_source: formSource,
        service_type: form.service_type || defaultService || "",
      });

      setForm(buildInitialForm(defaultService, defaultDistrict));
      setErrors({});
      hasTrackedStart.current = false;
    } catch (error) {
      setStatus("error");
      setFeedbackMessage(
        error instanceof Error && error.message !== "FORM_SUBMIT_FAILED"
          ? error.message
          : "Form gönderilemedi. Lütfen tekrar deneyin.",
      );
    }
  }

  const inputClass = (field: keyof FormState) =>
    `w-full rounded-xl border px-4 py-3 text-sm text-gray-800 outline-none transition-colors focus:ring-2 focus:ring-accent/30 ${
      errors[field]
        ? "border-red-400 bg-red-50"
        : "border-gray-300 bg-white focus:border-accent"
    }`;

  if (status === "success") {
    const waLink = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;
    return (
      <div
        className={`rounded-2xl border border-green-200 bg-white p-8 shadow-lg ${className}`}
      >
        <CheckCircle className="mx-auto mb-4 text-cta" size={48} />
        <h3 className="mb-2 text-xl font-bold text-primary">
          Talebiniz Alındı
        </h3>
        <p className="mb-5 text-sm text-text-light">
          {feedbackMessage || "Ekibimiz en kısa sürede sizi arayacak."}
        </p>

        <div className="mb-5 rounded-xl bg-surface p-4">
          <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-primary/60">
            Sonraki adımlar
          </p>
          <ol className="space-y-2 text-sm text-text-light">
            <li className="flex items-start gap-2">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cta text-[10px] font-bold text-white">
                1
              </span>
              Ekibimiz sizi en kısa sürede arayacak
            </li>
            <li className="flex items-start gap-2">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cta text-[10px] font-bold text-white">
                2
              </span>
              İhtiyaç analizi ve ücretsiz keşif randevusu
            </li>
            <li className="flex items-start gap-2">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cta text-[10px] font-bold text-white">
                3
              </span>
              Detaylı teklif ve kurulum planı
            </li>
          </ol>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-200 px-4 py-3 text-sm font-semibold text-primary transition-colors hover:bg-surface"
          >
            <Phone size={16} />
            Hemen Ara
          </a>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#20BD5A]"
          >
            <MessageCircle size={16} />
            WhatsApp ile Yazın
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      onFocusCapture={trackFormStart}
      noValidate
      className={`rounded-2xl border border-gray-200 bg-white p-6 shadow-lg ${className}`}
    >
      <div className="mb-5">
        <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-cta/10 px-3 py-1 text-xs font-semibold text-cta">
          <ShieldCheck size={14} />
          İstanbul geneli • Aynı gün keşif
        </div>
        <h3 className="text-lg font-bold text-primary">{heading}</h3>
        <p className="mt-1 text-sm text-text-light">{subheading}</p>
      </div>

      <div className="grid gap-4">
        {/* Honeypot */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            left: "-5000px",
            top: "auto",
            width: "1px",
            height: "1px",
            overflow: "hidden",
          }}
        >
          <label htmlFor="qlf-website">Website</label>
          <input
            id="qlf-website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={form.website}
            onChange={handleChange}
          />
        </div>

        {/* Ad Soyad */}
        <div>
          <label
            htmlFor="qlf-name"
            className="mb-1.5 block text-sm font-semibold text-gray-700"
          >
            Ad Soyad *
          </label>
          <input
            id="qlf-name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            className={inputClass("name")}
            placeholder="Adınız Soyadınız"
            autoComplete="name"
          />
          {errors.name ? (
            <p className="mt-1 text-xs text-red-500">{errors.name}</p>
          ) : null}
        </div>

        {/* Telefon */}
        <div>
          <label
            htmlFor="qlf-phone"
            className="mb-1.5 block text-sm font-semibold text-gray-700"
          >
            Telefon *
          </label>
          <input
            id="qlf-phone"
            name="phone"
            type="tel"
            inputMode="tel"
            value={form.phone}
            onChange={handleChange}
            className={inputClass("phone")}
            placeholder="05XX XXX XX XX"
            autoComplete="tel"
          />
          {errors.phone ? (
            <p className="mt-1 text-xs text-red-500">{errors.phone}</p>
          ) : null}
        </div>

        {/* İlçe */}
        <div>
          <label
            htmlFor="qlf-district"
            className="mb-1.5 block text-sm font-semibold text-gray-700"
          >
            İlçe
          </label>
          <select
            id="qlf-district"
            name="district"
            value={form.district}
            onChange={handleChange}
            className={inputClass("district")}
          >
            <option value="">İlçe seçin (opsiyonel)</option>
            {istanbulDistricts.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>

        {/* Kısa Not */}
        <div>
          <label
            htmlFor="qlf-message"
            className="mb-1.5 block text-sm font-semibold text-gray-700"
          >
            Kısa Not
          </label>
          <textarea
            id="qlf-message"
            name="message"
            rows={2}
            value={form.message}
            onChange={handleChange}
            className={inputClass("message")}
            placeholder="Mekan tipi, kamera sayısı veya özel ihtiyaç"
          />
          {errors.message ? (
            <p className="mt-1 text-xs text-red-500">{errors.message}</p>
          ) : null}
        </div>

        {/* Ek Detaylar (collapsible for mobile) */}
        <div>
          <button
            type="button"
            onClick={() => setShowExtras((p) => !p)}
            className="flex w-full items-center justify-between rounded-xl border border-gray-200 bg-surface px-4 py-2.5 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100"
          >
            Hizmet ve detay seçimi (opsiyonel)
            <ChevronDown
              size={16}
              className={`transition-transform ${showExtras ? "rotate-180" : ""}`}
            />
          </button>
          {showExtras && (
            <div className="mt-3 grid gap-4">
              <div>
                <label
                  htmlFor="qlf-service"
                  className="mb-1.5 block text-sm font-semibold text-gray-700"
                >
                  Hizmet Türü
                </label>
                <select
                  id="qlf-service"
                  name="service_type"
                  value={form.service_type}
                  onChange={handleChange}
                  className={inputClass("service_type")}
                >
                  <option value="">Seçiniz (opsiyonel)</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="qlf-camera"
                  className="mb-1.5 block text-sm font-semibold text-gray-700"
                >
                  Tahmini Kamera Sayısı
                </label>
                <select
                  id="qlf-camera"
                  name="camera_count"
                  value={form.camera_count}
                  onChange={handleChange}
                  className={inputClass("camera_count")}
                >
                  <option value="">Bilmiyorum</option>
                  <option value="1-4">1–4 Kamera</option>
                  <option value="5-8">5–8 Kamera</option>
                  <option value="9-16">9–16 Kamera</option>
                  <option value="17+">17+ Kamera</option>
                </select>
              </div>
            </div>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={status === "loading"}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-cta px-6 py-3.5 font-bold text-white transition-colors hover:bg-ctaHover disabled:opacity-60"
        >
          {status === "loading" ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Gönderiliyor…
            </>
          ) : (
            "Ücretsiz Teklif Al"
          )}
        </button>

        {status === "error" && feedbackMessage ? (
          <p className="text-center text-sm text-red-600">{feedbackMessage}</p>
        ) : null}
      </div>

      <p className="mt-3 text-center text-xs text-text-light/60">
        Bilgileriniz yalnızca teklif süreci için kullanılır.
      </p>
    </form>
  );
}
