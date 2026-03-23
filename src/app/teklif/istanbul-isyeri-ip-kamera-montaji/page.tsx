import type { Metadata } from "next";
import Link from "next/link";
import { getCanonicalUrlForKnownPath } from "@/lib/canonical";
import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle2,
  ChevronRight,
  Clock3,
  MapPin,
  Phone,
  Server,
  ShieldCheck,
  Star,
  Users,
  Warehouse,
  Wifi,
  Wrench,
  ShoppingBag,
} from "lucide-react";
import { siteConfig } from "@/data/site-config";
import IstanbulIpCameraQuoteForm from "@/components/IstanbulIpCameraQuoteForm";
import TrustSignals, {
  type TrustItem,
} from "@/components/sections/TrustSignals";
import IstanbulCoverage from "@/components/sections/IstanbulCoverage";
import FinalCTA from "@/components/sections/FinalCTA";
import VideoAutoplaySection from "@/components/sections/VideoAutoplaySection";

const PAGE_PATH = "/teklif/istanbul-isyeri-ip-kamera-montaji";
const FORM_SOURCE = "ads_istanbul_ip_isyeri";
const canonicalUrl = getCanonicalUrlForKnownPath(PAGE_PATH);

export const metadata: Metadata = {
  title: "İstanbul İşyeri IP Kamera Montajı | Ofis, Mağaza, Depo Kurulumu",
  description:
    "İstanbul'da ofis, mağaza, kafe, depo ve atölye için IP kamera montajı. Kasa, giriş ve depo alanları için uzaktan izlenebilir, kayıt alınabilir profesyonel kurulum.",
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "İstanbul İşyeri IP Kamera Montajı | Ofis, Mağaza, Depo Kurulumu",
    description:
      "İstanbul'da işyeri IP kamera kurulumu. Kasa, giriş, depo ve otopark için uzaktan erişimli, gece görüşlü profesyonel montaj.",
    url: canonicalUrl,
    siteName: "Güvenlik Servisi",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: `${siteConfig.url}/images/landing/isyeri-ip-kamera-gercek-saha-monitor.webp`,
        width: 1200,
        height: 630,
        alt: "İstanbul İşyeri IP Kamera Montajı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "İstanbul İşyeri IP Kamera Montajı | Ofis, Mağaza, Depo Kurulumu",
    description:
      "İstanbul'da işyeri IP kamera kurulumu. Kasa, giriş, depo ve otopark için uzaktan erişimli, gece görüşlü profesyonel montaj.",
    images: [
      `${siteConfig.url}/images/landing/isyeri-ip-kamera-gercek-saha-monitor.webp`,
    ],
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
    title: "Kasa ve giriş noktanız kör nokta bırakmasın",
    text: "Küçük açı kayması, yanlış kamera seçimi veya eksik kablo planlaması; kasa önü, giriş kapısı ya da depo girişinin görünmez kalmasına yol açar. Doğru açı planlaması ile başlayoruz.",
  },
  {
    icon: Wifi,
    title: "İşyeriniz kapalıyken uzaktan kontrol edin",
    text: "Hafta sonu, gece veya tatil günlerinde işletmenizde ne döndüğünü anlık olarak görebilmek için sistem kurulumunun uzaktan erişime hazır teslim edilmesi gerekir.",
  },
  {
    icon: Server,
    title: "Olay anında kayda hızlıca ulaşın",
    text: "Hırsızlık, hasar, personel anlaşmazlığı veya müşteri şikayetinde belirli tarih ve saatteki kayda hızlıca ulaşabilmek, sistemin en kritik özelliğidir. NVR yapısı ve disk kapasitesi buna göre planlanır.",
  },
];

const solutions = [
  "Kasa, giriş ve depo için bölge bazlı planlama",
  "PoE altyapı ile temiz ve stabil kurulum",
  "Gece görüşlü kameralar için doğru açı seçimi",
  "İşletme dışından telefon ve tablet erişimi",
  "Olay anında kayıt izleme ve geri sarma",
  "NVR ve disk kapasitesi ihtiyaca göre belirlenir",
];

const includedItems = [
  {
    title: "İşyeri Keşfi ve Kritik Alan Analizi",
    text: "Kasa, giriş, depo, otopark ve personel alanı belirlenir. Kör noktalar ve risk alanları sahada tespit edilir.",
  },
  {
    title: "Cihaz ve Altyapı Planlaması",
    text: "Kamera çözünürlüğü, gece görüş ihtiyacı, NVR kapasitesi ve kablo altyapısı işyerinize göre planlanır.",
  },
  {
    title: "Montaj ve Kayıt Sistemi Kurulumu",
    text: "Tavan ve duvar montajı, kablolama, NVR bağlantısı ve kayıt senaryosu tamamlanır.",
  },
  {
    title: "Telefon Erişimi ve Kullanım Teslimi",
    text: "İşletmeciye ve yetkili kişilere mobil izleme, canlı görüntü ve kayıt erişimi kurularak teslim edilir.",
  },
];

