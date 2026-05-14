import { type NextRequest, NextResponse } from "next/server";

/** Tik šiuose host'uose leidžiame indeksavimą be X-Robots-Tag. */
const PRODUCTION_HOSTS = new Set(["langana.lt", "www.langana.lt"]);

export function middleware(request: NextRequest) {
  const host = request.headers.get("host")?.toLowerCase() ?? "";
  const hostname = host.split(":")[0] ?? "";

  const response = NextResponse.next();

  if (!PRODUCTION_HOSTS.has(hostname)) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
  }

  return response;
}

/**
 * Visi puslapiai, išskyrus Next statinius asset'us ir žinomus paveikslų kelius.
 * sitemap.xml ir robots.txt lieka po middleware (gauna noindex staging'e).
 */
export const config = {
  matcher: [
    "/((?!_next/|favicon\\.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
