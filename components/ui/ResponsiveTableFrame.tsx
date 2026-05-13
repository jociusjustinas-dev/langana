import type { ReactNode } from "react";

const scrollShell =
  "min-w-0 w-full overflow-x-auto overscroll-x-contain [-webkit-overflow-scrolling:touch] [scrollbar-width:thin]";

/**
 * Horizontalaus slinkimo rėmelis plačioms lentelėms / palyginimo tinkleliams ant siaurų ekranų.
 * Naudoti: `className` su vizualiais kampais (pvz. `rounded-2xl`), viduje — `min-w-[…px]` arba tinklelis.
 * Su `ariaLabel` — `role="region"` skaitytuvams.
 */
export function ResponsiveTableFrame({
  children,
  className = "",
  ariaLabel,
}: {
  children: ReactNode;
  /** Pvz. `rounded-2xl`, Oak: `rounded-xl border border-…`. */
  className?: string;
  /** Pasirinktinai — slankiklio zonos pavadinimas ekrano skaitytuvams. */
  ariaLabel?: string;
}) {
  return (
    <div
      aria-label={ariaLabel}
      className={[scrollShell, className].filter(Boolean).join(" ")}
      role={ariaLabel ? "region" : undefined}
    >
      {children}
    </div>
  );
}
