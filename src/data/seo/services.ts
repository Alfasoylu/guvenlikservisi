import { serviceFaqBank } from "./faq-bank";
import { primaryKeywordThemeByServiceSlug } from "./keywords";
import { schemaTypeByServiceSlug, type SeoSchemaType } from "./schema-map";
import { serviceContent } from "../seo-content/services";

export interface ServiceRouteRecord {
  slug: string;
  name: string;
  shortDescription: string;
}

export type SeoServiceIntent =
  | "installation"
  | "solution"
  | "maintenance"
  | "technical-service"
  | "monitoring";

export type SeoCtaStyle = "quote" | "assessment" | "maintenance" | "technical-service";

export interface SeoService extends ServiceRouteRecord {
  intentType: SeoServiceIntent;
  primaryKeywordTheme: string;
  leadValue: "high" | "medium";
  recurringRevenue: boolean;
  schemaType: SeoSchemaType;
  ctaStyle: SeoCtaStyle;
  heroTitlePattern: string;
  faqKeys: string[];
  internalLinkHints: string[];
  metadataTargets: string[];
}

const serviceRouteRecords: ServiceRouteRecord[] = [
  {
    slug: "kamera-sistemi-kurulumu",
    name: "Kamera Sistemi Kurulumu",
    shortDescription:
      "Profesyonel IP kamera sistemi kurulumu, keşif, montaj ve devreye alma hizmeti.",
  },
  {
    slug: "alarm-sistemi-kurulumu",
    name: "Alarm Sistemi Kurulumu",
    shortDescription:
      "Ev, işyeri ve ticari alanlar için alarm sistemi kurulumu ve devreye alma hizmeti.",
  },
  {
    slug: "yangin-alarm-sistemi-kurulumu",
    name: "Yangın Alarm Sistemi Kurulumu",
    shortDescription:
      "Yasal gerekliliklere uygun yangın alarm sistemi kurulumu ve proje hizmeti.",
  },
  {
    slug: "kartli-gecis-sistemi-kurulumu",
    name: "Kartlı Geçiş Sistemi Kurulumu",
    shortDescription:
      "Personel, apartman ve işyeri girişleri için kartlı geçiş sistemi kurulumu.",
  },
  {
    slug: "apartman-site-guvenlik-sistemi",
    name: "Apartman ve Site Güvenlik Sistemi",
    shortDescription:
      "Apartman ve siteler için kamera, geçiş ve çevre güvenliği çözümleri.",
  },
  {
    slug: "isyeri-guvenlik-sistemi",
    name: "İşyeri Güvenlik Sistemi",
    shortDescription:
      "Ofis, mağaza ve ticari işletmeler için güvenlik sistemi kurulumu.",
  },
  {
    slug: "fabrika-depo-guvenlik-sistemi",
    name: "Fabrika ve Depo Güvenlik Sistemi",
    shortDescription:
      "Fabrika, depo ve sanayi tesisleri için profesyonel güvenlik çözümleri.",
  },
  {
    slug: "bakim-servis-uzaktan-izleme",
    name: "Bakım, Servis ve Uzaktan İzleme",
    shortDescription:
      "Kurulu sistemler için bakım, servis ve uzaktan izleme desteği.",
  },
  {
    slug: "kamera-sistemi-bakim-sozlesmesi",
    name: "Kamera Sistemi Bakım Sözleşmesi",
    shortDescription:
      "Periyodik kontrol, kayıt sağlığı takibi ve arıza riskini azaltan bakım sözleşmesi hizmeti.",
  },
  {
    slug: "guvenlik-sistemi-teknik-servis",
    name: "Güvenlik Sistemi Teknik Servis",
    shortDescription:
      "Mevcut kamera, alarm ve geçiş kontrol sistemleri için hızlı teknik servis ve saha müdahale desteği.",
  },
  {
    slug: "kamera-ariza-servisi",
    name: "Kamera Arıza Servisi",
    shortDescription:
      "Görüntü, kayıt ve bağlantı problemleri yaşayan kamera sistemleri için arıza tespit ve onarım desteği.",
  },
  {
    slug: "yangin-alarm-bakim-sozlesmesi",
    name: "Yangın Alarm Bakım Sözleşmesi",
    shortDescription:
      "Periyodik test, dedektör kontrolü ve panel sürekliliği için yangın alarm bakım hizmeti.",
  },
  {
    slug: "uzaktan-kamera-izleme",
    name: "Uzaktan Kamera İzleme",
    shortDescription:
      "Merkezi izleme, mobil erişim ve operasyon takibi için uzaktan kamera izleme hizmeti.",
  },
];

