import Link from "next/link";

import { AliuminioDurysAdaptationBento } from "@/components/durys/AliuminioDurysAdaptationBento";
import { DurysComparisonTable } from "@/components/durys/DurysComparisonTable";
import { AliuminioDurysSolutionTabs } from "@/components/durys/AliuminioDurysSolutionTabs";
import { CaseStudiesProjectsCarousel } from "@/components/plastikiniai-langai/CaseStudiesProjectsCarousel";
import { FaqSection } from "@/components/plastikiniai-langai/FaqSection";
import { ProcessSteps } from "@/components/plastikiniai-langai/ProcessSteps";
import { SalesHero } from "@/components/plastikiniai-langai/SalesHero";
import { FeatureHoverCard } from "@/components/ui/FeatureHoverCard";
import { ResponsiveTableFrame } from "@/components/ui/ResponsiveTableFrame";
import { CAROUSEL_CATEGORIES } from "@/data/implemented-projects";

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

const FAQ = [
  {
    question: "Ar aliuminio durys tinka individualiam namui?",
    answer:
      "Taip, aliuminio durys tinka individualiems namams, ypač kai svarbu saugumas, tvirtumas ir solidus įėjimo vaizdas.",
  },
  {
    question: "Ar aliuminio durys saugios?",
    answer:
      "Taip. Aliuminio durys yra tvirtos, o papildomai galima rinktis dvigubas spynas, sklendes, grandinėles ir kitus saugumo mechanizmus.",
  },
  {
    question: "Ar aliuminio durys izoliuoja garsą?",
    answer:
      "Taip, aliuminio durys padeda sumažinti išorės triukšmą, todėl tinka daugiabučiams ar namams šalia judresnių gatvių.",
  },
  {
    question: "Ar galima pasirinkti durų spalvą?",
    answer:
      "Taip, aliuminio profiliai gali būti dengiami specialiais dažais, todėl galima rinktis spalvą pagal pastato fasadą ir stilių.",
  },
  {
    question: "Ar aliuminio durys atsparios lietui ir aplinkos poveikiui?",
    answer:
      "Taip, jos gali būti dengiamos vandeniui atspariomis medžiagomis, o tinkamas montavimas užtikrina ilgesnį tarnavimo laiką.",
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
        title="Aliuminio lauko durys saugumui, ilgaamžiškumui ir estetikai"
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

          <ResponsiveTableFrame className="rounded-2xl">
            <div className="w-full min-w-0 space-y-0 max-lg:min-w-[560px]">
              <div className="grid grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-3 px-4 py-3 md:gap-4 md:px-8 md:py-4 lg:px-10">
                <span className="self-center text-sm font-semibold text-[#59799f] md:text-base">Klausimas</span>
                <span className="text-center text-base font-semibold text-[#263cd0] md:text-[18px]">Kodėl tai svarbu?</span>
              </div>
              {SELECTION_ROWS.map((row, idx) => (
                <div
                  className={`grid grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] gap-3 px-4 py-3 md:gap-4 md:px-8 md:py-4 lg:px-10 ${
                    idx % 2 === 0 ? "rounded-xl bg-[#f6f7ff]" : ""
                  }`}
                  key={row.q}
                >
                  <p className="self-center text-sm font-semibold text-[#16216b] md:text-base">{row.q}</p>
                  <p className="text-sm font-normal leading-relaxed text-[#16216b] md:text-base">{row.why}</p>
                </div>
              ))}
            </div>
          </ResponsiveTableFrame>
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
        items={FAQ}
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
