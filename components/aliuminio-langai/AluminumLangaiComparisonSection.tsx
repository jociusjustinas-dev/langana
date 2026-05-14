import Link from "next/link";
import { AlertTriangle, Check, X } from "lucide-react";

import { ResponsiveComparisonGrid } from "@/components/ui/ResponsiveComparisonGrid";

type ComparisonTone = "yes" | "no" | "mid";

type ComparisonCell = { tone: ComparisonTone; text: string };

const ROWS: {
  label: string;
  aluminum: ComparisonCell;
  plastic: ComparisonCell;
}[] = [
  {
    label: "Kaina",
    aluminum: { tone: "no", text: "Aukštesnė investicija" },
    plastic: { tone: "yes", text: "Ekonomiškesnis pasirinkimas" },
  },
  {
    label: "Dizainas",
    aluminum: { tone: "yes", text: "Modernus, minimalistinis" },
    plastic: { tone: "yes", text: "Universalus, klasikinis" },
  },
  {
    label: "Didelės angos",
    aluminum: { tone: "yes", text: "Puikiai tinka" },
    plastic: { tone: "no", text: "Ribotas pasirinkimas" },
  },
  {
    label: "Konstrukcijos tvirtumas",
    aluminum: { tone: "yes", text: "Labai aukštas" },
    plastic: { tone: "yes", text: "Geras" },
  },
  {
    label: "Šilumos izoliacija",
    aluminum: { tone: "yes", text: "Labai gera su HI sistemomis" },
    plastic: { tone: "yes", text: "Labai gera" },
  },
  {
    label: "Ilgaamžiškumas",
    aluminum: { tone: "yes", text: "Labai aukštas" },
    plastic: { tone: "yes", text: "Geras" },
  },
  {
    label: "Pritaikymas",
    aluminum: { tone: "yes", text: "Langai, durys, vitrinos, fasadai" },
    plastic: { tone: "mid", text: "Langai, balkono durys" },
  },
  {
    label: "Objektai",
    aluminum: { tone: "yes", text: "Namai, vieši ir komerciniai pastatai" },
    plastic: { tone: "yes", text: "Namai, butai, renovacija" },
  },
];

const COLUMNS = [
  {
    key: "aluminum",
    label: "Aliuminiai langai",
    headerClassName: "text-left text-base font-semibold text-[#263cd0] md:text-[18px]",
  },
  {
    key: "plastic",
    label: "Plastikiniai langai",
    headerClassName: "text-left text-base font-semibold text-[#263cd0] md:text-[18px]",
  },
] as const;

function ComparisonValueCell({ tone, text }: ComparisonCell) {
  const a11y =
    tone === "yes" ? `Gerai: ${text}` : tone === "no" ? `Silpniau: ${text}` : `Vidutiniškai: ${text}`;

  return (
    <div
      aria-label={a11y}
      className="flex flex-1 flex-col items-start justify-start gap-1 px-1.5 text-left sm:flex-row sm:items-start sm:gap-2 sm:px-2"
    >
      {tone === "mid" ? (
        <AlertTriangle aria-hidden className="size-3.5 shrink-0 text-amber-600" strokeWidth={2.25} />
      ) : tone === "yes" ? (
        <Check aria-hidden className="size-3.5 shrink-0 text-emerald-600" strokeWidth={2.5} />
      ) : (
        <X aria-hidden className="size-3.5 shrink-0 text-red-500" strokeWidth={2.5} />
      )}
      <span className="text-left text-xs font-semibold leading-snug text-[#16216b] sm:text-sm">{text}</span>
    </div>
  );
}

export type AluminumLangaiComparisonSectionProps = {
  id?: string;
};

export function AluminumLangaiComparisonSection({ id = "palyginimas-aliuminis" }: AluminumLangaiComparisonSectionProps) {
  return (
    <section className="w-full bg-white py-16 md:py-[100px]" id={id}>
      <div className="mx-auto w-full max-w-[1440px] space-y-10 px-4 md:px-[70px]">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between sm:gap-8">
          <div className="min-w-0 max-w-[min(100%,42rem)]">
            <h2 className="pb-6 text-3xl font-semibold leading-[1.18] tracking-[-0.032em] md:text-[45px] md:leading-[52px]">
              <span className="text-[#263cd0]">Aliuminiai </span>
              <span className="text-[#16216b]">ar plastikiniai langai?</span>
            </h2>
            <p className="text-base leading-relaxed text-[#16216b] md:text-[17px]">
              Jeigu nežinote, kuris sprendimas tinkamesnis, pradėkite nuo pagrindinių skirtumų.
            </p>
          </div>
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
        </div>

        <div className="w-full min-w-0">
          <ResponsiveComparisonGrid
            ariaLabel="Aliumininių ir plastikinių langų palyginimas"
            columns={COLUMNS}
            desktopMinWidthClass="max-lg:min-w-[540px]"
            firstColumnHeaderClassName="self-center text-left text-sm font-semibold text-[#59799f] md:text-base"
            firstColumnLabel="Savybė"
            gridTemplateColumns="minmax(0,1.35fr) minmax(0,1fr) minmax(0,1fr)"
            rows={ROWS.map((row) => ({
              key: row.label,
              feature: (
                <p className="text-left text-sm font-semibold text-[#16216b] md:text-base">{row.label}</p>
              ),
              cells: {
                aluminum: (
                  <div className="flex justify-start">
                    <ComparisonValueCell {...row.aluminum} />
                  </div>
                ),
                plastic: (
                  <div className="flex justify-start">
                    <ComparisonValueCell {...row.plastic} />
                  </div>
                ),
              },
            }))}
          />
        </div>
      </div>
    </section>
  );
}
