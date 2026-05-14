import type { ReactElement, ReactNode } from "react";
import { Children, cloneElement, isValidElement } from "react";

const scrollbarHide =
  "[scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden";

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

function augmentTabButtons(children: ReactNode, isScrollableMobile: boolean): ReactNode {
  return Children.map(children, (child) => {
    if (!isValidElement(child)) return child;
    const el = child as ReactElement<{ className?: string }>;
    const extra = [
      "whitespace-nowrap",
      isScrollableMobile
        ? "max-md:flex-none max-md:shrink-0"
        : "max-md:flex-1 max-md:basis-1/2 max-md:min-w-0 max-md:!px-3 max-md:!text-[13px]",
    ].join(" ");
    return cloneElement(el, {
      className: [el.props.className, extra].filter(Boolean).join(" ").trim(),
    });
  });
}

/**
 * Mobilus (`max-md`): viena eilutė, `nowrap`; 2 tabai — po 50% pločio; 3+ — horizontalus slinkimas.
 * `md+`: centruota juosta, `flex-wrap` kaip anksčiau.
 */
export function SegmentedPillTabList({
  ariaLabel,
  children,
  className = "",
  bleedX = true,
}: SegmentedPillTabListProps) {
  const tabCount = Children.count(children);
  const isScrollableMobile = tabCount > 2;

  const bleed = bleedX ? "-mx-4 px-4 md:mx-0 md:px-0" : "";
  const outer = [bleed, className].filter(Boolean).join(" ");

  const scrollOuter = isScrollableMobile
    ? [
        "min-w-0 w-full overflow-x-auto overflow-y-hidden overscroll-x-contain [-webkit-overflow-scrolling:touch]",
        "pb-0.5 max-md:snap-x max-md:snap-proximity max-md:touch-pan-x max-md:scroll-pl-3 max-md:scroll-pr-3",
        scrollbarHide,
        "md:flex md:justify-center md:overflow-visible md:pb-0 md:snap-none",
      ].join(" ")
    : [
        "min-w-0 w-full max-md:overflow-x-visible overflow-y-hidden",
        "pb-0.5 md:flex md:justify-center md:overflow-visible md:pb-0",
      ].join(" ");

  const innerTrack = [
    "flex flex-nowrap items-center gap-2 rounded-full bg-[#eef0fb] p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.65)] sm:gap-2 sm:p-2",
    isScrollableMobile ? "max-md:w-max max-md:min-w-max max-md:justify-start" : "max-md:w-full max-md:min-w-0",
    "md:w-fit md:max-w-full md:flex-wrap md:justify-center",
  ].join(" ");

  return (
    <div className={outer}>
      <div className={scrollOuter}>
        <div aria-label={ariaLabel} className={innerTrack} role="tablist">
          {augmentTabButtons(children, isScrollableMobile)}
        </div>
      </div>
    </div>
  );
}
