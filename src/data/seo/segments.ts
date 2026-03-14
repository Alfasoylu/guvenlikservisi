import type { PainPointSlug } from "./pain-points";

export const HIGH_LTV_SEGMENT_SLUGS = [
  "site-yonetimi",
  "fabrika",
  "depo",
  "avm",
  "zincir-magaza",
  "plaza-ofis",
] as const;

export type HighLtvSegmentSlug = (typeof HIGH_LTV_SEGMENT_SLUGS)[number];

export type SegmentBusinessType =
  | "residential-management"
  | "industrial"
  | "logistics"
  | "retail"
  | "corporate-office";

export type SegmentLeadValue = "high" | "very-high";

export type SegmentDecisionMaker =
  | "site-management-board"
  | "facility-manager"
  | "operations-manager"
  | "procurement"
  | "store-operations"
  | "corporate-admin";

export type SegmentUrgencyPattern =
  | "contract-renewal"
  | "operational-risk"
  | "incident-driven"
  | "compliance-driven"
  | "multi-location-standardization";

export type SegmentRecurringPotential = "medium" | "high" | "very-high";

export interface HighLtvSegment {
  slug: HighLtvSegmentSlug;
  name: string;
  searchLabels: string[];
  businessType: SegmentBusinessType;
  leadValue: SegmentLeadValue;
  decisionMakerType: SegmentDecisionMaker;
  urgencyPattern: SegmentUrgencyPattern;
  commonPainPoints: string[];
  painPointSlugs: PainPointSlug[];
  commonServiceSlugs: string[];
  recurringRevenuePotential: SegmentRecurringPotential;
  recommendedCtaAngle: string;
  trustAngle: string;
  priorityScore: 1 | 2 | 3 | 4 | 5;
}

