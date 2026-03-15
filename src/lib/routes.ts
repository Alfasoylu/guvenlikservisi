import { getAllBlogPosts } from "@/data/blog-posts";
import { cities } from "@/data/cities";
import { services } from "@/data/services";
import { getAllDistrictServiceParams } from "@/data/seo/istanbul-district-content";
import { getAllProblemSlugs } from "@/data/seo/problem-pages";
import { siteConfig } from "@/data/site-config";

export const rootPaths = ["/", "/blog"] as const;

export const staticPagePaths = [
  "/alarm-sistemi-kurulumu",
  "/apartman-site-guvenlik-sistemi",
  "/bakim-servis-uzaktan-izleme",
  "/fabrika-depo-guvenlik-sistemi",
  "/hakkimizda",
  "/iletisim",
  "/istanbul-ip-kamera-montaji",
  "/istanbul-kamera-bakim-servisi",
  "/istanbul-kamera-teknik-servis",
  "/isyeri-guvenlik-sistemi",
  "/kamera-ariza-servisi",
  "/kamera-sistemi-bakim-sozlesmesi",
  "/kamera-sistemi-kurulumu",
  "/kartli-gecis-sistemi-kurulumu",
  "/paketler-ve-fiyatlandirma",
  "/uzaktan-kamera-izleme",
  "/yangin-alarm-sistemi-kurulumu",
] as const;

export const teklifPaths = [
  "/teklif/alarm",
  "/teklif/apartman",
  "/teklif/istanbul-ip-kamera-montaji",
  "/teklif/isyeri",
  "/teklif/kamera",
  "/teklif/yangin",
] as const;

const citySlugSet = new Set(cities.map((city) => city.slug));
const serviceSlugSet = new Set(services.map((service) => service.slug));
const staticPathSet = new Set<string>([
  ...rootPaths,
  ...staticPagePaths,
  ...teklifPaths,
]);
const blogPathSet = new Set(getAllBlogPosts().map((post) => `/blog/${post.slug}`));
const sorunPathSet = new Set(getAllProblemSlugs().map((slug) => `/sorun/${slug}`));

const districtServiceParams = getAllDistrictServiceParams();
const districtServicePathSet = new Set(
  districtServiceParams.map((p) => `/${p.city}/${p.district}/${p.service}`),
);

export function normalizeRoutePath(path: string) {
  if (!path) return "/";

  const normalized = path.startsWith("/") ? path : `/${path}`;
  return normalized !== "/" && normalized.endsWith("/")
    ? normalized.slice(0, -1)
    : normalized;
}

export function getAbsoluteUrl(path: string) {
  return `${siteConfig.url}${normalizeRoutePath(path)}`;
}

export function isValidCitySlug(citySlug: string) {
  return citySlugSet.has(citySlug);
}

export function isValidServiceSlug(serviceSlug: string) {
  return serviceSlugSet.has(serviceSlug);
}

export function getCityPath(citySlug: string) {
  if (!isValidCitySlug(citySlug)) {
    return null;
  }

  return `/${citySlug}`;
}

export function getCityServicePath(citySlug: string, serviceSlug: string) {
  if (!isValidCitySlug(citySlug) || !isValidServiceSlug(serviceSlug)) {
    return null;
  }

  return `/${citySlug}/${serviceSlug}`;
}

export function getPrimaryCityServicePath(citySlug: string, serviceSlug: string) {
  if (!isValidCitySlug(citySlug) || !isValidServiceSlug(serviceSlug)) {
    return null;
  }

  return getCityServicePath(citySlug, serviceSlug);
}

export function getCityCanonicalUrl(citySlug: string) {
  const path = getCityPath(citySlug);
  return path ? getAbsoluteUrl(path) : null;
}

export function getCityServiceCanonicalUrl(
  citySlug: string,
  serviceSlug: string,
) {
  const path = getCityServicePath(citySlug, serviceSlug);
  return path ? getAbsoluteUrl(path) : null;
}

