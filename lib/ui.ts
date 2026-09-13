/**
 * レイアウトの共通クラス
 * ------------------------------------------------------------------
 * 12 カラム／最大幅 1280px／本文幅 600〜660px／セクション余白 PC 128px・スマホ 72〜80px。
 * ページごとに値をばらつかせないため、ここから使う。
 */

/** 外枠（最大幅 1280px） */
export const CONTAINER = "mx-auto w-full max-w-[1280px] px-5 sm:px-6 lg:px-10";

/** セクション上下の余白 */
export const SECTION_Y = "py-[76px] md:py-[112px] lg:py-[136px]";

/** 本文の最大幅（600〜660px） */
export const PROSE_W = "max-w-[40rem]";

/** セクション見出し（h2）— Noto Sans JP */
export const H2 =
  "display-jp text-[clamp(1.625rem,3.4vw,2.5rem)] leading-[1.45] text-arch-ink";

/** 本文 */
export const BODY = "text-[1rem] leading-[1.95] text-arch-ink-soft md:text-[1.0625rem]";
