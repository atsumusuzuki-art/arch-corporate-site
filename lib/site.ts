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
  founded: "2024-02-10",
  /** 画面に出す表記。日付までは出さない（登記日は founded 側で持つ） */
  foundedLabel: "2024年2月",
  representative: "鈴木 集",
  representativeEn: "Atsumu Suzuki",
  addressRegion: "神奈川県",
  addressLocality: "横浜市",
  addressLabel: "神奈川県横浜市",
  areaServed: "全国",
  business: "歯科医院の外部事務長／訪問歯科コンサルティング",
  email: "hello@arch-yh.com",
} as const;

/** ヘッダーナビゲーション（この5項目＋「初回適性相談」以外は置かない） */
export const NAV = [
  { href: "/services/external-manager", label: "外部事務長" },
  { href: "/services/visit-dental-consulting", label: "訪問歯科" },
  { href: "/cases", label: "支援実績" },
  { href: "/columns", label: "コラム" },
  { href: "/company", label: "会社概要" },
] as const;

/**
 * ブランドメッセージ（TOP の HERO）
 * ------------------------------------------------------------------
 * headlineLines / leadLines は「表示上どこで改行するか」の単位。
 * 見出しは h1 を 1 つに保ったまま、span で改行位置だけを制御する。
 */
export const BRAND = {
  /** 見出し全文（構造化データ・OGP などテキストが必要な箇所で使う） */
  headline: "歯科医院を、“回り続ける”組織へ。",
  /** 見出しの表示上の 2 行。PC・スマートフォンとも必ずこの 2 行にする */
  headlineLines: ["歯科医院を、", "“回り続ける”組織へ。"],
  /** リード 1 段落目（表示上の改行単位） */
  /** スマートフォンでは 3 行（「施設連携・」の後で改行）、PC では 2 行 */
  leadLines: ["訪問歯科を入口に、", "立ち上げ・運営・人材・施設連携・", "経営判断・承継まで。"],
  /** リード 2 段落目 */
  lead2Lines: ["助言で終わらず、", "現場で機能する状態をつくります。"],
  /** ARCH を一文で言うと（30 秒セクションの冒頭） */
  definition:
    "ARCHは、歯科医院の経営と運営を、現場で実際に機能する状態までつくる外部事務長の会社です。",
} as const;

/**
 * ARCHフィロソフィー Ver.2.0 — 迷ったときに戻る言葉
 * 文言を変えない（ARCH Philosophy セクションで表示）。
 */
export const ARCH_PHILOSOPHY = {
  main: ["良いご縁から始める。", "実装で価値を生む。", "仕組みとして現場に残す。"],
  sub: ["医院は自走させる。", "それでも選ばれる仕事をする。"],
} as const;

/**
 * サービス（二方向）
 * ------------------------------------------------------------------
 * TOP ではサービスを細かく並べず、二方向だけを示す（詳細は下層ページ）。
 * direction … 何をするか（大きく表示する 1 行）
 * label     … サービス名
 * body      … 補足の 1〜2 文
 * seoDescription … 構造化データ用。改行を含まない自然な一文にする。
 */
export const PILLARS = [
  {
    href: "/services/visit-dental-consulting",
    no: "01",
    direction: "訪問歯科を立ち上げる・再設計する",
    label: "訪問歯科コンサルティング",
    shortLabel: "訪問歯科支援",
    body: "現状確認と適性判断から、体制・施設連携・院内運用、稼働後の改善、医院だけで回る状態まで。期間を区切って伴走します。",
    seoDescription:
      "訪問歯科を回り続ける事業にするための、期間を区切った個別のコンサルティングです。",
  },
  {
    href: "/services/external-manager",
    no: "02",
    direction: "医院経営と運営を支える",
    label: "外部事務長",
    shortLabel: "外部事務長",
    body: "院長が一人で抱えている運営と経営の実務に、外部事務長として入ります。運営は仕組みにして医院へ渡し、経営判断は必要な限り一緒に担います。",
    seoDescription:
      "院長を事務作業から解放し、歯科医院が回り続ける体制をつくる外部事務長のサービスです。",
  },
] as const;

/**
 * ARCHを30秒で
 * ------------------------------------------------------------------
 * HERO 直下。ARCHフィロソフィー Ver.2.0 の仕事の進め方を 4 行で示す。
 * （2026-09 改修で「現場を知る／経営を考える／実行まで入る／紹介でつながる」から置き換え）
 */
export const THIRTY_SECONDS = [
  {
    no: "01",
    title: "良いご縁から始める",
    body: "本当にARCHが役立てる医院と仕事をする。",
  },
  {
    no: "02",
    title: "院長と現場を見る",
    body: "数字だけでなく、院長が何に悩み、何を背負っているのかを見る。",
  },
  {
    no: "03",
    title: "現場で実装する",
    body: "提案だけで終わらず、人と診療が実際に動く状態までつくる。",
  },
  {
    no: "04",
    title: "仕組みとして残す",
    body: "ARCHが離れても、医院だけで回り続ける状態をつくる。",
  },
] as const;

