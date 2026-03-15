import type { Metadata } from "next";
import ServiceHubTemplate from "@/components/templates/ServiceHubTemplate";
import { getServiceHubPageConfig } from "@/data/service-hub-pages";
import { getCanonicalUrlForKnownPath } from "@/lib/canonical";

const serviceSlug = "kamera-ariza-servisi";
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

export default function KameraArizaServisiPage() {
  return (
    <ServiceHubTemplate
      data={{
        ...pageConfig.data,
        trustImages: {
          afterHero: {
            src: "/images/services/bakim-servis/kamera-sistemi-periyodik-bakim-servisi.jpg",
            alt: "Kamera sistemi periyodik bakım servisi",
          },
          beforeFaq: {
            src: "/images/services/bakim-servis/nvr-kayit-cihazi-bakim-kontrol-harddisk-testi.jpg",
            alt: "NVR kayıt cihazı bakım ve harddisk kontrol",
          },
          beforeCta: {
            src: "/images/services/bakim-servis/guvenlik-sistemi-teknik-servis-ekip-isyeri-kamera-montaji.jpg",
            alt: "Güvenlik sistemi teknik servis ekibi sahada",
          },
        },
      }}
    />
  );
}
