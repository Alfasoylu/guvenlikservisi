import type { PainPointSlug } from "./pain-points";
import type { HighLtvSegmentSlug } from "./segments";
import { faqContent } from "../seo-content/faq";

export interface FaqItem {
  question: string;
  answer: string;
}

export interface FaqCollection {
  title: string;
  items: FaqItem[];
}

export type FaqCollectionKey = `service:${string}` | `segment:${HighLtvSegmentSlug}` | `issue:${PainPointSlug}`;

const segmentFaqCollections: Record<`segment:${HighLtvSegmentSlug}`, FaqCollection> = {
  "segment:site-yonetimi": {
    title: "Site yönetimi soruları",
    items: [
      {
        question: "Site projelerinde ortak alanlar aynı sistemde toplanabilir mi?",
        answer:
          "Evet. Apartman girişleri, otopark, çevre hattı ve ortak alanlar uygun senaryoda aynı izleme ve kayıt yapısında birleştirilebilir.",
      },
      {
        question: "Yönetim kurulu için bakım ve raporlama süreci nasıl ilerler?",
        answer:
          "Bakım periyodu, kayıt kontrolü ve servis notları teklif aşamasında netleştirilerek yönetim onayına uygun bir süreç kurulur.",
      },
    ],
  },
  "segment:fabrika": {
    title: "Fabrika projeleri soruları",
    items: [
      {
        question: "Üretim alanı ve çevre hattı aynı proje içinde planlanabilir mi?",
        answer:
          "Evet. Üretim, sevkiyat, girişler ve açık alanlar tek proje kapsamında analiz edilip uygun kamera ve kayıt yapısı belirlenebilir.",
      },
      {
        question: "Kurumsal bakım planı gerekli midir?",
        answer:
          "Geniş saha ve vardiyalı çalışma olan tesislerde bakım planı, duruş riskini ve plansız servis ihtiyacını azaltır.",
      },
    ],
  },
  "segment:depo": {
    title: "Depo projeleri soruları",
    items: [
      {
        question: "Yükleme alanları ve raf koridorları için farklı plan gerekir mi?",
        answer:
          "Evet. Yükleme boşaltma alanları, raf koridorları ve gece izlemesi aynı kamera yerleşimi ile çözülmez; saha kullanımına göre planlama gerekir.",
      },
      {
        question: "Uzun kayıt süresi için nelere dikkat edilir?",
        answer:
          "Kamera sayısı, kayıt cihazı kapasitesi, disk sağlığı ve kayıt senaryosu birlikte planlanır.",
      },
    ],
  },
  "segment:avm": {
    title: "AVM soruları",
    items: [
      {
        question: "AVM projelerinde yangın, erişim ve kamera aynı disiplinle yönetilebilir mi?",
        answer:
          "Evet. AVM gibi çok bileşenli projelerde farklı sistemlerin teslim, test ve bakım akışı birlikte planlanmalıdır.",
      },
      {
        question: "Periyodik test ve bakım neden kritik?",
        answer:
          "Yoğun insan trafiği olan yapılarda servis kesintisi ve uyumluluk riski daha yüksektir; bu nedenle periyodik kontrol önemlidir.",
      },
    ],
  },
  "segment:zincir-magaza": {
    title: "Zincir mağazalar için sorular",
    items: [
      {
        question: "Birden fazla şube aynı servis standardı ile yönetilebilir mi?",
        answer:
          "Evet. Standart kurulum, merkezi izleme ve ortak servis disiplini ile şubeler arası fark azaltılabilir.",
      },
      {
        question: "Arıza olduğunda aynı müdahale kalitesi nasıl korunur?",
        answer:
          "Şube yapısı, cihaz standardı ve servis notları net olursa arıza süreci daha tutarlı yönetilir.",
      },
    ],
  },
  "segment:plaza-ofis": {
    title: "Kurumsal ofis soruları",
    items: [
      {
        question: "Kartlı geçiş ve kamera aynı ofis projesinde birlikte planlanabilir mi?",
        answer:
          "Evet. Giriş kontrolü, ziyaretçi akışı ve kamera kapsama planı aynı kurumsal proje içinde birlikte ele alınabilir.",
      },
      {
        question: "Kurumsal tarafta bakım beklentisi neden farklıdır?",
        answer:
          "Kesintisiz çalışma, raporlama ve servis disiplini kurumsal yapılarda daha yüksek beklentiyle takip edilir.",
      },
    ],
  },
};

