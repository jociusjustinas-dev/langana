"use client";

import { type RefObject, useEffect } from "react";

/**
 * Ant horizontaliai perteklinio „strip“: blokuoja tik horizontalią ratuko intenciją
 * (`deltaX` > `deltaY` arba Shift+vertikalus), kad veiktų įprastas vertikalus puslapio slinkimas
 * (ypač su ScrollSmoother ir `overflow-x-hidden` / `auto`).
 */
export function usePreventHorizontalStripWheel(
  elRef: RefObject<HTMLElement | null>,
  enabled: boolean
): void {
  useEffect(() => {
    if (!enabled) return;
    const el = elRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (el.scrollWidth <= el.clientWidth + 2) return;

      const mostlyHorizontal = Math.abs(e.deltaX) > Math.abs(e.deltaY);
      const shiftHorizontal = e.shiftKey && Math.abs(e.deltaY) > 0;
      if (mostlyHorizontal || shiftHorizontal) {
        e.preventDefault();
      }
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, [enabled, elRef]);
}
