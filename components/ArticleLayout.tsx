/**
 * ArticleLayout — コラム記事の共通レイアウト
 * ------------------------------------------------------------------
 * /columns/{slug}（通常記事）と /column/{slug}（旧 SEO 記事 3 本）の
 * 両方がこの 1 つのレイアウトを使う。記事側でレイアウトを書かないこと。
 *
 * ・パンくず（表示と JSON-LD を一致させる）
 * ・著者 / 公開日 / 更新日は必ず画面に出す
 * ・冒頭に結論
 * ・本文
 * ・出典（制度・統計に触れた記事のみ）
 * ・関連サービス / ほかの記事 / 共通問い合わせフォーム
 */

import type { ReactNode } from "react";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import { getRelatedColumns } from "@/lib/columns";
import { columnHref, type ColumnMeta } from "@/lib/columns/types";
import { COMPANY, OG_IMAGE, SITE_URL, absoluteUrl } from "@/lib/site";

/** 日付表示 YYYY-MM-DD → YYYY年M月D日 */
function fmt(date: string) {
  const [y, m, d] = date.split("-");
  return `${y}年${Number(m)}月${Number(d)}日`;
}

const SERVICE_LABEL = {
  "external-manager": "外部事務長",
  "visit-dental-consulting": "訪問歯科コンサルティング",
} as const;

export default function ArticleLayout({
  meta,
  children,
}: {
  meta: ColumnMeta;
  children: ReactNode;
}) {
  const related = getRelatedColumns(meta.slug);
  const servicePath = `/services/${meta.service}`;

  /* Article の構造化データ。日付・著者は画面の表示と必ず一致させる */
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: meta.title,
    description: meta.description,
    datePublished: meta.published,
    dateModified: meta.modified,
    inLanguage: "ja",
    image: `${SITE_URL}${OG_IMAGE}`,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": absoluteUrl(columnHref(meta)),
    },
    author: {
      "@type": "Person",
      "@id": `${SITE_URL}/#atsumu-suzuki`,
      name: COMPANY.representative,
      url: absoluteUrl("/company"),
    },
    publisher: { "@id": `${SITE_URL}/#organization` },
    articleSection: meta.category,
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <Breadcrumb
        items={[
          { label: "ホーム", href: "/" },
          { label: "コラム", href: "/columns" },
          { label: meta.title },
        ]}
      />

      <article className="bg-arch-cream">
        <div className="mx-auto max-w-[720px] px-6 py-16 md:py-24 lg:px-10">
          <p className="text-sm tracking-wider text-arch-moss">{meta.category}</p>

          <h1 className="display-jp mt-5 text-[clamp(1.625rem,5.5vw,2.5rem)] leading-[1.4] text-arch-ink">
            {meta.title}
          </h1>

          {/* 著者・公開日・更新日（構造化データと同じ値） */}
          <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-2 border-y border-arch-rule py-4 text-sm text-arch-ink-soft">
            <div className="flex gap-2">
              <dt className="text-arch-ink-muted">著者</dt>
              <dd>
                <Link
                  href="/company"
                  className="underline underline-offset-4 hover:text-arch-forest"
                >
                  合同会社ARCH 代表 {COMPANY.representative}
                </Link>
              </dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-arch-ink-muted">公開日</dt>
              <dd>
                <time dateTime={meta.published}>{fmt(meta.published)}</time>
              </dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-arch-ink-muted">更新日</dt>
              <dd>
                <time dateTime={meta.modified}>{fmt(meta.modified)}</time>
              </dd>
            </div>
          </dl>

          {/* 結論を最初に置く */}
          <div className="mt-10 border-l-4 border-arch-gold bg-arch-cream-raised px-6 py-6">
            <p className="text-sm text-arch-ink-muted">この記事の結論</p>
            <p className="mt-3 text-base leading-[1.9] text-arch-ink">{meta.conclusion}</p>
          </div>

          <div className="prose-custom mt-14">{children}</div>

          {/* 出典（制度・統計に触れた記事だけ） */}
          {meta.sources && meta.sources.length > 0 && (
            <section className="mt-16 border-t border-arch-rule pt-8" aria-labelledby="sources">
              <h2 id="sources" className="display-jp text-lg text-arch-ink">
                出典
              </h2>
              <ul className="mt-5 space-y-3">
                {meta.sources.map((s) => (
                  <li key={s.url} className="text-[0.95rem] leading-[1.8] text-arch-ink-soft">
                    <a
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4 hover:text-arch-forest"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-[1.8] text-arch-ink-muted">
                診療報酬の点数や施設基準の要件は改定で変わります。実務にあたっては、
                厚生労働省および地方厚生（支）局が公表している最新の告示・通知をご確認ください。
              </p>
            </section>
          )}

          {/* 関連サービスへの内部リンク */}
          <aside className="mt-16 border border-arch-rule bg-arch-cream-raised p-6 md:p-8">
            <p className="text-sm text-arch-ink-muted">関連するサービス</p>
            <Link
              href={servicePath}
              className="display-jp mt-3 inline-flex min-h-11 items-center text-xl text-arch-forest underline underline-offset-8 hover:text-arch-forest-soft"
            >
              {SERVICE_LABEL[meta.service]}
            </Link>
          </aside>

          {/* 関連記事 */}
          {related.length > 0 && (
            <section className="mt-16" aria-labelledby="related-columns">
              <h2 id="related-columns" className="display-jp text-xl text-arch-ink">
                ほかの記事
              </h2>
              <ul className="mt-6 border-t border-arch-rule">
                {related.map((r) => (
                  <li key={r.slug} className="border-b border-arch-rule">
                    <Link
                      href={columnHref(r)}
                      className="block py-5 text-[0.95rem] leading-[1.8] text-arch-ink hover:text-arch-forest"
                    >
                      <span className="mr-3 text-sm text-arch-moss">{r.category}</span>
                      {r.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href="/columns"
                className="mt-8 inline-flex min-h-11 items-center text-[0.95rem] text-arch-forest underline underline-offset-4"
              >
                コラム一覧へ
              </Link>
            </section>
          )}
        </div>
      </article>

      <ContactForm
        idPrefix="column"
        defaultTopic={
          meta.service === "external-manager" ? "外部事務長" : "訪問歯科コンサルティング"
        }
      />
    </>
  );
}
