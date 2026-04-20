import {
  ArrowRight,
  Check,
} from "lucide-react";
import Link from "next/link";
import CornerMarkers, { SectionTag } from "@/components/CornerMarkers";
import ServiceInquiryForm from "@/components/ServiceInquiryForm";

export const metadata = {
  title: "訪問歯科プロデューサー（旧：歯科経営コンサルティング）",
  description:
    "助言ではなく、訪問歯科事業をゼロからプロデュース。書類地獄の完全撤廃、黒字化の仕組み、自己肯定感を高める組織づくりまで一気通貫で伴走します。",
};

const PROBLEMS = [
  {
    title: "「売上は上がった。でもDHが辞めた。」",
    body:
      "コンサルに言われた通り集患は成功した。でもスタッフが次々と辞めていく。売上を支える人がいない。",
  },
  {
    title: "「経営の悩みを、誰にも言えない。」",
    body:
      "スタッフには弱みを見せられない。同業者にも言えない。配偶者にも理解されない。院長はいつも孤独だ。",
  },
  {
    title: "「この医院、10年後どうなるんだろう。」",
    body:
      "後継者がいない。自分が倒れたら終わり。始め方は教わったが、終わり方は誰も教えてくれない。",
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
    kicker: "STRENGTH — 辞めない組織",
    title: "「辞めない組織」をつくる",
    highlight: "訪問歯科プロデュース",
    body:
      "売上最適化ではなく、スタッフが『ここで働き続けたい』と思える組織をつくることを最優先。ARCHは泥臭く現場に入り込み、離職の根本原因に向き合います。",
    bullets: [
      "離職の根本原因に切り込む",
      "現場に入る泥臭い伴走",
      "離職率をKPIに設定する独自メソッド",
    ],
    statNum: "-65%",
    statLabel: "平均離職率改善",
    cards: [
      {
        title: "離職の根本原因に切り込む",
        desc:
          "『給料が安い』という表面的な理由の奥にある、人間関係・やりがい・成長の課題を徹底的にヒアリング。",
      },
      {
        title: "現場に入る泥臭い伴走",
        desc:
          "月1回のZoomではなく、実際に医院に足を運び、スタッフの声を聞き、一緒に改善策を実行します。",
      },
      {
        title: "離職率をKPIに設定",
        desc:
          "売上ではなく『スタッフが辞めない』『満足度が上がる』を目標に。組織の体温が下がらない経営を実現。",
      },
    ],
  },
  {
    num: "02",
    kicker: "STRENGTH — 精神的参謀",
    title: "院長の「精神的参謀」",
    highlight: "になる伴走者",
    body:
      "数字の前に、あなた自身の話を聞かせてください。経営判断の前に、院長の心と感情を整える。スタッフには見せられない弱音を吐ける場所。月次面談では数字ではなく、あなたの状態をチェックします。",
    bullets: [
      "感情と事実を分離する整理",
      "院長の状態チェック（月次）",
      "冷静な経営判断の土台づくり",
    ],
    statNum: "98%",
    statLabel: "院長満足度",
    cards: [
      {
        title: "心理的安全の確保",
        desc:
          "院長の本音、不安、迷い。スタッフや家族には言えないことを、安全に話す環境をつくります。",
      },
      {
        title: "月次メンタルチェック",
        desc:
          "数字よりも先に院長の心身の状態を確認。疲弊していれば休息を、迷っていれば思考の整理を支援。",
      },
      {
        title: "感情と事実の分離",
        desc:
          "『怖い』『不安』という感情と『現実』を分け、冷静な経営判断ができる状態に導きます。",
      },
    ],
  },
  {
    num: "03",
    kicker: "STRENGTH — 出口戦略",
    title: "「出口戦略」まで見据えた",
    highlight: "10年伴走",
    body:
      "始める支援だけじゃない。あなたの医院の10年後まで、一緒に考えます。訪問歯科診療所の90%超が後継者不在。ARCHは事業承継・スケールダウン・廃止など、院長のライフプランと統合した『出口戦略』を設計します。",
    bullets: [
      "事業承継・後継者育成の設計",
      "地域歯科ネットワーク構築",
      "院長の人生設計との統合",
    ],
    statNum: "95%",
    statLabel: "継続契約率",
    cards: [
      {
        title: "事業承継の設計",
        desc:
          "子息への継承、スタッフへの譲渡、スケールダウン、廃止。複数のシナリオから最適な出口を設計します。",
      },
      {
        title: "地域歯科ネットワーク構築",
        desc:
          "診療圏内の歯科医院との関係構築。パートナー歯科医が見つかれば、柔軟な事業承継が可能になります。",
      },
      {
        title: "人生設計との統合",
        desc:
          "医院経営だけでなく、院長のセカンドライフ、家族との時間、夢と向き合う。包括的なプランを立案します。",
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
    tagline: "成長を加速させたい方に",
    priceNum: "30",
    priceUnit: "万円 / 月",
    highlighted: true,
    badge: "一番人気",
    items: [
      "ライトプランの全内容を含む",
      "月4回 Web/対面ミーティング",
      "経営相談",
      "院長メンタルチェック（月次）",
      "BPO（内容要相談）",
      "実地支援（月1回無償 / 2回目以降別途2万円）",
    ],
  },
  {
    tier: "PREMIUM",
    ja: "プレミアムプラン",
    tagline: "圧倒的な成長を実現",
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
          HERO — editorial cover, deep forest
      ────────────────────────────────────────── */}
      <section className="relative bg-arch-forest text-arch-cream overflow-hidden pt-24 md:pt-32 pb-20 md:pb-28">
        <CornerMarkers
          topRight="PRODUCER — 01 / 訪問歯科"
          bottomLeft="SERVICE"
          bottomRight="01 / 05"
          theme="dark"
        />
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <SectionTag category="PRODUCER" number="01" label="訪問歯科プロデューサー" theme="dark" />

          <div className="mt-8 md:mt-12 grid md:grid-cols-12 gap-8 md:gap-12 items-end">
            <div className="md:col-span-8">
              <h1 className="display-jp text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl text-arch-cream leading-[1.1]">
                訪問歯科を、
                <br />
                <span className="text-arch-gold">プロデュース</span>する。
              </h1>
              <p className="mono-micro text-arch-sage/70 mt-6">
                （旧：歯科経営コンサルティング）
              </p>
            </div>
            <div className="md:col-span-4">
              <div className="border-l-2 border-arch-gold pl-5">
                <p className="mono-label text-arch-gold mb-3">CORE MESSAGE</p>
                <p className="text-base md:text-lg text-arch-sage leading-loose">
                  助言ではなく、事業そのものを<br />プロデュースする。
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14 md:mt-20 grid md:grid-cols-12 gap-8 items-end border-t border-arch-rule-dark pt-8">
            <p className="md:col-span-8 text-sm md:text-base text-arch-sage/90 leading-loose max-w-2xl">
              売上は上がったのに人が辞めていく。経営の悩みを誰にも言えない。この医院の10年後が不安。
              そんな院長の本当の課題に向き合い、スタッフが「ここで働き続けたい」と思える組織づくりを支援します。
            </p>
            <div className="md:col-span-4 flex md:justify-end">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-3 bg-arch-cream text-arch-forest px-7 py-4 text-sm font-bold tracking-[0.15em] hover:bg-arch-gold transition-colors"
              >
                無料相談を予約する
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

          <h2 className="display-jp text-3xl md:text-4xl text-arch-ink mb-12 md:mb-16 max-w-3xl">
            集患の先にある、
            <br />
            <span className="text-arch-forest">本当の経営課題。</span>
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
                <p className="text-sm text-arch-ink-soft leading-loose">
                  {item.body}
                </p>
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
            <SectionTag category="SOLUTION" number="03" label="ARCHの3つの強み" />
            <p className="mono-micro text-arch-ink-muted hidden sm:block">03 STRENGTHS</p>
          </div>

          <h2 className="display-jp text-3xl md:text-4xl text-arch-ink mb-6 max-w-3xl leading-[1.2]">
            数字よりも<span className="text-arch-forest">人を見つめる</span>、
            <br />
            現場主義の伴走コンサル。
          </h2>
          <p className="text-base text-arch-ink-soft leading-loose max-w-2xl">
            売上の前に、スタッフの笑顔と院長の心を整える。助言ではなく、事業そのものをプロデュースします。
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
                    <p className="mono-micro text-arch-moss mb-4">METRIC / 実績</p>
                    <p className="display-jp text-6xl md:text-7xl text-arch-forest leading-none tabular-nums">
                      {f.statNum}
                    </p>
                    <p className="mono-label text-arch-ink-muted mt-4">{f.statLabel}</p>
                  </div>
                </div>
              </div>

              {/* Sub-cards */}
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
          RESULTS — 実績（巨大な数字で押し出す）
      ────────────────────────────────────────── */}
      <section className="relative bg-arch-forest text-arch-cream py-20 md:py-28 overflow-hidden">
        {/* decorative large number in background */}
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
            導入医院が実感した
            <br />
            <span className="text-arch-gold">3つの変化。</span>
          </h2>
          <p className="text-base md:text-lg text-arch-sage/80 leading-loose max-w-2xl mb-16 md:mb-20">
            売上ではなく、<strong className="text-arch-cream">「人」と「継続性」</strong>を指標にした時、現場の数字は確実に変わります。
          </p>

          <div className="grid md:grid-cols-3 gap-px bg-arch-rule-dark/60 border border-arch-rule-dark/60">
            {[
              {
                num: "-65",
                unit: "%",
                label: "平均離職率改善",
                desc: "『辞めない組織』を最優先に。伴走1年で現場の空気が変わります。",
              },
              {
                num: "98",
                unit: "%",
                label: "院長満足度",
                desc: "月次メンタルチェック受講者のうち、98%が「安心感が増した」と回答。",
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
                  <p className="mono-micro text-arch-sage/60 tabular-nums">
                    METRIC / 0{i + 1}
                  </p>
                  <span className="mono-micro text-arch-gold/70 tabular-nums">
                    0{i + 1} — 03
                  </span>
                </div>
                <div>
                  <p className="display-jp leading-none mb-6 flex items-baseline text-arch-gold">
                    <span className="text-7xl md:text-[7rem] tabular-nums">
                      {item.num}
                    </span>
                    <span className="text-3xl md:text-5xl ml-1 tabular-nums">
                      {item.unit}
                    </span>
                  </p>
                  <div className="h-px bg-arch-gold/40 w-12 mb-5"></div>
                  <p className="mono-label text-arch-cream mb-4">{item.label}</p>
                  <p className="text-sm text-arch-sage/85 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          VOICES — クリームカードが深緑に浮かぶ構成
      ────────────────────────────────────────── */}
      <section className="relative bg-arch-forest-soft text-arch-cream pt-16 md:pt-20 pb-24 md:pb-32 border-t border-arch-rule-dark/60">
        {/* giant quote mark in background */}
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
                  <span className="mono-micro text-arch-ink-muted tabular-nums">
                    VOICE / 0{i + 1}
                  </span>
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
          PRICING — 料金プラン
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
                  {/* Badge area — 全プラン固定高（金額位置を揃えるため） */}
                  <div className="h-8 mb-6">
                    {p.badge && (
                      <span
                        className={`inline-block mono-micro px-3 py-1 ${isHighlight ? "bg-arch-gold text-arch-ink" : "bg-arch-ink text-arch-cream"}`}
                      >
                        {p.badge}
                      </span>
                    )}
                  </div>
                  <p
                    className={`mono-label mb-2 ${isHighlight ? "text-arch-gold" : "text-arch-moss"}`}
                  >
                    {p.tier}
                  </p>
                  <h3
                    className={`display-jp text-xl md:text-2xl mb-2 ${isHighlight ? "text-arch-cream" : "text-arch-ink"}`}
                  >
                    {p.ja}
                  </h3>
                  <p
                    className={`mono-micro mb-8 ${isHighlight ? "text-arch-sage/70" : "text-arch-ink-muted"}`}
                  >
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
            {/* ============ Trial ============ */}
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
                    "訪問歯科事業立ち上げ相談",
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

            {/* ============ On-site ============ */}
            <div
              className="grid md:grid-cols-12 gap-8 py-10 md:py-12 border-b border-arch-rule"
              id="onsite"
            >
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
                      title: "組織改善のアドバイス",
                      desc:
                        "スタッフ間のコミュニケーション、院長の意思決定、組織文化の改善提案。人の課題に焦点を当てます。",
                    },
                  ].map((step) => (
                    <li key={step.num} className="grid grid-cols-[auto_1fr] gap-5">
                      <span className="mono-label text-arch-moss tabular-nums pt-1">
                        {step.num}
                      </span>
                      <div>
                        <h4 className="display-jp text-base md:text-lg text-arch-ink mb-1">
                          {step.title}
                        </h4>
                        <p className="text-sm text-arch-ink-soft leading-loose">
                          {step.desc}
                        </p>
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

            {/* ============ 統合申込フォーム（お試し or 単発実地支援） ============ */}
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
                    subjectTag: "【お試しコンサル申込】訪問歯科プロデューサー",
                    defaultChecked: true,
                  },
                  {
                    value: "onsite",
                    label: "単発 実地支援サービス",
                    description: "1回ごと / 50,000円",
                    subjectTag: "【単発実地支援申込】訪問歯科プロデューサー",
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
