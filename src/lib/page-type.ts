import { cities } from "@/data/cities";
import { services } from "@/data/services";

const citySlugSet = new Set(cities.map((city) => city.slug));
const serviceSlugSet = new Set(services.map((service) => service.slug));

const supportPagePathSet = new Set([
  "/",
  "/hakkimizda",
  "/iletisim",
  "/paketler-ve-fiyatlandirma",
]);

export function classifyPageType(pathname: string) {
  if (!pathname) return "";
  if (pathname === "/") return "home_page";
  if (pathname.startsWith("/teklif/")) return "landing_page";
  if (pathname === "/blog") return "blog_index";
  if (pathname.startsWith("/blog/")) return "blog_post";
  if (pathname.startsWith("/sorun/")) return "problem_page";
  if (supportPagePathSet.has(pathname)) return "support_page";

  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 1) {
    if (citySlugSet.has(segments[0])) {
      return "city_page";
    }

    if (serviceSlugSet.has(segments[0])) {
      return "service_hub_page";
    }

    return "site_page";
  }

  if (segments.length === 2) {
    const [first, second] = segments;

    if (citySlugSet.has(first) && serviceSlugSet.has(second)) {
      return "city_service_page";
    }

    return "site_page";
  }

  if (segments.length === 3) {
    const [first, , third] = segments;

    if (citySlugSet.has(first) && serviceSlugSet.has(third)) {
      return "district_service_page";
    }

    return "site_page";
  }

  return "site_page";
}
