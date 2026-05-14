import { DurysComparisonTable } from "@/components/durys/DurysComparisonTable";
import { CaseStudiesProjectsCarousel } from "@/components/plastikiniai-langai/CaseStudiesProjectsCarousel";
import { FaqSection } from "@/components/plastikiniai-langai/FaqSection";
import { ProcessSteps } from "@/components/plastikiniai-langai/ProcessSteps";
import { SalesHero } from "@/components/plastikiniai-langai/SalesHero";
import { ProductSimilarProducts } from "@/components/product-inner/ProductSimilarProducts";
import { BalkonuStiklinimasSolutionTabs } from "@/components/stiklinimas/BalkonuStiklinimasSolutionTabs";
import { BalkonuValueFeaturesSection } from "@/components/stiklinimas/BalkonuValueFeaturesSection";
import { ParallaxCoverImage } from "@/components/ui/ParallaxCoverImage";
import { CAROUSEL_CATEGORIES } from "@/data/implemented-projects";
import { BALKONU_STIKLINIMAS_FAQ } from "@/data/structured-data-faqs";
import type { ProductInnerSimilarItem } from "@/data/product-inner/types";

const TAI_PAT_GAL_DOMINA_BALKONU: ProductInnerSimilarItem[] = [
  {
    title: "Terasų stiklinimas",
    description: "Apsaugokite terasą nuo vėjo ir lietaus.",
    href: "/stiklinimas/terasu-stiklinimas",
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
    title: "Apsauga nuo lietaus, sniego ir vėjo",
    body: "Įstiklintas balkonas nebeprilyja, neprisninga ir tampa patogesnis naudoti skirtingais metų laikais.",
  },
  {
    title: "Daugiau šilumos ir komforto",
    body: "Stiklinimas padeda sumažinti šilumos nuostolius ir pagerina kambario mikroklimatą.",
  },
  {
    title: "Saugesnė erdvė daiktams",
    body: "Balkone tampa saugiau laikyti daiktus, augalus ar kitus kasdienius reikmenis.",
  },
  {
    title: "Mažiau triukšmo",
    body: "Stiklinimas sumažina iš gatvės sklindantį triukšmą ir padeda sukurti ramesnę aplinką.",
  },
] as const;

const COMPARISON_COLUMNS = [
  { key: "plastic", label: "Stiklinimas plastiku" },
  { key: "aluminum", label: "Stiklinimas aliuminiu" },
] as const;
const COMPARISON_ROWS = [
  { feature: "Šilumos izoliacija", values: { plastic: "Geresnė", aluminum: "Gera / priklauso nuo sistemos" } },
  { feature: "Kaina", values: { plastic: "Dažniausiai ekonomiškesnė", aluminum: "Dažniausiai aukštesnė investicija" } },
  { feature: "Konstrukcijos svoris", values: { plastic: "Sunkesnė", aluminum: "Lengvesnė" } },
  { feature: "Vizualinis lengvumas", values: { plastic: "Universalus vaizdas", aluminum: "Lengvesnis, modernesnis vaizdas" } },
  { feature: "Atsparumas aplinkai", values: { plastic: "Geras", aluminum: "Labai geras" } },
  { feature: "Priežiūra", values: { plastic: "Lengva", aluminum: "Lengva" } },
] as const;

