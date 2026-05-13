import { DurysComparisonTable } from "@/components/durys/DurysComparisonTable";
import { CaseStudiesProjectsCarousel } from "@/components/plastikiniai-langai/CaseStudiesProjectsCarousel";
import { ComparisonTeaser } from "@/components/plastikiniai-langai/ComparisonTeaser";
import { FaqSection } from "@/components/plastikiniai-langai/FaqSection";
import { ProcessSteps } from "@/components/plastikiniai-langai/ProcessSteps";
import { SalesHero } from "@/components/plastikiniai-langai/SalesHero";
import { ZiemosSodaiSystemTabs } from "@/components/ziemos-sodai/ZiemosSodaiSystemTabs";
import { ZiemosSodaiUseCasesSection } from "@/components/ziemos-sodai/ZiemosSodaiUseCasesSection";
import { ParallaxCoverImage } from "@/components/ui/ParallaxCoverImage";
import { CAROUSEL_CATEGORIES } from "@/data/implemented-projects";

const VS_TERRACE_COLUMNS = [{ key: "fit", label: "Tinkamesnis sprendimas" }] as const;
const VS_TERRACE_ROWS = [
  { feature: "Norite apsaugoti jau turimą terasą", values: { fit: "Terasos stiklinimas" } },
  {
    feature: "Norite naudoti terasą ilgiau metų laiku",
    values: { fit: "Terasos stiklinimas arba šilta sistema" },
  },
  { feature: "Norite sukurti naują šviesią erdvę prie namo", values: { fit: "Žiemos sodas" } },
  { feature: "Reikia architektūrinės konstrukcijos su stogu", values: { fit: "Žiemos sodas" } },
  { feature: "Norite paprastesnio ir greitesnio sprendimo", values: { fit: "Terasos stiklinimas" } },
  { feature: "Norite išskirtinio namų akcento", values: { fit: "Žiemos sodas" } },
] as const;

const PLANNING_COLUMNS = [{ key: "why", label: "Kodėl tai svarbu?" }] as const;
const PLANNING_ROWS = [
  {
    feature: "Kurioje namo pusėje bus žiemos sodas?",
    values: {
      why: "Nuo to priklauso saulės kiekis, šilumos komfortas ir naudojimo patogumas.",
    },
  },
  {
    feature: "Ar jis bus prijungtas prie namo?",
    values: {
      why: "Prijungtas ir atskiras žiemos sodas reikalauja skirtingų konstrukcinių sprendimų.",
    },
  },
  {
    feature: "Kokia bus erdvės paskirtis?",
    values: {
      why: "Poilsio zonai, augalams ar gyvenamajai erdvei gali reikėti skirtingo sprendimo.",
    },
  },
  {
    feature: "Koks namo architektūrinis stilius?",
    values: {
      why: "Konstrukcija turi derėti prie fasado ir bendro namo vaizdo.",
    },
  },
  {
    feature: "Ar svarbi šilumos izoliacija?",
    values: {
      why: "Jei norite naudoti erdvę dažniau, svarbu pasirinkti tinkamą stiklinimo ir konstrukcijos sprendimą.",
    },
  },
  {
    feature: "Koks biudžetas?",
    values: {
      why: "Žiemos sodai projektuojami individualiai, todėl sprendimas priklauso nuo dydžio, konstrukcijos ir medžiagų.",
    },
  },
] as const;

const ADAPTATION_BULLETS = [
  "konstrukcijos formą;",
  "konstrukcijos spalvą;",
  "modernų arba klasikinį stilių;",
  "prijungimą prie namo;",
  "atskirą žiemos sodo statinį;",
  "skirtingus stiklinimo sprendimus;",
  "apsaugą nuo lietaus, vėjo, sniego ir UV;",
  "naudojimą poilsiui, augalams ar namų erdvės praplėtimui.",
] as const;

const WHY_ZIEMOS_SODAS = [
  {
    title: "Apsauga nuo oro sąlygų",
    body: "Kokybiškas stiklas ir konstrukcija apsaugo nuo vėjo, lietaus, sniego bei UV spindulių.",
  },
  {
    title: "Daugiau natūralios šviesos",
    body: "Dideli stiklo plotai leidžia į namus patekti daugiau saulės šviesos ir sukuria lengvesnį, atviresnį pojūtį.",
  },
  {
    title: "Didesnė namų vertė",
    body: "Gerai suprojektuotas žiemos sodas tampa funkcionaliu ir estetišku namų pratęsimu.",
  },
  {
    title: "Individualus dizainas",
    body: "Forma, spalva, dydis ir stilius parenkami pagal jūsų namą ir norimą rezultatą.",
  },
] as const;

