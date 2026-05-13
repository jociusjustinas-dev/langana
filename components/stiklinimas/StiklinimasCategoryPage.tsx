"use client";

import Link from "next/link";
import { useId, useState } from "react";

import { DurysComparisonTable } from "@/components/durys/DurysComparisonTable";
import { CaseStudiesProjectsCarousel } from "@/components/plastikiniai-langai/CaseStudiesProjectsCarousel";
import { FaqSection } from "@/components/plastikiniai-langai/FaqSection";
import { ProcessSteps } from "@/components/plastikiniai-langai/ProcessSteps";
import { SalesHero } from "@/components/plastikiniai-langai/SalesHero";
import { FeatureHoverCard } from "@/components/ui/FeatureHoverCard";
import { ParallaxCoverImage } from "@/components/ui/ParallaxCoverImage";
import { SegmentedPillTabList } from "@/components/ui/SegmentedPillTabList";
import { CAROUSEL_CATEGORIES } from "@/data/implemented-projects";

const MAIN_DIRECTIONS = [
  {
    title: "Balkonų stiklinimas",
    description:
      "Sprendimas daugiabučių ir namų balkonams, kai norite daugiau komforto, apsaugos nuo oro sąlygų ir papildomos naudingos erdvės.",
    href: "/stiklinimas/balkonu-stiklinimas",
    image: "/images/Balkonu stiklinimas/ChatGPT Image May 7, 2026, 03_40_37 PM (1).png",
    bullets: [
      "Tinka daugiabučiams ir individualiems namams",
      "Apsauga nuo vėjo, lietaus ir dulkių",
      "Papildoma erdvė daiktams ar poilsiui",
    ],
  },
  {
    title: "Terasų stiklinimas",
    description:
      "Sprendimas terasoms, kai norite ilgiau naudotis lauko erdve, apsaugoti ją nuo vėjo, lietaus ir sukurti jaukesnę poilsio zoną.",
    href: "/stiklinimas/terasu-stiklinimas",
    image: "/images/Terasu stiklinimas/ChatGPT Image May 7, 2026, 03_45_40 PM (1).png",
    bullets: [
      "Tinka terasoms ir poilsio zonoms",
      "Ilgesnis naudojimo sezonas lauke",
      "Sandarumas ir patogus kasdienis naudojimas",
    ],
  },
] as const;

const TYPE_CARDS = [
  {
    title: "Stiklinimas plastiku",
    body: "Šiltesnis ir sandaresnis sprendimas, tinkamas tada, kai norite daugiau komforto ir geresnės izoliacijos.",
  },
  {
    title: "Stiklinimas aliuminiu",
    body: "Lengvas, estetiškas ir praktiškas sprendimas, kai svarbu apsauga nuo vėjo, lietaus ir patogus naudojimas.",
  },
  {
    title: "Šiltos sistemos",
    body: "Tinka, kai erdvę norite naudoti didesnę metų dalį ir svarbi geresnė šilumos izoliacija.",
  },
  {
    title: "Šaltos sistemos",
    body: "Tinka apsaugai nuo oro sąlygų, kai nereikia pilnos šilumos izoliacijos.",
  },
] as const;

function BentoTopic({
  title,
  body,
  dark = false,
}: {
  title: string;
  body: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`relative flex h-full min-h-[220px] flex-col justify-end gap-3 overflow-hidden rounded-2xl p-6 md:p-8 ${
        dark ? "bg-[#16216b]" : "bg-[#f6f7ff]"
      }`}
    >
      <h3 className={`text-xl font-semibold leading-snug tracking-[-0.03em] md:text-2xl ${dark ? "text-white" : "text-[#16216b]"}`}>
        {title}
      </h3>
      <p className={`text-[15px] font-normal leading-relaxed md:text-base ${dark ? "text-white/90" : "text-[#16216b]"}`}>{body}</p>
    </div>
  );
}

