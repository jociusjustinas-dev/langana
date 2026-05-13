import Link from "next/link";

import { AnimatedSection } from "@/components/animations/AnimatedSection";
import type { ProductInnerSpec } from "@/data/product-inner/types";

import { ProductSectionHeading } from "./ProductSectionHeading";

type ProductSpecsTableProps = {
  rows: ProductInnerSpec[];
  /** Numatyta „Techninė informacija“. */
  heading?: string;
  /** Antro stulpelio antraštė (pvz. modelio pavadinimas). */
  valueColumnHeading?: string;
  /** Platesnis konteineris (Figma ~1300). */
  wide?: boolean;
  ctaAfter?: { label: string; href: string };
};

const rowGrid =
  "grid min-w-0 grid-cols-1 gap-3 rounded-2xl px-6 py-4 sm:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] sm:items-center sm:gap-4 sm:px-10 sm:py-4";

/** Techninių parametrų lentelė — Figma 8074:84165 (pakaitomis #f6f7ff juostos, 16px tipografija, be kortelės rėmelio). */
export function ProductSpecsTable({
  rows,
  heading = "Techninė informacija",
  valueColumnHeading,
  wide,
  ctaAfter,
}: ProductSpecsTableProps) {
  const wrap = wide ? "max-w-[1300px]" : "max-w-[720px]";
  const valueHead = valueColumnHeading ?? "Reikšmė";

  return (
    <AnimatedSection as="section" className="w-full bg-white px-4 py-14 md:px-[70px] md:py-[100px]">
      <div className={`mx-auto ${wrap}`}>
        <ProductSectionHeading className="text-[36px] font-semibold leading-[1.12] tracking-[-0.036em] md:text-[40px] md:leading-[1.1]">
          {heading}
        </ProductSectionHeading>

        <div className="mt-8 flex flex-col gap-2">
          <div className={`${rowGrid} bg-white`}>
            <div className="min-w-0 text-[16px] font-semibold leading-normal text-[#59799f] sm:leading-[1.5]">
              Savybė
            </div>
            <div className="min-w-0 break-words text-[16px] font-semibold leading-normal text-[#16216b] sm:text-center sm:leading-[1.5]">
              {valueHead}
            </div>
          </div>

          {rows.map((row, index) => {
            const zebra = index % 2 === 0;
            return (
              <div
                className={`${rowGrid} ${zebra ? "bg-[#f6f7ff]" : "bg-white"}`}
                key={row.label}
              >
                <p className="min-w-0 break-words text-[16px] font-semibold leading-normal text-[#16216b] sm:leading-[1.5]">
                  {row.label}
                </p>
                <p className="min-w-0 break-words text-[16px] font-normal leading-normal text-[#16216b] sm:text-center sm:leading-[1.5]">
                  {row.value}
                </p>
              </div>
            );
          })}
          {ctaAfter ? (
            <div
              className={`${rowGrid} bg-white pt-2 sm:items-start sm:pt-4`}
              role="presentation"
            >
              <div aria-hidden className="hidden sm:block" />
              <div className="flex justify-center sm:justify-self-center">
                <Link
                  className="inline-flex items-center justify-center rounded-full bg-[#263cd0] px-[30px] py-[15px] text-[15px] font-semibold text-[#f6f7ff] transition hover:bg-[#1e31a8]"
                  href={ctaAfter.href}
                >
                  {ctaAfter.label}
                </Link>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </AnimatedSection>
  );
}
