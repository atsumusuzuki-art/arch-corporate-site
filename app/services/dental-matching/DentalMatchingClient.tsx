"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  AlertTriangle,
  MessageSquare,
  ShieldCheck,
  Gauge,
  Sparkles,
} from "lucide-react";

/* ================================================================
   訪問歯科・品質診断エンジン
   （旧：介護施設向け 訪問歯科マッチング／施設向け歯科評価ツール）

   - 5段階のLikert尺度で、現在ご契約中／検討中の訪問歯科医院を
     施設側の立場から「品質診断」します。
   - 鈴木センサー・ロジックに基づき、合計スコアに応じて
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

export default function DentalMatchingClient() {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const totalScore = useMemo(
    () => Object.values(answers).reduce((sum, v) => sum + v, 0),
    [answers]
  );
  const answeredCount = Object.keys(answers).length;
  const maxScore = QUESTIONS.length * 5;
  const averageScore =
    answeredCount > 0 ? totalScore / answeredCount : 0;

  /* ─────────── 鈴木センサー・ロジック ─────────── */
  //   低: 平均 < 2.5   → 即刻変えるべき
  //   中: 2.5 ≤ 平均 < 4.0 → 相談すべきポイントあり
  //   高: 平均 ≥ 4.0  → 長く付き合うべき良医院
  const tier: "low" | "mid" | "high" =
    averageScore < 2.5 ? "low" : averageScore < 4.0 ? "mid" : "high";

  const lowestCategories = QUESTIONS
    .filter((q) => (answers[q.id] ?? 5) <= 3)
    .map((q) => q.label);

  const handleSelect = (qid: string, value: number) => {
    setAnswers((prev) => ({ ...prev, [qid]: value }));
  };

  const canSubmit = answeredCount === QUESTIONS.length;

  return (
    <article>
      {/* ──────────────────────────────────────────
          HERO
      ────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-950 pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-32 lg:pb-36 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.08),transparent_50%)]"></div>
        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <span className="inline-block text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase text-green-200 bg-white/10 backdrop-blur px-4 py-1.5 rounded-full mb-6 border border-white/20">
            Service 04 — Dental Quality Diagnostic Engine
          </span>
          <h1 className="font-extrabold leading-[1.25] tracking-tight text-white mb-3 sm:mb-4">
            <span className="block text-[1.6rem] sm:text-[2.2rem] lg:text-[2.7rem]">
              訪問歯科・<span className="text-yellow-300">品質診断エンジン</span>
            </span>
            <span className="block text-[0.85rem] sm:text-sm font-medium text-green-300 mt-2 tracking-wider">
              （ 旧：施設向け歯科評価ツール ）
            </span>
          </h1>
          <p className="text-lg sm:text-2xl lg:text-[1.6rem] font-bold text-green-100 leading-snug mt-6 mb-6 sm:mb-8">
            今の歯科医院、本当に<span className="text-yellow-300">施設の味方</span>ですか？
          </p>
          <p className="text-sm sm:text-base text-green-200/90 leading-relaxed max-w-2xl mx-auto mb-10 sm:mb-12">
            6つの指標を5段階で答えるだけ。元 医療グループ歯科事務局長・鈴木集の現場知見をロジックに落とし込んだ
            「鈴木センサー」が、あなたの施設が現在ご契約中の訪問歯科医院の"品質"を診断します。
          </p>
          <a
            href="#diagnostic"
            className="inline-flex items-center gap-2.5 bg-white hover:bg-green-50 text-green-900 px-8 py-4 rounded-lg text-sm sm:text-base font-bold tracking-wider transition-colors shadow-lg shadow-black/20"
          >
            無料で診断を始める
            <ArrowRight size={18} />
          </a>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          なぜ品質診断が必要なのか
      ────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <p className="text-center text-sm font-bold tracking-widest uppercase text-green-700 mb-4">
            Why Now
          </p>
          <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6">
            その歯科医院、<span className="text-green-800">"惰性"で続けていませんか？</span>
          </h2>
          <p className="text-center text-sm sm:text-base text-gray-500 leading-relaxed mb-14 sm:mb-16 max-w-3xl mx-auto">
            「昔からお世話になっているから」「他を知らないから」という理由だけで、
            本来守るべき入居者様の口腔健康と、現場スタッフの負担が犠牲になっていませんか？
            まずは"今"の状態を可視化するところから始めましょう。
          </p>

          <div className="grid sm:grid-cols-3 gap-5 sm:gap-6">
            {[
              {
                icon: <AlertTriangle className="text-red-500" size={22} />,
                title: "現場のクレーム",
                body: "入居者様・ご家族からの態度への苦情、ケア指導の理想論が負担に。",
              },
              {
                icon: <Gauge className="text-yellow-500" size={22} />,
                title: "報告書が読めない",
                body: "KPIが見えず、現場スタッフが「何がどうなっているか」分からない。",
              },
              {
                icon: <ShieldCheck className="text-green-600" size={22} />,
                title: "コンプラ不安",
                body: "算定根拠・同意取得・記録管理が曖昧で、施設側にリスクが残る。",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-200"
              >
                <div className="w-11 h-11 rounded-full bg-gray-50 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="font-extrabold text-gray-900 text-base sm:text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          診断エンジン本体
      ────────────────────────────────────────── */}
      <section id="diagnostic" className="bg-white py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <p className="text-center text-sm font-bold tracking-widest uppercase text-green-700 mb-4">
            Diagnostic Engine
          </p>
          <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
            <span className="text-green-800">6項目 × 5段階</span>で、いまの歯科医院を診断
          </h2>
          <p className="text-center text-sm sm:text-base text-gray-500 leading-relaxed mb-10 sm:mb-14">
            現時点でご契約中／検討中の訪問歯科医院について、各項目を直感的に回答してください。
          </p>

          {/* 進捗バー */}
          <div className="mb-10">
            <div className="flex items-center justify-between text-xs sm:text-sm font-bold text-gray-500 mb-2">
              <span>回答済み: {answeredCount} / {QUESTIONS.length}</span>
              <span className="text-green-700">
                {answeredCount > 0 ? `平均: ${averageScore.toFixed(1)} / 5.0` : "未回答"}
              </span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-green-600 to-green-800 transition-all duration-500"
                style={{
                  width: `${(answeredCount / QUESTIONS.length) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* 質問 */}
          <div className="space-y-8">
            {QUESTIONS.map((q, i) => (
              <div
                key={q.id}
                className="bg-gray-50 rounded-2xl p-6 sm:p-7 border border-gray-100"
              >
                <div className="flex items-start gap-3 mb-4">
                  <span className="shrink-0 w-8 h-8 rounded-full bg-green-800 text-white text-xs font-bold flex items-center justify-center">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <h3 className="font-extrabold text-gray-900 text-base sm:text-lg mb-1">
                      {q.label}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                      {q.description}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-5 gap-2 sm:gap-3">
                  {[1, 2, 3, 4, 5].map((v) => {
                    const selected = answers[q.id] === v;
                    return (
                      <button
                        key={v}
                        type="button"
                        onClick={() => handleSelect(q.id, v)}
                        className={`py-3 sm:py-4 rounded-lg text-sm sm:text-base font-bold transition-all ${
                          selected
                            ? "bg-green-800 text-white shadow-md shadow-green-900/20 scale-[1.03]"
                            : "bg-white text-gray-400 border border-gray-200 hover:border-green-300 hover:text-green-700"
                        }`}
                      >
                        {v}
                      </button>
                    );
                  })}
                </div>
                <div className="mt-2 flex justify-between text-[10px] sm:text-xs text-gray-400 font-medium">
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
              className={`inline-flex items-center gap-2.5 px-10 py-5 rounded-lg text-base sm:text-lg font-bold tracking-wider transition-all ${
                canSubmit
                  ? "bg-green-800 hover:bg-green-900 text-white shadow-lg shadow-green-900/20"
                  : "bg-gray-100 text-gray-400 cursor-not-allowed"
              }`}
            >
              <Sparkles size={20} />
              鈴木センサーで診断する
            </button>
            {!canSubmit && (
              <p className="text-xs text-gray-400 mt-4">
                全項目にご回答いただくと診断できます
              </p>
            )}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          診断結果（条件分岐）
      ────────────────────────────────────────── */}
      {submitted && canSubmit && (
        <section className="bg-gradient-to-b from-white to-green-50/60 py-20 sm:py-28 scroll-mt-24" id="result">
          <div className="max-w-3xl mx-auto px-5 sm:px-8">
            <p className="text-center text-sm font-bold tracking-widest uppercase text-green-700 mb-4">
              Result
            </p>
            <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-gray-900 mb-2">
              鈴木センサーの診断結果
            </h2>
            <p className="text-center text-sm sm:text-base text-gray-500 mb-10">
              合計スコア
              <span className="text-green-800 font-bold text-lg mx-1">
                {totalScore}
              </span>
              / {maxScore}（平均 {averageScore.toFixed(1)} / 5.0）
            </p>

            {/* LOW — 即刻変えるべき */}
            {tier === "low" && (
              <div className="bg-red-50 border-2 border-red-200 rounded-3xl p-8 sm:p-10">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 rounded-full bg-red-500 flex items-center justify-center shrink-0">
                    <AlertTriangle className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-widest text-red-600 mb-1">
                      LOW — 危険水域
                    </p>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-red-700 leading-snug">
                      ⚠️ 即刻変えるべき！
                    </h3>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-700 leading-loose mb-6">
                  このままご契約を続けると、入居者様のQOLと施設スタッフの負担、そして施設全体の信頼にリスクを及ぼす可能性があります。
                  ARCHが<strong className="text-red-700">円滑な切り替えをプロデュース</strong>します。既存契約の解約調整、次の歯科医院の選定、現場への説明まで、すべて伴走します。
                </p>
                <div className="bg-white rounded-2xl p-5 mb-6 border border-red-100">
                  <p className="text-xs font-bold text-red-600 mb-2 tracking-wider">
                    切り替えプロデュース・パッケージ
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start gap-2">
                      <Check className="text-red-500 shrink-0 mt-0.5" size={15} />
                      現行歯科医院との解約調整サポート
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="text-red-500 shrink-0 mt-0.5" size={15} />
                      ARCH審査済の訪問歯科医院リストをご提示
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="text-red-500 shrink-0 mt-0.5" size={15} />
                      現場スタッフへの説明会・引き継ぎ伴走
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* MID — 相談すべき */}
            {tier === "mid" && (
              <div className="bg-yellow-50 border-2 border-yellow-200 rounded-3xl p-8 sm:p-10">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center shrink-0">
                    <MessageSquare className="text-white" size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-widest text-yellow-700 mb-1">
                      MID — 改善の余地あり
                    </p>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-yellow-800 leading-snug">
                      💬 現在の歯科医院と相談しましょう
                    </h3>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-700 leading-loose mb-6">
                  悪くはないものの、このままでは現場に我慢を強いるポイントがいくつか見られます。
                  以下の項目を<strong className="text-yellow-800">具体的な相談項目</strong>として、現在の歯科医院と建設的に話し合うことをお勧めします。
                </p>
                <div className="bg-white rounded-2xl p-5 mb-6 border border-yellow-100">
                  <p className="text-xs font-bold text-yellow-700 mb-3 tracking-wider">
                    相談すべき具体的ポイント
                  </p>
                  {lowestCategories.length > 0 ? (
                    <ul className="space-y-2 text-sm text-gray-700">
                      {lowestCategories.map((cat) => (
                        <li key={cat} className="flex items-start gap-2">
                          <span className="text-yellow-500 font-bold shrink-0">●</span>
                          <span>
                            <strong>{cat}</strong>について、具体的な改善指標と期限を設定
                          </span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-sm text-gray-500">
                      全体的にはバランスが取れています。定期レビューの仕組み化をお勧めします。
                    </p>
                  )}
                </div>
                <p className="text-xs text-gray-500 leading-relaxed">
                  ※ ARCHでは「歯科医院側との交渉代行」や「第三者立ち会いミーティング」もご支援可能です。
                </p>
              </div>
            )}

            {/* HIGH — 長く付き合うべき */}
            {tier === "high" && (
              <div className="bg-green-50 border-2 border-green-200 rounded-3xl p-8 sm:p-10">
                <div className="flex items-start gap-4 mb-5">
                  <div className="w-12 h-12 rounded-full bg-green-700 flex items-center justify-center shrink-0">
                    <ShieldCheck className="text-white" size={24} />
                  </div>
                  <div>
                    <p className="text-xs font-bold tracking-widest text-green-700 mb-1">
                      HIGH — 良好
                    </p>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-green-800 leading-snug">
                      ✅ 素晴らしい歯科医院です
                    </h3>
                  </div>
                </div>
                <p className="text-sm sm:text-base text-gray-700 leading-loose mb-6">
                  稀有なほど質の高いパートナーです。この関係を<strong className="text-green-800">長く維持する</strong>ために、以下のポイントを押さえておきましょう。
                </p>
                <div className="bg-white rounded-2xl p-5 mb-6 border border-green-100">
                  <p className="text-xs font-bold text-green-700 mb-3 tracking-wider">
                    関係を持続させるコツ
                  </p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start gap-2">
                      <Check className="text-green-600 shrink-0 mt-0.5" size={15} />
                      月1回の定例ミーティングで報告書・KPIを相互確認
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="text-green-600 shrink-0 mt-0.5" size={15} />
                      担当DHの変更時は必ず引継ぎミーティングを実施
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="text-green-600 shrink-0 mt-0.5" size={15} />
                      "無言のサービス期待"を避け、感謝と要望を言語化する
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="text-green-600 shrink-0 mt-0.5" size={15} />
                      年1回、本診断エンジンで再診断して品質をモニタリング
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* 共通CTA */}
            <div className="mt-10 text-center">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2.5 bg-green-800 hover:bg-green-900 text-white px-8 py-4 sm:py-5 rounded-lg text-sm sm:text-base font-bold tracking-wider transition-colors shadow-lg shadow-green-900/20"
              >
                詳細な改善プランを鈴木に相談する
                <ArrowRight size={18} />
              </Link>
              <p className="text-xs text-gray-400 mt-4">
                ※ 初回オンライン相談は無料です。診断結果を直接ヒアリングし、具体的なネクストアクションをご提案します。
              </p>
            </div>
          </div>
        </section>
      )}

      {/* ──────────────────────────────────────────
          ロジックの根拠（鈴木センサー）
      ────────────────────────────────────────── */}
      <section className="bg-green-900 py-20 sm:py-28 text-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <p className="text-center text-sm font-bold tracking-widest uppercase text-green-300 mb-4">
            About the Logic
          </p>
          <h2 className="text-center text-2xl sm:text-3xl font-extrabold mb-6">
            「鈴木センサー・ロジック」とは
          </h2>
          <p className="text-center text-sm sm:text-base text-green-100 leading-loose max-w-3xl mx-auto mb-10">
            広域医療法人にて歯科事務局として経営再建を主導してきた代表・鈴木集の現場知見を、
            定量評価に落とし込んだ独自の評価ロジックです。
          </p>

          <div className="grid sm:grid-cols-3 gap-5 sm:gap-6">
            {[
              {
                tier: "LOW",
                range: "平均 1.0 – 2.4",
                color: "from-red-500 to-red-700",
                label: "即刻変更を推奨",
              },
              {
                tier: "MID",
                range: "平均 2.5 – 3.9",
                color: "from-yellow-500 to-yellow-700",
                label: "改善要相談",
              },
              {
                tier: "HIGH",
                range: "平均 4.0 – 5.0",
                color: "from-green-500 to-green-700",
                label: "長期継続推奨",
              },
            ].map((t) => (
              <div
                key={t.tier}
                className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/10"
              >
                <div
                  className={`inline-block text-[10px] font-bold tracking-widest uppercase text-white bg-gradient-to-r ${t.color} px-3 py-1 rounded-full mb-3`}
                >
                  {t.tier}
                </div>
                <p className="text-xs text-green-300 mb-2">{t.range}</p>
                <p className="font-bold text-white">{t.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
