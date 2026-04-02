import { Stethoscope, CheckCircle2, ArrowRight, Star, Zap, Crown } from "lucide-react";
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

      {/* 料金プラン */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <h2 className="text-sm font-bold text-green-700 tracking-widest uppercase mb-3">
            Pricing
          </h2>
          <p className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-10">
            料金プラン
          </p>

          <div className="grid lg:grid-cols-3 gap-6 items-stretch">
            {/* Light */}
            <div className="border border-gray-200 rounded-xl p-7 flex flex-col">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="text-gray-400" size={18} />
                  <span className="text-xs font-bold tracking-widest uppercase text-gray-400">Light</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">ライトプラン</h3>
                <p className="text-xs text-gray-400">まずは始めたい方に</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-green-800">10</span>
                <span className="text-base font-bold text-gray-400 ml-1">万円</span>
                <span className="text-sm text-gray-300 ml-1">/月</span>
              </div>
              <div className="border-t border-gray-100 pt-5 space-y-3 flex-1">
                {["訪問歯科の運営サポート", "月1回 Web/対面ミーティング", "ARCH独自アプリ使用可能", "LINE等での相談", "実地支援（別途3万円）"].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={15} />
                    <p className="text-sm text-gray-600">{item}</p>
                  </div>
                ))}
              </div>
              <Link href="/#contact" className="mt-6 block text-center border border-gray-200 hover:border-green-300 text-gray-600 hover:text-green-800 px-5 py-3 rounded text-sm font-bold tracking-wider transition-colors">
                お問い合わせ
              </Link>
            </div>

            {/* Standard */}
            <div className="bg-green-800 text-white rounded-xl p-7 flex flex-col relative lg:-mt-3 lg:mb-[-12px]">
              <div className="absolute -top-3 left-6">
                <span className="bg-yellow-400 text-yellow-900 text-[10px] font-bold px-3 py-1 rounded tracking-wider flex items-center gap-1">
                  <Star size={10} /> 一番人気
                </span>
              </div>
              <div className="mb-6 mt-2">
                <div className="flex items-center gap-2 mb-3">
                  <Star className="text-yellow-300" size={18} />
                  <span className="text-xs font-bold tracking-widest uppercase text-green-300">Standard</span>
                </div>
                <h3 className="text-lg font-bold mb-1">スタンダードプラン</h3>
                <p className="text-xs text-green-200">成長を加速させたい方に</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-extrabold">30</span>
                <span className="text-base font-bold text-green-200 ml-1">万円</span>
                <span className="text-sm text-green-300 ml-1">/月</span>
              </div>
              <div className="border-t border-green-700 pt-5 space-y-3 flex-1">
                {["ライトプランの全内容を含む", "月4回 Web/対面ミーティング", "経営相談", "BPO（内容要相談）", "実地支援（月1回無償 / 2回目以降別途2万円）"].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="text-yellow-300 shrink-0 mt-0.5" size={15} />
                    <p className="text-sm text-green-50">{item}</p>
                  </div>
                ))}
              </div>
              <Link href="/#contact" className="mt-6 block text-center bg-white hover:bg-green-50 text-green-900 px-5 py-3 rounded text-sm font-bold tracking-wider transition-colors">
                お問い合わせ
              </Link>
            </div>

            {/* Premium */}
            <div className="border border-gray-200 rounded-xl p-7 flex flex-col relative">
              <div className="absolute -top-3 right-6">
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 text-[10px] font-bold px-3 py-1 rounded tracking-wider flex items-center gap-1">
                  <Crown size={10} /> 最上位
                </span>
              </div>
              <div className="mb-6 mt-2">
                <div className="flex items-center gap-2 mb-3">
                  <Crown className="text-yellow-500" size={18} />
                  <span className="text-xs font-bold tracking-widest uppercase text-gray-400">Premium</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">プレミアムプラン</h3>
                <p className="text-xs text-gray-400">圧倒的な成長を実現</p>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-green-800">50</span>
                <span className="text-base font-bold text-gray-400 ml-1">万円</span>
                <span className="text-sm text-gray-300 ml-1">/月</span>
              </div>
              <div className="border-t border-gray-100 pt-5 space-y-3 flex-1">
                {["スタンダードプランの全内容を含む", "医院オリジナルWebアプリ開発", "営業同行・代行", "経営層との会合セッティング"].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={15} />
                    <p className="text-sm text-gray-600">{item}</p>
                  </div>
                ))}
              </div>
              <Link href="/#contact" className="mt-6 block text-center bg-green-800 hover:bg-green-900 text-white px-5 py-3 rounded text-sm font-bold tracking-wider transition-colors">
                お問い合わせ
              </Link>
            </div>
          </div>

          <p className="text-center text-xs text-gray-300 mt-8">
            ※ 別途初期費用 100,000円（税別）がかかります。料金はすべて税別表示です。
          </p>

          {/* ---- Trial ---- */}
          <div className="mt-16 border-t border-gray-100 pt-14">
            <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-start">
              <div className="lg:col-span-5 mb-8 lg:mb-0">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-green-700 block mb-3">Trial Plan</span>
                <h3 className="text-2xl font-extrabold mb-3">お試しコンサルティング</h3>
                <span className="inline-block bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded tracking-wider">初回限定・1ヶ月</span>
                <div className="mt-5">
                  <span className="text-4xl font-extrabold text-green-800">70,000</span>
                  <span className="text-base font-bold text-gray-400 ml-1">円</span>
                  <span className="text-sm text-gray-300 ml-1">/月</span>
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {["訪問歯科の運営サポート", "月1回のWeb/対面ミーティング", "ARCH独自アプリ使用可能", "経営相談", "1日限定の実地支援", "訪問歯科事業立ち上げ相談", "LINE等での相談", "月間レポート（簡易）"].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={15} />
                      <p className="text-sm text-gray-600">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 bg-green-800 rounded-lg p-4 text-center">
                  <p className="text-green-50 text-sm font-medium">まずは1ヶ月、訪問歯科コンサルティングの可能性を体感してください。</p>
                </div>
                <div className="mt-3 text-xs text-gray-300 space-y-0.5">
                  <p>※ お試し期間終了後、本契約される場合は初期費用を無償とさせていただきます。</p>
                  <p>※ お試しプランは初回契約時のみご利用いただけます。</p>
                </div>
              </div>
            </div>
          </div>

          {/* ---- On-site ---- */}
          <div className="mt-14 border-t border-gray-100 pt-14">
            <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-start">
              <div className="lg:col-span-5 mb-8 lg:mb-0">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-green-700 block mb-3">On-site Support</span>
                <h3 className="text-2xl font-extrabold mb-3">単発 実地支援サービス</h3>
                <span className="inline-block bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded tracking-wider">単発プラン</span>
                <div className="mt-5">
                  <span className="text-4xl font-extrabold text-green-800">50,000</span>
                  <span className="text-base font-bold text-gray-400 ml-1">円</span>
                  <span className="text-sm text-gray-300 ml-1">/1回</span>
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="space-y-6">
                  {[
                    { num: "01", title: "訪問診療の同行", desc: "実際の訪問診療に同行し、現場のオペレーション・患者様対応・スタッフの動きを確認します。" },
                    { num: "02", title: "改善レポートの作成", desc: "同行後1週間を目処に詳細レポートを提出。改善すべきポイントを具体的なアクション付きでまとめます。" },
                    { num: "03", title: "算定可能な点数の提案", desc: "取りこぼしている算定項目を洗い出し。算定の最適化だけで月数万円〜数十万円の収益改善につながるケースも。" },
                  ].map((step) => (
                    <div key={step.num} className="flex gap-4">
                      <span className="text-xs font-bold tracking-widest text-green-700 mt-1 shrink-0">{step.num}</span>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">{step.title}</h4>
                        <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 bg-green-800 rounded-lg p-4 text-center">
                  <p className="text-green-50 text-sm font-medium">「訪問歯科に興味はあるが、まずは現状を診てほしい」という医院様に最適です。</p>
                </div>
                <p className="text-xs text-gray-300 mt-3">※ 実地支援は単発でのご利用が可能です。料金は税別表示です。</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 流れ */}
      <section className="py-16 sm:py-20 bg-gray-50">
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
