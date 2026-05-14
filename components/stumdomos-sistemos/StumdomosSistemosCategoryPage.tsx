import { DurysComparisonTable } from "@/components/durys/DurysComparisonTable";
import { CaseStudiesProjectsCarousel } from "@/components/plastikiniai-langai/CaseStudiesProjectsCarousel";
import { FaqSection } from "@/components/plastikiniai-langai/FaqSection";
import { ProcessSteps } from "@/components/plastikiniai-langai/ProcessSteps";
import { SalesHero } from "@/components/plastikiniai-langai/SalesHero";
import { StumdomosSistemosTabs } from "@/components/stumdomos-sistemos/StumdomosSistemosTabs";
import { FeatureHoverCard } from "@/components/ui/FeatureHoverCard";
import { ParallaxCoverImage } from "@/components/ui/ParallaxCoverImage";
import { CAROUSEL_CATEGORIES } from "@/data/implemented-projects";
import { STUMDOMOS_HUB_FAQ } from "@/data/structured-data-faqs";

const STUMDOMOS_IMAGES = {
  hero: "/images/Stumdomos sistemos/ChatGPT Image May 7, 2026, 02_44_30 PM (1).png",
  terrace: "/images/Stumdomos sistemos/ChatGPT Image May 7, 2026, 02_44_31 PM (2).png",
  balcony: "/images/Stumdomos sistemos/ChatGPT Image May 7, 2026, 02_44_31 PM (3).png",
  largeOpenings: "/images/Stumdomos sistemos/ChatGPT Image May 7, 2026, 02_44_31 PM (4).png",
} as const;

const WHY_CARDS = [
  {
    title: "Taupo vietą",
    body: "Stumdoma konstrukcija nereikalauja papildomos varstymo zonos, todėl patogu naudoti mažesnėse ar intensyviai naudojamose erdvėse.",
  },
  {
    title: "Sukuria ryšį su lauku",
    body: "Stumdomos sistemos leidžia turėti didesnius stiklo plotus ir patogų išėjimą į balkoną, terasą ar kiemą.",
  },
  {
    title: "Pritaikoma pagal poreikį",
    body: "Galima rinktis aliuminio arba plastiko sistemas pagal biudžetą, angos dydį, šilumos poreikį ir norimą dizainą.",
  },
] as const;

const USE_CASES = [
  {
    title: "Terasoms",
    body: "Patogus išėjimas į lauko erdvę su didesniu stiklo plotu ir sklandžiu naudojimu.",
    imageUrl: STUMDOMOS_IMAGES.terrace,
  },
  {
    title: "Balkonams",
    body: "Praktiškas sprendimas butams ir namams, kai svarbu taupyti vietą ir išlaikyti šilumą.",
    imageUrl: STUMDOMOS_IMAGES.balcony,
  },
  {
    title: "Didelėms angoms ir vitrinoms",
    body: "Tinka moderniems projektams, kur reikalingi didesni stiklai ir tvirtesnė konstrukcija.",
    imageUrl: STUMDOMOS_IMAGES.largeOpenings,
  },
] as const;

const PROCESS = [
  {
    title: "Konsultacija",
    description:
      "Aptariame angos dydį, naudojimo vietą ir prioritetus, kad būtų aišku, ar labiau tinka aliuminė, ar plastikinė sistema.",
  },
  {
    title: "Sprendimo parinkimas",
    description:
      "Parenkame tinkamą stumdomos sistemos tipą pagal dizainą, šilumos poreikį, biudžetą ir naudojimo intensyvumą.",
  },
  {
    title: "Gamyba ir pristatymas",
    description: "Sistemos paruošiamos pagal suderintus matmenis ir pristatomos montavimui.",
  },
  {
    title: "Montavimas",
    description: "Sumontuojame sistemą tiksliai ir atsakingai, kad ji veiktų sklandžiai ir patikimai kasdien.",
  },
];

const COMPARISON_COLUMNS = [
  { key: "aluminum", label: "Aliuminės sistemos" },
  { key: "plastic", label: "Plastikinės sistemos" },
] as const;

const COMPARISON_ROWS = [
  { feature: "Tinka didelėms angoms", values: { aluminum: "Labai tinka", plastic: "Ribotai / pagal sistemą" } },
  { feature: "Dizainas", values: { aluminum: "Modernus, minimalistinis", plastic: "Universalus" } },
  { feature: "Kaina", values: { aluminum: "Aukštesnė investicija", plastic: "Ekonomiškesnis pasirinkimas" } },
  { feature: "Konstrukcijos tvirtumas", values: { aluminum: "Labai aukštas", plastic: "Geras" } },
  { feature: "Šilumos izoliacija", values: { aluminum: "Gera su tinkama sistema", plastic: "Gera" } },
  { feature: "Priežiūra", values: { aluminum: "Lengva", plastic: "Lengva" } },
  { feature: "Pritaikymas", values: { aluminum: "Terasos, vitrinos, didelės angos", plastic: "Balkonai, terasos, gyvenamosios erdvės" } },
  { feature: "Ilgaamžiškumas", values: { aluminum: "Labai aukštas", plastic: "Geras" } },
] as const;

