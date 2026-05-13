"use client";

import Link from "next/link";

import { ParallaxCoverImage } from "@/components/ui/ParallaxCoverImage";
import { useState } from "react";

type FireTab = {
  title: string;
  body: string;
  imageSrc: string;
  imageAlt: string;
  imagePosition: string;
};

const FIRE_TABS: FireTab[] = [
  {
    title: "Evakuacijos keliai",
    body: "Padeda atskirti zonas ir užtikrinti saugesnį judėjimą evakuacijos metu.",
    imageSrc: "/images/alium4.png",
    imageAlt: "Priešgaisrinės durys evakuacijos kelyje",
    imagePosition: "52% 45%",
  },
  {
    title: "Techninės patalpos",
    body: "Dažnai turi papildomus saugos reikalavimus, todėl svarbus tiksliai parinktas durų sprendimas.",
    imageSrc: "/images/alium3.png",
    imageAlt: "Techninė patalpa su specialios paskirties durimis",
    imagePosition: "55% 40%",
  },
  {
    title: "Daugiabučių bendros zonos",
    body: "Naudojamos laiptinėse, koridoriuose, rūsiuose ar kitose bendro naudojimo erdvėse.",
    imageSrc: "/images/durys.png",
    imageAlt: "Daugiabučio bendrų zonų durys",
    imagePosition: "48% 48%",
  },
  {
    title: "Komerciniai ir pramoniniai objektai",
    body: "Tinka biurams, parduotuvėms, sandėliams, administracinėms ir gamybinėms zonoms.",
    imageSrc: "/images/alium2.png",
    imageAlt: "Komercinio objekto specialios paskirties durys",
    imagePosition: "50% 50%",
  },
];

export function SpecialiosPriesgaisrinesSection({ sectionId = "priesgaisrines-durys" }: { sectionId?: string }) {
  const [activeTab, setActiveTab] = useState(0);
  const active = FIRE_TABS[activeTab]!;

  return (
    <section className="w-full bg-white px-4 py-16 md:px-[70px] md:py-[100px]" id={sectionId}>
      <div className="mx-auto max-w-[1440px]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-stretch lg:gap-[100px]">
          <div className="flex min-w-0 flex-col">
            <div className="mb-8 flex flex-col gap-5 md:mb-10">
              <h3 className="max-w-[640px] text-3xl font-semibold leading-[1.16] tracking-[-0.032em] text-[#16216b] md:text-[45px] md:leading-[52px]">
                <span className="text-[#263cd0]">Priešgaisrinės durys </span>
                <span className="text-[#16216b]">saugumui ir reikalavimų atitikimui</span>
              </h3>
              <p className="max-w-[640px] text-base leading-relaxed text-[#16216b]">
                Priešgaisrinės durys skirtos pastatams ir zonoms, kuriose būtina riboti ugnies bei dūmų plitimą ir
                užtikrinti saugesnį žmonių judėjimą evakuacijos ar avarinių situacijų metu.
              </p>
              <Link
                className="inline-flex w-fit items-center justify-center rounded-full bg-[#263cd0] px-8 py-[15px] text-[15px] font-semibold text-white transition hover:bg-[#1e31a8]"
                href="/kontaktai#uzklausa"
              >
                Pasikonsultuoti dėl priešgaisrinių durų
              </Link>
            </div>

            <div className="flex flex-col">
              {FIRE_TABS.map((tab, idx) => {
                const isActive = idx === activeTab;
                return (
                  <button
                    className="w-full border-t border-[rgba(163,170,214,0.45)] py-4 text-left transition md:py-5"
                    key={tab.title}
                    onClick={() => setActiveTab(idx)}
                    type="button"
                  >
                    <p
                      className={`text-[17px] font-semibold leading-tight transition ${isActive ? "text-[#16216b]" : "text-[#16216b]/70"}`}
                    >
                      {tab.title}
                    </p>
                    <div className={`grid overflow-hidden transition-all duration-300 ease-out ${isActive ? "mt-3 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0"}`}>
                      <p className="min-h-0 max-w-[620px] text-[15px] leading-relaxed text-[#16216b]">{tab.body}</p>
                    </div>
                  </button>
                );
              })}
              <div className="h-px w-full bg-[rgba(163,170,214,0.45)]" />
            </div>

          </div>

          <div className="relative min-h-[360px] overflow-hidden rounded-2xl bg-[#f6f7ff] md:min-h-[520px]">
            {FIRE_TABS.map((tab, idx) => (
              <div
                className={`absolute inset-0 transition-opacity duration-300 ease-out ${idx === activeTab ? "opacity-100" : "opacity-0"}`}
                key={tab.title}
              >
                <ParallaxCoverImage
                  alt={tab.imageAlt}
                  fill
                  sizes="(max-width: 1023px) 100vw, 45vw"
                  src={tab.imageSrc}
                  style={{ objectPosition: tab.imagePosition }}
                />
              </div>
            ))}

            <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4 md:p-6">
              <div className="rounded-xl bg-white/86 p-4 shadow-[0_10px_30px_rgba(22,33,107,0.12)] backdrop-blur-sm">
                <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[#16216b]">Aktyvi zona</p>
                <p className="mt-2 text-lg font-semibold leading-tight text-[#16216b]">{active.title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
