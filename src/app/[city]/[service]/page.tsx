import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceVisualSection from "@/components/ServiceVisualSection";
import CityHubSection from "@/components/service-page/CityHubSection";
import RelatedServicesSection from "@/components/service-page/RelatedServicesSection";
import ServiceCTA from "@/components/service-page/ServiceCTA";
import ServiceDistricts from "@/components/service-page/ServiceDistricts";
import ServiceFAQ from "@/components/service-page/ServiceFAQ";
import ServiceHero from "@/components/service-page/ServiceHero";
import ServicePackages from "@/components/service-page/ServicePackages";
import ServiceSEOContent from "@/components/service-page/ServiceSEOContent";
import ServiceStats from "@/components/service-page/ServiceStats";
import ServiceUseCases from "@/components/service-page/ServiceUseCases";
import { pageShellClass } from "@/components/service-page/styles";
import { cities } from "@/data/cities";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site-config";
import { getCityServicePageVisuals } from "@/lib/page-images";
import {
  getCityCanonicalUrl,
  getCityPath,
  getCityServiceCanonicalUrl,
  getCityServiceStaticParams,
} from "@/lib/routes";
import { getServicePageFactoryData } from "@/lib/service-page-factory";

export const dynamic = "force-static";
export const dynamicParams = false;

interface PageProps {
  params: Promise<{
    city: string;
    service: string;
  }>;
}

export function generateStaticParams() {
  return getCityServiceStaticParams();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: citySlug, service: serviceSlug } = await params;

  const city = cities.find((c) => c.slug === citySlug);
  const service = services.find((s) => s.slug === serviceSlug);

  if (!city || !service) {
    return {
      title: "Sayfa Bulunamadı | Güvenlik Servisi",
    };
  }

  const canonical = getCityServiceCanonicalUrl(city.slug, service.slug);

  if (!canonical) {
    return {
      title: "Sayfa Bulunamadi | Guvenlik Servisi",
    };
  }

  const pageContent = getServicePageFactoryData(city, service);

  return {
    title: pageContent.meta.title,
    description: pageContent.meta.description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: pageContent.meta.title,
      description: pageContent.meta.description,
      url: canonical,
      siteName: siteConfig.name,
      locale: "tr_TR",
      type: "website",
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { city: citySlug, service: serviceSlug } = await params;

  const city = cities.find((c) => c.slug === citySlug);
  const service = services.find((s) => s.slug === serviceSlug);

  if (!city || !service) {
    notFound();
  }

  const cityPath = getCityPath(city.slug);
  const cityCanonical = getCityCanonicalUrl(city.slug);
  const canonical = getCityServiceCanonicalUrl(city.slug, service.slug);

  if (!cityPath || !cityCanonical || !canonical) {
    notFound();
  }

  const pageContent = getServicePageFactoryData(city, service);
  const serviceVisuals = getCityServicePageVisuals(city.slug, service.slug);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pageContent.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: city.name,
        item: cityCanonical,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.name,
        item: canonical,
      },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${city.name} ${service.name} - ${siteConfig.name}`,
    url: canonical,
    telephone: siteConfig.phone,
    areaServed: city.name,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.city,
      streetAddress: siteConfig.address,
      addressCountry: "TR",
    },
    description: pageContent.meta.description,
  };

  return (
    <main className={pageShellClass}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <ServiceHero
        cityName={city.name}
        serviceName={service.name}
        cityDescription={pageContent.hero.cityDescription}
        intro={pageContent.hero.intro}
        localContext={pageContent.hero.localContext}
        benefits={pageContent.hero.benefits}
        process={pageContent.hero.process}
        image={pageContent.images.hero}
      />

      <ServiceStats
        title={pageContent.stats.title}
        description={pageContent.stats.description}
        items={pageContent.stats.items}
      />

      <ServiceSEOContent blocks={pageContent.seoContent.blocks} />

      <ServiceVisualSection
        title={pageContent.visuals.title}
        description={pageContent.visuals.description}
        items={serviceVisuals}
      />

      <CityHubSection cityName={city.name} cityPath={cityPath} />

      <RelatedServicesSection cityName={city.name} links={pageContent.relatedServices} />

      <ServiceUseCases
        title={pageContent.useCases.title}
        description={pageContent.useCases.description}
        localContext={pageContent.useCases.localContext}
        items={pageContent.useCases.items}
        images={pageContent.images.useCases}
      />

      <ServicePackages
        title={pageContent.packages.title}
        description={pageContent.packages.description}
        localContext={pageContent.packages.localContext}
        items={pageContent.packages.items}
      />

      <ServiceDistricts cityName={city.name} districts={pageContent.districts} />

      <ServiceFAQ title={pageContent.faq.title} items={pageContent.faq.items} />

      <ServiceCTA
        title={pageContent.cta.title}
        description={pageContent.cta.description}
        primaryLabel={pageContent.cta.primaryLabel}
        secondaryLabel={pageContent.cta.secondaryLabel}
        image={pageContent.images.cta}
      />
    </main>
  );
}
