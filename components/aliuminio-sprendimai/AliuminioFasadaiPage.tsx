import Link from "next/link";

import { AliuminioFasadaiTabs } from "@/components/aliuminio-sprendimai/AliuminioFasadaiTabs";
import { DurysComparisonTable } from "@/components/durys/DurysComparisonTable";
import { CaseStudiesProjectsCarousel } from "@/components/plastikiniai-langai/CaseStudiesProjectsCarousel";
import { FaqSection } from "@/components/plastikiniai-langai/FaqSection";
import { ProcessSteps, type ProcessStep } from "@/components/plastikiniai-langai/ProcessSteps";
import { SalesHero } from "@/components/plastikiniai-langai/SalesHero";
import { FeatureHoverCard } from "@/components/ui/FeatureHoverCard";
import { ParallaxCoverImage } from "@/components/ui/ParallaxCoverImage";
import { ALUMINUM_FACADES_PRODUCTS } from "@/data/aliuminio-fasadai-products";
import { CAROUSEL_CATEGORIES } from "@/data/implemented-projects";
import { ALIUMINIO_FASADAI_FAQ } from "@/data/structured-data-faqs";

/** Dešinysis stulpelis – kaip „Kodėl Langana“ antroji sekcija (split + nuotrauka). */
const FACADE_INTRO_SPLIT_IMAGE = "/images/alium4.png";

const FACADE_WHY_CARDS = [
  {
    title: "Ilgaamžiškumas",
    body: "Aliuminis nerūdija ir nedeformuojasi, todėl tinkamai sumontuotas fasadas tarnauja kelias kartas. Tai reiškia mažesnes remonto sąnaudas ir nuoseklią išvaizdą per visą pastato eksploatacijos laikotarpį.",
  },
  {
    title: "Atsparumas oro sąlygoms",
    body: "Šaltis, karštis, lietus, sniegas ir UV spinduliai – aliuminio profilis atlaiko Lietuvos klimato sąlygas be deformacijų ar spalvos pokyčių. Sertifikuotos sistemos testuojamos Šiaurės Europos klimato zonoje.",
  },
  {
    title: "Plonas profilis, daugiau šviesos",
    body: "Aliuminio konstrukcijų profiliai yra plonesni nei plastikinių analogų, todėl į patalpas patenka daugiau natūralios šviesos. Tai ypač svarbu biurams, prekybos centrams ir komerciniams pastatams.",
  },
  {
    title: "Architektūrinis laisvumas",
    body: "Galima projektuoti dideles stiklo plokštumas, sudėtingas geometrijas ir nestandartinius sprendimus, kurie nepasiekiami su mediena ar plastiku. Aliuminis suteikia projektuotojams maksimalią dizaino laisvę.",
  },
  {
    title: "Šilumos izoliacija",
    body: "Šiluminės pertraukos technologija (thermal break) leidžia pasiekti aukštus energinio efektyvumo rodiklius. FA 50N HI sistema tinka net pasyvių namų klasės pastatams ir projektams su griežtais energiniais reikalavimais.",
  },
  {
    title: "Reprezentatyvi išvaizda",
    body: "Modernus, švarus dizainas suteikia pastatui prestižo. Aliuminis dažomas miltelinio dažymo būdu – galima rinktis iš pilnos RAL paletės standartinių spalvų arba užsakyti individualų atspalvį pagal projektą.",
  },
] as const;

const FA_FACADE_COMPARISON_COLUMNS = [
  { key: "fa50n", label: "FA 50N" },
  { key: "fa50nHi", label: "FA 50N HI" },
] as const;

const FA_FACADE_COMPARISON_ROWS = [
  {
    feature: "Šilumos izoliacija",
    values: {
      fa50n: "Standartinė",
      fa50nHi: "Aukšta (su thermal break)",
    },
  },
  {
    feature: "Tipinis taikymas",
    values: {
      fa50n: "Komerciniai pastatai, neapšildomos zonos, vitrinos",
      fa50nHi: "Biurai, energetiškai efektyvūs pastatai, A klasės namai",
    },
  },
  {
    feature: "Profilio plotis",
    values: {
      fa50n: "50 mm",
      fa50nHi: "50 mm",
    },
  },
  {
    feature: "Stiklo paketo galimybės",
    values: {
      fa50n: "Iki standartinio dvigubų stiklų storio",
      fa50nHi: "Iki trijų stiklų paketų",
    },
  },
  {
    feature: "Energinis efektyvumas",
    values: {
      fa50n: "Tinka šaltoms zonoms ir vitrinoms",
      fa50nHi: "Tinka pasyvių namų klasei",
    },
  },
  {
    feature: "Investicijos lygis",
    values: {
      fa50n: "Ekonomiškesnis",
      fa50nHi: "Aukštesnė pradinė investicija, ilgalaikė ekonomija",
    },
  },
] as const;

