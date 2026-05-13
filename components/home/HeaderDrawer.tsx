"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

import {
  isAnyMegaSectionPathActive,
  isMegaGroup,
  MEGA_MENU,
  megaSectionPathActive,
  sectionHasMegaMenu,
  type MegaSection,
} from "@/lib/mega-menu-data";
import { uiTransitionDrawerOverlay, uiTransitionDrawerPanel } from "@/lib/ui-motion";

const NAV: { href: string; label: string }[] = [
  { href: "/kodel-langana", label: "Kodėl Langana?" },
  { href: "/katalogas", label: "Produktai ir paslaugos" },
  { href: "/igyvendinti-projektai", label: "Įgyvendinti projektai" },
  { href: "/kontaktai", label: "Kontaktai" },
];

function linkActive(pathname: string, item: (typeof NAV)[number]): boolean {
  if (item.href === "/katalogas") {
    return pathname === "/katalogas" || pathname.startsWith("/katalogas/");
  }
  const norm = (p: string) => (p !== "/" && p.endsWith("/") ? p.slice(0, -1) : p);
  const p = norm(pathname);
  const h = norm(item.href);
  return p === h || p.startsWith(`${h}/`);
}

function normPath(p: string): string {
  const t = p.trim();
  if (!t || t === "/") return "/";
  return t.endsWith("/") ? t.slice(0, -1) : t;
}

function megaLeafPathActive(pathname: string, href: string): boolean {
  const p = normPath(pathname);
  const h = normPath(href);
  return p === h || p.startsWith(`${h}/`);
}

const drawerMegaLeafClass =
  "block rounded-lg py-2 pl-1 text-[15px] font-semibold leading-snug tracking-[-0.02em] transition-colors duration-200 ease-out motion-reduce:transition-none";

/** Nuoroda į skyriaus šaknį — vietoj bendro „Sužinoti daugiau“. */
function drawerMegaOverviewLinkLabel(section: MegaSection): string {
  switch (section.id) {
    case "langai":
      return "Viskas apie langus";
    case "durys":
      return "Viskas apie duris";
    case "stumdomos":
      return "Viskas apie stumdomas sistemas";
    case "stiklinimas":
      return "Viskas apie stiklinimą";
    case "ziemos":
      return "Viskas apie žiemos sodus";
    case "aliuminiai":
      return "Viskas apie aliuminio sprendimus";
    default:
      return section.introCta.label;
  }
}

type HeaderDrawerProps = {
  open: boolean;
  onClose: () => void;
  titleId: string;
};

function DrawerMegaLeaf({
  href,
  label,
  onNavigate,
  pathname,
}: {
  href: string;
  label: string;
  onNavigate: () => void;
  pathname: string;
}) {
  const active = megaLeafPathActive(pathname, href);
  return (
    <Link
      className={[
        drawerMegaLeafClass,
        active
          ? "text-[#263cd0]"
          : "text-[#59799f] hover:text-[#263cd0]/90",
      ].join(" ")}
      href={href}
      onClick={onNavigate}
    >
      {label}
    </Link>
  );
}

