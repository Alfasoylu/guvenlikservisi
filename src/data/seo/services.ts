import type { FaqCollectionKey } from "./faq-bank";
import { serviceFaqBank } from "./faq-bank";
import { getKeywordOpportunitySummaryForService, primaryKeywordThemeByServiceSlug } from "./keywords";
import type { PainPointSlug } from "./pain-points";
import { painPointSlugsByServiceSlug } from "./pain-points";
import { schemaTypeByServiceSlug, type SeoSchemaType } from "./schema-map";
import type { HighLtvSegmentSlug } from "./segments";
import type { TrustIntentKey } from "./trust-elements";
import { serviceContent } from "../seo-content/services";

export interface ServiceRouteRecord {
  slug: string;
  name: string;
  shortDescription: string;
}

export type ServiceBusinessIntent =
  | "installation"
  | "solution"
  | "maintenance"
  | "technical-service"
  | "fault-repair"
  | "monitoring";

export type SeoServiceIntent = ServiceBusinessIntent;

export type SeoCtaStyle = "quote" | "assessment" | "maintenance" | "technical-service";

export type ServiceRevenueModel = "one-time" | "recurring" | "hybrid";

export type ServiceLeadPriority = "high" | "urgent" | "strategic";

export type ServiceRecurringPotential = "low" | "medium" | "high";

export interface ServiceBusinessGuidance {
  metaAngle: string;
  trustAngle: string;
  ctaAngle: string;
  emphasisPoints: string[];
  upsellPaths: string[];
}

export interface ServiceBusinessModel {
  businessIntent: ServiceBusinessIntent;
  revenueModel: ServiceRevenueModel;
  recurringRevenue: boolean;
  oneTimeRevenue: boolean;
  recurringRevenuePotential: ServiceRecurringPotential;
  leadPriority: ServiceLeadPriority;
  businessPriorityScore: 1 | 2 | 3 | 4 | 5;
  targetSegmentSlugs: HighLtvSegmentSlug[];
  priorityLinkSlugs: string[];
  keywordThemeTags: string[];
  painPointSlugs: PainPointSlug[];
  businessGuidance: ServiceBusinessGuidance;
}

export interface SeoService extends ServiceRouteRecord, ServiceBusinessModel {
  intentType: SeoServiceIntent;
  primaryKeywordTheme: string;
  primaryLeadKeyword: string;
  primaryTrafficKeyword: string | null;
  leadValue: "high" | "medium";
  schemaType: SeoSchemaType;
  ctaStyle: SeoCtaStyle;
  heroTitlePattern: string;
  faqKeys: FaqCollectionKey[];
  painPointSlugs: PainPointSlug[];
  trustElementKey: TrustIntentKey;
  internalLinkHints: string[];
  metadataTargets: string[];
}

const serviceRouteRecords: ServiceRouteRecord[] = [
  {
    slug: "kamera-sistemi-kurulumu",
    name: "Kamera Sistemi Kurulumu",
    shortDescription: "Profesyonel IP kamera sistemi kurulumu, keşif, montaj ve devreye alma hizmeti.",
  },
  {
    slug: "alarm-sistemi-kurulumu",
    name: "Alarm Sistemi Kurulumu",
    shortDescription: "Ev, işyeri ve ticari alanlar için alarm sistemi kurulumu ve devreye alma hizmeti.",
  },
  {
    slug: "yangin-alarm-sistemi-kurulumu",
    name: "Yangın Alarm Sistemi Kurulumu",
    shortDescription: "Yasal gerekliliklere uygun yangın alarm sistemi kurulumu ve proje hizmeti.",
  },
  {
    slug: "kartli-gecis-sistemi-kurulumu",
    name: "Kartlı Geçiş Sistemi Kurulumu",
    shortDescription: "Personel, apartman ve işyeri girişleri için kartlı geçiş sistemi kurulumu.",
  },
  {
    slug: "apartman-site-guvenlik-sistemi",
    name: "Apartman ve Site Güvenlik Sistemi",
    shortDescription: "Apartman ve siteler için kamera, geçiş ve çevre güvenliği çözümleri.",
  },
  {
    slug: "isyeri-guvenlik-sistemi",
    name: "İşyeri Güvenlik Sistemi",
    shortDescription: "Ofis, mağaza ve ticari işletmeler için güvenlik sistemi kurulumu.",
  },
  {
    slug: "fabrika-depo-guvenlik-sistemi",
    name: "Fabrika ve Depo Güvenlik Sistemi",
    shortDescription: "Fabrika, depo ve sanayi tesisleri için profesyonel güvenlik çözümleri.",
  },
  {
    slug: "bakim-servis-uzaktan-izleme",
    name: "Bakım, Servis ve Uzaktan İzleme",
    shortDescription: "Kurulu sistemler için bakım, servis ve uzaktan izleme desteği.",
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
    shortDescription: "Merkezi izleme, mobil erişim ve operasyon takibi için uzaktan kamera izleme hizmeti.",
  },
];

