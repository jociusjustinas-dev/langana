import { DurysComparisonTable } from "@/components/durys/DurysComparisonTable";
import { CaseStudiesProjectsCarousel } from "@/components/plastikiniai-langai/CaseStudiesProjectsCarousel";
import { FaqSection } from "@/components/plastikiniai-langai/FaqSection";
import { ProcessSteps } from "@/components/plastikiniai-langai/ProcessSteps";
import { SalesHero } from "@/components/plastikiniai-langai/SalesHero";
import { AliuminesStumdomosSolutionTabs } from "@/components/stumdomos-sistemos/AliuminesStumdomosSolutionTabs";
import { FeatureHoverCard } from "@/components/ui/FeatureHoverCard";
import { ALUMINUM_SLIDING_PRODUCTS } from "@/data/aliumines-stumdomos-sistemos-products";
import { CAROUSEL_CATEGORIES } from "@/data/implemented-projects";
import { ALIUMINES_STUMDOMOS_FAQ } from "@/data/structured-data-faqs";

const WHY_CARDS = [
  {
    title: "Tinka didelėms ir sunkioms konstrukcijoms",
    body: "Kai kurios sistemos leidžia projektuoti konstrukcijas iki 3300 mm aukščio, o varčios svoris gali siekti iki 430-440 kg.",
  },
  {
    title: "Patogus perėjimas tarp vidaus ir lauko",
    body: "Stumdomos ir pakeliamos-slankios sistemos puikiai tinka terasoms, žiemos sodams, balkonams ir išorinėms atitvaroms.",
  },
  {
    title: "Galima rinktis pagal poreikį",
    body: "Nuo ekonomiškos DP 100 sistemos iki aukštesnės klasės DP 180 ar sulankstomų Harmonic sprendimų - sistema parenkama pagal objektą.",
  },
] as const;

const FIT_COLUMNS = [{ key: "recommended", label: "Rekomenduojama sistema" }] as const;
const FIT_ROWS = [
  { feature: "Didelės, sunkios terasos durys", values: { recommended: "DP 180" } },
  { feature: "Žiemos sodas arba išėjimas į terasą", values: { recommended: "DP 150T" } },
  { feature: "Ekonomiškesnė išorinė konstrukcija", values: { recommended: "DP 100" } },
  { feature: "Balkonai, lodžijos, slankios pertvaros", values: { recommended: "L 50" } },
  { feature: "Didelės atveriamos erdvės arba zonavimas", values: { recommended: "Harmonic" } },
  { feature: "Konstrukcija be architektūrinių barjerų", values: { recommended: "DP 180 su įleistu slenksčiu" } },
  { feature: "Vidinės pertvaros", values: { recommended: "Harmonic arba L 50" } },
] as const;

const COMP_COLUMNS = [
  { key: "aluminum", label: "Aliuminės sistemos" },
  { key: "plastic", label: "Plastikinės sistemos" },
] as const;
const COMP_ROWS = [
  { feature: "Didelės angos", values: { aluminum: "Labai tinka", plastic: "Ribotai / pagal sistemą" } },
  { feature: "Konstrukcijos tvirtumas", values: { aluminum: "Labai aukštas", plastic: "Geras" } },
  { feature: "Kaina", values: { aluminum: "Aukštesnė investicija", plastic: "Ekonomiškesnis pasirinkimas" } },
  { feature: "Dizainas", values: { aluminum: "Modernus, lengvas, su dideliais stiklo plotais", plastic: "Universalus" } },
  { feature: "Varčios svoris", values: { aluminum: "Gali būti labai didelis", plastic: "Ribotesnis" } },
  { feature: "Terasos / žiemos sodai", values: { aluminum: "Labai tinka", plastic: "Tinka paprastesniems sprendimams" } },
  { feature: "Balkonai / lodžijos", values: { aluminum: "Tinka", plastic: "Tinka" } },
  { feature: "Ilgaamžiškumas", values: { aluminum: "Labai aukštas", plastic: "Geras" } },
] as const;

const PROCESS = [
  {
    title: "Poreikio įvertinimas",
    description: "Aptariame, kur sistema bus naudojama: terasai, balkonui, žiemos sodui, vitrinai, lodžijai ar vidaus pertvarai.",
  },
  {
    title: "Sistemos parinkimas",
    description:
      "Pagal angos dydį, varčios svorį, šilumos izoliacijos poreikį ir naudojimo intensyvumą parenkame tinkamiausią Yawal sistemą.",
  },
  {
    title: "Gamyba",
    description: "Sistema gaminama pagal suderintus matmenis, stiklo paketą, bėgių tipą ir kitus techninius reikalavimus.",
  },
  {
    title: "Montavimas",
    description: "Atliekamas profesionalus montavimas, kad sistema veiktų sklandžiai, būtų sandari, stabili ir patogi naudoti.",
  },
];

