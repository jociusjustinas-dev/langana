import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Puslapis nerastas (404)",
  description:
    "Atsiprašome, ieškomas puslapis neegzistuoja arba buvo perkeltas. Grįžkite į pradinį puslapį arba pasirinkite kategoriją.",
  robots: {
    index: false,
    follow: true,
  },
};

const POPULAR_LINKS = [
  { label: "Langai", href: "/langai", description: "Plastikiniai ir aliuminio" },
  { label: "Durys", href: "/durys", description: "Plastikinės, aliuminio, metalinės" },
  { label: "Stiklinimas", href: "/stiklinimas", description: "Balkonai ir terasos" },
  { label: "Žiemos sodai", href: "/ziemos-sodai", description: "Aliuminio konstrukcijos" },
  { label: "Stumdomos sistemos", href: "/stumdomos-sistemos", description: "Aliuminio ir plastiko" },
  { label: "Aliuminio sprendimai", href: "/aliuminio-sprendimai", description: "Fasadai ir pertvaros" },
] as const;

const primaryBtn =
  "inline-flex items-center justify-center rounded-full bg-[#263cd0] px-6 py-3 text-base font-semibold text-white transition hover:bg-[#1e31a8]";
const secondaryBtn =
  "inline-flex items-center justify-center rounded-full border border-[#263cd0] bg-transparent px-6 py-3 text-base font-semibold text-[#263cd0] transition hover:bg-[#f6f7ff]";

export default function NotFound() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center px-4 py-16 text-[#16216b]">
      <div className="w-full max-w-3xl text-center">
        <p className="text-sm font-semibold uppercase tracking-wider text-[#263cd0]">404 – Puslapis nerastas</p>

        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Atsiprašome, šio puslapio nėra</h1>

        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-[#16216b]/90">
          Puslapis galėjo būti perkeltas, ištrintas arba įvedėte neteisingą adresą. Grįžkite į pradinį puslapį arba
          pasirinkite vieną iš mūsų paslaugų.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link className={primaryBtn} href="/">
            Į pradinį puslapį
          </Link>
          <Link className={secondaryBtn} href="/kontaktai">
            Susisiekti
          </Link>
        </div>

        <div className="mt-16">
          <h2 className="mb-6 text-sm font-semibold uppercase tracking-wider text-[#59799f]">Populiarios paslaugos</h2>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {POPULAR_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  className="block rounded-2xl border border-[#e8ebfa] p-4 text-left transition hover:border-[#263cd0] hover:bg-[#f6f7ff]"
                  href={link.href}
                >
                  <p className="font-semibold text-[#16216b]">{link.label}</p>
                  <p className="mt-1 text-sm text-[#59799f]">{link.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-12 text-sm text-[#59799f]">
          Negalite rasti, ko ieškote?{" "}
          <a className="font-medium text-[#263cd0] underline-offset-2 hover:underline" href="tel:+37060620666">
            Skambinkite +370 606 20 666
          </a>{" "}
          arba{" "}
          <Link className="font-medium text-[#263cd0] underline-offset-2 hover:underline" href="/kontaktai">
            parašykite mums
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