export function StumdomosSistemosCategoryPage() {
  return (
    <div className="w-full bg-white text-[#16216b]">
      <SalesHero
        backgroundImageSrc={STUMDOMOS_IMAGES.hero}
        ctaPrimary={{ label: "Gauti pasiūlymą", href: "/kontaktai#uzklausa" }}
        ctaSecondary={{ label: "Pasirinkti sistemą", href: "#sistemos-tipai" }}
        description="Patogūs aliuminio ir plastiko stumdomų sistemų sprendimai, kai norite daugiau šviesos, lengvo naudojimo ir sklandaus perėjimo tarp vidaus bei lauko erdvių."
        stats={[
          { number: "100+", label: "Stumdomų sistemų" },
          { number: "Aliuminis ir plastikas", label: "Sistemos pagal biudžetą" },
          { number: "5 d.", label: "Vidutinis montavimas" },
        ]}
        primaryCtaReassurance
        title="Stumdomos sistemos terasoms, balkonams ir didelėms angoms"
      />

      <StumdomosSistemosTabs sectionId="sistemos-tipai" />

      <section className="w-full bg-white" id="kodel-stumdomos">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-4 pb-8 pt-4 md:flex-row md:items-center md:justify-between md:px-[70px] md:pb-8 md:pt-10">
          <div className="max-w-[min(100%,38rem)] space-y-4">
            <h2 className="text-3xl font-semibold leading-[1.18] tracking-[-0.032em] md:text-[45px] md:leading-[52px]">
              <span className="text-[#263cd0]">Daugiau šviesos, erdvės </span>
              <span className="text-[#16216b]">ir patogumo kasdien</span>
            </h2>
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
        columns={COMPARISON_COLUMNS}
        headingLead="Aliuminės ar plastikinės"
        headingRest="stumdomos sistemos?"
        rows={COMPARISON_ROWS}
        sectionId="palyginimas-stumdomos"
      />

      <section className="w-full bg-white" id="kur-naudojamos-stumdomos">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-4 pb-8 pt-4 md:flex-row md:items-center md:justify-between md:px-[70px] md:pb-8 md:pt-10">
          <div className="max-w-[min(100%,38rem)] space-y-4">
            <h2 className="text-3xl font-semibold leading-[1.18] tracking-[-0.032em] md:text-[45px] md:leading-[52px]">
              <span className="text-[#263cd0]">Kur naudojamos </span>
              <span className="text-[#16216b]">stumdomos sistemos?</span>
            </h2>
          </div>
        </div>
        <div className="mx-auto grid max-w-[1440px] gap-4 px-4 pb-16 md:grid-cols-3 md:gap-4 md:px-[70px] md:pb-[100px] md:pt-6">
          {USE_CASES.map((card) => (
            <article className="relative flex min-h-[432px] flex-col justify-end overflow-hidden p-4" key={card.title}>
              <ParallaxCoverImage alt={card.title} fill loading="lazy" sizes="(min-width: 768px) 33vw, 100vw" src={card.imageUrl} />
              <div className="relative rounded-xl bg-white p-4">
                <h3 className="text-[22px] font-semibold leading-tight tracking-[-0.02em] text-[#263cd0] md:text-[24px]">{card.title}</h3>
                <p className="mt-1 text-[14px] leading-normal text-[#16216b]">{card.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CaseStudiesProjectsCarousel
        headingLead="Realūs klientų "
        headingRest="projektai"
        intro="Įgyvendintos stumdomos sistemos iš tos pačios įgyvendintų projektų galerijos."
        projectCategories={CAROUSEL_CATEGORIES.stumdomosSistemos}
      />

      <FaqSection
        faqIdPrefix="stumdomos-sistemos-faq"
        headingLead="Jūsų klausimai – "
        headingRest="aiškūs atsakymai"
        items={STUMDOMOS_HUB_FAQ}
        sectionId="duk-stumdomos-sistemos"
      />

      <ProcessSteps
        headingLine1="Kaip vyksta stumdomos sistemos užsakymas?"
        id="procesas-stumdomos-sistemos"
        steps={PROCESS}
      />
    </div>
  );
}
