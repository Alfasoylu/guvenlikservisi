import type { Metadata } from "next";
import Link from "next/link";
import { getCanonicalUrlForKnownPath } from "@/lib/canonical";
import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Layers,
  MapPin,
  Phone,
  Server,
  ShieldCheck,
  Star,
  Wifi,
  Wrench,
} from "lucide-react";
import { siteConfig } from "@/data/site-config";
import IstanbulIpCameraQuoteForm from "@/components/IstanbulIpCameraQuoteForm";
import TrustSignals, {
  type TrustItem,
} from "@/components/sections/TrustSignals";
import IstanbulCoverage from "@/components/sections/IstanbulCoverage";
import FinalCTA from "@/components/sections/FinalCTA";
import VideoAutoplaySection from "@/components/sections/VideoAutoplaySection";

const PAGE_PATH = "/teklif/istanbul-apartman-site-ip-kamera-montaji";
const FORM_SOURCE = "ads_istanbul_ip_apartman";
const canonicalUrl = getCanonicalUrlForKnownPath(PAGE_PATH);

export const metadata: Metadata = {
  title:
    "İstanbul Apartman ve Site IP Kamera Montajı | Bina Girişi, Otopark Kurulumu",
  description:
    "İstanbul'da apartman ve site yönetimleri için IP kamera montajı. Bina girişi, otopark, asansör önü ve ortak alanlar için uzaktan erişimli profesyonel kurulum.",
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title:
      "İstanbul Apartman ve Site IP Kamera Montajı | Bina Girişi, Otopark Kurulumu",
    description:
      "İstanbul'da apartman ve site için IP kamera kurulumu. Bina girişi, otopark ve ortak alanlar için uzaktan erişimli, gece görüşlü profesyonel montaj.",
    url: canonicalUrl,
    siteName: "Güvenlik Servisi",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/landing/dis-ortam-goruntu-demo.webp`,
        width: 1200,
        height: 630,
        alt: "İstanbul Apartman ve Site IP Kamera Montajı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "İstanbul Apartman ve Site IP Kamera Montajı | Bina Girişi, Otopark Kurulumu",
    description:
      "İstanbul'da apartman ve site için IP kamera kurulumu. Bina girişi, otopark ve ortak alanlar için uzaktan erişimli, gece görüşlü profesyonel montaj.",
    images: [`${siteConfig.url}/images/landing/dis-ortam-goruntu-demo.webp`],
  },
};

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

const painPoints = [
  {
    icon: ShieldCheck,
    title: "Bina girişi ve otopark kör nokta bırakıyor",
    text: "Kapı önü, otopark köşesi, asansör önü veya bina çevresi yanlış planlanan kamera açılarıyla izlenemiyor ya da kayıt yeterince net tutulmuyor. Doğru açı planlaması ile başlıyoruz.",
  },
  {
    icon: Wifi,
    title: "Olay anında görüntüye hızlı erişilemiyor",
    text: "Araç çizigi, hırsızlık, zarar veya anlaşmazlık gibi durumlarda belirli tarih ve saatteki kayda ulaşmak çok zaman alıyor ya da sistem yetersiz kalıyor.",
  },
  {
    icon: Server,
    title: "Yönetim için stabil sistem kurgulanamamış",
    text: "Aidatla alınan sistemlerin büyük bölümü düzenli bakım veya teknik destek gerektiriyor. Doğru planlanan sistem sorunsuz çalışır ve uzun vadede masrafı azaltır.",
  },
];

const solutions = [
  "Bina girişi, otopark ve çevre için alan planı",
  "Asansör önü ve merdiven boşluğu kapsamı",
  "Yöneticiler için telefon ve tablet erişimi",
  "Gece görüşlü kamera ve kör açı analizi",
  "NVR ve kayıt kapasitesi yapıya göre planlanır",
  "Bina ölçeğine uygun sistem seçenekleri",
];

const includedItems = [
  {
    title: "Bina Keşfi ve Alan Tespiti",
    text: "Giriş noktaları, otopark, asansör önü, bina çevresi ve ortak alanlar yerinde belirlenir. Kör noktalar tespit edilir.",
  },
  {
    title: "Kamera Planı ve Altyapı",
    text: "Her alana uygun açı, kablo altyapısı ve NVR kapasitesi bina yapısına göre planlanır.",
  },
  {
    title: "Montaj ve Devreye Alma",
    text: "Kurulum, kayıt sistemi ve ağ bağlantısı tamamlanır; uzaktan erişim aktif edilir.",
  },
  {
    title: "Yönetim Teslimi ve Erişim Kurulumu",
    text: "Yönetici ve yetkili kişilere sistem erişimi, canlı izleme ve kayıt görüntüleme kurularak teslim edilir.",
  },
];

const useCases = [
  {
    icon: Building2,
    title: "Bina Girişi ve Asansör Önü",
    text: "Ana giriş kapısı, asansör çıkışı ve kat koridorları için net izleme ve kayıt altyapısı.",
  },
  {
    icon: MapPin,
    title: "Otopark ve Bina Çevresi",
    text: "Park alanı, giriş rampası, çevre duvarı ve dış kapı noktaları için gece görüşlü kapsamlı kapsam.",
  },
  {
    icon: Layers,
    title: "Ortak Alan ve Merdiven Boşluğu",
    text: "Bodrum, depo girişi, çatı katı ve merdiven koridorları için tamamlayıcı izleme noktaları.",
  },
];

const processSteps = [
  {
    title: "Bina Analizi ve Alan Tespiti",
    text: "Kaç giriş var, otopark var mı, hangi ortak alanlar kapsanacak yerinde belirlenir.",
  },
  {
    title: "Keşif ve Kamera Yerleşim Planı",
    text: "Yerinde ölçüm, açı planlaması, kör nokta analizi ve kablo altyapısı netleştirilir.",
  },
  {
    title: "Montaj ve Sistem Kurulumu",
    text: "Kamera yerleşimi, kablolama, NVR bağlantısı ve kayıt senaryosu tamamlanır.",
  },
  {
    title: "Yönetim Teslimi ve Kullanım Eğitimi",
    text: "Yönetici ve yetkililere sistem gösterilir, erişim ayarları yapılır, teslim edilir.",
  },
];

const packages = [
  {
    name: "Küçük Apartman",
    price: "15.000 TL'den başlayan",
    featured: false,
    items: [
      "2-4 kamera (bina girişi + çevre)",
      "NVR kayıt cihazı ve disk",
      "Montaj ve devreye alma",
      "Yönetici telefon erişim kurulumu",
      "1 yıl birebir değişim garantisi",
    ],
  },
  {
    name: "Orta Ölçek Site",
    price: "28.000 TL'den başlayan",
    featured: true,
    badge: "Site Yönetimi Tercihi",
    items: [
      "6-10 kamera (giriş + otopark + ortak alanlar)",
      "Gece görüşlü kameralar",
      "NVR + genişletilebilir disk planı",
      "Çoklu yönetici erişimi",
      "Akıllı hareket algılama kurulumu",
      "1 yıl birebir değişim garantisi",
    ],
  },
  {
    name: "Büyük Site / Otoparklı Bina",
    price: "Özel teklif",
    featured: false,
    items: [
      "10+ kamera için özel proje",
      "Yüksek kapasiteli kayıt altyapısı",
      "Geniş otopark ve çevre kapsamı",
      "Çoklu kullanıcı ve güvenlik birimi erişimi",
      "Bakım anlaşması opsiyonu",
      "Kurumsal destek",
    ],
  },
];

const faqs = [
  {
    q: "Bir apartman için kaç kamera gerekir?",
    a: "Bina girişi, kat çıkışları, asansör önü ve otopark gibi alanlara göre değişir. Ortalama bir apartman için 2-6 kamera arasında çözüm oluşturulur. Büyük sitelerde 10+ kamera gerekebilir. Keşif sonrası net sayı belirlenir.",
  },
  {
    q: "Otopark ve bina çevresi aynı sistemden izlenebilir mi?",
    a: "Evet. Tüm kameralar tek bir NVR kayıt cihazına bağlanır ve aynı sistem üzerinden izlenir. Farklı alanların görüntülerine tek ekrandan ulaşırsınız.",
  },
  {
    q: "Yönetici olarak telefondan sistemi izleyebilir miyim?",
    a: "Evet. Kurulum uzaktan erişime hazır şekilde teslim edilir. Yönetici ve yetkili kişiler telefon veya tabletleriyle sistemi izleyebilir, geçmiş kayıtlara ulaşabilir.",
  },
  {
    q: "Gece görüşü otopark için yeterli kalite sağlar mı?",
    a: "Doğru gece görüşlü kamera ve açı planlamasıyla otopark, giriş ve bina çevresinde gece de net kayıt tutulur. Araç ve insan hareketleri seçilebilir kalitede kaydedilir.",
  },
  {
    q: "Kayıtlar kaç gün saklanır?",
    a: "Disk kapasitesi ve kayıt kalitesine göre genellikle 7-30 gün, büyük sistemlerde 60-90 gün kayıt tutulabilir. Binanızın ihtiyacına göre disk kapasitesi planlanır.",
  },
  {
    q: "Mevcut kablo altyapısı kullanılabilir mi?",
    a: "Mevcut kablolama duruma göre değerlendirilebilir. Keşif sırasında kullanılabilir altyapı tespit edilir ve plana dahil edilir. Bu da maliyeti azaltabilir.",
  },
  {
    q: "Birden fazla yetkili aynı sistemi izleyebilir mi?",
    a: "Evet. Yönetici, güvenlik görevlisi veya kapıcı gibi farklı yetkililere ayrı erişim tanımlanabilir. Kimin ne göreceği sistem üzerinden ayarlanır.",
  },
  {
    q: "Kurulumdan sonra teknik destek veriyor musunuz?",
    a: "Evet. Kurulum sonrası temel kullanım desteği sağlanır. İhtiyaca göre bakım, kontrol ve ek destek süreçleri planlanabilir.",
  },
];

const phoneHref = `tel:${siteConfig.phone.replace(/\s/g, "")}`;
const whatsappHref = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
  "Merhaba, İstanbul apartman ve site IP kamera montajı için bilgi ve fiyat almak istiyorum.",
)}`;

export default function IstanbulApartmanSiteIpKameraMontajiPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "İstanbul Apartman ve Site IP Kamera Montajı",
    serviceType: "IP kamera montajı",
    areaServed: {
      "@type": "City",
      name: "İstanbul",
    },
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      telephone: siteConfig.phone,
      url: canonicalUrl,
      areaServed: "İstanbul",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <main className="bg-white text-slate-950">
      {/* Announcement bar */}
      <div className="bg-emerald-600 text-white">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-1 px-4 py-2.5 text-center text-sm font-semibold">
          <span>🏢 Apartman montajı 15.000 TL&#39;den başlayan</span>
          <span className="hidden text-white/50 sm:inline">·</span>
          <span>💳 Kredi kartına taksit</span>
          <span className="hidden text-white/50 sm:inline">·</span>
          <span>🧾 Faturalı garantili kurulum</span>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0">
          <Image
            src="/images/landing/istanbul-ip-kamera-hero.webp"
            alt="İstanbul apartman ve site IP kamera montajı"
            fill
            priority
            className="object-cover opacity-20"
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.18),_transparent_32%),linear-gradient(120deg,rgba(2,6,23,0.98),rgba(15,23,42,0.9),rgba(3,7,18,0.95))]" />

        <div className="relative mx-auto grid max-w-7xl gap-8 px-4 py-8 md:px-6 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:py-12">
          <div>
            <div className="mb-4 flex flex-wrap gap-2 text-sm font-semibold text-slate-100">
              <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 backdrop-blur">
                Ortak alan uzmanı
              </span>
              <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 backdrop-blur">
                Yönetim için sistem
              </span>
              <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 backdrop-blur">
                Telefondan erişim
              </span>
            </div>

            <h1 className="max-w-2xl text-4xl font-black leading-tight md:text-5xl xl:text-[64px] xl:leading-[1.05]">
              İstanbul Apartman ve Site IP Kamera Montajı
            </h1>

            <p className="mt-4 max-w-2xl text-xl font-semibold text-emerald-400 md:text-2xl">
              Bina girişi, otopark, asansör önü ve ortak alanlar için
              profesyonel kurulum
            </p>

            <p className="mt-3 max-w-2xl text-lg leading-7 text-slate-200">
              Apartman ve site yönetimleri için bina girişi, otopark, bina
              çevresi ve ortak alanları kapsayan, uzaktan erişilebilir ve
              profesyonel planlanmış IP kamera sistemleri kuruyoruz.
            </p>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="#teklif-formu"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-6 py-4 text-base font-bold text-white transition hover:bg-emerald-400"
              >
                Teklif Al
                <ArrowRight className="h-5 w-5" />
              </a>

              <a
                href={phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-base font-bold text-white transition hover:bg-white/15"
              >
                <Phone className="h-5 w-5" />
                {siteConfig.phone}
              </a>

              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-4 text-base font-bold text-emerald-700 transition hover:bg-emerald-50"
              >
                WhatsApp&#39;tan Yaz
              </a>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <div className="text-2xl font-black">500+</div>
                <div className="mt-0.5 text-sm text-slate-300">
                  Tamamlanan proje
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <div className="text-2xl font-black">12+ Yıl</div>
                <div className="mt-0.5 text-sm text-slate-300">
                  Saha tecrübesi
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur">
                <div className="text-2xl font-black">Bina & Site</div>
                <div className="mt-0.5 text-sm text-slate-300">
                  Apartman projeleri
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <IstanbulIpCameraQuoteForm
              districts={districts}
              formSource={FORM_SOURCE}
              pagePath={PAGE_PATH}
              whatsappText="Merhaba, İstanbul apartman ve site IP kamera montajı için bilgi ve fiyat almak istiyorum."
            />
          </div>
        </div>
      </section>

      <TrustSignals
        items={
          [
            { icon: Clock3, label: "Aynı Gün Keşif" },
            { icon: MapPin, label: "İstanbul Geneli Hizmet" },
            { icon: ShieldCheck, label: "Bina & Site Deneyimi" },
            { icon: BadgeCheck, label: "Garantili Montaj" },
            { icon: Wrench, label: "Yönetici Erişim Desteği" },
          ] as TrustItem[]
        }
        bgClass="border-b border-slate-200 bg-white"
      />

      <VideoAutoplaySection />

      {/* Neden bu sayfadan */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 md:px-6">
          <div className="grid gap-4 lg:grid-cols-3">
            {[
              "Bina girişi, otopark, asansör önü ve bina çevresi tek sistemden izlenir. Yönetici olarak telefondan anlık kontrol edebilirsiniz.",
              "Kayıt süresi, kamera sayısı ve kapsam binanızın yapısına göre belirlenir. Aidatla uyumlu çözüm seçenekleri sunulur.",
              "Kurulum sonrası yönetici erişimi, kayıt izleme ve kullanım eğitimi sisteme dahildir.",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-700"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain points */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
          <div className="grid gap-6 md:grid-cols-3">
            {painPoints.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
              >
                <div className="mb-4 inline-flex rounded-2xl bg-slate-950 p-3 text-white">
                  <item.icon className="h-6 w-6" />
                </div>
                <h2 className="text-xl font-black">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planning section */}
      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex rounded-full bg-slate-950 px-3 py-1 text-sm font-semibold text-white">
              Doğru planlama, doğru sonuç
            </span>
            <h2 className="mt-4 text-3xl font-black leading-tight md:text-4xl">
              Apartman ve Site Kamera Sistemi Sadece Kurulmaz, Doğru Planlanır
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Bina girişi, otopark ve ortak alanlarda kör nokta bırakmayan,
              kayıt süresini doğru planlayan ve yönetim için uzaktan erişimi
              aktif eden sistem kurgusu gerekir.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {solutions.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl bg-white p-4"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <span className="text-sm font-medium text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-white shadow-2xl ring-1 ring-slate-200">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/landing/dis-ortam-goruntu-demo.webp"
                alt="Apartman ve bina çevresi kamera kurulumu"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-black md:text-4xl">
              Apartman ve Sitelerde En Çok Kapsanan Alanlar
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Bina yapısına göre farklı noktalar öncelikli olabilir. Her alan
              için ihtiyaç analizi yaparak başlıyoruz.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {useCases.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <div className="mb-4 inline-flex rounded-2xl bg-emerald-50 p-3 text-emerald-700">
                  <item.icon className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-black">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
                <a
                  href="#teklif-formu"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-slate-950"
                >
                  Bu alan için teklif al
                  <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Night vision / parking section */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/landing/arac-plaka-goruntu-demo.webp"
                  alt="Otopark ve bina çevresi gece görüntüsü"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div>
              <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-white">
                Otopark ve bina çevresi güvenliği
              </span>
              <h2 className="mt-4 text-3xl font-black leading-tight md:text-4xl">
                Otopark ve Bina Çevresi Gece de Net İzlensin
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-300">
                Binalarda en kritik olayların büyük bölümü gece saatlerinde
                yaşanır. Otopark, bina girişi ve çevre güvenliği için gece
                görüşlü kameralar doğru açıyla yerleştirildiğinde gece de net
                kayıt tutulur.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  "Otopark ve giriş için gece görüş planlaması",
                  "Araç ve insan hareketinin net kaydedilmesi",
                  "Bina çevresinde kör nokta bırakmayan açı planı",
                  "Gece görüşünde renk veya IR kamera seçeneği",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-slate-100"
                  >
                    <CheckCircle2 className="mb-3 h-5 w-5 text-emerald-400" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section id="neler-dahil" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-black md:text-4xl">
              Apartman ve Site IP Kamera Montaj Hizmeti Neleri Kapsar?
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Bina yönetimi için kurulan kamera sistemi; doğru alan planlaması,
              stabil kayıt altyapısı ve yönetim için kullanıma hazır teslim
              sürecini kapsamalıdır.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {includedItems.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 inline-flex rounded-2xl bg-emerald-50 p-3 text-emerald-700">
                  <BadgeCheck className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-black">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-[2rem] border border-emerald-200 bg-emerald-50 p-6 md:p-8">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl font-black text-slate-950">
                  Binanız için ücretsiz keşif ve fiyat teklifi alın
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-700">
                  Kapsanacak alanları, kamera sayısını ve yönetim erişim
                  ihtiyacını birlikte netleştirip binanıza uygun sistemi
                  planlayalım.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <a
                  href="#teklif-formu"
                  className="inline-flex items-center justify-center rounded-2xl bg-emerald-600 px-5 py-3 font-bold text-white transition hover:bg-emerald-500"
                >
                  Teklif Al
                </a>
                <a
                  href={phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-emerald-300 px-5 py-3 font-bold text-slate-950 transition hover:bg-white"
                >
                  <Phone className="h-5 w-5" />
                  Hemen Ara
                </a>
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-3 font-bold text-emerald-700 transition hover:bg-emerald-100"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-800">
              Nasıl ilerliyoruz?
            </span>
            <h2 className="mt-4 text-3xl font-black md:text-4xl">
              Kurulum Süreci Nasıl İşler?
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Apartman ve site kamera kurulumunda önce bina analizi yapılır,
              ardından yerinde keşif ve kamera planı netleşir. Montaj ve yönetim
              teslimi ile tamamlanır.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-slate-950 text-base font-black text-white">
                  {index + 1}
                </div>
                <h3 className="text-xl font-black">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing factors */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-slate-950 px-3 py-1 text-sm font-semibold text-white">
              Teklif öncesi karar desteği
            </span>
            <h2 className="mt-4 text-3xl font-black md:text-4xl">
              Apartman Kurulumunda Fiyatı Belirleyen Faktörler
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Net maliyet; kapsam, kable altyapısı, kayıt süresi ve
              kullanıcı erişim yapısına göre belirlenir. Doğru fiyat için
              ihtiyaç analizi kritiktir.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {[
              {
                title: "Kapsam ve alan sayısı",
                text: "Giriş, otopark, asansör önü ve çevre gibi izlenecek alan sayısı kamera adedini belirler.",
              },
              {
                title: "Gece görüş ihtiyacı",
                text: "Otopark ve bina çevresi için gece görüşlü kamera seçimi maliyeti etkiler.",
              },
              {
                title: "Kablo altyapısı",
                text: "Kat geçişleri, dış hat mesafeleri ve mevcut kablo durumu işçiliği etkiler.",
              },
              {
                title: "Kayıt süresi",
                text: "7, 30 ya da 90 günlük kayıt için disk kapasitesi ihtiyacı farklılaşır.",
              },
              {
                title: "Kullanıcı ve erişim yapısı",
                text: "Yönetici, güvenlik görevlisi ve sakip erişimi sistem yapısını etkiler.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
              >
                <h3 className="text-xl font-black text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section id="fiyat-paketleri" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-black md:text-4xl">
              Apartman ve Site IP Kamera Paketleri
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Net fiyat; bina büyüklüğü, kamera sayısı, kayıt süresi ve montaj
              detayına göre değişir. Aşağıdaki yapılar başlangıç referansı
              olarak hazırlanmıştır.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-[2rem] border p-7 shadow-sm ${
                  pkg.featured
                    ? "border-slate-950 bg-slate-950 text-white"
                    : "border-slate-200 bg-white"
                }`}
              >
                {pkg.badge && (
                  <div className="mb-4 inline-flex rounded-full bg-emerald-500 px-3 py-1 text-xs font-bold text-white">
                    {pkg.badge}
                  </div>
                )}

                <h3 className="text-2xl font-black">{pkg.name}</h3>
                <div className="mt-3 text-3xl font-black">{pkg.price}</div>

                <div className="mt-6 space-y-3">
                  {pkg.items.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2
                        className={`mt-0.5 h-5 w-5 shrink-0 ${
                          pkg.featured
                            ? "text-emerald-400"
                            : "text-emerald-600"
                        }`}
                      />
                      <span
                        className={`text-sm leading-7 ${
                          pkg.featured ? "text-slate-200" : "text-slate-700"
                        }`}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <a
                  href="#teklif-formu"
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-2xl px-5 py-4 text-sm font-bold transition ${
                    pkg.featured
                      ? "bg-white text-slate-950 hover:bg-slate-100"
                      : "bg-slate-950 text-white hover:bg-slate-800"
                  }`}
                >
                  Teklif İste
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Post-install support */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <span className="inline-flex rounded-full bg-slate-950 px-3 py-1 text-sm font-semibold text-white">
                Teslim sonrası güven
              </span>
              <h2 className="mt-4 text-3xl font-black leading-tight md:text-4xl">
                Kurulum Sonrası Yönetimi Sistemi Kullanmaya Hazır Bırakıyoruz
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Bina yönetimi için kurulan sistemin değeri; yöneticinin
                erişimi, kayıt izleme ve teknik destek süreçleriyle birlikte
                tamamlanır.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Yönetici telefon ve tablet erişim kurulumu",
                  "Canlı izleme ve geçmiş kayıt kullanımı gösterimi",
                  "Kurulum sonrası teknik destek yönlendirmesi",
                  "İhtiyaca göre bakım hizmeti planlaması",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-slate-200 bg-white p-4 text-sm font-medium text-slate-700"
                  >
                    <CheckCircle2 className="mb-3 h-5 w-5 text-emerald-600" />
                    {item}
                  </div>
                ))}
              </div>

              <p className="mt-8 text-sm leading-7 text-slate-600">
                Genel IP kamera montaj bilgisi için{" "}
                <Link
                  href="/kamera-sistemi-kurulumu"
                  className="font-bold text-slate-950 underline underline-offset-4"
                >
                  kamera sistemi kurulumu
                </Link>{" "}
                sayfasını, İstanbul özelinde{" "}
                <Link
                  href="/istanbul/kamera-sistemi-kurulumu"
                  className="font-bold text-slate-950 underline underline-offset-4"
                >
                  İstanbul kamera sistemi kurulumu
                </Link>{" "}
                sayfasını inceleyebilirsiniz.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl">
              <h3 className="text-2xl font-black text-slate-950">
                Kurulumdan sonra da sistemi kullanmaya hazır bırakıyoruz
              </h3>
              <div className="mt-6 space-y-4">
                {[
                  "Yönetici erişim kurulumu teslim anında tamamlanır.",
                  "Canlı izleme ve geçmiş kayıt erişimi gösterilir.",
                  "İhtiyaç halinde bakım ve kontrol planı oluşturulur.",
                ].map((item) => (
                  <div key={item} className="flex gap-3 rounded-2xl bg-slate-50 p-4">
                    <BadgeCheck className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                    <span className="text-sm leading-7 text-slate-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <IstanbulCoverage bgClass="bg-slate-50" />

      {/* Testimonials */}
      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-black md:text-4xl">
              Yönetimler Neden Bizi Tercih Ediyor?
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Bina ve site yönetimleri sorunsuz çalışan, yönetici erişimine
              hazır sistem istiyor. Süreci bu bakışla yönetiyoruz.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              {
                text: "Apartmanımızın girişi, asansör önü ve otopark alanı planladığımız şekilde kuruldu. Yönetici olarak telefondan izleyebiliyorum.",
                name: "Kadir M.",
                role: "İstanbul · Apartman Yöneticisi",
              },
              {
                text: "Site genelinde 8 noktaya kamera kuruldu. Gece görüntü kalitesi ve kayıt süresi beklentimizin üzerinde oldu.",
                name: "Fatma Y.",
                role: "İstanbul · Site Yönetimi",
              },
              {
                text: "Bina girişi ve otopark için doğru noktalar keşif sonrası belirlendi. Kurulum temizdi, sistem sorunsuz çalışıyor.",
                name: "Serkan A.",
                role: "İstanbul · Bina Sakini",
              },
            ].map((item) => (
              <div
                key={item.name}
                className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6"
              >
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className="h-5 w-5 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <p className="text-sm leading-7 text-slate-700">
                  &ldquo;{item.text}&rdquo;
                </p>
                <div className="mt-5">
                  <div className="font-bold">{item.name}</div>
                  <div className="text-sm text-slate-500">{item.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="sss" className="bg-slate-950 text-white">
        <div className="mx-auto max-w-5xl px-4 py-16 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-black md:text-4xl">
              Sık Sorulan Sorular
            </h2>
          </div>

          <div className="mt-10 space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <summary className="cursor-pointer list-none text-lg font-bold">
                  {faq.q}
                </summary>
                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA
        formHref="#teklif-formu"
        bgClass="bg-emerald-600"
        title="İstanbul'da Apartman ve Site IP Kamera Montajı İçin Hemen Teklif Alın"
        subtitle="Avrupa ve Anadolu yakasında aynı gün keşif. Ücretsiz keşif randevusu alın, profesyonel ekibimiz sizi arasın."
        whatsappMessage="Merhaba, İstanbul apartman ve site IP kamera montajı için teklif almak istiyorum."
      />
    </main>
  );
}
