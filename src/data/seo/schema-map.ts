export type SeoSchemaType = "Service";

export type SeoPageIntent =
  | "city"
  | "city-service"
  | "service-hub"
  | "segment"
  | "blog";

export type SeoSchemaName =
  | "BreadcrumbList"
  | "FAQPage"
  | "LocalBusiness"
  | "Service"
  | "WebPage"
  | "Article";

export const schemaTypeByServiceSlug: Record<string, SeoSchemaType> = {
  "kamera-sistemi-kurulumu": "Service",
  "alarm-sistemi-kurulumu": "Service",
  "yangin-alarm-sistemi-kurulumu": "Service",
  "kartli-gecis-sistemi-kurulumu": "Service",
  "apartman-site-guvenlik-sistemi": "Service",
  "isyeri-guvenlik-sistemi": "Service",
  "fabrika-depo-guvenlik-sistemi": "Service",
  "bakim-servis-uzaktan-izleme": "Service",
  "kamera-sistemi-bakim-sozlesmesi": "Service",
  "guvenlik-sistemi-teknik-servis": "Service",
  "kamera-ariza-servisi": "Service",
  "yangin-alarm-bakim-sozlesmesi": "Service",
  "uzaktan-kamera-izleme": "Service",
};

export const allowedSchemasByPageIntent: Record<SeoPageIntent, SeoSchemaName[]> = {
  city: ["WebPage", "BreadcrumbList", "FAQPage", "LocalBusiness"],
  "city-service": ["WebPage", "BreadcrumbList", "FAQPage", "LocalBusiness", "Service"],
  "service-hub": ["WebPage", "BreadcrumbList", "FAQPage", "Service"],
  segment: ["WebPage", "BreadcrumbList", "FAQPage", "Service"],
  blog: ["WebPage", "BreadcrumbList", "Article"],
};

export function getSchemaTypeForService(serviceSlug: string) {
  return schemaTypeByServiceSlug[serviceSlug] ?? "Service";
}

export function getAllowedSchemasForPageIntent(pageIntent: SeoPageIntent) {
  return allowedSchemasByPageIntent[pageIntent] ?? [];
}
