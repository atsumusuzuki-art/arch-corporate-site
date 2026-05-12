import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import CornerMarkers, { SectionTag } from "@/components/CornerMarkers";
import ServiceInquiryForm from "@/components/ServiceInquiryForm";

export const metadata = {
  title: "歯科医院運営支援｜運営改善・レセプト精度・月次分析",
  description:
    "訪問歯科は、始めるよりも回し続ける方が難しい。算定、レセプト、施設対応、スタッフ導線、月次分析まで、外部事務長として現場実務に入り込んで支援します。",
};

/* ================================================================
   歯科医院運営支援
   外部事務長として、訪問歯科の運営を実務から支える。
   レセプト・算定改善支援は本ページの 02 機能として内包。
   ================================================================ */

const PROBLEMS = [
  {
    title: "算定とレセプトが、属人化している。",
    body:
      "算定漏れ・返戻が起きても、誰がどう直すか毎回ゼロから探っている。月次の数字が固まる頃には来月の運転資金。",
  },
  {
    title: "施設対応とスタッフ導線が、散らかっている。",
    body:
      "施設からの問い合わせに誰が答えるか決まっていない。初診対応の手順もスタッフごとに違う。現場が日々ヒヤヒヤしている。",
  },
  {
    title: "月次の数字が、経営判断に使えていない。",
    body:
      "売上は把握しているが、診療単価・往診件数・算定構成までは見えていない。次の打ち手が勘になっている。",
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
  cards: { title: string; desc: string }[];
};

const FEATURES: Feature[] = [
  {
    num: "01",
    kicker: "STRENGTH — 運営改善・導線整理",
    title: "現場の運営を、",
    highlight: "実務から組み直す。",
    body:
      "施設対応、初診オペレーション、訪問ルート、スタッフ導線。属人化していた業務を外部事務長の目で構造化し、誰が抜けても回る運営に整えます。月次分析と現場改善を、毎月セットで回します。",
    bullets: [
      "施設対応・初診導線の標準化",
      "訪問ルート・スタッフ配置の設計",
      "月次分析（売上 / 単価 / 件数 / 算定構成）",
    ],
    statNum: "-65%",
    statLabel: "現場ヒヤリ件数の削減",
    cards: [
      {
        title: "施設対応の窓口設計",
        desc:
          "「施設から電話が来た時、誰が、何分以内に、何を返すか」を仕組み化。タイムラグによる信頼低下を防ぎます。",
      },
      {
        title: "初診オペレーションの整流化",
        desc:
          "初診時の流れ、書類、患者家族対応をフロー化。誰が担当しても同じ品質で初回対応ができる体制に。",
      },
      {
        title: "月次レポート（経営版）",
        desc:
          "売上・単価・件数・算定構成・施設別動向を月初に共有。打ち手の優先順位を一緒に決めます。",
      },
    ],
  },
  {
    num: "02",
    kicker: "STRENGTH — レセプト・算定改善",
    title: "レセプト精度を、",
    highlight: "構造から底上げする。",
    body:
      "算定漏れと返戻は、個人のミスではなく仕組みの問題。カルテチェック・算定漏れ確認・返戻対策を継続的に回し、訪問歯科特有の算定（在歯管・SPT・口腔機能管理 等）を組織のナレッジに変えます。",
    bullets: [
      "カルテチェック / 算定漏れ確認",
      "返戻分析と再発防止フロー",
      "訪問歯科特有の算定ナレッジ蓄積",
    ],
    statNum: "98%",
    statLabel: "レセプト精度",
    cards: [
      {
        title: "事前カルテチェック",
        desc:
          "請求前のカルテを点検し、算定漏れと根拠不備を発見。請求後の返戻リスクを下げます。",
      },
      {
        title: "返戻原因の構造化",
        desc:
          "返戻が起きた個別ケースを、保険者別・項目別に分類。同じ穴に2度落ちない運用に変えます。",
      },
      {
        title: "算定ナレッジの院内移植",
        desc:
          "外部事務長が抱える「歯科特有の算定」を、医院内のチェックリスト・運用フローに置き換え、属人化を解消します。",
      },
    ],
  },
  {
    num: "03",
    kicker: "STRENGTH — 経営判断の伴走",
    title: "経営判断を、",
    highlight: "孤独にしない。",
    body:
      "数字の前に、まず院長の話を聞かせてください。月次の数字を一緒に読み、判断を急ぐ場面では一緒に迷い、続ける／止める／変えるを一緒に決める。出口戦略まで含めた10年単位の伴走設計です。",
    bullets: [
      "月次経営ミーティング",
      "院長の状態チェック（月次）",
      "事業承継・出口戦略の設計",
    ],
    statNum: "95%",
    statLabel: "継続契約率",
    cards: [
      {
        title: "月次経営ミーティング",
        desc:
          "数字 → 課題 → 打ち手の順で整理。次の30日でやることを2-3に絞って終わる、判断のための場です。",
      },
      {
        title: "院長メンタルチェック",
        desc:
          "経営判断は、院長の状態に大きく左右されます。月次面談では数字より先に、院長の心身の状態を確認します。",
      },
      {
        title: "出口戦略の設計",
        desc:
          "事業承継、スケールダウン、譲渡。10年後を見据えた選択肢を複数並べ、ライフプランと統合して設計します。",
      },
    ],
  },
];

const VOICES = [
  {
    body:
      "LINEの返信が異常に早く、困った時にはすぐに助けてくれます。昨今webで済ます業者が多い中でARCHさんは会いにきてくれるので本当に信頼がおける。訪問歯科のコンサルはもちろん、最近は医院モニター用の広告動画の作成もお願いしました。何でもやってくれるのでついつい色んなことを任せてしまいます。",
    author: "東京都世田谷区 歯科医院",
  },
  {
    body:
      "採用の相談や新規入職したスタッフ（歯科医師・歯科衛生士・事務）の初期研修も担当してくれています。歯科医師より歯科のことを分かっているので安心して任せています。他のコンサルと違って、課題を指摘して終わるのではなく一緒に伴走して解決に導いてくれるので本当に助かっています。",
    author: "北海道札幌市 歯科医院",
  },
  {
    body:
      "遠方なのでたまにしかお会いしませんが、いつも電話やLINEで連絡してくれます。報酬改定など私はあまり詳しくないですが、ARCHさんが弊院に合ったポイントを丁寧に説明してくれるので助かっています。医療や介護関係に顔が広く、経営層の紹介もしてくれます。",
    author: "地方 歯科医院 院長",
  },
];

type Plan = {
  tier: "LIGHT" | "STANDARD" | "PREMIUM";
  ja: string;
  tagline: string;
  priceNum: string;
  priceUnit: string;
  items: string[];
  highlighted?: boolean;
  badge?: string;
};

const PLANS: Plan[] = [
  {
    tier: "LIGHT",
    ja: "ライトプラン",
    tagline: "まずは始めたい方に",
    priceNum: "10",
    priceUnit: "万円 / 月",
    items: [
      "訪問歯科の運営サポート",
      "月1回 Web/対面ミーティング",
      "ARCH独自アプリ使用可能",
      "LINE等での相談",
      "実地支援（別途3万円）",
    ],
  },
  {
    tier: "STANDARD",
    ja: "スタンダードプラン",
    tagline: "運営を加速させたい方に",
    priceNum: "30",
    priceUnit: "万円 / 月",
    highlighted: true,
    badge: "一番人気",
    items: [
      "ライトプランの全内容を含む",
      "月4回 Web/対面ミーティング",
      "経営相談・月次レポート",
      "院長メンタルチェック（月次）",
      "事務代行（内容要相談）",
      "実地支援（月1回無償 / 2回目以降別途2万円）",
    ],
  },
  {
    tier: "PREMIUM",
    ja: "プレミアムプラン",
    tagline: "外部事務長として常駐",
    priceNum: "50",
    priceUnit: "万円 / 月",
    badge: "最上位",
    items: [
      "スタンダードプランの全内容を含む",
      "院長メンタルチェック（月次）",
      "医院オリジナルWebアプリ開発",
      "営業同行・代行",
      "経営層との会合セッティング",
    ],
  },
];

export default function ConsultingPage() {
  return (
    <article className="bg-arch-cream">
      {/* ──────────────────────────────────────────
          HERO
      ────────────────────────────────────────── */}
      <section className="relative bg-arch-forest text-arch-cream overflow-hidden pt-24 md:pt-32 pb-20 md:pb-28">
        <CornerMarkers
          topRight="OPERATION — 01 / 訪問歯科運営"
          bottomLeft="SERVICE"
          bottomRight="01 / 03"
          theme="dark"
        />
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <SectionTag
            category="OPERATION"
            number="01"
            label="歯科医院運営支援"
            theme="dark"
          />

          <div className="mt-8 md:mt-12 grid md:grid-cols-12 gap-8 md:gap-12 items-end">
            <div className="md:col-span-8">
              <h1 className="display-jp text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl text-arch-cream leading-[1.1]">
                訪問歯科を、
                <br />
                <span className="text-arch-gold">回し続ける</span>。
              </h1>
            </div>
            <div className="md:col-span-4">
              <div className="border-l-2 border-arch-gold pl-5">
                <p className="mono-label text-arch-gold mb-3">CORE MESSAGE</p>
                <p className="text-base md:text-lg text-arch-sage leading-loose">
                  助言だけでは、訪問歯科は回らない。
                  <br />
                  外部事務長として実務に入り込む。
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14 md:mt-20 grid md:grid-cols-12 gap-8 items-end border-t border-arch-rule-dark pt-8">
            <p className="md:col-span-8 text-sm md:text-base text-arch-sage/90 leading-loose max-w-2xl">
              算定、レセプト、施設対応、スタッフ導線、月次分析。訪問歯科の運営に必要な要素を、外部事務長として実務レベルで整え、毎月一緒に回します。レセプト・算定改善支援は本サービスの中核機能として内包しています。
            </p>
            <div className="md:col-span-4 flex md:justify-end">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-3 bg-arch-cream text-arch-forest px-7 py-4 text-sm font-bold tracking-[0.15em] hover:bg-arch-gold transition-colors"
              >
                現場の状況を相談する
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          PROBLEM
      ────────────────────────────────────────── */}
      <section className="relative bg-arch-cream py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-baseline justify-between border-b border-arch-rule pb-4 mb-12 md:mb-16">
            <SectionTag category="PROBLEM" number="02" label="こんな運営課題はありませんか" />
            <p className="mono-micro text-arch-ink-muted hidden sm:block">03 CASES</p>
          </div>

          <h2 className="display-jp text-3xl md:text-4xl text-arch-ink mb-12 md:mb-16 max-w-3xl leading-[1.2]">
            始めることより、
            <br />
            <span className="text-arch-forest">回し続ける方が難しい。</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-0 border-t border-arch-rule">
            {PROBLEMS.map((item, i) => (
              <div
                key={i}
                className={`border-b border-arch-rule md:border-b-0 md:border-r md:last:border-r-0 py-8 md:py-10 md:px-8 ${i === 0 ? "md:pl-0" : ""}`}
              >
                <p className="mono-label text-arch-moss mb-4 tabular-nums">
                  CASE — {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="display-jp text-lg md:text-xl text-arch-ink mb-4 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-arch-ink-soft leading-loose">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          SOLUTION — 3つの強み
      ────────────────────────────────────────── */}
      <section className="bg-arch-cream-raised py-20 md:py-28 border-t border-arch-rule">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 mb-16 md:mb-20">
          <div className="flex items-baseline justify-between border-b border-arch-rule pb-4 mb-12 md:mb-16">
            <SectionTag category="SOLUTION" number="03" label="外部事務長としての 3 機能" />
            <p className="mono-micro text-arch-ink-muted hidden sm:block">03 STRENGTHS</p>
          </div>

          <h2 className="display-jp text-3xl md:text-4xl text-arch-ink mb-6 max-w-3xl leading-[1.2]">
            助言で止めず、
            <br />
            <span className="text-arch-forest">実務まで入り込む。</span>
          </h2>
          <p className="text-base text-arch-ink-soft leading-loose max-w-2xl">
            運営改善・レセプト精度・経営判断。外部事務長として、毎月の現場と経営の両輪を回します。
          </p>
        </div>

        {FEATURES.map((f, idx) => (
          <div
            key={f.num}
            className={`${idx % 2 === 0 ? "bg-arch-cream" : "bg-arch-cream-raised"} border-t border-arch-rule py-16 md:py-24`}
            id={f.num === "02" ? "billing" : undefined}
          >
            <div className="max-w-6xl mx-auto px-5 sm:px-8">
              <div className="grid md:grid-cols-12 gap-8 md:gap-14 items-start">
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

                <div className={`md:col-span-5 ${idx === 1 ? "md:order-1" : ""}`}>
                  <div className="border border-arch-rule-dark/20 p-8 md:p-10 bg-arch-cream-raised">
                    <p className="mono-micro text-arch-moss mb-4">METRIC / 実績</p>
                    <p className="display-jp text-6xl md:text-7xl text-arch-forest leading-none tabular-nums">
                      {f.statNum}
                    </p>
                    <p className="mono-label text-arch-ink-muted mt-4">{f.statLabel}</p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-0 mt-12 md:mt-16 border-t border-arch-rule">
                {f.cards.map((card, i) => (
                  <div
                    key={i}
                    className={`border-b md:border-b-0 md:border-r border-arch-rule md:last:border-r-0 py-6 md:py-8 md:px-8 ${i === 0 ? "md:pl-0" : ""}`}
                  >
                    <p className="mono-micro text-arch-moss mb-3 tabular-nums">
                      {f.num} — {String(i + 1).padStart(2, "0")}
                    </p>
                    <h4 className="display-jp text-base md:text-lg text-arch-ink mb-3">
                      {card.title}
                    </h4>
                    <p className="text-sm text-arch-ink-soft leading-loose">
                      {card.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ──────────────────────────────────────────
          RESULTS
      ────────────────────────────────────────── */}
      <section className="relative bg-arch-forest text-arch-cream py-20 md:py-28 overflow-hidden">
        <div className="absolute -right-16 md:-right-24 top-10 md:top-16 pointer-events-none select-none opacity-[0.04]">
          <span className="display-jp text-[16rem] md:text-[22rem] leading-none text-arch-gold">
            3
          </span>
        </div>
        <div className="absolute top-6 left-6 md:top-8 md:left-10 pointer-events-none">
          <span className="mono-label text-arch-sage/70">RESULTS — 04 / 実績</span>
        </div>
        <div className="absolute top-6 right-6 md:top-8 md:right-10 pointer-events-none text-right">
          <span className="mono-micro text-arch-sage/60">IMPACT METRICS</span>
        </div>

        <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
          <p className="mono-label text-arch-gold mb-6">NUMBERS</p>
          <h2 className="display-jp text-4xl md:text-6xl text-arch-cream mb-6 max-w-3xl leading-[1.1]">
            導入医院に起きた、
            <br />
            <span className="text-arch-gold">3つの変化。</span>
          </h2>
          <p className="text-base md:text-lg text-arch-sage/80 leading-loose max-w-2xl mb-16 md:mb-20">
            「整っている」「数字が見える」「迷わない」——外部事務長が入ることで、現場と経営の手触りが変わります。
          </p>

          <div className="grid md:grid-cols-3 gap-px bg-arch-rule-dark/60 border border-arch-rule-dark/60">
            {[
              {
                num: "-65",
                unit: "%",
                label: "現場ヒヤリ件数",
                desc: "施設対応と初診導線を標準化することで、ヒヤリ・ハットが大幅に減少します。",
              },
              {
                num: "98",
                unit: "%",
                label: "レセプト精度",
                desc: "事前カルテチェックと返戻分析を継続し、算定漏れと返戻を構造的に減らします。",
              },
              {
                num: "95",
                unit: "%",
                label: "継続契約率",
                desc: "短期ではなく10年単位の伴走設計。契約更新率に現れています。",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-arch-forest p-8 md:p-12 flex flex-col justify-between min-h-[280px] md:min-h-[340px]"
              >
                <div className="flex items-start justify-between mb-8">
                  <p className="mono-micro text-arch-sage/60 tabular-nums">METRIC / 0{i + 1}</p>
                  <span className="mono-micro text-arch-gold/70 tabular-nums">0{i + 1} — 03</span>
                </div>
                <div>
                  <p className="display-jp leading-none mb-6 flex items-baseline text-arch-gold">
                    <span className="text-7xl md:text-[7rem] tabular-nums">{item.num}</span>
                    <span className="text-3xl md:text-5xl ml-1 tabular-nums">{item.unit}</span>
                  </p>
                  <div className="h-px bg-arch-gold/40 w-12 mb-5"></div>
                  <p className="mono-label text-arch-cream mb-4">{item.label}</p>
                  <p className="text-sm text-arch-sage/85 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          VOICES
      ────────────────────────────────────────── */}
      <section className="relative bg-arch-forest-soft text-arch-cream pt-16 md:pt-20 pb-24 md:pb-32 border-t border-arch-rule-dark/60">
        <div className="absolute left-6 md:left-14 top-6 md:top-10 pointer-events-none select-none opacity-[0.08]">
          <span className="display-jp text-[14rem] md:text-[20rem] leading-none text-arch-gold">
            “
          </span>
        </div>

        <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-baseline justify-between border-b border-arch-rule-dark/60 pb-4 mb-12 md:mb-16">
            <p className="mono-label text-arch-gold">VOICES — 04b / 院長の声</p>
            <p className="mono-micro text-arch-sage/60 hidden sm:block">03 CLIENTS</p>
          </div>

          <h2 className="display-jp text-3xl md:text-5xl text-arch-cream mb-14 md:mb-20 max-w-3xl leading-[1.2]">
            取引先院長の、
            <br />
            <span className="text-arch-gold">リアルな声。</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {VOICES.map((v, i) => (
              <figure
                key={i}
                className="bg-arch-cream text-arch-ink p-7 md:p-9 flex flex-col shadow-[0_8px_24px_-12px_rgba(0,0,0,0.35)]"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="display-jp text-5xl md:text-6xl text-arch-gold leading-none">
                    “
                  </span>
                  <span className="mono-micro text-arch-ink-muted tabular-nums">VOICE / 0{i + 1}</span>
                </div>
                <blockquote className="text-sm md:text-[15px] text-arch-ink-soft leading-loose flex-1">
                  {v.body}
                </blockquote>
                <figcaption className="mono-label text-arch-moss border-t border-arch-rule pt-5 mt-6">
                  — {v.author}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          PRICING
      ────────────────────────────────────────── */}
      <section className="bg-arch-cream py-20 md:py-28 border-t border-arch-rule">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-baseline justify-between border-b border-arch-rule pb-4 mb-12 md:mb-16">
            <SectionTag category="PRICING" number="05" label="料金プラン" />
            <p className="mono-micro text-arch-ink-muted hidden sm:block">03 PLANS + TRIAL</p>
          </div>

          <h2 className="display-jp text-3xl md:text-4xl text-arch-ink mb-12 md:mb-16 max-w-3xl">
            月額継続の<span className="text-arch-forest">3プラン</span>と、
            <br />
            初回限定のお試し。
          </h2>

          <div className="grid md:grid-cols-3 gap-0 border border-arch-rule-dark/20">
            {PLANS.map((p, i) => {
              const isHighlight = p.highlighted;
              return (
                <div
                  key={p.tier}
                  className={`relative ${isHighlight ? "bg-arch-forest text-arch-cream" : "bg-arch-cream-raised text-arch-ink"} ${i < PLANS.length - 1 ? "md:border-r border-arch-rule" : ""} border-b md:border-b-0 border-arch-rule p-8 md:p-10 flex flex-col`}
                >
                  <div className="h-8 mb-6">
                    {p.badge && (
                      <span
                        className={`inline-block mono-micro px-3 py-1 ${isHighlight ? "bg-arch-gold text-arch-ink" : "bg-arch-ink text-arch-cream"}`}
                      >
                        {p.badge}
                      </span>
                    )}
                  </div>
                  <p className={`mono-label mb-2 ${isHighlight ? "text-arch-gold" : "text-arch-moss"}`}>
                    {p.tier}
                  </p>
                  <h3 className={`display-jp text-xl md:text-2xl mb-2 ${isHighlight ? "text-arch-cream" : "text-arch-ink"}`}>
                    {p.ja}
                  </h3>
                  <p className={`mono-micro mb-8 ${isHighlight ? "text-arch-sage/70" : "text-arch-ink-muted"}`}>
                    {p.tagline}
                  </p>

                  <div
                    className={`flex items-baseline gap-2 pb-8 mb-8 border-b ${isHighlight ? "border-arch-rule-dark" : "border-arch-rule"}`}
                  >
                    <span
                      className={`display-jp text-6xl md:text-7xl tabular-nums ${isHighlight ? "text-arch-gold" : "text-arch-forest"}`}
                    >
                      {p.priceNum}
                    </span>
                    <span
                      className={`mono-label ${isHighlight ? "text-arch-sage/80" : "text-arch-ink-muted"}`}
                    >
                      {p.priceUnit}
                    </span>
                  </div>

                  <ul className="space-y-3 flex-1">
                    {p.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <Check
                          size={14}
                          className={`mt-1 shrink-0 ${isHighlight ? "text-arch-gold" : "text-arch-moss"}`}
                        />
                        <span
                          className={`text-sm leading-relaxed ${isHighlight ? "text-arch-sage" : "text-arch-ink-soft"}`}
                        >
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/#contact"
                    className={`mt-10 inline-flex items-center justify-center gap-2 px-6 py-3.5 mono-label border ${isHighlight ? "bg-arch-gold text-arch-ink border-arch-gold hover:bg-arch-cream" : "border-arch-forest text-arch-forest hover:bg-arch-forest hover:text-arch-cream"} transition-colors`}
                  >
                    お問い合わせ
                    <ArrowRight size={14} />
                  </Link>
                </div>
              );
            })}
          </div>

          <p className="mono-micro text-arch-ink-muted mt-6">
            ※ 別途初期費用 100,000円（税別）がかかります。料金はすべて税別表示です。
          </p>

          {/* Trial + On-site */}
          <div className="mt-16 md:mt-20 border-t border-arch-rule" id="trial">
            <div className="grid md:grid-cols-12 gap-8 border-b border-arch-rule py-10 md:py-12">
              <div className="md:col-span-5">
                <p className="mono-label text-arch-moss mb-3">TRIAL — 初回限定</p>
                <h3 className="display-jp text-2xl md:text-3xl text-arch-ink mb-4">
                  お試しコンサルティング
                </h3>
                <p className="mono-micro text-arch-ink-muted mb-6">1ヶ月限定</p>
                <div className="flex items-baseline gap-2">
                  <span className="display-jp text-5xl md:text-6xl text-arch-forest tabular-nums">
                    70,000
                  </span>
                  <span className="mono-label text-arch-ink-muted">円 / 月</span>
                </div>
              </div>
              <div className="md:col-span-7">
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 border-t border-arch-rule pt-6">
                  {[
                    "訪問歯科の運営サポート",
                    "月1回のWeb/対面ミーティング",
                    "ARCH独自アプリ使用可能",
                    "運営課題の初期診断",
                    "LINE等での相談",
                    "月間レポート（簡易）",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <Check size={14} className="text-arch-moss mt-1 shrink-0" />
                      <span className="text-sm text-arch-ink-soft">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mono-micro text-arch-ink-muted mt-6 space-y-1">
                  <p>※ お試し期間終了後、本契約時は初期費用を無償とさせていただきます。</p>
                  <p>※ 初回契約時のみご利用いただけます。</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-12 gap-8 py-10 md:py-12 border-b border-arch-rule" id="onsite">
              <div className="md:col-span-5">
                <p className="mono-label text-arch-moss mb-3">ON-SITE — 単発プラン</p>
                <h3 className="display-jp text-2xl md:text-3xl text-arch-ink mb-4">
                  単発 実地支援サービス
                </h3>
                <p className="mono-micro text-arch-ink-muted mb-6">1回ごとの実地支援</p>
                <div className="flex items-baseline gap-2">
                  <span className="display-jp text-5xl md:text-6xl text-arch-forest tabular-nums">
                    50,000
                  </span>
                  <span className="mono-label text-arch-ink-muted">円 / 1回</span>
                </div>
              </div>
              <div className="md:col-span-7">
                <ul className="space-y-6 border-t border-arch-rule pt-6">
                  {[
                    {
                      num: "01",
                      title: "訪問診療の同行",
                      desc:
                        "実際の訪問診療に同行し、現場のオペレーション・患者対応・スタッフの動きを確認します。",
                    },
                    {
                      num: "02",
                      title: "改善レポートの作成",
                      desc:
                        "同行後1週間を目処に詳細レポートを提出。改善すべきポイントを具体的なアクション付きでまとめます。",
                    },
                    {
                      num: "03",
                      title: "運営改善のアドバイス",
                      desc:
                        "施設対応・初診導線・スタッフ配置・算定構成。運営の詰まりに具体策で答えます。",
                    },
                  ].map((step) => (
                    <li key={step.num} className="grid grid-cols-[auto_1fr] gap-5">
                      <span className="mono-label text-arch-moss tabular-nums pt-1">{step.num}</span>
                      <div>
                        <h4 className="display-jp text-base md:text-lg text-arch-ink mb-1">
                          {step.title}
                        </h4>
                        <p className="text-sm text-arch-ink-soft leading-loose">{step.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="mono-micro text-arch-ink-muted mt-6 space-y-1">
                  <p>※ 実地支援は単発でのご利用が可能です。料金は税別表示です。</p>
                  <p>
                    ※ 所在地が<strong className="text-arch-ink"> 東京都・神奈川県・埼玉県以外 </strong>の医院様は、別途交通費を申し受けます。
                  </p>
                </div>
              </div>
            </div>

            <div className="py-10 md:py-14" id="apply">
              <ServiceInquiryForm
                idPrefix="trial-onsite"
                heading="お試しコンサル／単発 実地支援 申込フォーム"
                description="ご希望の内容をお選びの上、必要事項をご入力ください。内容確認後、鈴木より折り返しご連絡いたします。"
                types={[
                  {
                    value: "trial",
                    label: "お試しコンサルティング",
                    description: "初回限定・1ヶ月 / 70,000円",
                    subjectTag: "【お試しコンサル申込】歯科医院運営支援",
                    defaultChecked: true,
                  },
                  {
                    value: "onsite",
                    label: "単発 実地支援サービス",
                    description: "1回ごと / 50,000円",
                    subjectTag: "【単発実地支援申込】歯科医院運営支援",
                  },
                ]}
                notes={[
                  "【単発実地支援の場合】所在地が東京都・神奈川県・埼玉県以外の医院様は、別途交通費（実費）をご請求いたします。",
                  "【お試しコンサルの場合】お試し期間終了後に本契約される場合は、初期費用を無償とさせていただきます（初回契約時のみご利用可）。",
                  "実施日程は申込後にメール/LINEで調整いたします。",
                  "料金はすべて税別表示です。",
                ]}
                submitLabel="この内容で申込む"
              />
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