/**
 * 鈴木集が担うこと／仕組みへ移すこと
 * 「一人ですべてやっている」と見せないため、両方を並べて示す。
 */
export const REPRESENTATIVE_ROLES = {
  owns: [
    "信頼の最初の形成",
    "院長の本音を聞く",
    "人物と案件の見極め",
    "重要な交渉",
    "価格・契約・受けるか・撤退するかの最終判断",
    "人と人をつなぐ",
    "事業の構想と方向づけ",
  ],
  delegatedTo: ["AI", "仕組み", "テンプレート", "パートナー", "医院スタッフ", "将来のチーム"],
} as const;

/**
 * 支援の二層（ARCHフィロソフィー Ver.2.0）
 * 契約の継続そのものを成功として表現しない。
 */
export const TWO_LAYERS = [
  {
    en: "OPERATIONS",
    name: "運営レイヤー",
    nature: "終わらせる仕事。",
    items: ["立ち上げ", "書類", "記録", "請求", "採用の型", "施設営業の導線", "院内運用"],
    goal: "医院スタッフだけで回る状態にして、完了する。",
  },
  {
    en: "MANAGEMENT",
    name: "経営レイヤー",
    nature: "価値がある限り、続ける仕事。",
    items: ["経営判断", "制度改定", "人の問題", "数字の読み替え", "施設との関係", "次の展開", "承継"],
    goal: "院長の外部事務長として、判断の相手役を担う。",
  },
] as const;

/** 二層の結び（大きく表示） */
export const TWO_LAYERS_CLOSING = ["自走できれば卒業。", "経営価値が残れば、", "外部事務長として続く。"] as const;

/**
 * 代表のあゆみ（タイムライン）
 * 年が確定しているものだけ year を入れる。推測で年を作らない。
 * 「6か月で黒字化」は医療法人在籍時の経験であり、ARCHの支援実績ではない。
 */
export const TIMELINE = [
  { year: "", label: "小学校教員" },
  { year: "", label: "横浜市の広域医療法人で歯科事務局長" },
  { year: "", label: "在籍時に訪問歯科を単独で立ち上げ、6か月で黒字化" },
  { year: "2024年2月", label: "合同会社ARCH設立" },
  { year: "2024年4月", label: "本格稼働" },
  { year: "現在", label: "北海道・宮城・東京・神奈川の医院を支援" },
] as const;

/** 代表本人のことば */
export const REPRESENTATIVE_QUOTE =
  "院長が全部抱えなくても、医院はもっと強く回せる。";

/**
 * 支援エリア（トップの地図と一覧に使う）
 * ここに載せるのは支援実績のある地域だけ。相談段階の地域は含めない。
 */
export const SUPPORT_AREAS = [
  { pref: "北海道", cities: "札幌市" },
  { pref: "宮城県", cities: "仙台市" },
  { pref: "東京都", cities: "八王子市・世田谷区" },
  { pref: "神奈川県", cities: "横浜市・川崎市・相模原市・鎌倉市" },
] as const;

/** 相談をいただいている範囲。支援実績とは枠を分けて表示する */
export const CONSULTATION_AREA_NOTE =
  "沖縄を含む全国各地からご相談をいただいています。";

/** 外部事務長の考え方（外部事務長ページ・会社概要で使う。2026-08-10 基準仕様で維持が決まっている文言） */
export const PHILOSOPHY = {
  /** 1 文＝1 行。PC では各文が折り返さない文字サイズに調整している */
  mainLines: [
    "外部事務長は、院長の仕事を奪う人ではありません。",
    "院長が本来やるべき仕事に戻るための役割です。",
  ],
  subLines: ["調べる時間を、考える時間へ。", "抱える経営から、任せられる経営へ。"],
} as const;


/**
 * 各ページの公開日・更新日
 * sitemap の lastModified と JSON-LD の日付をここから引く。
 * new Date() を使わず、実際に更新した日付を手で入れること。
 */
export const PAGE_DATES: Record<string, { published: string; modified: string }> = {
  "/": { published: "2024-02-10", modified: "2026-09-11" },
  "/services/external-manager": { published: "2026-05-11", modified: "2026-09-11" },
  "/services/visit-dental-consulting": { published: "2026-08-01", modified: "2026-09-11" },
  "/cases": { published: "2026-08-01", modified: "2026-09-11" },
  "/cases/sapporo-visit-dental": { published: "2026-08-01", modified: "2026-09-11" },
  "/cases/setagaya-visit-dental": { published: "2026-08-01", modified: "2026-09-11" },
  "/cases/hachioji-external-manager": { published: "2026-08-01", modified: "2026-09-11" },
  "/columns": { published: "2026-04-18", modified: "2026-08-01" },
  "/company": { published: "2026-08-01", modified: "2026-09-11" },
  "/privacy": { published: "2026-08-01", modified: "2026-08-01" },
};

/** 絶対URLを組み立てる */
export const absoluteUrl = (path: string) =>
  path === "/" ? SITE_URL : `${SITE_URL}${path}`;

/** OGP 画像（1200×630 の実ファイル） */
export const OG_IMAGE = "/images/og-image.png";
