import Link from "next/link";

import { AliuminioDurysAdaptationBento } from "@/components/durys/AliuminioDurysAdaptationBento";
import { DurysComparisonTable } from "@/components/durys/DurysComparisonTable";
import { AliuminioDurysSolutionTabs } from "@/components/durys/AliuminioDurysSolutionTabs";
import { CaseStudiesProjectsCarousel } from "@/components/plastikiniai-langai/CaseStudiesProjectsCarousel";
import { FaqSection } from "@/components/plastikiniai-langai/FaqSection";
import { ProcessSteps } from "@/components/plastikiniai-langai/ProcessSteps";
import { SalesHero } from "@/components/plastikiniai-langai/SalesHero";
import { FeatureHoverCard } from "@/components/ui/FeatureHoverCard";
import { ResponsiveComparisonGrid } from "@/components/ui/ResponsiveComparisonGrid";
import { CAROUSEL_CATEGORIES } from "@/data/implemented-projects";
import { ALIUMINIO_DURYS_FAQ } from "@/data/structured-data-faqs";

const HERO_IMAGE = "/images/alium4.png";

const WHY_CARDS = [
  {
    title: "Aukštas saugumo lygis",
    body: "Aliuminio durys pasižymi tvirta konstrukcija, todėl padeda apsaugoti namus, komercines ar pramonines patalpas.",
  },
  {
    title: "Gera garso izoliacija",
    body: "Tai aktualu gyvenantiems daugiabučiuose ar šalia judrių gatvių – durys padeda sumažinti išorės triukšmą.",
  },
  {
    title: "Ilgaamžė ir atspari konstrukcija",
    body: "Aliuminio paviršius dengiamas specialiais dažais, todėl durys atsparios aplinkos poveikiui ir ilgai išlaiko estetinį vaizdą.",
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
    why: "Namui, daugiabučiui, biurui ar pramoniniam objektui gali reikėti skirtingo sprendimo.",
  },
  {
    q: "Kiek svarbus saugumas?",
    why: "Pagal tai parenkamos spynos, sklendės ir papildomi mechanizmai.",
  },
  {
    q: "Ar svarbi garso izoliacija?",
    why: "Tai ypač aktualu daugiabučiuose arba šalia judrių gatvių.",
  },
  {
    q: "Koks pastato stilius?",
    why: "Aliuminio durys gali būti pritaikomos tiek klasikiniam, tiek moderniam fasadui.",
  },
  {
    q: "Ar durys bus veikiamos lietaus?",
    why: "Atsparios dangos ir teisingas montavimas padeda apsaugoti duris nuo aplinkos poveikio.",
  },
  {
    q: "Ar objektas naudojamas intensyviai?",
    why: "Komerciniams ir pramoniniams objektams svarbu rinktis tvirtesnį sprendimą.",
  },
];

const PROCESS = [
  {
    title: "Konsultacija",
    description:
      "Aptariame, kur durys bus naudojamos, kokio saugumo, dizaino, garso izoliacijos ir atsparumo reikia.",
  },
  {
    title: "Matavimas",
    description: "Įvertiname angą, montavimo sąlygas, pastato tipą ir naudojimo intensyvumą.",
  },
  {
    title: "Gamyba",
    description: "Durys gaminamos pagal suderintus matmenis, spalvą, saugumo mechanizmus ir kitus pasirinktus sprendimus.",
  },
  {
    title: "Montavimas",
    description: "Durys sumontuojamos tiksliai, kad būtų stabilios, saugios ir patogios naudoti kasdien.",
  },
];

const COMPARISON_COLUMNS = [
  { key: "aluminum", label: "Aliuminio durys" },
  { key: "metal", label: "Metalinės durys" },
  { key: "plastic", label: "Plastikinės durys" },
] as const;

