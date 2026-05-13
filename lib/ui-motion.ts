/**
 * Bendri interaktyvūs judesiai (CSS / Tailwind) — easing ir trukmės.
 * Komponentuose papildomai naudokite `motion-reduce:transition-none` ir pan.
 */
export const UI_EASE_CSS = "cubic-bezier(0.22, 1, 0.36, 1)";

/** Tailwind arbitrary easing (pilna klasė) */
export const uiEaseClass = "ease-[cubic-bezier(0.22,1,0.36,1)]";

export const uiTransitionDropdown =
  `transition-[opacity,transform] duration-[220ms] ${uiEaseClass} motion-reduce:transition-none motion-reduce:duration-0`;

export const uiTransitionAccordion =
  `transition-[grid-template-rows,opacity] duration-[280ms] ${uiEaseClass} motion-reduce:transition-none motion-reduce:duration-0`;

export const uiTransitionDrawerPanel =
  `transition-[transform,opacity] duration-[300ms] ${uiEaseClass} motion-reduce:transition-none motion-reduce:duration-0`;

export const uiTransitionDrawerOverlay =
  `transition-opacity duration-[260ms] ${uiEaseClass} motion-reduce:transition-none motion-reduce:duration-0`;

export const uiTransitionModal =
  `transition-[opacity,transform] duration-[240ms] ${uiEaseClass} motion-reduce:transition-none motion-reduce:duration-0`;
