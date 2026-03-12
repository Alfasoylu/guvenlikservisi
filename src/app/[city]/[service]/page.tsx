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
import ServiceStats from "@/components/service-page/ServiceStats";
import ServiceUseCases from "@/components/service-page/ServiceUseCases";
import { pageShellStyle } from "@/components/service-page/styles";
import { cityContent } from "@/data/city-content";
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

  const title = `${city.name} ${service.name} | Ücretsiz Keşif ve Montaj`;
  const districtCoverage = cityContent[city.slug]?.metadataDistrictCoverage;
  const description = districtCoverage
    ? `${city.name} için profesyonel ${service.name.toLowerCase()} hizmeti. ${districtCoverage} Ücretsiz keşif, anahtar teslim montaj ve hızlı teklif alın.`
    : `${city.name} için profesyonel ${service.name.toLowerCase()} hizmeti. Ücretsiz keşif, anahtar teslim montaj, mobil izleme kurulumu ve hızlı teklif alın.`;
  const canonical = getCityServiceCanonicalUrl(city.slug, service.slug);

  if (!canonical) {
    return {
      title: "Sayfa Bulunamadi | Guvenlik Servisi",
    };
  }

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
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

  const serviceVisuals = getCityServicePageVisuals(city.slug, service.slug);
  const {
    cityDescription,
    intro,
    trustBullets,
    processSummary,
    useCaseTitle,
    useCaseDescription,
    useCases,
    packageTitle,
    packageDescription,
    packages,
    faqItems,
    cta,
    districts,
    stats,
    sameCityOtherServices,
  } = getServicePageFactoryData(city, service);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
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
    description: `${city.name} için ${service.name.toLowerCase()} hizmeti.`,
  };

  return (
    <main style={pageShellStyle}>
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
        cityDescription={cityDescription}
        intro={intro}
        trustBullets={trustBullets}
        processSummary={processSummary}
      />

      <ServiceStats items={stats} />

      <ServiceVisualSection
        title={`${city.name} ${service.name} için uygulama görselleri`}
        description={`${city.name} bölgesinde gerçekleştirilen ${service.name.toLowerCase()} projelerinden örnekler, saha uygulamaları ve sistem şeması bu bölümde sunulmaktadır.`}
        items={serviceVisuals}
      />

      <CityHubSection cityName={city.name} cityPath={cityPath} />

      <RelatedServicesSection cityName={city.name} links={sameCityOtherServices} />

      <ServiceUseCases
        title={useCaseTitle}
        description={useCaseDescription}
        items={useCases}
      />

      <ServicePackages
        title={packageTitle}
        description={packageDescription}
        items={packages}
      />

      <ServiceDistricts cityName={city.name} districts={districts} />

      <ServiceFAQ items={faqItems} />

      <ServiceCTA
        title={cta.title}
        description={cta.description}
        primaryLabel={cta.primaryLabel}
        secondaryLabel={cta.secondaryLabel}
      />
    </main>
  );
}