const issueFaqCollections: Record<`issue:${PainPointSlug}`, FaqCollection> = {
  "issue:kor-nokta-riski": {
    title: "Kör nokta soruları",
    items: [
      {
        question: "Kör noktalar keşif olmadan anlaşılabilir mi?",
        answer:
          "Kısmen tahmin edilebilir, ancak net sonuç için girişler, çevre hattı ve kritik kullanım alanları sahada analiz edilmelidir.",
      },
    ],
  },
  "issue:gece-gorusu-yetersizligi": {
    title: "Gece görüşü soruları",
    items: [
      {
        question: "Gece görüşü sorunu sadece kamera değişimiyle çözülür mü?",
        answer:
          "Her zaman değil. Lens açısı, aydınlatma, montaj yüksekliği ve ortam koşulları da sonucu etkiler.",
      },
    ],
  },
  "issue:kayit-yok": {
    title: "Kayıt sorunu soruları",
    items: [
      {
        question: "Kayıt yoksa ilk hangi parçalar kontrol edilir?",
        answer:
          "Disk sağlığı, NVR/DVR ayarları, kayıt modu ve bağlantı durumu birlikte kontrol edilmelidir.",
      },
    ],
  },
  "issue:goruntu-yok": {
    title: "Görüntü sorunu soruları",
    items: [
      {
        question: "Görüntü yok sorunu kamera mı yoksa kayıt cihazı mı kaynaklı olur?",
        answer:
          "Her iki taraftan da kaynaklanabilir; kamera, enerji, kablolama, switch ve kayıt cihazı birlikte test edilmelidir.",
      },
    ],
  },
  "issue:kamera-offline": {
    title: "Offline kamera soruları",
    items: [
      {
        question: "Kamera neden aralıklı olarak offline olur?",
        answer:
          "PoE besleme, ağ kararsızlığı, switch sorunları veya cihaz arızası buna sebep olabilir.",
      },
    ],
  },
  "issue:nvr-hdd-arizasi": {
    title: "NVR ve HDD soruları",
    items: [
      {
        question: "Disk hatası kayıt süresini etkiler mi?",
        answer:
          "Evet. Disk sağlığı bozulduğunda kayıt sürekliliği ve geçmiş görüntülere erişim doğrudan etkilenir.",
      },
    ],
  },
  "issue:poe-ag-kararsizligi": {
    title: "Ağ kararsızlığı soruları",
    items: [
      {
        question: "PoE veya switch sorunu tekrar eden kopmalara neden olur mu?",
        answer:
          "Evet. Zayıf enerji beslemesi veya ağ tarafındaki dalgalanmalar kamera kopmalarına yol açabilir.",
      },
    ],
  },
  "issue:bakim-yapilmayan-sistem": {
    title: "Bakım sürekliliği soruları",
    items: [
      {
        question: "Çalışan sistem için yine de bakım gerekli mi?",
        answer:
          "Evet. Kayıt, açı, disk ve bağlantı sağlığı bozulmadan önce kontrol edilirse plansız arıza ihtimali azalır.",
      },
    ],
  },
  "issue:uzaktan-erisim-sorunu": {
    title: "Uzaktan erişim soruları",
    items: [
      {
        question: "Mobil izleme sorunu sadece internet hattından mı kaynaklanır?",
        answer:
          "Hayır. Modem, ağ ayarları, cihaz konfigürasyonu ve kullanıcı yetkileri birlikte kontrol edilmelidir.",
      },
    ],
  },
  "issue:ortak-alan-guvenligi": {
    title: "Ortak alan güvenliği soruları",
    items: [
      {
        question: "Apartman ve site ortak alanları için tek tip kurulum yeterli olur mu?",
        answer:
          "Genelde hayır. Giriş, otopark, lobi ve çevre alanı aynı görüntü ihtiyacına sahip olmadığı için plan farklılaşır.",
      },
    ],
  },
  "issue:yonetim-onay-sureci": {
    title: "Yönetim onayı soruları",
    items: [
      {
        question: "Yönetim onayı gereken projelerde teklif nasıl sade tutulur?",
        answer:
          "Kapsam, bakım beklentisi ve maliyet kalemleri net anlatılan teklifler karar sürecini hızlandırır.",
      },
    ],
  },
  "issue:stok-kaybi-ve-gece-takibi": {
    title: "Depo ve fabrika soruları",
    items: [
      {
        question: "Yükleme alanları için neden ayrı plan gerekir?",
        answer:
          "Yükleme ve boşaltma alanlarında hareket yoğunluğu, araç girişleri ve gece takibi aynı anda ele alınmalıdır.",
      },
    ],
  },
  "issue:cok-lokasyonlu-standart": {
    title: "Çok lokasyonlu yapı soruları",
    items: [
      {
        question: "Birden fazla şubede aynı kamera ve servis standardı kurulabilir mi?",
        answer:
          "Evet. Cihaz seti, servis notları ve erişim politikası standartlaştırılırsa yönetim kolaylaşır.",
      },
    ],
  },
  "issue:erisim-kontrol-entegrasyonu": {
    title: "Erişim kontrolü soruları",
    items: [
      {
        question: "Kamera, alarm ve kartlı geçiş birbirine bağlanabilir mi?",
        answer:
          "Uygun projelerde evet. Giriş kontrolü, olay takibi ve kamera kapsama planı birlikte tasarlanabilir.",
      },
    ],
  },
  "issue:sla-ve-servis-surekliligi": {
    title: "Servis sürekliliği soruları",
    items: [
      {
        question: "Kurumsal tarafta servis sürekliliği neden ayrıca konuşulur?",
        answer:
          "Kurulum tek seferliktir; asıl güven duygusu müdahale hızı, periyodik kontrol ve düzenli raporlama ile oluşur.",
      },
    ],
  },
};

export const serviceFaqBank: Record<string, FaqCollection> = Object.fromEntries(
  Object.entries(faqContent).map(([serviceSlug, collection]) => [serviceSlug, collection])
);

export const faqCollections: Record<FaqCollectionKey, FaqCollection> = {
  ...Object.fromEntries(
    Object.entries(serviceFaqBank).map(([serviceSlug, collection]) => [`service:${serviceSlug}`, collection])
  ),
  ...segmentFaqCollections,
  ...issueFaqCollections,
} as Record<FaqCollectionKey, FaqCollection>;

export function getFaqCollection(faqKey: FaqCollectionKey) {
  return faqCollections[faqKey];
}

export function getFaqItemsByKeys(faqKeys: readonly FaqCollectionKey[]) {
  const deduped = new Map<string, FaqItem>();

  for (const faqKey of faqKeys) {
    const collection = getFaqCollection(faqKey);

    if (!collection) {
      continue;
    }

    for (const item of collection.items) {
      const key = item.question.toLocaleLowerCase("tr-TR");

      if (!deduped.has(key)) {
        deduped.set(key, item);
      }
    }
  }

  return [...deduped.values()];
}

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
