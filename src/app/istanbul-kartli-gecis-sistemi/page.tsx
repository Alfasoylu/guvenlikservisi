import type { Metadata } from "next";
import {
  BadgeCheck,
  Building2,
  CheckCircle2,
  Clock3,
  DoorOpen,
  MapPin,
  ShieldCheck,
  Warehouse,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { getCanonicalUrlForKnownPath } from "@/lib/canonical";
import HeroCTAButtons from "@/components/HeroCTAButtons";
import IstanbulServiceQuoteForm from "@/components/IstanbulServiceQuoteForm";
import TrustSignals, {
  type TrustItem,
} from "@/components/sections/TrustSignals";
import IstanbulMoneySupportSection from "@/components/sections/IstanbulMoneySupportSection";
import IstanbulTrustLayerSection from "@/components/sections/IstanbulTrustLayerSection";
import IstanbulCoverage from "@/components/sections/IstanbulCoverage";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTA from "@/components/sections/FinalCTA";
import { istanbulMoneySupportData } from "@/data/seo/istanbul-money-pages";
import { istanbulTrustLayerData } from "@/data/seo/istanbul-trust-layer";

const PAGE_PATH = "/istanbul-kartli-gecis-sistemi";
const canonicalUrl = getCanonicalUrlForKnownPath(PAGE_PATH);

const WA_MESSAGE =
  "Merhaba, İstanbul'da kartlı geçiş sistemi hakkında bilgi almak istiyorum.";

export const metadata: Metadata = {
  title: "İstanbul Kartlı Geçiş Sistemi | Kurulum ve Entegrasyon",
  description:
    "İstanbul genelinde kartlı geçiş sistemi kurulumu. Ofis, fabrika, site ve plaza girişleri için profesyonel erişim kontrol çözümleri.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "İstanbul Kartlı Geçiş Sistemi | Kurulum ve Entegrasyon",
    description:
      "İstanbul genelinde kartlı geçiş sistemi kurulumu. Ofis, fabrika, site ve plaza girişleri için profesyonel erişim kontrol çözümleri.",
    url: canonicalUrl,
    siteName: siteConfig.name,
    locale: "tr_TR",
    type: "website",
  },
};

const trustItems: TrustItem[] = [
  { icon: Clock3, label: "Hızlı Devreye Alma" },
  { icon: MapPin, label: "İstanbul Geneli" },
  { icon: ShieldCheck, label: "Güvenli Erişim" },
  { icon: BadgeCheck, label: "Profesyonel Kurulum" },
  { icon: Wrench, label: "Ücretsiz Keşif" },
];

const placeTypes = [
  { value: "Ofis / Plaza", label: "Ofis / Plaza" },
  { value: "Fabrika / Üretim", label: "Fabrika / Üretim" },
  { value: "Site / Apartman", label: "Site / Apartman" },
  { value: "Okul / Hastane", label: "Okul / Hastane" },
  { value: "Depo / Lojistik", label: "Depo / Lojistik" },
  { value: "Diğer", label: "Diğer" },
];

const priceFactors = [
  {
    title: "Kapı Sayısı",
    desc: "Kontrol edilmesi gereken kapı ve geçiş noktası sayısı toplam maliyetin ana belirleyicisidir.",
  },
  {
    title: "Okuyucu Tipi",
    desc: "Kart, parmak izi, yüz tanıma veya QR kod gibi okuyucu tercihi fiyatı değiştirir.",
  },
  {
    title: "Yazılım ve Entegrasyon",
    desc: "Personel takibi, ziyaretçi yönetimi veya mevcut sistemlerle entegrasyon ek maliyet gerektirebilir.",
  },
  {
    title: "Turnike veya Bariyer",
    desc: "Turnike, tripod bariyer veya otomatik kapı entegrasyonu sisteme ek donanım maliyeti ekler.",
  },
  {
    title: "Kablolama",
    desc: "Okuyucu-kontrol paneli arası mesafe ve kablo altyapısının durumu işçilik maliyetini belirler.",
  },
];

const venueTypes = [
  {
    icon: Building2,
    title: "Ofis ve Plaza",
    desc: "Kat girişleri, toplantı odaları ve ortak alanlar için yetki tabanlı erişim kontrolü.",
  },
  {
    icon: Warehouse,
    title: "Fabrika ve Depo",
    desc: "Üretim alanları, hammadde depoları ve personel girişleri için kimlik doğrulamalı geçiş sistemi.",
  },
  {
    icon: DoorOpen,
    title: "Site ve Apartman",
    desc: "Bina girişleri, otopark kapıları ve ortak alanlar için sakin ve güvenli geçiş yönetimi.",
  },
];

