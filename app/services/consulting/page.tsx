import {
  ArrowRight,
  Check,
  CheckCircle2,
  FileText,
  Calculator,
  Users,
  Shield,
  TrendingUp,
  BarChart3,
  BookOpen,
  Heart,
  Sparkles,
  Clock,
  Briefcase,
  Target,
  Layers,
  Zap,
  Star,
  Crown,
} from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "訪問歯科 経営コンサルティング | 合同会社ARCH",
  description:
    "属人化と忙しいのに儲からないを終わらせる。6ヶ月で黒字化を実現するARCHの訪問歯科コンサルティング。",
};

export default function ConsultingPage() {
  return (
    <article>
      {/* ──────────────────────────────────────────
          HERO
      ────────────────────────────────────────── */}
      <section className="bg-white pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-32 lg:pb-36">
        <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-green-700 bg-green-50 px-4 py-1.5 rounded-full mb-8">
            経営コンサルティング
          </span>
          <h1 className="text-[1.75rem] sm:text-4xl lg:text-[2.75rem] font-extrabold leading-[1.35] tracking-tight text-gray-900 mb-6 sm:mb-8">
            属人化と「忙しいのに儲からない」を
            <br className="hidden sm:block" />
            終わらせる。
            <br />
            <span className="text-green-800">次世代の訪問歯科経営。</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-500 leading-relaxed max-w-2xl mx-auto mb-10 sm:mb-12">
            属人化の排除、どんぶり勘定からの脱却、そして離職に怯えない組織作り。
            元小学校教諭の知見と独自システムで、確実な利益とスタッフの笑顔を両立します。
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

          <div className="grid sm:grid-cols-3 gap-5 sm:gap-6">
            {[
              {
                title: "極度な属人化",
                body: "ベテランが辞めると現場も書類も回らなくなる。ノウハウが個人に集中し、組織として機能しない。",
              },
              {
                title: "忙しいのに利益が残らない",
                body: "毎日訪問しているのに、月末に通帳を見ると赤字。経費と算定の実態が見えていない。",
              },
              {
                title: "止まらない離職",
                body: "スタッフの離職が絶えず、常に採用活動に追われている。育てても育てても抜けていく。",
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
          解決策 — SmartHR風 ナンバリング+2カラム
      ────────────────────────────────────────── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <p className="text-center text-sm font-bold tracking-widest uppercase text-green-700 mb-4">
            Solution
          </p>
          <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6">
            ARCHの経営コンサルティングの
            <span className="text-green-800 underline decoration-green-300 decoration-4 underline-offset-2">
              3つの強み
            </span>
          </h2>
          <p className="text-center text-sm sm:text-base text-gray-400 mb-16 sm:mb-20 max-w-2xl mx-auto">
            現場経験に裏打ちされた独自メソッドで、根本から経営体質を変えます。
          </p>
        </div>

        {/* Feature 01 */}
        <div className="bg-green-50/60 py-16 sm:py-24">
          <div className="max-w-5xl mx-auto px-5 sm:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <span className="text-green-700 text-sm font-bold tracking-widest">01</span>
                <h3 className="text-xl sm:text-2xl lg:text-[1.75rem] font-extrabold text-gray-900 leading-snug mt-3 mb-5">
                  アプリとBPOによる
                  <br />
                  <span className="text-green-800 underline decoration-green-300 decoration-4 underline-offset-2">
                    「書類地獄」の完全撤廃
                  </span>
                </h3>
                <p className="text-sm sm:text-base text-gray-500 leading-loose mb-6">
                  人の注意力に頼る管理をシステム化。誰が休んでも辞めても、絶対に業務が停滞しない裏側の仕組みを構築します。
                </p>
                <div className="space-y-3">
                  {[
                    "ARCH独自アプリで書類作成を自動化",
                    "BPOで事務作業を外部委託",
                    "属人化リスクを構造的に排除",
                  ].map((t) => (
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
                    <div className="text-5xl font-extrabold text-green-800 mb-2">
                      -80%
                    </div>
                    <p className="text-sm text-gray-400 font-medium">
                      書類作業時間の削減
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sub-feature cards for 01 */}
          <div className="max-w-5xl mx-auto px-5 sm:px-8 mt-12 sm:mt-16">
            <div className="grid sm:grid-cols-3 gap-5">
              {[
                {
                  icon: FileText,
                  title: "自動書類作成",
                  desc: "ARCH独自アプリがテンプレートから自動生成。ヒューマンエラーをゼロに近づけます。",
                },
                {
                  icon: BarChart3,
                  title: "BPO統合管理",
                  desc: "事務作業を専門家に委託。現場はケアに専念でき、生産性が向上します。",
                },
                {
                  icon: Shield,
                  title: "属人化排除",
                  desc: "システム化により、誰が担当してもクオリティを保証します。",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 border border-gray-200"
                >
                  <card.icon className="text-green-700 mb-4" size={28} />
                  <h4 className="font-bold text-gray-900 mb-2">{card.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
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
                    <div className="text-5xl font-extrabold text-green-800 mb-2">
                      6ヶ月
                    </div>
                    <p className="text-sm text-gray-400 font-medium">
                      平均黒字化達成期間
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <span className="text-green-700 text-sm font-bold tracking-widest">
                  02
                </span>
                <h3 className="text-xl sm:text-2xl lg:text-[1.75rem] font-extrabold text-gray-900 leading-snug mt-3 mb-5">
                  KPIと精緻な経費計算による
                  <br />
                  <span className="text-green-800 underline decoration-green-300 decoration-4 underline-offset-2">
                    「黒字化の仕組み」
                  </span>
                </h3>
                <p className="text-sm sm:text-base text-gray-500 leading-loose mb-6">
                  単価に上限がある保険診療だからこそ、稼働数とケア1回あたりの経費を徹底管理。どんぶり勘定を終わらせます。
                </p>
                <div className="space-y-3">
                  {[
                    "算定の取りこぼしを徹底的に洗い出し",
                    "ケア1回あたりの経費を可視化",
                    "月次KPIレポートで進捗を数値管理",
                  ].map((t) => (
                    <div key={t} className="flex items-start gap-2.5">
                      <Check className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                      <p className="text-sm text-gray-600 font-medium">{t}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Sub-feature cards for 02 */}
          <div className="max-w-5xl mx-auto px-5 sm:px-8 mt-12 sm:mt-16">
            <div className="grid sm:grid-cols-3 gap-5">
              {[
                {
                  icon: Calculator,
                  title: "算定最適化",
                  desc: "取りこぼしている算定項目を洗い出し。月数万円〜数十万円の改善が可能です。",
                },
                {
                  icon: TrendingUp,
                  title: "KPI管理",
                  desc: "月次レポートで経営数字を可視化。改善すべきポイントが一目瞭然です。",
                },
                {
                  icon: BarChart3,
                  title: "経費分析",
                  desc: "ケア1回あたりの原価を徹底管理。利益構造が明確になります。",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 border border-gray-200"
                >
                  <card.icon className="text-green-700 mb-4" size={28} />
                  <h4 className="font-bold text-gray-900 mb-2">{card.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Feature 03 */}
        <div className="bg-green-50/60 py-16 sm:py-24">
          <div className="max-w-5xl mx-auto px-5 sm:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <span className="text-green-700 text-sm font-bold tracking-widest">
                  03
                </span>
                <h3 className="text-xl sm:text-2xl lg:text-[1.75rem] font-extrabold text-gray-900 leading-snug mt-3 mb-5">
                  元教員が教える
                  <br />
                  <span className="text-green-800 underline decoration-green-300 decoration-4 underline-offset-2">
                    「自己肯定感」を高める組織づくり
                  </span>
                </h3>
                <p className="text-sm sm:text-base text-gray-500 leading-loose mb-6">
                  マニュアルだけでは人は育ちません。「係活動」のような役割を与え、スタッフが自ら進んで動きたくなるエンゲージメントの高い組織を作ります。
                </p>
                <div className="space-y-3">
                  {[
                    "役割付与で主体性を引き出す独自メソッド",
                    "マインド教育×実務研修の二軸育成",
                    "離職率を構造的に低減する仕組み",
                  ].map((t) => (
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
                    <div className="text-5xl font-extrabold text-green-800 mb-2">
                      150%
                    </div>
                    <p className="text-sm text-gray-400 font-medium">
                      スタッフ定着率の改善
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sub-feature cards for 03 */}
          <div className="max-w-5xl mx-auto px-5 sm:px-8 mt-12 sm:mt-16">
            <div className="grid sm:grid-cols-3 gap-5">
              {[
                {
                  icon: Users,
                  title: "役割付与メソッド",
                  desc: "スタッフに役割を与え、主体性と自己肯定感を育成します。",
                },
                {
                  icon: BookOpen,
                  title: "二軸育成プログラム",
                  desc: "マインド教育と実務研修で、自律的に動くスタッフを育てます。",
                },
                {
                  icon: Heart,
                  title: "離職防止設計",
                  desc: "エンゲージメント向上で離職率を大幅低減。安定した体制が実現します。",
                },
              ].map((card, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 border border-gray-200"
                >
                  <card.icon className="text-green-700 mb-4" size={28} />
                  <h4 className="font-bold text-gray-900 mb-2">{card.title}</h4>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          実績
      ────────────────────────────────────────── */}
      <section className="bg-green-900 py-20 sm:py-28 text-white">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center">
          <p className="text-sm font-bold tracking-widest uppercase text-green-300 mb-4">
            Results
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-14 sm:mb-16">
            導入医院が実感した変化
          </h2>

          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8 mb-16">
            {[
              { num: "6ヶ月", label: "平均黒字化期間" },
              { num: "150%", label: "売上改善率（平均）" },
              { num: "30+", label: "コンサルティング実績" },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur rounded-2xl p-8 sm:p-10 border border-white/10"
              >
                <p className="text-4xl sm:text-5xl font-extrabold text-green-300 mb-2">
                  {item.num}
                </p>
                <p className="text-green-100 text-sm font-medium">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 sm:p-10 border border-white/10 max-w-3xl mx-auto text-left">
            <p className="text-green-100 text-sm sm:text-base leading-loose">
              「忙しいのに利益が残らない」状態が半年以上続いていました。ARCHさんに入ってもらい、まず算定の取りこぼしを洗い出してもらったところ、
              同じ患者数のまま
              <span className="text-white font-bold">月40万円以上</span>
              の改善が見られました。
              スタッフ教育も体系的で、以前のような属人化の不安はほぼなくなりました。
            </p>
            <p className="text-green-300 text-sm font-bold mt-4">
              — 関東圏 訪問歯科クリニック院長
            </p>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          料金プラン
      ────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <p className="text-center text-sm font-bold tracking-widest uppercase text-green-700 mb-4">
            Pricing
          </p>
          <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-gray-900 mb-14 sm:mb-16">
            料金プラン
          </h2>

          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {/* Light */}
            <div className="bg-white border border-gray-200 rounded-2xl p-7 sm:p-9 flex flex-col">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="text-gray-400" size={18} />
                  <span className="text-xs font-bold tracking-widest uppercase text-gray-400">
                    Light
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  ライトプラン
                </h3>
                <p className="text-xs text-gray-400">まずは始めたい方に</p>
              </div>
              <div className="mb-8">
                <span className="text-4xl sm:text-5xl font-extrabold text-green-800">
                  10
                </span>
                <span className="text-base font-bold text-gray-400 ml-1">
                  万円
                </span>
                <span className="text-sm text-gray-300 ml-1">/月</span>
              </div>
              <div className="border-t border-gray-100 pt-6 space-y-3.5 flex-1">
                {[
                  "訪問歯科の運営サポート",
                  "月1回 Web/対面ミーティング",
                  "ARCH独自アプリ使用可能",
                  "LINE等での相談",
                  "実地支援（別途3万円）",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={15} />
                    <p className="text-sm text-gray-600">{item}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/#contact"
                className="mt-8 block text-center border border-gray-200 hover:border-green-300 text-gray-600 hover:text-green-800 px-5 py-3.5 rounded-lg text-sm font-bold tracking-wider transition-colors"
              >
                お問い合わせ
              </Link>
            </div>

            {/* Standard */}
            <div className="bg-green-800 text-white rounded-2xl p-7 sm:p-9 flex flex-col relative lg:-mt-4 lg:mb-[-16px] shadow-xl shadow-green-900/20">
              <div className="absolute -top-3 left-6">
                <span className="bg-yellow-400 text-yellow-900 text-[10px] font-bold px-3 py-1 rounded-full tracking-wider flex items-center gap-1">
                  <Star size={10} /> 一番人気
                </span>
              </div>
              <div className="mb-6 mt-2">
                <div className="flex items-center gap-2 mb-3">
                  <Star className="text-yellow-300" size={18} />
                  <span className="text-xs font-bold tracking-widest uppercase text-green-300">
                    Standard
                  </span>
                </div>
                <h3 className="text-lg font-bold mb-1">スタンダードプラン</h3>
                <p className="text-xs text-green-200">成長を加速させたい方に</p>
              </div>
              <div className="mb-8">
                <span className="text-4xl sm:text-5xl font-extrabold">30</span>
                <span className="text-base font-bold text-green-200 ml-1">
                  万円
                </span>
                <span className="text-sm text-green-300 ml-1">/月</span>
              </div>
              <div className="border-t border-green-700 pt-6 space-y-3.5 flex-1">
                {[
                  "ライトプランの全内容を含む",
                  "月4回 Web/対面ミーティング",
                  "経営相談",
                  "BPO（内容要相談）",
                  "実地支援（月1回無償 / 2回目以降別途2万円）",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="text-yellow-300 shrink-0 mt-0.5" size={15} />
                    <p className="text-sm text-green-50">{item}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/#contact"
                className="mt-8 block text-center bg-white hover:bg-green-50 text-green-900 px-5 py-3.5 rounded-lg text-sm font-bold tracking-wider transition-colors"
              >
                お問い合わせ
              </Link>
            </div>

            {/* Premium */}
            <div className="bg-white border border-gray-200 rounded-2xl p-7 sm:p-9 flex flex-col relative">
              <div className="absolute -top-3 right-6">
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 text-[10px] font-bold px-3 py-1 rounded-full tracking-wider flex items-center gap-1">
                  <Crown size={10} /> 最上位
                </span>
              </div>
              <div className="mb-6 mt-2">
                <div className="flex items-center gap-2 mb-3">
                  <Crown className="text-yellow-500" size={18} />
                  <span className="text-xs font-bold tracking-widest uppercase text-gray-400">
                    Premium
                  </span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  プレミアムプラン
                </h3>
                <p className="text-xs text-gray-400">圧倒的な成長を実現</p>
              </div>
              <div className="mb-8">
                <span className="text-4xl sm:text-5xl font-extrabold text-green-800">
                  50
                </span>
                <span className="text-base font-bold text-gray-400 ml-1">
                  万円
                </span>
                <span className="text-sm text-gray-300 ml-1">/月</span>
              </div>
              <div className="border-t border-gray-100 pt-6 space-y-3.5 flex-1">
                {[
                  "スタンダードプランの全内容を含む",
                  "医院オリジナルWebアプリ開発",
                  "営業同行・代行",
                  "経営層との会合セッティング",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={15} />
                    <p className="text-sm text-gray-600">{item}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/#contact"
                className="mt-8 block text-center bg-green-800 hover:bg-green-900 text-white px-5 py-3.5 rounded-lg text-sm font-bold tracking-wider transition-colors"
              >
                お問い合わせ
              </Link>
            </div>
          </div>

          <p className="text-center text-xs text-gray-400 mt-10">
            ※ 別途初期費用 100,000円（税別）がかかります。料金はすべて税別表示です。
          </p>

          {/* Trial + On-site */}
          <div className="mt-16 space-y-6">
            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-gray-200 lg:grid lg:grid-cols-12 lg:gap-12 items-start">
              <div className="lg:col-span-5 mb-8 lg:mb-0">
                <span className="inline-block text-[10px] font-bold tracking-[0.3em] uppercase text-green-700 bg-green-50 px-3 py-1 rounded-full mb-4">
                  Trial Plan
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-3">
                  お試しコンサルティング
                </h3>
                <span className="inline-block bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full tracking-wider">
                  初回限定・1ヶ月
                </span>
                <div className="mt-5">
                  <span className="text-4xl font-extrabold text-green-800">
                    70,000
                  </span>
                  <span className="text-base font-bold text-gray-400 ml-1">
                    円
                  </span>
                  <span className="text-sm text-gray-300 ml-1">/月</span>
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "訪問歯科の運営サポート",
                    "月1回のWeb/対面ミーティング",
                    "ARCH独自アプリ使用可能",
                    "経営相談",
                    "1日限定の実地支援",
                    "訪問歯科事業立ち上げ相談",
                    "LINE等での相談",
                    "月間レポート（簡易）",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={15} />
                      <p className="text-sm text-gray-600">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 text-xs text-gray-400 space-y-0.5">
                  <p>
                    ※ お試し期間終了後、本契約される場合は初期費用を無償とさせていただきます。
                  </p>
                  <p>※ お試しプランは初回契約時のみご利用いただけます。</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 sm:p-10 border border-gray-200 lg:grid lg:grid-cols-12 lg:gap-12 items-start">
              <div className="lg:col-span-5 mb-8 lg:mb-0">
                <span className="inline-block text-[10px] font-bold tracking-[0.3em] uppercase text-green-700 bg-green-50 px-3 py-1 rounded-full mb-4">
                  On-site Support
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-3">
                  単発 実地支援サービス
                </h3>
                <span className="inline-block bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full tracking-wider">
                  単発プラン
                </span>
                <div className="mt-5">
                  <span className="text-4xl font-extrabold text-green-800">
                    50,000
                  </span>
                  <span className="text-base font-bold text-gray-400 ml-1">
                    円
                  </span>
                  <span className="text-sm text-gray-300 ml-1">/1回</span>
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="space-y-5">
                  {[
                    {
                      num: "01",
                      title: "訪問診療の同行",
                      desc: "実際の訪問診療に同行し、現場のオペレーション・患者様対応・スタッフの動きを確認します。",
                    },
                    {
                      num: "02",
                      title: "改善レポートの作成",
                      desc: "同行後1週間を目処に詳細レポートを提出。改善すべきポイントを具体的なアクション付きでまとめます。",
                    },
                    {
                      num: "03",
                      title: "算定可能な点数の提案",
                      desc: "取りこぼしている算定項目を洗い出し。算定の最適化だけで月数万円〜数十万円の収益改善につながるケースも。",
                    },
                  ].map((step) => (
                    <div key={step.num} className="flex gap-4">
                      <span className="text-xs font-bold tracking-widest text-green-700 mt-1 shrink-0">
                        {step.num}
                      </span>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">
                          {step.title}
                        </h4>
                        <p className="text-sm text-gray-500 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-4">
                  ※ 実地支援は単発でのご利用が可能です。料金は税別表示です。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
