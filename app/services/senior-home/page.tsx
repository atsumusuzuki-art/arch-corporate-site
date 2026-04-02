import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "介護事業者様向け 訪問歯科マッチング | 合同会社ARCH",
  description:
    "介護現場の負担を最小に。ARCHが質を担保した、本当に頼れる訪問歯科をマッチングします。",
};

export default function SeniorHomePage() {
  return (
    <article>
      {/* ──────────────────────────────────────────
          HERO
      ────────────────────────────────────────── */}
      <section className="bg-white pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-32 lg:pb-36">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-green-700 bg-green-50 px-4 py-1.5 rounded-full mb-8">
            介護事業者様向け
          </span>
          <h1 className="text-[1.75rem] sm:text-4xl lg:text-[2.75rem] font-extrabold leading-[1.35] tracking-tight text-gray-900 mb-6 sm:mb-8">
            介護現場の負担を最小に。
            <br />
            <span className="text-green-800">「丸投げ」ではない、<br className="sm:hidden" />本当に頼れる訪問歯科を<br className="sm:hidden" />マッチング。</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto mb-10 sm:mb-12">
            質の低い歯科によるトラブルや、現場への一方的な業務の押し付けを防ぎます。
            ARCHが質を担保した、本当に患者様と現場を第一に考える歯科医院だけをお繋ぎします。
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2.5 bg-green-800 hover:bg-green-900 text-white px-8 py-4 rounded-lg text-sm sm:text-base font-bold tracking-wider transition-colors shadow-lg shadow-green-800/20"
          >
            無料オンライン相談を予約する
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          課題セクション
      ────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <p className="text-center text-sm font-bold tracking-widest uppercase text-green-700 mb-4">
            Problem
          </p>
          <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-gray-900 mb-14 sm:mb-16">
            こんなお悩みありませんか？
          </h2>

          <div className="space-y-5 sm:space-y-6">
            {[
              {
                emoji: "😩",
                title: "口腔ケアの丸投げ",
                body: "歯科が来てくれるのはいいが、日々の口腔ケアを現場に丸投げされて負担が重い。指導は理想論ばかり。",
              },
              {
                emoji: "😠",
                title: "質の低い歯科によるトラブル",
                body: "紹介された歯科の態度が悪く、入居者様やご家族からクレームが来る。施設としての信頼が損なわれている。",
              },
              {
                emoji: "📝",
                title: "アナログな情報共有",
                body: "申し送りや情報共有が紙ベース。忙しい廊下での立ち話が引き継ぎの場になっていて、言った・言わないのトラブルが絶えない。",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm flex gap-5 items-start"
              >
                <span className="text-2xl sm:text-3xl flex-shrink-0 mt-0.5">{item.emoji}</span>
                <div>
                  <h3 className="font-extrabold text-gray-900 text-base sm:text-lg mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          解決策 — 3本柱
      ────────────────────────────────────────── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <p className="text-center text-sm font-bold tracking-widest uppercase text-green-700 mb-4">
            Solution
          </p>
          <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6">
            ARCHが選ばれる3つの理由
          </h2>
          <p className="text-center text-sm sm:text-base text-gray-400 mb-14 sm:mb-16 max-w-2xl mx-auto">
            施設と歯科、双方の現場を知るARCHだからこそ実現できるマッチングです。
          </p>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                num: "01",
                title: "「現場の時短」に\nコミットする歯科医院だけを厳選",
                body: "理想論を押し付けず、限られた時間の中で最大の効果を出す「効率的なケアのポイント」を的確に指導できる歯科医院だけをご紹介します。",
              },
              {
                num: "02",
                title: "独自アプリによる、\nストレスフリーな情報共有",
                body: "忙しい廊下での引き留めや、紙の書類探しはもう不要です。ARCHの専用アプリを通じて、施設の好きなタイミングで必要な情報をすぐに確認できます。",
              },
              {
                num: "03",
                title: "患者様の尊厳と\n利益を絶対に守る",
                body: "お金儲け主義の歯科やブローカーを排除します。正しく訪問歯科を行い、患者様に真摯に向き合う「ARCH認定の質の高い医院」と連携することで、施設としての価値も向上します。",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="bg-gray-50 rounded-2xl p-7 sm:p-9 border border-gray-100 flex flex-col"
              >
                <span className="text-4xl sm:text-5xl font-extrabold text-green-100 mb-5">
                  {item.num}
                </span>
                <h3 className="font-extrabold text-gray-900 text-base sm:text-lg leading-snug mb-4 whitespace-pre-line">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          具体的なメリット
      ────────────────────────────────────────── */}
      <section className="bg-green-900 py-20 sm:py-28 text-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <p className="text-center text-sm font-bold tracking-widest uppercase text-green-300 mb-4">
            Merit
          </p>
          <h2 className="text-center text-2xl sm:text-3xl font-extrabold mb-14 sm:mb-16">
            ARCH導入で施設に起きる変化
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            {[
              { title: "介護スタッフの負担軽減", desc: "現場の業務フローを理解した歯科医院が連携するため、口腔ケアの「丸投げ」がなくなります。" },
              { title: "アプリでスムーズな情報共有", desc: "申し送り・報告書・スケジュールを一元管理。紙や口頭伝達のストレスから解放されます。" },
              { title: "入居者様・ご家族の満足度向上", desc: "質の高い歯科医療を安定的に提供できることで、施設全体の信頼性が高まります。" },
              { title: "完全無料のマッチング", desc: "施設側の費用負担はゼロ。ARCHが厳選した歯科医院を、中立的な立場でご紹介します。" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur rounded-2xl p-7 sm:p-8 border border-white/10"
              >
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle2 className="text-green-300 flex-shrink-0 mt-0.5" size={20} />
                  <h3 className="font-extrabold text-white text-base sm:text-lg">{item.title}</h3>
                </div>
                <p className="text-green-100 text-sm leading-relaxed pl-8">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          ご利用の流れ
      ────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <p className="text-center text-sm font-bold tracking-widest uppercase text-green-700 mb-4">
            Flow
          </p>
          <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-gray-900 mb-14 sm:mb-16">
            ご利用の流れ
          </h2>

          <div className="space-y-6">
            {[
              { step: "01", title: "お問い合わせ", desc: "お電話またはフォームからお気軽にご相談ください。施設の状況を簡単にお伺いします。" },
              { step: "02", title: "詳細ヒアリング", desc: "入居者様の状態・現在の歯科連携の課題・ご希望条件などを詳しくお聞きします。" },
              { step: "03", title: "歯科医院のご紹介", desc: "条件に合致し、ARCHの品質基準を満たした歯科医院を厳選してご紹介します。" },
              { step: "04", title: "連携スタート・フォロー", desc: "連携開始後も定期的にフォローアップ。アプリ導入のサポートや、課題があれば迅速に対応します。" },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm flex gap-5 sm:gap-6 items-start"
              >
                <span className="text-3xl sm:text-4xl font-extrabold text-green-100 flex-shrink-0">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-extrabold text-gray-900 text-base sm:text-lg mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
