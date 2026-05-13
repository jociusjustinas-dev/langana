"use client";

import gsap from "gsap";
import Image, { type ImageProps } from "next/image";
import { useEffect, useRef } from "react";

function cx(...parts: (string | false | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

export type ParallaxCoverImageProps = Omit<ImageProps, "width" | "height"> & {
  /** Vertikalus slinkimo diapazonas pikseliais (numatytai kaip Balkonų / Terasų sekcijose). */
  strength?: number;
  /** Vidinio sluoksnio aukštis, pvz. „132%“. */
  innerHeight?: string;
  /** Pradinis vertikalus poslinkis, pvz. „-8%“. */
  translateStart?: string;
};

/**
 * Viso pločio nuotrauka „clipped“ konteineryje su lengvu parallax slinkčiai.
 * Atnaujinama per gsap.ticker, kad veiktų su ScrollSmoother (turinys juda ne tik ant „scroll“).
 */
export function ParallaxCoverImage({
  strength = 56,
  innerHeight = "132%",
  translateStart = "-8%",
  className,
  alt = "",
  ...imageProps
}: ParallaxCoverImageProps) {
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) return;

    const update = () => {
      const node = layerRef.current;
      if (!node) return;
      const parent = node.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      const vh = window.innerHeight || 1;
      if (rect.bottom < -vh || rect.top > vh * 2) return;
      const progress = -rect.top / vh;
      node.style.transform = `translateY(calc(${translateStart} + ${progress * strength}px))`;
    };

    gsap.ticker.add(update);
    return () => gsap.ticker.remove(update);
  }, [strength, translateStart]);

  return (
    <div
      ref={layerRef}
      className="absolute inset-0 will-change-transform"
      style={{ height: innerHeight, transform: `translateY(${translateStart})` }}
    >
      <Image {...imageProps} alt={alt} className={cx("object-cover", className)} fill />
    </div>
  );
}
