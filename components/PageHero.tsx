/**
 * PageHero — 下層ページ共通の見出しブロック（深緑の全面セクション）
 * ------------------------------------------------------------------
 * 深緑の全面セクションは 1 ページに最大 2 か所まで。
 * このヒーローで 1 か所使うため、ページ下部の CTA 帯と合わせて 2 か所に収める。
 */

import type { ReactNode } from "react";

type Props = {
  /** 小さな英字ラベル（1 ページに 1 つだけ） */
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
};

export default function PageHero({ eyebrow, title, lead, children }: Props) {
  return (
    <section className="bg-arch-forest text-arch-cream">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10 py-24 md:py-36">
        {eyebrow && <p className="mono-micro text-arch-gold-on-dark">{eyebrow}</p>}
        <h1 className="display-jp mt-6 max-w-[20ch] text-[clamp(2rem,7vw,4rem)] leading-[1.25] text-arch-cream">
          {title}
        </h1>
        {lead && (
          <p className="mt-10 max-w-[42rem] text-[clamp(1rem,2.2vw,1.25rem)] leading-[1.9] text-arch-sage">
            {lead}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
