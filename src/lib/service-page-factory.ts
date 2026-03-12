import type { InternalLinkItem } from "@/components/InternalLinkSection";
import type { ServiceFAQItem } from "@/components/service-page/ServiceFAQ";
import type { ServiceStatItem } from "@/components/service-page/ServiceStats";
import { cityContent } from "@/data/seo-content/cities";
import { faqContent } from "@/data/seo-content/faq";
import { packagesContent } from "@/data/seo-content/packages";
import { serviceContent } from "@/data/seo-content/services";
import { useCaseContent } from "@/data/seo-content/usecases";
import { cities } from "@/data/cities";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site-config";
import { getCityServicePath } from "@/lib/routes";

type CityRecord = (typeof cities)[number];
type ServiceRecord = (typeof services)[number];

export interface ServicePageMeta {
  title: string;
  description: string;
}

export interface ServicePageFactoryResult {
  meta: ServicePageMeta;
  hero: {
    cityDescription: string;
    intro: string;
    localContext: string;
    benefits: string[];
    process: string[];
  };
  visuals: {
    title: string;
    description: string;
  };
  stats: {
    title: string;
    description: string;
    items: ServiceStatItem[];
  };
  useCases: {
    title: string;
    description: string;
    localContext: string;
    items: string[];
  };
  packages: {
    title: string;
    description: string;
    localContext: string;
    items: {
      title: string;
      description: string;
    }[];
  };
  faq: {
    title: string;
    items: ServiceFAQItem[];
  };
  cta: {
    title: string;
    description: string;
    primaryLabel: string;
    secondaryLabel: string;
  };
  districts: string[];
  relatedServices: InternalLinkItem[];
}

function fillTemplate(template: string, city: CityRecord, service: ServiceRecord) {
  return template
    .replaceAll("{city}", city.name)
    .replaceAll("{service}", service.name)
    .replaceAll("{serviceLower}", service.name.toLowerCase());
}

function formatNaturalList(items: string[]) {
  if (items.length === 0) {
    return "";
  }

  if (items.length === 1) {
    return items[0];
  }

  if (items.length === 2) {
    return `${items[0]} ve ${items[1]}`;
  }

  return `${items.slice(0, -1).join(", ")} ve ${items[items.length - 1]}`;
}

function getSortedDistricts(citySlug: string) {
  const turkishCollator = new Intl.Collator("tr");
  return [...(cityContent[citySlug]?.districts || [])].sort((a, b) => turkishCollator.compare(a, b));
}

export function getServicePageFactoryData(
  city: CityRecord,
  service: ServiceRecord
): ServicePageFactoryResult {
  const cityDetails = cityContent[city.slug];
  const serviceDetails = serviceContent[service.slug];
  const serviceFaq = faqContent[service.slug];
  const servicePackages = packagesContent[service.slug];
  const serviceUseCases = useCaseContent[service.slug];

  const districts = getSortedDistricts(city.slug);
  const benefits = serviceDetails?.benefits.map((item) => fillTemplate(item, city, service)) || [];
  const process = serviceDetails?.process.map((item) => fillTemplate(item, city, service)) || [];
  const useCases =
    serviceUseCases?.items.map((item) => fillTemplate(item, city, service)) || [];
  const faqItems =
    serviceFaq?.items.map((item) => ({
      question: fillTemplate(item.question, city, service),
      answer: fillTemplate(item.answer, city, service),
    })) || [];
  const packageItems =
    servicePackages?.items.map((item) => ({
      title: fillTemplate(item.title, city, service),
      description: fillTemplate(item.description, city, service),
    })) || [];

  const metadataTargets = serviceDetails?.metadataTargets.slice(0, 3) || [];
  const metadataTargetText = formatNaturalList(metadataTargets);
  const metaDescription = cityDetails
    ? `${city.name} içinde ${metadataTargetText} için ${serviceDetails?.metadataIntent || service.name.toLowerCase()} hizmeti sunuyoruz. ${cityDetails.metadataDistrictCoverage} Ücretsiz keşif ve hızlı teklif alın.`
    : `${city.name} içinde ${service.name.toLowerCase()} hizmeti sunuyoruz. Ücretsiz keşif ve hızlı teklif alın.`;

  const stats: ServiceStatItem[] = [
    { label: "Tamamlanan Proje", value: siteConfig.stats.projects },
    { label: "Sektör Deneyimi", value: siteConfig.stats.experience },
    { label: "Memnuniyet", value: siteConfig.stats.satisfaction },
    { label: "Hizmet Bölgeleri", value: `${siteConfig.serviceCityCount} Şehir` },
  ];

  const relatedServices = services.flatMap((item) => {
    if (item.slug === service.slug) {
      return [];
    }

    const href = getCityServicePath(city.slug, item.slug);

    if (!href) {
      return [];
    }

    return {
      href,
      label: `${city.name} ${item.name}`,
      description: `${city.name} içindeki ${item.name.toLowerCase()} sayfasını da inceleyin.`,
    };
  });

  return {
    meta: {
      title: `${service.name} ${city.name} | Profesyonel Montaj ve Ücretsiz Keşif`,
      description: metaDescription,
    },
    hero: {
      cityDescription: cityDetails?.intro || `${city.name} içinde profesyonel güvenlik sistemi kurulumu yapıyoruz.`,
      intro: serviceDetails
        ? fillTemplate(serviceDetails.heroIntro, city, service)
        : `${city.name} içinde ${service.name.toLowerCase()} hizmeti sunuyoruz.`,
      localContext: cityDetails
        ? `${cityDetails.districtsNote} ${fillTemplate(serviceDetails?.localContext || "", city, service)}`.trim()
        : fillTemplate(serviceDetails?.localContext || "", city, service),
      benefits,
      process,
    },
    visuals: {
      title: `${city.name} ${service.name} için uygulama görselleri`,
      description: `${city.name} bölgesinde gerçekleştirilen ${service.name.toLowerCase()} projelerinden örnekler, saha uygulamaları ve sistem şeması bu bölümde sunulmaktadır.`,
    },
    stats: {
      title: fillTemplate(serviceDetails?.statsTitle || "Kurulum yaklaşımımız", city, service),
      description: fillTemplate(serviceDetails?.statsDescription || "", city, service),
      items: stats,
    },
    useCases: {
      title: fillTemplate(serviceUseCases?.title || service.name, city, service),
      description: fillTemplate(serviceUseCases?.description || "", city, service),
      localContext: fillTemplate(serviceUseCases?.localContext || "", city, service),
      items: useCases,
    },
    packages: {
      title: fillTemplate(servicePackages?.title || "Örnek paketler", city, service),
      description: fillTemplate(servicePackages?.description || "", city, service),
      localContext: fillTemplate(servicePackages?.localContext || "", city, service),
      items: packageItems,
    },
    faq: {
      title: serviceFaq?.title || "Sık Sorulan Sorular",
      items: faqItems,
    },
    cta: {
      title: fillTemplate(serviceDetails?.ctaTitle || `${city.name} için teklif alın`, city, service),
      description: fillTemplate(
        serviceDetails?.ctaDescription || `${city.name} içindeki projeniz için bizimle iletişime geçin.`,
        city,
        service
      ),
      primaryLabel: "Hemen Ara",
      secondaryLabel: "İletişim Formuna Git",
    },
    districts,
    relatedServices,
  };
}
