/**
 * PageHero — 下層ページ共通の見出しブロック（深緑の全面セクション）
 * ------------------------------------------------------------------
 * 深緑の全面セクションは 1 ページに最大 2 か所まで。
 * このヒーローで 1 か所使うため、ページ下部の CTA 帯と合わせて 2 か所に収める。
 *
 * image を渡すと、トップページのヒーローと同じ形で背景に画像を敷く。
 * 画像の上には深緑の単色を 76% で重ねる（グラデーションは使わない）。
 * 画像があるときは小見出しと導入文をクリームに切り替える。
 * 金（--arch-gold-on-dark）と若草（--arch-sage）は深緑の単色の上では読めるが、
 * 明るい画像の上では、単色をどれだけ濃く重ねても 4.5:1 に届かないため。
 */

import Image from "next/image";
import type { ReactNode } from "react";

type Props = {
  /** 小さな英字ラベル（1 ページに 1 つだけ） */
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
  /**
   * 背景画像。雰囲気を伝えるためのもので内容の理解には不要なため、
   * alt は空にしてスクリーンリーダーには読み上げさせない。
   * position は object-position を指定する Tailwind クラス。
   */
  image?: { src: string; position?: string };
};

export default function PageHero({
  eyebrow,
  title,
  lead,
  children,
  image,
}: Props) {
  return (
    <section className="relative overflow-hidden bg-arch-forest text-arch-cream">
      {image && (
        <>
          <Image
            src={image.src}
            alt=""
            fill
            priority
            sizes="100vw"
            className={`object-cover ${image.position ?? "object-center"}`}
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-arch-forest/76"
          />
        </>
      )}

      <div className="relative mx-auto max-w-[1200px] px-6 lg:px-10 py-24 md:py-36">
        {eyebrow && (
          <p className={`mono-micro ${image ? "text-arch-cream" : "text-arch-gold-on-dark"}`}>
            {eyebrow}
          </p>
        )}
        {/* スマートフォンの下限は 1.75rem。トップページの h1 と同じ値にして、
            360px 幅でも 1 行 11 文字までが折り返さずに収まるようにしている。 */}
        <h1 className="display-jp mt-6 max-w-[20ch] text-[clamp(1.75rem,7vw,4rem)] leading-[1.25] text-arch-cream">
          {title}
        </h1>
        {lead && (
          <p
            className={`mt-10 max-w-[42rem] text-[clamp(1rem,2.2vw,1.25rem)] leading-[1.9] ${
              image ? "text-arch-cream" : "text-arch-sage"
            }`}
          >
            {lead}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
