import Link from "next/link";

import { AnimatedSection } from "@/components/animations/AnimatedSection";
import { ResponsiveComparisonGrid } from "@/components/ui/ResponsiveComparisonGrid";

type DurysComparisonColumn = {
  key: string;
  label: string;
};

type DurysComparisonRow = {
  feature: string;
  values: Record<string, string>;
};

export function DurysComparisonTable({
  sectionId,
  headingLead,
  headingRest,
  /** Trumpas tekstas po antrašte — tame pačiame kairiajame stulpelyje kaip antraštė (`space-between` su CTA). */
  headingIntro,
  columns,
  rows,
  /** Numatyta: „Savybė“. Pvz. „Poreikis“, „Klausimas“. */
  firstColumnLabel = "Savybė",
  offerCta = false,
}: {
  sectionId: string;
  headingLead: string;
  headingRest: string;
  headingIntro?: string;
  columns: readonly DurysComparisonColumn[];
  rows: readonly DurysComparisonRow[];
  firstColumnLabel?: string;
  offerCta?: boolean;
}) {
  const gridTemplateColumns = `repeat(${columns.length + 1}, minmax(0, 1fr))`;

  const compColumns = columns.map((c) => ({ key: c.key, label: c.label }));

  const compRows = rows.map((row) => ({
    key: row.feature,
    feature: (
      <p className="text-left text-sm font-semibold text-[#16216b] md:text-base">{row.feature}</p>
    ),
    cells: Object.fromEntries(
      columns.map((c) => [
        c.key,
        <p
          className="text-left text-sm font-normal leading-relaxed text-[#16216b] md:text-base"
          key={`${row.feature}-${c.key}`}
        >
          {row.values[c.key]}
        </p>,
      ]),
    ),
  }));

  return (
    <AnimatedSection as="section" className="w-full bg-white py-16 md:py-[100px]" id={sectionId}>
      <div className="mx-auto w-full max-w-[1440px] space-y-10 px-4 md:px-[70px]">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
          <div className="min-w-0 max-w-[min(100%,42rem)]">
            <h2 className="pb-6 text-3xl font-semibold leading-[1.18] tracking-[-0.032em] md:text-[45px] md:leading-[52px]">
              <span className="text-[#263cd0]">{headingLead} </span>
              <span className="text-[#16216b]">{headingRest}</span>
            </h2>
            {headingIntro ? (
              <p className="text-base leading-relaxed text-[#16216b] md:text-[17px]">{headingIntro}</p>
            ) : null}
          </div>

          {offerCta ? (
            <div className="flex shrink-0 flex-col items-start gap-3 sm:items-end">
              <Link
                href="/kontaktai#uzklausa"
                className="inline-flex items-center justify-center rounded-full bg-[#263cd0] px-8 py-[15px] text-[15px] font-semibold text-white transition hover:bg-[#1e31a8]"
              >
                Gauti nemokamą pasiūlymą
              </Link>
              <p className="text-left text-[13px] font-medium text-[#16216b] sm:text-right">
                Nemokamai · Atsakome per 24 val. · Jokių įsipareigojimų
              </p>
            </div>
          ) : null}
        </div>

        <div className="w-full min-w-0">
          <ResponsiveComparisonGrid
            ariaLabel={`${headingLead} ${headingRest}`.replace(/\s+/g, " ").trim()}
            columns={compColumns}
            desktopMinWidthClass="max-lg:min-w-[880px]"
            firstColumnLabel={firstColumnLabel}
            gridTemplateColumns={gridTemplateColumns}
            rows={compRows}
          />
        </div>
      </div>
    </AnimatedSection>
  );
}
