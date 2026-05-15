import Link from "next/link";

import { DurysComparisonTable } from "@/components/durys/DurysComparisonTable";
import { ProcessSteps, type ProcessStep } from "@/components/plastikiniai-langai/ProcessSteps";
import { SalesHero } from "@/components/plastikiniai-langai/SalesHero";
import { FaqSection } from "@/components/plastikiniai-langai/FaqSection";
import { CaseStudiesProjectsCarousel } from "@/components/plastikiniai-langai/CaseStudiesProjectsCarousel";
import { FeatureHoverCard } from "@/components/ui/FeatureHoverCard";
import { ParallaxCoverImage } from "@/components/ui/ParallaxCoverImage";
import { CAROUSEL_CATEGORIES } from "@/data/implemented-projects";
import { PLASTIKINES_STUMDOMOS_FAQ } from "@/data/structured-data-faqs";

const VIDEO_EMBED_URL = "https://www.youtube.com/embed/JPYr8x_Z-A4";
const STUMDOMOS_IMAGES = {
  hero: "/images/Stumdomos sistemos/ChatGPT Image May 7, 2026, 02_45_46 PM (1).png",
  terrace: "/images/Stumdomos sistemos/ChatGPT Image May 7, 2026, 02_44_31 PM (2).png",
  balcony: "/images/Stumdomos sistemos/ChatGPT Image May 7, 2026, 02_44_31 PM (3).png",
  living: "/images/Stumdomos sistemos/ChatGPT Image May 7, 2026, 02_45_46 PM (2).png",
} as const;

const BENEFIT_CARD_HEADING =
  "text-xl font-semibold leading-[1.25] tracking-[-0.04em] md:text-[25px] md:leading-[30px]";

const USE_CASES = [
  {
    title: "Terasoms",
    body: "Plastikinė stumdoma sistema terasoje suteikia patogų išėjimą iš gyvenamosios patalpos į lauko zoną be papildomos varstymo erdvės. Stiklo paneliai praleidžia maksimalią natūralią šviesą, todėl namuose tampa šviesiau ištisus metus. Tinka standartinėms terasų angoms iki maždaug 3–4 metrų pločio, kur svarbu ekonomiškas sprendimas ir geras šilumos izoliacijos lygis.",
    imageUrl: STUMDOMOS_IMAGES.terrace,
  },
  {
    title: "Balkonams",
    body: "Balkonams plastikinė stumdoma sistema yra dažniausiai pasirenkamas sprendimas daugiabučiuose ir individualiuose namuose. Stumdomos varčios užima minimaliai vietos, todėl balkone lieka daugiau erdvės baldams, augalams ar laikomiems daiktams. Sistema apsaugo nuo lietaus, vėjo ir dulkių, o tinkamas stiklo paketas užtikrina šilumos izoliaciją netgi šaltesniu sezonu.",
    imageUrl: STUMDOMOS_IMAGES.balcony,
  },
  {
    title: "Gyvenamosioms erdvėms",
    body: "Vidinėms gyvenamosioms erdvėms plastikinės stumdomos sistemos naudojamos zonų atskyrimui – tarp svetainės ir valgomojo, virtuvės ir gyvenamosios zonos, ar pereinant tarp kambarių. Stumdomas sprendimas leidžia atverti ar uždaryti erdvę pagal poreikį, nereikalauja papildomos zonos durims atidaryti, todėl tinka net mažesniems butams ir kompaktiškiems namams.",
    imageUrl: STUMDOMOS_IMAGES.living,
  },
] as const;

const WHY_CHOOSE_CARDS = [
  {
    title: "Šilumos izoliacija",
    body: "Plastikinis profilis su daugiakameriniu sandariu užtikrina gerą šilumos izoliaciją. Tinkamai parinktas stiklo paketas (dvigubas arba trigubas) leidžia naudoti sistemą ne tik vasarą, bet ir šaltesnį sezoną, sumažinant šilumos nuostolius iš patalpos.",
  },
  {
    title: "Garso izoliacija",
    body: "Stumdomos sistemos su kokybiškomis sandarinimo tarpinėmis efektyviai mažina iš lauko sklindantį triukšmą. Tai ypač aktualu balkonams prie judrių gatvių ar terasoms miesto centre, kur svarbu ramybė namuose.",
  },
  {
    title: "Ekonomiškas sprendimas",
    body: "Plastikinės sistemos yra reikšmingai ekonomiškesnės už aliuminio analogus, todėl tai populiariausias pasirinkimas standartinėms balkonų ir terasų angoms. Investicija greitai atsiperka per šildymo sąskaitų taupymą ir patogesnį naudojimą.",
  },
  {
    title: "Paprasta priežiūra",
    body: "Plastikinis profilis nereikalauja periodinio dažymo ar specialios priežiūros – pakanka periodiškai nuvalyti drėgnu skudurėliu. Stiklai valomi standartiniais langams skirtais valikliais, todėl priežiūra tampa kasdienės rutinos dalimi.",
  },
] as const;

