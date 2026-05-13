import Link from "next/link";

import { KONTAKTAI_PAGE_HREF } from "@/lib/contact-href";

const sectionClass = "space-y-4 text-[15px] leading-relaxed text-[#16216b] md:text-[16px]";
const h2Class = "text-[20px] font-semibold tracking-[-0.02em] text-[#16216b] md:text-[22px]";
const h3Class = "text-[17px] font-semibold text-[#16216b] md:text-[18px]";
const listClass = "list-disc space-y-2 pl-5 marker:text-[#263cd0]";

export function PrivacyPolicyPageView() {
  return (
    <article className="langana-flush-under-site-header border-b border-[rgba(163,170,214,0.2)] bg-white px-4 pb-14 pt-0 text-[#16216b] md:px-[70px] md:pb-[88px]">
      <div className="langana-site-header-clearance mx-auto max-w-[800px]">
        <h1 className="text-4xl font-semibold leading-[1.12] tracking-[-0.026em] text-[#16216b] md:text-[48px] md:leading-[1.08]">
          Privatumo politika
        </h1>
        <p className="mt-4 text-[14px] leading-relaxed text-[#16216b] md:text-[15px]">
          Paskutinį kartą atnaujinta: 2026 m. gegužės 11 d.
        </p>

        <div className="mt-12 flex flex-col gap-12">
          <section className={sectionClass}>
            <h2 className={h2Class}>1. Bendrosios nuostatos</h2>
            <p>
              Ši privatumo politika paaiškina, kaip UAB „Langana“ (toliau – „mes“, „įmonė“) tvarko jūsų asmens
              duomenis, kai naudojatės mūsų svetaine ir paslaugomis. Politika taikoma duomenims, renkamiems per
              svetainę{" "}
              <span className="whitespace-nowrap font-medium text-[#16216b]">langana.lt</span> (ar susijusius
              domenus), užklausų formas ir kitus skaitmeninius kanalus, kuriuos valdo įmonė.
            </p>
            <p>
              Asmens duomenis tvarkome laikydamiesi Bendrojo duomenų apsaugos reglamento (BDAR), Lietuvos Respublikos
              asmens duomenų teisinės apsaugos įstatymo ir kitų taikomų teisės aktų.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={h2Class}>2. Duomenų valdytojas</h2>
            <ul className={listClass}>
              <li>
                <span className="font-semibold text-[#16216b]">Pavadinimas:</span> UAB „Langana“
              </li>
              <li>
                <span className="font-semibold text-[#16216b]">Adresas:</span> Tilžės g. 83b, Šiauliai
              </li>
              <li>
                <span className="font-semibold text-[#16216b]">El. paštas:</span>{" "}
                <a className="font-semibold text-[#263cd0] underline underline-offset-2 hover:no-underline" href="mailto:uablangana@gmail.com">
                  uablangana@gmail.com
                </a>
              </li>
              <li>
                <span className="font-semibold text-[#16216b]">Telefonas:</span>{" "}
                <a className="font-semibold text-[#263cd0] underline underline-offset-2 hover:no-underline" href="tel:+37060620666">
                  +370 606 20 666
                </a>
              </li>
            </ul>
            <p>
              Klausimus dėl asmens duomenų tvarkymo galite siųsti nurodytu el. paštu. Jei manote, kad jūsų teisės
              pažeistos, turite teisę kreiptis į Valstybinę duomenų apsaugos inspekciją (
              <a className="font-semibold text-[#263cd0] underline underline-offset-2 hover:no-underline" href="https://vdai.lrv.lt" rel="noopener noreferrer" target="_blank">
                vdai.lrv.lt
              </a>
              ).
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={h2Class}>3. Kokius duomenis tvarkome ir kodėl</h2>
            <p>Asmens duomenis renkame tik tiek, kiek reikia nurodytiems tikslams:</p>
            <ul className={listClass}>
              <li>
                <span className="font-semibold text-[#16216b]">Užklausos ir komunikacija</span> (vardas, telefono
                numeris, el. paštas, jei nurodote, užklausos turinys, pasirinkti sprendimai, failai, kuriuos
                prisegate). <span className="font-medium text-[#16216b]">Teisinis pagrindas:</span> sutikimas ir (ar)
                veikla duomenų subjekto prašymu prieš sudarant sutartį (BDAR 6 str. 1 d. a ir b punktai).
              </li>
              <li>
                <span className="font-semibold text-[#16216b]">Sutarčių vykdymas ir klientų aptarnavimas</span>{" "}
                (reikalingi kontaktiniai ir sutarties duomenys). <span className="font-medium text-[#16216b]">Teisinis pagrindas:</span>{" "}
                sutarties vykdymas (BDAR 6 str. 1 d. b punktas).
              </li>
              <li>
                <span className="font-semibold text-[#16216b]">Svetainės veikimas ir saugumas</span> (techniniai
                žurnalai, IP adresas, naršyklės tipas, laiko žymos, būtini slapukai).{" "}
                <span className="font-medium text-[#16216b]">Teisinis pagrindas:</span> teisėtas interesas užtikrinti
                svetainės saugumą ir veikimą (BDAR 6 str. 1 d. f punktas).
              </li>
              <li>
                <span className="font-semibold text-[#16216b]">Statistika ir rinkodara</span> (pvz. „Google Analytics“
                ar panašūs įrankiai), <span className="font-medium text-[#16216b]">tik jei sutikote</span> per slapukų
                juostą. <span className="font-medium text-[#16216b]">Teisinis pagrindas:</span> sutikimas (BDAR 6 str. 1
                d. a punktas).
              </li>
            </ul>
          </section>

          <section className={sectionClass}>
            <h2 className={h2Class}>4. Slapukai (cookies)</h2>
            <p>
              Slapukai – maži tekstiniai failai, kuriuos naršyklė įrašo į jūsų įrenginį. Svetainėje naudojame slapukų
              juostą: galite pasirinkti tik būtinuosius slapukus arba sutikti su visais (įskaitant analitikos ir
              rinkodaros slapukus, jei tokiuos įdiegsime). Pasirinkimas saugomas jūsų naršyklėje (vietinė saugykla).
            </p>
            <h3 className={h3Class}>Slapukų kategorijos</h3>
            <ul className={listClass}>
              <li>
                <span className="font-semibold text-[#16216b]">Būtinieji</span> – reikalingi svetainės veikimui
                (sesija, saugumas, prisiminimas dėl slapukų pasirinkimo). Jų atsisakyti techniškai dažnai neįmanoma
                be funkcijų apribojimų.
              </li>
              <li>
                <span className="font-semibold text-[#16216b]">Analitikos</span> – padeda suprasti, kaip lankytojai
                naudojasi svetaine (pvz. puslapių peržiūros, srautas). Įjungiami tik gavus jūsų sutikimą, jei tokius
                įrankius naudosime.
              </li>
              <li>
                <span className="font-semibold text-[#16216b]">Rinkodaros / reklamos</span> – personalizuotai
                reklamai ar kampanijų matavimui (įskaitant trečiųjų šalių slapukus). Įjungiami tik gavus aiškų
                sutikimą.
              </li>
            </ul>
            <p>
              Slapukų sąrašą ir galiojimo laiką galime atnaujinti diegdami naujus įrankius; apie reikšmingus pakeitimus
              informuosime šiame puslapyje arba per juostą.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={h2Class}>5. „Google“ įrankiai ir sutikimo režimas</h2>
            <p>
              Jei svetainėje naudosime „Google Analytics“, „Google Ads“ ar kitas „Google“ paslaugas su slapukais, jos
              bus įjungiamos tik po jūsų sutikimo („Sutinku su visais“), nebent įstatymai leistų kitaip. Techniškai tai
              suderinama su „Google“ rekomenduojamu sutikimo režimu (Consent Mode): kol nesutikote su analitika ar
              reklama, atitinkami įrašai lieka apriboti.
            </p>
            <p>
              „Google“ privatumo politika:{" "}
              <a
                className="font-semibold text-[#263cd0] underline underline-offset-2 hover:no-underline"
                href="https://policies.google.com/privacy"
                rel="noopener noreferrer"
                target="_blank"
              >
                policies.google.com/privacy
              </a>
              .
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={h2Class}>6. Duomenų saugojimas ir perdavimas</h2>
            <p>
              Duomenis saugome tiek laiko, kiek reikia tikslams, kuriems jie renkami (pvz. užklausoms – iki atsakymo ir
              protingo archyvavimo; sutartims – pagal apskaitos ir ginčų terminus), ne ilgiau nei leidžia įstatymai.
            </p>
            <p>
              Dalis paslaugų teikėjų (įskaitant „Google“ ar hostingą) gali būti už ES ribų; tokiu atveju taikome BDAR
              reikalaujamas garantijas (standartines sutarčių sąlygas ar kitas priemones).
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={h2Class}>7. Jūsų teisės</h2>
            <p>Jūs turite teisę:</p>
            <ul className={listClass}>
              <li>susipažinti su tvarkomais duomenimis;</li>
              <li>reikalauti juos ištaisyti ar papildyti;</li>
              <li>reikalauti ištrinti („teisė būti pamirštam“), kai taikoma;</li>
              <li>apriboti tvarkymą ar nesutikti su tvarkymu, grindžiamu teisėtu interesu;</li>
              <li>atsisakyti sutikimu grindžiamo tvarkymo;</li>
              <li>duomenų perkeliamumą, kai taikoma;</li>
              <li>nesutikti su automatizuotu sprendimų priėmimu, jei toks taikomas.</li>
            </ul>
            <p>Prašymus nagrinėjame pagal BDAR nustatytus terminus.</p>
          </section>

          <section className={sectionClass}>
            <h2 className={h2Class}>8. Vaikų duomenys</h2>
            <p>
              Paslaugos neskirtos vaikams iki 14 metų. Sąmoningai nerenkame jų duomenų. Pastebėję tokią informaciją –
              susisiekite, ir imsimės priemonių ją pašalinti.
            </p>
          </section>

          <section className={sectionClass}>
            <h2 className={h2Class}>9. Politikos keitimas</h2>
            <p>
              Galime atnaujinti šią politiką (pvz. keičiant įrankius ar teisės aktus). Atnaujinta versija skelbiama
              šiame puslapyje su pakeitimo data. Esminiais atvejais galime papildomai informuoti el. paštu ar svetainėje.
            </p>
          </section>

          <section className={`${sectionClass} rounded-2xl bg-[#f6f7ff] p-6 ring-1 ring-[rgba(163,170,214,0.35)] md:p-8`}>
            <h2 className={h2Class}>10. Kontaktai</h2>
            <p>
              Dėl privatumo ar duomenų tvarkymo rašykite{" "}
              <a className="font-semibold text-[#263cd0] underline underline-offset-2 hover:no-underline" href="mailto:uablangana@gmail.com">
                uablangana@gmail.com
              </a>{" "}
              arba naudokitės{" "}
              <Link className="font-semibold text-[#263cd0] underline underline-offset-2 hover:no-underline" href={KONTAKTAI_PAGE_HREF}>
                kontaktų forma
              </Link>
              .
            </p>
          </section>
        </div>
      </div>
    </article>
  );
}
