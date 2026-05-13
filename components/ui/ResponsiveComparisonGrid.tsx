import type { CSSProperties, ReactNode } from "react";

import { ResponsiveTableFrame } from "@/components/ui/ResponsiveTableFrame";

export type ResponsiveComparisonColumn = {
  key: string;
  label: ReactNode;
  /** Antraštės celės klasės (pvz. `text-center text-base font-semibold text-[#263cd0] md:text-[18px]`). */
  headerClassName?: string;
};

export type ResponsiveComparisonRow = {
  key: string;
  feature: ReactNode;
  cells: Record<string, ReactNode>;
};

const cellPad = "gap-3 px-4 py-3 md:gap-4 md:px-8 md:py-4 lg:px-10";

type ResponsiveComparisonGridProps = {
  /** Pirmo stulpelio antraštė („Savybė“, „Klausimas“ ir pan.). */
  firstColumnLabel: ReactNode;
  /** Klasės pirmos antraštės celės etiketei. */
  firstColumnHeaderClassName?: string;
  columns: readonly ResponsiveComparisonColumn[];
  rows: readonly ResponsiveComparisonRow[];
  /** CSS `grid-template-columns` (tiek antraštė, tiek eilutės). */
  gridTemplateColumns: string;
  /** Vidinis plotis iki `lg` — horizontalus slinkimas, kai netelpa. */
  desktopMinWidthClass?: string;
  /** Paskutinė eilutė tik dideliame tinklelyje (pvz. mygtukų eilutė). */
  desktopFooter?: ReactNode;
  /** Papildomas blokas po kortelėmis mobiliuose (pvz. tie patys CTA). */
  mobileFooter?: ReactNode;
  /** Ant regiono skaitytuvams (pvz. „Plastikinių ir aliuminių langų palyginimas“). */
  ariaLabel?: string;
};

const defaultFirstHeader =
  "self-center text-left text-sm font-semibold text-[#59799f] md:text-base";

const defaultColumnHeader =
  "text-left text-sm font-semibold text-[#263cd0] md:text-base";

/**
 * Pilnas responsive palyginimas: **&lt; lg** — kortelės su eilutės pavadinimu ir „stulpelis → reikšmė“;
 * **lg+** — ankstesnis tinklelis `ResponsiveTableFrame` viduje su horizontalia slinktimi, kai reikia.
 */
export function ResponsiveComparisonGrid({
  firstColumnLabel,
  firstColumnHeaderClassName = defaultFirstHeader,
  columns,
  rows,
  gridTemplateColumns,
  desktopMinWidthClass = "max-lg:min-w-[640px]",
  desktopFooter,
  mobileFooter,
  ariaLabel = "Produktų ar sprendimų palyginimas",
}: ResponsiveComparisonGridProps) {
  const gridStyle = { gridTemplateColumns } satisfies CSSProperties;

  return (
    <>
      <div
        aria-label={`${ariaLabel} — sutrumpinta versija`}
        className="flex flex-col gap-3 lg:hidden"
      >
        {rows.map((row, idx) => (
          <article
            className={
              idx % 2 === 0
                ? "rounded-xl border border-transparent bg-[#f6f7ff] p-4 shadow-sm"
                : "rounded-xl border border-[#e8ebfa] bg-white p-4 shadow-sm"
            }
            key={row.key}
          >
            <div
              className="mb-3 border-b border-[#dfe4f7] pb-2 text-sm font-semibold leading-snug text-[#16216b] md:text-base"
              role="heading"
              aria-level={3}
            >
              {row.feature}
            </div>
            <dl className="space-y-0">
              {columns.map((col) => (
                <div
                  className="flex flex-col gap-1.5 border-b border-[#eef0fb] py-3 last:border-b-0 sm:flex-row sm:items-start sm:justify-between sm:gap-4"
                  key={`${row.key}-${col.key}`}
                >
                  <dt className="shrink-0 text-[13px] font-semibold leading-snug text-[#263cd0] sm:max-w-[40%] sm:pt-0.5">
                    {col.label}
                  </dt>
                  <dd className="min-w-0 flex-1">{row.cells[col.key]}</dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
        {mobileFooter ? <div className="mt-1 flex flex-col gap-3">{mobileFooter}</div> : null}
      </div>

      <ResponsiveTableFrame ariaLabel={ariaLabel} className="hidden rounded-2xl lg:block">
        <div className={["w-full min-w-0 space-y-0", desktopMinWidthClass].filter(Boolean).join(" ")}>
          <div className={`grid ${cellPad}`} style={gridStyle}>
            <span className={firstColumnHeaderClassName}>{firstColumnLabel}</span>
            {columns.map((col) => (
              <span
                className={col.headerClassName ?? defaultColumnHeader}
                key={`head-${col.key}`}
              >
                {col.label}
              </span>
            ))}
          </div>
          {rows.map((row, idx) => (
            <div
              className={`grid ${cellPad} ${idx % 2 === 0 ? "rounded-xl bg-[#f6f7ff]" : ""}`}
              key={`desk-${row.key}`}
              style={gridStyle}
            >
              <div className="min-w-0 self-center">{row.feature}</div>
              {columns.map((col) => (
                <div className="min-w-0" key={`${row.key}-${col.key}`}>
                  {row.cells[col.key]}
                </div>
              ))}
            </div>
          ))}
          {desktopFooter}
        </div>
      </ResponsiveTableFrame>
    </>
  );
}