const businessIntentByServiceSlug: Record<string, ServiceBusinessIntent> = {
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
  "kamera-ariza-servisi": "fault-repair",
  "yangin-alarm-bakim-sozlesmesi": "maintenance",
  "uzaktan-kamera-izleme": "monitoring",
};

const revenueModelByServiceSlug: Record<string, ServiceRevenueModel> = {
  "kamera-sistemi-kurulumu": "one-time",
  "alarm-sistemi-kurulumu": "one-time",
  "yangin-alarm-sistemi-kurulumu": "one-time",
  "kartli-gecis-sistemi-kurulumu": "one-time",
  "apartman-site-guvenlik-sistemi": "hybrid",
  "isyeri-guvenlik-sistemi": "hybrid",
  "fabrika-depo-guvenlik-sistemi": "hybrid",
  "bakim-servis-uzaktan-izleme": "recurring",
  "kamera-sistemi-bakim-sozlesmesi": "recurring",
  "guvenlik-sistemi-teknik-servis": "one-time",
  "kamera-ariza-servisi": "one-time",
  "yangin-alarm-bakim-sozlesmesi": "recurring",
  "uzaktan-kamera-izleme": "recurring",
};

const recurringRevenuePotentialByServiceSlug: Record<string, ServiceRecurringPotential> = {
  "kamera-sistemi-kurulumu": "medium",
  "alarm-sistemi-kurulumu": "medium",
  "yangin-alarm-sistemi-kurulumu": "medium",
  "kartli-gecis-sistemi-kurulumu": "medium",
  "apartman-site-guvenlik-sistemi": "high",
  "isyeri-guvenlik-sistemi": "high",
  "fabrika-depo-guvenlik-sistemi": "high",
  "bakim-servis-uzaktan-izleme": "high",
  "kamera-sistemi-bakim-sozlesmesi": "high",
  "guvenlik-sistemi-teknik-servis": "medium",
  "kamera-ariza-servisi": "medium",
  "yangin-alarm-bakim-sozlesmesi": "high",
  "uzaktan-kamera-izleme": "high",
};

const leadPriorityByServiceSlug: Record<string, ServiceLeadPriority> = {
  "kamera-sistemi-kurulumu": "high",
  "alarm-sistemi-kurulumu": "high",
  "yangin-alarm-sistemi-kurulumu": "high",
  "kartli-gecis-sistemi-kurulumu": "high",
  "apartman-site-guvenlik-sistemi": "strategic",
  "isyeri-guvenlik-sistemi": "strategic",
  "fabrika-depo-guvenlik-sistemi": "strategic",
  "bakim-servis-uzaktan-izleme": "strategic",
  "kamera-sistemi-bakim-sozlesmesi": "strategic",
  "guvenlik-sistemi-teknik-servis": "high",
  "kamera-ariza-servisi": "urgent",
  "yangin-alarm-bakim-sozlesmesi": "strategic",
  "uzaktan-kamera-izleme": "strategic",
};

