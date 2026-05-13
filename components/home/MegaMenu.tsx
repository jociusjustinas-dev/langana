"use client";

import Image from "next/image";
import Link from "next/link";
import { startTransition, useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { uiEaseClass } from "@/lib/ui-motion";
import { isMegaGroup, type MegaSection } from "@/lib/mega-menu-data";

type MegaMenuProps = {
  section: MegaSection;
  /** `closing` — išeinimo animacija, po jos iškviečiamas `onExitComplete`. */
  phase: "open" | "closing";
  onRequestClose: () => void;
  onExitComplete: () => void;
};

export function MegaMenu({ section, phase, onRequestClose, onExitComplete }: MegaMenuProps) {
  const panelId = `mega-panel-${section.id}`;
  const reduced = usePrefersReducedMotion();
  const exitDoneRef = useRef(false);
  const onExitCompleteRef = useRef(onExitComplete);
  const [hoveredLeafHref, setHoveredLeafHref] = useState<string | null>(null);
  const [shellOpen, setShellOpen] = useState(false);

  useEffect(() => {
    onExitCompleteRef.current = onExitComplete;
  }, [onExitComplete]);

  const finishExit = useCallback(() => {
    if (exitDoneRef.current) return;
    exitDoneRef.current = true;
    onExitCompleteRef.current();
  }, []);
  const allLeafs = section.children.flatMap((child) =>
    isMegaGroup(child) ? child.children : [child]
  );
  const preview = allLeafs.find((leaf) => leaf.href === hoveredLeafHref)?.image ?? section.defaultImage;

  const leavePanel = () => {
    setHoveredLeafHref(null);
  };

  useLayoutEffect(() => {
    exitDoneRef.current = false;
    if (phase === "closing") {
      startTransition(() => setShellOpen(false));
      return;
    }
    startTransition(() => setShellOpen(false));
    const id = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        startTransition(() => setShellOpen(true));
      });
    });
    return () => cancelAnimationFrame(id);
  }, [phase, section.id]);

  useLayoutEffect(() => {
    if (phase === "closing" && reduced) {
      queueMicrotask(finishExit);
    }
  }, [phase, reduced, finishExit]);

  useEffect(() => {
    if (phase !== "closing" || reduced) return;
    const t = window.setTimeout(finishExit, 320);
    return () => window.clearTimeout(t);
  }, [phase, reduced, finishExit]);

  const onShellTransitionEnd = (e: React.TransitionEvent<HTMLDivElement>) => {
    if (e.target !== e.currentTarget) return;
    if (e.propertyName !== "opacity") return;
    if (phase === "closing" && !shellOpen) {
      finishExit();
    }
  };

  const shellMotion = [
    "transform-gpu transition-[opacity,transform] duration-[220ms] motion-reduce:transition-none motion-reduce:duration-0",
    uiEaseClass,
    shellOpen && phase !== "closing"
      ? "translate-y-0 opacity-100"
      : "pointer-events-none -translate-y-2 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100",
  ].join(" ");

  return (
    <div className="absolute left-0 right-0 top-full z-40 pt-2 -mt-2">
      <div
        aria-labelledby={`${panelId}-title`}
        className={[
          shellMotion,
          "border-t border-[rgba(163,170,214,0.2)] bg-white shadow-[0_16px_40px_rgba(22,33,107,0.1)]",
        ].join(" ")}
        id={panelId}
        onMouseLeave={leavePanel}
        onTransitionEnd={onShellTransitionEnd}
        role="region"
      >
        <div className="flex w-full flex-col items-stretch lg:flex-row lg:items-stretch">
          <div className="flex w-full flex-col items-start justify-start gap-5 self-stretch border-b border-[rgba(163,170,214,0.2)] bg-[#f6f7ff] px-6 py-8 md:px-8 lg:max-w-[min(32vw,420px)] lg:w-[min(32vw,420px)] lg:shrink-0 lg:border-b-0 lg:border-r lg:py-10 lg:pl-8 lg:pr-8 xl:pl-10">
            <h2
              className="text-[22px] font-semibold leading-[26px] tracking-[-0.03em] text-[#263cd0] md:text-2xl md:leading-[29px]"
              id={`${panelId}-title`}
            >
              {section.introTitle}
            </h2>
            <p className="text-[15px] leading-[1.55] text-[#16216b]">
              {section.introBody}
            </p>
            <div>
              <Link
                className="inline-flex items-center justify-center rounded-full bg-[#263cd0] px-6 py-3 text-[15px] font-semibold text-white transition hover:bg-[#1e31a8]"
                href={section.introCta.href}
                onClick={onRequestClose}
              >
                {section.introCta.label}
              </Link>
            </div>
          </div>

          {section.children.length > 0 && (
            <div
              className="flex min-h-0 w-full min-w-0 flex-1 flex-col justify-start border-b border-[rgba(163,170,214,0.2)] bg-white px-4 py-6 sm:px-6 sm:py-8 lg:self-stretch lg:border-b-0 lg:px-8 lg:pb-10 lg:pt-8"
              onMouseLeave={() => setHoveredLeafHref(null)}
            >
              <ul className="w-full max-w-xl space-y-0">
                {section.children.map((child, i) => {
                  if (isMegaGroup(child)) {
                    return (
                      <li className="mt-6 first:mt-0" key={`g-${i}`}>
                        <p className="mb-2.5 text-[12px] font-semibold uppercase tracking-wide text-[#16216b]/50">
                          {child.label}
                        </p>
                        <ul className="space-y-0 pl-0">
                          {child.children.map((leaf) => (
                            <li className="py-0.5" key={leaf.href}>
                              <RowLink
                                href={leaf.href}
                                hoveredHref={hoveredLeafHref}
                                label={leaf.label}
                                onNavigate={onRequestClose}
                                setHoveredHref={setHoveredLeafHref}
                              />
                            </li>
                          ))}
                        </ul>
                      </li>
                    );
                  }
                  return (
                    <li className="py-0.5" key={child.href}>
                      <RowLink
                        href={child.href}
                        hoveredHref={hoveredLeafHref}
                        label={child.label}
                        onNavigate={onRequestClose}
                        setHoveredHref={setHoveredLeafHref}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          )}

          <div
            className={[
              "relative w-full shrink-0 overflow-hidden bg-[#eef0ff]",
              "min-h-[240px] sm:min-h-[280px]",
              "lg:min-h-[20rem] lg:max-w-[min(46vw,580px)] lg:w-[min(46vw,580px)] lg:shrink-0 lg:self-stretch lg:pr-0",
            ].join(" ")}
          >
            <Image
              alt=""
              className="no-rounded object-cover object-center"
              fill
              key={preview}
              priority
              sizes="(max-width: 1023px) 100vw, 50vw"
              src={preview}
              unoptimized
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function RowLink({
  label,
  href,
  hoveredHref,
  setHoveredHref,
  onNavigate,
}: {
  label: string;
  href: string;
  hoveredHref: string | null;
  setHoveredHref: (h: string | null) => void;
  onNavigate: () => void;
}) {
  const isOn = hoveredHref === href;
  const textTone =
    isOn ? "text-[#263cd0]"
    : hoveredHref !== null ? "text-[#59799f]/70"
    : "text-[#59799f]";

  return (
    <Link
      className={[
        "flex w-full items-start gap-3 rounded-md px-1 py-2 text-left text-[18px] font-semibold leading-snug transition-colors duration-200 md:text-[20px] md:leading-7",
        textTone,
      ].join(" ")}
      href={href}
      onClick={onNavigate}
      onMouseEnter={() => {
        setHoveredHref(href);
      }}
    >
      <span
        aria-hidden
        className="mt-[0.42em] flex size-[22px] shrink-0 items-center justify-center"
      >
        <span
          className={[
            "size-2 shrink-0 rounded-full bg-[#263cd0] transition-opacity duration-200",
            isOn ? "opacity-100" : "opacity-0",
          ].join(" ")}
        />
      </span>
      <span className="min-w-0 flex-1">{label}</span>
    </Link>
  );
}
