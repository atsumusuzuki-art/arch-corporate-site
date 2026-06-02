import { ArrowRight } from "lucide-react";
import Link from "next/link";
import CornerMarkers, { SectionTag } from "@/components/CornerMarkers";

export const metadata = {
  title: "歯科医院 分院立ち上げ支援｜物件・機器・採用・HPまで横断的に｜ARCH",
  description:
    "分院展開を考える院長へ。ディーラー調整、機器選定、レセコン、HP、看板、求人、分院長採用まで横断的に整理し、院長が本院診療に集中できる体制で分院開設を進めます。",
};

/* ================================================================
   分院立ち上げ支援
   ================================================================ */

const PROBLEMS = [
  { title: "分院長採用が進まない", body: "求人媒体に出してもなかなか応募が来ない。来ても採用基準と合わない。" },
  { title: "内装・機器・ディーラー調整が大変", body: "内装業者・歯科ディーラー・設備会社など、複数業者を院長一人で取り回せない。" },
  { title: "レセコン・ネットワーク設定が不安", body: "レセコン業者の選定、院内LAN、診療予約システム、電子カルテの連携が分からない。" },
  { title: "HP・看板・求人など準備が多い", body: "開業日までに必要な準備が多すぎて、何が漏れているか分からない。" },
  { title: "本院を見ながら準備する余裕がない", body: "本院の診療を続けながらでは、分院準備に割ける時間が物理的に足りない。" },
];

const ACTIONS = [
  "開業準備のタスク整理（期日・担当・抜け漏れ確認）",
  "歯科ディーラー・レセコン業者・Web制作・看板業者との調整",
  "求人原稿の作成と採用導線の整備（媒体選定・応募者管理）",
  "HP・LP・院内資料・パンフレットの素案作成",
  "分院長採用・スタッフ定着に関する相談",
  "訪問歯科導入も含めた分院運営設計",
  "本院の運営を止めない並走スケジュールの設計",
];

const CASE_STUDY = {
  problem:
    "本院の診療を続けながら、分院開設準備を進める必要があった医院。ディーラー調整、機器選定、HP制作、看板業者、求人と並行する業務が多く、院長が一人で抱え込みかけていた。",
  action:
    "開業日から逆算してタスクと業者対応を一覧化。歯科ディーラー・レセコン業者・HP制作・看板業者・求人媒体との打合せに同席し、決裁が必要なポイントだけを院長に集約。求人原稿・採用導線、HP素案、院内案内も並走で整理。",
  result:
    "院長は本院診療と最終決裁に集中する形で分院開設を進行。各業者との細かい調整は ARCH 側で巻き取り、現場運営開始前の混乱を最小限に抑えられた。",
};

const RELATED = [
  {
    href: "/services/external-manager",
    title: "歯科医院の外部事務長とは",
    desc: "ARCHの考える外部事務長の役割",
  },
  {
    href: "/services/visit-dental-startup",
    title: "訪問歯科立ち上げ支援",
    desc: "分院に訪問歯科部門を導入する場合の参考に",
  },
  {
    href: "/bpo-service",
    title: "事務代行・BPO支援",
    desc: "HP制作・パンフレット作成などの実作業もスポットで依頼可能",
  },
];

export default function BranchStartupPage() {
  return (
    <article className="bg-arch-cream">
      {/* HERO */}
      <section className="relative bg-arch-forest text-arch-cream overflow-hidden pt-24 md:pt-32 pb-20 md:pb-28">
        <CornerMarkers
          topRight="BRANCH STARTUP — 分院立ち上げ"
          bottomLeft="SUPPORT"
          bottomRight="分院立ち上げ支援"
          theme="dark"
        />
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <SectionTag category="BRANCH" number="—" label="分院立ち上げ支援" theme="dark" />

          <div className="mt-8 md:mt-12 grid md:grid-cols-12 gap-8 md:gap-12 items-end">
            <div className="md:col-span-8">
              <h1 className="display-jp text-[1.875rem] sm:text-3xl md:text-[2.75rem] lg:text-[3.25rem] text-arch-cream leading-[1.2] tracking-tight">
                分院を出したい。
                <br />
                でも、<span className="text-arch-gold font-black">院長ひとりでは手が回らない</span>先生へ。
              </h1>
            </div>
            <div className="md:col-span-4">
              <div className="border-l-2 border-arch-gold pl-5">
                <p className="mono-label text-arch-gold mb-3">CORE MESSAGE</p>
                <p className="text-base md:text-lg text-arch-sage leading-loose">
                  院長は本院診療と決裁に集中。
                  <br />
                  細かい調整は外側で巻き取る。
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14 md:mt-20 grid md:grid-cols-12 gap-8 items-end border-t border-arch-rule-dark pt-8">
            <p className="md:col-span-8 text-sm md:text-base text-arch-sage/90 leading-loose max-w-2xl">
              機器導入、ディーラー対応、レセコン業者、HP、看板、求人、分院長採用。分院展開には多種多様な業者と判断が絡みます。ARCH は外部事務長として、タスク整理から業者対応まで横断的に巻き取り、院長が本院診療と重要な決裁に集中できる体制で分院開設を進めます。
            </p>
            <div className="md:col-span-4 flex md:justify-end">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-3 bg-arch-cream text-arch-forest px-7 py-4 text-sm font-bold tracking-[0.15em] hover:bg-arch-gold transition-colors"
              >
                分院立ち上げを相談する
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
            <p className="mono-micro text-arch-ink-muted hidden sm:block">05 CONCERNS</p>
          </div>

          <h2 className="display-jp text-3xl md:text-4xl text-arch-ink mb-12 md:mb-16 max-w-3xl leading-[1.2]">
            分院準備は、
            <br />
            <span className="text-arch-forest font-black">院長一人では回らない。</span>
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
            業者対応・採用・HP まで、
            <br />
            <span className="text-arch-forest font-black">分院準備を横断的に。</span>
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
            本院を止めず、
            <br />
            <span className="text-arch-forest font-black">分院開設を進めた医院。</span>
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
