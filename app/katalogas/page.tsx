import type { Metadata } from "next";

import { KatalogasPageView } from "@/components/catalog/KatalogasPageView";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Produktų katalogas – langai, durys, stiklinimas",
  description:
    "Pilnas Langana produktų katalogas – langai, durys, stiklinimas, stumdomos sistemos, žiemos sodai, aliuminio sprendimai. Konsultacija ir pasiūlymas nemokamai.",
  path: "/katalogas",
});

export default function KatalogasPage() {
  return <KatalogasPageView />;
}