const FACADE_PROCESS_STEPS: readonly ProcessStep[] = [
  {
    title: "Konsultacija ir objekto įvertinimas",
    description:
      "Susitinkame su projekto užsakovu arba architektu, aptariame fasado paskirtį, dydį, energinį poreikį ir biudžetą. Šiauliuose ir aplinkiniame regione konsultaciją atliekame objekte. Toliau esantiems projektams pradiniai aptarimai vyksta nuotoliniu būdu su parengtais brėžiniais.",
  },
  {
    title: "Techninio sprendimo paruošimas",
    description:
      "Mūsų komanda parengia detalų techninį pasiūlymą – sistemos parinkimas, mazgai, statinės apkrovos, stiklo paketai, fasado dažai ir kiti techniniai parametrai. Fasado projektavimas apima projektinį brėžinį ir sąmatą sutartam terminui.",
  },
  {
    title: "Gamyba pagal užsakymą",
    description:
      "Konstrukcijos pagaminamos specializuotoje aliuminio gamykloje pagal patvirtintą projektą. Gamybos terminas priklauso nuo užsakymo apimties, sezono ir pasirinktos sistemos – tikslų terminą patvirtiname užsakymo metu.",
  },
  {
    title: "Montavimas objekte",
    description:
      "Fasado montavimas vykdomas patyrusių montuotojų pagal sistemos gamintojo techninius reikalavimus. Užtikriname sandarumą, statinį stabilumą ir ilgaamžišką eksploataciją. Montažo trukmė priklauso nuo objekto dydžio ir sudėtingumo.",
  },
  {
    title: "Priežiūra ir garantija",
    description:
      "Sumontuotam fasadui suteikiame garantiją tiek konstrukcijos elementams, tiek montavimo darbams. Garantijos sąlygas patvirtiname užsakymo metu. Eksploatacijos priežiūra – periodinis valymas ir sandarinimo elementų patikra, kurią klientas gali atlikti savarankiškai arba užsakyti pas mus.",
  },
];

const RELATED_SOLUTIONS = [
  {
    title: "Aliuminio pertvaros",
    description:
      "Vidinės pertvaros ofisams ir patalpoms su stiklo užpildais. Plonas profilis, sklandus dizainas, sprendimai komercinėms ir vidinėms erdvėms.",
    href: "/aliuminio-sprendimai/aliuminio-pertvaros",
  },
  {
    title: "Aliuminio langai",
    description:
      "Aliuminio langų sistemos su plonu profiliu didelėms stiklo angoms. PI 50N, TM 62, TM 102 HI sistemos – nuo standartinių iki pasyvių namų klasės.",
    href: "/langai/aliuminio-langai",
  },
  {
    title: "Aliuminės stumdomos sistemos",
    description:
      "DP 100/150/180 ir L 50 sistemos terasoms, vitrinoms ir didelėms angoms. Sklandus atidarymas, plonas profilis, modernus dizainas.",
    href: "/stumdomos-sistemos/aliumines-stumdomos-sistemos",
  },
] as const;

const BENEFIT_CARD_HEADING =
  "text-xl font-semibold leading-[1.25] tracking-[-0.04em] md:text-[25px] md:leading-[30px]";