export function getPrimaryCityServiceCanonicalUrl(
  citySlug: string,
  serviceSlug: string,
) {
  const path = getPrimaryCityServicePath(citySlug, serviceSlug);
  return path ? getAbsoluteUrl(path) : null;
}

// --- District service paths ---

export function getDistrictServicePath(
  citySlug: string,
  districtSlug: string,
  serviceSlug: string,
) {
  const candidate = `/${citySlug}/${districtSlug}/${serviceSlug}`;
  return districtServicePathSet.has(candidate) ? candidate : null;
}

export function getDistrictServiceCanonicalUrl(
  citySlug: string,
  districtSlug: string,
  serviceSlug: string,
) {
  const path = getDistrictServicePath(citySlug, districtSlug, serviceSlug);
  return path ? getAbsoluteUrl(path) : null;
}

export function getDistrictServiceStaticParams() {
  return districtServiceParams.map((p) => ({
    city: p.city,
    district: p.district,
    service: p.service,
  }));
}

export function isValidDistrictServicePath(path: string) {
  return districtServicePathSet.has(normalizeRoutePath(path));
}

export function getAllDistrictServicePaths() {
  return [...districtServicePathSet];
}

export function getCityStaticParams() {
  return cities.map((city) => ({
    city: city.slug,
  }));
}

export function getCityServiceStaticParams() {
  return cities.flatMap((city) =>
    services.map((service) => ({
      city: city.slug,
      service: service.slug,
    })),
  );
}

export function getAllCityPaths() {
  return getCityStaticParams()
    .map(({ city }) => getCityPath(city))
    .filter((path): path is string => path !== null);
}

export function getAllCityServicePaths() {
  return getCityServiceStaticParams()
    .map(({ city, service }) => getCityServicePath(city, service))
    .filter((path): path is string => path !== null);
}

export function getAllPrimaryCityServicePaths() {
  return [...new Set(
    getCityServiceStaticParams()
      .map(({ city, service }) => getPrimaryCityServicePath(city, service))
      .filter((path): path is string => path !== null),
  )];
}

export function getRedirectTargetForCityServicePath(path: string) {
  const normalizedPath = normalizeRoutePath(path);

  const match = normalizedPath.match(/^\/([^/]+)\/([^/]+)$/);

  if (!match) {
    return null;
  }

  const [, citySlug, serviceSlug] = match;
  const primaryPath = getPrimaryCityServicePath(citySlug, serviceSlug);

  if (!primaryPath || primaryPath === normalizedPath) {
    return null;
  }

  return primaryPath;
}

export function getAllBlogPaths() {
  return [...blogPathSet];
}

export function getAllProblemPaths() {
  return [...sorunPathSet];
}

export function getAllKnownAppPaths() {
  return [
    ...rootPaths,
    ...staticPagePaths,
    ...teklifPaths,
    ...getAllBlogPaths(),
    ...getAllProblemPaths(),
    ...getAllCityPaths(),
    ...getAllCityServicePaths(),
    ...getAllDistrictServicePaths(),
  ];
}

export function isValidCityPath(path: string) {
  const normalizedPath = normalizeRoutePath(path);
  const segments = normalizedPath.split("/").filter(Boolean);

  return segments.length === 1 && isValidCitySlug(segments[0]);
}

export function isValidCityServicePath(path: string) {
  const normalizedPath = normalizeRoutePath(path);
  const segments = normalizedPath.split("/").filter(Boolean);

  return (
    segments.length === 2 &&
    isValidCitySlug(segments[0]) &&
    isValidServiceSlug(segments[1])
  );
}

export function isKnownStaticPath(path: string) {
  const normalizedPath = normalizeRoutePath(path);
  return staticPathSet.has(normalizedPath) || blogPathSet.has(normalizedPath) || sorunPathSet.has(normalizedPath);
}

export function isKnownAppPath(path: string) {
  return (
    isKnownStaticPath(path) ||
    isValidCityPath(path) ||
    isValidCityServicePath(path) ||
    isValidDistrictServicePath(path)
  );
}

export function filterValidInternalLinks<T extends { href: string }>(
  links: readonly T[],
) {
  return links.filter((link) => isKnownAppPath(link.href));
}
