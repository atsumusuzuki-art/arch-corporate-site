import { ArrowRight } from "lucide-react";
import Link from "next/link";
import CornerMarkers, { SectionTag } from "@/components/CornerMarkers";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "数字だけでなく現場運営から見直す｜CASE 05",
  description:
    "稼働率・施設導線・スケジュール・算定など、数字の改善だけでなく現場運営から見直し、継続的に運営できる体制づくりを支援した訪問歯科の事例。",
};

const PROBLEMS = [
  { label: "稼働率が安定しない", body: "週によって訪問件数のばらつきが大きく、スタッフの稼働も読みにくい状況だった。" },
  { label: "施設導線が個別最適", body: "施設ごとの対応がスタッフの暗黙知に依存しており、誰が抜けても回る状態ではなかった。" },
  { label: "算定構成が見えていない", body: "売上は把握していたが、診療単価・往診件数・算定構成までは整理されていなかった。" },
];

const ACTIONS = [
  "施設別・週別の稼働率・訪問件数の可視化",
  "施設対応導線の標準化（誰が・いつ・何をするか）",
  "訪問スケジュールの設計と運用ルールづくり",
  "在歯管・SPT・口腔機能管理など算定構成の整理",
  "月次レポート（売上 / 単価 / 件数 / 算定構成）の運用",
];

const RESULT = `数字だけを追わず、現場運営の手触りを見直したことで、稼働の波が減り、スタッフが代わっても同じ品質で訪問が回る体制に。継続的に運営できる手応えが現場側にも残った事例。`;

export default function CaseProfitabilityPage() {
  return (
    <article className="bg-arch-cream">
      <Breadcrumb
        items={[
          { label: "HOME", href: "/" },
          { label: "事例", href: "/" },
          { label: "訪問歯科黒字化" },
        ]}
      />

      <section className="relative bg-arch-forest text-arch-cream overflow-hidden pt-20 md:pt-28 pb-16 md:pb-24">
        <CornerMarkers topRight="CASE 05 — 黒字化" bottomLeft="CASE" bottomRight="05" theme="dark" />
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <SectionTag category="CASE 05" number="—" label="訪問歯科黒字化" theme="dark" />

          <h1 className="display-jp text-[1.75rem] sm:text-3xl md:text-[2.5rem] lg:text-[3rem] text-arch-cream leading-[1.2] tracking-tight mt-6 mb-8">
            数字だけでなく、
            <br className="hidden sm:block" />
            <span className="text-arch-gold font-black">現場運営から見直す</span>。
          </h1>

          <p className="text-base md:text-lg text-arch-sage/90 leading-loose max-w-2xl">
            稼働率・施設導線・スケジュール・算定の整理を通じて、継続的に運営できる体制づくりを支援した訪問歯科の事例です。
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
              { href: "/services/consulting", title: "歯科医院運営支援（料金プラン）", desc: "顧問〜外部事務長まで 3 プラン" },
              { href: "/services/facility-growth", title: "施設連携・利用者増加支援", desc: "施設導線の作り直し" },
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
