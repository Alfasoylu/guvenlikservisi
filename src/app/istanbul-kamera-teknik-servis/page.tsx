import type { Metadata } from "next";
import {
  BadgeCheck,
  Building2,
  CheckCircle2,
  Clock3,
  MapPin,
  ShieldCheck,
  Store,
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

const PAGE_PATH = "/istanbul-kamera-teknik-servis";
const canonicalUrl = getCanonicalUrlForKnownPath(PAGE_PATH);

const WA_MESSAGE =
  "Merhaba, İstanbul'da kamera teknik servis hizmeti hakkında bilgi almak istiyorum.";

export const metadata: Metadata = {
  title: "İstanbul Kamera Teknik Servis | Arıza Tespit ve Onarım",
  description:
    "İstanbul genelinde kamera teknik servis hizmeti. Arıza tespit, onarım, kablo değişimi ve sistem güncelleme için hızlı ekip desteği.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "İstanbul Kamera Teknik Servis | Arıza Tespit ve Onarım",
    description:
      "İstanbul genelinde kamera teknik servis hizmeti. Arıza tespit, onarım, kablo değişimi ve sistem güncelleme için hızlı ekip desteği.",
    url: canonicalUrl,
    siteName: siteConfig.name,
    locale: "tr_TR",
    type: "website",
  },
};

const trustItems: TrustItem[] = [
  { icon: Clock3, label: "Aynı Gün Servis" },
  { icon: MapPin, label: "İstanbul Geneli" },
  { icon: ShieldCheck, label: "Garantili Onarım" },
  { icon: BadgeCheck, label: "Uzman Teknisyen" },
  { icon: Wrench, label: "Hızlı Arıza Tespit" },
];

const priceFactors = [
  {
    title: "Arıza Türü",
    desc: "Kamera, kayıt cihazı, kablo veya yazılımsal arızanın türü maliyet üzerinde belirleyicidir.",
  },
  {
    title: "Cihaz Modeli",
    desc: "Farklı marka ve modellerde yedek parça bulunabilirliği ve işçilik süresi değişir.",
  },
  {
    title: "Kamera Sayısı",
    desc: "Arızalı veya kontrol edilmesi gereken kamera sayısı servis süresini ve maliyeti etkiler.",
  },
  {
    title: "Kablolama Durumu",
    desc: "Hasarlı veya eski kablo altyapısının yenilenmesi ek maliyet gerektirebilir.",
  },
  {
    title: "Erişim Zorluğu",
    desc: "Yüksek veya ulaşılması zor noktalardaki kameralar için ek işçilik gerekir.",
  },
];

const venueTypes = [
  {
    icon: Store,
    title: "Mağaza ve Dükkan",
    desc: "Kasa, giriş ve raf alanlarındaki kameraların arıza tespiti ve onarımı.",
  },
  {
    icon: Building2,
    title: "Ofis ve İş Yeri",
    desc: "Giriş-çıkış, ortak alan ve sunucu odası kameralarının teknik servis hizmeti.",
  },
  {
    icon: Warehouse,
    title: "Depo ve Fabrika",
    desc: "Yükleme alanı, üretim hattı ve çevre güvenlik kameralarının bakım ve onarımı.",
  },
];

const faqs = [
  {
    question: "Kamera arızası aynı gün giderilebilir mi?",
    answer:
      "Arızanın türüne bağlı olarak birçok sorun aynı gün yerinde tespit edilip çözülebilir. Yedek parça gerektiren durumlarda süre uzayabilir.",
  },
  {
    question: "Hangi marka kameralara servis veriyorsunuz?",
    answer:
      "Hikvision, Dahua, Uniview, Samsung, Bosch ve diğer yaygın markalar dahil birçok sisteme teknik servis sağlıyoruz.",
  },
  {
    question: "Kamera görüntüsü bulanıksa ne yapılır?",
    answer:
      "Lens temizliği, odaklama ayarı, kablo bağlantısı veya çözünürlük ayarı kontrol edilir. Gerekirse kamera değişimi önerilir.",
  },
  {
    question: "NVR/DVR kayıt cihazı arızasına müdahale ediyor musunuz?",
    answer:
      "Evet. Kayıt cihazı, disk arızası, yazılım güncellemeleri ve network ayarları dahil tüm sistem bileşenlerine müdahale ediyoruz.",
  },
  {
    question: "Servis ücreti ne kadar?",
    answer:
      "Arızanın türü, cihaz sayısı ve lokasyona göre değişir. Ön bilgi aldıktan sonra yaklaşık maliyet paylaşılır.",
  },
  {
    question: "Başka firmanın kurduğu sisteme de servis veriyor musunuz?",
    answer:
      "Evet. Farklı firmalar tarafından kurulan sistemlere de teknik servis, onarım ve bakım hizmeti veriyoruz.",
  },
  {
    question: "Kamera sistemim eski, güncelleme yapılabilir mi?",
    answer:
      "Evet. Mevcut altyapı değerlendirilerek kamera, NVR veya yazılım güncellemesi yapılabilir.",
  },
  {
    question: "Uzaktan teknik destek veriyor musunuz?",
    answer:
      "Evet. Uzaktan erişim ayarları, uygulama sorunları ve yazılımsal arızalar için uzaktan destek sağlıyoruz.",
  },
];

