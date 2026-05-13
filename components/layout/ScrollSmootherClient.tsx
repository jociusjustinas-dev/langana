"use client";

import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const DESKTOP_MQ = "(min-width: 768px)";

/**
 * GSAP ScrollSmoother — tik ≥768px: mažuose ekranuose paliekamas natyvus slinkimas (Touch, „iPhone“ bar).
 * @see https://gsap.com/docs/v3/Plugins/ScrollSmoother/
 */
export function ScrollSmootherClient() {
  const pathname = usePathname();
  const smootherRef = useRef<ScrollSmoother | null>(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const mq = window.matchMedia(DESKTOP_MQ);

    const sync = () => {
      if (!mq.matches) {
        smootherRef.current?.kill();
        smootherRef.current = null;
        ScrollTrigger.refresh();
        return;
      }
      if (smootherRef.current) return;
      smootherRef.current = ScrollSmoother.create({
        smooth: 1.25,
        effects: false,
        smoothTouch: 0.14,
        ease: "expo.out",
      });
    };

    sync();
    mq.addEventListener("change", sync);
    return () => {
      mq.removeEventListener("change", sync);
      smootherRef.current?.kill();
      smootherRef.current = null;
    };
  }, []);

  useLayoutEffect(() => {
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });
  }, [pathname]);

  return null;
}
