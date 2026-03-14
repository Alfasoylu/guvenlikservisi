import type { Metadata } from "next";
import { getCanonicalUrlForKnownPath } from "@/lib/canonical";
import ServicePageTemplate, {
  ServicePageData,
} from "@/components/templates/ServicePageTemplate";

const canonicalUrl = getCanonicalUrlForKnownPath(
  "/apartman-site-guvenlik-sistemi",
);

export const metadata: Metadata = {
  title: "Apartman ve Site Güvenlik Sistemi | Kamera, Geçiş Kontrol, Yangın",
  description:
    "Site ve apartman yönetimleri için komple güvenlik sistemi: kamera, kartlı geçiş, interkom, bariyer, yangın alarm. Tek proje, tek muhatap, anahtar teslim kurulum.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "Apartman ve Site Güvenlik Sistemi | Kamera, Geçiş Kontrol, Yangın",
    description:
      "Site yönetimleri için komple güvenlik: kamera, kartlı geçiş, interkom, bariyer. Anahtar teslim.",
    url: canonicalUrl,
    siteName: "Güvenlik Servisi",
    locale: "tr_TR",
    type: "website",
  },
};

const data: ServicePageData = {
  slug: "apartman-site-guvenlik-sistemi",
  title: "Apartman ve Site Güvenlik Sistemi",
  subtitle:
    "Kamera, kartlı geçiş, interkom, bariyer ve yangın alarm sistemlerini tek proje kapsamında planlıyor, kuruyoruz ve yönetimi tek muhataptan sağlıyoruz.",
  description:
    "Site ve apartman güvenliği çok bileşenli bir yapıdır. Kamera sistemi, kartlı geçiş, video interkom, araç bariyeri ve yangın alarm gibi farklı sistemlerin birlikte çalışması gerekir.\n\nBu sistemlerin ayrı ayrı firmalardan temin edilmesi hem koordinasyon zorluğu hem de entegrasyon sorunları yaratır. Tek proje kapsamında tüm bileşenleri planlıyor, montajını yapıyor ve yönetimi tek sözleşmeden sağlıyoruz.\n\nSite yönetimine merkezi kontrol yazılımı ile tüm sistemleri tek ekrandan izleme, kart tanımlama ve giriş raporu alma imkânı sunulur.",
  heroBadge: "Komple güvenlik • Tek muhatap • Anahtar teslim",
  heroTrustItems: [
    "Kamera, geçiş kontrol ve yangın alarm tek projede",
    "Site yönetimine merkezi kontrol yazılımı",
    "5 daireden büyük konut projelerine kadar",
    "Tek sözleşme, tek muhatap, tek destek hattı",
  ],
  heroAdvantages: [
    {
      title: "Tek projede entegre çözüm",
      text: "Kamera, kartlı geçiş, interkom ve yangın alarm ayrı ayrı değil; tek proje kapsamında koordineli kurulur.",
    },
    {
      title: "Site yönetimine hazır teslim",
      text: "Merkezi yazılım, kart tanımlama paneli ve giriş raporları ile yönetim hazır başlatılır.",
    },
  ],
  heroPanel: {
    title: "Site güvenlik projesinde neye odaklanırız",
    body: [
      "Sitenin giriş noktalarını, ortak alanlarını, otopark ve çevre hattını değerlendirerek bileşen ihtiyacını belirliyoruz.",
      "Kamera, geçiş kontrol, interkom ve yangın alarm bileşenlerini tek projede koordineli planlıyoruz.",
      "Yönetim yazılımı, kart tanımlama ekranı ve kullanıcı eğitimi ile sistemi yönetime hazır teslim ediyoruz.",
    ],
  },
  authorityTitle:
    "Neden Güvenlik Bileşenlerini Tek Projede Planlamak Önemlidir?",
  authorityBody: [
    "Site güvenliğinde en yaygın sorun, farklı sistemlerin farklı firmalardan temin edilmesi ve entegre çalışmamasıdır. Kamera ayrı, interkom ayrı, kartlı geçiş ayrı kurulan projelerde koordinasyon zayıflar.",
    "Tek proje kapsamında planlanan güvenlik sistemi hem daha verimli çalışır hem de arıza ve bakım süreçlerinde tek muhatap avantajı sağlar. Giriş kontrolü ve kamera kaydının eşleşmesi, aynı ağ altyapısı üzerinden çalışması ve merkezi izleme bunun somut faydalarıdır.",
    "Ayrıca site yönetiminin bütçe planlamasını kolaylaştırır. Tüm bileşenler tek sözleşme ve tek ödeme planı ile yönetilir.",
  ],
  authorityNote: {
    title: "Site yöneticisi misiniz?",
    body: "Sitenizin daire sayısını, mevcut güvenlik durumunu ve öncelikli ihtiyaçları paylaşmanız yeterli. Komple güvenlik teklifini hazırlayalım.",
  },
  features: [
    "Giriş kapısı ve ortak alan kameraları",
    "Otopark ve çevre güvenlik kameraları",
    "Kartlı geçiş ve biyometrik okuyucu",
    "Video kapı interkom sistemi",
    "Araç bariyer ve LPR plaka tanıma",
    "Yangın alarm sistemi (zorunlu)",
    "Merkezi yönetim yazılımı",
    "Mobil yönetim uygulaması",
  ],
  decisionBlocks: [
    {
      title: "Hangi Durumda Komple Site Güvenlik Paketi Doğru Seçimdir?",
      items: [
        "Yeni site veya apartman projesi tamamlanıyor ve güvenlik altyapısı sıfırdan kurulacaksa.",
        "Mevcut güvenlik sistemi yetersiz ve birden fazla bileşenin (kamera + geçiş kontrol + alarm) birlikte güncellenmesi gerekiyorsa.",
        "Farklı firmalardan alınan sistemlerin entegre çalışmadığı ve yönetim zorluğu yaşandığı durumlarda.",
        "Site yönetimi tüm güvenlik bileşenlerini tek muhatap ve tek sözleşme altında toplamak istiyorsa.",
      ],
    },
    {
      title: "Hangi Durumda Tekil Hizmet Daha Uygun Olabilir?",
      items: [
        "Yalnızca kamera sistemi ihtiyacınız varsa: Kamera sistemi kurulumu sayfamızı inceleyebilirsiniz.",
        "Yalnızca kapı giriş kontrolü gerekli ise: Kartlı geçiş sistemi kurulumu daha hedefli bir başlangıçtır.",
        "Yangın alarm sistemi güncelleme veya yasal uyumluluk ihtiyacı varsa: Yangın alarm sistemi kurulumu ayrıca değerlendirilebilir.",
        "Mevcut kamera sisteminde arıza veya bakım sorunu varsa: Kamera arıza servisi veya bakım sözleşmesi incelenmelidir.",
      ],
    },
  ],
  scopeDetails: {
    title: "Projede Neler Dahil, Neler Ayrıca Değerlendirilir?",
    description:
      "Komple site güvenlik projesinde standart kapsam ve projeye göre ek değerlendirme gerektiren başlıklar aşağıdadır.",
    includedTitle: "Standart projede dahil",
    includedItems: [
      "Ücretsiz keşif ve çok bileşenli ihtiyaç analizi",
      "Kamera, kartlı geçiş, interkom ve yangın alarm montajı",
      "Merkezi yönetim yazılımı kurulumu",
      "Kart tanımlama, kullanıcı eğitimi ve sistem teslimi",
      "Proje belgelendirme ve test raporları",
    ],
    additionalTitle: "Projeye göre ayrıca değerlendirilen başlıklar",
    additionalItems: [
      "Araç bariyer ve LPR plaka tanıma sistemi",
      "Mevcut eski sistemlerin kaldırılması veya revizyonu",
      "Geniş sitelerde ek switch, fiber altyapı veya kablosuz köprü",
      "Güvenlik kulübesi ve turnike entegrasyonu",
    ],
  },
  pricingFactors: {
    description:
      "Site güvenlik projelerinde fiyat, bileşen sayısı, site ölçeği ve altyapı durumuna bağlıdır.",
    items: [
      "Daire sayısı ve giriş noktası adedi bileşen kapsamını doğrudan belirler.",
      "Kamera sayısı ve kartlı geçiş okuyucu adedi malzeme maliyetini etkiler.",
      "Mevcut kablo altyapısı varsa kullanılabilir; yoksa altyapı çekimi ek maliyet oluşturur.",
      "Yangın alarm sistemi zorunlu olduğu için proje kapsamından çıkarılamaz.",
      "Araç bariyer, LPR ve turnike gibi ek bileşenler projeye göre ayrıca fiyatlandırılır.",
    ],
  },
  venueTypes: [
    {
      title: "Küçük Apartman (5–20 Daire)",
      description:
        "Kamera ve video interkom ile temel güvenlik. Giriş kapısı ve otopark izleme.",
    },
    {
      title: "Büyük Apartman (20–50 Daire)",
      description:
        "Kartlı geçiş, yangın alarm ve merkezi kamera sistemi dahil komple güvenlik.",
    },
    {
      title: "Rezidans",
      description:
        "Üst düzey güvenlik: lobi, asansör, otopark kontrol ve misafir yönetim sistemi.",
    },
    {
      title: "Toplu Konut Sitesi",
      description:
        "Çevre güvenlik, araç bariyeri, plaka tanıma ve site yönetimi kontrol yazılımı.",
    },
    {
      title: "Kooperatif",
      description:
        "Bütçeye uygun modüler güvenlik çözümü. Aşamalı kurulum ile ödeme kolaylığı.",
    },
  ],
  finalCtaTitle: "Siteniz İçin Komple Güvenlik Teklifi Alın",
  finalCtaSubtitle:
    "Apartman ve site güvenliği için ücretsiz keşif randevusu alın. Kamera, kartlı geçiş ve yangın alarm tek projede.",
  whatsappMessage:
    "Merhaba, sitemiz için güvenlik sistemi teklifi almak istiyorum.",
  segments: [
    {
      title: "Giriş Kontrolü ve Interkom",
      content:
        "Site kapılarında kartlı geçiş, daire içi video interkom ve uzaktan kapı açma. Sakinler misafirlerini video ile görüp daireden kapı açabilir.",
      href: "/kartli-gecis-sistemi-kurulumu",
    },
    {
      title: "Güvenlik Kamera Sistemi",
      content:
        "Giriş çıkışlar, otopark, asansör önleri ve koridorları kapsayan tam kapsamlı kamera ağı. Kayıt, mobil izleme ve merkezi yönetim dahil.",
      href: "/kamera-sistemi-kurulumu",
    },
    {
      title: "Yangın Alarm Sistemi",
      content:
        "Bina yangın yönetmeliğine uygun zorunlu yangın alarm sistemi. Ortak alanlar, bodrum katlar ve merdiven boşlukları. Belgelendirme dahil.",
      href: "/yangin-alarm-sistemi-kurulumu",
    },
  ],
  faq: [
    {
      question: "Kaç daireli siteler için hizmet veriyorsunuz?",
      answer:
        "5 daireli apartmandan büyük konut projelerine kadar her ölçekte proje yapıyoruz. Bileşen sayısı ve kapsam daire sayısına göre ayarlanır.",
    },
    {
      question: "Kat malikleri kurulu kararı gerekiyor mu?",
      answer:
        "Toplu yapı yönetimlerinde kurul kararı gerekebilir. Yönetiminize teknik sunum ve bütçe önerisi hazırlıyoruz.",
    },
    {
      question: "Mevcut interkom veya kamera sistemi değiştirilebilir mi?",
      answer:
        "Evet. Eski analog sistemler modern IP altyapısına yükseltilebilir. Mevcut altyapı keşifte değerlendirilir.",
    },
    {
      question: "Bakım sözleşmesi sunuyor musunuz?",
      answer:
        "Evet. Tüm bileşenleri kapsayan yıllık bakım sözleşmesi ile sistem performansı ve yasal uyumluluk garanti altına alınır.",
    },
    {
      question: "Tüm bileşenleri aynı anda kurmak zorunlu mu?",
      answer:
        "Hayır. Aşamalı kurulum mümkündür. Altyapıyı baştan entegrasyona uygun planlıyoruz; bileşenler sonradan eklenebilir.",
    },
  ],
  defaultService: "hepsi",
  ctaContent: {
    badge: "Komple güvenlik • Keşif • Teklif",
    title: "Siteniz İçin Komple Güvenlik Teklifi Alın",
    subtitle:
      "Daire sayısını ve öncelikli güvenlik ihtiyaçlarını paylaşın. Tek projede tüm bileşenleri kapsayan teklifi hazırlayalım.",
    trustItems: [
      "Kamera, geçiş kontrol ve yangın alarm tek projede",
      "Merkezi yönetim yazılımı ve kart tanımlama",
      "Tek sözleşme ve tek muhatap avantajı",
      "Aşamalı kurulum imkânı",
    ],
    supportCards: [
      {
        title: "Komple güvenlik planı",
        text: "Tüm bileşenleri tek projede koordineli planlıyor ve entegre çalışır şekilde teslim ediyoruz.",
      },
      {
        title: "Site yönetimine hazır teslim",
        text: "Yönetim yazılımı, kart tanımlama eğitimi ve raporlama sistemiyle hazır başlatılır.",
      },
    ],
  },
};

export default function ApartmanSiteSayfasi() {
  return <ServicePageTemplate data={data} />;
}
