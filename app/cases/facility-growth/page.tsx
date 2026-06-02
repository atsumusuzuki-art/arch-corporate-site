import { ArrowRight } from "lucide-react";
import Link from "next/link";
import CornerMarkers, { SectionTag } from "@/components/CornerMarkers";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "施設には入れているのに利用者が増えない｜CASE 02",
  description:
    "施設契約はあるのに訪問歯科の利用者が伸び悩む医院に、無料検診導線・家族説明導線・多職種連携の整理で継続利用につなげた支援事例。",
};

const PROBLEMS = [
  { label: "施設契約はあるが利用者が伸びない", body: "複数の施設に入っていたが、利用者が各施設 2〜3 名で頭打ちになっていた。" },
  { label: "施設職員に歯科の必要性が伝わっていない", body: "「歯科は必要な時に呼ぶ」という認識のままで、定期管理の価値が共有されていなかった。" },
  { label: "無料検診からの流れがない", body: "検診を実施しても、その後の継続管理に繋がる仕組みが医院側になかった。" },
];

const ACTIONS = [
  "施設ごとの「無料口腔チェック → 結果共有 → 家族説明 → 同意 → 定期管理」導線設計",
  "家族向け案内資料・同意書テンプレートの整備",
  "月次の施設職員ミーティングへ同席し、情報共有の流れを定着",
  "ST・看護師・ケアマネとの連携窓口の設計",
  "利用者数・稼働率・同一建物率の KPI 整理",
];

const RESULT = `施設職員と医院側で共通の口腔管理フローができ、急患対応中心から定期管理中心の関わり方に移行。継続管理につながる仕組みを医院内に残せた。「施設からの相談頻度が変わった」と現場スタッフより。`;

export default function CaseFacilityGrowthPage() {
  return (
    <article className="bg-arch-cream">
      <Breadcrumb
        items={[
          { label: "HOME", href: "/" },
          { label: "事例", href: "/" },
          { label: "施設連携・利用者増加" },
        ]}
      />

      <section className="relative bg-arch-forest text-arch-cream overflow-hidden pt-20 md:pt-28 pb-16 md:pb-24">
        <CornerMarkers topRight="CASE 02 — 施設連携" bottomLeft="CASE" bottomRight="02" theme="dark" />
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <SectionTag category="CASE 02" number="—" label="施設連携・利用者増加" theme="dark" />

          <h1 className="display-jp text-[1.75rem] sm:text-3xl md:text-[2.5rem] lg:text-[3rem] text-arch-cream leading-[1.2] tracking-tight mt-6 mb-8">
            施設には入れているのに、
            <br className="hidden sm:block" />
            <span className="text-arch-gold font-black">利用者が増えない</span>。
          </h1>

          <p className="text-base md:text-lg text-arch-sage/90 leading-loose max-w-2xl">
            営業力ではなく「施設内で歯科に繋がる導線」がないことが原因。無料検診から継続管理への流れを医院側に作った支援事例です。
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
            ※ 実在医院名は伏せた匿名事例です。ARCH は患者紹介・斡旋業務は一切行いません。すべての医院で同様の結果を保証するものではありません。
          </p>
        </div>
      </section>

      <section className="bg-arch-cream-raised py-16 md:py-20 border-t border-arch-rule">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <p className="mono-label text-arch-moss mb-6">こんな支援も提供しています</p>
          <ul className="grid sm:grid-cols-2 gap-0 border-t border-l border-arch-rule">
            {[
              { href: "/services/facility-growth", title: "施設連携・利用者増加支援", desc: "本事例の詳しい支援内容" },
              { href: "/services/visit-dental-startup", title: "訪問歯科立ち上げ支援", desc: "これから始める医院向け" },
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