const FAQ: { question: string; answer: string }[] = [
  {
    question: "Ar žiemos sodas gali būti prijungtas prie namo?",
    answer:
      "Taip, žiemos sodas gali būti projektuojamas kaip namo pratęsimas arba kaip atskiras statinys, priklausomai nuo erdvės ir konstrukcinių galimybių.",
  },
  {
    question: "Ar žiemos sodą galima naudoti žiemą?",
    answer:
      "Tai priklauso nuo konstrukcijos, stiklinimo ir šilumos izoliacijos sprendimų. Jei norite naudoti erdvę dažniau, reikia tai aptarti projektavimo pradžioje.",
  },
  {
    question: "Ar galima pasirinkti žiemos sodo formą ir spalvą?",
    answer: "Taip, žiemos sodas kuriamas individualiai, todėl galima derinti formą, spalvą ir stilių prie jūsų namo.",
  },
  {
    question: "Ar žiemos sodas tinka augalams?",
    answer:
      "Taip, tai viena dažniausių žiemos sodo paskirčių. Daug natūralios šviesos sukuria tinkamą erdvę augalams.",
  },
  {
    question: "Ar žiemos sodas padidina namų vertę?",
    answer:
      "Gerai suprojektuotas ir kokybiškai įrengtas žiemos sodas gali padidinti namų funkcionalumą, estetiką ir vertę.",
  },
];

const PROCESS: { title: string; description: string }[] = [
  {
    title: "Idėjos aptarimas",
    description:
      "Išsiaiškiname, kokios erdvės norite: poilsio zonos, augalų kampelio, namo pratęsimo ar atskiro statinio.",
  },
  {
    title: "Objekto įvertinimas",
    description:
      "Įvertiname namo konstrukciją, vietą, fasadą, kryptį pasaulio šalių atžvilgiu ir technines galimybes.",
  },
  {
    title: "Sprendimo parinkimas",
    description:
      "Parenkame konstrukcijos formą, stiklinimo sprendimą, spalvą, stilių ir kitus techninius elementus.",
  },
  {
    title: "Gamyba ir montavimas",
    description:
      "Paruošiame konstrukciją pagal suderintą sprendimą ir sumontuojame taip, kad žiemos sodas būtų stabilus, saugus ir ilgaamžis.",
  },
];

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

