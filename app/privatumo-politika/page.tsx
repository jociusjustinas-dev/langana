import type { Metadata } from "next";

import { PrivacyPolicyPageView } from "@/components/legal/PrivacyPolicyPageView";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";

export const metadata: Metadata = {
  title: "Privatumo politika",
  description:
    "UAB Langana privatumo politika: asmens duomenų tvarkymas, slapukai, BDAR teisės ir kontaktai duomenų klausimais.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/privatumo-politika" },
};

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
