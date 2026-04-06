import { ArrowRight, Check, CheckCircle2, Clock, Smartphone, FileText, Shield, Heart, UserCheck, AlertTriangle, Building, Stethoscope } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "介護施設様向け 訪問歯科マッチング | 合同会社ARCH",
  description:
    "スタッフが笑顔で働く歯科医院だから、入居者様にも笑顔が届く。ARCHが「人」で選んだ訪問歯科をマッチングします。",
};

export default function DentalMatchingPage() {
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
            スタッフが笑顔で働く歯科医院だから、
            <br />
            <span className="text-green-800">入居者様にも<br className="sm:hidden" />笑顔が届く。</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto mb-10 sm:mb-12">
            ARCHは単なる訪問歯科マッチングではありません。スタッフ定着率が高く、チーム文化が健全な歯科医院だけをお繋ぎします。人間関係が安定した歯科チームだからこそ、入居者様への一貫性のある、心からのケアが実現できるのです。
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
                title: "来る歯科医師が毎回違う。",
                body: "担当がコロコロ変わり、入居者様が不安を感じている。スタッフの入れ替わりが激しい歯科医院と組んでしまった。",
              },
              {
                title: "歯科のスタッフが疲弊しているのが伝わる。",
                body: "来てくれる歯科衛生士が明らかに疲れている。やっつけ仕事になっていて、ケアの質が下がっている。",
              },
              {
                title: "形だけの訪問歯科になっている。",
                body: "月に数回来るだけで、入居者様との信頼関係が築けていない。施設側としてもどう連携すればいいかわからない。",
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
                  <span className="border-b-2 border-green-300">「人が辞めない歯科医院」</span>
                  <br />
                  <span className="text-green-800">だけをご紹介</span>
                </h3>
                <p className="text-sm sm:text-base text-gray-500 leading-loose mb-6">
                  ARCHはスタッフ定着率と組織文化を審査基準にしています。人間関係が安定した歯科医院のスタッフは、心に余裕を持って患者様と向き合うことができます。一貫性のある、温かみのあるケアが、毎回同じ担当者から提供されるのです。
                </p>
                <div className="space-y-3">
                  {["スタッフ定着率を審査基準に", "チーム文化の健全性を確認", "担当者の継続性を担保"].map((t) => (
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
                      {["スタッフ定着率の実績", "組織の離職率が低い", "チーム内の信頼関係が構築されている"].map((c, i) => (
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
                <h4 className="font-bold text-gray-900 mb-2">スタッフ定着率を審査</h4>
                <p className="text-sm text-gray-500 leading-relaxed">離職率が低く、スタッフが長く働き続けたいと思える歯科医院のみを厳選</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <Heart className="text-green-700 mb-4" size={28} />
                <h4 className="font-bold text-gray-900 mb-2">チーム文化の確認</h4>
                <p className="text-sm text-gray-500 leading-relaxed">スタッフ同士の関係が良好で、職場環境が健全な組織文化を持つ歯科医院</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <UserCheck className="text-green-700 mb-4" size={28} />
                <h4 className="font-bold text-gray-900 mb-2">担当者の継続性を担保</h4>
                <p className="text-sm text-gray-500 leading-relaxed">毎回同じ衛生士や担当者が来訪。入居者様との信頼関係が深まります</p>
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
                      {["ケア記録", "信頼構築", "会話ログ", "ご家族情報", "連携事項", "個別対応"].map((label, i) => (
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
                  入居者様の<span className="border-b-2 border-green-300">「人生」に寄り添う</span>
                  <br />
                  <span className="text-green-800">ケア</span>
                </h3>
                <p className="text-sm sm:text-base text-gray-500 leading-loose mb-6">
                  ARCHがマッチングする歯科医院は、口腔ケアの「やり方」ではなく、入居者様という「人間」と向き合います。毎回同じ担当者が来ることで、入居者様の人生観やご家族との関係を深く理解し、その方に最適なケアを提供できるのです。
                </p>
                <div className="space-y-3">
                  {["一人ひとりに向き合うケア", "ご家族との信頼関係構築", "アプリで負担のない情報共有"].map((t) => (
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
                <Heart className="text-green-700 mb-4" size={28} />
                <h4 className="font-bold text-gray-900 mb-2">一人ひとりに向き合う</h4>
                <p className="text-sm text-gray-500 leading-relaxed">入居者様の人生経験や個性を尊重し、その方の価値観に沿ったケアを実現</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <UserCheck className="text-green-700 mb-4" size={28} />
                <h4 className="font-bold text-gray-900 mb-2">ご家族との信頼構築</h4>
                <p className="text-sm text-gray-500 leading-relaxed">継続した関係で家族の不安を払拭。口腔ケアについて真摯に相談できる関係へ</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <Smartphone className="text-green-700 mb-4" size={28} />
                <h4 className="font-bold text-gray-900 mb-2">負担のない情報共有</h4>
                <p className="text-sm text-gray-500 leading-relaxed">ケア内容やご家族との会話をアプリで記録。施設の引き継ぎ負担を最小化</p>
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
                  施設の<span className="border-b-2 border-green-300">「現場の声」を</span>
                  <br />
                  <span className="text-green-800">一番に聞く</span>
                </h3>
                <p className="text-sm sm:text-base text-gray-500 leading-loose mb-6">
                  ARCHは経営層だけでなく、毎日の現場で働く介護スタッフの声を最優先に聞きます。定期的にヒアリングを行い、問題が生じたときはARCHが間に入って迅速に解決します。施設の皆様が孤立することなく、パートナーシップを感じながら運用できる環境を実現します。
                </p>
                <div className="space-y-3">
                  {["定期的な現場ヒアリング", "迅速な問題解決の仲介", "施設スタッフの声を反映"].map((t) => (
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
                <Clock className="text-green-700 mb-4" size={28} />
                <h4 className="font-bold text-gray-900 mb-2">定期的な現場ヒアリング</h4>
                <p className="text-sm text-gray-500 leading-relaxed">3ヶ月ごと、現場スタッフから直接お話しを伺う。細かな課題もキャッチします</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <Shield className="text-green-700 mb-4" size={28} />
                <h4 className="font-bold text-gray-900 mb-2">迅速な問題解決</h4>
                <p className="text-sm text-gray-500 leading-relaxed">歯科と施設の間に問題が生じたとき、ARCHが仲介役となって迅速に解決</p>
              </div>
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <Heart className="text-green-700 mb-4" size={28} />
                <h4 className="font-bold text-gray-900 mb-2">スタッフの声を反映</h4>
                <p className="text-sm text-gray-500 leading-relaxed">現場からのフィードバックを歯科医院に伝え、より良い連携体制へ改善</p>
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
              { step: "01", title: "お問い合わせ", desc: "まずはお気軽にご相談ください。" },
              { step: "02", title: "施設の想いをヒアリング", desc: "入居者様のこと、現場の悩み、理想の連携像をお聞きします。" },
              { step: "03", title: "「人」で選んだ歯科医院を紹介", desc: "スタッフが安定し、人間力の高い歯科医院を厳選してご紹介。" },
              { step: "04", title: "連携スタート&継続フォロー", desc: "開始後も定期的に現場の声を確認。何かあればARCHが仲介。" },
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
