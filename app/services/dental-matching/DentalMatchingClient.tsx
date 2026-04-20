"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight, Check, AlertTriangle, MessageSquare, ShieldCheck, Sparkles } from "lucide-react";
import CornerMarkers, { SectionTag } from "@/components/CornerMarkers";

/* ================================================================
   訪問歯科・品質診断エンジン — editorial v2
   （旧：介護施設向け 訪問歯科マッチング／施設向け歯科評価ツール）

   - 5段階のLikert尺度で、現在ご契約中／検討中の訪問歯科医院を
     施設側の立場から「品質診断」します。
   - ARCHセンサー・ロジックに基づき、合計スコアに応じて
     3段階の判定と具体的な次アクションを提示します。
   ================================================================ */

type Question = {
  id: string;
  label: string;
  description: string;
};

const QUESTIONS: Question[] = [
  {
    id: "speed",
    label: "対応スピード",
    description:
      "急変・初診依頼・問い合わせに対する初動の速さ。原則48時間以内に一次対応があるか。",
  },
  {
    id: "report",
    label: "報告書の質",
    description:
      "訪問後の報告書・カルテ情報が、現場スタッフが読んで理解できる粒度か。KPIが見えるか。",
  },
  {
    id: "hospitality",
    label: "接遇・現場マナー",
    description:
      "入居者様・ご家族・施設スタッフへの言葉遣い、態度、清潔感。現場を「お借りしている」という意識があるか。",
  },
  {
    id: "communication",
    label: "現場との連携",
    description:
      "介護スタッフへの情報共有・口腔ケア指導が、一方的な押し付けではなく双方向か。",
  },
  {
    id: "compliance",
    label: "コンプライアンス",
    description:
      "算定根拠の説明、同意取得、記録管理、個人情報保護。法令遵守と誠実性が担保されているか。",
  },
  {
    id: "continuity",
    label: "継続性・体制",
    description:
      "担当者の頻繁な変更がなく、組織としての継続性があるか。DH離職による現場トラブルが起きていないか。",
  },
];

const SCALE_LABELS = [
  "1: 全くそう思わない",
  "2: そう思わない",
  "3: どちらとも言えない",
  "4: そう思う",
  "5: 非常にそう思う",
];

const WHY_CASES = [
  {
    title: "現場のクレーム",
    body: "入居者様・ご家族からの態度への苦情、ケア指導の理想論が負担に。",
  },
  {
    title: "報告書が読めない",
    body: "KPIが見えず、現場スタッフが「何がどうなっているか」分からない。",
  },
  {
    title: "コンプラ不安",
    body: "算定根拠・同意取得・記録管理が曖昧で、施設側にリスクが残る。",
  },
];

const TIER_LEGEND = [
  {
    tier: "LOW",
    range: "平均 1.0 – 2.4",
    label: "即刻変更を推奨",
  },
  {
    tier: "MID",
    range: "平均 2.5 – 3.9",
    label: "改善要相談",
  },
  {
    tier: "HIGH",
    range: "平均 4.0 – 5.0",
    label: "長期継続推奨",
  },
];

