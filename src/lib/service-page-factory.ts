import type { InternalLinkItem } from "@/components/InternalLinkSection";
import type { ServiceFAQItem } from "@/components/service-page/ServiceFAQ";
import type { ServiceStatItem } from "@/components/service-page/ServiceStats";
import type { FaqCollectionKey } from "@/data/seo/faq-bank";
import { getFaqItemsByKeys } from "@/data/seo/faq-bank";
import { getSeoCityBySlug } from "@/data/seo/cities";
import { getDistrictsByCitySlug, getPrimaryDistrictsByCitySlug } from "@/data/seo/districts";
import { getApprovedDistrictServiceParams } from "@/data/seo/istanbul-district-content";
import { getPainPointsBySlugs } from "@/data/seo/pain-points";
import { getTrustElement } from "@/data/seo/trust-elements";
import { cityContent } from "@/data/seo-content/cities";
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
import { getBusinessModelForService, getSeoServiceBySlug, services } from "@/data/services";
import { siteConfig } from "@/data/site-config";
import { getPrimaryCityServicePath } from "@/lib/routes";
import { getHighLtvSegmentsForService, sortServicesByBusinessPriority } from "@/lib/seo/page-factory";

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
    items: {
      title: string;
      description: string;
    }[];
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
  commercial: {
    title: string;
    description: string;
    audienceItems: string[];
    includedItems: string[];
    urgencyTitle: string;
    urgencyBody: string;
    trustTitle: string;
    trustItems: string[];
  };
  painPoints: {
    title: string;
    description: string;
    items: {
      slug: string;
      label: string;
      painStatement: string;
      businessImpact: string;
      recommendedCtaAngle: string;
    }[];
  };
  segmentFit: {
    title: string;
    description: string;
    items: {
      slug: string;
      name: string;
      summary: string;
      decisionMakerLabel: string;
      trustAngle: string;
      ctaAngle: string;
      commonServices: string[];
    }[];
  };
  localCoverage: {
    title: string;
    description: string;
    note?: string;
    schemaAreaServed: string;
    districts: {
      name: string;
      slug: string;
      citySlug: string;
      href?: string;
    }[];
  };
  cta: {
    title: string;
    description: string;
    primaryLabel: string;
    secondaryLabel: string;
    whatsappLabel: string;
    whatsappHref: string;
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

/**
 * Single source of truth for intent labels used in metadata titles.
 * Each business intent maps to exactly one Turkish label.
 * "installation" is intentionally absent — installation service names already contain their intent.
 */
const INTENT_LABELS: Partial<Record<string, string>> = {
  maintenance: "Periyodik Bakım",
  monitoring: "Uzaktan İzleme",
  "technical-service": "Teknik Servis",
  "fault-repair": "Arıza Tespiti ve Onarım",
  solution: "Keşif ve Projelendirme",
};

/**
 * Normalized service names with intent-overlapping words removed.
 * Only services whose `name` would produce duplicate words when combined
 * with INTENT_LABELS are listed here. Unlisted services use `service.name` as-is.
 */
const METADATA_CLEAN_NAMES: Record<string, string> = {
  // solution — shorten for title length
  "apartman-site-guvenlik-sistemi": "Site Güvenlik Sistemi",
  "fabrika-depo-guvenlik-sistemi": "Fabrika Güvenlik Sistemi",
  "depo-guvenlik-sistemi-kurulumu": "Depo Güvenlik Sistemi",
  "plaza-guvenlik-sistemi-kurulumu": "Plaza Güvenlik Sistemi",
  "avm-guvenlik-sistemi-cozumleri": "AVM Güvenlik Sistemi",
  // maintenance — strip bakım/sözleşmesi/bakımı
  "bakim-servis-uzaktan-izleme": "Güvenlik Sistemi Servis",
  "kamera-sistemi-bakim-sozlesmesi": "Kamera Sistemi",
  "yangin-alarm-bakim-sozlesmesi": "Yangın Alarm Sistemi",
  "guvenlik-sistemi-bakim-sozlesmesi": "Güvenlik Sistemi Sözleşmeli",
  "site-kamera-sistemi-bakim": "Site Kamera Sistemi",
  "fabrika-guvenlik-sistemi-bakim": "Fabrika Güvenlik Sistemi",
  "alarm-sistemi-bakim": "Alarm Sistemi",
  // technical-service — strip teknik servis / servisi
  "guvenlik-sistemi-teknik-servis": "Güvenlik Sistemi",
  "nvr-bakim-servisi": "NVR Kayıt Cihazı",
  // fault-repair — strip arıza
  "kamera-ariza-servisi": "Kamera Sistemi",
  // monitoring — strip uzaktan / izleme
  "uzaktan-kamera-izleme": "Kamera Sistemi",
};

function getCleanName(service: ServiceRecord): string {
  return METADATA_CLEAN_NAMES[service.slug] ?? service.name;
}

function assertNoDuplicateWords(text: string, context: string): void {
  const words = text.split(/\s+/);
  for (let i = 1; i < words.length; i++) {
    if (words[i].toLocaleLowerCase("tr-TR") === words[i - 1].toLocaleLowerCase("tr-TR")) {
      throw new Error(
        `[metadata] Ardışık tekrar eden kelime tespit edildi: "${words[i]}" — ${context}\nTam metin: "${text}"`
      );
    }
  }
}

function buildMetadataTitle(city: CityRecord, service: ServiceRecord, businessIntent?: string): string {
  const cleanName = getCleanName(service);
  const intentLabel = businessIntent ? INTENT_LABELS[businessIntent] : undefined;

  const title = intentLabel
    ? `${city.name} ${cleanName} ${intentLabel}`
    : `${city.name} ${service.name}`;

  assertNoDuplicateWords(title, `title — ${service.slug}`);
  return title;
}

function buildMetaDescription(
  city: CityRecord,
  service: ServiceRecord,
  metadataIntent: string | undefined,
  metadataTargets: string[],
): string {
  const intent = metadataIntent || service.name.toLocaleLowerCase("tr-TR");
  const ctaShort = "Ücretsiz keşif ve hızlı teklif alın.";
  const ctaLong = "Profesyonel ekip, ücretsiz keşif ve hızlı teklif için hemen arayın.";

  // Try with 3 targets first, fall back to 2 if description exceeds 160 chars
  for (const count of [3, 2]) {
    const targets = metadataTargets.slice(0, count);
    if (targets.length === 0) break;
    const targetText = formatNaturalList(targets);
    const base = `${city.name} içinde ${targetText} için ${intent} sunuyoruz. `;
    // Prefer the longer CTA when it fits under 160 chars
    const withLong = base + ctaLong;
    if (withLong.length <= 160) {
      assertNoDuplicateWords(withLong, `description — ${service.slug}`);
      return withLong;
    }
    const withShort = base + ctaShort;
    if (withShort.length <= 160) {
      assertNoDuplicateWords(withShort, `description — ${service.slug}`);
      return withShort;
    }
  }

  const description = `${city.name} içinde ${intent} sunuyoruz. ${ctaShort}`;
  assertNoDuplicateWords(description, `description — ${service.slug}`);
  return description;
}

function getSortedDistricts(citySlug: string) {
  const turkishCollator = new Intl.Collator("tr");
  return [...(cityContent[citySlug]?.districts || [])].sort((a, b) => turkishCollator.compare(a, b));
}

function getDecisionMakerLabel(decisionMakerType: string) {
  switch (decisionMakerType) {
    case "site-management-board":
      return "Site yönetimi / yönetim kurulu";
    case "facility-manager":
      return "Tesis veya teknik yönetim";
    case "operations-manager":
      return "Operasyon veya saha yönetimi";
    case "procurement":
      return "Satın alma";
    case "store-operations":
      return "Mağaza operasyon yönetimi";
    case "corporate-admin":
      return "İdari işler / kurumsal yönetim";
    default:
      return "İşletme yetkilisi";
  }
}

function buildUrgencyBody(
  city: CityRecord,
  service: ServiceRecord,
  businessIntent: string | undefined,
  leadPriority: string | undefined,
  painPointSummary?: string
) {
  if (businessIntent === "fault-repair") {
    return `${city.name} içinde ${service.name.toLocaleLowerCase("tr-TR")} taleplerinde kayıt veya görüntü kesintisi uzadıkça güvenlik açığı büyür. Belirti bazlı hızlı teşhis ve yerinde müdahale planı bu yüzden kritik hale gelir.`;
  }

  if (businessIntent === "maintenance" || businessIntent === "monitoring") {
    return `${city.name} içinde ${service.name.toLocaleLowerCase("tr-TR")} ihtiyacını ertelemek kayıt sürekliliği, cihaz sağlığı ve uzaktan erişim tarafında biriken riskleri artırır. Planlı bakım ve hızlı kontrol uzun vadeli servis maliyetini düşürür.`;
  }

  if (businessIntent === "technical-service") {
    return `${city.name} içinde ${service.name.toLocaleLowerCase("tr-TR")} ihtiyacında doğru teşhis geciktiğinde aynı arıza tekrar eder ve saha kesintisi uzar. Sorunun kaynağını hızla netleştirmek bu yüzden ilk adımdır.`;
  }

  if (leadPriority === "strategic") {
    return `${city.name} içinde bu hizmet çoğu zaman daha büyük bir güvenlik yatırımının başlangıcıdır. ${painPointSummary ?? "Doğru kapsam ve bakım devamlılığı"} netleşmeden verilen kararlar sonradan ek maliyet ve yeniden iş çıkarabilir.`;
  }

  return `${city.name} içinde ${service.name.toLocaleLowerCase("tr-TR")} kararını geciktirmek kör nokta, kayıt sürekliliği veya erişim güvenliği gibi kritik riskleri büyütebilir. Doğru keşif ve hızlı teklif süreci daha kontrollü bir kurulum sağlar.`;
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
  const seoCity = getSeoCityBySlug(city.slug);
  const serviceDetails = serviceContent[service.slug];
  const seoService = getSeoServiceBySlug(service.slug);
  const businessModel = seoService ? getBusinessModelForService(seoService) : null;
  const servicePackages = packagesContent[service.slug];
  const serviceUseCases = useCaseContent[service.slug];
  const imageEntry = getServiceImageEntry(service.slug);
  const servicePainPoints = getPainPointsBySlugs(seoService?.painPointSlugs ?? []);
  const primarySegments = getHighLtvSegmentsForService(service.slug).slice(0, 3);
  const serviceFaqItems = getFaqItemsByKeys([
    ...(seoService?.faqKeys ?? ([`service:${service.slug}`] as FaqCollectionKey[])),
    ...primarySegments.slice(0, 1).map((segment) => `segment:${segment.slug}` as FaqCollectionKey),
    ...servicePainPoints.slice(0, 1).map((painPoint) => `issue:${painPoint.slug}` as FaqCollectionKey),
  ]);
  const trustElement =
    getTrustElement(seoService?.trustElementKey ?? "installation") ??
    getTrustElement("installation")!;

  const districts = getSortedDistricts(city.slug);
  const allCityDistricts = getDistrictsByCitySlug(city.slug);
  const primaryDistricts = getPrimaryDistrictsByCitySlug(city.slug);
  const benefits = serviceDetails?.benefits.map((item) => fillTemplate(item, city, service)) || [];
  const process = serviceDetails?.process.map((item) => fillTemplate(item, city, service)) || [];
  const useCases =
    serviceUseCases?.items.map((item) => ({
      title: fillTemplate(item.title, city, service),
      description: fillTemplate(item.description, city, service),
    })) || [];
  const faqItems =
    serviceFaqItems.map((item) => ({
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
  const fallbackUseCases = servicePainPoints.slice(0, 4).map((painPoint) => ({
    title: painPoint.painStatement,
    description: painPoint.businessImpact,
  }));
  const finalMetaDescription = buildMetaDescription(
    city,
    service,
    serviceDetails?.metadataIntent,
    metadataTargets,
  );
  const localCoverageSchemaArea =
    primaryDistricts.length > 0
      ? `${city.name} ve ${formatNaturalList(primaryDistricts.slice(0, 3).map((district) => district.name))}`
      : city.name;
  const commercialAudienceItems =
    primarySegments.length > 0
      ? primarySegments.map((segment) => `${segment.name}: ${segment.commonPainPoints[0] ?? segment.trustAngle}`)
      : (seoCity?.serviceAreas ?? [])
        .slice(0, 3)
        .map((area) => `${city.name} içinde ${area} için planlı ${service.name.toLocaleLowerCase("tr-TR")} desteği`);
  const guidanceItems = businessModel?.businessGuidance.emphasisPoints.slice(0, 4) ?? [];
  const includedItems =
    guidanceItems.length > 0 ? guidanceItems : benefits.slice(0, 4).length > 0 ? benefits.slice(0, 4) : process.slice(0, 4);
  const urgencyBody = buildUrgencyBody(
    city,
    service,
    businessModel?.businessIntent,
    businessModel?.leadPriority,
    servicePainPoints[0]?.businessImpact
  );
  const segmentFitItems = primarySegments.map((segment) => ({
    slug: segment.slug,
    name: segment.name,
    summary: segment.commonPainPoints[0] ?? segment.trustAngle,
    decisionMakerLabel: getDecisionMakerLabel(segment.decisionMakerType),
    trustAngle: segment.trustAngle,
    ctaAngle: segment.recommendedCtaAngle,
    commonServices: segment.commonServiceSlugs
      .map((serviceSlug) => services.find((item) => item.slug === serviceSlug)?.name)
      .filter((item): item is string => Boolean(item))
      .slice(0, 3),
  }));
  const whatsappMessage =
    businessModel?.leadPriority === "urgent"
      ? `${city.name} ${service.name} için acil destek almak istiyorum.`
      : `${city.name} ${service.name} için bilgi, keşif ve fiyat almak istiyorum.`;

  const primaryCtaLabel =
    businessModel?.businessIntent === "maintenance"
      ? "Bakım planı talep edin"
      : businessModel?.businessIntent === "technical-service" ||
        businessModel?.businessIntent === "fault-repair"
        ? "Servis talebi oluşturun"
        : "Keşif ve teklif alın";

  const stats: ServiceStatItem[] = [
    { label: "Tamamlanan Proje", value: siteConfig.stats.projects },
    { label: "Sektör Deneyimi", value: siteConfig.stats.experience },
    { label: "Memnuniyet", value: siteConfig.stats.satisfaction },
    { label: "Hizmet Bölgeleri", value: `${siteConfig.serviceCityCount} Şehir` },
  ];

  const relatedServices = sortServicesByBusinessPriority(services).flatMap((item) => {
    if (item.slug === service.slug) {
      return [];
    }

    const href = getPrimaryCityServicePath(city.slug, item.slug);

    if (!href) {
      return [];
    }

    return {
      href,
      label: `${city.name} ${item.name}`,
      description: item.shortDescription,
    };
  });

  return {
    meta: {
      title: buildMetadataTitle(city, service, businessModel?.businessIntent),
      description: finalMetaDescription,
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
      items: useCases.length > 0 ? useCases : fallbackUseCases,
    },
    packages: {
      title: fillTemplate(servicePackages?.title || "Örnek paketler", city, service),
      description: fillTemplate(servicePackages?.description || "", city, service),
      localContext: fillTemplate(servicePackages?.localContext || "", city, service),
      items: packageItems,
    },
    faq: {
      title: "Sık Sorulan Sorular",
      items: faqItems,
    },
    commercial: {
      title: `${city.name} içinde ${service.name} hizmetini kimler tercih ediyor?`,
      description:
        businessModel?.businessGuidance.trustAngle ??
        `${city.name} içinde ${service.name.toLocaleLowerCase("tr-TR")} taleplerinde doğru kapsam, hızlı saha planı ve güven veren teslim süreci öne çıkar.`,
      audienceItems: commercialAudienceItems,
      includedItems,
      urgencyTitle:
        businessModel?.leadPriority === "urgent"
          ? "Neden hızlı müdahale önemli?"
          : "Neden bekletmeden planlamak gerekir?",
      urgencyBody,
      trustTitle: trustElement.title,
      trustItems: trustElement.bullets,
    },
    painPoints: {
      title: `${service.name} hizmetinde en sık çözdüğümüz sorunlar`,
      description:
        servicePainPoints[0]?.businessImpact ??
        `${city.name} içinde bu hizmet genelde saha görünürlüğü, kayıt sürekliliği ve hızlı müdahale ihtiyacıyla birlikte talep edilir.`,
      items: servicePainPoints.slice(0, 4).map((painPoint) => ({
        slug: painPoint.slug,
        label: painPoint.label,
        painStatement: painPoint.painStatement,
        businessImpact: painPoint.businessImpact,
        recommendedCtaAngle: painPoint.recommendedCtaAngle,
      })),
    },
    segmentFit: {
      title: `${city.name} içinde bu hizmet hangi işletme tiplerinde daha kritik hale gelir?`,
      description:
        primarySegments.length > 0
          ? `${city.name} içinde aynı hizmet farklı segmentlerde farklı satın alma davranışı üretir. Aşağıdaki özetler teklif ve keşif dilini buna göre netleştirir.`
          : `${city.name} içinde hizmet kapsamını mekan tipi, operasyon riski ve bakım beklentisine göre şekillendiriyoruz.`,
      items: segmentFitItems,
    },
    localCoverage: {
      title: "Hizmet Verdiğimiz İlçeler",
      description: `${city.name} genelinde keşif, kurulum, montaj ve teknik servis desteği verdiğimiz ilçeler aşağıdadır.`,
      note: cityDetails?.districtsNote ?? seoCity?.serviceAreaEmphasis,
      schemaAreaServed: localCoverageSchemaArea,
      districts: (() => {
        const approvedSet = new Set(
          getApprovedDistrictServiceParams()
            .filter((p) => p.city === city.slug && p.service === service.slug)
            .map((p) => p.district),
        );
        return districts.map((districtName) => {
          const districtRecord = allCityDistricts.find((d) => d.name === districtName);
          const slug =
            districtRecord?.slug ??
            districtName.toLocaleLowerCase("tr-TR").replace(/\s+/g, "-");
          const hasApprovedPage = approvedSet.has(slug);
          return {
            name: districtName,
            slug,
            citySlug: city.slug,
            href: hasApprovedPage
              ? `/${city.slug}/${slug}/${service.slug}`
              : undefined,
          };
        });
      })(),
    },
    cta: {
      title: fillTemplate(serviceDetails?.ctaTitle || `${city.name} için teklif alın`, city, service),
      description: fillTemplate(
        serviceDetails?.ctaDescription || `${city.name} içindeki projeniz için bizimle iletişime geçin.`,
        city,
        service
      ),
      primaryLabel: primaryCtaLabel,
      secondaryLabel: "İletişim Sayfasına Git",
      whatsappLabel: "WhatsApp ile Yazın",
      whatsappHref: `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`,
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
