import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import CornerMarkers, { SectionTag } from "@/components/CornerMarkers";

export const metadata = {
  title: "訪問歯科立ち上げ支援｜歯科医院の外部事務長として現場導入まで伴走",
  description:
    "訪問歯科を始めたいが何から手をつければよいかわからない院長へ。施設連携、必要書類、訪問スケジュール、算定、ディーラー調整まで、現場導入まで伴走する立ち上げ支援です。",
};

/* ================================================================
   訪問歯科立ち上げ支援
   ================================================================ */

const PROBLEMS = [
  { title: "施設とのつながりがない", body: "高齢者施設・介護施設との接点をどう作るかが分からない。" },
  { title: "必要書類がわからない", body: "訪問同意書、施設提出書類、患者家族向け説明資料など、何を揃えるべきか整理されていない。" },
  { title: "スタッフ体制が決まらない", body: "歯科医師、歯科衛生士、運転担当、事務の役割分担と当番制が組めない。" },
  { title: "訪問スケジュールが組めない", body: "施設の都合、患者数、移動距離を踏まえたルートが設計できない。" },
  { title: "算定や施設基準が不安", body: "在歯管、SPT、口腔機能管理など訪問特有の算定知識が手薄。" },
  { title: "始めた後に続くか不安", body: "立ち上げ後の運用、トラブル対応、レセプト精度まで誰にも相談できない。" },
];

const ACTIONS = [
  "立ち上げ計画の作成（タスク・期日・担当の整理）",
  "施設連携・ケアマネ連携の窓口設計",
  "無料歯科検診から定期診療への導線設計",
  "必要書類（同意書・施設提出資料・家族向け説明）の整備",
  "初回訪問同行とオペレーション確認",
  "算定・施設基準の相談（在歯管・SPT・口腔機能管理 等）",
  "歯科ディーラー・レセコン業者との調整",
  "立ち上げ後 3〜6 ヶ月の運用フォロー",
];

const CASE_STUDY = {
  problem:
    "外来診療は安定していたが、訪問歯科を始めたい意向はあるものの、施設との接点も準備のロードマップもなく踏み出せずにいた医院。",
  action:
    "地域の高齢者施設・介護施設の状況を整理し、施設向け案内資料と初回訪問フローを設計。必要書類のテンプレートを揃え、初回訪問にも同行。算定・レセプト準備までを 4 ヶ月で並走。",
  result:
    "院長とスタッフが無理なく始められる体制で訪問診療を開始。立ち上げ後も月1回の振り返りで現場の詰まりを早期に整理できる運用に。",
};

const RELATED = [
  {
    href: "/services/facility-growth",
    title: "施設連携・利用者増加支援",
    desc: "施設はあるのに利用者が増えない医院向け",
  },
  {
    href: "/services/fee-standards",
    title: "算定・施設基準支援",
    desc: "訪問特有の算定・届出・改定対応の整理",
  },
  {
    href: "/services/external-manager",
    title: "歯科医院の外部事務長とは",
    desc: "ARCHの考える外部事務長の役割",
  },
];

