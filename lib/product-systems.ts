export type SystemType =
  | "plastic-profile"
  | "aluminum-window"
  | "sliding"
  | "facade"
  | "partition";

export interface SystemSpec {
  slug: string;
  name: string;
  type: SystemType;
  parent: string;
  kilme?: string;
  plotis?: number;
  kameros?: number;
  uw?: number;
  rw?: number;
  shortDescription: string;
  uniqueFeature?: string;
}

export const SYSTEMS: SystemSpec[] = [
  {
    slug: "kommerling-76",
    name: "Kömmerling 76",
    type: "plastic-profile",
    parent: "/langai",
    kilme: "Vokietija",
    plotis: 76,
    kameros: 5,
    uw: 0.76,
    rw: 47,
    shortDescription:
      "Vokiškas 76mm plastikinis profilis su 5 kameromis renovacijai ir naujai statybai.",
    uniqueFeature: "5 kameros, Uw 0,76",
  },
  {
    slug: "kommerling-88",
    name: "Kömmerling 88",
    type: "plastic-profile",
    parent: "/langai",
    kilme: "Vokietija",
    plotis: 88,
    kameros: 7,
    uw: 0.72,
    rw: 47,
    shortDescription:
      "Vokiškas 88mm plastikinis profilis su 7 kameromis energetiškai efektyviems namams.",
    uniqueFeature: "7 kameros, Uw 0,72",
  },
  {
    slug: "veka-softline-76",
    name: "Veka Softline 76",
    type: "plastic-profile",
    parent: "/langai",
    kilme: "Vokietija",
    plotis: 76,
    shortDescription: "Vokiškas 76mm Veka Softline profilis su geru kainos ir kokybės santykiu.",
    uniqueFeature: "Geras kainos/kokybės santykis",
  },
  {
    slug: "wital-prestige-70",
    name: "Wital Prestige 70",
    type: "plastic-profile",
    parent: "/langai",
    kilme: "Lenkija",
    plotis: 70,
    kameros: 5,
    shortDescription: "Lenkiškas 70mm Wital Prestige profilis su 5 kameromis – ekonomiškas pasirinkimas.",
    uniqueFeature: "Ekonomiškas pasirinkimas",
  },
  {
    slug: "wital-therm-light-80",
    name: "Wital Therm Light 80",
    type: "plastic-profile",
    parent: "/langai",
    kilme: "Lenkija",
    plotis: 80,
    kameros: 6,
    shortDescription: "Lenkiškas 80mm Wital Therm Light profilis su 6 kameromis aukštai izoliacijai.",
    uniqueFeature: "Aukšta izoliacija už prieinamą kainą",
  },
  {
    slug: "pi-50n-sistema",
    name: "PI 50N",
    type: "aluminum-window",
    parent: "/langai",
    shortDescription: "PI 50N aliuminio langų sistema su plonu profiliu didelėms stiklo angoms.",
    uniqueFeature: "Plonas profilis, dideli stiklai",
  },
  {
    slug: "tm-62-sistema",
    name: "TM 62",
    type: "aluminum-window",
    parent: "/langai",
    shortDescription: "TM 62 aliuminio langų sistema standartinėms angoms ir patikimam komfortui.",
    uniqueFeature: "Tvirta ir patikima",
  },
  {
    slug: "tm-62hi-sistema",
    name: "TM 62 HI",
    type: "aluminum-window",
    parent: "/langai",
    shortDescription: "TM 62 HI termiškai izoliuotas aliuminio profilis šiltesniam langui.",
    uniqueFeature: "Termiškai izoliuota versija",
  },
  {
    slug: "tm-74hi-sistema",
    name: "TM 74 HI",
    type: "aluminum-window",
    parent: "/langai",
    shortDescription: "TM 74 HI aliuminio langų sistema su geresne šilumos izoliacija šiuolaikiškiems namams.",
    uniqueFeature: "Geresnė šilumos izoliacija",
  },
  {
    slug: "tm-77hi-sistema",
    name: "TM 77 HI",
    type: "aluminum-window",
    parent: "/langai",
    shortDescription: "TM 77 HI aliuminio langų sistema energetiškai efektyviems namams.",
    uniqueFeature: "Aukšta šilumos izoliacija",
  },
  {
    slug: "tm-102hi-sistema",
    name: "TM 102 HI",
    type: "aluminum-window",
    parent: "/langai",
    shortDescription: "TM 102 HI aliuminio langų sistema pasyvių namų klasei.",
    uniqueFeature: "Pasyvių namų klasė",
  },
  {
    slug: "dp-100-sistema",
    name: "DP 100",
    type: "sliding",
    parent: "/stumdomos-sistemos/aliumines-stumdomos-sistemos",
    shortDescription: "DP 100 aliuminė stumdoma sistema balkonams ir terasoms su lengvu atidarymu.",
    uniqueFeature: "Plonas profilis, lengva valdyti",
  },
  {
    slug: "dp-150t-sistema",
    name: "DP 150T",
    type: "sliding",
    parent: "/stumdomos-sistemos/aliumines-stumdomos-sistemos",
    shortDescription: "DP 150T termiškai izoliuota stumdoma sistema didesnėms angoms.",
    uniqueFeature: "Termiškai izoliuota",
  },
  {
    slug: "dp-180-sistema",
    name: "DP 180",
    type: "sliding",
    parent: "/stumdomos-sistemos/aliumines-stumdomos-sistemos",
    shortDescription: "DP 180 stumdoma sistema didelėms stiklo angoms su sklandžiu atidarymu.",
    uniqueFeature: "Tinka didelėms angoms",
  },
  {
    slug: "l-50-sistema",
    name: "L 50",
    type: "sliding",
    parent: "/stumdomos-sistemos/aliumines-stumdomos-sistemos",
    shortDescription: "L 50 lengva stumdoma sistema balkonų stiklinimui ir patogiam naudojimui.",
    uniqueFeature: "Lengva, patogu balkonams",
  },
  {
    slug: "sulankstomos-sistemos-harmonic",
    name: "Harmonic",
    type: "sliding",
    parent: "/stumdomos-sistemos/aliumines-stumdomos-sistemos",
    shortDescription: "Harmonic sulankstoma akordeono stiliaus sistema didelėms terasoms ir kavinėms.",
    uniqueFeature: "Akordeonas, atsidaro pilnai",
  },
  {
    slug: "fa-50n-sistema",
    name: "FA 50N",
    type: "facade",
    parent: "/aliuminio-sprendimai/aliuminio-fasadai",
    shortDescription: "FA 50N aliuminio fasado sistema komerciniams ir gyvenamiesiems pastatams.",
    uniqueFeature: "Standartinis fasado sprendimas",
  },
  {
    slug: "fa-50n-hi-sistema",
    name: "FA 50N HI",
    type: "facade",
    parent: "/aliuminio-sprendimai/aliuminio-fasadai",
    shortDescription: "FA 50N HI termiškai izoliuotas fasadas energetiškai efektyviems pastatams.",
    uniqueFeature: "Aukšta šilumos izoliacija",
  },
  {
    slug: "pbi-40e-sistema",
    name: "PBI 40E",
    type: "partition",
    parent: "/aliuminio-sprendimai/aliuminio-pertvaros",
    shortDescription: "PBI 40E pertvarų sistema su plonu profiliu ofisams ir patalpoms.",
    uniqueFeature: "Plonas profilis",
  },
  {
    slug: "pbi-50n-sistema",
    name: "PBI 50N",
    type: "partition",
    parent: "/aliuminio-sprendimai/aliuminio-pertvaros",
    shortDescription: "PBI 50N tvirta pertvarų sistema didelėms stiklo plokštumoms.",
    uniqueFeature: "Didelėms stiklo angoms",
  },
];