const supportData = istanbulMoneySupportData.kamera_teknik_servis;
const trustLayerData = istanbulTrustLayerData.kamera_teknik_servis;

export default function IstanbulKameraTeknikServisPage() {
  const phoneHref = `tel:${siteConfig.phone.replace(/\s/g, "")}`;
  const waHref = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(WA_MESSAGE)}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "İstanbul Kamera Teknik Servis",
    serviceType: "Kamera teknik servis",
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
                Aynı gün servis
              </span>
              <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1">
                Tüm markalar
              </span>
            </div>
            <h1 className="max-w-2xl text-4xl font-black leading-tight md:text-5xl">
              İstanbul Kamera Teknik Servis
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              Kamera sisteminizde arıza, görüntü kaybı veya bağlantı sorunu mu
              yaşıyorsunuz? İstanbul genelinde aynı gün teknik servis ekibi
              gönderiyoruz.
            </p>
            <HeroCTAButtons
              formLabel="Teknik Servis Talebi Oluştur"
              phoneHref={phoneHref}
              phoneDisplay={siteConfig.phone}
              waHref={waHref}
              pagePath={PAGE_PATH}
            />
          </div>
          <IstanbulServiceQuoteForm
            pagePath={PAGE_PATH}
            formSource="istanbul_kamera_teknik_servis"
            serviceType="teknik_servis"
            title="Teknik Servis Talebi"
            subtitle="Arıza detayını belirtin, en kısa sürede ekip yönlendirelim."
            submitLabel="Teknik Servis Talebi Oluştur"
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
            Kamera Teknik Servis Nedir ve Ne Zaman Gerekir?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-8 text-slate-600">
            Kamera teknik servis; mevcut güvenlik kamera sistemlerinde yaşanan
            arızaların tespit edilmesi, onarılması ve sistemin yeniden çalışır
            hale getirilmesidir. Görüntü kaybı, bağlantı kopması, kayıt sorunu
            veya cihaz arızası gibi durumlarda profesyonel müdahale gerekir.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Ne zaman gerekir?",
                items: [
                  "Kamera görüntüsü gelmediğinde",
                  "Kayıt cihazı çalışmadığında",
                  "Uzaktan erişim kesildiğinde",
                ],
              },
              {
                title: "Kime hitap eder?",
                items: [
                  "Mevcut sistemi arızalanan işletmeler",
                  "Eski sistem kullanan ev sahipleri",
                  "Düzenli bakım yaptırmak isteyenler",
                ],
              },
              {
                title: "Ne sağlar?",
                items: [
                  "Hızlı arıza çözümü",
                  "Sistem sürekliliği",
                  "Gereksiz cihaz değişiminden kaçınma",
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
            Servis Fiyatını Belirleyen 5 Faktör
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-8 text-slate-600">
            Teknik servis maliyeti aşağıdaki kriterlere göre değişir.
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
        title="Kamera Teknik Servis — Sıkça Sorulan Sorular"
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
                href: "/istanbul-kamera-bakim-servisi",
                label: "Kamera Bakım Servisi",
              },
              {
                href: "/istanbul-ip-kamera-montaji",
                label: "IP Kamera Montajı",
              },
              {
                href: "/istanbul-kamera-sistemi-kurulumu",
                label: "Kamera Sistemi Kurulumu",
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
        title="İstanbul'da Kamera Teknik Servis İçin Hemen Arayın"
        subtitle="Arızanızı anlatın, aynı gün ekip yönlendirelim."
        formHref="#teklif-formu"
        formLabel="Teknik Servis Talebi Oluştur"
        whatsappMessage={WA_MESSAGE}
      />
    </main>
  );
}
