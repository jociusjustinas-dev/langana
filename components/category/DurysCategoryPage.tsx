"use client";

import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import { useId, useState } from "react";

import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { HeroPatternLangaiCategoryBand } from "@/components/home/HeroPattern";
import { CaseStudiesProjectsCarousel } from "@/components/plastikiniai-langai/CaseStudiesProjectsCarousel";
import { ProcessSteps } from "@/components/plastikiniai-langai/ProcessSteps";
import { FeatureHoverCard } from "@/components/ui/FeatureHoverCard";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { ParallaxCoverImage } from "@/components/ui/ParallaxCoverImage";
import { ResponsiveTableFrame } from "@/components/ui/ResponsiveTableFrame";
import { CAROUSEL_CATEGORIES } from "@/data/implemented-projects";
const DURYS_IMAGES = {
  hero: "/images/Durys/ChatGPT Image May 7, 2026, 03_18_07 PM (1).png",
  plastic: "/images/Durys/ChatGPT Image May 7, 2026, 03_18_07 PM (2).png",
  aluminum: "/images/Durys/ChatGPT Image May 7, 2026, 03_18_08 PM (3).png",
  metal: "/images/Durys/ChatGPT Image May 7, 2026, 03_18_08 PM (4).png",
  special: "/images/Durys/ChatGPT Image May 7, 2026, 03_18_09 PM (6).png",
} as const;

const DURYS_TYPES_SLIDES = [
  {
    title: "Plastikinės durys",
    body: "Praktiškas ir ekonomiškas pasirinkimas gyvenamiesiems namams, kai svarbu sandarumas, šiluma ir paprasta priežiūra.",
    bullets: ["Ekonomiškesnis sprendimas", "Geras šilumos ir sandarumo balansas", "Lengva kasdienė priežiūra"],
    href: "/durys/plastikines-durys",
    image: DURYS_IMAGES.plastic,
  },
  {
    title: "Aliuminio durys",
    body: "Modernios, tvirtos ir ilgaamžės durys namams bei komerciniams objektams, kai svarbus dizainas ir konstrukcijos stabilumas.",
    bullets: ["Tvirtos ir ilgaamžės", "Tinka moderniai architektūrai", "Patikimos intensyviam naudojimui"],
    href: "/durys/aliuminio-durys",
    image: DURYS_IMAGES.aluminum,
  },
  {
    title: "Metalinės durys",
    body: "Patvarios durys patalpoms, sandėliams, techninėms zonoms ar objektams, kuriuose svarbus atsparumas ir funkcionalumas.",
    bullets: ["Atsparios intensyviam naudojimui", "Tinka techninėms patalpoms", "Racionalus pasirinkimas funkcijai"],
    href: "/durys/metalines-durys",
    image: DURYS_IMAGES.metal,
  },
  {
    title: "Specialios paskirties durys",
    body: "Sprendimai techninėms, komercinėms ir pramoninėms erdvėms, kur svarbūs papildomi saugos, atsparumo ar funkcionalumo reikalavimai.",
    bullets: ["Pritaikoma pagal objekto reikalavimus", "Sauga ir funkcionalumas", "Komercijai ir pramonei"],
    href: "/durys/specialios-paskirties-durys",
    image: DURYS_IMAGES.special,
  },
] as const;

const BENEFIT_CARDS = [
  {
    title: "Tinkamas sprendimas pagal objektą",
    body: "Parenkame durų tipą pagal pastato paskirtį, angos dydį, naudojimo intensyvumą ir saugumo poreikį.",
  },
  {
    title: "Patikimos medžiagos ir sistemos",
    body: "Naudojame sprendimus, pritaikytus ilgam naudojimui, sandarumui, šilumos izoliacijai ir konstrukcijos stabilumui.",
  },
  {
    title: "Profesionalus montavimas",
    body: "Durų kokybė priklauso ne tik nuo gaminio, bet ir nuo montavimo. Pasirūpiname, kad durys būtų sumontuotos tiksliai ir sandariai.",
  },
] as const;

