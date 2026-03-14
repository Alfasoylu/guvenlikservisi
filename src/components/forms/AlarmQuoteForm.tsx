"use client";

import { useRef, useState } from "react";
import { CheckCircle, MessageCircle, Phone } from "lucide-react";
import { useLandingAttribution } from "@/components/forms/useLandingAttribution";
import {
  formatTurkishPhoneInput,
  getTurkishPhoneValidationMessage,
  normalizeTurkishPhone,
} from "@/lib/phone";
import { pushAnalyticsEvent } from "@/lib/analytics";
import { siteConfig } from "@/data/site-config";

type FormState = {
  name: string;
  phone: string;
  email: string;
  city: string;
  district: string;
  location_type: string;
  message: string;
  website: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  email: "",
  city: "İstanbul",
  district: "",
  location_type: "",
  message: "",
  website: "",
};

export default function AlarmQuoteForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const hasTrackedView = useRef(false);
  const attribution = useLandingAttribution();

  const phoneHref = `tel:${siteConfig.phone.replace(/\s/g, "")}`;
  const whatsappHref = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Merhaba, alarm sistemi kurulumu hakkında bilgi ve fiyat almak istiyorum.")}`;

  function trackFormView() {
    if (hasTrackedView.current) return;
    hasTrackedView.current = true;
    pushAnalyticsEvent("view_lead_form", {
      page_path: "/teklif/alarm",
      form_source: "alarm_landing_page",
      lead_channel: "form",
      service_type: "alarm",
    });
  }

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const phoneError = getTurkishPhoneValidationMessage(form.phone);

    if (phoneError) {
      setErrorMessage(phoneError);
      return;
    }

    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const payload = {
        name: form.name.trim(),
        phone: normalizeTurkishPhone(form.phone),
        email: form.email.trim(),
        city: form.city.trim() || "İstanbul",
        district: form.district.trim(),
        service_type: "alarm",
        location_type: form.location_type.trim(),
        camera_count: "",
        message: form.message.trim(),
        website: form.website,
        page_url: attribution.page_url || `${siteConfig.url}/teklif/alarm`,
        page_type: attribution.page_type || "landing_page",
        form_source: "alarm_landing_page",
        utm_source: attribution.utm_source,
        utm_medium: attribution.utm_medium,
        utm_campaign: attribution.utm_campaign,
        utm_term: attribution.utm_term,
        utm_content: attribution.utm_content,
        referrer: attribution.referrer,
        timestamp: attribution.timestamp,
        gclid: attribution.gclid,
        fbclid: attribution.fbclid,
        msclkid: attribution.msclkid,
        notes: "alarm sayfası formu",
      };

      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Form gönderilemedi");
      }

      pushAnalyticsEvent("submit_lead_form", {
        page_path: "/teklif/alarm",
        form_source: "alarm_landing_page",
        lead_channel: "form",
        service_type: "alarm",
        event_category: "lead",
        value: 1,
      });

      pushAnalyticsEvent("lead_form_success", {
        page_path: "/teklif/alarm",
        form_source: "alarm_landing_page",
        service_type: "alarm",
      });

      setSuccessMessage(
        result.message || "Talebiniz alındı. Ekibimiz en kısa sürede sizinle iletişime geçecek."
      );
      setForm(initialState);
      hasTrackedView.current = false;
    } catch (error) {
      console.error("alarm form submit error", error);
      setErrorMessage(
        error instanceof Error && error.message
          ? error.message
          : "Form gönderilirken bir hata oluştu. Lütfen tekrar deneyin veya bizi arayın."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-3xl bg-white p-6 text-slate-900 shadow-2xl">
      {successMessage ? (
        <div className="rounded-2xl border border-green-200 bg-white p-6">
          <CheckCircle className="mx-auto mb-3 text-emerald-500" size={40} />
          <h3 className="mb-1 text-center text-lg font-bold text-slate-900">
            Talebiniz Alındı
          </h3>
          <p className="mb-4 text-center text-sm text-slate-600">
            {successMessage}
          </p>
          <div className="mb-4 rounded-xl bg-slate-50 p-3">
            <ol className="space-y-2 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-[10px] font-bold text-white">
                  1
                </span>
                Ekibimiz sizi en kısa sürede arayacak
              </li>
              <li className="flex items-start gap-2">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-[10px] font-bold text-white">
                  2
                </span>
                Ücretsiz keşif ve alarm ihtiyaç analizi
              </li>
              <li className="flex items-start gap-2">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500 text-[10px] font-bold text-white">
                  3
                </span>
                Detaylı teklif ve kurulum planı
              </li>
            </ol>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            <a
              href={phoneHref}
              onClick={() =>
                pushAnalyticsEvent("click_call", {
                  page_path: "/teklif/alarm",
                  lead_channel: "phone",
                  cta_slot: "form_success",
                })
              }
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
            >
              <Phone size={16} /> Hemen Ara
            </a>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                pushAnalyticsEvent("click_whatsapp", {
                  page_path: "/teklif/alarm",
                  lead_channel: "whatsapp",
                  cta_slot: "form_success",
                })
              }
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#20BD5A]"
            >
              <MessageCircle size={16} /> WhatsApp ile Yazın
            </a>
          </div>
        </div>
      ) : (
      <form onSubmit={handleSubmit} onFocusCapture={trackFormView} className="space-y-5">
        <input type="hidden" name="service_type" value="alarm" />
        <input type="hidden" name="form_source" value="alarm_landing_page" />
        <input type="hidden" name="camera_count" value="" />
        <input type="hidden" name="notes" value="alarm sayfası formu" />
        <input type="hidden" name="page_url" value={attribution.page_url} readOnly />
        <input type="hidden" name="page_type" value={attribution.page_type} readOnly />
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
          style={{ position: "absolute", left: "-5000px", top: "auto", width: "1px", height: "1px", overflow: "hidden" }}
        >
          <label htmlFor="alarm-website">Website</label>
          <input
            id="alarm-website"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={form.website}
            onChange={(e) => updateField("website", e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-semibold">
            Ad Soyad
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={(e) => updateField("name", e.target.value)}
            placeholder="Adınız ve soyadınız"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-500"
          />
        </div>

        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-semibold">
            Telefon
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            value={form.phone}
            onChange={(e) => updateField("phone", formatTurkishPhoneInput(e.target.value))}
            placeholder="05xx xxx xx xx"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-500"
          />
        </div>

        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-semibold">
            E-posta
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={(e) => updateField("email", e.target.value)}
            placeholder="ornek@mail.com"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-500"
          />
        </div>

        <div>
          <label htmlFor="city" className="mb-2 block text-sm font-semibold">
            Şehir
          </label>
          <input
            id="city"
            name="city"
            type="text"
            required
            value={form.city}
            onChange={(e) => updateField("city", e.target.value)}
            placeholder="İstanbul"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-500"
          />
        </div>

        <div>
          <label htmlFor="district" className="mb-2 block text-sm font-semibold">
            İlçe
          </label>
          <input
            id="district"
            name="district"
            type="text"
            value={form.district}
            onChange={(e) => updateField("district", e.target.value)}
            placeholder="Örn: Şişli, Kadıköy, Bakırköy"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-500"
          />
        </div>

        <div>
          <label htmlFor="location_type" className="mb-2 block text-sm font-semibold">
            Mekan Türü
          </label>
          <select
            id="location_type"
            name="location_type"
            required
            value={form.location_type}
            onChange={(e) => updateField("location_type", e.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-500"
          >
            <option value="">Seçiniz</option>
            <option value="Ev / Daire">Ev / Daire</option>
            <option value="Ofis">Ofis</option>
            <option value="Dükkan / Mağaza">Dükkan / Mağaza</option>
            <option value="Depo">Depo</option>
            <option value="Apartman Girişi">Apartman Girişi</option>
            <option value="Villa">Villa</option>
            <option value="Diğer">Diğer</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="mb-2 block text-sm font-semibold">
            Kısa Bilgi
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={form.message}
            onChange={(e) => updateField("message", e.target.value)}
            placeholder="Kaç giriş var, kablolu mu kablosuz mu düşünüyorsunuz, aciliyet nedir?"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-500"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-red-600 px-6 py-4 text-base font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Gönderiliyor..." : "Teklif Talebi Gönder"}
        </button>

        {errorMessage ? (
          <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {errorMessage}
          </div>
        ) : null}

        <p className="text-xs leading-6 text-slate-500">
          Formu doldurduğunuzda bilgileriniz teklif değerlendirmesi için ekibimize iletilir.
        </p>
      </form>
      )}
    </div>
  );
}
