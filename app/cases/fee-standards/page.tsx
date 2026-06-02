import { ArrowRight } from "lucide-react";
import Link from "next/link";
import CornerMarkers, { SectionTag } from "@/components/CornerMarkers";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "診療報酬改定と施設基準対応を整理｜CASE 04",
  description:
    "診療報酬改定への対応と施設基準が複雑で抱え込んでいた医院に、必要事項の整理・レセコン業者調整・院内共有資料作成で並走した支援事例。",
};

const PROBLEMS = [
  { label: "施設基準が複雑で整理できていない", body: "自院が取得済みの施設基準と、新たに対応すべき項目の関係が整理できていなかった。" },
  { label: "診療報酬改定対応に不安", body: "改定の概要は読んだが、自院に必要な対応にまで落とし込めていなかった。" },
  { label: "業者連絡・院内共有が滞っていた", body: "レセコン業者との設定変更打合せ、スタッフへの説明資料準備が、診療の合間では追いつかなかった。" },
];

const ACTIONS = [
  "現状の届出状況の一覧化（取得済み・取得予定）",
  "改定後に必要な届出・運用変更・設定変更の整理",
  "レセコン業者との打合せ同席、設定変更依頼の取りまとめ",
  "スタッフ向けに「何が変わるか」を 1 枚にまとめた資料作成",
  "改定対応のチェックリストと期日管理",
];

const RESULT = `院長とスタッフが対応すべき事項が一覧化され、期限内に必要な準備を完了。改定対応の漏れと、スタッフへの説明工数を減らせた。「資料を読み込む時間が削れたのが大きい」と院長より。`;

export default function CaseFeeStandardsPage() {
  return (
    <article className="bg-arch-cream">
      <Breadcrumb
        items={[
          { label: "HOME", href: "/" },
          { label: "事例", href: "/" },
          { label: "算定・施設基準" },
        ]}
      />

      <section className="relative bg-arch-forest text-arch-cream overflow-hidden pt-20 md:pt-28 pb-16 md:pb-24">
        <CornerMarkers topRight="CASE 04 — 算定・施設基準" bottomLeft="CASE" bottomRight="04" theme="dark" />
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <SectionTag category="CASE 04" number="—" label="算定・施設基準" theme="dark" />

          <h1 className="display-jp text-[1.75rem] sm:text-3xl md:text-[2.5rem] lg:text-[3rem] text-arch-cream leading-[1.2] tracking-tight mt-6 mb-8">
            診療報酬改定と
            <br className="hidden sm:block" />
            <span className="text-arch-gold font-black">施設基準対応</span>を整理。
          </h1>

          <p className="text-base md:text-lg text-arch-sage/90 leading-loose max-w-2xl">
            院長が制度資料を読み込む時間が取れない状況に対し、必要事項の整理・レセコン業者調整・院内共有資料作成までを並走した支援事例です。
          </p>
        </div>
      </section>

      <section className="bg-arch-cream py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="flex items-baseline justify-between border-b border-arch-rule pb-4 mb-12 md:mb-16">
            <SectionTag category="PROBLEM" number="01" label="医院の状況" />
          </div>
          <ul className="space-y-px bg-arch-rule">
            {PROBLEMS.map((p, i) => (
              <li key={p.label} className="bg-arch-cream-raised py-6 md:py-7 px-5 md:px-8">
                <p className="mono-label text-arch-moss mb-2 tabular-nums">状況 — {String(i + 1).padStart(2, "0")}</p>
                <h3 className="display-jp text-base md:text-lg text-arch-ink mb-2 leading-snug">{p.label}</h3>
                <p className="text-sm text-arch-ink-soft leading-loose">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-arch-cream-raised py-20 md:py-28 border-t border-arch-rule">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="flex items-baseline justify-between border-b border-arch-rule pb-4 mb-12 md:mb-16">
            <SectionTag category="SUPPORT" number="02" label="ARCHが行った支援" />
            <p className="mono-micro text-arch-ink-muted hidden sm:block">{String(ACTIONS.length).padStart(2, "0")} TASKS</p>
          </div>
          <ul className="grid sm:grid-cols-2 gap-0 border-t border-l border-arch-rule">
            {ACTIONS.map((a, i) => (
              <li key={a} className="border-b border-r border-arch-rule py-5 md:py-6 px-4 md:px-6 flex items-baseline gap-3">
                <span className="mono-micro text-arch-moss tabular-nums shrink-0">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-sm md:text-base text-arch-ink leading-snug font-medium">{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-arch-cream py-20 md:py-28 border-t border-arch-rule">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="flex items-baseline justify-between border-b border-arch-rule pb-4 mb-12 md:mb-16">
            <SectionTag category="RESULT" number="03" label="結果と現在" />
          </div>
          <div className="border-l-4 border-arch-gold bg-arch-cream-raised p-6 md:p-10">
            <p className="text-base md:text-lg text-arch-ink leading-loose font-medium">{RESULT}</p>
          </div>
          <p className="mono-micro text-arch-ink-muted mt-6 leading-relaxed">
            ※ 実在医院名は伏せた匿名事例です。最終的な診療判断・算定判断・届出責任は医療機関に帰属します。
          </p>
        </div>
      </section>

      <section className="bg-arch-cream-raised py-16 md:py-20 border-t border-arch-rule">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <p className="mono-label text-arch-moss mb-6">こんな支援も提供しています</p>
          <ul className="grid sm:grid-cols-2 gap-0 border-t border-l border-arch-rule">
            {[
              { href: "/services/fee-standards", title: "算定・施設基準支援", desc: "本事例の詳しい支援内容" },
              { href: "/services/external-manager", title: "歯科医院の外部事務長とは", desc: "ARCHの考える役割" },
            ].map((r) => (
              <li key={r.href} className="border-b border-r border-arch-rule">
                <Link href={r.href} className="group block py-6 md:py-7 px-5 md:px-6 h-full hover:bg-arch-cream transition-colors">
                  <p className="display-jp text-base md:text-lg text-arch-ink group-hover:text-arch-forest transition-colors mb-2">{r.title}</p>
                  <p className="text-xs md:text-sm text-arch-ink-soft leading-relaxed">{r.desc}</p>
                  <p className="mono-micro text-arch-moss mt-3 inline-flex items-center gap-1.5">詳しく見る <ArrowRight size={11} /></p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}
