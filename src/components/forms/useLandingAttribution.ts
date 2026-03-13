"use client";

import { useEffect, useState } from "react";

export interface LandingAttribution {
  page_url: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
  referrer: string;
  timestamp: string;
}

const initialAttribution: LandingAttribution = {
  page_url: "",
  utm_source: "",
  utm_medium: "",
  utm_campaign: "",
  utm_term: "",
  utm_content: "",
  referrer: "",
  timestamp: "",
};

export function useLandingAttribution() {
  const [attribution, setAttribution] = useState<LandingAttribution>(initialAttribution);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    setAttribution({
      page_url: window.location.href,
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
      utm_term: params.get("utm_term") || "",
      utm_content: params.get("utm_content") || "",
      referrer: document.referrer || "",
      timestamp: new Date().toISOString(),
    });
  }, []);

  return attribution;
}
