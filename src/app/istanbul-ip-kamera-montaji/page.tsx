import type { Metadata } from "next";
import {
  BadgeCheck,
  Camera,
  CheckCircle2,
  Clock3,
  MapPin,
  ShieldCheck,
  Users,
  Warehouse,
  Wrench,
} from "lucide-react";
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

const PAGE_PATH = "/istanbul-ip-kamera-montaji";
const canonicalUrl = getCanonicalUrlForKnownPath(PAGE_PATH);

const WA_MESSAGE =
  "Merhaba, İstanbul IP kamera montajı için bilgi almak istiyorum.";

export const metadata: Metadata = {
  title: "İstanbul IP Kamera Montajı | Kamera Kurulumu",
  description:
    "İstanbul genelinde profesyonel IP kamera montajı. Ev, işyeri, mağaza ve depo için keşif, kurulum ve mobil izleme hizmeti.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "İstanbul IP Kamera Montajı | Kamera Kurulumu",
    description:
      "İstanbul genelinde profesyonel IP kamera montajı. Ev, işyeri, mağaza ve depo için keşif, kurulum ve mobil izleme hizmeti.",
    url: canonicalUrl,
    siteName: siteConfig.name,
    locale: "tr_TR",
    type: "website",
  },
};

const trustItems: TrustItem[] = [
  { icon: Clock3, label: "Aynı Gün Keşif" },
  { icon: MapPin, label: "İstanbul Geneli Hizmet" },
  { icon: ShieldCheck, label: "Garantili Kurulum" },
  { icon: BadgeCheck, label: "Uzman Teknik Ekip" },
  { icon: Wrench, label: "Ücretsiz Keşif" },
];

const priceFactors = [
  {
    title: "Kamera Sayısı",
    desc: "İzlenmesi gereken alan sayısı arttıkça kamera adedi ve buna bağlı maliyet değişir.",
  },
  {
    title: "Çözünürlük",
    desc: "2 MP, 4 MP ve 5 MP seçenekleri arasındaki fark görüntü kalitesini ve fiyatı doğrudan etkiler.",
  },
  {
    title: "Kayıt Süresi",
    desc: "7, 15 veya 30 günlük kayıt ihtiyacına göre disk kapasitesi ve NVR maliyeti değişir.",
  },
  {
    title: "Kablolama Mesafesi",
    desc: "Kameranın kayıt cihazına olan mesafesi kablo ve işçilik maliyetini belirler.",
  },
  {
    title: "Gece Görüş & Algılama",
    desc: "IR gece görüş, insan ve hareket algılama gibi özellikler fiyata etki eder.",
  },
];

const venueTypes = [
  {
    icon: Camera,
    title: "Ev ve Villa",
    desc: "Bahçe, giriş kapısı, otopark ve bina çevresi için güven veren izleme altyapısı.",
  },
  {
    icon: Users,
    title: "Ofis ve İş Yeri",
    desc: "Personel alanı, giriş çıkış ve ortak alan takibi için düzenli sistem kurgusu.",
  },
  {
    icon: Warehouse,
    title: "Mağaza ve Depo",
    desc: "Kasa çevresi, raf koridorları, yükleme alanı ve sevkiyat noktaları için net kayıt.",
  },
];

const faqs = [
  {
    question: "İstanbul IP kamera montajı ne kadar sürer?",
    answer:
      "Küçük ve orta ölçekli kurulumlar genellikle aynı gün içinde tamamlanır. Kamera sayısı ve kablolama mesafesine göre süre keşif sonrası netleşir.",
  },
  {
    question: "Hangi ilçelere hizmet veriyorsunuz?",
    answer:
      "İstanbul genelinde Avrupa ve Anadolu Yakası dahil 39 ilçeye hizmet veriyoruz.",
  },
  {
    question: "Telefondan canlı izleme kuruluyor mu?",
    answer:
      "Evet. Kurulum sonrası telefon ve tablet üzerinden canlı izleme ve geçmiş kayıt erişimi aktif edilir.",
  },
  {
    question: "Fiyatı hangi kriterler belirliyor?",
    answer:
      "Kamera adedi, çözünürlük, kayıt süresi, kablolama mesafesi ve ek özellikler fiyatı etkiler. Keşif sonrası net teklif çıkar.",
  },
  {
    question: "IP kamera mı analog kamera mı daha mantıklı?",
    answer:
      "Yeni kurulumların çoğunda IP sistemler daha net görüntü, daha iyi uzaktan erişim ve daha esnek genişleme sunar.",
  },
  {
    question: "Ücretsiz keşif yapıyor musunuz?",
    answer:
      "Evet. Projenin büyüklüğüne ve lokasyona göre ücretsiz keşif planlaması yapılır.",
  },
  {
    question: "Kurulumdan sonra teknik destek var mı?",
    answer:
      "Evet. Kurulum sonrası temel kullanım desteği sağlanır. İhtiyaca göre bakım planları da oluşturulabilir.",
  },
  {
    question: "Küçük bir işyeri için kaç kamera gerekir?",
    answer:
      "Giriş sayısı, kasa, koridor ve kritik noktaların yapısına göre genellikle 2-6 kamera yeterli olur.",
  },
];

