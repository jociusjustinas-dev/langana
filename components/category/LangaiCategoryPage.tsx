"use client";

import { AlertTriangle, Check, Mail, Phone, X } from "lucide-react";
import Link from "next/link";
import { useId, useState } from "react";
import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { HeroPatternLangaiCategoryBand } from "@/components/home/HeroPattern";
import { BenefitsSection } from "@/components/plastikiniai-langai/BenefitsSection";
import { CaseStudiesProjectsCarousel } from "@/components/plastikiniai-langai/CaseStudiesProjectsCarousel";
import { FaqAccordion } from "@/components/ui/FaqAccordion";
import { ParallaxCoverImage } from "@/components/ui/ParallaxCoverImage";
import { ResponsiveComparisonGrid } from "@/components/ui/ResponsiveComparisonGrid";
import { SegmentedPillTabList } from "@/components/ui/SegmentedPillTabList";
import { CAROUSEL_CATEGORIES } from "@/data/implemented-projects";

const LANGAI_IMAGES = {
  hero: "/images/Langai/ChatGPT Image May 7, 2026, 02_55_35 PM (6).png",
  plastic: "/images/Langai/ChatGPT Image May 7, 2026, 02_55_34 PM (1).png",
  aluminum: "/images/Langai/ChatGPT Image May 7, 2026, 02_58_41 PM (4).png",
} as const;

const LANGAI_TYPES_SLIDES = [
  {
    title: "Plastikiniai langai",
    body: "Patikimas pasirinkimas kasdieniam gyvenimui – šilti, sandarūs ir ekonomiški.",
    bullets: [
      "Geresnė šilumos izoliacija",
      "Ekonomiškesnis pasirinkimas",
      "Tinka renovacijai ir naujai statybai",
    ],
    href: "/langai/plastikiniai-langai",
    image: LANGAI_IMAGES.plastic,
  },
  {
    title: "Aliuminio langai",
    body: "Modernus sprendimas didelėms erdvėms – ploni profiliai, tvirtumas ir ilgaamžiškumas.",
    bullets: [
      "Tinka dideliems stiklo plotams",
      "Itin tvirti ir ilgaamžiai",
      "Moderni architektūrinė išraiška",
    ],
    href: "/langai/aliuminio-langai",
    image: LANGAI_IMAGES.aluminum,
  },
] as const;

type ComparisonTone = "yes" | "no" | "mid";

type ComparisonCell = { tone: ComparisonTone; text: string };

const LANGAI_COMPARE_COLUMNS = [
  {
    key: "plastic",
    label: "Plastikiniai",
    headerClassName: "text-center text-base font-semibold text-[#263cd0] md:text-[18px]",
  },
  {
    key: "aluminum",
    label: "Aliuminio",
    headerClassName: "text-center text-base font-semibold text-[#263cd0] md:text-[18px]",
  },
] as const;

const COMPARISON_ROWS: {
  label: string;
  plastic: ComparisonCell;
  aluminum: ComparisonCell;
}[] = [
  {
    label: "Kaina",
    plastic: { tone: "yes", text: "Ekonomiškesni" },
    aluminum: { tone: "no", text: "Aukštesnė investicija" },
  },
  {
    label: "Šilumos izoliacija",
    plastic: { tone: "yes", text: "Labai gera" },
    aluminum: { tone: "yes", text: "Gera" },
  },
  {
    label: "Ilgaamžiškumas",
    plastic: { tone: "yes", text: "Geras" },
    aluminum: { tone: "yes", text: "Labai aukštas" },
  },
  {
    label: "Dideli langai",
    plastic: { tone: "no", text: "Ribota" },
    aluminum: { tone: "yes", text: "Puikiai tinka" },
  },
  {
    label: "Dizainas",
    plastic: { tone: "yes", text: "Klasikinis" },
    aluminum: { tone: "yes", text: "Modernus" },
  },
  {
    label: "Profilio storis",
    plastic: { tone: "no", text: "Storesnis" },
    aluminum: { tone: "yes", text: "Plonesnis" },
  },
];

