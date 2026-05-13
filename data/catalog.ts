import type { ProductCardProps } from "@/components/catalog/ProductCard";
import type { ProductInnerSimilarItem } from "@/data/product-inner/types";

/** Oficialūs gamintojų katalogo vaizdai (vietinės kopijos `/public`). */
const PLASTIC_SHOWCASE_IMAGES = {
  kommerling76: "/images/catalog/plastikiniai-langai/kommerling-76-official.jpg",
  /** Hero + oficialus Kömmerling / Profine skerspjūvis (`38_System-88-MD-Standard_weiss_web.jpg`). */
  kommerling88: "/images/catalog/plastikiniai-langai/kommerling-88-official.jpg",
  /** `public/images/products/prestige.png` */
  witalPrestige70: "/images/products/prestige.png",
  /** Wital Therm Light – 80 hero (įkeltas PNG; papildomai yra `wital-therm-light-80.webp` iš gamintojo). */
  witalTherm80: "/images/products/wital-therm-light-80.png",
} as const;

/** Standartinės eksploatavimo schemos (Lucide pavadinimai žemiau – žr. `ProductCard` ICON_MAP). */
const DEFAULT_OPERATION_TYPES: ProductCardProps["operationTypes"] = [
  { label: "Varstomas langas", icon: "Square" },
  { label: "Atverčiamas langas", icon: "PanelLeftOpen" },
  { label: "Stumdomas langas", icon: "MoveHorizontal" },
  { label: "Balkono durys", icon: "DoorOpen" },
  { label: "Viršutinis atvertimas", icon: "PanelTopOpen" },
];

/**
 * Visi plastikinių langų produktų puslapiai (`/langai/[slug]`).
 * Kortelių iliustracijos: Kömmerling UK (76 / 88), Wital Profile (Prestige Standard, Therm Light).
 */