const businessPriorityScoreByServiceSlug: Record<string, 1 | 2 | 3 | 4 | 5> = {
  "kamera-sistemi-kurulumu": 4,
  "alarm-sistemi-kurulumu": 4,
  "yangin-alarm-sistemi-kurulumu": 4,
  "kartli-gecis-sistemi-kurulumu": 3,
  "apartman-site-guvenlik-sistemi": 5,
  "isyeri-guvenlik-sistemi": 5,
  "fabrika-depo-guvenlik-sistemi": 5,
  "bakim-servis-uzaktan-izleme": 5,
  "kamera-sistemi-bakim-sozlesmesi": 5,
  "guvenlik-sistemi-teknik-servis": 4,
  "kamera-ariza-servisi": 5,
  "yangin-alarm-bakim-sozlesmesi": 5,
  "uzaktan-kamera-izleme": 5,
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

const targetSegmentSlugsByServiceSlug: Record<string, HighLtvSegmentSlug[]> = {
  "kamera-sistemi-kurulumu": ["site-yonetimi", "depo", "plaza-ofis"],
  "alarm-sistemi-kurulumu": ["zincir-magaza", "plaza-ofis", "site-yonetimi"],
  "yangin-alarm-sistemi-kurulumu": ["avm", "fabrika", "plaza-ofis"],
  "kartli-gecis-sistemi-kurulumu": ["plaza-ofis", "avm", "zincir-magaza"],
  "apartman-site-guvenlik-sistemi": ["site-yonetimi"],
  "isyeri-guvenlik-sistemi": ["zincir-magaza", "plaza-ofis"],
  "fabrika-depo-guvenlik-sistemi": ["fabrika", "depo"],
  "bakim-servis-uzaktan-izleme": ["site-yonetimi", "fabrika", "depo"],
  "kamera-sistemi-bakim-sozlesmesi": ["site-yonetimi", "fabrika", "depo"],
  "guvenlik-sistemi-teknik-servis": ["site-yonetimi", "fabrika", "plaza-ofis"],
  "kamera-ariza-servisi": ["depo", "zincir-magaza", "site-yonetimi"],
  "yangin-alarm-bakim-sozlesmesi": ["avm", "fabrika", "plaza-ofis"],
  "uzaktan-kamera-izleme": ["site-yonetimi", "fabrika", "zincir-magaza"],
};

const priorityLinkSlugsByServiceSlug: Record<string, string[]> = {
  "kamera-sistemi-kurulumu": [
    "kamera-sistemi-bakim-sozlesmesi",
    "bakim-servis-uzaktan-izleme",
    "uzaktan-kamera-izleme",
    "guvenlik-sistemi-teknik-servis",
  ],
  "alarm-sistemi-kurulumu": [
    "bakim-servis-uzaktan-izleme",
    "yangin-alarm-bakim-sozlesmesi",
    "guvenlik-sistemi-teknik-servis",
    "kartli-gecis-sistemi-kurulumu",
  ],
  "yangin-alarm-sistemi-kurulumu": [
    "yangin-alarm-bakim-sozlesmesi",
    "bakim-servis-uzaktan-izleme",
    "guvenlik-sistemi-teknik-servis",
    "kartli-gecis-sistemi-kurulumu",
  ],
  "kartli-gecis-sistemi-kurulumu": [
    "guvenlik-sistemi-teknik-servis",
    "bakim-servis-uzaktan-izleme",
    "isyeri-guvenlik-sistemi",
    "yangin-alarm-sistemi-kurulumu",
  ],
  "apartman-site-guvenlik-sistemi": [
    "kamera-sistemi-bakim-sozlesmesi",
    "bakim-servis-uzaktan-izleme",
    "uzaktan-kamera-izleme",
    "kamera-sistemi-kurulumu",
  ],
  "isyeri-guvenlik-sistemi": [
    "bakim-servis-uzaktan-izleme",
    "guvenlik-sistemi-teknik-servis",
    "kamera-sistemi-kurulumu",
    "kartli-gecis-sistemi-kurulumu",
  ],
  "fabrika-depo-guvenlik-sistemi": [
    "bakim-servis-uzaktan-izleme",
    "uzaktan-kamera-izleme",
    "guvenlik-sistemi-teknik-servis",
    "kamera-sistemi-bakim-sozlesmesi",
  ],
  "bakim-servis-uzaktan-izleme": [
    "kamera-sistemi-bakim-sozlesmesi",
    "uzaktan-kamera-izleme",
    "guvenlik-sistemi-teknik-servis",
    "kamera-ariza-servisi",
  ],
  "kamera-sistemi-bakim-sozlesmesi": [
    "bakim-servis-uzaktan-izleme",
    "uzaktan-kamera-izleme",
    "guvenlik-sistemi-teknik-servis",
    "kamera-ariza-servisi",
  ],
  "guvenlik-sistemi-teknik-servis": [
    "kamera-ariza-servisi",
    "bakim-servis-uzaktan-izleme",
    "kamera-sistemi-bakim-sozlesmesi",
    "uzaktan-kamera-izleme",
  ],
  "kamera-ariza-servisi": [
    "guvenlik-sistemi-teknik-servis",
    "bakim-servis-uzaktan-izleme",
    "kamera-sistemi-bakim-sozlesmesi",
    "uzaktan-kamera-izleme",
  ],
  "yangin-alarm-bakim-sozlesmesi": [
    "bakim-servis-uzaktan-izleme",
    "yangin-alarm-sistemi-kurulumu",
    "guvenlik-sistemi-teknik-servis",
    "kartli-gecis-sistemi-kurulumu",
  ],
  "uzaktan-kamera-izleme": [
    "bakim-servis-uzaktan-izleme",
    "kamera-sistemi-bakim-sozlesmesi",
    "fabrika-depo-guvenlik-sistemi",
    "apartman-site-guvenlik-sistemi",
  ],
};

const keywordThemeTagsByServiceSlug: Record<string, string[]> = {
  "kamera-sistemi-kurulumu": ["kurulum", "proje", "kesif", "kamera"],
  "alarm-sistemi-kurulumu": ["kurulum", "guvenlik", "alarm", "teklif"],
  "yangin-alarm-sistemi-kurulumu": ["kurulum", "yangin", "uyum", "teklif"],
  "kartli-gecis-sistemi-kurulumu": ["erisim", "gecis-kontrol", "kurulum", "ofis"],
  "apartman-site-guvenlik-sistemi": ["site", "toplu-proje", "guvenlik-cozumu", "bakim-upsell"],
  "isyeri-guvenlik-sistemi": ["isyeri", "kurumsal", "guvenlik-cozumu", "teklif"],
  "fabrika-depo-guvenlik-sistemi": ["fabrika", "depo", "kurumsal", "bakim-upsell"],
  "bakim-servis-uzaktan-izleme": ["bakim", "sozlesme", "uzaktan-izleme", "sureklilik"],
  "kamera-sistemi-bakim-sozlesmesi": ["bakim-sozlesmesi", "periyodik-kontrol", "kayit-surekliligi"],
  "guvenlik-sistemi-teknik-servis": ["teknik-servis", "saha-mudahalesi", "teshis"],
  "kamera-ariza-servisi": ["ariza", "acil", "no-image", "kayit-problemi"],
  "yangin-alarm-bakim-sozlesmesi": ["yangin-alarm", "bakim-sozlesmesi", "test", "uyumluluk"],
  "uzaktan-kamera-izleme": ["uzaktan-izleme", "merkezi-takip", "sureklilik"],
};

const faqKeysByServiceSlug: Record<string, FaqCollectionKey[]> = Object.fromEntries(
  serviceRouteRecords.map((service) => [service.slug, [`service:${service.slug}` as FaqCollectionKey]])
) as Record<string, FaqCollectionKey[]>;

const businessGuidanceByIntent: Record<ServiceBusinessIntent, ServiceBusinessGuidance> = {
  installation: {
    metaAngle: "Keşif, proje planlama ve doğru ekipman seçimi ile ilk kurulumun sağlam başlamasını hedefliyoruz.",
    trustAngle: "Kurulum projelerinde kör nokta, yanlış lens ve yetersiz kayıt süresi bırakmayan planlama gerekir.",
    ctaAngle: "Ücretsiz keşif ve hızlı teklif ile kurulumu netleştirin.",
    emphasisPoints: [
      "kamera yerleşim planı",
      "kablo ve ağ altyapısı",
      "kayıt cihazı ve switch planlaması",
      "ölçeklenebilir sistem tasarımı",
    ],
    upsellPaths: ["bakım sözleşmesi", "uzaktan izleme", "teknik servis sürekliliği"],
  },
  solution: {
    metaAngle: "Büyük ve çok kullanıcılı projelerde tek cihaz değil, operasyon sürekliliği ve bakım planı birlikte düşünülmelidir.",
    trustAngle: "Kurumsal çözüm sayfalarında karar vericiye ölçek, raporlama disiplini ve genişleme hazırlığı gösterilmelidir.",
    ctaAngle: "Kurumsal keşif ve proje teklifi ile çok bileşenli güvenlik yapısını birlikte planlayın.",
    emphasisPoints: [
      "çok alanlı güvenlik planı",
      "geçiş, kamera ve alarm entegrasyonu",
      "genişleme hazırlığı",
      "operasyon aksatmadan devreye alma",
    ],
    upsellPaths: ["bakım sözleşmesi", "uzaktan izleme", "SLA odaklı teknik servis"],
  },
  maintenance: {
    metaAngle: "Periyodik kontrol, kayıt sürekliliği ve arıza riskini düşüren sözleşmeli hizmet yaklaşımı öne çıkar.",
    trustAngle: "Bakım hizmetinde asıl değer arıza olduktan sonra değil, kayıt ve cihaz sağlığını bozulmadan korumaktır.",
    ctaAngle: "Bakım sözleşmesi kapsamını, kontrol sıklığını ve servis önceliğini birlikte netleştirin.",
    emphasisPoints: [
      "periyodik kontrol",
      "kayıt ve disk sağlığı takibi",
      "cihaz sağlık kontrolü",
      "SLA ve sözleşme disiplini",
    ],
    upsellPaths: ["uzaktan izleme", "yedek parça planı", "kurumsal raporlama"],
  },
  "technical-service": {
    metaAngle: "Teknik servis tarafında cihaz düzeyinde teşhis, saha müdahalesi ve hızlı geri dönüş kritik rol oynar.",
    trustAngle: "Teknik serviste yanlış parça değişimi yerine doğru teşhis, test ve kalıcı çözüm güven üretir.",
    ctaAngle: "Sorunun kaynağını netleştiren ön değerlendirme ile hızlı müdahale planı çıkarın.",
    emphasisPoints: [
      "teşhis ve arıza ayrıştırma",
      "saha müdahalesi",
      "cihaz ve bağlantı kontrolü",
      "servis sonrası doğrulama",
    ],
    upsellPaths: ["bakım sözleşmesi", "uzaktan izleme", "yedek parça standardizasyonu"],
  },
  "fault-repair": {
    metaAngle: "Arıza sayfalarında aciliyet, kayıt kesintisi riski ve sistemi tekrar çalışır hale getirme kabiliyeti öne çıkar.",
    trustAngle: "Görüntü yok, kayıt yok veya kamera offline gibi durumlarda hızlı teşhis ve yerinde müdahale en kritik güven unsurudur.",
    ctaAngle: "Acil arıza tespiti ve hızlı müdahale için belirtileri paylaşın, uygun servis yolunu birlikte belirleyelim.",
    emphasisPoints: [
      "görüntü yok / kayıt yok / offline kamera",
      "HDD, NVR, DVR ve PoE sorunları",
      "hızlı teşhis",
      "sistem sürekliliğini geri kazandırma",
    ],
    upsellPaths: ["teknik servis", "bakım sözleşmesi", "uzaktan izleme ile erken uyarı"],
  },
  monitoring: {
    metaAngle: "Uzaktan izleme sayfalarında merkezi görünürlük, kullanıcı erişimi ve kayıt akışının sürekliliği vurgulanmalıdır.",
    trustAngle: "Uzaktan izleme gerçek değerini çok noktalı yapılarda, merkezi takip ve kesinti tespiti ile üretir.",
    ctaAngle: "Merkezi izleme, mobil erişim ve kayıt takibini tek planda toplayan çözümü planlayın.",
    emphasisPoints: [
      "merkezi görünürlük",
      "mobil erişim ve kullanıcı yetkileri",
      "kayıt akışı takibi",
      "çok lokasyonlu kontrol",
    ],
    upsellPaths: ["bakım sözleşmesi", "teknik servis önceliği", "raporlama disiplini"],
  },
};

const leadValueOverrides: Record<string, "high" | "medium"> = {
  "apartman-site-guvenlik-sistemi": "medium",
  "uzaktan-kamera-izleme": "medium",
};

function buildRevenueFlags(revenueModel: ServiceRevenueModel) {
  return {
    recurringRevenue: revenueModel === "recurring" || revenueModel === "hybrid",
    oneTimeRevenue: revenueModel === "one-time" || revenueModel === "hybrid",
  };
}

export const seoServices: SeoService[] = serviceRouteRecords.map((service) => {
  const content = serviceContent[service.slug];
  const businessIntent = businessIntentByServiceSlug[service.slug] ?? "installation";
  const revenueModel = revenueModelByServiceSlug[service.slug] ?? "one-time";
  const revenueFlags = buildRevenueFlags(revenueModel);
  const businessGuidance = businessGuidanceByIntent[businessIntent];
  const keywordSummary = getKeywordOpportunitySummaryForService(service.slug);
  const faqKeys = faqKeysByServiceSlug[service.slug] ?? [`service:${service.slug}`];

  return {
    ...service,
    intentType: businessIntent,
    businessIntent,
    primaryKeywordTheme:
      primaryKeywordThemeByServiceSlug[service.slug] ??
      content?.metadataIntent ??
      service.name.toLocaleLowerCase("tr-TR"),
    primaryLeadKeyword: keywordSummary.primaryLeadKeyword ?? service.name,
    primaryTrafficKeyword: keywordSummary.primaryTrafficKeyword,
    leadValue: leadValueOverrides[service.slug] ?? "high",
    leadPriority: leadPriorityByServiceSlug[service.slug] ?? "high",
    businessPriorityScore: businessPriorityScoreByServiceSlug[service.slug] ?? 3,
    revenueModel,
    recurringRevenue: revenueFlags.recurringRevenue,
    oneTimeRevenue: revenueFlags.oneTimeRevenue,
    recurringRevenuePotential: recurringRevenuePotentialByServiceSlug[service.slug] ?? "low",
    schemaType: schemaTypeByServiceSlug[service.slug] ?? "Service",
    ctaStyle: ctaStyleByServiceSlug[service.slug] ?? "quote",
    heroTitlePattern: "{city} {service} Hizmeti",
    faqKeys: faqKeys.filter((faqKey) => {
      if (!faqKey.startsWith("service:")) {
        return true;
      }

      return Boolean(serviceFaqBank[faqKey.replace("service:", "")]);
    }),
    painPointSlugs: painPointSlugsByServiceSlug[service.slug] ?? [],
    trustElementKey: businessIntent,
    internalLinkHints: ["city-hub", "same-city-related-services", "same-service-other-cities"],
    priorityLinkSlugs: priorityLinkSlugsByServiceSlug[service.slug] ?? [],
    targetSegmentSlugs: targetSegmentSlugsByServiceSlug[service.slug] ?? [],
    keywordThemeTags: keywordThemeTagsByServiceSlug[service.slug] ?? [],
    businessGuidance,
    metadataTargets: content?.metadataTargets ?? [],
  };
});

export const services: ServiceRouteRecord[] = seoServices.map(({ slug, name, shortDescription }) => ({
  slug,
  name,
  shortDescription,
}));

function resolveSeoService(serviceOrSlug: string | SeoService) {
  if (typeof serviceOrSlug !== "string") {
    return serviceOrSlug;
  }

  return getSeoServiceBySlug(serviceOrSlug);
}

export function getSeoServiceBySlug(serviceSlug: string) {
  return seoServices.find((service) => service.slug === serviceSlug);
}

export function getServiceRouteRecord(serviceSlug: string) {
  return services.find((service) => service.slug === serviceSlug);
}

export function getServiceBusinessIntent(serviceOrSlug: string | SeoService) {
  return resolveSeoService(serviceOrSlug)?.businessIntent;
}

export function getRevenueModelForService(serviceOrSlug: string | SeoService) {
  return resolveSeoService(serviceOrSlug)?.revenueModel;
}

export function isRecurringRevenueService(serviceOrSlug: string | SeoService) {
  return Boolean(resolveSeoService(serviceOrSlug)?.recurringRevenue);
}

export function isOneTimeRevenueService(serviceOrSlug: string | SeoService) {
  return Boolean(resolveSeoService(serviceOrSlug)?.oneTimeRevenue);
}

export function getLeadPriorityForService(serviceOrSlug: string | SeoService) {
  return resolveSeoService(serviceOrSlug)?.leadPriority;
}

export function getBusinessModelForService(serviceOrSlug: string | SeoService) {
  const service = resolveSeoService(serviceOrSlug);

  if (!service) {
    return null;
  }

  return {
    businessIntent: service.businessIntent,
    revenueModel: service.revenueModel,
    recurringRevenue: service.recurringRevenue,
    oneTimeRevenue: service.oneTimeRevenue,
    recurringRevenuePotential: service.recurringRevenuePotential,
    leadPriority: service.leadPriority,
    businessPriorityScore: service.businessPriorityScore,
    targetSegmentSlugs: service.targetSegmentSlugs,
    priorityLinkSlugs: service.priorityLinkSlugs,
    keywordThemeTags: service.keywordThemeTags,
    businessGuidance: service.businessGuidance,
    painPointSlugs: service.painPointSlugs,
  } satisfies ServiceBusinessModel;
}
