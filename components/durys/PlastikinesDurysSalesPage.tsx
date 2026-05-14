import Link from "next/link";

import { DurysComparisonTable } from "@/components/durys/DurysComparisonTable";
import { PlastikinesDurysAdaptationBento } from "@/components/durys/PlastikinesDurysAdaptationBento";
import { PlastikinesDurysSolutionTabs } from "@/components/durys/PlastikinesDurysSolutionTabs";
import { CaseStudiesProjectsCarousel } from "@/components/plastikiniai-langai/CaseStudiesProjectsCarousel";
import { FaqSection } from "@/components/plastikiniai-langai/FaqSection";
import { ProcessSteps } from "@/components/plastikiniai-langai/ProcessSteps";
import { SalesHero } from "@/components/plastikiniai-langai/SalesHero";
import { FeatureHoverCard } from "@/components/ui/FeatureHoverCard";
import { ResponsiveComparisonGrid } from "@/components/ui/ResponsiveComparisonGrid";
import { CAROUSEL_CATEGORIES } from "@/data/implemented-projects";
import { PLASTIKINES_DURYS_FAQ } from "@/data/structured-data-faqs";

const HERO_IMAGE = "/images/durys.png";

const WHY_CARDS = [
  {
    title: "Tinka skirtingoms erdvėms",
    body: "Plastikinės durys naudojamos ne tik balkonams ar terasoms, bet ir individualiems namams, biurams, parduotuvėms bei kitoms patalpoms.",
  },
  {
    title: "Geros termoizoliacinės savybės",
    body: "Durims galima naudoti 2 arba 3 stiklų stiklo paketus, kurie padeda išlaikyti šilumą net šaltuoju metų laiku.",
  },
  {
    title: "Lengva priežiūra",
    body: "Plastikinės durys lengvai valomos, nereikalauja sudėtingos priežiūros ir ilgai išlaiko tvarkingą išvaizdą.",
  },
] as const;

const SELECTION_QA_COLUMNS = [
  {
    key: "why",
    label: "Kodėl tai svarbu?",
    headerClassName: "text-center text-base font-semibold text-[#263cd0] md:text-[18px]",
  },
] as const;

const SELECTION_ROWS: { q: string; why: string }[] = [
  {
    q: "Kur durys bus montuojamos?",
    why: "Lauko, balkono, terasos ar komercinės erdvės durims gali reikėti skirtingo sprendimo.",
  },
  {
    q: "Ar durys bus saulėtoje pusėje?",
    why: "Saulės poveikis gali turėti įtakos spalvai, profilio pasirinkimui ir ilgaamžiškumui.",
  },
  {
    q: "Ar virš durų bus stogelis?",
    why: "Stogelis padeda apsaugoti duris nuo tiesioginio lietaus ir prailgina tarnavimo laiką.",
  },
  {
    q: "Koks pastato apšiltinimo būdas?",
    why: "Nuo to priklauso tinkamas durų montavimo būdas.",
  },
  {
    q: "Į kurią pusę turi atsidaryti durys?",
    why: "Durys gali atsidaryti į vidų arba į išorę, priklausomai nuo furnitūros ir erdvės.",
  },
  {
    q: "Ar reikalingas didesnis sandarumas?",
    why: "Tokiu atveju verta rinktis geresnį stiklo paketą ir tinkamą montavimo sprendimą.",
  },
];

const PROCESS = [
  {
    title: "Konsultacija",
    description:
      "Aptariame, kur durys bus montuojamos, kokio dizaino, spalvos, stiklo paketo ir varstymo krypties reikia.",
  },
  {
    title: "Matavimas",
    description: "Įvertiname angą, pastato apšiltinimą, montavimo sąlygas ir durų naudojimo vietą.",
  },
  {
    title: "Gamyba",
    description: "Durys gaminamos pagal suderintus matmenis, spalvą, stiklo paketą ir pasirinktą furnitūrą.",
  },
  {
    title: "Montavimas",
    description: "Durys sumontuojamos taip, kad būtų sandarios, stabilios ir patogios naudoti kasdien.",
  },
];

const COMPARISON_COLUMNS = [
  { key: "plastic", label: "Plastikinės durys" },
  { key: "metal", label: "Metalinės durys" },
  { key: "aluminum", label: "Aliuminio durys" },
] as const;

