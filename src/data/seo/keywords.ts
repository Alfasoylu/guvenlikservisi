export type KeywordOpportunityType = "seo-traffic" | "lead-opportunity";

export type KeywordBusinessIntent =
  | "informational"
  | "commercial"
  | "transactional"
  | "segment"
  | "problem-fault"
  | "maintenance-recurring"
  | "price-teklif"
  | "comparison"
  | "local";

export type LeadIntentLevel = "low" | "medium" | "high" | "urgent";

export type KeywordBusinessValue = "supporting" | "high" | "strategic";

export type RecommendedPageType =
  | "blog"
  | "service-page"
  | "city-service"
  | "segment-page"
  | "landing-page"
  | "troubleshooting";

export interface SeoKeywordRecord {
  keyword: string;
  serviceSlug: string;
  segmentSlug?: string;
  cityRelevance?: "low" | "medium" | "high";
  opportunityType: KeywordOpportunityType;
  keywordIntent: KeywordBusinessIntent;
  businessValue: KeywordBusinessValue;
  leadIntentLevel: LeadIntentLevel;
  recommendedPageType: RecommendedPageType;
  recurringPotential: "low" | "medium" | "high";
  notes?: string;
}

export const seoKeywordRecords: SeoKeywordRecord[] = [
  {
    keyword: "ip kamera montajı",
    serviceSlug: "kamera-sistemi-kurulumu",
    opportunityType: "lead-opportunity",
    keywordIntent: "transactional",
    businessValue: "high",
    leadIntentLevel: "high",
    recommendedPageType: "city-service",
    recurringPotential: "medium",
    cityRelevance: "high",
  },
  {
    keyword: "güvenlik kamera sistemi kurulumu fiyatı",
    serviceSlug: "kamera-sistemi-kurulumu",
    opportunityType: "lead-opportunity",
    keywordIntent: "price-teklif",
    businessValue: "high",
    leadIntentLevel: "high",
    recommendedPageType: "landing-page",
    recurringPotential: "medium",
    cityRelevance: "high",
  },
  {
    keyword: "cctv kurulumu",
    serviceSlug: "kamera-sistemi-kurulumu",
    opportunityType: "lead-opportunity",
    keywordIntent: "commercial",
    businessValue: "high",
    leadIntentLevel: "high",
    recommendedPageType: "city-service",
    recurringPotential: "medium",
  },
  {
    keyword: "ip kamera nedir",
    serviceSlug: "kamera-sistemi-kurulumu",
    opportunityType: "seo-traffic",
    keywordIntent: "informational",
    businessValue: "supporting",
    leadIntentLevel: "low",
    recommendedPageType: "blog",
    recurringPotential: "low",
  },
  {
    keyword: "güvenlik kamerası kaç metreden görür",
    serviceSlug: "kamera-sistemi-kurulumu",
    opportunityType: "seo-traffic",
    keywordIntent: "informational",
    businessValue: "supporting",
    leadIntentLevel: "low",
    recommendedPageType: "blog",
    recurringPotential: "low",
  },
  {
    keyword: "alarm sistemi kurulumu",
    serviceSlug: "alarm-sistemi-kurulumu",
    opportunityType: "lead-opportunity",
    keywordIntent: "transactional",
    businessValue: "high",
    leadIntentLevel: "high",
    recommendedPageType: "city-service",
    recurringPotential: "medium",
    cityRelevance: "high",
  },
  {
    keyword: "işyeri alarm sistemi",
    serviceSlug: "alarm-sistemi-kurulumu",
    segmentSlug: "zincir-magaza",
    opportunityType: "lead-opportunity",
    keywordIntent: "segment",
    businessValue: "high",
    leadIntentLevel: "high",
    recommendedPageType: "segment-page",
    recurringPotential: "medium",
  },
  {
    keyword: "alarm sistemi fiyatı",
    serviceSlug: "alarm-sistemi-kurulumu",
    opportunityType: "lead-opportunity",
    keywordIntent: "price-teklif",
    businessValue: "high",
    leadIntentLevel: "medium",
    recommendedPageType: "landing-page",
    recurringPotential: "medium",
  },
  {
    keyword: "alarm sistemi nasıl çalışır",
    serviceSlug: "alarm-sistemi-kurulumu",
    opportunityType: "seo-traffic",
    keywordIntent: "informational",
    businessValue: "supporting",
    leadIntentLevel: "low",
    recommendedPageType: "blog",
    recurringPotential: "low",
  },
  {
    keyword: "yangın alarm sistemi kurulumu",
    serviceSlug: "yangin-alarm-sistemi-kurulumu",
    opportunityType: "lead-opportunity",
    keywordIntent: "transactional",
    businessValue: "high",
    leadIntentLevel: "high",
    recommendedPageType: "city-service",
    recurringPotential: "high",
    cityRelevance: "high",
  },
  {
    keyword: "yangın alarm sistemi fiyatı",
    serviceSlug: "yangin-alarm-sistemi-kurulumu",
    opportunityType: "lead-opportunity",
    keywordIntent: "price-teklif",
    businessValue: "high",
    leadIntentLevel: "medium",
    recommendedPageType: "landing-page",
    recurringPotential: "high",
  },
  {
    keyword: "yangın alarm paneli",
    serviceSlug: "yangin-alarm-sistemi-kurulumu",
    opportunityType: "seo-traffic",
    keywordIntent: "informational",
    businessValue: "supporting",
    leadIntentLevel: "low",
    recommendedPageType: "blog",
    recurringPotential: "medium",
  },
  {
    keyword: "kartlı geçiş sistemi kurulumu",
    serviceSlug: "kartli-gecis-sistemi-kurulumu",
    opportunityType: "lead-opportunity",
    keywordIntent: "transactional",
    businessValue: "high",
    leadIntentLevel: "high",
    recommendedPageType: "city-service",
    recurringPotential: "medium",
    cityRelevance: "high",
  },
  {
    keyword: "personel geçiş kontrol sistemi",
    serviceSlug: "kartli-gecis-sistemi-kurulumu",
    segmentSlug: "plaza-ofis",
    opportunityType: "lead-opportunity",
    keywordIntent: "commercial",
    businessValue: "high",
    leadIntentLevel: "high",
    recommendedPageType: "segment-page",
    recurringPotential: "medium",
  },
  {
    keyword: "turnike geçiş sistemi",
    serviceSlug: "kartli-gecis-sistemi-kurulumu",
    opportunityType: "seo-traffic",
    keywordIntent: "comparison",
    businessValue: "supporting",
    leadIntentLevel: "medium",
    recommendedPageType: "blog",
    recurringPotential: "low",
  },
  {
    keyword: "apartman site güvenlik sistemi",
    serviceSlug: "apartman-site-guvenlik-sistemi",
    segmentSlug: "site-yonetimi",
    opportunityType: "lead-opportunity",
    keywordIntent: "segment",
    businessValue: "strategic",
    leadIntentLevel: "high",
    recommendedPageType: "segment-page",
    recurringPotential: "high",
  },
  {
    keyword: "site kamera sistemi teklifi",
    serviceSlug: "apartman-site-guvenlik-sistemi",
    segmentSlug: "site-yonetimi",
    opportunityType: "lead-opportunity",
    keywordIntent: "price-teklif",
    businessValue: "strategic",
    leadIntentLevel: "high",
    recommendedPageType: "landing-page",
    recurringPotential: "high",
  },
  {
    keyword: "apartman güvenlik sistemi nasıl seçilir",
    serviceSlug: "apartman-site-guvenlik-sistemi",
    segmentSlug: "site-yonetimi",
    opportunityType: "seo-traffic",
    keywordIntent: "informational",
    businessValue: "supporting",
    leadIntentLevel: "medium",
    recommendedPageType: "blog",
    recurringPotential: "medium",
  },
  {
    keyword: "işyeri güvenlik sistemi",
    serviceSlug: "isyeri-guvenlik-sistemi",
    segmentSlug: "zincir-magaza",
    opportunityType: "lead-opportunity",
    keywordIntent: "commercial",
    businessValue: "high",
    leadIntentLevel: "high",
    recommendedPageType: "city-service",
    recurringPotential: "high",
  },
  {
    keyword: "mağaza kamera alarm sistemi",
    serviceSlug: "isyeri-guvenlik-sistemi",
    segmentSlug: "zincir-magaza",
    opportunityType: "lead-opportunity",
    keywordIntent: "segment",
    businessValue: "high",
    leadIntentLevel: "high",
    recommendedPageType: "segment-page",
    recurringPotential: "high",
  },
  {
    keyword: "ofis güvenlik çözümü",
    serviceSlug: "isyeri-guvenlik-sistemi",
    segmentSlug: "plaza-ofis",
    opportunityType: "lead-opportunity",
    keywordIntent: "segment",
    businessValue: "strategic",
    leadIntentLevel: "medium",
    recommendedPageType: "segment-page",
    recurringPotential: "high",
  },
  {
    keyword: "işyeri için kaç kamera gerekir",
    serviceSlug: "isyeri-guvenlik-sistemi",
    opportunityType: "seo-traffic",
    keywordIntent: "informational",
    businessValue: "supporting",
    leadIntentLevel: "medium",
    recommendedPageType: "blog",
    recurringPotential: "low",
  },
  {
    keyword: "fabrika güvenlik sistemi",
    serviceSlug: "fabrika-depo-guvenlik-sistemi",
    segmentSlug: "fabrika",
    opportunityType: "lead-opportunity",
    keywordIntent: "segment",
    businessValue: "strategic",
    leadIntentLevel: "high",
    recommendedPageType: "segment-page",
    recurringPotential: "high",
  },
  {
    keyword: "depo kamera sistemi",
    serviceSlug: "fabrika-depo-guvenlik-sistemi",
    segmentSlug: "depo",
    opportunityType: "lead-opportunity",
    keywordIntent: "segment",
    businessValue: "strategic",
    leadIntentLevel: "high",
    recommendedPageType: "segment-page",
    recurringPotential: "high",
  },
  {
    keyword: "sanayi tesisi güvenlik çözümü",
    serviceSlug: "fabrika-depo-guvenlik-sistemi",
    segmentSlug: "fabrika",
    opportunityType: "lead-opportunity",
    keywordIntent: "commercial",
    businessValue: "strategic",
    leadIntentLevel: "high",
    recommendedPageType: "segment-page",
    recurringPotential: "high",
  },
  {
    keyword: "depo güvenlik kamerası nasıl yerleştirilir",
    serviceSlug: "fabrika-depo-guvenlik-sistemi",
    segmentSlug: "depo",
    opportunityType: "seo-traffic",
    keywordIntent: "informational",
    businessValue: "supporting",
    leadIntentLevel: "medium",
    recommendedPageType: "blog",
    recurringPotential: "medium",
  },
  {
    keyword: "güvenlik sistemi bakım servisi",
    serviceSlug: "bakim-servis-uzaktan-izleme",
    opportunityType: "lead-opportunity",
    keywordIntent: "maintenance-recurring",
    businessValue: "strategic",
    leadIntentLevel: "high",
    recommendedPageType: "service-page",
    recurringPotential: "high",
  },
  {
    keyword: "bakım sözleşmesi güvenlik sistemi",
    serviceSlug: "bakim-servis-uzaktan-izleme",
    opportunityType: "lead-opportunity",
    keywordIntent: "maintenance-recurring",
    businessValue: "strategic",
    leadIntentLevel: "high",
    recommendedPageType: "service-page",
    recurringPotential: "high",
  },
  {
    keyword: "site yönetimi güvenlik bakım",
    serviceSlug: "bakim-servis-uzaktan-izleme",
    segmentSlug: "site-yonetimi",
    opportunityType: "lead-opportunity",
    keywordIntent: "segment",
    businessValue: "strategic",
    leadIntentLevel: "high",
    recommendedPageType: "segment-page",
    recurringPotential: "high",
  },
  {
    keyword: "güvenlik sistemi bakımı neden gerekli",
    serviceSlug: "bakim-servis-uzaktan-izleme",
    opportunityType: "seo-traffic",
    keywordIntent: "informational",
    businessValue: "supporting",
    leadIntentLevel: "medium",
    recommendedPageType: "blog",
    recurringPotential: "high",
  },
  {
    keyword: "kamera sistemi bakım sözleşmesi",
    serviceSlug: "kamera-sistemi-bakim-sozlesmesi",
    opportunityType: "lead-opportunity",
    keywordIntent: "maintenance-recurring",
    businessValue: "strategic",
    leadIntentLevel: "high",
    recommendedPageType: "service-page",
    recurringPotential: "high",
  },
  {
    keyword: "periyodik kamera bakımı",
    serviceSlug: "kamera-sistemi-bakim-sozlesmesi",
    opportunityType: "lead-opportunity",
    keywordIntent: "maintenance-recurring",
    businessValue: "high",
    leadIntentLevel: "high",
    recommendedPageType: "service-page",
    recurringPotential: "high",
  },
  {
    keyword: "kamera bakım kontrol listesi",
    serviceSlug: "kamera-sistemi-bakim-sozlesmesi",
    opportunityType: "seo-traffic",
    keywordIntent: "informational",
    businessValue: "supporting",
    leadIntentLevel: "medium",
    recommendedPageType: "blog",
    recurringPotential: "high",
  },
  {
    keyword: "güvenlik sistemi teknik servis",
    serviceSlug: "guvenlik-sistemi-teknik-servis",
    opportunityType: "lead-opportunity",
    keywordIntent: "commercial",
    businessValue: "high",
    leadIntentLevel: "high",
    recommendedPageType: "city-service",
    recurringPotential: "medium",
    cityRelevance: "high",
  },
  {
    keyword: "teknik servis güvenlik kamerası",
    serviceSlug: "guvenlik-sistemi-teknik-servis",
    opportunityType: "lead-opportunity",
    keywordIntent: "commercial",
    businessValue: "high",
    leadIntentLevel: "high",
    recommendedPageType: "city-service",
    recurringPotential: "medium",
  },
  {
    keyword: "saha müdahale desteği",
    serviceSlug: "guvenlik-sistemi-teknik-servis",
    opportunityType: "lead-opportunity",
    keywordIntent: "commercial",
    businessValue: "high",
    leadIntentLevel: "medium",
    recommendedPageType: "service-page",
    recurringPotential: "medium",
  },
  {
    keyword: "güvenlik sistemi arızası nasıl bulunur",
    serviceSlug: "guvenlik-sistemi-teknik-servis",
    opportunityType: "seo-traffic",
    keywordIntent: "problem-fault",
    businessValue: "supporting",
    leadIntentLevel: "medium",
    recommendedPageType: "troubleshooting",
    recurringPotential: "low",
  },
  {
    keyword: "kamera arıza servisi",
    serviceSlug: "kamera-ariza-servisi",
    opportunityType: "lead-opportunity",
    keywordIntent: "problem-fault",
    businessValue: "strategic",
    leadIntentLevel: "urgent",
    recommendedPageType: "city-service",
    recurringPotential: "medium",
    cityRelevance: "high",
  },
  {
    keyword: "kamera görüntü problemi",
    serviceSlug: "kamera-ariza-servisi",
    opportunityType: "lead-opportunity",
    keywordIntent: "problem-fault",
    businessValue: "high",
    leadIntentLevel: "urgent",
    recommendedPageType: "troubleshooting",
    recurringPotential: "medium",
  },
  {
    keyword: "nvr dvr arıza tespiti",
    serviceSlug: "kamera-ariza-servisi",
    opportunityType: "lead-opportunity",
    keywordIntent: "problem-fault",
    businessValue: "high",
    leadIntentLevel: "urgent",
    recommendedPageType: "troubleshooting",
    recurringPotential: "medium",
  },
  {
    keyword: "kamera neden kayıt yapmıyor",
    serviceSlug: "kamera-ariza-servisi",
    opportunityType: "seo-traffic",
    keywordIntent: "problem-fault",
    businessValue: "supporting",
    leadIntentLevel: "high",
    recommendedPageType: "troubleshooting",
    recurringPotential: "medium",
    notes: "Yüksek destekleyici trafik; arıza servisine yönlendirme için kullanılmalı.",
  },
  {
    keyword: "ip kamera offline sorunu",
    serviceSlug: "kamera-ariza-servisi",
    opportunityType: "seo-traffic",
    keywordIntent: "problem-fault",
    businessValue: "supporting",
    leadIntentLevel: "high",
    recommendedPageType: "troubleshooting",
    recurringPotential: "medium",
  },
  {
    keyword: "yangın alarm bakım sözleşmesi",
    serviceSlug: "yangin-alarm-bakim-sozlesmesi",
    opportunityType: "lead-opportunity",
    keywordIntent: "maintenance-recurring",
    businessValue: "strategic",
    leadIntentLevel: "high",
    recommendedPageType: "service-page",
    recurringPotential: "high",
  },
  {
    keyword: "yangın alarm test hizmeti",
    serviceSlug: "yangin-alarm-bakim-sozlesmesi",
    opportunityType: "lead-opportunity",
    keywordIntent: "maintenance-recurring",
    businessValue: "high",
    leadIntentLevel: "high",
    recommendedPageType: "service-page",
    recurringPotential: "high",
  },
  {
    keyword: "yangın alarm bakımı zorunlu mu",
    serviceSlug: "yangin-alarm-bakim-sozlesmesi",
    opportunityType: "seo-traffic",
    keywordIntent: "informational",
    businessValue: "supporting",
    leadIntentLevel: "medium",
    recommendedPageType: "blog",
    recurringPotential: "high",
  },
  {
    keyword: "uzaktan kamera izleme",
    serviceSlug: "uzaktan-kamera-izleme",
    opportunityType: "lead-opportunity",
    keywordIntent: "maintenance-recurring",
    businessValue: "strategic",
    leadIntentLevel: "high",
    recommendedPageType: "service-page",
    recurringPotential: "high",
  },
  {
    keyword: "merkezi kamera izleme",
    serviceSlug: "uzaktan-kamera-izleme",
    opportunityType: "lead-opportunity",
    keywordIntent: "commercial",
    businessValue: "strategic",
    leadIntentLevel: "high",
    recommendedPageType: "service-page",
    recurringPotential: "high",
  },
  {
    keyword: "çok şubeli işletme kamera takibi",
    serviceSlug: "uzaktan-kamera-izleme",
    segmentSlug: "zincir-magaza",
    opportunityType: "lead-opportunity",
    keywordIntent: "segment",
    businessValue: "strategic",
    leadIntentLevel: "high",
    recommendedPageType: "segment-page",
    recurringPotential: "high",
  },
  {
    keyword: "nvr nedir",
    serviceSlug: "uzaktan-kamera-izleme",
    opportunityType: "seo-traffic",
    keywordIntent: "informational",
    businessValue: "supporting",
    leadIntentLevel: "low",
    recommendedPageType: "blog",
    recurringPotential: "low",
  },
];

