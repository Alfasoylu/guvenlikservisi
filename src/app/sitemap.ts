import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog-posts";
import { cities } from "@/data/cities";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site-config";

const now = new Date();

const staticServiceRoutes = [
  "/alarm-sistemi-kurulumu",
  "/apartman-site-guvenlik-sistemi",
  "/bakim-servis-uzaktan-izleme",
  "/fabrika-depo-guvenlik-sistemi",
  "/isyeri-guvenlik-sistemi",
  "/kamera-sistemi-kurulumu",
  "/kartli-gecis-ve-turnike-sistemi",
  "/yangin-alarm-sistemi-kurulumu",
] as const;

const teklifRoutes = [
  "/teklif/alarm",
  "/teklif/apartman",
  "/teklif/istanbul-ip-kamera-montaji",
  "/teklif/isyeri",
  "/teklif/kamera",
  "/teklif/kamera/istanbul-ip-kamera-montaji",
  "/teklif/yangin",
] as const;

function absoluteUrl(path: string) {
  return `${siteConfig.url}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [
    {
      url: absoluteUrl("/"),
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: absoluteUrl("/blog"),
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  entries.push(
    ...staticServiceRoutes.map((route) => ({
      url: absoluteUrl(route),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    }))
  );

  entries.push(
    ...teklifRoutes.map((route) => ({
      url: absoluteUrl(route),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    }))
  );

  entries.push(
    ...blogPosts.map((post) => ({
      url: absoluteUrl(`/blog/${post.slug}`),
      lastModified: new Date(post.updatedAt || post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    }))
  );

  entries.push(
    ...cities.map((city) => ({
      url: absoluteUrl(`/${city.slug}`),
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }))
  );

  entries.push(
    ...cities.flatMap((city) =>
      services.map((service) => ({
        url: absoluteUrl(`/${city.slug}/${service.slug}`),
        lastModified: now,
        changeFrequency: "weekly" as const,
        priority: 0.9,
      }))
    )
  );

  return entries;
}