export function ZiemosSodaiPage() {
  return (
    <div className="w-full bg-white text-[#16216b]">
      <SalesHero
        backgroundImageSrc="/images/Ziemos sodai/ChatGPT Image May 7, 2026, 04_12_17 PM (2).png"
        ctaPrimary={{ label: "Gauti pasiūlymą", href: "/kontaktai#uzklausa" }}
        ctaSecondary={{ label: "Aptarti idėją", href: "/kontaktai#uzklausa" }}
        description="Sukurkite gamtos kampelį savo namuose – šviesią, nuo vėjo, lietaus ir sniego apsaugotą erdvę poilsiui, augalams, rytinei kavai ar ramioms akimirkoms visais metų laikais."
        stats={[
          { number: "50+", label: "Žiemos sodų projektų" },
          { number: "Individualus", label: "Kiekvienas projektas" },
          { number: "Garantija", label: "Įtraukta į kainą" },
        ]}
        primaryCtaReassurance
        title="Žiemos sodai šviesesnei ir jaukesnei namų erdvei"
      />

      <section className="w-full bg-white py-14 md:py-[100px]">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-4 px-4 text-center md:px-[70px]">
          <h2 className="text-3xl font-semibold leading-[1.18] tracking-[-0.032em] md:text-[45px] md:leading-[52px]">
            <span className="text-[#263cd0]">Žiemos sodų </span>
            <span className="text-[#16216b]">sistemos</span>
          </h2>
          <p className="max-w-[920px] text-base leading-relaxed text-[#16216b] md:text-[17px]">
            Pasirinkite sistemą pagal tai, kaip planuojate naudoti erdvę — visus metus ar tik šiltuoju sezonu.
          </p>
        </div>
        <ZiemosSodaiSystemTabs />
      </section>

      <section className="w-full bg-white px-4 py-16 md:px-[70px] md:py-[100px]" id="kas-yra-ziemos-sodas">
        <div className="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,420px)] lg:items-center lg:gap-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-semibold leading-[1.18] tracking-[-0.032em] md:text-[45px] md:leading-[52px]">
              <span className="text-[#263cd0]">Erdvė, kuri </span>
              <span className="text-[#16216b]">sujungia namus ir lauką</span>
            </h2>
            <p className="max-w-[52rem] text-base leading-relaxed text-[#16216b] md:text-[17px]">
              Žiemos sodas – tai stiklinė erdvė prie namo arba atskira konstrukcija, leidžianti mėgautis natūralia šviesa, gamtos vaizdu ir jaukumu net tada, kai lauke lyja, sninga ar pučia vėjas.
            </p>
            <p className="max-w-[52rem] text-base leading-relaxed text-[#16216b] md:text-[17px]">
              Tinkamai suprojektuotas žiemos sodas gali tapti poilsio zona, augalų erdve, valgomojo pratęsimu ar ramia vieta laikui su šeima. Kiekvienas projektas kuriamas individualiai pagal namo architektūrą, konstrukciją, erdvės paskirtį ir kliento poreikius.
            </p>
          </div>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl bg-[#dde4fc] lg:mx-0 lg:max-w-none">
            <ParallaxCoverImage
              alt="Žiemos sodo erdvė su natūralia šviesa"
              fill
              sizes="(max-width: 1023px) 100vw, 420px"
              src="/images/Ziemos sodai/ChatGPT Image May 7, 2026, 04_12_17 PM (3).png"
              style={{ objectPosition: "50% 40%" }}
            />
          </div>
        </div>
      </section>

      <ZiemosSodaiUseCasesSection />

      <section className="w-full bg-white" id="kodel-ziemos-sodas">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-4 pb-8 pt-4 md:flex-row md:items-center md:justify-between md:px-[70px] md:pb-8 md:pt-10">
          <div className="max-w-[min(100%,42rem)] space-y-4">
            <h2 className="text-3xl font-semibold leading-[1.18] tracking-[-0.032em] md:text-[45px] md:leading-[52px]">
              <span className="text-[#263cd0]">Daugiau komforto, šviesos </span>
              <span className="text-[#16216b]">ir vertės jūsų namams</span>
            </h2>
            <p className="max-w-[860px] text-base leading-relaxed text-[#16216b] md:text-[17px]">
              Žiemos sodas nėra tik stiklinė konstrukcija. Tai papildoma erdvė, kuri gali pagerinti namų mikroklimatą, suteikti daugiau šviesos ir padidinti būsto vertę.
            </p>
          </div>
        </div>
        <div className="mx-auto flex max-w-[1440px] flex-col gap-5 px-4 pb-16 pt-6 md:px-[70px] md:pb-[100px] md:pt-8 lg:pt-10 lg:grid lg:grid-cols-4 lg:gap-5">
          <div className="min-h-0 lg:col-start-1 lg:row-start-1">
            <BentoTopic body={WHY_ZIEMOS_SODAS[0].body} title={WHY_ZIEMOS_SODAS[0].title} />
          </div>

          <div className="relative min-h-[300px] overflow-hidden rounded-2xl bg-[#dde4fc] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:min-h-[520px]">
            <ParallaxCoverImage
              alt="Žiemos sodas namų komfortui"
              fill
              sizes="(max-width: 1023px) 100vw, 23vw"
              src="/images/Ziemos sodai/ChatGPT Image May 7, 2026, 04_12_17 PM (4).png"
              style={{ objectPosition: "50% 44%" }}
            />
          </div>

          <div className="min-h-0 lg:col-start-3 lg:row-start-1">
            <BentoTopic body={WHY_ZIEMOS_SODAS[1].body} title={WHY_ZIEMOS_SODAS[1].title} dark />
          </div>

          <div className="min-h-0 lg:col-start-4 lg:row-start-1">
            <BentoTopic body={WHY_ZIEMOS_SODAS[2].body} title={WHY_ZIEMOS_SODAS[2].title} />
          </div>

          <div className="relative min-h-[240px] overflow-hidden rounded-2xl bg-[#e8ebfa] lg:col-start-1 lg:row-start-2 lg:min-h-[260px]">
            <ParallaxCoverImage
              alt="Individualus žiemos sodo sprendimas"
              fill
              sizes="(max-width: 1023px) 100vw, 23vw"
              src="/images/Ziemos sodai/ChatGPT Image May 7, 2026, 04_12_17 PM (5).png"
              style={{ objectPosition: "50% 48%" }}
            />
          </div>

          <div className="min-h-0 lg:col-span-2 lg:col-start-3 lg:row-start-2">
            <BentoTopic body={WHY_ZIEMOS_SODAS[3].body} title={WHY_ZIEMOS_SODAS[3].title} />
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-16 md:py-[100px]" id="pritaikymas-ziemos-sodas">
        <div className="mx-auto w-full max-w-[1440px] px-4 md:px-[70px]">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-14">
            <div className="relative min-h-[360px] overflow-hidden rounded-2xl bg-[#e8ebfa] lg:min-h-[760px]">
              <ParallaxCoverImage
                alt="Žiemos sodo pritaikymo galimybės"
                fill
                sizes="(max-width: 1023px) 100vw, 46vw"
                src="/images/Ziemos sodai/ChatGPT Image May 7, 2026, 04_12_18 PM (6).png"
                style={{ objectPosition: "50% 46%" }}
              />
            </div>

            <div className="flex max-w-[560px] flex-col gap-10 lg:gap-12">
              <div className="space-y-4">
                <h2 className="text-3xl font-semibold leading-[1.18] tracking-[-0.032em] md:text-[45px] md:leading-[52px]">
                  <span className="text-[#263cd0]">Forma, stilius ir konstrukcija </span>
                  <span className="text-[#16216b]">pagal jūsų namus</span>
                </h2>
                <p className="text-base leading-relaxed text-[#16216b] md:text-[17px]">
                  Žiemos sodai projektuojami individualiai, todėl sprendimas gali būti pritaikytas prie skirtingų namų, aukštų, fasadų ir gyvenimo būdo.
                </p>
              </div>

              <div className="rounded-2xl bg-[#f6f7ff] p-8 md:p-10">
                <p className="mb-6 text-base font-semibold text-[#16216b] md:text-[17px]">Galima pritaikyti:</p>
                <ul className="flex flex-col gap-3">
                  {ADAPTATION_BULLETS.map((line) => (
                    <li className="flex items-center gap-3 text-[15px] leading-relaxed text-[#59799f] md:text-base" key={line}>
                      <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-[#263cd0]" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DurysComparisonTable
        columns={VS_TERRACE_COLUMNS}
        firstColumnLabel="Poreikis"
        headingLead="Kuris sprendimas"
        headingRest="jums tinkamesnis?"
        rows={VS_TERRACE_ROWS}
        sectionId="ziemos-sodas-ar-terasa"
      />

      <ComparisonTeaser
        ctaLabel="Gauti pasiūlymą"
        href="/kontaktai#uzklausa"
        title="Jeigu nesate tikri, ar jums labiau tinka terasos stiklinimas, ar žiemos sodas, atsiųskite namo ar terasos nuotrauką – padėsime įvertinti galimybes."
      />

      <DurysComparisonTable
        columns={PLANNING_COLUMNS}
        firstColumnLabel="Klausimas"
        headingLead="Ką verta įvertinti"
        headingRest="prieš kuriant žiemos sodą?"
        rows={PLANNING_ROWS}
        sectionId="planavimas-ziemos-sodas"
      />

      <CaseStudiesProjectsCarousel
        headingLead="Realūs klientų "
        headingRest="projektai"
        intro="Įgyvendinti žiemos sodų projektai iš tos pačios galerijos."
        projectCategories={CAROUSEL_CATEGORIES.ziemosSodai}
      />

      <ProcessSteps headingLine1="Kaip vyksta žiemos sodo įrengimas?" id="procesas-ziemos-sodas" steps={PROCESS} />

      <FaqSection
        faqIdPrefix="ziemos-sodai-faq"
        headingLead="Dažniausiai"
        headingRest="užduodami klausimai"
        items={FAQ}
        sectionId="duk-ziemos-sodai"
      />
    </div>
  );
}
