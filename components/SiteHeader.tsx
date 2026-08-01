"use client";

/**
 * SiteHeader — 全ページ共通ヘッダー
 * ------------------------------------------------------------------
 * ナビは 5 項目のみ（外部事務長 / 訪問歯科 / 支援実績 / コラム / 相談する）。
 * 会社概要・プライバシーポリシーはフッターに置く。
 * モバイルメニューは aria-expanded / aria-controls を正しく設定する。
 */

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV } from "@/lib/site";

/** 下部に共通の問い合わせフォームを置いているページ */
const HAS_CONTACT_FORM = ["/", "/services/", "/cases", "/columns", "/company"];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // ページ遷移したらメニューを閉じる（リンクの onClick で明示的に閉じる）
  const close = () => setOpen(false);

  /* 共通フォームを持つページでは同じページ内へスクロールし、
     持たないページ（プライバシーポリシー等）ではトップのフォームへ送る */
  const hasContactForm = HAS_CONTACT_FORM.some((prefix) =>
    prefix === "/" ? pathname === "/" : pathname.startsWith(prefix)
  );
  const contactHref = hasContactForm ? "#contact" : "/#contact";

  // メニューを開いている間は背面のスクロールを止める
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-arch-cream/95 backdrop-blur-sm border-b border-arch-rule">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
        <div className="flex h-16 md:h-20 items-center justify-between gap-6">
          {/* ロゴ */}
          <Link
            href="/"
            className="flex min-h-11 shrink-0 items-center gap-3 py-1"
            aria-label="合同会社ARCH ホームへ"
          >
            <Image
              src="/images/logo.jpg"
              alt=""
              width={96}
              height={96}
              className="h-8 w-8 md:h-9 md:w-9 object-contain"
              priority
            />
            <span className="flex flex-col leading-tight">
              <span className="display-jp text-base md:text-lg text-arch-forest">
                合同会社ARCH
              </span>
              <span className="mono-micro text-arch-ink-muted hidden sm:block">
                DENTAL BACK OFFICE
              </span>
            </span>
          </Link>

          {/* デスクトップナビ */}
          <nav aria-label="メインナビゲーション" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {NAV.map((item) => {
                const active = pathname.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`text-[0.95rem] leading-none py-3 inline-block border-b-2 transition-colors ${
                        active
                          ? "text-arch-forest border-arch-gold font-bold"
                          : "text-arch-ink-soft border-transparent hover:text-arch-forest"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link
                  href={contactHref}
                  className="inline-flex min-h-11 items-center bg-arch-forest px-6 text-[0.95rem] font-bold text-arch-cream transition-colors hover:bg-arch-forest-soft"
                >
                  相談する
                </Link>
              </li>
            </ul>
          </nav>

          {/* モバイル：開閉ボタン */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "メニューを閉じる" : "メニューを開く"}
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center text-arch-forest"
          >
            {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* モバイルメニュー */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="lg:hidden border-t border-arch-rule bg-arch-cream-raised"
      >
        <nav aria-label="メインナビゲーション（モバイル）" className="px-6 py-4">
          <ul className="divide-y divide-arch-rule">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={close}
                  className="flex min-h-14 items-center text-lg text-arch-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={contactHref}
            onClick={close}
            className="mt-5 mb-2 flex min-h-14 w-full items-center justify-center bg-arch-forest text-base font-bold text-arch-cream"
          >
            相談する
          </Link>
        </nav>
      </div>
    </header>
  );
}
