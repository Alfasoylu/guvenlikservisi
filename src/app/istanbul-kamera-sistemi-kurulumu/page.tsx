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

const PAGE_PATH = "/istanbul-kamera-sistemi-kurulumu";
const canonicalUrl = getCanonicalUrlForKnownPath(PAGE_PATH);

const WA_MESSAGE =
  "Merhaba, İstanbul'da kamera sistemi kurulumu için bilgi almak istiyorum.";

export const metadata: Metadata = {
  title: "İstanbul Kamera Sistemi Kurulumu | Profesyonel Güvenlik Kamerası",
  description:
    "İstanbul genelinde profesyonel kamera sistemi kurulumu. Analog, IP ve hibrit sistemler için keşif, projelendirme ve montaj hizmeti.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "İstanbul Kamera Sistemi Kurulumu | Profesyonel Güvenlik Kamerası",
    description:
      "İstanbul genelinde profesyonel kamera sistemi kurulumu. Analog, IP ve hibrit sistemler için keşif, projelendirme ve montaj hizmeti.",
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
    title: "Kamera Sayısı ve Tipi",
    desc: "Dome, bullet veya PTZ kamera tercihi ile ihtiyaç duyulan adet fiyatın temel belirleyicisidir.",
  },
  {
    title: "Kayıt Altyapısı",
    desc: "NVR/DVR kayıt cihazının kapasitesi, disk sayısı ve kayıt süresi maliyeti etkiler.",
  },
  {
    title: "Kablolama",
    desc: "Kamera-kayıt cihazı arası mesafe, duvar geçişleri ve kanal kullanımı kablo maliyetini belirler.",
  },
  {
    title: "Çözünürlük",
    desc: "2 MP, 4 MP veya 5 MP çözünürlük seçimi hem kamera hem depolama maliyetini değiştirir.",
  },
  {
    title: "Ek Özellikler",
    desc: "Gece görüş, akıllı algılama, ses kaydı ve uzaktan erişim gibi özellikler fiyata eklenir.",
  },
];

const venueTypes = [
  {
    icon: Camera,
    title: "Ev ve Villa",
    desc: "Bahçe, giriş, garaj ve bina çevresi için caydırıcı ve izleme odaklı kamera sistemi.",
  },
  {
    icon: Users,
    title: "Ofis ve İşletme",
    desc: "Giriş-çıkış, toplantı odası, ortak alan ve sunucu odası için profesyonel sistem kurulumu.",
  },
  {
    icon: Warehouse,
    title: "Depo ve Sanayi",
    desc: "Yükleme rampaları, üretim alanları, otopark ve çevre güvenliği için geniş açılı kamera çözümleri.",
  },
];

const faqs = [
  {
    question: "Kamera sistemi kurulumu ne kadar sürer?",
    answer:
      "Küçük ve orta ölçekli projeler genellikle 1 gün içinde tamamlanır. Büyük projelerde keşif sonrası net süre belirlenir.",
  },
  {
    question: "IP mi analog mı tercih etmeliyim?",
    answer:
      "Yeni kurulumlarda IP sistemler daha net görüntü ve kolay uzaktan erişim sunar. Bütçeye ve altyapıya göre en uygun seçenek önerilir.",
  },
  {
    question: "Telefondan canlı izleyebilir miyim?",
    answer:
      "Evet. Kurulum sonrası telefon, tablet ve bilgisayar üzerinden canlı izleme ve geçmiş kayıt erişimi sağlanır.",
  },
  {
    question: "Arıza durumunda ne yapılıyor?",
    answer:
      "Garanti süresi içinde ücretsiz müdahale yapılır. Garanti sonrasında da uygun fiyatlı teknik servis hizmeti sunuyoruz.",
  },
  {
    question: "Mevcut sistemi genişletebilir miyim?",
    answer:
      "Evet. Mevcut altyapıya yeni kamera eklemesi, NVR yükseltmesi veya kablo iyileştirmesi yapılabilir.",
  },
  {
    question: "Gece görüş ne kadar etkili?",
    answer:
      "Doğru kamera ve doğru yerleşimle gece görüş mesafesi 30-50 metreye kadar çıkabilir. Keşif sonrası uygun model önerilir.",
  },
  {
    question: "Kamera kurulumu için internete ihtiyaç var mı?",
    answer:
      "Kayıt için internet gerekmez. Ancak telefondan uzaktan erişim için internet bağlantısı gereklidir.",
  },
  {
    question: "Ücretsiz keşif yapıyor musunuz?",
    answer:
      "Evet. Projenin büyüklüğüne ve lokasyona göre ücretsiz keşif planlaması yapılır.",
  },
];

