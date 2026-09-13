/**
 * BrandWordmark — 社名の文字表記（ロゴ画像の横に置くテキスト）
 * ------------------------------------------------------------------
 * 画像ではなく HTML テキスト。新しいワードマーク（ロゴ）を作るものではない。
 * Header では「合同会社ARCH ／ 歯科医院の外部事務長」の 2 段で使う。
 */

import { BRAND_NAME } from "@/lib/brand";

type Props = {
  /** 2 段目に日本語のポジションを出すか */
  withRole?: boolean;
  className?: string;
};

export default function BrandWordmark({ withRole = true, className = "" }: Props) {
  return (
    <span className={`flex flex-col leading-tight ${className}`.trim()}>
      <span className="display-jp text-[0.95rem] text-arch-ink md:text-base">
        {BRAND_NAME.legal}
      </span>
      {withRole && (
        <span className="mt-0.5 hidden text-[0.6875rem] tracking-[0.08em] text-arch-ink-muted sm:block">
          {BRAND_NAME.descriptorJa}
        </span>
      )}
    </span>
  );
}
