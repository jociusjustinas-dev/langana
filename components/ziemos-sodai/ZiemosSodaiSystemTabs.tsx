"use client";

import Link from "next/link";
import { useId, useState } from "react";

import { ParallaxCoverImage } from "@/components/ui/ParallaxCoverImage";
import { SegmentedPillTabList } from "@/components/ui/SegmentedPillTabList";
import { handleTabListArrowKey } from "@/lib/tab-list-keyboard";

type ZiemosSodaiTab = {
  id: string;
  shortLabel: string;
  title: string;
  description: string;
  bullets: readonly string[];
  imageSrc: string;
  imageAlt: string;
};

const TABS: readonly ZiemosSodaiTab[] = [
  {
    id: "siltas",
    shortLabel: "Šiltas žiemos sodas",
    title: "Šiltas žiemos sodas — erdvė visus metus",
    description:
      "Visiškai izoliuota konstrukcija su šildymu, skirta naudoti ištisus metus. Tinkamas sprendimas, kai norite papildomos gyvenamosios erdvės, jaukaus kampelio augalams ar poilsio zonos net žiemą.",
    bullets: [
      "Puiki šilumos izoliacija",
      "Galima įrengti šildymą",
      "Naudojama ištisus metus",
      "Tinka poilsio zonai ir augalams",
      "Geresnė garso izoliacija",
      "Didesnė investicija, didesnis komfortas",
    ],
    imageSrc: "/images/Ziemos sodai/ChatGPT Image May 7, 2026, 04_12_17 PM (4).png",
    imageAlt: "Šiltas žiemos sodas su šildymu",
  },
  {
    id: "saltas",
    shortLabel: "Šaltas žiemos sodas",
    title: "Šaltas žiemos sodas — apsauga ir stilius",
    description:
      "Lengvesnė konstrukcija be pilnos šilumos izoliacijos. Puikiai tinka sezoniniam naudojimui — apsaugo nuo vėjo, lietaus ir sniego, suteikia stilingą ir funkcionalią erdvę šiltuoju metų laiku.",
    bullets: [
      "Apsauga nuo vėjo, lietaus ir sniego",
      "Lengvesnė ir ekonomiškesnė konstrukcija",
      "Tinka pavasariui, vasarai ir rudeniui",
      "Galima atverti stumdomas dalis",
      "Greičiau įrengiama",
      "Gerai dera prie modernios architektūros",
    ],
    imageSrc: "/images/Ziemos sodai/ChatGPT Image May 7, 2026, 04_12_18 PM (6).png",
    imageAlt: "Šaltas žiemos sodas sezoniniam naudojimui",
  },
] as const;

function BulletList({ items }: { items: readonly string[] }) {
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

export function ZiemosSodaiSystemTabs() {
  const [activeIndex, setActiveIndex] = useState(0);
  const baseId = useId();

  return (
    <div className="mx-auto mt-8 max-w-[1440px] px-4 md:mt-10 md:px-[70px]">
      <div className="mb-8 md:mb-12">
        <SegmentedPillTabList ariaLabel="Žiemos sodų sistemos">
          {TABS.map((tab, i) => {
            const selected = i === activeIndex;
            const tabDomId = `${baseId}-tab-${tab.id}`;
            const panelId = `${baseId}-panel-${tab.id}`;
            return (
              <button
                aria-controls={panelId}
                aria-selected={selected}
                className={`min-h-[44px] rounded-full px-5 py-2.5 text-center text-[14px] font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#263cd0] focus-visible:ring-offset-2 sm:px-7 sm:py-3 sm:text-[15px] ${
                  selected ? "bg-[#263cd0] text-white shadow-sm" : "bg-transparent text-[#59799f] hover:text-[#16216b]"
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
      </div>

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
                <div className="w-full">
                  <p className="mb-3 text-[14px] font-semibold text-[#263cd0]">Privalumai</p>
                  <BulletList items={active.bullets} />
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
  );
}
