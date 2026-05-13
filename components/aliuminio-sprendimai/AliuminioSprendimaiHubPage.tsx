"use client";

import Link from "next/link";
import { useId, useState } from "react";

import { ParallaxCoverImage } from "@/components/ui/ParallaxCoverImage";
import { SegmentedPillTabList } from "@/components/ui/SegmentedPillTabList";

import { DurysComparisonTable } from "@/components/durys/DurysComparisonTable";
import { CaseStudiesProjectsCarousel } from "@/components/plastikiniai-langai/CaseStudiesProjectsCarousel";
import { FaqSection } from "@/components/plastikiniai-langai/FaqSection";
import { ProcessSteps } from "@/components/plastikiniai-langai/ProcessSteps";
import { SalesHero } from "@/components/plastikiniai-langai/SalesHero";
import { CAROUSEL_CATEGORIES } from "@/data/implemented-projects";

/** Hub sekcijų nuotraukos iš `public/images/Aliuminio sprendimai /` (ne `alium3` / `alium4`). */
const HUB_PAGE_IMAGES = {
  tall: "/images/Aliuminio sprendimai /ChatGPT Image May 7, 2026, 04_22_53 PM (1).png",
  tile: "/images/Aliuminio sprendimai /ChatGPT Image May 7, 2026, 04_22_53 PM (6).png",
  nestandartiniai: "/images/Aliuminio sprendimai /ChatGPT Image May 7, 2026, 04_22_53 PM (9).png",
} as const;

const MAIN_DIRECTIONS = [
  {
    title: "Aliuminio fasadai",
    description: "Lengvos, tvirtos ir estetiškos fasadų sistemos biurams, viešiesiems, komerciniams ir kitiems pastatams.",
    href: "/aliuminio-sprendimai/aliuminio-fasadai",
    cta: "Peržiūrėti fasadų sistemas",
    image: "/images/alium.png",
  },
  {
    title: "Aliuminio pertvaros",
    description:
      "Vidaus pertvarų, vitrinų, durų ir atitvertų erdvių sistemos objektams, kuriuose svarbus funkcionalumas, estetika ir konstrukcijos stabilumas.",
    href: "/aliuminio-sprendimai/aliuminio-pertvaros",
    cta: "Peržiūrėti pertvarų sistemas",
    image: "/images/alium3.png",
  },
] as const;

const CROSS_LINKS = [
  {
    title: "Aliuminio langai",
    body: "Tvirti, ilgaamžiai ir modernūs langų sprendimai didesnėms angoms bei šiuolaikinei architektūrai.",
    href: "/langai/aliuminio-langai",
  },
  {
    title: "Aliuminio durys",
    body: "Saugios, estetiškos ir ilgaamžės durys namams, daugiabučiams bei komerciniams objektams.",
    href: "/durys/aliuminio-durys",
  },
  {
    title: "Aliuminės stumdomos sistemos",
    body: "Sprendimai terasoms, vitrinoms, balkonams, lodžijoms ir dideliems stiklo plotams.",
    href: "/stumdomos-sistemos/aliumines-stumdomos-sistemos",
  },
  {
    title: "Žiemos sodai",
    body: "Individualiai projektuojamos stiklinės erdvės, kurios sujungia namus ir lauką.",
    href: "/ziemos-sodai",
  },
] as const;

const WHY_CARDS = [
  {
    title: "Didelių gabaritų galimybės",
    body: "Aliuminis leidžia kurti didesnes konstrukcijas nei daugelis įprastų sprendimų.",
  },
  {
    title: "Atsparumas aplinkos poveikiui",
    body: "Aliuminio gaminiai atsparūs temperatūrų svyravimams, krituliams, deformacijoms ir kasdieniam naudojimui.",
  },
  {
    title: "Platus spalvų pasirinkimas",
    body: "Aliuminio profiliai gali būti dažomi bet kokia RAL spalva arba medžio imitacija.",
  },
  {
    title: "Tinka naujai statybai ir rekonstrukcijai",
    body: "YAWAL ir PONZIO sistemos leidžia pritaikyti sprendimus tiek naujiems, tiek rekonstruojamiems pastatams.",
  },
] as const;

