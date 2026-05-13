import type { ProductCardProps } from "@/components/catalog/ProductCard";

import { catalogProductSlugFromHref } from "@/data/catalog";
import { aluminumLangaiYawalProductImages } from "@/lib/figma-assets";

/** TM 102HI — pilnas kortelės / vidinio puslapio produktas. */
export const tm102hiSistemaProduct: ProductCardProps = {
  id: "tm-102hi-sistema",
  title: "TM 102HI sistema",
  categoryLabel: "Aliuminiai langai",
  energyClass: "Pasyviems pastatams",
  description:
    "Aukščiausios šilumos izoliacijos Yawal aliuminio profilių sistema, skirta energiją taupantiems ir pasyviems pastatams. Tinka moderniems langams, durims ir vitrinoms.",
  image: "/images/products/tm-102hi-sistema.png",
  operationTypes: [
    { label: "Varstomas langas", icon: "Square" },
    { label: "Atverčiamas langas", icon: "PanelLeftOpen" },
    { label: "Balkono durys su žemu slenksčiu", icon: "DoorOpen" },
    { label: "Vitrininė konstrukcija", icon: "PanelsTopLeft" },
    { label: "Didelių gabaritų konstrukcijos", icon: "Maximize2" },
  ],
  benefits: [
    { label: "Uw nuo 0,4 W/m²K", icon: "ThermometerSun" },
    { label: "Labai gera šilumos izoliacija", icon: "Leaf" },
    { label: "Tinka pasyviems pastatams", icon: "Home" },
    { label: "Didelės ir sunkios konstrukcijos", icon: "Maximize2" },
    { label: "Platus stiklinimo pasirinkimas", icon: "PanelsTopLeft" },
    { label: "Galima jungti su kitomis Yawal sistemomis", icon: "Combine" },
  ],
  href: "/langai/tm-102hi-sistema",
  quoteHref: "/kontaktai#uzklausa",
};

/** TM 77HI — vidinis puslapis `/langai/tm-77hi-sistema`. */
export const tm77hiSistemaProduct: ProductCardProps = {
  id: "tm-77hi-sistema",
  title: "TM 77HI sistema",
  categoryLabel: "Aliuminiai langai",
  energyClass: "Moderniems pastatams",
  description:
    "Saugi ir moderni Yawal aliuminio sistema, skirta langams, durims ir didesnėms konstrukcijoms. Padeda pasiekti gerus šilumos, garso izoliacijos, vandens nepralaidumo ir atsparumo vėjui parametrus.",
  image: aluminumLangaiYawalProductImages.tm77hi,
  gallery: [aluminumLangaiYawalProductImages.tm77hi],
  operationTypes: [
    { label: "Varstomas langas", icon: "Square" },
    { label: "Atverčiamas langas", icon: "PanelLeftOpen" },
    { label: "Balkono durys su žemu slenksčiu", icon: "DoorOpen" },
    { label: "Didelių matmenų konstrukcijos", icon: "Maximize2" },
    { label: "Modernūs konstrukciniai sprendimai", icon: "Building2" },
  ],
  benefits: [
    { label: "Uf 0,8–1,5 W/m²K", icon: "ThermometerSun" },
    { label: "Gera šilumos izoliacija", icon: "Leaf" },
    { label: "Mažina šildymo išlaidas", icon: "BadgeEuro" },
    { label: "Tinka didelių matmenų konstrukcijoms", icon: "Maximize2" },
    { label: "Suderinama su apkaustais ir valdymo elementais", icon: "Settings" },
    { label: "Galima jungti su kitomis Yawal sistemomis", icon: "Combine" },
  ],
  href: "/langai/tm-77hi-sistema",
  quoteHref: "/kontaktai#uzklausa",
};

/** TM 74HI — vidinis puslapis `/langai/tm-74hi-sistema`. */
export const tm74hiSistemaProduct: ProductCardProps = {
  id: "tm-74hi-sistema",
  title: "TM 74HI sistema",
  categoryLabel: "Aliuminiai langai",
  energyClass: "Universalus sprendimas",
  description:
    "Aliuminio langų, durų ir vitrinų sistema su labai gerais šilumos izoliacijos parametrais. Tinka gyvenamiesiems, viešosios paskirties ir pramoniniams pastatams.",
  image: aluminumLangaiYawalProductImages.tm74hi,
  gallery: [aluminumLangaiYawalProductImages.tm74hi],
  operationTypes: [
    { label: "Varstomas langas", icon: "Square" },
    { label: "Atverčiamas langas", icon: "PanelLeftOpen" },
    { label: "Durys", icon: "DoorOpen" },
    { label: "Vitrinos", icon: "PanelsTopLeft" },
    { label: "Fasadinės sistemos", icon: "Building2" },
  ],
  benefits: [
    { label: "Labai gera šilumos izoliacija", icon: "ThermometerSun" },
    { label: "Tinka didelių matmenų konstrukcijoms", icon: "Maximize2" },
    { label: "Profilius galima lenkti", icon: "Orbit" },
    { label: "Galima montuoti fasadinėse sistemose", icon: "Building2" },
    { label: "Galimi paslėpti vyriai", icon: "Settings" },
    { label: "Galima jungti su kitomis Yawal sistemomis", icon: "Combine" },
  ],
  href: "/langai/tm-74hi-sistema",
  quoteHref: "/kontaktai#uzklausa",
};

