"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import type { ReactNode } from "react";

import { carouselStripNavButtonClass } from "@/components/ui/CarouselStripNav";

export type CarouselFilledCircleNavProps = {
  onPrev: () => void;
  onNext: () => void;
  canPrev: boolean;
  canNext: boolean;
  className?: string;
  /** Jei nurodyta – [←][children][→], rodyklės iš kraštų vertikaliai centre prie foto. */
  children?: ReactNode;
};

/** Hero galerija — tie patys Chevron mygtukai kaip kitose karuselėse (`CarouselStripNav`). */
export function CarouselFilledCircleNav({
  onPrev,
  onNext,
  canPrev,
  canNext,
  className = "",
  children,
}: CarouselFilledCircleNavProps) {
  const gapClass = children != null ? "gap-2 md:gap-3" : "gap-3";

  return (
    <div className={`flex items-center justify-center ${gapClass} ${className}`}>
      <button
        aria-label="Ankstesnė nuotrauka"
        className={`${carouselStripNavButtonClass} shrink-0`}
        disabled={!canPrev}
        onClick={onPrev}
        type="button"
      >
        <ChevronLeft aria-hidden className="size-[22px] text-current" strokeWidth={2} />
      </button>
      {children != null ? (
        <div className="flex min-w-0 flex-1 justify-center">{children}</div>
      ) : null}
      <button
        aria-label="Kita nuotrauka"
        className={`${carouselStripNavButtonClass} shrink-0`}
        disabled={!canNext}
        onClick={onNext}
        type="button"
      >
        <ChevronRight aria-hidden className="size-[22px] text-current" strokeWidth={2} />
      </button>
    </div>
  );
}
