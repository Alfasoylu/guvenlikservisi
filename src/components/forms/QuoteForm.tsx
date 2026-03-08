"use client";

import { useState, useEffect } from "react";
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { siteConfig } from "@/data/site-config";

interface QuoteFormProps {
  defaultService?: string;
  compact?: boolean;
  className?: string;
}

interface FormData {
  name: string;
  phone: string;
  email: string;
  city: string;
  service_type: string;
  location_type: string;
  note: string;
}

const initialForm: FormData = {
  name: "",
  phone: "",
  email: "",
  city: "",
  service_type: "",
  location_type: "",
  note: "",
};

export default function QuoteForm({
  defaultService = "",
  compact = false,
  className = "",
}: QuoteFormProps) {
  const [form, setForm] = useState<FormData>({ ...initialForm, service_type: defaultService });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [utmParams, setUtmParams] = useState({ utm_source: "", utm_medium: "", utm_campaign: "" });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setUtmParams({
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
    });
  }, []);

  function validate(): boolean {
    const newErrors: Partial<FormData> = {};
    if (!form.name.trim()) newErrors.name = "Ad Soyad zorunludur";
    if (!form.phone.trim()) newErrors.phone = "Telefon numarası zorunludur";
    else if (!/^(0|\+90)?[5][0-9]{9}$/.test(form.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Geçerli bir telefon numarası girin (05XX XXX XX XX)";
    }
    if (!form.city) newErrors.city = "İl seçiniz";
    if (!form.service_type) newErrors.service_type = "Hizmet türü seçiniz";
    if (!form.location_type) newErrors.location_type = "Mekan türü seçiniz";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          ...utmParams,
          page_url: window.location.href,
          timestamp: Date.now(),
        }),
      });

      if (res.ok) {
        setStatus("success");
        // Google Ads dönüşüm takibi
        if (typeof window !== "undefined" && (window as unknown as Record<string, unknown>).gtag) {
          const gtag = (window as unknown as Record<string, unknown>).gtag as (...args: unknown[]) => void;
          gtag("event", "form_submit", {
            event_category: "lead",
            event_label: form.service_type,
            value: 1,
          });
        }
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  }

  if (status === "success") {
    return (
      <div className={`bg-white rounded-2xl p-8 text-center shadow-lg ${className}`}>
        <CheckCircle className="mx-auto text-cta mb-4" size={56} />
        <h3 className="text-2xl font-bold text-primary mb-3">Talebiniz Alındı!</h3>
        <p className="text-text-light mb-2">
          En kısa sürede sizi arayacağız.
        </p>
        <p className="text-text-light text-sm">
          Acil durumlarda{" "}
          <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="text-accent font-semibold">
            {siteConfig.phone}
          </a>{" "}
          numarasını arayabilirsiniz.
        </p>
      </div>
    );
  }

  const inputClass = (field: keyof FormData) =>
    `w-full rounded-lg border px-4 py-3 text-sm text-gray-800 outline-none transition-colors focus:ring-2 focus:ring-accent/40 ${
      errors[field] ? "border-red-400 bg-red-50" : "border-gray-300 bg-white focus:border-accent"
    }`;

  const labelClass = "block text-sm font-semibold text-gray-700 mb-1";

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={`bg-white rounded-2xl p-6 shadow-lg ${className}`}
    >
      {!compact && (
        <div className="mb-6">
          <h3 className="text-xl font-bold text-primary">Ücretsiz Teklif Al</h3>
          <p className="text-text-light text-sm mt-1">
            Formu doldurun, sizi arayalım.
          </p>
        </div>
      )}

      <div className={`grid gap-4 ${compact ? "" : "sm:grid-cols-2"}`}>
        {/* Ad Soyad */}
        <div>
          <label className={labelClass}>Ad Soyad *</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Adınız Soyadınız"
            className={inputClass("name")}
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
        </div>

        {/* Telefon */}
        <div>
          <label className={labelClass}>Telefon *</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="05XX XXX XX XX"
            className={inputClass("phone")}
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>

        {/* E-posta */}
        <div className={compact ? "" : "sm:col-span-2"}>
          <label className={labelClass}>E-posta <span className="text-gray-400 font-normal">(opsiyonel)</span></label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="ornek@email.com"
            className={inputClass("email")}
          />
        </div>

        {/* İl */}
        <div>
          <label className={labelClass}>İl *</label>
          <select
            name="city"
            value={form.city}
            onChange={handleChange}
            className={inputClass("city")}
          >
            <option value="">Seçiniz...</option>
            {siteConfig.cities.map((c) => (
              <option key={c.slug} value={c.name}>{c.name}</option>
            ))}
          </select>
          {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
        </div>

        {/* Hizmet Türü */}
        <div>
          <label className={labelClass}>Hizmet Türü *</label>
          <select
            name="service_type"
            value={form.service_type}
            onChange={handleChange}
            className={inputClass("service_type")}
          >
            <option value="">Seçiniz...</option>
            <option value="kamera">Güvenlik Kamerası</option>
            <option value="alarm">Alarm Sistemi</option>
            <option value="yangin">Yangın Alarm Sistemi</option>
            <option value="kartli-gecis">Kartlı Geçiş Sistemi</option>
            <option value="hepsi">Hepsi / Komple Güvenlik</option>
          </select>
          {errors.service_type && <p className="text-red-500 text-xs mt-1">{errors.service_type}</p>}
        </div>

        {/* Mekan Türü */}
        <div className={compact ? "" : "sm:col-span-2"}>
          <label className={labelClass}>Mekan Türü *</label>
          <select
            name="location_type"
            value={form.location_type}
            onChange={handleChange}
            className={inputClass("location_type")}
          >
            <option value="">Seçiniz...</option>
            <option value="ev">Ev / Konut</option>
            <option value="isyeri">İşyeri / Ofis</option>
            <option value="apartman-site">Apartman / Site</option>
            <option value="fabrika-depo">Fabrika / Depo</option>
            <option value="diger">Diğer</option>
          </select>
          {errors.location_type && <p className="text-red-500 text-xs mt-1">{errors.location_type}</p>}
        </div>

        {/* Not */}
        <div className={compact ? "" : "sm:col-span-2"}>
          <label className={labelClass}>Not <span className="text-gray-400 font-normal">(opsiyonel)</span></label>
          <textarea
            name="note"
            value={form.note}
            onChange={handleChange}
            placeholder="Ek bilgi veya talebiniz varsa belirtebilirsiniz..."
            rows={compact ? 2 : 3}
            maxLength={500}
            className={`${inputClass("note")} resize-none`}
          />
          <p className="text-gray-400 text-xs mt-1 text-right">{form.note.length}/500</p>
        </div>
      </div>

      {/* Hata mesajı */}
      {status === "error" && (
        <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-3 mt-4 text-sm">
          <AlertCircle size={16} />
          Bir hata oluştu. Lütfen tekrar deneyin veya bizi arayın.
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full mt-5 flex items-center justify-center gap-2 bg-cta hover:bg-cta-hover disabled:opacity-60 text-white font-bold py-4 rounded-xl text-base transition-colors shadow-lg hover:shadow-xl"
      >
        {status === "loading" ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Gönderiliyor...
          </>
        ) : (
          "Ücretsiz Keşif ve Teklif Al"
        )}
      </button>

      <p className="text-center text-xs text-gray-400 mt-3">
        Bilgileriniz yalnızca sizinle iletişim kurmak için kullanılır.
      </p>
    </form>
  );
}
