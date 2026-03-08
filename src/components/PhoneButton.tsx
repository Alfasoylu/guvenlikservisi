"use client";

import { Phone } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export default function PhoneButton() {
  return (
    <a
      href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
      aria-label="Hemen ara"
      className="fixed bottom-6 left-5 z-50 flex items-center justify-center w-14 h-14 bg-accent rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-110 active:scale-95 md:hidden"
    >
      <Phone size={26} color="white" />
    </a>
  );
}
