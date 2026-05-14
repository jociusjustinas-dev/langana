"use client";

import { Phone } from "lucide-react";
import { useEffect, useState } from "react";

import { KontaktaiQuoteLink } from "@/components/kontaktai/KontaktaiQuoteLink";

/**
 * Fiksuota juosta tik mobiliajame: už `#smooth-wrapper` / ScrollSmoother transformo ribų
 * (`app/layout.tsx`). Be `visualViewport` / JS `translate` — tik `fixed` + `env(safe-area-inset-bottom)`.
 */
export function MobileStickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="mobile-sticky-cta fixed bottom-0 left-0 right-0 z-[200] border-t border-[#e5e7eb] bg-white pb-[env(safe-area-inset-bottom,0px)] shadow-[0_-4px_24px_rgba(22,33,107,0.08)] md:hidden">
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
  );
}