const SELECTION_ROWS: { need: string; type: string }[] = [
  { need: "Ekonomiškas sprendimas namams", type: "Plastikinės durys" },
  { need: "Modernus dizainas ir tvirtumas", type: "Aliuminio durys" },
  { need: "Didesnis saugumas", type: "Šarvuotos durys" },
  { need: "Techninės ar ūkinės patalpos", type: "Metalinės durys" },
  { need: "Modernūs projektiniai sprendimai", type: "Įsprūdinės durys" },
  { need: "Specialūs saugos reikalavimai", type: "Priešgaisrinės durys" },
];

const FAQ_ITEMS: { question: string; answer: string }[] = [
  {
    question: "Kokios durys geriausiai tinka individualiam namui?",
    answer:
      "Dažniausiai individualiems namams pasirenkamos plastikinės arba aliuminio durys. Plastikinės durys dažniau pasirenkamos dėl kainos ir šilumos, o aliuminio – dėl tvirtumo, dizaino ir ilgaamžiškumo.",
  },
  {
    question: "Kada verta rinktis šarvuotas duris?",
    answer:
      "Šarvuotos durys tinkamos tada, kai svarbiausias prioritetas yra saugumas – butams, namams, biurams ar kitoms patalpoms, kuriose norima didesnės apsaugos.",
  },
  {
    question: "Kuo skiriasi aliuminio ir plastikinės durys?",
    answer:
      "Plastikinės durys dažniausiai yra ekonomiškesnis ir šiltas sprendimas, o aliuminio durys – tvirtesnės, modernesnės ir geriau tinka intensyvesniam naudojimui ar didesnėms konstrukcijoms.",
  },
  {
    question: "Ar galite pagaminti duris pagal individualius matmenis?",
    answer: "Taip, durys gali būti gaminamos pagal konkrečią angą, objekto poreikius ir pasirinktą sistemą.",
  },
  {
    question: "Ar atliekate montavimą?",
    answer: "Taip, pasirūpiname ne tik durų parinkimu ir gamyba, bet ir profesionaliu montavimu.",
  },
];

const PROCESS_STEPS = [
  {
    title: "Konsultacija",
    description:
      "Aptariame, kokiam objektui reikalingos durys, kokie saugumo, šilumos, dizaino ar techniniai reikalavimai svarbiausi.",
  },
  {
    title: "Matavimas ir sprendimo parinkimas",
    description: "Įvertiname angą, naudojimo sąlygas ir parenkame tinkamiausią durų tipą bei sistemą.",
  },
  {
    title: "Gamyba",
    description:
      "Durys gaminamos pagal suderintus matmenis, pasirinktą konstrukciją, spalvą, apdailą ir techninius parametrus.",
  },
  {
    title: "Montavimas",
    description: "Atliekame profesionalų montavimą, kad durys būtų sandarios, stabilios ir patogios naudoti kasdien.",
  },
];

function DurysFaq() {
  return (
    <AnimatedSection as="section" className="w-full bg-white px-4 py-16 md:px-[70px] md:py-[100px]" id="duk-durys">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-[100px] lg:flex-row lg:gap-[100px]">
        <div className="flex shrink-0 flex-col gap-14 lg:max-w-md">
          <h2 className="text-4xl font-semibold leading-[1.2] tracking-[-0.032em] text-[#16216b] md:text-[45px] md:leading-[52px]">
            <span className="text-[#263cd0]">Jūsų klausimai – </span>
            <span className="block text-[#16216b]">aiškūs atsakymai</span>
          </h2>
          <div className="hidden flex-col gap-2.5 md:flex">
            <div className="flex gap-[18px] py-1.5">
              <Phone aria-hidden className="mt-0.5 size-6 shrink-0 text-[#16216b]" strokeWidth={2} />
              <div>
                <p className="text-[15px] font-semibold text-[#16216b]">Turite klausimų?</p>
                <a
                  className="text-sm leading-normal text-[#263cd0] underline-offset-2 hover:underline"
                  href="tel:+37060620666"
                >
                  +370 606 20 666
                </a>
              </div>
            </div>
            <div className="flex gap-[18px] py-1.5">
              <Mail aria-hidden className="mt-0.5 size-6 shrink-0 text-[#16216b]" strokeWidth={2} />
              <div>
                <p className="text-[15px] font-semibold text-[#16216b]">Parašykite mums</p>
                <a
                  className="text-sm leading-normal text-[#263cd0] underline-offset-2 hover:underline"
                  href="mailto:uablangana@gmail.com"
                >
                  uablangana@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <FaqAccordion idPrefix="faq-durys" items={FAQ_ITEMS} />
      </div>
    </AnimatedSection>
  );
}

