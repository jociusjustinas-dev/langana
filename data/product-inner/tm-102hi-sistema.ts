import { aluminumInnerSimilarProducts } from "./aluminum-inner-blocks";
import type { ProductInnerContent } from "./types";

export const tm102hiSistemaInner: ProductInnerContent = {
  slug: "tm-102hi-sistema",
  hideHeroLearnMore: true,
  intro: {
    id: "aprasymas",
    heading: "Aukščiausios klasės aliuminio sistema energiškai efektyviems pastatams.",
    headingAccentLead: "Aukščiausios klasės aliuminio sistema",
    body: "TM 102HI sistema skirta projektams, kuriuose svarbi ypač gera šilumos izoliacija, konstrukcijos tvirtumas ir modernus vaizdas. Tai išplėsta aliuminio profilių sistema langams, durims ir vitrinoms, tinkama tiek gyvenamiesiems namams, tiek viešosios paskirties objektams.",
    primaryCta: { label: "Gauti pasiūlymą", href: "/kontaktai#uzklausa" },
  },
  features: [
    {
      title: "Geriausia šilumos izoliacija",
      description:
        "TM 102HI sistema sukurta energiją taupantiems ir pasyviems pastatams. Sistema gali pasiekti Uw nuo 0,4 W/m²K, todėl padeda mažinti šilumos nuostolius ir didinti komfortą.",
    },
    {
      title: "Tinka didelėms konstrukcijoms",
      description:
        "Novatoriška lango varčios konstrukcija ir tvirti profiliai leidžia projektuoti dideles bei sunkias konstrukcijas, išlaikant stabilumą ir patikimumą.",
    },
    {
      title: "Platus pritaikymas",
      description:
        "Sistema gali būti naudojama moderniems langams, durims ir vitrinoms. Joje galima montuoti įvairių tipų dviejų ir trijų kamerų stiklo paketus.",
    },
  ],
  specsHeading: "Techninės savybės",
  specsValueColumn: "TM 102HI sistema",
  specs: [
    { label: "Sistema", value: "Yawal TM 102HI" },
    { label: "Paskirtis", value: "Langai, durys, vitrinos" },
    { label: "Pastatų tipai", value: "Energiją taupantys ir pasyvūs pastatai" },
    { label: "Šilumos izoliacija", value: "Uw nuo 0,4 W/m²K" },
    { label: "Stiklinimas", value: "Dviejų ir trijų kamerų stiklo paketai" },
    { label: "Konstrukcijos tipas", value: "Didelės ir sunkios konstrukcijos" },
    { label: "Balkono durys", value: "Galima su žemu slenksčiu" },
    { label: "Apkaustai", value: "Paviršiniai ALU, PVC griovelio tipo, paslėpti vyriai" },
    { label: "Rankenos", value: "Strypinės, nerūdijančiojo plieno arba individualios formos" },
    { label: "Suderinamumas", value: "Galima jungti su kitomis Yawal sistemomis" },
  ],
  specsCtaAfter: { label: "Gauti pasiūlymą", href: "/kontaktai#uzklausa" },
  adaptation: {
    title: "Pritaikymo galimybės: spalvos, funkcijos ir priedai",
    intro:
      "TM 102HI sistema gali būti pritaikoma pagal pastato architektūrą, energinio efektyvumo reikalavimus ir konstrukcijos paskirtį. Galima rinktis stiklinimo sprendimus, apkaustus, rankenas, spalvas ir papildomas funkcijas.",
    tabs: [
      {
        id: "privalumai",
        label: "Privalumai",
        bullets: [
          "Labai gera šilumos izoliacija",
          "Tinka pasyviems pastatams",
          "Galima projektuoti dideles konstrukcijas",
          "Tinka langams, durims ir vitrinoms",
          "Galima jungti su kitomis Yawal sistemomis",
        ],
      },
      {
        id: "spalvos",
        label: "Spalvos",
        bullets: [
          "Balta",
          "Antracito pilka",
          "Juoda",
          "Pilka",
          "Individualūs RAL spalvų sprendimai pagal projektą",
        ],
      },
      {
        id: "priedai",
        label: "Priedai",
        bullets: [
          "Paslėpti vyriai",
          "Paviršiniai apkaustai",
          "Nerūdijančiojo plieno rankenos",
          "Balkono durys su žemu slenksčiu",
          "Papildomi sandarinimo ir saugumo sprendimai",
        ],
      },
    ],
  },
  similarProducts: aluminumInnerSimilarProducts,
};
