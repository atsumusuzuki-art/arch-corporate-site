import { Stethoscope, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "訪問歯科コンサルティング | 合同会社ARCH",
  description:
    "訪問歯科の立ち上げから黒字化まで。6ヶ月で黒字化を実現するARCHの訪問歯科コンサルティングサービス。",
};

export default function ConsultingPage() {
  return (
    <article>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10">
              <Stethoscope className="text-green-300" size={24} />
            </span>
            <span className="text-green-300 text-sm font-bold tracking-widest uppercase">
              Service 01
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
            訪問歯科コンサルティング
          </h1>
          <p className="text-lg sm:text-xl text-green-100 max-w-3xl leading-relaxed">
            訪問歯科の立ち上げから営業・算定・運営改善まで、ワンストップでサポート。
            開始6ヶ月での黒字化を実現する実践型コンサルティングです。
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
              "訪問歯科を始めたいが、何から手を付ければいいか分からない",
              "訪問歯科を始めたが、患者数が増えず赤字が続いている",
              "営業の仕方が分からず、施設との関係が築けない",
              "算定が複雑で、取りこぼしが発生している気がする",
              "スタッフの教育体制が整っておらず、属人化している",
              "コンサルを名乗るブローカーに不安を感じている",
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
            ARCHの訪問歯科コンサルティング
          </p>

          <div className="space-y-8">
            {[
              {
                num: "01",
                title: "立ち上げ支援",
                desc: "訪問歯科の開始に必要な届出・機材準備・算定体制の構築をゼロからサポート。院内体制の整備から施設開拓まで、立ち上げに必要な全工程を伴走します。",
              },
              {
                num: "02",
                title: "営業戦略の設計と実行",
                desc: "飛び込み営業に頼らない仕組みづくり。施設のニーズを的確に把握した提案型営業で、安定的に新規施設を獲得するルートを構築します。",
              },
              {
                num: "03",
                title: "算定最適化",
                desc: "訪問歯科の複雑な算定を徹底分析。取りこぼしを防ぎ、正しい算定フローを構築することで、同じ患者数でも売上を大幅に改善します。",
              },
              {
                num: "04",
                title: "スタッフ教育・組織づくり",
                desc: "属人化を排除し、誰が来ても回る組織体制を構築。マニュアル整備・研修制度・マインド教育を組み合わせた独自メソッドで離職率を低減します。",
              },
              {
                num: "05",
                title: "運営改善・KPI管理",
                desc: "月次レポート・KPI分析で経営状態を可視化。数字に基づいた改善提案で「忙しいのに儲からない」状態から脱却します。",
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

      {/* 実績 */}
      <section className="py-16 sm:py-20 bg-green-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <h2 className="text-sm font-bold text-green-300 tracking-widest uppercase mb-3">
            Results
          </h2>
          <p className="text-2xl sm:text-3xl font-extrabold mb-10">
            導入実績
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              { num: "6ヶ月", label: "平均黒字化期間" },
              { num: "150%", label: "売上改善率（平均）" },
              { num: "30+", label: "コンサルティング実績" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/10 rounded-xl p-8 text-center border border-white/10"
              >
                <p className="text-3xl sm:text-4xl font-extrabold text-green-300 mb-2">
                  {item.num}
                </p>
                <p className="text-green-100 font-medium">{item.label}</p>
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
              { step: "STEP 1", title: "無料相談", desc: "現状のヒアリングと課題の整理を行います。オンライン・対面どちらでも対応可能です。" },
              { step: "STEP 2", title: "現状分析・プラン提案", desc: "ヒアリング内容を元に、最適なコンサルティングプランをご提案します。" },
              { step: "STEP 3", title: "ご契約・キックオフ", desc: "プランにご納得いただいた上でご契約。初月からKPIを設定し、伴走を開始します。" },
              { step: "STEP 4", title: "実行・改善サイクル", desc: "月次レポートで進捗を確認しながら、PDCAサイクルで継続的に改善していきます。" },
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
            <Link href="/columns/broker-trap" className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <span className="text-xs font-bold text-green-700 mb-2 block">業界の闇</span>
              <h3 className="font-bold text-gray-900 group-hover:text-green-700 transition-colors text-sm">「施設を紹介しますよ」の甘い罠。コンサルを自称する悪質ブローカーの正体</h3>
            </Link>
            <Link href="/columns/profit-trap" className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <span className="text-xs font-bold text-green-700 mb-2 block">経営改善</span>
              <h3 className="font-bold text-gray-900 group-hover:text-green-700 transition-colors text-sm">一生懸命訪問しているのに「黒字化」しない医院。院長が見落としている罠</h3>
            </Link>
            <Link href="/columns/document-hell" className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <span className="text-xs font-bold text-green-700 mb-2 block">業務改善</span>
              <h3 className="font-bold text-gray-900 group-hover:text-green-700 transition-colors text-sm">訪問歯科が陥る「書類地獄」。ご家族からのクレームを防ぐ唯一の解決策</h3>
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
