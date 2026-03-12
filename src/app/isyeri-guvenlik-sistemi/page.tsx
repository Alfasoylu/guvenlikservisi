import type { Metadata } from "next";
import { getCanonicalUrlForKnownPath } from "@/lib/canonical";
import ServicePageTemplate, { ServicePageData } from "@/components/templates/ServicePageTemplate";

const canonicalUrl = getCanonicalUrlForKnownPath("/isyeri-guvenlik-sistemi");

export const metadata: Metadata = {
  title: "İşyeri Güvenlik Sistemi | Kamera + Alarm + Yangın",
  description:
    "Mağaza, ofis, restoran ve otel için komple güvenlik sistemi. Kamera + alarm + yangın alarmı, tek elden kurulum.",
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: "İşyeri Güvenlik Sistemi | Kamera + Alarm + Yangın",
    description: "Mağaza, ofis, restoran, otel için komple güvenlik. Tek elden kurulum.",
    url: canonicalUrl,
    siteName: "Güvenlik Servisi",
    locale: "tr_TR",
    type: "website",
  },
};

const data: ServicePageData = {
  slug: "isyeri-guvenlik-sistemi",
  title: "İşyeri Güvenlik Sistemi",
  subtitle: "Mağaza, ofis, restoran ve otel için kamera, alarm ve yangın alarm sistemlerini tek elden kuruyoruz.",
  description:
    "İşyerinizin güvenliği hem yasal bir zorunluluk hem de iş sürekliliğinin temel unsurlarından biridir.\n\nTek sözleşme ile kamera, hırsız alarm ve yangın alarm sistemlerini aynı anda kuruyoruz. Hem zamandan tasarruf edersiniz hem de tüm sistemlerin entegreli çalışmasını sağlıyoruz.\n\nKurulum sonrasında çalışma saatleri, kapı açılış sinyalleri ve alarm devreye alma zamanlamaları sizin programınıza göre ayarlanır.",
  features: [
    "Yüksek çözünürlüklü kamera sistemi",
    "Hırsız alarm ve sensörler",
    "Yangın alarm sistemi",
    "Kartlı geçiş (isteğe bağlı)",
    "Mesai saatine göre alarm programlama",
    "Mobil yönetim ve izleme",
    "Tek sözleşme, tek muhatap",
    "Yıllık bakım sözleşmesi",
  ],
  segments: [
    {
      title: "Mağaza ve Perakende",
      content: "Kasa, depo, giriş ve müşteri alanlarını kapsayan kamera + alarm. Hırsızlık ve kayıp önleme için etkin çözüm.",
      href: "/kamera-sistemi-kurulumu",
    },
    {
      title: "Ofis ve Kurumsal",
      content: "Çalışan erişim kontrolü, veri odası güvenliği ve yangın alarm. İK sistemleriyle entegre giriş-çıkış takibi.",
      href: "/kartli-gecis-ve-turnike-sistemi",
    },
    {
      title: "Restoran, Otel ve Konaklama",
      content: "Mutfak yangın alarmı, müşteri alanı kameraları ve personel erişim sistemi. Zorunlu belgeler dahil.",
      href: "/yangin-alarm-sistemi-kurulumu",
    },
  ],
  faq: [
    {
      question: "Küçük bir dükkan için de kurulum yapıyor musunuz?",
      answer: "Evet, 1 odalı küçük işyerinden büyük alışveriş merkezine kadar her ölçekte kurulum yapıyoruz.",
    },
    {
      question: "Sistemlerin bakımını kim yapacak?",
      answer: "Yıllık bakım sözleşmesi ile ekibimiz düzenli ziyaret ve uzaktan destek sağlar.",
    },
    {
      question: "Kamera görüntülerini işyeri dışından izleyebilir miyim?",
      answer: "Evet, mobil uygulama ile dünyanın herhangi bir yerinden canlı izleyebilir, kayıtlara erişebilirsiniz.",
    },
    {
      question: "Çalışma saatleri dışında alarm devreye giriyor mu?",
      answer: "Evet, alarm sistemi haftalık programlanabilir. Kapanış saatinden sonra otomatik devreye girer.",
    },
  ],
  defaultService: "hepsi",
  imagePlaceholder: "İşyeri Güvenlik Görseli",
  ctaTitle: "İşyeriniz İçin Teklif Alın",
  ctaSubtitle: "İşyerinize özel çözüm için ücretsiz keşif alın.",
};

export default function IsyeriSayfasi() {
  return <ServicePageTemplate data={data} />;
}
