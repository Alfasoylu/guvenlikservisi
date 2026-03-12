import type { MetadataRoute } from "next";
import {
  getAllCityPaths,
  getAllCityServicePaths,
  isKnownAppPath,
  isValidCityPath,
  isValidCityServicePath,
  normalizeRoutePath,
} from "@/lib/routes";
import { buildSitemapEntries } from "@/lib/sitemap";

export interface RouteValidationAudit {
  valid: boolean;
  invalidCityRoutes: string[];
  invalidCityServiceRoutes: string[];
  invalidInternalLinks: string[];
  invalidSitemapUrls: string[];
}

function toPathname(urlOrPath: string) {
  if (urlOrPath.startsWith("http://") || urlOrPath.startsWith("https://")) {
    return normalizeRoutePath(new URL(urlOrPath).pathname);
  }

  return normalizeRoutePath(urlOrPath);
}

function collectInvalidSitemapUrls(entries: MetadataRoute.Sitemap) {
  return entries
    .map((entry) => toPathname(entry.url))
    .filter((path) => !isKnownAppPath(path));
}

export function createRouteValidationAudit(internalLinks: readonly string[] = []): RouteValidationAudit {
  const invalidCityRoutes = getAllCityPaths().filter((path) => !isValidCityPath(path));
  const invalidCityServiceRoutes = getAllCityServicePaths().filter(
    (path) => !isValidCityServicePath(path)
  );
  const invalidInternalLinks = internalLinks
    .map((href) => toPathname(href))
    .filter((path) => !isKnownAppPath(path));
  const invalidSitemapUrls = collectInvalidSitemapUrls(buildSitemapEntries());

  return {
    valid:
      invalidCityRoutes.length === 0 &&
      invalidCityServiceRoutes.length === 0 &&
      invalidInternalLinks.length === 0 &&
      invalidSitemapUrls.length === 0,
    invalidCityRoutes,
    invalidCityServiceRoutes,
    invalidInternalLinks,
    invalidSitemapUrls,
  };
}

export function assertValidInternalLinks(internalLinks: readonly string[]) {
  return createRouteValidationAudit(internalLinks).invalidInternalLinks;
}