const useCases = [
  {
    icon: Users,
    title: "Ofis ve Klinik",
    text: "Giriş kapısı, resepsiyon, personel alanı ve arşiv bölgesi için düzenli izleme altyapısı.",
  },
  {
    icon: ShoppingBag,
    title: "Mağaza ve Kafe",
    text: "Kasa önü, müşteri alanı, depo girişi ve giriş kapısı için net kayıt ve canlı izleme.",
  },
  {
    icon: Warehouse,
    title: "Depo ve Atölye",
    text: "Yükleme rampası, raf koridoru, makine alanı ve çevre güvenliği için kapsamlı kapsam planı.",
  },
];

const processSteps = [
  {
    title: "İşyeri İhtiyaç Analizi",
    text: "Kaç giriş var, kasa nerede, depo var mı, gece izleme gerekli mi belirlenir. Kapsam netleştirilir.",
  },
  {
    title: "Keşif ve Kamera Planı",
    text: "Yerinde ölçüm, açı planlaması, kör nokta analizi ve kablo altyapısı netleştirilir.",
  },
  {
    title: "Montaj ve Sistem Aktivasyonu",
    text: "Kurulum, kayıt cihazı devreye alma ve ağ bağlantısı tamamlanır. Sistem test edilir.",
  },
  {
    title: "Telefon Bağlantısı ve Eğitim",
    text: "İşletmeci ve yetkili kişiler için mobil erişim kurulur. Canlı izleme ve kayıt kullanımı gösterilir.",
  },
];

const packages = [
  {
    name: "Küçük İşyeri",
    price: "15.000 TL'den başlayan",
    featured: false,
    items: [
      "2-4 adet IP kamera (ofis, kafe, küçük mağaza)",
      "Giriş ve kasa alanı kapsamı",
      "NVR kayıt cihazı ve disk",
      "Montaj ve devreye alma",
      "Telefon erişim kurulumu",
      "1 yıl birebir değişim garantisi",
    ],
  },
  {
    name: "Orta Ölçek İşletme",
    price: "25.000 TL'den başlayan",
    featured: true,
    badge: "En Çok Tercih Edilen",
    items: [
      "4-8 adet gece görüşlü IP kamera",
      "Kasa, giriş, depo ve otopark kapsamı",
      "NVR + disk planlaması",
      "Çoklu kullanıcı erişimi",
      "Akıllı hareket algılama kurulumu",
      "1 yıl birebir değişim garantisi",
    ],
  },
  {
    name: "Depo ve Atölye",
    price: "Özel teklif",
    featured: false,
    items: [
      "8+ kamera için özel planlama",
      "Büyük alan ve yüksek tavan montajı",
      "Yüksek kapasiteli kayıt altyapısı",
      "Çevre ve yükleme noktaları kapsamı",
      "Bakım anlaşması opsiyonu",
      "Kurumsal destek",
    ],
  },
];

const faqs = [
  {
    q: "Küçük bir işyeri için kaç kamera yeterli olur?",
    a: "Giriş sayısı, kasa alanı, depo girişi ve varsa otopark gibi kritik noktalara göre değişir. Çoğu küçük işyerinde 2-6 kamera arasında çözüm oluşturulur. Keşif sonrası net sayı belirlenir.",
  },
  {
    q: "İşyerim kapalıyken telefondan izleyebilir miyim?",
    a: "Evet. Kurulum uzaktan erişime hazır şekilde teslim edilir. İnternet bağlantısı olan her yerden telefon veya tabletinizle sistemi canlı olarak izleyebilirsiniz.",
  },
  {
    q: "Gece görüntüsü işyerinde yeterli kalite sağlar mı?",
    a: "Doğru gece görüşlü kamera ve açı seçimi yapıldığında kasa, giriş ve depo alanlarında gece de net kayıt tutulur. Kamera modeli işyerinizin aydınlatma yapısına göre belirlenir.",
  },
  {
    q: "Elektrik kesilirse kayıtlar ne olur?",
    a: "Kayıtlar NVR üzerindeki diske kaydedildiği için kopma olmaz. Elektrik geldiğinde sistem kaldığı yerden devam eder. UPS eklenmesi halinde kısa süreli kesintilerde sistem çalışmaya devam eder.",
  },
  {
    q: "Kayıtlar kaç gün saklanır?",
    a: "Disk kapasitesi ve kayıt kalitesine göre genellikle 7-30 gün arasında kayıt tutulur. İşyerinizin ihtiyacına göre disk kapasitesi planlanır.",
  },
  {
    q: "Birden fazla kişi aynı sistemi izleyebilir mi?",
    a: "Evet. İşletmeci ve yetkili kişilere ayrı ayrı erişim tanımlanabilir. Kimin sisteme erişeceği ve ne göreceği yönetim paneli üzerinden ayarlanır.",
  },
  {
    q: "Eski analog kamera sistemimden IP sisteme geçebilir miyim?",
    a: "Evet. Mevcut kablo altyapısı değerlendirilerek kullanılabilir durumda olanlar yeni sistemle entegre edilebilir. Keşif sırasında mevcut altyapı değerlendirilir.",
  },
  {
    q: "İstanbul'da işyeri keşfi yapıyor musunuz?",
    a: "Evet. Avrupa Yakası ve Anadolu Yakası dahil İstanbul genelinde keşif yapıyoruz. Proje büyüklüğü ve lokasyona göre hızlı ekip planlaması yapıyoruz.",
  },
];

