"use client";

import { useCallback, useEffect, useLayoutEffect, useState, type RefObject } from "react";

import { scrollCarouselByDir } from "@/lib/carousel-strip-scroll";

/** Automatinis karuselės perjungimas (ms); sustoja, jei skaidrių ≤ 1. */
export const CAROUSEL_AUTOPLAY_MS = 5500;

export type UseCarouselStripOptions = {
  /** Jei `false` — nėra periodinio automatinio slinkimo (numatyta `true`). */
  autoplay?: boolean;
};

export function useCarouselStrip(
  scrollerRef: RefObject<HTMLDivElement | null>,
  slideCount: number,
  options?: UseCarouselStripOptions
): number {
  const autoplayEnabled = options?.autoplay !== false;
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const root = scrollerRef.current;
    if (!root || slideCount <= 1) {
      setActiveIndex(0);
      return;
    }

    const slides = Array.from(root.querySelectorAll<HTMLElement>("[data-carousel-slide]"));
    if (slides.length === 0) return;

    const ratios = new Map<Element, number>();

    const pickActive = () => {
      let bestIdx = 0;
      let best = -1;
      slides.forEach((s, i) => {
        const r = ratios.get(s) ?? 0;
        if (r > best) {
          best = r;
          bestIdx = i;
        }
      });
      setActiveIndex((prev) => (prev === bestIdx ? prev : bestIdx));
    };

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          ratios.set(e.target, e.intersectionRatio);
        }
        pickActive();
      },
      { root, threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    slides.forEach((s) => io.observe(s));

    return () => io.disconnect();
  }, [scrollerRef, slideCount]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el || slideCount <= 1) return;

    let paused = false;
    const pause = () => {
      paused = true;
    };
    const resume = () => {
      paused = false;
    };

    el.addEventListener("mouseenter", pause);
    el.addEventListener("mouseleave", resume);

    const tick = () => {
      if (paused || document.visibilityState !== "visible") return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      scrollCarouselByDir(el, 1, true);
    };

    const id = window.setInterval(tick, CAROUSEL_AUTOPLAY_MS);

    return () => {
      window.clearInterval(id);
      el.removeEventListener("mouseenter", pause);
      el.removeEventListener("mouseleave", resume);
    };
  }, [scrollerRef, slideCount, autoplayEnabled]);

  return activeIndex;
}

const OVERFLOW_EPS = 2;

/**
 * Ar horizontalus „strip“ turi slinkties perteklių (`scrollWidth` > `clientWidth`).
 * Kai visos kortelės telpa į plotį — rodyklių / taškų nerodyti.
 */
export function useCarouselStripOverflow(
  scrollerRef: RefObject<HTMLDivElement | null>,
  slideCount: number
): boolean {
  const [hasOverflow, setHasOverflow] = useState(false);

  const measure = useCallback(() => {
    const root = scrollerRef.current;
    if (!root || slideCount <= 1) {
      setHasOverflow(false);
      return;
    }
    setHasOverflow(root.scrollWidth > root.clientWidth + OVERFLOW_EPS);
  }, [scrollerRef, slideCount]);

  useLayoutEffect(() => {
    measure();
  }, [measure]);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el || slideCount <= 1) return;

    const ro = new ResizeObserver(() => {
      measure();
    });
    ro.observe(el);
    window.addEventListener("resize", measure);

    const imgs = Array.from(el.querySelectorAll("img"));
    imgs.forEach((img) => {
      if (!img.complete) img.addEventListener("load", measure, { once: true });
    });

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [measure, slideCount, scrollerRef]);

  return hasOverflow;
}
