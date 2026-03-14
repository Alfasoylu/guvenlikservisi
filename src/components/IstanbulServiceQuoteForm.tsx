"use client";

import { FormEvent, useRef, useState } from "react";
import { CheckCircle, MessageCircle, Phone } from "lucide-react";
import { siteConfig } from "@/data/site-config";
import { useLandingAttribution } from "@/components/forms/useLandingAttribution";
import {
  formatTurkishPhoneInput,
  getTurkishPhoneValidationMessage,
  normalizeTurkishPhone,
} from "@/lib/phone";
import { pushAnalyticsEvent } from "@/lib/analytics";

const districts = [
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

interface PlaceTypeOption {
  value: string;
  label: string;
}

const defaultPlaceTypes: PlaceTypeOption[] = [
  { value: "Ev / Daire", label: "Ev / Daire" },
  { value: "Ofis", label: "Ofis" },
  { value: "Mağaza", label: "Mağaza" },
  { value: "Depo", label: "Depo" },
  { value: "Site / Apartman", label: "Site / Apartman" },
  { value: "Fabrika / Atölye", label: "Fabrika / Atölye" },
];

interface IstanbulServiceQuoteFormProps {
  pagePath: string;
  formSource: string;
  serviceType: string;
  title?: string;
  subtitle?: string;
  submitLabel?: string;
  whatsappMessage?: string;
  placeTypes?: PlaceTypeOption[];
}

export default function IstanbulServiceQuoteForm({
  pagePath,
  formSource,
  serviceType,
  title = "Ücretsiz Keşif ve Teklif Alın",
  subtitle = "Formu doldurun, sizi hızlıca arayalım.",
  submitLabel = "Teklif Talebi Gönder",
  whatsappMessage = "Merhaba, bilgi almak istiyorum.",
  placeTypes = defaultPlaceTypes,
}: IstanbulServiceQuoteFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState("");
  const [formError, setFormError] = useState("");
  const [phoneValue, setPhoneValue] = useState("");
  const [honeypot, setHoneypot] = useState("");
  const hasTrackedView = useRef(false);
  const attribution = useLandingAttribution();

  const phoneHref = `tel:${siteConfig.phone.replace(/\s/g, "")}`;
  const whatsappHref = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

  function trackFormView() {
    if (hasTrackedView.current) return;
    hasTrackedView.current = true;
    pushAnalyticsEvent("view_lead_form", {
      page_path: pagePath,
      form_source: formSource,
      lead_channel: "form",
    });
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setFormSuccess("");
    setFormError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const name = String(formData.get("name") || "");
    const phone = normalizeTurkishPhone(String(formData.get("phone") || ""));

    if (!name || !phoneValue.trim()) {
      setFormError("Lütfen ad soyad ve telefon alanlarını doldurun.");
      setIsSubmitting(false);
      return;
    }

    const phoneError = getTurkishPhoneValidationMessage(phoneValue);
    if (phoneError) {
      setFormError(phoneError);
      setIsSubmitting(false);
      return;
    }

    const payload = {
      name,
      phone,
      city: "İstanbul",
      service_type: serviceType,
      district: String(formData.get("district") || ""),
      placeType: String(formData.get("placeType") || ""),
      location_type: String(formData.get("placeType") || ""),
      message: String(formData.get("message") || ""),
      page:
        attribution.page_url ||
        (typeof window !== "undefined" ? window.location.href : ""),
      page_url:
        attribution.page_url ||
        (typeof window !== "undefined" ? window.location.href : ""),
      page_type: attribution.page_type || "landing_page",
      form_source: formSource,
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
      website: honeypot,
    };

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = (await res.json().catch(() => null)) as {
        success?: boolean;
        message?: string;
      } | null;

      if (!res.ok || !result?.success) {
        throw new Error(result?.message || "Form gönderilemedi");
      }

      pushAnalyticsEvent("submit_lead_form", {
        page_path: pagePath,
        form_source: formSource,
        lead_channel: "form",
        service_type: serviceType,
        event_category: "lead",
        value: 1,
      });

      pushAnalyticsEvent("lead_form_success", {
        page_path: pagePath,
        form_source: formSource,
        service_type: serviceType,
      });

      setFormSuccess(
        result?.message || "Talebiniz alındı. En kısa sürede sizi arayacağız.",
      );
      form.reset();
      setPhoneValue("");
      setHoneypot("");
    } catch (error) {
      setFormError(
        error instanceof Error && error.message
          ? error.message
          : "Gönderim sırasında hata oluştu. Lütfen tekrar deneyin.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div
      id="teklif-formu"
      className="scroll-mt-24 rounded-3xl bg-white p-6 text-slate-900 shadow-2xl lg:p-8"
    >
      <div className="mb-5">
        <h2 className="text-2xl font-extrabold">{title}</h2>
        <p className="mt-2 text-sm leading-6 text-slate-600">{subtitle}</p>
      </div>

      {formSuccess ? (
        <div className="rounded-2xl border border-green-200 bg-white p-6">
          <CheckCircle className="mx-auto mb-3 text-emerald-500" size={40} />
          <h3 className="mb-1 text-center text-lg font-bold text-slate-900">
            Talebiniz Alındı
          </h3>
          <p className="mb-4 text-center text-sm text-slate-600">
            {formSuccess}
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
                İstanbul&apos;da ücretsiz keşif randevusu
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
                  page_path: pagePath,
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
                  page_path: pagePath,
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
        <form
          onSubmit={handleSubmit}
          onFocusCapture={trackFormView}
          className="space-y-4"
        >
          <input
            type="hidden"
            name="page_url"
            value={attribution.page_url}
            readOnly
          />
          <input
            type="hidden"
            name="page_type"
            value={attribution.page_type}
            readOnly
          />
          <input
            type="hidden"
            name="utm_source"
            value={attribution.utm_source}
            readOnly
          />
          <input
            type="hidden"
            name="utm_medium"
            value={attribution.utm_medium}
            readOnly
          />
          <input
            type="hidden"
            name="utm_campaign"
            value={attribution.utm_campaign}
            readOnly
          />
          <input
            type="hidden"
            name="utm_term"
            value={attribution.utm_term}
            readOnly
          />
          <input
            type="hidden"
            name="utm_content"
            value={attribution.utm_content}
            readOnly
          />
          <input
            type="hidden"
            name="referrer"
            value={attribution.referrer}
            readOnly
          />
          <input
            type="hidden"
            name="timestamp"
            value={attribution.timestamp}
            readOnly
          />
          <input
            type="hidden"
            name="gclid"
            value={attribution.gclid}
            readOnly
          />
          <input
            type="hidden"
            name="fbclid"
            value={attribution.fbclid}
            readOnly
          />
          <input
            type="hidden"
            name="msclkid"
            value={attribution.msclkid}
            readOnly
          />

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
            <label htmlFor={`hp-${formSource}`}>Website</label>
            <input
              id={`hp-${formSource}`}
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold">
                Ad Soyad
              </label>
              <input
                type="text"
                name="name"
                placeholder="Ad Soyad"
                required
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-950"
              />
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold">
                Telefon
              </label>
              <input
                type="tel"
                name="phone"
                inputMode="tel"
                autoComplete="tel"
                placeholder="05xx xxx xx xx"
                required
                value={phoneValue}
                onChange={(e) =>
                  setPhoneValue(formatTurkishPhoneInput(e.target.value))
                }
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-950"
              />
            </div>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label className="mb-2 block text-sm font-semibold">İlçe</label>
              <select
                name="district"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-950"
              >
                <option value="">İlçe seçin</option>
                {districts.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="mb-2 block text-sm font-semibold">
                Mekan Türü
              </label>
              <select
                name="placeType"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-950"
              >
                <option value="">Seçin</option>
                {placeTypes.map((pt) => (
                  <option key={pt.value} value={pt.value}>
                    {pt.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold">
              Kısa Açıklama
            </label>
            <textarea
              name="message"
              rows={3}
              placeholder="İhtiyacınızı kısaca açıklayınız"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-slate-950"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex w-full items-center justify-center rounded-xl bg-slate-950 px-6 py-4 text-base font-bold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Gönderiliyor..." : submitLabel}
          </button>

          {formError && (
            <p className="rounded-xl bg-red-50 p-3 text-center text-sm font-medium text-red-600">
              {formError}
            </p>
          )}
        </form>
      )}
    </div>
  );
}
