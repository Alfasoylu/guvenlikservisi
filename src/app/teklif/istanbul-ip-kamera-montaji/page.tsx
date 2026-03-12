import type { Metadata } from "next";
import { getCanonicalUrlForKnownPath } from "@/lib/canonical";
import Image from "next/image";
import {
  ArrowRight,
  BadgeCheck,
  Camera,
  CheckCircle2,
  ChevronRight,
  Clock3,
  MapPin,
  MonitorSmartphone,
  Phone,
  Server,
  ShieldCheck,
  Siren,
  Star,
  Users,
  Warehouse,
  Wifi,
} from "lucide-react";
import { siteConfig } from "@/data/site-config";
import IstanbulIpCameraQuoteForm from "@/components/IstanbulIpCameraQuoteForm";

const canonicalUrl = getCanonicalUrlForKnownPath("/teklif/istanbul-ip-kamera-montaji");

export const metadata: Metadata = {
  title: "İstanbul IP Kamera Montajı | Aynı Gün Keşif ve Profesyonel Kurulum",
  description:
    "İstanbul IP kamera montajı hizmeti. Ev, mağaza, ofis, depo ve apartmanlar için profesyonel keşif, net görüntü, mobil izleme ve hızlı teklif.",
  keywords: [
    "istanbul ip kamera montajı",
    "istanbul ip kamera kurulumu",
    "istanbul kamera montajı",
    "ip kamera montajı fiyatları",
    "işyeri ip kamera sistemi",
    "mağaza kamera kurulumu",
    "ofis kamera sistemi",
    "depo kamera sistemi",
    "güvenlik kamera sistemi istanbul",
  ],
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    title: "İstanbul IP Kamera Montajı | Aynı Gün Keşif ve Profesyonel Kurulum",
    description:
      "İstanbul genelinde IP kamera kurulumu, mobil izleme ayarı, gece görüşlü sistemler ve hızlı teklif.",
    url: canonicalUrl,
    siteName: "Güvenlik Servisi",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: canonicalUrl,
        width: 1157,
        height: 631,
        alt: "İstanbul IP Kamera Montajı",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "İstanbul IP Kamera Montajı | Aynı Gün Keşif ve Profesyonel Kurulum",
    description:
      "İstanbul genelinde IP kamera kurulumu, mobil izleme ayarı, gece görüşlü sistemler ve hızlı teklif.",
    images: [
      "https://www.guvenlikservisi.com/images/landing/istanbul-ip-kamera-hero.webp",
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

const highlights = [
  "Aynı gün keşif planlaması",
  "Telefon ve tablet üzerinden canlı izleme",
  "Gece görüşlü net kayıt altyapısı",
  "Ev, işyeri, mağaza ve depo için projelendirme",
];

const quickLinks = [
  { label: "Fiyat Paketleri", href: "#fiyat-paketleri" },
  { label: "Neler Dahil?", href: "#neler-dahil" },
  { label: "Sık Sorulanlar", href: "#sss" },
];

const trustSignals = [
  "Keşif sonrası net ürün ve işçilik planı",
  "Kurulum sonrası telefon uygulaması kurulumu",
  "İstanbul içi ilçe bazlı hızlı yönlendirme",
  "Tekrar servis riskini azaltan doğru altyapı planlaması",
];

const painPoints = [
  {
    icon: ShieldCheck,
    title: "Kritik noktalar eksik kalmasın",
    text: "Sadece kamera takmak yetmez. Giriş kapısı, kasa, koridor, araç geçişi ve bina çevresi doğru açıyla planlanmazsa sistem olay anında yetersiz kalır.",
  },
  {
    icon: Wifi,
    title: "Mobil izleme sorunsuz çalışsın",
    text: "Yanlış cihaz ve yanlış ağ kurulumu yüzünden telefon bağlantısı sık kopan sistemler güven vermez. Kurulumu uzaktan erişime hazır teslim ediyoruz.",
  },
  {
    icon: Server,
    title: "Kayıt sistemi gerçekten işlesin",
    text: "Kamera kalitesi kadar NVR, disk kapasitesi ve kayıt senaryosu da önemlidir. İhtiyaca göre doğru altyapı ile ilerliyoruz.",
  },
];

const solutions = [
  "2 MP, 4 MP, 5 MP ve üzeri çözünürlük seçenekleri",
  "PoE altyapı ile daha düzenli ve stabil kurulum",
  "NVR kayıt cihazı ve depolama planlaması",
  "Telefon, tablet ve bilgisayardan canlı izleme",
  "Gece görüşü ve akıllı insan algılama seçenekleri",
  "Ev, villa, işyeri, apartman ve depo çözümleri",
];

const includedItems = [
  {
    title: "Keşif ve ihtiyaç analizi",
    text: "Kör noktalar, kritik alanlar, kamera açıları ve kayıt beklentisi sahaya göre değerlendirilir.",
  },
  {
    title: "Cihaz ve altyapı planı",
    text: "Kamera çözünürlüğü, NVR kapasitesi, disk yapısı ve ağ altyapısı ihtiyaca göre seçilir.",
  },
  {
    title: "Montaj ve devreye alma",
    text: "Kablolama, cihaz yerleşimi, görüntü ayarları ve kayıt senaryosu tamamlanır.",
  },
  {
    title: "Teslim ve kullanım desteği",
    text: "Mobil uygulama, canlı izleme, kayıt izleme ve temel kullanım akışı gösterilerek teslim edilir.",
  },
];

const useCases = [
  {
    icon: Camera,
    title: "Ev ve Villa",
    text: "Bahçe, giriş kapısı, otopark ve bina çevresi için güven veren izleme altyapısı.",
  },
  {
    icon: Users,
    title: "Ofis ve İş Yeri",
    text: "Personel alanı, giriş çıkış ve ortak alan takibi için düzenli sistem kurgusu.",
  },
  {
    icon: Warehouse,
    title: "Mağaza ve Depo",
    text: "Kasa çevresi, raf koridorları, yükleme alanı ve sevkiyat noktaları için net kayıt.",
  },
];

const processSteps = [
  {
    title: "İhtiyaç Analizi",
    text: "Mekanın yapısı, riskli alanlar, kör noktalar ve beklentiler belirlenir.",
  },
  {
    title: "Keşif ve Projelendirme",
    text: "Kamera noktaları, kayıt cihazı, kablolama ve depolama yapısı netleştirilir.",
  },
  {
    title: "Kurulum ve Ayarlar",
    text: "Montaj tamamlanır, kayıt sistemi devreye alınır, uygulama bağlantıları yapılır.",
  },
  {
    title: "Teslim ve Kullanım Eğitimi",
    text: "Canlı izleme, geçmiş kayıt erişimi ve temel kullanım adımları gösterilir.",
  },
];

const packages = [
  {
    name: "Başlangıç Paket",
    price: "15.000 TL'den başlayan",
    featured: false,
    items: [
      "2-4 adet IP kamera",
      "NVR kayıt cihazı",
      "Montaj ve devreye alma",
      "Mobil uygulama kurulumu",
      "Uzaktan izleme ayarı",
      "1 yıl birebir değişim garantisi",
    ],
  },
  {
    name: "İşletme Paket",
    price: "25.000 TL'den başlayan",
    featured: true,
    badge: "En Çok Tercih Edilen",
    items: [
      "4-8 adet gece görüşlü IP kamera",
      "NVR kayıt cihazı ve disk planlaması",
      "Telefon + tablet erişimi",
      "Akıllı algılama kurulumu",
      "1 bakım kontrolü",
      "1 yıl birebir değişim garantisi",
    ],
  },
  {
    name: "Kurumsal Paket",
    price: "Özel teklif",
    featured: false,
    items: [
      "8+ kamera için özel proje",
      "Yüksek kapasiteli kayıt altyapısı",
      "Keşif ve kapsamlı planlama",
      "Çoklu kullanıcı erişimi",
      "Bakım anlaşması opsiyonu",
      "Kurumsal destek",
    ],
  },
];

const buyingReasons = [
  "Fiyat, süreç ve kurulum kapsamı tek sayfada net verildiği için reklam tıklaması sonrası kullanıcı aradığını daha hızlı bulur.",
  "Telefon, WhatsApp ve form seçenekleri aynı sayfada yer aldığı için dönüşüm yolu kısalır.",
  "İstanbul, IP kamera montajı, fiyat ve keşif gibi ticari niyet kelimeleri başlık ve içerikte doğal biçimde güçlenir.",
];

const faqs = [
  {
    q: "İstanbul IP kamera montajı ne kadar sürer?",
    a: "Küçük ve orta ölçekli kurulumların büyük bölümü aynı gün içinde tamamlanır. Kamera sayısı, kablolama mesafesi ve saha koşullarına göre süre keşif sonrası netleşir.",
  },
  {
    q: "Hangi ilçelere hizmet veriyorsunuz?",
    a: "İstanbul genelinde hem Avrupa Yakası hem Anadolu Yakası için hizmet veriyoruz. İlçeye, proje büyüklüğüne ve keşif durumuna göre hızlı ekip planlaması yapıyoruz.",
  },
  {
    q: "Telefondan canlı izleme kuruluyor mu?",
    a: "Evet. Kurulan sistemlerde canlı izleme, geçmiş kayıt erişimi ve uygun senaryolarda bildirim altyapısı aktif edilir. Teslimde uygulama kurulumu da yapılır.",
  },
  {
    q: "Fiyatı hangi kriterler belirliyor?",
    a: "Kamera adedi, çözünürlük, kayıt süresi, kablolama mesafesi, gece görüş ihtiyacı, montaj zorluğu ve ek ağ altyapısı fiyatı etkiler. En doğru teklif keşif sonrası çıkar.",
  },
  {
    q: "IP kamera mı analog kamera mı daha mantıklı?",
    a: "Yeni kurulumların çoğunda IP sistemler daha net görüntü, daha iyi uzaktan erişim ve daha esnek genişleme sunduğu için avantajlıdır. Uygun çözüm keşif sonrası belirlenir.",
  },
    {
    q: "Ücretsiz keşif yapıyor musunuz?",
    a: "Evet. Projenin büyüklüğüne, lokasyona ve ihtiyaç detayına göre ücretsiz keşif planlaması yapabiliyoruz. Keşif sonrası kamera noktaları, kayıt yapısı ve uygun sistem netleştirilir.",
  },
  {
    q: "IP kamera montajı sonrası telefonuma uygulama kuruyor musunuz?",
    a: "Evet. Kurulum tamamlandıktan sonra telefon, tablet ve gerekiyorsa bilgisayar bağlantıları yapılır. Canlı izleme ve geçmiş kayıt erişimi kullanıma hazır şekilde teslim edilir.",
  },
  {
    q: "Kamera sisteminde gece görüşü net olur mu?",
    a: "Doğru kamera ve doğru açı seçildiğinde gece görüş performansı oldukça tatmin edici olur. Giriş kapısı, bina çevresi, araç alanı ve kritik noktalar için uygun gece görüşlü modeller önerilir.",
  },
  {
    q: "IP kamera sistemi internet olmadan kayıt yapar mı?",
    a: "Evet. İnternet kesilse bile sistem kayıt almaya devam eder. İnternet daha çok uzaktan canlı izleme ve telefon bağlantısı için gerekir.",
  },
  {
    q: "Kurulumdan sonra teknik destek veriyor musunuz?",
    a: "Evet. Kurulum sonrası temel kullanım desteği sağlanır. İhtiyaca göre bakım, kontrol ve ek destek süreçleri de planlanabilir.",
  },
  {
    q: "Küçük bir işyeri için kaç kamera gerekir?",
    a: "Bu; giriş sayısı, kasa alanı, koridor yapısı ve görmek istediğiniz kritik noktalara göre değişir. Çoğu küçük işyerinde 2-6 kamera aralığında çözüm oluşturulur.",
  },
  {
    q: "Apartman ve bina girişi için IP kamera sistemi kuruluyor mu?",
    a: "Evet. Apartman girişleri, merdiven boşlukları, bina çevresi, otopark ve dış kapı alanları için uygun IP kamera sistemleri kurulabilir. Kayıt süresi ve kamera sayısı yapıya göre planlanır.",
  },
  {
    q: "Kablo görüntüsü çok olur mu?",
    a: "Doğru projelendirme ile kablolama mümkün olduğunca düzenli ve estetik şekilde yapılır. Amaç sadece çalışan sistem kurmak değil, temiz montajla teslim etmektir.",
  },
  {
    q: "Teklif almadan önce yaklaşık fiyat öğrenebilir miyim?",
    a: "Evet. Kamera adedi, mekan türü ve beklentinize göre yaklaşık başlangıç fiyat aralığı paylaşılabilir. Net fiyat ise keşif veya ihtiyaç analizi sonrası çıkarılır.",
  },
  {
    q: "Neden hazır paket yerine keşif sonrası teklif almak daha mantıklı?",
    a: "Çünkü her mekanın giriş noktası, kör açısı, kablolama ihtiyacı ve kayıt beklentisi farklıdır. Keşif sonrası teklif almak gereksiz maliyeti azaltır ve gerçekten iş gören sistem kurulmasını sağlar.",
  },

];

const phoneHref = `tel:${siteConfig.phone.replace(/\s/g, "")}`;
const whatsappHref = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
  "Merhaba, İstanbul IP kamera montajı için bilgi ve fiyat almak istiyorum."
)}`;

export default function IstanbulIpKameraMontajiPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "İstanbul IP Kamera Montajı",
    serviceType: "IP kamera montajı",
    areaServed: {
      "@type": "City",
      name: "İstanbul",
    },
    provider: {
      "@type": "LocalBusiness",
      name: "Güvenlik Servisi",
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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Anasayfa",
        item: "https://www.guvenlikservisi.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Teklif",
        item: "https://www.guvenlikservisi.com/teklif",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "İstanbul IP Kamera Montajı",
        item: "https://www.guvenlikservisi.com/teklif/istanbul-ip-kamera-montaji",
      },
    ],
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "İstanbul IP Kamera Montajı Hizmeti",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
    },
  };

  return (
    <main className="bg-white text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
<section className="relative overflow-hidden bg-slate-950 text-white">
  <div className="absolute inset-0">
    <Image
      src="/images/landing/istanbul-ip-kamera-hero.webp"
      alt="İstanbul IP kamera montajı"
      fill
      priority
      className="object-cover opacity-20"
    />
  </div>
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.18),_transparent_32%),linear-gradient(120deg,rgba(2,6,23,0.98),rgba(15,23,42,0.9),rgba(3,7,18,0.95))]" />

  <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 md:px-6 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:py-20">
    <div>
      <div className="mb-5 flex flex-wrap gap-2 text-sm font-semibold text-slate-100">
        <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 backdrop-blur">
          İstanbul içi hızlı keşif
        </span>
        <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 backdrop-blur">
          Profesyonel montaj
        </span>
        <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 backdrop-blur">
          Mobil izleme kurulumu
        </span>
      </div>

      <h1 className="max-w-2xl text-4xl font-black leading-tight md:text-5xl xl:text-[64px] xl:leading-[1.05]">
        İstanbul IP Kamera Montajı
      </h1>

      <p className="mt-4 max-w-2xl text-xl font-semibold text-emerald-400 md:text-2xl">
        Ev, işyeri ve depo için profesyonel kurulum, mobil izleme ve hızlı keşif
      </p>

      <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">
        İstanbul genelinde doğru kamera yerleşimi, net gece görüşü, kayıt altyapısı
        ve telefondan canlı izleme kurulumu ile sistemi kullanıma hazır teslim ediyoruz.
      </p>

      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <a
          href="#teklif-formu"
          className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-6 py-4 text-base font-bold text-white transition hover:bg-emerald-400"
        >
          Hemen Teklif Al
          <ArrowRight className="h-5 w-5" />
        </a>

        <a
          href={phoneHref}
          data-event="phone_click"
          className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-base font-bold text-white transition hover:bg-white/15"
        >
          <Phone className="h-5 w-5" />
          {siteConfig.phone}
        </a>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
          <div className="text-3xl font-black">500+</div>
          <div className="mt-1 text-sm text-slate-300">Tamamlanan proje</div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
          <div className="text-3xl font-black">12+ Yıl</div>
          <div className="mt-1 text-sm text-slate-300">Saha tecrübesi</div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
          <div className="text-3xl font-black">7/24</div>
          <div className="mt-1 text-sm text-slate-300">Uzaktan erişim altyapısı</div>
        </div>
      </div>
    </div>

    <div className="relative">
      <IstanbulIpCameraQuoteForm districts={districts} />
    </div>
  </div>
</section>


      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 md:px-6">
          <div className="grid gap-4 lg:grid-cols-3">
            {buyingReasons.map((item) => (
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
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 md:px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="inline-flex rounded-full bg-slate-950 px-3 py-1 text-sm font-semibold text-white">
              Doğru planlama, doğru sonuç
            </span>
            <h2 className="mt-4 text-3xl font-black leading-tight md:text-4xl">
              Kamera Sistemi Sadece Kurulmaz, Doğru Kurgulanır
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              İyi bir IP kamera sistemi; doğru çözünürlük, doğru lens seçimi, doğru kayıt süresi
              ve doğru kamera açısıyla değer üretir. Bu yüzden her projeyi mekan tipine göre
              planlıyor, sonradan masraf çıkaran çözümlerden kaçınıyoruz.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {solutions.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl bg-white p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  <span className="text-sm font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] bg-white shadow-2xl ring-1 ring-slate-200">
            <div className="relative aspect-[4/3]">
              <Image
                src="/images/landing/ip-kamera-kurulum-detay.webp"
                alt="IP kamera kurulum detayı"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="grid gap-6 lg:grid-cols-3">
            {useCases.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <div className="mb-4 inline-flex rounded-2xl bg-emerald-50 p-3 text-emerald-700">
                  <item.icon className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-black">{item.title}</h2>
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
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

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/landing/ip-kamera-gece-gorus.png"
                  alt="Gece görüşlü IP kamera görüntü örneği"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>

            <div>
              <span className="inline-flex rounded-full bg-white/10 px-3 py-1 text-sm font-semibold text-white">
                Net görüntü, anlamlı kayıt
              </span>
              <h2 className="mt-4 text-3xl font-black leading-tight md:text-4xl">
                Gündüz de Gece de Detay Kaybetmeyen Görüntü Yapısı
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-300">
                Olay anında yüz, giriş, araç, personel hareketi veya ürün alanı gibi detayların
                seçilebilmesi için kamera açısı ve çözünürlüğü kritik rol oynar. İhtiyaca uygun lens
                ve kayıt yapısı ile gerçekten işe yarayan sistem kuruyoruz.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {[
                  "Gece görüşünde daha net izleme",
                  "Kör noktaları azaltan açı planlaması",
                  "Kayıt izlerken daha anlamlı detay",
                  "İnsan ve hareket odaklı akıllı senaryolar",
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

      <section id="neler-dahil" className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-black md:text-4xl">
              İstanbul IP Kamera Montajı Hizmetine Neler Dahil?
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Reklamdan gelen kullanıcıların en çok aradığı konu kapsam ve fiyat şeffaflığıdır.
              Bu yüzden teklif sürecinde hangi başlıklarda destek verdiğimizi açıkça gösteriyoruz.
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
                <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
            <div>
              <span className="inline-flex rounded-full bg-slate-950 px-3 py-1 text-sm font-semibold text-white">
                Akıllı algılama demoları
              </span>
              <h2 className="mt-4 text-3xl font-black leading-tight md:text-4xl">
                İnsan ve Hareket Algılama ile Daha Anlamlı Güvenlik
              </h2>
              <p className="mt-4 text-base leading-8 text-slate-600">
                Modern IP kamera sistemleri sadece görüntü kaydetmez. Uygun senaryolarda insan
                algılama, hareket analizi ve daha doğru bildirim akışı sunarak yanlış alarm yükünü azaltır.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  "İnsan algılama ile gereksiz bildirimleri azaltır",
                  "Akıllı olay senaryoları ile daha verimli izleme sağlar",
                  "Telefon uygulamasına daha anlamlı anlık uyarılar gönderir",
                  "İşyeri, mağaza ve depo için daha kullanışlı güvenlik deneyimi sunar",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-6">
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
                <div className="border-b border-slate-200 px-4 py-3 text-sm font-bold text-slate-800">
                  Gerçek kurulum görüntüsü - İnsan algılama
                </div>
                <video className="w-full" muted loop playsInline controls preload="none">
                  <source src="/videos/insan-algilama-demo-video.mp4" type="video/mp4" />
                </video>
              </div>

              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
                <div className="border-b border-slate-200 px-4 py-3 text-sm font-bold text-slate-800">
                  Gerçek kurulum görüntüsü - Hareket halinde plaka netliği
                </div>
                <video className="w-full" muted loop playsInline controls preload="none">
                  <source src="/videos/Hareketli-Arac-plaka-gorus-demosu.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full bg-emerald-100 px-3 py-1 text-sm font-semibold text-emerald-800">
              Nasıl ilerliyoruz?
            </span>
            <h2 className="mt-4 text-3xl font-black md:text-4xl">
              Tekliften Teslime Net ve Hızlı Süreç
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Kullanılmayacak ürün satmak yerine, mekanınıza uygun sistemi kısa sürede belirleyip
              uygulanabilir bir planla ilerliyoruz.
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
                <p className="mt-3 text-sm leading-7 text-slate-600">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="fiyat-paketleri" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-black md:text-4xl">İstanbul IP Kamera Kurulum Paketleri</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Net fiyat; kamera sayısı, alan büyüklüğü, kayıt süresi ve montaj detayına göre değişir.
              Aşağıdaki yapılar başlangıç referansı olarak hazırlanmıştır.
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
                          pkg.featured ? "text-emerald-400" : "text-emerald-600"
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

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <span className="inline-flex rounded-full bg-slate-950 px-3 py-1 text-sm font-semibold text-white">
                İstanbul geneli hizmet
              </span>
              <h2 className="mt-4 text-3xl font-black leading-tight md:text-4xl">
                Avrupa ve Anadolu Yakası İçin Hızlı Planlama
              </h2>
              <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
                İlçe, mekan tipi ve sistem büyüklüğüne göre ekip planlaması yapıyoruz. Uygun projelerde
                aynı gün keşif ve hızlı teklif süreciyle ilerliyoruz.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                {districts.map((district) => (
                  <div
                    key={district}
                    className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-700"
                  >
                    <MapPin className="h-4 w-4 text-emerald-600" />
                    {district}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-xl">
              <h3 className="text-2xl font-black">Neden teklif istemelisiniz?</h3>
              <div className="mt-6 space-y-4">
                {[
                  {
                    icon: Clock3,
                    title: "Hızlı geri dönüş",
                    text: "Form ve telefon taleplerine kısa sürede dönüş hedeflenir.",
                  },
                  {
                    icon: MonitorSmartphone,
                    title: "Kullanıma hazır teslim",
                    text: "Kurulum sonrası mobil uygulama bağlantısı tamamlanır.",
                  },
                  {
                    icon: Siren,
                    title: "İhtiyaca göre akıllı senaryo",
                    text: "Uygun projelerde insan algılama ve bildirim akışı planlanır.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 rounded-2xl bg-slate-50 p-4">
                    <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-slate-950 text-white">
                      <item.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-950">{item.title}</div>
                      <div className="mt-1 text-sm leading-7 text-slate-600">{item.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-black md:text-4xl">Müşteriler Neden Bizi Tercih Ediyor?</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              İnsanlar ürün değil, çalışan ve güven veren sistem istiyor. Süreci bu bakışla yönetiyoruz.
            </p>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              {
                text: "Mağazamız için kurulan sistemde giriş, kasa ve raf alanları net şekilde izleniyor. Telefon bağlantıları da eksiksiz yapıldı.",
                name: "Murat A.",
                role: "İstanbul / Mağaza Sahibi",
              },
              {
                text: "Ofisimiz için önerilen kamera yerleşimi gerçekten fark yarattı. Hem kurulum temizdi hem de kayıt erişimi sorunsuz çalışıyor.",
                name: "Selin T.",
                role: "İstanbul / Ofis Yöneticisi",
              },
              {
                text: "Depo girişleri ve sevkiyat alanı için doğru noktalar belirlendi. Kurulum sonrası sistem beklediğimizden daha verimli oldu.",
                name: "Yusuf K.",
                role: "İstanbul / İşletmeci",
              },
            ].map((item) => (
              <div
                key={item.name}
                className="rounded-[2rem] border border-slate-200 bg-slate-50 p-6"
              >
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm leading-7 text-slate-700">“{item.text}”</p>
                <div className="mt-5">
                  <div className="font-bold">{item.name}</div>
                  <div className="text-sm text-slate-500">{item.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sss" className="bg-slate-950 text-white">
        <div className="mx-auto max-w-5xl px-4 py-16 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-black md:text-4xl">Sık Sorulan Sorular</h2>
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
                <p className="mt-4 text-sm leading-7 text-slate-300">{faq.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-emerald-500 text-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-3xl font-black md:text-4xl">
                İstanbul IP Kamera Montajı İçin Hızlı Teklif Alın
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-emerald-50">
                Formu doldurun ya da doğrudan bizi arayın. İhtiyacınıza uygun sistem yapısını
                belirleyip kısa sürede dönüş sağlayalım.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                data-event="whatsapp_click"
                className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-4 font-bold text-emerald-700 transition hover:bg-emerald-50"
              >
                WhatsApp'tan Yaz
              </a>
              <a
                href={phoneHref}
                data-event="phone_click"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/40 px-6 py-4 font-bold text-white transition hover:bg-white/10"
              >
                <Phone className="h-5 w-5" />
                Hemen Ara
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

