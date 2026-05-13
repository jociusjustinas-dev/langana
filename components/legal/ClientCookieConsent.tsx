"use client";

import dynamic from "next/dynamic";

const CookieConsentBanner = dynamic(
  () => import("@/components/legal/CookieConsentBanner").then((m) => m.CookieConsentBanner),
  { ssr: false },
);

export function ClientCookieConsent() {
  return <CookieConsentBanner />;
}
