import Script from "next/script";
import { siteConfig } from "@/data/site-config";

const GA_ID = siteConfig.googleAnalyticsId;

export default function GoogleAnalytics() {
  if (!GA_ID || GA_ID === "G-XXXXXXXXXX") return null;

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
      />
      <Script id="ga4" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}
      </Script>
    </>
  );
}
