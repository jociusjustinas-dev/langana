/** Vietinė slapukų / rinkodaros sutikimo būsena (BDAR, Google Consent Mode paruošimui). */
export const COOKIE_CONSENT_STORAGE_KEY = "langana-cookie-consent-v1";

export type CookieConsentChoice = "essential" | "all";

export function getStoredCookieConsent(): CookieConsentChoice | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
    if (raw === "essential" || raw === "all") return raw;
    return null;
  } catch {
    return null;
  }
}

export function setStoredCookieConsent(choice: CookieConsentChoice): void {
  try {
    localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, choice);
  } catch {
    /* ignore */
  }
}

/** Jei vėliau prijungsite gtag / GTM su Consent Mode – iškvieskite po vartotojo pasirinkimo. */
export function pushConsentToGoogleTag(choice: CookieConsentChoice): void {
  if (typeof window === "undefined") return;

  const analyticsGranted = choice === "all";

  window.dispatchEvent(
    new CustomEvent<CookieConsentChoice>("langana:cookie-consent", { detail: choice }),
  );

  const w = window as Window & {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  };

  w.dataLayer = w.dataLayer ?? [];
  w.dataLayer.push({
    event: "langana_cookie_consent",
    analytics_storage: analyticsGranted ? "granted" : "denied",
  });

  if (typeof w.gtag === "function") {
    w.gtag("consent", "update", {
      analytics_storage: analyticsGranted ? "granted" : "denied",
      ad_storage: analyticsGranted ? "granted" : "denied",
      ad_user_data: analyticsGranted ? "granted" : "denied",
      ad_personalization: analyticsGranted ? "granted" : "denied",
    });
  }
}