const supportData = istanbulMoneySupportData.ip_kamera;
const trustLayerData = istanbulTrustLayerData.ip_kamera;

export default function IstanbulIpKameraMontajiPage() {
  const phoneHref = `tel:${siteConfig.phone.replace(/\s/g, "")}`;
  const waHref = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(WA_MESSAGE)}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "İstanbul IP Kamera Montajı",
    serviceType: "IP kamera montajı",
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
                İstanbul geneli hizmet
              </span>
              <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1">
                Profesyonel montaj
              </span>
            </div>
            <h1 className="max-w-2xl text-4xl font-black leading-tight md:text-5xl">
              İstanbul&apos;da IP Kamera Montajı
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              Ev, işyeri, mağaza ve depo için profesyonel IP kamera kurulumu.
              Mobil izleme, gece görüş ve kayıt altyapısı ile sisteminizi
              kullanıma hazır teslim ediyoruz.
            </p>
            <HeroCTAButtons
              formLabel="Hemen Kamera Montaj Teklifi Al"
              phoneHref={phoneHref}
              phoneDisplay={siteConfig.phone}
              waHref={waHref}
              pagePath={PAGE_PATH}
            />
          </div>
          <IstanbulServiceQuoteForm
            pagePath={PAGE_PATH}
            formSource="istanbul_ip_kamera"
            serviceType="kamera"
            title="Ücretsiz Keşif ve Teklif Alın"
            subtitle="IP kamera ihtiyacınızı belirtin, sizi hızlıca arayalım."
            submitLabel="Hemen Kamera Montaj Teklifi Al"
            whatsappMessage={WA_MESSAGE}
          />
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
            IP Kamera Montajı Nedir ve Ne Zaman Gerekir?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-8 text-slate-600">
            IP kamera montajı; ev, işyeri, mağaza veya depo gibi alanlarda
            güvenlik amacıyla dijital kamera sistemlerinin profesyonel şekilde
            kurulmasıdır. Giriş-çıkışların kontrol altına alınması, kör
            noktaların izlenmesi ve olay anında kayıt erişimi sağlanması için
            gereklidir.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Ne zaman gerekir?",
                items: [
                  "Yeni taşınılan mekanlarda",
                  "Hırsızlık veya güvenlik endişesi olduğunda",
                  "Mevcut sistem yetersiz kaldığında",
                ],
              },
              {
                title: "Kime hitap eder?",
                items: [
                  "Ev ve villa sahipleri",
                  "Ofis ve mağaza işletmeleri",
                  "Apartman ve site yönetimleri",
                ],
              },
              {
                title: "Ne sağlar?",
                items: [
                  "7/24 kayıt ve izleme",
                  "Telefondan canlı erişim",
                  "Caydırıcılık ve delil kaydı",
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
            IP kamera montaj fiyatı aşağıdaki değişkenlere göre şekillenir. Net
            fiyat keşif sonrası belirlenir.
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
        title="İstanbul IP Kamera Montajı — Sıkça Sorulan Sorular"
      />

      {/* RELATED SERVICES */}
      <section className="border-t border-slate-200 bg-white py-12 md:py-14">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="mb-6 text-center text-2xl font-bold">
            İlgili Hizmetlerimiz
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              {
                href: "/istanbul-kamera-sistemi-kurulumu",
                label: "Kamera Sistemi Kurulumu",
              },
              {
                href: "/istanbul-kamera-teknik-servis",
                label: "Kamera Teknik Servis",
              },
              {
                href: "/istanbul-kamera-bakim-servisi",
                label: "Kamera Bakım Servisi",
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
        title="İstanbul'da IP Kamera Montajı İçin Hemen Teklif Alın"
        subtitle="Ücretsiz keşif randevusu alın, ihtiyacınıza uygun sistemi birlikte belirleyelim."
        formHref="#teklif-formu"
        formLabel="Hemen Kamera Montaj Teklifi Al"
        whatsappMessage={WA_MESSAGE}
      />
    </main>
  );
}
