import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  FileText,
  DollarSign,
  Megaphone,
  Users,
  ShieldCheck,
  BarChart3,
  ClipboardList,
  Search,
  Scale,
  MessageSquare,
  Palette,
  Cpu,
  Globe,
  ClipboardCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import CornerMarkers, { SectionTag } from "@/components/CornerMarkers";

export const metadata = {
  title: "ARCH・外付け事務局（事務代行・BPO） | 合同会社ARCH",
  description:
    "資料作成・ホームページ制作・カルテ/レセプトBPOなど、必要な業務を必要な分だけ。13体のエージェント活用で他社より圧倒的に早く・安く提供する、スポット型外付け事務局。",
};

/* ================================================================
   ARCH・外付け事務局 — editorial v2
   CLAUDE.md 4.5: CORE 3 (#04 事務局長 / #05 経理 / #07 人事) を arch-gold で視覚的に強調
   ================================================================ */

const PROBLEMS = [
  {
    title: "書類地獄で、診療時間が溶けていく。",
    body:
      "カルテ、報告書、同意書、請求書、レセプト。診療の合間に院長が深夜までPCに向かう毎日。本来注ぐべき「患者さん」への時間が、書類に奪われている。",
  },
  {
    title: "労務の悩みを、誰に相談すればいい？",
    body:
      "採用、契約、面談記録、就業規則の更新。専門知識が必要なのに、院内に詳しい人がいない。社労士へ丸投げするには細かすぎる相談が多い。",
  },
  {
    title: "経理の数字が、手遅れで出てくる。",
    body:
      "月次決算、資金繰り、税理士との連携。数字が固まる頃には来月の運転資金。経営判断に必要なリアルタイムKPIは、いつも手に入らない。",
  },
];

type Agent = {
  id: number;
  name: string;
  role: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  core: boolean;
};

const AGENTS: Agent[] = [
  { id: 1, name: "統括ディレクター", role: "全案件の進行管理と優先順位付け", icon: Briefcase, core: false },
  { id: 2, name: "ウェブマスター", role: "HP・コード・デプロイの全工程管理", icon: Cpu, core: false },
  { id: 3, name: "マーケター", role: "SEO・コラム企画・アクセス解析", icon: BarChart3, core: false },
  { id: 4, name: "事務局長", role: "書類・請求・保険算定・レセプト補助", icon: FileText, core: true },
  { id: 5, name: "経理・資金繰り担当", role: "月次決算・CF・税理士連携", icon: DollarSign, core: true },
  { id: 6, name: "営業アシスタント", role: "提案書・営業資料作成代行", icon: Megaphone, core: false },
  { id: 7, name: "人事・労務", role: "採用・就業規則・面談記録管理", icon: Users, core: true },
  { id: 8, name: "コンプライアンス監査", role: "個人情報・法令遵守・リスク", icon: ShieldCheck, core: false },
  { id: 9, name: "現場オペレーション", role: "訪問スケジュール・動線・備品", icon: ClipboardList, core: false },
  { id: 10, name: "リサーチャー", role: "制度改正・施設ニーズ・競合", icon: Search, core: false },
  { id: 11, name: "契約・法務", role: "契約書・覚書・同意書管理", icon: Scale, core: false },
  { id: 12, name: "カスタマーサポート", role: "施設・家族からの問い合わせ", icon: MessageSquare, core: false },
  { id: 13, name: "デザインディレクター", role: "パンフ・バナー・ブランド統一", icon: Palette, core: false },
];

