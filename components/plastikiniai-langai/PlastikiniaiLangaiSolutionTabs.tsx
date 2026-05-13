"use client";

import Link from "next/link";
import { useId, useState } from "react";

import type { ProductCardProps } from "@/components/catalog/ProductCard";

import { ParallaxCoverImage } from "@/components/ui/ParallaxCoverImage";

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

export function PlastikiniaiLangaiSolutionTabs({ products }: { products: readonly ProductCardProps[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const baseId = useId();
  const active = products[activeIndex] ?? products[0];

  if (!active) return null;

  return (
    <div className="mx-auto mt-8 max-w-[1440px] px-4 md:mt-10 md:px-[70px]">
      <div className="mb-8 flex justify-center md:mb-12">
        <div
          aria-label="Plastikinių langų sistemos"
          className="flex w-fit flex-wrap items-center justify-center gap-2 rounded-full bg-[#eef0fb] p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] sm:gap-2 sm:p-2"
          role="tablist"
        >
          {products.map((tab, i) => {
            const selected = i === activeIndex;
            const tabDomId = `${baseId}-tab-${i}`;
            return (
              <button
                aria-controls={`${baseId}-panel`}
                aria-selected={selected}
                className={`min-h-[44px] rounded-full px-5 py-2.5 text-center text-[14px] font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#263cd0] focus-visible:ring-offset-2 sm:px-7 sm:py-3 sm:text-[15px] ${
                  selected ? "bg-[#263cd0] text-white shadow-sm" : "bg-transparent text-[#59799f] hover:text-[#16216b]"
                }`}
                id={tabDomId}
                key={tab.href}
                onClick={() => setActiveIndex(i)}
                role="tab"
                type="button"
              >
                {tab.title}
              </button>
            );
          })}
        </div>
      </div>

      <div
        aria-labelledby={`${baseId}-tab-${activeIndex}`}
        className="w-full rounded-2xl bg-[#f6f7ff] p-6 md:p-10 lg:p-12"
        id={`${baseId}-panel`}
        role="tabpanel"
      >
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-12 xl:gap-14">
          <div className="relative mx-auto aspect-[4/3] min-h-[220px] w-full overflow-hidden rounded-2xl bg-[#e8ebfa] lg:mx-0 lg:aspect-auto lg:h-full lg:min-h-[280px] lg:self-stretch">
            <ParallaxCoverImage
              alt={`${active.title} sistema`}
              fill
              key={active.href}
              sizes="(max-width: 1023px) 100vw, 45vw"
              src={active.image}
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
              <BulletList items={active.benefits.map((b) => b.label)} />
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                className="inline-flex w-fit items-center justify-center rounded-full bg-[#263cd0] px-8 py-[15px] text-[15px] font-semibold text-white transition hover:bg-[#1e31a8]"
                href={active.href}
              >
                Peržiūrėti sistemą
              </Link>
              <Link
                className="inline-flex w-fit items-center justify-center rounded-full border border-[#263cd0] bg-transparent px-8 py-[13px] text-[15px] font-semibold text-[#263cd0] transition hover:bg-[#263cd0] hover:text-white"
                href="/kontaktai#uzklausa"
              >
                Gauti pasiūlymą
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

