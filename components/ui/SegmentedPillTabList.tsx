import type { ReactNode } from "react";

const scrollShell =
  "min-w-0 overflow-x-auto overflow-y-hidden overscroll-x-contain [-webkit-overflow-scrolling:touch] [scrollbar-width:thin] [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-[#c5cce8]/90";

type SegmentedPillTabListProps = {
  ariaLabel: string;
  children: ReactNode;
  /** Papildomos klasės ant išorinio wrapperio (pvz. `mb-8 md:mb-12`). */
  className?: string;
  /**
   * `-mx-4 px-4` iki viewport kraštų, kad slankiojanti eilutė turėtų vietos (kaip kitos horizontalių juostų).
   * Jei tėvas jau „full bleed“, nustatykite `false`.
   */
  bleedX?: boolean;
};

/**
 * Mobilus: viena eilutė, horizontalus slinkimas, plonas scrollbar, scroll-snap.
 * `md+`: kaip anksčiau — `flex-wrap`, centruota piliulių juosta (`w-fit`).
 */
export function SegmentedPillTabList({
  ariaLabel,
  children,
  className = "",
  bleedX = true,
}: SegmentedPillTabListProps) {
  const bleed = bleedX ? "-mx-4 px-4 md:mx-0 md:px-0" : "";
  const outer = [bleed, className].filter(Boolean).join(" ");

  return (
    <div className={outer}>
      <div
        className={`${scrollShell} pb-0.5 max-md:snap-x max-md:snap-proximity max-md:touch-pan-x md:flex md:justify-center md:overflow-visible md:pb-0`}
      >
        <div
          aria-label={ariaLabel}
          className="flex w-max flex-nowrap items-center gap-2 rounded-full bg-[#eef0fb] p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] sm:gap-2 sm:p-2 *:shrink-0 *:snap-start md:w-fit md:max-w-full md:flex-wrap md:justify-center"
          role="tablist"
        >
          {children}
        </div>
      </div>
    </div>
  );
}
