"use client";

import { Phone } from "lucide-react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

import { KontaktaiQuoteLink } from "@/components/kontaktai/KontaktaiQuoteLink";

const MD_UP = "(min-width: 768px)";

/**
 * Kai layout ir visual viewport apačios nesutampa (pvz. Chrome mobilioji UI),
 * nustumame `translateY`, kad juosta „priliptų“ prie matomo ekrano apačios — be `margin-bottom`.
 */
function syncVisualViewportDock(root: HTMLElement) {
  const mq = window.matchMedia(MD_UP);
  if (mq.matches) {
    root.style.removeProperty("transform");
    return;
  }
  const vv = window.visualViewport;
  if (!vv) {
    root.style.removeProperty("transform");
    return;
  }
  const gap = Math.max(0, window.innerHeight - vv.offsetTop - vv.height);
  if (gap >= 1) {
    root.style.transform = `translate3d(0, ${gap}px, 0)`;
  } else {
    root.style.removeProperty("transform");
  }
}

export function MobileStickyCta() {
  const [visible, setVisible] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useLayoutEffect(() => {
    if (!visible) return;
    const root = rootRef.current;
    if (!root || typeof window === "undefined") return;

    const apply = () => syncVisualViewportDock(root);
    const mq = window.matchMedia(MD_UP);

    apply();
    mq.addEventListener("change", apply);
    window.addEventListener("resize", apply);
    window.visualViewport?.addEventListener("resize", apply);
    window.visualViewport?.addEventListener("scroll", apply);

    return () => {
      mq.removeEventListener("change", apply);
      window.removeEventListener("resize", apply);
      window.visualViewport?.removeEventListener("resize", apply);
      window.visualViewport?.removeEventListener("scroll", apply);
      root.style.removeProperty("transform");
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      ref={rootRef}
      className="fixed bottom-0 left-0 right-0 z-[200] md:hidden"
    >
      {/*
        Fono ir rėmelio sluoksnis: apačioje tik `env(safe-area-inset-bottom)` — baltas fonas
        užpildo home indicator zoną be `margin-bottom` po visa juosta.
      */}
      <div className="border-t border-[#e5e7eb] bg-white pb-[env(safe-area-inset-bottom,0px)] shadow-[0_-4px_24px_rgba(22,33,107,0.08)]">
        <div className="flex gap-3 px-4 py-3">
          <a
            aria-label="Skambinti"
            className="flex size-12 shrink-0 items-center justify-center rounded-full border-2 border-[#263cd0] text-[#263cd0]"
            href="tel:+37060620666"
          >
            <Phone aria-hidden className="size-[22px]" strokeWidth={2} />
          </a>
          <KontaktaiQuoteLink className="flex min-w-0 flex-[2] items-center justify-center rounded-full bg-[#263cd0] px-6 py-3 text-[14px] font-semibold text-white">
            Gauti pasiūlymą
          </KontaktaiQuoteLink>
        </div>
      </div>
    </div>
  );
}
