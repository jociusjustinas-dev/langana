import type { ContactOfferSolution } from "@/lib/contact-offer-shared";
import { isContactOfferSolution } from "@/lib/contact-offer-shared";

const MAX_FROM_LEN = 240;
const MAX_PRODUCT_SLUG_LEN = 120;

/** Saugus kelias iš `?from=` — tik vidinis absoliutus kelias. */
export function sanitizeContactFromPath(raw: string | null): string | null {
  if (raw == null) return null;
  const t = decodeURIComponent(raw).trim();
  if (!t.startsWith("/")) return null;
  if (t.length > MAX_FROM_LEN) return null;
  if (/[\s<>"'`\\]/.test(t)) return null;
  return t.split("?")[0].replace(/\/+$/, "") || "/";
}

/** `produktas=` — katalogo slug (paskutinis kelio segmentas), sutampa su kontaktų formos sąrašu. */
export function sanitizeContactProductSlug(raw: string | null): string | null {
  if (raw == null) return null;
  const v = decodeURIComponent(raw).trim();
  if (!v.length || v.length > MAX_PRODUCT_SLUG_LEN) return null;
  if (!/^[a-zA-Z0-9]+(-[a-zA-Z0-9]+)*$/.test(v)) return null;
  return v.toLowerCase();
}

/** sessionStorage atsarginė kopija `?from=` (Strict Mode / po `replaceState`). */
export const CONTACT_PREFILL_FROM_SESSION_KEY = "langana-contact-from-v1";

export const CONTACT_MESSAGE_HINT_PREFIX = "Užklausa pagal peržiūrėtą puslapį";

export function contactMessageHintSessionKey(fromPath: string): string {
  return `langana-contact-msg-hint:${fromPath}`;
}

function pushUnique(list: ContactOfferSolution[], value: ContactOfferSolution) {
  if (!list.includes(value)) list.push(value);
}

/**
 * Pagal puslapio kelią nustato, kurie „Kokio sprendimo reikia?“ langeliai uždedami
 * kontaktų formoje (`/kontaktai?from=...#uzklausa`).
 */
export function contactSolutionsFromPathname(pathname: string): ContactOfferSolution[] {
  const path = pathname.replace(/\/+$/, "") || "/";
  const out: ContactOfferSolution[] = [];

  if (path.startsWith("/langai")) pushUnique(out, "Langai");
  if (path.startsWith("/durys")) pushUnique(out, "Durys");
  if (path.startsWith("/stumdomos-sistemos")) pushUnique(out, "Stumdomos sistemos");

  if (path.startsWith("/stiklinimas/balkonu-stiklinimas")) pushUnique(out, "Balkonų stiklinimas");
  else if (path.startsWith("/stiklinimas/terasu-stiklinimas")) pushUnique(out, "Terasų stiklinimas");
  else if (path.startsWith("/stiklinimas")) {
    pushUnique(out, "Balkonų stiklinimas");
    pushUnique(out, "Terasų stiklinimas");
  }

  if (path.startsWith("/ziemos-sodai")) pushUnique(out, "Žiemos sodai");

  if (path.startsWith("/aliuminio-sprendimai/aliuminio-fasadai")) pushUnique(out, "Aliuminio fasadai");
  else if (path.startsWith("/aliuminio-sprendimai/aliuminio-pertvaros")) pushUnique(out, "Aliuminio pertvaros");

  return out;
}

export function contactMessageHintFromPathname(pathname: string): string {
  return `${CONTACT_MESSAGE_HINT_PREFIX}: ${pathname}\n\n`;
}

/** Vienas leistinas `sprendimas=` variantas (be `from`) — sutampa su formos checkbox etiketėmis. */
export function contactSolutionFromQueryParam(raw: string | null): ContactOfferSolution | null {
  if (raw == null) return null;
  const v = decodeURIComponent(raw).trim();
  return isContactOfferSolution(v) ? v : null;
}
