"use client";

import { useEffect, useState } from "react";

export interface LandingAttribution {
  page_url: string;
  page_type: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
  referrer: string;
  timestamp: string;
  gclid: string;
  fbclid: string;
  msclkid: string;
}

const initialAttribution: LandingAttribution = {
  page_url: "",
  page_type: "",
  utm_source: "",
  utm_medium: "",
  utm_campaign: "",
  utm_term: "",
  utm_content: "",
  referrer: "",
  timestamp: "",
  gclid: "",
  fbclid: "",
  msclkid: "",
};

function getPageType(pathname: string) {
  if (!pathname) return "";
  if (pathname.startsWith("/teklif/")) return "landing_page";
  if (pathname.startsWith("/blog/")) return "blog_post";

  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 1) return "city_page";
  if (segments.length === 2) return "city_service_page";

  return "site_page";
}

export function useLandingAttribution() {
  const [attribution, setAttribution] = useState<LandingAttribution>(initialAttribution);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    setAttribution({
      page_url: window.location.href,
      page_type: getPageType(window.location.pathname),
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
      utm_term: params.get("utm_term") || "",
      utm_content: params.get("utm_content") || "",
      referrer: document.referrer || "",
      timestamp: new Date().toISOString(),
      gclid: params.get("gclid") || "",
      fbclid: params.get("fbclid") || "",
      msclkid: params.get("msclkid") || "",
    });
  }, []);

  return attribution;
}
