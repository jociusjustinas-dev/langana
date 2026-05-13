"use client";

import Image from "next/image";
import { createPortal } from "react-dom";
import { useCallback, useEffect, useState, useSyncExternalStore } from "react";
import { assets } from "@/lib/figma-assets";
import { useSiteChromeRoot } from "@/hooks/use-site-chrome-root";
import { HeroBento } from "@/components/home/HeroBento";
import { SiteMainClosing } from "@/components/home/SiteMainClosing";
import { SiteHeader } from "@/components/home/SiteHeader";

const DURATION = {
  logoInMs: 750,
  logoHoldMs: 350,
  logoOutMs: 600,
  afterTextToHeaderMs: 700,
} as const;

/** Vienas preloaderis per naršyklės sesiją (home puslapis). */
const HOME_PRELOADER_SESSION_KEY = "langana-home-preloader-shown";

function markHomePreloaderShownInSession() {
  try {
    sessionStorage.setItem(HOME_PRELOADER_SESSION_KEY, "1");
  } catch {
    /* private mode / storage disabled */
  }
}

/** `false` SSR / pirmam renderiui be `window`; kliente – ar šioje sesijoje preloaderis jau rodytas. */
function useHomePreloaderAlreadyShownInSession() {
  return useSyncExternalStore(
    () => () => {},
    () => {
      try {
        return sessionStorage.getItem(HOME_PRELOADER_SESSION_KEY) === "1";
      } catch {
        return false;
      }
    },
    () => false
  );
}

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    (onChange) => {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    },
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false
  );
}

export function HomePageView() {
  const reduced = usePrefersReducedMotion();
  const preloaderAlreadyShown = useHomePreloaderAlreadyShownInSession();
  const chromeRoot = useSiteChromeRoot();

  const [showOverlay, setShowOverlay] = useState(true);
  const [logoVisible, setLogoVisible] = useState(false);
  const [revealContent, setRevealContent] = useState(false);
  const [revealHeader, setRevealHeader] = useState(false);

  const runSequence = useCallback((): (() => void) | void => {
    if (reduced) {
      setShowOverlay(false);
      setLogoVisible(false);
      setRevealContent(true);
      setRevealHeader(true);
      markHomePreloaderShownInSession();
      return;
    }

    const logoEnter = window.setTimeout(() => {
      setLogoVisible(true);
    }, 30);

    const logoLeave = window.setTimeout(() => {
      setLogoVisible(false);
    }, DURATION.logoInMs + DURATION.logoHoldMs);

    const removeOverlay = window.setTimeout(() => {
      setShowOverlay(false);
      setRevealContent(true);
      markHomePreloaderShownInSession();
    }, DURATION.logoInMs + DURATION.logoHoldMs + DURATION.logoOutMs);

    const showHeader = window.setTimeout(() => {
      setRevealHeader(true);
    }, DURATION.logoInMs + DURATION.logoHoldMs + DURATION.logoOutMs + DURATION.afterTextToHeaderMs);

    return () => {
      clearTimeout(logoEnter);
      clearTimeout(logoLeave);
      clearTimeout(removeOverlay);
      clearTimeout(showHeader);
    };
  }, [reduced]);

  useEffect(() => {
    if (preloaderAlreadyShown) return;

    let cleanup: (() => void) | undefined;
    const tid = window.setTimeout(() => {
      const c = runSequence();
      if (typeof c === "function") cleanup = c;
    }, 0);
    return () => {
      window.clearTimeout(tid);
      cleanup?.();
    };
  }, [preloaderAlreadyShown, runSequence]);

  const showOverlayUi = preloaderAlreadyShown ? false : showOverlay;
  const revealContentUi = preloaderAlreadyShown || revealContent;
  const revealHeaderUi = preloaderAlreadyShown || revealHeader;

  useEffect(() => {
    if (!showOverlayUi) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [showOverlayUi]);

  const overlayLayer = (
    <div
      aria-hidden
      className="fixed inset-0 z-[380] flex items-center justify-center bg-[#f6f7ff]"
    >
      <div
        className="relative w-[min(80vw,300px)] transition-opacity duration-500 ease-out"
        style={{ opacity: logoVisible ? 1 : 0 }}
      >
        <Image
          alt="Langana"
          className="no-rounded h-auto w-full object-contain"
          height={44}
          priority
          src={assets.logo}
          width={300}
        />
      </div>
    </div>
  );

  return (
    <div className="flex min-h-full flex-col bg-[#f6f7ff] text-[#16216b]">
      {showOverlayUi ? (chromeRoot ? createPortal(overlayLayer, chromeRoot) : overlayLayer) : null}

      <SiteHeader
        className="transition-[transform,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform"
        entrance="slide"
        visible={revealHeaderUi}
      />

      <main
        className="flex min-h-0 flex-1 flex-col"
        style={{
          /* Antraštės tarpą rezervuoja #smooth-content (globals); čia nebedubliuojame. */
          paddingTop: 0,
        }}
      >
        {revealContentUi && (
          <>
            <HeroBento />
            <SiteMainClosing />
          </>
        )}
      </main>
    </div>
  );
}