function MegaDrawerCategoryDetails({
  onNavigate,
  pathname,
  section,
}: {
  onNavigate: () => void;
  pathname: string;
  section: MegaSection;
}) {
  const marketingDim = isAnyMegaSectionPathActive(pathname);
  const sectionPathOn = megaSectionPathActive(pathname, section.href);
  const summaryLooksActive = !marketingDim || sectionPathOn;

  return (
    <details className="group border-b border-[rgba(163,170,214,0.35)] last:border-b-0">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 py-4 [&::-webkit-details-marker]:hidden">
        <span
          className={[
            "inline-block text-[19px] font-semibold leading-snug tracking-[-0.03em] transition-colors duration-200 ease-out motion-reduce:transition-none sm:text-[20px]",
            summaryLooksActive
              ? "text-[#263cd0]"
              : "text-[#59799f] group-open:text-[#16216b]",
          ].join(" ")}
        >
          {section.label}
        </span>
        <ChevronDown
          aria-hidden
          className="size-5 shrink-0 text-[#263cd0] transition-transform duration-200 ease-out group-open:rotate-180 motion-reduce:transition-none"
          strokeWidth={2}
        />
      </summary>
      <div className="border-l-2 border-[#263cd0]/25 pb-5 pl-4">
        <Link
          className={[
            "mb-3 inline-block text-[15px] font-semibold text-[#263cd0] underline decoration-transparent underline-offset-2 transition-colors hover:decoration-[#263cd0]",
            megaLeafPathActive(pathname, section.href) ? "opacity-100" : "opacity-90",
          ].join(" ")}
          href={section.href}
          onClick={onNavigate}
        >
          {drawerMegaOverviewLinkLabel(section)}
        </Link>
        <ul className="flex flex-col gap-0.5">
          {section.children.map((child, i) => {
            if (isMegaGroup(child)) {
              return (
                <li className="mt-5 first:mt-0" key={`${section.id}-g-${i}`}>
                  <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.06em] text-[#16216b]/45">
                    {child.label}
                  </p>
                  <ul className="flex flex-col gap-0.5">
                    {child.children.map((leaf) => (
                      <li key={leaf.href}>
                        <DrawerMegaLeaf
                          href={leaf.href}
                          label={leaf.label}
                          onNavigate={onNavigate}
                          pathname={pathname}
                        />
                      </li>
                    ))}
                  </ul>
                </li>
              );
            }
            return (
              <li key={child.href}>
                <DrawerMegaLeaf
                  href={child.href}
                  label={child.label}
                  onNavigate={onNavigate}
                  pathname={pathname}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </details>
  );
}

function DrawerMegaCategories({
  onNavigate,
  pathname,
}: {
  onNavigate: () => void;
  pathname: string;
}) {
  return (
    <nav aria-label="Produktų kategorijos" className="flex flex-col">
      <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-[#16216b]/45">
        Produktų kategorijos
      </p>
      {MEGA_MENU.map((section) => {
        const hasMega = sectionHasMegaMenu(section);
        if (!hasMega) {
          const marketingDim = isAnyMegaSectionPathActive(pathname);
          const on = megaSectionPathActive(pathname, section.href);
          const active = !marketingDim || on;
          return (
            <Link
              key={section.id}
              className="group border-b border-[rgba(163,170,214,0.35)] py-3.5 last:border-b-0"
              href={section.href}
              onClick={onNavigate}
            >
              <span
                className={[
                  "inline-block text-[19px] font-semibold leading-snug tracking-[-0.03em] transition-colors duration-200 ease-out motion-reduce:transition-none sm:text-[20px]",
                  active
                    ? "text-[#263cd0]"
                    : "text-[#59799f] group-hover:text-[#263cd0]/90",
                ].join(" ")}
              >
                {section.label}
              </span>
            </Link>
          );
        }
        return (
          <MegaDrawerCategoryDetails
            key={section.id}
            onNavigate={onNavigate}
            pathname={pathname}
            section={section}
          />
        );
      })}
    </nav>
  );
}

export function HeaderDrawer({ open, onClose, titleId }: HeaderDrawerProps) {
  const pathname = usePathname();
  const marketingNavEmphasis = !isAnyMegaSectionPathActive(pathname);
  const [megaTreeKey, setMegaTreeKey] = useState(0);
  const panelRef = useRef<HTMLElement>(null);
  const focusBefore = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (open) setMegaTreeKey((k) => k + 1);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    if (document.activeElement instanceof HTMLElement) {
      focusBefore.current = document.activeElement;
    }
    const id = window.requestAnimationFrame(() => {
      panelRef.current
        ?.querySelector<HTMLElement>(
          'nav[aria-label="Produktų kategorijos"] summary, nav[aria-label="Produktų kategorijos"] > a[href]',
        )
        ?.focus();
    });
    return () => window.cancelAnimationFrame(id);
  }, [open]);

  useEffect(() => {
    if (open) return;
    const el = focusBefore.current;
    if (el && document.contains(el) && el.focus) {
      el.focus();
    }
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const getFocusable = useCallback(() => {
    const panel = panelRef.current;
    if (!panel) return [] as HTMLElement[];
    return Array.from(
      panel.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
      ),
    ).filter((el) => {
      if (el.hasAttribute("disabled") || el.getAttribute("aria-hidden")) return false;
      const st = window.getComputedStyle(el);
      if (st.display === "none" || st.visibility === "hidden") return false;
      return true;
    });
  }, []);

  useEffect(() => {
    if (!open) return;
    const panel = panelRef.current;
    if (!panel) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const nodes = getFocusable();
      if (nodes.length === 0) return;
      const first = nodes[0];
      const last = nodes[nodes.length - 1];
      const active = document.activeElement;
      if (e.shiftKey) {
        if (active === first) {
          e.preventDefault();
          last.focus();
        }
      } else if (active === last) {
        e.preventDefault();
        first.focus();
      }
    };
    panel.addEventListener("keydown", onKeyDown);
    return () => panel.removeEventListener("keydown", onKeyDown);
  }, [open, getFocusable]);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[200]"
      data-open={open}
    >
      <button
        aria-label="Uždaryti meniu"
        tabIndex={-1}
        className={[
          "absolute inset-0 z-[200] cursor-default bg-[#16216b]/40",
          uiTransitionDrawerOverlay,
          open
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0",
          "motion-reduce:transition-none",
        ].join(" ")}
        onClick={onClose}
        type="button"
      />

      <aside
        ref={panelRef}
        aria-hidden={!open}
        aria-labelledby={titleId}
        aria-modal="true"
        className={[
          "pointer-events-auto fixed left-0 top-0 z-[201] flex h-[100dvh] max-h-[100dvh] w-full max-w-[min(100%,calc(100vw-32px))] flex-col border-0 border-r border-[rgba(163,170,214,0.2)] bg-[#f6f7ff] shadow-[4px_0_32px_rgba(22,33,107,0.12)]",
          "sm:max-w-[min(440px,92vw)]",
          "transform-gpu",
          uiTransitionDrawerPanel,
          open
            ? "translate-x-0 opacity-100"
            : "-translate-x-full opacity-0 pointer-events-none",
          "motion-reduce:transition-none",
        ].join(" ")}
        id="nav-drawer"
        inert={open ? undefined : true}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
      >
        <div className="flex h-full min-h-0 w-full flex-col">
          <div className="flex shrink-0 items-center justify-end gap-2 px-4 pb-1 pt-4 sm:px-6 sm:pt-5">
            <button
              aria-label="Uždaryti navigaciją"
              className="inline-flex size-11 items-center justify-center rounded-full text-[#16216b] transition hover:bg-[#e8ebf8] active:bg-[#dce1f4]"
              onClick={onClose}
              type="button"
            >
              <svg
                aria-hidden
                className="size-6 text-[#16216b]"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  d="M18 6L6 18M6 6l12 12"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth={2}
                />
              </svg>
            </button>
          </div>
          <div className="flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain px-6 pb-10 pt-2 sm:px-10 sm:pb-12 md:px-[70px] md:pb-[50px]">
            <h2 className="sr-only" id={titleId}>
              Navigacija
            </h2>
            <div className="flex min-h-0 flex-1 flex-col">
              <div className="shrink-0 pb-8">
                <DrawerMegaCategories key={megaTreeKey} onNavigate={onClose} pathname={pathname} />
              </div>

              <nav
                aria-label="Pagrindinis meniu"
                className="max-lg:mb-8 flex shrink-0 flex-col gap-5 border-t border-[rgba(163,170,214,0.35)] pt-8"
              >
            {NAV.map((item) => {
              const href = item.href;
              const active = marketingNavEmphasis || linkActive(pathname, item);
              return (
                <Link
                  key={item.label}
                  className="group block min-h-[22px] py-0.5"
                  href={href}
                  onClick={onClose}
                >
                  <span
                    className={[
                      "inline-block text-[16px] font-semibold leading-snug tracking-[-0.02em] transition-colors duration-200 ease-out motion-reduce:transition-none sm:text-[17px]",
                      active
                        ? "text-[#263cd0]"
                        : "text-[#59799f] group-hover:text-[#263cd0]/90",
                    ].join(" ")}
                  >
                    {item.label}
                  </span>
                </Link>
              );
            })}
              </nav>

              <div className="mt-auto flex w-full min-w-0 shrink-0 flex-col gap-2.5 pt-10 sm:pt-14 lg:max-w-[220px] max-lg:flex-row max-lg:max-w-full max-lg:items-start max-lg:gap-5 max-lg:border-t max-lg:border-[rgba(163,170,214,0.35)] max-lg:pt-10 sm:max-lg:gap-6 sm:max-lg:pt-12">
            <a
              className="group flex min-w-0 max-lg:flex-1 items-start gap-[18px] py-1.5 no-underline transition-colors hover:no-underline"
              href="tel:+37060620666"
              onClick={onClose}
            >
              <PhoneIcon className="mt-0.5 shrink-0" />
              <span className="flex min-w-0 flex-col gap-0.5">
                <span className="text-[15px] font-semibold text-[#16216b]">Turite klausimų?</span>
                <span className="text-[14px] font-medium leading-[1.5] text-[#16216b]/90 transition-colors group-hover:text-[#263cd0]">
                  +370 606 20 666
                </span>
              </span>
            </a>
            <a
              className="group mt-2.5 flex min-w-0 max-lg:mt-0 max-lg:flex-1 items-start gap-[18px] py-1.5 no-underline transition-colors hover:no-underline"
              href="mailto:uablangana@gmail.com"
              onClick={onClose}
            >
              <MailIcon className="mt-0.5 shrink-0" />
              <span className="flex min-w-0 flex-col gap-0.5">
                <span className="text-[15px] font-semibold text-[#16216b]">Parašykite mums</span>
                <span className="break-all text-[14px] font-medium leading-[1.5] text-[#16216b]/90 transition-colors group-hover:text-[#263cd0]">
                  uablangana@gmail.com
                </span>
              </span>
            </a>
            </div>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}

function PhoneIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={["shrink-0 text-[#263cd0]", className].join(" ")}
      fill="none"
      height={20}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      width={20}
    >
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function MailIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      className={["shrink-0 text-[#263cd0]", className].join(" ")}
      fill="none"
      height={24}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      width={24}
    >
      <rect height={16} rx={2} width={20} x={2} y={4} />
      <path d="M22 7L12 13 2 7" />
    </svg>
  );
}