const FAQ_ITEMS: { question: string; answer: string }[] = [
  {
    question: "Ar plastikiniai langai tikrai šilti?",
    answer:
      "Taip, modernūs plastikiniai langai pasižymi puikia šilumos izoliacija ir padeda sumažinti šildymo išlaidas.",
  },
  {
    question: "Kuo skiriasi aliuminio langai?",
    answer:
      "Aliuminio langai yra tvirtesni, leidžia daryti didesnes stiklo konstrukcijas ir suteikia modernesnį vaizdą.",
  },
  {
    question: "Kiek laiko tarnauja langai?",
    answer:
      "Kokybiški langai gali tarnauti 20–30 metų ar ilgiau, priklausomai nuo naudojimo ir priežiūros.",
  },
  {
    question: "Kiek trunka montavimas?",
    answer:
      "Dažniausiai montavimas užtrunka 1–5 dienas, priklausomai nuo projekto dydžio ir langų skaičiaus.",
  },
];

function ComparisonValueCell({ tone, text }: ComparisonCell) {
  const a11y =
    tone === "yes"
      ? `Gerai: ${text}`
      : tone === "no"
        ? `Silpniau: ${text}`
        : `Vidutiniškai: ${text}`;

  return (
    <div
      aria-label={a11y}
      className="flex flex-1 flex-col items-center justify-center gap-1 px-1.5 text-center sm:flex-row sm:gap-2 sm:px-2"
    >
      {tone === "mid" ? (
        <AlertTriangle aria-hidden className="size-3.5 shrink-0 text-amber-600" strokeWidth={2.25} />
      ) : tone === "yes" ? (
        <Check aria-hidden className="size-3.5 shrink-0 text-emerald-600" strokeWidth={2.5} />
      ) : (
        <X aria-hidden className="size-3.5 shrink-0 text-red-500" strokeWidth={2.5} />
      )}
      <span className="text-xs font-semibold leading-snug text-[#16216b] sm:text-sm">{text}</span>
    </div>
  );
}

function LangaiFaq() {
  return (
    <AnimatedSection
      as="section"
      className="w-full bg-white px-4 py-16 md:px-[70px] md:py-[100px]"
      id="duk"
    >
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 md:gap-12 lg:flex-row lg:gap-[100px]">
        <div className="flex shrink-0 flex-col gap-14 lg:max-w-md">
          <h2 className="text-4xl font-semibold leading-[1.2] tracking-[-0.032em] text-[#16216b] md:text-[45px] md:leading-[52px]">
            <span className="text-[#263cd0]">Jūsų klausimai.</span>
            <span className="block text-[#16216b]">Išsamūs atsakymai.</span>
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

        <FaqAccordion idPrefix="faq-trigger" items={FAQ_ITEMS} />
      </div>
    </AnimatedSection>
  );
}

