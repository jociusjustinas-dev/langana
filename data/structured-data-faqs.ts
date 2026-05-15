/**
 * FAQ turinys JSON-LD (FAQPage) ir UI — vienas šaltinis.
 * Atnaujinus čia, importuojantys komponentai ir schema gauna tą patį tekstą.
 */
export type StructuredFaqItem = { question: string; answer: string };

export const LANGAI_HUB_FAQ: StructuredFaqItem[] = [
  {
    question: "Ar plastikiniai langai tikrai šilti?",
    answer:
      "Taip, modernūs plastikiniai langai pasižymi puikia šilumos izoliacija ir padeda sumažinti šildymo išlaidas.",
  },
  {
    question: "Kuo skiriasi aliuminio langai?",
    answer:
      "Aliuminio langai yra tvirtesni, leidžia daryti didesnes stiklo konstrukcijas ir suteikia modernesnį vaizdą.",
  },
  {
    question: "Kiek laiko tarnauja langai?",
    answer:
      "Kokybiški langai gali tarnauti 20–30 metų ar ilgiau, priklausomai nuo naudojimo ir priežiūros.",
  },
  {
    question: "Kiek trunka montavimas?",
    answer:
      "Dažniausiai montavimas užtrunka 1–5 dienas, priklausomai nuo projekto dydžio ir langų skaičiaus.",
  },
];

export const DURYS_HUB_FAQ: StructuredFaqItem[] = [
  {
    question: "Kokios durys geriausiai tinka individualiam namui?",
    answer:
      "Dažniausiai individualiems namams pasirenkamos plastikinės arba aliuminio durys. Plastikinės durys dažniau pasirenkamos dėl kainos ir šilumos, o aliuminio – dėl tvirtumo, dizaino ir ilgaamžiškumo.",
  },
  {
    question: "Kada verta rinktis šarvuotas duris?",
    answer:
      "Šarvuotos durys tinkamos tada, kai svarbiausias prioritetas yra saugumas – butams, namams, biurams ar kitoms patalpoms, kuriose norima didesnės apsaugos.",
  },
  {
    question: "Kuo skiriasi aliuminio ir plastikinės durys?",
    answer:
      "Plastikinės durys dažniausiai yra ekonomiškesnis ir šiltas sprendimas, o aliuminio durys – tvirtesnės, modernesnės ir geriau tinka intensyvesniam naudojimui ar didesnėms konstrukcijoms.",
  },
  {
    question: "Ar galite pagaminti duris pagal individualius matmenis?",
    answer: "Taip, durys gali būti gaminamos pagal konkrečią angą, objekto poreikius ir pasirinktą sistemą.",
  },
  {
    question: "Ar atliekate montavimą?",
    answer: "Taip, pasirūpiname ne tik durų parinkimu ir gamyba, bet ir profesionaliu montavimu.",
  },
];

export const PLASTIKINIAI_LANGAI_FAQ: StructuredFaqItem[] = [
  {
    question: "Ar plastikiniai langai tikrai šilti?",
    answer:
      "Taip, modernūs plastikiniai langai pasižymi puikia šilumos izoliacija ir padeda sumažinti šildymo išlaidas.",
  },
  {
    question: "Kiek laiko jie tarnauja?",
    answer: "Kokybiški plastikiniai langai gali tarnauti 20–30 metų ar ilgiau.",
  },
  {
    question: "Ar jie tinka garso izoliacijai?",
    answer: "Taip, plastikiniai langai efektyviai mažina išorės triukšmą.",
  },
];

export const ALIUMINIAI_LANGAI_FAQ: StructuredFaqItem[] = [
  {
    question: "Ar aliuminiai langai yra šilti?",
    answer:
      "Taip, šiuolaikinės aliuminio sistemos turi šilumos izoliacijos sprendimus. Pavyzdžiui, HI sistemos skirtos geresniam sandarumui ir mažesniems šilumos nuostoliams.",
  },
  {
    question: "Kada verta rinktis aliuminius langus?",
    answer:
      "Kai reikia didelių konstrukcijų, vitrinų, modernaus dizaino, tvirtumo arba sprendimo komerciniam ar viešosios paskirties objektui.",
  },
  {
    question: "Ar aliuminiai langai tinka gyvenamiesiems namams?",
    answer:
      "Taip. Kai kurios sistemos skirtos ir gyvenamiesiems namams, įskaitant energiją taupančius bei pasyvius pastatus.",
  },
  {
    question: "Kuo skiriasi TM 102HI ir TM 62 sistema?",
    answer:
      "TM 102HI yra aukščiausios šilumos izoliacijos sistema energiją taupantiems ir pasyviems objektams, o TM 62 yra universalesnė trijų kamerų sistema modernioms konstrukcijoms.",
  },
];