const CORE_DETAILS = [
  {
    num: "04",
    title: "事務局長",
    lead: "書類・請求・レセプト補助・行政対応",
    body:
      "元・広域医療法人歯科事務局長の知見をフルに注入。日々発生する書類業務・請求・保険算定・レセプト補助・行政対応を、医院の外側に「もう一つの事務局」として構えます。先生が書類に向かう時間を、ゼロに近づけることが目標です。",
    bullets: [
      "日次 / 月次の書類ワークフロー設計",
      "保険算定・レセプト補助（歯科特化）",
      "行政・保険者への対応窓口代行",
    ],
  },
  {
    num: "05",
    title: "経理・資金繰り担当",
    lead: "月次決算・キャッシュフロー・税理士連携",
    body:
      "月次決算を月初5営業日までに締め、KPIとキャッシュの「見える化」で経営判断を加速。税理士との橋渡しも担うため、医院側は「数字が読める院長」にならなくても、意思決定のスピードが落ちません。",
    bullets: [
      "月次決算を月初5営業日までにクローズ",
      "キャッシュフロー予測・資金繰り表の作成",
      "税理士・社労士との連携窓口",
    ],
  },
  {
    num: "07",
    title: "人事・労務",
    lead: "採用・就業規則・面談記録",
    body:
      "採用活動・就業規則・面談記録・給与計算補助まで、医院の「人に関わる全て」を一括引き受け。歯科衛生士・歯科助手・訪問コーディネーターなど、歯科特有の職種構成に合わせて設計します。",
    bullets: [
      "求人原稿作成 / 媒体選定 / 応募者管理",
      "就業規則・雇用契約書のメンテナンス",
      "スタッフ面談記録のフォーマット運用",
    ],
  },
];

const IMPACTS = [
  {
    num: "01",
    label: "診療に集中する時間",
    metric: "+2.5h",
    unit: "/ day",
    body: "書類と事務から解放され、1日あたり平均2.5時間の「考える余裕」が生まれます。",
  },
  {
    num: "02",
    label: "経営判断する時間",
    metric: "5d",
    unit: "/ monthly close",
    body: "月次決算を月初5営業日で締め、施策の意思決定スピードが劇的に上がります。",
  },
  {
    num: "03",
    label: "家族と過ごす時間",
    metric: "0h",
    unit: "/ night work",
    body: "院長の深夜残業が減り、週末を取り戻せます。持続可能な経営に不可欠な要素です。",
  },
];

const PRICING = [
  {
    num: "01",
    label: "Spot — 成果物型",
    title: "施設・ご家族向け資料作成",
    icon: FileText,
    body:
      "営業資料・ご家族向け説明資料・パンフレットなどを成果物単位でご依頼いただけます。エージェント活用により、納期は他社より圧倒的に早くお届けします。",
    price: "5",
    priceUnit: "万円〜",
    priceNote: "/ 件",
  },
  {
    num: "02",
    label: "Spot — 成果物型",
    title: "ホームページ作成",
    icon: Globe,
    body:
      "医院・クリニックの公式サイト構築。エージェント活用で、他社より圧倒的に安く、そして早く完成します。",
    price: "30",
    priceUnit: "万円〜",
    priceNote: "/ 一式",
    featured: true,
  },
  {
    num: "03",
    label: "Continuous — 継続BPO",
    title: "カルテ・レセプトBPO",
    icon: ClipboardCheck,
    body:
      "カルテ作成補助・レセプト業務は継続的な運用が必要なため、月額の継続BPO契約でご対応します。業務量・医院規模によりお見積りいたします。",
    price: "要相談",
    priceUnit: "",
    priceNote: "(月額)",
    text: true,
  },
];

