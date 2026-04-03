import { ArrowRight, Check, CheckCircle2, Clock, Smartphone, FileText, Shield, Heart, UserCheck, AlertTriangle, Building, Stethoscope } from "lucide-react";
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
          課題セクション - SmartHR風 左ボーダー
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
                title: "口腔ケアの丸投げ",
                body: "歯科が来てくれるのはいいが、日々の口腔ケアを現場に丸投げされて負担が重い。指導は理想論ばかり。",
              },
              {
                title: "質の低い歯科によるトラブル",
                body: "紹介された歯科の態度が悪く、入居者様やご家族からクレームが来る。施設の信頼が損なわれている。",
              },
              {
                title: "アナログな情報共有",
                body: "申し送りや情報共有が紙ベース。忙しい廊下での立ち話が引き継ぎの場になり、トラブルが絶えない。",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 border-l-4 border-l-red-400"
              >
                <h3 className="font-extrabold text-gray-900 text-base sm:text-lg mb-3">
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
          解決策 — SmartHR風 ナンバリング+2カラム+サブフィーチャー
      ────────────────────────────────────────── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <p className="text-center text-sm font-bold tracking-widest uppercase text-green-700 mb-4">
            Solution
          </p>
          <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6">
            ARCHのマッチングの<span className="text-green-800">3つの強み</span>
          </h2>
          <p className="text-center text-sm sm:text-base text-gray-400 mb-16 sm:mb-20 max-w-2xl mx-auto">
            施設と歯科、双方の現場を知るARCHだからこそ実現できるマッチングです。
          </p>
        </div>

        {/* Feature 01 */}
        <div className="bg-green-50/60 py-16 sm:py-24">
          <div className="max-w-5xl mx-auto px-5 sm:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <span className="text-green-700 text-sm font-bold tracking-widest">01</span>
                <h3 className="text-xl sm:text-2xl lg:text-[1.75rem] font-extrabold text-gray-900 leading-snug mt-3 mb-5">
                  <span className="border-b-2 border-green-300">現場の時短</span>にコミットする
                  <br />
                  <span className="text-green-800">歯科医院だけを厳選</span>
                </h3>
                <p className="text-sm sm:text-base text-gray-500 leading-loose mb-6">
                  理想論を押し付けず、限られた時間の中で最大の効果を出す「効率的なケアのポイント」を的確に指導できる歯科医院だけをご紹介します。
                </p>
                <div className="space-y-3">
                  {["介護現場の業務フローを理解した歯科のみ", "口腔ケア指導は実践的・短時間で完結", "現場スタッフの負担を最小化する運用設計"].map((t) => (
                    <div key={t} className="flex items-start gap-2.5">
                      <Check className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                      <p className="text-sm text-gray-600 font-medium">{t}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden lg:flex items-center justify-center">
                <div className="w-full max-w-sm aspect-[4/3] bg-white rounded-2xl border border-gray-200 shadow-sm flex items-center justify-center p-10">
                  <div className="text-center">
                    <p className="text-sm text-gray-400 font-medium mb-3">ARCH認定基準</p>
                    <div className="space-y-2.5 text-left">
                      {["現場業務フローの理解", "時短ケア指導の実績", "施設満足度の継続調査"].map((c, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="text-green-600 flex-shrink-0" size={16} />
                          <p className="text-sm text-gray-600 font-medium">{c}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 01 Sub-cards */}
          <div className="max-w-5xl mx-auto px-5 sm:px-8 mt-12 sm:mt-16">
            <div className="grid sm:grid-cols-3 gap-5">
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <Building className="text-green-700 mb-4" size={28} />
                <h4 className="font-bold text-gray-900 mb-2">介護現場の理解</h4>
                <p className="text-sm text-gray-500 leading-relaxed">入居者様の状態や施設の業務フローを深く理解した歯科医院のみを厳選</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <Clock className="text-green-700 mb-4" size={28} />
                <h4 className="font-bold text-gray-900 mb-2">実践的な指導</h4>
                <p className="text-sm text-gray-500 leading-relaxed">短時間で効果的なケアのポイントを実装できる、現場に寄り添った口腔ケア指導</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <UserCheck className="text-green-700 mb-4" size={28} />
                <h4 className="font-bold text-gray-900 mb-2">負担最小化</h4>
                <p className="text-sm text-gray-500 leading-relaxed">スタッフの心身的負担を最小化しながら、医療品質を維持する運用設計</p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 02 */}
        <div className="bg-white py-16 sm:py-24">
          <div className="max-w-5xl mx-auto px-5 sm:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <div className="hidden lg:flex items-center justify-center order-first">
                <div className="w-full max-w-sm aspect-[4/3] bg-gray-50 rounded-2xl border border-gray-200 flex items-center justify-center p-10">
                  <div className="text-center">
                    <div className="grid grid-cols-3 gap-3 mb-4">
                      {["報告書", "スケジュール", "申し送り", "写真記録", "同意書", "連絡事項"].map((label, i) => (
                        <div key={i} className="bg-white rounded-lg px-2 py-2 border border-gray-200 text-xs text-gray-500 font-medium">{label}</div>
                      ))}
                    </div>
                    <p className="text-xs text-gray-400 font-medium">すべてアプリで一元管理</p>
                  </div>
                </div>
              </div>
              <div>
                <span className="text-green-700 text-sm font-bold tracking-widest">02</span>
                <h3 className="text-xl sm:text-2xl lg:text-[1.75rem] font-extrabold text-gray-900 leading-snug mt-3 mb-5">
                  独自アプリによる、
                  <br />
                  <span className="text-green-800"><span className="border-b-2 border-green-300">ストレスフリー</span>な情報共有</span>
                </h3>
                <p className="text-sm sm:text-base text-gray-500 leading-loose mb-6">
                  忙しい廊下での引き留めや、紙の書類探しはもう不要です。ARCHの専用アプリを通じて、施設の好きなタイミングで必要な情報をすぐに確認できます。
                </p>
                <div className="space-y-3">
                  {["報告書・申し送りをアプリで即時共有", "施設の好きなタイミングで確認可能", "紙・口頭伝達のトラブルを根絶"].map((t) => (
                    <div key={t} className="flex items-start gap-2.5">
                      <Check className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                      <p className="text-sm text-gray-600 font-medium">{t}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Feature 02 Sub-cards */}
          <div className="max-w-5xl mx-auto px-5 sm:px-8 mt-12 sm:mt-16">
            <div className="grid sm:grid-cols-3 gap-5">
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <FileText className="text-green-700 mb-4" size={28} />
                <h4 className="font-bold text-gray-900 mb-2">即時報告共有</h4>
                <p className="text-sm text-gray-500 leading-relaxed">訪問後の報告書や申し送りをアプリでリアルタイム共有。紙の手間を削減</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <Smartphone className="text-green-700 mb-4" size={28} />
                <h4 className="font-bold text-gray-900 mb-2">いつでもアクセス</h4>
                <p className="text-sm text-gray-500 leading-relaxed">施設の都合に合わせて、好きな時間に必要な情報を確認できる柔軟性</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <Shield className="text-green-700 mb-4" size={28} />
                <h4 className="font-bold text-gray-900 mb-2">トラブル防止</h4>
                <p className="text-sm text-gray-500 leading-relaxed">記録が正確に共有されるため、口頭伝達のミスや情報漏れを完全に排除</p>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 03 */}
        <div className="bg-green-50/60 py-16 sm:py-24">
          <div className="max-w-5xl mx-auto px-5 sm:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <span className="text-green-700 text-sm font-bold tracking-widest">03</span>
                <h3 className="text-xl sm:text-2xl lg:text-[1.75rem] font-extrabold text-gray-900 leading-snug mt-3 mb-5">
                  患者様の尊厳と
                  <br />
                  <span className="text-green-800"><span className="border-b-2 border-green-300">利益を絶対に守る</span></span>
                </h3>
                <p className="text-sm sm:text-base text-gray-500 leading-loose mb-6">
                  お金儲け主義の歯科やブローカーを排除します。正しく訪問歯科を行い、患者様に真摯に向き合う「ARCH認定の質の高い医院」と連携することで、施設としての価値も向上します。
                </p>
                <div className="space-y-3">
                  {["営利目的の過剰治療を行う歯科を排除", "患者様第一の治療方針を担保", "施設としての医療提供品質を向上"].map((t) => (
                    <div key={t} className="flex items-start gap-2.5">
                      <Check className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                      <p className="text-sm text-gray-600 font-medium">{t}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden lg:flex items-center justify-center">
                <div className="w-full max-w-sm aspect-[4/3] bg-white rounded-2xl border border-gray-200 shadow-sm flex items-center justify-center p-10">
                  <div className="text-center">
                    <div className="text-5xl font-extrabold text-green-800 mb-2">無料</div>
                    <p className="text-sm text-gray-400 font-medium">施設側の費用負担は一切なし</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 03 Sub-cards */}
          <div className="max-w-5xl mx-auto px-5 sm:px-8 mt-12 sm:mt-16">
            <div className="grid sm:grid-cols-3 gap-5">
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <AlertTriangle className="text-green-700 mb-4" size={28} />
                <h4 className="font-bold text-gray-900 mb-2">営利目的を排除</h4>
                <p className="text-sm text-gray-500 leading-relaxed">不必要な治療や過剰な処置を行う歯科医院を徹底的に排除</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <Heart className="text-green-700 mb-4" size={28} />
                <h4 className="font-bold text-gray-900 mb-2">患者様第一主義</h4>
                <p className="text-sm text-gray-500 leading-relaxed">入居者様の健康と尊厳を第一に考える治療方針を確実に担保</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <Stethoscope className="text-green-700 mb-4" size={28} />
                <h4 className="font-bold text-gray-900 mb-2">医療品質向上</h4>
                <p className="text-sm text-gray-500 leading-relaxed">ARCH認定の質の高い医院との連携により、施設全体の医療水準を向上</p>
              </div>
            </div>
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { step: "01", title: "お問い合わせ", desc: "お電話またはフォームからお気軽にご相談ください。" },
              { step: "02", title: "詳細ヒアリング", desc: "入居者様の状態・現在の歯科連携の課題をお聞きします。" },
              { step: "03", title: "歯科医院のご紹介", desc: "ARCH品質基準を満たした歯科医院を厳選してご紹介。" },
              { step: "04", title: "連携スタート", desc: "連携開始後も定期フォロー。アプリ導入もサポート。" },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-2xl p-6 border border-gray-200 text-center"
              >
                <span className="text-3xl font-extrabold text-green-100 block mb-3">
                  {item.step}
                </span>
                <h3 className="font-extrabold text-gray-900 text-base mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
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