export function AliuminesStumdomosSistemosSalesPage() {
  return (
    <div className="w-full bg-white text-[#16216b]">
      <SalesHero
        backgroundImageSrc="/images/alium4.png"
        breadcrumbItems={[
          { label: "Pradžia", href: "/" },
          { label: "Stumdomos sistemos", href: "/stumdomos-sistemos" },
          { label: "Aliuminės stumdomos sistemos" },
        ]}
        ctaPrimary={{ label: "Gauti pasiūlymą", href: "/kontaktai#uzklausa" }}
        ctaSecondary={{ label: "Peržiūrėti sistemas", href: "#sprendimai" }}
        description="Tvirti, modernūs ir ilgaamžiai Yawal aliuminio stumdomų sistemų sprendimai terasoms, balkonams, žiemos sodams, lodžijoms, vitrinoms ir didelėms stiklo konstrukcijoms."
        title="Aliuminės stumdomos sistemos didelėms angoms, terasoms ir vitrinoms"
      />

      <section className="w-full bg-white py-14 md:py-[100px]" id="sprendimai">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-4 px-4 text-center md:px-[70px]">
          <h2 className="text-3xl font-semibold leading-[1.18] tracking-[-0.032em] md:text-[45px] md:leading-[52px]">
            <span className="text-[#263cd0]">Aliuminės stumdomos </span>
            <span className="text-[#16216b]">ir sulankstomos sistemos</span>
          </h2>
          <p className="max-w-[920px] text-base leading-relaxed text-[#16216b] md:text-[17px]">
            Pasirinkite sistemą pagal angos dydį, šilumos izoliacijos poreikį, naudojimo būdą ir pastato paskirtį.
          </p>
        </div>
        <AliuminesStumdomosSolutionTabs products={ALUMINUM_SLIDING_PRODUCTS} />
      </section>

      <section className="w-full bg-white" id="privalumai-aliumines-stumdomos">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-4 pb-8 pt-4 md:flex-row md:items-center md:justify-between md:px-[70px] md:pb-8 md:pt-10">
          <div className="max-w-[min(100%,40rem)] space-y-4">
            <h2 className="text-3xl font-semibold leading-[1.18] tracking-[-0.032em] md:text-[45px] md:leading-[52px]">
              <span className="text-[#263cd0]">Daugiau šviesos, didesnės angos </span>
              <span className="text-[#16216b]">ir patogus naudojimas</span>
            </h2>
            <p className="text-base leading-relaxed text-[#16216b]">
              Aliuminės stumdomos sistemos leidžia kurti didelius stiklo plotus, patogius išėjimus į terasą ar balkoną ir modernias konstrukcijas, kurios išlieka stabilios net esant dideliems matmenims.
            </p>
          </div>
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

      <DurysComparisonTable
        columns={FIT_COLUMNS}
        headingLead="Kuri sistema jums"
        headingRest="tinkamiausia?"
        offerCta
        rows={FIT_ROWS}
        sectionId="kuri-sistema"
      />

      <DurysComparisonTable
        columns={COMP_COLUMNS}
        headingLead="Aliuminės ar plastikinės"
        headingRest="stumdomos sistemos?"
        offerCta
        rows={COMP_ROWS}
        sectionId="palyginimas"
      />

      <CaseStudiesProjectsCarousel
        headingLead="Realūs klientų "
        headingRest="projektai"
        intro="Įgyvendintos aliuminės stumdomos sistemos iš tos pačios duomenų bazės."
        projectCategories={CAROUSEL_CATEGORIES.stumdomosSistemos}
      />

      <FaqSection
        faqIdPrefix="aliumines-stumdomos-faq"
        headingLead="Jūsų klausimai – "
        headingRest="aiškūs atsakymai"
        items={ALIUMINES_STUMDOMOS_FAQ}
        sectionId="duk-aliumines-stumdomos"
      />

      <ProcessSteps headingLine1="Kaip vyksta aliuminės stumdomos sistemos parinkimas?" id="procesas" steps={PROCESS} />
    </div>
  );
}
