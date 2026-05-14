import Link from "next/link";

import { AliuminioPertvarosTabs } from "@/components/aliuminio-sprendimai/AliuminioPertvarosTabs";
import { DurysComparisonTable } from "@/components/durys/DurysComparisonTable";
import { CaseStudiesProjectsCarousel } from "@/components/plastikiniai-langai/CaseStudiesProjectsCarousel";
import { FaqSection } from "@/components/plastikiniai-langai/FaqSection";
import { ProcessSteps, type ProcessStep } from "@/components/plastikiniai-langai/ProcessSteps";
import { SalesHero } from "@/components/plastikiniai-langai/SalesHero";
import { FeatureHoverCard } from "@/components/ui/FeatureHoverCard";
import { ALUMINUM_PARTITIONS_PRODUCTS } from "@/data/aliuminio-pertvaros-products";
import { CAROUSEL_CATEGORIES } from "@/data/implemented-projects";
import { ALIUMINIO_PERTVAROS_FAQ } from "@/data/structured-data-faqs";

const BENEFIT_CARD_HEADING =
  "text-xl font-semibold leading-[1.25] tracking-[-0.04em] md:text-[25px] md:leading-[30px]";

const PERTVAROS_WHY_CARDS = [
  {
    title: "Maksimali natūrali šviesa",
    body: "Skirtingai nei nepermatomos sienos, stiklo pertvaros leidžia šviesai laisvai sklisti per visą patalpą. Tai ypač svarbu giliuose ofisuose ar patalpose su mažiau langų.",
  },
  {
    title: "Akustinis komfortas",
    body: "Tinkamai parinkta stiklo storio ir tarpinio sluoksnio kombinacija užtikrina gerą garso izoliaciją – nuo 35 iki 45 dB priklausomai nuo sprendimo. Ramios darbo zonos įmanomos ir atviro plano ofisuose.",
  },
  {
    title: "Modulinis sprendimas",
    body: "Pertvaras galima išmontuoti, perkelti ar perkonfigūruoti pakeičiant patalpos paskirtį. Tai ekonomiškas sprendimas augančioms įmonėms ar nuomojamoms erdvėms.",
  },
  {
    title: "Higienos reikalavimai",
    body: "Stiklo paviršiai lengvai valomi ir dezinfekuojami. Pertvaros tinka klinikose, laboratorijose, maisto pramonės objektuose ir kitose patalpose su griežtais higienos reikalavimais.",
  },
  {
    title: "Reprezentatyvi išvaizda",
    body: "Modernus, švarus dizainas suteikia patalpoms profesionalią atmosferą. Stiklas gali būti permatomas, matinis, su tinkleliu, su spauda ar su privatumo plėvele – pagal projekto poreikį.",
  },
  {
    title: "Aliuminio profilio variantai",
    body: "Profiliai dažomi miltelinio dažymo metodu iš pilnos RAL spalvų paletės. Galima rinktis minimalistines juodas ar baltas sistemas arba spalvotus sprendimus, derinamus prie interjero.",
  },
] as const;

const PBI_PERTVAROS_COMPARISON_COLUMNS = [
  { key: "pbi40e", label: "PBI 40E" },
  { key: "pbi50n", label: "PBI 50N" },
] as const;

const PBI_PERTVAROS_COMPARISON_ROWS = [
  {
    feature: "Profilio plotis",
    values: {
      pbi40e: "40 mm (plonas)",
      pbi50n: "50 mm (tvirtesnis)",
    },
  },
  {
    feature: "Tipinis taikymas",
    values: {
      pbi40e: "Standartiniai ofisai, kabinetai, sandarinimo zonos",
      pbi50n: "Didelės stiklo plokštumos, aukšti potraukiai, reprezentatyvios erdvės",
    },
  },
  {
    feature: "Stiklo storis",
    values: {
      pbi40e: "Iki standartinio dvigubo stiklo",
      pbi50n: "Iki didesnio storio ir trijų sluoksnių paketų",
    },
  },
  {
    feature: "Akustinė izoliacija",
    values: {
      pbi40e: "Geras lygis kasdieniam ofisui",
      pbi50n: "Aukštesnė izoliacija (konferencijų salėms, vadovų kabinetams)",
    },
  },
  {
    feature: "Maksimalus pertvaros aukštis",
    values: {
      pbi40e: "Tinka standartiniams kambariams",
      pbi50n: "Tinka padidinto aukščio erdvėms",
    },
  },
  {
    feature: "Investicijos lygis",
    values: {
      pbi40e: "Ekonomiškesnis",
      pbi50n: "Aukštesnė investicija",
    },
  },
] as const;