export const highLtvSegments = [
  {
    slug: "site-yonetimi",
    name: "Site Yonetimleri ve Toplu Konutlar",
    searchLabels: ["site yonetimi", "apartman guvenlik sistemi", "site kamera sistemi", "rezidans guvenlik"],
    businessType: "residential-management",
    leadValue: "very-high",
    decisionMakerType: "site-management-board",
    urgencyPattern: "contract-renewal",
    commonPainPoints: [
      "ortak alan kamera kayitlarinin surekliligi",
      "uzaktan izleme ve yonetim erisimi",
      "cok girisli bloklarda bakim disiplini",
      "yonetim onayi gerektiren teklif sureci",
    ],
    painPointSlugs: ["ortak-alan-guvenligi", "yonetim-onay-sureci", "bakim-yapilmayan-sistem"],
    commonServiceSlugs: [
      "apartman-site-guvenlik-sistemi",
      "kamera-sistemi-bakim-sozlesmesi",
      "bakim-servis-uzaktan-izleme",
      "uzaktan-kamera-izleme",
    ],
    recurringRevenuePotential: "very-high",
    recommendedCtaAngle: "Bakim sozlesmesi, ortak alan guvenligi ve yonetim raporlamasi odakli teklif verin.",
    trustAngle: "Cok bloklu yapilarda kayit surekliligi ve servis disiplini gosterin.",
    priorityScore: 5,
  },
  {
    slug: "fabrika",
    name: "Fabrikalar ve Uretim Tesisleri",
    searchLabels: ["fabrika guvenlik sistemi", "uretim tesisi kamera sistemi", "fabrika cevre guvenligi"],
    businessType: "industrial",
    leadValue: "very-high",
    decisionMakerType: "facility-manager",
    urgencyPattern: "operational-risk",
    commonPainPoints: [
      "uretim hattinda kayit kaybi riski",
      "cevre ve giris noktalarinda kor nokta",
      "vardiya bazli guvenlik ihtiyaci",
      "bakim yapilmadiginda uzun durus maliyeti",
    ],
    painPointSlugs: ["stok-kaybi-ve-gece-takibi", "kor-nokta-riski", "sla-ve-servis-surekliligi"],
    commonServiceSlugs: [
      "fabrika-depo-guvenlik-sistemi",
      "bakim-servis-uzaktan-izleme",
      "kamera-sistemi-bakim-sozlesmesi",
      "uzaktan-kamera-izleme",
    ],
    recurringRevenuePotential: "very-high",
    recommendedCtaAngle: "Kurumsal kesif, bakim plani ve kesinti riskini dusuren uzun vadeli teklif verin.",
    trustAngle: "Genis saha planlama, dokumantasyon ve hizli mudahale kabiliyeti one cikarilmali.",
    priorityScore: 5,
  },
  {
    slug: "depo",
    name: "Depolar ve Lojistik Alanlari",
    searchLabels: ["depo kamera sistemi", "lojistik guvenlik sistemi", "depo guvenlik kamerasi"],
    businessType: "logistics",
    leadValue: "high",
    decisionMakerType: "operations-manager",
    urgencyPattern: "operational-risk",
    commonPainPoints: [
      "yukleme alanlarinda gorunurluk eksikligi",
      "stok kaybi ve gece izleme ihtiyaci",
      "uzun kayit suresi beklentisi",
      "NVR ve ag guvenilirligi sorunlari",
    ],
    painPointSlugs: ["stok-kaybi-ve-gece-takibi", "poe-ag-kararsizligi", "kayit-yok"],
    commonServiceSlugs: [
      "fabrika-depo-guvenlik-sistemi",
      "kamera-sistemi-kurulumu",
      "kamera-ariza-servisi",
      "kamera-sistemi-bakim-sozlesmesi",
    ],
    recurringRevenuePotential: "high",
    recommendedCtaAngle: "Yukleme alani gorunurlugu, kayit surekliligi ve gece takibi uzerinden teklif verin.",
    trustAngle: "Kayit guvenilirligi ve hizli ariza mudahalesi depolarda kritik guven sinyalidir.",
    priorityScore: 5,
  },
  {
    slug: "avm",
    name: "AVM ve Buyuk Ticari Merkezler",
    searchLabels: ["AVM guvenlik sistemi", "alisveris merkezi yangin alarm bakimi", "AVM gecis kontrol"],
    businessType: "retail",
    leadValue: "very-high",
    decisionMakerType: "facility-manager",
    urgencyPattern: "compliance-driven",
    commonPainPoints: [
      "cok alanli erisim ve yangin guvenligi koordinasyonu",
      "yogun insan trafiginde servis kesintisi riski",
      "bakim kayitlarinin kurumsal takibi",
      "yuksek gorunurluk beklentisi",
    ],
    painPointSlugs: ["sla-ve-servis-surekliligi", "erisim-kontrol-entegrasyonu", "bakim-yapilmayan-sistem"],
    commonServiceSlugs: [
      "yangin-alarm-sistemi-kurulumu",
      "yangin-alarm-bakim-sozlesmesi",
      "kartli-gecis-sistemi-kurulumu",
      "bakim-servis-uzaktan-izleme",
    ],
    recurringRevenuePotential: "very-high",
    recommendedCtaAngle: "Uyumluluk, periyodik test ve cok bilesenli bakim plani uzerinden gorusme acin.",
    trustAngle: "AVM projelerinde surec disiplini, raporlama ve SLA beklentisi vurgulanmalidir.",
    priorityScore: 4,
  },
  {
    slug: "zincir-magaza",
    name: "Zincir Magazalar ve Cok Subeli Perakende",
    searchLabels: ["zincir magaza kamera sistemi", "cok subeli isletme guvenlik", "magaza alarm sistemi"],
    businessType: "retail",
    leadValue: "high",
    decisionMakerType: "store-operations",
    urgencyPattern: "multi-location-standardization",
    commonPainPoints: [
      "subeler arasi standart kurulum ihtiyaci",
      "merkezi gorunurluk ve uzaktan erisim",
      "ayni servis disiplinini farkli lokasyonlarda surdurme",
      "ariza oldugunda hizli ve standart mudahale beklentisi",
    ],
    painPointSlugs: ["cok-lokasyonlu-standart", "uzaktan-erisim-sorunu", "sla-ve-servis-surekliligi"],
    commonServiceSlugs: [
      "isyeri-guvenlik-sistemi",
      "uzaktan-kamera-izleme",
      "guvenlik-sistemi-teknik-servis",
      "kamera-ariza-servisi",
    ],
    recurringRevenuePotential: "high",
    recommendedCtaAngle: "Cok lokasyonlu standart kurulum ve merkezi raporlama uzerinden teklif verin.",
    trustAngle: "Tek magaza degil, tum subelerde ayni servis disiplinini saglayabildiginizi gosterin.",
    priorityScore: 4,
  },
  {
    slug: "plaza-ofis",
    name: "Plazalar ve Kurumsal Ofisler",
    searchLabels: ["plaza guvenlik sistemi", "kurumsal ofis gecis kontrol", "ofis kamera sistemi"],
    businessType: "corporate-office",
    leadValue: "high",
    decisionMakerType: "corporate-admin",
    urgencyPattern: "compliance-driven",
    commonPainPoints: [
      "erisim kontrolu ve profesyonel ziyaretci akisi",
      "kurumsal raporlama beklentisi",
      "kesintisiz calisma ve bakim plani ihtiyaci",
      "alarm ve kamera entegrasyonunda duzen beklentisi",
    ],
    painPointSlugs: ["erisim-kontrol-entegrasyonu", "sla-ve-servis-surekliligi", "yonetim-onay-sureci"],
    commonServiceSlugs: [
      "kartli-gecis-sistemi-kurulumu",
      "isyeri-guvenlik-sistemi",
      "guvenlik-sistemi-teknik-servis",
      "bakim-servis-uzaktan-izleme",
    ],
    recurringRevenuePotential: "high",
    recommendedCtaAngle: "Erisim kontrolu, servis disiplini ve kurumsal bakim plani uzerinden CTA kurun.",
    trustAngle: "Kurumsal ofislerde profesyonel teslim, dokumantasyon ve bakim surekliligi one cikar.",
    priorityScore: 4,
  },
] satisfies HighLtvSegment[];

export function getHighLtvSegmentBySlug(segmentSlug: string) {
  return highLtvSegments.find((segment) => segment.slug === segmentSlug);
}

export function getHighLtvSegments(minPriorityScore = 4) {
  return highLtvSegments
    .filter((segment) => segment.priorityScore >= minPriorityScore)
    .sort((left, right) => right.priorityScore - left.priorityScore || left.name.localeCompare(right.name, "tr"));
}
