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
import IstanbulMoneySupportSection from "@/components/sections/IstanbulMoneySupportSection";
import IstanbulTrustLayerSection from "@/components/sections/IstanbulTrustLayerSection";
import IstanbulCoverage from "@/components/sections/IstanbulCoverage";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTA from "@/components/sections/FinalCTA";
import { istanbulMoneySupportData } from "@/data/seo/istanbul-money-pages";
import { istanbulTrustLayerData } from "@/data/seo/istanbul-trust-layer";

const PAGE_PATH = "/istanbul-kamera-bakim-servisi";
const canonicalUrl = getCanonicalUrlForKnownPath(PAGE_PATH);

const WA_MESSAGE =
  "Merhaba, İstanbul'da kamera bakım servisi hakkında bilgi almak istiyorum.";

export const metadata: Metadata = {
  title: "İstanbul Kamera Bakım Servisi | Periyodik Bakım ve Kontrol",
  description:
    "İstanbul genelinde kamera bakım servisi. Periyodik kontrol, lens temizliği, disk sağlığı ve sistem güncelleme hizmeti.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "İstanbul Kamera Bakım Servisi | Periyodik Bakım ve Kontrol",
    description:
      "İstanbul genelinde kamera bakım servisi. Periyodik kontrol, lens temizliği, disk sağlığı ve sistem güncelleme hizmeti.",
    url: canonicalUrl,
    siteName: siteConfig.name,
    locale: "tr_TR",
    type: "website",
  },
};

const trustItems: TrustItem[] = [
  { icon: Clock3, label: "Planlı Bakım" },
  { icon: MapPin, label: "İstanbul Geneli" },
  { icon: ShieldCheck, label: "Sistem Güvencesi" },
  { icon: BadgeCheck, label: "Uzman Teknik Ekip" },
  { icon: Wrench, label: "Periyodik Kontrol" },
];

const priceFactors = [
  {
    title: "Kamera Sayısı",
    desc: "Bakım yapılacak kamera adedi toplam işçilik süresini ve maliyeti doğrudan belirler.",
  },
  {
    title: "Sistem Yaşı",
    desc: "Eski sistemlerde firmware güncelleme, kablo yenileme gibi ek işlemler gerekebilir.",
  },
  {
    title: "Mekan Büyüklüğü",
    desc: "Geniş alanlarda daha fazla kamera ve kablolama noktası kontrol edilmesi gerekir.",
  },
  {
    title: "Bakım Periyodu",
    desc: "Yıllık, 6 aylık veya 3 aylık bakım sözleşmeleri farklı fiyat avantajları sunar.",
  },
  {
    title: "Ek İhtiyaçlar",
    desc: "Disk değişimi, kamera yönlendirme, yazılım güncelleme gibi ek talepler maliyete eklenir.",
  },
];

const venueTypes = [
  {
    icon: Home,
    title: "Ev ve Villa",
    desc: "Bahçe, giriş ve otopark kameralarının düzenli bakımı ile sürekli izleme kalitesi.",
  },
  {
    icon: Building2,
    title: "Ofis ve İşletme",
    desc: "Giriş-çıkış, ortak alan ve kritik bölge kameralarının periyodik kontrol ve temizliği.",
  },
  {
    icon: Warehouse,
    title: "Depo ve Fabrika",
    desc: "Sanayi ortamlarındaki toz, nem ve sıcaklık etkisine karşı düzenli bakım ile sistem ömrünü uzatma.",
  },
];

