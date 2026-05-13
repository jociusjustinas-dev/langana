"use client";

import { useEffect, useState } from "react";

import { KontaktaiQuoteLink } from "@/components/kontaktai/KontaktaiQuoteLink";

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
    <div className="fixed bottom-0 left-0 right-0 z-[200] flex gap-3 border-t border-[#e5e7eb] bg-white px-4 pb-[max(0.75rem,env(safe-area-inset-bottom,0px))] pt-3 md:hidden">
      <a
        href="tel:+37060620666"
        className="flex flex-1 items-center justify-center rounded-full border-2 border-[#263cd0] py-3 text-[14px] font-semibold text-[#263cd0]"
      >
        Skambinti
      </a>
      <KontaktaiQuoteLink
        className="flex min-w-0 flex-[2] items-center justify-center rounded-full bg-[#263cd0] px-6 py-3 text-[14px] font-semibold text-white"
      >
        Gauti pasiūlymą
      </KontaktaiQuoteLink>
    </div>
  );
}
