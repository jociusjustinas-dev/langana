import type { LucideIcon } from "lucide-react";

type FeatureHoverCardProps = {
  title: string;
  description: string;
  leadingIcon?: LucideIcon;
  className?: string;
  /** Antraštės tipografija (pvz. Benefits: 25px vs 30px nuo `md`). */
  headingClassName?: string;
};

/**
 * Privalumų / feature kortelė: visuomet su užapvalintais kampais,
 * užvedus keičiamas fonas į #263cd0 ir tekstas į baltą.
 */
export function FeatureHoverCard({
  title,
  description,
  leadingIcon: LeadingIcon,
  className = "",
  headingClassName,
}: FeatureHoverCardProps) {
  return (
    <article
      className={
        [
          "group flex min-h-[280px] flex-col justify-between gap-6 rounded-2xl bg-[#f6f7ff] p-8",
          "transition-[background-color,color,border-radius] duration-300 ease-out",
          "motion-reduce:transition-none",
          "hover:bg-[#263cd0]",
          "active:bg-[#263cd0]",
          "md:min-h-[392px]",
          className,
        ].join(" ")
      }
    >
      <div className="flex flex-col gap-4">
        {LeadingIcon ? (
          <div className="flex size-11 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white/80 ring-1 ring-[#263cd0]/15 transition-[background-color,ring-color] duration-300 group-hover:bg-white/20 group-hover:ring-white/40">
            <LeadingIcon
              aria-hidden
              className="size-6 text-[#263cd0] transition-colors duration-300 group-hover:text-white"
              strokeWidth={2}
            />
          </div>
        ) : null}
        <h3
          className={[
            "font-semibold tracking-[-0.04em] text-[#59799f] transition-colors duration-300 ease-out",
            "motion-reduce:transition-none",
            "group-hover:text-white group-active:text-white",
            headingClassName ??
              "text-xl leading-[1.25] md:text-[25px] md:leading-[30px]",
          ].join(" ")}
        >
          {title}
        </h3>
      </div>
      <p
        className={[
          "max-w-[360px] text-base leading-6 text-[#16216b] transition-colors duration-300 ease-out",
          "motion-reduce:transition-none",
          "group-hover:text-white group-active:text-white",
        ].join(" ")}
      >
        {description}
      </p>
    </article>
  );
}
