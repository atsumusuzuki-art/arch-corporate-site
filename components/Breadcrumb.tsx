/**
 * Breadcrumb — パンくず（表示と JSON-LD を必ず一致させる）
 * ------------------------------------------------------------------
 * items には先頭の「ホーム」も含めて渡す。
 * 画面に出していない階層を構造化データにだけ足さないこと。
 */

import Link from "next/link";
import { SITE_URL } from "@/lib/site";

export type Crumb = {
  label: string;
  /** リンクなし（末尾＝現在地）の場合は href 未指定 */
  href?: string;
};

type Props = {
  items: Crumb[];
  /** JSON-LD は絶対 URL を要求するためベース URL を使う */
  baseUrl?: string;
};

export default function Breadcrumb({ items, baseUrl = SITE_URL }: Props) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.href
        ? { item: c.href.startsWith("http") ? c.href : `${baseUrl}${c.href === "/" ? "" : c.href}` }
        : {}),
    })),
  };

  return (
    <nav aria-label="パンくずリスト" className="border-b border-arch-rule bg-arch-cream">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <ol className="flex flex-wrap items-center gap-x-3 gap-y-1 py-4 text-sm text-arch-ink-muted">
          {items.map((c, i) => {
            const isLast = i === items.length - 1;
            return (
              <li key={`${c.label}-${i}`} className="flex items-center gap-3">
                {i > 0 && (
                  <span aria-hidden="true" className="text-arch-rule">
                    /
                  </span>
                )}
                {c.href && !isLast ? (
                  <Link
                    href={c.href}
                    className="underline-offset-4 hover:text-arch-forest hover:underline"
                  >
                    {c.label}
                  </Link>
                ) : (
                  <span aria-current={isLast ? "page" : undefined} className="text-arch-ink-soft">
                    {c.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