const PERTVAROS_PROCESS_STEPS: readonly ProcessStep[] = [
  {
    title: "Konsultacija ir poreikių aptarimas",
    description:
      "Susitinkame su klientu objekte arba aptariame projektą per nuotolinę konsultaciją. Išsiaiškiname pertvaros paskirtį, norimą stiklo tipą, akustinius reikalavimus, interjero stilių ir biudžetą.",
  },
  {
    title: "Matavimas ir techninis sprendimas",
    description:
      "Mūsų komanda atvyksta į objektą, atlieka tikslius matavimus ir parengia detalų techninį pasiūlymą – sistemos parinkimas, stiklo specifikacija, durų ir atidarymo sprendimai, dažų pasirinkimas. Pateikiame projektinį brėžinį ir sąmatą per sutartą terminą.",
  },
  {
    title: "Gamyba pagal užsakymą",
    description:
      "Pertvaros pagaminamos pagal patvirtintus matmenis ir specifikaciją. Standartinis pristatymo laikas – sutartas užsakymo metu, priklausomai nuo apimties ir pasirinktos sistemos.",
  },
  {
    title: "Montavimas objekte",
    description:
      "Patyrę montuotojai sumontuoja pertvarą per 1–3 dienas standartiniame projekte. Darbai vyksta sausuoju būdu, todėl patalpos lieka funkcionalios per visą montavimo procesą. Tai svarbu veikiančiuose ofisuose.",
  },
  {
    title: "Priežiūra ir garantija",
    description:
      "Sumontuotai pertvarai suteikiame garantiją tiek konstrukcijos elementams, tiek montavimo darbams. Eksploatacijos priežiūra paprasta – stiklai valomi standartiniais langų valikliais, profiliai – sausu arba drėgnu skudurėliu.",
  },
];

