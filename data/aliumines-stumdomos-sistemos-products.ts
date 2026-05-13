import type { ProductCardProps } from "@/components/catalog/ProductCard";
import { catalogProductSlugFromHref } from "@/data/catalog";
import type { ProductInnerSimilarItem } from "@/data/product-inner/types";

export const dp180SistemaProduct: ProductCardProps = {
  id: "dp-180-sistema",
  title: "DP 180 sistema",
  categoryLabel: "Aliuminės stumdomos sistemos",
  energyClass: "Didelėms angoms",
  description:
    "Pakeliama-slankioji Yawal aliuminio sistema išorinėms sienoms, langams ir durims. Skirta dideliems stiklo plotams, gerai šilumos izoliacijai ir patogiam naudojimui gyvenamuosiuose bei viešosios paskirties pastatuose.",
  image: "/images/products/dp-180-sistema.png",
  gallery: ["/images/products/dp-180-sistema.png"],
  operationTypes: [
    { label: "Pakeliamos-slankios durys", icon: "MoveHorizontal" },
    { label: "Išorinės sienos konstrukcija", icon: "Building2" },
    { label: "Terasos durys", icon: "DoorOpen" },
    { label: "Dideli stiklo plotai", icon: "Maximize2" },
    { label: "90° stiklintas kampas", icon: "PanelsTopLeft" },
  ],
  benefits: [
    { label: "Uf nuo 1,1 W/m²K", icon: "ThermometerSun" },
    { label: "Varčia iki 440 kg", icon: "Weight" },
    { label: "Aukštis iki 3300 mm", icon: "Ruler" },
    { label: "Įleistas slenkstis", icon: "Minus" },
    { label: "Automatinis atidarymas", icon: "MousePointerClick" },
    { label: "Suderinama su Yawal sistemomis", icon: "Combine" },
  ],
  href: "/stumdomos-sistemos/aliumines-stumdomos-sistemos/dp-180-sistema",
  quoteHref: "/kontaktai#uzklausa",
};

export const dp150tSistemaProduct: ProductCardProps = {
  id: "dp-150t-sistema",
  title: "DP 150T sistema",
  categoryLabel: "Aliuminės stumdomos sistemos",
  energyClass: "Terasoms ir žiemos sodams",
  description:
    "Pakeliama-slankioji Yawal aliuminio durų sistema, skirta dideliems įstiklintiems plotams, žiemos sodams, išorinėms atitvaroms ir patogiam išėjimui į terasą.",
  image: "/images/products/dp-150t-sistema.png",
  gallery: ["/images/products/dp-150t-sistema.png"],
  operationTypes: [
    { label: "Pakeliamos-slankios durys", icon: "MoveHorizontal" },
    { label: "Terasos durys", icon: "DoorOpen" },
    { label: "Žiemos sodai", icon: "Home" },
    { label: "Išorinės atitvaros", icon: "Building2" },
    { label: "Dideli stiklo plotai", icon: "Maximize2" },
  ],
  benefits: [
    { label: "Iki 3300 mm aukščio", icon: "Ruler" },
    { label: "Varčia iki 430 kg", icon: "Weight" },
    { label: "Gera šilumos izoliacija", icon: "ThermometerSun" },
    { label: "Įvairūs užpildai", icon: "PanelsTopLeft" },
    { label: "Kelių bėgių konstrukcijos", icon: "Rows3" },
    { label: "Suderinama su Yawal sistemomis", icon: "Combine" },
  ],
  href: "/stumdomos-sistemos/aliumines-stumdomos-sistemos/dp-150t-sistema",
  quoteHref: "/kontaktai#uzklausa",
};

export const dp100SistemaProduct: ProductCardProps = {
  id: "dp-100-sistema",
  title: "DP 100 sistema",
  categoryLabel: "Aliuminės stumdomos sistemos",
  energyClass: "Ekonomiškas sprendimas",
  description:
    "Slankioji ir pakeliama-slankioji Yawal aliuminio sistema ekonomiškai išorinei pastato konstrukcijai. Tinka praktiškiems ir šilumos izoliaciją turintiems stumdomiems sprendimams.",
  image: "/images/products/dp-100-sistema.png",
  gallery: ["/images/products/dp-100-sistema.png"],
  operationTypes: [
    { label: "Slankiosios durys", icon: "MoveHorizontal" },
    { label: "Pakeliamos-slankiosios durys", icon: "DoorOpen" },
    { label: "Išorinės konstrukcijos", icon: "Building2" },
    { label: "Dviejų bėgių sistema", icon: "Rows2" },
    { label: "Trijų bėgių sistema", icon: "Rows3" },
  ],
  benefits: [
    { label: "Ekonomiškas sprendimas", icon: "BadgeEuro" },
    { label: "Šilumos skyrikliai", icon: "ThermometerSun" },
    { label: "Įvairūs užpildai", icon: "PanelsTopLeft" },
    { label: "2 arba 3 bėgių konstrukcijos", icon: "Rows3" },
    { label: "Modernus sprendimas", icon: "Sparkles" },
    { label: "Suderinama su Yawal sistemomis", icon: "Combine" },
  ],
  href: "/stumdomos-sistemos/aliumines-stumdomos-sistemos/dp-100-sistema",
  quoteHref: "/kontaktai#uzklausa",
};

