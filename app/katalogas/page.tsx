import type { Metadata } from "next";

import { KatalogasPageView } from "@/components/catalog/KatalogasPageView";

export const metadata: Metadata = {
  title: "Produktų katalogas",
  description:
    "Langų, durų, stiklinimo, stumdomų sistemų ir aliuminio konstrukcijų katalogas. Greitas montavimas Šiauliuose. Gaukite nemokamą pasiūlymą.",
};

export default function KatalogasPage() {
  return <KatalogasPageView />;
}
