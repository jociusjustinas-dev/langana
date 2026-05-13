/**
 * Įgyvendintų projektų galerija (`/igyvendinti-projektai`).
 * Be atskirų vidinių URL — kortelė + modalas.
 */

export type ImplementedProjectFilterId =
  | "visi"
  | "langai"
  | "plastikiniai-langai"
  | "aliuminio-langai"
  | "durys"
  | "balkonu-stiklinimas"
  | "terasu-stiklinimas"
  | "ziemos-sodai"
  | "aliuminio-fasadai"
  | "aliuminio-pertvaros"
  | "stumdomos-sistemos";

export type ImplementedProjectCategory = Exclude<ImplementedProjectFilterId, "visi">;

export type ImplementedProject = {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  /** Filtravimui — viena ar kelios kategorijos */
  categories: readonly ImplementedProjectCategory[];
  objectType: string;
  location?: string;
  tags: readonly string[];
  images: readonly string[];
  /** Nuoroda į susijusį produktą (rodoma ant kortelės nuotraukos). */
  linkedProduct?: { label: string; href: string };
};

export const IMPLEMENTED_PROJECT_FILTERS: {
  id: ImplementedProjectFilterId;
  label: string;
}[] = [
  { id: "visi", label: "Visi" },
  { id: "langai", label: "Langai" },
  { id: "plastikiniai-langai", label: "Plastikiniai langai" },
  { id: "aliuminio-langai", label: "Aliumininiai langai" },
  { id: "durys", label: "Durys" },
  { id: "balkonu-stiklinimas", label: "Balkonų stiklinimas" },
  { id: "terasu-stiklinimas", label: "Terasų stiklinimas" },
  { id: "ziemos-sodai", label: "Žiemos sodai" },
  { id: "aliuminio-fasadai", label: "Aliuminio fasadai" },
  { id: "aliuminio-pertvaros", label: "Aliuminio pertvaros" },
  { id: "stumdomos-sistemos", label: "Stumdomos sistemos" },
] as const;