/** TM 62 — vidinis puslapis `/langai/tm-62-sistema`. */
export const tm62SistemaProduct: ProductCardProps = {
  id: "tm-62-sistema",
  title: "TM 62 sistema",
  categoryLabel: "Aliuminiai langai",
  energyClass: "3 kamerų sistema",
  description:
    "Trijų kamerų aliuminio profilių sistema modernioms langų ir durų konstrukcijoms su šilumos izoliacija. Tinka gyvenamiesiems ir viešosios paskirties pastatams, kuriuose svarbus tvirtumas, funkcionalumas ir intensyvus naudojimas.",
  image: aluminumLangaiYawalProductImages.tm62,
  gallery: [aluminumLangaiYawalProductImages.tm62],
  operationTypes: [
    { label: "Varstomas langas", icon: "Square" },
    { label: "Atverčiamas langas", icon: "PanelLeftOpen" },
    { label: "Durys", icon: "DoorOpen" },
    { label: "Vitrinos", icon: "PanelsTopLeft" },
    { label: "Didelių gabaritų konstrukcijos", icon: "Maximize2" },
  ],
  benefits: [
    { label: "3 kamerų sistema", icon: "Rows3" },
    { label: "Sustiprinti profiliai", icon: "ShieldCheck" },
    { label: "Tinka didelių gabaritų konstrukcijoms", icon: "Maximize2" },
    { label: "Galima naudoti įvairaus tipo užpildus", icon: "PanelsTopLeft" },
    { label: "Profilius galima lenkti", icon: "Orbit" },
    { label: "Suderinama su Yawal sistemomis", icon: "Combine" },
  ],
  href: "/langai/tm-62-sistema",
  quoteHref: "/kontaktai#uzklausa",
};

/** PI 50N — vidinis puslapis `/langai/pi-50n-sistema`. */
export const pi50nSistemaProduct: ProductCardProps = {
  id: "pi-50n-sistema",
  title: "PI 50N sistema",
  categoryLabel: "Aliuminiai langai",
  energyClass: "Universali sistema",
  description:
    "Išplėsta aliuminio profilių sistema, skirta įvairių tipų langams, durims, vitrinoms, pertvaroms ir prieangiams su šilumos izoliacija.",
  image: aluminumLangaiYawalProductImages.pi50n,
  gallery: [aluminumLangaiYawalProductImages.pi50n],
  operationTypes: [
    { label: "Langai", icon: "Square" },
    { label: "Durys", icon: "DoorOpen" },
    { label: "Vitrinos", icon: "PanelsTopLeft" },
    { label: "Pertvaros", icon: "PanelTop" },
    { label: "Prieangiai", icon: "Building2" },
  ],
  benefits: [
    { label: "Universalus pritaikymas", icon: "Combine" },
    { label: "Mažesnis profilių kiekis", icon: "Layers3" },
    { label: "Sustiprinti profiliai", icon: "ShieldCheck" },
    { label: "Tinka didelių gabaritų konstrukcijoms", icon: "Maximize2" },
    { label: "Galimi paviršiniai arba paslėpti vyriai", icon: "Settings" },
    { label: "Galima jungti su kitomis Yawal sistemomis", icon: "Combine" },
  ],
  href: "/langai/pi-50n-sistema",
  quoteHref: "/kontaktai#uzklausa",
};

/** TM 62HI — vidinis puslapis `/langai/tm-62hi-sistema`. */
export const tm62hiSistemaProduct: ProductCardProps = {
  id: "tm-62hi-sistema",
  title: "TM 62HI sistema",
  categoryLabel: "Aliuminiai langai",
  energyClass: "Šiltesnė TM 62 versija",
  description:
    "Aliuminio konstrukcijų sistema su šilumos izoliacija langams ir durims. Tinka gyvenamiesiems bei viešosios paskirties pastatams, kuriuose svarbus sandarumas, patikimumas ir intensyvus naudojimas.",
  image: aluminumLangaiYawalProductImages.tm62hi,
  gallery: [aluminumLangaiYawalProductImages.tm62hi],
  operationTypes: [
    { label: "Varstomas langas", icon: "Square" },
    { label: "Atverčiamas langas", icon: "PanelLeftOpen" },
    { label: "Durys", icon: "DoorOpen" },
    { label: "Vitrinos", icon: "PanelsTopLeft" },
    { label: "Apsaugoti langai ir durys", icon: "LockKeyhole" },
  ],
  benefits: [
    { label: "20–40 % geresnė šilumos izoliacija nei TM 62", icon: "ThermometerSun" },
    { label: "Mažina šildymo išlaidas", icon: "BadgeEuro" },
    { label: "3 kamerų profilių konstrukcija", icon: "Rows3" },
    { label: "Galimi paslėpti vyriai ir apkaustai", icon: "Settings" },
    { label: "Galima geresnė apsauga nuo įsilaužimo", icon: "LockKeyhole" },
    { label: "Galima jungti su kitomis Yawal sistemomis", icon: "Combine" },
  ],
  href: "/langai/tm-62hi-sistema",
  quoteHref: "/kontaktai#uzklausa",
};

export const ALUMINUM_LANGAI_PRODUCTS: ProductCardProps[] = [
  tm102hiSistemaProduct,
  tm77hiSistemaProduct,
  tm74hiSistemaProduct,
  tm62hiSistemaProduct,
  tm62SistemaProduct,
  pi50nSistemaProduct,
];

export function getAluminumLangaiProductBySlug(slug: string): ProductCardProps | undefined {
  return ALUMINUM_LANGAI_PRODUCTS.find((p) => catalogProductSlugFromHref(p.href) === slug);
}

/** Pagal produkto kelią (pvz. `/langai/tm-102hi-sistema`). */
export function getAluminumLangaiProductByHref(href: string): ProductCardProps | undefined {
  const path = href.trim().split("#")[0]?.replace(/\/+$/, "") ?? "";
  if (!path) return undefined;
  return getAluminumLangaiProductBySlug(catalogProductSlugFromHref(path));
}
