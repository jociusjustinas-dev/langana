"use client";

import Image from "next/image";
import { createPortal } from "react-dom";
import { useCallback, useEffect, useLayoutEffect, useState, useSyncExternalStore } from "react";

import { assets } from "@/lib/figma-assets";
import { useSiteChromeRoot } from "@/hooks/use-site-chrome-root";

const DURATION = {
  logoInMs: 750,
  logoHoldMs: 350,
  logoOutMs: 600,
  afterTextToHeaderMs: 700,
} as const;

const HOME_PRELOADER_SESSION_KEY = "langana-home-preloader-shown";

function markHomePreloaderShownInSession() {
  try {
    sessionStorage.setItem(HOME_PRELOADER_SESSION_KEY, "1");
  } catch {
    /* private mode / storage disabled */
  }
}

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
    () => false,
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
    () => false,
  );
}

/**
 * Tik preloader sluoksnis — neblokuoja SSR turinio (HeroBento, CTA, footer).
 * Antraštės slinkimas: `data-home-preloader` + globals.css (`data-site-header-home`).
 */
export function HomePreloader() {
  const reduced = usePrefersReducedMotion();
  const preloaderAlreadyShown = useHomePreloaderAlreadyShownInSession();
  const chromeRoot = useSiteChromeRoot();

  const [showOverlay, setShowOverlay] = useState(() => !preloaderAlreadyShown);
  const [logoVisible, setLogoVisible] = useState(false);

  const runSequence = useCallback((): (() => void) | void => {
    if (reduced) {
      setShowOverlay(false);
      setLogoVisible(false);
      markHomePreloaderShownInSession();
      document.documentElement.removeAttribute("data-home-preloader");
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
      markHomePreloaderShownInSession();
    }, DURATION.logoInMs + DURATION.logoHoldMs + DURATION.logoOutMs);

    const showHeader = window.setTimeout(() => {
      document.documentElement.removeAttribute("data-home-preloader");
    }, DURATION.logoInMs + DURATION.logoHoldMs + DURATION.logoOutMs + DURATION.afterTextToHeaderMs);

    return () => {
      clearTimeout(logoEnter);
      clearTimeout(logoLeave);
      clearTimeout(removeOverlay);
      clearTimeout(showHeader);
    };
  }, [reduced]);

  useLayoutEffect(() => {
    if (preloaderAlreadyShown || reduced) {
      document.documentElement.removeAttribute("data-home-preloader");
      return;
    }
    document.documentElement.setAttribute("data-home-preloader", "");
    return () => {
      document.documentElement.removeAttribute("data-home-preloader");
    };
  }, [preloaderAlreadyShown, reduced]);

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

  useEffect(() => {
    if (!showOverlayUi) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [showOverlayUi]);

  if (!showOverlayUi) return null;

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
          alt=""
          className="no-rounded h-auto w-full object-contain"
          height={44}
          priority
          src={assets.logo}
          width={300}
        />
      </div>
    </div>
  );

  return chromeRoot ? createPortal(overlayLayer, chromeRoot) : overlayLayer;
}