export const IMPLEMENTED_PROJECTS: readonly ImplementedProject[] = [
  {
    id: "aliumines-stumdomos-namas",
    title: "Aliuminio stumdomos sistemos privačiam namui",
    shortDescription:
      "Įrengta aliuminė stumdoma sistema išėjimui į terasą. Sprendimas parinktas didesnei angai, kad erdvė gautų daugiau šviesos ir patogiai susijungtų su lauko zona.",
    longDescription:
      "Įrengta aliuminė stumdoma sistema išėjimui į terasą. Sprendimas parinktas didesnei angai, siekiant daugiau natūralios šviesos ir patogaus perėjimo tarp vidaus bei lauko. Konstrukcija pritaikyta kasdieniam naudojimui, sandarumui ir ilgaamžiškumui užtikrinti.",
    categories: ["stumdomos-sistemos"],
    objectType: "Privatus namas",
    location: "Lietuva",
    tags: ["Aliuminės stumdomos sistemos", "Terasos durys", "Didelė anga", "Montavimas"],
    linkedProduct: {
      label: "DP 180 sistema",
      href: "/stumdomos-sistemos/aliumines-stumdomos-sistemos/dp-180-sistema",
    },
    images: [
      "/images/Stumdomos sistemos/ChatGPT Image May 7, 2026, 02_44_30 PM (1).png",
      "/images/Stumdomos sistemos/ChatGPT Image May 7, 2026, 02_44_31 PM (2).png",
      "/images/Stumdomos sistemos/ChatGPT Image May 7, 2026, 02_44_31 PM (3).png",
      "/images/Stumdomos sistemos/ChatGPT Image May 7, 2026, 02_44_31 PM (4).png",
    ],
  },
  {
    id: "balkonas-daugiabutis",
    title: "Balkono stiklinimas daugiabutyje",
    shortDescription:
      "Įstiklintas balkonas, siekiant apsaugoti erdvę nuo lietaus, vėjo, sniego ir dulkių. Balkonas tapo patogesnis kasdieniam naudojimui ir daiktų laikymui.",
    longDescription:
      "Įstiklintas balkonas daugiabučio bute – sprendimas, kuris apsaugo nuo lietaus, vėjo, sniego ir dulkių, sumažina triukšmą ir leidžia naudoti balkoną kaip prasmingesnę namų dalį. Montavimas derintas prie esamos konstrukcijos ir bendrijos reikalavimų.",
    categories: ["balkonu-stiklinimas"],
    objectType: "Daugiabutis",
    tags: ["Balkonų stiklinimas", "Aliumininė konstrukcija", "Apsauga nuo oro sąlygų", "Montavimas"],
    linkedProduct: { label: "Balkonų stiklinimas", href: "/stiklinimas/balkonu-stiklinimas" },
    images: [
      "/images/Balkonu stiklinimas/ChatGPT Image May 7, 2026, 03_40_37 PM (1).png",
      "/images/Balkonu stiklinimas/ChatGPT Image May 7, 2026, 03_40_37 PM (2).png",
      "/images/Balkonu stiklinimas/ChatGPT Image May 7, 2026, 03_40_37 PM (3).png",
      "/images/Balkonu stiklinimas/ChatGPT Image May 7, 2026, 03_40_37 PM (4).png",
    ],
  },
  {
    id: "pertvaros-biuras",
    title: "Aliuminio pertvaros biuro erdvei",
    shortDescription:
      "Įrengtos aliuminio ir stiklo pertvaros, padedančios atskirti darbo zonas išlaikant šviesos pojūtį ir modernų interjero vaizdą.",
    longDescription:
      "Įrengtos aliuminio ir stiklo pertvaros biuro erdvėje – funkcionalus erdvių suskirstymas be sunkaus jausmo. Sprendimas parenktas pagal darbo pobūdį, akustinius poreikius ir norimą vizualinį stilių. Sistema derinama su apšvietimu ir interjero linija.",
    categories: ["aliuminio-pertvaros"],
    objectType: "Biuras",
    location: "Šiauliai",
    tags: ["Aliuminio pertvaros", "Stiklinės pertvaros", "Biuro erdvė", "PBI sistema"],
    linkedProduct: {
      label: "PBI 40E sistema",
      href: "/aliuminio-sprendimai/aliuminio-pertvaros/pbi-40e-sistema",
    },
    images: [
      "/images/alium2.png",
      "/images/alium3.png",
      "/images/alium4.png",
    ],
  },
  {
    id: "plastikiniai-langai-namas",
    title: "Plastikiniai langai individualiam namui",
    shortDescription:
      "Šilti plastikiniai langai su parinktu stiklo paketu ir apdaila – geresnė šiluma, tyla ir estetika kasdienėje namų eksploatacijoje.",
    longDescription:
      "Įrengti plastikiniai langai individualiame name: parinktos sistemos pagal energinį poreikį, kryptį ir fasadą. Atliktas tikslus montavimas ir apdaila, kad būtų išlaikytas sandarumas ir ilgaamžiškumas. Klientui paaiškintos priežiūros ir naudojimo rekomendacijos.",
    categories: ["langai", "plastikiniai-langai"],
    objectType: "Privatus namas",
    tags: ["Plastikiniai langai", "Stiklo paketas", "Montavimas", "Apdaila"],
    linkedProduct: { label: "Kömmerling 76", href: "/langai/kommerling-76" },
    images: [
      "/images/Langai/ChatGPT Image May 7, 2026, 02_55_34 PM (1).png",
      "/images/Langai/ChatGPT Image May 7, 2026, 02_55_35 PM (4).png",
      "/images/Langai/ChatGPT Image May 7, 2026, 02_58_41 PM (2).png",
    ],
  },
  {
    id: "aliuminio-langai-namas",
    title: "Aliumininiai langai ir vitrina gyvenamajam namui",
    shortDescription:
      "Įrengtos aliuminio sistemos langai ir fiksuota vitrina – plonesnis profilis, daugiau šviesos ir tvirta konstrukcija didelėms angoms.",
    longDescription:
      "Įrengtos aliuminio sistemos langai ir vitrininė konstrukcija gyvenamajam namui. Profiliai parinkti pagal angų matmenis, šilumos ir saugumo reikalavimus. Sumontuota sandariai, derinant su fasado linija ir vidaus interjeru. Klientui paaiškinta priežiūra ir naudojimas.",
    categories: ["langai", "aliuminio-langai"],
    objectType: "Privatus namas",
    location: "Kauno raj.",
    tags: ["Aliumininiai langai", "Vitrina", "TM sistema", "Montavimas"],
    linkedProduct: { label: "Aliumininiai langai", href: "/langai/aliuminio-langai" },
    images: ["/images/alium.png", "/images/alium2.png", "/images/alium3.png"],
  },
  {
    id: "aliuminio-durys-komercija",
    title: "Aliuminio durys komerciniam įėjimui",
    shortDescription:
      "Tvirtos aliuminio durys viešam įėjimui – atsparumas intensyviam naudojimui, saugumas ir švarus modernus dizainas.",
    longDescription:
      "Įrengtos aliuminio durys komercinio objekto įėjimui. Konstrukcija parinkta pagal eismo intensyvumą, saugumo reikalavimus ir fasado architektūrą. Užtikrintas patikimas uždarymas ir ilga eksploatacija.",
    categories: ["durys"],
    objectType: "Komercinis objektas",
    tags: ["Aliuminio durys", "Komercinis įėjimas", "Montavimas"],
    linkedProduct: { label: "Aliuminio durys", href: "/durys/aliuminio-durys" },
    images: [
      "/images/Durys/ChatGPT Image May 7, 2026, 03_18_07 PM (1).png",
      "/images/Durys/ChatGPT Image May 7, 2026, 03_18_39 PM (1).png",
      "/images/Durys/ChatGPT Image May 7, 2026, 03_18_39 PM (2).png",
    ],
  },
  {
    id: "terasu-stiklinimas-namas",
    title: "Terasų stiklinimas privačiam namui",
    shortDescription:
      "Terasos stiklinimas su stumdomomis dalimis – daugiau naudojamos erdvės ištisus metus ir apsauga nuo lietaus bei vėjo.",
    longDescription:
      "Įrengta terasos stiklinimo sistema privačiam namui: sklandus pravažiavimas, sandarumas ir estetika. Sprendimas suderintas su terasos matmenimis ir naudojimo scenarijumi – poilsis, valgomasis lauke ar vaikų žaidimų zona.",
    categories: ["terasu-stiklinimas"],
    objectType: "Privatus namas",
    tags: ["Terasų stiklinimas", "Stumdomos dalys", "Montavimas"],
    linkedProduct: { label: "Terasų stiklinimas", href: "/stiklinimas/terasu-stiklinimas" },
    images: [
      "/images/Terasu stiklinimas/ChatGPT Image May 7, 2026, 03_45_40 PM (1).png",
      "/images/Terasu stiklinimas/ChatGPT Image May 7, 2026, 03_45_40 PM (2).png",
      "/images/Terasu stiklinimas/ChatGPT Image May 7, 2026, 03_46_08 PM (3).png",
    ],
  },
  {
    id: "ziemos-sodas-namas",
    title: "Žiemos sodas prie individualaus namo",
    shortDescription:
      "Stiklinė žiemos sodo konstrukcija – daugiau šviesos, jaukios erdvės poilsiui ir ryšys su kiemu ištisus metus.",
    longDescription:
      "Projektuotas ir sumontuotas žiemos sodas prie individualaus namo. Konstrukcija derinta prie fasado, krypties į kiemą ir šilumos poreikių. Klientui parinkti stiklo ir profilio sprendimai, kad erdvė būtų patogi tiek vasarą, tiek šaltuoju metų laiku.",
    categories: ["ziemos-sodai"],
    objectType: "Privatus namas",
    tags: ["Žiemos sodai", "Stiklinė konstrukcija", "Projektavimas", "Montavimas"],
    linkedProduct: { label: "Žiemos sodai", href: "/ziemos-sodai" },
    images: [
      "/images/Ziemos sodai/ChatGPT Image May 7, 2026, 04_12_17 PM (1).png",
      "/images/Ziemos sodai/ChatGPT Image May 7, 2026, 04_12_17 PM (4).png",
      "/images/Ziemos sodai/ChatGPT Image May 7, 2026, 04_12_18 PM (6).png",
    ],
  },
  {
    id: "aliuminio-fasadai-viesasis",
    title: "Aliuminio fasado elementai viešajam pastatui",
    shortDescription:
      "Aliuminio fasado sprendimai dideliems vitrinoms ir įėjimams – tvirtumas, ilgaamžiškumas ir reprezentatyvus vaizdas.",
    longDescription:
      "Įgyvendinti aliuminio fasado elementai viešosios paskirties pastatui. Sprendimas apėmė vitrinų linijas, įėjimo zonas ir techninių reikalavimų derinimą. Darbai koordinuoti su statybos eiga ir kitomis rangovų komandomis.",
    categories: ["aliuminio-fasadai"],
    objectType: "Viešasis pastatas",
    tags: ["Aliuminio fasadai", "Vitrinos", "Projektavimas", "Montavimas"],
    linkedProduct: { label: "Aliuminio fasadai", href: "/aliuminio-sprendimai/aliuminio-fasadai" },
    images: [
      "/images/alium3.png",
      "/images/alium4.png",
      "/images/alium.png",
    ],
  },
] as const;