export function DurysCategoryPage() {
  const [activeTypeIndex, setActiveTypeIndex] = useState(0);
  const tabsId = useId();
  const activeType = DURYS_TYPES_SLIDES[activeTypeIndex] ?? DURYS_TYPES_SLIDES[0];

  return (
    <div className="w-full bg-white text-[#16216b]">
      <AnimatedSection as="section" className="langana-flush-under-site-header relative overflow-hidden bg-white">
        <div className="relative langana-site-header-clearance">
          <HeroPatternLangaiCategoryBand />

          <div className="relative z-10 mx-auto max-w-[1440px] px-4 pb-12 pt-16 md:px-[70px] md:pb-[100px] md:pt-[100px]">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
            <div className="flex flex-col gap-4 text-left lg:sticky lg:top-28 lg:min-w-0 lg:flex-1 lg:self-start">
              <h1 className="text-4xl font-semibold leading-[1.15] tracking-[-0.026em] md:text-[55px] md:leading-[64px]">
                <span className="text-[#263cd0]">Durys namams, verslui </span>
                <span className="text-[#16216b]">ir specialiems objektams</span>
              </h1>
              <div className="flex flex-wrap justify-start gap-6 py-1 sm:gap-8">
                {[
                  { number: "150+", label: "Durų projektų" },
                  { number: "6", label: "Durų tipai" },
                  { number: "5 d.", label: "Vidutinis montavimas" },
                ].map((stat) => (
                  <div key={stat.label} className="flex flex-col items-start gap-0.5">
                    <span className="text-lg font-bold text-[#263cd0] sm:text-xl">{stat.number}</span>
                    <span className="text-[11px] font-medium text-[#59799f] sm:text-xs">{stat.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex max-w-[520px] flex-col gap-6 lg:shrink-0">
              <p className="text-base leading-6 text-[#16216b]">
                Rinkitės plastikines, aliuminio, metalines, šarvuotas ar priešgaisrines duris pagal saugumo, šilumos,
                dizaino ir objekto reikalavimus.
              </p>
              <div className="flex flex-col gap-2">
                <div className="flex w-full min-w-0 flex-row flex-nowrap items-stretch gap-2 sm:gap-3">
                  <Link
                    className="inline-flex min-h-[48px] min-w-0 flex-1 basis-0 items-center justify-center rounded-full bg-[#263cd0] px-3 py-2.5 text-center text-[13px] font-semibold leading-snug text-white transition hover:bg-[#1e31a8] sm:px-5 sm:text-[14px] md:px-8 md:py-[15px] md:text-[15px] md:leading-normal"
                    href="/kontaktai#uzklausa"
                  >
                    Gauti pasiūlymą
                  </Link>
                  <Link
                    className="inline-flex min-h-[48px] min-w-0 flex-1 basis-0 items-center justify-center rounded-full border border-[#263cd0] bg-white px-3 py-2.5 text-center text-[13px] font-semibold leading-snug text-[#263cd0] transition hover:bg-[#f6f7ff] sm:px-5 sm:text-[14px] md:px-8 md:py-[13px] md:text-[15px] md:leading-normal"
                    href="#durys-tipai"
                  >
                    Peržiūrėti durų tipus
                  </Link>
                </div>
                <p className="text-[13px] font-medium text-[#16216b]">
                  Nemokamai · Atsakome per 24 val. · Jokių įsipareigojimų
                </p>
              </div>
            </div>
          </div>

          <div className="relative mt-6 aspect-[16/10] w-full overflow-hidden rounded-2xl md:mt-10 md:h-[521px] md:aspect-auto">
            <ParallaxCoverImage
              alt=""
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1300px"
              src={DURYS_IMAGES.hero}
            />
            <div aria-hidden className="absolute inset-0 bg-black/20" />
          </div>
        </div>
        </div>
      </AnimatedSection>

      <AnimatedSection as="section" className="w-full bg-white pb-16 md:pb-[100px]" id="durys-tipai">
        <div className="mx-auto mb-10 flex max-w-[1440px] flex-col items-center gap-4 px-4 text-center md:mb-[50px] md:px-[70px]">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold leading-[1.18] tracking-[-0.032em] md:text-[45px] md:leading-[52px]">
              <span className="text-[#263cd0]">Durų sprendimai </span>
              <span className="text-[#16216b]">skirtingiems poreikiams</span>
            </h2>
            <p className="text-base leading-relaxed text-[#16216b] md:text-[17px]">
              Kiekvienas durų tipas sprendžia skirtingą problemą – nuo ekonomiško įėjimo į namus iki saugumo,
              priešgaisrinių reikalavimų ar modernaus fasado vaizdo.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-[1440px] px-4 md:px-[70px]">
          <div className="mb-8 flex justify-center md:mb-12">
            <div
              aria-label="Durų tipai"
              className="flex w-fit flex-wrap items-center justify-center gap-2 rounded-full bg-[#eef0fb] p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] sm:gap-2 sm:p-2"
              role="tablist"
            >
              {DURYS_TYPES_SLIDES.map((tab, i) => {
                const selected = i === activeTypeIndex;
                const tabDomId = `${tabsId}-tab-${i}`;
                return (
                  <button
                    aria-controls={`${tabsId}-panel`}
                    aria-selected={selected}
                    className={`min-h-[44px] rounded-full px-5 py-2.5 text-center text-[14px] font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#263cd0] focus-visible:ring-offset-2 sm:px-7 sm:py-3 sm:text-[15px] ${
                      selected ? "bg-[#263cd0] text-white shadow-sm" : "bg-transparent text-[#59799f] hover:text-[#16216b]"
                    }`}
                    id={tabDomId}
                    key={tab.title}
                    onClick={() => setActiveTypeIndex(i)}
                    role="tab"
                    type="button"
                  >
                    {tab.title}
                  </button>
                );
              })}
            </div>
          </div>

          <div
            aria-labelledby={`${tabsId}-tab-${activeTypeIndex}`}
            className="w-full rounded-2xl bg-[#f6f7ff] p-6 md:p-10 lg:p-12"
            id={`${tabsId}-panel`}
            role="tabpanel"
          >
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-12 xl:gap-14">
              <div className="relative mx-auto aspect-[4/3] min-h-[220px] w-full overflow-hidden rounded-2xl bg-[#e8ebfa] lg:mx-0 lg:aspect-auto lg:h-full lg:min-h-[280px] lg:self-stretch">
                <ParallaxCoverImage
                  alt={activeType.title}
                  fill
                  key={activeType.title}
                  sizes="(max-width: 1023px) 100vw, 45vw"
                  src={activeType.image}
                />
              </div>
              <div className="flex min-h-0 min-w-0 flex-col gap-6 lg:items-start">
                <div className="flex w-full flex-col gap-3 text-left">
                  <h3 className="text-xl font-semibold leading-tight tracking-[-0.04em] text-[#16216b] md:text-[22px] lg:text-[24px]">
                    {activeType.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-[#16216b] md:text-base">{activeType.body}</p>
                </div>
                <div className="w-full">
                  <p className="mb-3 text-[14px] font-semibold text-[#263cd0]">Kada rinktis?</p>
                  <ul className="flex flex-col gap-2.5">
                    {activeType.bullets.map((line: string) => (
                      <li className="flex items-center gap-3 text-[15px] font-normal leading-relaxed text-[#16216b] md:text-[16px]" key={line}>
                        <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-[#263cd0]" />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex w-full min-w-0 flex-row flex-nowrap items-stretch gap-2 sm:gap-3">
                  <Link
                    className="inline-flex min-h-[48px] min-w-0 flex-1 basis-0 items-center justify-center rounded-full bg-[#263cd0] px-3 py-2.5 text-center text-[13px] font-semibold leading-snug text-white transition hover:bg-[#1e31a8] sm:px-5 sm:text-[14px] md:px-8 md:py-[15px] md:text-[15px] md:leading-normal"
                    href={activeType.href}
                  >
                    Sužinoti daugiau
                  </Link>
                  <Link
                    className="inline-flex min-h-[48px] min-w-0 flex-1 basis-0 items-center justify-center rounded-full border border-[#263cd0] bg-transparent px-3 py-2.5 text-center text-[13px] font-semibold leading-snug text-[#263cd0] transition hover:bg-[#263cd0] hover:text-white sm:px-5 sm:text-[14px] md:px-8 md:py-[13px] md:text-[15px] md:leading-normal"
                    href="/kontaktai#uzklausa"
                  >
                    Gauti pasiūlymą
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <AnimatedSection as="section" className="w-full bg-white" id="privalumai-durys">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-4 pb-8 pt-14 md:flex-row md:items-center md:justify-between md:px-[70px] md:pb-[50px] md:pt-[100px]">
          <div className="max-w-[min(100%,38rem)] space-y-4">
            <h2 className="text-3xl font-semibold leading-[1.18] tracking-[-0.032em] md:text-[45px] md:leading-[52px]">
              <span className="text-[#263cd0]">Durys, kurios saugo, izoliuoja </span>
              <span className="text-[#16216b]">ir tarnauja ilgai</span>
            </h2>
            <p className="text-base leading-relaxed text-[#16216b]">
              Padedame pasirinkti duris pagal realų poreikį – ar jums svarbiausia šiluma, saugumas, dizainas, intensyvus
              naudojimas ar specialūs techniniai reikalavimai.
            </p>
          </div>
          <Link
            className="inline-flex w-fit items-center justify-center rounded-full bg-[#263cd0] px-8 py-[15px] text-[15px] font-semibold text-white transition hover:bg-[#1e31a8]"
            href="/kontaktai#uzklausa"
          >
            Gauti pasiūlymą
          </Link>
        </div>
        <div className="mx-auto grid max-w-[1440px] gap-4 px-4 pb-16 md:grid-cols-3 md:gap-4 md:px-[70px] md:pb-[100px] md:pt-6">
          {BENEFIT_CARDS.map((card, i) => (
            <AnimatedSection delayMs={i * 70} key={card.title}>
              <FeatureHoverCard
                description={card.body}
                headingClassName="text-xl font-semibold leading-[1.25] tracking-[-0.04em] md:text-[26px] md:leading-[32px]"
                title={card.title}
              />
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection as="section" className="w-full bg-white px-4 py-16 md:px-[70px] md:py-[100px]" id="pasirinkimas-durys">
        <div className="mx-auto max-w-[1440px] space-y-10">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold leading-[1.18] tracking-[-0.032em] md:text-[45px] md:leading-[52px]">
              <span className="text-[#263cd0]">Kokias duris </span>
              <span className="text-[#16216b]">rinktis?</span>
            </h2>
            <p className="text-base leading-relaxed text-[#16216b]">
              Jeigu nežinote, nuo ko pradėti, pasirinkimą galima supaprastinti pagal pagrindinį poreikį.
            </p>
          </div>

          <div className="min-w-0 w-full">
            <ResponsiveTableFrame className="rounded-2xl">
              <div className="w-full min-w-0 space-y-0 max-lg:min-w-[520px]">
              <div className="grid grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] gap-3 px-4 py-3 md:gap-4 md:px-8 md:py-4 lg:px-10">
                <span className="self-center text-sm font-semibold text-[#59799f] md:text-base">Poreikis</span>
                <span className="text-center text-base font-semibold text-[#263cd0] md:text-[18px]">
                  Rekomenduojamas durų tipas
                </span>
              </div>
              {SELECTION_ROWS.map((row, idx) => (
                <div
                  className={`grid grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] gap-3 px-4 py-3 md:gap-4 md:px-8 md:py-4 lg:px-10 ${
                    idx % 2 === 0 ? "rounded-xl bg-[#f6f7ff]" : ""
                  }`}
                  key={row.need}
                >
                  <p className="self-center text-sm font-semibold text-[#16216b] md:text-base">{row.need}</p>
                  <p className="text-center text-sm font-semibold leading-snug text-[#16216b] md:text-base">{row.type}</p>
                </div>
              ))}
            </div>
            </ResponsiveTableFrame>
          </div>
        </div>
      </AnimatedSection>

      <CaseStudiesProjectsCarousel
        headingLead="Realūs klientų "
        headingRest="projektai"
        intro="Tie patys įgyvendinti sprendimai kaip galerijoje — atrinkta pagal durų kategoriją."
        projectCategories={CAROUSEL_CATEGORIES.durys}
      />

      <DurysFaq />

      <ProcessSteps
        headingLine1="Kaip vyksta durų užsakymas?"
        steps={PROCESS_STEPS}
      />
    </div>
  );
}
