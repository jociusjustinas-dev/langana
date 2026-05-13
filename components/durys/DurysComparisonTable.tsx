import Link from "next/link";

import { AnimatedSection } from "@/components/animations/AnimatedSection";

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
          <div className="min-w-0 w-full overflow-x-auto rounded-2xl">
            <div className="w-full min-w-0 space-y-0 max-lg:min-w-[880px]">
              <div
                className="grid gap-3 px-4 py-3 md:gap-4 md:px-8 md:py-4 lg:px-10"
                style={{ gridTemplateColumns }}
              >
                <span className="self-center text-left text-sm font-semibold text-[#59799f] md:text-base">{firstColumnLabel}</span>
                {columns.map((column) => (
                  <span className="text-left text-sm font-semibold text-[#263cd0] md:text-base" key={column.key}>
                    {column.label}
                  </span>
                ))}
              </div>
              {rows.map((row, idx) => (
                <div
                  className={`grid gap-3 px-4 py-3 md:gap-4 md:px-8 md:py-4 lg:px-10 ${
                    idx % 2 === 0 ? "rounded-xl bg-[#f6f7ff]" : ""
                  }`}
                  style={{ gridTemplateColumns }}
                  key={row.feature}
                >
                  <p className="self-center text-sm font-semibold text-[#16216b] md:text-base">{row.feature}</p>
                  {columns.map((column) => (
                    <p className="text-sm font-normal leading-relaxed text-[#16216b] md:text-base" key={`${row.feature}-${column.key}`}>
                      {row.values[column.key]}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
