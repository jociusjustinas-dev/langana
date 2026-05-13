"use client";

import { ChevronDown } from "lucide-react";
import { Fragment, useEffect, useId, useMemo, useRef, useState, type KeyboardEvent, type ReactNode } from "react";

import { uiEaseClass } from "@/lib/ui-motion";

export type FormSelectOption = { value: string; label: string };

/** Segmentuotas sąrašas (kaip `<optgroup>`) — tas pats klaviatūros elgesys kaip tiesiniu sąrašu. */
export type FormSelectGroup = { label: string; options: FormSelectOption[] };

function cx(...parts: (string | false | undefined)[]) {
  return parts.filter(Boolean).join(" ");
}

const triggerBase =
  "flex w-full min-h-[48px] items-center justify-between gap-2 rounded-xl border bg-white px-4 py-3 text-left text-[15px] outline-none transition focus-visible:ring-2 focus-visible:ring-offset-0";

const triggerOk =
  "border-[rgba(163,170,214,0.45)] text-[#16216b] focus-visible:border-[#263cd0]/55 focus-visible:ring-[#263cd0]";
const triggerErr =
  "border-[#b42318] text-[#16216b] focus-visible:border-[#b42318] focus-visible:ring-[#b42318]/35 aria-invalid:border-[#b42318]";

const listClass =
  "absolute left-0 right-0 top-[calc(100%+4px)] z-40 max-h-[min(280px,50vh)] overflow-y-auto rounded-xl border border-[rgba(163,170,214,0.45)] bg-white py-1 shadow-[0_8px_28px_rgba(22,33,107,0.12)] ring-1 ring-[rgba(22,33,107,0.06)]";

const optionBase =
  "flex w-full cursor-pointer items-center px-4 py-2.5 text-left text-[15px] leading-snug text-[#16216b] transition hover:bg-[#f6f7ff] focus:outline-none focus-visible:bg-[#f6f7ff] focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#263cd0]/40";

export type FormSelectProps = {
  id: string;
  value: string;
  onChange: (value: string) => void;
  /** Plokščias sąrašas (numatyta, jei nėra `groups`). */
  options?: FormSelectOption[];
  /** Grupuotas sąrašas — tada `options` ignoruojamas. */
  groups?: FormSelectGroup[];
  /** Kai value tuščias ir nerasta etiketė */
  emptyLabel?: string;
  invalid?: boolean;
  disabled?: boolean;
  className?: string;
  "aria-describedby"?: string;
};

function indexForValue(options: FormSelectOption[], value: string): number {
  const i = options.findIndex((o) => o.value === value);
  return i >= 0 ? i : 0;
}

