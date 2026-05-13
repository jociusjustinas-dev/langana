import type { Metadata } from "next";

import { HomePageView } from "@/components/home/HomePageView";

export const metadata: Metadata = {
  title: {
    absolute: "Langana — langai, durys ir stiklinimas Šiauliuose",
  },
  description:
    "Aukščiausios kokybės langai, durys, stiklinimas ir stumdomos sistemos Šiauliuose. Montavimas per 3–5 dienas. Gaukite nemokamą pasiūlymą.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Langana — langai, durys ir stiklinimas Šiauliuose",
    description: "Montavimas per 3–5 dienas. Nemokama konsultacija ir pasiūlymas.",
    url: "/",
    images: [{ url: "/og-default.jpg", width: 1200, height: 630 }],
  },
};

export default function Home() {
  return <HomePageView />;
}
