import Link from "next/link";
import {
  ArrowRight,
  FileText,
  Globe,
  ClipboardCheck,
  Stethoscope,
} from "lucide-react";
import CornerMarkers, { SectionTag } from "@/components/CornerMarkers";

export const metadata = {
  title: "事務代行・BPO支援｜訪問歯科の書類・業務・DX を、医院の外側で回す",
  description:
    "訪問歯科の書類作成・郵送業務・業務フロー改善・記録アプリ・シフト管理など、医院の事務と業務改善を外部事務長として代行。必要な業務を、必要な分だけスポットでご利用いただけます。",
};

/* ================================================================
   事務代行・BPO支援
   訪問歯科に必要な事務・業務改善を、医院の外側で実務代行。
   DX・業務改善支援はこのページの 03 機能として内包。
   ================================================================ */

const PROBLEMS = [
  {
    title: "書類業務が、診療時間を削っている。",
    body:
      "カルテ、報告書、同意書、請求書、レセプト補助。診療の合間に院長が深夜までPCに向かう毎日。本来注ぐべき「患者さん」への時間が、書類に奪われている。",
  },
  {
    title: "事務フローが、属人化している。",
    body:
      "誰がどの書類をどう作るかが、担当者の頭の中だけにある。退職や休職が起きた途端、医院が止まってしまう。",
  },
  {
    title: "記録・シフト・連絡が、紙とFAXで重い。",
    body:
      "訪問記録、シフト、施設との連絡。紙とFAXで動いているため、スタッフが移動中に確認できず、現場が常に遅れる。",
  },
];

