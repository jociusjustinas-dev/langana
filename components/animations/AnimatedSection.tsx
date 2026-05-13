"use client";

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { usePathname } from "next/navigation";

import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

export type AnimatedSectionAs = "div" | "section" | "article";

export type AnimatedSectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  /** CSS kintamasis `--in-view-delay` (ms). */
  delayMs?: number;
  /** Numatyta `true` — animacija kartą įėjus į viewport. */
  once?: boolean;
  /** `lift` — opacity + translateY (numatyta). `fade` — tik opacity, kad veiktų `position:sticky` viduje. */
  motion?: "lift" | "fade";
  as?: AnimatedSectionAs;
  threshold?: number;
  rootMargin?: string;
};

/**
 * Viewport įėjimo animacija (opacity + translateY), kaip pagrindinio puslapio judesys.
 * Po klientinės navigacijos animacija paleidžiama iš naujo (išorinis `key` = `pathname`).
 */
function AnimatedSectionInner({
  children,
  className,
  id,
  delayMs = 0,
  once = true,
  motion = "lift",
  as: Tag = "div",
  threshold = 0.1,
  rootMargin = "0px 0px -6% 0px",
}: AnimatedSectionProps) {
  const reduced = usePrefersReducedMotion();
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);
  const show = reduced || inView;

  useEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        if (!e) return;
        if (e.isIntersecting) {
          setInView(true);
          if (once) obs.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { root: null, rootMargin, threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [reduced, once, threshold, rootMargin]);

  const motionClass =
    motion === "fade"
      ? reduced
        ? ""
        : show
          ? "motion-in-view-fade-target is-visible"
          : "motion-in-view-fade-target"
      : reduced
        ? ""
        : show
          ? "motion-in-view-target is-visible"
          : "motion-in-view-target";
  const combined = [motionClass, className].filter(Boolean).join(" ");
  const style: CSSProperties | undefined = !reduced
    ? ({ ["--in-view-delay"]: `${delayMs}ms` } as CSSProperties)
    : undefined;

  const setRef = (node: HTMLElement | null) => {
    ref.current = node;
  };

  if (Tag === "section") {
    return (
      <section ref={setRef} className={combined} id={id} style={style}>
        {children}
      </section>
    );
  }
  if (Tag === "article") {
    return (
      <article ref={setRef} className={combined} id={id} style={style}>
        {children}
      </article>
    );
  }
  return (
    <div ref={setRef} className={combined} id={id} style={style}>
      {children}
    </div>
  );
}

export function AnimatedSection(props: AnimatedSectionProps) {
  const pathname = usePathname();
  return <AnimatedSectionInner key={pathname} {...props} />;
}