const faqs = [
  {
    question: "Kartlı geçiş sistemi ne işe yarar?",
    answer:
      "Yetkilendirilmiş kişilerin belirlenen kapılardan geçişini kontrol eder. Giriş-çıkış kaydı tutulur, yetkisiz erişim engellenir.",
  },
  {
    question: "Hangi tür okuyucular kullanılıyor?",
    answer:
      "Proximity kart, şifreli panel, parmak izi, yüz tanıma ve QR kod okuyucu gibi seçenekler mevcuttur. İhtiyaca göre en uygun model önerilir.",
  },
  {
    question: "Mevcut kapıya entegre edilebilir mi?",
    answer:
      "Evet. Mevcut kapılara manyetik kilit veya elektrikli strike eklenerek sistem entegre edilebilir.",
  },
  {
    question: "Personel giriş-çıkış kaydı tutuluyor mu?",
    answer:
      "Evet. Sistem tüm geçişlerin tarih, saat ve kişi bazında kaydını otomatik olarak tutar.",
  },
  {
    question: "Turnike sistemi ile birlikte çalışır mı?",
    answer:
      "Evet. Kartlı geçiş sistemi turnike, tripod bariyer ve otomatik kapılarla entegre çalışabilir.",
  },
  {
    question: "Kaç kapıya kadar genişleyebilir?",
    answer:
      "Sistem modüler yapıdadır. Başlangıçta tek kapıdan başlayıp onlarca kapıya genişletilebilir.",
  },
  {
    question: "Kurulum ne kadar sürer?",
    answer:
      "Kapı sayısı ve altyapıya göre değişir. Tek kapılı basit sistemler aynı gün devreye alınabilir.",
  },
  {
    question: "İstanbul'un neresine hizmet veriyorsunuz?",
    answer:
      "İstanbul genelinde Avrupa ve Anadolu Yakası dahil tüm ilçelere hizmet veriyoruz.",
  },
];

const supportData = istanbulMoneySupportData.kartli_gecis;
const trustLayerData = istanbulTrustLayerData.kartli_gecis;

