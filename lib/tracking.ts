"use client";

type TrackingEvent =
  | "click_whatsapp"
  | "click_header_cta"
  | "click_plan_start"
  | "click_plan_performance"
  | "click_plan_escala"
  | "click_plan_optimize"
  | "faq_open"
  | "scroll_50"
  | "scroll_90";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export function trackEvent(event: TrackingEvent, params?: Record<string, unknown>) {
  // Meta Pixel
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", event, params);
  }

  // Google Analytics / GTM
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", event, params);
  }
}
