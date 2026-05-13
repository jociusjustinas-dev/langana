/** Užklausos forma / API – bendros konstantos ir validacija. */

export const CONTACT_OFFER_SOLUTION_OPTIONS = [
  "Langai",
  "Durys",
  "Stumdomos sistemos",
  "Balkonų stiklinimas",
  "Terasų stiklinimas",
  "Žiemos sodai",
  "Aliuminio fasadai",
  "Aliuminio pertvaros",
  "Nežinau, reikia konsultacijos",
] as const;

export type ContactOfferSolution = (typeof CONTACT_OFFER_SOLUTION_OPTIONS)[number];

const solutionSet = new Set<string>(CONTACT_OFFER_SOLUTION_OPTIONS);

export function isContactOfferSolution(value: string): value is ContactOfferSolution {
  return solutionSet.has(value);
}

export const CONTACT_OFFER_MAX_FILE_BYTES = 10 * 1024 * 1024;

export const CONTACT_OFFER_FILE_NAME_REGEX = /\.(jpe?g|png|pdf|heic)$/i;

const MAX_MESSAGE = 8000;
const MAX_SHORT = 500;

export function clampText(value: string, max: number): string {
  const t = value.trim();
  return t.length > max ? t.slice(0, max) : t;
}

export function sanitizeOfferField(value: string, max: number): string {
  return clampText(value.replace(/\r\n/g, "\n"), max);
}

export function sanitizeMessage(value: string): string {
  return sanitizeOfferField(value, MAX_MESSAGE);
}

export function sanitizeShortField(value: string): string {
  return sanitizeOfferField(value, MAX_SHORT);
}
