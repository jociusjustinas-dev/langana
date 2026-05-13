import Link from "next/link";

import { KodelLanganaSolutionsCarousel } from "@/components/about/KodelLanganaSolutionsCarousel";
import { HeroPatternLangaiCategoryBand } from "@/components/home/HeroPattern";
import { ProcessSteps } from "@/components/plastikiniai-langai/ProcessSteps";
import { FaqSection } from "@/components/plastikiniai-langai/FaqSection";
import { FeatureHoverCard } from "@/components/ui/FeatureHoverCard";
import { ParallaxCoverImage } from "@/components/ui/ParallaxCoverImage";

const VALUES = [
  {
    title: "Platus gaminių pasirinkimas",
    body: "Langai, durys, balkonų stiklinimas, vitrinos, pertvaros, terasos ir žiemos sodai - vienoje vietoje galite rasti sprendimą skirtingiems namų ar verslo poreikiams.",
  },
  {
    title: "Profesionalus projektavimas ir montavimas",
    body: "Įmonėje dirba specialistai, kurie konsultuoja, projektuoja ir montuoja gaminius. Tai leidžia užtikrinti sklandų procesą nuo idėjos iki galutinio rezultato.",
  },
  {
    title: "Greitas ir kokybiškas darbų atlikimas",
    body: "Senų langų demontavimo, naujų langų montavimo ir apdailos darbai atliekami greitai ir kokybiškai. Kai kuriais atvejais naujais langais galima džiaugtis jau po 5 dienų nuo užsakymo pradžios.",
  },
  {
    title: "Garantinis ir pogarantinis aptarnavimas",
    body: "Visai produkcijai suteikiamas garantinis ir pogarantinis aptarnavimas, todėl klientai gali jaustis saugiau ir po darbų užbaigimo.",
  },
] as const;

const PROCESS = [
  {
    title: "Konsultacija",
    description: "Išsiaiškiname jūsų poreikį, objektą, norimą rezultatą, techninius reikalavimus ir biudžetą.",
  },
  {
    title: "Sprendimo parinkimas",
    description: "Parenkame tinkamiausią gaminį ar sistemą pagal paskirtį, energinius poreikius, dizainą ir naudojimo sąlygas.",
  },
  {
    title: "Projektavimas ir gamyba",
    description: "Paruošiame sprendimą pagal objekto matmenis ir suderintas technines detales.",
  },
  {
    title: "Montavimas ir apdaila",
    description: "Atliekame senų gaminių demontavimą, naujų montavimą ir reikalingus apdailos darbus.",
  },
  {
    title: "Garantinė priežiūra",
    description: "Po darbų suteikiame garantinį ir pogarantinį aptarnavimą.",
  },
] as const;

/** 4 svarbiausi privalumai — tas pats split + eilučių blokas kaip `TerasuValueFeaturesSection` */
const PARTNER_FEATURES = [
  {
    title: "Specialistų komanda",
    description:
      "Konsultacija, projektavimas ir montavimas vyksta vienose rankose – aiškus kelias nuo pirmo pokalbio iki sumontuoto sprendimo.",
  },
  {
    title: "Kokybiški gaminiai",
    description: "Sprendimai parenkami pagal techninius reikalavimus, objekto sąlygas ir naudojimo poreikį.",
  },
  {
    title: "Montavimas ir apdaila",
    description: "Pasirūpinama ne tik gaminiu, bet ir senų konstrukcijų demontavimu, naujų montavimu bei apdailos darbais.",
  },
  {
    title: "Garantinė priežiūra",
    description: "Po darbų suteikiamas garantinis ir pogarantinis aptarnavimas, kad jaustumėtės ramiai ir vėliau.",
  },
] as const;

const AUDIENCES = [
  {
    title: "Privatiems klientams",
    body: "Padedame pasirinkti ir įrengti langus, duris, balkono ar terasos stiklinimą, žiemos sodus ir kitus sprendimus namams.",
  },
  {
    title: "Įmonėms",
    body: "Siūlome aliuminio konstrukcijas, vitrinas, pertvaras, fasadus, duris ir kitus sprendimus komerciniams ar projektiniams objektams.",
  },
  {
    title: "Projektiniams objektams",
    body: "Galime prisidėti prie nestandartinių sprendimų, kuriems svarbūs matmenys, konstrukcija, techniniai reikalavimai ir montavimo kokybė.",
  },
] as const;

