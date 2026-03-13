import type { InternalLinkItem } from "@/components/InternalLinkSection";
import type { ServiceFAQItem } from "@/components/service-page/ServiceFAQ";
import type { ServiceStatItem } from "@/components/service-page/ServiceStats";
import { cityContent } from "@/data/seo-content/cities";
import { faqContent } from "@/data/seo-content/faq";
import {
  fallbackServiceImages,
  serviceImages,
  type ServiceImageAspect,
  type ServiceImageRegistryEntry,
  type ServiceImageSource,
} from "@/data/seo-content/images";
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

export interface ServiceSEOContentBlock {
  title: string;
  paragraphs: string[];
  items?: string[];
}

export interface ServicePageImage {
  src: string;
  alt: string;
  title?: string;
  caption?: string;
  aspect: ServiceImageAspect;
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
  seoContent: {
    blocks: ServiceSEOContentBlock[];
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
  images: {
    hero: ServicePageImage | null;
    support: ServicePageImage[];
    useCases: ServicePageImage[];
    cta: ServicePageImage | null;
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

function getServiceImageEntry(serviceSlug: string): ServiceImageRegistryEntry {
  return {
    hero: serviceImages[serviceSlug]?.hero || fallbackServiceImages.hero,
    support: serviceImages[serviceSlug]?.support || fallbackServiceImages.support || [],
    useCases: serviceImages[serviceSlug]?.useCases || fallbackServiceImages.useCases || [],
    cta: serviceImages[serviceSlug]?.cta || fallbackServiceImages.cta,
  };
}

function buildImageAltText(
  city: CityRecord,
  service: ServiceRecord,
  source: ServiceImageSource
) {
  return `${city.name} ${service.name.toLocaleLowerCase("tr")} için ${source.subject}`;
}

function mapServiceImage(
  city: CityRecord,
  service: ServiceRecord,
  source?: ServiceImageSource
): ServicePageImage | null {
  if (!source) {
    return null;
  }

  return {
    src: source.src,
    alt: buildImageAltText(city, service, source),
    title: source.title,
    caption: source.caption,
    aspect: source.aspect || "landscape",
  };
}

function isServicePageImage(value: ServicePageImage | null): value is ServicePageImage {
  return value !== null;
}

function getSEOContentBlocks(city: CityRecord): ServiceSEOContentBlock[] {
  return [
    {
      title: "Güvenlik Kamera Sistemi Kurulumu Nedir?",
      paragraphs: [
        `${city.name} içinde güvenlik kamera sistemi kurulumu, ev, işyeri, depo, mağaza ve fabrika gibi alanların 7/24 izlenmesini sağlayan profesyonel güvenlik çözümüdür.`,
        "Modern IP kamera sistemleri sayesinde görüntüler kayıt cihazına kaydedilir ve aynı zamanda telefon, tablet veya bilgisayardan uzaktan izlenebilir.",
        "İşletmeler için ip kamera kurulumu ve güvenlik kamerası montajı süreci, kesintisiz takip ile uzaktan izleme kamera sistemi ihtiyacını aynı yapıda karşılar.",
        "Günümüzde en çok kullanılan sistemler:",
        "Bu sistemler işletmelerde güvenliği artırırken aynı zamanda caydırıcı bir etki yaratır. Kablosuz güvenlik kamerası seçenekleri de belirli alanlarda esnek kurulum avantajı sunar.",
      ],
      items: [
        "IP kamera sistemleri",
        "PoE kamera sistemleri",
        "NVR kayıt cihazı kullanılan sistemler",
        "Kablosuz WiFi kamera sistemleri",
      ],
    },
    {
      title: "Kamera Sistemi Kurulumu Nerelerde Kullanılır?",
      paragraphs: [
        `${city.name} içinde profesyonel kamera sistemleri birçok farklı alanda kullanılır:`,
        "Bu alanlarda kullanılan sistemler gece görüşü, hareket algılama ve uzaktan izleme gibi özellikler içerir. Apartman kamera sistemi, mağaza kamera sistemi ve otopark kamera sistemi projelerinde farklı görüş açıları ve kayıt senaryoları planlanır.",
      ],
      items: [
        "işyeri kamera sistemi kurulumu",
        "depo güvenlik kamera sistemi",
        "mağaza kamera sistemi kurulumu",
        "apartman kamera sistemi kurulumu",
        "site güvenlik kamera sistemi",
        "fabrika kamera sistemi kurulumu",
        "otopark kamera sistemi",
      ],
    },
    {
      title: "Kamera Sistemi Kurulumu Fiyatını Etkileyen Faktörler",
      paragraphs: [
        "Kamera sistemi kurulumu fiyatı aşağıdaki faktörlere göre değişir:",
        `${city.name} içinde kamera sistemi kurulumu fiyatı değerlendirilirken keşif, cihaz seçimi ve montaj senaryosu birlikte ele alınır. Profesyonel keşif yapılmadan net fiyat vermek doğru değildir.`,
      ],
      items: [
        "kamera sayısı",
        "kamera çözünürlüğü (2MP / 4MP / 8MP)",
        "kayıt cihazı kapasitesi",
        "kablolama mesafesi",
        "gece görüş özellikleri",
        "montaj yapılacak alanın büyüklüğü",
      ],
    },
    {
      title: "IP Kamera Sistemi Nasıl Çalışır?",
      paragraphs: [
        "IP kamera sistemleri internet protokolü üzerinden çalışan modern güvenlik sistemleridir.",
        "Bu sistemlerde kameralar görüntüyü NVR kayıt cihazına gönderir.",
        "Kayıt cihazı görüntüleri depolar ve aynı zamanda mobil uygulama üzerinden izlenmesini sağlar.",
        `${city.name} projelerinde tercih edilen güvenlik kamera sistemi kurulumu çözümleri, özellikle depo kamera sistemi ve fabrika kamera sistemi ihtiyaçlarında yüksek çözünürlük ile merkezi yönetim avantajı sağlar.`,
        "IP kamera sistemlerinin avantajları:",
      ],
      items: [
        "yüksek çözünürlük",
        "uzaktan izleme",
        "hareket algılama",
        "uzun kayıt süresi",
        "kolay genişletilebilir yapı",
      ],
    },
    {
      title: "Kamera Sistemi Kaç Gün Kayıt Yapar?",
      paragraphs: [
        "Kamera sistemlerinde kayıt süresi aşağıdaki faktörlere bağlıdır:",
        "Örneğin 2 TB harddisk kullanılan 4 kameralı bir sistem ortalama 20-30 gün kayıt yapabilir.",
      ],
      items: [
        "harddisk kapasitesi",
        "kamera sayısı",
        "kayıt çözünürlüğü",
        "sürekli kayıt veya hareket kayıt modu",
      ],
    },
  ];
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
  const imageEntry = getServiceImageEntry(service.slug);

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
  const heroImage = mapServiceImage(city, service, imageEntry.hero);
  const supportImages =
    imageEntry.support?.map((item) => mapServiceImage(city, service, item)).filter(isServicePageImage) || [];
  const useCaseImages =
    imageEntry.useCases?.map((item) => mapServiceImage(city, service, item)).filter(isServicePageImage) || [];
  const ctaImage = mapServiceImage(city, service, imageEntry.cta);

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
    seoContent: {
      blocks: getSEOContentBlocks(city),
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
    images: {
      hero: heroImage,
      support: supportImages,
      useCases: useCaseImages,
      cta: ctaImage,
    },
    districts,
    relatedServices,
  };
}
