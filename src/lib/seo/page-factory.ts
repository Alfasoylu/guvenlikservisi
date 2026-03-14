import type { FaqItem } from "@/data/seo/faq-bank";
import { getLeadIntentKeywordsForService, getSeoTrafficKeywordsForService } from "@/data/seo/keywords";
import { getPainPointsBySlugs } from "@/data/seo/pain-points";
import { getPrimaryDistrictsByCitySlug } from "@/data/seo/districts";
import { getHighLtvSegmentBySlug, highLtvSegments } from "@/data/seo/segments";
import {
  getBusinessModelForService,
  getServiceRouteRecord,
  getSeoServiceBySlug,
  seoServices,
  type SeoService,
  type ServiceRouteRecord,
} from "@/data/services";

export function getCityLocative(cityName: string) {
  const normalized = cityName.toLocaleLowerCase("tr-TR");
  const lastVowel = [...normalized].reverse().find((char) => "aeıioöuü".includes(char));
  const suffix = lastVowel && "eiöü".includes(lastVowel) ? "de" : "da";
  return `${cityName}'${suffix}`;
}

export function dedupeFaqItems(baseItems: FaqItem[], extraItems: FaqItem[]) {
  return [
    ...baseItems,
    ...extraItems.filter(
      (candidate) =>
        !baseItems.some(
          (existing) => existing.question.toLocaleLowerCase("tr-TR") === candidate.question.toLocaleLowerCase("tr-TR")
        )
    ),
  ];
}

const leadPriorityWeight = {
  urgent: 4,
  strategic: 3,
  high: 2,
} as const;

function sortSeoServicesByBusinessPriority(items: SeoService[]) {
  return [...items].sort((left, right) => {
    return (
      right.businessPriorityScore - left.businessPriorityScore ||
      leadPriorityWeight[right.leadPriority] - leadPriorityWeight[left.leadPriority] ||
      right.name.localeCompare(left.name, "tr")
    );
  });
}

export function sortServicesByBusinessPriority(items: ServiceRouteRecord[]) {
  return [...items].sort((left, right) => {
    const leftService = getSeoServiceBySlug(left.slug);
    const rightService = getSeoServiceBySlug(right.slug);

    if (!leftService || !rightService) {
      return left.name.localeCompare(right.name, "tr");
    }

    return (
      rightService.businessPriorityScore - leftService.businessPriorityScore ||
      leadPriorityWeight[rightService.leadPriority] - leadPriorityWeight[leftService.leadPriority] ||
      left.name.localeCompare(right.name, "tr")
    );
  });
}

export function getHighIntentLeadServices(limit?: number) {
  const items = sortSeoServicesByBusinessPriority(
    seoServices.filter((service) => service.leadPriority === "high" || service.leadPriority === "urgent")
  );

  return typeof limit === "number" ? items.slice(0, limit) : items;
}

export function getRecurringRevenueServices(limit?: number) {
  const items = sortSeoServicesByBusinessPriority(seoServices.filter((service) => service.recurringRevenue));
  return typeof limit === "number" ? items.slice(0, limit) : items;
}

export function getOneTimeRevenueServices(limit?: number) {
  const items = sortSeoServicesByBusinessPriority(
    seoServices.filter((service) => service.oneTimeRevenue && service.revenueModel !== "recurring")
  );
  return typeof limit === "number" ? items.slice(0, limit) : items;
}

export function getHighLtvSegments(limit?: number) {
  const items = [...highLtvSegments].sort(
    (left, right) => right.priorityScore - left.priorityScore || left.name.localeCompare(right.name, "tr")
  );

  return typeof limit === "number" ? items.slice(0, limit) : items;
}

export function getHighLtvSegmentsForService(serviceSlug: string) {
  const service = getSeoServiceBySlug(serviceSlug);

  if (!service) {
    return [];
  }

  return service.targetSegmentSlugs
    .map((segmentSlug) => getHighLtvSegmentBySlug(segmentSlug))
    .filter((segment): segment is NonNullable<typeof segment> => Boolean(segment));
}

export function getPriorityServiceLinksForService(serviceSlug: string, limit = 4) {
  const service = getSeoServiceBySlug(serviceSlug);
  const priorityRecords = (service?.priorityLinkSlugs ?? [])
    .map((slug) => getServiceRouteRecord(slug))
    .filter((item): item is ServiceRouteRecord => Boolean(item));
  const prioritySlugs = new Set(priorityRecords.map((item) => item.slug));
  const fallbackRecords = sortServicesByBusinessPriority(
    seoServices
      .filter((item) => item.slug !== serviceSlug && !prioritySlugs.has(item.slug))
      .map(({ slug, name, shortDescription }) => ({ slug, name, shortDescription }))
  );

  return [...priorityRecords, ...fallbackRecords].slice(0, limit);
}

export function getLeadIntentKeywords(serviceSlug: string) {
  return getLeadIntentKeywordsForService(serviceSlug);
}

export function getSeoTrafficKeywords(serviceSlug: string) {
  return getSeoTrafficKeywordsForService(serviceSlug);
}

export function getPageBusinessSummary(serviceSlug: string) {
  const businessModel = getBusinessModelForService(serviceSlug);
  const service = getSeoServiceBySlug(serviceSlug);

  if (!businessModel || !service) {
    return null;
  }

  return {
    service,
    businessModel,
    leadKeywords: getLeadIntentKeywordsForService(serviceSlug),
    trafficKeywords: getSeoTrafficKeywordsForService(serviceSlug),
    primarySegments: getHighLtvSegmentsForService(serviceSlug),
    painPoints: getPainPointsBySlugs(service.painPointSlugs),
  };
}

export function getPrimaryDistrictsForCity(citySlug: string) {
  return getPrimaryDistrictsByCitySlug(citySlug);
}
