"use client";

import { ArrowRight, Phone } from "lucide-react";
import { pushAnalyticsEvent } from "@/lib/analytics";

interface HeroCTAButtonsProps {
  formLabel: string;
  phoneHref: string;
  phoneDisplay: string;
  waHref: string;
  pagePath: string;
}

export default function HeroCTAButtons({
  formLabel,
  phoneHref,
  phoneDisplay,
  waHref,
  pagePath,
}: HeroCTAButtonsProps) {
  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <a
        href="#teklif-formu"
        onClick={() =>
          pushAnalyticsEvent("click_cta_primary", {
            page_path: pagePath,
            lead_channel: "form",
            cta_slot: "hero",
          })
        }
        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-500 px-6 py-4 text-base font-bold text-white transition hover:bg-emerald-400"
      >
        {formLabel} <ArrowRight className="h-5 w-5" />
      </a>
      <a
        href={phoneHref}
        onClick={() =>
          pushAnalyticsEvent("click_call", {
            page_path: pagePath,
            lead_channel: "phone",
            cta_slot: "hero",
          })
        }
        className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-4 text-base font-bold text-white transition hover:bg-white/15"
      >
        <Phone className="h-5 w-5" /> {phoneDisplay}
      </a>
      <a
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          pushAnalyticsEvent("click_whatsapp", {
            page_path: pagePath,
            lead_channel: "whatsapp",
            cta_slot: "hero",
          })
        }
        className="inline-flex items-center justify-center rounded-2xl bg-[#25D366] px-6 py-4 text-base font-bold text-white transition hover:bg-[#20BD5A]"
      >
        WhatsApp ile Yazın
      </a>
    </div>
  );
}
