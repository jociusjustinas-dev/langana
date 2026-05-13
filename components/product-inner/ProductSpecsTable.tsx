import Link from "next/link";

import { AnimatedSection } from "@/components/animations/AnimatedSection";
import type { ProductInnerSpec } from "@/data/product-inner/types";
import { ResponsiveComparisonGrid } from "@/components/ui/ResponsiveComparisonGrid";

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

const footerPad = "gap-3 px-4 py-3 md:gap-4 md:px-8 md:py-4 lg:px-10";

/** Techninių parametrų blokas — tas pats responsive šablonas kaip `ResponsiveComparisonGrid` (&lt; lg kortelės, ≥ lg tinklelis + horizontalus slinkimas). */
export function ProductSpecsTable({
  rows,
  heading = "Techninė informacija",
  valueColumnHeading,
  wide,
  ctaAfter,
}: ProductSpecsTableProps) {
  const wrap = wide ? "max-w-[1300px]" : "max-w-[720px]";
  const valueHead = valueColumnHeading ?? "Reikšmė";

  const columns = [
    {
      key: "value",
      label: valueHead,
      headerClassName:
        "text-center text-base font-semibold leading-normal text-[#16216b] md:text-[16px] md:leading-[1.5]",
    },
  ] as const;

  const compRows = rows.map((row) => ({
    key: row.label,
    feature: (
      <p className="min-w-0 break-words text-base font-semibold leading-normal text-[#16216b] md:text-[16px] md:leading-[1.5]">
        {row.label}
      </p>
    ),
    cells: {
      value: (
        <p className="min-w-0 break-words text-base font-normal leading-normal text-[#16216b] sm:text-center md:text-[16px] md:leading-[1.5]">
          {row.value}
        </p>
      ),
    },
  }));

  return (
    <AnimatedSection as="section" className="w-full bg-white px-4 py-14 md:px-[70px] md:py-[100px]">
      <div className={`mx-auto ${wrap}`}>
        <ProductSectionHeading className="text-[36px] font-semibold leading-[1.12] tracking-[-0.036em] md:text-[40px] md:leading-[1.1]">
          {heading}
        </ProductSectionHeading>

        <div className="mt-8 min-w-0 w-full">
          <ResponsiveComparisonGrid
            ariaLabel={heading}
            columns={columns}
            desktopFooter={
              ctaAfter ? (
                <div
                  className={`grid ${footerPad}`}
                  style={{ gridTemplateColumns: "minmax(0,1.15fr) minmax(0,1fr)" }}
                >
                  <span aria-hidden className="select-none">
                    &nbsp;
                  </span>
                  <div className="flex justify-center">
                    <Link
                      className="inline-flex items-center justify-center rounded-full bg-[#263cd0] px-[30px] py-[15px] text-[15px] font-semibold text-[#f6f7ff] transition hover:bg-[#1e31a8]"
                      href={ctaAfter.href}
                    >
                      {ctaAfter.label}
                    </Link>
                  </div>
                </div>
              ) : undefined
            }
            desktopMinWidthClass="max-lg:min-w-[520px]"
            firstColumnHeaderClassName="text-base font-semibold leading-normal text-[#59799f] md:text-[16px] md:leading-[1.5]"
            firstColumnLabel="Savybė"
            gridTemplateColumns="minmax(0,1.15fr) minmax(0,1fr)"
            mobileFooter={
              ctaAfter ? (
                <Link
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#263cd0] px-6 py-3 text-center text-[14px] font-semibold text-white transition hover:bg-[#1e31a8] md:text-[15px]"
                  href={ctaAfter.href}
                >
                  {ctaAfter.label}
                </Link>
              ) : undefined
            }
            rows={compRows}
          />
        </div>
      </div>
    </AnimatedSection>
  );
}