const TRUST_POINTS = [
  "Ilgametė gamintojų patirtis;",
  "Sistemos naujai statybai ir rekonstrukcijai;",
  "Šilti ir šalti profiliai pagal paskirtį;",
  "Galimybė įgyvendinti nestandartinius sprendimus.",
] as const;

const CUSTOM_SOLUTIONS = [
  "žiemos sodai;",
  "apvalūs langai;",
  "trapecijos;",
  "arkos;",
  "automatinės durys;",
  "didelių matmenų stumdomos durų sistemos;",
  "nestandartinės fasadų ir pertvarų konstrukcijos.",
] as const;

const PROFILE_COLUMNS = [{ key: "where", label: "Kur naudojamas?" }] as const;
const PROFILE_ROWS = [
  {
    feature: "Šilti profiliai",
    values: { where: "Išorės gaminiams: langams, durims, fasadams, stumdomoms sistemoms" },
  },
  {
    feature: "Šalti profiliai",
    values: { where: "Vidaus gaminiams: pertvaroms, vitrinoms, vidaus durims ir atitvertoms erdvėms" },
  },
] as const;

const PROCESS = [
  {
    title: "Konsultacija",
    description: "Aptariame objekto tipą, architektūrinius poreikius, techninius reikalavimus ir norimą rezultatą.",
  },
  {
    title: "Specialisto vizitas",
    description: "Įvertiname objektą, konstrukcijos galimybes, matmenis ir montavimo sąlygas.",
  },
  {
    title: "Projektas ir sąmata",
    description: "Parengiame gaminių sprendimą, techninį pasiūlymą ir kainų sąmatą.",
  },
  {
    title: "Gamyba ir montavimas",
    description: "Pagaminame, pristatome ir sumontuojame konstrukcijas Lietuvoje arba pagal susitarimą užsienyje.",
  },
  {
    title: "Garantinė priežiūra",
    description: "Po montavimo suteikiame garantinę priežiūrą ir padedame, jei reikalingi papildomi sprendimai.",
  },
] as const;

