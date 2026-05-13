"use client";

import Link from "next/link";
import { useState } from "react";

import { PRIVACY_POLICY_HREF } from "@/lib/contact-href";
import {
  getStoredCookieConsent,
  pushConsentToGoogleTag,
  setStoredCookieConsent,
  type CookieConsentChoice,
} from "@/lib/cookie-consent";

function saveChoice(choice: CookieConsentChoice) {
  setStoredCookieConsent(choice);
  pushConsentToGoogleTag(choice);
}

export function CookieConsentBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;
  if (getStoredCookieConsent() !== null) return null;

  return (
    <div
      aria-label="Slapukų sutikimas"
      className="fixed bottom-0 left-0 right-0 z-[280] border-t border-[rgba(163,170,214,0.35)] bg-white/98 px-4 py-4 shadow-[0_-8px_32px_rgba(22,33,107,0.12)] backdrop-blur-sm md:px-6 md:py-5"
      role="region"
    >
      <div className="mx-auto flex max-w-[1440px] flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-8">
        <div className="min-w-0 flex-1 space-y-2">
          <p className="text-[15px] font-semibold leading-snug text-[#16216b] md:text-[16px]">
            Slapukai ir jūsų privatumas
          </p>
          <p className="text-[13px] leading-relaxed text-[#16216b] md:text-[14px]">
            Naudojame būtinuosius slapukus, kad svetainė veiktų. Jūsų sutikimu galime naudoti ir papildomus slapukus
            statistikai bei rinkodarai (pvz. „Google Analytics“), jei juos įjungsite. Galite rinktis tik būtinuosius arba
            sutikti su visais.{" "}
            <Link className="font-semibold text-[#263cd0] underline underline-offset-2 hover:no-underline" href={PRIVACY_POLICY_HREF}>
              Privatumo politika
            </Link>
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row sm:items-center sm:justify-end">
          <button
            className="inline-flex min-h-[44px] items-center justify-center rounded-full border border-[rgba(163,170,214,0.55)] bg-white px-5 py-2.5 text-[14px] font-semibold text-[#16216b] transition hover:border-[#263cd0]/50 hover:bg-[#f6f7ff] focus:outline-none focus:ring-2 focus:ring-[#263cd0] focus:ring-offset-2"
            onClick={() => {
              saveChoice("essential");
              setDismissed(true);
            }}
            type="button"
          >
            Tik būtinieji slapukai
          </button>
          <button
            className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-[#263cd0] px-6 py-2.5 text-[14px] font-semibold text-white transition hover:bg-[#1e31a8] focus:outline-none focus:ring-2 focus:ring-[#263cd0] focus:ring-offset-2"
            onClick={() => {
              saveChoice("all");
              setDismissed(true);
            }}
            type="button"
          >
            Sutinku su visais
          </button>
        </div>
      </div>
    </div>
  );
}
