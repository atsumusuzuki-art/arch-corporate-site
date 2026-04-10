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
  title: "訪問歯科プロデューサー（旧：歯科経営コンサルティング） | 合同会社ARCH",
  description:
    "助言ではなく、訪問歯科事業をゼロからプロデュース。書類地獄の完全撤廃、黒字化の仕組み、自己肯定感を高める組織づくりまで一気通貫で伴走します。",
};

export default function ConsultingPage() {
  return (
    <article>
      {/* ──────────────────────────────────────────
          HERO
      ────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-950 pt-24 pb-20 sm:pt-32 sm:pb-28 lg:pt-40 lg:pb-36 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-400 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-300 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-green-300 border border-green-600 px-4 py-1.5 rounded-full mb-6">
            Producer — 01
          </span>
          <div className="mb-8">
            <h1 className="text-[1.75rem] sm:text-4xl lg:text-[2.75rem] font-extrabold leading-[1.35] tracking-tight text-white mb-2">
              訪問歯科プロデューサー
            </h1>
            <p className="text-[11px] sm:text-xs tracking-[0.15em] text-green-300/70 font-medium">
              （旧：歯科経営コンサルティング）
            </p>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold leading-[1.4] tracking-tight text-white mb-6 sm:mb-8">
            助言ではなく、
            <br className="hidden sm:block" />
            事業そのものを<span className="text-green-300">プロデュース</span>する。
          </h2>
          <p className="text-base sm:text-lg text-green-100/80 leading-relaxed max-w-2xl mx-auto mb-10 sm:mb-12">
            売上は上がったのに人が辞めていく。経営の悩みを誰にも言えない。この医院の10年後が不安。
            そんな院長の本当の課題に向き合い、スタッフが「ここで働き続けたい」と思える組織づくりを支援します。
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2.5 bg-white hover:bg-green-50 text-green-900 px-8 py-4 rounded-lg text-sm sm:text-base font-bold tracking-wider transition-colors shadow-lg"
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
                title: "「売上は上がった。でもDHが辞めた。」",
                body: "コンサルに言われた通り集患は成功した。でもスタッフが次々と辞めていく。売上を支える人がいない。",
              },
              {
                title: "「経営の悩みを、誰にも言えない。」",
                body: "スタッフには弱みを見せられない。同業者にも言えない。配偶者にも理解されない。院長はいつも孤独だ。",
              },
              {
                title: "「この医院、10年後どうなるんだろう。」",
                body: "後継者がいない。自分が倒れたら終わり。始め方は教わったが、終わり方は誰も教えてくれない。",
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
            数字よりも人を見つめるコンサル。売上の前に、スタッフの笑顔と院長の心を整えます。
          </p>
        </div>

        {/* Feature 01 */}
        <div className="bg-green-50/60 py-16 sm:py-24">
          <div className="max-w-5xl mx-auto px-5 sm:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <span className="text-green-700 text-sm font-bold tracking-widest">01</span>
                <h3 className="text-xl sm:text-2xl lg:text-[1.75rem] font-extrabold text-gray-900 leading-snug mt-3 mb-5">
                  「辞めない組織」をつくる
                  <br />
                  <span className="text-green-800 underline decoration-green-300 decoration-4 underline-offset-2">
                    訪問歯科コンサル
                  </span>
                </h3>
                <p className="text-sm sm:text-base text-gray-500 leading-loose mb-6">
                  売上最適化ではなく、スタッフが「ここで働き続けたい」と思える組織をつくることを最優先。
                  ARCHは泥臭く現場に入り込み、離職の根本原因に向き合います。成功の先にある人の問題こそが、本当の経営課題です。
                </p>
                <div className="space-y-3">
                  {[
                    "離職の根本原因に切り込む",
                    "現場に入る泥臭い伴走",
                    "離職率をKPIに設定する独自メソッド",
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
                      -65%
                    </div>
                    <p className="text-sm text-gray-400 font-medium">
                      平均離職率改善
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
                  icon: Users,
                  title: "離職の根本原因に切り込む",
                  desc: "「給料が安い」という表面的な理由の奥にある、人間関係、やりがい、成長の課題を徹底的にヒアリング。",
                },
                {
                  icon: Briefcase,
                  title: "現場に入る泥臭い伴走",
                  desc: "月1回のZoomではなく、実際に医院に足を運び、スタッフの声を聞き、一緒に改善策を実行します。",
                },
                {
                  icon: TrendingUp,
                  title: "離職率をKPIに設定",
                  desc: "売上ではなく『スタッフが辞めない』『満足度が上がる』を目標に。組織の体温が下がらない経営を実現。",
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
                      98%
                    </div>
                    <p className="text-sm text-gray-400 font-medium">
                      院長満足度
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <span className="text-green-700 text-sm font-bold tracking-widest">
                  02
                </span>
                <h3 className="text-xl sm:text-2xl lg:text-[1.75rem] font-extrabold text-gray-900 leading-snug mt-3 mb-5">
                  院長の「精神的参謀」
                  <br />
                  <span className="text-green-800 underline decoration-green-300 decoration-4 underline-offset-2">
                    になるコンサル
                  </span>
                </h3>
                <p className="text-sm sm:text-base text-gray-500 leading-loose mb-6">
                  「数字の前に、あなた自身の話を聞かせてください。」
                  経営判断の前に、院長の心と感情を整える。スタッフには見せられない弱音を吐ける場所。
                  月次面談では数字ではなく、あなたの状態をチェックします。
                </p>
                <div className="space-y-3">
                  {[
                    "感情と事実を分離する整理",
                    "院長の状態チェック（月次）",
                    "冷静な経営判断の土台づくり",
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
                  icon: Heart,
                  title: "心理的安全の確保",
                  desc: "院長の本音、不安、迷い。スタッフや家族には言えないことを、安全に話す環境をつくります。",
                },
                {
                  icon: Clock,
                  title: "月次メンタルチェック",
                  desc: "数字よりも先に院長の心身の状態を確認。疲弊していれば休息を、迷っていれば思考の整理を支援。",
                },
                {
                  icon: Target,
                  title: "感情と事実の分離",
                  desc: "「怖い」「不安」という感情と「現実」を分け、冷静な経営判断ができる状態に導きます。",
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
                  「出口戦略」まで見据えた
                  <br />
                  <span className="text-green-800 underline decoration-green-300 decoration-4 underline-offset-2">
                    訪問歯科コンサル
                  </span>
                </h3>
                <p className="text-sm sm:text-base text-gray-500 leading-loose mb-6">
                  「始める支援だけじゃない。あなたの医院の10年後まで、一緒に考えます。」
                  訪問歯科診療所の90%超が後継者不在。そこでARCHは、事業承継、スケールダウン、廃止など、
                  院長のライフプランと統合した「出口戦略」を設計します。
                </p>
                <div className="space-y-3">
                  {[
                    "事業承継・後継者育成の設計",
                    "地域歯科ネットワーク構築",
                    "院長の人生設計との統合",
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
                      95%
                    </div>
                    <p className="text-sm text-gray-400 font-medium">
                      継続契約率
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
                  icon: Briefcase,
                  title: "事業承継の設計",
                  desc: "子息への継承、スタッフへの譲渡、スケールダウン、廃止。複数のシナリオから最適な出口を設計します。",
                },
                {
                  icon: Users,
                  title: "地域歯科ネットワーク構築",
                  desc: "診療圏内の歯科医院との関係構築。パートナー歯科医が見つかれば、柔軟な事業承継が可能になります。",
                },
                {
                  icon: Heart,
                  title: "人生設計との統合",
                  desc: "医院経営だけでなく、院長のセカンドライフ、家族との時間、夢と向き合う。包括的なプランを立案します。",
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
              { num: "65%", label: "平均離職率改善" },
              { num: "98%", label: "院長満足度" },
              { num: "95%", label: "継続契約率" },
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
              「数字だけじゃなく、自分自身のことまで気にかけてくれるコンサルは初めてだった」
              <span className="text-white font-bold block mt-2">
                スタッフも定着して、ようやく医院経営に余裕が出てきました。
              </span>
              それだけじゃなく、ARCHさんと一緒に「10年後どうしたいのか」という人生レベルの話もできて、
              経営の不安が減りました。
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
                  "院長メンタルチェック（月次）",
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
                  "院長メンタルチェック（月次）",
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
                      title: "組織改善のアドバイス",
                      desc: "スタッフ間のコミュニケーション、院長の意思決定、組織文化の改善提案。人の課題に焦点を当てます。",
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
