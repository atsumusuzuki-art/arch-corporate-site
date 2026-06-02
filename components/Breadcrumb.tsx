import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type Crumb = {
  label: string;
  /** リンクなし（末尾項目）の場合は href 未指定 */
  href?: string;
};

type Props = {
  items: Crumb[];
  /** サイトのベース URL（JSON-LD 用、絶対 URL を要求するため） */
  baseUrl?: string;
};

/**
 * editorial v2 のパンくずリスト
 * - 表示：HOME > サービス > 現在ページ
 * - SEO：BreadcrumbList JSON-LD を同梱
 */
export default function Breadcrumb({ items, baseUrl = "https://arch-yh.com" }: Props) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: c.href.startsWith("http") ? c.href : `${baseUrl}${c.href}` } : {}),
    })),
  };

  return (
    <nav
      aria-label="パンくずリスト"
      className="bg-arch-cream-raised border-b border-arch-rule"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-3 md:py-4">
        <ol className="flex flex-wrap items-center gap-1.5 mono-micro text-arch-ink-muted tracking-wider">
          {items.map((c, i) => {
            const isLast = i === items.length - 1;
            return (
              <li key={`${c.label}-${i}`} className="flex items-center gap-1.5">
                {c.href && !isLast ? (
                  <Link
                    href={c.href}
                    className="hover:text-arch-forest transition-colors"
                  >
                    {c.label}
                  </Link>
                ) : (
                  <span className={isLast ? "text-arch-ink font-medium" : ""}>
                    {c.label}
                  </span>
                )}
                {!isLast && (
                  <ChevronRight
                    size={11}
                    strokeWidth={1.5}
                    className="text-arch-ink-muted/50"
                  />
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
