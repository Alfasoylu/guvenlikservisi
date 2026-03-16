import type { Metadata } from "next";
import { siteConfig } from "@/data/site-config";

export interface SeoMetadataInput {
  title: string;
  description: string;
  canonical?: string | null;
  robots?: Metadata["robots"];
  keywords?: Metadata["keywords"];
  type?: "website" | "article";
  openGraph?: Metadata["openGraph"];
  twitter?: Metadata["twitter"];
}

export function buildSeoMetadata({
  title,
  description,
  canonical,
  robots,
  keywords,
  type = "website",
  openGraph,
  twitter,
}: SeoMetadataInput): Metadata {
  return {
    title,
    description,
    keywords,
    alternates: canonical
      ? {
          canonical,
          languages: {
            "tr-TR": canonical,
            "x-default": canonical,
          },
        }
      : undefined,
    robots,
    openGraph: {
      title,
      description,
      url: canonical || siteConfig.url,
      siteName: siteConfig.name,
      locale: "tr_TR",
      type,
      ...(openGraph || {}),
    },
    twitter,
  };
}

export function buildNotFoundMetadata(): Metadata {
  return {
    title: "Sayfa Bulunamadı | Güvenlik Servisi",
  };
}
