import type { Metadata } from "next";
import { Phone } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export const metadata: Metadata = {
      robots: { index: true, follow: true },
};

export default function TeklifLayout({
      children,
}: {
      children: React.ReactNode;
}) {
      const phoneNumber = siteConfig.phone.replace(/\s/g, "");

  return (
          <>
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
                        </a>a>
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
                        </a>a>
                </div>div>
                <div className="h-20 md:hidden" />
          </>>
        );
}</>
