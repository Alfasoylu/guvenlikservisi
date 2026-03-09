import type { Metadata } from "next";
import Link from "next/link";
import { Shield, Phone } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function TeklifLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const phoneNumber = siteConfig.phone.replace(/\s/g, "");

  return (
    <>
      {/* Üst bar */}
      <header className="bg-white border-b border-gray-100 py-3 px-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-primary">
            <Shield size={24} className="text-accent" />
            <span>Güvenlik Servisi</span>
          </Link>

          <a
            href={`tel:${phoneNumber}`}
            data-event="phone_click"
            className="flex items-center gap-2 bg-cta hover:bg-cta-hover text-white px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
          >
            <Phone size={15} />
            {siteConfig.phone}
          </a>
        </div>
      </header>

      {children}

      {/* Sticky mobil bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-200 px-4 py-3 flex gap-3 shadow-xl">
        <a
          href={`tel:${phoneNumber}`}
          data-event="phone_click"
          className="flex-1 flex items-center justify-center gap-2 bg-accent text-white font-bold py-3 rounded-xl text-sm"
        >
          <Phone size={16} />
          Hemen Ara
        </a>

        <a
          href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
            "Merhaba, teklif almak istiyorum."
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          data-event="whatsapp_click"
          className="flex-1 flex items-center justify-center gap-2 font-bold py-3 rounded-xl text-sm text-white"
          style={{ backgroundColor: "#25D366" }}
        >
          WhatsApp
        </a>
      </div>

      <div className="h-20 md:hidden" />
    </>
  );
}