const FAQ = [
  {
    question: "Ar Langana dirba tik su privačiais klientais?",
    answer: "Ne, dirbame tiek su privačiais klientais, tiek su įmonėmis ir projektiniais objektais.",
  },
  {
    question: "Ar atliekate montavimo darbus?",
    answer: "Taip, atliekame gaminių montavimą, o prireikus - ir senų langų demontavimo bei apdailos darbus.",
  },
  {
    question: "Ar suteikiate garantiją?",
    answer: "Taip, visai produkcijai suteikiamas garantinis ir pogarantinis aptarnavimas.",
  },
  {
    question: "Ar galite padėti pasirinkti tinkamą sprendimą?",
    answer: "Taip, konsultuojame ir padedame parinkti gaminį pagal objektą, poreikius, techninius reikalavimus ir biudžetą.",
  },
  {
    question: "Ar gaminius pristatote tik Šiauliuose?",
    answer: "Gamyba vykdoma Šiauliuose, tačiau gaminius galima pristatyti ir montuoti skirtingose Lietuvos vietose.",
  },
] as const;

const HERO_IMAGE = "/images/Langai/ChatGPT Image May 7, 2026, 02_58_42 PM (5).png";
const INTRO_SPLIT_IMAGE = "/images/Langai/ChatGPT Image May 7, 2026, 02_58_42 PM (5).png";
const PARTNER_SECTION_IMAGE = "/images/Langai/ChatGPT Image May 7, 2026, 02_58_41 PM (3).png";

/** Bento kortelės — ta pati struktūra kaip `ZiemosSodaiPage` „Daugiau komforto…“ sekcijoje */
const VALUE_BENTO_IMAGES = {
  tall: "/images/Langai/ChatGPT Image May 7, 2026, 02_58_41 PM (1).png",
  small: "/images/Durys/ChatGPT Image May 7, 2026, 03_18_39 PM (1).png",
} as const;

function PartnerFeatureRow({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex flex-col gap-5">
      <div className="h-px w-full bg-[#263cd0]/16" />
      <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-2">
        <span
          aria-hidden
          className="row-start-1 size-2 shrink-0 self-center rounded-full bg-[#263cd0]"
        />
        <h3 className="col-start-2 row-start-1 text-[22px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#16216b]">
          {title}
        </h3>
        <p className="col-start-2 row-start-2 text-[16px] leading-relaxed text-[#16216b]">{description}</p>
      </div>
    </div>
  );
}

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

