import { ArrowRight } from "lucide-react";
import Link from "next/link";
import CornerMarkers, { SectionTag } from "@/components/CornerMarkers";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "訪問歯科未経験からスタート。無理なく始められる体制づくりを支援｜CASE",
  description:
    "訪問歯科未経験・施設との接点なし・運用未整備の状態から、施設連携・運用設計・準備物整理・スタッフ体制整理まで伴走した支援事例。",
};

const PROBLEMS = [
  { label: "訪問歯科未経験", body: "院長・スタッフともに訪問診療の経験がなく、何から手をつければよいか分からない状態だった。" },
  { label: "施設との接点なし", body: "地域の高齢者施設・介護施設との関係がゼロからのスタート。" },
  { label: "必要書類・運用方法も未整備", body: "訪問同意書、施設提出資料、家族向け説明、訪問スケジュール、算定の流れなどが手探りだった。" },
];

const ACTIONS = [
  "立ち上げ計画の作成（タスク・期日・担当の整理）",
  "地域の高齢者施設・介護施設の状況整理と初回アプローチ設計",
  "訪問同意書・施設提出資料・家族向け説明テンプレートの整備",
  "歯科医師・歯科衛生士・運転担当・事務の役割分担の設計",
  "訪問ルート・初診オペレーションの設計",
  "在歯管・SPT・口腔機能管理など訪問特有算定の整理",
  "歯科ディーラー・レセコン業者との調整",
];

const RESULT = `院長とスタッフが無理なく始められる体制で訪問診療を開始。立ち上げ後も月1回の振り返りで、現場の詰まりを早期に整理できる運用に。「最初に体制が整っていたので、走りながら直す負担が少なかった」と院長より。`;

export default function CaseVisitStartupPage() {
  return (
    <article className="bg-arch-cream">
      <Breadcrumb
        items={[
          { label: "HOME", href: "/" },
          { label: "事例", href: "/" },
          { label: "訪問歯科立ち上げ" },
        ]}
      />

      {/* HERO */}
      <section className="relative bg-arch-forest text-arch-cream overflow-hidden pt-20 md:pt-28 pb-16 md:pb-24">
        <CornerMarkers
          topRight="CASE 01 — 訪問歯科立ち上げ"
          bottomLeft="CASE"
          bottomRight="01"
          theme="dark"
        />
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <SectionTag category="CASE 01" number="—" label="訪問歯科立ち上げ" theme="dark" />

          <h1 className="display-jp text-[1.75rem] sm:text-3xl md:text-[2.5rem] lg:text-[3rem] text-arch-cream leading-[1.2] tracking-tight mt-6 mb-8">
            訪問歯科<span className="text-arch-gold font-black">未経験</span>からスタート。
            <br className="hidden sm:block" />
            無理なく始められる体制づくりを支援。
          </h1>

          <p className="text-base md:text-lg text-arch-sage/90 leading-loose max-w-2xl">
            外来診療は安定していたものの、訪問歯科の経験がなく、施設との接点も準備のロードマップもない状態。
            立ち上げ計画から運用開始、その後のフォローまでを 4 ヶ月で並走した支援事例です。
          </p>
        </div>
      </section>

      {/* 課題 */}
      <section className="bg-arch-cream py-20 md:py-28">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="flex items-baseline justify-between border-b border-arch-rule pb-4 mb-12 md:mb-16">
            <SectionTag category="PROBLEM" number="01" label="医院の状況" />
          </div>
          <ul className="space-y-px bg-arch-rule">
            {PROBLEMS.map((p, i) => (
              <li key={p.label} className="bg-arch-cream-raised py-6 md:py-7 px-5 md:px-8">
                <p className="mono-label text-arch-moss mb-2 tabular-nums">
                  状況 — {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="display-jp text-base md:text-lg text-arch-ink mb-2 leading-snug">
                  {p.label}
                </h3>
                <p className="text-sm text-arch-ink-soft leading-loose">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 支援内容 */}
      <section className="bg-arch-cream-raised py-20 md:py-28 border-t border-arch-rule">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="flex items-baseline justify-between border-b border-arch-rule pb-4 mb-12 md:mb-16">
            <SectionTag category="SUPPORT" number="02" label="ARCHが行った支援" />
            <p className="mono-micro text-arch-ink-muted hidden sm:block">
              {String(ACTIONS.length).padStart(2, "0")} TASKS
            </p>
          </div>

          <ul className="grid sm:grid-cols-2 gap-0 border-t border-l border-arch-rule">
            {ACTIONS.map((a, i) => (
              <li
                key={a}
                className="border-b border-r border-arch-rule py-5 md:py-6 px-4 md:px-6 flex items-baseline gap-3"
              >
                <span className="mono-micro text-arch-moss tabular-nums shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm md:text-base text-arch-ink leading-snug font-medium">{a}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 結果 */}
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

      {/* 関連サービス */}
      <section className="bg-arch-cream-raised py-16 md:py-20 border-t border-arch-rule">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <p className="mono-label text-arch-moss mb-6">こんな支援も提供しています</p>
          <ul className="grid sm:grid-cols-2 gap-0 border-t border-l border-arch-rule">
            {[
              { href: "/services/visit-dental-startup", title: "訪問歯科立ち上げ支援", desc: "本事例の詳しい支援内容" },
              { href: "/services/external-manager", title: "歯科医院の外部事務長とは", desc: "ARCHの考える役割" },
            ].map((r) => (
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
