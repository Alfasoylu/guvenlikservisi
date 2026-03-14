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
  return <ServiceHubTemplate data={pageConfig.data} />;
}
