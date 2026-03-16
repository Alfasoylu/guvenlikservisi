import type { Metadata } from "next";
import ServiceHubTemplate from "@/components/templates/ServiceHubTemplate";
import { getServiceHubPageConfig } from "@/data/service-hub-pages";
import { getCanonicalUrlForKnownPath } from "@/lib/canonical";
import { buildSeoMetadata } from "@/lib/seo/metadata";

const serviceSlug = "kamera-sistemi-bakim-sozlesmesi";
const pageConfig = getServiceHubPageConfig(serviceSlug);

if (!pageConfig) {
  throw new Error(`Missing service hub page config for ${serviceSlug}`);
}

const canonicalUrl = getCanonicalUrlForKnownPath(`/${serviceSlug}`);

export const metadata: Metadata = buildSeoMetadata({
  title: pageConfig.metadataTitle,
  description: pageConfig.metadataDescription,
  canonical: canonicalUrl,
  openGraph: {
    title: pageConfig.openGraphTitle || pageConfig.metadataTitle,
    description:
      pageConfig.openGraphDescription || pageConfig.metadataDescription,
  },
});

export default function KameraSistemiBakimSozlesmesiPage() {
  return (
    <ServiceHubTemplate
      data={{
        ...pageConfig.data,
        trustImages: {
          afterHero: {
            src: "/images/services/bakim-servis/guvenlik-sistemi-bakim-teknisyen-ekip.jpg",
            alt: "Güvenlik sistemi bakım teknisyen ekibi",
          },
          beforeFaq: {
            src: "/images/services/bakim-servis/kamera-sistem-kontrol-monitor-teknisyen.jpg",
            alt: "Kamera sistem kontrol ve monitör teknisyeni",
          },
          beforeCta: {
            src: "/images/services/bakim-servis/site-kamera-sistemi-periyodik-bakim.jpg",
            alt: "Site kamera sistemi periyodik bakım",
          },
        },
      }}
    />
  );
}
