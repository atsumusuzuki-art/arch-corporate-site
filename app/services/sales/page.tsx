import { Users, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "医療介護特化型営業コンサルティング | 合同会社ARCH",
  description:
    "医療・介護業界に特化した営業コンサルティング。施設との信頼関係構築から新規開拓まで、業界の構造を知り尽くしたプロが伴走します。",
};

export default function SalesPage() {
  return (
    <article>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10">
              <Users className="text-green-300" size={24} />
            </span>
            <span className="text-green-300 text-sm font-bold tracking-widest uppercase">
              Service 02
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
            医療介護特化型<br className="sm:hidden" />営業コンサルティング
          </h1>
          <p className="text-lg sm:text-xl text-green-100 max-w-3xl leading-relaxed">
            医療・介護業界の構造を知り尽くした専門チームが、
            施設との信頼関係構築から新規開拓まで、成果の出る営業の仕組みをつくります。
          </p>
        </div>
      </section>

      {/* 課題 */}
      <section className="py-16 sm:py-20 bg-green-50/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <h2 className="text-sm font-bold text-green-700 tracking-widest uppercase mb-3">
            Problem
          </h2>
          <p className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-10">
            こんなお悩みはありませんか？
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              "飛び込み営業をしても施設に断られ続けている",
              "パンフレットを置いてきても、そこから先に進まない",
              "どの施設にアプローチすればいいか分からない",
              "施設担当者と何を話せばいいか分からない",
              "営業が院長頼みになっていて、仕組みがない",
              "ケアマネや施設スタッフとの関係構築ができていない",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-white rounded-xl p-5 border border-gray-100 shadow-sm"
              >
                <span className="text-red-500 mt-0.5 font-bold text-lg">✕</span>
                <p className="text-gray-700 font-medium leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* サービス内容 */}
      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <h2 className="text-sm font-bold text-green-700 tracking-widest uppercase mb-3">
            Service
          </h2>
          <p className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-10">
            ARCHの営業コンサルティング
          </p>

          <div className="space-y-8">
            {[
              {
                num: "01",
                title: "ターゲット施設の選定",
                desc: "エリア分析・施設タイプ分析を元に、成約確度の高いターゲットリストを作成。闇雲な営業ではなく、戦略的にアプローチします。",
              },
              {
                num: "02",
                title: "提案型営業の設計",
                desc: "施設が求めているのは「歯科治療」ではなく「課題解決」。施設側のペインポイントを理解した提案書・トークスクリプトを設計します。",
              },
              {
                num: "03",
                title: "営業同行・OJT",
                desc: "実際の営業現場に同行し、施設担当者との対話を通じて実践的な営業スキルを習得。座学では身につかないリアルなノウハウを提供します。",
              },
              {
                num: "04",
                title: "関係構築の仕組み化",
                desc: "ケアマネ・施設スタッフとの継続的な信頼関係を構築する仕組みを設計。紹介が自然に生まれる「選ばれる仕組み」をつくります。",
              },
              {
                num: "05",
                title: "営業チーム構築",
                desc: "院長が営業しなくても回る組織を構築。営業担当の採用・教育・KPI管理まで、営業チームの立ち上げを包括的にサポートします。",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="flex gap-5 sm:gap-8 items-start border-b border-gray-100 pb-8"
              >
                <span className="text-3xl sm:text-4xl font-extrabold text-green-200 flex-shrink-0">
                  {item.num}
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 特徴 */}
      <section className="py-16 sm:py-20 bg-green-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <h2 className="text-sm font-bold text-green-300 tracking-widest uppercase mb-3">
            Why ARCH
          </h2>
          <p className="text-2xl sm:text-3xl font-extrabold mb-10">
            ARCHが選ばれる理由
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                title: "業界特化の知見",
                desc: "医療・介護業界の商習慣・意思決定プロセスを熟知。一般的な営業手法ではなく、業界に最適化された戦略を提供します。",
              },
              {
                title: "現場同行型",
                desc: "机上の空論ではなく、実際の営業現場に同行。リアルな課題に即したフィードバックで確実にスキルアップします。",
              },
              {
                title: "仕組みで勝つ",
                desc: "属人的な営業から脱却し、再現性のある仕組みを構築。担当者が変わっても成果が出続ける組織をつくります。",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/10 rounded-xl p-8 border border-white/10"
              >
                <h3 className="font-extrabold text-lg mb-3">{item.title}</h3>
                <p className="text-green-100 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 流れ */}
      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <h2 className="text-sm font-bold text-green-700 tracking-widest uppercase mb-3">
            Flow
          </h2>
          <p className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-10">
            ご契約までの流れ
          </p>
          <div className="space-y-6">
            {[
              { step: "STEP 1", title: "無料相談・ヒアリング", desc: "現在の営業体制・課題を丁寧にヒアリングします。オンラインでも対応可能です。" },
              { step: "STEP 2", title: "エリア・施設分析", desc: "商圏内の施設データを分析し、ターゲット施設と攻略プランをご提案します。" },
              { step: "STEP 3", title: "営業戦略策定・実行", desc: "提案書・トークスクリプトを整備し、営業同行を通じて実践的にサポートします。" },
              { step: "STEP 4", title: "定着・仕組み化", desc: "成果を仕組みに落とし込み、自走できる営業チームの構築を目指します。" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-5 items-start bg-green-50/50 rounded-xl p-6 border border-green-100"
              >
                <span className="text-xs font-bold text-green-700 bg-green-100 px-3 py-1 rounded-full flex-shrink-0">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 関連コラム */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-extrabold text-gray-900 mb-8">関連コラム</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/columns/sales-trap" className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <span className="text-xs font-bold text-green-700 mb-2 block">営業の落とし穴</span>
              <h3 className="font-bold text-gray-900 group-hover:text-green-700 transition-colors text-sm">院長自らの飛び込み営業。そのパンフレット、実は「その他大勢」の束に埋もれています</h3>
            </Link>
            <Link href="/columns/invisible-profit" className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <span className="text-xs font-bold text-green-700 mb-2 block">営業戦略</span>
              <h3 className="font-bold text-gray-900 group-hover:text-green-700 transition-colors text-sm">現場がドブに捨てている「見えない利益」。患者だけを診る歯医者は淘汰される</h3>
            </Link>
            <Link href="/columns/communication" className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <span className="text-xs font-bold text-green-700 mb-2 block">現場コミュニケーション</span>
              <h3 className="font-bold text-gray-900 group-hover:text-green-700 transition-colors text-sm">介護現場で嫌われる衛生士の共通点。良かれと思った「その指導」、実は大迷惑です。</h3>
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
