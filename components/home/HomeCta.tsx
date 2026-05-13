"use client";

import Image from "next/image";
import Link from "next/link";
import {
  useLayoutEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type RefObject,
} from "react";
import { KontaktaiQuoteLink } from "@/components/kontaktai/KontaktaiQuoteLink";
import { assets } from "@/lib/figma-assets";
import { HeroPattern } from "@/components/home/HeroPattern";

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function useCtaScrollProgress(sectionRef: RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0);
  const targetRef = useRef(0);
  const displayRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  const motionReduced = useSyncExternalStore(
    (on) => {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      mq.addEventListener("change", on);
      return () => mq.removeEventListener("change", on);
    },
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false
  );

  useLayoutEffect(() => {
    if (motionReduced) return;
    const el = sectionRef.current;
    if (!el) return;

    const pump = () => {
      const t = targetRef.current;
      let s = displayRef.current;
      s += (t - s) * 0.22;
      if (Math.abs(t - s) < 0.0025) s = t;
      displayRef.current = s;
      setProgress(s);
      if (Math.abs(t - s) > 0.0025) {
        rafRef.current = requestAnimationFrame(pump);
      } else {
        rafRef.current = null;
      }
    };

    const ensurePump = () => {
      if (rafRef.current == null) {
        rafRef.current = requestAnimationFrame(pump);
      }
    };

    const read = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = Math.max(0, Math.min(1, 1 - rect.top / vh));
      targetRef.current = p;
      ensurePump();
    };

    read();
    window.addEventListener("scroll", read, { passive: true });
    window.addEventListener("resize", read, { passive: true });
    return () => {
      window.removeEventListener("scroll", read);
      window.removeEventListener("resize", read);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    };
  }, [motionReduced, sectionRef]);

  return {
    progress: motionReduced ? 1 : progress,
    reduced: motionReduced,
  };
}

/** Kiek viewport aukščio „eina“ per pilną atsiradimą (didesnis = lėčiau, mažiau „šuolio“). */
const REVEAL_SPAN = 0.92;
/** Pradinis poslinkis (px) — mažesnis nei anksčiau, kad nebūtų staigaus „iššokimo“. */
const REVEAL_RISE_PX = 56;

function revealTFromProgress(raw: number) {
  if (raw <= 0) return 0;
  if (raw >= REVEAL_SPAN) return 1;
  return raw / REVEAL_SPAN;
}

type HomeCtaProps = {
  buildingImageSrc?: string;
  showPattern?: boolean;
  title?: string;
  titleHighlight?: string;
  subtitle?: string;
  ctaLabel?: string;
};

