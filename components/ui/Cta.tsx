/**
 * CTA — ボタンとテキストリンクの共通部品
 * ------------------------------------------------------------------
 * ・primary   … 深緑の塗り（初回適性相談など、1 画面に 1 つ）
 * ・secondary … 1px の枠線
 * ・text      … 下線付きのテキストリンク
 * 角丸 2px、影なし、透明ボタンは使わない。タップ領域は 44px 以上。
 */

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "text" | "primaryOnDark";

const STYLES: Record<Variant, string> = {
  primary:
    "inline-flex min-h-[3.25rem] items-center justify-center gap-3 rounded-[2px] bg-arch-deep px-7 text-[0.95rem] font-bold text-arch-white transition-colors duration-200 hover:bg-arch-green",
  primaryOnDark:
    "inline-flex min-h-[3.25rem] items-center justify-center gap-3 rounded-[2px] bg-arch-white px-7 text-[0.95rem] font-bold text-arch-deep transition-colors duration-200 hover:bg-arch-pale",
  secondary:
    "inline-flex min-h-[3.25rem] items-center justify-center gap-3 rounded-[2px] border border-arch-deep px-7 text-[0.95rem] font-bold text-arch-deep transition-colors duration-200 hover:bg-arch-pale",
  text: "inline-flex min-h-11 items-center gap-2.5 text-[0.95rem] font-bold text-arch-green underline decoration-arch-green/40 underline-offset-[6px] transition-colors duration-200 hover:decoration-arch-green",
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  /** 右向きの矢印を付けるか（意味のある遷移のときだけ） */
  arrow?: boolean;
};

export default function Cta({
  href,
  children,
  variant = "primary",
  className = "",
  arrow = true,
}: Props) {
  const cls = `${STYLES[variant]} ${className}`.trim();
  const inner = (
    <>
      {children}
      {arrow && <ArrowRight size={16} aria-hidden="true" />}
    </>
  );
  // ページ内アンカーは <a>、それ以外は next/link
  if (href.startsWith("#")) {
    return (
      <a href={href} className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}

/** 相談導線のラベル（サイト全体でこの表記に統一する） */
export const CONSULT_LABEL = "初回適性相談";
