/**
 * SiteFooter — 全ページ共通フッター
 * ------------------------------------------------------------------
 * 会社概要・プライバシーポリシーへの導線はここに置く（ヘッダーには置かない）。
 * Server Component。
 */

import Link from "next/link";
import Image from "next/image";
import { COMPANY, NAV } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer className="border-t border-arch-rule bg-arch-cream-raised">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10 py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <Image
                src="/images/logo.jpg"
                alt=""
                width={96}
                height={96}
                className="h-10 w-10 object-contain"
              />
              <span className="display-jp text-lg text-arch-forest">合同会社ARCH</span>
            </div>
            <p className="mt-5 max-w-sm text-[0.95rem] leading-[1.9] text-arch-ink-soft">
              歯科医院の外部事務長として、院長が一人で抱えている経営実務を整理し、
              医院が回り続ける体制をつくります。
            </p>
          </div>

          <nav aria-label="フッターナビゲーション" className="md:col-span-4">
            <h2 className="mono-micro text-arch-ink-muted">SITE MAP</h2>
            <ul className="mt-5 space-y-1">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-11 items-center text-[0.95rem] text-arch-ink-soft hover:text-arch-forest"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/company"
                  className="inline-flex min-h-11 items-center text-[0.95rem] text-arch-ink-soft hover:text-arch-forest"
                >
                  会社概要
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="inline-flex min-h-11 items-center text-[0.95rem] text-arch-ink-soft hover:text-arch-forest"
                >
                  プライバシーポリシー
                </Link>
              </li>
            </ul>
          </nav>

          <div className="md:col-span-3">
            <h2 className="mono-micro text-arch-ink-muted">CONTACT</h2>
            <dl className="mt-5 space-y-4 text-[0.95rem] leading-[1.9] text-arch-ink-soft">
              <div>
                <dt className="text-arch-ink-muted text-sm">所在地</dt>
                <dd>{COMPANY.addressLabel}</dd>
              </div>
              <div>
                <dt className="text-arch-ink-muted text-sm">対応地域</dt>
                <dd>{COMPANY.areaServed}</dd>
              </div>
              <div>
                <dt className="text-arch-ink-muted text-sm">メール</dt>
                <dd>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="underline underline-offset-4 hover:text-arch-forest"
                  >
                    {COMPANY.email}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <p className="mt-14 border-t border-arch-rule pt-8 text-sm text-arch-ink-muted">
          © 2026 合同会社ARCH
        </p>
      </div>
    </footer>
  );
}
