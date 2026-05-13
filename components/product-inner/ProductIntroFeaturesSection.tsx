"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

import { AnimatedSection } from "@/components/animations/AnimatedSection";
import type { ProductInnerFeature } from "@/data/product-inner/types";

import { ProductSectionHeading } from "./ProductSectionHeading";

gsap.registerPlugin(ScrollTrigger);

type ProductIntroFeaturesSectionProps = {
  id: string;
  heading: string;
  headingAccentLead?: string;
  body: string;
  features: ProductInnerFeature[];
  primaryCta?: { label: string; href: string };
};

/**
 * Intro + privalumų kortelės. Desktop (Figma 8082:15548): tinklelis `stretch` — kairys stulpelis
 * to paties aukščio kaip dešinys, `justify-between`; tik antraštė pin'inama (`headingPinRef`), ne visas
 * stulpelis — taip išvengiama „visas kairys sticky“ jausmo ir veiks su ScrollSmoother (`sticky` CSS
 * dažnai neveikia ant transformuoto `#smooth-content`).
 * Aktyvi kortelė — gsap.ticker + ScrollTrigger scrollEnd.
 */
export function ProductIntroFeaturesSection({
  id,
  heading,
  headingAccentLead,
  body,
  features,
  primaryCta,
}: ProductIntroFeaturesSectionProps) {
  const cta = primaryCta ?? { label: "Gauti pasiūlymą", href: "/kontaktai#uzklausa" };

  const pinTriggerRef = useRef<HTMLDivElement | null>(null);
  const headingPinRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const rafRef = useRef<number | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const computeActiveIndex = useCallback(() => {
    const wrap = pinTriggerRef.current;
    if (!wrap) return;

    const wr = wrap.getBoundingClientRect();
    const vh = window.innerHeight;
    if (wr.bottom < -vh || wr.top > vh * 2) return;

    const n = features.length;
    if (n === 0) return;

    const bandTop = vh * 0.34;
    const bandBottom = vh * 0.66;

    let bestIdx = 0;
    let bestOverlap = 0;

    for (let i = 0; i < n; i += 1) {
      const el = cardRefs.current[i];
      if (!el) continue;
      const r = el.getBoundingClientRect();
      const overlap = Math.min(r.bottom, bandBottom) - Math.max(r.top, bandTop);
      if (overlap > bestOverlap) {
        bestOverlap = overlap;
        bestIdx = i;
      }
    }

    if (bestOverlap < 4) {
      let closestIdx = 0;
      let closestDist = Number.POSITIVE_INFINITY;
      const mid = (bandTop + bandBottom) / 2;
      for (let i = 0; i < n; i += 1) {
        const el = cardRefs.current[i];
        if (!el) continue;
        const r = el.getBoundingClientRect();
        if (r.bottom < 0 || r.top > vh) continue;
        const c = (r.top + r.bottom) / 2;
        const d = Math.abs(c - mid);
        if (d < closestDist) {
          closestDist = d;
          closestIdx = i;
        }
      }
      setActiveIndex((prev) => (prev === closestIdx ? prev : closestIdx));
      return;
    }

    setActiveIndex((prev) => (prev === bestIdx ? prev : bestIdx));
  }, [features.length]);

  const scheduleCompute = useCallback(() => {
    if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      computeActiveIndex();
    });
  }, [computeActiveIndex]);

  useLayoutEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, features.length);
    computeActiveIndex();
  }, [features.length, computeActiveIndex]);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const onScrollEnd = () => {
      computeActiveIndex();
    };
    ScrollTrigger.addEventListener("scrollEnd", onScrollEnd);

    if (reduced) {
      window.addEventListener("scroll", scheduleCompute, { passive: true });
      window.addEventListener("resize", scheduleCompute);
      return () => {
        ScrollTrigger.removeEventListener("scrollEnd", onScrollEnd);
        window.removeEventListener("scroll", scheduleCompute);
        window.removeEventListener("resize", scheduleCompute);
      };
    }

    gsap.ticker.add(computeActiveIndex);
    window.addEventListener("resize", scheduleCompute);
    return () => {
      ScrollTrigger.removeEventListener("scrollEnd", onScrollEnd);
      gsap.ticker.remove(computeActiveIndex);
      window.removeEventListener("resize", scheduleCompute);
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [computeActiveIndex, scheduleCompute]);

  useLayoutEffect(() => {
    const trigger = pinTriggerRef.current;
    const headingEl = headingPinRef.current;
    if (!trigger || !headingEl) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const pin = ScrollTrigger.create({
        trigger,
        pin: headingEl,
        start: "top 140px",
        end: "bottom bottom",
        pinSpacing: true,
        invalidateOnRefresh: true,
      });
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
        computeActiveIndex();
      });
      return () => {
        pin.kill();
      };
    });

    return () => {
      mm.revert();
      requestAnimationFrame(() => ScrollTrigger.refresh());
    };
  }, [features.length, computeActiveIndex]);

  return (
    <AnimatedSection
      as="section"
      className="scroll-mt-32 w-full bg-white md:scroll-mt-40"
      id={id}
      motion="fade"
    >
      <div
        ref={pinTriggerRef}
        className="mx-auto max-w-[1440px] px-4 pb-14 pt-14 md:px-[70px] lg:pb-[100px] lg:pt-[100px]"
      >
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-x-12 lg:gap-y-0">
          <div className="order-1 flex min-h-0 w-full min-w-0 flex-col gap-[30px] lg:order-none lg:h-full lg:max-w-[min(100%,36rem)] lg:justify-between lg:gap-0">
            <div className="min-h-0 lg:flex-1">
              <div ref={headingPinRef}>
                <ProductSectionHeading
                  accentLead={headingAccentLead}
                  className="pb-6 text-[28px] font-semibold leading-[1.12] tracking-[-0.032em] md:text-[38px] lg:text-[45px] lg:leading-[1.15] lg:tracking-[-0.02em]"
                >
                  {heading}
                </ProductSectionHeading>
              </div>
            </div>
            <div className="flex shrink-0 flex-col gap-[30px]">
              <p className="w-full text-[15px] font-normal leading-6 text-[#16216b] md:text-[16px] md:leading-[24px]">
                {body}
              </p>
              <Link
                className="inline-flex w-fit items-center justify-center rounded-full bg-[#263cd0] px-[30px] py-[15px] text-[15px] font-semibold text-white transition hover:bg-[#1e31a8]"
                href={cta.href}
              >
                {cta.label}
              </Link>
            </div>
          </div>

          <div className="order-2 flex min-h-0 min-w-0 w-full flex-col gap-4 lg:order-none">
            {features.map((f, i) => {
              const isActive = activeIndex === i;
              return (
                <article
                  className={`flex min-h-[280px] w-full flex-col justify-between rounded-2xl px-8 py-10 transition-colors duration-300 ease-out lg:min-h-[392px] lg:px-8 lg:pb-10 lg:pt-12 ${
                    isActive
                      ? "bg-[#263cd0] text-white shadow-md"
                      : "bg-[#f6f7ff] text-[#59799f] shadow-none"
                  }`}
                  data-state={isActive ? "active" : "inactive"}
                  key={f.title}
                  ref={(node) => {
                    cardRefs.current[i] = node;
                  }}
                >
                  <h3
                    className={`w-full text-[22px] font-semibold leading-tight tracking-[-0.03em] transition-colors duration-300 lg:text-[30px] lg:leading-[1.2] lg:tracking-[-0.033em] ${
                      isActive ? "text-white opacity-100" : "text-[#59799f]"
                    }`}
                  >
                    {f.title}
                  </h3>
                  <p
                    className={`mt-8 w-full text-[15px] font-normal leading-6 transition-colors duration-300 lg:mt-0 lg:text-[16px] lg:leading-[24px] ${
                      isActive ? "text-white" : "text-[#16216b]"
                    }`}
                  >
                    {f.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
