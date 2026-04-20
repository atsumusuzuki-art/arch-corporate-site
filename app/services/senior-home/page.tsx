import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import CornerMarkers, { SectionTag } from "@/components/CornerMarkers";
import FacilityRecommender from "./FacilityRecommender";

export const metadata = {
  title: "ARCH 介護・暮らしの選択相談所（旧：老人ホーム紹介業） | 合同会社ARCH",
  description:
    "退院後の暮らしを、ご本人とご家族の目線で選ぶ場所。現役看護師パートナー・ADL評価・ワンストップ伴走で、「紹介して終わり」ではなく「どう暮らすか」を一緒に考えます。",
};

/* ================================================================
   ARCH 介護・暮らしの選択相談所 — editorial v2
   ================================================================ */

const PROBLEMS = [
  {
    title: "退院が迫っているのに、次の住まいが決まらない。",
    body:
      "病院から退院日を告げられたけれど、自宅に戻るのは難しい。でも老人ホームの選び方がわからない。時間だけが過ぎていく焦りを感じている。",
  },
  {
    title: "パンフレットだけでは、本当に合う施設かわからない。",
    body:
      "たくさんの施設を比較しても、写真や料金だけでは判断できない。医療対応や介護体制、雰囲気まで含めて、本当にこの人に合う場所を選びたい。",
  },
  {
    title: "持病がある。医療面で安心できる施設を探したい。",
    body:
      "透析や認知症、がん治療後のケアなど、医療的なサポートが必要。医療の知識がある人に相談しながら決めたい。",
  },
];

type Feature = {
  num: "01" | "02" | "03";
  kicker: string;
  title: string;
  highlight: string;
  body: string;
  bullets: string[];
  statNum: string;
  statLabel: string;
};

const FEATURES: Feature[] = [
  {
    num: "01",
    kicker: "STRENGTH — 医療の視点",
    title: "現役看護師がパートナー、",
    highlight: "医療の視点で選ぶ安心。",
    body:
      "ARCHには現役の看護師がパートナーとして在籍しています。ご病気の状態、必要な医療処置、日常生活動作（ADL）の程度を正確に把握した上で、医療体制が整った施設をご提案します。「この病気でも受け入れてもらえるの？」という不安に、専門知識でお答えします。",
    bullets: [
      "現在のご病気・治療状況を正確に把握",
      "必要な医療体制がある施設のみをご提案",
      "入居後の医療面のフォローアップも安心",
    ],
    statNum: "100%",
    statLabel: "医療視点での施設選定",
  },
  {
    num: "02",
    kicker: "STRENGTH — ADL評価",
    title: "お身体の状態（ADL）から、",
    highlight: "最適な施設をご提案。",
    body:
      "食事、入浴、移動、排泄など日常生活の自立度を丁寧にヒアリングし、その方に本当に必要なケアレベルの施設をご提案します。「今は自立しているけど将来が不安」「車椅子生活になった」など、現在と将来の両方を見据えた施設選びをサポートします。",
    bullets: [
      "日常生活動作（ADL）を丁寧にヒアリング",
      "現在の状態と将来の変化を見据えた提案",
      "過剰でも不足でもない、ちょうど良い施設を",
    ],
    statNum: "6",
    statLabel: "評価する ADL 項目",
  },
  {
    num: "03",
    kicker: "STRENGTH — ワンストップ",
    title: "退院から入居まで、",
    highlight: "ワンストップで伴走。",
    body:
      "病院の地域連携室やケアマネジャーとも連携し、退院日に間に合うスケジュールで施設見学から入居手続きまでサポートします。ご家族だけで抱え込む必要はありません。ARCHが退院後の暮らしの設計を一緒に行います。",
    bullets: [
      "病院の地域連携室と連携",
      "見学の手配から入居手続きまで一括サポート",
      "ご相談・ご紹介は完全無料",
    ],
    statNum: "¥0",
    statLabel: "ご相談・ご紹介料",
  },
];

const FACILITY_TYPES = [
  { title: "介護付き有料老人ホーム", desc: "24時間介護スタッフが常駐。手厚いケアが必要な方に。" },
  { title: "住宅型有料老人ホーム", desc: "自立度が高い方向け。外部の介護サービスを利用可能。" },
  { title: "サービス付き高齢者向け住宅", desc: "見守りと生活相談が付いた、自由度の高い暮らし。" },
  { title: "グループホーム", desc: "認知症の方が少人数で共同生活。家庭的な環境。" },
  { title: "介護老人保健施設", desc: "リハビリに重点を置いた施設。在宅復帰を目指す方に。" },
  { title: "特別養護老人ホーム", desc: "要介護3以上の方。費用を抑えたい方にも。" },
];

