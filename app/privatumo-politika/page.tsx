import type { Metadata } from "next";

import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";
import { PrivacyPolicyPageView } from "@/components/legal/PrivacyPolicyPageView";
import { pageMeta } from "@/lib/seo";

export const metadata: Metadata = pageMeta({
  title: "Privatumo politika",
  description:
    "Langana privatumo politika – kaip tvarkome jūsų asmens duomenis, slapukai, jūsų teisės. UAB Langana, Šiauliai.",
  path: "/privatumo-politika",
});

export default function PrivatumoPolitikaPage() {
  return (
    <div className="flex min-h-full flex-col bg-white text-[#16216b]">
      <SiteHeader entrance="default" />
      <main className="flex min-h-0 flex-1 flex-col">
        <PrivacyPolicyPageView />
        <SiteFooter />
      </main>
    </div>
  );
}
