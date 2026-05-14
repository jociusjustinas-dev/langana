import type { MetadataRoute } from "next";

import { SYSTEMS } from "@/lib/product-systems";
import { SITE_URL } from "@/lib/seo";

type ChangeFrequency = NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>;

type StaticRoute = {
  path: string;
  priority: number;
  changeFrequency: ChangeFrequency;
};

/** Visi indeksuojami statiniai maršrutai (be /oak-me-up, be /ziemos-sodai/<slug> stubų, be /api). */
const STATIC_ROUTES: StaticRoute[] = [
  { path: "/", priority: 1, changeFrequency: "weekly" },
  { path: "/langai", priority: 0.9, changeFrequency: "monthly" },
  { path: "/durys", priority: 0.9, changeFrequency: "monthly" },
  { path: "/stiklinimas", priority: 0.9, changeFrequency: "monthly" },
  { path: "/stumdomos-sistemos", priority: 0.9, changeFrequency: "monthly" },
  { path: "/aliuminio-sprendimai", priority: 0.9, changeFrequency: "monthly" },
  { path: "/ziemos-sodai", priority: 0.9, changeFrequency: "monthly" },
  { path: "/langai/plastikiniai-langai", priority: 0.8, changeFrequency: "monthly" },
  { path: "/langai/aliuminio-langai", priority: 0.8, changeFrequency: "monthly" },
  { path: "/durys/plastikines-durys", priority: 0.8, changeFrequency: "monthly" },
  { path: "/durys/aliuminio-durys", priority: 0.8, changeFrequency: "monthly" },
  { path: "/durys/metalines-durys", priority: 0.8, changeFrequency: "monthly" },
  { path: "/durys/specialios-paskirties-durys", priority: 0.8, changeFrequency: "monthly" },
  { path: "/stiklinimas/balkonu-stiklinimas", priority: 0.8, changeFrequency: "monthly" },
  { path: "/stiklinimas/terasu-stiklinimas", priority: 0.8, changeFrequency: "monthly" },
  {
    path: "/stumdomos-sistemos/plastikines-stumdomos-sistemos",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/stumdomos-sistemos/aliumines-stumdomos-sistemos",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  { path: "/aliuminio-sprendimai/aliuminio-fasadai", priority: 0.8, changeFrequency: "monthly" },
  { path: "/aliuminio-sprendimai/aliuminio-pertvaros", priority: 0.8, changeFrequency: "monthly" },
  { path: "/kodel-langana", priority: 0.7, changeFrequency: "monthly" },
  { path: "/katalogas", priority: 0.7, changeFrequency: "monthly" },
  { path: "/igyvendinti-projektai", priority: 0.7, changeFrequency: "weekly" },
  { path: "/kontaktai", priority: 0.7, changeFrequency: "yearly" },
  { path: "/privatumo-politika", priority: 0.3, changeFrequency: "yearly" },
];

function siteUrl(path: string): string {
  const base = SITE_URL.replace(/\/$/, "");
  if (path === "/" || path === "") return base;
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${base}${p}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticUrls: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: siteUrl(route.path),
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const dynamicUrls: MetadataRoute.Sitemap = SYSTEMS.map((system) => ({
    url: siteUrl(`${system.parent}/${system.slug}`),
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticUrls, ...dynamicUrls];
}