const WHY_CARDS = [
  {
    title: "Apsauga nuo oro sąlygų",
    body: "Stiklinimas padeda apsaugoti erdvę nuo lietaus, sniego, vėjo, dulkių ir lapų.",
  },
  {
    title: "Daugiau naudojamos erdvės",
    body: "Įstiklintas balkonas ar terasa tampa patogesne vieta rytinei kavai, augalams, daiktų laikymui ar poilsiui.",
  },
  {
    title: "Mažiau triukšmo",
    body: "Stiklinimas gali sumažinti iš lauko sklindantį triukšmą, todėl namuose tampa ramiau.",
  },
] as const;

const FIT_COLUMNS = [{ key: "recommended", label: "Rekomenduojamas sprendimas" }] as const;
const FIT_ROWS = [
  { feature: "Norite įstiklinti balkoną daugiabutyje", values: { recommended: "Balkonų stiklinimas" } },
  { feature: "Norite apsaugoti terasą nuo vėjo ir lietaus", values: { recommended: "Terasų stiklinimas" } },
  { feature: "Svarbi šiluma ir sandarumas", values: { recommended: "Plastikinė arba šilta sistema" } },
  { feature: "Norite lengvesnio, paprastesnio sprendimo", values: { recommended: "Aliumininė arba šalta sistema" } },
  { feature: "Norite daugiau šviesos ir vizualinio lengvumo", values: { recommended: "Aliuminio konstrukcijos" } },
  { feature: "Norite komforto didesnę metų dalį", values: { recommended: "Šiltos sistemos" } },
] as const;

const FAQ = [
  {
    question: "Kuo skiriasi šilta ir šalta stiklinimo sistema?",
    answer:
      "Šilta sistema skirta geresnei šilumos izoliacijai, o šalta sistema dažniausiai naudojama apsaugai nuo vėjo, lietaus, sniego ir dulkių.",
  },
  {
    question: "Ar stiklinimas sumažina triukšmą?",
    answer: "Taip, stiklinimas gali sumažinti iš lauko sklindantį triukšmą, ypač gyvenant prie judrių gatvių.",
  },
  {
    question: "Ar galima stiklinti skirtingų dydžių balkonus?",
    answer: "Taip, sprendimas parenkamas pagal konkrečią angą, balkono konstrukciją ir naudojimo poreikį.",
  },
  {
    question: "Ar atliekate montavimą?",
    answer: "Taip, stiklinimo konstrukcijos parenkamos, pagaminamos ir sumontuojamos pagal objektą.",
  },
];

const PROCESS = [
  {
    title: "Konsultacija",
    description: "Aptariame erdvę, poreikį ir kokio tipo stiklinimas būtų tinkamiausias jūsų situacijoje.",
  },
  {
    title: "Matavimas",
    description: "Įvertiname balkono arba terasos matmenis, konstrukciją ir montavimo sąlygas.",
  },
  {
    title: "Sprendimo parinkimas",
    description: "Parenkame tinkamą sistemą pagal šilumos poreikį, biudžetą ir norimą naudojimo scenarijų.",
  },
  {
    title: "Montavimas",
    description: "Konstrukcija sumontuojama taip, kad būtų patogi naudoti, sandari ir lengvai prižiūrima.",
  },
] as const;

