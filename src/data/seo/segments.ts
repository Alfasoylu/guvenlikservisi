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
    name: "Site Yönetimleri ve Toplu Konutlar",
    searchLabels: ["site yönetimi", "apartman güvenlik sistemi", "site kamera sistemi", "rezidans güvenlik"],
    businessType: "residential-management",
    leadValue: "very-high",
    decisionMakerType: "site-management-board",
    urgencyPattern: "contract-renewal",
    commonPainPoints: [
      "ortak alan kamera kayıtlarının sürekliliği",
      "uzaktan izleme ve yönetim erişimi",
      "çok girişli bloklarda bakım disiplini",
      "yönetim onayı gerektiren teklif süreci",
    ],
    painPointSlugs: ["ortak-alan-guvenligi", "yonetim-onay-sureci", "bakim-yapilmayan-sistem"],
    commonServiceSlugs: [
      "apartman-site-guvenlik-sistemi",
      "kamera-sistemi-bakim-sozlesmesi",
      "bakim-servis-uzaktan-izleme",
      "uzaktan-kamera-izleme",
    ],
    recurringRevenuePotential: "very-high",
    recommendedCtaAngle: "Bakım sözleşmesi, ortak alan güvenliği ve yönetim raporlaması odaklı teklif verin.",
    trustAngle: "Çok bloklu yapılarda kayıt sürekliliği ve servis disiplini gösterin.",
    priorityScore: 5,
  },
  {
    slug: "fabrika",
    name: "Fabrikalar ve Üretim Tesisleri",
    searchLabels: ["fabrika güvenlik sistemi", "üretim tesisi kamera sistemi", "fabrika çevre güvenliği"],
    businessType: "industrial",
    leadValue: "very-high",
    decisionMakerType: "facility-manager",
    urgencyPattern: "operational-risk",
    commonPainPoints: [
      "üretim hattında kayıt kaybı riski",
      "çevre ve giriş noktalarında kör nokta",
      "vardiya bazlı güvenlik ihtiyacı",
      "bakım yapılmadığında uzun duruş maliyeti",
    ],
    painPointSlugs: ["stok-kaybi-ve-gece-takibi", "kor-nokta-riski", "sla-ve-servis-surekliligi"],
    commonServiceSlugs: [
      "fabrika-depo-guvenlik-sistemi",
      "bakim-servis-uzaktan-izleme",
      "kamera-sistemi-bakim-sozlesmesi",
      "uzaktan-kamera-izleme",
    ],
    recurringRevenuePotential: "very-high",
    recommendedCtaAngle: "Kurumsal keşif, bakım planı ve kesinti riskini düşüren uzun vadeli teklif verin.",
    trustAngle: "Geniş saha planlama, dokümantasyon ve hızlı müdahale kabiliyeti öne çıkarılmalı.",
    priorityScore: 5,
  },
  {
    slug: "depo",
    name: "Depolar ve Lojistik Alanları",
    searchLabels: ["depo kamera sistemi", "lojistik güvenlik sistemi", "depo güvenlik kamerası"],
    businessType: "logistics",
    leadValue: "high",
    decisionMakerType: "operations-manager",
    urgencyPattern: "operational-risk",
    commonPainPoints: [
      "yükleme alanlarında görünürlük eksikliği",
      "stok kaybı ve gece izleme ihtiyacı",
      "uzun kayıt süresi beklentisi",
      "NVR ve ağ güvenilirliği sorunları",
    ],
    painPointSlugs: ["stok-kaybi-ve-gece-takibi", "poe-ag-kararsizligi", "kayit-yok"],
    commonServiceSlugs: [
      "fabrika-depo-guvenlik-sistemi",
      "kamera-sistemi-kurulumu",
      "kamera-ariza-servisi",
      "kamera-sistemi-bakim-sozlesmesi",
    ],
    recurringRevenuePotential: "high",
    recommendedCtaAngle: "Yükleme alanı görünürlüğü, kayıt sürekliliği ve gece takibi üzerinden teklif verin.",
    trustAngle: "Kayıt güvenilirliği ve hızlı arıza müdahalesi depolarda kritik güven sinyalidir.",
    priorityScore: 5,
  },
  {
    slug: "avm",
    name: "AVM ve Büyük Ticari Merkezler",
    searchLabels: ["AVM güvenlik sistemi", "alışveriş merkezi yangın alarm bakımı", "AVM geçiş kontrol"],
    businessType: "retail",
    leadValue: "very-high",
    decisionMakerType: "facility-manager",
    urgencyPattern: "compliance-driven",
    commonPainPoints: [
      "çok alanlı erişim ve yangın güvenliği koordinasyonu",
      "yoğun insan trafiğinde servis kesintisi riski",
      "bakım kayıtlarının kurumsal takibi",
      "yüksek görünürlük beklentisi",
    ],
    painPointSlugs: ["sla-ve-servis-surekliligi", "erisim-kontrol-entegrasyonu", "bakim-yapilmayan-sistem"],
    commonServiceSlugs: [
      "yangin-alarm-sistemi-kurulumu",
      "yangin-alarm-bakim-sozlesmesi",
      "kartli-gecis-sistemi-kurulumu",
      "bakim-servis-uzaktan-izleme",
    ],
    recurringRevenuePotential: "very-high",
    recommendedCtaAngle: "Uyumluluk, periyodik test ve çok bileşenli bakım planı üzerinden görüşme açın.",
    trustAngle: "AVM projelerinde süreç disiplini, raporlama ve SLA beklentisi vurgulanmalıdır.",
    priorityScore: 4,
  },
  {
    slug: "zincir-magaza",
    name: "Zincir Mağazalar ve Çok Şubeli Perakende",
    searchLabels: ["zincir mağaza kamera sistemi", "çok şubeli işletme güvenlik", "mağaza alarm sistemi"],
    businessType: "retail",
    leadValue: "high",
    decisionMakerType: "store-operations",
    urgencyPattern: "multi-location-standardization",
    commonPainPoints: [
      "şubeler arası standart kurulum ihtiyacı",
      "merkezi görünürlük ve uzaktan erişim",
      "aynı servis disiplinini farklı lokasyonlarda sürdürme",
      "arıza olduğunda hızlı ve standart müdahale beklentisi",
    ],
    painPointSlugs: ["cok-lokasyonlu-standart", "uzaktan-erisim-sorunu", "sla-ve-servis-surekliligi"],
    commonServiceSlugs: [
      "isyeri-guvenlik-sistemi",
      "uzaktan-kamera-izleme",
      "guvenlik-sistemi-teknik-servis",
      "kamera-ariza-servisi",
    ],
    recurringRevenuePotential: "high",
    recommendedCtaAngle: "Çok lokasyonlu standart kurulum ve merkezi raporlama üzerinden teklif verin.",
    trustAngle: "Tek mağaza değil, tüm şubelerde aynı servis disiplinini sağlayabildiğinizi gösterin.",
    priorityScore: 4,
  },
  {
    slug: "plaza-ofis",
    name: "Plazalar ve Kurumsal Ofisler",
    searchLabels: ["plaza güvenlik sistemi", "kurumsal ofis geçiş kontrol", "ofis kamera sistemi"],
    businessType: "corporate-office",
    leadValue: "high",
    decisionMakerType: "corporate-admin",
    urgencyPattern: "compliance-driven",
    commonPainPoints: [
      "erişim kontrolü ve profesyonel ziyaretçi akışı",
      "kurumsal raporlama beklentisi",
      "kesintisiz çalışma ve bakım planı ihtiyacı",
      "alarm ve kamera entegrasyonunda düzen beklentisi",
    ],
    painPointSlugs: ["erisim-kontrol-entegrasyonu", "sla-ve-servis-surekliligi", "yonetim-onay-sureci"],
    commonServiceSlugs: [
      "kartli-gecis-sistemi-kurulumu",
      "isyeri-guvenlik-sistemi",
      "guvenlik-sistemi-teknik-servis",
      "bakim-servis-uzaktan-izleme",
    ],
    recurringRevenuePotential: "high",
    recommendedCtaAngle: "Erişim kontrolü, servis disiplini ve kurumsal bakım planı üzerinden CTA kurun.",
    trustAngle: "Kurumsal ofislerde profesyonel teslim, dokümantasyon ve bakım sürekliliği öne çıkar.",
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