export const STIKLINIMAS_HUB_FAQ: StructuredFaqItem[] = [
  {
    question: "Kuo skiriasi šilta ir šalta stiklinimo sistema?",
    answer:
      "Šilta sistema skirta geresnei šilumos izoliacijai, o šalta sistema dažniausiai naudojama apsaugai nuo vėjo, lietaus, sniego ir dulkių.",
  },
  {
    question: "Ar stiklinimas sumažina triukšmą?",
    answer: "Taip, stiklinimas gali sumažinti iš lauko sklindantį triukšmą, ypač gyvenant prie judrių gatvių.",
  },
  {
    question: "Ar galima stiklinti skirtingų dydžių balkonus?",
    answer: "Taip, sprendimas parenkamas pagal konkrečią angą, balkono konstrukciją ir naudojimo poreikį.",
  },
  {
    question: "Ar atliekate montavimą?",
    answer: "Taip, stiklinimo konstrukcijos parenkamos, pagaminamos ir sumontuojamos pagal objektą.",
  },
];

export const BALKONU_STIKLINIMAS_FAQ: StructuredFaqItem[] = [
  {
    question: "Ar įstiklintas balkonas tampa šiltesnis?",
    answer:
      "Taip, stiklinimas padeda sumažinti šilumos nuostolius ir gali pagerinti šalia esančio kambario mikroklimatą.",
  },
  {
    question: "Ar balkonų stiklinimas sumažina triukšmą?",
    answer: "Taip, įstiklintas balkonas gali sumažinti iš gatvės ar kiemo sklindantį triukšmą.",
  },
  {
    question: "Ar stiklus galima atidaryti?",
    answer: "Taip, balkonų stiklinimui gali būti naudojamos judančios konstrukcijos, kurios atsidaro į šonus.",
  },
  {
    question: "Ar galima stiklinti skirtingo dydžio balkonus?",
    answer: "Taip, sprendimas pritaikomas pagal balkono dydį ir konstrukciją.",
  },
  {
    question: "Ar tokį balkoną lengva prižiūrėti?",
    answer:
      "Taip, priežiūra panaši į įprastų langų valymą - dažniausiai užtenka vandens ir paprastų valymo priemonių.",
  },
];

