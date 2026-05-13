import { DurysComparisonTable } from "@/components/durys/DurysComparisonTable";
import { CaseStudiesProjectsCarousel } from "@/components/plastikiniai-langai/CaseStudiesProjectsCarousel";
import { ComparisonTeaser } from "@/components/plastikiniai-langai/ComparisonTeaser";
import { FaqSection } from "@/components/plastikiniai-langai/FaqSection";
import { ProcessSteps } from "@/components/plastikiniai-langai/ProcessSteps";
import { SalesHero } from "@/components/plastikiniai-langai/SalesHero";
import { ProductSimilarProducts } from "@/components/product-inner/ProductSimilarProducts";
import { TerasuStiklinimasSystemTabs } from "@/components/stiklinimas/TerasuStiklinimasSystemTabs";
import { TerasuValueFeaturesSection } from "@/components/stiklinimas/TerasuValueFeaturesSection";
import { ParallaxCoverImage } from "@/components/ui/ParallaxCoverImage";
import { CAROUSEL_CATEGORIES } from "@/data/implemented-projects";
import type { ProductInnerSimilarItem } from "@/data/product-inner/types";

const TAI_PAT_GAL_DOMINA_TERASU: ProductInnerSimilarItem[] = [
  {
    title: "Balkonų stiklinimas",
    description: "Įstiklinkite balkoną nuo lietaus, vėjo ir triukšmo.",
    href: "/stiklinimas/balkonu-stiklinimas",
  },
  {
    title: "Žiemos sodai",
    description: "Pilnai įstiklintos erdvės namams ir komercijai.",
    href: "/ziemos-sodai",
  },
  {
    title: "Stumdomos sistemos",
    description: "Patogus išėjimas į balkoną ar terasą.",
    href: "/stumdomos-sistemos",
  },
];

const WHY_CARDS = [
  {
    title: "Ilgesnis terasos naudojimo sezonas",
    body: "Įstiklinta terasa leidžia leisti laiką ne tik vasarą, bet ir lietingais rudens vakarais ar vėsesniu oru.",
  },
  {
    title: "Apsauga nuo oro sąlygų",
    body: "Stiklinimas padeda apsisaugoti nuo vėjo, lietaus, sniego, dulkių ir kitų išorės veiksnių.",
  },
  {
    title: "Daugiau šilumos ir jaukumo",
    body: "Tinkamai parinkta sistema padeda sumažinti šilumos nuostolius ir sukurti jaukesnę aplinką namuose.",
  },
  {
    title: "Mažiau triukšmo",
    body: "Įstiklinta terasa gali sumažinti iš lauko sklindantį triukšmą, ypač jei gyvenate judresnėje vietoje.",
  },
] as const;

const BENEFIT_COLUMNS = [{ key: "value", label: "Ką tai reiškia jums?" }] as const;
const BENEFIT_ROWS = [
  { feature: "Daugiau naudojamos erdvės", values: { value: "Terasa tampa patogesne poilsio vieta skirtingais metų laikais." } },
  { feature: "Apsauga nuo oro sąlygų", values: { value: "Mažiau lietaus, sniego, vėjo, dulkių ir lapų terasos viduje." } },
  { feature: "Geresnis komfortas", values: { value: "Terasoje tampa jaukiau gerti kavą, ilsėtis ar leisti laiką su šeima." } },
  { feature: "Garso izoliacija", values: { value: "Mažiau girdisi gatvės, kaimynų ar aplinkos triukšmas." } },
  { feature: "Ilgaamžiškumas", values: { value: "Stiklinimas padeda apsaugoti terasos vidų nuo drėgmės ir UV poveikio." } },
  { feature: "Estetika", values: { value: "Įstiklinta terasa gali tapti gražiu namo architektūros akcentu." } },
] as const;

const VS_WINTER_GARDEN_COLUMNS = [{ key: "fit", label: "Tinkamesnis sprendimas" }] as const;
const VS_WINTER_GARDEN_ROWS = [
  { feature: "Norite apsaugoti esamą terasą nuo oro sąlygų", values: { fit: "Terasų stiklinimas" } },
  { feature: "Norite naudoti terasą ilgesnį sezoną", values: { fit: "Terasų stiklinimas arba šilta sistema" } },
  { feature: "Norite sukurti naują stiklinę erdvę prie namo", values: { fit: "Žiemos sodas" } },
  {
    feature: "Reikia konstrukcijos su stogu ir aiškia architektūrine integracija",
    values: { fit: "Žiemos sodas" },
  },
  { feature: "Norite paprastesnio ir greitesnio sprendimo", values: { fit: "Terasų stiklinimas" } },
  { feature: "Norite pilnesnės papildomos poilsio erdvės", values: { fit: "Žiemos sodas" } },
] as const;