export default function VisitDentalStartupPage() {
  return (
    <article className="bg-arch-cream">
      {/* HERO */}
      <section className="relative bg-arch-forest text-arch-cream overflow-hidden pt-24 md:pt-32 pb-20 md:pb-28">
        <CornerMarkers
          topRight="STARTUP — 訪問歯科立ち上げ"
          bottomLeft="SUPPORT"
          bottomRight="訪問歯科立ち上げ支援"
          theme="dark"
        />
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <SectionTag category="STARTUP" number="—" label="訪問歯科立ち上げ支援" theme="dark" />

          <div className="mt-8 md:mt-12 grid md:grid-cols-12 gap-8 md:gap-12 items-end">
            <div className="md:col-span-8">
              <h1 className="display-jp text-[1.875rem] sm:text-3xl md:text-[2.75rem] lg:text-[3.25rem] text-arch-cream leading-[1.2] tracking-tight">
                訪問歯科を始めたい。
                <br />
                でも、<span className="text-arch-gold font-black">何から手をつければいいか</span>わからない先生へ。
              </h1>
            </div>
            <div className="md:col-span-4">
              <div className="border-l-2 border-arch-gold pl-5">
                <p className="mono-label text-arch-gold mb-3">CORE MESSAGE</p>
                <p className="text-base md:text-lg text-arch-sage leading-loose">
                  アドバイスではなく、
                  <br />
                  現場導入まで伴走する。
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14 md:mt-20 grid md:grid-cols-12 gap-8 items-end border-t border-arch-rule-dark pt-8">
            <p className="md:col-span-8 text-sm md:text-base text-arch-sage/90 leading-loose max-w-2xl">
              施設連携、必要書類、訪問スケジュール、算定、ディーラー調整。訪問歯科の立ち上げは「考えること」が多すぎて、診療の合間に整理し切れないものです。ARCH は外部事務長として、立ち上げ計画から現場導入、その後の運用フォローまで一緒に進めます。
            </p>
            <div className="md:col-span-4 flex md:justify-end">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-3 bg-arch-cream text-arch-forest px-7 py-4 text-sm font-bold tracking-[0.15em] hover:bg-arch-gold transition-colors"
              >
                訪問歯科の立ち上げを相談する
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMS */}
      <section className="bg-arch-cream py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-baseline justify-between border-b border-arch-rule pb-4 mb-12 md:mb-16">
            <SectionTag category="PROBLEM" number="02" label="よくある悩み" />
            <p className="mono-micro text-arch-ink-muted hidden sm:block">06 CONCERNS</p>
          </div>

          <h2 className="display-jp text-3xl md:text-4xl text-arch-ink mb-12 md:mb-16 max-w-3xl leading-[1.2]">
            訪問歯科は、
            <br />
            <span className="text-arch-forest font-black">考えることが多すぎる。</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-arch-rule">
            {PROBLEMS.map((p, i) => (
              <div key={p.title} className="border-b border-r border-arch-rule py-7 md:py-9 px-5 md:px-6">
                <p className="mono-label text-arch-moss mb-3 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="display-jp text-base md:text-lg text-arch-ink mb-3 leading-snug">
                  {p.title}
                </h3>
                <p className="text-sm text-arch-ink-soft leading-loose">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACTIONS */}
      <section className="bg-arch-cream-raised py-20 md:py-28 border-t border-arch-rule">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-baseline justify-between border-b border-arch-rule pb-4 mb-12 md:mb-16">
            <SectionTag category="SUPPORT" number="03" label="ARCHが支援すること" />
            <p className="mono-micro text-arch-ink-muted hidden sm:block">
              {String(ACTIONS.length).padStart(2, "0")} TASKS
            </p>
          </div>

          <h2 className="display-jp text-3xl md:text-4xl text-arch-ink mb-12 md:mb-16 max-w-3xl leading-[1.2]">
            計画から、現場導入、
            <br />
            <span className="text-arch-forest font-black">運用フォローまで。</span>
          </h2>

          <ul className="grid sm:grid-cols-2 gap-0 border-t border-l border-arch-rule">
            {ACTIONS.map((a, i) => (
              <li
                key={a}
                className="border-b border-r border-arch-rule py-5 md:py-6 px-4 md:px-6 flex items-baseline gap-3"
              >
                <span className="mono-micro text-arch-moss tabular-nums shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm md:text-base text-arch-ink leading-snug font-medium">
                  {a}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CASE */}
      <section className="bg-arch-cream py-20 md:py-28 border-t border-arch-rule">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-baseline justify-between border-b border-arch-rule pb-4 mb-12 md:mb-16">
            <SectionTag category="CASE" number="04" label="支援事例" />
            <p className="mono-micro text-arch-ink-muted hidden sm:block">※ 医院名は匿名化</p>
          </div>

          <h2 className="display-jp text-3xl md:text-4xl text-arch-ink mb-12 md:mb-16 max-w-3xl leading-[1.2]">
            外来を続けながら、
            <br />
            <span className="text-arch-forest font-black">訪問を立ち上げた医院。</span>
          </h2>

          <div className="bg-arch-cream-raised py-10 md:py-14 px-6 md:px-12 border border-arch-rule">
            <div className="grid md:grid-cols-3 gap-6 md:gap-10">
              <div>
                <p className="mono-micro text-arch-ink-muted mb-2">課題</p>
                <p className="text-sm text-arch-ink leading-loose">{CASE_STUDY.problem}</p>
              </div>
              <div>
                <p className="mono-micro text-arch-ink-muted mb-2">支援内容</p>
                <p className="text-sm text-arch-ink leading-loose">{CASE_STUDY.action}</p>
              </div>
              <div>
                <p className="mono-micro text-arch-gold mb-2">結果</p>
                <p className="text-sm text-arch-forest font-bold leading-loose">{CASE_STUDY.result}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="bg-arch-cream-raised py-16 md:py-20 border-t border-arch-rule">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-baseline justify-between border-b border-arch-rule pb-4 mb-10 md:mb-12">
            <p className="mono-label text-arch-moss">RELATED — 関連ページ</p>
          </div>

          <ul className="grid sm:grid-cols-3 gap-0 border-t border-l border-arch-rule">
            {RELATED.map((r) => (
              <li key={r.href} className="border-b border-r border-arch-rule">
                <Link
                  href={r.href}
                  className="group block py-6 md:py-7 px-5 md:px-6 h-full hover:bg-arch-cream transition-colors"
                >
                  <p className="display-jp text-base md:text-lg text-arch-ink group-hover:text-arch-forest transition-colors mb-2">
                    {r.title}
                  </p>
                  <p className="text-xs md:text-sm text-arch-ink-soft leading-relaxed">{r.desc}</p>
                  <p className="mono-micro text-arch-moss mt-3 inline-flex items-center gap-1.5">
                    詳しく見る <ArrowRight size={11} />
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}
