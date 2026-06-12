"use client";

import Script from "next/script";

/**
 * Umami Analytics – privacy-friendly, cookiefrei, DSGVO-konform.
 *
 * Configuration via env vars:
 *   NEXT_PUBLIC_UMAMI_WEBSITE_ID   (required, z.B. "12345678-abcd-...")
 *   NEXT_PUBLIC_UMAMI_SCRIPT_URL   (optional, default: https://cloud.umami.is/script.js)
 *
 * Custom events: window.umami?.track("event_name", { ... })
 */
export default function UmamiAnalytics() {
  const websiteId = process.env.NEXT_PUBLIC_UMAMI_WEBSITE_ID;
  const scriptUrl =
    process.env.NEXT_PUBLIC_UMAMI_SCRIPT_URL ?? "https://cloud.umami.is/script.js";

  // Don't load on dev unless explicitly configured
  if (!websiteId) return null;

  return (
    <Script
      src={scriptUrl}
      data-website-id={websiteId}
      strategy="afterInteractive"
      defer
    />
  );
}