const FAQ = [
  {
    question: "Ar įstiklinta terasa gali būti naudojama žiemą?",
    answer:
      "Tai priklauso nuo pasirinktos sistemos. Šiltesnės ir sandaresnės sistemos leidžia terasa naudotis ilgiau, tačiau galutinis komfortas priklauso nuo konstrukcijos, stiklo ir montavimo.",
  },
  {
    question: "Ar terasos stiklinimas apsaugo nuo lietaus ir vėjo?",
    answer: "Taip, kokybiškai parinkta ir sumontuota konstrukcija padeda apsaugoti terasą nuo lietaus, vėjo, sniego ir dulkių.",
  },
  {
    question: "Ar galima atidaryti stiklinimo sistemas?",
    answer: "Taip, dažnai naudojamos lengvai stumdomos durys ar kiti atidaromi sprendimai, leidžiantys įsileisti daugiau oro.",
  },
  {
    question: "Ar terasos stiklinimas sumažina triukšmą?",
    answer: "Taip, stiklinimas gali sumažinti iš aplinkos sklindantį triukšmą ir sukurti ramesnę poilsio zoną.",
  },
  {
    question: "Ar terasos stiklinimas tinka moderniam ir klasikiniam namui?",
    answer: "Taip, konstrukcija gali būti pritaikoma prie skirtingų architektūrinių stilių.",
  },
];

const PROCESS = [
  {
    title: "Konsultacija",
    description: "Aptariame terasos tipą, jūsų poreikius, norimą naudojimo sezoną, dizainą ir biudžetą.",
  },
  {
    title: "Matavimas",
    description: "Įvertiname terasos dydį, konstrukciją, montavimo vietą ir technines sąlygas.",
  },
  {
    title: "Sprendimo parinkimas",
    description: "Parenkame šiltą arba šaltą sistemą, stumdomų dalių kiekį, stiklo sprendimą ir konstrukcijos tipą.",
  },
  {
    title: "Gamyba ir montavimas",
    description: "Paruošiame konstrukciją pagal suderintus matmenis ir sumontuojame taip, kad terasa būtų patogi, saugi ir ilgaamžė.",
  },
] as const;

function BentoTopic({
  title,
  body,
  dark = false,
}: {
  title: string;
  body: string;
  dark?: boolean;
}) {
  return (
    <div
      className={`relative flex h-full min-h-[220px] flex-col justify-end gap-3 overflow-hidden rounded-2xl p-6 md:p-8 ${
        dark ? "bg-[#16216b]" : "bg-[#f6f7ff]"
      }`}
    >
      <h3 className={`text-xl font-semibold leading-snug tracking-[-0.03em] md:text-2xl ${dark ? "text-white" : "text-[#16216b]"}`}>
        {title}
      </h3>
      <p className={`text-[15px] font-normal leading-relaxed md:text-base ${dark ? "text-white/90" : "text-[#16216b]"}`}>{body}</p>
    </div>
  );
}

