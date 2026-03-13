import { faqContent } from "../seo-content/faq";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqCollection {
  title: string;
  items: FaqItem[];
}

export const serviceFaqBank = faqContent;

export function buildCityFaqItems(cityName: string): FaqItem[] {
  return [
    {
      question: `${cityName} güvenlik sistemi kurulumu ne kadar sürer?`,
      answer:
        "Küçük projeler genelde aynı gün tamamlanır. Orta ve büyük projelerde keşif sonrası 1-3 gün içinde kurulum bitirilir.",
    },
    {
      question: `${cityName} içinde ücretsiz keşif yapıyor musunuz?`,
      answer:
        "Evet. Uygun projelerde ücretsiz keşif ile alanı analiz ediyor, gerekli kamera ve ekipman sayısını belirliyoruz.",
    },
    {
      question: "Telefondan uzaktan izleme kuruluyor mu?",
      answer:
        "Evet. Kurulum sonrası mobil uygulama üzerinden canlı izleme, kayıt izleme ve temel bildirim ayarları yapılır.",
    },
    {
      question: "Kamera, kayıt cihazı ve hard disk dahil sistem kuruluyor mu?",
      answer:
        "Evet. İhtiyaca göre kamera, NVR/DVR, hard disk, PoE switch, adaptör ve kablolama dahil komple sistem hazırlanır.",
    },
  ];
}

export function buildCoverageFaqItem(cityName: string): FaqItem {
  return {
    question: `${cityName} genelinde bu hizmeti hangi ilçelerde veriyorsunuz?`,
    answer:
      `${cityName} genelinde ilçe bazlı ekip planlaması yapıyoruz. Keşif sonrası proje kapsamına uygun servis takvimi oluşturuyoruz.`,
  };
}
