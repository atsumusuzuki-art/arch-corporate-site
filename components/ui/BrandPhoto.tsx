/**
 * BrandPhoto — ブランド画像（lib/brand.ts の BRAND_IMAGES）を表示する
 * ------------------------------------------------------------------
 * ・画像のパス・サイズ・alt・object-position はレジストリから取る
 * ・枠の縦横比はページ側で指定する（ratio / ratioLg）。枠がなければ元の比率で表示
 * ・画像の上に文字やロゴを重ねない。角丸は 2px まで、影は付けない
 * ・将来、実写に差し替えても同じ枠で表示できる
 */

import Image from "next/image";
import type { CSSProperties } from "react";
import { BRAND_IMAGES, type BrandImageKey } from "@/lib/brand";

type Props = {
  name: BrandImageKey;
  /** next/image の sizes */
  sizes: string;
  /** 枠の縦横比クラス（例 "aspect-[4/3]"）。未指定なら画像本来の比率 */
  ratio?: string;
  /** 枠全体に付けるクラス（高さ指定など） */
  className?: string;
  priority?: boolean;
};

export default function BrandPhoto({
  name,
  sizes,
  ratio,
  className = "",
  priority = false,
}: Props) {
  const img = BRAND_IMAGES[name];
  const style = {
    "--pos-m": img.posMobile,
    "--pos-d": img.posDesktop,
  } as CSSProperties;

  // 比率指定がない場合は元の比率のまま（切り取らない）
  if (!ratio && !className.includes("h-")) {
    return (
      <Image
        src={img.src}
        alt={img.alt}
        width={img.width}
        height={img.height}
        sizes={sizes}
        priority={priority}
        className={`block h-auto w-full rounded-[2px] bg-arch-pale ${className}`.trim()}
      />
    );
  }

  return (
    <div
      className={`relative w-full overflow-hidden rounded-[2px] bg-arch-pale ${ratio ?? ""} ${className}`.trim()}
    >
      <Image
        src={img.src}
        alt={img.alt}
        fill
        sizes={sizes}
        priority={priority}
        style={style}
        className="brand-img"
      />
    </div>
  );
}
