"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Minus, Plus } from "lucide-react";
import { createPortal } from "react-dom";
import { startTransition, useCallback, useEffect, useId, useLayoutEffect, useRef, useState } from "react";
import { useSiteChromeRoot } from "@/hooks/use-site-chrome-root";
import { assets } from "@/lib/figma-assets";
import { HeaderDrawer } from "@/components/home/HeaderDrawer";
import { MegaMenu } from "@/components/home/MegaMenu";
import { KontaktaiQuoteLink } from "@/components/kontaktai/KontaktaiQuoteLink";
import { googleMapsSearchUrl } from "@/lib/google-maps-url";
import { MEGA_MENU, isAnyMegaSectionPathActive, megaSectionPathActive, sectionHasMegaMenu } from "@/lib/mega-menu-data";

const HEADER_SALON_ADDRESS = "Tilžės g. 83b, Šiauliai";
const HEADER_PHONE_HREF = "tel:+37060620666";
const HEADER_EMAIL = "uablangana@gmail.com";

/** Mėlynoje juostoje: numatyta šviesi baltuma, hover – ryškesnė šviesiai mėlyna. */
const headerBarLinkClass =
  "text-white/95 no-underline decoration-transparent transition-colors hover:text-[#c8d8ff] hover:no-underline";

type MegaPanelState = { id: string; phase: "open" | "closing" };

type SiteHeaderProps = {
  className?: string;
  /**
   * Pagrindinis puslapis: header pradeda virš ekrano ir nusileidžia, kai `visible` tampa `true`.
   * Kitos sritys: palikite numatytuosius nustatymus.
   */
  entrance?: "default" | "slide";
  visible?: boolean;
  /**
   * Pagrindinis SSR: antraštė visada HTML; slinkimas per `data-home-preloader` + globals.css.
   */
  homeEntrance?: boolean;
};

