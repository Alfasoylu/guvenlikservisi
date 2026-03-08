"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/site-config";

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
      className="fixed bottom-6 right-5 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 active:scale-95"
      style={{ backgroundColor: "#25D366" }}
    >
      <MessageCircle size={28} fill="white" color="white" />
    </a>
  );
}
