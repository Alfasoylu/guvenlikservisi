"use client";

import { siteConfig } from "@/data/site-config";
import { pushAnalyticsEvent } from "@/lib/analytics";

interface WhatsAppButtonProps {
  message?: string;
}

export default function WhatsAppButton({
  message = "Merhaba, güvenlik sistemi kurulumu hakkında bilgi almak istiyorum.",
}: WhatsAppButtonProps) {
  const url = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp ile iletişime geç"
      onClick={() =>
        pushAnalyticsEvent("click_whatsapp", {
          page_path:
            typeof window !== "undefined" ? window.location.pathname : "",
          lead_channel: "whatsapp",
          cta_slot: "floating_whatsapp",
        })
      }
      className="fixed bottom-6 right-5 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 active:scale-95"
      style={{ backgroundColor: "#25D366" }}
    >
      <svg
        viewBox="0 0 32 32"
        className="w-7 h-7 fill-white"
        aria-hidden="true"
      >
        <path d="M19.11 17.21c-.27-.14-1.59-.78-1.84-.87-.25-.09-.43-.14-.61.14-.18.27-.7.87-.85 1.05-.16.18-.32.2-.59.07-.27-.14-1.16-.43-2.2-1.38-.81-.72-1.36-1.61-1.52-1.89-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.46.09-.18.05-.34-.02-.48-.07-.14-.61-1.48-.84-2.03-.22-.53-.44-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27s.98 2.64 1.11 2.82c.14.18 1.92 2.93 4.65 4.11.65.28 1.16.45 1.56.58.65.21 1.24.18 1.71.11.52-.08 1.59-.65 1.82-1.28.23-.63.23-1.18.16-1.28-.07-.09-.25-.16-.52-.3Z" />
        <path d="M16.03 3.2c-6.99 0-12.67 5.67-12.67 12.65 0 2.22.58 4.39 1.68 6.31L3.2 28.8l6.8-1.79a12.7 12.7 0 0 0 6.02 1.53h.01c6.98 0 12.67-5.68 12.67-12.66 0-3.38-1.32-6.56-3.71-8.95A12.57 12.57 0 0 0 16.03 3.2Zm0 23.19h-.01a10.5 10.5 0 0 1-5.35-1.46l-.38-.22-4.03 1.06 1.08-3.93-.25-.4a10.48 10.48 0 0 1-1.62-5.58c0-5.8 4.73-10.52 10.55-10.52 2.81 0 5.45 1.09 7.43 3.08a10.43 10.43 0 0 1 3.08 7.43c0 5.81-4.73 10.54-10.5 10.54Z" />
      </svg>
    </a>
  );
}
