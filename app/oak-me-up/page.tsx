import type { Metadata } from "next";

import { OakQuoteTable, oakMeUpSampleQuoteRows } from "@/components/oak-me-up/OakQuoteTable";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Oak Me Up",
  description: "Oak Me Up sprendimai – Langana.",
  path: "/oak-me-up",
  noindex: true,
});

export default function OakMeUpQuotePage() {
  return (
    <main className="flex min-h-full justify-center bg-[#fafafa] px-5 py-16 text-[#2b2b2b]">
      <div className="w-full max-w-lg">
        <h1 className="mb-8 text-xl font-semibold tracking-tight text-[#1c3a13]">
          Oak Me Up — užsakymo lentelė
        </h1>
        <OakQuoteTable rows={oakMeUpSampleQuoteRows} sectionLabel="Parketlentės" />
        <p className="mt-6 max-w-[513px] text-sm leading-relaxed text-[#7a7a7a]">
          Kainos ir kodai pagal{" "}
          <a className="text-[#1c3a13] underline underline-offset-2" href="https://oakmeup.lt/kolekcijos/YE143190NO">
            YE143190NO
          </a>{" "}
          ir{" "}
          <a className="text-[#1c3a13] underline underline-offset-2" href="https://oakmeup.lt/kolekcijos/YE204300U">
            YE204300U
          </a>{" "}
          puslapius Oak Me Up kataloge.
        </p>
      </div>
    </main>
  );
}
