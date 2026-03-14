import type { Metadata } from "next";
import { getCanonicalUrlForKnownPath } from "@/lib/canonical";
import ServicePageTemplate, {
  ServicePageData,
} from "@/components/templates/ServicePageTemplate";

const canonicalUrl = getCanonicalUrlForKnownPath("/alarm-sistemi-kurulumu");

export const metadata: Metadata = {
  title: "Alarm Sistemi Kurulumu | Hırsız Alarm ve İzleme Merkezi Bağlantısı",
  description:
    "Ev ve işyeri için hırsız alarm sistemi kurulumu. Kablosuz ve kablolu seçenekler, GSM+internet çift bağlantı, izleme merkezi entegrasyonu. Keşif ve montaj.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "Alarm Sistemi Kurulumu | Hırsız Alarm ve İzleme Merkezi Bağlantısı",
    description:
      "Hırsız alarm sistemi kurulumu. Kablosuz/kablolu, GSM+internet çift hat, izleme merkezi bağlantısı.",
    url: canonicalUrl,
    siteName: "Güvenlik Servisi",
    locale: "tr_TR",
    type: "website",
  },
};

const data: ServicePageData = {
  slug: "alarm-sistemi-kurulumu",
  title: "Alarm Sistemi Kurulumu",
  subtitle:
    "Ev ve işyeriniz için hırsız alarm sistemi kurulumu. Kablosuz veya kablolu seçenekler, GSM+internet çift hat ve isteğe bağlı izleme merkezi bağlantısı.",
  description:
    "Alarm sistemi yalnızca oluşabilecek bir tehlikeyi bildirmek için değil; aynı zamanda caydırıcılık ve olay anında hızlı müdahale için kurulur. Doğru sensör seçimi, sinyal hattı güvenliği ve bölge planlaması birlikte düşünülmesi gereken adımlardır.\n\nKablolu ve kablosuz seçenekleri mekanınızın yapısına göre değerlendiriyoruz. GSM ve internet çift bağlantılı panellerle sinyal kesilmeden iletim sağlıyoruz.\n\nKurulum sonrası mobil uygulama üzerinden alarm durumunu izleyebilir, bölge ayarlarını yönetebilir ve geçmiş olaylara erişebilirsiniz. İzleme merkezi bağlantısı da isteğe bağlı olarak sunulmaktadır.",
  heroBadge: "Sensör planlaması • Montaj • İzleme bağlantısı",
  heroTrustItems: [
    "Ücretsiz keşif ve bölge planlaması",
    "GSM + internet çift hatlı iletim",
    "Mobil uygulama ile uzaktan kontrol",
    "Yedek batarya ile kesintisiz çalışma",
  ],
  heroAdvantages: [
    {
      title: "Çift hatlı sinyal güvenliği",
      text: "GSM ve internet aynı anda çalışır. Bir hat devre dışı kalsa bile alarm iletimi kesilmez.",
    },
    {
      title: "Mekanınıza özel bölge planı",
      text: "Giriş noktaları, iç alanlar ve hassas bölgeler ayrı ayrı tanımlanır; her bölge bağımsız çalışır.",
    },
  ],
  heroPanel: {
    title: "Alarm kurulumunda neye odaklanırız",
    body: [
      "Kapı, pencere ve iç alan giriş noktalarını analiz ederek doğru sensör tipini ve yerleşimini belirliyoruz.",
      "Panel seçimini GSM+internet çift hat desteği, bölge sayısı ve genişleme kapasitesine göre yapıyoruz.",
      "Kurulum sonrası tüm bölgeleri test ediyor, mobil uygulamayı aktif hale getirip kullanıcıya teslim ediyoruz.",
    ],
  },
  authorityTitle:
    "Neden Doğru Sensör Seçimi ve Bölge Planlaması Belirleyicidir?",
  authorityBody: [
    "Birçok alarm sistemi kurulduktan sonra ya gereksiz yere çalar ya da olay anında tepki vermez. Her iki durumun da temel sebebi yanlış sensör seçimi veya eksik bölge planlamasıdır.",
    "Profesyonel kurulumda amaç mümkün olduğunca fazla sensör değil; doğru noktalara doğru tipleri yerleştirmektir. Evcil hayvan dostu PIR, manyetik kontak ve cam kırılma dedektörü gibi seçenekler mekanın gerçek ihtiyacına göre kombinlenir.",
    "Doğru planlanan alarm sistemi hem yanlış alarm oranını minimuma indirir hem de gerçek olaylarda güvenilir bildirim sağlar.",
  ],
  authorityNote: {
    title: "Teklif almak için",
    body: "Mekan tipinizi (ev/işyeri), tahmini oda ve kapı sayısını paylaşmanız yeterli. Bölge planını keşifte birlikte oluşturuyoruz.",
  },
  features: [
    "PIR hareket sensörleri (evcil hayvan uyumlu seçenek)",
    "Manyetik kapı/pencere kontakları",
    "Cam kırılma dedektörü",
    "Yüksek desibel iç/dış siren",
    "GSM + internet çift hat iletim",
    "Yedek batarya (8–24 saat)",
    "Mobil uygulama ile uzaktan kontrol",
    "7/24 izleme merkezi opsiyonu",
  ],
  decisionBlocks: [
    {
      title: "Hangi Durumda Alarm Sistemi Kurulumu Doğru Seçimdir?",
      description:
        "Alarm sistemi her mekan için uygun olmayabilir. Ancak aşağıdaki senaryolarda doğru başlangıç noktasıdır.",
      items: [
        "Ev veya işyeriniz mesai dışında uzun süre boş kalıyorsa ve giriş güvenliği öncelikli ise.",
        "Mevcut alarm sisteminiz yok veya eski panel artık güvenilir sinyal vermiyor.",
        "Kamera yerine veya kameraya ek olarak caydırıcılık ve anlık bildirim istiyorsanız.",
        "Sigorta geçerliliği veya iş güvenliği mevzuatı için alarm sistemi zorunluluğu varsa.",
      ],
    },
    {
      title: "Hangi Durumda Farklı Bir Hizmet Daha Doğru Olabilir?",
      items: [
        "Giriş noktalarından ziyade iç alanların görüntü kaydı öncelikli ise: Kamera sistemi kurulumu daha doğru başlangıçtır.",
        "Kapı güvenliği ve personel giriş kontrolü ana ihtiyaç ise: Kartlı geçiş sistemi değerlendirilmelidir.",
        "Yangın güvenliği yasal zorunluluk ise: Yangın alarm sistemi ayrıca planlanmalıdır.",
        "Mevcut alarm sisteminde arıza veya sensör hatası varsa: Teknik servis talebinizi iletebilirsiniz.",
      ],
    },
  ],
  scopeDetails: {
    title: "Kurulumda Neler Dahil, Neler Ayrıca Değerlendirilir?",
    description:
      "Standart bir alarm sistemi kurulumunda aşağıdaki başlıklar dahil sunulur. Bazı ihtiyaçlar proje ölçeğine göre ayrıca değerlendirilir.",
    includedTitle: "Standart kurulumda dahil",
    includedItems: [
      "Ücretsiz keşif ve bölge planlaması",
      "Alarm paneli, sensörler ve siren temini ve montajı",
      "GSM + internet çift hat bağlantısı",
      "Mobil uygulama kurulumu ve kullanıcı teslimi",
      "Saha testleri ve devreye alma",
    ],
    additionalTitle: "Projeye göre ayrıca değerlendirilen başlıklar",
    additionalItems: [
      "İzleme merkezi aboneliği (aylık ücretli)",
      "Ek bölgeler için ilave sensör ihtiyacı",
      "Kablolu sistem için kanal açma veya montaj altyapısı",
      "Mevcut eski panel kaldırma veya revizyon",
    ],
  },
  pricingFactors: {
    description:
      "Alarm sistemi fiyatı, yalnızca panel modeline değil mekanın gerçek ihtiyacına bağlıdır.",
    items: [
      "Oda sayısı ve giriş noktası sayısı sensör adedini ve panel kapasitesini belirler.",
      "Kablosuz sensörler kablolama maliyetini düşürür ama batarya bakımı gerektirir; kablolu sensörler daha kararlı çalışır.",
      "İzleme merkezi bağlantısı opsiyonel olup aylık abonelik maliyeti içerir.",
      "İç mekan ile dış mekan sirenlerinin sayısı toplam maliyeti etkiler.",
      "Mevcut altyapı veya panel varsa revizyon ile maliyet düşürülebilir.",
    ],
  },
  segments: [
    {
      title: "Konutlar İçin Alarm Sistemi",
      content:
        "Kapı, pencere ve iç alan sensörleri ile evinizin tüm giriş noktalarını koruyoruz. Evdeyken/dışarıdayken farklı bölge profilleri ayarlanabilir.",
      href: "/apartman-site-guvenlik-sistemi",
    },
    {
      title: "İşyerleri İçin Alarm Sistemi",
      content:
        "Mesai saatleri dışında otomatik devreye giren alarm. Kasa bölgesi, depo ve giriş noktaları için hassas bölge tanımlaması yapılır.",
      href: "/isyeri-guvenlik-sistemi",
    },
    {
      title: "Fabrika ve Depolar İçin Alarm",
      content:
        "Geniş tesislerde çok bölgeli alarm yapılandırması. Her bölge bağımsız yönetilir, detaylı giriş/çıkış raporlaması sunulur.",
      href: "/fabrika-depo-guvenlik-sistemi",
    },
  ],
  faq: [
    {
      question: "Kablosuz mu yoksa kablolu mu tercih etmeliyim?",
      answer:
        "Hazır yapılarda kablosuz, inşaat aşamasındaki veya kablo altyapısı uygun yapılarda kablolu avantajlıdır. Keşifte mekanınıza uygun seçeneği birlikte belirliyoruz.",
    },
    {
      question: "Elektrik kesintisinde alarm çalışmaya devam eder mi?",
      answer:
        "Evet. Yedek batarya ile 8–24 saat bağımsız çalışır. Batarya durumu mobil uygulama üzerinden izlenebilir.",
    },
    {
      question: "İzleme merkezi zorunlu mu?",
      answer:
        "Hayır, opsiyoneldir. İzleme merkezi olmadan da telefona anlık bildirim ve siren uyarısı çalışır. Merkez bağlantısı ek güvence olarak sunulur.",
    },
    {
      question: "Yanlış alarm sorunu yaşar mıyım?",
      answer:
        "Doğru sensör seçimi ve yerleşimi ile yanlış alarm oranı minimumdur. Evcil hayvan dostu PIR sensörleri de mevcuttur.",
    },
    {
      question: "Alarm montajı ne kadar sürer?",
      answer:
        "Konut için genellikle aynı gün, işyerleri için 1–2 gün. Keşifte net süre bildirilir.",
    },
  ],
  defaultService: "alarm",
  ctaContent: {
    badge: "Keşif • Bölge planı • Teklif",
    title: "Alarm Sistemi İçin Ücretsiz Keşif ve Teklif Alın",
    subtitle:
      "Mekan tipinizi ve yaklaşık oda sayısını paylaşın. Bölge planını keşifte birlikte oluşturalım.",
    trustItems: [
      "Ücretsiz sahada keşif ve bölge planlaması",
      "GSM + internet çift hat güvenliği",
      "Sensör yerleşimi ve devreye alma",
      "Ürün garantisi ve satış sonrası destek",
    ],
    supportCards: [
      {
        title: "Mekanınıza özel bölge planı",
        text: "Giriş noktaları, iç alanlar ve hassas bölgeleri ayrı ayrı planlıyoruz.",
      },
      {
        title: "Çalışan sistem teslimi",
        text: "Montaj, mobil uygulama, bölge testleri ve kullanıcı eğitimi ile sistemi hazır teslim ediyoruz.",
      },
    ],
  },
  authorityBeforeFaq: {
    title: "Türkiye Genelinde Alarm Sistemi Kurulumu Hizmeti",
    description:
      "Alarm sistemi kurulum hizmetini Türkiye'nin büyük şehirlerinde sunuyoruz. Şehir bazlı uygulama detaylarını aşağıdaki sayfalardan inceleyebilirsiniz.",
    links: [
      {
        href: "/istanbul/alarm-sistemi-kurulumu",
        label: "İstanbul Alarm Sistemi Kurulumu",
      },
      {
        href: "/ankara/alarm-sistemi-kurulumu",
        label: "Ankara Alarm Sistemi Kurulumu",
      },
      {
        href: "/izmir/alarm-sistemi-kurulumu",
        label: "İzmir Alarm Sistemi Kurulumu",
      },
    ],
  },
  authorityAfterFaq: {
    title: "Alarm Sistemi Kurulumu Hizmeti Verilen Şehirler",
    links: [
      { href: "/istanbul/alarm-sistemi-kurulumu", label: "İstanbul" },
      { href: "/ankara/alarm-sistemi-kurulumu", label: "Ankara" },
      { href: "/izmir/alarm-sistemi-kurulumu", label: "İzmir" },
      { href: "/bursa/alarm-sistemi-kurulumu", label: "Bursa" },
      { href: "/antalya/alarm-sistemi-kurulumu", label: "Antalya" },
    ],
  },
};

export default function AlarmSayfasi() {
  return <ServicePageTemplate data={data} />;
}
