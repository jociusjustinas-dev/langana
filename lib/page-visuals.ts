import { assets } from "@/lib/figma-assets";

const H = assets.hero;
const L = assets.categoryLangai;

/** Hero nuotraukos pagal pagrindinės kategorijos slug kortelėms / stub puslapiams. */
export function catalogCategoryImage(slug: string): string {
  switch (slug) {
    case "langai":
      return H.featured;
    default:
      return H.featured;
  }
}

/** Mažos miniatiūros subkategorijų sąraše (katalogas ir pan.). */
export function subcategoryListIcon(slug: string): string {
  switch (slug) {
    case "plastikiniai-langai":
      return L.carouselPlastic;
    case "aliuminio-langai":
      return H.aluminumLangai;
    default:
      return H.featured;
  }
}

/** Tuščios „stub“ vidaus puslapės viršaus iliustracija. */
export function stubPreviewImage(slug: string): string {
  const map: Record<string, string> = {
    durys: H.doors,
    "plastikines-durys": H.doors,
    "aliuminio-durys": H.aluminum,
    "metalines-durys": H.doors,
    "priesgaisrines-durys": H.doors,
    "specialios-paskirties-durys": H.doors,
    "aliuminio-sprendimai": H.aluminum,
    "aliuminio-fasadai": H.aluminum,
    "aliuminio-pertvaros": H.aluminum,
    "stumdomos-sistemos": H.sliding,
    "aliumines-stumdomos-sistemos": H.sliding,
    "plastikines-stumdomos-sistemos": H.sliding,
    stiklinimas: H.balcony,
    plastiku: L.carouselPlastic,
    aliuminiu: H.aluminum,
    siltos: H.balcony,
    saltos: H.sliding,
    "balkonu-stiklinimas": H.balcony,
    "terasu-stiklinimas": H.balcony,
    "ziemos-sodai": H.balcony,
    "siltos-sistemos": H.featured,
    "saltos-sistemos": H.sliding,
    langai: H.featured,
    "aliuminio-langai": H.aluminumLangai,
    "plastikiniai-langai": L.carouselPlastic,
  };
  return map[slug] ?? H.featured;
}
