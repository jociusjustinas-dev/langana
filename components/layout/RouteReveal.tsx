"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect, useRef, type ReactNode } from "react";

type RouteRevealProps = {
  children: ReactNode;
};

const REVEAL_SELECTOR = [
  "main section",
  "main article",
  "main h1",
  "main h2",
  "main h3",
  "main h4",
  "main p",
  "main li",
  "main img",
  "main a",
  "main button",
  "main table",
  "main blockquote",
].join(", ");

const MAX_STAGGER_INDEX = 18;
const STAGGER_MS = 38;
/** Jei po navigacijos matmenys dar 0 ar viskas „už“ viewport — vis tiek animuojame viršutinį bloką. */
const FALLBACK_COUNT = 40;

function clearRevealStyles(elements: readonly HTMLElement[]) {
  elements.forEach((el) => {
    el.classList.remove("route-reveal-item", "route-reveal-init", "is-visible");
    el.style.removeProperty("--reveal-delay");
  });
}

function isBlockRevealEl(el: HTMLElement): boolean {
  const t = el.tagName;
  return t === "SECTION" || t === "ARTICLE";
}

/**
 * Per-route wrapper to replay page-enter animation on navigation.
 * Home page keeps its dedicated staged animation sequence.
 *
 * Blokai (`section`, `article`) žemiau lanksto: `IntersectionObserver` — kaip `AnimatedSection`,
 * kad mobilioje ilgi puslapiai „įeitų“ slenkant, o ne tik pirmo ekrano mazgas.
 */
export function RouteReveal({ children }: RouteRevealProps) {
  const pathname = usePathname();
  const animate = pathname !== "/";
  const rootRef = useRef<HTMLDivElement | null>(null);
  const targetsRef = useRef<HTMLElement[]>([]);
  const rafRef = useRef({ a: 0, b: 0 });
  const ioRef = useRef<IntersectionObserver | null>(null);

  useLayoutEffect(() => {
    if (!animate) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const root = rootRef.current;
    if (!root) return;

    ioRef.current?.disconnect();
    ioRef.current = null;
    clearRevealStyles(targetsRef.current);
    targetsRef.current = [];

    const allNodes = Array.from(root.querySelectorAll<HTMLElement>(REVEAL_SELECTOR)).filter(
      (el) => !el.closest("footer"),
    );
    if (allNodes.length === 0) return;

    const viewportH = window.innerHeight;
    const viewportW = window.innerWidth;

    const intersectsViewport = (el: HTMLElement) => {
      const r = el.getBoundingClientRect();
      if (r.width <= 0 || r.height <= 0) return false;
      return r.bottom > 0 && r.right > 0 && r.top < viewportH && r.left < viewportW;
    };

    let immediate = allNodes.filter(intersectsViewport);
    if (immediate.length === 0) {
      immediate = allNodes.slice(0, FALLBACK_COUNT);
    }

    const immediateTargets: HTMLElement[] = [];
    immediate.forEach((el, i) => {
      el.classList.add("route-reveal-item");
      el.classList.add("route-reveal-init");
      el.style.setProperty("--reveal-delay", `${Math.min(i, MAX_STAGGER_INDEX) * STAGGER_MS}ms`);
      immediateTargets.push(el);
    });
    targetsRef.current = immediateTargets.slice();

    const immediateSet = new Set(immediate);
    const deferredBlocks = allNodes.filter((el) => isBlockRevealEl(el) && !immediateSet.has(el));

    if (deferredBlocks.length > 0) {
      const isNarrow = window.matchMedia("(max-width: 767.98px)").matches;
      const io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            const el = entry.target as HTMLElement;
            el.classList.remove("route-reveal-init");
            el.classList.add("is-visible");
            io.unobserve(el);
          }
        },
        {
          root: null,
          /** Mobilus: šiek tiek anksčiau nei „griežtas“ kirtimas, kad sekcija jaučiasi kaip AnimatedSection. */
          rootMargin: isNarrow ? "0px 0px 8% 0px" : "0px 0px -6% 0px",
          threshold: 0.08,
        },
      );
      ioRef.current = io;

      deferredBlocks.forEach((el) => {
        el.classList.add("route-reveal-item");
        el.classList.add("route-reveal-init");
        el.style.setProperty("--reveal-delay", "0ms");
        targetsRef.current.push(el);
        io.observe(el);
      });
    }

    void root.getBoundingClientRect();

    let raf1 = 0;
    let raf2 = 0;
    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        immediateTargets.forEach((el) => {
          el.classList.remove("route-reveal-init");
          el.classList.add("is-visible");
        });
      });
    });
    rafRef.current = { a: raf1, b: raf2 };

    return () => {
      cancelAnimationFrame(rafRef.current.a);
      cancelAnimationFrame(rafRef.current.b);
      ioRef.current?.disconnect();
      ioRef.current = null;
      clearRevealStyles(targetsRef.current);
      targetsRef.current = [];
    };
  }, [pathname, animate]);

  return (
    <div className={animate ? "page-reveal" : undefined} key={pathname} ref={rootRef}>
      {children}
    </div>
  );
}
