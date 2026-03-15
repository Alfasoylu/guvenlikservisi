import type { Metadata } from "next";
import ServiceHubTemplate from "@/components/templates/ServiceHubTemplate";
import { getServiceHubPageConfig } from "@/data/service-hub-pages";
import { getCanonicalUrlForKnownPath } from "@/lib/canonical";

const serviceSlug = "uzaktan-kamera-izleme";
const pageConfig = getServiceHubPageConfig(serviceSlug);

if (!pageConfig) {
  throw new Error(`Missing service hub page config for ${serviceSlug}`);
}

const canonicalUrl = getCanonicalUrlForKnownPath(`/${serviceSlug}`);

export const metadata: Metadata = {
  title: pageConfig.metadataTitle,
  description: pageConfig.metadataDescription,
  alternates: { canonical: canonicalUrl },
  openGraph: {
    title: pageConfig.openGraphTitle || pageConfig.metadataTitle,
    description: pageConfig.openGraphDescription || pageConfig.metadataDescription,
    url: canonicalUrl,
    siteName: "Güvenlik Servisi",
    locale: "tr_TR",
    type: "website",
  },
};

export default function UzaktanKameraIzlemePage() {
  return (
    <ServiceHubTemplate
      data={{
        ...pageConfig.data,
        trustImages: {
          afterHero: {
            src: "/images/services/bakim-servis/uzaktan-izleme-merkezi-ekranlari.jpg",
            alt: "Uzaktan izleme merkezi ekranları",
          },
          beforeFaq: {
            src: "/images/services/bakim-servis/guvenlik-kamera-sistemi-izleme-merkezi.jpg",
            alt: "Güvenlik kamera sistemi izleme merkezi",
          },
          beforeCta: {
            src: "/images/services/bakim-servis/kamera-sistem-kontrol-monitor-teknisyen.jpg",
            alt: "Kamera sistem kontrol teknisyeni",
          },
        },
      }}
    />
  );
}
