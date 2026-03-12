import type { InternalLinkItem } from "@/components/InternalLinkSection";
import type { ServiceFAQItem } from "@/components/service-page/ServiceFAQ";
import type { ServiceStatItem } from "@/components/service-page/ServiceStats";
import { cityContent } from "@/data/city-content";
import { serviceContent } from "@/data/service-content";
import { siteConfig } from "@/data/site-config";
import { cities } from "@/data/cities";
import { services } from "@/data/services";
import { getCityServicePath } from "@/lib/routes";

type CityRecord = (typeof cities)[number];
type ServiceRecord = (typeof services)[number];

interface ServicePageFactoryResult {
  cityDescription: string;
  intro: string;
  trustBullets: string[];
  processSummary: {
    title: string;
    body: string;
  };
  useCaseTitle: string;
  useCaseDescription: string;
  useCases: string[];
  packageTitle: string;
  packageDescription: string;
  packages: {
    title: string;
    description: string;
  }[];
  faqItems: ServiceFAQItem[];
  cta: {
    title: string;
    description: string;
    primaryLabel: string;
    secondaryLabel: string;
  };
  districts: string[];
  stats: ServiceStatItem[];
  sameCityOtherServices: InternalLinkItem[];
  sameServiceOtherCities: InternalLinkItem[];
}

function fillTemplate(template: string, city: CityRecord, service: ServiceRecord) {
  return template
    .replaceAll("{city}", city.name)
    .replaceAll("{service}", service.name)
    .replaceAll("{serviceLower}", service.name.toLowerCase());
}

export function getServicePageFactoryData(
  city: CityRecord,
  service: ServiceRecord
): ServicePageFactoryResult {
  const cityDetails = cityContent[city.slug];
  const serviceDetails = serviceContent[service.slug];

  const cityDescription =
    cityDetails?.shortDescription ||
    `${city.name} bölgesinde profesyonel ${service.name.toLowerCase()} hizmeti sunuyoruz.`;
  const districts = cityDetails?.districts || [];

  const intro = serviceDetails
    ? fillTemplate(serviceDetails.intro, city, service)
    : `${city.name} içinde profesyonel ${service.name.toLowerCase()} hizmeti sunuyoruz.`;

  const trustBullets = serviceDetails?.trustBullets.map((item) => fillTemplate(item, city, service)) || [
    "Ücretsiz keşif ile ihtiyaç analizi yapıyoruz.",
    "Doğru ürün seçimi ve montaj planı çıkarıyoruz.",
    "Kurulum sonrası temel kullanım ayarlarını tamamlıyoruz.",
  ];

  const processSummary = serviceDetails
    ? {
        title: fillTemplate(serviceDetails.processSummary.title, city, service),
        body: fillTemplate(serviceDetails.processSummary.body, city, service),
      }
    : {
        title: "Kurulum süreci nasıl ilerliyor?",
        body: `${city.name} içinde keşif, ürün seçimi, montaj ve devreye alma adımlarını aynı akış içinde planlıyoruz.`,
      };

  const useCaseTitle = serviceDetails
    ? fillTemplate(serviceDetails.useCaseTitle, city, service)
    : `${service.name} hangi alanlarda tercih edilir?`;
  const useCaseDescription = serviceDetails
    ? fillTemplate(serviceDetails.useCaseDescription, city, service)
    : `${city.name} içinde ${service.name.toLowerCase()} için sık karşılaşılan kullanım alanları.`;
  const useCases = serviceDetails?.useCases.map((item) => fillTemplate(item, city, service)) || [
    "Konut projeleri",
    "İşyeri ve ofis alanları",
    "Apartman ve site girişleri",
    "Depo ve teknik hacimler",
  ];

  const packageTitle = serviceDetails
    ? fillTemplate(serviceDetails.packageTitle, city, service)
    : "Örnek hizmet paketleri";
  const packageDescription = serviceDetails
    ? fillTemplate(serviceDetails.packageDescription, city, service)
    : `${city.name} içinde farklı proje ölçekleri için örnek hizmet kapsamları.`;
  const packages =
    serviceDetails?.packages.map((item) => ({
      title: fillTemplate(item.title, city, service),
      description: fillTemplate(item.description, city, service),
    })) || [];

  const faqItems =
    serviceDetails?.faqs.map((item) => ({
      question: fillTemplate(item.question, city, service),
      answer: fillTemplate(item.answer, city, service),
    })) || [
      {
        question: `${city.name} içinde ${service.name.toLowerCase()} hizmeti veriyor musunuz?`,
        answer: `Evet, ${city.name} içinde profesyonel ${service.name.toLowerCase()} hizmeti sunuyoruz.`,
      },
    ];

  const cta = serviceDetails
    ? {
        title: fillTemplate(serviceDetails.cta.title, city, service),
        description: fillTemplate(serviceDetails.cta.description, city, service),
        primaryLabel: fillTemplate(serviceDetails.cta.primaryLabel, city, service),
        secondaryLabel: fillTemplate(serviceDetails.cta.secondaryLabel, city, service),
      }
    : {
        title: `${city.name} için hızlı teklif alın`,
        description: `${city.name} içinde ${service.name.toLowerCase()} için ihtiyacınıza uygun çözümü birlikte netleştirelim.`,
        primaryLabel: "Hemen Ara",
        secondaryLabel: "İletişim Formuna Git",
      };

  const stats: ServiceStatItem[] = [
    { label: "Tamamlanan Proje", value: siteConfig.stats.projects },
    { label: "Sektör Deneyimi", value: siteConfig.stats.experience },
    { label: "Memnuniyet", value: siteConfig.stats.satisfaction },
    { label: "Hizmet Bölgeleri", value: `${siteConfig.serviceCityCount} Şehir` },
  ];

  const sameCityOtherServices = services.flatMap((item) => {
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

  const sameServiceOtherCities = cities
    .filter((item) => item.slug !== city.slug)
    .slice(0, 12)
    .flatMap((item) => {
      const href = getCityServicePath(item.slug, service.slug);

      if (!href) {
        return [];
      }

      return {
        href,
        label: `${item.name} ${service.name}`,
        description: `${service.name} hizmetinin ${item.name} sayfasına geçin.`,
      };
    });

  return {
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
    sameServiceOtherCities,
  };
}