export function StiklinimasCategoryPage() {
  const [activeDirectionIndex, setActiveDirectionIndex] = useState(0);
  const directionsTabsId = useId();
  const activeDirection = MAIN_DIRECTIONS[activeDirectionIndex] ?? MAIN_DIRECTIONS[0];

  return (
    <div className="w-full bg-white text-[#16216b]">
      <SalesHero
        backgroundImageSrc="/images/Balkonu stiklinimas/ChatGPT Image May 7, 2026, 03_40_37 PM (2).png"
        ctaPrimary={{ label: "Gauti pasiūlymą", href: "/kontaktai#uzklausa" }}
        ctaSecondary={{ label: "Pasirinkti sprendimą", href: "#pasirinkti-sprendima" }}
        description="Šilti ir šalti stiklinimo sprendimai, kurie padeda apsaugoti erdves nuo vėjo, lietaus, sniego, dulkių ir triukšmo."
        stats={[
          { number: "200+", label: "Įstiklintų balkonų" },
          { number: "Šilta ir šalta", label: "Sistema pagal poreikį" },
          { number: "5 d.", label: "Vidutinis montavimas" },
        ]}
        primaryCtaReassurance
        title="Stiklinimo sprendimai balkonams ir terasoms"
      />

      <section className="w-full bg-white py-14 md:py-[100px]" id="pasirinkti-sprendima">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-4 px-4 text-center md:px-[70px]">
          <h2 className="max-w-3xl text-3xl font-semibold leading-[1.18] tracking-[-0.032em] md:text-[45px] md:leading-[52px]">
            <span className="text-[#263cd0]">Ką norite </span>
            <span className="text-[#16216b]">įstiklinti?</span>
          </h2>
          <p className="max-w-[760px] text-base leading-relaxed text-[#16216b] md:text-[17px]">
            Pasirinkite erdvę, kurią norite apsaugoti ir pritaikyti patogesniam naudojimui.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-[1440px] px-4 md:mt-10 md:px-[70px]">
          <div className="mb-8 md:mb-10">
            <SegmentedPillTabList ariaLabel="Stiklinimo kryptys">
              {MAIN_DIRECTIONS.map((tab, i) => {
                const selected = i === activeDirectionIndex;
                const tabDomId = `${directionsTabsId}-tab-${i}`;
                return (
                  <button
                    aria-controls={`${directionsTabsId}-panel`}
                    aria-selected={selected}
                    className={`min-h-[44px] rounded-full px-5 py-2.5 text-center text-[14px] font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#263cd0] focus-visible:ring-offset-2 sm:px-7 sm:py-3 sm:text-[15px] ${
                      selected ? "bg-[#263cd0] text-white shadow-sm" : "bg-transparent text-[#59799f] hover:text-[#16216b]"
                    }`}
                    id={tabDomId}
                    key={tab.title}
                    onClick={() => setActiveDirectionIndex(i)}
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
            aria-labelledby={`${directionsTabsId}-tab-${activeDirectionIndex}`}
            className="w-full rounded-2xl bg-[#f6f7ff] p-6 md:p-10 lg:p-12"
            id={`${directionsTabsId}-panel`}
            role="tabpanel"
          >
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-12 xl:gap-14" key={activeDirection.href}>
              <div className="relative mx-auto aspect-[4/3] min-h-[220px] w-full overflow-hidden rounded-2xl bg-[#e8ebfa] lg:mx-0 lg:aspect-auto lg:h-full lg:min-h-[280px] lg:self-stretch">
                <ParallaxCoverImage
                  alt={activeDirection.title}
                  fill
                  key={activeDirection.title}
                  sizes="(max-width: 1023px) 100vw, 45vw"
                  src={activeDirection.image}
                />
              </div>
              <div className="flex min-h-0 min-w-0 flex-col gap-6 lg:items-start">
                <div className="flex w-full flex-col gap-3 text-left">
                  <h3 className="text-xl font-semibold leading-tight tracking-[-0.04em] text-[#16216b] md:text-[22px] lg:text-[24px]">
                    {activeDirection.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-[#16216b] md:text-base">{activeDirection.description}</p>
                </div>
                <div className="w-full">
                  <p className="mb-3 text-[14px] font-semibold text-[#263cd0]">Privalumai</p>
                  <ul className="flex flex-col gap-2.5">
                    {activeDirection.bullets.map((line) => (
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
                    href={activeDirection.href}
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
      </section>

      <section className="w-full bg-white pb-14 md:pb-[100px]">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-4 md:gap-10 md:px-[70px]">
          <h2 className="text-3xl font-semibold leading-[1.18] tracking-[-0.032em] md:text-[45px] md:leading-[52px]">
            <span className="text-[#263cd0]">Pasirinkite sistemą </span>
            <span className="text-[#16216b]">pagal poreikį</span>
          </h2>
          <div className="flex flex-col gap-5 lg:grid lg:grid-cols-4 lg:gap-5">
          <div className="min-h-0 lg:col-start-1 lg:row-start-1">
            <BentoTopic body={TYPE_CARDS[0].body} title={TYPE_CARDS[0].title} />
          </div>
          <div className="relative min-h-[300px] overflow-hidden rounded-2xl bg-[#dde4fc] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:min-h-[520px]">
            <ParallaxCoverImage
              alt="Stiklinimas plastiku"
              fill
              sizes="(max-width: 1023px) 100vw, 23vw"
              src="/images/Balkonu stiklinimas/ChatGPT Image May 7, 2026, 03_40_37 PM (3).png"
            />
          </div>
          <div className="min-h-0 lg:col-start-3 lg:row-start-1">
            <BentoTopic body={TYPE_CARDS[1].body} title={TYPE_CARDS[1].title} dark />
          </div>
          <div className="min-h-0 lg:col-start-4 lg:row-start-1">
            <BentoTopic body={TYPE_CARDS[2].body} title={TYPE_CARDS[2].title} />
          </div>
          <div className="relative min-h-[240px] overflow-hidden rounded-2xl bg-[#e8ebfa] lg:col-start-1 lg:row-start-2 lg:min-h-[260px]">
            <ParallaxCoverImage
              alt="Stiklinimas aliuminiu"
              fill
              sizes="(max-width: 1023px) 100vw, 23vw"
              src="/images/Terasu stiklinimas/ChatGPT Image May 7, 2026, 03_45_40 PM (2).png"
            />
          </div>
          <div className="min-h-0 lg:col-span-2 lg:col-start-3 lg:row-start-2">
            <BentoTopic body={TYPE_CARDS[3].body} title={TYPE_CARDS[3].title} />
          </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white" id="kodel-verta-stiklinti">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-4 pb-8 pt-4 md:flex-row md:items-center md:justify-between md:px-[70px] md:pb-8 md:pt-10">
          <div className="max-w-[min(100%,42rem)] space-y-4">
            <h2 className="text-3xl font-semibold leading-[1.18] tracking-[-0.032em] md:text-[45px] md:leading-[52px]">
              <span className="text-[#263cd0]">Daugiau komforto, švaros </span>
              <span className="text-[#16216b]">ir naudingos erdvės</span>
            </h2>
          </div>
        </div>
        <div className="mx-auto grid max-w-[1440px] gap-4 px-4 pb-16 md:grid-cols-3 md:gap-4 md:px-[70px] md:pb-[100px] md:pt-6">
          {WHY_CARDS.map((card) => (
            <FeatureHoverCard
              description={card.body}
              headingClassName="text-xl font-semibold leading-[1.25] tracking-[-0.04em] md:text-[30px] md:leading-[36px]"
              key={card.title}
              title={card.title}
            />
          ))}
        </div>
      </section>

      <CaseStudiesProjectsCarousel
        headingLead="Realūs klientų "
        headingRest="projektai"
        intro="Balkonų ir terasų stiklinimo įgyvendinimai iš įgyvendintų projektų galerijos."
        projectCategories={CAROUSEL_CATEGORIES.stiklinimasHub}
      />

      <DurysComparisonTable
        columns={FIT_COLUMNS}
        headingLead="Kuris stiklinimo sprendimas"
        headingRest="jums tinkamiausias?"
        rows={FIT_ROWS}
        sectionId="stiklinimo-pasirinkimo-pagalba"
      />

      <FaqSection
        faqIdPrefix="stiklinimas-faq"
        headingLead="Jūsų klausimai – "
        headingRest="aiškūs atsakymai"
        items={FAQ}
        sectionId="duk-stiklinimas"
      />

      <ProcessSteps headingLine1="Kaip vyksta stiklinimo užsakymas?" id="procesas-stiklinimas" steps={PROCESS} />
    </div>
  );
}
