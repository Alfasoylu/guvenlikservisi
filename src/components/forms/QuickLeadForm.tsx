"use client";

import { useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { CheckCircle, Loader2, ShieldCheck } from "lucide-react";
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

    if (!form.service_type) {
      newErrors.service_type = "Hizmet seçiniz.";
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
    pushAnalyticsEvent("form_start", {
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

      pushAnalyticsEvent("form_submit", {
        page_path: pathname || "",
        lead_channel: "form",
        form_source: formSource,
        service_type: form.service_type || defaultService || "",
        event_category: "lead",
        value: 1,
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
    return (
      <div
        className={`rounded-2xl border border-green-200 bg-white p-8 text-center shadow-lg ${className}`}
      >
        <CheckCircle className="mx-auto mb-4 text-cta" size={48} />
        <h3 className="mb-2 text-xl font-bold text-primary">
          Talebiniz Alındı
        </h3>
        <p className="mb-4 text-sm text-text-light">
          {feedbackMessage || "Ekibimiz en kısa sürede sizi arayacak."}
        </p>
        <div className="rounded-xl bg-surface px-4 py-3 text-sm text-text-light">
          Acil durumda{" "}
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            className="font-semibold text-accent"
          >
            {siteConfig.phone}
          </a>{" "}
          numarasını arayabilirsiniz.
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
            placeholder="Ad Soyad"
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

        {/* Hizmet + İlçe row */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="qlf-service"
              className="mb-1.5 block text-sm font-semibold text-gray-700"
            >
              Hizmet *
            </label>
            <select
              id="qlf-service"
              name="service_type"
              value={form.service_type}
              onChange={handleChange}
              className={inputClass("service_type")}
            >
              <option value="">Seçiniz</option>
              {serviceOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
            {errors.service_type ? (
              <p className="mt-1 text-xs text-red-500">{errors.service_type}</p>
            ) : null}
          </div>

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
              <option value="">Seçiniz</option>
              {istanbulDistricts.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Kamera Sayısı */}
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
            <option value="">Bilmiyorum / Belirtmek İstemiyorum</option>
            <option value="1-4">1–4 Kamera</option>
            <option value="5-8">5–8 Kamera</option>
            <option value="9-16">9–16 Kamera</option>
            <option value="17+">17+ Kamera</option>
          </select>
        </div>

        {/* Mesaj */}
        <div>
          <label
            htmlFor="qlf-message"
            className="mb-1.5 block text-sm font-semibold text-gray-700"
          >
            Not / Mesaj
          </label>
          <textarea
            id="qlf-message"
            name="message"
            rows={2}
            value={form.message}
            onChange={handleChange}
            className={inputClass("message")}
            placeholder="Varsa ek bilgi yazabilirsiniz"
          />
          {errors.message ? (
            <p className="mt-1 text-xs text-red-500">{errors.message}</p>
          ) : null}
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
