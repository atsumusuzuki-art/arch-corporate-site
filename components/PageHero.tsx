/**
 * PageHero — 下層ページ共通の見出しブロック
 * ------------------------------------------------------------------
 * 大きな見出し → 短いリード → 内容、の順に読ませる。
 * ・HERO 画像は使わない（ブランド画像は本文の中で意味のある場所に置く）
 * ・Paper の地に 1px の罫線で区切る。深緑の全面セクションにはしない
 * ・英字ラベルは 1 ページに 1 つだけ
 */

import type { ReactNode } from "react";
import { SectionNumber } from "@/components/ui/SectionHeader";

type Props = {
  /** 小さな英字ラベル */
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  children?: ReactNode;
};

export default function PageHero({ eyebrow, title, lead, children }: Props) {
  return (
    <section className="border-b border-arch-line bg-arch-paper">
      <div className="mx-auto max-w-[1280px] px-5 pb-16 pt-14 sm:px-6 md:pb-24 md:pt-24 lg:px-10">
        {eyebrow && <SectionNumber label={eyebrow} />}
        {/* スマートフォンの下限は 1.75rem。360px 幅でも 1 行 11 文字前後が収まる */}
        <h1 className="display-jp mt-6 max-w-[24em] text-[clamp(1.625rem,4vw,2.875rem)] leading-[1.45] text-arch-ink">
          {title}
        </h1>
        {lead && (
          <p className="mt-8 max-w-[40rem] text-[clamp(1rem,1.8vw,1.125rem)] leading-[1.95] text-arch-ink-soft">
            {lead}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
