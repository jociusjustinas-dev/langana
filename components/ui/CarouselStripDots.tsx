/** Taškų indikatorius po horizontalia karusele (baltas/kanalas ant šviesaus). */
export function CarouselStripDots({
  count,
  activeIndex,
}: {
  count: number;
  activeIndex: number;
}) {
  if (count <= 1) return null;
  return (
    <div aria-hidden className="flex gap-1.5">
      {Array.from({ length: count }, (_, i) => (
        <span
          className={
            i === activeIndex
              ? "h-2.5 w-[30px] shrink-0 rounded-full bg-white/55 transition-[width,opacity] duration-300 ease-out"
              : "size-2.5 shrink-0 rounded-full bg-white/50 transition-[width,opacity] duration-300 ease-out"
          }
          key={i}
        />
      ))}
    </div>
  );
}
