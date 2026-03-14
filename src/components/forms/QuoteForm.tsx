"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { AlertCircle, CheckCircle, Loader2, PhoneCall, ShieldCheck } from "lucide-react";
import { useLandingAttribution } from "@/components/forms/useLandingAttribution";
import { cities } from "@/data/cities";
import { siteConfig } from "@/data/site-config";
import {
  getCityServiceTrackingContext,
  pushAnalyticsEvent,
  type CityServiceTrackingContext,
} from "@/lib/analytics";
import {
  formatTurkishPhoneInput,
  getTurkishPhoneValidationMessage,
  normalizeTurkishPhone,
} from "@/lib/phone";

interface QuoteFormProps {
  defaultService?: string;
  defaultCity?: string;
  compact?: boolean;
  className?: string;
  lockCity?: boolean;
  lockService?: boolean;
  formSource?: string;
  pageTemplate?: string;
  intentType?: string;
  trackingContext?: CityServiceTrackingContext | null;
  extraNotes?: string[];
}

interface FormData {
  name: string;
  phone: string;
  email: string;
  city: string;
  service_type: string;
  location_type: string;
  note: string;
  website: string;
}

const serviceOptions = [
  { value: "kamera", label: "Kamera Sistemi Kurulumu" },
  { value: "alarm", label: "Alarm Sistemi Kurulumu" },
  { value: "yangin", label: "Yangın Alarm Sistemi Kurulumu" },
  { value: "kartli-gecis", label: "Kartlı Geçiş Sistemi Kurulumu" },
  { value: "apartman-site", label: "Apartman / Site Güvenlik Sistemi" },
  { value: "isyeri", label: "İşyeri Güvenlik Sistemi" },
  { value: "fabrika-depo", label: "Fabrika / Depo Güvenlik Sistemi" },
  { value: "bakim-servis", label: "Bakım / Servis / Uzaktan İzleme" },
  { value: "komple", label: "Komple Güvenlik Çözümü" },
];

const locationOptions = [
  { value: "ev", label: "Ev / Konut" },
  { value: "villa", label: "Villa / Müstakil Ev" },
  { value: "isyeri", label: "İşyeri / Ofis" },
  { value: "magaza", label: "Mağaza / Dükkan" },
  { value: "apartman-site", label: "Apartman / Site" },
  { value: "fabrika-depo", label: "Fabrika / Depo / Atölye" },
  { value: "otopark", label: "Otopark / Açık Alan" },
  { value: "diger", label: "Diğer" },
];

function buildInitialForm(defaultCity: string, defaultService: string): FormData {
  return {
    name: "",
    phone: "",
    email: "",
    city: defaultCity,
    service_type: defaultService,
    location_type: "",
    note: "",
    website: "",
  };
}

