/**
 * /column/houmon-shika-santei
 * ------------------------------------------------------------------
 * 公開時から /column（単数形）の URL で運用している記事。
 * URL は変更せず、本文・デザイン・編集基準はほかのコラムと同じにしている。
 * 本文と記事情報は lib/columns/houmon-shika-santei.tsx にある。
 */

import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import { Body, meta } from "@/lib/columns/houmon-shika-santei";
import { columnHref } from "@/lib/columns/types";
import { COMPANY, OG_IMAGE, SITE_NAME, absoluteUrl } from "@/lib/site";

const PATH = columnHref(meta);

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: absoluteUrl(PATH) },
  openGraph: {
    type: "article",
    url: absoluteUrl(PATH),
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

export default function HoumonShikaSantei() {
  return (
    <ArticleLayout meta={meta}>
      <Body />
    </ArticleLayout>
  );
}
