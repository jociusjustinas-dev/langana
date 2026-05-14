import { AliuminioPertvarosTabs } from "@/components/aliuminio-sprendimai/AliuminioPertvarosTabs";
import { CaseStudiesProjectsCarousel } from "@/components/plastikiniai-langai/CaseStudiesProjectsCarousel";
import { FaqSection } from "@/components/plastikiniai-langai/FaqSection";
import { ProcessSteps } from "@/components/plastikiniai-langai/ProcessSteps";
import { SalesHero } from "@/components/plastikiniai-langai/SalesHero";
import { ALUMINUM_PARTITIONS_PRODUCTS } from "@/data/aliuminio-pertvaros-products";
import { CAROUSEL_CATEGORIES } from "@/data/implemented-projects";
import { ALIUMINIO_PERTVAROS_FAQ } from "@/data/structured-data-faqs";

const PROCESS = [
  { title: "Poreikio analizė", description: "Aptariame, kaip turi būti zonuojama erdvė ir kokia pertvarų funkcija objekte." },
  { title: "Objekto įvertinimas", description: "Įvertiname matmenis, stiklo tipus, durų poreikį ir montavimo sąlygas." },
  { title: "Sistemos parinkimas", description: "Parenkame tinkamą PBI sistemą ir paruošiame pasiūlymą." },
  { title: "Gamyba ir montavimas", description: "Pagaminame pertvaras pagal projektą ir atliekame montavimo darbus." },
] as const;

export function AliuminioPertvarosPage() {
  return (
    <div className="w-full bg-white text-[#16216b]">
      <SalesHero
        backgroundImageSrc="/images/alium3.png"
        breadcrumbItems={[
          { label: "Pradžia", href: "/" },
          { label: "Aliuminio sprendimai", href: "/aliuminio-sprendimai" },
          { label: "Aliuminio pertvaros" },
        ]}
        ctaPrimary={{ label: "Gauti pasiūlymą", href: "/kontaktai#uzklausa" }}
        heroUrgencyLine
        ctaSecondary={{ label: "Peržiūrėti sistemas", href: "#pertvaru-sistemos" }}
        description="Aliuminio pertvarų, vitrinų ir vidaus durų sistemos funkcionaliam, estetiškam ir patikimam erdvių zonavimui."
        heroSubtitle="Komercinėms ir vidaus erdvėms – ofisų zonavimas, stiklo užpildai."
        stats={[
          { number: "YAWAL & PONZIO", label: "Profilių gamintojai" },
          { number: "Šilti ir šalti", label: "Profiliai" },
          { number: "Garantija", label: "Įtraukta" },
        ]}
        title="Aliuminio pertvaros Šiauliuose"
      />

      <section className="w-full bg-white py-14 md:py-[100px]" id="pertvaru-sistemos">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-4 px-4 text-center md:px-[70px]">
          <h2 className="text-3xl font-semibold leading-[1.18] tracking-[-0.032em] md:text-[45px] md:leading-[52px]">
            <span className="text-[#263cd0]">Aliuminio pertvarų </span>
            <span className="text-[#16216b]">sistemos</span>
          </h2>
          <p className="max-w-[920px] text-base leading-relaxed text-[#16216b] md:text-[17px]">
            Sistemos parenkamos pagal erdvės paskirtį, stiklinimo poreikį ir projekto estetinį kryptingumą.
          </p>
        </div>
        <AliuminioPertvarosTabs products={ALUMINUM_PARTITIONS_PRODUCTS} />
      </section>

      <CaseStudiesProjectsCarousel
        headingLead="Realūs klientų "
        headingRest="projektai"
        intro="Įgyvendinti aliuminio pertvarų projektai iš tos pačios įgyvendintų projektų galerijos."
        projectCategories={CAROUSEL_CATEGORIES.aliuminioPertvaros}
      />

      <ProcessSteps headingLine1="Kaip vyksta aliuminio pertvarų projektas?" id="procesas-pertvaros" steps={PROCESS} />

      <FaqSection
        faqIdPrefix="aliuminio-pertvaros-faq"
        headingLead="Dažniausiai"
        headingRest="užduodami klausimai"
        items={ALIUMINIO_PERTVAROS_FAQ}
        sectionId="duk-pertvaros"
      />
    </div>
  );
}

