"use client";

import { useEffect } from "react";
import { pushAnalyticsEvent } from "@/lib/analytics";

function getTrackedAnchor(target: EventTarget | null) {
  if (!(target instanceof Element)) {
    return null;
  }

  const anchor = target.closest("a[href]");

  if (!(anchor instanceof HTMLAnchorElement)) {
    return null;
  }

  const href = anchor.getAttribute("href") || "";
  const isPhoneLink = href.startsWith("tel:");
  const isWhatsAppLink = href.includes("wa.me") || href.includes("whatsapp");

  if (!isPhoneLink && !isWhatsAppLink) {
    return null;
  }

  return {
    anchor,
    eventName: isPhoneLink ? "phone_click" : "whatsapp_click",
    leadChannel:
      anchor.dataset.leadChannel || (isPhoneLink ? "phone" : "whatsapp"),
  };
}

export default function ConversionClickTracker() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const tracked = getTrackedAnchor(event.target);

      if (!tracked) {
        return;
      }

      pushAnalyticsEvent(tracked.eventName, {
        page_path: window.location.pathname,
        city: tracked.anchor.dataset.city || "",
        service: tracked.anchor.dataset.service || "",
        cta_slot: tracked.anchor.dataset.ctaSlot || "",
        lead_channel: tracked.leadChannel,
        intent_type: tracked.anchor.dataset.intentType || "",
        page_template: tracked.anchor.dataset.pageTemplate || "",
      });
    }

    document.addEventListener("click", handleClick);

    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}
