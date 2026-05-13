import Link from "next/link";

import { DurysComparisonTable } from "@/components/durys/DurysComparisonTable";
import { MetalinesDurysAdaptationBento } from "@/components/durys/MetalinesDurysAdaptationBento";
import { MetalinesDurysSolutionTabs } from "@/components/durys/MetalinesDurysSolutionTabs";
import { CaseStudiesProjectsCarousel } from "@/components/plastikiniai-langai/CaseStudiesProjectsCarousel";
import { FaqSection } from "@/components/plastikiniai-langai/FaqSection";
import { ProcessSteps } from "@/components/plastikiniai-langai/ProcessSteps";
import { SalesHero } from "@/components/plastikiniai-langai/SalesHero";
import { FeatureHoverCard } from "@/components/ui/FeatureHoverCard";
import { ResponsiveComparisonGrid } from "@/components/ui/ResponsiveComparisonGrid";
import { CAROUSEL_CATEGORIES } from "@/data/implemented-projects";

const HERO_IMAGE = "/images/durys.png";

const WHY_CARDS = [
  {
    title: "Didesnis saugumo jausmas",
    body: "Metalinės durys padeda apsaugoti namus nuo neprašytų svečių, o dvigubos spynos suteikia papildomą apsaugą.",
  },
  {
    title: "Ilgaamžė investicija",
    body: "Metalinės durys yra patvarios ir tarnauja ilgai, todėl kartą investavus nereikia greitai galvoti apie keitimą.",
  },
  {
    title: "Geras kainos ir kokybės santykis",
    body: "Nors metalinės durys turi daug privalumų, jos dažnai išlieka vienu ekonomiškesnių pasirinkimų.",
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
    why: "Namo, buto, techninės ar pagalbinės patalpos durims gali reikėti skirtingo sprendimo.",
  },
  {
    q: "Kiek svarbus saugumas?",
    why: "Pagal tai verta rinktis spynas, konstrukciją ir papildomas apsaugos priemones.",
  },
  {
    q: "Ar svarbi garso izoliacija?",
    why: "Metalinės durys gali padėti sumažinti iš lauko ar laiptinės sklindantį triukšmą.",
  },
  {
    q: "Koks biudžetas?",
    why: "Metalinės durys dažnai leidžia suderinti saugumą, kokybę ir konkurencingą kainą.",
  },
  {
    q: "Ar reikalingas montavimas?",
    why: "Profesionalus montavimas svarbus, kad durys būtų stabilios, patogios ir saugios.",
  },
  {
    q: "Ar reikia pristatymo?",
    why: "Galima pasirūpinti durų pristatymu į nurodytą adresą.",
  },
];

const FAQ = [
  {
    question: "Ar metalinės durys tinka kaip lauko durys?",
    answer:
      "Taip, metalinės durys yra vienas dažniausių pasirinkimų lauko durims, kai svarbiausia saugumas, tvirtumas ir ilgaamžiškumas.",
  },
  {
    question: "Ar metalinės durys padeda sumažinti triukšmą?",
    answer:
      "Taip, metalinės durys akustikos atžvilgiu gali padėti sumažinti iš lauko ar laiptinės sklindančius garsus.",
  },
  {
    question: "Ar metalinės durys yra brangios?",
    answer:
      "Ne visada. Metalinės durys dažnai yra vienas ekonomiškesnių pasirinkimų, ypač vertinant saugumą, ilgaamžiškumą ir kokybę.",
  },
  {
    question: "Ar galite sumontuoti duris?",
    answer: "Taip, teikiamos durų montavimo paslaugos, todėl klientui nereikia rūpintis atskirais darbais.",
  },
  {
    question: "Ar durims suteikiama garantija?",
    answer: "Taip, durims suteikiama garantija, todėl galite labiau pasitikėti pasirinktu sprendimu.",
  },
];

const PROCESS = [
  {
    title: "Konsultacija",
    description:
      "Aptariame, kur durys bus montuojamos, kokio saugumo, garso izoliacijos, dizaino ir biudžeto tikitės.",
  },
  {
    title: "Sprendimo parinkimas",
    description: "Padedame išsirinkti tinkamas metalines duris pagal poreikį, objektą ir galimybes.",
  },
  {
    title: "Pristatymas",
    description: "Gaminys pristatomas jūsų nurodytu adresu, kad nereikėtų rūpintis logistika.",
  },
  {
    title: "Montavimas",
    description: "Durys sumontuojamos profesionaliai, kad būtų saugios, stabilios ir patogios naudoti.",
  },
];