const phoneHref = `tel:${siteConfig.phone.replace(/\s/g, "")}`;
const whatsappHref = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
  "Merhaba, İstanbul işyeri IP kamera montajı için bilgi ve fiyat almak istiyorum.",
)}`;

export default function IstanbulIsyeriIpKameraMontajiPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "İstanbul İşyeri IP Kamera Montajı",
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
          <span>💼 İşyeri kurulumu 15.000 TL&#39;den başlayan</span>
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
            alt="İstanbul işyeri IP kamera montajı"
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
                Keşif aynı gün
              </span>
              <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 backdrop-blur">
                İşyeri odaklı sistem
              </span>
              <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 backdrop-blur">
                Telefondan canlı izle
              </span>
            </div>

            <h1 className="max-w-2xl text-4xl font-black leading-tight md:text-5xl xl:text-[64px] xl:leading-[1.05]">
              İstanbul İşyeri IP Kamera Montajı
            </h1>

            <p className="mt-4 max-w-2xl text-xl font-semibold text-emerald-400 md:text-2xl">
              Ofis, mağaza, kafe, depo ve atölye için uzaktan izleme ve kayıt
            </p>

            <p className="mt-3 max-w-2xl text-lg leading-7 text-slate-200">
              İşletmenizin kasa, giriş, depo ve çalışma alanlarını uzaktan
              izlenebilir, kayıt alınabilir ve profesyonel kurulmuş IP kamera
              sistemiyle güvence altına alın.
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
                <div className="text-2xl font-black">7/24</div>
                <div className="mt-0.5 text-sm text-slate-300">
                  Uzaktan erişim altyapısı
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <IstanbulIpCameraQuoteForm
              districts={districts}
              formSource={FORM_SOURCE}
              pagePath={PAGE_PATH}
              whatsappText="Merhaba, İstanbul işyeri IP kamera montajı için bilgi ve fiyat almak istiyorum."
            />
          </div>
        </div>
      </section>

      <TrustSignals
        items={
          [
            { icon: Clock3, label: "Aynı Gün Keşif" },
            { icon: MapPin, label: "İstanbul Geneli Hizmet" },
            { icon: ShieldCheck, label: "İşyeri Odaklı Kurulum" },
            { icon: BadgeCheck, label: "Garantili Montaj" },
            { icon: Wrench, label: "Uzaktan Erişim Desteği" },
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
              "Kasa, giriş ve depo gibi kritik noktaların tamamı tek sistemden izlenir. İşyeriniz kapalıyken de telefondan kontrol edebilirsiniz.",
              "Kayıt süresi, çözünürlük ve kamera sayısı işyerinizin ihtiyacına göre belirlenir. Gereksiz ekipmana para ödetmeyiz.",
              "Kurulum sonrası telefon ve tablet erişimi, kayıt izleme ve kullanım eğitimi sisteme dahildir.",
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
              İşyeri IP Kamera Sistemi Sadece Kurulmaz, Doğru Kurgulanır
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              İşyerinizin yapısına, kritik noktalarına ve uzaktan izleme
              ihtiyacınıza göre planlanmayan sistem; olay anında yetersiz kalır
              ve sonradan masraf çıkarır. Her projeyi işletme tipine göre
              planlıyoruz.
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
                src="/images/landing/isyeri-ip-kamera-gercek-saha-monitor.webp"
                alt="İşyeri IP kamera kurulum detayı"
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
              Hangi İşletmeler İçin Kurulum Yapıyoruz?
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Ofisten klinik ve atölyeye kadar farklı işyeri tiplerinde kurulum
              deneyimimiz var. Her mekan için ihtiyaç analizi yaparak başlıyoruz.
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

      {/* Night vision section */}
      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/landing/ip-kamera-gece-gorus.png"
                  alt="İşyeri gece görüşlü IP kamera görüntüsü"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>

            <div>
              <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-white">
                İşyeri kapalıyken de güvende
              </span>
              <h2 className="mt-4 text-3xl font-black leading-tight md:text-4xl">
                İşyeriniz Kapalıyken de Gece Net Görüntü
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-300">
                İşyeri kameralarında en kritik zaman dilimi; iş saatleri
                dışındaki gece, hafta sonu ve tatil dönemleridir. Doğru gece
                görüşlü kamera ve yerleşim planlamasıyla bu saatlerde de net
                kayıt tutulur.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  "Kasa ve giriş için gece görüş kalibrasyonu",
                  "Düşük ışıkta yüz ve hareket seçilebilirliği",
                  "İşyeri dışındayken anlık kayıt erişimi",
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
              İşyeri IP Kamera Montaj Hizmeti Neleri Kapsar?
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              İşletme için kurulan bir kamera sistemi; sadece montaj değil,
              doğru alan planlaması, kayıt altyapısı ve kullanıma hazır teslim
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
                  İşyeriniz için ücretsiz keşif ve fiyat teklifi alın
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-7 text-slate-700">
                  Kamera sayısını, kritik alanlarınızı ve kayıt beklentinizi
                  birlikte netleştirip size uygun sistemi hızlıca planlayalım.
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
              İşyeri kamera kurulumunda önce ihtiyaç analizi yapılır, ardından
              yerinde keşif ve kamera planı netleşir. Montaj, sistem devreye
              alma ve telefon bağlantısıyla tamamlanır.
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
              İşyeri Kurulumunda Fiyatı Belirleyen Faktörler
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Net maliyet; kamera adedinin yanı sıra kapsam, kablolama yapısı,
              kayıt süresi ve uzaktan izleme ihtiyacına göre belirlenir. Doğru
              fiyat için ihtiyaç analizi kritik önemdedir.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {[
              {
                title: "Kapsam ve kritik nokta",
                text: "Kasa, giriş, depo ve otopark gibi kapsanması gereken alanlar kamera sayısını belirler.",
              },
              {
                title: "Gece görüş ihtiyacı",
                text: "İşyerinizin dış aydınlatması ve gece izleme beklentisi kamera tipini etkiler.",
              },
              {
                title: "Kablo altyapısı",
                text: "Kat geçişleri, tavan düzeni ve uzun hat mesafeleri işçilik maliyetini etkileyebilir.",
              },
              {
                title: "Kayıt süresi",
                text: "7, 14 ya da 30 günlük kayıt için disk kapasitesi ihtiyacı farklılaşır.",
              },
              {
                title: "Kullanıcı sayısı",
                text: "Telefon, tablet ve çoklu yetkili erişimi sistem kapsamını büyütebilir.",
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
              İşyeri IP Kamera Kurulum Paketleri
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Net fiyat; kamera sayısı, alan büyüklüğü, kayıt süresi ve montaj
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
                Kurulum Sonrası İşyerinizi Kullanmaya Hazır Bırakıyoruz
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                IP kamera sisteminin değeri sadece montajda değil, işletmecinin
                sistemi eksiksiz kullanabilmesinde yatar. Sistem eğitimi, mobil
                uygulama kurulumu ve teknik destek yönlendirmesi dahildir.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Sistem eğitimi ve temel kullanım teslimi",
                  "Telefon ve tablet için mobil uygulama kurulumu",
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
                  "Mobil uygulama kurulumu teslim anında tamamlanır.",
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
              İşletmeler Neden Bizi Tercih Ediyor?
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              İşletmeciler gerçekten çalışan ve olay anında işe yarayan sistemi
              istiyor. Süreci bu bakışla yönetiyoruz.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              {
                text: "Kasayı, girişi ve depo alanını aynı anda telefondan izliyorum. Gece görüntü kalitesi beklediğimden daha iyiydi. Kurulum temizdi.",
                name: "Hakan B.",
                role: "İstanbul · Esnaf",
              },
              {
                text: "Mağazamda kasa bölgesi uzun süredir sorunluydu. Kurulum sonrası hem kayıt net hem de gece izleme düzgün çalışıyor.",
                name: "Leyla K.",
                role: "İstanbul · Mağaza Sahibi",
              },
              {
                text: "Atölye girişi, makine alanı ve depo rampası için istediğimiz noktalar doğru şekilde kuruldu. Keşif aynı gün yapıldı.",
                name: "Cemal D.",
                role: "İstanbul · Atölye Sahibi",
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
        title="İstanbul'da İşyeri IP Kamera Montajı İçin Hemen Teklif Alın"
        subtitle="Avrupa ve Anadolu yakasında aynı gün keşif. Ücretsiz keşif randevusu alın, profesyonel ekibimiz sizi arasın."
        whatsappMessage="Merhaba, İstanbul işyeri IP kamera montajı için teklif almak istiyorum."
      />
    </main>
  );
}
