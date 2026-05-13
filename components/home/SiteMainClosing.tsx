import { HomeCta } from "@/components/home/HomeCta";
import { SiteFooter } from "@/components/home/SiteFooter";

/** Tas pats CTA + footer blokas kaip pagrindiniame puslapyje — naudoti visuose vidiniuose maršrutuose. */
export function SiteMainClosing() {
  return (
    <>
      <HomeCta />
      <SiteFooter />
    </>
  );
}
