import {
  ArrowRight,
  Check,
  Users,
  Heart,
  MessageSquare,
  Zap,
  TrendingUp,
  Shield,
  UserCheck,
  Handshake,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "営業コンサルティング | 合同会社ARCH",
  description:
    "営業しなくても選ばれる医院へ。スタッフ定着と信頼関係が生み出す自然な紹介の連鎖。ARCHの人間中心の営業戦略。",
};

export default function SalesPage() {
  return (
    <article>
      {/* ──────────────────────────────────────────
          HERO
      ────────────────────────────────────────── */}
      <section className="bg-white pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-32 lg:pb-36">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-green-700 bg-green-50 px-4 py-1.5 rounded-full mb-8">
            営業コンサルティング
          </span>
          <h1 className="text-[1.75rem] sm:text-4xl lg:text-[2.75rem] font-extrabold leading-[1.35] tracking-tight text-gray-900 mb-6 sm:mb-8">
            営業しなくても、
            <br className="hidden sm:block" />
            選ばれる医院へ。
            <br />
            <span className="text-green-800">信頼と人間関係が<br className="sm:hidden" />生み出す自然な紹介の連鎖。</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto mb-10 sm:mb-12">
            営業テクニックや営業ツールはいりません。スタッフが定着し、ケアが本当に良くなれば、施設から自然と選ばれます。信頼を基盤とした組織づくりで、紹介の連鎖が生まれる医院を実現しましょう。
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
          課題セクション（左ボーダーアクセント）
      ────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <p className="text-center text-sm font-bold tracking-widest uppercase text-green-700 mb-4">
            Problem
          </p>
          <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-gray-900 mb-14 sm:mb-16">
            こんなお悩みありませんか？
          </h2>

          <div className="space-y-5">
            {[
              {
                title: "「営業テクニック」を学んでも、結果が出ない。",
                body: "セミナーで学んだトークスクリプトも、テンプレートの営業ツールも、現場では全く通用しない。人間関係は型にはめられない。",
              },
              {
                title: "「数字は上がったが、スタッフが疲弊している。」",
                body: "無理な営業ノルマでスタッフのモチベーションが下がり、離職につながっている。本末転倒だ。",
              },
              {
                title: "「紹介してもらった施設との関係が続かない。」",
                body: "ブローカー経由で繋がった施設は、お金の関係でしかない。信頼がないから、すぐに他に乗り換えられる。",
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
          解決策 — SmartHR風 ナンバリング+2カラム + サブフィーチャー
      ────────────────────────────────────────── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <p className="text-center text-sm font-bold tracking-widest uppercase text-green-700 mb-4">
            Solution
          </p>
          <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6">
            ARCHの営業コンサルティングの<span className="text-green-800">3つの強み</span>
          </h2>
          <p className="text-center text-sm sm:text-base text-gray-400 mb-16 sm:mb-20 max-w-2xl mx-auto">
            営業テクニックではなく、信頼を基盤とした組織づくり。スタッフが定着し、ケアの質が上がれば、施設からの指名と紹介は自然に生まれます。
          </p>
        </div>

        {/* Feature 01 - 人が辞めない医院が選ばれる */}
        <div className="bg-green-50/60 py-16 sm:py-24">
          <div className="max-w-5xl mx-auto px-5 sm:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <span className="text-green-700 text-sm font-bold tracking-widest">01</span>
                <h3 className="text-xl sm:text-2xl lg:text-[1.75rem] font-extrabold text-gray-900 leading-snug mt-3 mb-5">
                  「人が辞めない医院」は、
                  <br />
                  <span className="text-green-800">自然と<span className="border-b-2 border-green-300">選ばれる</span></span>
                </h3>
                <p className="text-sm sm:text-base text-gray-500 leading-loose mb-6">
                  営業テクニックより大切なのは、スタッフの定着と本当に良いケアです。スタッフが長く働き、ケアの質が高まれば、施設はそれを見て自然と紹介してくれます。最強の営業は、幸せなスタッフと質の高いケアです。
                </p>
                <div className="space-y-3">
                  {["スタッフ定着が最強の営業になる仕組み", "質の高いケアが自然な口コミを生む", "組織力が信頼の源泉になる"].map((t) => (
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
                    <Heart className="text-green-800 mx-auto mb-4" size={48} />
                    <p className="text-base text-gray-600 font-medium">スタッフの幸福度が</p>
                    <p className="text-base text-gray-600 font-medium">施設への信頼に変わる</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sub-feature cards for Feature 01 */}
          <div className="max-w-5xl mx-auto px-5 sm:px-8 mt-12 sm:mt-16">
            <div className="grid sm:grid-cols-3 gap-5">
              {[
                {
                  icon: Users,
                  title: "スタッフ定着が最強の営業",
                  desc: "人が辞めない医院には、必然的に優秀なスタッフが集まります。施設はそれを見て、信頼して依頼します。",
                },
                {
                  icon: TrendingUp,
                  title: "質の高いケアが口コミを生む",
                  desc: "営業ツールより、実際のケアの質。良い対応をすれば、施設スタッフから自然と紹介が広がります。",
                },
                {
                  icon: Shield,
                  title: "組織力が信頼の源泉",
                  desc: "属人的ではなく、誰がやっても高品質。その安定感が、施設から選ばれ続ける理由になります。",
                },
              ].map((card, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200">
                  <card.icon className="text-green-700 mb-4" size={28} />
                  <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">{card.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Feature 02 - 施設の本当の困りごとを解決するコミュニケーション */}
        <div className="bg-white py-16 sm:py-24">
          <div className="max-w-5xl mx-auto px-5 sm:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <div className="hidden lg:flex items-center justify-center order-first">
                <div className="w-full max-w-sm aspect-[4/3] bg-gray-50 rounded-2xl border border-gray-200 flex flex-col items-center justify-center p-10">
                  <div className="space-y-3 w-full">
                    {["業務負担を減らせる提案", "信頼できるパートナー", "継続的なサポート", "紹介の連鎖"].map((item, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                          <span className="text-green-700 text-xs font-bold">{i + 1}</span>
                        </div>
                        <p className="text-sm text-gray-600 font-medium">{item}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-400 mt-4 font-medium">施設が本当に求めるもの</p>
                </div>
              </div>
              <div>
                <span className="text-green-700 text-sm font-bold tracking-widest">02</span>
                <h3 className="text-xl sm:text-2xl lg:text-[1.75rem] font-extrabold text-gray-900 leading-snug mt-3 mb-5">
                  施設の「本当の困りごと」を
                  <br />
                  <span className="text-green-800">解決する<span className="border-b-2 border-green-300">コミュニケーション</span></span>
                </h3>
                <p className="text-sm sm:text-base text-gray-500 leading-loose mb-6">
                  営業ピッチではなく、施設側の業務負担を減らすことを考える。「何を売るか」ではなく「どう役に立つか」を伝えることで、ブローカーには作れない信用関係が生まれます。
                </p>
                <div className="space-y-3">
                  {["施設の業務負担を減らす提案", "キーマンとの信頼構築", "紹介の連鎖を生む関係性"].map((t) => (
                    <div key={t} className="flex items-start gap-2.5">
                      <Check className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                      <p className="text-sm text-gray-600 font-medium">{t}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sub-feature cards for Feature 02 */}
          <div className="max-w-5xl mx-auto px-5 sm:px-8 mt-12 sm:mt-16">
            <div className="grid sm:grid-cols-3 gap-5">
              {[
                {
                  icon: Handshake,
                  title: "施設の業務負担を減らす提案",
                  desc: "施設スタッフの時間と手間を減らす工夫を。実行支援が信頼を生み、ブローカーとの関係を超えます。",
                },
                {
                  icon: UserCheck,
                  title: "キーマンとの信頼構築",
                  desc: "介護士、ケアマネ、管理者など、本当に困っている人たちと向き合い、支援することで信頼を積み重ねます。",
                },
                {
                  icon: TrendingUp,
                  title: "紹介の連鎖を生む関係性",
                  desc: "一度の信頼から、施設内や他の施設への紹介が自然に広がる。組織的な信用が生まれます。",
                },
              ].map((card, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200">
                  <card.icon className="text-green-700 mb-4" size={28} />
                  <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">{card.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Feature 03 - 院長が営業しなくていい仕組み */}
        <div className="bg-green-50/60 py-16 sm:py-24">
          <div className="max-w-5xl mx-auto px-5 sm:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <span className="text-green-700 text-sm font-bold tracking-widest">03</span>
                <h3 className="text-xl sm:text-2xl lg:text-[1.75rem] font-extrabold text-gray-900 leading-snug mt-3 mb-5">
                  院長が営業しなくていい
                  <br />
                  <span className="text-green-800">「<span className="border-b-2 border-green-300">仕組み</span>」をつくる</span>
                </h3>
                <p className="text-sm sm:text-base text-gray-500 leading-loose mb-6">
                  営業を院長だけに頼るのは限界があります。スタッフ誰もが施設との関係を育てられる仕組みを作ることで、持続可能で人間中心の営業が生まれます。院長の負担も軽減できます。
                </p>
                <div className="space-y-3">
                  {["営業の属人化を解消", "スタッフ全員が関係構築できる仕組み", "院長の負担を軽減"].map((t) => (
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
                    <Zap className="text-green-800 mx-auto mb-4" size={48} />
                    <p className="text-base text-gray-600 font-medium">組織全体で</p>
                    <p className="text-base text-gray-600 font-medium">信頼を育てる</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sub-feature cards for Feature 03 */}
          <div className="max-w-5xl mx-auto px-5 sm:px-8 mt-12 sm:mt-16">
            <div className="grid sm:grid-cols-3 gap-5">
              {[
                {
                  icon: Users,
                  title: "営業の属人化を解消",
                  desc: "院長だけが営業するのではなく、スタッフ誰もが施設との関係を育てられるプロセスを構築します。",
                },
                {
                  icon: MessageSquare,
                  title: "スタッフ全員が関係構築できる仕組み",
                  desc: "研修やシステム、マニュアルを通じて、誰もが信頼を積み重ねるやり方を身に付けます。",
                },
                {
                  icon: Heart,
                  title: "院長の負担を軽減",
                  desc: "営業に奔走する必要がなくなり、院長は本来の医師としての役割に専念できます。",
                },
              ].map((card, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200">
                  <card.icon className="text-green-700 mb-4" size={28} />
                  <h4 className="font-bold text-gray-900 mb-2 text-sm sm:text-base">{card.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          Before / After
      ────────────────────────────────────────── */}
      <section className="bg-green-900 py-20 sm:py-28 text-white">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <p className="text-center text-sm font-bold tracking-widest uppercase text-green-300 mb-4">
            Before &amp; After
          </p>
          <h2 className="text-center text-2xl sm:text-3xl font-extrabold mb-14 sm:mb-16">
            ARCH導入で変わること
          </h2>

          <div className="space-y-5">
            {[
              {
                before: "テクニック頼りの営業",
                after: "信頼で自然と選ばれる医院",
              },
              {
                before: "院長だけが営業に奔走",
                after: "スタッフ全員が施設との関係を育てる",
              },
              {
                before: "ブローカーへの依存",
                after: "自院のファンが紹介の連鎖を生む",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur rounded-2xl p-6 sm:p-8 border border-white/10"
              >
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                  <div className="flex-1">
                    <span className="text-[10px] font-bold tracking-widest text-red-300 uppercase block mb-1">Before</span>
                    <p className="text-green-100 text-sm sm:text-base line-through decoration-red-400/50">{item.before}</p>
                  </div>
                  <ArrowRight size={20} className="text-green-400 hidden sm:block flex-shrink-0" />
                  <div className="flex-1">
                    <span className="text-[10px] font-bold tracking-widest text-green-300 uppercase block mb-1">After</span>
                    <p className="text-white text-sm sm:text-base font-medium">{item.after}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
