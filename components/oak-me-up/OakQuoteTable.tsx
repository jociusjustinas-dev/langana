import { ResponsiveTableFrame } from "@/components/ui/ResponsiveTableFrame";

export type OakQuoteRow = {
  code: string;
  finish: string;
  dimensions: string;
  /** EUR per m² (numeric for calculations) */
  pricePerSqm: number;
  /** Ordered area in m² */
  areaSqm: number;
};

export type OakQuoteTableProps = {
  /** Short uppercase caption above the table (Figma: section label). */
  sectionLabel: string;
  rows: OakQuoteRow[];
};

function formatEurWhole(amount: number): string {
  const rounded = Math.round(amount);
  const s = rounded.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "\u202f");
  return `€${s}`;
}

function formatEurPerSqm(amount: number): string {
  const fixed = amount.toFixed(2).replace(".", ",");
  return `€${fixed}`;
}

export function OakQuoteTable({ sectionLabel, rows }: OakQuoteTableProps) {
  return (
    <div className="flex w-full min-w-0 max-w-[513px] flex-col gap-2">
      <p className="font-mono text-[10px] font-semibold uppercase tracking-[0.06em] text-[#2b2b2b]">
        {sectionLabel}
      </p>
      <ResponsiveTableFrame className="rounded-xl border border-[rgba(43,43,43,0.1)] overflow-y-hidden">
        <table className="w-full min-w-[320px] border-collapse text-left">
          <thead>
            <tr className="bg-[#1c3a13] text-[#d3fa99]">
              <th className="px-2.5 py-2 font-mono text-[8px] font-medium uppercase tracking-[0.05em]">
                Kodas
              </th>
              <th className="px-2.5 py-2 font-mono text-[8px] font-medium uppercase tracking-[0.05em]">
                Apdaila
              </th>
              <th className="px-2.5 py-2 font-mono text-[8px] font-medium uppercase tracking-[0.05em]">
                Matmenys
              </th>
              <th className="px-2.5 py-2 text-right font-mono text-[8px] font-medium uppercase tracking-[0.05em]">
                €/m²
              </th>
              <th className="px-2.5 py-2 text-right font-mono text-[8px] font-medium uppercase tracking-[0.05em]">
                Iš viso
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, idx) => {
              const lineTotal = row.pricePerSqm * row.areaSqm;
              return (
                <tr
                  className={`bg-white ${idx > 0 ? "border-t border-[rgba(43,43,43,0.1)]" : ""}`}
                  key={`${row.code}-${row.dimensions}`}
                >
                  <td className="px-2.5 py-2.5 align-middle font-mono text-[9px] leading-[13.5px] text-[#7a7a7a]">
                    {row.code}
                  </td>
                  <td className="px-2.5 py-2.5 align-middle text-[10px] font-medium leading-[15px] text-[#2b2b2b]">
                    {row.finish}
                  </td>
                  <td className="px-2.5 py-2.5 align-middle font-mono text-[9px] leading-[13.5px] text-[#7a7a7a]">
                    {row.dimensions}
                  </td>
                  <td className="px-2.5 py-2.5 text-right align-middle font-mono text-[11px] font-bold leading-[16.5px] text-[#1c3a13]">
                    {formatEurPerSqm(row.pricePerSqm)}
                  </td>
                  <td className="px-2.5 py-2.5 text-right align-middle font-mono text-[10px] font-medium leading-[15px] text-[#2b2b2b]">
                    {formatEurWhole(lineTotal)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </ResponsiveTableFrame>
    </div>
  );
}

/** Duomenys iš https://oakmeup.lt/kolekcijos (2026-05 snapshot). */
export const oakMeUpSampleQuoteRows: OakQuoteRow[] = [
  {
    code: "YE143190NO",
    finish: "Eng. Oak Natural Oiled",
    dimensions: "14/3 × 190 × 1900 mm",
    pricePerSqm: 58.95,
    areaSqm: 32,
  },
  {
    code: "YE204300U",
    finish: "Eng. Oak Straight Plank Unfinished",
    dimensions: "20/4 × 300 × 2200 mm",
    pricePerSqm: 87.02,
    areaSqm: 6,
  },
];
