import type { Metadata } from "next";
import { getCanonicalUrlForKnownPath } from "@/lib/canonical";
import ServicePageTemplate, {
  ServicePageData,
} from "@/components/templates/ServicePageTemplate";

const canonicalUrl = getCanonicalUrlForKnownPath("/isyeri-guvenlik-sistemi");

export const metadata: Metadata = {
  title: "İşyeri Güvenlik Sistemi | Kamera, Alarm ve Yangın Tek Elden",
  description:
    "Mağaza, ofis, restoran ve otel için kamera, hırsız alarm ve yangın alarm sistemi tek elden kurulumu. Mesai saati otomasyonu, mobil izleme ve bakım sözleşmesi.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "İşyeri Güvenlik Sistemi | Kamera, Alarm ve Yangın Tek Elden",
    description:
      "İşyeriniz için kamera, alarm ve yangın alarm sistemi tek elden. Mobil izleme ve bakım dahil.",
    url: canonicalUrl,
    siteName: "Güvenlik Servisi",
    locale: "tr_TR",
    type: "website",
  },
};

const data: ServicePageData = {
  slug: "isyeri-guvenlik-sistemi",
  title: "İşyeri Güvenlik Sistemi",
  subtitle:
    "Mağaza, ofis, restoran ve otel için kamera, hırsız alarm ve yangın alarm sistemlerini tek elden kuruyor, mesai programınıza göre yapılandırıyoruz.",
  description:
    "İşyeri güvenliği hem yasal bir zorunluluk hem de iş sürekliliğinin temel bileşenlerinden biridir. Kamera, hırsız alarm ve yangın alarm sistemlerinin aynı projede kurulması koordinasyon ve entegrasyon avantajı sağlar.\n\nTek sözleşme ile tüm bileşenleri kuruyoruz. Mesai saatleri, kapı açılış sinyalleri ve alarm devreye alma zamanlamaları işyerinizin programına göre ayarlanır.\n\nKurulum sonrası mobil uygulama ile kamera izleme, alarm durumu ve giriş raporlarına dilediğiniz yerden erişebilirsiniz.",
  heroBadge: "Kamera • Alarm • Yangın • Tek sözleşme",
  heroTrustItems: [
    "Kamera, alarm ve yangın alarm tek projede",
    "Mesai saatine göre otomatik alarm programlama",
    "Mobil uygulama ile uzaktan izleme ve kontrol",
    "Tek sözleşme ve tek destek hattı",
  ],
  heroAdvantages: [
    {
      title: "Tek elden entegre kurulum",
      text: "Kamera, alarm ve yangın alarm ayrı firmalarla değil; tek proje ve tek muhatap ile koordineli kurulur.",
    },
    {
      title: "İşyerinize göre otomasyon",
      text: "Mesai saatleri ve çalışan programına göre alarm zamanlamaları ve bildirim ayarları yapılandırılır.",
    },
  ],
  heroPanel: {
    title: "İşyeri güvenlik projesinde neye odaklanırız",
    body: [
      "İşyerinizin alan planını, giriş noktalarını ve operasyonel akışını değerlendirerek güvenlik ihtiyacını belirliyoruz.",
      "Kamera kapsama alanını, alarm bölgelerini ve yangın dedektör yerleşimini tek projede koordineli planlıyoruz.",
      "Alarm programlaması, mobil erişim ve kullanıcı yetkilerini işletmenizin çalışma düzenine göre ayarlıyoruz.",
    ],
  },
  authorityTitle:
    "Neden Güvenlik Bileşenlerini Tek Elden Kurmak İşyeriniz İçin Önemlidir?",
  authorityBody: [
    "İşyerlerinde kamera, alarm ve yangın alarm ayrı zamanlarda farklı firmalardan kurulduğunda entegrasyon sorunları ortaya çıkar. Alarm paneli ile kamera kaydı eşleşmez, arıza sorumluluğu belirsizleşir.",
    "Tek projede kurulan sistemler aynı altyapıyı paylaşır, koordineli çalışır ve bakım/arıza süreçlerinde tek muhatap avantajı sağlar.",
    "Ayrıca sigorta şirketleri ve ruhsat makamları genellikle tüm bileşenlerin uyumlu çalıştığını gösteren belgeler talep eder. Tek proje bu belgelendirmeyi kolaylaştırır.",
  ],
  authorityNote: {
    title: "İşletmeniz için teklif almak isterseniz",
    body: "İşyeri tipinizi (mağaza, ofis, restoran vb.), tahmini alan büyüklüğünü ve öncelikli güvenlik ihtiyacınızı paylaşmanız yeterli.",
  },
  features: [
    "Yüksek çözünürlüklü kamera sistemi",
    "Hırsız alarm ve hareket sensörleri",
    "Yangın alarm sistemi (zorunlu belgelendirme dahil)",
    "Kartlı geçiş (isteğe bağlı)",
    "Mesai saatine göre otomatik alarm programlama",
    "Mobil uygulama ile uzaktan izleme ve kontrol",
    "Tek sözleşme, tek muhatap",
    "Yıllık bakım sözleşmesi",
  ],
  decisionBlocks: [
    {
      title: "Hangi Durumda Komple İşyeri Güvenlik Paketi Doğru Seçimdir?",
      items: [
        "Yeni açılan işyerinde kamera, alarm ve yangın alarm altyapısı sıfırdan kurulacaksa.",
        "Mevcut güvenlik eksik ve birden fazla bileşenin aynı anda iyileştirilmesi gerekiyorsa.",
        "İşyeriniz sigorta, ruhsat veya iş güvenliği mevzuatı gereği güvenlik sistemi zorunluluğu altında ise.",
        "Farklı firmalardan alınan sistemlerde entegrasyon sorunu veya muhatap karmaşası yaşıyorsanız.",
      ],
    },
    {
      title: "Hangi Durumda Tekil Hizmet Daha Uygun Olabilir?",
      items: [
        "Yalnızca kamera ihtiyacınız varsa: Kamera sistemi kurulumu sayfamızı inceleyebilirsiniz.",
        "Sadece hırsız alarm yeterli ise: Alarm sistemi kurulumu daha hedefli bir başlangıçtır.",
        "Yalnızca yangın alarm zorunluluğu varsa: Yangın alarm sistemi kurulumu ayrıca değerlendirilebilir.",
        "Personel giriş kontrolü öncelikli ise: Kartlı geçiş sistemi kurulumu incelenmelidir.",
      ],
    },
  ],
  scopeDetails: {
    title: "Projede Neler Dahil, Neler Ayrıca Değerlendirilir?",
    includedTitle: "Standart projede dahil",
    includedItems: [
      "Ücretsiz keşif ve çok bileşenli ihtiyaç analizi",
      "Kamera, hırsız alarm ve yangın alarm montajı",
      "Mesai saati otomasyonu ve alarm programlaması",
      "Mobil uygulama kurulumu ve kullanıcı ayarları",
      "Yangın alarm belgelendirme (proje, test raporu, sertifika)",
    ],
    additionalTitle: "İşyeri tipine göre ayrıca değerlendirilen başlıklar",
    additionalItems: [
      "Kartlı geçiş ve personel erişim kontrol sistemi",
      "Mevcut eski sistemlerin kaldırılması veya revizyonu",
      "Çok katlı işyerlerinde ek switch ve altyapı planlaması",
      "İzleme merkezi aboneliği (opsiyonel)",
    ],
  },
  pricingFactors: {
    description:
      "İşyeri güvenlik sistemi fiyatı, işyeri tipi, alan büyüklüğü ve bileşen kapsamına bağlıdır.",
    items: [
      "İşyeri türü (mağaza, ofis, restoran, otel) bileşen ihtiyacını belirler.",
      "Kamera sayısı, alarm bölgesi ve yangın dedektör adedi malzeme maliyetini etkiler.",
      "Mevcut kablo altyapısı varsa kullanılabilir; yoksa çekim ek maliyet oluşturur.",
      "Kartlı geçiş, izleme merkezi bağlantısı gibi ek bileşenler projeye göre fiyatlandırılır.",
      "Yangın alarm belgelendirme (proje, test raporu, sertifika) zorunlu kapsam olarak dahildir.",
    ],
  },
  segments: [
    {
      title: "Mağaza ve Perakende",
      content:
        "Kasa, depo, giriş ve müşteri alanlarını kapsayan kamera ve alarm. Hırsızlık ve kayıp önleme odaklı kurulum.",
      href: "/kamera-sistemi-kurulumu",
    },
    {
      title: "Ofis ve Kurumsal",
      content:
        "Çalışan erişim kontrolü, veri odası güvenliği ve yangın alarm. İK sistemleriyle entegre giriş-çıkış takibi.",
      href: "/kartli-gecis-sistemi-kurulumu",
    },
    {
      title: "Restoran, Otel ve Konaklama",
      content:
        "Mutfak yangın alarmı, müşteri alanı kameraları ve personel erişim kontrolü. Zorunlu belgeler ve sigorta uyumlu kurulum.",
      href: "/yangin-alarm-sistemi-kurulumu",
    },
  ],
  faq: [
    {
      question: "Küçük bir dükkan için de kurulum yapıyor musunuz?",
      answer:
        "Evet. 1 odalı küçük işyerinden büyük merkezlere kadar her ölçekte kurulum yapıyoruz. Bileşen sayısı ihtiyaca göre ayarlanır.",
    },
    {
      question: "Mesai dışında alarm otomatik devreye giriyor mu?",
      answer:
        "Evet. Haftalık program tanımlanır; kapanış saatinde alarm otomatik devreye girer, açılışta devre dışı kalır.",
    },
    {
      question: "Kamera görüntülerini işyeri dışından izleyebilir miyim?",
      answer:
        "Evet. Mobil uygulama ile dünyanın herhangi bir yerinden canlı izleme yapabilir, kayıtlara erişebilirsiniz.",
    },
    {
      question: "Yangın alarm belgesi sigorta için geçerli mi?",
      answer:
        "Evet. TS EN 54 uyumlu proje ve test raporu sigorta şirketlerinin talep ettiği formatta hazırlanır.",
    },
    {
      question: "Bakım sözleşmesi sunuyor musunuz?",
      answer:
        "Evet. Tüm bileşenleri kapsayan yıllık bakım sözleşmesi ile performans ve yasal uyumluluk garanti altına alınır.",
    },
  ],
  defaultService: "hepsi",
  ctaContent: {
    badge: "Komple güvenlik • Keşif • Teklif",
    title: "İşyeriniz İçin Güvenlik Teklifi Alın",
    subtitle:
      "İşyeri tipinizi ve tahmini alan büyüklüğünü paylaşın. İhtiyacınıza göre bileşen kapsamını belirleyip teklif hazırlayalım.",
    trustItems: [
      "Kamera, alarm ve yangın alarm tek projede",
      "Mesai saati otomasyonu ve mobil izleme",
      "Tek sözleşme ve tek muhatap avantajı",
      "Zorunlu yangın alarm belgelendirme dahil",
    ],
    supportCards: [
      {
        title: "İşyerinize özel planlama",
        text: "Bileşen kapsamını ve otomasyon ayarlarını işletmenizin ihtiyacına göre belirliyoruz.",
      },
      {
        title: "Çalışan sistem teslimi",
        text: "Montaj, programlama, mobil erişim ve kullanıcı eğitimi ile sistemi hazır teslim ediyoruz.",
      },
    ],
  },
};

export default function IsyeriSayfasi() {
  return <ServicePageTemplate data={data} />;
}