const BENEFITS = [
  {
    title: "Taupo vietą",
    body: "Skirtingai nei varstomos varčios, stumdoma konstrukcija nereikalauja papildomos zonos atidarymui. Tai leidžia statyti baldus arti angos arba išnaudoti visą patalpos planą be apribojimų. Ypač svarbu mažesniuose butuose, balkonuose ir kompaktiškose terasose, kur kiekvienas kvadratinis metras turi reikšmę.",
  },
  {
    title: "Ekonomiškesnis pasirinkimas",
    body: "Plastikinės stumdomos sistemos dažniausiai yra racionalesnis pasirinkimas standartinėms balkonų, terasų ir vidinių durų angoms. Mažesnės pradinės investicijos kartu su geru šilumos izoliacijos lygiu daro jas patrauklesnėmis daugumai gyvenamųjų projektų, kuriuose nereikia ypatingo profilio plonumo ar ypač didelių stiklo plokštumų.",
  },
  {
    title: "Lengva priežiūra",
    body: "Plastikinių stumdomų sistemų priežiūra paprasta ir nereikalauja specialių priemonių. Profilis valomas drėgnu skudurėliu, stiklas – standartiniais langams skirtais valikliais, o sandarinimo tarpinės užtenka tikrinti kartą per metus. Sistemos mechanizmai sukurti ilgai eksploatacijai be papildomo aptarnavimo.",
  },
] as const;

const COMPARISON_COLUMNS = [
  { key: "plastic", label: "Plastikinės" },
  { key: "aluminum", label: "Aliuminės" },
] as const;

const COMPARISON_ROWS = [
  {
    feature: "Šilumos izoliacija",
    values: {
      plastic: "Geresnė (daugiakameris profilis)",
      aluminum: "Gera (su thermal break)",
    },
  },
  {
    feature: "Kaina",
    values: {
      plastic: "Ekonomiškesnis pasirinkimas",
      aluminum: "Aukštesnė investicija",
    },
  },
  {
    feature: "Maksimali angos plotis",
    values: {
      plastic: "Iki standartinio (3–4 m)",
      aluminum: "Iki didesnių angų (6+ m)",
    },
  },
  {
    feature: "Profilio storis",
    values: {
      plastic: "Storesnis (matomesnis)",
      aluminum: "Plonesnis (daugiau šviesos)",
    },
  },
  {
    feature: "Estetika",
    values: {
      plastic: "Klasikinė",
      aluminum: "Modernesnė, minimalistinė",
    },
  },
  {
    feature: "Tinka",
    values: {
      plastic: "Balkonai, terasos, vidaus erdvės",
      aluminum: "Didelės terasos, vitrinos, komerciniai objektai",
    },
  },
  {
    feature: "Eksploatacija",
    values: {
      plastic: "25–35 metai",
      aluminum: "50+ metų",
    },
  },
] as const;

const PROCESS: readonly ProcessStep[] = [
  {
    title: "Konsultacija",
    description:
      "Susitinkame su klientu objekte arba aptariame projektą per nuotolinę konsultaciją. Išsiaiškiname angos paskirtį, norimą sistemos tipą, stiklo specifikaciją ir biudžetą. Šiauliuose konsultaciją galime atlikti objekte be papildomų kaštų.",
  },
  {
    title: "Matavimas",
    description:
      "Atvykstame į objektą ir atliekame tikslius matavimus – angos pločio, aukščio, sienos storio, montavimo paviršiaus būklės. Įvertiname montavimo galimybes ir identifikuojame galimas problemas dar prieš gamybą.",
  },
  {
    title: "Gamyba",
    description:
      "Sistema pagaminama pagal patvirtintus matmenis ir specifikaciją. Standartinis pristatymo laikas patvirtinamas užsakymo metu, priklausomai nuo apimties ir sezono.",
  },
  {
    title: "Montavimas",
    description:
      "Patyrę montuotojai sumontuoja sistemą per 1 dieną standartiniame projekte. Patikriname sklandų stumdymo mechanizmą, sandarumą ir suteikiame garantiją tiek konstrukcijai, tiek darbams.",
  },
];

