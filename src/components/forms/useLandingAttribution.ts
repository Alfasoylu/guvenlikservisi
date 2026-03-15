"use client";

import { useState } from "react";

export interface LandingAttribution {
  session_id: string;
  page_url: string;
  page_type: string;
  page_path: string;
  page_title: string;
  landing_page_url: string;
  landing_page_type: string;
  landing_page_path: string;
  landing_timestamp: string;
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
  session_id: "",
  page_url: "",
  page_type: "",
  page_path: "",
  page_title: "",
  landing_page_url: "",
  landing_page_type: "",
  landing_page_path: "",
  landing_timestamp: "",
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

const SESSION_STORAGE_KEY = "gvn_session_attribution_v1";

function getPageType(pathname: string) {
  if (!pathname) return "";
  if (pathname.startsWith("/teklif/")) return "landing_page";
  if (pathname.startsWith("/blog/")) return "blog_post";
  if (pathname.startsWith("/sorun/")) return "problem_page";

  if (
    pathname === "/istanbul-kamera-sistemi-kurulumu" ||
    pathname === "/istanbul-alarm-sistemi" ||
    pathname === "/istanbul-yangin-alarm-sistemi" ||
    pathname === "/istanbul-kartli-gecis-sistemi" ||
    pathname === "/istanbul-kamera-teknik-servis" ||
    pathname === "/istanbul-kamera-bakim-servisi" ||
    pathname === "/istanbul-ip-kamera-montaji"
  ) {
    return "istanbul_money_page";
  }

  const segments = pathname.split("/").filter(Boolean);

  if (segments.length === 1) return "city_page";
  if (segments.length === 2) return "city_service_page";
  if (segments.length === 3) return "district_service_page";

  return "site_page";
}

function createSessionId() {
  return `sess_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
}

export function useLandingAttribution() {
  const [attribution] = useState<LandingAttribution>(() => {
    if (typeof window === "undefined") {
      return initialAttribution;
    }

    const pathname = window.location.pathname;
    const pageType = getPageType(pathname);
    const params = new URLSearchParams(window.location.search);
    const now = new Date().toISOString();
    const pageUrl = window.location.href;
    const pageTitle = document.title || "";
    const storedSession = window.sessionStorage.getItem(SESSION_STORAGE_KEY);

    const baseAttribution = {
      session_id: createSessionId(),
      page_url: pageUrl,
      page_type: pageType,
      page_path: pathname,
      page_title: pageTitle,
      landing_page_url: pageUrl,
      landing_page_type: pageType,
      landing_page_path: pathname,
      landing_timestamp: now,
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
      utm_term: params.get("utm_term") || "",
      utm_content: params.get("utm_content") || "",
      referrer: document.referrer || "",
      timestamp: now,
      gclid: params.get("gclid") || "",
      fbclid: params.get("fbclid") || "",
      msclkid: params.get("msclkid") || "",
    } satisfies LandingAttribution;

    if (!storedSession) {
      window.sessionStorage.setItem(
        SESSION_STORAGE_KEY,
        JSON.stringify(baseAttribution),
      );

      return baseAttribution;
    }

    try {
      const parsed = JSON.parse(storedSession) as Partial<LandingAttribution>;

      return {
        ...baseAttribution,
        session_id: parsed.session_id || baseAttribution.session_id,
        landing_page_url:
          parsed.landing_page_url || baseAttribution.landing_page_url,
        landing_page_type:
          parsed.landing_page_type || baseAttribution.landing_page_type,
        landing_page_path:
          parsed.landing_page_path || baseAttribution.landing_page_path,
        landing_timestamp:
          parsed.landing_timestamp || baseAttribution.landing_timestamp,
        utm_source: parsed.utm_source || baseAttribution.utm_source,
        utm_medium: parsed.utm_medium || baseAttribution.utm_medium,
        utm_campaign: parsed.utm_campaign || baseAttribution.utm_campaign,
        utm_term: parsed.utm_term || baseAttribution.utm_term,
        utm_content: parsed.utm_content || baseAttribution.utm_content,
        referrer: parsed.referrer || baseAttribution.referrer,
        gclid: parsed.gclid || baseAttribution.gclid,
        fbclid: parsed.fbclid || baseAttribution.fbclid,
        msclkid: parsed.msclkid || baseAttribution.msclkid,
      };
    } catch {
      window.sessionStorage.setItem(
        SESSION_STORAGE_KEY,
        JSON.stringify(baseAttribution),
      );

      return baseAttribution;
    }
  });

  return attribution;
}
