/**
 * ブランド資産の一元管理
 * ------------------------------------------------------------------
 * ロゴ・ブランドディスクリプター・ブランド画像の参照先は、すべてこのファイルに集める。
 * コンポーネント側に画像パスを直接書かないこと。
 *
 * ■ ロゴを変更するとき（3期目以降の新ロゴ切り替えを想定）
 *   1. public/images/ に新しいロゴファイルを置く
 *   2. 下の BRAND_LOGO の src / width / height を書き換える
 *   これだけで Header・Footer・会社概要・構造化データ（JSON-LD）のロゴがすべて切り替わる。
 *   ロゴは <BrandLogo /> 経由でしか表示していないため、レイアウトの再設計は不要。
 *
 * ■ 注意
 *   ・現行の正式ロゴは /images/logo.jpg（編み込み型マーク＋ARCH）。今回は変更しない。
 *   ・検討中の新ロゴ案（OPEN ARCH／新Aマーク／新WORDMARK 等）はここに登録しない。
 *   ・ブランド画像の中に写っている「ARCH」の文字はロゴではなく画像の一部として扱う。
 *     画像の上にロゴを重ねない。
 */

/** 現行の正式ロゴ（正方形。深緑地にマークと ARCH の文字） */
export const BRAND_LOGO = {
  src: "/images/logo.jpg",
  width: 2048,
  height: 2048,
  /** 絶対 URL が必要な場面（JSON-LD）用のパス */
  path: "/images/logo.jpg",
} as const;

/** 表記 */
export const BRAND_NAME = {
  /** 正式社名 */
  legal: "合同会社ARCH",
  /** 英字の短い名前 */
  short: "ARCH",
  /**
   * ブランドディスクリプター（会社名・商品名ではない）。
   * 使う場所は TOP の HERO／Footer／会社概要のブランド説明に限定する。
   */
  descriptor: "DENTAL OPERATIONS PARTNER",
  /** ディスクリプターに対応する日本語のポジション（こちらが主） */
  descriptorJa: "歯科医院の外部事務長",
} as const;

/**
 * ブランド画像
 * ------------------------------------------------------------------
 * 4 枚には順番がある（相談 → 判断 → 実装 → 仕組み化）。
 *   hero           … ARCHを知る
 *   meeting        … 院長と一緒に考える
 *   implementation … 現場で実装する
 *   philosophy     … 仕組みと思想として残す
 *
 * ・いずれもブランドビジュアル（イメージ）であり、実在のオフィス・医院の写真ではない。
 *   「本社」「当社オフィス」「所在地」などの説明と組み合わせない。
 * ・将来、実際の活動写真（院長との打合せ、医院内確認、研修、施設打合せ等）に
 *   差し替える場合は、ここの src / width / height / alt / 位置だけを書き換える。
 * ・posMobile / posDesktop は object-position。切れてはいけない要素を画像ごとに確認して調整する。
 */
export type BrandImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
  /** スマートフォン（1023px 以下）の object-position */
  posMobile: string;
  /** PC（1024px 以上）の object-position */
  posDesktop: string;
};

export const BRAND_IMAGES = {
  hero: {
    src: "/images/brand/hero-arch-glass.png",
    width: 1671,
    height: 941,
    alt: "ARCHのブランドサインが置かれたガラス張りの会議空間",
    // ARCH の文字は横 54〜70% 付近。文字・ガラス・会議室・右の植物が残る位置
    posMobile: "60% 50%",
    posDesktop: "61% 50%",
  },
  meeting: {
    src: "/images/brand/director-meeting.png",
    width: 1536,
    height: 1024,
    alt: "歯科医師と経営資料を確認しながら打ち合わせる様子",
    // 二人の手と、机の上の資料（右下の ARCH のノート）が残る位置
    posMobile: "50% 60%",
    posDesktop: "50% 55%",
  },
  implementation: {
    src: "/images/brand/implementation-plan.png",
    width: 1536,
    height: 1024,
    alt: "訪問歯科の運用資料とプロジェクト実行計画",
    // 工程表・運営ガイドライン・ARCH のノートが残る位置（基本は切り取らない）
    posMobile: "56% 45%",
    posDesktop: "50% 50%",
  },
  philosophy: {
    src: "/images/brand/arch-philosophy-books.png",
    width: 1672,
    height: 941,
    alt: "Healthcare Management、People、Sustainable Futureと書かれた3冊の本",
    // 3 冊の背表紙（横 44〜92%）が切れない位置
    posMobile: "68% 50%",
    posDesktop: "66% 50%",
  },
} as const satisfies Record<string, BrandImage>;

export type BrandImageKey = keyof typeof BRAND_IMAGES;

/**
 * TOP HERO の背景としての表示位置（2026-09-11 変更：右カラムの独立画像 → HERO 全面の背景）
 * ・PC は画像を HERO の右寄り（左端 = leftOffsetDesktop）から敷き、左側は Paper 色のグラデーションで
 *   文章を読ませる。ARCH のガラスサインが右側でグラデーションにかからない位置に来るようにしている
 * ・スマホは HERO 全体を 2 つの範囲で埋める（上：窓・自然光・植物／下：ARCH サインと会議室）。
 *   ARCH サインは CTA の少し下（HERO の下半分）に来る
 */
export const HERO_BACKGROUND = {
  image: "hero" as BrandImageKey,
  /** PC の object-position（center center 基準） */
  posDesktop: "50% 50%",
  /** スマホ下半分（ARCH サインの範囲）の object-position。ARCH が消える端末では 55〜70% の範囲で調整 */
  posMobile: "67% 50%",
  /** スマホ上半分（コピーの後ろ）の object-position。窓と植物、自然光の範囲 */
  posMobileTop: "18% 30%",
} as const;