export const PLASTIC_LANGAI_PRODUCTS: ProductCardProps[] = [
  {
    title: "Kömmerling 76",
    categoryLabel: "Plastikiniai langai",
    energyClass: "A / A+",
    description:
      "Vokiškas 76 mm penkių kamerų plastikinis profilis, skirtas gerai šilumos ir garso izoliacijai. Tinka tiek renovuojamiems būstams, tiek naujos statybos namams.",
    image: "/images/products/kommerling.png",
    gallery: ["/images/products/kommerling-1.png"],
    operationTypes: [
      { label: "Varstomas langas", icon: "Square" },
      { label: "Atverčiamas langas", icon: "PanelLeftOpen" },
      { label: "Viršutinis atvertimas", icon: "PanelTopOpen" },
      { label: "Balkono durys", icon: "DoorOpen" },
      { label: "Kombinuotas varstymas", icon: "PanelsTopLeft" },
    ],
    benefits: [
      { label: "Kilmė: Vokietija", icon: "BadgeCheck" },
      { label: "76 mm, 5 kameros", icon: "Ruler" },
      { label: "Uw iki 0,76 W/m²K", icon: "ThermometerSun" },
      { label: "Rw 47 dB", icon: "Volume2" },
      { label: "Oro sandarumas 4 klasė", icon: "CloudRain" },
      { label: "Atsparumas vėjo apkrovai C5/B5", icon: "ShieldCheck" },
    ],
    href: "/langai/kommerling-76",
  },
  {
    title: "Kömmerling 88",
    categoryLabel: "Plastikiniai langai",
    energyClass: "A+ / A++",
    description:
      "Vokiškas 88 mm septynių kamerų plastikinis profilis, skirtas aukštai šilumos izoliacijai, sandarumui ir komfortui. Tinka namams, kuriuose svarbus energinis efektyvumas ir ilgalaikis patikimumas.",
    image: "/images/products/kommerling-88.png",
    gallery: [PLASTIC_SHOWCASE_IMAGES.kommerling88],
    operationTypes: [
      { label: "Varstomas langas", icon: "Square" },
      { label: "Atverčiamas langas", icon: "PanelLeftOpen" },
      { label: "Viršutinis atvertimas", icon: "PanelTopOpen" },
      { label: "Balkono durys", icon: "DoorOpen" },
      { label: "Kombinuotas varstymas", icon: "PanelsTopLeft" },
    ],
    benefits: [
      { label: "Kilmė: Vokietija", icon: "BadgeCheck" },
      { label: "88 mm, 7 kameros", icon: "Ruler" },
      { label: "Uw nuo 0,72 W/m²K", icon: "ThermometerSun" },
      { label: "Rw 47 dB", icon: "Volume2" },
      { label: "Stiklo paketas iki 60 mm", icon: "PanelsTopLeft" },
      { label: "Atsparumas vėjo apkrovai C5/B5", icon: "ShieldCheck" },
    ],
    href: "/langai/kommerling-88",
  },
  {
    title: "Wital Prestige – 70",
    categoryLabel: "Plastikiniai langai",
    energyClass: "A",
    description:
      "Lenkiškas 70 mm penkių kamerų plastikinis profilis, skirtas ekonomiškam ir patikimam sprendimui. Tinka būstui, renovacijai ir kasdieniam naudojimui, kai svarbus geras kainos ir kokybės santykis.",
    image: PLASTIC_SHOWCASE_IMAGES.witalPrestige70,
    operationTypes: [
      { label: "Varstomas langas", icon: "Square" },
      { label: "Atverčiamas langas", icon: "PanelLeftOpen" },
      { label: "Viršutinis atvertimas", icon: "PanelTopOpen" },
      { label: "Balkono durys", icon: "DoorOpen" },
      { label: "Kombinuotas varstymas", icon: "PanelsTopLeft" },
    ],
    benefits: [
      { label: "Kilmė: Lenkija", icon: "BadgeCheck" },
      { label: "70 mm, 5 kameros", icon: "Ruler" },
      { label: "Šilumos savybės nuo 1,3 iki 1,1 W/m²K", icon: "ThermometerSun" },
      { label: "Stiklo paketas 24–36 mm", icon: "PanelsTopLeft" },
      { label: "Rw 33 dB", icon: "Volume2" },
      { label: "Oro ir vandens sandarumas 4 klasė", icon: "CloudRain" },
    ],
    href: "/langai/wital-prestige-70",
  },
  {
    title: "Wital Therm Light – 80",
    categoryLabel: "Plastikiniai langai",
    energyClass: "A / A+",
    description:
      "Lenkiškas 80 mm šešių kamerų plastikinis profilis, skirtas geresnei šilumos izoliacijai ir komfortui.",
    image: PLASTIC_SHOWCASE_IMAGES.witalTherm80,
    gallery: ["/images/products/wital-therm-light-80.webp"],
    operationTypes: [
      { label: "Varstomas langas", icon: "Square" },
      { label: "Atverčiamas langas", icon: "PanelLeftOpen" },
      { label: "Viršutinis atvertimas", icon: "PanelTopOpen" },
      { label: "Balkono durys", icon: "DoorOpen" },
      { label: "Kombinuotas varstymas", icon: "PanelsTopLeft" },
    ],
    benefits: [
      { label: "Kilmė: Lenkija", icon: "BadgeCheck" },
      { label: "80 mm, 6 kameros", icon: "Ruler" },
      { label: "Nuo 1,2 iki 0,75 W/m²K", icon: "ThermometerSun" },
      { label: "Stiklo paketas 24–48 mm", icon: "PanelsTopLeft" },
      { label: "Rw 33 dB", icon: "Volume2" },
      { label: "Oro ir vandens sandarumas 4 klasė", icon: "CloudRain" },
    ],
    href: "/langai/wital-therm-light-80",
  },
  {
    title: "VEKA Softline 76",
    categoryLabel: "Plastikiniai langai",
    energyClass: "A",
    description:
      "Energiją taupantis plastikinis langas su puikia šilumos izoliacija ir garso slopinimu.",
    image: PLASTIC_SHOWCASE_IMAGES.kommerling76,
    operationTypes: [
      { label: "Varstomas", icon: "Square" },
      { label: "Atverčiamas", icon: "PanelLeftOpen" },
      { label: "Balkono durys", icon: "DoorOpen" },
      { label: "Viršutinis atvertimas", icon: "PanelTopOpen" },
    ],
    benefits: [
      { label: "Puiki garso izoliacija", icon: "Volume2" },
      { label: "Atsparus oro sąlygoms", icon: "CloudRain" },
      { label: "Sumažina šilumos praradimą", icon: "Sun" },
      { label: "76 mm, 5 kameros", icon: "Ruler" },
      { label: "Tinka renovacijai ir naujai statybai", icon: "Hammer" },
      { label: "Geras kainos ir kokybės santykis", icon: "BadgeEuro" },
    ],
    href: "/langai/veka-softline-76",
  },
];

