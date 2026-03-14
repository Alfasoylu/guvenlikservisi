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
    title: "Site yonetimi sorulari",
    items: [
      {
        question: "Site projelerinde ortak alanlar ayni sistemde toplanabilir mi?",
        answer:
          "Evet. Apartman girisleri, otopark, cevre hattı ve ortak alanlar uygun senaryoda ayni izleme ve kayit yapisinda birlestirilebilir.",
      },
      {
        question: "Yonetim kurulu icin bakim ve raporlama sureci nasil ilerler?",
        answer:
          "Bakim periyodu, kayit kontrolu ve servis notlari teklif asamasinda netlestirilerek yonetim onayina uygun bir surec kurulur.",
      },
    ],
  },
  "segment:fabrika": {
    title: "Fabrika projeleri sorulari",
    items: [
      {
        question: "Uretim alani ve cevre hattı ayni proje icinde planlanabilir mi?",
        answer:
          "Evet. Uretim, sevkiyat, girisler ve acik alanlar tek proje kapsaminda analiz edilip uygun kamera ve kayit yapisi belirlenebilir.",
      },
      {
        question: "Kurumsal bakim plani gerekli midir?",
        answer:
          "Genis saha ve vardiyali calisma olan tesislerde bakim plani, durus riskini ve plansiz servis ihtiyacini azaltir.",
      },
    ],
  },
  "segment:depo": {
    title: "Depo projeleri sorulari",
    items: [
      {
        question: "Yukleme alanlari ve raf koridorlari icin farkli plan gerekir mi?",
        answer:
          "Evet. Yukleme bosaltma alanlari, raf koridorlari ve gece izlemesi ayni kamera yerlesimi ile cozulmez; saha kullanimina gore planlama gerekir.",
      },
      {
        question: "Uzun kayit suresi icin nelere dikkat edilir?",
        answer:
          "Kamera sayisi, kayit cihazi kapasitesi, disk sagligi ve kayit senaryosu birlikte planlanir.",
      },
    ],
  },
  "segment:avm": {
    title: "AVM sorulari",
    items: [
      {
        question: "AVM projelerinde yangin, erisim ve kamera ayni disiplinle yonetilebilir mi?",
        answer:
          "Evet. AVM gibi cok bilesenli projelerde farkli sistemlerin teslim, test ve bakim akisi birlikte planlanmalidir.",
      },
      {
        question: "Periyodik test ve bakim neden kritik?",
        answer:
          "Yogun insan trafigi olan yapilarda servis kesintisi ve uyumluluk riski daha yuksektir; bu nedenle periyodik kontrol onemlidir.",
      },
    ],
  },
  "segment:zincir-magaza": {
    title: "Zincir magazalar icin sorular",
    items: [
      {
        question: "Birden fazla sube ayni servis standardi ile yonetilebilir mi?",
        answer:
          "Evet. Standart kurulum, merkezi izleme ve ortak servis disiplini ile subeler arasi fark azaltilabilir.",
      },
      {
        question: "Ariza oldugunda ayni mudahale kalitesi nasil korunur?",
        answer:
          "Sube yapisi, cihaz standardi ve servis notlari net olursa ariza sureci daha tutarli yonetilir.",
      },
    ],
  },
  "segment:plaza-ofis": {
    title: "Kurumsal ofis sorulari",
    items: [
      {
        question: "Kartli gecis ve kamera ayni ofis projesinde birlikte planlanabilir mi?",
        answer:
          "Evet. Giris kontrolu, ziyaretci akisi ve kamera kapsama planı ayni kurumsal proje icinde birlikte ele alinabilir.",
      },
      {
        question: "Kurumsal tarafta bakim beklentisi neden farklidir?",
        answer:
          "Kesintisiz calisma, raporlama ve servis disiplini kurumsal yapilarda daha yuksek beklentiyle takip edilir.",
      },
    ],
  },
};