export default function DentalMatchingClient() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const totalScore = useMemo(
    () => Object.values(answers).reduce((sum, v) => sum + v, 0),
    [answers]
  );
  const answeredCount = Object.keys(answers).length;
  const maxScore = QUESTIONS.length * 5;
  const averageScore = answeredCount > 0 ? totalScore / answeredCount : 0;

  /* ─────────── ARCHセンサー・ロジック ─────────── */
  //   低: 平均 < 2.5   → 即刻変えるべき
  //   中: 2.5 ≤ 平均 < 4.0 → 相談すべきポイントあり
  //   高: 平均 ≥ 4.0  → 長く付き合うべき良医院
  const tier: "low" | "mid" | "high" =
    averageScore < 2.5 ? "low" : averageScore < 4.0 ? "mid" : "high";

  const lowestCategories = QUESTIONS.filter(
    (q) => (answers[q.id] ?? 5) <= 3
  ).map((q) => q.label);

  const handleSelect = (qid: string, value: number) => {
    setAnswers((prev) => ({ ...prev, [qid]: value }));
  };

  const canSubmit = answeredCount === QUESTIONS.length;

  return (
    <article className="bg-arch-cream">
      {/* ──────────────────────────────────────────
          HERO — editorial cover, deep forest
      ────────────────────────────────────────── */}
      <section className="relative bg-arch-forest text-arch-cream overflow-hidden pt-24 md:pt-32 pb-20 md:pb-28">
        <CornerMarkers
          topRight="DIAGNOSTIC — 04 / 品質診断"
          bottomLeft="SERVICE"
          bottomRight="04 / 05"
          theme="dark"
        />
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <SectionTag category="DIAGNOSTIC" number="04" label="訪問歯科・品質診断エンジン" theme="dark" />

          <div className="mt-8 md:mt-12 grid md:grid-cols-12 gap-8 md:gap-12 items-end">
            <div className="md:col-span-8">
              <h1 className="display-jp text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl text-arch-cream leading-[1.1]">
                今の歯科医院、
                <br />
                本当に<span className="text-arch-gold">施設の味方</span>？
              </h1>
              <p className="mono-micro text-arch-sage/70 mt-6">
                （旧：施設向け歯科評価ツール）
              </p>
            </div>
            <div className="md:col-span-4">
              <div className="border-l-2 border-arch-gold pl-5">
                <p className="mono-label text-arch-gold mb-3">CORE MESSAGE</p>
                <p className="text-base md:text-lg text-arch-sage leading-loose">
                  6項目×5段階で、<br />今の訪問歯科を"診断"する。
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14 md:mt-20 grid md:grid-cols-12 gap-8 items-end border-t border-arch-rule-dark pt-8">
            <p className="md:col-span-8 text-sm md:text-base text-arch-sage/90 leading-loose max-w-2xl">
              6つの指標を5段階で答えるだけ。元 医療グループ歯科事務局長・鈴木集の現場知見をロジックに落とし込んだ「ARCHセンサー」が、あなたの施設が現在ご契約中の訪問歯科医院の"品質"を診断します。
            </p>
            <div className="md:col-span-4 flex md:justify-end">
              <a
                href="#diagnostic"
                className="inline-flex items-center gap-3 bg-arch-cream text-arch-forest px-7 py-4 text-sm font-bold tracking-[0.15em] hover:bg-arch-gold transition-colors"
              >
                無料で診断を始める
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          WHY NOW — なぜ品質診断が必要なのか
      ────────────────────────────────────────── */}
      <section className="bg-arch-cream py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-baseline justify-between border-b border-arch-rule pb-4 mb-12 md:mb-16">
            <SectionTag category="WHY NOW" number="02" label="なぜ今、品質診断が必要か" />
            <p className="mono-micro text-arch-ink-muted hidden sm:block">03 CASES</p>
          </div>

          <h2 className="display-jp text-3xl md:text-4xl text-arch-ink mb-12 md:mb-16 max-w-3xl leading-[1.2]">
            その歯科医院、
            <br />
            <span className="text-arch-forest">"惰性" で続けていませんか？</span>
          </h2>
          <p className="text-base text-arch-ink-soft leading-loose max-w-3xl mb-12 md:mb-16">
            「昔からお世話になっているから」「他を知らないから」という理由だけで、本来守るべき入居者様の口腔健康と、現場スタッフの負担が犠牲になっていませんか？ まずは"今"の状態を可視化するところから始めましょう。
          </p>

          <div className="grid md:grid-cols-3 gap-0 border-t border-arch-rule">
            {WHY_CASES.map((item, i) => (
              <div
                key={i}
                className={`border-b border-arch-rule md:border-b-0 ${i < WHY_CASES.length - 1 ? "md:border-r" : ""} py-8 md:py-10 md:px-8 ${i === 0 ? "md:pl-0" : ""}`}
              >
                <p className="mono-label text-arch-moss mb-4 tabular-nums">
                  RISK — {String(i + 1).padStart(2, "0")}
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
          DIAGNOSTIC ENGINE — 6項目 × 5段階
      ────────────────────────────────────────── */}
      <section id="diagnostic" className="bg-arch-cream-raised py-20 md:py-28 border-t border-arch-rule">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <div className="flex items-baseline justify-between border-b border-arch-rule pb-4 mb-12 md:mb-16">
            <SectionTag category="ENGINE" number="03" label="診断エンジン" />
            <p className="mono-micro text-arch-ink-muted hidden sm:block">6 × 5 LIKERT</p>
          </div>

          <h2 className="display-jp text-3xl md:text-4xl text-arch-ink mb-6 max-w-3xl leading-[1.2]">
            <span className="text-arch-forest">6項目 × 5段階</span>で、
            <br />
            いまの歯科医院を診断する。
          </h2>
          <p className="text-base text-arch-ink-soft leading-loose mb-12 md:mb-14 max-w-2xl">
            現時点でご契約中／検討中の訪問歯科医院について、各項目を直感的に回答してください。
          </p>

          {/* 進捗バー */}
          <div className="mb-12 border-t border-b border-arch-rule py-5">
            <div className="flex items-center justify-between mono-micro text-arch-ink-muted mb-3">
              <span>
                PROGRESS / 回答済み: <strong className="text-arch-forest tabular-nums">{answeredCount}</strong> / {QUESTIONS.length}
              </span>
              <span className="text-arch-forest tabular-nums">
                {answeredCount > 0 ? `AVG ${averageScore.toFixed(1)} / 5.0` : "未回答"}
              </span>
            </div>
            <div className="h-1 bg-arch-rule">
              <div
                className="h-full bg-arch-forest transition-all duration-500"
                style={{ width: `${(answeredCount / QUESTIONS.length) * 100}%` }}
              />
            </div>
          </div>

          {/* 質問 */}
          <div className="space-y-6">
            {QUESTIONS.map((q, i) => (
              <div
                key={q.id}
                className="bg-arch-cream border border-arch-rule p-6 md:p-8"
              >
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="display-jp text-3xl md:text-4xl text-arch-forest/40 tabular-nums leading-none shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <h3 className="display-jp text-lg md:text-xl text-arch-ink mb-2 leading-snug">
                      {q.label}
                    </h3>
                    <p className="text-sm text-arch-ink-soft leading-loose">
                      {q.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-5 gap-2 sm:gap-3 border-t border-arch-rule pt-5">
                  {[1, 2, 3, 4, 5].map((v) => {
                    const selected = answers[q.id] === v;
                    return (
                      <button
                        key={v}
                        type="button"
                        onClick={() => handleSelect(q.id, v)}
                        className={`py-3 sm:py-4 text-sm sm:text-base font-bold tabular-nums transition-all ${
                          selected
                            ? "bg-arch-forest text-arch-cream"
                            : "bg-arch-cream-raised text-arch-ink-muted border border-arch-rule hover:border-arch-forest hover:text-arch-forest"
                        }`}
                      >
                        {v}
                      </button>
                    );
                  })}
                </div>
                <div className="mt-3 flex justify-between mono-micro text-arch-ink-muted">
                  <span>{SCALE_LABELS[0]}</span>
                  <span>{SCALE_LABELS[4]}</span>
                </div>
              </div>
            ))}
          </div>

          {/* 診断ボタン */}
          <div className="mt-12 text-center">
            <button
              type="button"
              disabled={!canSubmit}
              onClick={() => setSubmitted(true)}
              className={`inline-flex items-center gap-3 px-10 py-5 text-base sm:text-lg font-bold tracking-[0.15em] transition-all ${
                canSubmit
                  ? "bg-arch-forest hover:bg-arch-gold hover:text-arch-ink text-arch-cream"
                  : "bg-arch-cream-raised text-arch-ink-muted border border-arch-rule cursor-not-allowed"
              }`}
            >
              <Sparkles size={20} />
              ARCHセンサーで診断する
            </button>
            {!canSubmit && (
              <p className="mono-micro text-arch-ink-muted mt-4">
                全項目にご回答いただくと診断できます
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          RESULT — 診断結果（条件分岐）
      ────────────────────────────────────────── */}
      {submitted && canSubmit && (
        <section
          className="bg-arch-cream py-20 md:py-28 border-t border-arch-rule scroll-mt-24"
          id="result"
        >
          <div className="max-w-4xl mx-auto px-5 sm:px-8">
            <div className="flex items-baseline justify-between border-b border-arch-rule pb-4 mb-12">
              <SectionTag category="RESULT" number="04" label="ARCHセンサー 診断結果" />
              <p className="mono-micro text-arch-ink-muted tabular-nums">
                {totalScore} / {maxScore} (AVG {averageScore.toFixed(1)})
              </p>
            </div>

            {/* LOW — 即刻変えるべき */}
            {tier === "low" && (
              <div className="border-2 border-arch-danger bg-arch-cream-raised p-8 md:p-12">
                <div className="flex items-start gap-5 mb-6 pb-6 border-b border-arch-danger/30">
                  <div className="w-12 h-12 bg-arch-danger flex items-center justify-center shrink-0">
                    <AlertTriangle className="text-arch-cream" size={24} />
                  </div>
                  <div>
                    <p className="mono-label text-arch-danger mb-2">LOW — 危険水域</p>
                    <h3 className="display-jp text-3xl md:text-4xl text-arch-danger leading-snug">
                      即刻変えるべき！
                    </h3>
                  </div>
                </div>
                <p className="text-sm md:text-base text-arch-ink-soft leading-loose mb-8">
                  このままご契約を続けると、入居者様のQOLと施設スタッフの負担、そして施設全体の信頼にリスクを及ぼす可能性があります。ARCHが
                  <strong className="text-arch-danger">円滑な切り替えをプロデュース</strong>
                  します。既存契約の解約調整、次の歯科医院の選定、現場への説明まで、すべて伴走します。
                </p>
                <div className="bg-arch-cream border border-arch-danger/30 p-6 mb-6">
                  <p className="mono-label text-arch-danger mb-4">
                    切り替えプロデュース・パッケージ
                  </p>
                  <ul className="space-y-3">
                    {[
                      "現行歯科医院との解約調整サポート",
                      "ARCH審査済の訪問歯科医院リストをご提示",
                      "現場スタッフへの説明会・引き継ぎ伴走",
                    ].map((t) => (
                      <li key={t} className="flex items-start gap-3">
                        <Check className="text-arch-danger shrink-0 mt-1" size={15} />
                        <span className="text-sm text-arch-ink">{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* MID — 相談すべき */}
            {tier === "mid" && (
              <div className="border-2 border-arch-gold bg-arch-cream-raised p-8 md:p-12">
                <div className="flex items-start gap-5 mb-6 pb-6 border-b border-arch-gold/40">
                  <div className="w-12 h-12 bg-arch-gold flex items-center justify-center shrink-0">
                    <MessageSquare className="text-arch-ink" size={22} />
                  </div>
                  <div>
                    <p className="mono-label text-arch-gold mb-2">MID — 改善の余地あり</p>
                    <h3 className="display-jp text-3xl md:text-4xl text-arch-ink leading-snug">
                      現在の歯科医院と相談しましょう
                    </h3>
                  </div>
                </div>
                <p className="text-sm md:text-base text-arch-ink-soft leading-loose mb-8">
                  悪くはないものの、このままでは現場に我慢を強いるポイントがいくつか見られます。以下の項目を
                  <strong className="text-arch-ink">具体的な相談項目</strong>
                  として、現在の歯科医院と建設的に話し合うことをお勧めします。
                </p>
                <div className="bg-arch-cream border border-arch-gold/40 p-6 mb-6">
                  <p className="mono-label text-arch-gold mb-4">相談すべき具体的ポイント</p>
                  {lowestCategories.length > 0 ? (
                    <ul className="space-y-3">
                      {lowestCategories.map((cat) => (
                        <li key={cat} className="flex items-start gap-3">
                          <span className="text-arch-gold font-bold shrink-0 mt-0.5">●</span>
                          <span className="text-sm text-arch-ink-soft">
                            <strong className="text-arch-ink">{cat}</strong>について、具体的な改善指標と期限を設定
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-arch-ink-soft">
                      全体的にはバランスが取れています。定期レビューの仕組み化をお勧めします。
                    </p>
                  )}
                </div>
                <p className="mono-micro text-arch-ink-muted">
                  ※ ARCHでは「歯科医院側との交渉代行」や「第三者立ち会いミーティング」もご支援可能です。
                </p>
              </div>
            )}

            {/* HIGH — 長く付き合うべき */}
            {tier === "high" && (
              <div className="border-2 border-arch-forest bg-arch-cream-raised p-8 md:p-12">
                <div className="flex items-start gap-5 mb-6 pb-6 border-b border-arch-forest/30">
                  <div className="w-12 h-12 bg-arch-forest flex items-center justify-center shrink-0">
                    <ShieldCheck className="text-arch-cream" size={24} />
                  </div>
                  <div>
                    <p className="mono-label text-arch-forest mb-2">HIGH — 良好</p>
                    <h3 className="display-jp text-3xl md:text-4xl text-arch-forest leading-snug">
                      素晴らしい歯科医院です
                    </h3>
                  </div>
                </div>
                <p className="text-sm md:text-base text-arch-ink-soft leading-loose mb-8">
                  稀有なほど質の高いパートナーです。この関係を
                  <strong className="text-arch-forest">長く維持する</strong>
                  ために、以下のポイントを押さえておきましょう。
                </p>
                <div className="bg-arch-cream border border-arch-forest/30 p-6 mb-6">
                  <p className="mono-label text-arch-forest mb-4">関係を持続させるコツ</p>
                  <ul className="space-y-3">
                    {[
                      "月1回の定例ミーティングで報告書・KPIを相互確認",
                      "担当DHの変更時は必ず引継ぎミーティングを実施",
                      "\"無言のサービス期待\" を避け、感謝と要望を言語化する",
                      "年1回、本診断エンジンで再診断して品質をモニタリング",
                    ].map((t) => (
                      <li key={t} className="flex items-start gap-3">
                        <Check className="text-arch-forest shrink-0 mt-1" size={15} />
                        <span className="text-sm text-arch-ink-soft">{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}

            {/* 共通CTA */}
            <div className="mt-12 text-center">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-3 bg-arch-forest hover:bg-arch-gold hover:text-arch-ink text-arch-cream px-8 py-4 sm:py-5 text-sm sm:text-base font-bold tracking-[0.15em] transition-colors"
              >
                詳細な改善プランを鈴木に相談する
                <ArrowRight size={18} />
              </Link>
              <p className="mono-micro text-arch-ink-muted mt-4">
                ※ 初回オンライン相談は無料です。診断結果を直接ヒアリングし、具体的なネクストアクションをご提案します。
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ──────────────────────────────────────────
          LOGIC — ARCHセンサー・ロジックの根拠
      ────────────────────────────────────────── */}
      <section className="relative bg-arch-forest text-arch-cream py-20 md:py-28 overflow-hidden">
        <div className="absolute top-6 left-6 md:top-8 md:left-10 pointer-events-none">
          <span className="mono-label text-arch-sage/70">LOGIC — 05 / ARCHセンサー</span>
        </div>
        <div className="absolute top-6 right-6 md:top-8 md:right-10 pointer-events-none text-right">
          <span className="mono-micro text-arch-sage/60">3-TIER FRAMEWORK</span>
        </div>

        <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
          <p className="mono-label text-arch-gold mb-6">ABOUT THE LOGIC</p>
          <h2 className="display-jp text-4xl md:text-6xl text-arch-cream mb-6 max-w-3xl leading-[1.1]">
            「ARCHセンサー・
            <br />
            <span className="text-arch-gold">ロジック」</span>とは。
          </h2>
          <p className="text-base md:text-lg text-arch-sage/80 leading-loose max-w-2xl mb-16 md:mb-20">
            広域医療法人にて歯科事務局として経営再建を主導してきた代表・鈴木集の現場知見を、<strong className="text-arch-cream">定量評価に落とし込んだ独自の評価ロジック</strong>です。
          </p>

          <div className="grid md:grid-cols-3 gap-px bg-arch-rule-dark/60 border border-arch-rule-dark/60">
            {TIER_LEGEND.map((t, i) => (
              <div
                key={t.tier}
                className="bg-arch-forest p-8 md:p-10 flex flex-col min-h-[260px]"
              >
                <div className="flex items-start justify-between mb-6">
                  <p className="mono-micro text-arch-sage/60 tabular-nums">
                    TIER / 0{i + 1}
                  </p>
                  <span className="mono-micro text-arch-gold/70 tabular-nums">
                    0{i + 1} — 03
                  </span>
                </div>
                <p className="display-jp text-5xl md:text-6xl text-arch-gold leading-none mb-5">
                  {t.tier}
                </p>
                <div className="h-px bg-arch-gold/40 w-12 mb-5"></div>
                <p className="mono-label text-arch-cream mb-2 tabular-nums">{t.range}</p>
                <p className="text-sm text-arch-sage/85 leading-relaxed mt-auto">
                  {t.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