export default function BpoServicePage() {
  return (
    <article className="bg-arch-cream">
      {/* ──────────────────────────────────────────
          HERO — editorial cover, deep forest
      ────────────────────────────────────────── */}
      <section className="relative bg-arch-forest text-arch-cream overflow-hidden pt-24 md:pt-32 pb-20 md:pb-28">
        <CornerMarkers
          topRight="EXTERNAL BACK OFFICE — 05 / 外付け事務局"
          bottomLeft="SERVICE"
          bottomRight="05 / 05"
          theme="dark"
        />
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <SectionTag
            category="BACK OFFICE"
            number="05"
            label="ARCH・外付け事務局"
            theme="dark"
          />

          <div className="mt-8 md:mt-12 grid md:grid-cols-12 gap-8 md:gap-12 items-end">
            <div className="md:col-span-8">
              <h1 className="display-jp text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl text-arch-cream leading-[1.1]">
                先生を<span className="text-arch-gold">事務から解放</span>し、
                <br />
                医院に最強の外部エンジンを。
              </h1>
              <p className="mono-micro text-arch-sage/70 mt-6">（事務代行・BPO）</p>
            </div>
            <div className="md:col-span-4">
              <div className="border-l-2 border-arch-gold pl-5">
                <p className="mono-label text-arch-gold mb-3">CORE MESSAGE</p>
                <p className="text-base md:text-lg text-arch-sage leading-loose">
                  必要なエージェントを、
                  <br />
                  必要な分だけ、スポットで。
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14 md:mt-20 grid md:grid-cols-12 gap-8 items-end border-t border-arch-rule-dark pt-8">
            <p className="md:col-span-8 text-sm md:text-base text-arch-sage/90 leading-loose max-w-2xl">
              資料作成・ホームページ制作・カルテやレセプトのBPOまで。月額定期契約や定期ミーティングを前提としない「スポット型BPO」として、医院のご予算に合わせて柔軟にご利用いただけます。13体のエージェントが裏側で稼働し、ARCH統括ディレクターの指揮で連動します。
            </p>
            <div className="md:col-span-4 flex md:justify-end">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-3 bg-arch-cream text-arch-forest px-7 py-4 text-sm font-bold tracking-[0.15em] hover:bg-arch-gold transition-colors"
              >
                無料オンライン相談を予約する
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          PROBLEM — 先生の時間、どこに溶けていますか？
      ────────────────────────────────────────── */}
      <section className="relative bg-arch-cream py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-baseline justify-between border-b border-arch-rule pb-4 mb-12 md:mb-16">
            <SectionTag category="PROBLEM" number="02" label="先生の時間、どこに溶けていますか？" />
            <p className="mono-micro text-arch-ink-muted hidden sm:block">03 CASES</p>
          </div>

          <h2 className="display-jp text-3xl md:text-4xl text-arch-ink mb-12 md:mb-16 max-w-3xl leading-[1.2]">
            診療以外の仕事が、
            <br />
            <span className="text-arch-forest">院長の夜を奪っている。</span>
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
                <p className="text-sm text-arch-ink-soft leading-loose">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          THE 13 AGENTS — grid with CORE 3 gold-accented
      ────────────────────────────────────────── */}
      <section className="bg-arch-cream-raised py-20 md:py-28 border-t border-arch-rule">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-baseline justify-between border-b border-arch-rule pb-4 mb-12 md:mb-16">
            <SectionTag category="THE 13 AGENTS" number="03" label="13体のエージェント構成" />
            <p className="mono-micro text-arch-ink-muted hidden sm:block">13 ROLES</p>
          </div>

          <h2 className="display-jp text-3xl md:text-4xl text-arch-ink mb-6 max-w-3xl leading-[1.2]">
            医院の裏で、
            <br />
            <span className="text-arch-forest">13体のエージェント</span>が動き続ける。
          </h2>
          <p className="text-base text-arch-ink-soft leading-loose max-w-3xl mb-12 md:mb-16">
            ARCH・外付け事務局は、単なる「人の派遣」ではありません。役割ごとに特化した13体のエージェントが、ARCH統括ディレクターの指揮のもと連動します。医院のご予算と業務内容に合わせて、必要なエージェントをスポットで組み合わせてご活用いただける設計です。
          </p>

          {/* Agent grid — 13 cards, CORE 3 in gold */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-arch-rule">
            {AGENTS.map((a) => {
              const Icon = a.icon;
              return (
                <div
                  key={a.id}
                  className={`relative border-b border-r border-arch-rule py-7 md:py-8 px-6 md:px-7 ${
                    a.core ? "bg-arch-cream" : ""
                  }`}
                >
                  {a.core && (
                    <span className="absolute top-0 left-0 bg-arch-gold text-arch-ink mono-micro px-2 py-0.5 tracking-[0.25em]">
                      CORE
                    </span>
                  )}
                  <div className="flex items-start gap-4 pt-2">
                    <div
                      className={`w-10 h-10 flex items-center justify-center shrink-0 border ${
                        a.core
                          ? "border-arch-gold text-arch-forest bg-arch-cream-raised"
                          : "border-arch-rule text-arch-moss bg-transparent"
                      }`}
                    >
                      <Icon size={18} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        className={`mono-label tabular-nums mb-1 ${
                          a.core ? "text-arch-gold" : "text-arch-moss"
                        }`}
                      >
                        #{String(a.id).padStart(2, "0")}
                      </p>
                      <h3
                        className={`display-jp text-base md:text-lg leading-snug mb-2 ${
                          a.core ? "text-arch-forest" : "text-arch-ink"
                        }`}
                      >
                        {a.name}
                      </h3>
                      <p className="text-xs md:text-sm text-arch-ink-soft leading-relaxed">
                        {a.role}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          CORE 3 SPOTLIGHT — 特に強力な 3 体の詳細
          CLAUDE.md 4.5: CORE 3 を視覚的に強調（ゴールドアクセント）
      ────────────────────────────────────────── */}
      <section className="bg-arch-cream border-t border-arch-rule">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-20 md:pt-28 pb-16 md:pb-20">
          <div className="flex items-baseline justify-between border-b border-arch-rule pb-4 mb-12 md:mb-16">
            <SectionTag category="CORE TRIO" number="04" label="特に強力なのは、この3体" />
            <p className="mono-micro text-arch-ink-muted hidden sm:block">03 CORE AGENTS</p>
          </div>

          <h2 className="display-jp text-3xl md:text-4xl text-arch-ink mb-6 max-w-3xl leading-[1.2]">
            「事務局長」「経理」「人事」の
            <br />
            <span className="text-arch-gold">3体がCORE</span>として常時稼働。
          </h2>
          <p className="text-base text-arch-ink-soft leading-loose max-w-2xl">
            医院経営の骨格を成す、書類・数字・人。この3領域を ARCH の CORE
            エージェントが引き受けることで、院長は診療と経営判断だけに集中できます。
          </p>
        </div>

        {CORE_DETAILS.map((c, idx) => (
          <div
            key={c.num}
            className={`${idx % 2 === 0 ? "bg-arch-cream-raised" : "bg-arch-cream"} border-t border-arch-rule py-16 md:py-24`}
          >
            <div className="max-w-6xl mx-auto px-5 sm:px-8">
              <div className="grid md:grid-cols-12 gap-8 md:gap-14 items-start">
                {/* Left — CORE label + body */}
                <div className="md:col-span-7">
                  <p className="mono-label text-arch-gold mb-4">
                    CORE — #{c.num} / {c.lead}
                  </p>
                  <div className="flex items-baseline gap-4 mb-6">
                    <span className="display-jp text-6xl md:text-7xl text-arch-gold/60 tabular-nums leading-none">
                      {c.num}
                    </span>
                    <div className="h-px flex-1 bg-arch-rule mt-auto mb-3"></div>
                  </div>
                  <h3 className="display-jp text-2xl md:text-3xl text-arch-ink leading-snug mb-6">
                    {c.title}
                  </h3>
                  <p className="text-sm md:text-base text-arch-ink-soft leading-loose mb-8">
                    {c.body}
                  </p>
                  <ul className="space-y-3 border-t border-arch-rule pt-6">
                    {c.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-arch-gold mt-2 shrink-0"></span>
                        <span className="text-sm text-arch-ink font-medium">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right — CORE badge card */}
                <div className="md:col-span-5">
                  <div className="border border-arch-gold p-8 md:p-10 bg-arch-cream-raised relative">
                    <span className="absolute -top-px -left-px bg-arch-gold text-arch-ink mono-micro px-2.5 py-1 tracking-[0.25em]">
                      CORE AGENT
                    </span>
                    <p className="mono-micro text-arch-ink-muted mt-4 mb-3">AGENT ID</p>
                    <p className="display-jp text-6xl md:text-7xl text-arch-forest leading-none tabular-nums">
                      #{c.num}
                    </p>
                    <p className="mono-label text-arch-moss mt-4">{c.title}</p>
                    <div className="border-t border-arch-rule mt-6 pt-6">
                      <p className="text-xs text-arch-ink-soft leading-loose">{c.lead}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ──────────────────────────────────────────
          IMPACT — 導入医院が手に入れる 3つの時間
      ────────────────────────────────────────── */}
      <section className="bg-arch-forest text-arch-cream py-20 md:py-28 border-t border-arch-rule-dark relative overflow-hidden">
        <CornerMarkers
          topRight="IMPACT — 3 TIMES"
          bottomLeft="BPO RESULTS"
          bottomRight="05 / 05"
          theme="dark"
        />
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-baseline justify-between border-b border-arch-rule-dark pb-4 mb-12 md:mb-16">
            <SectionTag category="IMPACT" number="05" label="導入効果" theme="dark" />
            <p className="mono-micro text-arch-sage/60 hidden sm:block">03 OUTCOMES</p>
          </div>

          <h2 className="display-jp text-3xl md:text-4xl lg:text-5xl text-arch-cream mb-14 md:mb-20 max-w-4xl leading-[1.2]">
            導入医院が手に入れる、
            <br />
            <span className="text-arch-gold">3つの"時間"。</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-0 border-t border-arch-rule-dark">
            {IMPACTS.map((item, i) => (
              <div
                key={item.num}
                className={`border-b border-arch-rule-dark md:border-b-0 ${i < IMPACTS.length - 1 ? "md:border-r" : ""} py-10 md:py-12 md:px-8 ${i === 0 ? "md:pl-0" : ""}`}
              >
                <p className="mono-label text-arch-gold mb-6 tabular-nums">
                  TIME — {item.num}
                </p>
                <p className="display-jp text-5xl md:text-6xl lg:text-7xl text-arch-cream leading-none tabular-nums mb-3">
                  {item.metric}
                </p>
                <p className="mono-micro text-arch-sage/60 mb-6">{item.unit}</p>
                <h3 className="display-jp text-lg md:text-xl text-arch-cream mb-4 leading-snug">
                  {item.label}
                </h3>
                <p className="text-sm text-arch-sage/90 leading-loose">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          PRICING — Spot BPO
      ────────────────────────────────────────── */}
      <section id="pricing" className="bg-arch-cream py-20 md:py-28 border-t border-arch-rule">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-baseline justify-between border-b border-arch-rule pb-4 mb-12 md:mb-16">
            <SectionTag category="PRICING" number="06" label="スポット型BPO 料金体系" />
            <p className="mono-micro text-arch-ink-muted hidden sm:block">SPOT / CONTINUOUS</p>
          </div>

          <h2 className="display-jp text-3xl md:text-4xl text-arch-ink mb-6 max-w-3xl leading-[1.2]">
            必要な業務を、必要な分だけ。
            <br />
            <span className="text-arch-forest">成果物ベースの料金体系。</span>
          </h2>
          <p className="text-base text-arch-ink-soft leading-loose max-w-3xl mb-12 md:mb-16">
            成果物に対してご費用をいただくため、費用対効果が明確です。エージェント活用により、他社より圧倒的に早く・圧倒的に安くご提供できます。
          </p>

          {/* Budget range banner */}
          <div className="border border-arch-rule-dark/30 p-8 md:p-10 bg-arch-cream-raised mb-12 md:mb-16">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-4">
                <p className="mono-label text-arch-moss mb-3">BUDGET RANGE</p>
                <p className="display-jp text-5xl md:text-6xl text-arch-forest leading-none tabular-nums">
                  ¥5<span className="text-2xl md:text-3xl">万</span>
                  <span className="mx-2 text-arch-ink-muted">–</span>
                  ¥30<span className="text-2xl md:text-3xl">万</span>
                </p>
              </div>
              <div className="md:col-span-8 md:border-l md:border-arch-rule md:pl-10">
                <p className="mono-micro text-arch-ink-muted mb-3">目安予算</p>
                <p className="text-sm md:text-base text-arch-ink-soft leading-loose">
                  ご予算に合わせて、
                  <strong className="text-arch-ink">複数のエージェントを組み合わせて</strong>
                  ご活用いただけます。まずはお気軽にご相談ください。
                </p>
              </div>
            </div>
          </div>

          {/* 3 pricing cards */}
          <div className="grid md:grid-cols-3 gap-0 border-t border-l border-arch-rule">
            {PRICING.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.num}
                  className={`relative border-b border-r border-arch-rule py-10 md:py-12 px-7 md:px-9 flex flex-col ${
                    p.featured ? "bg-arch-cream-raised" : ""
                  }`}
                >
                  {p.featured && (
                    <span className="absolute top-0 right-0 bg-arch-gold text-arch-ink mono-micro px-2.5 py-0.5 tracking-[0.25em]">
                      BEST VALUE
                    </span>
                  )}
                  <div
                    className={`w-11 h-11 flex items-center justify-center border ${
                      p.featured
                        ? "border-arch-gold text-arch-forest"
                        : "border-arch-rule text-arch-moss"
                    } mb-6`}
                  >
                    <Icon size={20} />
                  </div>
                  <p className="mono-label text-arch-moss mb-3 tabular-nums">
                    {p.num} — {p.label}
                  </p>
                  <h3 className="display-jp text-xl md:text-2xl text-arch-ink mb-4 leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-sm text-arch-ink-soft leading-loose mb-8 flex-1">
                    {p.body}
                  </p>
                  <div className="border-t border-arch-rule pt-5">
                    <p className="mono-micro text-arch-ink-muted mb-2">料金</p>
                    {p.text ? (
                      <p className="display-jp text-2xl md:text-3xl text-arch-ink leading-none tabular-nums">
                        {p.price}
                        <span className="mono-micro text-arch-ink-muted ml-3 tabular-nums">
                          {p.priceNote}
                        </span>
                      </p>
                    ) : (
                      <p>
                        <span className="display-jp text-4xl md:text-5xl text-arch-forest leading-none tabular-nums">
                          ¥{p.price}
                        </span>
                        <span className="display-jp text-base text-arch-ink ml-1">
                          {p.priceUnit}
                        </span>
                        <span className="mono-micro text-arch-ink-muted ml-3 tabular-nums">
                          {p.priceNote}
                        </span>
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <p className="mt-10 text-xs md:text-sm text-arch-ink-muted leading-loose max-w-3xl">
            ※ 上記以外にも、動画制作・採用支援・営業資料作成など、幅広いスポットBPOにご対応可能。具体的な業務範囲と料金はヒアリングの上、医院ごとにお見積りいたします。
          </p>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          FULL STACK — 訪問歯科プロデューサー導線
      ────────────────────────────────────────── */}
      <section className="bg-arch-cream-raised py-20 md:py-24 border-t border-arch-rule">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="border border-arch-rule-dark/30 p-8 md:p-12 bg-arch-cream">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-2">
                <div className="w-16 h-16 border border-arch-forest text-arch-forest flex items-center justify-center">
                  <Stethoscope size={28} />
                </div>
              </div>
              <div className="md:col-span-7">
                <p className="mono-label text-arch-moss mb-3">FOR FULL-STACK ENGAGEMENT</p>
                <h3 className="display-jp text-xl md:text-2xl text-arch-ink mb-4 leading-snug">
                  13体を横断的・継続的に
                  <br className="hidden md:block" />
                  活用したい方へ
                </h3>
                <p className="text-sm md:text-base text-arch-ink-soft leading-loose">
                  事業全体に深く入り込み、経営視点で13体のエージェントを統合運用したい場合は、
                  <strong className="text-arch-ink">
                    「訪問歯科プロデューサー」（経営コンサルティング）
                  </strong>
                  をご検討ください。月額契約で、ARCHが経営パートナーとして常時伴走します。
                </p>
              </div>
              <div className="md:col-span-3 flex md:justify-end">
                <Link
                  href="/services/consulting"
                  className="inline-flex items-center gap-3 bg-arch-forest text-arch-cream px-6 py-4 text-sm font-bold tracking-[0.15em] hover:bg-arch-ink transition-colors w-full md:w-auto justify-center"
                >
                  プロデューサーを見る
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          COMING SOON — AI 発注システム teaser
      ────────────────────────────────────────── */}
      <section className="bg-arch-ink text-arch-cream py-20 md:py-24 border-t border-arch-rule-dark relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid md:grid-cols-12 gap-8 items-start">
            <div className="md:col-span-2">
              <div className="w-14 h-14 border border-arch-gold text-arch-gold flex items-center justify-center">
                <Sparkles size={24} />
              </div>
            </div>
            <div className="md:col-span-10">
              <span className="inline-block mono-micro text-arch-gold border border-arch-gold/40 px-3 py-1 mb-5 tracking-[0.25em]">
                COMING SOON
              </span>
              <h3 className="display-jp text-2xl md:text-3xl text-arch-cream mb-5 leading-snug max-w-3xl">
                AIエージェント発注システム（開発中）
              </h3>
              <p className="text-sm md:text-base text-arch-sage/90 leading-loose max-w-3xl">
                「資料作成」ボタンを押すと、必要な資料の種類をヒアリング。ARCHの各エージェントがどの業務を、何日で、いくらで対応するかを自動見積りし、そのままワンクリックで発注できる——そんなBPO体験を準備中です。リリース時にはご案内いたします。
              </p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