export function SiteHeader({
  className = "",
  entrance = "default",
  visible = true,
  homeEntrance = false,
}: SiteHeaderProps) {
  const pathname = usePathname();
  const slide = entrance === "slide";
  const hidden = slide && !visible && !homeEntrance;
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [mega, setMega] = useState<MegaPanelState | null>(null);
  const drawerTitleId = useId();
  const navShellRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLElement | null>(null);
  const chromeRoot = useSiteChromeRoot();

  const megaOpen = mega?.phase === "open";
  const activeMega = mega ? (MEGA_MENU.find((s) => s.id === mega.id) ?? null) : null;

  const forceCloseMega = useCallback(() => {
    setMega(null);
  }, []);

  const requestCloseMega = useCallback(() => {
    setMega((m) => (m?.phase === "open" ? { id: m.id, phase: "closing" } : m));
  }, []);

  useEffect(() => {
    if (!drawerOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [drawerOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (mega) {
        requestCloseMega();
        return;
      }
      if (drawerOpen) setDrawerOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [drawerOpen, mega, requestCloseMega]);

  useEffect(() => {
    startTransition(() => {
      forceCloseMega();
    });
  }, [pathname, forceCloseMega]);

  useLayoutEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const docEl = document.documentElement;
    const setVar = () => {
      /* +2 px: išvengti subpikselinės baltos linijos tarp portalo antraštės ir „flush“ hero. */
      const h = Math.ceil(el.getBoundingClientRect().height) + 2;
      docEl.style.setProperty("--langana-site-header-spacer", `${Math.max(132, h)}px`);
    };
    setVar();
    const ro = new ResizeObserver(setVar);
    ro.observe(el);
    return () => {
      ro.disconnect();
    };
  }, []);

  useLayoutEffect(() => {
    if (!chromeRoot) return;
    document.documentElement.setAttribute("data-langana-header-portal", "1");
    return () => {
      document.documentElement.removeAttribute("data-langana-header-portal");
    };
  }, [chromeRoot]);

  useEffect(() => {
    if (!megaOpen) return;
    const onDown = (e: MouseEvent) => {
      const t = e.target;
      if (!(t instanceof Node)) return;
      if (navShellRef.current?.contains(t)) return;
      requestCloseMega();
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [megaOpen, requestCloseMega]);

  const header = (
    <header
      ref={headerRef}
      {...(homeEntrance ? { "data-site-header-home": "" } : {})}
      className={[
        "z-50 w-full bg-[#f6f7ff]",
        homeEntrance || slide
          ? "fixed left-0 right-0 top-0"
          : "sticky top-0",
        homeEntrance
          ? "translate-y-0 opacity-100 transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
          : hidden
            ? "-translate-y-full opacity-0 pointer-events-none"
            : "translate-y-0 opacity-100",
        className,
      ].join(" ")}
    >
      <div className="flex w-full items-center justify-between gap-4 bg-[#16216b] px-4 py-3 text-white md:px-10">
        <div className="flex min-w-0 flex-1 flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-[13px] leading-normal sm:justify-start sm:text-left sm:text-[14px] md:text-left">
          <a className={headerBarLinkClass} href={HEADER_PHONE_HREF}>
            +370 606 20 666
          </a>
          <span aria-hidden className="select-none text-white/50">
            •
          </span>
          <a className={headerBarLinkClass} href={`mailto:${HEADER_EMAIL}`}>
            {HEADER_EMAIL}
          </a>
        </div>
        <div className="hidden min-w-0 flex-1 text-right text-[13px] sm:block sm:text-[14px]">
          <a
            aria-label={`Atidaryti adresą Google žemėlapyje: ${HEADER_SALON_ADDRESS}`}
            className={`${headerBarLinkClass} inline-block text-right`}
            href={googleMapsSearchUrl(HEADER_SALON_ADDRESS)}
            rel="noopener noreferrer"
            target="_blank"
          >
            {HEADER_SALON_ADDRESS}
          </a>
        </div>
      </div>

      <div ref={navShellRef} className="relative">
        <div className="flex w-full items-stretch border-b border-[rgba(163,170,214,0.2)]">
          <div className="flex flex-1 min-w-0 items-center justify-between gap-4 px-4 py-6 md:w-[258px] md:flex-none md:justify-start md:gap-5 md:px-10">
            <Link
              className="relative order-1 h-[22px] w-[158px] shrink-0 md:order-2"
              href="/"
            >
              <Image
                alt="Langana"
                className="no-rounded object-contain"
                fill
                priority
                sizes="158px"
                src={assets.logo}
              />
            </Link>
            <button
              aria-controls="nav-drawer"
              aria-expanded={drawerOpen}
              aria-label={drawerOpen ? "Uždaryti meniu" : "Atidaryti meniu"}
              className="relative order-2 flex h-3 w-[15px] shrink-0 flex-col justify-between md:order-1"
              onClick={() => {
                forceCloseMega();
                setDrawerOpen((o) => !o);
              }}
              type="button"
            >
              <span
                className={[
                  "h-0.5 w-full bg-[#263cd0] transition-transform duration-200 ease-out",
                  drawerOpen ? "translate-y-[5px] rotate-45" : "",
                ].join(" ")}
              />
              <span
                className={[
                  "h-0.5 w-full bg-[#263cd0] transition-opacity duration-200",
                  drawerOpen ? "opacity-0" : "opacity-100",
                ].join(" ")}
              />
              <span
                className={[
                  "h-0.5 w-full bg-[#263cd0] transition-transform duration-200 ease-out",
                  drawerOpen ? "-translate-y-[5px] -rotate-45" : "",
                ].join(" ")}
              />
            </button>
          </div>

          <nav
            aria-label="Kategorijų meniu"
            className="hidden min-w-0 flex-1 items-center justify-center gap-2 px-2 lg:flex xl:gap-8"
          >
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-[14px] font-semibold leading-normal xl:gap-x-6">
              {MEGA_MENU.map((s) => {
                const hasMega = sectionHasMegaMenu(s);
                const open = mega?.id === s.id && mega.phase === "open";
                const pathActive = megaSectionPathActive(pathname, s.href);
                const navLooksActive = !isAnyMegaSectionPathActive(pathname) || pathActive;
                const navClass = navLooksActive
                  ? "text-[#263cd0]"
                  : "text-[#59799f] hover:text-[#263cd0]/88 transition-colors";
                if (!hasMega) {
                  return (
                    <Link
                      key={s.id}
                      aria-current={pathActive ? "page" : undefined}
                      className={navClass}
                      href={s.href}
                      onClick={() => forceCloseMega()}
                    >
                      {s.label}
                    </Link>
                  );
                }
                return (
                  <button
                    key={s.id}
                    aria-controls={`mega-panel-${s.id}`}
                    aria-expanded={open}
                    className={`inline-flex items-center gap-0.5 ${navClass}`}
                    onClick={() => {
                      setMega((cur) => {
                        if (cur?.id === s.id && cur.phase === "open") return { id: s.id, phase: "closing" };
                        if (cur?.id === s.id && cur.phase === "closing") return { id: s.id, phase: "open" };
                        return { id: s.id, phase: "open" };
                      });
                    }}
                    type="button"
                  >
                    <span>{s.label}</span>
                    <span className="inline-flex items-center justify-center" aria-hidden>
                      {open ? (
                        <Minus className="size-3.5 opacity-90" strokeWidth={2.5} />
                      ) : (
                        <Plus className="size-3.5 opacity-90" strokeWidth={2.5} />
                      )}
                    </span>
                  </button>
                );
              })}
            </div>
          </nav>

          <div className="hidden w-[180px] shrink-0 items-center justify-end pr-4 md:flex md:min-w-[200px] md:w-auto md:max-w-none md:pr-10">
            <KontaktaiQuoteLink
              className="inline-flex shrink-0 items-center justify-center whitespace-nowrap rounded-full bg-[#263cd0] px-4 py-2.5 text-center text-[13px] font-semibold text-white transition hover:bg-[#1e31a8] md:px-5"
            >
              Gauti pasiūlymą
            </KontaktaiQuoteLink>
          </div>
        </div>

        {activeMega && mega ? (
          <MegaMenu
            onExitComplete={() => {
              setMega((m) => (m?.phase === "closing" ? null : m));
            }}
            onRequestClose={forceCloseMega}
            phase={mega.phase}
            section={activeMega}
          />
        ) : null}
      </div>

      <HeaderDrawer
        onClose={() => {
          setDrawerOpen(false);
          forceCloseMega();
        }}
        open={drawerOpen}
        titleId={drawerTitleId}
      />
    </header>
  );

  if (!chromeRoot) {
    return header;
  }

  return createPortal(header, chromeRoot);
}
