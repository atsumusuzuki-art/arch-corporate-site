import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ThanksTracker from "@/components/ThanksTracker";
import { COMPANY } from "@/lib/site";

/* 送信完了ページは検索結果に出す必要がないため noindex。
   sitemap にも載せない。 */
export const metadata: Metadata = {
  title: "お問い合わせありがとうございます",
  description: "お問い合わせを受け付けました。原則2営業日以内にご連絡します。",
  robots: { index: false, follow: true },
};

const NEXT_STEPS = [
  "原則2営業日以内に、担当よりメールでご連絡します",
  "日程を調整のうえ、30分のオンライン初回相談（無料）を行います",
  "初回相談で、現在の業務とARCHが担う範囲を整理します",
];

export default function ThanksPage() {
  return (
    <>
      <ThanksTracker />

      <section className="on-forest flex min-h-[70svh] items-center bg-arch-forest text-arch-cream">
        <div className="mx-auto w-full max-w-[720px] px-6 py-24 md:py-36 lg:px-10">
          <p className="mono-micro text-arch-gold-on-dark">RECEIVED</p>
          <h1 className="display-jp mt-6 text-[clamp(1.75rem,6vw,3.5rem)] leading-[1.3] text-arch-cream">
            お問い合わせを
            <br />
            受け付けました。
          </h1>
          <p className="mt-10 text-[1.0625rem] leading-[1.9] text-arch-sage">
            ご入力ありがとうございました。
            <br />
            原則2営業日以内に、{COMPANY.email} よりご連絡します。
          </p>
        </div>
      </section>

      <section aria-labelledby="next-heading" className="bg-arch-cream">
        <div className="mx-auto max-w-[720px] px-6 py-24 md:py-36 lg:px-10">
          <h2
            id="next-heading"
            className="display-jp text-[clamp(1.5rem,4.5vw,2.25rem)] leading-[1.3] text-arch-ink"
          >
            このあとの流れ
          </h2>
          <ol className="mt-10 border-t border-arch-rule">
            {NEXT_STEPS.map((s, i) => (
              <li
                key={s}
                className="flex items-baseline gap-5 border-b border-arch-rule py-5"
              >
                <span className="mono-micro text-arch-gold-deep tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[1.0625rem] leading-[1.8] text-arch-ink">{s}</span>
              </li>
            ))}
          </ol>

          <p className="mt-10 text-base leading-[1.9] text-arch-ink-soft">
            数日経っても返信が届かない場合は、迷惑メールフォルダをご確認のうえ、
            <a
              href={`mailto:${COMPANY.email}`}
              className="underline underline-offset-4 hover:text-arch-forest"
            >
              {COMPANY.email}
            </a>
            まで直接ご連絡ください。
          </p>

          <div className="mt-14 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/"
              className="inline-flex min-h-14 items-center justify-center gap-4 bg-arch-forest px-8 text-base font-bold text-arch-cream transition-colors hover:bg-arch-forest-soft"
            >
              トップへ戻る
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link
              href="/columns"
              className="inline-flex min-h-14 items-center justify-center gap-4 border border-arch-forest px-8 text-base font-bold text-arch-forest transition-colors hover:bg-arch-forest hover:text-arch-cream"
            >
              コラムを読む
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