export default function IstanbulKartliGecisSistemiPage() {
  const phoneHref = `tel:${siteConfig.phone.replace(/\s/g, "")}`;
  const waHref = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(WA_MESSAGE)}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "İstanbul Kartlı Geçiş Sistemi Kurulumu",
    serviceType: "Kartlı geçiş sistemi kurulumu",
    areaServed: { "@type": "City", name: "İstanbul" },
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      telephone: siteConfig.phone,
      url: canonicalUrl,
      areaServed: "İstanbul",
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    url: canonicalUrl,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    areaServed: { "@type": "City", name: "İstanbul" },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressLocality: siteConfig.city,
      addressCountry: "TR",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };

  return (
    <main className="bg-white text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 md:px-6 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:py-20">
          <div>
            <div className="mb-5 flex flex-wrap gap-2 text-sm font-semibold">
              <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1">
                Erişim kontrolü
              </span>
              <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1">
                Profesyonel kurulum
              </span>
            </div>
            <h1 className="max-w-2xl text-4xl font-black leading-tight md:text-5xl">
              İstanbul Kartlı Geçiş Sistemi
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              Ofis, fabrika, site ve plaza girişleri için kartlı geçiş, parmak
              izi ve turnike sistemleri. Yetki bazlı erişim kontrolü ile
              güvenliğinizi bir üst seviyeye taşıyın.
            </p>
            <HeroCTAButtons
              formLabel="Kartlı Geçiş Teklifi Al"
              phoneHref={phoneHref}
              phoneDisplay={siteConfig.phone}
              waHref={waHref}
              pagePath={PAGE_PATH}
              formSource="istanbul_kartli_gecis"
              serviceType="kartli_gecis"
              pageType="istanbul_money_page"
            />
          </div>
          <div className="space-y-5">
            <div className="relative hidden overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl lg:block">
              <div className="absolute inset-0 z-10 bg-gradient-to-tr from-slate-950/25 via-transparent to-slate-950/10" />
              <Image
                src="/images/hero-guvenlik-servisi.jpg"
                alt="İstanbul'da kartlı geçiş ve güvenlik kamerası montajı yapan teknisyen"
                width={2048}
                height={1152}
                priority
                className="h-full w-full object-cover"
              />
            </div>
          <IstanbulServiceQuoteForm
            pagePath={PAGE_PATH}
            formSource="istanbul_kartli_gecis"
            serviceType="kartli_gecis"
            title="Kartlı Geçiş Teklifi Alın"
            subtitle="Geçiş noktalarınızı belirtin, size uygun çözümü sunalım."
            submitLabel="Kartlı Geçiş Teklifi Al"
            whatsappMessage={WA_MESSAGE}
            placeTypes={placeTypes}
          />
          </div>
        </div>
      </section>

      {/* TRUST SIGNALS */}
      <TrustSignals
        items={trustItems}
        bgClass="border-b border-slate-200 bg-white"
      />

      {/* SERVICE EXPLANATION */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="text-center text-3xl font-black md:text-4xl">
            Kartlı Geçiş Sistemi Nedir ve Ne Zaman Gerekir?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-8 text-slate-600">
            Kartlı geçiş sistemi; belirli kapı ve alanlara sadece yetkili
            kişilerin erişmesini sağlayan elektronik erişim kontrol çözümüdür.
            Personelin giriş-çıkışlarını kayıt altına alır, yetkisiz erişimi
            engeller ve güvenlik seviyesini artırır.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Ne zaman gerekir?",
                items: [
                  "Çalışan sayısı arttığında",
                  "Giriş-çıkış kontrolü yetersiz kaldığında",
                  "Yetkisiz erişim riski oluştuğunda",
                ],
              },
              {
                title: "Kime hitap eder?",
                items: [
                  "Ofis ve plaza yönetimleri",
                  "Fabrika ve üretim tesisleri",
                  "Site ve apartman yönetimleri",
                ],
              },
              {
                title: "Ne sağlar?",
                items: [
                  "Yetki bazlı erişim kontrolü",
                  "Giriş-çıkış kaydı ve raporlama",
                  "Kamera ve alarm ile entegrasyon",
                ],
              },
            ].map((block) => (
              <div
                key={block.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <h3 className="mb-4 text-lg font-bold text-slate-900">
                  {block.title}
                </h3>
                <ul className="space-y-2">
                  {block.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm leading-7 text-slate-600"
                    >
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />{" "}
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICE FACTORS */}
      <section
        id="fiyatlar"
        className="scroll-mt-24 bg-slate-50 py-16 md:py-20"
      >
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="text-center text-3xl font-black md:text-4xl">
            Fiyatı Belirleyen 5 Faktör
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-8 text-slate-600">
            Kartlı geçiş sistemi maliyeti aşağıdaki kriterlere göre belirlenir.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {priceFactors.map((f, i) => (
              <div
                key={f.title}
                className="rounded-2xl border border-slate-200 bg-white p-5"
              >
                <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 text-sm font-bold text-white">
                  {i + 1}
                </div>
                <h3 className="font-bold text-slate-900">{f.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUITABLE FOR */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="text-center text-3xl font-black md:text-4xl">
            Hangi Mekanlar İçin Uygun?
          </h2>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {venueTypes.map((v) => (
              <div
                key={v.title}
                className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <div className="mb-4 inline-flex rounded-2xl bg-emerald-50 p-3 text-emerald-700">
                  <v.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">{v.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <IstanbulMoneySupportSection {...supportData} />
      <IstanbulTrustLayerSection content={trustLayerData} />

      {/* ISTANBUL COVERAGE */}
      <IstanbulCoverage bgClass="bg-slate-50" />

      {/* FAQ */}
      <FAQSection
        items={faqs}
        title="Kartlı Geçiş Sistemi — Sıkça Sorulan Sorular"
      />

      {/* RELATED SERVICES */}
      <section className="border-t border-slate-200 bg-white py-12 md:py-14">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="mb-6 text-center text-2xl font-bold">
            İlgili Hizmetlerimiz
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { href: "/istanbul-alarm-sistemi", label: "Alarm Sistemi" },
              {
                href: "/istanbul-kamera-sistemi-kurulumu",
                label: "Kamera Sistemi Kurulumu",
              },
              {
                href: "/istanbul-yangin-alarm-sistemi",
                label: "Yangın Alarm Sistemi",
              },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <FinalCTA
        title="İstanbul'da Kartlı Geçiş Sistemi İçin Hemen Teklif Alın"
        subtitle="Giriş noktalarınızı güvence altına alın. Keşif ve teklif için hemen arayın."
        formHref="#teklif-formu"
        formLabel="Kartlı Geçiş Teklifi Al"
        whatsappMessage={WA_MESSAGE}
      />
    </main>
  );
}
