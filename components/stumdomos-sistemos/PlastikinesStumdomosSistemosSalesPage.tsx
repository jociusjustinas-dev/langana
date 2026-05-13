import Link from "next/link";

import { DurysComparisonTable } from "@/components/durys/DurysComparisonTable";
import { ProcessSteps } from "@/components/plastikiniai-langai/ProcessSteps";
import { SalesHero } from "@/components/plastikiniai-langai/SalesHero";
import { FaqSection } from "@/components/plastikiniai-langai/FaqSection";
import { CaseStudiesProjectsCarousel } from "@/components/plastikiniai-langai/CaseStudiesProjectsCarousel";
import { FeatureHoverCard } from "@/components/ui/FeatureHoverCard";
import { ParallaxCoverImage } from "@/components/ui/ParallaxCoverImage";
import { CAROUSEL_CATEGORIES } from "@/data/implemented-projects";

const VIDEO_EMBED_URL = "https://www.youtube.com/embed/JPYr8x_Z-A4";
const STUMDOMOS_IMAGES = {
  hero: "/images/Stumdomos sistemos/ChatGPT Image May 7, 2026, 02_45_46 PM (1).png",
  terrace: "/images/Stumdomos sistemos/ChatGPT Image May 7, 2026, 02_44_31 PM (2).png",
  balcony: "/images/Stumdomos sistemos/ChatGPT Image May 7, 2026, 02_44_31 PM (3).png",
  living: "/images/Stumdomos sistemos/ChatGPT Image May 7, 2026, 02_45_46 PM (2).png",
} as const;

const USE_CASES = [
  {
    title: "Terasoms",
    body: "Patogus išėjimas į terasą ir daugiau natūralios šviesos namuose.",
    imageUrl: STUMDOMOS_IMAGES.terrace,
  },
  {
    title: "Balkonams",
    body: "Praktiškas sprendimas mažesnėms erdvėms, kur svarbu taupyti vietą.",
    imageUrl: STUMDOMOS_IMAGES.balcony,
  },
  {
    title: "Gyvenamosioms erdvėms",
    body: "Tinka, kai norite sujungti vidaus ir lauko zonas be papildomos varstymo erdvės.",
    imageUrl: STUMDOMOS_IMAGES.living,
  },
] as const;

const BENEFITS = [
  {
    title: "Taupo vietą",
    body: "Stumdoma konstrukcija nereikalauja papildomos varstymo zonos.",
  },
  {
    title: "Ekonomiškesnis pasirinkimas",
    body: "Plastikinės sistemos dažnai yra racionalesnis pasirinkimas mažesnėms angoms ir standartiniams poreikiams.",
  },
  {
    title: "Lengva priežiūra",
    body: "Plastikiniai profiliai lengvai prižiūrimi ir patogūs kasdieniam naudojimui.",
  },
] as const;

const COMPARISON_COLUMNS = [
  { key: "plastic", label: "Plastikinės sistemos" },
  { key: "aluminum", label: "Aliuminės sistemos" },
] as const;

const COMPARISON_ROWS = [
  { feature: "Kaina", values: { plastic: "Ekonomiškesnis pasirinkimas", aluminum: "Aukštesnė investicija" } },
  { feature: "Tinka mažesnėms angoms", values: { plastic: "Labai tinka", aluminum: "Tinka" } },
  { feature: "Tinka didelėms angoms", values: { plastic: "Ribotai / pagal situaciją", aluminum: "Labai tinka" } },
  { feature: "Dizainas", values: { plastic: "Universalus", aluminum: "Modernesnis, minimalistinis" } },
  { feature: "Konstrukcijos tvirtumas", values: { plastic: "Geras", aluminum: "Labai aukštas" } },
  { feature: "Šilumos izoliacija", values: { plastic: "Gera", aluminum: "Gera / labai gera pagal sistemą" } },
  { feature: "Priežiūra", values: { plastic: "Lengva", aluminum: "Lengva" } },
  { feature: "Naudojimas", values: { plastic: "Balkonai, terasos, namai", aluminum: "Terasos, vitrinos, didelės konstrukcijos" } },
] as const;

const FAQ = [
  {
    question: "Ar plastikinės stumdomos sistemos tinka terasai?",
    answer:
      "Taip, jos gali būti naudojamos terasoms, kai anga nėra labai didelė ir svarbus praktiškas, ekonomiškas sprendimas.",
  },
  {
    question: "Ar plastikinė sistema taupo vietą?",
    answer: "Taip. Stumdoma konstrukcija juda į šoną, todėl nereikia papildomos vietos varčiai atidaryti.",
  },
  {
    question: "Ar plastikinės stumdomos sistemos pigesnės už aliumines?",
    answer: "Dažniausiai taip. Jos dažniau pasirenkamos tada, kai svarbus biudžetas ir standartinis naudojimas.",
  },
  {
    question: "Ar galima pritaikyti pagal angą?",
    answer: "Taip, sprendimas parenkamas pagal angos dydį, naudojimo poreikį ir montavimo sąlygas.",
  },
];

const PROCESS = [
  {
    title: "Konsultacija",
    description: "Aptariame, kur sistema bus naudojama, kokio dydžio anga ir koks sprendimas reikalingas.",
  },
  {
    title: "Matavimas",
    description: "Įvertiname angą, montavimo vietą ir naudojimo sąlygas.",
  },
  {
    title: "Sprendimo parinkimas",
    description: "Parenkame tinkamą stumdomos sistemos tipą pagal poreikį ir biudžetą.",
  },
  {
    title: "Montavimas",
    description: "Sistema sumontuojama taip, kad veiktų sklandžiai ir būtų patogi naudoti kasdien.",
  },
];

