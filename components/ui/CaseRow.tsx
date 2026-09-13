/**
 * CaseRow — 支援実績の 1 行（トップ・支援実績一覧で共通）
 * ------------------------------------------------------------------
 * カードではなく罫線で区切った行。広告ではなく「現場に関わってきた証拠」として見せる。
 *   CASE 01 / SAPPORO … 番号と地域
 *   大きな数字         … 確認済みの数字だけ（時点と意味を必ず添える）
 *   課題 → ARCHの関与 → 確認できた結果 → 現在地
 * 数字の誇張、ARCH 単独の成果としての断定はしない。
 */

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CaseItem } from "@/lib/cases";

type Props = {
  item: CaseItem;
  index: number;
  /** 見出しレベル（トップでは h3） */
  headingLevel?: "h2" | "h3";
};

export default function CaseRow({ item, index, headingLevel = "h3" }: Props) {
  const Heading = headingLevel;
  const rows: [string, string][] = [
    ["課題", item.story.problem],
    ["ARCHの関与", item.story.action],
    ["確認できた結果", item.story.result],
    ["現在地", item.status],
  ];

  return (
    <article className="grid gap-8 border-b border-arch-line py-10 md:py-14 lg:grid-cols-12 lg:gap-10">
      {/* 番号・地域・大きな数字 */}
      <div className="lg:col-span-4">
        <p className="mono-micro flex items-center gap-3 text-arch-green">
          <span className="tabular-nums">CASE {String(index + 1).padStart(2, "0")}</span>
          <span aria-hidden="true" className="h-px w-6 bg-arch-green/50" />
          <span>{item.code}</span>
        </p>
        <Heading className="display-jp mt-4 text-[1.25rem] leading-[1.5] text-arch-ink md:text-[1.375rem]">
          {item.area}
          <span className="mt-1 block text-[0.9375rem] font-medium text-arch-ink-soft">
            {item.summary}
          </span>
        </Heading>

        <p className="mt-8">
          {item.headline.numeric ? (
            <span className="flex items-baseline gap-1.5">
              <span className="num-en text-[clamp(3rem,6vw,4.5rem)] font-medium leading-none text-arch-deep">
                {item.headline.value}
              </span>
              <span className="text-lg font-bold text-arch-deep">{item.headline.unit}</span>
            </span>
          ) : (
            <span className="display-jp block text-[clamp(1.75rem,3.2vw,2.25rem)] leading-tight text-arch-deep">
              {item.headline.value}
            </span>
          )}
          <span className="mt-3 block text-[0.8125rem] leading-[1.7] text-arch-ink-muted">
            {item.headline.caption}
          </span>
        </p>
      </div>

      {/* 課題 → ARCHの関与 → 確認できた結果 → 現在地 */}
      <dl className="border-t border-arch-line lg:col-span-7 lg:border-t-0">
        {rows.map(([label, value]) => (
          <div
            key={label}
            className="grid gap-1 border-b border-arch-line py-4 last:border-b-0 sm:grid-cols-[8.5rem_1fr] sm:gap-6 lg:first:pt-0"
          >
            <dt className="text-[0.8125rem] font-bold tracking-[0.04em] text-arch-ink-muted">
              {label}
            </dt>
            <dd
              className={`text-[0.98rem] leading-[1.85] ${
                label === "確認できた結果" ? "font-bold text-arch-ink" : "text-arch-ink-soft"
              }`}
            >
              {value}
            </dd>
          </div>
        ))}
      </dl>

      <div className="flex items-start lg:col-span-1 lg:justify-end">
        <Link
          href={`/cases/${item.slug}`}
          className="inline-flex min-h-11 items-center gap-2 text-[0.9rem] font-bold text-arch-green underline decoration-arch-green/40 underline-offset-[6px] hover:decoration-arch-green"
          aria-label={`${item.area}の支援実績を詳しく見る`}
        >
          詳細
          <ArrowRight size={15} aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
