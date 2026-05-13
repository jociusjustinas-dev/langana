"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

/** Bendras „strip“ karuselių mygtukų stilius (`/langai`, vidiniai produktai ir kt.). */
export const carouselStripNavButtonClass =
  "flex size-[35px] shrink-0 items-center justify-center rounded-full text-[#16216b] transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#263cd0] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-transparent disabled:text-[#16216b] disabled:opacity-[0.38] disabled:shadow-none disabled:saturate-0 enabled:cursor-pointer enabled:bg-[#f6f7ff] enabled:text-[#263cd0] enabled:shadow-[0_1px_2px_rgba(22,33,107,0.06)] enabled:hover:-translate-y-px enabled:hover:bg-[#eef1ff] enabled:hover:opacity-100 enabled:hover:ring-2 enabled:hover:ring-[#263cd0]/35 enabled:hover:ring-offset-2 enabled:hover:ring-offset-white enabled:active:translate-y-0 enabled:active:scale-[0.96]";

export type CarouselStripNavProps = {
  canPrev: boolean;
  canNext: boolean;
  onPrev: () => void;
  onNext: () => void;
  /** Numatyta karuselei su skaidrėmis */
  prevAriaLabel?: string;
  nextAriaLabel?: string;
  className?: string;
};

/**
 * Rodyklės horizontaliai slenkantiems karuselės juostoms — ta pati išvaizda visame puslapyje.
 */
export function CarouselStripNav({
  canPrev,
  canNext,
  onPrev,
  onNext,
  prevAriaLabel = "Ankstesnis skaidrė",
  nextAriaLabel = "Kita skaidrė",
  className = "",
}: CarouselStripNavProps) {
  return (
    <div className={`flex shrink-0 gap-2.5 ${className}`}>
      <button
        aria-label={prevAriaLabel}
        className={carouselStripNavButtonClass}
        disabled={!canPrev}
        onClick={onPrev}
        type="button"
      >
        <ChevronLeft aria-hidden className="size-[22px] text-current" strokeWidth={2} />
      </button>
      <button
        aria-label={nextAriaLabel}
        className={carouselStripNavButtonClass}
        disabled={!canNext}
        onClick={onNext}
        type="button"
      >
        <ChevronRight aria-hidden className="size-[22px] text-current" strokeWidth={2} />
      </button>
    </div>
  );
}
