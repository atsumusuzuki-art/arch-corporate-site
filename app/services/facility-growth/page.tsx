import { ArrowRight } from "lucide-react";
import Link from "next/link";
import CornerMarkers, { SectionTag } from "@/components/CornerMarkers";
import Breadcrumb from "@/components/Breadcrumb";
import FaqSection from "@/components/FaqSection";

const FAQS = [
  {
    q: "施設はあるのに患者が増えません。何が原因でしょうか？",
    a: "施設職員に歯科介入の必要性が伝わっていない、無料検診から定期診療への流れがない、家族説明の導線がない、多職種連携が弱い、急患対応だけになっている、というケースが大半です。営業力ではなく、医院側に「歯科に繋がる導線」が無いことが原因のことが多いです。",
  },
  {
    q: "ST・看護師・ケアマネとの連携方法が分かりません",
    a: "施設ごとに「誰が・いつ・どう繋ぐか」の窓口を設計するところから始めます。月次の施設職員ミーティングに同席し、口腔状態・摂食嚥下・服薬管理の情報共有フローを医院側に作ります。",
  },
  {
    q: "無料検診の導線作りも相談できますか？",
    a: "はい。無料口腔チェック → 結果共有 → 家族説明 → 同意 → 定期管理という流れを、医院の状況に合わせて設計します。家族向け案内資料・同意書テンプレートの整備も含めて支援可能です。",
  },
  {
    q: "対応エリアはありますか？",
    a: "オンライン中心の支援であれば全国対応可能です。訪問同行や施設職員ミーティングへの同席など、現場対応が必要な場合は、別途交通費を申し受けることがあります。",
  },
];

export const metadata = {
  title: "施設連携・利用者増加支援｜施設はあるのに患者が増えない医院へ｜ARCH",
  description:
    "施設契約はあるのに訪問歯科の利用者が増えない医院へ。営業ではなく、施設内導線・多職種連携・無料検診から定期管理への流れを設計する支援です。",
};

/* ================================================================
   施設連携・利用者増加支援
   ================================================================ */

const REASONS = [
  { title: "施設職員に歯科介入の必要性が伝わっていない", body: "「歯科は必要な時に呼ぶ」という認識のままで、定期的な口腔管理の価値が共有されていない。" },
  { title: "無料検診から診療への流れがない", body: "検診をやっても、その後の継続管理に繋がる仕組みが医院側にない。" },
  { title: "家族説明の導線がない", body: "家族同意・費用説明・治療方針の説明資料が整っておらず、申込みに至りにくい。" },
  { title: "ST・看護師・ケアマネとの連携が弱い", body: "口腔状態・摂食嚥下・服薬管理など、多職種が共有すべき情報の窓口が決まっていない。" },
  { title: "急患対応だけになっている", body: "痛い・抜けたという時だけ呼ばれ、定期的な訪問の流れになっていない。" },
  { title: "定期管理につながっていない", body: "初回訪問はしたものの、SPT や口腔機能管理に繋がらず、単発で終わっている。" },
];

const ACTIONS = [
  "施設内導線（誰が・いつ・どう繋ぐか）の設計",
  "無料検診から定期診療へのフロー構築",
  "家族向け案内資料・同意書テンプレートの作成",
  "ST・看護師・ケアマネとの連携窓口の設計",
  "施設定例フォロー（月次・四半期）の運用設計",
  "利用者数・稼働率・同一建物率などのKPI整理",
];

const CASE_STUDY = {
  problem:
    "複数の施設と契約はあるものの、利用者が各施設 2〜3 名で頭打ちになっていた医院。施設職員が「歯科が必要な時に呼ぶ」という認識のままで、定期管理の流れが作れていなかった。",
  action:
    "施設ごとに「無料口腔チェック → 結果共有 → 家族説明 → 同意 → 定期管理」の導線を整理。家族向け案内資料と同意書テンプレートを整備し、月次の施設職員ミーティングに同席して情報共有の流れを定着。",
  result:
    "施設職員と医院側で共通の口腔管理フローができ、急患対応中心から定期管理中心の関わり方に移行。継続管理につながる仕組みを医院内に残せた。",
};

const RELATED = [
  {
    href: "/services/visit-dental-startup",
    title: "訪問歯科立ち上げ支援",
    desc: "これから訪問診療を始める医院向け",
  },
  {
    href: "/services/external-manager",
    title: "歯科医院の外部事務長とは",
    desc: "ARCHの考える外部事務長の役割",
  },
  {
    href: "/services/fee-standards",
    title: "算定・施設基準支援",
    desc: "訪問特有の算定・届出・改定対応",
  },
];

