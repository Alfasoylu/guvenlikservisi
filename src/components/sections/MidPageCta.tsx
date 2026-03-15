"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site-config";
import { pushAnalyticsEvent } from "@/lib/analytics";
import { Phone, MessageCircle, ArrowRight } from "lucide-react";

interface MidPageCtaProps {
  title: string;
  subtitle: string;
  ctaLabel?: string;
  ctaHref?: string;
  whatsappMessage?: string;
  bgClass?: string;
}

export default function MidPageCta({
  title,
  subtitle,
  ctaLabel = "Ücretsiz Teklif Al",
  ctaHref = "#quote-form",
  whatsappMessage = "Merhaba, güvenlik sistemi hakkında bilgi almak istiyorum.",
  bgClass = "bg-accent",
}: MidPageCtaProps) {
  const phoneClean = siteConfig.phone.replace(/\s/g, "");
  const waLink = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;

  function track(channel: string) {
    pushAnalyticsEvent("click_cta_primary", {
      page_path: typeof window !== "undefined" ? window.location.pathname : "",
      lead_channel: channel,
      cta_slot: "mid_page_cta",
    });
  }

  return (
    <section className={`py-12 md:py-16 ${bgClass}`}>
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-3 text-xl font-bold text-white sm:text-2xl">
            {title}
          </h2>
          <p className="mx-auto mb-6 max-w-2xl text-sm leading-7 text-white/85">
            {subtitle}
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={ctaHref}
              onClick={() => track("form")}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 font-bold text-primary transition-colors hover:bg-white/90 sm:w-auto"
            >
              {ctaLabel}
              <ArrowRight size={16} />
            </Link>
            <a
              href={`tel:${phoneClean}`}
              onClick={() => track("phone")}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/30 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
            >
              <Phone size={16} />
              {siteConfig.phone}
            </a>
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track("whatsapp")}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 font-semibold text-white transition-colors hover:bg-[#20BD5A] sm:w-auto"
            >
              <MessageCircle size={16} />
              WhatsApp
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
