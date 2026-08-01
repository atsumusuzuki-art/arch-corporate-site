import type { ColumnMeta, ColumnModule } from "./types";
import { columnHref } from "./types";

/* 1 記事 = 1 ファイル。新しい記事を足すときは
   lib/columns/<slug>.tsx を作り、ここに 1 行 import を追加するだけ。 */
import * as brokerTrap from "./broker-trap";
import * as communication from "./communication";
import * as communicationTimelag from "./communication-timelag";
import * as documentHell from "./document-hell";
import * as facilityCollaboration from "./facility-collaboration";
import * as facilityNeeds from "./facility-needs";
import * as invisibleProfit from "./invisible-profit";
import * as profitTrap from "./profit-trap";
import * as salesTrap from "./sales-trap";
import * as snsDxRecruitment from "./sns-dx-recruitment";
import * as staffRole from "./staff-role";
import * as turnoverStrategy from "./turnover-strategy";
import * as waitingRoomVisual from "./waiting-room-visual";

/* 旧 SEO 記事 3 本。公開 URL が /column（単数形）のため basePath が異なるだけで、
   本文・デザイン・編集基準はほかの記事と同じ扱いにしている。 */
import * as houmonShikaHajimekata from "./houmon-shika-hajimekata";
import * as houmonShikaSantei from "./houmon-shika-santei";
import * as houmonShikaEigyo from "./houmon-shika-eigyo";

const MODULES: ColumnModule[] = [
  brokerTrap,
  communication,
  communicationTimelag,
  documentHell,
  facilityCollaboration,
  facilityNeeds,
  houmonShikaEigyo,
  houmonShikaHajimekata,
  houmonShikaSantei,
  invisibleProfit,
  profitTrap,
  salesTrap,
  snsDxRecruitment,
  staffRole,
  turnoverStrategy,
  waitingRoomVisual,
];

/** 新しい順に並べた全記事（/columns と /column の両方を含む） */
export const COLUMNS: ColumnModule[] = [...MODULES].sort((a, b) =>
  b.meta.published.localeCompare(a.meta.published)
);

/** 記事メタだけの一覧（一覧ページ・sitemap 用） */
export const COLUMN_METAS: ColumnMeta[] = COLUMNS.map((c) => c.meta);

/** /columns/[slug] の動的ルートが生成する記事だけ */
export const COLUMNS_UNDER_COLUMNS = COLUMN_METAS.filter(
  (m) => m.basePath === "/columns"
);

/** slug から 1 記事を引く */
export function getColumn(slug: string): ColumnModule | undefined {
  return MODULES.find((m) => m.meta.slug === slug);
}

/** 同じ分類の他の記事（関連記事の表示に使う） */
export function getRelatedColumns(slug: string, limit = 3): ColumnMeta[] {
  const current = getColumn(slug)?.meta;
  if (!current) return [];
  const sameCategory = COLUMN_METAS.filter(
    (m) => m.slug !== slug && m.category === current.category
  );
  const others = COLUMN_METAS.filter(
    (m) => m.slug !== slug && m.category !== current.category
  );
  return [...sameCategory, ...others].slice(0, limit);
}

export { columnHref };
export type { ColumnMeta, ColumnModule, ColumnCategory, ColumnSource } from "./types";
