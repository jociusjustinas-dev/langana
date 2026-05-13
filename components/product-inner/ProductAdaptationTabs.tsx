"use client";

import { Mail, Phone } from "lucide-react";
import { useId, useState } from "react";

import { AnimatedSection } from "@/components/animations/AnimatedSection";
import type { ProductInnerAdaptationTab } from "@/data/product-inner/types";

import { AdaptationSectionTitle } from "./AdaptationSectionTitle";

export function ProductAdaptationTabs({
  title,
  intro,
  tabs,
}: {
  title: string;
  intro: string;
  tabs: ProductInnerAdaptationTab[];
}) {
  const [activeId, setActiveId] = useState(tabs[0]?.id ?? "");
  const baseId = useId();
  const active = tabs.find((t) => t.id === activeId) ?? tabs[0];

  return (
    <AnimatedSection as="section" className="w-full bg-white px-4 py-14 md:px-[70px] md:py-[100px]">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-12 lg:flex-row lg:justify-between lg:gap-16">
        <div className="flex w-full max-w-[502px] shrink-0 flex-col gap-12 lg:gap-[60px]">
          <AdaptationSectionTitle title={title} />
          <div className="flex flex-col gap-2.5">
            <div className="flex gap-[18px] py-1.5">
              <Phone aria-hidden className="mt-0.5 size-6 shrink-0 text-[#16216b]" strokeWidth={2} />
              <div>
                <p className="text-[15px] font-semibold leading-normal text-[#16216b]">Turite klausimų?</p>
                <a
                  className="mt-0.5 block text-[14px] font-normal leading-[1.5] text-[#263cd0] underline-offset-2 hover:underline"
                  href="tel:+37060620666"
                >
                  +370 606 20 666
                </a>
              </div>
            </div>
            <div className="flex gap-[18px] py-1.5">
              <Mail aria-hidden className="mt-0.5 size-6 shrink-0 text-[#16216b]" strokeWidth={2} />
              <div>
                <p className="text-[15px] font-semibold leading-normal text-[#16216b]">Parašykite mums</p>
                <a
                  className="mt-0.5 block text-[14px] font-normal leading-[1.5] text-[#263cd0] underline-offset-2 hover:underline"
                  href="mailto:uablangana@gmail.com"
                >
                  uablangana@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="flex min-w-0 flex-1 flex-col gap-10">
          <div
            className="flex w-full flex-col gap-3 sm:flex-row sm:gap-5"
            role="tablist"
            aria-label="Pritaikymo kategorijos"
          >
            {tabs.map((tab) => {
              const selected = tab.id === active?.id;
              const tabDomId = `${baseId}-tab-${tab.id}`;
              return (
                <button
                  aria-controls={`${baseId}-panel`}
                  aria-selected={selected}
                  className={`flex-1 rounded-full px-[30px] py-[15px] text-center text-[15px] font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#263cd0] focus-visible:ring-offset-2 ${
                    selected
                      ? "bg-[#263cd0] text-white"
                      : "bg-[#f6f7ff] text-[#59799f] hover:text-[#16216b]"
                  }`}
                  id={tabDomId}
                  key={tab.id}
                  onClick={() => setActiveId(tab.id)}
                  role="tab"
                  type="button"
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          <div
            aria-labelledby={active ? `${baseId}-tab-${active.id}` : undefined}
            className="flex w-full flex-col gap-8"
            id={`${baseId}-panel`}
            role="tabpanel"
          >
            {intro.trim() ? (
              <p className="text-[16px] font-normal leading-[1.5] text-[#16216b]">{intro}</p>
            ) : null}

            {active ? (
              <ul className="flex flex-col gap-3">
                {active.bullets.map((line) => (
                  <li className="flex items-center gap-3 text-[15px] font-normal leading-relaxed text-[#16216b] md:text-[16px] md:leading-[1.5]" key={line}>
                    <span aria-hidden className="size-1.5 shrink-0 rounded-full bg-[#263cd0]" />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