function groupKeywordsByService(opportunityType?: KeywordOpportunityType) {
  return seoKeywordRecords.reduce<Record<string, string[]>>((accumulator, record) => {
    if (opportunityType && record.opportunityType !== opportunityType) {
      return accumulator;
    }

    accumulator[record.serviceSlug] ??= [];
    accumulator[record.serviceSlug].push(record.keyword);
    return accumulator;
  }, {});
}

const leadOpportunityKeywordMap = groupKeywordsByService("lead-opportunity");

export const primaryKeywordThemeByServiceSlug: Record<string, string> = seoKeywordRecords.reduce(
  (accumulator, record) => {
    if (!accumulator[record.serviceSlug] && record.opportunityType === "lead-opportunity") {
      accumulator[record.serviceSlug] = record.keyword;
    }

    return accumulator;
  },
  {} as Record<string, string>
);

export const keywordClustersByServiceSlug: Record<string, string[]> = leadOpportunityKeywordMap;

export function getKeywordsForService(serviceSlug: string) {
  return seoKeywordRecords.filter((record) => record.serviceSlug === serviceSlug);
}

export function getLeadIntentKeywordsForService(serviceSlug: string) {
  return getKeywordsForService(serviceSlug)
    .filter((record) => record.opportunityType === "lead-opportunity")
    .sort((left, right) => {
      const leadScore = { urgent: 4, high: 3, medium: 2, low: 1 };
      return (
        leadScore[right.leadIntentLevel] - leadScore[left.leadIntentLevel] ||
        right.keyword.localeCompare(left.keyword, "tr")
      );
    });
}

export function getSeoTrafficKeywordsForService(serviceSlug: string) {
  return getKeywordsForService(serviceSlug)
    .filter((record) => record.opportunityType === "seo-traffic")
    .sort((left, right) => left.keyword.localeCompare(right.keyword, "tr"));
}

export function getKeywordOpportunitySummaryForService(serviceSlug: string) {
  const leadKeywords = getLeadIntentKeywordsForService(serviceSlug);
  const trafficKeywords = getSeoTrafficKeywordsForService(serviceSlug);

  return {
    leadKeywords,
    trafficKeywords,
    primaryLeadKeyword: leadKeywords[0]?.keyword ?? null,
    primaryTrafficKeyword: trafficKeywords[0]?.keyword ?? null,
  };
}

export function getKeywordsByOpportunityType(opportunityType: KeywordOpportunityType) {
  return seoKeywordRecords.filter((record) => record.opportunityType === opportunityType);
}

export function getKeywordsBySegment(segmentSlug: string) {
  return seoKeywordRecords.filter((record) => record.segmentSlug === segmentSlug);
}
