/**
 * JapanMap — 支援実績のある都道府県だけを塗った日本地図
 * ------------------------------------------------------------------
 * 地図の実体は public/images/japan-support-areas.svg（静的ファイル）。
 * パスデータが大きいため HTML には埋め込まず、キャッシュの効く画像として読み込む。
 * 色は SVG 側に焼き込んである（深緑＝支援実績あり／薄いベージュ＝その他）。
 *
 * 塗ってあるのは支援実績のある都道府県のみ。相談段階の地域は含めない。
 * 市区町村単位の打点はしない（医院が特定されるため）。
 */

import Image from "next/image";

export default function JapanMap({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/images/japan-support-areas.svg"
      alt="支援実績のある地域を示した日本地図。北海道、宮城県、東京都、神奈川県が塗られている。"
      width={600}
      height={650}
      sizes="(max-width: 1023px) 80vw, 40vw"
      className={className}
      priority={false}
    />
  );
}