export function FormSelect({
  id,
  value,
  onChange,
  options = [],
  groups,
  emptyLabel = "Pasirinkite",
  invalid,
  disabled,
  className,
  "aria-describedby": ariaDescribedBy,
}: FormSelectProps) {
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const listId = useId();

  const flatOptions = useMemo(
    () => (groups && groups.length > 0 ? groups.flatMap((g) => g.options) : options),
    [groups, options],
  );

  const selected = flatOptions.find((o) => o.value === value);
  const showMuted = !selected && value === "";
  const displayLabel = selected?.label ?? emptyLabel;

  const maxIndex = Math.max(0, flatOptions.length - 1);
  const activeClamped = Math.max(0, Math.min(activeIndex, maxIndex));

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, [open]);

  const close = () => setOpen(false);

  const onTriggerBlur = () => {
    requestAnimationFrame(() => {
      if (!rootRef.current?.contains(document.activeElement)) close();
    });
  };

  const openMenu = () => {
    if (!flatOptions.length) return;
    setActiveIndex(indexForValue(flatOptions, value));
    setOpen(true);
  };

  const commitIndex = (idx: number) => {
    const o = flatOptions[idx];
    if (!o) return;
    onChange(o.value);
    close();
    requestAnimationFrame(() => buttonRef.current?.focus());
  };

  const onTriggerKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (disabled) return;

    if (!open) {
      if (e.key === "ArrowDown" || e.key === "ArrowUp" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openMenu();
      }
      return;
    }

    if (e.key === "Escape") {
      e.preventDefault();
      close();
      return;
    }
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex((i) => Math.min(maxIndex, i + 1));
      return;
    }
    if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex((i) => Math.max(0, i - 1));
      return;
    }
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      commitIndex(activeClamped);
      return;
    }
    if (e.key === "Home") {
      e.preventDefault();
      setActiveIndex(0);
      return;
    }
    if (e.key === "End") {
      e.preventDefault();
      setActiveIndex(maxIndex);
    }
  };

  return (
    <div ref={rootRef} className={cx("relative", className)}>
      <button
        ref={buttonRef}
        aria-activedescendant={open && flatOptions.length ? `${listId}-opt-${activeClamped}` : undefined}
        aria-autocomplete="list"
        aria-controls={open ? listId : undefined}
        aria-describedby={ariaDescribedBy}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-invalid={invalid ? true : undefined}
        className={cx(triggerBase, invalid ? triggerErr : triggerOk, disabled && "cursor-not-allowed opacity-60")}
        disabled={disabled}
        id={id}
        onBlur={onTriggerBlur}
        onClick={() => {
          if (disabled) return;
          if (open) setOpen(false);
          else openMenu();
        }}
        onKeyDown={onTriggerKeyDown}
        role="combobox"
        type="button"
      >
        <span className={cx("min-w-0 flex-1 truncate", showMuted && "text-[#59799f]/75")}>{displayLabel}</span>
        <ChevronDown
          aria-hidden
          className={cx(
            "size-5 shrink-0 text-[#263cd0] transition-transform duration-[220ms] motion-reduce:transition-none",
            uiEaseClass,
            open && "rotate-180",
          )}
          strokeWidth={2}
        />
      </button>

      {flatOptions.length > 0 ? (
        <ul
          aria-hidden={!open}
          className={cx(
            listClass,
            "origin-top",
            `transition-[opacity,transform,visibility] duration-[220ms] motion-reduce:transition-none motion-reduce:duration-0 ${uiEaseClass}`,
            open
              ? "visible translate-y-0 scale-100 opacity-100"
              : "invisible pointer-events-none -translate-y-1.5 scale-[0.99] opacity-0",
          )}
          id={listId}
          role="listbox"
        >
          {(() => {
            const headerClass =
              "px-4 pb-1 pt-2.5 text-[12px] font-semibold uppercase tracking-[0.06em] text-[#59799f] first:pt-2";
            const nodes: ReactNode[] = [];
            let i = 0;

            const pushOption = (o: FormSelectOption) => {
              const idx = i++;
              const active = idx === activeClamped;
              const picked = o.value === value;
              nodes.push(
                <li className="list-none" key={`${listId}-row-${idx}`} role="presentation">
                  <button
                    aria-selected={picked}
                    className={cx(
                      optionBase,
                      active && "bg-[#eef1ff]",
                      picked && "font-semibold text-[#263cd0]",
                    )}
                    id={`${listId}-opt-${idx}`}
                    onMouseDown={(ev) => {
                      ev.preventDefault();
                    }}
                    onMouseEnter={() => setActiveIndex(idx)}
                    onClick={() => commitIndex(idx)}
                    role="option"
                    tabIndex={-1}
                    type="button"
                  >
                    {o.label}
                  </button>
                </li>,
              );
            };

            if (groups && groups.length > 0) {
              for (const g of groups) {
                nodes.push(
                  <li className="list-none" key={`grp-${g.label}`} role="presentation">
                    <div aria-hidden className={headerClass}>
                      {g.label}
                    </div>
                  </li>,
                );
                for (const o of g.options) {
                  pushOption(o);
                }
              }
            } else {
              for (const o of flatOptions) {
                pushOption(o);
              }
            }

            return <Fragment>{nodes}</Fragment>;
          })()}
        </ul>
      ) : null}
    </div>
  );
}
