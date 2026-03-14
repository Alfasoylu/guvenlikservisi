import type { Metadata } from "next";
import { getCanonicalUrlForKnownPath } from "@/lib/canonical";
import ServicePageTemplate, {
  ServicePageData,
} from "@/components/templates/ServicePageTemplate";

const canonicalUrl = getCanonicalUrlForKnownPath("/kamera-sistemi-kurulumu");

export const metadata: Metadata = {
  title: "Kamera Sistemi Kurulumu | Keşif, Montaj ve Uzaktan İzleme",
  description:
    "İşyeri, apartman, depo ve fabrika için profesyonel IP kamera sistemi kurulumu. Ücretsiz keşif, kör nokta analizi, kayıt planlaması ve anahtar teslim montaj.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "Kamera Sistemi Kurulumu | Keşif, Montaj ve Uzaktan İzleme",
    description:
      "İşyeri ve konut için IP kamera kurulumu. Ücretsiz keşif, kör nokta analizi, anahtar teslim montaj.",
    url: canonicalUrl,
    siteName: "Güvenlik Servisi",
    locale: "tr_TR",
    type: "website",
  },
};

const data: ServicePageData = {
  slug: "kamera-sistemi-kurulumu",
  title: "Kamera Sistemi Kurulumu",
  subtitle:
    "İşyeri, apartman, depo ve fabrika alanlarınız için keşif, montaj, kayıt planlaması ve mobil izleme kurulumunu tek ekipte topluyoruz.",
  description:
    "Kamera sistemi kurulumu yalnızca cihazı duvara monte etmek değildir. Doğru kamera noktasını belirlemek, kayıt süresini ihtiyaca göre planlamak, kör noktaları minimize etmek ve mobil erişimi sağlıklı çalışır hale getirmek birlikte düşünülmesi gereken adımlardır.\n\nHikvision, Dahua ve Reolink gibi markalarla çalışıyor; PoE altyapı, NVR kayıt ve uzaktan izleme kurulumunu tek projede teslim ediyoruz.\n\nKurulum sonrası iOS ve Android uygulamasıyla canlı izleme, kayıt erişimi ve hareket bildirimi aktif hale gelir. Destek ve bakım ihtiyacı için sonraki adımlar baştan netleştirilir.",
  heroBadge: "Keşif • Montaj • Uzaktan izleme",
  heroTrustItems: [
    "Ücretsiz sahada keşif ve kör nokta analizi",
    "Kayıt süresi ve depolama planlaması",
    "Anahtar teslim montaj ve devreye alma",
    "Mobil izleme kurulumu ve kullanıcı teslimi",
  ],
  heroAdvantages: [
    {
      title: "Projeye göre planlama",
      text: "Kamera sayısını, kayıt süresini ve altyapıyı alanın gerçek ihtiyacına göre belirliyoruz.",
    },
    {
      title: "Çalışan sistem teslimi",
      text: "Montaj, uzaktan erişim, kullanıcı ayarları ve test ile sistemi hazır teslim ediyoruz.",
    },
  ],
  heroPanel: {
    title: "Kamera kurulumunda neye odaklanırız",
    body: [
      "Kör nokta analizi ve giriş-çıkış takibi için doğru kamera noktalarını sahada belirleriz.",
      "Kayıt cihazı, disk kapasitesi ve ağ altyapısını proje ölçeğine göre planlarız.",
      "Mobil izleme ve uzaktan erişimi kurulum sırasında aktif hale getirip test ederek teslim ederiz.",
    ],
  },
  authorityTitle: "Neden Doğru Keşif ve Planlama Belirleyicidir?",
  authorityBody: [
    "Birçok kamera sistemi kurulumdan sonra çalışır görünür ama olay anında yetersiz kalır. Bunun sebebi genellikle yanlış keşif, eksik kapsama veya yetersiz kayıt planlamasıdır.",
    "Profesyonel kurulumda amaç cihaz satmak değil; alanı gerçekten görünür kılmak, kör noktaları azaltmak ve kayıt süresini ihtiyacı karşılayacak şekilde planlamaktır.",
    "Doğru altyapıyla kurulan sistemler hem daha az arıza çıkarır hem de uzun vadede bakım maliyetini düşürür.",
  ],
  authorityNote: {
    title: "Hızlı teklif almak için",
    body: "Mekan tipinizi, tahmini kamera sayısını ve kayıt beklentinizi paylaşmanız yeterli. Keşif planını aynı gün oluşturuyoruz.",
  },
  features: [
    "2K/4K çözünürlüklü IP kameralar",
    "Gece görüşü (30–50m IR mesafe)",
    "Hareket algılama ve anlık bildirim",
    "Yerel NVR ve opsiyonel bulut kayıt",
    "Mobil uygulama (iOS + Android)",
    "PoE altyapı (tek kablo çözümü)",
    "Dış mekan için vandal-proof kasalar",
    "1–3 yıl ürün garantisi",
  ],
  decisionBlocks: [
    {
      title: "Hangi Durumda Kamera Sistemi Kurulumu Doğru Seçimdir?",
      description:
        "Kamera sistemi her zaman en öncelikli çözüm olmayabilir. Ancak aşağıdaki senaryolarda kurulum doğru başlangıç noktasıdır.",
      items: [
        "Giriş çıkış noktaları ve kritik alanlar için görüntü kaydı ve caydırıcılık gerekiyorsa.",
        "Mevcut sisteminiz yok veya eski sistem artık güvenilir kayıt vermiyor.",
        "Uzaktan izleme ile sahayı telefondan ya da merkezden takip etmek istiyorsanız.",
        "İşyeri, apartman veya depo güvenliğini görünür hale getirmek ve olay sonrası inceleme yapabilmek istiyorsanız.",
      ],
    },
    {
      title: "Hangi Durumda Farklı Bir Hizmet Daha Doğru Olabilir?",
      items: [
        "Kurulu kameranız var ama görüntü gelmiyor veya kayıt almıyorsa: Kamera arıza servisi daha doğru başlangıçtır.",
        "Sistemin düzenli kontrol ve bakım ihtiyacı varsa: Bakım sözleşmesi değerlendirilmelidir.",
        "Yalnızca mevcut sistemi telefondan erişilebilir yapmak istiyorsanız: Uzaktan kamera izleme hizmeti yeterli olabilir.",
        "Kapı güvenliği ve giriş kontrolü öncelikli ise: Kartlı geçiş veya alarm sistemi ayrıca düşünülmelidir.",
      ],
    },
  ],
  scopeDetails: {
    title: "Kurulumda Neler Dahil, Neler Ayrıca Değerlendirilir?",
    description:
      "Standart bir kamera kurulumu projesinde aşağıdaki başlıklar dahil sunulur. Bazı ihtiyaçlar ise proje ölçeğine göre ayrıca değerlendirilir.",
    includedTitle: "Standart kurulumda dahil",
    includedItems: [
      "Ücretsiz keşif ve kör nokta analizi",
      "Kamera, NVR ve hard disk temini ve montajı",
      "Kablolama ve PoE altyapı kurulumu",
      "Mobil uygulama kurulumu ve kullanıcı teslimi",
      "Saha testleri ve devreye alma",
    ],
    additionalTitle: "Projeye göre ayrıca değerlendirilen başlıklar",
    additionalItems: [
      "Mevcut eski altyapı kaldırma veya revizyon ihtiyacı",
      "Gece görüş performansını artırmak için ilave aydınlatma",
      "Uzaktan izleme için modem veya ağ altyapısı düzenlemesi",
      "8+ kamera projelerinde ek switch ve enerji planlaması",
    ],
  },
  pricingFactors: {
    description:
      "Kamera sistemi kurulumunda fiyat ve süre, yalnızca kamera sayısına değil alanın gerçek ihtiyacına bağlıdır.",
    items: [
      "Kamera sayısı ve çözünürlük tercihi malzeme maliyetini doğrudan etkiler.",
      "İç mekan ile dış mekan projelerinde kasa tipi, kablolama ve montaj zorluğu farklılaşır.",
      "Mevcut kablo altyapısı varsa kullanılabilir; yoksa sıfırdan çekim süre ve maliyeti artırır.",
      "Kayıt süresi beklentisi disk kapasitesini, kayıt cihazı modelini ve bütçeyi değiştirir.",
      "Tek katlı mekan ile çok katlı bina veya geniş saha arasında montaj süresi farklıdır.",
    ],
  },
  segments: [
    {
      title: "Apartman ve Siteler İçin Kamera Sistemi",
      content:
        "Giriş kapıları, asansör önleri, otopark ve ortak alanları kapsayan çok noktalı kamera sistemleri. Site yönetimine merkezi izleme ve kayıt arşivi sunulur.",
      href: "/apartman-site-guvenlik-sistemi",
    },
    {
      title: "İşyerleri İçin Kamera Sistemi",
      content:
        "Mağaza, ofis ve kafe için müşteri alanı, kasa, depo ve giriş noktalarını kapsayan kamera ağı. Operasyonel denetim ve çalışan güvenliği odaklı.",
      href: "/isyeri-guvenlik-sistemi",
    },
    {
      title: "Fabrika ve Depolar İçin Kamera Sistemi",
      content:
        "Geniş sahalarda yükleme alanı, çevre hattı ve üretim bölümü takibi. Gece görüş, PTZ ve kayıt kapasitesi odaklı kurulum.",
      href: "/fabrika-depo-guvenlik-sistemi",
    },
  ],
  faq: [
    {
      question: "Kamera kurulumu ne kadar sürer?",
      answer:
        "Konut için genelde aynı gün, küçük işyerleri için 1–2 gün, büyük projeler için keşif sonrası 3–5 iş günü. Net süre keşifte belirlenir.",
    },
    {
      question: "Kaç kamera gerektiğini nasıl belirliyorsunuz?",
      answer:
        "Alan büyüklüğü, giriş-çıkış noktaları, kör alanlar ve kayıt beklentisine göre keşifte net kamera planı çıkarıyoruz.",
    },
    {
      question: "Mevcut kablo altyapısı kullanılabilir mi?",
      answer:
        "Cat5e/Cat6 altyapı varsa PoE kameralar için değerlendirilir. Keşifte altyapı uygunluğu test edilir.",
    },
    {
      question: "Kayıtlar ne kadar süre saklanır?",
      answer:
        "Standart 2TB disk ile 4 kamerada yaklaşık 30 gün. Depolama, kamera sayısı ve çözünürlüğe göre planlanır.",
    },
    {
      question: "Uzaktan telefondan izleme kuruluyor mu?",
      answer:
        "Evet. Mobil uygulama ile canlı izleme ve kayıt erişimi kurulum sırasında aktif hale getirilir.",
    },
    {
      question: "Kurulum sonrası destek var mı?",
      answer:
        "Evet. Ürün garantisi ve teknik destek mevcuttur. İhtiyaç halinde bakım sözleşmesi de değerlendirilebilir.",
    },
  ],
  defaultService: "kamera",
  ctaContent: {
    badge: "Keşif • Planlama • Teklif",
    title: "Kamera Sistemi İçin Ücretsiz Keşif ve Teklif Alın",
    subtitle:
      "Mekan tipinizi ve tahmini kamera sayısını paylaşın. Keşif planını aynı gün oluşturalım, ihtiyacınıza göre doğru sistemi birlikte netleştirelim.",
    trustItems: [
      "Ücretsiz sahada keşif ve kör nokta analizi",
      "Kamera sayısı ve kayıt planlaması",
      "Anahtar teslim montaj ve devreye alma",
      "Ürün garantisi ve satış sonrası destek",
    ],
    supportCards: [
      {
        title: "Projeye göre planlama",
        text: "Kamera yerleşimini, kayıt kapasitesini ve altyapı ihtiyacını alanınıza göre belirliyoruz.",
      },
      {
        title: "Çalışan sistem teslimi",
        text: "Montaj, mobil erişim, kullanıcı ayarları ve saha testi ile sistemi hazır teslim ediyoruz.",
      },
    ],
  },
  authorityBeforeFaq: {
    title: "Türkiye Genelinde Kamera Sistemi Kurulumu Hizmeti",
    description:
      "Kamera sistemi kurulum hizmetini Türkiye'nin büyük şehirlerinde aktif olarak sunuyoruz. Şehir bazlı hizmet detaylarına aşağıdaki sayfalardan ulaşabilirsiniz.",
    links: [
      {
        href: "/istanbul/kamera-sistemi-kurulumu",
        label: "İstanbul Kamera Sistemi Kurulumu",
      },
      {
        href: "/ankara/kamera-sistemi-kurulumu",
        label: "Ankara Kamera Sistemi Kurulumu",
      },
      {
        href: "/izmir/kamera-sistemi-kurulumu",
        label: "İzmir Kamera Sistemi Kurulumu",
      },
    ],
  },
  authorityAfterFaq: {
    title: "Kamera Sistemi Kurulumu Hizmeti Verilen Şehirler",
    links: [
      { href: "/istanbul/kamera-sistemi-kurulumu", label: "İstanbul" },
      { href: "/ankara/kamera-sistemi-kurulumu", label: "Ankara" },
      { href: "/izmir/kamera-sistemi-kurulumu", label: "İzmir" },
      { href: "/bursa/kamera-sistemi-kurulumu", label: "Bursa" },
      { href: "/antalya/kamera-sistemi-kurulumu", label: "Antalya" },
    ],
  },
};

export default function KameraSayfasi() {
  return <ServicePageTemplate data={data} />;
}
