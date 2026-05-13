"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useState } from "react";
import { ChevronLeft, ChevronRight, Package } from "lucide-react";

import { carouselStripNavButtonClass } from "@/components/ui/CarouselStripNav";

function useImageIndex(length: number) {
  const [i, setI] = useState(0);
  const prev = useCallback(() => {
    setI((v) => (v <= 0 ? length - 1 : v - 1));
  }, [length]);
  const next = useCallback(() => {
    setI((v) => (v >= length - 1 ? 0 : v + 1));
  }, [length]);
  return { i, prev, next };
}

export type ProjectImageSliderProps = {
  images: readonly string[];
  alt: string;
  linkedProduct?: { label: string; href: string };
};

export function ProjectImageSlider({ images, alt, linkedProduct }: ProjectImageSliderProps) {
  const { i, prev, next } = useImageIndex(images.length);
  const canNav = images.length > 1;

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#e8ebfa]">
      <Image
        alt={alt}
        className="object-cover"
        fill
        sizes="(max-width:768px) 100vw, 50vw"
        src={images[i] ?? images[0]}
      />

      {canNav ? (
        <div className="pointer-events-none absolute inset-y-0 left-2 right-2 z-20 flex items-center justify-between md:left-3 md:right-3">
          <button
            aria-label="Ankstesnė nuotrauka"
            className={`pointer-events-auto ${carouselStripNavButtonClass}`}
            onClick={prev}
            type="button"
          >
            <ChevronLeft aria-hidden className="size-[22px] text-current" strokeWidth={2} />
          </button>
          <button
            aria-label="Kita nuotrauka"
            className={`pointer-events-auto ${carouselStripNavButtonClass}`}
            onClick={next}
            type="button"
          >
            <ChevronRight aria-hidden className="size-[22px] text-current" strokeWidth={2} />
          </button>
        </div>
      ) : null}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex flex-col gap-2 bg-gradient-to-t from-black/55 via-black/25 to-transparent pb-3 pt-10 md:pb-3 md:pt-12">
        <div className="pointer-events-auto flex min-h-[40px] items-end justify-start px-3 md:px-4">
          {linkedProduct ? (
            <Link
              className="inline-flex max-w-[min(100%,280px)] items-center gap-2 rounded-full bg-white/95 px-3 py-2 text-left text-[12px] font-semibold text-[#16216b] shadow-sm ring-1 ring-black/5 transition hover:bg-white md:max-w-[320px] md:text-[13px]"
              href={linkedProduct.href}
              onClick={(e) => e.stopPropagation()}
            >
              <Package aria-hidden className="size-4 shrink-0 text-[#263cd0]" strokeWidth={2} />
              <span className="min-w-0 truncate underline-offset-2 hover:underline">{linkedProduct.label}</span>
            </Link>
          ) : null}
        </div>
        {canNav ? (
          <div className="flex justify-center gap-1.5">
            {images.map((_, idx) => (
              <span
                aria-hidden
                className={
                  idx === i ? "h-2 w-5 rounded-full bg-white/90" : "size-2 rounded-full bg-white/50"
                }
                key={idx}
              />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