const COMPARISON_COLUMNS = [
  { key: "metal", label: "Metalinės durys" },
  { key: "aluminum", label: "Aliuminio durys" },
  { key: "plastic", label: "Plastikinės durys" },
] as const;

const COMPARISON_ROWS = [
  { feature: "Saugumas", values: { metal: "Labai geras", aluminum: "Labai geras", plastic: "Geras" } },
  { feature: "Kaina", values: { metal: "Dažnai ekonomiška", aluminum: "Aukštesnė investicija", plastic: "Ekonomiška" } },
  { feature: "Ilgaamžiškumas", values: { metal: "Labai geras", aluminum: "Labai aukštas", plastic: "Geras" } },
  { feature: "Dizainas", values: { metal: "Platus pasirinkimas", aluminum: "Modernus, solidus", plastic: "Universalus" } },
  { feature: "Garso izoliacija", values: { metal: "Gera", aluminum: "Gera", plastic: "Gera" } },
  { feature: "Priežiūra", values: { metal: "Paprasta", aluminum: "Paprasta", plastic: "Labai paprasta" } },
  { feature: "Tinka namams", values: { metal: "Taip", aluminum: "Taip", plastic: "Taip" } },
  { feature: "Tinka techninėms patalpoms", values: { metal: "Labai tinka", aluminum: "Tinka", plastic: "Ribotai" } },
] as const;

export function MetalinesDurysSalesPage() {
  return (
    <div className="w-full bg-white text-[#16216b]">
      <SalesHero
        backgroundImageSrc={HERO_IMAGE}
        breadcrumbItems={[
          { label: "Pradžia", href: "/" },
          { label: "Durys", href: "/durys" },
          { label: "Metalinės durys" },
        ]}
        ctaPrimary={{ label: "Gauti pasiūlymą", href: "/kontaktai#uzklausa" }}
        ctaSecondary={{ label: "Peržiūrėti privalumus", href: "#privalumai-metalines" }}
        description="Tvirtos, ilgaamžės ir ekonomiškos metalinės lauko durys, kurios padeda apsaugoti namus, sumažinti išorės triukšmą ir užtikrinti ramybę kasdien."
        title="Metalinės durys saugiems ir patikimiems namams"
      />

      <MetalinesDurysSolutionTabs sectionId="sprendimai-metalines" />

      <section className="w-full bg-white" id="privalumai-metalines">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-4 pb-8 pt-4 md:flex-row md:items-center md:justify-between md:px-[70px] md:pb-8 md:pt-10">
          <div className="max-w-[min(100%,38rem)] space-y-4">
            <h2 className="text-3xl font-semibold leading-[1.18] tracking-[-0.032em] md:text-[45px] md:leading-[52px]">
              <span className="text-[#263cd0]">Tvirtas pasirinkimas </span>
              <span className="text-[#16216b]">saugumui, ilgaamžiškumui ir ramybei</span>
            </h2>
            <p className="text-base leading-relaxed text-[#16216b]">
              Metalinės durys dažnai pasirenkamos dėl saugumo, geros kainos ir ilgo tarnavimo laiko. Tai praktiškas
              sprendimas, kai norite apsaugoti namus ir turtą.
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

      <MetalinesDurysAdaptationBento sectionId="pritaikymas-metalines" />

      <section className="w-full bg-white px-4 py-16 md:px-[70px] md:py-[100px]" id="pasirinkimas-metalines">
        <div className="mx-auto max-w-[1440px] space-y-10">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold leading-[1.18] tracking-[-0.032em] md:text-[45px] md:leading-[52px]">
              <span className="text-[#263cd0]">Į ką atkreipti dėmesį </span>
              <span className="text-[#16216b]">renkantis metalines duris?</span>
            </h2>
          </div>

          <ResponsiveComparisonGrid
            ariaLabel="Metalinių durų pasirinkimo klausimai"
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
        headingLead="Metalinės, aliuminio"
        headingRest="ar plastikinės durys?"
        offerCta={true}
        rows={COMPARISON_ROWS}
        sectionId="palyginimas-metalines"
      />

      <CaseStudiesProjectsCarousel
        headingLead="Realūs klientų "
        headingRest="projektai"
        intro="Įgyvendinti durų projektai iš bendros galerijos."
        projectCategories={CAROUSEL_CATEGORIES.durys}
      />

      <FaqSection
        faqIdPrefix="metalines-durys-faq"
        headingLead="Jūsų klausimai – "
        headingRest="aiškūs atsakymai"
        items={FAQ}
        sectionId="duk-metalines-durys"
      />

      <ProcessSteps
        headingLine1="Kaip vyksta metalinių durų užsakymas?"
        id="procesas-metalines"
        steps={PROCESS}
      />
    </div>
  );
}
