import type { Metadata } from "next";
import { getCanonicalUrlForKnownPath } from "@/lib/canonical";
import LandingPageTemplate, { LandingPageData } from "@/components/templates/LandingPageTemplate";

const data: LandingPageData = {
  hero: {
    title: "Yangın Alarm Sistemi Kurulumu",
    subtitle:
      "Yasal zorunluluklara uygun yangın algılama sistemleri. Duman dedektörü, ihbar butonu, siren. Proje + montaj dahil.",
    ctaLabel: "Ücretsiz Keşif ve Teklif Al",
  },
  problem: {
    title: "Yangın Riskine Karşı Hazırlıklı mısınız?",
    cards: [
      {
        icon: "🔥",
        title: "Yasal Zorunluluk",
        description:
          "İşyerleri, apartmanlar ve kamu binaları için yangın alarm sistemi yasal zorunluluktur. Sistemsiz işyerleri ceza riski taşır.",
      },
      {
        icon: "⏱️",
        title: "Erken Uyarı Hayat Kurtarır",
        description:
          "Yangın çıkışından dakikalar içinde uyarı verilmesi tahliye için kritiktir. Her dakika hayati önem taşır.",
      },
      {
        icon: "🏢",
        title: "Sigorta Şartı",
        description:
          "Birçok sigorta poliçesi yangın alarm sistemi varlığını şart koşar. Sistemsiz binalarda tazminat ödenmiyor.",
      },
    ],
  },
  solution: {
    title: "Profesyonel Yangın Algılama Sistemleri",
    description:
      "TS EN 54 standardına uygun yangın alarm sistemleri kuruyoruz. Resmi proje + uygulama belgesi dahil, tam yasal uyumluluk.",
    features: [
      "Duman ve ısı dedektörleri",
      "Manuel ihbar butonları",
      "Sesli + ışıklı alarm siren",
      "Yangın alarm kontrol paneli",
      "İtfaiye bağlantı imkanı",
      "Resmi proje ve belgeler dahil",
    ],
    imagePlaceholder: "Yangın Alarm Kurulum Görseli",
  },
  packages: {
    title: "Yangın Alarm Sistemi Paketleri",
    items: [
      {
        name: "Küçük Mekan",
        price: "10.000 TL'den başlayan",
        features: [
          "1 Kontrol Paneli",
          "4-8 Dedektör",
          "1-2 İhbar Butonu",
          "Sesli Siren",
          "Proje Belgesi",
          "1 Yıl Garanti",
        ],
      },
      {
        name: "Orta Ölçekli",
        price: "22.000 TL'den başlayan",
        badge: "En Çok Tercih Edilen",
        highlighted: true,
        features: [
          "1 Adreslenebilir Panel",
          "10-30 Dedektör",
          "Çoklu İhbar Butonu",
          "Sesli + Işıklı Siren",
          "İtfaiye Bağlantısı",
          "Resmi Proje + Sertifika",
          "2 Yıl Garanti",
        ],
      },
      {
        name: "Büyük Tesis",
        price: "Teklif Alın",
        features: [
          "Çok Bölgeli Panel",
          "30+ Dedektör",
          "Sesli Anons Sistemi",
          "Acil Aydınlatma Entegrasyonu",
          "Yangın Kapısı Kontrol",
          "Tam Yasal Proje",
          "3 Yıl Garanti",
        ],
      },
    ],
  },
  testimonials: [
    {
      text: "Restoranımıza yangın alarm sistemi yaptırdık, belgelerle birlikte teslim ettiler. Belediye denetiminden sorunsuz geçtik.",
      name: "Ömer K.",
      role: "İstanbul / Restoran İşletmecisi",
      rating: 5,
    },
    {
      text: "Fabrikamıza tam teşekküllü yangın alarm sistemi kurdular. Sigorta şirketi onayladı, prim düştü.",
      name: "Selma B.",
      role: "Bursa / Fabrika Sahibi",
      rating: 5,
    },
    {
      text: "Apartmanımızın yangın alarm sistemini yenilediler. Hem yasal hem de çok daha güvenli olduk.",
      name: "İbrahim Y.",
      role: "Kocaeli / Site Yöneticisi",
      rating: 5,
    },
  ],
  faq: [
    {
      question: "Yangın alarm sistemi zorunlu mu?",
      answer:
        "Evet, Türk Standartları ve İtfaiye Yönetmeliği gereği işyerleri, apartmanlar ve kamu binaları için zorunludur.",
    },
    {
      question: "Proje belgesi veriyor musunuz?",
      answer:
        "Evet, tüm sistemlerimize resmi proje çizimi, uygulama belgesi ve test raporu dahildir.",
    },
    {
      question: "Mevcut sistemi güncelleyebilir misiniz?",
      answer:
        "Evet, eski sistemleri modernize edip standartlara uygun hale getiriyoruz. Keşifte değerlendirme yapıyoruz.",
    },
    {
      question: "Yıllık bakım zorunlu mu?",
      answer:
        "Yasal olarak yıllık bakım ve test raporu tutulması gerekir. Bakım sözleşmesi ile bu yükümlülüğü üstleniyoruz.",
    },
  ],
  visuals: {
    pageKey: "teklif/yangin",
    title: "Yangın alarm sistemi uygulama görselleri",
    description: "Yangın alarm teklif sayfasında cihaz yerleşimi, saha uygulaması, montaj süreci ve bağlantı şeması bir arada gösterilir.",
  },
  cta: {
    title: "Ücretsiz Yangın Alarm Teklifi Alın",
    subtitle: "Yasal uyum ve güvenlik için hemen teklif alın.",
    defaultService: "yangin",
  },
};

const canonicalUrl = getCanonicalUrlForKnownPath("/teklif/yangin");

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

export default function YanginLandingPage() {
  return <LandingPageTemplate data={data} />;
}
