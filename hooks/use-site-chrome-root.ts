"use client";

import { startTransition, useLayoutEffect, useState } from "react";

/** `app/layout.tsx` — antrinis root fiksuotiems sluoksniams už ScrollSmoother transformo. */
export function useSiteChromeRoot(): HTMLElement | null {
  const [root, setRoot] = useState<HTMLElement | null>(null);

  useLayoutEffect(() => {
    startTransition(() => {
      setRoot(document.getElementById("site-chrome-root"));
    });
  }, []);

  return root;
}
