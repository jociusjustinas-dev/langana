/** Pasiūlymo forma kontaktų puslapyje (ankorius naudoja nuorodos iš viso puslapio). */
export const KONTAKTAI_PAGE_HREF = "/kontaktai";
export const KONTAKTAI_FORM_HREF = "/kontaktai#uzklausa";

export const PRIVACY_POLICY_HREF = "/privatumo-politika";

export type KontaktaiQuoteHrefOptions = {
  /** Kai žinomas produkto slug — forma papildomai pažymi produktą (`produktas=`). */
  productSlug?: string | null;
};

/** Nuoroda į užklausos formą su šaltinio keliu — forma automatiškai pažymi „sprendimą“ (ir produktą). */
export function kontaktaiQuoteHrefFromPath(fromPath: string, opts?: KontaktaiQuoteHrefOptions): string {
  const path = fromPath.trim();
  if (!path.startsWith("/")) return KONTAKTAI_FORM_HREF;
  const q = new URLSearchParams({ from: path });
  const slug = opts?.productSlug?.trim();
  if (slug) q.set("produktas", slug);
  return `${KONTAKTAI_PAGE_HREF}?${q.toString()}#uzklausa`;
}

