import Link from "next/link";

import { SpecialiosPriesgaisrinesSection } from "@/components/durys/SpecialiosPriesgaisrinesSection";
import { CaseStudiesProjectsCarousel } from "@/components/plastikiniai-langai/CaseStudiesProjectsCarousel";
import { FaqSection } from "@/components/plastikiniai-langai/FaqSection";
import { ProcessSteps } from "@/components/plastikiniai-langai/ProcessSteps";
import { SalesHero } from "@/components/plastikiniai-langai/SalesHero";
import { FeatureHoverCard } from "@/components/ui/FeatureHoverCard";
import { ResponsiveTableFrame } from "@/components/ui/ResponsiveTableFrame";
import { CAROUSEL_CATEGORIES } from "@/data/implemented-projects";

const HERO_IMAGE = "/images/durys.png";

const PURPOSE_CARDS = [
  {
    title: "Techninėms patalpoms",
    body: "Sprendimai katilinėms, sandėliams, pagalbinėms, inžinerinėms ar ūkinėms patalpoms.",
  },
  {
    title: "Komerciniams ir pramoniniams objektams",
    body: "Durys verslo, gamybos, sandėliavimo ar administracinėms erdvėms, kur svarbus patvarumas ir funkcionalumas.",
  },
  {
    title: "Viešiesiems pastatams",
    body: "Sprendimai mokykloms, įstaigoms, daugiabučiams, bendroms zonoms ar kitoms intensyviai naudojamoms erdvėms.",
  },
] as const;

const REQUEST_ROWS: { info: string; why: string }[] = [
  {
    info: "Objekto tipas",
    why: "Skirtingiems objektams taikomi skirtingi saugos ir naudojimo reikalavimai.",
  },
  {
    info: "Durų montavimo vieta",
    why: "Vidaus, lauko, techninės ar evakuacinės zonos gali reikalauti skirtingų sprendimų.",
  },
  {
    info: "Angos matmenys",
    why: "Pagal juos vertinamas durų dydis, konstrukcija ir montavimo sprendimas.",
  },
  {
    info: "Reikalinga atsparumo klasė",
    why: "Jei turite projektinius reikalavimus, juos būtina nurodyti.",
  },
  {
    info: "Papildomi elementai",
    why: "Spynos, pritraukėjai, rankenos, slenksčiai ar kiti elementai gali būti svarbūs.",
  },
];

const WHY_LANGANA = [
  {
    title: "Konsultacija pagal poreikį",
    body: "Įvertiname, kur durys bus montuojamos, kokia jų paskirtis ir kokie reikalavimai svarbiausi.",
  },
  {
    title: "Individualus sprendimas",
    body: "Sprendimą galima derinti pagal angos matmenis, objekto tipą, naudojimo intensyvumą ir papildomus saugos poreikius.",
  },
  {
    title: "Profesionalus montavimas",
    body: "Specialios paskirties durims svarbu ne tik pats gaminys, bet ir tikslus montavimas, todėl pasirūpiname viso proceso kokybe.",
  },
] as const;

const FAQ = [
  {
    question: "Ar specialios paskirties durys gaminamos pagal individualius matmenis?",
    answer:
      "Taip, durys gali būti parenkamos ar gaminamos pagal konkrečią angą, objekto paskirtį ir techninius reikalavimus.",
  },
  {
    question: "Ar šiame puslapyje nurodytos priešgaisrinės durys?",
    answer:
      "Taip, priešgaisrinės durys yra viena iš specialios paskirties durų grupių, skirtų objektams su papildomais saugos reikalavimais.",
  },
  {
    question: "Kokios informacijos reikia priešgaisrinių durų pasiūlymui?",
    answer:
      "Reikalingi angos matmenys, montavimo vieta, objekto tipas ir, jei turite, projektiniai reikalavimai arba nurodyta atsparumo ugniai klasė.",
  },
  {
    question: "Ar galite padėti parinkti tinkamą sprendimą?",
    answer:
      "Taip, galite atsiųsti informaciją apie objektą, o mes padėsime įvertinti, kuris durų sprendimas tinkamiausias.",
  },
];

const PROCESS = [
  {
    title: "Poreikio įvertinimas",
    description:
      "Aptariame, kur durys bus naudojamos, kokią funkciją jos turi atlikti ir kokie reikalavimai keliami objektui.",
  },
  {
    title: "Techninės informacijos surinkimas",
    description: "Įvertiname angos matmenis, montavimo vietą, objekto tipą ir papildomus reikalavimus.",
  },
  {
    title: "Sprendimo parinkimas",
    description: "Parenkame tinkamą durų tipą, konstrukciją, furnitūrą ir papildomus elementus.",
  },
  {
    title: "Montavimas",
    description:
      "Durys montuojamos tiksliai ir atsakingai, kad atitiktų numatytą paskirtį bei būtų patogios naudoti.",
  },
];

