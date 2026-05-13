import Link from "next/link";

export type BreadcrumbItem = { label: string; href?: string };

export function Breadcrumb({
  items,
  variant = "default",
}: {
  items: BreadcrumbItem[];
  variant?: "default" | "onDark";
}) {
  const onDark = variant === "onDark";

  return (
    <div
      className={
        onDark
          ? "w-full max-w-full"
          : "mx-auto max-w-[1440px] px-4 py-4 md:px-10 lg:px-[100px]"
      }
    >
      <nav aria-label="Breadcrumb" className="mb-0">
        <ol
          className={`flex flex-wrap items-center gap-1 text-[13px] ${onDark ? "text-white/75" : "text-[#59799f]"}`}
        >
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-1">
              {i > 0 && <span aria-hidden>/</span>}
              {item.href ? (
                <Link
                  className={
                    onDark
                      ? "text-white/85 transition-colors hover:text-white"
                      : "transition-colors hover:text-[#263cd0]"
                  }
                  href={item.href}
                >
                  {item.label}
                </Link>
              ) : (
                <span className={`font-medium ${onDark ? "text-white" : "text-[#16216b]"}`}>{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