const COMPARISON_ROWS = [
  { feature: "Saugumas", values: { plastic: "Geras", metal: "Labai geras", aluminum: "Aukštesnis" } },
  { feature: "Kaina", values: { plastic: "Ekonomiška", metal: "Dažnai ekonomiška", aluminum: "Aukštesnė investicija" } },
  { feature: "Ilgaamžiškumas", values: { plastic: "Geras", metal: "Labai geras", aluminum: "Labai aukštas" } },
  { feature: "Dizainas", values: { plastic: "Universalus", metal: "Platus pasirinkimas", aluminum: "Solidus, modernus" } },
  { feature: "Garso izoliacija", values: { plastic: "Gera", metal: "Gera", aluminum: "Gera" } },
  { feature: "Priežiūra", values: { plastic: "Labai paprasta", metal: "Paprasta", aluminum: "Paprasta" } },
  {
    feature: "Pritaikymas",
    values: {
      plastic: "Namams, balkonams, terasoms",
      metal: "Namams, butams, techninėms patalpoms",
      aluminum: "Namams, daugiabučiams, komercijai",
    },
  },
] as const;

export function PlastikinesDurysSalesPage() {
  return (
    <div className="w-full bg-white text-[#16216b]">
      <SalesHero
        backgroundImageSrc={HERO_IMAGE}
        breadcrumbItems={[
          { label: "Pradžia", href: "/" },
          { label: "Durys", href: "/durys" },
          { label: "Plastikinės durys" },
        ]}
        ctaPrimary={{ label: "Gauti pasiūlymą", href: "/kontaktai#uzklausa" }}
        ctaSecondary={{ label: "Peržiūrėti privalumus", href: "#privalumai-plastikines" }}
        description="Sandarios, lengvai prižiūrimos ir prie skirtingo pastato stiliaus pritaikomos plastikinės durys balkonams, terasoms, individualiems namams, biurams ir parduotuvėms."
        title="Plastikinės durys namams, biurams ir komercinėms erdvėms"
      />

      <PlastikinesDurysSolutionTabs sectionId="sprendimai-plastikines" />

      <section className="w-full bg-white" id="privalumai-plastikines">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-4 pb-8 pt-4 md:flex-row md:items-center md:justify-between md:px-[70px] md:pb-8 md:pt-10">
          <div className="max-w-[min(100%,38rem)] space-y-4">
            <h2 className="text-3xl font-semibold leading-[1.18] tracking-[-0.032em] md:text-[45px] md:leading-[52px]">
              <span className="text-[#263cd0]">Praktiškas sprendimas </span>
              <span className="text-[#16216b]">šilumai, sandarumui ir lengvai priežiūrai</span>
            </h2>
            <p className="text-base leading-relaxed text-[#16216b]">
              Plastikinės durys gali konkuruoti su medinėmis ar aliuminio durimis, nes yra universalios, atsparios oro sąlygoms ir lengvai pritaikomos skirtingiems objektams.
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

      <PlastikinesDurysAdaptationBento sectionId="pritaikymas-plastikines" />

      <section className="w-full bg-white px-4 py-16 md:px-[70px] md:py-[100px]" id="pasirinkimas-plastikines">
        <div className="mx-auto max-w-[1440px] space-y-10">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold leading-[1.18] tracking-[-0.032em] md:text-[45px] md:leading-[52px]">
              <span className="text-[#263cd0]">Į ką atkreipti dėmesį </span>
              <span className="text-[#16216b]">renkantis plastikines duris?</span>
            </h2>
          </div>

          <ResponsiveComparisonGrid
            ariaLabel="Plastikinių durų pasirinkimo klausimai"
            columns={SELECTION_QA_COLUMNS}
            desktopMinWidthClass="max-lg:min-w-[560px]"
            firstColumnHeaderClassName="self-center text-sm font-semibold text-[#59799f] md:text-base"
            firstColumnLabel="Klausimas"
            gridTemplateColumns="minmax(0,1.1fr) minmax(0,1fr)"
            rows={SELECTION_ROWS.map((row) => ({
              key: row.q,
              feature: <p className="text-sm font-semibold text-[#16216b] md:text-base">{row.q}</p>,
              cells: {
                why: <p className="text-sm font-normal leading-relaxed text-[#16216b] md:text-base">{row.why}</p>,
              },
            }))}
          />
        </div>
      </section>

      <DurysComparisonTable
        columns={COMPARISON_COLUMNS}
        headingLead="Plastikinės, metalinės"
        headingRest="ar aliuminio durys?"
        offerCta={true}
        rows={COMPARISON_ROWS}
        sectionId="palyginimas-plastikines"
      />

      <CaseStudiesProjectsCarousel
        headingLead="Realūs klientų "
        headingRest="projektai"
        intro="Įgyvendinti durų projektai iš bendros galerijos."
        projectCategories={CAROUSEL_CATEGORIES.durys}
      />

      <FaqSection
        faqIdPrefix="plastikines-durys-faq"
        headingLead="Jūsų klausimai – "
        headingRest="aiškūs atsakymai"
        items={PLASTIKINES_DURYS_FAQ}
        sectionId="duk-plastikines-durys"
      />

      <ProcessSteps
        headingLine1="Kaip vyksta plastikinių durų užsakymas?"
        id="procesas-plastikines"
        steps={PROCESS}
      />
    </div>
  );
}
