import type { Metadata } from "next";
import { getCanonicalUrlForKnownPath } from "@/lib/canonical";
import LandingPageTemplate, { LandingPageData } from "@/components/templates/LandingPageTemplate";

const data: LandingPageData = {
  hero: {
    title: "İşyeri Güvenlik Sistemi Kurulumu",
    subtitle:
      "Mağaza, ofis, restoran ve otel için komple güvenlik. Kamera + alarm + yangın alarmı tek elden kurulum.",
    ctaLabel: "Ücretsiz Keşif ve Teklif Al",
  },
  problem: {
    title: "İşyerinizin Güvenliği Kârınızı Etkiliyor",
    cards: [
      {
        icon: "💸",
        title: "Hırsızlık Kayıpları",
        description:
          "İşletmeler, güvenlik sistemi olmadığında hırsızlıktan yılda ortalama 45.000 TL kayıp yaşıyor. Kamera bu kaybı büyük ölçüde önler.",
      },
      {
        icon: "👨‍💼",
        title: "Çalışan Verimliliği",
        description:
          "Kamera sistemi çalışan verimliliğini %20 artırır. Denetim maliyeti düşer, iş disiplini artar.",
      },
      {
        icon: "📄",
        title: "Hukuki Koruma",
        description:
          "Müşteri şikayeti, çalışan anlaşmazlığı veya kaza durumlarında kamera kayıtları hukuki delil niteliği taşır.",
      },
    ],
  },
  solution: {
    title: "İşyerinize Özel Komple Güvenlik",
    description:
      "Mağaza, ofis, restoran veya otel fark etmeksizin işyerinizin büyüklüğüne ve ihtiyaçlarına göre tasarlanmış güvenlik sistemi kuruyoruz.",
    features: [
      "Yüksek çözünürlüklü kamera sistemi",
      "Hırsız alarm ve sensörler",
      "Yangın alarm sistemi",
      "Kartlı geçiş + biyometrik seçenek",
      "Uzaktan izleme ve yönetim",
      "Tek sözleşme, tek muhatap",
    ],
    imagePlaceholder: "İşyeri Güvenlik Görseli",
  },
  packages: {
    title: "İşyeri Güvenlik Paketleri",
    items: [
      {
        name: "Küçük İşyeri",
        price: "15.000 TL'den başlayan",
        features: [
          "4-6 Kamera",
          "Alarm Sistemi",
          "Mobil İzleme",
          "Montaj Dahil",
          "1 Yıl Garanti",
        ],
      },
      {
        name: "Orta İşyeri",
        price: "35.000 TL'den başlayan",
        badge: "En Çok Tercih Edilen",
        highlighted: true,
        features: [
          "8-16 Kamera",
          "Alarm + Yangın Alarm",
          "Kartlı Geçiş",
          "7/24 İzleme",
          "Yıllık Bakım",
          "2 Yıl Garanti",
        ],
      },
      {
        name: "Büyük İşyeri",
        price: "Teklif Alın",
        features: [
          "16+ Kamera",
          "Komple Alarm Sistemi",
          "Yangın Alarm + Sprinkler",
          "Çok Bölgeli Geçiş Kontrolü",
          "SLA Bakım Sözleşmesi",
          "3 Yıl Garanti",
        ],
      },
    ],
  },
  testimonials: [
    {
      text: "Mağazamıza kamera + alarm sistemi kurdurduk. Artık her yerden canlı izleyebiliyorum, çok rahatım.",
      name: "Tuğba S.",
      role: "İstanbul / Mağaza Sahibi",
      rating: 5,
    },
    {
      text: "Restoranımıza hem yangın alarmı hem kamera sistemi yaptırdılar. Tek sözleşme çok pratik.",
      name: "Ali R.",
      role: "Bursa / Restoran İşletmecisi",
      rating: 5,
    },
    {
      text: "Ofisimizin güvenlik sistemini komple yenilediler. Kartlı geçiş çok profesyonel görünüm sağladı.",
      name: "Nilgün T.",
      role: "Kocaeli / Ofis Müdürü",
      rating: 5,
    },
  ],
  faq: [
    {
      question: "Mağazamın büyüklüğüne göre kaç kamera lazım?",
      answer:
        "Bu, mağazanın düzenine ve kör noktalara bağlıdır. Ücretsiz keşifte uzmanımız ihtiyaç analizini yapar.",
    },
    {
      question: "Hem alarm hem kamera aynı anda kurulabilir mi?",
      answer:
        "Evet, ekibimiz tüm sistemleri aynı anda kurar. Bu hem zamandan hem de maliyetten tasarruf sağlar.",
    },
    {
      question: "Çalışma saatleri dışında alarm devreye giriyor mu?",
      answer:
        "Evet, alarm sistemi programlanabilir. İş saatleri dışında otomatik aktive olur, içeri girişlerde telefona bildirim gelir.",
    },
    {
      question: "Bakım sözleşmesi zorunlu mu?",
      answer:
        "Zorunlu değil, ancak öneriyoruz. Yıllık bakım ile sistem performansı korunur ve arızalar ücretsiz giderilir.",
    },
  ],
  cta: {
    title: "İşyeriniz İçin Ücretsiz Teklif Alın",
    subtitle: "Formu doldurun, işyerinize özel çözüm sunalım.",
    defaultService: "hepsi",
  },
};

const canonicalUrl = getCanonicalUrlForKnownPath("/teklif/isyeri");

export const metadata: Metadata = {
  title: data.hero.title,
  description: data.hero.subtitle,
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: data.hero.title,
    description: data.hero.subtitle,
    url: canonicalUrl,
    siteName: "Guvenlik Servisi",
    locale: "tr_TR",
    type: "website",
  },
};

export default function IsyeriLandingPage() {
  return <LandingPageTemplate data={data} />;
}
