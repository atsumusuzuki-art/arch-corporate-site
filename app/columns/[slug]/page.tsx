import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ArticleLayout from "@/components/ArticleLayout";
import { COLUMNS_UNDER_COLUMNS, getColumn } from "@/lib/columns";
import { columnHref } from "@/lib/columns/types";
import { COMPANY, OG_IMAGE, SITE_NAME, absoluteUrl } from "@/lib/site";

/* /columns 配下の記事だけを静的に書き出す。
   旧 SEO 記事 3 本は /column（単数形）側の固定ページが担当する。 */
export function generateStaticParams() {
  return COLUMNS_UNDER_COLUMNS.map((m) => ({ slug: m.slug }));
}

export const dynamicParams = false;

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const column = getColumn(slug);
  if (!column || column.meta.basePath !== "/columns") return {};

  const { meta } = column;
  const path = columnHref(meta);

  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: {
      type: "article",
      url: absoluteUrl(path),
      title: meta.title,
      description: meta.description,
      publishedTime: meta.published,
      modifiedTime: meta.modified,
      authors: [`${SITE_NAME} 代表 ${COMPANY.representative}`],
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: meta.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [OG_IMAGE],
    },
  };
}

export default async function ColumnPage({ params }: Params) {
  const { slug } = await params;
  const column = getColumn(slug);
  if (!column || column.meta.basePath !== "/columns") notFound();

  const { meta, Body } = column;

  return (
    <ArticleLayout meta={meta}>
      <Body />
    </ArticleLayout>
  );
}
