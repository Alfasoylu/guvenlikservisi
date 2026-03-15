import type { Metadata } from "next";
import {
  BadgeCheck,
  Building2,
  CheckCircle2,
  Clock3,
  Factory,
  Flame,
  Hotel,
  MapPin,
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

const PAGE_PATH = "/istanbul-yangin-alarm-sistemi";
const canonicalUrl = getCanonicalUrlForKnownPath(PAGE_PATH);

const WA_MESSAGE =
  "Merhaba, İstanbul'da yangın alarm sistemi hakkında bilgi almak istiyorum.";

export const metadata: Metadata = {
  title: "İstanbul Yangın Alarm Sistemi | Kurulum ve Bakım",
  description:
    "İstanbul genelinde yangın alarm sistemi kurulumu ve bakımı. İşyeri, fabrika, otel ve AVM için yangın algılama, duman dedektörü ve yangın ihbar sistemleri.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "İstanbul Yangın Alarm Sistemi | Kurulum ve Bakım",
    description:
      "İstanbul genelinde yangın alarm sistemi kurulumu ve bakımı. İşyeri, fabrika, otel ve AVM için yangın algılama, duman dedektörü ve yangın ihbar sistemleri.",
    url: canonicalUrl,
    siteName: siteConfig.name,
    locale: "tr_TR",
    type: "website",
  },
};

const trustItems: TrustItem[] = [
  { icon: Clock3, label: "Hızlı Kurulum" },
  { icon: MapPin, label: "İstanbul Geneli" },
  { icon: Flame, label: "Yangın Algılama" },
  { icon: BadgeCheck, label: "Sertifikalı Ekip" },
  { icon: Wrench, label: "Ücretsiz Keşif" },
];

const priceFactors = [
  {
    title: "Dedektör Sayısı",
    desc: "Korunan alan büyüklüğü ve kat sayısı duman, ısı ve alev dedektörü adedini doğrudan belirler.",
  },
  {
    title: "Bina Kat Sayısı",
    desc: "Çok katlı binalarda kablo altyapısı, loop hatları ve yangın zonlama ihtiyaçları maliyeti artırır.",
  },
  {
    title: "Yangın Paneli Tipi",
    desc: "Konvansiyonel veya adresli yangın ihbar paneli tercihi kapasite ve bütçeye göre belirlenir.",
  },
  {
    title: "Sertifikasyon",
    desc: "İtfaiye onayı, yangın yönetmeliği uyumluluğu ve proje belgesi gereksinimleri ek maliyet oluşturabilir.",
  },
  {
    title: "Kablolama",
    desc: "Yangına dayanıklı kablo kullanımı, hat uzunluğu ve tesisat güzergahı toplam fiyatı etkiler.",
  },
];

const venueTypes = [
  {
    icon: Building2,
    title: "İş Yeri ve Ofis",
    desc: "Açık ofis alanları, sunucu odaları ve arşiv bölümleri için duman ve ısı algılamalı yangın alarm sistemleri.",
  },
  {
    icon: Factory,
    title: "Fabrika ve Üretim",
    desc: "Üretim hatları, hammadde depoları ve kimyasal alanlarda yangın riski yönetimi için endüstriyel alarm çözümleri.",
  },
  {
    icon: Hotel,
    title: "AVM, Otel ve Hastane",
    desc: "Yoğun insan trafiğine sahip kamusal alanlarda yönetmeliklere uygun yangın ihbar ve tahliye sistemleri.",
  },
];

