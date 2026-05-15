import { HomePage } from "@/components/home/HomePage";
import { homeMetadata } from "@/lib/seo";

export const metadata = homeMetadata({
  title: "Langai, durys, stiklinimas Šiauliuose | Langana",
  description:
    "Langai, durys, stiklinimas Šiauliuose. 20+ metų patirties, 300+ projektų, sertifikuota kokybė. Montavimas per 3–5 d. Nemokamas matavimas ir pasiūlymas per 24 val.",
  path: "/",
});

export default function Home() {
  return <HomePage />;
}
