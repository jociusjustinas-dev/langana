"use client";

import { ScrollSmoother } from "gsap/ScrollSmoother";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

/** Ilgesnis, aiškiai juntamas „smooth scroll“ inkarams (ms), kai nėra ScrollSmoother. */
const DURATION_MS = 3400;
/** Kai elemento nėra `scroll-margin-top`, naudojamas lipnaus headerio atsvara (px). */
const FALLBACK_HEADER_OFFSET_PX = 96;

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

/** Ilgesnei trajektorijai — lėtesnis startas ir tolygus stabdymas. */
function easeInOutQuart(t: number): number {
  return t < 0.5 ? 8 * t ** 4 : 1 - (-2 * t + 2) ** 4 / 2;
}

function scrollPaddingTopPx(): number {
  const raw = getComputedStyle(document.documentElement).scrollPaddingTop;
  const n = parseFloat(raw);
  return Number.isFinite(n) ? n : 0;
}

function targetScrollYForElement(el: HTMLElement): number {
  const rect = el.getBoundingClientRect();
  const sm = parseFloat(getComputedStyle(el).scrollMarginTop);
  const margin = Number.isFinite(sm) && sm > 0 ? sm : FALLBACK_HEADER_OFFSET_PX;
  const docPad = scrollPaddingTopPx();
  const top = rect.top + window.scrollY - Math.max(margin, docPad);
  const maxScroll = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
  return Math.max(0, Math.min(top, maxScroll));
}

function animateScrollTo(endY: number): void {
  if (prefersReducedMotion()) {
    window.scrollTo({ top: endY, behavior: "auto" });
    return;
  }
  const startY = window.scrollY;
  const delta = endY - startY;
  if (Math.abs(delta) < 2) return;

  let startTime: number | null = null;
  const step = (now: number) => {
    if (startTime === null) startTime = now;
    const t = Math.min(1, (now - startTime) / DURATION_MS);
    const eased = easeInOutQuart(t);
    window.scrollTo(0, startY + delta * eased);
    if (t < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

/** ScrollTrigger pozicijos eilutė ScrollSmoother.scrollTo trečiam argumentui. */
function scrollSmootherAnchorPosition(el: HTMLElement): string {
  const sm = parseFloat(getComputedStyle(el).scrollMarginTop);
  const docPad = scrollPaddingTopPx();
  const px = Math.round(Math.max(Number.isFinite(sm) && sm > 0 ? sm : 0, docPad, FALLBACK_HEADER_OFFSET_PX));
  return `top top+=${px}px`;
}

function scrollToAnchorElement(el: HTMLElement): void {
  const smoother = ScrollSmoother.get();
  const reduced = prefersReducedMotion();
  const pos = scrollSmootherAnchorPosition(el);

  if (smoother) {
    smoother.scrollTo(el, !reduced, pos);
    return;
  }

  if (reduced) {
    window.scrollTo({ top: targetScrollYForElement(el), behavior: "auto" });
    return;
  }
  animateScrollTo(targetScrollYForElement(el));
}

function tryScrollToHash(hash: string): void {
  if (!hash || hash === "#") return;
  const id = decodeURIComponent(hash.slice(1));
  if (!id) return;
  const el = document.getElementById(id);
  if (!el) return;
  scrollToAnchorElement(el);
}

/**
 * Inkarų slinkimas: su aktyviu ScrollSmoother — per GSAP API; kitaip — ilgesnis rankinis slinkimas.
 */
export function SmoothScrollAnchors() {
  const pathname = usePathname();

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented) return;
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const el = e.target;
      if (!(el instanceof Element)) return;
      const a = el.closest("a[href]") as HTMLAnchorElement | null;
      if (!a) return;

      const hrefAttr = a.getAttribute("href");
      if (!hrefAttr || hrefAttr.startsWith("mailto:") || hrefAttr.startsWith("tel:")) return;

      let url: URL;
      try {
        url = new URL(a.href, window.location.href);
      } catch {
        return;
      }

      if (url.pathname !== window.location.pathname) return;
      if (!url.hash || url.hash === "#") return;

      const target = document.getElementById(decodeURIComponent(url.hash.slice(1)));
      if (!target) return;

      e.preventDefault();
      const next = `${url.pathname}${url.search}${url.hash}`;
      window.history.pushState(null, "", next);
      scrollToAnchorElement(target);
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, [pathname]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const hash = window.location.hash;
    if (!hash) return;
    let raf1 = 0;
    let raf2 = 0;
    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => tryScrollToHash(hash));
    });
    return () => {
      cancelAnimationFrame(raf1);
      cancelAnimationFrame(raf2);
    };
  }, [pathname]);

  return null;
}