const TYPE_LABEL: Record<SystemType, string> = {
  "plastic-profile": "plastikinis profilis",
  "aluminum-window": "aliuminio langų sistema",
  sliding: "aliuminė stumdoma sistema",
  facade: "aliuminio fasado sistema",
  partition: "aliuminio pertvarų sistema",
};

export function systemTitle(s: SystemSpec): string {
  return `${s.name} ${TYPE_LABEL[s.type]} – ${s.uniqueFeature || "Langana Šiauliuose"}`;
}

export function systemDescription(s: SystemSpec): string {
  const specs: string[] = [];
  if (s.kilme) specs.push(s.kilme);
  if (s.plotis) specs.push(`${s.plotis}mm`);
  if (s.kameros) specs.push(`${s.kameros} kameros`);
  if (s.uw !== undefined) specs.push(`Uw ${s.uw} W/m²K`);
  const specsStr = specs.length ? `${specs.join(", ")}. ` : "";

  return `${s.name} ${TYPE_LABEL[s.type]} – ${specsStr}${s.shortDescription} Montavimas Šiauliuose, garantija, nemokamas matavimas.`.slice(
    0,
    160,
  );
}

export function getSystem(slug: string): SystemSpec | undefined {
  return SYSTEMS.find((s) => s.slug === slug);
}
