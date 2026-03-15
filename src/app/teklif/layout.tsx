import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

type TeklifLayoutProps = {
  children: ReactNode;
};

function normalizePhoneForTel(value: string): string {
  return String(value || "").replace(/[^\d+]/g, "");
}

function normalizePhoneForWhatsApp(value: string): string {
  return String(value || "").replace(/\D/g, "");
}

export default function TeklifLayout({ children }: TeklifLayoutProps) {
  const telHref = `tel:${normalizePhoneForTel(siteConfig.phone)}`;
  const whatsappNumber = normalizePhoneForWhatsApp(siteConfig.whatsapp);
  const whatsappMessage = encodeURIComponent("Merhaba, teklif almak istiyorum.");
  const whatsappHref = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <>
      {children}

      {/* Mobil sticky aksiyon barı */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white/95 px-4 py-3 shadow-xl backdrop-blur md:hidden">
        <div className="mx-auto flex max-w-3xl items-center gap-3">
          <a
            href={telHref}
            data-event="phone_click"
            aria-label="Telefonla hemen ara"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
          >
            <Phone size={16} />
            <span>Hemen Ara</span>
          </a>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            data-event="whatsapp_click"
            aria-label="WhatsApp üzerinden yaz"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#25D366" }}
          >
            <MessageCircle size={16} />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Sticky bar içerik kapatmasın diye boşluk */}
      <div className="fixed bottom-6 right-6 z-40 hidden flex-col gap-3 md:flex">
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          data-event="whatsapp_click"
          aria-label="WhatsApp üzerinden yaz"
          className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-4 text-sm font-bold text-white shadow-lg transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#25D366" }}
        >
          <MessageCircle size={18} />
          <span>WhatsApp</span>
        </a>

        <a
          href={telHref}
          data-event="phone_click"
          aria-label="Telefonla hemen ara"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-5 py-4 text-sm font-bold text-white shadow-lg transition-opacity hover:opacity-90"
        >
          <Phone size={18} />
          <span>Hemen Ara</span>
        </a>
      </div>

      <div className="h-20 md:hidden" />
    </>
  );
}
