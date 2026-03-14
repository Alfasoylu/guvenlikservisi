export interface CityServiceTrackingContext {
  page_path: string;
  city: string;
  service: string;
  page_template: "city_service";
}

export interface AnalyticsEventPayload {
  page_path?: string;
  city?: string;
  service?: string;
  cta_slot?: string;
  lead_channel?: string;
  intent_type?: string;
  page_template?: string;
  form_source?: string;
  service_type?: string;
  [key: string]: string | number | boolean | undefined;
}

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (command: string, eventName: string, payload?: Record<string, unknown>) => void;
  }
}

function sanitizePayload(payload: AnalyticsEventPayload) {
  return Object.fromEntries(
    Object.entries(payload).filter(([, value]) => value !== undefined && value !== "")
  );
}

export function getCityServiceTrackingContext(pathname: string): CityServiceTrackingContext | null {
  const segments = pathname.split("/").filter(Boolean);

  if (segments.length !== 2) {
    return null;
  }

  return {
    page_path: `/${segments[0]}/${segments[1]}`,
    city: segments[0],
    service: segments[1],
    page_template: "city_service",
  };
}

export function pushAnalyticsEvent(eventName: string, payload: AnalyticsEventPayload) {
  if (typeof window === "undefined") {
    return;
  }

  const sanitizedPayload = sanitizePayload(payload);

  window.dataLayer?.push({
    event: eventName,
    event_name: eventName,
    ...sanitizedPayload,
  });

  window.gtag?.("event", eventName, sanitizedPayload);
}
