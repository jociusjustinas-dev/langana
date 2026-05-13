"use client";

import Image from "next/image";
import { useCallback, useState } from "react";

import { CarouselFilledCircleNav } from "@/components/ui/CarouselFilledCircleNav";
import { shouldUseUnoptimizedImage } from "@/lib/figma-assets";

type ProductDetailHeroGalleryProps = {
  images: string[];
  alt: string;
};

/**
 * Hero dešinė — nuotrauka su taškais; šonuose tos pačios Chevron rodyklės kaip kitose karuselėse (`CarouselFilledCircleNav`).
 */
export function ProductDetailHeroGallery({ images, alt }: ProductDetailHeroGalleryProps) {
  const slides = images.length > 0 ? images : ["/langana-logo.svg"];
  const [index, setIndex] = useState(0);
  const n = slides.length;

  const go = useCallback(
    (delta: number) => {
      if (n <= 1) return;
      setIndex((i) => Math.min(n - 1, Math.max(0, i + delta)));
    },
    [n],
  );

  const canNavigate = n > 1;
  const canPrev = canNavigate && index > 0;
  const canNext = canNavigate && index < n - 1;
  const slideSrc = slides[index];
  /** Nuotoliniai URL, `products/*`, Stumdomų aplankas — be Sharp (žr. `shouldUseUnoptimizedImage`). */
  const unoptimized = shouldUseUnoptimizedImage(slideSrc);

  const frame = (
    <div className="relative aspect-[340/564] min-h-[240px] w-full max-w-[340px] overflow-hidden md:min-h-[min(460px,calc(52svh-5rem))]">
      <Image
        alt={alt}
        className="no-rounded object-cover object-center"
        fill
        key={slideSrc}
        quality={92}
        sizes="(max-width: 768px) 90vw, 340px"
        src={slideSrc}
        unoptimized={unoptimized}
      />

      <div
        aria-hidden
        className="pointer-events-none absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-[5px]"
      >
        {n <= 1 ? (
          <span className="h-2.5 w-10 shrink-0 rounded-[10px] bg-white/95" />
        ) : (
          slides.map((_, i) => {
            const active = i === index;
            return (
              <span
                className={
                  active
                    ? "h-2.5 w-8 shrink-0 rounded-[10px] bg-white"
                    : "size-2.5 shrink-0 rounded-[10px] bg-white/50"
                }
                key={`hero-dot-${i}`}
              />
            );
          })
        )}
      </div>
    </div>
  );

  return (
    <div className="relative mx-auto w-full min-w-0 max-w-[460px] shrink-0 md:mx-0 md:max-w-none">
      {canNavigate ? (
        <CarouselFilledCircleNav
          canNext={canNext}
          canPrev={canPrev}
          className="w-full"
          onNext={() => go(1)}
          onPrev={() => go(-1)}
        >
          {frame}
        </CarouselFilledCircleNav>
      ) : (
        <div className="flex justify-center">{frame}</div>
      )}
    </div>
  );
}
