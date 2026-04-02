import { ArrowRight } from "lucide-react";
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
                emoji: "📋",
                title: "飛び込み営業の限界",
                body: "院長自ら施設に挨拶に行っているが、まったく依頼が増えない。パンフレットは「その他大勢」の束に埋もれている。",
              },
              {
                emoji: "🕸️",
                title: "ブローカーへの高額マージン",
                body: "「施設を紹介する」というブローカーに、毎月売上の20〜40％を吸い取られている。お金で買った関係は脆い。",
              },
              {
                emoji: "😤",
                title: "現場から煙たがられる",
                body: "一生懸命コミュニケーションをとっているつもりが、なぜか介護現場から嫌がられる。距離感が分からない。",
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
            業界の裏側を知り尽くした専門チームが、再現性のある営業の仕組みをつくります。
          </p>

          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                num: "01",
                title: "ブローカー依存からの脱却。\n自立した集客基盤の構築",
                body: "売上の20〜40％を吸い取る紹介屋への依存を断ち切ります。お金で買った関係ではなく、自院の実力で選ばれる圧倒的な営業力をスタッフにインストールします。",
              },
              {
                num: "02",
                title: "「信用利益」を積み上げる\n独自のコミュニケーション術",
                body: "患者様だけを診ていても依頼は増えません。手前にいる施設スタッフ、後ろにいるご家族といったキーマンの負担を減らし、信頼を勝ち取る方法を指導します。",
              },
              {
                num: "03",
                title: "現場に迷惑をかけない\n「時短」のアプローチ",
                body: "介護現場が求めているのは、長々とした申し送りではありません。施設側の業務フローを邪魔しない、最適な距離感とシステムを通じた情報共有を提案します。",
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
