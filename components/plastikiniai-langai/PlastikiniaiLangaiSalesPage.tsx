import { BenefitsSection } from "@/components/plastikiniai-langai/BenefitsSection";
import { CaseStudiesProjectsCarousel } from "@/components/plastikiniai-langai/CaseStudiesProjectsCarousel";
import { CAROUSEL_CATEGORIES } from "@/data/implemented-projects";
import { ComparisonTeaser } from "@/components/plastikiniai-langai/ComparisonTeaser";
import { FaqSection } from "@/components/plastikiniai-langai/FaqSection";
import { ProcessSteps } from "@/components/plastikiniai-langai/ProcessSteps";
import { SalesHero } from "@/components/plastikiniai-langai/SalesHero";
import { PlastikiniaiLangaiSolutionTabs } from "@/components/plastikiniai-langai/PlastikiniaiLangaiSolutionTabs";
import { plasticLangaiShowcaseProducts } from "@/data/catalog";
import { assets } from "@/lib/figma-assets";

const P = assets.plastikiniaiLangai;

const FAQ = [
  {
    question: "Ar plastikiniai langai tikrai šilti?",
    answer:
      "Taip, modernūs plastikiniai langai pasižymi puikia šilumos izoliacija ir padeda sumažinti šildymo išlaidas.",
  },
  {
    question: "Kiek laiko jie tarnauja?",
    answer: "Kokybiški plastikiniai langai gali tarnauti 20–30 metų ar ilgiau.",
  },
  {
    question: "Ar jie tinka garso izoliacijai?",
    answer: "Taip, plastikiniai langai efektyviai mažina išorės triukšmą.",
  },
];

const PROCESS = [
  {
    title: "Konsultacijos",
    description:
      "Pradedame nuo išsamios konsultacijos: išsiaiškinate poreikius, įvertiname angas ir kartu renkamės tinkamiausią profilio bei stiklo paketo kombinaciją jūsų namams ar projektui.",
  },
  {
    title: "Dizainas ir pritaikymas",
    description:
      "Parenkame techninį sprendimą – išmatavimai, varčių kryptys, spalvos ir priedai – kad langai derėtų prie fasado ir atitiktų naudojimo įpročius.",
  },
  {
    title: "Gamyba",
    description:
      "Langai gaminami pagal užsakymą gamykloje, laikantis pasirinktos sistemos specifikacijos ir kokybės reikalavimų.",
  },
  {
    title: "Profesionalus montavimas",
    description:
      "Patyrę montuotojai sumontuoja langus pagal gamintojo rekomendacijas, užtikrindami sandarumą ir ilgaamžišką eksploataciją.",
  },
];

export function PlastikiniaiLangaiSalesPage() {
  return (
    <div className="w-full bg-white text-[#16216b]">
      <SalesHero
        backgroundImageSrc={P.hero}
        breadcrumbItems={[
          { label: "Pradžia", href: "/" },
          { label: "Langai", href: "/langai" },
          { label: "Plastikiniai langai" },
        ]}
        ctaPrimary={{ label: "Gauti pasiūlymą", href: "/kontaktai#uzklausa" }}
        ctaSecondary={{ label: "Ieškoti sprendimų", href: "#sprendimai" }}
        description="Šilti, sandarūs ir ekonomiški plastikiniai langai, pritaikyti tiek naujos statybos, tiek renovuojamiems namams."
        title="Plastikiniai langai – patikimas sprendimas jūsų namams"
      />

      <section className="w-full bg-white py-14 md:py-[100px]" id="sprendimai">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-4 px-4 text-center md:px-[70px]">
          <h2 className="text-3xl font-semibold leading-[1.18] tracking-[-0.032em] md:text-[45px] md:leading-[52px]">
            <span className="text-[#263cd0]">Plastikinių langų </span>
            <span className="text-[#16216b]">profilių sistemos</span>
          </h2>
          <p className="max-w-[920px] text-base leading-relaxed text-[#16216b] md:text-[17px]">
            Pasirinkite iš Kömmerling ir Wital plastikinių profilių sistemų, skirtų šildymo ekonomikai, kasdieniam komfortui, renovacijai ir naujos statybos namams.
          </p>
        </div>
        <PlastikiniaiLangaiSolutionTabs products={plasticLangaiShowcaseProducts} />
      </section>

      <ComparisonTeaser
        ctaLabel="Peržiūrėti palyginimą"
        href="/langai#palyginimas"
        title="Nežinote ar rinktis plastikinius ar aliuminio langus?"
      />

      <BenefitsSection variant="plasticSubcategory" />

      <FaqSection items={FAQ} />

      <CaseStudiesProjectsCarousel
        headingLead="Realūs klientų "
        headingRest="projektai"
        intro="Plastikinių langų įgyvendinimai iš tos pačios įgyvendintų projektų galerijos."
        projectCategories={CAROUSEL_CATEGORIES.plastikiniaiLangai}
      />

      <ProcessSteps
        headingLine1="Nuo koncepcijos iki užbaigimo:"
        headingLine2="Kaip mes montuojame jūsų langus"
        steps={PROCESS}
      />
    </div>
  );
}
