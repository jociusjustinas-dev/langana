import { AluminumLangaiBenefitsSection } from "@/components/aliuminio-langai/AluminumLangaiBenefitsSection";
import { AluminumLangaiComparisonSection } from "@/components/aliuminio-langai/AluminumLangaiComparisonSection";
import { AliuminiaiLangaiSolutionTabs } from "@/components/aliuminio-langai/AliuminiaiLangaiSolutionTabs";
import { CaseStudiesProjectsCarousel } from "@/components/plastikiniai-langai/CaseStudiesProjectsCarousel";
import { CAROUSEL_CATEGORIES } from "@/data/implemented-projects";
import { FaqSection } from "@/components/plastikiniai-langai/FaqSection";
import { ProcessSteps } from "@/components/plastikiniai-langai/ProcessSteps";
import { SalesHero } from "@/components/plastikiniai-langai/SalesHero";
import { aliuminioLangaiShowcaseProducts } from "@/data/aliuminio-langai-showcase";
import { ALIUMINIAI_LANGAI_FAQ } from "@/data/structured-data-faqs";

const PROCESS = [
  {
    title: "Konsultacija",
    description:
      "Aptariame pastato tipą, angų dydžius, norimą dizainą, šilumos izoliacijos poreikį ir konstrukcijos paskirtį.",
  },
  {
    title: "Sistemos parinkimas",
    description:
      "Parenkame tinkamiausią Yawal sistemą pagal objektą: gyvenamąjį namą, viešąjį pastatą, vitriną ar didesnę konstrukciją.",
  },
  {
    title: "Gamyba",
    description:
      "Konstrukcijos gaminamos pagal individualius matmenis, pasirinktą sistemą, stiklinimo sprendimą ir techninius reikalavimus.",
  },
  {
    title: "Montavimas",
    description:
      "Atliekamas profesionalus montavimas, kad konstrukcija būtų sandari, stabili, saugi ir ilgaamžė.",
  },
];

export function AliuminiaiLangaiSalesPage() {
  return (
    <div className="w-full bg-white text-[#16216b]">
      <SalesHero
        backgroundImageSrc="/images/Langai/ChatGPT Image May 7, 2026, 02_58_41 PM (4).png"
        breadcrumbItems={[
          { label: "Pradžia", href: "/" },
          { label: "Langai", href: "/langai" },
          { label: "Aliuminio langai" },
        ]}
        ctaPrimary={{ label: "Gauti pasiūlymą", href: "/kontaktai#uzklausa" }}
        ctaSecondary={{ label: "Peržiūrėti sistemas", href: "#sprendimai" }}
        description="Tvirti, ilgaamžiai ir estetiški aliuminio langai, durys bei vitrinos su šilumos izoliacija. Rinkitės sistemą pagal pastato tipą, energinius poreikius ir konstrukcijos dydį."
        title="Aliuminiai langai moderniems namams ir projektams"
      />

      <section className="w-full bg-white py-14 md:py-[100px]" id="sprendimai">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-4 px-4 text-center md:px-[70px]">
          <h2 className="text-3xl font-semibold leading-[1.18] tracking-[-0.032em] md:text-[45px] md:leading-[52px]">
            <span className="text-[#263cd0]">Aliuminio langų ir durų </span>
            <span className="text-[#16216b]">sistemos</span>
          </h2>
          <p className="max-w-[920px] text-base leading-relaxed text-[#16216b] md:text-[17px]">
            Pasirinkite iš Yawal aliuminio profilių sistemų, skirtų energiją taupantiems, gyvenamiesiems, viešiesiems ir komerciniams objektams.
          </p>
        </div>
        <AliuminiaiLangaiSolutionTabs products={aliuminioLangaiShowcaseProducts} />
      </section>

      <AluminumLangaiBenefitsSection id="privalumai-aliuminis" />

      <AluminumLangaiComparisonSection />

      <FaqSection
        faqIdPrefix="aliuminio-faq"
        headingLead="Jūsų klausimai – "
        headingRest="aiškūs atsakymai"
        items={ALIUMINIAI_LANGAI_FAQ}
        sectionId="duk-aliuminis"
      />

      <CaseStudiesProjectsCarousel
        headingLead="Realūs klientų "
        headingRest="projektai"
        intro="Aliumininių langų projektai iš įgyvendintų darbų galerijos."
        projectCategories={CAROUSEL_CATEGORIES.aliuminioLangai}
      />

      <ProcessSteps headingLine1="Kaip vyksta aliuminių langų projektas?" steps={PROCESS} />
    </div>
  );
}
