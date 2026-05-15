import type { FaqItem } from "@/components/plastikiniai-langai/FaqSection";
import { IMPLEMENTED_PROJECTS } from "@/data/implemented-projects";

export type HomeServiceItem = {
  title: string;
  description: string;
  href: string;
};

export const HOME_SERVICES: readonly HomeServiceItem[] = [
  {
    title: "Langai",
    href: "/langai",
    description:
      "Plastikiniai ir aliuminio langai Šiauliuose – Kömmerling, Wital, Veka ir TM sistemos. Parinksime stiklo paketą pagal šilumos, garso ir saugumo poreikius, atliksime tikslų matavimą ir montavimą su apdaila.",
  },
  {
    title: "Durys",
    href: "/durys",
    description:
      "Plastikinės, aliuminio, metalinės ir specialios paskirties durys – įėjimui, terasai ar komerciniam objektui. Deriname sandarumą, saugumą ir ilgaamžiškumą su jūsų fasado architektūra bei kasdieniu naudojimu.",
  },
  {
    title: "Stiklinimas",
    href: "/stiklinimas",
    description:
      "Balkonų ir terasų stiklinimas – šilti bei šalti variantai, stumdomos dalys ir aliuminio konstrukcijos. Padidinsime naudojamą plotą, apsaugosime nuo lietaus ir vėjo, išlaikysime šviesą bei estetiką.",
  },
  {
    title: "Stumdomos sistemos",
    href: "/stumdomos-sistemos",
    description:
      "Aliuminės ir plastikinės stumdomos sistemos terasoms, paviljonams ir didelėms angoms. Sklandus judėjimas, sandarumas ir daugiau natūralios šviesos – sprendimai pritaikyti jūsų erdvės matmenims.",
  },
  {
    title: "Žiemos sodai",
    href: "/ziemos-sodai",
    description:
      "Individualūs žiemos sodų projektai – stiklinės konstrukcijos poilsiui, augalams ir jaukiai erdvei ištisus metus. Nuo projektavimo iki montavimo deriname šilumą, apšvietimą ir ryšį su kiemu ar terasa.",
  },
  {
    title: "Aliuminio sprendimai",
    href: "/aliuminio-sprendimai",
    description:
      "Aliuminio fasadai ir pertvaros biurams, komercijai ir privatiems namams. Plonas profilis, tvirtumas ir modernus vaizdas – PBI ir kitos sistemos pritaikomos pagal akustiką, saugumą ir interjero liniją.",
  },
] as const;

export const HOME_WHY_CHOOSE = [
  {
    title: "Greitas montavimas",
    body: "Suprantame, kad renovacija neturi trukti mėnesiais. Mūsų komanda dirba struktūruotai: tikslus matavimas, gamyba pagal užsakymą ir montavimas dažniausiai per 1–5 darbo dienas. Šiauliuose ir apskrityje koordinuojame terminus, kad langai, durys ar stiklinimas būtų įrengti laiku ir be chaoso statybų aikštelėje.",
  },
  {
    title: "Sertifikuota kokybė",
    body: "Naudojame gamintojų sistemas, atitinkančias ES saugos ir eksploatacijos reikalavimus – Kömmerling, Wital, Veka, TM ir kitus patikimus profilius. Prieš montavimą patikriname matmenis, sandarumą ir apdailą, kad gaminiai tarnautų ilgai ir išlaikytų šilumos bei garso charakteristikas.",
  },
  {
    title: "Visapusiška garantija",
    body: "Suteikiame garantiją gaminiams ir montavimo darbams, o po įrengimo liekame pasiekiami konsultacijoms. Jei kyla klausimų dėl naudojimo, reguliavimo ar priežiūros – padedame išspręsti greitai. Mūsų tikslas – ramybė po projekto, ne tik pardavimas.",
  },
] as const;

export const HOME_FEATURED_PROJECT_IDS = [
  "plastikiniai-langai-namas",
  "balkonas-daugiabutis",
  "aliumines-stumdomos-namas",
  "terasu-stiklinimas-namas",
  "pertvaros-biuras",
  "ziemos-sodas-namas",
] as const;

export function getHomeFeaturedProjects() {
  const byId = new Map(IMPLEMENTED_PROJECTS.map((p) => [p.id, p]));
  return HOME_FEATURED_PROJECT_IDS.map((id) => byId.get(id)).filter(
    (p): p is (typeof IMPLEMENTED_PROJECTS)[number] => p != null,
  );
}

export const HOME_FAQ_ITEMS: readonly FaqItem[] = [
  {
    question: "Kiek kainuoja langų ar durų pakeitimas Šiauliuose?",
    answer:
      "Kaina priklauso nuo angų skaičiaus, profilio sistemos, stiklo paketo ir montavimo sudėtingumo. Po nemokamo matavimo parengiame detalų pasiūlymą per 24 valandas – be įsipareigojimų. Galite lyginti plastikinius ir aliuminio variantus pagal biudžetą ir energinius tikslus.",
  },
  {
    question: "Per kiek laiko įrengiate langus ar duris?",
    answer:
      "Tipinis montavimas trunka 1–5 darbo dienas, priklausomai nuo objekto dydžio ir pasirinktos sistemos. Terminus suderiname iš anksto, kad darbai netrukdytų kasdieniam gyvenimui ar verslo veiklai.",
  },
  {
    question: "Ar atliekate matavimą ir konsultaciją nemokamai?",
    answer:
      "Taip – atvykstame į objektą Šiauliuose ir apskrityje, išmatuojame angas, aptariame poreikius (šiluma, garsas, saugumas, dizainas) ir pateikiame pasiūlymą. Konsultacija padeda išvengti klaidingų sprendimų dar nepradėjus gamybos.",
  },
  {
    question: "Kokias langų ir durų sistemas montuojate?",
    answer:
      "Dirbame su Kömmerling, Wital, Veka, TM ir kitais gamintojais – plastikiniais bei aliuminio profiliais, stumdomomis sistemomis, balkonų ir terasų stiklinimu, žiemos sodais bei aliuminio fasadais ir pertvaromis.",
  },
  {
    question: "Ar montuojate ne tik Šiauliuose, bet ir kitur?",
    answer:
      "Pagrindinė bazė – Šiauliai (Tilžės g. 83b), tačiau projektus įgyvendiname ir visoje Lietuvoje. Tolimesniems objektams terminus ir logistiką suderiname individualiai.",
  },
  {
    question: "Kokia garantija taikoma gaminiams ir montavimui?",
    answer:
      "Gaminiai turi gamintojo garantiją, o montavimo darbams taikome savo garantiją. Po įrengimo paaiškiname priežiūrą ir esame pasiekiami, jei reikia reguliavimo ar patarimo eksploatacijos metu.",
  },
];
