/** Figma 8082:15568 — „Pritaikymo“ (#263cd0), „galimybės…“ (#16216b); su dvitaškiu — mėlyna iki „:“. */
export function AdaptationSectionTitle({ title }: { title: string }) {
  const pritaikymoRest = /^Pritaikymo\s+(.+)$/u.exec(title.trim());
  if (pritaikymoRest) {
    return (
      <h2 className="text-[36px] font-semibold leading-[1.08] tracking-[-0.032em] md:text-[45px] md:leading-[1.06] md:tracking-[-0.036em]">
        <span className="block text-[#263cd0]">Pritaikymo</span>
        <span className="block text-[#16216b]">{pritaikymoRest[1]}</span>
      </h2>
    );
  }

  const idx = title.indexOf(": ");
  if (idx === -1) {
    return (
      <h2 className="text-[36px] font-semibold leading-[1.08] tracking-[-0.032em] text-[#263cd0] md:text-[45px] md:tracking-[-0.036em]">
        {title}
      </h2>
    );
  }
  const blueLine = title.slice(0, idx + 1).trim();
  const darkRest = title.slice(idx + 2).trim();
  return (
    <h2 className="text-[36px] font-semibold leading-[1.08] tracking-[-0.032em] md:text-[45px] md:leading-[1.06] md:tracking-[-0.036em]">
      <span className="block text-[#263cd0]">{blueLine}</span>
      <span className="block text-[#16216b]">{darkRest}</span>
    </h2>
  );
}