export const TERASU_STIKLINIMAS_FAQ: StructuredFaqItem[] = [
  {
    question: "Ar įstiklinta terasa gali būti naudojama žiemą?",
    answer:
      "Tai priklauso nuo pasirinktos sistemos. Šiltesnės ir sandaresnės sistemos leidžia terasa naudotis ilgiau, tačiau galutinis komfortas priklauso nuo konstrukcijos, stiklo ir montavimo.",
  },
  {
    question: "Ar terasos stiklinimas apsaugo nuo lietaus ir vėjo?",
    answer:
      "Taip, kokybiškai parinkta ir sumontuota konstrukcija padeda apsaugoti terasą nuo lietaus, vėjo, sniego ir dulkių.",
  },
  {
    question: "Ar galima atidaryti stiklinimo sistemas?",
    answer:
      "Taip, dažnai naudojamos lengvai stumdomos durys ar kiti atidaromi sprendimai, leidžiantys įsileisti daugiau oro.",
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

export const PLASTIKINES_DURYS_FAQ: StructuredFaqItem[] = [
  {
    question: "Ar plastikinės durys tinka kaip pagrindinės lauko durys?",
    answer:
      "Taip, plastikinės durys puikiai tinka kaip lauko durys individualiam namui, jei parenkamas tinkamas profilis, stiklo paketas, furnitūra ir montavimo būdas.",
  },
  {
    question: "Ar plastikinės durys yra šiltos?",
    answer:
      "Taip. Jose gali būti montuojami 2 arba 3 stiklų stiklo paketai, turintys geras termoizoliacines savybes.",
  },
  {
    question: "Ar plastikines duris galima pritaikyti prie namo spalvos?",
    answer:
      "Taip. Plastikiniai profiliai gali būti laminuojami arba dažomi įvairiomis spalvomis, todėl duris galima derinti prie namo fasado ir interjero.",
  },
  {
    question: "Ar plastikinės durys gali atsidaryti į išorę?",
    answer:
      "Taip, plastikinės durys gali atsidaryti tiek į vidų, tiek į išorę. Tai priklauso nuo pasirinktos furnitūros ir konkrečios situacijos.",
  },
  {
    question: "Ar plastikines duris lengva prižiūrėti?",
    answer: "Taip, plastikinės durys lengvai valomos ir nereikalauja sudėtingos priežiūros.",
  },
];

export const ALIUMINIO_DURYS_FAQ: StructuredFaqItem[] = [
  {
    question: "Ar aliuminio durys tinka individualiam namui?",
    answer:
      "Taip, aliuminio durys tinka individualiems namams, ypač kai svarbu saugumas, tvirtumas ir solidus įėjimo vaizdas.",
  },
  {
    question: "Ar aliuminio durys saugios?",
    answer:
      "Taip. Aliuminio durys yra tvirtos, o papildomai galima rinktis dvigubas spynas, sklendes, grandinėles ir kitus saugumo mechanizmus.",
  },
  {
    question: "Ar aliuminio durys izoliuoja garsą?",
    answer:
      "Taip, aliuminio durys padeda sumažinti išorės triukšmą, todėl tinka daugiabučiams ar namams šalia judresnių gatvių.",
  },
  {
    question: "Ar galima pasirinkti durų spalvą?",
    answer:
      "Taip, aliuminio profiliai gali būti dengiami specialiais dažais, todėl galima rinktis spalvą pagal pastato fasadą ir stilių.",
  },
  {
    question: "Ar aliuminio durys atsparios lietui ir aplinkos poveikiui?",
    answer:
      "Taip, jos gali būti dengiamos vandeniui atspariomis medžiagomis, o tinkamas montavimas užtikrina ilgesnį tarnavimo laiką.",
  },
];

export const METALINES_DURYS_FAQ: StructuredFaqItem[] = [
  {
    question: "Ar metalinės durys tinka kaip lauko durys?",
    answer:
      "Taip, metalinės durys yra vienas dažniausių pasirinkimų lauko durims, kai svarbiausia saugumas, tvirtumas ir ilgaamžiškumas.",
  },
  {
    question: "Ar metalinės durys padeda sumažinti triukšmą?",
    answer:
      "Taip, metalinės durys akustikos atžvilgiu gali padėti sumažinti iš lauko ar laiptinės sklindančius garsus.",
  },
  {
    question: "Ar metalinės durys yra brangios?",
    answer:
      "Ne visada. Metalinės durys dažnai yra vienas ekonomiškesnių pasirinkimų, ypač vertinant saugumą, ilgaamžiškumą ir kokybę.",
  },
  {
    question: "Ar galite sumontuoti duris?",
    answer: "Taip, teikiamos durų montavimo paslaugos, todėl klientui nereikia rūpintis atskirais darbais.",
  },
  {
    question: "Ar durims suteikiama garantija?",
    answer: "Taip, durims suteikiama garantija, todėl galite labiau pasitikėti pasirinktu sprendimu.",
  },
];

export const SPECIALIOS_DURYS_FAQ: StructuredFaqItem[] = [
  {
    question: "Ar specialios paskirties durys gaminamos pagal individualius matmenis?",
    answer:
      "Taip, durys gali būti parenkamos ar gaminamos pagal konkrečią angą, objekto paskirtį ir techninius reikalavimus.",
  },
  {
    question: "Ar šiame puslapyje nurodytos priešgaisrinės durys?",
    answer:
      "Taip, priešgaisrinės durys yra viena iš specialios paskirties durų grupių, skirtų objektams su papildomais saugos reikalavimais.",
  },
  {
    question: "Kokios informacijos reikia priešgaisrinių durų pasiūlymui?",
    answer:
      "Reikalingi angos matmenys, montavimo vieta, objekto tipas ir, jei turite, projektiniai reikalavimai arba nurodyta atsparumo ugniai klasė.",
  },
  {
    question: "Ar galite padėti parinkti tinkamą sprendimą?",
    answer:
      "Taip, galite atsiųsti informaciją apie objektą, o mes padėsime įvertinti, kuris durų sprendimas tinkamiausias.",
  },
];

export const STUMDOMOS_HUB_FAQ: StructuredFaqItem[] = [
  {
    question: "Kada verta rinktis stumdomą sistemą?",
    answer:
      "Kai norite patogaus išėjimo į balkoną, terasą ar kiemą, daugiau natūralios šviesos ir taupesnio erdvės naudojimo.",
  },
  {
    question: "Kuo skiriasi aliuminės ir plastikinės stumdomos sistemos?",
    answer:
      "Aliuminės sistemos dažniau pasirenkamos didelėms angoms ir modernesnei architektūrai, o plastikinės – praktiškesniems ir ekonomiškesniems sprendimams.",
  },
  {
    question: "Ar stumdomos sistemos gali būti šiltos?",
    answer: "Taip, tinkamai parinkta sistema ir stiklo paketas gali užtikrinti gerą šilumos izoliaciją.",
  },
  {
    question: "Ar atliekate montavimą?",
    answer: "Taip, sistema parenkama pagal objektą ir sumontuojama profesionaliai.",
  },
];

export const ALIUMINES_STUMDOMOS_FAQ: StructuredFaqItem[] = [
  {
    question: "Kuo skiriasi DP 180 ir DP 150T sistemos?",
    answer:
      "Abi sistemos skirtos pakeliamoms-slankiosioms konstrukcijoms, tačiau DP 180 leidžia įrengti itin didelių gabaritų ir iki 440 kg varčios svorio duris, o DP 150T dažnai naudojama žiemos sodams ir išėjimams į terasą.",
  },
  {
    question: "Kada rinktis L 50 sistemą?",
    answer:
      "L 50 sistema tinkama balkonams, lodžijoms ir slankioms pertvaroms, kai nereikia šilumos skyriklių, bet svarbi apsauga nuo triukšmo ir atmosferos poveikio.",
  },
  {
    question: "Ar galima įrengti žemą arba įleistą slenkstį?",
    answer: "Taip, DP 180 sistemoje galima įrengti duris su įleistu slenksčiu, todėl nelieka architektūrinių barjerų.",
  },
  {
    question: "Ar aliuminės stumdomos sistemos gali būti automatinės?",
    answer: "Taip, DP 180 sistemoje galima įrengti automatinio durų atidarymo ir uždarymo sistemą.",
  },
  {
    question: "Ar galima naudoti sulankstomas sistemas vidaus pertvaroms?",
    answer:
      "Taip, Harmonic sistemos gali būti naudojamos vidinėms pertvaroms, kai norima atskirti erdves nenaudojant papildomų sienų.",
  },
];

export const PLASTIKINES_STUMDOMOS_FAQ: StructuredFaqItem[] = [
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
  {
    question: "Kokia plastikinės stumdomos sistemos kaina?",
    answer:
      "Plastikinės stumdomos sistemos kaina priklauso nuo angos dydžio, pasirinkto stiklo paketo (dvigubas ar trigubas), spalvų ir papildomų funkcijų (uždaroma spyna, moskito tinkleliai). Tikslų pasiūlymą pateikiame po nemokamo objekto matavimo Šiauliuose arba pagal pateiktus brėžinius.",
  },
  {
    question: "Kiek tarnauja plastikinė stumdoma sistema?",
    answer:
      "Tinkamai sumontuota ir prižiūrima plastikinė stumdoma sistema tarnauja 25–35 metus. Profilio mechanizmai sukurti dažnam kasdieniam naudojimui, o aukštos kokybės sandarinimo tarpinės išlaiko savo savybes daugelį metų.",
  },
  {
    question: "Ar plastikinė stumdoma sistema tinka šaltesniu sezonu?",
    answer:
      "Taip. Plastikinis profilis su daugiakameriniu sandaru ir tinkamai parinktu stiklo paketu (paprastai dvigubu su Low-E danga arba triguba) užtikrina gerą šilumos izoliaciją net šalčiausiomis žiemos dienomis. Šildymo nuostoliai per stumdomą sistemą nedaug skiriasi nuo standartinių plastikinių langų.",
  },
  {
    question: "Ar į sistemą galima įmontuoti moskito tinklelį?",
    answer:
      "Taip. Į plastikines stumdomas sistemas galima įmontuoti slankiuosius moskito tinklelius, kurie užtikrina apsaugą nuo vabzdžių vasaros sezonu. Tai patogus sprendimas balkonams ir terasoms, kuriose dažnai laikomos durys atidarytos vėdinimui.",
  },
  {
    question: "Ar galima rinktis spalvas?",
    answer:
      "Taip. Plastikinis profilis gali būti baltas (standartinis variantas), pilkas, juodas, antracitas arba dengtas medienos imitacijos plėvele. Spalvos pasirinkimas priklauso nuo profilio gamintojo paletės – aptariame pasirinkimą konsultacijos metu.",
  },
];

export const ALIUMINIO_SPRENDIMAI_HUB_FAQ: StructuredFaqItem[] = [
  {
    question: "Kur naudojamos aliuminio konstrukcijos?",
    answer:
      "Aliuminio konstrukcijos naudojamos fasadams, pertvaroms, langams, durims, vitrinoms, stumdomoms sistemoms, žiemos sodams ir nestandartiniams gaminiams.",
  },
  {
    question: "Kuo aliuminis pranašesnis už plastiką ar medį?",
    answer:
      "Aliuminis leidžia kurti didesnių gabaritų konstrukcijas, yra atsparus aplinkos poveikiui, ilgaamžis ir tinkamas moderniai architektūrai.",
  },
  {
    question: "Kuo skiriasi šilti ir šalti aliuminio profiliai?",
    answer:
      "Šilti profiliai naudojami išorės gaminiams, kur svarbi šilumos izoliacija. Šalti profiliai dažniausiai naudojami vidaus pertvaroms, vitrinoms ir panašioms konstrukcijoms.",
  },
  {
    question: "Ar galima rinktis spalvą?",
    answer: "Taip, aliuminio profiliai gali būti dažomi pagal RAL paletę arba medžio imitacijos spalvomis.",
  },
  {
    question: "Ar gaminate nestandartines konstrukcijas?",
    answer:
      "Taip, galima gaminti nestandartinius sprendimus, tokius kaip žiemos sodai, apvalūs langai, trapecijos, arkos, automatinės durys ar didelių matmenų stumdomos sistemos.",
  },
];

export const ALIUMINIO_FASADAI_FAQ: StructuredFaqItem[] = [
  {
    question: "Kam tinka aliuminio fasadų sistemos?",
    answer: "Aliuminio fasadai dažniausiai naudojami komerciniuose, viešosios paskirties ir moderniuose gyvenamuosiuose objektuose.",
  },
  {
    question: "Kuo skiriasi FA 50N ir FA 50N HI?",
    answer:
      "FA 50N HI turi geresnes šilumos izoliacijos savybes, todėl dažniau pasirenkama energetiškai reiklesniems projektams.",
  },
  {
    question: "Ar padedate suprojektuoti sprendimą pagal objektą?",
    answer:
      "Taip, įvertiname projekto reikalavimus ir parenkame tinkamą fasado sistemą pagal konstrukciją, estetiką ir techninius kriterijus.",
  },
  {
    question: "Kokia aliuminio fasado kaina?",
    answer:
      "Aliuminio fasado kaina priklauso nuo pasirinktos sistemos (FA 50N ar FA 50N HI), stiklo paketo specifikacijos, fasado dydžio, sudėtingumo ir spalvų pasirinkimo. Tikslų pasiūlymą pateikiame po nemokamo objekto įvertinimo Šiauliuose arba pagal pateiktus projekto brėžinius.",
  },
  {
    question: "Ar aliuminio fasadą galima sumontuoti renovuojamame pastate?",
    answer:
      "Taip, aliuminio fasadų sistemos puikiai tinka renovacijai. Dažnai jie naudojami senų prekybos centrų, biurų pastatų ir mokyklų atnaujinimui, suteikiant modernią išvaizdą ir pagerinant pastato energinį efektyvumą.",
  },
  {
    question: "Kiek tarnauja aliuminio fasadas?",
    answer:
      "Tinkamai sumontuotas ir prižiūrimas aliuminio fasadas tarnauja kelis dešimtmečius. Aliuminis nerūdija, todėl konstrukcija išlaiko savo formą ir išvaizdą daug ilgiau nei betono ar medžio konstrukcijos.",
  },
  {
    question: "Ar fasadas tinkamas Lietuvos klimato sąlygoms?",
    answer:
      "Taip, aliuminio fasadų sistemos sertifikuotos ES rinkai ir testuotos Šiaurės Europos klimato zonoje. FA 50N HI sistema su thermal break technologija užtikrina šilumos izoliaciją net stipriausių šalčių metu.",
  },
  {
    question: "Kokias spalvas galima rinktis?",
    answer:
      "Aliuminio profilis dažomas miltelinio dažymo metodu. Galima rinktis iš pilnos RAL spalvų paletės arba užsakyti individualų atspalvį pagal projektą. Populiariausios spalvos – juoda, antracitas ir balta, tačiau galimybės nėra ribotos.",
  },
  {
    question: "Ar suteikiate aliuminio fasado garantiją?",
    answer:
      "Taip, mes suteikiame garantiją tiek konstrukcijai, tiek montavimo darbams. Tikslias garantijos sąlygas patvirtiname užsakymo metu, atsižvelgdami į pasirinktą sistemą, objekto specifiką ir naudojimo intensyvumą.",
  },
];

export const ALIUMINIO_PERTVAROS_FAQ: StructuredFaqItem[] = [
  {
    question: "Kur dažniausiai naudojamos aliuminio pertvaros?",
    answer: "Dažniausiai jos naudojamos biuruose, viešosios paskirties objektuose ir komercinėse erdvėse zonavimui.",
  },
  {
    question: "Ar galima derinti pertvaras su stiklu ir durimis?",
    answer: "Taip, pertvarų sistemos leidžia derinti skirtingus stiklo ir durų sprendimus pagal objekto poreikius.",
  },
  {
    question: "Ar padedate parinkti sistemą pagal projektą?",
    answer: "Taip, įvertiname objektą ir parenkame tinkamą sistemą pagal funkciją, estetiką ir biudžetą.",
  },
  {
    question: "Kokia aliuminio pertvaros kaina?",
    answer:
      "Aliuminio pertvaros kaina priklauso nuo pasirinktos sistemos (PBI 40E ar PBI 50N), stiklo storio ir tipo, pertvaros aukščio bei ilgio, durų pasirinkimo ir spalvų. Tikslų pasiūlymą pateikiame po nemokamo objekto įvertinimo Šiauliuose arba pagal pateiktus projekto brėžinius.",
  },
  {
    question: "Ar galima pertvarą sumontuoti veikiančiame ofise?",
    answer:
      "Taip. Aliuminio pertvarų montavimas vyksta sausuoju būdu, be didelio dulkių ar triukšmo kiekio. Daugumoje atvejų darbas vyksta per 1–3 darbo dienas ir nereikalauja viso ofiso uždarymo – galima zoną aptverti laikinomis užuolaidomis ir tęsti darbą greta.",
  },
  {
    question: "Kokios stiklo galimybės?",
    answer:
      "Pertvarose naudojamas grūdintas stiklas, kuris yra saugesnis ir tvirtesnis nei standartinis. Galima rinktis permatomą stiklą, matinį (acid-etched arba sandblast), su privatumo plėvele, su firminio logo spauda arba dvigubą stiklą su žaliuzėmis tarp sluoksnių.",
  },
  {
    question: "Ar pertvara užtikrina garso izoliaciją?",
    answer:
      "Taip. Tinkamai parinkta sistema su grūdintu stiklu ir kokybiškomis sandarinimo tarpinėmis užtikrina 35–45 dB akustinę izoliaciją. Tai atitinka standartinio ofiso kabinetų reikalavimus ir leidžia kurti ramias darbo zonas net atvirame plane.",
  },
  {
    question: "Ar į pertvarą galima įmontuoti duris?",
    answer:
      "Taip. Galima įmontuoti stiklo duris (su aliuminio rėmu arba be jo), klasikines aliuminio duris su stiklu ar net stumdomas duris – pagal pertvaros sistemą ir projekto poreikį. Durys gali turėti standartines spynas ar elektroninę prieigos kontrolę.",
  },
  {
    question: "Ar pertvarą galima vėliau perkelti?",
    answer:
      "Taip. Aliuminio pertvaros yra modulinės – galima jas išmontuoti ir perkonfigūruoti pakeičiant patalpos paskirtį. Tai ekonomiškas sprendimas nuomojamoms patalpoms ar augančioms įmonėms, kur erdvės struktūra keičiasi laikui bėgant.",
  },
];

export const ZIEMOS_SODAI_FAQ: StructuredFaqItem[] = [
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