/** Pagrindinio puslapio stiliaus CTA — tas pats išdėstymas visur (`SiteMainClosing`). */
export function HomeCta({
  buildingImageSrc,
  showPattern = false,
  title,
  titleHighlight,
  subtitle,
  ctaLabel,
}: HomeCtaProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const { progress, reduced } = useCtaScrollProgress(sectionRef);
  const rawForReveal = reduced ? 1 : progress;
  const t = revealTFromProgress(rawForReveal);
  const smooth = t * t * (3 - 2 * t);
  const rise = lerp(REVEAL_RISE_PX, 0, smooth);
  const op = lerp(0, 1, smooth);
  const buildingSrc = buildingImageSrc ?? assets.cta.building;
  const usesDefaultHeadline = title == null && titleHighlight == null;

  let headlineTitle: string;
  let headlineHighlight: string | null;
  if (usesDefaultHeadline) {
    headlineTitle = "Pasiruošę pakeisti ";
    headlineHighlight = "savo namus";
  } else if (title != null && titleHighlight == null) {
    headlineTitle = title;
    headlineHighlight = null;
  } else {
    headlineTitle = title ?? "Pasiruošę pakeisti ";
    headlineHighlight = titleHighlight ?? "savo namus";
  }

  const highlightEndsWithQuestion =
    headlineHighlight != null && /\?\s*$/.test(headlineHighlight.trimEnd());

  return (
    <section
      ref={sectionRef}
      className="relative mb-0 w-full overflow-x-clip bg-[#f6f7ff] pt-10 pb-0 md:pt-14"
    >
      {showPattern ? (
        <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
          <HeroPattern />
        </div>
      ) : null}
      {/* Tekstas z-[15] — ten, kur persidengia su nuotrauka (z-20), foto vizualiai „uždengia“. */}
      <div className="relative z-[15] mb-0 min-h-0 w-full max-md:px-0 md:min-h-[min(100vw,720px)]">
        <div
          className="relative mx-auto flex max-w-[658px] flex-col items-center gap-8 px-4 text-center max-md:pb-0 md:top-24 md:left-0 md:right-0 md:px-0 md:absolute"
          style={{
            transform: `translate3d(0, ${rise}px, 0)`,
            opacity: op,
          }}
        >
          <h2 className="text-4xl font-semibold leading-[1.12] tracking-[-0.02em] text-[#16216b] sm:text-5xl sm:leading-[1.12] md:text-[52px] md:leading-[60px] lg:text-[65px] lg:leading-[75px]">
            <span>{headlineTitle}</span>
            {headlineHighlight != null ? (
              <>
                {!usesDefaultHeadline ? <span className="text-[#16216b]">{"\u00A0"}</span> : null}
                <span className="text-[#263cd0]">{headlineHighlight}</span>
                {highlightEndsWithQuestion ? null : <span className="text-[#263cd0]">?</span>}
              </>
            ) : /\?\s*$/.test(headlineTitle.trimEnd()) ? null : (
              <span className="text-[#263cd0]">?</span>
            )}
          </h2>
          <p className="max-w-xl text-base font-semibold leading-normal text-[#16216b]">
            {subtitle ?? "Gaukite asmeninę konsultaciją ir pasiūlymą - nemokamai!"}
          </p>
          <KontaktaiQuoteLink
            className="inline-flex items-center justify-center rounded-full bg-[#263cd0] px-8 py-[15px] text-[15px] font-semibold text-[#f6f7ff] transition hover:bg-[#1e31a8]"
          >
            {ctaLabel ?? "Gaukite pasiūlymą"}
          </KontaktaiQuoteLink>
        </div>
      </div>

      <div
        className="pointer-events-none z-20 h-[min(72vw,420px)] min-h-[280px] w-full
          max-md:relative max-md:mx-0 max-md:mt-6
          md:absolute md:bottom-0 md:left-0 md:mt-0
          md:h-[min(52vw,520px)] md:min-h-0
          md:max-w-[min(100vw,720px)] md:w-[min(100vw,720px)]
          lg:h-[min(50vw,580px)]"
      >
        <div className="relative h-full w-full scale-x-[-1]">
          <Image
            alt=""
            className="object-cover object-left object-bottom"
            fill
            key={buildingSrc}
            priority
            sizes="(max-width: 768px) 100vw, min(720px, 50vw)"
            src={buildingSrc}
            unoptimized={buildingSrc.startsWith("https://") || buildingSrc.startsWith("http://")}
          />
        </div>
      </div>

      <div
        className="relative z-30 mx-auto flex w-full max-w-[280px] flex-col items-center justify-center gap-4 px-4 py-10 text-center
          max-md:min-h-[min(32vh,260px)]
          md:absolute md:bottom-10 md:left-auto md:right-10 md:top-auto md:mx-0 md:py-0
          lg:bottom-12 lg:right-[70px]"
      >
        <p className="w-full text-[16px] font-semibold leading-normal text-[#16216b] md:text-[18px]">
          Norite peržiūrėti mūsų
          <br />
          siūlomus produktus?
        </p>
        <Link
          className="inline-flex w-full max-w-[260px] items-center justify-center rounded-full bg-[#16216b] px-8 py-[15px] text-[15px] font-semibold text-white transition hover:bg-[#0f1545]"
          href="/katalogas"
        >
          Produktų katalogas
        </Link>
      </div>
    </section>
  );
}