export function projectMatchesFilter(
  project: ImplementedProject,
  filter: ImplementedProjectFilterId
): boolean {
  if (filter === "visi") return true;
  return project.categories.includes(filter);
}

/** Karuselei ir blokams: projektai, kurių bent viena kategorija patenka į sąrašą (OR). */
export function getImplementedProjectsForCategories(
  categories: readonly ImplementedProjectCategory[]
): ImplementedProject[] {
  if (categories.length === 0) return [];
  return IMPLEMENTED_PROJECTS.filter((p) => p.categories.some((c) => categories.includes(c)));
}

/** Stabilūs masyvai `CaseStudiesProjectsCarousel` (ta pati nuoroda tarp renderių). */
export const CAROUSEL_CATEGORIES = {
  langaiHub: ["langai"],
  plastikiniaiLangai: ["plastikiniai-langai"],
  aliuminioLangai: ["aliuminio-langai"],
  durys: ["durys"],
  stiklinimasHub: ["balkonu-stiklinimas", "terasu-stiklinimas"],
  balkonuStiklinimas: ["balkonu-stiklinimas"],
  terasuStiklinimas: ["terasu-stiklinimas"],
  ziemosSodai: ["ziemos-sodai"],
  aliuminioFasadai: ["aliuminio-fasadai"],
  aliuminioPertvaros: ["aliuminio-pertvaros"],
  aliuminioSprendimaiHub: ["aliuminio-fasadai", "aliuminio-pertvaros"],
  stumdomosSistemos: ["stumdomos-sistemos"],
} as const satisfies Record<string, readonly ImplementedProjectCategory[]>;

