/** Horizontalios karuselės žingsnis (`/langai`, case studies ir kt.). */
export const CAROUSEL_GAP_PX = 30;

export function getCarouselStepPx(el: HTMLElement): number {
  const slide = el.querySelector<HTMLElement>("[data-carousel-slide]");
  const fallback = Math.floor(el.clientWidth * 0.92);
  return (slide?.offsetWidth ?? fallback) + CAROUSEL_GAP_PX;
}

export function scrollCarouselByDir(el: HTMLElement, dir: -1 | 1, wrap: boolean): void {
  const step = getCarouselStepPx(el);
  const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth);
  const eps = 4;
  if (maxScroll <= eps) return;
  if (dir === 1) {
    if (el.scrollLeft + eps >= maxScroll) {
      if (wrap) el.scrollTo({ left: 0, behavior: "auto" });
      return;
    }
    el.scrollBy({ left: step, behavior: "auto" });
    return;
  }
  if (el.scrollLeft <= eps) {
    if (wrap) el.scrollTo({ left: maxScroll, behavior: "auto" });
    return;
  }
  el.scrollBy({ left: -step, behavior: "auto" });
}
