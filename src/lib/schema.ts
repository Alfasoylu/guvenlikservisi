import { siteConfig } from "@/data/site-config";

// ─── 1. LocalBusiness ──────────────────────────────────────────────────────
export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.city,
      addressCountry: "TR",
      streetAddress: siteConfig.address,
    },
    areaServed: siteConfig.cities.map((c) => ({
      "@type": "City",
      name: c.name,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "16:00",
      },
    ],
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    priceRange: "₺₺",
    description: siteConfig.description,
  };
}

// ─── 2. Service ─────────────────────────────────────────────────────────────
interface ServiceSchemaInput {
  name: string;
  description: string;
  url: string;
}

export function generateServiceSchema({ name, description, url }: ServiceSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${siteConfig.url}${url}`,
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      url: siteConfig.url,
      telephone: siteConfig.phone,
    },
    areaServed: siteConfig.cities.map((c) => c.name).join(", "),
    serviceType: name,
  };
}

// ─── 3. FAQ ─────────────────────────────────────────────────────────────────
export function generateFAQSchema(items: { question: string; answer: string }[]) {
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

// ─── 4. Breadcrumb ──────────────────────────────────────────────────────────
export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  };
}

// ─── 5. Article (Blog) ──────────────────────────────────────────────────────
interface ArticleSchemaInput {
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  updatedAt?: string;
  image?: string;
}

export function generateArticleSchema({
  title,
  description,
  url,
  publishedAt,
  updatedAt,
  image,
}: ArticleSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `${siteConfig.url}${url}`,
    datePublished: publishedAt,
    dateModified: updatedAt || publishedAt,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/images/logo.png`,
      },
    },
    image: image ? `${siteConfig.url}${image}` : `${siteConfig.url}${siteConfig.ogImage}`,
  };
}

// ─── 6. AggregateRating ─────────────────────────────────────────────────────
export function generateAggregateRatingSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
  };
}

// ─── Yardımcı: Script tag JSX için ──────────────────────────────────────────
export function schemaToString(schema: object): string {
  return JSON.stringify(schema);
}