export function TerasuStiklinimasPage() {
  return (
    <div className="w-full bg-white text-[#16216b]">
      <SalesHero
        backgroundImageSrc="/images/Terasu stiklinimas/ChatGPT Image May 7, 2026, 03_45_40 PM (3).png"
        breadcrumbItems={[
          { label: "Pradžia", href: "/" },
          { label: "Stiklinimas", href: "/stiklinimas" },
          { label: "Terasų stiklinimas" },
        ]}
        ctaPrimary={{ label: "Gauti pasiūlymą", href: "/kontaktai#uzklausa" }}
        heroUrgencyLine
        ctaSecondary={{ label: "Peržiūrėti privalumus", href: "#kodel-terasu-stiklinimas" }}
        description="Įstiklinta terasa apsaugo nuo vėjo, lietaus, sniego, dulkių ir triukšmo, todėl ja galite naudotis ne tik vasarą, bet ir vėsesniais metų laikais."
        stats={[
          { number: "100+", label: "Terasų projektų" },
          { number: "Plastik ir aliuminis", label: "Sistema" },
          { number: "5 d.", label: "Montavimas" },
        ]}
        title="Terasų stiklinimas ilgesniam lauko sezonui"
      />

      <section className="w-full bg-white py-14 md:py-[100px]" id="terasu-sistemos">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-4 px-4 text-center md:px-[70px]">
          <h2 className="text-3xl font-semibold leading-[1.18] tracking-[-0.032em] md:text-[45px] md:leading-[52px]">
            <span className="text-[#263cd0]">Pasirinkite sistemą </span>
            <span className="text-[#16216b]">pagal terasos poreikį</span>
          </h2>
          <p className="max-w-[860px] text-base leading-relaxed text-[#16216b] md:text-[17px]">
            Kiekviena terasa yra individuali, todėl sprendimas parenkamas pagal konstrukciją, norimą sandarumą, naudojimo sezoną ir pastato stilių.
          </p>
        </div>
        <TerasuStiklinimasSystemTabs />
      </section>

      <section className="w-full bg-white" id="kodel-terasu-stiklinimas">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-4 pb-8 pt-4 md:flex-row md:items-center md:justify-between md:px-[70px] md:pb-8 md:pt-10">
          <div className="max-w-[min(100%,42rem)] space-y-4">
            <h2 className="text-3xl font-semibold leading-[1.18] tracking-[-0.032em] md:text-[45px] md:leading-[52px]">
              <span className="text-[#263cd0]">Terasa tampa </span>
              <span className="text-[#16216b]">patogesne namų erdve</span>
            </h2>
            <p className="max-w-[860px] text-base leading-relaxed text-[#16216b] md:text-[17px]">
              Kokybiškai įstiklinta terasa leidžia ilgiau mėgautis lauko erdve, apsaugo ją nuo oro sąlygų ir suteikia namams daugiau jaukumo.
            </p>
          </div>
        </div>
        <div className="mx-auto flex max-w-[1440px] flex-col gap-5 px-4 pb-16 pt-6 md:px-[70px] md:pb-[100px] md:pt-8 lg:pt-10 lg:grid lg:grid-cols-4 lg:gap-5">
          <div className="min-h-0 lg:col-start-1 lg:row-start-1">
            <BentoTopic body={WHY_CARDS[0].body} title={WHY_CARDS[0].title} />
          </div>

          <div className="relative min-h-[300px] overflow-hidden rounded-2xl bg-[#dde4fc] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:min-h-[520px]">
            <ParallaxCoverImage
              alt="Terasos stiklinimo sprendimas"
              fill
              sizes="(max-width: 1023px) 100vw, 23vw"
              src="/images/Terasu stiklinimas/ChatGPT Image May 7, 2026, 03_45_41 PM (4).png"
              style={{ objectPosition: "50% 42%" }}
            />
          </div>

          <div className="min-h-0 lg:col-start-3 lg:row-start-1">
            <BentoTopic body={WHY_CARDS[1].body} title={WHY_CARDS[1].title} dark />
          </div>

          <div className="min-h-0 lg:col-start-4 lg:row-start-1">
            <BentoTopic body={WHY_CARDS[2].body} title={WHY_CARDS[2].title} />
          </div>

          <div className="relative min-h-[240px] overflow-hidden rounded-2xl bg-[#e8ebfa] lg:col-start-1 lg:row-start-2 lg:min-h-[260px]">
            <ParallaxCoverImage
              alt="Terasos stiklinimas komfortui"
              fill
              sizes="(max-width: 1023px) 100vw, 23vw"
              src="/images/Terasu stiklinimas/ChatGPT Image May 7, 2026, 03_45_41 PM (5).png"
              style={{ objectPosition: "50% 45%" }}
            />
          </div>

          <div className="min-h-0 lg:col-span-2 lg:col-start-3 lg:row-start-2">
            <BentoTopic body={WHY_CARDS[3].body} title={WHY_CARDS[3].title} />
          </div>
        </div>
      </section>

      <TerasuValueFeaturesSection />

      <CaseStudiesProjectsCarousel
        headingLead="Realūs klientų "
        headingRest="projektai"
        intro="Įgyvendinti terasų stiklinimo projektai iš tos pačios įgyvendintų projektų galerijos."
        projectCategories={CAROUSEL_CATEGORIES.terasuStiklinimas}
      />

      <DurysComparisonTable
        columns={BENEFIT_COLUMNS}
        headingLead="Ką gaunate"
        headingRest="įstiklinę terasą?"
        rows={BENEFIT_ROWS}
        sectionId="naudos-terasa"
      />

      <DurysComparisonTable
        columns={VS_WINTER_GARDEN_COLUMNS}
        headingLead="Ar jums reikia terasos stiklinimo,"
        headingRest="ar žiemos sodo?"
        rows={VS_WINTER_GARDEN_ROWS}
        sectionId="terasa-ar-ziemos-sodas"
      />

      <ComparisonTeaser
        ctaLabel="Gauti pasiūlymą"
        href="/kontaktai#uzklausa"
        title="Jeigu nesate tikri, ar jums labiau tinka terasos stiklinimas, ar žiemos sodas?"
      />

      <FaqSection
        faqIdPrefix="terasu-stiklinimas-faq"
        headingLead="Dažniausiai"
        headingRest="užduodami klausimai"
        items={FAQ}
        sectionId="duk-terasu-stiklinimas"
      />

      <ProcessSteps headingLine1="Kaip vyksta terasų stiklinimas?" id="procesas-terasu-stiklinimas" steps={PROCESS} />

      <ProductSimilarProducts heading="Taip pat galbūt domina" items={TAI_PAT_GAL_DOMINA_TERASU} />
    </div>
  );
}
