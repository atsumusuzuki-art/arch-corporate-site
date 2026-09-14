/**
 * SiteFooter — 全ページ共通フッター
 * ------------------------------------------------------------------
 * ・ARCH ／ DENTAL OPERATIONS PARTNER ／ 歯科医院の外部事務長 を控えめに示す（<BrandSignature />）
 * ・ロゴは現行の正式ロゴのみ。新しいシンボルマークは使わない
 * ・会社情報と既存リンク（会社概要・プライバシーポリシー）は維持する
 * ・ブランド画像に関する注記は、サイト内でここ 1 か所だけに置く
 * Server Component。
 */

import Link from "next/link";
import { COMPANY, NAV } from "@/lib/site";
import BrandSignature from "@/components/brand/BrandSignature";
import { CONSULT_LABEL } from "@/components/ui/Cta";

export default function SiteFooter() {
  return (
    <footer className="border-t border-arch-line bg-arch-white">
      <div className="mx-auto max-w-[1280px] px-5 py-16 sm:px-6 md:py-20 lg:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <BrandSignature />
            <p className="mt-7 max-w-sm text-[0.9375rem] leading-[1.9] text-arch-ink-soft">
              訪問歯科を入口に、歯科医院の立ち上げ・運営・人材・施設連携・経営判断・承継まで。
              現場で機能する状態をつくり、仕組みとして医院に残します。
            </p>
          </div>

          <nav aria-label="フッターナビゲーション" className="md:col-span-4">
            <h2 className="mono-micro text-arch-ink-muted">SITE MAP</h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 md:grid-cols-1">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-11 items-center text-[0.9375rem] text-arch-ink-soft hover:text-arch-green"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/privacy"
                  className="inline-flex min-h-11 items-center text-[0.9375rem] text-arch-ink-soft hover:text-arch-green"
                >
                  プライバシーポリシー
                </Link>
              </li>
            </ul>
          </nav>

          <div className="md:col-span-3">
            <h2 className="mono-micro text-arch-ink-muted">CONTACT</h2>
            <dl className="mt-5 space-y-4 text-[0.9375rem] leading-[1.9] text-arch-ink-soft">
              <div>
                <dt className="text-sm text-arch-ink-muted">所在地</dt>
                <dd>{COMPANY.addressLabel}</dd>
              </div>
              <div>
                <dt className="text-sm text-arch-ink-muted">対応地域</dt>
                <dd>{COMPANY.areaServed}</dd>
              </div>
              <div>
                <dt className="text-sm text-arch-ink-muted">お問い合わせ</dt>
                <dd>
                  <Link
                    href="/#contact"
                    className="inline-flex min-h-11 items-center underline underline-offset-4 hover:text-arch-green"
                  >
                    {CONSULT_LABEL}のフォーム
                  </Link>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-arch-line pt-8 sm:flex-row sm:items-baseline sm:justify-between">
          <p className="text-sm text-arch-ink-muted">© 2026 {COMPANY.name}</p>
          {/* ブランド画像に関する注記。サイト内で 1 回だけ、この場所に置く */}
          <p className="text-[0.75rem] leading-[1.7] text-arch-ink-muted">
            ※サイト内の一部ビジュアルはブランドイメージです。
          </p>
        </div>
      </div>
    </footer>
  );
}
