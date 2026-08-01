import type { MetadataRoute } from "next";
import { COLUMN_METAS, columnHref } from "@/lib/columns";
import { CASES } from "@/lib/cases";
import { PAGE_DATES, absoluteUrl } from "@/lib/site";

/**
 * サイトマップ
 * ------------------------------------------------------------------
 * ・canonical を設定しているページだけを載せる
 * ・new Date() は使わない。lib/site.ts と各記事の実際の更新日を使う
 * ・/thanks（noindex）と、転送元の旧 URL は載せない
 */

export default function sitemap(): MetadataRoute.Sitemap {
  const main: MetadataRoute.Sitemap = [
    { path: "/", priority: 1 },
    { path: "/services/external-manager", priority: 0.9 },
    { path: "/services/visit-dental-consulting", priority: 0.9 },
    { path: "/cases", priority: 0.8 },
    { path: "/columns", priority: 0.8 },
    { path: "/company", priority: 0.6 },
    { path: "/privacy", priority: 0.3 },
  ].map((p) => ({
    url: absoluteUrl(p.path),
    lastModified: PAGE_DATES[p.path]?.modified,
    changeFrequency: "monthly" as const,
    priority: p.priority,
  }));

  const casePages: MetadataRoute.Sitemap = CASES.map((c) => ({
    url: absoluteUrl(`/cases/${c.slug}`),
    lastModified: PAGE_DATES[`/cases/${c.slug}`]?.modified,
    changeFrequency: "yearly",
    priority: 0.7,
  }));

  /* コラムは /columns と /column の両方を、記事データの basePath から生成する */
  const columnPages: MetadataRoute.Sitemap = COLUMN_METAS.map((c) => ({
    url: absoluteUrl(columnHref(c)),
    lastModified: c.modified,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...main, ...casePages, ...columnPages];
}
