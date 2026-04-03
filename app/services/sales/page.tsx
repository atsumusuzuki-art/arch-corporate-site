import {
  ArrowRight,
  Check,
  Target,
  Users,
  MessageSquare,
  Handshake,
  Clock,
  Smartphone,
  MapPin,
  TrendingUp,
  Shield,
  UserCheck,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "営業コンサルティング | 合同会社ARCH",
  description:
    "施設から指名される圧倒的な営業戦略。ブローカー依存を脱却し、自立した集客基盤を構築するARCHの営業コンサルティング。",
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
            「パンフレット配り」は
            <br className="hidden sm:block" />
            もうやめませんか。
            <br />
            <span className="text-green-800">施設から&ldquo;指名&rdquo;される<br className="sm:hidden" />圧倒的な営業戦略。</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto mb-10 sm:mb-12">
            その他大勢の業者に埋もれる営業や、悪質ブローカーへのマージン搾取は今日で終わりにしましょう。
            患者の背後にいるキーマンを味方につけ、「紹介の連鎖」を生み出します。
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
                title: "飛び込み営業の限界",
                body: "院長自ら施設に挨拶に行っているが、まったく依頼が増えない。パンフレットは束に埋もれている。",
              },
              {
                title: "ブローカーへの高額マージン",
                body: "「施設を紹介する」というブローカーに、毎月売上の20〜40％を吸い取られている。",
              },
              {
                title: "現場から煙たがられる",
                body: "一生懸命コミュニケーションをとっているつもりが、なぜか介護現場から嫌がられる。",
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
            業界の裏側を知り尽くした専門チームが、再現性のある営業の仕組みをつくります。
          </p>
        </div>

        {/* Feature 01 - ブローカー依存脱却 */}
        <div className="bg-green-50/60 py-16 sm:py-24">
          <div className="max-w-5xl mx-auto px-5 sm:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <span className="text-green-700 text-sm font-bold tracking-widest">01</span>
                <h3 className="text-xl sm:text-2xl lg:text-[1.75rem] font-extrabold text-gray-900 leading-snug mt-3 mb-5">
                  ブローカー依存からの脱却。
                  <br />
                  <span className="text-green-800">自立した<span className="border-b-2 border-green-300">集客基盤</span>の構築</span>
                </h3>
                <p className="text-sm sm:text-base text-gray-500 leading-loose mb-6">
                  売上の20〜40％を吸い取る紹介屋への依存を断ち切ります。お金で買った関係ではなく、自院の実力で選ばれる圧倒的な営業力をスタッフにインストールします。
                </p>
                <div className="space-y-3">
                  {["紹介屋との契約構造を分析・見直し", "自院ブランドの営業ツール整備", "施設が求める提案型営業の設計"].map((t) => (
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
                    <div className="text-4xl font-extrabold text-green-800 mb-2">20〜40%</div>
                    <p className="text-sm text-gray-400 font-medium">ブローカーに搾取される売上割合</p>
                    <p className="text-xs text-red-400 font-bold mt-2">ARCHで0%へ</p>
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
                  icon: Shield,
                  title: "契約構造分析",
                  desc: "既存のブローカー契約を詳細に分析し、見直しのポイントを明確化します。",
                },
                {
                  icon: Target,
                  title: "自院ブランド構築",
                  desc: "貴院独自の営業ツールやブランディングを整備し、施設に選ばれる仕組みを作ります。",
                },
                {
                  icon: MessageSquare,
                  title: "提案営業設計",
                  desc: "施設が本当に求めている提案型営業のアプローチを設計・指導します。",
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

        {/* Feature 02 - 信用利益のコミュニケーション */}
        <div className="bg-white py-16 sm:py-24">
          <div className="max-w-5xl mx-auto px-5 sm:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <div className="hidden lg:flex items-center justify-center order-first">
                <div className="w-full max-w-sm aspect-[4/3] bg-gray-50 rounded-2xl border border-gray-200 flex flex-col items-center justify-center p-10">
                  <div className="space-y-3 w-full">
                    {["患者様", "施設スタッフ", "ケアマネ", "ご家族"].map((person, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                          <span className="text-green-700 text-xs font-bold">{i + 1}</span>
                        </div>
                        <p className="text-sm text-gray-600 font-medium">{person}</p>
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-gray-400 mt-4 font-medium">全キーマンへの信頼構築</p>
                </div>
              </div>
              <div>
                <span className="text-green-700 text-sm font-bold tracking-widest">02</span>
                <h3 className="text-xl sm:text-2xl lg:text-[1.75rem] font-extrabold text-gray-900 leading-snug mt-3 mb-5">
                  「<span className="border-b-2 border-green-300">信用利益</span>」を積み上げる
                  <br />
                  <span className="text-green-800">独自のコミュニケーション術</span>
                </h3>
                <p className="text-sm sm:text-base text-gray-500 leading-loose mb-6">
                  患者様だけを診ていても依頼は増えません。手前にいる施設スタッフ、後ろにいるご家族といったキーマンの負担を減らし、信頼を勝ち取る方法を指導します。
                </p>
                <div className="space-y-3">
                  {["キーマンマッピングによる関係構築戦略", "施設スタッフの負担を減らす立ち回り", "紹介の連鎖を生む信頼の積み上げ方"].map((t) => (
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
                  icon: UserCheck,
                  title: "キーマンマッピング",
                  desc: "患者背後のすべてのキーマンを特定し、信頼構築の優先順位を決定します。",
                },
                {
                  icon: Users,
                  title: "スタッフ負担軽減",
                  desc: "施設側の業務負担を減らしながら、信頼を深める立ち回りの方法を指導します。",
                },
                {
                  icon: TrendingUp,
                  title: "紹介の連鎖構築",
                  desc: "一度の信頼から紹介の連鎖が生まれる、再現性のある仕組みを作ります。",
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

        {/* Feature 03 - 時短アプローチ */}
        <div className="bg-green-50/60 py-16 sm:py-24">
          <div className="max-w-5xl mx-auto px-5 sm:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <span className="text-green-700 text-sm font-bold tracking-widest">03</span>
                <h3 className="text-xl sm:text-2xl lg:text-[1.75rem] font-extrabold text-gray-900 leading-snug mt-3 mb-5">
                  現場に迷惑をかけない
                  <br />
                  <span className="text-green-800">「<span className="border-b-2 border-green-300">時短</span>」のアプローチ</span>
                </h3>
                <p className="text-sm sm:text-base text-gray-500 leading-loose mb-6">
                  介護現場が求めているのは、長々とした申し送りではありません。施設側の業務フローを邪魔しない、最適な距離感とシステムを通じた情報共有を提案します。
                </p>
                <div className="space-y-3">
                  {["施設業務フローに合わせた訪問設計", "アプリによるストレスフリーな情報共有", "短時間で最大効果を出す現場オペレーション"].map((t) => (
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
                    <div className="text-5xl font-extrabold text-green-800 mb-2">5分</div>
                    <p className="text-sm text-gray-400 font-medium">施設側の対応時間を最小化</p>
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
                  icon: MapPin,
                  title: "訪問フロー設計",
                  desc: "施設の業務スケジュールに最適な訪問パターンを設計し、現場の邪魔にならない立ち回りを実現します。",
                },
                {
                  icon: Smartphone,
                  title: "アプリ導入",
                  desc: "情報共有をアプリ化し、施設スタッフの手間を大幅に削減します。",
                },
                {
                  icon: Clock,
                  title: "効率オペレーション",
                  desc: "限られた時間の中で最大の効果を出すための現場オペレーション術を指導します。",
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
                before: "パンフレットを置いて帰るだけの営業",
                after: "施設の課題解決を提案し、向こうから依頼が来る営業",
              },
              {
                before: "ブローカーに毎月数十万円のマージン支払い",
                after: "自院の実力で選ばれ、紹介の連鎖が生まれる仕組み",
              },
              {
                before: "院長頼みの属人的な営業活動",
                after: "スタッフ誰でも再現できる、型化された営業プロセス",
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
