import { cities } from "@/data/cities";
import { siteConfig } from "@/data/site-config";
import type { FaqItem } from "@/data/seo/faq-bank";

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
    description: siteConfig.description,
    areaServed: cities.map((city) => ({
      "@type": "City",
      name: city.name,
    })),
  };
}
