import { cities } from "@/data/cities";
import {
  getAbsoluteUrl,
  getCityPath,
  isKnownAppPath,
  normalizeRoutePath,
} from "@/lib/routes";

const legacyCanonicalPathMap: Record<string, string> = {
  "/teklif/kamera/istanbul-ip-kamera-montaji": "/teklif/istanbul-ip-kamera-montaji",
  "/hizmetler/guvenlik-kamera-kurulumu": "/kamera-sistemi-kurulumu",
  "/hizmetler/alarm-sistemi-kurulumu": "/alarm-sistemi-kurulumu",
  "/hizmetler/yangin-alarm-sistemi-kurulumu": "/yangin-alarm-sistemi-kurulumu",
  "/hizmetler/kartli-gecis-sistemi-kurulumu": "/kartli-gecis-sistemi-kurulumu",
  "/kartli-gecis-ve-turnike-sistemi": "/kartli-gecis-sistemi-kurulumu",
  "/hizmetler/apartman-site-guvenlik-sistemi": "/apartman-site-guvenlik-sistemi",
  "/hizmetler/isyeri-guvenlik-sistemi": "/isyeri-guvenlik-sistemi",
  "/hizmetler/fabrika-depo-guvenlik-sistemi": "/fabrika-depo-guvenlik-sistemi",
  "/hizmetler/bakim-servis-uzaktan-izleme": "/bakim-servis-uzaktan-izleme",
};

export function resolveCanonicalPath(path: string) {
  const normalizedPath = normalizeRoutePath(path);

  if (legacyCanonicalPathMap[normalizedPath]) {
    return legacyCanonicalPathMap[normalizedPath];
  }

  const legacyCity = cities.find(
    (city) => normalizedPath === `/${city.slug}-guvenlik-sistemi-kurulumu`
  );

  if (legacyCity) {
    return getCityPath(legacyCity.slug);
  }

  if (isKnownAppPath(normalizedPath)) {
    return normalizedPath;
  }

  return null;
}

export function getCanonicalUrlForPath(path: string) {
  const canonicalPath = resolveCanonicalPath(path);
  return canonicalPath ? getAbsoluteUrl(canonicalPath) : null;
}

export function getCanonicalUrlForKnownPath(path: string) {
  const canonicalUrl = getCanonicalUrlForPath(path);

  if (!canonicalUrl) {
    throw new Error(`Missing canonical mapping for route: ${normalizeRoutePath(path)}`);
  }

  return canonicalUrl;
}