export function SpecialiosPaskirtiesDurysSalesPage() {
  return (
    <div className="w-full bg-white text-[#16216b]">
      <SalesHero
        backgroundImageSrc={HERO_IMAGE}
        ctaPrimary={{ label: "Gauti pasiūlymą", href: "/kontaktai#uzklausa" }}
        heroUrgencyLine
        ctaSecondary={{ label: "Pasikonsultuoti", href: "/kontaktai#uzklausa" }}
        description="Durų sprendimai techninėms, komercinėms, pramoninėms ir kitoms erdvėms, kuriose svarbus saugumas, funkcionalumas, atsparumas ir atitikimas konkretiems objekto poreikiams."
        stats={[
          { number: "Priešgaisrinės", label: "ir šarvuotos durys" },
          { number: "Saugumas", label: "Prioritetas" },
          { number: "5 d.", label: "Montavimas" },
        ]}
        title="Specialios paskirties durys pagal objekto reikalavimus"
      />

      <section className="w-full bg-white pt-12 md:pt-20 lg:pt-24" id="kam-skirtos-specialios-durys">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-4 pb-8 pt-0 md:flex-row md:items-center md:justify-between md:px-[70px] md:pb-8 md:pt-2">
          <div className="max-w-[min(100%,44rem)] space-y-4">
            <h2 className="text-3xl font-semibold leading-[1.18] tracking-[-0.032em] md:text-[45px] md:leading-[52px]">
              <span className="text-[#263cd0]">Kai įprastų durų </span>
              <span className="text-[#16216b]">neužtenka</span>
            </h2>
            <p className="text-base leading-relaxed text-[#16216b]">
              Specialios paskirties durys pasirenkamos tada, kai durys turi atlikti daugiau nei standartinę įėjimo
              funkciją – apsaugoti, atskirti zonas, atitikti saugos reikalavimus ar būti pritaikytos intensyviam
              naudojimui.
            </p>
          </div>
          <Link
            className="inline-flex w-fit items-center justify-center rounded-full bg-[#263cd0] px-8 py-[15px] text-[15px] font-semibold text-white transition hover:bg-[#1e31a8]"
            href="/kontaktai#uzklausa"
          >
            Pasikonsultuoti
          </Link>
        </div>
        <div className="mx-auto grid max-w-[1440px] gap-4 px-4 pb-16 md:grid-cols-3 md:gap-4 md:px-[70px] md:pb-[100px] md:pt-6">
          {PURPOSE_CARDS.map((card) => (
            <FeatureHoverCard
              description={card.body}
              headingClassName="text-xl font-semibold leading-[1.25] tracking-[-0.04em] md:text-[30px] md:leading-[36px]"
              key={card.title}
              title={card.title}
            />
          ))}
        </div>
      </section>

      <SpecialiosPriesgaisrinesSection sectionId="priesgaisrines-durys" />

      <section className="w-full bg-white px-4 py-16 md:px-[70px] md:py-[100px]" id="uzklausa-specialios-durys">
        <div className="mx-auto max-w-[1440px] space-y-10">
          <div className="max-w-4xl space-y-4">
            <h2 className="text-3xl font-semibold leading-[1.18] tracking-[-0.032em] md:text-[45px] md:leading-[52px]">
              <span className="text-[#263cd0]">Kokią informaciją </span>
              <span className="text-[#16216b]">verta pasiruošti?</span>
            </h2>
            <p className="text-base leading-relaxed text-[#16216b]">
              Kad galėtume greičiau įvertinti poreikį ir paruošti pasiūlymą, naudinga turėti bent pagrindinę
              informaciją apie objektą.
            </p>
          </div>

          <ResponsiveTableFrame className="rounded-2xl">
            <div className="w-full min-w-0 space-y-0 max-lg:min-w-[560px]">
              <div className="grid grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-3 px-4 py-3 md:gap-4 md:px-8 md:py-4 lg:px-10">
                <span className="self-center text-sm font-semibold text-[#59799f] md:text-base">Informacija</span>
                <span className="text-center text-base font-semibold text-[#263cd0] md:text-[18px]">Kodėl svarbu?</span>
              </div>
              {REQUEST_ROWS.map((row, idx) => (
                <div
                  className={`grid grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-3 px-4 py-3 md:gap-4 md:px-8 md:py-4 lg:px-10 ${
                    idx % 2 === 0 ? "rounded-xl bg-[#f6f7ff]" : ""
                  }`}
                  key={row.info}
                >
                  <p className="self-center text-sm font-semibold text-[#16216b] md:text-base">{row.info}</p>
                  <p className="text-sm font-normal leading-relaxed text-[#16216b] md:text-base">{row.why}</p>
                </div>
              ))}
            </div>
          </ResponsiveTableFrame>
        </div>
      </section>

      <section className="w-full bg-white" id="kodel-langana-specialios-durys">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-4 pb-8 pt-4 md:flex-row md:items-center md:justify-between md:px-[70px] md:pb-8 md:pt-10">
          <div className="max-w-[min(100%,44rem)] space-y-4">
            <h2 className="text-3xl font-semibold leading-[1.18] tracking-[-0.032em] md:text-[45px] md:leading-[52px]">
              <span className="text-[#263cd0]">Padedame parinkti duris </span>
              <span className="text-[#16216b]">pagal realią objekto situaciją</span>
            </h2>
          </div>
        </div>
        <div className="mx-auto grid max-w-[1440px] gap-4 px-4 pb-16 md:grid-cols-3 md:gap-4 md:px-[70px] md:pb-[100px] md:pt-6">
          {WHY_LANGANA.map((card) => (
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
        intro="Įgyvendinti durų projektai iš bendros galerijos."
        projectCategories={CAROUSEL_CATEGORIES.durys}
      />

      <FaqSection
        faqIdPrefix="specialios-durys-faq"
        headingLead="Dažniausiai "
        headingRest="užduodami klausimai"
        items={FAQ}
        sectionId="duk-specialios-durys"
      />

      <ProcessSteps
        headingLine1="Kaip vyksta specialios paskirties durų užsakymas?"
        id="procesas-specialios-durys"
        steps={PROCESS}
      />
    </div>
  );
}