const faqs = [
  {
    question: "Kamera bakımı neden gerekli?",
    answer:
      "Düzenli bakım; görüntü kalitesinin korunması, disk sağlığının takibi, kablo bağlantılarının kontrolü ve olası arızaların erken tespiti için gereklidir.",
  },
  {
    question: "Ne sıklıkla bakım yaptırmalıyım?",
    answer:
      "Genel kullanımlarda yılda 2 kez bakım önerilir. Yoğun kullanılan endüstriyel alanlarda 3 aylık periyotlar tercih edilebilir.",
  },
  {
    question: "Bakım sözleşmesi avantajlı mı?",
    answer:
      "Evet. Sözleşmeli bakımlarda birim maliyet düşer, öncelikli servis hakkı ve acil müdahale avantajı sağlanır.",
  },
  {
    question: "Bakımda neler kontrol ediliyor?",
    answer:
      "Kamera lensleri, kablo bağlantıları, NVR/DVR disk sağlığı, kayıt süresi, uzaktan erişim, firmware durumu ve genel sistem performansı kontrol edilir.",
  },
  {
    question: "Bakım sırasında kayıt devam eder mi?",
    answer:
      "Bakım işlemi sırasında kısa süreli kesintiler olabilir ancak mümkün olduğunca kayıt sürekliliği korunur.",
  },
  {
    question: "Başka firmanın kurduğu sisteme bakım yapıyor musunuz?",
    answer:
      "Evet. Farklı firmalar tarafından kurulan sistemlere de bakım ve kontrol hizmeti veriyoruz.",
  },
  {
    question: "Bakım sonrası rapor veriyor musunuz?",
    answer:
      "Evet. Bakım sonrası sistem durumu, yapılan işlemler ve öneriler içeren rapor paylaşılır.",
  },
  {
    question: "İstanbul'un hangi ilçelerine geliyorsunuz?",
    answer:
      "İstanbul genelinde Avrupa ve Anadolu Yakası dahil 39 ilçeye bakım servisi sunuyoruz.",
  },
];

const supportData = istanbulMoneySupportData.kamera_bakim;
const trustLayerData = istanbulTrustLayerData.kamera_bakim;

export default function IstanbulKameraBakimServisiPage() {
  const phoneHref = `tel:${siteConfig.phone.replace(/\s/g, "")}`;
  const waHref = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(WA_MESSAGE)}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "İstanbul Kamera Bakım Servisi",
    serviceType: "Kamera bakım servisi",
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
                Periyodik bakım
              </span>
              <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1">
                Sözleşmeli hizmet
              </span>
            </div>
            <h1 className="max-w-2xl text-4xl font-black leading-tight md:text-5xl">
              İstanbul Kamera Bakım Servisi
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              Kamera sisteminizin performansını korumak için düzenli bakım,
              kontrol ve temizlik hizmeti. İstanbul genelinde planlı bakım
              ekipleri.
            </p>
            <HeroCTAButtons
              formLabel="Bakım Servisi Talep Et"
              phoneHref={phoneHref}
              phoneDisplay={siteConfig.phone}
              waHref={waHref}
              pagePath={PAGE_PATH}
            />
          </div>
          <IstanbulServiceQuoteForm
            pagePath={PAGE_PATH}
            formSource="istanbul_kamera_bakim"
            serviceType="bakim"
            title="Bakım Talebi Oluşturun"
            subtitle="Sisteminiz hakkında bilgi verin, bakım planlaması yapalım."
            submitLabel="Bakım Servisi Talep Et"
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
            Kamera Bakım Servisi Nedir ve Ne Zaman Gerekir?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-8 text-slate-600">
            Kamera bakım servisi; mevcut güvenlik sistemlerinin periyodik olarak
            kontrol edilmesi, temizlenmesi ve performansının korunmasıdır. Arıza
            oluşmadan önce sorunları tespit ederek sistem ömrünü uzatır ve kayıp
            riski azaltır.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Ne zaman gerekir?",
                items: [
                  "Görüntü kalitesi düştüğünde",
                  "Kayıt cihazı uyarı verdiğinde",
                  "6 aydan uzun süredir bakım yapılmadığında",
                ],
              },
              {
                title: "Kime hitap eder?",
                items: [
                  "Mevcut sistemi olan ev sahipleri",
                  "İşletmeler ve mağazalar",
                  "Apartman ve site yönetimleri",
                ],
              },
              {
                title: "Ne sağlar?",
                items: [
                  "Arıza riskini azaltır",
                  "Görüntü kalitesini korur",
                  "Disk ve cihaz ömrünü uzatır",
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
            Bakım Fiyatını Belirleyen 5 Faktör
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-8 text-slate-600">
            Bakım maliyeti aşağıdaki kriterlere göre şekillenir.
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
        title="Kamera Bakım Servisi — Sıkça Sorulan Sorular"
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
                href: "/istanbul-kamera-teknik-servis",
                label: "Kamera Teknik Servis",
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
        title="İstanbul'da Kamera Bakım Servisi İçin Hemen Arayın"
        subtitle="Sisteminizin düzenli bakımını planlayın, arıza riskini minimuma indirin."
        formHref="#teklif-formu"
        formLabel="Bakım Servisi Talep Et"
        whatsappMessage={WA_MESSAGE}
      />
    </main>
  );
}
