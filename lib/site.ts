/**
 * サイト共通定数
 * ------------------------------------------------------------------
 * URL・会社情報・ナビゲーション・更新日など、複数ページで参照する値を
 * ここに一元化する。ページ側でハードコードしないこと。
 */

/** 公式URL（www あり。canonical / OGP / JSON-LD すべてこれに統一する） */
export const SITE_URL = "https://www.arch-yh.com";

/** サイト名 */
export const SITE_NAME = "合同会社ARCH";

/** 会社情報（会社概要ページ・JSON-LD の両方から参照する） */
export const COMPANY = {
  name: "合同会社ARCH",
  nameKana: "アーチ",
  nameEn: "ARCH LLC",
  founded: "2025-02-10",
  foundedLabel: "2025年2月10日",
  representative: "鈴木 集",
  representativeEn: "Atsumu Suzuki",
  addressRegion: "神奈川県",
  addressLocality: "横浜市",
  addressLabel: "神奈川県横浜市",
  areaServed: "全国",
  business: "歯科医院の外部事務長／訪問歯科コンサルティング",
  email: "hello@arch-yh.com",
} as const;

/** ヘッダーナビゲーション（この5項目以外は置かない） */
export const NAV = [
  { href: "/services/external-manager", label: "外部事務長" },
  { href: "/services/visit-dental-consulting", label: "訪問歯科" },
  { href: "/cases", label: "支援実績" },
  { href: "/columns", label: "コラム" },
] as const;

/**
 * ブランドメッセージ
 * ------------------------------------------------------------------
 * headlineLines / lead2Lines は「表示上どこで改行するか」の単位。
 * 見出しは h1 / h2 を 1 つに保ったまま、span で改行位置だけを制御する。
 */
export const BRAND = {
  /** 見出し全文（構造化データ・OGP などテキストが必要な箇所で使う） */
  headline: "歯科医院を“回り続ける”組織へ",
  /** 見出しの表示上の 2 行。PC・スマートフォンとも必ずこの 2 行にする */
  headlineLines: ["歯科医院を", "“回り続ける”組織へ"],
  lead1: "助言だけでは医院は回らない。",
  lead2: "院長が一人で抱え始めたとき、ARCHが入る。",
  /** lead2 の意味の切れ目。スマートフォンではここで 2 行にする */
  lead2Lines: ["院長が一人で抱え始めたとき", "ARCHが入る。"],
} as const;

/**
 * 二本柱
 * ------------------------------------------------------------------
 * labelLines … 見出しの表示上の改行単位。スマートフォンではこの単位で改行し、
 *              「コンサルティン／グ」のような語中での改行を起こさない。
 * body       … 主コピー（大きく表示する 1 行）
 * sub        … 主コピーの補足（一段小さく表示する。無い柱もある）
 * seoDescription … 構造化データ用。改行を含まない自然な一文にする。
 */
export const PILLARS = [
  {
    href: "/services/external-manager",
    label: "外部事務長",
    labelLines: ["外部事務長"],
    body: "医院が“回り続ける体制”をつくる",
    sub: "院長を事務作業から解放する",
    seoDescription:
      "院長を事務作業から解放し、歯科医院が回り続ける体制をつくる外部事務長のサービスです。",
  },
  {
    href: "/services/visit-dental-consulting",
    label: "訪問歯科コンサルティング",
    labelLines: ["訪問歯科", "コンサルティング"],
    body: "訪問歯科を“回り続ける”事業にする",
    seoDescription:
      "訪問歯科を回り続ける事業にするための、期間を区切った個別のコンサルティングです。",
  },
] as const;

/**
 * ARCH が関わる地域
 * 「現在支援中」「契約実績」とは断定しない。支援実績と歯科医師ネットワークを含む。
 */
export const AREAS = [
  "北海道札幌市",
  "宮城県仙台市",
  "東京都八王子市・世田谷区",
  "神奈川県横浜市・川崎市・相模原市・鎌倉市",
] as const;

export const AREAS_NOTE = "支援実績および歯科医師とのネットワークを含みます。";

/**
 * 各ページの公開日・更新日
 * sitemap の lastModified と JSON-LD の日付をここから引く。
 * new Date() を使わず、実際に更新した日付を手で入れること。
 */
export const PAGE_DATES: Record<string, { published: string; modified: string }> = {
  "/": { published: "2025-02-10", modified: "2026-08-01" },
  "/services/external-manager": { published: "2026-05-11", modified: "2026-08-01" },
  "/services/visit-dental-consulting": { published: "2026-08-01", modified: "2026-08-01" },
  "/cases": { published: "2026-08-01", modified: "2026-08-01" },
  "/cases/sapporo-visit-dental": { published: "2026-08-01", modified: "2026-08-01" },
  "/cases/setagaya-visit-dental": { published: "2026-08-01", modified: "2026-08-01" },
  "/cases/hachioji-external-manager": { published: "2026-08-01", modified: "2026-08-01" },
  "/columns": { published: "2026-04-18", modified: "2026-08-01" },
  "/company": { published: "2026-08-01", modified: "2026-08-01" },
  "/privacy": { published: "2026-08-01", modified: "2026-08-01" },
};

/** 絶対URLを組み立てる */
export const absoluteUrl = (path: string) =>
  path === "/" ? SITE_URL : `${SITE_URL}${path}`;

/** OGP 画像（1200×630 の実ファイル） */
export const OG_IMAGE = "/images/og-image.png";