const faqs = [
  {
    question: "Yangın alarm sistemi nasıl çalışır?",
    answer:
      "Duman, ısı veya alev dedektörleri tehlike algıladığında yangın ihbar panelini tetikler. Panel sesli ve görsel uyarı verir, gerekli birimlere otomatik bildirim gönderir.",
  },
  {
    question: "Konvansiyonel ve adresli sistem arasındaki fark nedir?",
    answer:
      "Konvansiyonel sistemler bölgesel uyarı verir. Adresli sistemler ise her dedektörün konumunu tam olarak gösterir; büyük ve çok katlı binalarda tercih edilir.",
  },
  {
    question: "Yangın alarm sistemi zorunlu mu?",
    answer:
      "Evet. Türkiye yangın yönetmeliğine göre belirli büyüklük ve kullanım türündeki binalar için yangın algılama ve ihbar sistemi zorunludur.",
  },
  {
    question: "Duman dedektörü mü ısı dedektörü mü kullanmalıyım?",
    answer:
      "Ofis ve konaklama alanlarında duman dedektörü, mutfak ve kazan dairesi gibi duman kaynağı olan yerlerde ısı dedektörü tercih edilir. Keşif sonrası en uygun seçim yapılır.",
  },
  {
    question: "Yangın alarm bakımı ne sıklıkla yapılmalı?",
    answer:
      "Yönetmelik gereği yılda en az bir kez periyodik bakım yapılması gerekir. Yoğun kullanılan tesislerde 6 aylık periyot önerilir.",
  },
  {
    question: "Mevcut yangın alarm sistemim yükseltilebilir mi?",
    answer:
      "Evet. Mevcut altyapı değerlendirilerek panel yükseltmesi, dedektör eklenmesi veya adresli sisteme geçiş yapılabilir.",
  },
  {
    question: "Yangın alarm sistemi kurulumu ne kadar sürer?",
    answer:
      "Küçük işletmelerde 1-2 gün, büyük bina ve fabrikalarda proje kapsamına göre 1-2 hafta sürebilir. Keşif sonrası süre netleşir.",
  },
  {
    question: "İtfaiye onayı gerekli mi?",
    answer:
      "Belirli bina türlerinde yangın algılama projesi ve itfaiye uygunluk raporu gerekir. Proje ve onay sürecinde destek sağlanır.",
  },
];

const supportData = istanbulMoneySupportData.yangin;
const trustLayerData = istanbulTrustLayerData.yangin;

export default function IstanbulYanginAlarmSistemiPage() {
  const phoneHref = `tel:${siteConfig.phone.replace(/\s/g, "")}`;
  const waHref = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(WA_MESSAGE)}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "İstanbul Yangın Alarm Sistemi Kurulumu",
    serviceType: "Yangın alarm sistemi kurulumu ve bakımı",
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
                Yönetmelik uyumlu
              </span>
              <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1">
                Sertifikalı kurulum
              </span>
            </div>
            <h1 className="max-w-2xl text-4xl font-black leading-tight md:text-5xl">
              İstanbul Yangın Alarm Sistemi Kurulumu
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              İşyeri, fabrika, otel ve AVM için duman dedektörü, ısı algılama ve
              yangın ihbar paneli kurulumu. Yönetmeliklere uygun, sertifikalı
              çözümler.
            </p>
            <HeroCTAButtons
              formLabel="Yangın Alarm Teklifi Al"
              phoneHref={phoneHref}
              phoneDisplay={siteConfig.phone}
              waHref={waHref}
              pagePath={PAGE_PATH}
            />
          </div>
          <IstanbulServiceQuoteForm
            pagePath={PAGE_PATH}
            formSource="istanbul_yangin_alarm"
            serviceType="yangin_alarm"
            title="Yangın Alarm Teklifi Alın"
            subtitle="Bina bilgilerinizi paylaşın, yönetmeliğe uygun çözümü sunalım."
            submitLabel="Yangın Alarm Teklifi Al"
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
            Yangın Alarm Sistemi Nedir ve Neden Gerekir?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-8 text-slate-600">
            Yangın alarm sistemi; duman, ısı veya alev dedektörleri aracılığıyla
            yangın tehlikesini erken aşamada algılayan ve sesli/görsel
            uyarılarla tahliye sürecini başlatan can ve mal güvenliği çözümüdür.
            Türkiye yangın yönetmeliğine göre birçok bina türünde zorunludur.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Ne zaman gerekir?",
                items: [
                  "Yangın yönetmeliği kapsamındaki binalarda",
                  "Yoğun insan trafiği olan alanlarda",
                  "Yanıcı malzeme bulunan depo ve üretim tesislerinde",
                ],
              },
              {
                title: "Kime hitap eder?",
                items: [
                  "Fabrika ve üretim tesisi yöneticileri",
                  "Otel, AVM ve hastane işletmecileri",
                  "Ofis ve iş merkezi yönetimleri",
                ],
              },
              {
                title: "Ne sağlar?",
                items: [
                  "Erken yangın tespiti ve uyarı",
                  "Hızlı tahliye koordinasyonu",
                  "İtfaiye ve yönetime otomatik bildirim",
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
            Yangın alarm sistemi kurulum maliyeti aşağıdaki kriterlere göre
            değişir.
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
        title="Yangın Alarm Sistemi — Sıkça Sorulan Sorular"
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
        title="İstanbul'da Yangın Alarm Sistemi İçin Hemen Teklif Alın"
        subtitle="Binanıza uygun yangın algılama çözümünü birlikte belirleyelim. Keşif ve teklif ücretsiz."
        formHref="#teklif-formu"
        formLabel="Yangın Alarm Teklifi Al"
        whatsappMessage={WA_MESSAGE}
      />
    </main>
  );
}
