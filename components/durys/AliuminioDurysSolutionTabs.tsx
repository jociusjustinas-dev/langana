"use client";

import Link from "next/link";

import { ParallaxCoverImage } from "@/components/ui/ParallaxCoverImage";
import { SegmentedPillTabList } from "@/components/ui/SegmentedPillTabList";
import { handleTabListArrowKey } from "@/lib/tab-list-keyboard";
import { useEffect, useId, useRef, useState } from "react";

type SolutionTab = {
  id: string;
  shortLabel: string;
  title: string;
  description: string;
  bullets: readonly string[];
  imageSrc: string;
  imageAlt: string;
  objectPosition: string;
};

const TABS: readonly SolutionTab[] = [
  {
    id: "namams",
    shortLabel: "Namams",
    title: "Aliuminio durys namams",
    description:
      "Tvirtas ir estetiškas pasirinkimas individualiems namams, kai svarbu saugumas, ilgaamžiškumas ir solidus įėjimo vaizdas.",
    bullets: [
      "Tinka individualiems namams",
      "Tvirta konstrukcija",
      "Aukštesnis saugumo lygis",
      "Platus spalvų pasirinkimas",
      "Gera garso izoliacija",
      "Ilgaamžis sprendimas",
    ],
    imageSrc: "/images/Durys/ChatGPT Image May 7, 2026, 03_18_08 PM (3).png",
    imageAlt: "Aliuminio durys individualiam namui",
    objectPosition: "42% 48%",
  },
  {
    id: "daugiabuciams",
    shortLabel: "Daugiabučiams",
    title: "Aliuminio durys daugiabučiams",
    description:
      "Patikimas sprendimas daugiabučiams, kur svarbus saugumas, garso izoliacija ir atsparumas kasdieniam naudojimui.",
    bullets: [
      "Tinka bendroms įėjimo zonoms",
      "Gerai izoliuoja garsą",
      "Atsparios intensyviam naudojimui",
      "Galimi papildomi saugumo mechanizmai",
      "Tvirtas profilis",
      "Lengva priežiūra",
    ],
    imageSrc: "/images/Durys/ChatGPT Image May 7, 2026, 03_18_08 PM (4).png",
    imageAlt: "Aliuminio durys daugiabučiui",
    objectPosition: "50% 45%",
  },
  {
    id: "komercija",
    shortLabel: "Komercija / pramonė",
    title: "Aliuminio durys komerciniams objektams",
    description:
      "Tvirtos durys parduotuvėms, biurams, komerciniams ir pramoniniams pastatams, kuriuose reikalingas patikimumas ir saugumas.",
    bullets: [
      "Tinka komercinėms patalpoms",
      "Tinka pramoniniams objektams",
      "Atsparios aplinkos poveikiui",
      "Galima derinti prie fasado",
      "Papildomi saugumo sprendimai",
      "Nedegi konstrukcija",
    ],
    imageSrc: "/images/Durys/ChatGPT Image May 7, 2026, 03_18_08 PM (5).png",
    imageAlt: "Aliuminio durys komercinėms patalpoms",
    objectPosition: "55% 52%",
  },
] as const;

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) {
      return;
    }
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, visible };
}

function SolutionBulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-col gap-2.5">
      {items.map((line) => (
        <li className="flex items-center gap-3 text-[15px] font-normal leading-relaxed text-[#16216b] md:text-[16px]" key={line}>
          <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-[#263cd0]" />
          <span>{line}</span>
        </li>
      ))}
    </ul>
  );
}

export function AliuminioDurysSolutionTabs({ sectionId = "sprendimai-aliuminio" }: { sectionId?: string }) {
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
          <div className="mx-auto flex max-w-[900px] flex-col items-center text-center">
            <h2 className="text-3xl font-semibold leading-[1.18] tracking-[-0.032em] md:text-[45px] md:leading-[52px]">
              <span className="text-[#263cd0]">Sprendimai </span>
              <span className="text-[#16216b]">pagal paskirtį</span>
            </h2>
          </div>

          <div className="mx-auto mt-10 flex w-full min-w-0 flex-col">
            <SegmentedPillTabList ariaLabel="Aliuminio durų sprendimų tipai" className="mb-8 md:mb-12">
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
                        style={{ objectPosition: active.objectPosition }}
                      />
                    </div>
                    <div className="flex min-h-0 min-w-0 flex-col gap-6 lg:items-start">
                      <div className="flex w-full flex-col gap-3 text-left">
                        <h3 className="text-xl font-semibold leading-tight tracking-[-0.04em] text-[#16216b] md:text-[22px] lg:text-[24px]">
                          {active.title}
                        </h3>
                        <p className="text-[15px] leading-relaxed text-[#16216b] md:text-base">{active.description}</p>
                      </div>
                      <div className="w-full">
                        <p className="mb-3 text-[14px] font-semibold text-[#263cd0]">Privalumai</p>
                        <SolutionBulletList items={active.bullets} />
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