const RELATED_PERTVAROS_SOLUTIONS = [
  {
    title: "Aliuminio fasadai",
    description:
      "Pastatų išorės fasadų sistemos komerciniams ir gyvenamiesiems projektams. FA 50N ir FA 50N HI sistemos – nuo standartinių iki energetiškai efektyvių sprendimų.",
    href: "/aliuminio-sprendimai/aliuminio-fasadai",
  },
  {
    title: "Aliuminio durys",
    description:
      "Aliuminio lauko ir vidaus durys – tvirtos, ilgaamžės, su plonu profiliu ir didelėmis stiklo galimybėmis. Tinka prie pertvarų sistemų ir reprezentatyvioms zonoms.",
    href: "/durys/aliuminio-durys",
  },
  {
    title: "Aliuminio langai",
    description:
      "Aliuminio langų sistemos didelėms stiklo angoms ir moderniam dizainui. PI 50N, TM 62, TM 102 HI – nuo standartinių iki pasyvių namų klasės.",
    href: "/langai/aliuminio-langai",
  },
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

      <section className="w-full bg-white px-4 py-14 md:px-[70px] md:py-[100px]" id="kas-yra-aliuminio-pertvaros">
        <div className="mx-auto max-w-[1440px]">
          <h2 className="max-w-[min(100%,44rem)] text-3xl font-semibold leading-[1.18] tracking-[-0.032em] md:text-[45px] md:leading-[52px]">
            <span className="text-[#263cd0]">Kas yra aliuminio pertvaros </span>
            <span className="text-[#16216b]">ir kam jos tinka</span>
          </h2>
          <div className="mt-6 max-w-[52rem] space-y-5 text-base leading-relaxed text-[#16216b] md:mt-8 md:text-[17px]">
            <p>
              Aliuminio pertvaros – tai vidaus erdvių zonavimo sistemos, kuriose stiklo paneliai ar kitos užpildymo
              medžiagos tvirtinamos prie aliuminio profilio karkaso. Šios konstrukcijos leidžia padalinti didelę erdvę į
              funkcines zonas, neprarandant šviesos ir vizualinio atvirumo, būdingo modernių patalpų dizainui.
            </p>
            <p>
              Aliuminio pertvaros Šiauliuose ir visoje Lietuvoje plačiai naudojamos ofisuose, parduotuvėse, viešbučiuose,
              klinikose, mokyklose ir individualiose gyvenamosiose patalpose. Stiklo pertvara dažnai pasirenkama vietoj
              tradicinės gipso kartono sienos, nes ji suteikia profesionalią išvaizdą ir gerokai pagerina patalpos
              akustinį komfortą be šviesos nuostolių.
            </p>
            <p>
              Skirtingai nei stacionarios gipso ar mūro sienos, aliuminio pertvaros yra modulinės ir gali būti
              perkonfigūruojamos pakeičiant patalpos paskirtį. Tai ypač svarbu nuomojamuose ofisuose ar besiplečiančiose
              įmonėse, kur erdvės struktūra keičiasi pagal poreikį.
            </p>
            <p>
              Vidaus pertvaros su stiklu leidžia išlaikyti bendrą erdvės pojūtį ir tuo pačiu aiškiai atskirti darbo vietas,
              poilsio zonas ar aptarnavimo srautus. Objektams Šiauliuose siūlome konsultaciją vietoje, kad greičiau
              įvertintume angas, grindų lygius ir sujungimus su lubomis. Tolimesniems miestams techninį paketą
              deriname pagal brėžinius ir nuotraukas.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-white pb-14 md:pb-[100px]" id="kodel-aliuminio-pertvara">
        <div className="mx-auto max-w-[1440px] px-4 md:px-[70px]">
          <h2 className="max-w-[min(100%,44rem)] text-3xl font-semibold leading-[1.18] tracking-[-0.032em] md:text-[45px] md:leading-[52px]">
            <span className="text-[#263cd0]">Kodėl rinktis </span>
            <span className="text-[#16216b]">aliuminio pertvarą</span>
          </h2>
          <p className="mt-4 max-w-[920px] text-base leading-relaxed text-[#16216b] md:text-[17px]">
            Stiklo pertvara su aliuminio profiliu yra daugiau nei sienos pakaitalas – tai investicija į erdvės
            funkcionalumą, akustiką ir estetiką. Štai pagrindinės priežastys, kodėl pertvaros pasirenkamos modernių
            pastatų projektuose.
          </p>
          <p className="mt-4 max-w-[920px] text-base leading-relaxed text-[#16216b] md:text-[17px]">
            Ofisų pertvaros dažnai derinamos su bendromis koridorių linijomis, lubų apšvietimu ir grindų dangos jungtimis.
            Techninėje specifikacijoje fiksuojame profilio RAL spalvą, stiklo tipą ir sandarinimo detales, kad montavimo
            dieną neprireiktų sprendimų „vietoje“, kurie vėluotų darbą.
          </p>
        </div>
        <div className="mx-auto mt-8 grid max-w-[1440px] gap-4 px-4 md:mt-10 md:grid-cols-2 md:gap-4 md:px-[70px] lg:grid-cols-3">
          {PERTVAROS_WHY_CARDS.map((card) => (
            <FeatureHoverCard
              description={card.body}
              headingClassName={BENEFIT_CARD_HEADING}
              key={card.title}
              title={card.title}
            />
          ))}
        </div>
      </section>

      <section className="w-full bg-white py-14 md:py-[100px]" id="pertvaru-sistemos">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-4 px-4 text-center md:px-[70px]">
          <h2 className="text-3xl font-semibold leading-[1.18] tracking-[-0.032em] md:text-[45px] md:leading-[52px]">
            <span className="text-[#263cd0]">Aliuminio pertvarų </span>
            <span className="text-[#16216b]">sistemos</span>
          </h2>
          <p className="max-w-[920px] text-base leading-relaxed text-[#16216b] md:text-[17px]">
            Sistemos parenkamos pagal erdvės paskirtį, stiklinimo poreikį ir projekto estetinį kryptingumą. Ofisų
            pertvaroms dažnai tinka PBI 40E arba PBI 50N – priklausomai nuo aukščio, stiklo ploto ir akustikos.
          </p>
          <p className="max-w-[920px] text-base leading-relaxed text-[#16216b] md:text-[17px]">
            PBI 40E ir PBI 50N skirtos vidaus pertvaroms, kai nereikia šilumos izoliacijos kaip išorinėms konstrukcijoms.
            Abi sistemos leidžia kurti vitrininį efektą ir derinti stiklo duris pagal eismo intensyvumą bei saugumo
            reikalavimus.
          </p>
        </div>
        <AliuminioPertvarosTabs products={ALUMINUM_PARTITIONS_PRODUCTS} />
      </section>

      <DurysComparisonTable
        columns={PBI_PERTVAROS_COMPARISON_COLUMNS}
        firstColumnLabel="Savybė"
        headingIntro="Renkantis tarp standartinės PBI 40E ir tvirtesnės PBI 50N sistemos, svarbu įvertinti pertvaros aukštį, stiklo plotą ir keliamus akustinius reikalavimus. Žemiau – pagrindinių savybių palyginimas:"
        headingLead="Kuri sistema"
        headingRest="tinka jūsų projektui"
        rows={PBI_PERTVAROS_COMPARISON_ROWS}
        sectionId="pertvaru-sistemu-palyginimas"
      />

      <div className="w-full bg-white pb-12 md:pb-16">
        <div className="mx-auto max-w-[1440px] space-y-4 px-4 md:px-[70px]">
          <p className="max-w-[920px] text-base leading-relaxed text-[#16216b] md:text-[17px]">
            PBI 40E pasirinkite, kai reikia ekonomiškos sienos pakaitalo standartinėje ofiso patalpoje – kabinetams,
            susitikimų zonoms ar mažoms konferencijoms. PBI 50N tinka, kai svarbu didesnis stiklo plotas, padidintas
            pertvaros aukštis ar aukštesnė akustinė izoliacija – pvz., vadovų kabinetams, didelėms konferencijų salėms
            ar prabangiems projektams.
          </p>
          <p className="max-w-[920px] text-base leading-relaxed text-[#16216b] md:text-[17px]">
            Tikslų sprendimą pateikiame po nemokamo objekto įvertinimo Šiauliuose ar visoje Lietuvoje. Jei objektas yra
            regione, inžineriai gali pakartotinai pamatuoti aikštelėje prieš gamybą, kad brėžiniai atitiktų realią
            geometriją ir montavimo sąlygas.
          </p>
        </div>
      </div>

      <div className="scroll-mt-28 md:scroll-mt-32" id="procesas-pertvaros">
        <ProcessSteps
          headingIntro="Pertvarų montavimas yra greitesnis ir mažiau invazyvus nei tradicinių sienų statyba, tačiau reikalauja tikslaus planavimo ir matavimo. Štai pagrindiniai etapai nuo pirmojo susitikimo iki sumontuotos pertvaros."
          headingLine1="Kaip vyksta aliuminio pertvarų projektas"
          steps={PERTVAROS_PROCESS_STEPS}
        />
      </div>

      <CaseStudiesProjectsCarousel
        headingLead="Realūs klientų "
        headingRest="projektai"
        intro="Įgyvendinti aliuminio pertvarų projektai iš tos pačios įgyvendintų projektų galerijos."
        projectCategories={CAROUSEL_CATEGORIES.aliuminioPertvaros}
      />

      <FaqSection
        faqIdPrefix="aliuminio-pertvaros-faq"
        headingLead="Dažniausiai"
        headingRest="užduodami klausimai"
        items={ALIUMINIO_PERTVAROS_FAQ}
        sectionId="duk-pertvaros"
      />

      <section className="w-full bg-white py-16 md:py-[100px]" id="susije-pertvaroms">
        <div className="mx-auto max-w-[1440px] px-4 md:px-[70px]">
          <h2 className="text-3xl font-semibold leading-[1.18] tracking-[-0.032em] md:text-[45px] md:leading-[52px]">
            <span className="text-[#263cd0]">Susiję </span>
            <span className="text-[#16216b]">aliuminio sprendimai</span>
          </h2>
          <p className="mt-4 max-w-[920px] text-base leading-relaxed text-[#16216b] md:text-[17px]">
            Aliuminio pertvaros dažnai yra dalis didesnio interjero ar pastato projekto. Jei ieškote ne tik vidaus
            pertvarų, bet ir kitų aliuminio sprendimų – štai mūsų siūlomos paslaugos:
          </p>
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-4">
            {RELATED_PERTVAROS_SOLUTIONS.map((item) => (
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