const supportData = istanbulMoneySupportData.kamera_kurulum;
const trustLayerData = istanbulTrustLayerData.kamera_kurulum;

export default function IstanbulKameraSistemiKurulumuPage() {
  const phoneHref = `tel:${siteConfig.phone.replace(/\s/g, "")}`;
  const waHref = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(WA_MESSAGE)}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "İstanbul Kamera Sistemi Kurulumu",
    serviceType: "Güvenlik kamera sistemi kurulumu",
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
                Profesyonel kurulum
              </span>
              <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1">
                Ücretsiz keşif
              </span>
            </div>
            <h1 className="max-w-2xl text-4xl font-black leading-tight md:text-5xl">
              İstanbul Kamera Sistemi Kurulumu
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              Ev, ofis, mağaza ve sanayi tesisleri için analog, IP ve hibrit
              güvenlik kamera sistemleri. Keşiften montaja, uygulamadan devreye
              almaya kadar komple hizmet.
            </p>
            <HeroCTAButtons
              formLabel="Kamera Sistemi Teklifi Al"
              phoneHref={phoneHref}
              phoneDisplay={siteConfig.phone}
              waHref={waHref}
              pagePath={PAGE_PATH}
            />
          </div>
          <IstanbulServiceQuoteForm
            pagePath={PAGE_PATH}
            formSource="istanbul_kamera_kurulum"
            serviceType="kamera"
            title="Kamera Sistemi Teklifi Alın"
            subtitle="İhtiyacınızı belirtin, keşif ve teklif planlayalım."
            submitLabel="Kamera Sistemi Teklifi Al"
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
            Kamera Sistemi Kurulumu Nedir ve Ne Zaman Gerekir?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-8 text-slate-600">
            Kamera sistemi kurulumu; güvenlik amacıyla bir mekana profesyonel
            şekilde kamera, kayıt cihazı ve izleme altyapısının
            yerleştirilmesidir. Yeni mekanlar, güvenlik ihtiyacı artan tesisler
            ve eski sistem yenilemelerinde gereklidir.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Ne zaman gerekir?",
                items: [
                  "Yeni taşınılan mekanlarda",
                  "Güvenlik açığı tespit edildiğinde",
                  "Mevcut sistem yetersiz kaldığında",
                ],
              },
              {
                title: "Kime hitap eder?",
                items: [
                  "Ev ve villa sahipleri",
                  "Mağaza, ofis ve işletmeler",
                  "Site yönetimleri ve sanayi tesisleri",
                ],
              },
              {
                title: "Ne sağlar?",
                items: [
                  "7/24 görüntülü izleme",
                  "Kayıt ve delil altyapısı",
                  "Telefondan uzaktan erişim",
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
            Kamera sistemi kurulum maliyeti aşağıdaki değişkenlere göre
            farklılık gösterir.
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
        title="Kamera Sistemi Kurulumu — Sıkça Sorulan Sorular"
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
                href: "/istanbul-ip-kamera-montaji",
                label: "IP Kamera Montajı",
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
        title="İstanbul'da Kamera Sistemi Kurulumu İçin Hemen Teklif Alın"
        subtitle="Ücretsiz keşif randevusu alın, mekanınıza uygun sistemi birlikte belirleyelim."
        formHref="#teklif-formu"
        formLabel="Kamera Sistemi Teklifi Al"
        whatsappMessage={WA_MESSAGE}
      />
    </main>
  );
}