const RELATED_SOLUTIONS = [
  {
    title: "Aliuminės stumdomos sistemos",
    description:
      "Didesnėms angoms, vitrinoms ir reprezentatyviems projektams. DP 100/150/180 ir L 50 sistemos – plonas profilis, modernus dizainas.",
    href: "/stumdomos-sistemos/aliumines-stumdomos-sistemos",
  },
  {
    title: "Balkonų stiklinimas",
    description:
      "Pilnas balkonų stiklinimas plastiku arba aliuminiu. Apsauga nuo vėjo, lietaus, sniego ir triukšmo – sprendimai standartiniams ir nestandartiniams balkonams.",
    href: "/stiklinimas/balkonu-stiklinimas",
  },
  {
    title: "Plastikiniai langai",
    description:
      "Kömmerling, Wital ir Veka plastikinių langų sistemos – šilumos izoliacija, sandarumas, ilgaamžiškumas. Sprendimai renovacijai ir naujai statybai.",
    href: "/langai/plastikiniai-langai",
  },
] as const;

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
        heroSubtitle="Sprendimai balkonams, terasoms ir namams – šilumos izoliacija, ekonomiškas pasirinkimas."
        title="Plastikinės stumdomos sistemos Šiauliuose"
      />

      <section className="w-full bg-white px-4 py-14 md:px-[70px] md:py-[100px]" id="kas-yra-plastikines-stumdomos">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="max-w-[min(100%,44rem)] text-3xl font-semibold leading-[1.18] tracking-[-0.032em] md:text-[45px] md:leading-[52px]">
            <span className="text-[#263cd0]">Kas yra plastikinės </span>
            <span className="text-[#16216b]">stumdomos sistemos</span>
          </h2>
          <div className="mt-6 max-w-[52rem] space-y-5 text-base leading-relaxed text-[#16216b] md:mt-8 md:text-[17px]">
            <p>
              Plastikinės stumdomos sistemos – tai konstrukcijos, kuriose stiklo paneliai slidinėja šoninėmis
              kreipiamosiomis arba paraleliai sienai, vietoj įprasto atidarymo į vidų ar į išorę. Šis sprendimas
              idealiai tinka tada, kai svarbu sutaupyti vietą prie angos, nes nereikia palikti tarpo varčios
              atidarymui.
            </p>
            <p>
              Plastikinės stumdomos sistemos Šiauliuose ir visoje Lietuvoje plačiai naudojamos balkonams, terasoms ir
              vidaus erdvėms tarp gyvenamų patalpų. Skirtingai nei aliuminis, plastikiniai profiliai yra šiltesni,
              ekonomiškesni ir tinkami standartinėms angoms gyvenamosiose patalpose. Tai populiariausias pasirinkimas
              daugiabučių balkonams ir privatiems namams su standartinio dydžio terasomis.
            </p>
            <p>
              Sistema dažnai pasirenkama vietoj klasikinių varstomų durų ar langų, nes ji leidžia geriau išnaudoti
              patalpos planą – baldai gali būti pastatyti arti angos, neribojant varčios judėjimo erdvės.
            </p>
          </div>
        </div>
      </section>

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
            <p className="text-base leading-relaxed text-[#16216b] md:text-[17px]">
              Plastikinės stumdomos sistemos yra universalios – tinka tiek lauko zonoms, tiek vidaus erdvių zonavimui.
              Žemiau – pagrindiniai pritaikymo scenarijai, kuriuose šis sprendimas geriausiai atsiskleidžia.
            </p>
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
                <p className="mt-2 text-[14px] leading-relaxed text-[#16216b] md:text-[15px]">{card.body}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="w-full bg-white pb-14 md:pb-[100px]" id="kodel-plastikine-stumdoma-sistema">
        <div className="mx-auto max-w-[1440px] px-4 md:px-[70px]">
          <h2 className="max-w-[min(100%,44rem)] text-3xl font-semibold leading-[1.18] tracking-[-0.032em] md:text-[45px] md:leading-[52px]">
            <span className="text-[#263cd0]">Kodėl rinktis </span>
            <span className="text-[#16216b]">plastikinę stumdomą sistemą</span>
          </h2>
          <p className="mt-4 max-w-[920px] text-base leading-relaxed text-[#16216b] md:text-[17px]">
            Plastikinė stumdoma sistema sujungia kelis pranašumus, kurie kartu kuria praktišką ir ekonomišką
            sprendimą kasdieniam naudojimui.
          </p>
        </div>
        <div className="mx-auto mt-8 grid max-w-[1440px] gap-4 px-4 md:mt-10 md:grid-cols-2 md:gap-4 md:px-[70px] lg:grid-cols-4">
          {WHY_CHOOSE_CARDS.map((card) => (
            <FeatureHoverCard
              description={card.body}
              headingClassName={BENEFIT_CARD_HEADING}
              key={card.title}
              title={card.title}
            />
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
        headingIntro="Plastikinės ir aliuminės stumdomos sistemos tinka skirtingiems projektams. Palyginimas padeda greičiau įvertinti, kuris sprendimas atitinka jūsų angos dydį, biudžetą ir estetinius lūkesčius."
        headingLead="Aliuminės ar plastikinės"
        headingRest="stumdomos sistemos?"
        rows={COMPARISON_ROWS}
        sectionId="plastikiniu-ir-aliuminiu-palyginimas"
      />

      <div className="w-full bg-white pb-12 md:pb-16">
        <div className="mx-auto max-w-[1440px] px-4 md:px-[70px]">
          <p className="max-w-[920px] text-base leading-relaxed text-[#16216b] md:text-[17px]">
            Plastikinės stumdomos sistemos pasirinkite, jei svarbi pradinė kaina, gera šilumos izoliacija ir
            standartinio dydžio anga (balkonai, mažos-vidutinės terasos, vidinės pertvaros). Aliuminės sistemos labiau
            tinka, kai reikia maksimaliai plonesnio profilio, didesnių stiklo plokštumų ar modernaus dizaino.
            Komerciniams pastatams, vitrinoms ar dideliems terasų sprendimams dažniau pasirenkame aliuminį.
          </p>
        </div>
      </div>

      <FaqSection
        faqIdPrefix="plastikines-stumdomos-faq"
        headingLead="Jūsų klausimai – "
        headingRest="aiškūs atsakymai"
        items={PLASTIKINES_STUMDOMOS_FAQ}
        sectionId="duk-plastikines-stumdomos"
      />

      <ProcessSteps
        headingLine1="Kaip vyksta plastikinių stumdomų sistemų užsakymas?"
        id="procesas-plastikines-stumdomos"
        steps={PROCESS}
      />

      <section className="w-full bg-white py-16 md:py-[100px]" id="susije-stumdomos-sprendimai">
        <div className="mx-auto max-w-[1440px] px-4 md:px-[70px]">
          <h2 className="text-3xl font-semibold leading-[1.18] tracking-[-0.032em] md:text-[45px] md:leading-[52px]">
            <span className="text-[#263cd0]">Susiję </span>
            <span className="text-[#16216b]">sprendimai</span>
          </h2>
          <p className="mt-4 max-w-[920px] text-base leading-relaxed text-[#16216b] md:text-[17px]">
            Plastikinė stumdoma sistema gali būti dalis didesnio sprendimo. Jei jūsų projektui reikia papildomų
            konstrukcijų – štai mūsų siūlomos susijusios paslaugos:
          </p>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-4">
            {RELATED_SOLUTIONS.map((item) => (
              <article
                className="flex min-h-[280px] flex-col justify-between gap-6 rounded-2xl bg-[#f6f7ff] p-8 md:min-h-[300px]"
                key={item.href}
              >
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold leading-snug tracking-[-0.03em] text-[#263cd0] md:text-2xl">
                    {item.title}
                  </h3>
                  <p className="text-base leading-relaxed text-[#16216b]">{item.description}</p>
                </div>
                <Link
                  className="inline-flex w-fit items-center justify-center rounded-full border-2 border-[#263cd0] bg-transparent px-6 py-3 text-[14px] font-semibold text-[#263cd0] transition hover:bg-[#263cd0] hover:text-white md:px-8 md:py-[13px] md:text-[15px]"
                  href={item.href}
                >
                  Sužinoti daugiau
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