function isValidEmail(value: string) {
  if (!value.trim()) return true;
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export default function QuoteForm({
  defaultService = "",
  defaultCity = "",
  compact = false,
  className = "",
  lockCity = false,
  lockService = false,
  formSource,
  pageTemplate,
  intentType = "",
  trackingContext,
  extraNotes = [],
}: QuoteFormProps) {
  const [form, setForm] = useState<FormData>(() => buildInitialForm(defaultCity, defaultService));
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const attribution = useLandingAttribution();
  const pathname = usePathname();
  const hasTrackedFormStart = useRef(false);

  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      city: defaultCity || prev.city,
      service_type: defaultService || prev.service_type,
    }));
  }, [defaultCity, defaultService]);

  const effectiveTrackingContext = useMemo(
    () => trackingContext ?? getCityServiceTrackingContext(pathname || ""),
    [pathname, trackingContext]
  );

  const effectiveFormSource =
    formSource || (attribution.page_type === "landing_page" ? "landing_quote_form" : "quote_form");
  const effectivePageTemplate =
    pageTemplate || effectiveTrackingContext?.page_template || attribution.page_type || "";

  const selectedServiceLabel = useMemo(
    () => serviceOptions.find((item) => item.value === form.service_type)?.label || "",
    [form.service_type]
  );

  const contextNotes = useMemo(
    () =>
      [
        ...new Set(
          [
            ...extraNotes,
            effectivePageTemplate ? `page_template:${effectivePageTemplate}` : "",
            intentType ? `intent_type:${intentType}` : "",
            effectiveTrackingContext?.city ? `city_slug:${effectiveTrackingContext.city}` : "",
            effectiveTrackingContext?.service ? `service_slug:${effectiveTrackingContext.service}` : "",
          ].filter(Boolean)
        ),
      ],
    [effectivePageTemplate, effectiveTrackingContext, extraNotes, intentType]
  );

  const fixedContextSummary = [
    lockCity && form.city ? `İl: ${form.city}` : "",
    lockService && selectedServiceLabel ? `Hizmet: ${selectedServiceLabel}` : "",
  ].filter(Boolean);

  function validate(): boolean {
    const newErrors: Partial<Record<keyof FormData, string>> = {};

    if (!form.name.trim()) {
      newErrors.name = "Ad soyad zorunludur.";
    } else if (form.name.trim().length < 2) {
      newErrors.name = "Geçerli bir ad soyad girin.";
    }

    const phoneError = getTurkishPhoneValidationMessage(form.phone);
    if (phoneError) {
      newErrors.phone = phoneError;
    }

    if (form.email.trim() && !isValidEmail(form.email)) {
      newErrors.email = "Geçerli bir e-posta adresi girin.";
    }

    if (!form.city) {
      newErrors.city = "İl seçiniz.";
    }

    if (!form.service_type) {
      newErrors.service_type = "Hizmet türü seçiniz.";
    }

    if (!form.location_type) {
      newErrors.location_type = "Mekan türü seçiniz.";
    }

    if (form.note.length > 500) {
      newErrors.note = "Not alanı 500 karakteri geçemez.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    const nextValue = name === "phone" ? formatTurkishPhoneInput(value) : value;

    setForm((prev) => ({
      ...prev,
      [name]: nextValue,
    }));

    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }

    if (status === "error") {
      setStatus("idle");
      setFeedbackMessage("");
    }
  }

  function trackFormStart() {
    if (hasTrackedFormStart.current) {
      return;
    }

    hasTrackedFormStart.current = true;

    pushAnalyticsEvent("form_start", {
      page_path: effectiveTrackingContext?.page_path || pathname || "",
      city: effectiveTrackingContext?.city || "",
      service: effectiveTrackingContext?.service || "",
      lead_channel: "form",
      form_source: effectiveFormSource,
      service_type: form.service_type || defaultService || "",
      intent_type: intentType,
      page_template: effectivePageTemplate,
    });
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!validate()) {
      return;
    }

    setStatus("loading");
    setFeedbackMessage("");

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...form,
          phone: normalizeTurkishPhone(form.phone),
          form_source: effectiveFormSource,
          ...attribution,
          page_type: effectivePageTemplate || attribution.page_type,
          page_template: effectivePageTemplate || undefined,
          intent_type: intentType || undefined,
          notes: contextNotes.join(" | "),
          page_title: document.title,
        }),
      });

      const result = (await response.json().catch(() => null)) as
        | { success?: boolean; message?: string }
        | null;

      if (!response.ok) {
        throw new Error(result?.message || "FORM_SUBMIT_FAILED");
      }

      setStatus("success");
      setFeedbackMessage(result?.message || "");

      pushAnalyticsEvent("form_submit", {
        page_path: effectiveTrackingContext?.page_path || pathname || "",
        city: effectiveTrackingContext?.city || "",
        service: effectiveTrackingContext?.service || "",
        lead_channel: "form",
        form_source: effectiveFormSource,
        service_type: form.service_type || defaultService || "",
        intent_type: intentType,
        page_template: effectivePageTemplate,
        event_category: "lead",
        event_label: form.service_type || defaultService || "genel-teklif",
        value: 1,
      });

      setForm(buildInitialForm(defaultCity, defaultService));
      setErrors({});
      hasTrackedFormStart.current = false;
    } catch (error) {
      setStatus("error");
      setFeedbackMessage(
        error instanceof Error && error.message !== "FORM_SUBMIT_FAILED"
          ? error.message
          : "Form gönderilemedi. Lütfen bilgilerinizi kontrol edip tekrar deneyin."
      );
    }
  }

  const inputClass = (field: keyof FormData) =>
    `w-full rounded-xl border px-4 py-3 text-sm text-gray-800 outline-none transition-colors focus:ring-2 focus:ring-accent/30 ${
      errors[field]
        ? "border-red-400 bg-red-50"
        : "border-gray-300 bg-white focus:border-accent"
    }`;

  const labelClass = "mb-1.5 block text-sm font-semibold text-gray-700";

  if (status === "success") {
    return (
      <div className={`rounded-2xl border border-green-200 bg-white p-8 text-center shadow-lg ${className}`}>
        <CheckCircle className="mx-auto mb-4 text-cta" size={56} />
        <h3 className="mb-3 text-2xl font-bold text-primary">Talebiniz Alındı</h3>
        <p className="mb-2 text-text-light">
          {feedbackMessage || "Ekibimiz en kısa sürede sizi arayarak keşif ve teklif sürecini başlatacak."}
        </p>
        {selectedServiceLabel ? (
          <p className="mb-4 text-sm text-text-light">
            Talep edilen hizmet: <span className="font-semibold text-primary">{selectedServiceLabel}</span>
          </p>
        ) : null}
        <div className="rounded-xl bg-surface px-4 py-4 text-sm text-text-light">
          Acil bir durum varsa{" "}
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            className="font-semibold text-accent"
          >
            {siteConfig.phone}
          </a>{" "}
          numarasını hemen arayabilirsiniz.
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
      {!compact ? (
        <div className="mb-6">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold text-accent">
            <ShieldCheck size={14} />
            Ücretsiz keşif ve hızlı teklif
          </div>

          <h3 className="text-xl font-bold text-primary">Size Uygun Sistemi Birlikte Belirleyelim</h3>
          <p className="mt-1 text-sm text-text-light">
            Formu doldurun, alanınıza uygun güvenlik sistemi için sizi arayalım.
          </p>
        </div>
      ) : null}

      {fixedContextSummary.length > 0 ? (
        <div className="mb-4 flex flex-wrap gap-2">
          {fixedContextSummary.map((item) => (
            <span
              key={item}
              className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700"
            >
              {item}
            </span>
          ))}
        </div>
      ) : null}

      <div className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        <input type="hidden" name="page_url" value={attribution.page_url} readOnly />
        <input
          type="hidden"
          name="page_type"
          value={effectivePageTemplate || attribution.page_type}
          readOnly
        />
        <input type="hidden" name="utm_source" value={attribution.utm_source} readOnly />
        <input type="hidden" name="utm_medium" value={attribution.utm_medium} readOnly />
        <input type="hidden" name="utm_campaign" value={attribution.utm_campaign} readOnly />
        <input type="hidden" name="utm_term" value={attribution.utm_term} readOnly />
        <input type="hidden" name="utm_content" value={attribution.utm_content} readOnly />
        <input type="hidden" name="referrer" value={attribution.referrer} readOnly />
        <input type="hidden" name="timestamp" value={attribution.timestamp} readOnly />
        <input type="hidden" name="gclid" value={attribution.gclid} readOnly />
        <input type="hidden" name="fbclid" value={attribution.fbclid} readOnly />
        <input type="hidden" name="msclkid" value={attribution.msclkid} readOnly />
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
          <label htmlFor="quote-website">Website</label>
          <input
            id="quote-website"
            type="text"
            name="website"
            tabIndex={-1}
            autoComplete="off"
            value={form.website}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor="quote-name" className={labelClass}>
            Ad Soyad *
          </label>
          <input
            id="quote-name"
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Adınız Soyadınız"
            autoComplete="name"
            className={inputClass("name")}
          />
          {errors.name ? <p className="mt-1 text-xs text-red-500">{errors.name}</p> : null}
        </div>

        <div>
          <label htmlFor="quote-phone" className={labelClass}>
            Telefon *
          </label>
          <input
            id="quote-phone"
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="05XX XXX XX XX"
            autoComplete="tel"
            inputMode="tel"
            className={inputClass("phone")}
          />
          {errors.phone ? <p className="mt-1 text-xs text-red-500">{errors.phone}</p> : null}
        </div>

        <div className={compact ? "" : "sm:col-span-2"}>
          <label htmlFor="quote-email" className={labelClass}>
            E-posta <span className="font-normal text-gray-400">(opsiyonel)</span>
          </label>
          <input
            id="quote-email"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="ornek@email.com"
            autoComplete="email"
            className={inputClass("email")}
          />
          {errors.email ? <p className="mt-1 text-xs text-red-500">{errors.email}</p> : null}
        </div>

        {lockCity ? (
          <input type="hidden" name="city" value={form.city} readOnly />
        ) : (
          <div>
            <label htmlFor="quote-city" className={labelClass}>
              İl *
            </label>
            <select
              id="quote-city"
              name="city"
              value={form.city}
              onChange={handleChange}
              className={inputClass("city")}
            >
              <option value="">Seçiniz...</option>
              {cities.map((city) => (
                <option key={city.slug} value={city.name}>
                  {city.name}
                </option>
              ))}
            </select>
            {errors.city ? <p className="mt-1 text-xs text-red-500">{errors.city}</p> : null}
          </div>
        )}

        {lockService ? (
          <input type="hidden" name="service_type" value={form.service_type} readOnly />
        ) : (
          <div>
            <label htmlFor="quote-service" className={labelClass}>
              Hizmet Türü *
            </label>
            <select
              id="quote-service"
              name="service_type"
              value={form.service_type}
              onChange={handleChange}
              className={inputClass("service_type")}
            >
              <option value="">Seçiniz...</option>
              {serviceOptions.map((service) => (
                <option key={service.value} value={service.value}>
                  {service.label}
                </option>
              ))}
            </select>
            {errors.service_type ? (
              <p className="mt-1 text-xs text-red-500">{errors.service_type}</p>
            ) : null}
          </div>
        )}

        <div className={compact ? "" : "sm:col-span-2"}>
          <label htmlFor="quote-location" className={labelClass}>
            Mekan Türü *
          </label>
          <select
            id="quote-location"
            name="location_type"
            value={form.location_type}
            onChange={handleChange}
            className={inputClass("location_type")}
          >
            <option value="">Seçiniz...</option>
            {locationOptions.map((location) => (
              <option key={location.value} value={location.value}>
                {location.label}
              </option>
            ))}
          </select>
          {errors.location_type ? (
            <p className="mt-1 text-xs text-red-500">{errors.location_type}</p>
          ) : null}
        </div>

        <div className={compact ? "" : "sm:col-span-2"}>
          <label htmlFor="quote-note" className={labelClass}>
            Proje Notu <span className="font-normal text-gray-400">(opsiyonel)</span>
          </label>
          <textarea
            id="quote-note"
            name="note"
            value={form.note}
            onChange={handleChange}
            placeholder="Örnek: 2 katlı villa, çevre izleme istiyoruz. Telefonla izleme olsun. Yaklaşık 6-8 kamera düşünüyoruz."
            rows={compact ? 3 : 4}
            maxLength={500}
            className={`${inputClass("note")} resize-none`}
          />
          <div className="mt-1 flex items-center justify-between">
            {errors.note ? (
              <p className="text-xs text-red-500">{errors.note}</p>
            ) : (
              <p className="text-xs text-gray-400">
                Ne kadar net yazarsanız o kadar doğru teklif alırsınız.
              </p>
            )}
            <p className="text-xs text-gray-400">{form.note.length}/500</p>
          </div>
        </div>
      </div>

      {status === "error" ? (
        <div className="mt-4 flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
          <AlertCircle size={16} />
          {feedbackMessage || `Bir hata oluştu. Form gönderilemediyse bizi doğrudan arayın: ${siteConfig.phone}`}
        </div>
      ) : null}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-cta py-4 text-base font-bold text-white shadow-lg transition-colors hover:bg-ctaHover disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Gönderiliyor...
          </>
        ) : (
          <>
            <PhoneCall size={18} />
            Ücretsiz Keşif ve Teklif Al
          </>
        )}
      </button>

      <p className="mt-3 text-center text-xs text-gray-400">
        Bilgileriniz yalnızca teklif oluşturmak ve sizinle iletişime geçmek için kullanılır.
      </p>
    </form>
  );
}
