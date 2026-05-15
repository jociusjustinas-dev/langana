"use client";

import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

import { ParallaxCoverImage } from "@/components/ui/ParallaxCoverImage";
import { SegmentedPillTabList } from "@/components/ui/SegmentedPillTabList";
import { handleTabListArrowKey } from "@/lib/tab-list-keyboard";

type UseCaseTab = {
  id: string;
  shortLabel: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

const STUMDOMOS_IMAGES = {
  terrace: "/images/Stumdomos sistemos/ChatGPT Image May 7, 2026, 02_44_31 PM (2).png",
  balcony: "/images/Stumdomos sistemos/ChatGPT Image May 7, 2026, 02_44_31 PM (3).png",
  living: "/images/Stumdomos sistemos/ChatGPT Image May 7, 2026, 02_45_46 PM (2).png",
} as const;

const TABS: readonly UseCaseTab[] = [
  {
    id: "terasos",
    shortLabel: "Terasos",
    title: "Plastikinė stumdoma sistema terasoje",
    description:
      "Plastikinė stumdoma sistema terasoje suteikia patogų išėjimą iš gyvenamosios patalpos į lauko zoną be papildomos varstymo erdvės. Stiklo paneliai praleidžia maksimalią natūralią šviesą, todėl namuose tampa šviesiau ištisus metus. Tinka standartinėms terasų angoms iki maždaug 3–4 metrų pločio, kur svarbu ekonomiškas sprendimas ir geras šilumos izoliacijos lygis.",
    imageSrc: STUMDOMOS_IMAGES.terrace,
    imageAlt: "Plastikinė stumdoma sistema terasoje",
  },
  {
    id: "balkonai",
    shortLabel: "Balkonai",
    title: "Plastikinė stumdoma sistema balkone",
    description:
      "Balkonams plastikinė stumdoma sistema yra dažniausiai pasirenkamas sprendimas daugiabučiuose ir individualiuose namuose. Stumdomos varčios užima minimaliai vietos, todėl balkone lieka daugiau erdvės baldams, augalams ar laikomiems daiktams. Sistema apsaugo nuo lietaus, vėjo ir dulkių, o tinkamas stiklo paketas užtikrina šilumos izoliaciją netgi šaltesniu sezonu.",
    imageSrc: STUMDOMOS_IMAGES.balcony,
    imageAlt: "Plastikinė stumdoma sistema balkone",
  },
  {
    id: "vidaus-erdves",
    shortLabel: "Vidaus erdvės",
    title: "Plastikinės stumdomos sistemos gyvenamosiose erdvėse",
    description:
      "Vidinėms gyvenamosioms erdvėms plastikinės stumdomos sistemos naudojamos zonų atskyrimui – tarp svetainės ir valgomojo, virtuvės ir gyvenamosios zonos, ar pereinant tarp kambarių. Stumdomas sprendimas leidžia atverti ar uždaryti erdvę pagal poreikį, nereikalauja papildomos zonos durims atidaryti, todėl tinka net mažesniems butams ir kompaktiškiems namams.",
    imageSrc: STUMDOMOS_IMAGES.living,
    imageAlt: "Plastikinės stumdomos sistemos vidaus erdvėse",
  },
] as const;

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, visible };
}

export function PlastikinesStumdomosUseCaseTabs({ sectionId = "kur-tinka-plastikines-stumdomos" }: { sectionId?: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const baseId = useId();
  const reveal = useReveal();

  return (
    <section className="w-full bg-white px-4 py-16 md:px-[70px] md:py-[100px]" id={sectionId}>
      <div className="mx-auto max-w-[1440px]">
        <div
          className={`transition-all duration-700 ease-out motion-reduce:translate-y-0 motion-reduce:opacity-100 ${
            reveal.visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          ref={reveal.ref}
        >
          <div className="mx-auto flex max-w-[900px] flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-semibold leading-[1.18] tracking-[-0.032em] md:text-[45px] md:leading-[52px]">
              <span className="text-[#263cd0]">Kur tinka plastikinės </span>
              <span className="text-[#16216b]">stumdomos sistemos?</span>
            </h2>
            <p className="max-w-[52rem] text-base leading-relaxed text-[#16216b] md:text-[17px]">
              Plastikinės stumdomos sistemos yra universalios – tinka tiek lauko zonoms, tiek vidaus erdvių zonavimui.
              Žemiau – pagrindiniai pritaikymo scenarijai, kuriuose šis sprendimas geriausiai atsiskleidžia.
            </p>
          </div>

          <div className="mx-auto mt-10 flex w-full min-w-0 flex-col">
            <SegmentedPillTabList ariaLabel="Kur tinka plastikinės stumdomos sistemos" className="mb-8 md:mb-12">
              {TABS.map((tab, i) => {
                const selected = i === activeIndex;
                const tabDomId = `${baseId}-tab-${tab.id}`;
                const panelId = `${baseId}-panel-${tab.id}`;
                return (
                  <button
                    aria-controls={panelId}
                    aria-selected={selected}
                    className={`min-h-[44px] rounded-full px-5 py-2.5 text-center text-[14px] font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#263cd0] focus-visible:ring-offset-2 sm:px-7 sm:py-3 sm:text-[15px] ${
                      selected
                        ? "bg-[#263cd0] text-white shadow-sm"
                        : "bg-transparent text-[#59799f] hover:text-[#16216b]"
                    }`}
                    id={tabDomId}
                    key={tab.id}
                    onClick={() => setActiveIndex(i)}
                    onKeyDown={(e) =>
                      handleTabListArrowKey(e, {
                        index: i,
                        count: TABS.length,
                        tabDomId: (j) => `${baseId}-tab-${TABS[j]!.id}`,
                        setIndex: setActiveIndex,
                      })
                    }
                    role="tab"
                    type="button"
                  >
                    {tab.shortLabel}
                  </button>
                );
              })}
            </SegmentedPillTabList>

            {TABS.map((active, i) => {
              const selected = i === activeIndex;
              const panelId = `${baseId}-panel-${active.id}`;
              return (
                <div
                  aria-labelledby={`${baseId}-tab-${active.id}`}
                  className="w-full rounded-2xl bg-[#f6f7ff] p-6 md:p-10 lg:p-12"
                  hidden={!selected}
                  id={panelId}
                  key={active.id}
                  role="tabpanel"
                >
                  <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-12 xl:gap-14">
                    <div className="relative mx-auto aspect-[4/3] min-h-[220px] w-full overflow-hidden rounded-2xl bg-[#e8ebfa] lg:mx-0 lg:aspect-auto lg:h-full lg:min-h-[280px] lg:self-stretch">
                      <ParallaxCoverImage
                        alt={active.imageAlt}
                        fill
                        priority={i === 0}
                        sizes="(max-width: 1023px) 100vw, 45vw"
                        src={active.imageSrc}
                      />
                    </div>
                    <div className="flex min-h-0 min-w-0 flex-col gap-6 lg:items-start">
                      <div className="flex w-full flex-col gap-3 text-left">
                        <h3 className="text-xl font-semibold leading-tight tracking-[-0.04em] text-[#16216b] md:text-[22px] lg:text-[24px]">
                          {active.title}
                        </h3>
                        <p className="text-[15px] leading-relaxed text-[#16216b] md:text-base">{active.description}</p>
                      </div>
                      <Link
                        className="inline-flex w-fit items-center justify-center rounded-full bg-[#263cd0] px-8 py-[15px] text-[15px] font-semibold text-white transition hover:bg-[#1e31a8]"
                        href="/kontaktai#uzklausa"
                      >
                        Gauti pasiūlymą
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
