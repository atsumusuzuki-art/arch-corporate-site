/**
 * BrandLogo — 現行の正式ロゴを表示する唯一のコンポーネント
 * ------------------------------------------------------------------
 * ロゴ画像のパスはここにも書かない（lib/brand.ts の BRAND_LOGO だけを見る）。
 * ロゴを差し替えるときは lib/brand.ts だけを変更する。
 *
 * ・形状の変更・再設計・トリミング・色の加工はしない（object-contain で全体を見せる）
 * ・装飾として新たな場所に編み込み型マークを追加しない。表示するのは Header／Footer 等の
 *   「会社のロゴとして必要な場所」だけ
 */

import Image from "next/image";
import { BRAND_LOGO, BRAND_NAME } from "@/lib/brand";

type Props = {
  /** 表示サイズ（px）。正方形で表示する */
  size?: number;
  className?: string;
  /** 隣に社名テキストがあるときは装飾扱い（alt を空に）にする */
  decorative?: boolean;
  priority?: boolean;
};

export default function BrandLogo({
  size = 36,
  className = "",
  decorative = true,
  priority = false,
}: Props) {
  return (
    <Image
      src={BRAND_LOGO.src}
      alt={decorative ? "" : `${BRAND_NAME.legal} ロゴ`}
      width={BRAND_LOGO.width}
      height={BRAND_LOGO.height}
      sizes={`${size * 2}px`}
      priority={priority}
      style={{ width: size, height: size }}
      className={`shrink-0 object-contain ${className}`.trim()}
    />
  );
}
