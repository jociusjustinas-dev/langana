import Image from "next/image";

import { assets } from "@/lib/figma-assets";

/** Figma „Footer“ — 1324×179; tėvinė sekcija duoda simetriškus horizontal padding (58 px @ 1440). */
export function FooterBrandWordmark() {
  return (
    <div className="mx-auto w-full max-w-[1324px]">
      <Image
        alt="Langana"
        className="no-rounded block h-auto w-full max-w-full"
        height={179}
        priority
        sizes="(max-width: 1324px) 100vw, 1324px"
        src={assets.footer.brandWordmark}
        width={1324}
      />
    </div>
  );
}