const FEATURES = [
  {
    num: "01",
    kicker: "BPO — 書類・請求・レセプト",
    title: "書類業務を、",
    highlight: "医院の外側で回す。",
    body:
      "訪問歯科特有の書類（訪問報告書、施設提出書類、同意書、ご家族向け説明資料、請求書類）を成果物単位で代行。元・歯科事務局長の知見をフルに使い、医院内に新しい人を雇わずに事務量を吸収します。",
    bullets: [
      "訪問報告書・施設提出書類の作成代行",
      "同意書・ご家族向け説明資料",
      "請求書類・レセプト補助",
    ],
  },
  {
    num: "02",
    kicker: "BPO — 郵送・業務フロー",
    title: "郵送と業務フローを、",
    highlight: "まるごと外注する。",
    body:
      "施設や患者家族への郵送業務、毎月発生する事務フロー、ルーチン業務の整理。一度組み立てれば医院側でも回せる手順書を添えてお返しします。",
    bullets: [
      "郵送業務の代行（封入・宛名・発送）",
      "毎月の事務ルーチンの整理",
      "手順書・チェックリストの納品",
    ],
  },
  {
    num: "03",
    kicker: "DX — 記録・シフト・業務効率化",
    title: "現場の業務を、",
    highlight: "デジタルで軽くする。",
    body:
      "訪問歯科記録アプリ、シフト管理、施設との連絡フロー。紙とFAXで重くなっている業務を、現場が使い続けられる範囲のデジタル化で軽くします。新しいツールを増やすのではなく、いまのワークフローに馴染ませることを優先します。",
    bullets: [
      "訪問歯科記録アプリ（ARCH 独自）",
      "シフト管理・スタッフ動線の可視化",
      "業務デジタル化・実務効率改善",
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
    body: "月次決算を月初5営業日で締め、施策の意思決定スピードが上がります。",
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
      "営業資料・ご家族向け説明資料・パンフレットなどを成果物単位でご依頼いただけます。納期は他社より圧倒的に早くお届けします。",
    price: "5",
    priceUnit: "万円〜",
    priceNote: "/ 件",
  },
  {
    num: "02",
    label: "Spot — 成果物型",
    title: "ホームページ制作・改修",
    icon: Globe,
    body:
      "医院・クリニックの公式サイトの新規構築、および既存サイトの改修。他社より圧倒的に安く、そして早く仕上げます。",
    price: "15",
    priceUnit: "万円〜",
    priceNote: "/ 一式（税別）",
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
          HERO
      ────────────────────────────────────────── */}
      <section className="relative bg-arch-forest text-arch-cream overflow-hidden pt-24 md:pt-32 pb-20 md:pb-28">
        <CornerMarkers
          topRight="BACK OFFICE — 03 / 事務代行・BPO"
          bottomLeft="SERVICE"
          bottomRight="03 / 03"
          theme="dark"
        />
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <SectionTag
            category="BACK OFFICE"
            number="03"
            label="事務代行・BPO支援"
            theme="dark"
          />

          <div className="mt-8 md:mt-12 grid md:grid-cols-12 gap-8 md:gap-12 items-end">
            <div className="md:col-span-8">
              <h1 className="display-jp text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl text-arch-cream leading-[1.1]">
                事務作業を、
                <br />
                医院の<span className="text-arch-gold">外側</span>に。
              </h1>
            </div>
            <div className="md:col-span-4">
              <div className="border-l-2 border-arch-gold pl-5">
                <p className="mono-label text-arch-gold mb-3">CORE MESSAGE</p>
                <p className="text-base md:text-lg text-arch-sage leading-loose">
                  必要な業務を、
                  <br />
                  必要な分だけ、スポットで。
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14 md:mt-20 grid md:grid-cols-12 gap-8 items-end border-t border-arch-rule-dark pt-8">
            <p className="md:col-span-8 text-sm md:text-base text-arch-sage/90 leading-loose max-w-2xl">
              書類作成、郵送業務、事務フロー整理、業務DX。訪問歯科に必要な事務と業務改善を、外部事務長として実務代行します。月額定期契約や定期ミーティングを前提としない「スポット型BPO」として、医院のご予算に合わせて柔軟にご利用いただけます。DX・業務改善支援は本サービスの中核機能として内包しています。
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
          SOLUTION — 3 機能（事務代行 / 郵送・フロー / DX）
      ────────────────────────────────────────── */}
      <section className="bg-arch-cream-raised py-20 md:py-28 border-t border-arch-rule">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 mb-16 md:mb-20">
          <div className="flex items-baseline justify-between border-b border-arch-rule pb-4 mb-12 md:mb-16">
            <SectionTag category="SOLUTION" number="03" label="事務代行・BPO支援の 3 機能" />
            <p className="mono-micro text-arch-ink-muted hidden sm:block">03 FUNCTIONS</p>
          </div>

          <h2 className="display-jp text-3xl md:text-4xl text-arch-ink mb-6 max-w-3xl leading-[1.2]">
            助言ではなく、
            <br />
            <span className="text-arch-forest">医院の事務を、実務で巻き取る。</span>
          </h2>
          <p className="text-base text-arch-ink-soft leading-loose max-w-2xl">
            書類・郵送・業務フロー・DX。訪問歯科に必要な実務だけを、医院の外側で回します。
          </p>
        </div>

        {FEATURES.map((f, idx) => (
          <div
            key={f.num}
            className={`${idx % 2 === 0 ? "bg-arch-cream" : "bg-arch-cream-raised"} border-t border-arch-rule py-16 md:py-24`}
            id={f.num === "03" ? "dx" : undefined}
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
                    {f.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-arch-moss mt-2 shrink-0"></span>
                        <span className="text-sm text-arch-ink font-medium">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`md:col-span-5 ${idx === 1 ? "md:order-1" : ""}`}>
                  <div className="border border-arch-rule-dark/20 p-8 md:p-10 bg-arch-cream-raised">
                    <p className="mono-micro text-arch-moss mb-4">KEY IDEA / {f.num}</p>
                    <p className="display-jp text-2xl md:text-3xl text-arch-ink leading-snug">
                      {f.title}
                      <br />
                      <span className="text-arch-forest">{f.highlight}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ──────────────────────────────────────────
          IMPACT — 3つの時間
      ────────────────────────────────────────── */}
      <section className="bg-arch-forest text-arch-cream py-20 md:py-28 border-t border-arch-rule-dark relative overflow-hidden">
        <CornerMarkers
          topRight="IMPACT — 3 TIMES"
          bottomLeft="BPO RESULTS"
          bottomRight="03 / 03"
          theme="dark"
        />
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-baseline justify-between border-b border-arch-rule-dark pb-4 mb-12 md:mb-16">
            <SectionTag category="IMPACT" number="04" label="導入効果" theme="dark" />
            <p className="mono-micro text-arch-sage/60 hidden sm:block">03 OUTCOMES</p>
          </div>

          <h2 className="display-jp text-3xl md:text-4xl lg:text-5xl text-arch-cream mb-14 md:mb-20 max-w-4xl leading-[1.2]">
            導入医院が手に入れる、
            <br />
            <span className="text-arch-gold">3つの&ldquo;時間&rdquo;。</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-0 border-t border-arch-rule-dark">
            {IMPACTS.map((item, i) => (
              <div
                key={item.num}
                className={`border-b border-arch-rule-dark md:border-b-0 ${i < IMPACTS.length - 1 ? "md:border-r" : ""} py-10 md:py-12 md:px-8 ${i === 0 ? "md:pl-0" : ""}`}
              >
                <p className="mono-label text-arch-gold mb-6 tabular-nums">TIME — {item.num}</p>
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
            <SectionTag category="PRICING" number="05" label="スポット型BPO 料金体系" />
            <p className="mono-micro text-arch-ink-muted hidden sm:block">SPOT / CONTINUOUS</p>
          </div>

          <h2 className="display-jp text-3xl md:text-4xl text-arch-ink mb-6 max-w-3xl leading-[1.2]">
            必要な業務を、必要な分だけ。
            <br />
            <span className="text-arch-forest">成果物ベースの料金体系。</span>
          </h2>
          <p className="text-base text-arch-ink-soft leading-loose max-w-3xl mb-12 md:mb-16">
            成果物に対してご費用をいただくため、費用対効果が明確です。月額固定の縛りなく、医院のご予算に合わせてスポットでご利用いただけます。
          </p>

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
                  <strong className="text-arch-ink">複数の業務を組み合わせて</strong>
                  ご活用いただけます。まずはお気軽にご相談ください。
                </p>
              </div>
            </div>
          </div>

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
                  <p className="text-sm text-arch-ink-soft leading-loose mb-8 flex-1">{p.body}</p>
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
          FULL STACK — 歯科医院運営支援への導線
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
                <p className="mono-label text-arch-moss mb-3">FOR ONGOING ENGAGEMENT</p>
                <h3 className="display-jp text-xl md:text-2xl text-arch-ink mb-4 leading-snug">
                  運営全体を、
                  <br className="hidden md:block" />
                  継続的に支援してほしい方へ
                </h3>
                <p className="text-sm md:text-base text-arch-ink-soft leading-loose">
                  事務代行に加え、運営改善・レセプト精度・経営判断まで継続的に伴走してほしい場合は、
                  <strong className="text-arch-ink">歯科医院運営支援</strong>
                  をご検討ください。月額契約で、外部事務長として現場と経営に伴走します。
                </p>
              </div>
              <div className="md:col-span-3 flex md:justify-end">
                <Link
                  href="/services/consulting"
                  className="inline-flex items-center gap-3 bg-arch-forest text-arch-cream px-6 py-4 text-sm font-bold tracking-[0.15em] hover:bg-arch-ink transition-colors w-full md:w-auto justify-center"
                >
                  運営支援を見る
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