const COMPARISON_ROWS = [
  { feature: "Saugumas", values: { aluminum: "Aukštesnis", metal: "Labai geras", plastic: "Geras" } },
  { feature: "Tvirtumas", values: { aluminum: "Labai aukštas", metal: "Labai geras", plastic: "Geras" } },
  { feature: "Kaina", values: { aluminum: "Aukštesnė investicija", metal: "Dažnai ekonomiška", plastic: "Ekonomiška" } },
  { feature: "Dizainas", values: { aluminum: "Solidus, modernus", metal: "Platus pasirinkimas", plastic: "Universalus" } },
  { feature: "Garso izoliacija", values: { aluminum: "Gera", metal: "Gera", plastic: "Gera" } },
  { feature: "Atsparumas aplinkai", values: { aluminum: "Labai geras", metal: "Geras", plastic: "Geras" } },
  { feature: "Gaisro sauga", values: { aluminum: "Nedegi konstrukcija", metal: "Priklauso nuo sprendimo", plastic: "Priklauso nuo sprendimo" } },
  {
    feature: "Pritaikymas",
    values: {
      aluminum: "Namams, daugiabučiams, komercijai, pramonei",
      metal: "Namams, butams, techninėms patalpoms",
      plastic: "Namams, balkonams, terasoms",
    },
  },
] as const;

export function AliuminioDurysSalesPage() {
  return (
    <div className="w-full bg-white text-[#16216b]">
      <SalesHero
        backgroundImageSrc={HERO_IMAGE}
        breadcrumbItems={[
          { label: "Pradžia", href: "/" },
          { label: "Durys", href: "/durys" },
          { label: "Aliuminio durys" },
        ]}
        ctaPrimary={{ label: "Gauti pasiūlymą", href: "/kontaktai#uzklausa" }}
        ctaSecondary={{ label: "Peržiūrėti privalumus", href: "#privalumai-aliuminio" }}
        description="Tvirtos, saugios ir prie skirtingo pastato stiliaus pritaikomos aliuminio durys namams, daugiabučiams, komerciniams ir pramoniniams objektams."
        heroSubtitle="Lauko durys – saugumas, ilgaamžiškumas, modernus dizainas."
        title="Aliuminio durys Šiauliuose"
      />

      <AliuminioDurysSolutionTabs sectionId="sprendimai-aliuminio" />

      <section className="w-full bg-white" id="privalumai-aliuminio">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-4 pb-8 pt-4 md:flex-row md:items-center md:justify-between md:px-[70px] md:pb-8 md:pt-10">
          <div className="max-w-[min(100%,38rem)] space-y-4">
            <h2 className="text-3xl font-semibold leading-[1.18] tracking-[-0.032em] md:text-[45px] md:leading-[52px]">
              <span className="text-[#263cd0]">Tvirtumas, saugumas </span>
              <span className="text-[#16216b]">ir estetika viename sprendime</span>
            </h2>
            <p className="text-base leading-relaxed text-[#16216b]">
              Aliuminio durys pasirenkamos tada, kai reikia ilgaamžio, saugaus ir vizualiai tvarkingo sprendimo namams ar objektui.
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

      <AliuminioDurysAdaptationBento sectionId="pritaikymas-aliuminio" />

      <section className="w-full bg-white px-4 py-16 md:px-[70px] md:py-[100px]" id="pasirinkimas-aliuminio">
        <div className="mx-auto max-w-[1440px] space-y-10">
          <div className="max-w-3xl space-y-4">
            <h2 className="text-3xl font-semibold leading-[1.18] tracking-[-0.032em] md:text-[45px] md:leading-[52px]">
              <span className="text-[#263cd0]">Į ką atkreipti dėmesį </span>
              <span className="text-[#16216b]">renkantis aliuminio duris?</span>
            </h2>
          </div>

          <ResponsiveComparisonGrid
            ariaLabel="Aliuminio durų pasirinkimo klausimai"
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
        headingLead="Aliuminio, metalinės"
        headingRest="ar plastikinės durys?"
        offerCta
        rows={COMPARISON_ROWS}
        sectionId="palyginimas-aliuminio"
      />

      <CaseStudiesProjectsCarousel
        headingLead="Realūs klientų "
        headingRest="projektai"
        intro="Įgyvendinti durų projektai iš bendros galerijos."
        projectCategories={CAROUSEL_CATEGORIES.durys}
      />

      <FaqSection
        faqIdPrefix="aliuminio-durys-faq"
        headingLead="Jūsų klausimai – "
        headingRest="aiškūs atsakymai"
        items={ALIUMINIO_DURYS_FAQ}
        sectionId="duk-aliuminio-durys"
      />

      <ProcessSteps
        headingLine1="Kaip vyksta aliuminio durų užsakymas?"
        id="procesas-aliuminio"
        steps={PROCESS}
      />
    </div>
  );
}