export function KodelLanganaPage() {
  return (
    <div className="w-full bg-white text-[#16216b]">
      <section className="langana-flush-under-site-header relative overflow-hidden bg-white">
        <div className="relative langana-site-header-clearance">
          <HeroPatternLangaiCategoryBand />
          <div className="relative z-10 mx-auto max-w-[1440px] px-4 pb-12 pt-16 md:px-[70px] md:pb-[100px] md:pt-[100px]">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-10">
            <div className="lg:sticky lg:top-28 lg:min-w-0 lg:flex-1 lg:self-start">
              <h1 className="text-4xl font-semibold leading-[1.15] tracking-[-0.026em] md:text-[55px] md:leading-[64px]">
                <span className="text-[#263cd0]">Kodėl rinktis </span>
                <span className="text-[#16216b]">Langana?</span>
              </h1>
              <div className="mt-6 flex flex-col gap-2">
                <div className="flex w-full min-w-0 flex-row flex-nowrap items-stretch gap-2 sm:gap-3">
                  <Link
                    className="inline-flex min-h-[48px] min-w-0 flex-1 basis-0 items-center justify-center rounded-full bg-[#263cd0] px-3 py-2.5 text-center text-[13px] font-semibold leading-snug text-white transition hover:bg-[#1e31a8] sm:px-5 sm:text-[14px] md:px-8 md:py-[15px] md:text-[15px] md:leading-normal"
                    href="/kontaktai#uzklausa"
                  >
                    Gauti pasiūlymą
                  </Link>
                  <Link
                    className="inline-flex min-h-[48px] min-w-0 flex-1 basis-0 items-center justify-center rounded-full border border-[#263cd0] bg-white px-3 py-2.5 text-center text-[13px] font-semibold leading-snug text-[#263cd0] transition hover:bg-[#f6f7ff] sm:px-5 sm:text-[14px] md:px-8 md:py-[13px] md:text-[15px] md:leading-normal"
                    href="#sprendimai"
                  >
                    Peržiūrėti sprendimus
                  </Link>
                </div>
                <p className="text-[13px] font-medium text-[#16216b]">
                  Nemokamai · Atsakome per 24 val. · Jokių įsipareigojimų
                </p>
              </div>
            </div>
            <div className="flex max-w-[560px] flex-col gap-6 lg:shrink-0">
              <p className="text-base leading-6 text-[#16216b]">
                Projektuojame, gaminame ir montuojame langus, duris, stiklinimo bei aliuminio konstrukcijų sprendimus privatiems klientams ir įmonėms. UAB „Langana“ siūlo platų gaminių pasirinkimą: plastikinius langus ir duris, balkonų stiklinimo konstrukcijas, aliuminio ir grūdinto stiklo sprendimus, stiklines vitrinas, pertvaras, terasas ir žiemos sodus.
              </p>
            </div>
          </div>

          <div className="relative mt-6 aspect-[16/10] w-full overflow-hidden rounded-2xl md:mt-10 md:h-[521px] md:aspect-auto">
            <ParallaxCoverImage alt="" fill priority sizes="(max-width: 768px) 100vw, 1300px" src={HERO_IMAGE} />
            <div aria-hidden className="absolute inset-0 rounded-[inherit] bg-black/20" />
          </div>
        </div>
        </div>
      </section>

      <section className="w-full bg-white px-4 py-14 md:px-[70px] md:py-[100px]">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-12 xl:gap-14">
          <div className="flex min-h-0 min-w-0 flex-col gap-5 lg:max-w-none lg:justify-center">
            <h2 className="text-3xl font-semibold leading-[1.18] tracking-[-0.032em] md:text-[45px] md:leading-[52px]">
              <span className="text-[#263cd0]">Langana – </span>
              <span className="text-[#16216b]">nuo konsultacijos iki sumontuoto sprendimo</span>
            </h2>
            <p className="max-w-[52rem] text-base leading-relaxed text-[#16216b] md:text-[17px]">
              Dirbame su privačiais klientais ir įmonėmis, kuriems svarbu kokybiški gaminiai, aiškus procesas ir profesionalus montavimas. Mūsų komanda konsultuoja, projektuoja, gamina ir montuoja sprendimus pagal konkretaus objekto poreikius.
            </p>
            <p className="max-w-[52rem] text-base leading-relaxed text-[#16216b] md:text-[17px]">
              Kiekvienas projektas prasideda nuo poreikio įvertinimo. Parenkame tinkamą gaminį pagal pastato tipą, techninius reikalavimus, dizainą ir biudžetą. Pasirūpiname ne tik gamyba, bet ir senų langų demontavimu, naujų gaminių montavimu bei apdailos darbais.
            </p>
          </div>
          <div className="relative mx-auto aspect-[4/3] min-h-[240px] w-full max-w-lg overflow-hidden rounded-2xl bg-[#e8ebfa] lg:mx-0 lg:max-w-none lg:aspect-auto lg:min-h-[min(100%,420px)] lg:self-stretch">
            <ParallaxCoverImage
              alt="Langana konsultacija, gamyba ir montavimas"
              fill
              sizes="(max-width: 1023px) 100vw, 45vw"
              src={INTRO_SPLIT_IMAGE}
              style={{ objectPosition: "50% 45%" }}
            />
          </div>
        </div>
      </section>

      <section className="w-full bg-white" id="vertes">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-4 pb-8 pt-4 md:flex-row md:items-end md:justify-between md:gap-[100px] md:px-[70px] md:pb-8 md:pt-10">
          <h2 className="max-w-[min(100%,42rem)] text-3xl font-semibold leading-[1.18] tracking-[-0.032em] md:text-[45px] md:leading-[52px]">
            <span className="text-[#263cd0]">Kokybė, kompetencija </span>
            <span className="text-[#16216b]">ir greitas darbų atlikimas</span>
          </h2>
          <p className="max-w-[min(100%,34rem)] text-base leading-relaxed text-[#16216b] md:text-[17px]">
            Mūsų tikslas - išpildyti kliento poreikį taip, kad sprendimas būtų patikimas, estetiškas ir ilgaamžis.
          </p>
        </div>
        <div className="mx-auto flex max-w-[1440px] flex-col gap-5 px-4 pb-16 pt-6 md:px-[70px] md:pb-[100px] md:pt-8 lg:pt-10 lg:grid lg:grid-cols-4 lg:gap-5">
          <div className="min-h-0 lg:col-start-1 lg:row-start-1">
            <BentoTopic body={VALUES[0].body} title={VALUES[0].title} />
          </div>

          <div className="relative min-h-[300px] overflow-hidden rounded-2xl bg-[#dde4fc] lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:min-h-[520px]">
            <ParallaxCoverImage
              alt="Langana kokybė ir gaminiai"
              fill
              sizes="(max-width: 1023px) 100vw, 23vw"
              src={VALUE_BENTO_IMAGES.tall}
              style={{ objectPosition: "50% 44%" }}
            />
          </div>

          <div className="min-h-0 lg:col-start-3 lg:row-start-1">
            <BentoTopic body={VALUES[1].body} dark title={VALUES[1].title} />
          </div>

          <div className="min-h-0 lg:col-start-4 lg:row-start-1">
            <BentoTopic body={VALUES[2].body} title={VALUES[2].title} />
          </div>

          <div className="relative min-h-[240px] overflow-hidden rounded-2xl bg-[#e8ebfa] lg:col-start-1 lg:row-start-2 lg:min-h-[260px]">
            <ParallaxCoverImage
              alt="Langana montavimas ir darbai"
              fill
              sizes="(max-width: 1023px) 100vw, 23vw"
              src={VALUE_BENTO_IMAGES.small}
              style={{ objectPosition: "50% 48%" }}
            />
          </div>

          <div className="min-h-0 lg:col-span-2 lg:col-start-3 lg:row-start-2">
            <BentoTopic body={VALUES[3].body} title={VALUES[3].title} />
          </div>
        </div>
      </section>

      <KodelLanganaSolutionsCarousel />

      <ProcessSteps headingLine1="Kaip vyksta darbas su Langana?" id="procesas-kodel-langana" steps={PROCESS} />

      <section className="relative z-[2] w-full bg-white py-16 md:py-[100px]" id="partneris">
        <div className="mx-auto w-full max-w-[1440px] px-4 md:px-[70px]">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10 xl:gap-14">
            <div className="relative min-h-[360px] overflow-hidden rounded-2xl bg-[#e8ebfa] lg:min-h-[min(100%,640px)]">
              <ParallaxCoverImage
                alt="Langana komanda ir montavimo kokybė"
                fill
                loading="lazy"
                sizes="(max-width: 1023px) 100vw, 46vw"
                src={PARTNER_SECTION_IMAGE}
                style={{ objectPosition: "50% 42%" }}
              />
            </div>

            <div className="flex max-w-[560px] flex-col gap-12 lg:gap-16 xl:gap-20">
              <div>
                <h2 className="text-3xl font-semibold leading-[1.12] tracking-[-0.03em] text-[#16216b] md:text-[45px] md:leading-[52px]">
                  <span className="text-[#263cd0]">Patikimas partneris </span>
                  <span className="text-[#16216b]">nuo pirmo pokalbio iki galutinio rezultato</span>
                </h2>
              </div>

              <div className="flex flex-col gap-6">
                {PARTNER_FEATURES.map((feature) => (
                  <PartnerFeatureRow description={feature.description} key={feature.title} title={feature.title} />
                ))}
                <div className="h-px w-full bg-[#263cd0]/16" />
              </div>

              <div>
                <Link
                  className="inline-flex w-fit shrink-0 items-center justify-center rounded-full bg-[#263cd0] px-8 py-[15px] text-[15px] font-semibold text-white transition hover:bg-[#1e31a8]"
                  href="/kontaktai#uzklausa"
                >
                  Gauti pasiūlymą
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white" id="kam-dirbame">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-4 md:px-[70px]">
          <h2 className="text-3xl font-semibold leading-[1.18] tracking-[-0.032em] md:text-[45px] md:leading-[52px]">
            <span className="text-[#263cd0]">Privatiems klientams </span>
            <span className="text-[#16216b]">ir įmonėms</span>
          </h2>
        </div>
        <div className="mx-auto mt-8 grid max-w-[1440px] gap-4 px-4 pb-16 md:mt-10 md:grid-cols-3 md:px-[70px] md:pb-[100px]">
          {AUDIENCES.map((item) => (
            <FeatureHoverCard
              className="min-h-[250px] md:min-h-[300px]"
              description={item.body}
              headingClassName="text-[24px] leading-[1.15] md:text-[26px] md:leading-[1.15]"
              key={item.title}
              title={item.title}
            />
          ))}
        </div>
      </section>

      <FaqSection
        faqIdPrefix="kodel-langana-faq"
        headingLead="Dažniausiai"
        headingRest="užduodami klausimai"
        items={FAQ}
        sectionId="duk-kodel-langana"
      />

    </div>
  );
}

