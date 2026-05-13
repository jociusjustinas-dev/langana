import { AliuminioFasadaiTabs } from "@/components/aliuminio-sprendimai/AliuminioFasadaiTabs";
import { CaseStudiesProjectsCarousel } from "@/components/plastikiniai-langai/CaseStudiesProjectsCarousel";
import { FaqSection } from "@/components/plastikiniai-langai/FaqSection";
import { ProcessSteps } from "@/components/plastikiniai-langai/ProcessSteps";
import { SalesHero } from "@/components/plastikiniai-langai/SalesHero";
import { ALUMINUM_FACADES_PRODUCTS } from "@/data/aliuminio-fasadai-products";
import { CAROUSEL_CATEGORIES } from "@/data/implemented-projects";

const FAQ = [
  {
    question: "Kam tinka aliuminio fasadų sistemos?",
    answer: "Aliuminio fasadai dažniausiai naudojami komerciniuose, viešosios paskirties ir moderniuose gyvenamuosiuose objektuose.",
  },
  {
    question: "Kuo skiriasi FA 50N ir FA 50N HI?",
    answer: "FA 50N HI turi geresnes šilumos izoliacijos savybes, todėl dažniau pasirenkama energetiškai reiklesniems projektams.",
  },
  {
    question: "Ar padedate suprojektuoti sprendimą pagal objektą?",
    answer: "Taip, įvertiname projekto reikalavimus ir parenkame tinkamą fasado sistemą pagal konstrukciją, estetiką ir techninius kriterijus.",
  },
];

const PROCESS = [
  { title: "Konsultacija", description: "Aptariame objekto tipą, fasado paskirtį ir pagrindinius techninius reikalavimus." },
  { title: "Techninis įvertinimas", description: "Įvertiname matmenis, apkrovas, mazgus ir montavimo galimybes." },
  { title: "Pasiūlymas", description: "Parengiame sistemos parinkimą ir sąmatą." },
  { title: "Gamyba ir montavimas", description: "Pagaminame konstrukcijas ir atliekame montavimo darbus pagal suderintą projektą." },
] as const;

export function AliuminioFasadaiPage() {
  return (
    <div className="w-full bg-white text-[#16216b]">
      <SalesHero
        backgroundImageSrc="/images/alium.png"
        breadcrumbItems={[
          { label: "Pradžia", href: "/" },
          { label: "Aliuminio sprendimai", href: "/aliuminio-sprendimai" },
          { label: "Aliuminio fasadai" },
        ]}
        ctaPrimary={{ label: "Gauti pasiūlymą", href: "/kontaktai#uzklausa" }}
        heroUrgencyLine
        ctaSecondary={{ label: "Peržiūrėti sistemas", href: "#fasadu-sistemos" }}
        description="Aliuminio fasadų sistemos komerciniams, viešiesiems ir moderniems gyvenamiesiems projektams."
        stats={[
          { number: "YAWAL & PONZIO", label: "Profilių gamintojai" },
          { number: "Individualus", label: "Kiekvienas projektas" },
          { number: "Garantija", label: "Įtraukta" },
        ]}
        title="Aliuminio fasadai projektiniams ir komerciniams objektams"
      />

      <section className="w-full bg-white py-14 md:py-[100px]" id="fasadu-sistemos">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-4 px-4 text-center md:px-[70px]">
          <h2 className="text-3xl font-semibold leading-[1.18] tracking-[-0.032em] md:text-[45px] md:leading-[52px]">
            <span className="text-[#263cd0]">Aliuminio fasadų </span>
            <span className="text-[#16216b]">sistemos</span>
          </h2>
          <p className="max-w-[920px] text-base leading-relaxed text-[#16216b] md:text-[17px]">
            Pasirinkite fasado sistemą pagal projekto energinius, estetinius ir konstrukcinius reikalavimus.
          </p>
        </div>
        <AliuminioFasadaiTabs products={ALUMINUM_FACADES_PRODUCTS} />
      </section>

      <CaseStudiesProjectsCarousel
        headingLead="Realūs klientų "
        headingRest="projektai"
        intro="Įgyvendinti aliuminio fasadų projektai iš bendros galerijos."
        projectCategories={CAROUSEL_CATEGORIES.aliuminioFasadai}
      />

      <ProcessSteps headingLine1="Kaip vyksta aliuminio fasadų projektas?" id="procesas-fasadai" steps={PROCESS} />

      <FaqSection
        faqIdPrefix="aliuminio-fasadai-faq"
        headingLead="Dažniausiai"
        headingRest="užduodami klausimai"
        items={FAQ}
        sectionId="duk-fasadai"
      />
    </div>
  );
}

