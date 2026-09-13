/**
 * BrandSignature — 「ARCH ／ DENTAL OPERATIONS PARTNER ／ 歯科医院の外部事務長」の署名
 * ------------------------------------------------------------------
 * Footer と会社概要のブランド説明で使う、控えめな文字の組み合わせ。
 * ・ロゴ画像は <BrandLogo /> に任せ、ここでは文字だけを組む（画像にしない）
 * ・DENTAL OPERATIONS PARTNER は会社名・商品名ではなく、立ち位置を補足する英語表現
 * ・日本語の「歯科医院の外部事務長」を必ず併記する
 */

import { BRAND_NAME } from "@/lib/brand";
import BrandLogo from "./BrandLogo";

type Props = {
  /** ロゴを左に添えるか */
  withLogo?: boolean;
  /** 深緑の面に置くとき */
  onDark?: boolean;
  className?: string;
};

export default function BrandSignature({
  withLogo = true,
  onDark = false,
  className = "",
}: Props) {
  const main = onDark ? "text-arch-white" : "text-arch-ink";
  const sub = onDark ? "text-arch-light" : "text-arch-ink-muted";
  const role = onDark ? "text-arch-white" : "text-arch-green";

  return (
    <div className={`flex items-center gap-4 ${className}`.trim()}>
      {withLogo && <BrandLogo size={44} />}
      <p className="flex flex-col leading-tight">
        <span className={`mono-label !text-[1rem] !tracking-[0.3em] font-semibold ${main}`}>
          {BRAND_NAME.short}
        </span>
        <span className={`mono-micro mt-1.5 !text-[0.6875rem] ${sub}`}>
          {BRAND_NAME.descriptor}
        </span>
        <span className={`mt-1.5 text-[0.8125rem] font-bold tracking-[0.06em] ${role}`}>
          {BRAND_NAME.descriptorJa}
        </span>
      </p>
    </div>
  );
}
