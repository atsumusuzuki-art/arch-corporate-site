import type { ReactNode } from "react";

/** コラムの分類（2 本柱に対応させる） */
export type ColumnCategory = "外部事務長" | "訪問歯科" | "医院運営";

/** 本文中で参照した公的な一次資料 */
export type ColumnSource = {
  label: string;
  url: string;
};

export type ColumnMeta = {
  /** 公開 URL の末尾。既存記事の slug は変更しないこと */
  slug: string;
  /**
   * 公開 URL の親パス。
   * 通常の記事は "/columns"。
   * 旧 SEO 記事 3 本は公開時から "/column"（単数形）のため、そのまま維持する。
   */
  basePath: "/columns" | "/column";
  /** 記事タイトル */
  title: string;
  /** meta description。100〜120 文字程度 */
  description: string;
  category: ColumnCategory;
  /** 公開日 YYYY-MM-DD（実際の公開日。推測で作らない） */
  published: string;
  /** 更新日 YYYY-MM-DD */
  modified: string;
  /** 記事の最初に置く結論。1〜2 文で言い切る */
  conclusion: string;
  /**
   * 記事冒頭の「この記事の結論」枠を出すかどうか。
   * 既定は表示（未指定 = true）。題目直下に解説・副題を置かない指定の記事だけ false にする。
   */
  showConclusion?: boolean;
  /** 関連サービス（本文末の内部リンクに使う） */
  service: "external-manager" | "visit-dental-consulting";
  /** 制度・統計に触れた場合に必ず添える一次資料 */
  sources?: ColumnSource[];
};

/** 1 記事 = このかたちのモジュール 1 ファイル */
export type ColumnModule = {
  meta: ColumnMeta;
  Body: () => ReactNode;
};

/** 記事の公開 URL */
export const columnHref = (meta: Pick<ColumnMeta, "basePath" | "slug">) =>
  `${meta.basePath}/${meta.slug}`;