export function PlastikinesStumdomosSistemosSalesPage() {
  return (
    <div className="w-full bg-white text-[#16216b]">
      <SalesHero
        backgroundImageSrc={STUMDOMOS_IMAGES.hero}
        breadcrumbItems={[
          { label: "Pradžia", href: "/" },
          { label: "Stumdomos sistemos", href: "/stumdomos-sistemos" },
          { label: "Plastikinės stumdomos sistemos" },
        ]}
        ctaPrimary={{ label: "Gauti pasiūlymą", href: "/kontaktai#uzklausa" }}
        ctaSecondary={{ label: "Peržiūrėti video", href: "#video-demo" }}
        description="Praktiškas ir ekonomiškas sprendimas, kai norite patogaus išėjimo į terasą ar balkoną, daugiau šviesos ir lengvai naudojamos stumdomos konstrukcijos."
        title="Plastikinės stumdomos sistemos balkonams, terasoms ir namams"
      />

      <section className="w-full bg-white py-14 md:py-[100px]" id="video-demo">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-4 md:gap-10 md:px-[70px]">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-[100px]">
            <h2 className="max-w-[min(100%,42rem)] text-3xl font-semibold leading-[1.18] tracking-[-0.032em] md:text-[45px] md:leading-[52px]">
              <span className="text-[#263cd0]">Pažiūrėkite, kaip veikia </span>
              <span className="text-[#16216b]">plastikinė stumdoma sistema</span>
            </h2>
            <p className="max-w-[min(100%,34rem)] text-base leading-relaxed text-[#16216b] md:text-[17px]">
              Trumpas video padės suprasti sistemos veikimo principą, atidarymo logiką ir pritaikymą kasdieniam naudojimui.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl bg-[#f6f7ff] p-2 md:rounded-3xl md:p-3">
            <div className="relative aspect-video w-full overflow-hidden rounded-xl md:rounded-2xl">
              <iframe
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                src={VIDEO_EMBED_URL}
                title="Plastikinės stumdomos sistemos video"
              />
            </div>
          </div>

          <div className="flex justify-center">
            <Link
              className="inline-flex items-center justify-center rounded-full bg-[#263cd0] px-8 py-[15px] text-[15px] font-semibold text-white transition hover:bg-[#1e31a8]"
              href="/kontaktai#uzklausa"
            >
              Noriu tokio sprendimo
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full bg-white" id="kur-tinka-plastikines-stumdomos">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-4 pb-8 pt-4 md:flex-row md:items-center md:justify-between md:px-[70px] md:pb-8 md:pt-10">
          <div className="max-w-[min(100%,46rem)] space-y-4">
            <h2 className="text-3xl font-semibold leading-[1.18] tracking-[-0.032em] md:text-[45px] md:leading-[52px]">
              <span className="text-[#263cd0]">Kur tinka plastikinės </span>
              <span className="text-[#16216b]">stumdomos sistemos?</span>
            </h2>
          </div>
        </div>
        <div className="mx-auto grid max-w-[1440px] gap-4 px-4 pb-16 md:grid-cols-3 md:gap-4 md:px-[70px] md:pb-[100px] md:pt-6">
          {USE_CASES.map((card) => (
            <article className="relative flex min-h-[432px] flex-col justify-end overflow-hidden p-4" key={card.title}>
              <ParallaxCoverImage alt={card.title} fill sizes="(min-width: 768px) 33vw, 100vw" src={card.imageUrl} />
              <div className="relative rounded-xl bg-white p-4">
                <h3 className="text-[22px] font-semibold leading-tight tracking-[-0.02em] text-[#263cd0] md:text-[24px]">
                  {card.title}
                </h3>
                <p className="mt-1 text-[14px] leading-normal text-[#16216b]">{card.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="w-full bg-white" id="kodel-rinktis-plastikines-stumdomas">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-4 pb-8 pt-4 md:flex-row md:items-center md:justify-between md:px-[70px] md:pb-8 md:pt-10">
          <div className="max-w-[min(100%,44rem)] space-y-4">
            <h2 className="text-3xl font-semibold leading-[1.18] tracking-[-0.032em] md:text-[45px] md:leading-[52px]">
              <span className="text-[#263cd0]">Patogus sprendimas </span>
              <span className="text-[#16216b]">kasdieniam naudojimui</span>
            </h2>
          </div>
        </div>
        <div className="mx-auto grid max-w-[1440px] gap-4 px-4 pb-16 md:grid-cols-3 md:gap-4 md:px-[70px] md:pb-[100px] md:pt-6">
          {BENEFITS.map((card) => (
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
        intro="Įgyvendintos stumdomos sistemos iš bendros galerijos."
        projectCategories={CAROUSEL_CATEGORIES.stumdomosSistemos}
      />

      <DurysComparisonTable
        columns={COMPARISON_COLUMNS}
        headingLead="Aliuminės ar plastikinės"
        headingRest="stumdomos sistemos?"
        rows={COMPARISON_ROWS}
        sectionId="plastikiniu-ir-aliuminiu-palyginimas"
      />

      <FaqSection
        faqIdPrefix="plastikines-stumdomos-faq"
        headingLead="Jūsų klausimai – "
        headingRest="aiškūs atsakymai"
        items={FAQ}
        sectionId="duk-plastikines-stumdomos"
      />

      <ProcessSteps
        headingLine1="Kaip vyksta plastikinių stumdomų sistemų užsakymas?"
        id="procesas-plastikines-stumdomos"
        steps={PROCESS}
      />
    </div>
  );
}
