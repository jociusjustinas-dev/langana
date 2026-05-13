import Link from "next/link";

export function CategoryPageStub({ label }: { label: string }) {
  return (
    <main className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-4 text-center">
      <h1 className="text-2xl font-semibold text-[#16216b]">Puslapis nerastas</h1>
      <p className="text-[#16216b] max-w-md">
        Deja, puslapis <strong>{label}</strong> šiuo metu nepasiekiamas arba dar kuriamas.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Link
          href="/katalogas"
          className="rounded-full bg-[#263cd0] px-6 py-3 text-[14px] font-semibold text-white transition hover:bg-[#1e31a8]"
        >
          Peržiūrėti katalogą
        </Link>
        <Link
          href="/kontaktai"
          className="rounded-full border-2 border-[#263cd0] px-6 py-3 text-[14px] font-semibold text-[#263cd0] transition hover:bg-[#f0f3ff]"
        >
          Susisiekti
        </Link>
      </div>
    </main>
  );
}

export function labelFromKebab(slug: string) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}