const FLOW = [
  { step: "01", title: "無料相談", desc: "お電話・メールでお気軽に。退院日やご希望をお聞きします。" },
  { step: "02", title: "状態のヒアリング", desc: "現在のご病気、ADL、ご予算、エリアのご希望を詳しく伺います。" },
  { step: "03", title: "施設のご提案・見学", desc: "条件に合う施設を厳選してご紹介。見学の手配もお任せください。" },
  { step: "04", title: "入居・アフターフォロー", desc: "入居手続きをサポート。入居後も気になることがあればいつでもご連絡を。" },
];

export default function SeniorHomePage() {
  return (
    <article className="bg-arch-cream">
      {/* ──────────────────────────────────────────
          HERO — editorial cover, deep forest
      ────────────────────────────────────────── */}
      <section className="relative bg-arch-forest text-arch-cream overflow-hidden pt-24 md:pt-32 pb-20 md:pb-28">
        <CornerMarkers
          topRight="LIFE CHOICE — 03 / 介護・暮らし"
          bottomLeft="SERVICE"
          bottomRight="03 / 05"
          theme="dark"
        />
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <SectionTag category="LIFE CHOICE" number="03" label="ARCH 介護・暮らしの選択相談所" theme="dark" />

          <div className="mt-8 md:mt-12 grid md:grid-cols-12 gap-8 md:gap-12 items-end">
            <div className="md:col-span-8">
              <h1 className="display-jp text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl text-arch-cream leading-[1.1]">
                退院後の暮らしを、
                <br />
                <span className="text-arch-gold">ご家族の目線</span>で。
              </h1>
              <p className="mono-micro text-arch-sage/70 mt-6">
                （旧：老人ホーム紹介業）
              </p>
            </div>
            <div className="md:col-span-4">
              <div className="border-l-2 border-arch-gold pl-5">
                <p className="mono-label text-arch-gold mb-3">CORE MESSAGE</p>
                <p className="text-base md:text-lg text-arch-sage leading-loose">
                  「紹介して終わり」ではなく、<br />「どう暮らすか」を一緒に考える。
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14 md:mt-20 grid md:grid-cols-12 gap-8 items-end border-t border-arch-rule-dark pt-8">
            <p className="md:col-span-8 text-sm md:text-base text-arch-sage/90 leading-loose max-w-2xl">
              病院からの退院が決まった方、ご高齢のご家族の住まいをお探しの方へ。現在のご病気やお身体の状態（ADL）から、最適な老人ホームをご提案します。パートナーに現役の看護師がいるから、医療的な視点でも安心してお任せいただけます。
            </p>
            <div className="md:col-span-4 flex md:justify-end">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-3 bg-arch-cream text-arch-forest px-7 py-4 text-sm font-bold tracking-[0.15em] hover:bg-arch-gold transition-colors"
              >
                まずは無料相談する
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          PROBLEM — こんなお悩みありませんか
      ────────────────────────────────────────── */}
      <section className="relative bg-arch-cream py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-baseline justify-between border-b border-arch-rule pb-4 mb-12 md:mb-16">
            <SectionTag category="PROBLEM" number="02" label="こんなお悩みありませんか" />
            <p className="mono-micro text-arch-ink-muted hidden sm:block">03 CASES</p>
          </div>

          <h2 className="display-jp text-3xl md:text-4xl text-arch-ink mb-12 md:mb-16 max-w-3xl leading-[1.2]">
            退院後の暮らしは、
            <br />
            <span className="text-arch-forest">時間との戦い。</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-0 border-t border-arch-rule">
            {PROBLEMS.map((item, i) => (
              <div
                key={i}
                className={`border-b border-arch-rule md:border-b-0 ${i < PROBLEMS.length - 1 ? "md:border-r" : ""} py-8 md:py-10 md:px-8 ${i === 0 ? "md:pl-0" : ""}`}
              >
                <p className="mono-label text-arch-moss mb-4 tabular-nums">
                  CASE — {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="display-jp text-lg md:text-xl text-arch-ink mb-4 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-arch-ink-soft leading-loose">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          Sample Matching — 施設レコメンダー
      ────────────────────────────────────────── */}
      <FacilityRecommender />

      {/* ──────────────────────────────────────────
          SOLUTION — 3つの強み
      ────────────────────────────────────────── */}
      <section className="bg-arch-cream-raised border-t border-arch-rule">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-20 md:pt-28 pb-16 md:pb-20">
          <div className="flex items-baseline justify-between border-b border-arch-rule pb-4 mb-12 md:mb-16">
            <SectionTag category="SOLUTION" number="04" label="ARCHの3つの強み" />
            <p className="mono-micro text-arch-ink-muted hidden sm:block">03 STRENGTHS</p>
          </div>

          <h2 className="display-jp text-3xl md:text-4xl text-arch-ink mb-6 max-w-3xl leading-[1.2]">
            料金比較だけの紹介では、
            <br />
            <span className="text-arch-forest">ありません。</span>
          </h2>
          <p className="text-base text-arch-ink-soft leading-loose max-w-2xl">
            お身体の状態を深く理解した上で、本当に合う施設だけをご提案します。
          </p>
        </div>

        {FEATURES.map((f, idx) => (
          <div
            key={f.num}
            className={`${idx % 2 === 0 ? "bg-arch-cream" : "bg-arch-cream-raised"} border-t border-arch-rule py-16 md:py-24`}
          >
            <div className="max-w-6xl mx-auto px-5 sm:px-8">
              <div className="grid md:grid-cols-12 gap-8 md:gap-14 items-start">
                {/* Left — copy */}
                <div className={`md:col-span-7 ${idx === 1 ? "md:order-2" : ""}`}>
                  <p className="mono-label text-arch-moss mb-4">{f.kicker}</p>
                  <div className="flex items-baseline gap-4 mb-6">
                    <span className="display-jp text-6xl md:text-7xl text-arch-forest/30 tabular-nums leading-none">
                      {f.num}
                    </span>
                    <div className="h-px flex-1 bg-arch-rule mt-auto mb-3"></div>
                  </div>
                  <h3 className="display-jp text-2xl md:text-3xl text-arch-ink leading-snug mb-6">
                    {f.title}
                    <br />
                    <span className="text-arch-forest">{f.highlight}</span>
                  </h3>
                  <p className="text-sm md:text-base text-arch-ink-soft leading-loose mb-8">
                    {f.body}
                  </p>
                  <ul className="space-y-3 border-t border-arch-rule pt-6">
                    {f.bullets.map((t) => (
                      <li key={t} className="flex items-start gap-3">
                        <Check size={16} className="text-arch-moss mt-1 shrink-0" />
                        <span className="text-sm text-arch-ink font-medium">{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right — stat */}
                <div className={`md:col-span-5 ${idx === 1 ? "md:order-1" : ""}`}>
                  <div className="border border-arch-rule-dark/20 p-8 md:p-10 bg-arch-cream-raised">
                    <p className="mono-micro text-arch-moss mb-4">METRIC / 指標</p>
                    <p className="display-jp text-6xl md:text-7xl text-arch-forest leading-none tabular-nums">
                      {f.statNum}
                    </p>
                    <p className="mono-label text-arch-ink-muted mt-4">{f.statLabel}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ──────────────────────────────────────────
          FACILITY TYPES — ご紹介可能な施設タイプ
      ────────────────────────────────────────── */}
      <section className="bg-arch-cream-raised py-20 md:py-28 border-t border-arch-rule">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-baseline justify-between border-b border-arch-rule pb-4 mb-12 md:mb-16">
            <SectionTag category="FACILITIES" number="05" label="ご紹介可能な施設" />
            <p className="mono-micro text-arch-ink-muted hidden sm:block">06 TYPES</p>
          </div>

          <h2 className="display-jp text-3xl md:text-4xl text-arch-ink mb-12 md:mb-16 max-w-3xl leading-[1.2]">
            6つの施設タイプから、
            <br />
            <span className="text-arch-forest">最適な暮らしを。</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-arch-rule">
            {FACILITY_TYPES.map((item, i) => (
              <div
                key={i}
                className="border-b border-r border-arch-rule py-8 md:py-10 px-6 md:px-8"
              >
                <p className="mono-label text-arch-moss mb-4 tabular-nums">
                  TYPE — {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="display-jp text-base md:text-lg text-arch-ink mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-arch-ink-soft leading-loose">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          FLOW — ご利用の流れ
      ────────────────────────────────────────── */}
      <section className="bg-arch-cream py-20 md:py-28 border-t border-arch-rule">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-baseline justify-between border-b border-arch-rule pb-4 mb-12 md:mb-16">
            <SectionTag category="FLOW" number="06" label="ご利用の流れ" />
            <p className="mono-micro text-arch-ink-muted hidden sm:block">04 STEPS</p>
          </div>

          <h2 className="display-jp text-3xl md:text-4xl text-arch-ink mb-12 md:mb-16 max-w-3xl leading-[1.2]">
            <span className="text-arch-forest">4つのステップ</span>で、
            <br />
            退院後の暮らしまで伴走します。
          </h2>

          <div className="grid md:grid-cols-4 gap-0 border-t border-arch-rule">
            {FLOW.map((item, i) => (
              <div
                key={item.step}
                className={`border-b border-arch-rule md:border-b-0 ${i < FLOW.length - 1 ? "md:border-r" : ""} py-8 md:py-10 md:px-8 ${i === 0 ? "md:pl-0" : ""}`}
              >
                <p className="mono-label text-arch-moss mb-4">STEP</p>
                <p className="display-jp text-5xl md:text-6xl text-arch-forest/40 tabular-nums leading-none mb-6">
                  {item.step}
                </p>
                <h3 className="display-jp text-lg md:text-xl text-arch-ink mb-3 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-arch-ink-soft leading-loose">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
