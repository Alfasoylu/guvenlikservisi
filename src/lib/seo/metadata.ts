import type { Metadata } from "next";
import { siteConfig } from "@/data/site-config";

export interface SeoMetadataInput {
  title: string;
  description: string;
  canonical?: string | null;
  robots?: Metadata["robots"];
  type?: "website" | "article";
}

export function buildSeoMetadata({
  title,
  description,
  canonical,
  robots,
  type = "website",
}: SeoMetadataInput): Metadata {
  return {
    title,
    description,
    alternates: canonical
      ? {
          canonical,
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
    },
  };
}

export function buildNotFoundMetadata(): Metadata {
  return {
    title: "Sayfa Bulunamadı | Güvenlik Servisi",
  };
}
