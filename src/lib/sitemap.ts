import type { MetadataRoute } from "next";
import { blogPosts } from "@/data/blog-posts";
import {
  getAbsoluteUrl,
  getAllCityPaths,
  getAllCityServicePaths,
  staticPagePaths,
  teklifPaths,
} from "@/lib/routes";

export function buildSitemapEntries(lastModified = new Date()): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [
    {
      url: getAbsoluteUrl("/"),
      lastModified,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: getAbsoluteUrl("/blog"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  entries.push(
    ...staticPagePaths.map((path) => ({
      url: getAbsoluteUrl(path),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    }))
  );

  entries.push(
    ...teklifPaths.map((path) => ({
      url: getAbsoluteUrl(path),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.85,
    }))
  );

  entries.push(
    ...blogPosts.map((post) => ({
      url: getAbsoluteUrl(`/blog/${post.slug}`),
      lastModified: new Date(post.updatedAt || post.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.75,
    }))
  );

  entries.push(
    ...getAllCityPaths().map((path) => ({
      url: getAbsoluteUrl(path),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    }))
  );

  entries.push(
    ...getAllCityServicePaths().map((path) => ({
      url: getAbsoluteUrl(path),
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    }))
  );

  return entries;
}