const issueFaqCollections: Record<`issue:${PainPointSlug}`, FaqCollection> = {
  "issue:kor-nokta-riski": {
    title: "Kor nokta sorulari",
    items: [
      {
        question: "Kor noktalar kesif olmadan anlasilabilir mi?",
        answer:
          "Kismen tahmin edilebilir, ancak net sonuc icin girisler, cevre hatti ve kritik kullanim alanlari sahada analiz edilmelidir.",
      },
    ],
  },
  "issue:gece-gorusu-yetersizligi": {
    title: "Gece gorusu sorulari",
    items: [
      {
        question: "Gece gorusu sorunu sadece kamera degisimiyle cozulur mu?",
        answer:
          "Her zaman degil. Lens acisi, aydinlatma, montaj yuksekligi ve ortam kosullari da sonucu etkiler.",
      },
    ],
  },
  "issue:kayit-yok": {
    title: "Kayit sorunu sorulari",
    items: [
      {
        question: "Kayit yoksa ilk hangi parcalar kontrol edilir?",
        answer:
          "Disk sagligi, NVR/DVR ayarlari, kayit modu ve baglanti durumu birlikte kontrol edilmelidir.",
      },
    ],
  },
  "issue:goruntu-yok": {
    title: "Goruntu sorunu sorulari",
    items: [
      {
        question: "Goruntu yok sorunu kamera mi yoksa kayit cihazi mi kaynakli olur?",
        answer:
          "Her iki taraftan da kaynaklanabilir; kamera, enerji, kablolama, switch ve kayit cihazi birlikte test edilmelidir.",
      },
    ],
  },
  "issue:kamera-offline": {
    title: "Offline kamera sorulari",
    items: [
      {
        question: "Kamera neden aralikli olarak offline olur?",
        answer:
          "PoE besleme, ag kararsizligi, switch sorunlari veya cihaz arizasi buna sebep olabilir.",
      },
    ],
  },
  "issue:nvr-hdd-arizasi": {
    title: "NVR ve HDD sorulari",
    items: [
      {
        question: "Disk hatasi kayit suresini etkiler mi?",
        answer:
          "Evet. Disk sagligi bozuldugunda kayit surekliligi ve gecmis goruntulere erisim dogrudan etkilenir.",
      },
    ],
  },
  "issue:poe-ag-kararsizligi": {
    title: "Ag kararsizligi sorulari",
    items: [
      {
        question: "PoE veya switch sorunu tekrar eden kopmalara neden olur mu?",
        answer:
          "Evet. Zayif enerji beslemesi veya ag tarafindaki dalgalanmalar kamera kopmalarina yol acabilir.",
      },
    ],
  },
  "issue:bakim-yapilmayan-sistem": {
    title: "Bakim surekliligi sorulari",
    items: [
      {
        question: "Calisan sistem icin yine de bakim gerekli mi?",
        answer:
          "Evet. Kayit, aci, disk ve baglanti sagligi bozulmadan once kontrol edilirse plansiz ariza ihtimali azalir.",
      },
    ],
  },
  "issue:uzaktan-erisim-sorunu": {
    title: "Uzaktan erisim sorulari",
    items: [
      {
        question: "Mobil izleme sorunu sadece internet hattindan mi kaynaklanir?",
        answer:
          "Hayir. Modem, ag ayarlari, cihaz konfigrasyonu ve kullanici yetkileri birlikte kontrol edilmelidir.",
      },
    ],
  },
  "issue:ortak-alan-guvenligi": {
    title: "Ortak alan guvenligi sorulari",
    items: [
      {
        question: "Apartman ve site ortak alanlari icin tek tip kurulum yeterli olur mu?",
        answer:
          "Genelde hayir. Giris, otopark, lobi ve cevre alani ayni goruntu ihtiyacina sahip olmadigi icin plan farklilasir.",
      },
    ],
  },
  "issue:yonetim-onay-sureci": {
    title: "Yonetim onayi sorulari",
    items: [
      {
        question: "Yonetim onayi gereken projelerde teklif nasil sade tutulur?",
        answer:
          "Kapsam, bakim beklentisi ve maliyet kalemleri net anlatilan teklifler karar surecini hizlandirir.",
      },
    ],
  },
  "issue:stok-kaybi-ve-gece-takibi": {
    title: "Depo ve fabrika sorulari",
    items: [
      {
        question: "Yukleme alanlari icin neden ayri plan gerekir?",
        answer:
          "Yukleme ve bosaltma alanlarinda hareket yogunlugu, arac girisleri ve gece takibi ayni anda ele alinmalidir.",
      },
    ],
  },
  "issue:cok-lokasyonlu-standart": {
    title: "Cok lokasyonlu yapi sorulari",
    items: [
      {
        question: "Birden fazla subede ayni kamera ve servis standardi kurulabilir mi?",
        answer:
          "Evet. Cihaz seti, servis notlari ve erisim politikasi standartlastirilirsa yonetim kolaylasir.",
      },
    ],
  },
  "issue:erisim-kontrol-entegrasyonu": {
    title: "Erisim kontrolu sorulari",
    items: [
      {
        question: "Kamera, alarm ve kartli gecis birbirine baglanabilir mi?",
        answer:
          "Uygun projelerde evet. Giris kontrolu, olay takibi ve kamera kapsama planı birlikte tasarlanabilir.",
      },
    ],
  },
  "issue:sla-ve-servis-surekliligi": {
    title: "Servis surekliligi sorulari",
    items: [
      {
        question: "Kurumsal tarafta servis surekliligi neden ayrica konusulur?",
        answer:
          "Kurulum tek seferliktir; asil guven duygusu mudahale hizi, periyodik kontrol ve duzenli raporlama ile olusur.",
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