export default function FacilityGrowthPage() {
  return (
    <article className="bg-arch-cream">
      <Breadcrumb
        items={[
          { label: "HOME", href: "/" },
          { label: "サービス", href: "/services/consulting" },
          { label: "施設連携・利用者増加支援" },
        ]}
      />
      {/* HERO */}
      <section className="relative bg-arch-forest text-arch-cream overflow-hidden pt-24 md:pt-32 pb-20 md:pb-28">
        <CornerMarkers
          topRight="FACILITY GROWTH — 施設連携"
          bottomLeft="SUPPORT"
          bottomRight="施設連携・利用者増加支援"
          theme="dark"
        />
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <SectionTag category="GROWTH" number="—" label="施設連携・利用者増加支援" theme="dark" />

          <div className="mt-8 md:mt-12 grid md:grid-cols-12 gap-8 md:gap-12 items-end">
            <div className="md:col-span-8">
              <h1 className="display-jp text-[1.875rem] sm:text-3xl md:text-[2.75rem] lg:text-[3.25rem] text-arch-cream leading-[1.2] tracking-tight">
                施設はある。
                <br />
                でも、訪問歯科の<span className="text-arch-gold font-black">利用者が増えない</span>先生へ。
              </h1>
            </div>
            <div className="md:col-span-4">
              <div className="border-l-2 border-arch-gold pl-5">
                <p className="mono-label text-arch-gold mb-3">CORE MESSAGE</p>
                <p className="text-base md:text-lg text-arch-sage leading-loose">
                  営業ではなく、
                  <br />
                  施設内の導線と多職種連携を整える。
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14 md:mt-20 grid md:grid-cols-12 gap-8 items-end border-t border-arch-rule-dark pt-8">
            <p className="md:col-span-8 text-sm md:text-base text-arch-sage/90 leading-loose max-w-2xl">
              施設との契約があっても、施設内で「歯科に繋ぐ流れ」が無ければ利用者は増えません。営業活動ではなく、施設職員・ケアマネ・家族との情報共有と、無料検診から定期管理への導線を医院側に作ることが鍵です。
            </p>
            <div className="md:col-span-4 flex md:justify-end">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-3 bg-arch-cream text-arch-forest px-7 py-4 text-sm font-bold tracking-[0.15em] hover:bg-arch-gold transition-colors"
              >
                無料相談する（30分・オンライン可）
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* REASONS */}
      <section className="bg-arch-cream py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-baseline justify-between border-b border-arch-rule pb-4 mb-12 md:mb-16">
            <SectionTag category="REASON" number="02" label="利用者が増えない理由" />
            <p className="mono-micro text-arch-ink-muted hidden sm:block">06 CAUSES</p>
          </div>

          <h2 className="display-jp text-3xl md:text-4xl text-arch-ink mb-12 md:mb-16 max-w-3xl leading-[1.2]">
            営業力ではなく、
            <br />
            <span className="text-arch-forest font-black">施設内の導線が原因です。</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-arch-rule">
            {REASONS.map((r, i) => (
              <div key={r.title} className="border-b border-r border-arch-rule py-7 md:py-9 px-5 md:px-6">
                <p className="mono-label text-arch-moss mb-3 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="display-jp text-base md:text-lg text-arch-ink mb-3 leading-snug">
                  {r.title}
                </h3>
                <p className="text-sm text-arch-ink-soft leading-loose">{r.body}</p>
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
              {String(ACTIONS.length).padStart(2, "0")} ACTIONS
            </p>
          </div>

          <h2 className="display-jp text-3xl md:text-4xl text-arch-ink mb-12 md:mb-16 max-w-3xl leading-[1.2]">
            施設内に、
            <br />
            <span className="text-arch-forest font-black">歯科に繋がる導線を作る。</span>
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
            急患中心から、
            <br />
            <span className="text-arch-forest font-black">定期管理中心の関わりへ。</span>
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

          <p className="mono-micro text-arch-ink-muted mt-6 leading-loose max-w-3xl">
            ※ ARCH は患者紹介・斡旋業務は一切行いません。医院側の体制づくりを支援する立場です。
          </p>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection number="05" items={FAQS} />

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
