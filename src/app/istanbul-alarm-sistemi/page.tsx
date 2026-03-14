import type { Metadata } from "next";
import {
  BadgeCheck,
  Building2,
  CheckCircle2,
  Clock3,
  Home,
  MapPin,
  ShieldCheck,
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
import IstanbulCoverage from "@/components/sections/IstanbulCoverage";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTA from "@/components/sections/FinalCTA";

const PAGE_PATH = "/istanbul-alarm-sistemi";
const canonicalUrl = getCanonicalUrlForKnownPath(PAGE_PATH);

const WA_MESSAGE =
  "Merhaba, İstanbul'da alarm sistemi kurulumu hakkında bilgi almak istiyorum.";

export const metadata: Metadata = {
  title: "İstanbul Alarm Sistemi Kurulumu | Hırsız Alarm ve Güvenlik",
  description:
    "İstanbul genelinde alarm sistemi kurulumu. Ev, işyeri ve mağaza için hırsız alarm, hareket sensörü ve güvenlik sistemleri.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "İstanbul Alarm Sistemi Kurulumu | Hırsız Alarm ve Güvenlik",
    description:
      "İstanbul genelinde alarm sistemi kurulumu. Ev, işyeri ve mağaza için hırsız alarm, hareket sensörü ve güvenlik sistemleri.",
    url: canonicalUrl,
    siteName: siteConfig.name,
    locale: "tr_TR",
    type: "website",
  },
};

const trustItems: TrustItem[] = [
  { icon: Clock3, label: "Aynı Gün Kurulum" },
  { icon: MapPin, label: "İstanbul Geneli" },
  { icon: ShieldCheck, label: "7/24 Koruma" },
  { icon: BadgeCheck, label: "Sertifikalı Ekip" },
  { icon: Wrench, label: "Ücretsiz Keşif" },
];

const priceFactors = [
  {
    title: "Alan Büyüklüğü",
    desc: "Korunan alanın metrekaresi sensör ve dedektör sayısını, dolayısıyla maliyeti belirler.",
  },
  {
    title: "Sensör Tipi ve Sayısı",
    desc: "Hareket, manyetik kapı/pencere, cam kırılma ve duman dedektörlerinin sayısı fiyatı etkiler.",
  },
  {
    title: "Alarm Paneli",
    desc: "Kablolu veya kablosuz panel tercihi, zone kapasitesi ve iletişim modülü maliyete yansır.",
  },
  {
    title: "Bağlantı Yöntemi",
    desc: "GSM, Wi-Fi veya internet üzerinden bildirim yapısı ek donanım ve abonelik gerektirebilir.",
  },
  {
    title: "Entegrasyon",
    desc: "Kamera, kartlı geçiş veya akıllı ev sistemiyle entegrasyon ek maliyet oluşturabilir.",
  },
];

const venueTypes = [
  {
    icon: Home,
    title: "Ev ve Villa",
    desc: "Kapı, pencere, bahçe ve garaj alanlarında hırsızlığa karşı caydırıcı alarm koruması.",
  },
  {
    icon: Building2,
    title: "Ofis ve İşletme",
    desc: "Çalışma saatleri dışında ofis ve ortak alan güvenliği için alarm sistemleri.",
  },
  {
    icon: Warehouse,
    title: "Mağaza ve Depo",
    desc: "Mağaza girişi, kasa alanı ve depo kapıları için hareket algılamalı alarm çözümleri.",
  },
];

const faqs = [
  {
    question: "Alarm sistemi nasıl çalışır?",
    answer:
      "Sensörler izinsiz giriş veya hareket algıladığında alarm panelini tetikler. Panel siren çalar ve belirlenen numaralara bildirim gönderir.",
  },
  {
    question: "Kablolu mu kablosuz mu tercih etmeliyim?",
    answer:
      "Kablosuz sistemler kurulum kolaylığı sunar. Kablolu sistemler ise daha stabil çalışır. Mekan yapısına göre en uygun çözüm önerilir.",
  },
  {
    question: "Elektrik kesildiğinde alarm çalışır mı?",
    answer:
      "Evet. Alarm panellerinde yedek batarya bulunur. Elektrik kesildiğinde sistem batarya ile çalışmaya devam eder.",
  },
  {
    question: "Telefondan alarm durumunu görebilir miyim?",
    answer:
      "Evet. Uyumlu panellerde telefon uygulaması ile alarm durumu, sensör geçmişi ve açma/kapama işlemleri uzaktan yapılabilir.",
  },
  {
    question: "Alarm sistemi kamera ile birlikte çalışır mı?",
    answer:
      "Evet. Alarm tetiklendiğinde kamera kaydı başlatma veya bildirim gönderme gibi entegrasyonlar kurulabilir.",
  },
  {
    question: "Yanlış alarm durumunda ne olur?",
    answer:
      "Doğru sensör yerleşimi ve hassasiyet ayarı ile yanlış alarm riski minimuma indirilir. Gerekirse bölgesel engelleme yapılır.",
  },
  {
    question: "Alarm sistemi kurulumu ne kadar sürer?",
    answer:
      "Standart ev veya işyeri alarm kurulumu genellikle aynı gün tamamlanır. Büyük projelerde keşif sonrası süre netleşir.",
  },
  {
    question: "Mevcut alarm sistemimi yükseltebilir miyim?",
    answer:
      "Evet. Mevcut altyapı değerlendirilerek panel değişimi, sensör ekleme veya kablosuz sisteme geçiş yapılabilir.",
  },
];