const FAQ = [
  {
    question: "Kur naudojamos aliuminio konstrukcijos?",
    answer:
      "Aliuminio konstrukcijos naudojamos fasadams, pertvaroms, langams, durims, vitrinoms, stumdomoms sistemoms, žiemos sodams ir nestandartiniams gaminiams.",
  },
  {
    question: "Kuo aliuminis pranašesnis už plastiką ar medį?",
    answer:
      "Aliuminis leidžia kurti didesnių gabaritų konstrukcijas, yra atsparus aplinkos poveikiui, ilgaamžis ir tinkamas moderniai architektūrai.",
  },
  {
    question: "Kuo skiriasi šilti ir šalti aliuminio profiliai?",
    answer:
      "Šilti profiliai naudojami išorės gaminiams, kur svarbi šilumos izoliacija. Šalti profiliai dažniausiai naudojami vidaus pertvaroms, vitrinoms ir panašioms konstrukcijoms.",
  },
  {
    question: "Ar galima rinktis spalvą?",
    answer: "Taip, aliuminio profiliai gali būti dažomi pagal RAL paletę arba medžio imitacijos spalvomis.",
  },
  {
    question: "Ar gaminate nestandartines konstrukcijas?",
    answer:
      "Taip, galima gaminti nestandartinius sprendimus, tokius kaip žiemos sodai, apvalūs langai, trapecijos, arkos, automatinės durys ar didelių matmenų stumdomos sistemos.",
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

export function AliuminioSprendimaiHubPage() {
  const [activeMainIndex, setActiveMainIndex] = useState(0);
  const mainTabsId = useId();
  const activeMain = MAIN_DIRECTIONS[activeMainIndex] ?? MAIN_DIRECTIONS[0];

  return (
    <div className="w-full bg-white text-[#16216b]">
      <SalesHero
        backgroundImageSrc="/images/alium4.png"
        ctaPrimary={{ label: "Gauti pasiūlymą", href: "/kontaktai#uzklausa" }}
        ctaSecondary={{ label: "Peržiūrėti sprendimus", href: "#pagrindines-kryptys" }}
        denseHeroTitle
        description="Projektuojame, gaminame ir montuojame aliuminio konstrukcijas gyvenamiesiems, komerciniams, viešosios paskirties ir pramoniniams objektams Lietuvoje bei užsienyje."
        stats={[
          { number: "YAWAL & PONZIO", label: "Aliuminio sistemos" },
          { number: "Individualus", label: "Kiekvienas projektas" },
          { number: "Garantija", label: "Įtraukta į kainą" },
        ]}
        primaryCtaReassurance
        title="Aliuminio sprendimai fasadams, pertvaroms ir nestandartinėms konstrukcijoms"
      />

      <section className="w-full bg-white py-14 md:py-[100px]" id="pagrindines-kryptys">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-4 px-4 text-center md:px-[70px]">
          <h2 className="text-3xl font-semibold leading-[1.18] tracking-[-0.032em] md:text-[45px] md:leading-[52px]">
            <span className="text-[#263cd0]">Aliuminio konstrukcijos </span>
            <span className="text-[#16216b]">pagal jūsų projektą</span>
          </h2>
          <p className="max-w-[880px] text-base leading-relaxed text-[#16216b] md:text-[17px]">
            Dirbame su patikimomis YAWAL ir PONZIO aliuminio profilių sistemomis, kurios leidžia įgyvendinti tiek standartinius, tiek individualius architektūrinius sprendimus.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-[1440px] px-4 md:mt-10 md:px-[70px]">
          <div className="mb-8 md:mb-12">
            <SegmentedPillTabList ariaLabel="Aliuminio sprendimų kryptys">
              {MAIN_DIRECTIONS.map((tab, i) => {
                const selected = i === activeMainIndex;
                const tabDomId = `${mainTabsId}-tab-${i}`;
                return (
                  <button
                    aria-controls={`${mainTabsId}-panel`}
                    aria-selected={selected}
                    className={`min-h-[44px] rounded-full px-5 py-2.5 text-center text-[14px] font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#263cd0] focus-visible:ring-offset-2 sm:px-7 sm:py-3 sm:text-[15px] ${
                      selected ? "bg-[#263cd0] text-white shadow-sm" : "bg-transparent text-[#59799f] hover:text-[#16216b]"
                    }`}
                    id={tabDomId}
                    key={tab.title}
                    onClick={() => setActiveMainIndex(i)}
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
            aria-labelledby={`${mainTabsId}-tab-${activeMainIndex}`}
            className="w-full rounded-2xl bg-[#f6f7ff] p-6 md:p-10 lg:p-12"
            id={`${mainTabsId}-panel`}
            role="tabpanel"
          >
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-12 xl:gap-14">
              <div className="relative mx-auto aspect-[4/3] min-h-[220px] w-full overflow-hidden rounded-2xl bg-[#e8ebfa] lg:mx-0 lg:aspect-auto lg:h-full lg:min-h-[280px] lg:self-stretch">
                <ParallaxCoverImage
                  alt={activeMain.title}
                  fill
                  key={activeMain.href}
                  sizes="(max-width: 1023px) 100vw, 45vw"
                  src={activeMain.image}
                />
              </div>
              <div className="flex min-h-0 min-w-0 flex-col gap-6 lg:items-start">
                <div className="space-y-4">
                  <h3 className="text-[24px] font-semibold leading-[1.18] tracking-[-0.03em] text-[#263cd0] md:text-[32px]">
                    {activeMain.title}
                  </h3>
                  <p className="max-w-[900px] text-[16px] leading-relaxed text-[#16216b]">{activeMain.description}</p>
                </div>
                <div className="mt-2">
                  <Link
                    className="inline-flex items-center justify-center rounded-full bg-[#263cd0] px-8 py-[15px] text-[15px] font-semibold text-white transition hover:bg-[#1e31a8]"
                    href={activeMain.href}
                  >
                    {activeMain.cta}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white" id="kodel-aliuminis">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-4 pb-8 pt-4 md:px-[70px] md:pb-8 md:pt-10">
          <div className="max-w-[min(100%,44rem)] space-y-4">
            <h2 className="text-3xl font-semibold leading-[1.18] tracking-[-0.032em] md:text-[45px] md:leading-[52px]">
              <span className="text-[#263cd0]">Tvirtumas, ilgaamžiškumas </span>
              <span className="text-[#16216b]">ir architektūrinė laisvė</span>
            </h2>
          </div>
        </div>
        <div className="mx-auto flex max-w-[1440px] flex-col gap-5 px-4 pb-16 pt-6 md:px-[70px] md:pb-[100px] md:pt-8 lg:pt-10 lg:grid lg:grid-cols-4 lg:gap-5">
          <div className="min-h-0 lg:col-start-1 lg:row-start-1">
            <BentoTopic body={WHY_CARDS[0].body} title={WHY_CARDS[0].title} />
          </div>

          <div className="relative min-h-[300px] overflow-hidden rounded-2xl bg-[#dde4fc] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:min-h-[520px]">
            <ParallaxCoverImage
              alt="Aliuminio konstrukcijos"
              fill
              sizes="(max-width: 1023px) 100vw, 23vw"
              src={HUB_PAGE_IMAGES.tall}
              style={{ objectPosition: "48% 42%" }}
            />
          </div>

          <div className="min-h-0 lg:col-start-3 lg:row-start-1">
            <BentoTopic body={WHY_CARDS[1].body} title={WHY_CARDS[1].title} dark />
          </div>

          <div className="min-h-0 lg:col-start-4 lg:row-start-1">
            <BentoTopic body={WHY_CARDS[2].body} title={WHY_CARDS[2].title} />
          </div>

          <div className="relative min-h-[240px] overflow-hidden rounded-2xl bg-[#e8ebfa] lg:col-start-1 lg:row-start-2 lg:min-h-[260px]">
            <ParallaxCoverImage
              alt="Aliuminio profilių sprendimai"
              fill
              sizes="(max-width: 1023px) 100vw, 23vw"
              src={HUB_PAGE_IMAGES.tile}
              style={{ objectPosition: "52% 48%" }}
            />
          </div>

          <div className="min-h-0 lg:col-span-2 lg:col-start-3 lg:row-start-2">
            <BentoTopic body={WHY_CARDS[3].body} title={WHY_CARDS[3].title} />
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-16 md:py-[100px]">
        <div className="mx-auto w-full max-w-[1440px] px-4 md:px-[70px]">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-14">
            <div className="relative min-h-[340px] overflow-hidden rounded-2xl bg-[#e8ebfa] lg:min-h-[680px]">
              <ParallaxCoverImage alt="Aliuminio profilių gamintojai" fill sizes="(max-width: 1023px) 100vw, 46vw" src="/images/alium4.png" />
            </div>

            <div className="rounded-2xl bg-[#f6f7ff] p-8 md:p-10">
              <h2 className="text-3xl font-semibold leading-[1.18] tracking-[-0.032em] md:text-[45px] md:leading-[52px]">
                <span className="text-[#263cd0]">Dirbame su patikimais Europos </span>
                <span className="text-[#16216b]">profilių gamintojais</span>
              </h2>
              <p className="mt-4 max-w-[900px] text-base leading-relaxed text-[#16216b] md:text-[17px]">
                Bendradarbiaujame su Europoje žinomais aliuminio profilių gamintojais YAWAL ir PONZIO. Jų sistemos naudojamos fasadams, langams, durims, pertvaroms, stumdomoms konstrukcijoms ir nestandartiniams gaminiams.
              </p>
              <ul className="mt-8 grid gap-3 md:grid-cols-2">
                {TRUST_POINTS.map((point) => (
                  <li className="flex items-center gap-3 text-[15px] leading-relaxed text-[#16216b] md:text-base" key={point}>
                    <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-[#263cd0]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white pb-16 md:pb-[100px]">
        <div className="mx-auto w-full max-w-[1440px] px-4 md:px-[70px]">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-14">
            <div className="rounded-2xl bg-[#f6f7ff] p-8 md:p-10">
              <h2 className="text-3xl font-semibold leading-[1.18] tracking-[-0.032em] md:text-[45px] md:leading-[52px]">
                <span className="text-[#263cd0]">Nestandartiniai sprendimai </span>
                <span className="text-[#16216b]">pagal projekto poreikius</span>
              </h2>
              <p className="mt-4 max-w-[900px] text-base leading-relaxed text-[#16216b] md:text-[17px]">
                Aliuminio konstrukcijos leidžia įgyvendinti ne tik standartinius gaminius, bet ir individualias formas, didelių matmenų sistemas bei architektūrinius sprendimus.
              </p>
              <ul className="mt-8 grid gap-3 md:grid-cols-2">
                {CUSTOM_SOLUTIONS.map((item) => (
                  <li className="flex items-center gap-3 text-[15px] leading-relaxed text-[#16216b] md:text-base" key={item}>
                    <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-[#263cd0]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative min-h-[340px] overflow-hidden rounded-2xl bg-[#e8ebfa] lg:min-h-[680px]">
              <ParallaxCoverImage
                alt="Nestandartiniai aliuminio sprendimai"
                fill
                sizes="(max-width: 1023px) 100vw, 46vw"
                src={HUB_PAGE_IMAGES.nestandartiniai}
                style={{ objectPosition: "50% 45%" }}
              />
            </div>
          </div>
        </div>
      </section>

      <DurysComparisonTable
        columns={PROFILE_COLUMNS}
        headingLead="Šilti ir šalti profiliai"
        headingRest="pagal naudojimo vietą"
        rows={PROFILE_ROWS}
        sectionId="profiliu-tipai"
      />

      <CaseStudiesProjectsCarousel
        headingLead="Realūs klientų "
        headingRest="projektai"
        intro="Fasadų ir pertvarų įgyvendinimai iš bendros projektų galerijos."
        projectCategories={CAROUSEL_CATEGORIES.aliuminioSprendimaiHub}
      />

      <ProcessSteps headingLine1="Kaip vyksta aliuminio konstrukcijų projektas?" id="procesas-aliuminis" steps={PROCESS} />

      <FaqSection
        faqIdPrefix="aliuminio-sprendimai-faq"
        headingLead="Dažniausiai"
        headingRest="užduodami klausimai"
        items={FAQ}
        sectionId="duk-aliuminio-sprendimai"
      />

      <section className="w-full bg-white pb-14 pt-8 md:pb-[100px] md:pt-12">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-4 md:px-[70px]">
          <h2 className="text-3xl font-semibold leading-[1.18] tracking-[-0.032em] md:text-[45px] md:leading-[52px]">
            <span className="text-[#263cd0]">Kiti aliuminio </span>
            <span className="text-[#16216b]">sprendimai</span>
          </h2>
          <p className="max-w-[880px] text-base leading-relaxed text-[#16216b] md:text-[17px]">
            Aliuminio konstrukcijos taip pat naudojamos languose, duryse, stumdomose sistemose ir individualiuose projektuose.
          </p>
        </div>
        <div className="mx-auto mt-8 grid max-w-[1440px] gap-4 px-4 md:mt-10 md:grid-cols-2 md:px-[70px]">
          {CROSS_LINKS.map((card) => (
            <article className="rounded-2xl bg-[#f6f7ff] p-8" key={card.title}>
              <h3 className="text-2xl font-semibold leading-tight tracking-[-0.03em] text-[#263cd0]">{card.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-[#16216b]">{card.body}</p>
              <Link
                className="mt-6 inline-flex text-[15px] font-semibold text-[#263cd0] no-underline underline-offset-8 transition-all duration-200 ease-out hover:underline hover:underline-offset-4"
                href={card.href}
              >
                Sužinokite daugiau
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