const intentTypeByServiceSlug: Record<string, SeoServiceIntent> = {
  "kamera-sistemi-kurulumu": "installation",
  "alarm-sistemi-kurulumu": "installation",
  "yangin-alarm-sistemi-kurulumu": "installation",
  "kartli-gecis-sistemi-kurulumu": "installation",
  "apartman-site-guvenlik-sistemi": "solution",
  "isyeri-guvenlik-sistemi": "solution",
  "fabrika-depo-guvenlik-sistemi": "solution",
  "bakim-servis-uzaktan-izleme": "maintenance",
  "kamera-sistemi-bakim-sozlesmesi": "maintenance",
  "guvenlik-sistemi-teknik-servis": "technical-service",
  "kamera-ariza-servisi": "technical-service",
  "yangin-alarm-bakim-sozlesmesi": "maintenance",
  "uzaktan-kamera-izleme": "monitoring",
};

const ctaStyleByServiceSlug: Record<string, SeoCtaStyle> = {
  "kamera-sistemi-kurulumu": "quote",
  "alarm-sistemi-kurulumu": "quote",
  "yangin-alarm-sistemi-kurulumu": "assessment",
  "kartli-gecis-sistemi-kurulumu": "assessment",
  "apartman-site-guvenlik-sistemi": "assessment",
  "isyeri-guvenlik-sistemi": "assessment",
  "fabrika-depo-guvenlik-sistemi": "assessment",
  "bakim-servis-uzaktan-izleme": "maintenance",
  "kamera-sistemi-bakim-sozlesmesi": "maintenance",
  "guvenlik-sistemi-teknik-servis": "technical-service",
  "kamera-ariza-servisi": "technical-service",
  "yangin-alarm-bakim-sozlesmesi": "maintenance",
  "uzaktan-kamera-izleme": "assessment",
};

const recurringRevenueServiceSlugs = new Set([
  "bakim-servis-uzaktan-izleme",
  "kamera-sistemi-bakim-sozlesmesi",
  "yangin-alarm-bakim-sozlesmesi",
  "uzaktan-kamera-izleme",
]);

const mediumLeadServiceSlugs = new Set([
  "apartman-site-guvenlik-sistemi",
  "kamera-ariza-servisi",
  "yangin-alarm-bakim-sozlesmesi",
  "uzaktan-kamera-izleme",
]);

export const seoServices: SeoService[] = serviceRouteRecords.map((service) => {
  const content = serviceContent[service.slug];

  return {
    ...service,
    intentType: intentTypeByServiceSlug[service.slug] ?? "installation",
    primaryKeywordTheme:
      primaryKeywordThemeByServiceSlug[service.slug] ??
      content?.metadataIntent ??
      service.name.toLocaleLowerCase("tr-TR"),
    leadValue: mediumLeadServiceSlugs.has(service.slug) ? "medium" : "high",
    recurringRevenue: recurringRevenueServiceSlugs.has(service.slug),
    schemaType: schemaTypeByServiceSlug[service.slug] ?? "Service",
    ctaStyle: ctaStyleByServiceSlug[service.slug] ?? "quote",
    heroTitlePattern: "{city} {service} Hizmeti",
    faqKeys: serviceFaqBank[service.slug] ? [service.slug] : [],
    internalLinkHints: ["city-hub", "same-city-related-services", "same-service-other-cities"],
    metadataTargets: content?.metadataTargets ?? [],
  };
});

export const services: ServiceRouteRecord[] = seoServices.map(({ slug, name, shortDescription }) => ({
  slug,
  name,
  shortDescription,
}));

export function getSeoServiceBySlug(serviceSlug: string) {
  return seoServices.find((service) => service.slug === serviceSlug);
}

export function getServiceRouteRecord(serviceSlug: string) {
  return services.find((service) => service.slug === serviceSlug);
}