export default function IstanbulAlarmSistemiPage() {
  const phoneHref = `tel:${siteConfig.phone.replace(/\s/g, "")}`;
  const waHref = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(WA_MESSAGE)}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "İstanbul Alarm Sistemi Kurulumu",
    serviceType: "Alarm sistemi kurulumu",
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
                7/24 koruma
              </span>
              <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1">
                Profesyonel kurulum
              </span>
            </div>
            <h1 className="max-w-2xl text-4xl font-black leading-tight md:text-5xl">
              İstanbul Alarm Sistemi Kurulumu
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              Ev, işyeri ve mağaza için hırsız alarm, hareket algılama ve
              kapı/pencere sensörleri ile güvenliğinizi 7/24 koruma altına alın.
            </p>
            <HeroCTAButtons
              formLabel="Alarm Sistemi Teklifi Al"
              phoneHref={phoneHref}
              phoneDisplay={siteConfig.phone}
              waHref={waHref}
              pagePath={PAGE_PATH}
            />
          </div>
          <IstanbulServiceQuoteForm
            pagePath={PAGE_PATH}
            formSource="istanbul_alarm"
            serviceType="alarm"
            title="Alarm Sistemi Teklifi Alın"
            subtitle="Mekanınızı belirtin, güvenlik ihtiyacınıza uygun çözümü sunalım."
            submitLabel="Alarm Sistemi Teklifi Al"
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
            Alarm Sistemi Nedir ve Ne Zaman Gerekir?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-8 text-slate-600">
            Alarm sistemi; izinsiz giriş, hırsızlık ve güvenlik ihlali
            durumlarında sesli uyarı ile bildirim sağlayan elektronik güvenlik
            çözümüdür. Sensörler aracılığıyla kapı, pencere ve hareket
            alanlarını sürekli izler, tehdit algılandığında anında müdahale
            imkanı sunar.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Ne zaman gerekir?",
                items: [
                  "Hırsızlık riski yüksek bölgelerde",
                  "Mesai saatleri dışında koruma gerektiğinde",
                  "Mevcut güvenlik önlemleri yetersiz kaldığında",
                ],
              },
              {
                title: "Kime hitap eder?",
                items: [
                  "Ev ve villa sahipleri",
                  "Mağaza ve esnaflar",
                  "Ofis ve işletme yöneticileri",
                ],
              },
              {
                title: "Ne sağlar?",
                items: [
                  "Caydırıcılık ve erken uyarı",
                  "Tehdit anında sesli alarm",
                  "Telefona anlık bildirim",
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
            Alarm sistemi kurulum maliyeti aşağıdaki kriterlere göre değişir.
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

      {/* ISTANBUL COVERAGE */}
      <IstanbulCoverage bgClass="bg-slate-50" />

      {/* FAQ */}
      <FAQSection items={faqs} title="Alarm Sistemi — Sıkça Sorulan Sorular" />

      {/* RELATED SERVICES */}
      <section className="border-t border-slate-200 bg-white py-12 md:py-14">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="mb-6 text-center text-2xl font-bold">
            İlgili Hizmetlerimiz
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              {
                href: "/istanbul-yangin-alarm-sistemi",
                label: "Yangın Alarm Sistemi",
              },
              {
                href: "/istanbul-kartli-gecis-sistemi",
                label: "Kartlı Geçiş Sistemi",
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
        title="İstanbul'da Alarm Sistemi Kurulumu İçin Hemen Teklif Alın"
        subtitle="Mekanınıza uygun alarm sistemini birlikte belirleyelim. Keşif ve teklif ücretsiz."
        formHref="#teklif-formu"
        formLabel="Alarm Sistemi Teklifi Al"
        whatsappMessage={WA_MESSAGE}
      />
    </main>
  );
}