export function LangaiCategoryPage() {
  const [activeTypeIndex, setActiveTypeIndex] = useState(0);
  const tabsId = useId();
  const activeType = LANGAI_TYPES_SLIDES[activeTypeIndex] ?? LANGAI_TYPES_SLIDES[0];

  return (
    <div className="w-full bg-white text-[#16216b]">
      <AnimatedSection as="section" className="langana-flush-under-site-header relative overflow-hidden bg-white">
        <div className="relative langana-site-header-clearance">
          <HeroPatternLangaiCategoryBand />

          <div className="relative z-10 mx-auto max-w-[1440px] px-4 pb-12 pt-16 md:px-[70px] md:pb-[100px] md:pt-[100px]">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
            <div className="flex flex-col gap-4 text-left lg:sticky lg:top-28 lg:min-w-0 lg:flex-1 lg:self-start">
              <h1 className="text-4xl font-semibold leading-[1.15] tracking-[-0.026em] md:text-[55px] md:leading-[64px]">
                <span className="text-[#263cd0]">Aukštos kokybės </span>
                <span className="text-[#16216b]">langai jūsų namams</span>
              </h1>
              <div className="flex flex-wrap justify-start gap-6 py-1 sm:gap-8">
                {[
                  { number: "300+", label: "Langų projektų" },
                  { number: "20–30 m.", label: "Langų tarnavimas" },
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
                Rinkitės iš plataus aukštos kokybės plastikinių, skandinaviškų ir kitų langų
                asortimento, atitinkančio jūsų poreikius.
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
                    href="#langai-tipai"
                  >
                    Ieškoti produktų
                  </Link>
                </div>
                <p className="text-[13px] font-medium text-[#16216b]">
                  Nemokamai · Atsakome per 24 val. · Jokių įsipareigojimų
                </p>
              </div>
            </div>
          </div>

          <div className="relative mt-6 aspect-[16/10] w-full overflow-hidden rounded-2xl md:mt-10 md:h-[521px] md:aspect-auto">
            <ParallaxCoverImage alt="" fill priority sizes="(max-width: 768px) 100vw, 1300px" src={LANGAI_IMAGES.hero} />
            <div aria-hidden className="absolute inset-0 rounded-[inherit] bg-black/20" />
          </div>
        </div>
        </div>
      </AnimatedSection>

      <AnimatedSection as="section" className="w-full bg-white pb-16 md:pb-[100px]" id="langai-tipai">
        <div className="mx-auto mb-10 flex max-w-[1440px] flex-col items-center gap-4 px-4 text-center md:mb-[50px] md:px-[70px]">
          <h2 className="max-w-3xl text-3xl font-semibold leading-[1.18] tracking-[-0.032em] md:text-[45px] md:leading-[52px]">
            <span className="text-[#263cd0]">Langų tipai</span>
            <span className="text-[#16216b]">, tinkantys kiekvienam namui</span>
          </h2>
          <p className="max-w-[860px] text-base leading-relaxed text-[#16216b] md:text-[17px]">
            Pasirinkite sprendimą pagal savo namo tipą, energinį poreikį ir norimą estetinį rezultatą.
          </p>
        </div>

        <div className="mx-auto max-w-[1440px] px-4 md:px-[70px]">
          <div className="mb-8 md:mb-12">
            <SegmentedPillTabList ariaLabel="Langų tipai">
              {LANGAI_TYPES_SLIDES.map((tab, i) => {
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
            </SegmentedPillTabList>
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
                    {activeType.bullets.map((line) => (
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

      <BenefitsSection id="privalumai" variant="categoryLangai" />

      <AnimatedSection as="section" className="w-full bg-white px-4 py-16 md:px-[70px] md:py-[100px]" id="palyginimas">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 lg:grid-cols-[3fr_7fr] lg:items-start lg:gap-8 xl:gap-12">
          <div className="max-w-lg lg:max-w-none">
            <h2 className="pb-6 text-3xl font-semibold leading-[1.18] tracking-[-0.032em] md:text-[45px] md:leading-[52px]">
              <span className="text-[#263cd0]">Plastikiniai ar </span>
              <span className="text-[#16216b]">aliuminio langai?</span>
            </h2>
            <p className="text-base leading-relaxed text-[#16216b]">
              Paprastas palyginimas, kuris padės pasirinkti tinkamiausią sprendimą.
            </p>
          </div>

          <div className="min-w-0 w-full lg:w-auto">
            <ResponsiveComparisonGrid
              ariaLabel="Plastikinių ir aliuminių langų palyginimas"
              columns={LANGAI_COMPARE_COLUMNS}
              desktopFooter={
                <div
                  className="grid gap-3 px-4 py-3 md:gap-4 md:px-8 md:py-4 lg:px-10"
                  style={{ gridTemplateColumns: "minmax(0,1.35fr) minmax(0,1fr) minmax(0,1fr)" }}
                >
                  <span aria-hidden className="select-none">
                    &nbsp;
                  </span>
                  <div className="flex justify-center">
                    <Link
                      className="rounded-full bg-[#263cd0] px-8 py-[15px] text-center text-[15px] font-semibold text-[#f6f7ff] transition hover:bg-[#1e31a8]"
                      href="/langai/plastikiniai-langai"
                    >
                      Ieškoti produktų
                    </Link>
                  </div>
                  <div className="flex justify-center">
                    <Link
                      className="rounded-full bg-[#263cd0] px-8 py-[15px] text-center text-[15px] font-semibold text-[#f6f7ff] transition hover:bg-[#1e31a8]"
                      href="/langai/aliuminio-langai"
                    >
                      Ieškoti produktų
                    </Link>
                  </div>
                </div>
              }
              desktopMinWidthClass="max-lg:min-w-[540px]"
              firstColumnLabel="Savybė"
              gridTemplateColumns="minmax(0,1.35fr) minmax(0,1fr) minmax(0,1fr)"
              mobileFooter={
                <>
                  <Link
                    className="inline-flex w-full items-center justify-center rounded-full bg-[#263cd0] px-6 py-3 text-center text-[14px] font-semibold text-white transition hover:bg-[#1e31a8] md:text-[15px]"
                    href="/langai/plastikiniai-langai"
                  >
                    Ieškoti plastikinių langų
                  </Link>
                  <Link
                    className="inline-flex w-full items-center justify-center rounded-full bg-[#263cd0] px-6 py-3 text-center text-[14px] font-semibold text-white transition hover:bg-[#1e31a8] md:text-[15px]"
                    href="/langai/aliuminio-langai"
                  >
                    Ieškoti aliuminių langų
                  </Link>
                </>
              }
              rows={COMPARISON_ROWS.map((row) => ({
                key: row.label,
                feature: (
                  <p className="text-sm font-semibold text-[#16216b] md:text-base">{row.label}</p>
                ),
                cells: {
                  plastic: (
                    <div className="flex justify-center sm:justify-center">
                      <ComparisonValueCell {...row.plastic} />
                    </div>
                  ),
                  aluminum: (
                    <div className="flex justify-center sm:justify-center">
                      <ComparisonValueCell {...row.aluminum} />
                    </div>
                  ),
                },
              }))}
            />
          </div>
        </div>

        <div className="mx-auto mt-14 w-full max-w-[1440px]">
          <div className="grid gap-5 md:grid-cols-2 md:gap-6">
            <div className="flex flex-col rounded-2xl bg-[#f6f7ff] p-6 md:p-10 lg:px-14 lg:py-12">
              <p className="mb-4 text-base font-semibold text-[#263cd0] md:text-lg">
                Rinkitės plastikinius langus, jei:
              </p>
              <ul className="list-disc space-y-3 pl-5 text-base leading-relaxed text-[#16216b]">
                <li>svarbi kaina</li>
                <li>renovuojate būstą</li>
                <li>norite geros šilumos izoliacijos</li>
              </ul>
              <Link
                className="mt-8 inline-flex w-fit items-center justify-center rounded-full bg-[#263cd0] px-8 py-[15px] text-[15px] font-semibold text-white transition hover:bg-[#1e31a8]"
                href="/langai/plastikiniai-langai"
              >
                Ieškoti produktų
              </Link>
            </div>
            <div className="flex flex-col rounded-2xl bg-[#f6f7ff] p-6 md:p-10 lg:px-14 lg:py-12">
              <p className="mb-4 text-base font-semibold text-[#263cd0] md:text-lg">
                Rinkitės aliuminio langus, jei:
              </p>
              <ul className="list-disc space-y-3 pl-5 text-base leading-relaxed text-[#16216b]">
                <li>planuojate dideles vitrinas</li>
                <li>svarbus dizainas</li>
                <li>ieškote ilgaamžio sprendimo</li>
              </ul>
              <Link
                className="mt-8 inline-flex w-fit items-center justify-center rounded-full bg-[#263cd0] px-8 py-[15px] text-[15px] font-semibold text-white transition hover:bg-[#1e31a8]"
                href="/langai/aliuminio-langai"
              >
                Ieškoti produktų
              </Link>
            </div>
          </div>
        </div>
      </AnimatedSection>

      <CaseStudiesProjectsCarousel
        headingLead="Realūs klientų "
        headingRest="projektai"
        intro="Įgyvendinti langų projektai iš bendros galerijos — filtruojama pagal langų kategoriją."
        projectCategories={CAROUSEL_CATEGORIES.langaiHub}
      />

      <LangaiFaq />
    </div>
  );
}