export const l50SistemaProduct: ProductCardProps = {
  id: "l-50-sistema",
  title: "L 50 sistema",
  categoryLabel: "Aliuminės stumdomos sistemos",
  energyClass: "Balkonams ir lodžijoms",
  description:
    "Moderni aliuminio profilių sistema slankiesiems įstiklintiems elementams balkonams, lodžijoms ir pertvaroms. Tinka lengvoms konstrukcijoms, kai svarbi apsauga nuo triukšmo, atmosferos poveikio ir patogus naudojimas.",
  image: "/images/products/l-50-sistema.png",
  gallery: ["/images/products/l-50-sistema.png"],
  operationTypes: [
    { label: "Balkonų stiklinimas", icon: "PanelsTopLeft" },
    { label: "Lodžijos", icon: "Building2" },
    { label: "Slankios pertvaros", icon: "PanelTop" },
    { label: "2 bėgelių konstrukcija", icon: "Rows2" },
    { label: "3 bėgelių konstrukcija", icon: "Rows3" },
  ],
  benefits: [
    { label: "Pagerina patalpų saugumą", icon: "ShieldCheck" },
    { label: "Saugo nuo triukšmo", icon: "VolumeX" },
    { label: "Saugo nuo atmosferos poveikio", icon: "CloudRain" },
    { label: "Įvairūs užpildai", icon: "PanelsTopLeft" },
    { label: "2 arba 3 bėgelių konstrukcijos", icon: "Rows3" },
    { label: "Suderinama su Yawal sistemomis", icon: "Combine" },
  ],
  href: "/stumdomos-sistemos/aliumines-stumdomos-sistemos/l-50-sistema",
  quoteHref: "/kontaktai#uzklausa",
};

export const harmonicSistemaProduct: ProductCardProps = {
  id: "sulankstomos-sistemos-harmonic",
  title: "Sulankstomos sistemos (Harmonic)",
  categoryLabel: "Aliuminės stumdomos sistemos",
  energyClass: "Erdvėms atverti",
  description:
    "Sulankstomų durų sistema, leidžianti atverti dideles erdves arba patogiai padalinti patalpą į atskiras zonas. Gali būti naudojama tiek išorinėms konstrukcijoms su šilumos izoliacija, tiek vidinėms pertvaroms.",
  image: "/images/products/sulankstomos-sistemos-harmonic.png",
  gallery: ["/images/products/sulankstomos-sistemos-harmonic.png"],
  operationTypes: [
    { label: "Sulankstomos durys", icon: "PanelsTopLeft" },
    { label: "Išorinės konstrukcijos", icon: "Building2" },
    { label: "Vidinės pertvaros", icon: "PanelTop" },
    { label: "Didelės atveriamos erdvės", icon: "Maximize2" },
    { label: "Patalpų zonavimas", icon: "LayoutGrid" },
  ],
  benefits: [
    { label: "Galima atverti dideles erdves", icon: "Maximize2" },
    { label: "Paprastas ir saugus naudojimas", icon: "ShieldCheck" },
    { label: "Interjero kūrimo galimybės", icon: "Sparkles" },
    { label: "Zonavimas be papildomų sienų", icon: "PanelTop" },
    { label: "Skirtingi profiliai pagal paskirtį", icon: "Layers3" },
    { label: "Suderinama su Yawal sistemomis", icon: "Combine" },
  ],
  href: "/stumdomos-sistemos/aliumines-stumdomos-sistemos/sulankstomos-sistemos-harmonic",
  quoteHref: "/kontaktai#uzklausa",
};

export const ALUMINUM_SLIDING_PRODUCTS: ProductCardProps[] = [
  dp180SistemaProduct,
  dp150tSistemaProduct,
  dp100SistemaProduct,
  l50SistemaProduct,
  harmonicSistemaProduct,
];

export function getAluminumSlidingProductBySlug(slug: string): ProductCardProps | undefined {
  return ALUMINUM_SLIDING_PRODUCTS.find((p) => catalogProductSlugFromHref(p.href) === slug);
}

export function getOtherAluminumSlidingAsSimilarItems(currentSlug: string): ProductInnerSimilarItem[] {
  return ALUMINUM_SLIDING_PRODUCTS.filter((p) => catalogProductSlugFromHref(p.href) !== currentSlug).map((p) => ({
    title: p.title,
    description: p.description,
    href: p.href,
  }));
}