export function AliuminioFasadaiPage() {
  return (
    <div className="w-full bg-white text-[#16216b]">
      <SalesHero
        backgroundImageSrc="/images/alium.png"
        breadcrumbItems={[
          { label: "Pradžia", href: "/" },
          { label: "Aliuminio sprendimai", href: "/aliuminio-sprendimai" },
          { label: "Aliuminio fasadai" },
        ]}
        ctaPrimary={{ label: "Gauti pasiūlymą", href: "/kontaktai#uzklausa" }}
        heroUrgencyLine
        ctaSecondary={{ label: "Peržiūrėti sistemas", href: "#fasadu-sistemos" }}
        description="Aliuminio fasadų sistemos komerciniams, viešiesiems ir moderniems gyvenamiesiems projektams."
        heroSubtitle="Projektiniams ir komerciniams objektams – modernus dizainas, energijos efektyvumas."
        stats={[
          { number: "YAWAL & PONZIO", label: "Profilių gamintojai" },
          { number: "Individualus", label: "Kiekvienas projektas" },
          { number: "Garantija", label: "Įtraukta" },
        ]}
        title="Aliuminio fasadai Šiauliuose"
      />

      <section className="w-full bg-white px-4 py-14 md:px-[70px] md:py-[100px]" id="kas-yra-aliuminio-fasadai">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-12 xl:gap-14">
          <div className="flex min-h-0 min-w-0 flex-col gap-5 lg:max-w-none lg:justify-center">
            <h2 className="text-3xl font-semibold leading-[1.18] tracking-[-0.032em] md:text-[45px] md:leading-[52px]">
              <span className="text-[#263cd0]">Kas yra aliuminio fasadai </span>
              <span className="text-[#16216b]">ir kam jie tinka</span>
            </h2>
            <p className="max-w-[52rem] text-base leading-relaxed text-[#16216b] md:text-[17px]">
              Aliuminio fasadai – tai modernių pastatų išorės sienų sistemos, kuriose stiklo paketai ar kitos užpildymo
              medžiagos tvirtinamos prie aliuminio profilio karkaso. Šios konstrukcijos suteikia pastatui ne tik estetišką
              ir reprezentatyvią išvaizdą, bet ir užtikrina šilumos bei garso izoliaciją, atsparumą oro sąlygoms ir
              ilgaamžiškumą, kuris matuojamas dešimtmečiais.
            </p>
            <p className="max-w-[52rem] text-base leading-relaxed text-[#16216b] md:text-[17px]">
              Aliuminio fasadai Šiauliuose ir visoje Lietuvoje naudojami komerciniuose, viešuosiuose ir moderniuose
              gyvenamuosiuose pastatuose – nuo prekybos centrų ir biurų iki mokyklų, ligoninių ir individualių namų su
              didelėmis stiklo plokštumomis. Aliuminio profilis leidžia projektuoti dideles, atviras erdves su
              panoraminiais langais, kurių neįmanoma realizuoti naudojant tradicines konstrukcines medžiagas.
            </p>
            <p className="max-w-[52rem] text-base leading-relaxed text-[#16216b] md:text-[17px]">
              Skirtingai nei plastikinės konstrukcijos, aliuminis išlaiko savo formą net esant didelėms apkrovoms ir
              didelėms stiklo masyvams, todėl jis yra pirmas pasirinkimas architektams, dirbantiems su sudėtingais ir
              reprezentatyviais projektais.
            </p>
          </div>
          <div className="relative mx-auto aspect-[4/3] min-h-[240px] w-full max-w-lg overflow-hidden rounded-2xl bg-[#e8ebfa] lg:mx-0 lg:max-w-none lg:aspect-auto lg:min-h-[min(100%,420px)] lg:self-stretch">
            <ParallaxCoverImage
              alt="Aliuminio fasadų konstrukcijos ir stiklo plokštumos"
              fill
              loading="lazy"
              sizes="(max-width: 1023px) 100vw, 45vw"
              src={FACADE_INTRO_SPLIT_IMAGE}
              style={{ objectPosition: "50% 42%" }}
            />
          </div>
        </div>
      </section>

      <section className="w-full bg-white pb-14 md:pb-[100px]" id="kodel-aliuminio-fasadas">
        <div className="mx-auto max-w-[1440px] px-4 md:px-[70px]">
          <h2 className="max-w-[min(100%,44rem)] text-3xl font-semibold leading-[1.18] tracking-[-0.032em] md:text-[45px] md:leading-[52px]">
            <span className="text-[#263cd0]">Kodėl rinktis </span>
            <span className="text-[#16216b]">aliuminio fasadą</span>
          </h2>
          <p className="mt-4 max-w-[920px] text-base leading-relaxed text-[#16216b] md:text-[17px]">
            Aliuminio fasadas yra investicija, kurios privalumai atsiskleidžia per visą eksploatacijos laikotarpį. Štai
            pagrindinės priežastys, kodėl ši konstrukcija dažnai pasirenkama Šiaulių komerciniuose ir moderniuose
            projektuose.
          </p>
          <p className="mt-4 max-w-[920px] text-base leading-relaxed text-[#16216b] md:text-[17px]">
            Techninėje dokumentacijoje įrašome stiklo paketo tipą, tvirtinimo žingsnį ir sandarinimo medžiagas. Jei
            objektas yra Šiauliuose ar aplinkiniuose rajonuose, inžineriai gali atlikti pakartotinį matavimą aikštelėje
            prieš gamybą, kad brėžiniai tiksliai atitiktų išmatuotą angą.
          </p>
        </div>
        <div className="mx-auto mt-8 grid max-w-[1440px] gap-4 px-4 md:mt-10 md:grid-cols-2 md:gap-4 md:px-[70px] lg:grid-cols-3">
          {FACADE_WHY_CARDS.map((card) => (
            <FeatureHoverCard
              description={card.body}
              headingClassName={BENEFIT_CARD_HEADING}
              key={card.title}
              title={card.title}
            />
          ))}
        </div>
      </section>

      <section className="w-full bg-white py-14 md:py-[100px]" id="fasadu-sistemos">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-4 px-4 text-center md:px-[70px]">
          <h2 className="text-3xl font-semibold leading-[1.18] tracking-[-0.032em] md:text-[45px] md:leading-[52px]">
            <span className="text-[#263cd0]">Aliuminio fasadų </span>
            <span className="text-[#16216b]">sistemos</span>
          </h2>
          <p className="max-w-[920px] text-base leading-relaxed text-[#16216b] md:text-[17px]">
            Pasirinkite fasado sistemą pagal projekto energinius, estetinius ir konstrukcinius reikalavimus.
          </p>
        </div>
        <AliuminioFasadaiTabs products={ALUMINUM_FACADES_PRODUCTS} />
      </section>

      <DurysComparisonTable
        columns={FA_FACADE_COMPARISON_COLUMNS}
        firstColumnLabel="Savybė"
        headingIntro="Renkantis tarp standartinės FA 50N ir izoliuotos FA 50N HI sistemos, svarbu įvertinti pastato paskirtį ir energinį poreikį. Žemiau – pagrindinių savybių palyginimas:"
        headingLead="Kuri sistema"
        headingRest="tinka jūsų projektui"
        rows={FA_FACADE_COMPARISON_ROWS}
        sectionId="fasadu-sistemu-palyginimas"
      />

      <div className="w-full bg-white pb-12 md:pb-16">
        <div className="mx-auto max-w-[1440px] space-y-4 px-4 md:px-[70px]">
          <p className="max-w-[920px] text-base leading-relaxed text-[#16216b] md:text-[17px]">
            Komerciniam pastatui ar vitrinai, kuri nelaiko šilumos, dažniausiai užtenka standartinės FA 50N sistemos.
            Gyvenamiesiems namams ar biurams, kuriuose svarbu sumažinti šildymo išlaidas ir užtikrinti komfortą ištisus
            metus, rekomenduojame FA 50N HI versiją. Tikslų sprendimą pateikiame po nemokamos konsultacijos ir objekto
            įvertinimo Šiauliuose ar visoje Lietuvoje.
          </p>
          <p className="max-w-[920px] text-base leading-relaxed text-[#16216b] md:text-[17px]">
            Jei fasadas susideda iš kelių plokštumų, į techninį paketą įtraukiame šilumos tiltų kontrolės taškus ir
            montavimo seką. Tai padeda suderinti darbus su kitais rangovais ir iš anksto numatyti kėlimo technikos ar
            kranų poreikį, kad aikštelėje būtų mažiau prastovų.
          </p>
        </div>
      </div>

      <div className="scroll-mt-28 md:scroll-mt-32" id="procesas-fasadai">
        <section className="w-full bg-white pb-8 pt-4 md:pb-10 md:pt-6">
          <div className="mx-auto max-w-[1440px] px-4 md:px-[70px]">
            <p className="max-w-[920px] text-base leading-relaxed text-[#16216b] md:text-[17px]">
              Aliuminio fasadas yra didesnės apimties projektas, todėl darbai vyksta nuosekliai ir kontroliuojamai.
              Štai pagrindiniai etapai nuo pirmojo susitikimo iki sumontuoto fasado. Kiekvienas etapas uždaromas
              dokumentais, kad užsakovas matytų, kas patvirtinta prieš gamybą ir prieš montavimą.
            </p>
          </div>
        </section>
        <ProcessSteps
          headingLine1="Kaip vyksta aliuminio fasado projektas?"
          steps={FACADE_PROCESS_STEPS}
        />
      </div>

      <CaseStudiesProjectsCarousel
        headingLead="Realūs klientų "
        headingRest="projektai"
        intro="Įgyvendinti aliuminio fasadų projektai iš bendros galerijos."
        projectCategories={CAROUSEL_CATEGORIES.aliuminioFasadai}
      />

      <FaqSection
        faqIdPrefix="aliuminio-fasadai-faq"
        headingLead="Dažniausiai"
        headingRest="užduodami klausimai"
        items={ALIUMINIO_FASADAI_FAQ}
        sectionId="duk-fasadai"
      />

      <section className="w-full bg-white py-16 md:py-[100px]" id="susije-aliuminio-sprendimai">
        <div className="mx-auto max-w-[1440px] px-4 md:px-[70px]">
          <h2 className="text-3xl font-semibold leading-[1.18] tracking-[-0.032em] md:text-[45px] md:leading-[52px]">
            <span className="text-[#263cd0]">Susiję </span>
            <span className="text-[#16216b]">aliuminio sprendimai</span>
          </h2>
          <p className="mt-4 max-w-[920px] text-base leading-relaxed text-[#16216b] md:text-[17px]">
            Aliuminio fasadas dažnai yra dalis didesnio projekto, kuriame naudojami ir kiti aliuminio sprendimai. Jei
            ieškote ne tik fasado, bet ir kitų aliuminio konstrukcijų savo objektui – štai mūsų siūlomos paslaugos:
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