/** Pardavimo grid’e `/langai/plastikiniai-langai` — keturios kortelės (iki Wital Therm Light 80; VEKA tik vidinis puslapis). */
export const plasticLangaiShowcaseProducts: ProductCardProps[] = PLASTIC_LANGAI_PRODUCTS.slice(0, 4);

/** Paskutinis `href` segmentas, pvz. `/langai/veka-premium` → `veka-premium`. */
export function catalogProductSlugFromHref(href: string): string {
  const parts = href.split("/").filter(Boolean);
  return parts[parts.length - 1] ?? "";
}

export function getPlasticLangaiProductBySlug(slug: string): ProductCardProps | undefined {
  return PLASTIC_LANGAI_PRODUCTS.find((p) => catalogProductSlugFromHref(p.href) === slug);
}

/** Pagal produkto puslapio kelią (pvz. `/langai/kommerling-88`). */
export function getPlasticLangaiProductByHref(href: string): ProductCardProps | undefined {
  const path = href.trim().replace(/\/+$/, "");
  if (!path) return undefined;
  const slug = catalogProductSlugFromHref(path);
  return getPlasticLangaiProductBySlug(slug);
}

/** Visi kiti plastikiniai langai kataloge (puslapio „Panašūs produktai“ be dubliuojamo slug). */
export function getOtherPlasticLangaiAsSimilarItems(excludeSlug: string): ProductInnerSimilarItem[] {
  return PLASTIC_LANGAI_PRODUCTS.filter(
    (p) => catalogProductSlugFromHref(p.href) !== excludeSlug
  ).map((p) => ({
    title: p.title,
    description: p.description,
    href: p.href,
  }));
}

export const catalog = [
  {
    slug: "langai",
    title: "Langai",
    description:
      "Plastikiniai ir aliuminio langai jūsų namams ir projektams.",
    subcategories: [
      {
        slug: "plastikiniai-langai",
        title: "Plastikiniai langai",
        description:
          "Populiariausias pasirinkimas: puikus kainos ir kokybės santykis. A ir A+ klasės profiliai (Kommerling, Wital ir kt.), 76–88 mm, 5–7 kameros — šiltesni namai, iki ~47 dB garso izoliacija, ekologiški profiliai be švino.",
        products: [
          {
            slug: "basic-76",
            title: "Basic 76",
            description:
              "Patikimas sprendimas kasdieniam naudojimui su gera šilumos izoliacija.",
            features: ["76 mm profilis", "5 kameros", "Gera garso izoliacija"],
          },
        ],
      },
      {
        slug: "aliuminio-langai",
        title: "Aliuminiai langai",
        description:
          "Šilumą izoliuojančios „Yawal“ TM sistemos (TM 102HI, TM 77HI, TM 74HI ir kt.) — tinka pasyviems ir energiją taupantiems pastatams, Uw nuo 0,4 W/(m²·K). Didelės vitrinos, tvirtos konstrukcijos, ilga eksploatacija.",
        products: [],
      },
    ],
  },
];
