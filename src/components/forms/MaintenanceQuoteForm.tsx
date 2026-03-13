"use client";

import { useState } from "react";

type FormState = {
  company: string;
  name: string;
  phone: string;
  email: string;
  city: string;
  district: string;
  location_type: string;
  camera_count: string;
  system_scope: string;
  message: string;
};

const initialState: FormState = {
  company: "",
  name: "",
  phone: "",
  email: "",
  city: "",
  district: "",
  location_type: "",
  camera_count: "",
  system_scope: "",
  message: "",
};

export default function MaintenanceQuoteForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const composedMessage = [
        form.company.trim() ? `Firma / Tesis: ${form.company.trim()}` : "",
        form.system_scope.trim()
          ? `Sistem Kapsamı: ${form.system_scope.trim()}`
          : "",
        form.message.trim() ? `Detay: ${form.message.trim()}` : "",
      ]
        .filter(Boolean)
        .join(" | ");

      const payload = {
        name: form.name.trim(),
        phone: form.phone.trim(),
        email: form.email.trim(),
        city: form.city.trim(),
        district: form.district.trim(),
        service_type: "bakim-servis",
        location_type: form.location_type.trim(),
        camera_count: form.camera_count.trim(),
        message: composedMessage,
        page_url:
          typeof window !== "undefined"
            ? window.location.href
            : "https://guvenlikservisi.com/bakim-servis-uzaktan-izleme",
        form_source: "maintenance_contract_page",
        notes: [
          "lead_type: kurumsal_bakim",
          "pricing: aylik_2000_tl_baslangic",
          form.company.trim() ? `company:${form.company.trim()}` : "",
          form.system_scope.trim() ? `scope:${form.system_scope.trim()}` : "",
        ]
          .filter(Boolean)
          .join(" | "),
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

      setSuccessMessage(
        "Talebiniz alındı. Kurumsal bakım ekibimiz teklif hazırlığı için sizinle iletişime geçecek."
      );
      setForm(initialState);
    } catch (error) {
      console.error("maintenance form submit error", error);
      setErrorMessage(
        "Form gönderilirken bir hata oluştu. Lütfen tekrar deneyin veya doğrudan bizi arayın."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="rounded-3xl bg-white p-6 text-slate-900 shadow-2xl">
      <form onSubmit={handleSubmit} className="space-y-5">
        <input type="hidden" name="service_type" value="bakim-servis" />
        <input type="hidden" name="form_source" value="maintenance_contract_page" />

        <div>
          <label htmlFor="company" className="mb-2 block text-sm font-semibold">
            Firma / Site / Tesis Adı
          </label>
          <input
            id="company"
            name="company"
            type="text"
            required
            value={form.company}
            onChange={(e) => updateField("company", e.target.value)}
            placeholder="Örn: ABC Residence Yönetimi / XYZ Fabrika"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-500"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-semibold">
              Yetkili Kişi
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={form.name}
              onChange={(e) => updateField("name", e.target.value)}
              placeholder="Ad Soyad"
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
              required
              value={form.phone}
              onChange={(e) => updateField("phone", e.target.value)}
              placeholder="05xx xxx xx xx"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-500"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
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
              placeholder="ornek@firma.com"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-500"
            />
          </div>

          <div>
            <label htmlFor="city" className="mb-2 block text-sm font-semibold">
              İl
            </label>
            <input
              id="city"
              name="city"
              type="text"
              required
              value={form.city}
              onChange={(e) => updateField("city", e.target.value)}
              placeholder="Örn: İstanbul"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-500"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="district"
              className="mb-2 block text-sm font-semibold"
            >
              İlçe
            </label>
            <input
              id="district"
              name="district"
              type="text"
              value={form.district}
              onChange={(e) => updateField("district", e.target.value)}
              placeholder="Örn: Şişli / Çerkezköy / Nilüfer"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-500"
            />
          </div>

          <div>
            <label
              htmlFor="location_type"
              className="mb-2 block text-sm font-semibold"
            >
              Tesis Tipi
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
              <option value="Site / Rezidans">Site / Rezidans</option>
              <option value="Fabrika / Üretim Tesisi">Fabrika / Üretim Tesisi</option>
              <option value="Depo / Lojistik Alanı">Depo / Lojistik Alanı</option>
              <option value="Plaza / Ofis Binası">Plaza / Ofis Binası</option>
              <option value="AVM / Ticari Alan">AVM / Ticari Alan</option>
              <option value="Mağaza / Zincir Şube">Mağaza / Zincir Şube</option>
              <option value="Kampüs / Eğitim Yapısı">Kampüs / Eğitim Yapısı</option>
              <option value="Diğer">Diğer</option>
            </select>
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="camera_count"
              className="mb-2 block text-sm font-semibold"
            >
              Tahmini Kamera / Sistem Büyüklüğü
            </label>
            <input
              id="camera_count"
              name="camera_count"
              type="text"
              value={form.camera_count}
              onChange={(e) => updateField("camera_count", e.target.value)}
              placeholder="Örn: 32 kamera / 4 blok / 2 kayıt cihazı"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-500"
            />
          </div>

          <div>
            <label
              htmlFor="system_scope"
              className="mb-2 block text-sm font-semibold"
            >
              Kapsam
            </label>
            <select
              id="system_scope"
              name="system_scope"
              value={form.system_scope}
              onChange={(e) => updateField("system_scope", e.target.value)}
              className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-500"
            >
              <option value="">Seçiniz</option>
              <option value="Sadece kamera sistemi">
                Sadece kamera sistemi
              </option>
              <option value="Kamera + alarm">
                Kamera + alarm
              </option>
              <option value="Kamera + alarm + yangın">
                Kamera + alarm + yangın
              </option>
              <option value="Komple güvenlik altyapısı">
                Komple güvenlik altyapısı
              </option>
              <option value="Mevcut sistemi analiz edip teklif verin">
                Mevcut sistemi analiz edip teklif verin
              </option>
            </select>
          </div>
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
            placeholder="Kaç blok / kaç bina var, mevcut sorunlar neler, aylık bakım mı yıllık sözleşme mi düşünüyorsunuz, uzaktan izleme ihtiyacı var mı?"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 outline-none transition focus:border-red-500"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-red-600 px-6 py-4 text-base font-semibold text-white transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Gönderiliyor..." : "Bakım Sözleşmesi Teklifi İste"}
        </button>

        {successMessage ? (
          <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">
            {successMessage}
          </div>
        ) : null}

        {errorMessage ? (
          <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
            {errorMessage}
          </div>
        ) : null}

        <p className="text-xs leading-6 text-slate-500">
          Büyük tesis işlerinde hızlı ve doğru teklif için sistem kapsamını net
          yazmanız dönüş süresini kısaltır.
        </p>
      </form>
    </div>
  );
}
