import type { Metadata } from "next";
import { getCanonicalUrlForKnownPath } from "@/lib/canonical";
import ServicePageTemplate, {
  ServicePageData,
} from "@/components/templates/ServicePageTemplate";

const canonicalUrl = getCanonicalUrlForKnownPath(
  "/fabrika-depo-guvenlik-sistemi",
);

export const metadata: Metadata = {
  title:
    "Fabrika ve Depo Güvenlik Sistemi | Endüstriyel Kamera, Alarm ve Erişim Kontrol",
  description:
    "Fabrika, depo ve sanayi tesisleri için büyük ölçekli güvenlik sistemi. Geniş alan kamera, çevre güvenlik, turnike ve SLA garantili bakım sözleşmesi.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "Fabrika ve Depo Güvenlik Sistemi | Endüstriyel Güvenlik Çözümleri",
    description:
      "Sanayi tesisleri için büyük ölçekli güvenlik sistemi. Kamera, alarm, turnike. SLA garantili bakım.",
    url: canonicalUrl,
    siteName: "Güvenlik Servisi",
    locale: "tr_TR",
    type: "website",
  },
};

const data: ServicePageData = {
  slug: "fabrika-depo-guvenlik-sistemi",
  title: "Fabrika ve Depo Güvenlik Sistemi",
  subtitle:
    "Sanayi tesisleri için geniş alan kamera, çok bölgeli alarm, endüstriyel yangın alarm, turnike ve LPR plaka tanıma. SLA garantili bakım sözleşmesi.",
  description:
    "Fabrika ve depo güvenliği, geniş alanlar, yüksek personel sayısı ve özel risk profilleri nedeniyle standart güvenlik çözümlerinden farklı bir yaklaşım gerektirir.\n\nGeniş açılı ve PTZ kameralar, çevre hattı alarm sistemi, endüstriyel yangın algılama ve turnike tabanlı erişim kontrol bileşenlerini tek projede planlıyor ve kuruyoruz.\n\nSLA (Servis Seviye Anlaşması) garantili bakım sözleşmesi ile sistemlerin kesintisiz çalışması güvence altına alınır. Arıza bildiriminden itibaren belirli sürede müdahale taahhüdü verilir.",
  heroBadge: "Endüstriyel güvenlik • Geniş alan • SLA bakım",
  heroTrustItems: [
    "Geniş alan ve çevre hattı güvenliği",
    "Çok bölgeli alarm ve erişim kontrol",
    "SLA garantili bakım sözleşmesi",
    "Araç plaka tanıma (LPR) ve turnike",
  ],
  heroAdvantages: [
    {
      title: "Endüstriyel ölçekte planlama",
      text: "Tesis çevre hattı, yükleme alanı, üretim bölümü ve depo alanları ayrı ayrı değerlendirilir ve bileşen ihtiyacı belirlenir.",
    },
    {
      title: "SLA garantili bakım",
      text: "Arıza bildiriminden itibaren taahhüt edilen sürede sahaya müdahale. Üretim durmaları minimize edilir.",
    },
  ],
  heroPanel: {
    title: "Endüstriyel güvenlik projesinde neye odaklanırız",
    body: [
      "Tesisin çevre hattını, giriş noktalarını, üretim ve depo alanlarını değerlendirerek çok bölgeli güvenlik planı çıkarıyoruz.",
      "Kamera sistemi, çevre alarmı, yangın algılama ve turnike bileşenlerini tek projede koordineli planlıyoruz.",
      "SLA sözleşmesi, raporlama yazılımı ve güvenlik yönetim sistemiyle birlikte teslim ediyoruz.",
    ],
  },
  authorityTitle:
    "Neden Endüstriyel Tesislerde Güvenlik Özel Planlama Gerektirir?",
  authorityBody: [
    "Fabrika ve depo güvenliğinde standart bir güvenlik paketi yeterli olmaz. Geniş alan kapsama, gece koşulları, ağır hava şartları ve yüksek personel trafiği standart bileşenlerin kapasitesini aşar.",
    "Endüstriyel ölçekte projeler; PTZ ve termal kamera, çevre hattı algılama, çok bölgeli alarm ve hızlı geçişli turnike gibi özel bileşenler gerektirir. Bunların koordineli çalışması tek projede planlanmalıdır.",
    "Ayrıca üretim sürekliliği açısından güvenlik sistemlerindeki kesinti kabul edilemez. SLA garantili bakım sözleşmesi ile arıza süreleri minimize edilir ve planlı bakımlarla sorunlar önlenir.",
  ],
  authorityNote: {
    title: "Tesis yöneticisi misiniz?",
    body: "Tesis tipi, yaklaşık alan büyüklüğü ve personel sayısını paylaşmanız yeterli. Çok bölgeli güvenlik planı ve SLA teklifini hazırlayalım.",
  },
  features: [
    "Geniş açılı ve PTZ kameralar",
    "Termal kamera seçeneği (gece çevre güvenliği)",
    "Çok bölgeli alarm sistemi",
    "Endüstriyel yangın alarm ve gaz algılama",
    "LPR araç plaka tanıma",
    "Turnike ve güvenlik kulübesi",
    "Çevre hattı alarm ve dedektör sistemi",
    "SLA garantili bakım sözleşmesi",
  ],
  decisionBlocks: [
    {
      title: "Hangi Durumda Endüstriyel Güvenlik Paketi Gereklidir?",
      items: [
        "Yeni fabrika veya depo devreye alınıyor ve güvenlik altyapısı sıfırdan kurulacaksa.",
        "Mevcut güvenlik yetersiz, çevre hattı kontrol edilemiyor veya kamera kapsamı eksik ise.",
        "Tesis personel sayısı yüksek ve giriş kontrol ihtiyacı (turnike, kart okuyucu) oluşmuş ise.",
        "Sigorta, iş güvenliği mevzuatı veya müşteri denetimi güvenlik sistemi zorunluluğu getiriyorsa.",
      ],
    },
    {
      title: "Hangi Durumda Tekil Hizmet Yeterli Olabilir?",
      items: [
        "Yalnızca kamera ihtiyacınız varsa: Kamera sistemi kurulumu daha hedefli bir başlangıçtır.",
        "Sadece yangın alarm zorunluluğu varsa: Yangın alarm sistemi kurulumu ayrıca değerlendirilebilir.",
        "Personel giriş kontrolü öncelikli ise: Kartlı geçiş sistemi kurulumu incelenmelidir.",
        "Mevcut kamera sisteminde arıza veya bakım sorunu varsa: Kamera arıza servisi veya bakım sözleşmesi değerlendirilmelidir.",
      ],
    },
  ],
  scopeDetails: {
    title: "Projede Neler Dahil, Neler Ayrıca Değerlendirilir?",
    description:
      "Endüstriyel güvenlik projesinde standart kapsam ve tesise göre ek değerlendirme gerektiren başlıklar aşağıdadır.",
    includedTitle: "Standart projede dahil",
    includedItems: [
      "Ücretsiz keşif ve çok bölgeli güvenlik analizi",
      "Kamera, alarm, yangın alarm ve erişim kontrol montajı",
      "Çevre hattı alarm ve dedektör sistemi",
      "Raporlama yazılımı ve merkezi yönetim kurulumu",
      "Belgelendirme, test raporları ve devreye alma",
    ],
    additionalTitle: "Tesise göre ayrıca değerlendirilen başlıklar",
    additionalItems: [
      "Termal kamera ve PTZ çevre güvenliği",
      "LPR plaka tanıma ve araç bariyer sistemi",
      "Turnike, güvenlik kulübesi ve personel geçiş sistemi",
      "Gaz algılama veya ATEX uyumlu bileşenler",
      "Fiber altyapı veya kablosuz köprü çözümleri",
    ],
  },
  pricingFactors: {
    description:
      "Endüstriyel güvenlik sistemi fiyatı, tesis ölçeği, bileşen kapsamı ve altyapı durumuna bağlıdır.",
    items: [
      "Tesisin toplam alanı ve çevre hattı uzunluğu kamera ve dedektör sayısını belirler.",
      "Personel sayısı turnike ve okuyucu kapasitesini, yangın risk profili dedektör tiplerini etkiler.",
      "Gece koşulları için termal kamera ve aydınlatma altyapısı ek maliyet kalemidir.",
      "Mevcut kablo altyapısı varsa kullanılabilir; yeni çekim geniş alanlarda belirleyici maliyet kalemi olur.",
      "SLA seviyesi (müdahale süresi taahhüdü) bakım sözleşmesi fiyatını doğrudan etkiler.",
    ],
  },
  venueTypes: [
    {
      title: "Üretim Tesisi",
      description:
        "İş güvenliği odaklı kamera, çevre hattı koruması ve vardiya bazlı erişim kontrolü.",
    },
    {
      title: "Lojistik Deposu",
      description:
        "Yükleme rampası, stok alanı ve araç trafiği takibi. LPR plaka tanıma desteği.",
    },
    {
      title: "Soğuk Hava Deposu",
      description:
        "IP67 koruma sınıfı kameralar ve özel koşullara dayanıklı algılama sistemleri.",
    },
    {
      title: "Sanayi Sitesi",
      description:
        "Ortak alan kameraları, turnike sistemi ve bölgesel erişim yetkilendirmesi.",
    },
    {
      title: "Gıda Üretim Tesisi",
      description:
        "HACCP uyumlu izleme, hijyen alanı kontrolü ve kayıt arşivleme sistemi.",
    },
  ],
  finalCtaTitle: "Tesisiniz İçin Endüstriyel Güvenlik Teklifi Alın",
  finalCtaSubtitle:
    "Geniş alan kamera, çevre güvenlik ve turnike sistemi için ücretsiz keşif. SLA garantili bakım sözleşmesi dahil.",
  whatsappMessage:
    "Merhaba, fabrikamız/depomuz için güvenlik sistemi teklifi almak istiyorum.",
  segments: [
    {
      title: "Üretim Tesisleri",
      content:
        "Üretim hatları, depo alanları ve personel girişlerini kapsayan entegre güvenlik. Vardiya takibi ve erişim yetkilendirmesi dahil.",
      href: "/kartli-gecis-sistemi-kurulumu",
    },
    {
      title: "Lojistik ve Depo",
      content:
        "Büyük kapasiteli depolarda geniş alan kameraları, çevre alarm sistemi ve yükleme rampası takibi. Araç trafiği yönetimi LPR ile desteklenir.",
      href: "/kamera-sistemi-kurulumu",
    },
    {
      title: "Endüstriyel Yangın Güvenliği",
      content:
        "Akaryakıt, kimyasal ve yanıcı madde barındıran tesisler için yangın ve gaz algılama sistemi. ATEX uyumlu seçenekler.",
      href: "/yangin-alarm-sistemi-kurulumu",
    },
  ],
  faq: [
    {
      question: "Gece çevre güvenliği nasıl sağlanır?",
      answer:
        "Termal kameralar ve IR dedektörler ile gece koşullarında tam çevre güvenliği sağlanır. Gerekirse ilave dış aydınlatma planlanır.",
    },
    {
      question: "Üretimi durdurmadan kurulum yapılabilir mi?",
      answer:
        "Evet. Aşamalı kurulum planıyla üretim akışı kesintiye uğramadan sistem devreye alınır.",
    },
    {
      question: "SLA sözleşmesi ne garanti ediyor?",
      answer:
        "Arıza bildiriminizden itibaren taahhüt edilen sürede (genellikle 4 saat) sahada müdahale garantisi. Planlı bakımlar da sözleşme kapsamındadır.",
    },
    {
      question: "Sigorta şirketine belge verebiliyor musunuz?",
      answer:
        "Evet. Kurulum belgeleri, test raporları ve bakım kayıtları sigorta şirketlerinin talep ettiği formatta sunulur.",
    },
    {
      question: "Çok büyük tesislerde internet altyapısı sorun olur mu?",
      answer:
        "Geniş tesislerde fiber altyapı veya kablosuz köprü çözümü ile ağ altyapısını projede planlıyoruz.",
    },
  ],
  defaultService: "hepsi",
  ctaContent: {
    badge: "Endüstriyel güvenlik • Keşif • Teklif",
    title: "Tesisiniz İçin Endüstriyel Güvenlik Teklifi Alın",
    subtitle:
      "Tesis tipi, alan büyüklüğü ve personel sayısını paylaşın. Çok bölgeli güvenlik planı ve SLA teklifini hazırlayalım.",
    trustItems: [
      "Geniş alan ve çevre hattı güvenliği",
      "Çok bölgeli alarm ve erişim kontrol",
      "SLA garantili bakım sözleşmesi",
      "Yangın alarm belgelendirme dahil",
    ],
    supportCards: [
      {
        title: "Endüstriyel ölçekte planlama",
        text: "Tesis çevre hattı, üretim alanı ve depo bölgelerini ayrı ayrı planlıyoruz.",
      },
      {
        title: "SLA garantili bakım",
        text: "Arıza bildiriminden itibaren taahhüt edilen sürede sahada müdahale ve planlı bakım.",
      },
    ],
  },
};

export default function FabrikaDepoSayfasi() {
  return <ServicePageTemplate data={data} />;
}
