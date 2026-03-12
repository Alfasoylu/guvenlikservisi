import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { siteConfig } from "@/data/site-config";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import PhoneButton from "@/components/PhoneButton";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Güvenlik Sistemi Kurulumu | Kamera, Alarm ve Geçiş Sistemleri",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "güvenlik sistemi kurulumu",
    "kamera sistemi kurulumu",
    "güvenlik kamerası montajı",
    "alarm sistemi kurulumu",
    "yangın alarm sistemi kurulumu",
    "kartlı geçiş sistemi",
    "apartman güvenlik sistemi",
    "işyeri güvenlik sistemi",
    "fabrika güvenlik sistemi",
    "kamera montajı",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Güvenlik Sistemi Kurulumu | Kamera, Alarm ve Geçiş Sistemleri",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Güvenlik Sistemi Kurulumu | Kamera, Alarm ve Geçiş Sistemleri",
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  verification: {
    google: "i5B6tYYGx0eggv9nie4ynlNytDsffEhyIfvVpkmA-K4",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0F2B46",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const GTM_ID = siteConfig.gtmId;

  return (
    <html lang="tr">
      <head>
        {GTM_ID && (
          <Script id="gtm-script" strategy="beforeInteractive">
            {`
  (function(w,d,s,l,i){w[l]=w[l]||[];
  w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
  var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
  j.async=true;
  j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
  f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','${GTM_ID}');
  `}
          </Script>
        )}
      </head>
      <body className="bg-white text-text antialiased [font-family:Inter,ui-sans-serif,system-ui,sans-serif]">
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        )}

        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
        <PhoneButton />
      </body>
    </html>
  );
}
