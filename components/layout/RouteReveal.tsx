"use client";

import { usePathname } from "next/navigation";
import { useLayoutEffect, useRef } from "react";

type RouteRevealProps = {
  children: React.ReactNode;
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

/**
 * Per-route wrapper to replay page-enter animation on navigation.
 * Home page keeps its dedicated staged animation sequence.
 */
export function RouteReveal({ children }: RouteRevealProps) {
  const pathname = usePathname();
  const animate = pathname !== "/";
  const rootRef = useRef<HTMLDivElement | null>(null);
  const targetsRef = useRef<HTMLElement[]>([]);
  const rafRef = useRef({ a: 0, b: 0 });

  useLayoutEffect(() => {
    if (!animate) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const root = rootRef.current;
    if (!root) return;

    clearRevealStyles(targetsRef.current);
    targetsRef.current = [];

    const allNodes = Array.from(root.querySelectorAll<HTMLElement>(REVEAL_SELECTOR)).filter(
      (el) => !el.closest("footer")
    );
    if (allNodes.length === 0) return;

    const viewportH = window.innerHeight;
    const viewportW = window.innerWidth;

    const intersectsViewport = (el: HTMLElement) => {
      const r = el.getBoundingClientRect();
      if (r.width <= 0 || r.height <= 0) return false;
      return r.bottom > 0 && r.right > 0 && r.top < viewportH && r.left < viewportW;
    };

    let targets = allNodes.filter(intersectsViewport);
    if (targets.length === 0) {
      targets = allNodes.slice(0, FALLBACK_COUNT);
    }

    targets.forEach((el, i) => {
      el.classList.add("route-reveal-item");
      el.classList.add("route-reveal-init");
      el.style.setProperty("--reveal-delay", `${Math.min(i, MAX_STAGGER_INDEX) * STAGGER_MS}ms`);
      targetsRef.current.push(el);
    });

    void root.getBoundingClientRect();

    let raf1 = 0;
    let raf2 = 0;
    raf1 = requestAnimationFrame(() => {
      raf2 = requestAnimationFrame(() => {
        targetsRef.current.forEach((el) => {
          el.classList.remove("route-reveal-init");
          el.classList.add("is-visible");
        });
      });
    });
    rafRef.current = { a: raf1, b: raf2 };

    return () => {
      cancelAnimationFrame(rafRef.current.a);
      cancelAnimationFrame(rafRef.current.b);
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
