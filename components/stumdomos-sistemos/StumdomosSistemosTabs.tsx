"use client";

import Link from "next/link";
import { useId, useState } from "react";

import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { ParallaxCoverImage } from "@/components/ui/ParallaxCoverImage";

/** Vietinės nuotraukos iš `public/images/Stumdomos sistemos/` (be Figma watermark). */
const TAB_IMAGES = {
  /** Aliuminės – didelės angos / vitrinos (kaip kategorijos kortelė „Didelėms angoms“). */
  aliumines: "/images/Stumdomos sistemos/ChatGPT Image May 7, 2026, 02_44_31 PM (4).png",
  /** Plastikinės – tas pats kadras kaip plastikinių stumdomų puslapio hero. */
  plastikines: "/images/Stumdomos sistemos/ChatGPT Image May 7, 2026, 02_45_46 PM (1).png",
} as const;

type SystemTab = {
  id: string;
  label: string;
  title: string;
  description: string;
  bullets: readonly string[];
  imageSrc: string;
  imageAlt: string;
  href: string;
};

const TABS: readonly SystemTab[] = [
  {
    id: "aliumines",
    label: "Aliuminės sistemos",
    title: "Aliuminės stumdomos sistemos",
    description: "Tvirtas ir modernus sprendimas didelėms angoms, terasoms, vitrinoms ir šiuolaikinei architektūrai.",
    bullets: [
      "Tinka didelėms angoms",
      "Modernus dizainas",
      "Tvirta konstrukcija",
      "Ilgaamžis sprendimas",
      "Plonesni profiliai",
      "Tinka intensyvesniam naudojimui",
    ],
    imageSrc: TAB_IMAGES.aliumines,
    imageAlt: "Aliuminės stumdomos sistemos terasa",
    href: "/stumdomos-sistemos/aliumines-stumdomos-sistemos",
  },
  {
    id: "plastikines",
    label: "Plastikinės sistemos",
    title: "Plastikinės stumdomos sistemos",
    description:
      "Praktiškas ir ekonomiškesnis sprendimas balkonams, terasoms ir gyvenamosioms erdvėms, kai svarbu šiluma ir patogus naudojimas.",
    bullets: [
      "Ekonomiškesnis pasirinkimas",
      "Gera šilumos izoliacija",
      "Lengva priežiūra",
      "Tinka balkonams ir terasoms",
      "Derinama su plastikiniais langais",
      "Patogus kasdienis naudojimas",
    ],
    imageSrc: TAB_IMAGES.plastikines,
    imageAlt: "Plastikinės stumdomos sistemos terasa",
    href: "/stumdomos-sistemos/plastikines-stumdomos-sistemos",
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

export function StumdomosSistemosTabs({ sectionId = "sistemos-tipai" }: { sectionId?: string }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const baseId = useId();
  const active = TABS[activeIndex]!;

  return (
    <AnimatedSection as="section" className="w-full bg-white px-4 py-16 md:px-[70px] md:py-[100px]" id={sectionId}>
      <div className="mx-auto max-w-[1440px]">
        <div className="mx-auto mb-10 max-w-[860px] text-center md:mb-12">
          <h2 className="text-3xl font-semibold leading-[1.18] tracking-[-0.032em] md:text-[45px] md:leading-[52px]">
            <span className="text-[#263cd0]">Pasirinkite </span>
            <span className="text-[#16216b]">tinkamiausią stumdomą sistemą</span>
          </h2>
          <p className="mx-auto mt-4 max-w-[740px] text-base leading-relaxed text-[#16216b]">
            Palyginkite aliumines ir plastikines stumdomas sistemas pagal poreikį, biudžetą ir planuojamą naudojimą.
          </p>
        </div>

        <div className="mx-auto flex w-full flex-col">
          <div
            aria-label="Stumdomų sistemų tipai"
            className="mx-auto mb-8 flex w-full flex-wrap items-center justify-center gap-2 rounded-full bg-[#eef0fb] p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] sm:w-auto sm:gap-2 sm:p-2 md:mb-12"
            role="tablist"
          >
            {TABS.map((tab, i) => {
              const selected = i === activeIndex;
              const tabDomId = `${baseId}-tab-${tab.id}`;
              return (
                <button
                  aria-controls={`${baseId}-panel`}
                  aria-selected={selected}
                  className={`min-h-[44px] flex-1 rounded-full px-5 py-2.5 text-center text-[14px] font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#263cd0] focus-visible:ring-offset-2 sm:flex-none sm:px-7 sm:py-3 sm:text-[15px] ${
                    selected ? "bg-[#263cd0] text-white shadow-sm" : "bg-transparent text-[#59799f] hover:text-[#16216b]"
                  }`}
                  id={tabDomId}
                  key={tab.id}
                  onClick={() => setActiveIndex(i)}
                  role="tab"
                  type="button"
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div
            aria-labelledby={`${baseId}-tab-${active.id}`}
            className="w-full rounded-2xl bg-[#f6f7ff] p-6 md:p-10 lg:p-12"
            id={`${baseId}-panel`}
            role="tabpanel"
          >
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-12 xl:gap-14">
              <div className="relative mx-auto aspect-[4/3] min-h-[220px] w-full overflow-hidden rounded-2xl bg-[#e8ebfa] lg:mx-0 lg:aspect-auto lg:h-full lg:min-h-[280px] lg:self-stretch">
                <ParallaxCoverImage
                  alt={active.imageAlt}
                  fill
                  key={active.id}
                  sizes="(max-width: 1023px) 100vw, 45vw"
                  src={active.imageSrc}
                />
              </div>
              <div className="flex min-h-0 min-w-0 flex-col gap-6 lg:items-start">
                <div className="flex w-full flex-col gap-3 text-left">
                  <h3 className="text-xl font-semibold leading-tight tracking-[-0.04em] text-[#16216b] md:text-[22px] lg:text-[24px]">{active.title}</h3>
                  <p className="text-[15px] leading-relaxed text-[#16216b] md:text-base">{active.description}</p>
                </div>
                <div className="w-full">
                  <p className="mb-3 text-[14px] font-semibold text-[#263cd0]">Privalumai</p>
                  <BulletList items={active.bullets} />
                </div>
                <Link
                  className="inline-flex w-fit items-center justify-center rounded-full bg-[#263cd0] px-8 py-[15px] text-[15px] font-semibold text-white transition hover:bg-[#1e31a8]"
                  href={active.href}
                >
                  Sužinoti daugiau
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
