/** Projekto kortelės CTA – žinutės pradžia formoje (`/kontaktai`, `OfferRequestForm`). */
export const QUOTE_PREFILL_STORAGE_KEY = "langana-quote-prefill";

/** Kai forma jau sumontuota (SPA); nustatykite prieš `hash` nuorodą. */
export const QUOTE_PREFILL_EVENT = "langana:quote-prefill";

export type QuotePrefillPayload = {
  /** Įterpiama į žinutės lauką pradžioje (po perkrovimo perskaito forma). */
  messageHint: string;
};

/** CTA iš įgyvendinto projekto kortelės – užpildo formos užuominą prieš navigaciją į `/kontaktai#uzklausa`. */
export function storeQuotePrefillForProject(title: string): void {
  if (typeof window === "undefined") return;
  const payload: QuotePrefillPayload = {
    messageHint: `Domina panašus sprendimas kaip projekte: «${title}». Aprašykite savo situaciją toliau:\n\n`,
  };
  sessionStorage.setItem(QUOTE_PREFILL_STORAGE_KEY, JSON.stringify(payload));
  window.dispatchEvent(new Event(QUOTE_PREFILL_EVENT));
}
