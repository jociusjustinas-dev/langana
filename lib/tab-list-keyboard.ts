import type { KeyboardEvent } from "react";

/** WAI-ARIA tablist: rodyklės, Home, End — keičia aktyvų tabą ir fokusą. */
export function handleTabListArrowKey(
  e: KeyboardEvent<HTMLButtonElement>,
  opts: {
    index: number;
    count: number;
    tabDomId: (index: number) => string;
    setIndex: (index: number) => void;
  },
): void {
  const { index, count, tabDomId, setIndex } = opts;
  if (count <= 0) return;

  const focusAt = (i: number) => {
    setIndex(i);
    queueMicrotask(() => {
      document.getElementById(tabDomId(i))?.focus();
    });
  };

  switch (e.key) {
    case "ArrowRight":
    case "ArrowDown":
      e.preventDefault();
      focusAt(Math.min(index + 1, count - 1));
      break;
    case "ArrowLeft":
    case "ArrowUp":
      e.preventDefault();
      focusAt(Math.max(index - 1, 0));
      break;
    case "Home":
      e.preventDefault();
      focusAt(0);
      break;
    case "End":
      e.preventDefault();
      focusAt(count - 1);
      break;
    default:
      break;
  }
}
