"use client";

/**
 * SiteHeader — 全ページ共通ヘッダー
 * ------------------------------------------------------------------
 * ・ロゴは現行の正式ロゴ（<BrandLogo />）。新ロゴ案は使わない
 * ・ナビは 5 項目（外部事務長 / 訪問歯科 / 支援実績 / コラム / 会社概要）＋「初回適性相談」
 * ・背景は Paper の単色。影・ぼかしは使わず、下の 1px 罫線で区切る
 * ・モバイルメニューは aria-expanded / aria-controls を正しく設定する
 */

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { NAV } from "@/lib/site";
import BrandLogo from "@/components/brand/BrandLogo";
import BrandWordmark from "@/components/brand/BrandWordmark";
import { CONSULT_LABEL } from "@/components/ui/Cta";

/** 下部に共通の問い合わせフォームを置いているページ */
const HAS_CONTACT_FORM = ["/", "/services/", "/cases", "/columns", "/company"];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

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
    <header className="sticky top-0 z-50 border-b border-arch-line bg-arch-paper">
      <div className="mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-10">
        <div className="flex h-16 items-center justify-between gap-6 lg:h-[72px]">
          {/* ロゴ */}
          <Link
            href="/"
            className="flex min-h-11 shrink-0 items-center gap-3 py-1"
            aria-label="合同会社ARCH ホームへ"
          >
            <BrandLogo size={34} priority />
            <BrandWordmark />
          </Link>

          {/* デスクトップナビ */}
          <nav aria-label="メインナビゲーション" className="hidden lg:block">
            <ul className="flex items-center gap-7 xl:gap-9">
              {NAV.map((item) => {
                const active = pathname.startsWith(item.href);
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`inline-block border-b py-3 text-[0.9rem] leading-none transition-colors duration-200 ${
                        active
                          ? "border-arch-green font-bold text-arch-green"
                          : "border-transparent text-arch-ink-soft hover:text-arch-green"
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
                  className="inline-flex min-h-11 items-center rounded-[2px] bg-arch-deep px-5 text-[0.9rem] font-bold text-arch-white transition-colors duration-200 hover:bg-arch-green"
                >
                  {CONSULT_LABEL}
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
            className="inline-flex h-11 w-11 items-center justify-center text-arch-deep lg:hidden"
          >
            {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* モバイルメニュー */}
      <div
        id="mobile-nav"
        hidden={!open}
        className="max-h-[calc(100svh-4rem)] overflow-y-auto border-t border-arch-line bg-arch-paper lg:hidden"
      >
        <nav aria-label="メインナビゲーション（モバイル）" className="px-5 py-4 sm:px-6">
          <ul className="divide-y divide-arch-line">
            {NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={close}
                  className="flex min-h-14 items-center text-[1.0625rem] text-arch-ink"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href={contactHref}
            onClick={close}
            className="mb-2 mt-5 flex min-h-14 w-full items-center justify-center rounded-[2px] bg-arch-deep text-base font-bold text-arch-white"
          >
            {CONSULT_LABEL}
          </Link>
        </nav>
      </div>
    </header>
  );
}