const PROCESS = [
  {
    title: "Konsultacija",
    description: "Aptariame balkono tipą, jūsų poreikius, norimą konstrukciją ir biudžetą.",
  },
  {
    title: "Matavimas",
    description: "Įvertiname balkono dydį, konstrukciją ir montavimo sąlygas.",
  },
  {
    title: "Gamyba",
    description: "Paruošiama konstrukcija pagal suderintus matmenis ir pasirinktą stiklinimo tipą.",
  },
  {
    title: "Montavimas",
    description: "Konstrukcija sumontuojama taip, kad būtų patogi naudoti, sandari ir lengvai prižiūrima.",
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

export function BalkonuStiklinimasPage() {
  return (
    <div className="w-full bg-white text-[#16216b]">
      <SalesHero
        backgroundImageSrc="/images/Balkonu stiklinimas/ChatGPT Image May 7, 2026, 03_40_37 PM (4).png"
        breadcrumbItems={[
          { label: "Pradžia", href: "/" },
          { label: "Stiklinimas", href: "/stiklinimas" },
          { label: "Balkonų stiklinimas" },
        ]}
        contentAlign="end"
        ctaPrimary={{ label: "Gauti pasiūlymą", href: "/kontaktai#uzklausa" }}
        heroUrgencyLine
        ctaSecondary={{ label: "Peržiūrėti naudą", href: "#naudos-blokas" }}
        description="Įstiklintas balkonas apsaugo nuo lietaus, sniego, vėjo, dulkių ir triukšmo. Tai būdas paversti balkoną jaukesne, saugesne ir patogiau naudojama namų erdve."
        stats={[
          { number: "200+", label: "Įstiklintų balkonų" },
          { number: "Šilta ir šalta", label: "Sistema" },
          { number: "5 d.", label: "Montavimas" },
        ]}
        title="Balkonų stiklinimas patogesniam gyvenimui"
      />

      <section className="w-full bg-white py-14 md:py-[100px]">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-4 px-4 text-center md:px-[70px]">
          <h2 className="text-3xl font-semibold leading-[1.18] tracking-[-0.032em] md:text-[45px] md:leading-[52px]">
            <span className="text-[#263cd0]">Balkonų stiklinimas </span>
            <span className="text-[#16216b]">pagal jūsų poreikį</span>
          </h2>
        </div>
        <BalkonuStiklinimasSolutionTabs />
      </section>

      <section className="w-full bg-white" id="kodel-verta-stiklinti-balkona">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-4 pb-8 pt-4 md:px-[70px] md:pb-8 md:pt-10 lg:flex-row lg:items-end lg:justify-between lg:gap-[100px]">
          <h2 className="max-w-[min(100%,44rem)] text-3xl font-semibold leading-[1.18] tracking-[-0.032em] md:text-[45px] md:leading-[52px]">
            <span className="text-[#263cd0]">Balkonas tampa </span>
            <span className="text-[#16216b]">naudingesne namų erdve</span>
          </h2>
          <p className="max-w-[min(100%,38rem)] text-base leading-relaxed text-[#16216b] md:text-[17px]">
            Įstiklinus balkoną, jis tampa ne tik apsaugotas nuo oro sąlygų, bet ir patogesnis kasdieniam naudojimui.
          </p>
        </div>
        <div className="mx-auto flex max-w-[1440px] flex-col gap-5 px-4 pb-16 pt-6 md:px-[70px] md:pb-[100px] md:pt-8 lg:pt-10 lg:grid lg:grid-cols-4 lg:gap-5">
          <div className="min-h-0 lg:col-start-1 lg:row-start-1">
            <BentoTopic body={WHY_CARDS[0].body} title={WHY_CARDS[0].title} />
          </div>

          <div className="relative min-h-[300px] overflow-hidden rounded-2xl bg-[#dde4fc] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:min-h-[520px]">
            <ParallaxCoverImage
              alt="Balkono stiklinimo sprendimas"
              fill
              sizes="(max-width: 1023px) 100vw, 23vw"
              src="/images/Balkonu stiklinimas/ChatGPT Image May 7, 2026, 03_40_37 PM (5).png"
              style={{ objectPosition: "48% 42%" }}
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
              alt="Balkono stiklinimas ir triukšmo mažinimas"
              fill
              sizes="(max-width: 1023px) 100vw, 23vw"
              src="/images/Balkonu stiklinimas/ChatGPT Image May 7, 2026, 03_40_37 PM (6).png"
              style={{ objectPosition: "50% 45%" }}
            />
          </div>

          <div className="min-h-0 lg:col-span-2 lg:col-start-3 lg:row-start-2">
            <BentoTopic body={WHY_CARDS[3].body} title={WHY_CARDS[3].title} />
          </div>
        </div>
      </section>

      <BalkonuValueFeaturesSection />

      <CaseStudiesProjectsCarousel
        headingLead="Realūs klientų "
        headingRest="projektai"
        intro="Įgyvendinti balkonų stiklinimo projektai — tie patys įrašai kaip galerijoje."
        projectCategories={CAROUSEL_CATEGORIES.balkonuStiklinimas}
      />

      <DurysComparisonTable
        columns={COMPARISON_COLUMNS}
        headingLead="Balkonų stiklinimas"
        headingRest="plastiku ar aliuminiu?"
        rows={COMPARISON_ROWS}
        sectionId="pries-uzsakant"
      />

      <FaqSection
        faqIdPrefix="balkonu-stiklinimas-faq"
        headingLead="Dažniausiai"
        headingRest="užduodami klausimai"
        items={BALKONU_STIKLINIMAS_FAQ}
        sectionId="duk-balkonu-stiklinimas"
      />

      <ProcessSteps headingLine1="Kaip vyksta balkonų stiklinimas?" id="procesas-balkonu-stiklinimas" steps={PROCESS} />

      <ProductSimilarProducts heading="Taip pat galbūt domina" items={TAI_PAT_GAL_DOMINA_BALKONU} />
    </div>
  );
}
