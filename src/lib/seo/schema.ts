import { cities } from "@/data/cities";
import { siteConfig } from "@/data/site-config";
import type { FaqItem } from "@/data/seo/faq-bank";
import type { CustomerReview } from "@/data/seo/istanbul-social-proof";

const absoluteUrl = (path: string) => {
  if (!path) return siteConfig.url;
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
};

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export interface LocalBusinessSchemaInput {
  name: string;
  url: string;
  description: string;
  areaServed: string;
}

export interface ServiceSchemaInput {
  name: string;
  description?: string;
  url: string;
  serviceType: string;
  areaServed: string;
}

export interface WebPageSchemaInput {
  name: string;
  description: string;
  url: string;
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.url),
    })),
  };
}

export function buildFaqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildLocalBusinessSchema({
  name,
  url,
  description,
  areaServed,
}: LocalBusinessSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name,
    url: absoluteUrl(url),
    telephone: siteConfig.phone,
    areaServed,
    hasMap: siteConfig.mapUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.city,
      streetAddress: siteConfig.address,
      addressCountry: "TR",
    },
    description,
  };
}

export function buildServiceSchema({
  name,
  description,
  url,
  serviceType,
  areaServed,
}: ServiceSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    serviceType,
    url: absoluteUrl(url),
    areaServed: {
      "@type": "City",
      name: areaServed,
    },
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      telephone: siteConfig.phone,
      url: siteConfig.url,
      areaServed,
    },
  };
}

export function buildWebPageSchema({ name, description, url }: WebPageSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: absoluteUrl(url),
    isPartOf: {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
    },
  };
}

// ──────────────────────────────────────────────────────────────
// AggregateRating + Review Schema (Google SERP yıldızları için)
// ──────────────────────────────────────────────────────────────

/**
 * "Ocak 2025" gibi Türkçe tarih ifadelerini ISO 8601'e çevirir.
 * Gün olarak 15 kullanılır (ay ortası tahmini).
 */
function parseTurkishDateToISO(turkishDate: string): string {
  const monthMap: Record<string, string> = {
    "Ocak": "01",
    "Şubat": "02",
    "Mart": "03",
    "Nisan": "04",
    "Mayıs": "05",
    "Haziran": "06",
    "Temmuz": "07",
    "Ağustos": "08",
    "Eylül": "09",
    "Ekim": "10",
    "Kasım": "11",
    "Aralık": "12",
  };

  const parts = turkishDate.trim().split(" ");
  if (parts.length !== 2) return "2025-01-15";

  const [monthTR, year] = parts;
  const month = monthMap[monthTR] ?? "01";
  return `${year}-${month}-15`;
}

export interface AggregateRatingSchemaInput {
  businessName: string;
  businessUrl: string;
  serviceType: string;
  areaServed: string;
  reviews: CustomerReview[];
}

/**
 * Schema.org LocalBusiness şeması — aggregateRating + review[] ile.
 * Google Rich Results'da SERP yıldızı göstermek için gerekli.
 */
export function buildLocalBusinessWithReviewsSchema({
  businessName,
  businessUrl,
  serviceType,
  areaServed,
  reviews,
}: AggregateRatingSchemaInput) {
  if (!reviews || reviews.length === 0) return null;

  const totalRating = reviews.reduce((sum, r) => sum + r.rating, 0);
  const avgRating = (totalRating / reviews.length).toFixed(1);

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: businessName,
    url: absoluteUrl(businessUrl),
    telephone: siteConfig.phone,
    areaServed,
    hasMap: siteConfig.mapUrl,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.city,
      streetAddress: siteConfig.address,
      addressCountry: "TR",
    },
    description: `${areaServed} ${serviceType} hizmetleri`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: avgRating,
      reviewCount: String(reviews.length),
      bestRating: "5",
      worstRating: "1",
    },
    review: reviews.map((r) => ({
      "@type": "Review",
      author: {
        "@type": "Person",
        name: r.name,
      },
      datePublished: parseTurkishDateToISO(r.date),
      reviewRating: {
        "@type": "Rating",
        ratingValue: String(r.rating),
        bestRating: "5",
        worstRating: "1",
      },
      reviewBody: r.text,
      name: `${r.district} ${r.serviceType}`,
    })),
  };
}

export function buildGlobalLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${siteConfig.url}#localbusiness`,
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: absoluteUrl(siteConfig.ogImage),
    hasMap: siteConfig.mapUrl,
    description: siteConfig.description,
    areaServed: cities.map((city) => ({
      "@type": "City",
      name: city.name,
    })),
  };
}
