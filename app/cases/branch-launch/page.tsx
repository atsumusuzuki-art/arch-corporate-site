import { ArrowRight } from "lucide-react";
import Link from "next/link";
import CornerMarkers, { SectionTag } from "@/components/CornerMarkers";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "本院診療を止めずに分院開設準備を進める｜CASE 03",
  description:
    "本院診療を続けながらの分院開設準備。物件・機器・ディーラー・レセコン・採用・HP・看板を ARCH が並走で整理し、院長が本院診療と決裁に集中できる体制を構築した支援事例。",
};

const PROBLEMS = [
  { label: "本院診療を続けながらの分院準備", body: "外来診療と訪問診療を回しながら、分院開業の準備を進める必要があった。" },
  { label: "業者対応が多く、院長の判断負担が大きい", body: "歯科ディーラー、レセコン業者、内装、Web制作、看板、求人媒体など、複数業者を院長一人で取り回せない状況だった。" },
  { label: "分院長採用と運営設計が並行", body: "分院長候補との面談・条件調整、分院の運営フロー設計、本院との関係性の整理を同時進行する必要があった。" },
];

const ACTIONS = [
  "開業日から逆算したタスク・業者対応の一覧化",
  "歯科ディーラー・レセコン業者・Web制作・看板業者との打合せ同席",
  "決裁が必要なポイントだけを院長に集約する運用フロー",
  "求人原稿の作成、応募者管理、採用導線の整備",
  "HP・LP・院内案内・パンフレットの素案作成",
  "分院長候補との条件整理、本院と分院の業務分担設計",
];

const RESULT = `院長は本院診療と最終決裁に集中する形で分院開設を進行。各業者との細かい調整は ARCH 側で巻き取り、現場運営開始前の混乱を最小限に抑えられた。「準備の見落としを心配する時間が減った」と院長より。`;

export default function CaseBranchLaunchPage() {
  return (
    <article className="bg-arch-cream">
      <Breadcrumb
        items={[
          { label: "HOME", href: "/" },
          { label: "事例", href: "/" },
          { label: "分院立ち上げ" },
        ]}
      />

      <section className="relative bg-arch-forest text-arch-cream overflow-hidden pt-20 md:pt-28 pb-16 md:pb-24">
        <CornerMarkers topRight="CASE 03 — 分院立ち上げ" bottomLeft="CASE" bottomRight="03" theme="dark" />
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <SectionTag category="CASE 03" number="—" label="分院立ち上げ" theme="dark" />

          <h1 className="display-jp text-[1.75rem] sm:text-3xl md:text-[2.5rem] lg:text-[3rem] text-arch-cream leading-[1.2] tracking-tight mt-6 mb-8">
            <span className="text-arch-gold font-black">本院診療を止めずに</span>
            <br className="hidden sm:block" />
            分院開設準備を進める。
          </h1>

          <p className="text-base md:text-lg text-arch-sage/90 leading-loose max-w-2xl">
            ディーラー調整・機器選定・採用・HP・看板まで、業者対応と並走業務が多すぎる分院開業準備。院長は本院診療と決裁に集中できる体制で開業を進めた事例です。
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
            ※ 実在医院名は伏せた匿名事例です。すべての医院で同様の結果を保証するものではありません。
          </p>
        </div>
      </section>

      <section className="bg-arch-cream-raised py-16 md:py-20 border-t border-arch-rule">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <p className="mono-label text-arch-moss mb-6">こんな支援も提供しています</p>
          <ul className="grid sm:grid-cols-2 gap-0 border-t border-l border-arch-rule">
            {[
              { href: "/services/branch-startup", title: "分院立ち上げ支援", desc: "本事例の詳しい支援内容" },
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
