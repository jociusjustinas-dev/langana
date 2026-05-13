/**
 * Nuotolinės iliustracijos iš Figma MCP (galioja ~7 d.). Logotipas vietinis.
 * @see /public/langana-logo.svg
 *
 * UI ikonoms naudojame `lucide-react`; čia lieka nuotraukos / wordmark / social ženkliukai.
 */

/** `public/` kelias su tarpais/skliaustais — saugus `next/image` ir tiesioginiam fetch. */
export function publicImagePath(path: `/${string}`): string {
  const tail = path.startsWith("/") ? path.slice(1) : path;
  return `/${tail.split("/").map(encodeURIComponent).join("/")}`;
}

/** Aliuminio fasadų kortelės / hero — vietiniai dideli vizualai (`fa-*.png` kataloge nebuvo). */
export const aluminumFacadeProductImages = {
  fa50n: publicImagePath("/images/Aliuminio sprendimai /ChatGPT Image May 7, 2026, 04_22_53 PM (3).png"),
  fa50nHi: publicImagePath("/images/Aliuminio sprendimai /ChatGPT Image May 7, 2026, 04_22_53 PM (8).png"),
} as const;

/** Aliuminio pertvarų kortelės / hero. */
export const aluminumPartitionProductImages = {
  pbi50n: publicImagePath("/images/Aliuminio sprendimai /ChatGPT Image May 7, 2026, 04_22_53 PM (6).png"),
  pbi40e: publicImagePath("/images/Aliuminio sprendimai /ChatGPT Image May 7, 2026, 04_22_53 PM (10).png"),
} as const;

/** Aliuminės stumdomos — didesnės terasų / vitrinų iliustracijos vietoj mažų `products/dp-*.png`. */
export const aluminumSlidingProductImages = {
  dp180: publicImagePath("/images/Stumdomos sistemos/ChatGPT Image May 7, 2026, 02_45_46 PM (1).png"),
  dp150t: publicImagePath("/images/Stumdomos sistemos/ChatGPT Image May 7, 2026, 02_45_46 PM (2).png"),
  dp100: publicImagePath("/images/Stumdomos sistemos/ChatGPT Image May 7, 2026, 02_44_30 PM (1).png"),
  l50: publicImagePath("/images/Stumdomos sistemos/ChatGPT Image May 7, 2026, 02_44_31 PM (2).png"),
  harmonic: publicImagePath("/images/Stumdomos sistemos/ChatGPT Image May 7, 2026, 02_44_31 PM (4).png"),
} as const;

/**
 * Yawal TM / PI aliuminių langų kortelės — `products/tm-*.png` buvo keli identiški failai (ta pati nuotrauka).
 * Čia kiekvienai sistemai skirtingas kadras iš `public/images/Langai/`.
 */
export const aluminumLangaiYawalProductImages = {
  tm102hi: publicImagePath("/images/Langai/ChatGPT Image May 7, 2026, 02_58_41 PM (1).png"),
  tm77hi: publicImagePath("/images/Langai/ChatGPT Image May 7, 2026, 02_58_41 PM (2).png"),
  tm74hi: publicImagePath("/images/Langai/ChatGPT Image May 7, 2026, 02_58_41 PM (3).png"),
  tm62hi: publicImagePath("/images/Langai/ChatGPT Image May 7, 2026, 02_55_35 PM (5).png"),
  tm62: publicImagePath("/images/Langai/ChatGPT Image May 7, 2026, 02_55_35 PM (6).png"),
  pi50n: publicImagePath("/images/Langai/ChatGPT Image May 7, 2026, 02_55_35 PM (4).png"),
} as const;

export const assets = {
  logo: "/langana-logo.svg",
  hero: {
    featured: "/images/Langai/ChatGPT Image May 7, 2026, 02_58_42 PM (5).png",
    balcony: "/images/Balkonu stiklinimas/ChatGPT Image May 7, 2026, 03_40_37 PM (1).png",
    doors: "/images/Durys/ChatGPT Image May 7, 2026, 03_18_39 PM (1).png",
    aluminum: "/images/alium4.png",
    aluminumLangai: "/images/Langai/ChatGPT Image May 7, 2026, 02_58_41 PM (4).png",
    sliding: "/images/Stumdomos sistemos/ChatGPT Image May 7, 2026, 02_44_31 PM (3).png",
    /** Žiemos sodų hero / kortelėms — `public/images/Ziemos sodai/...`. */
    ziemosSodai: publicImagePath("/images/Ziemos sodai/ChatGPT Image May 7, 2026, 04_12_17 PM (2).png"),
  },
  cta: {
    /** CTA pastato nuotrauka — `public/images/home/cta.png`. */
    building: "/images/home/cta.png",
  },
  megaMenu: {
    panelDefault: "/images/alium3.png",
  },
  footer: {
    /** Blueprint „LANGANA“ wordmarkas — `viewBox` 1324×179, Figma 7983:7397 / 8070:11897. */
    brandWordmark: "/footer-langana-wordmark.svg",
  },
  categoryLangai: {
    hero: "https://www.figma.com/api/mcp/asset/97f2b33f-a571-4d90-b886-06e55d941e12",
    carouselPlastic: "https://www.figma.com/api/mcp/asset/ddbe38cf-6948-426d-a63a-b25c5528383a",
    carouselProject: "https://www.figma.com/api/mcp/asset/4495374d-d2cc-426a-b453-fa045c363af7",
    ctaBuilding: "https://www.figma.com/api/mcp/asset/b49e1593-3f66-467b-b508-6a965c2f8199",
  },
  plastikiniaiLangai: {
    /** Vietinis failas — MCP Figma URL greitai nustoja galioti. */
    hero: "/images/Langai/ChatGPT Image May 7, 2026, 02_55_34 PM (1).png",
    productVekaPremium: "https://www.figma.com/api/mcp/asset/a9eb900b-19c6-42b1-a485-8a181e6fe7b8",
  },
  /** Produktų kortelė / vidinis puslapis — langų atvėrimo glifai (mask-image, Figma 8070:11698). */
  productCard: {
    openingMasks: [
      "https://www.figma.com/api/mcp/asset/b729b0d3-5781-4c51-8a0c-c0c59e647537",
      "https://www.figma.com/api/mcp/asset/2bb4510b-ec5e-4a70-96f4-50d40b393448",
      "https://www.figma.com/api/mcp/asset/147d0afe-f74a-49f0-a175-f6d0fea14150",
      "https://www.figma.com/api/mcp/asset/2472ce26-fb14-4a50-9f4c-912080680b9b",
      "https://www.figma.com/api/mcp/asset/990bbca6-82fe-4e65-8449-5448243052d2",
    ] as const,
    openingMaskWidthsPx: [44, 30, 44, 48, 44] as const,
  },
} as const;
