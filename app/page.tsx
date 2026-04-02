"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  Menu,
  X,
  Star,
  Zap,
  Crown,
  Send,
} from "lucide-react";

/* ================================================================
   ARCH Corporate Site — Hierarchical B2B Venture Design
   Inspired by circus-group.jp style
   ================================================================ */

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const allColumns = [
    { href: "/columns/turnover-strategy", cat: "経営戦略", title: "「スタッフの退職」に怯える院長へ。離職防止よりも優先すべき、たった一つの経営戦略", desc: "属人化を排除し、誰が来ても回る強固な組織の作り方。" },
    { href: "/columns/staff-role", cat: "組織マネジメント", title: "優秀なスタッフが辞めない医院の秘密。元小学校教諭が教える「係活動」マネジメント", desc: "スタッフの定着に必要なのは技術研修ではなくマインド教育。" },
    { href: "/columns/invisible-profit", cat: "営業戦略", title: "現場がドブに捨てている「見えない利益」。患者だけを診る歯医者は淘汰される", desc: "施設スタッフやケアマネとの「信用利益」の築き方。" },
    { href: "/columns/profit-trap", cat: "経営改善", title: "一生懸命訪問しているのに「黒字化」しない医院。院長が見落としている罠", desc: "KPIの不在と経費計算の甘さが「忙しいのに儲からない」の正体。" },
    { href: "/columns/document-hell", cat: "業務改善", title: "訪問歯科が陥る「書類地獄」。ご家族からのクレームを防ぐ唯一の解決策", desc: "書類管理のブラックボックス化を防ぐ仕組みづくり。" },
    { href: "/columns/sales-trap", cat: "営業の落とし穴", title: "院長自らの飛び込み営業。そのパンフレット、実は「その他大勢」の束に埋もれています", desc: "施設側のリアルと、選ばれる仕組みの作り方。" },
    { href: "/columns/communication", cat: "現場コミュニケーション", title: "介護現場で嫌われる衛生士の共通点。良かれと思った「その指導」、実は大迷惑です。", desc: "施設に選ばれ続けるための「適切な距離感」とは。" },
    { href: "/columns/broker-trap", cat: "業界の闇", title: "「施設を紹介しますよ」の甘い罠。コンサルを自称する悪質ブローカーの正体", desc: "売上の20〜40％を吸い取るブローカーの実態と、自立した経営の作り方。" },
    { href: "/columns/facility-needs", cat: "施設の本音", title: "介護施設における「口腔ケアの序列」。歯医者が現場で煙たがられる本当の理由", desc: "介護現場における口腔ケアの優先順位と、手放されない訪問歯科になる方法。" },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-green-200 selection:text-green-900 scroll-smooth">

      {/* ============================================================
          NAVIGATION
          ============================================================ */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex justify-between h-16 sm:h-20 items-center">
            <Link href="/" className="flex-shrink-0">
              <Image src="/images/logo.jpg" alt="合同会社ARCH" width={120} height={120} className="h-9 sm:h-11 w-auto" priority />
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {[
                { href: "#service", label: "Service" },
                { href: "#pricing", label: "Pricing" },
                { href: "#company", label: "Company" },
                { href: "#columns", label: "Columns" },
              ].map((item) => (
                <a key={item.href} href={item.href} className="text-xs font-semibold tracking-widest uppercase text-gray-400 hover:text-gray-900 transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="bg-gray-900 hover:bg-black text-white px-5 py-2.5 rounded text-xs font-bold tracking-wider uppercase transition-colors">
                Contact
              </a>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-gray-900 p-2 -mr-2" aria-label="メニュー">
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-5 py-8 space-y-6">
            {[
              { href: "#service", label: "Service" },
              { href: "#pricing", label: "Pricing" },
              { href: "#company", label: "Company" },
              { href: "#columns", label: "Columns" },
            ].map((item) => (
              <a key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)} className="block text-sm font-semibold tracking-widest uppercase text-gray-400 hover:text-gray-900 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block bg-gray-900 text-white px-6 py-3.5 rounded text-sm font-bold tracking-wider uppercase text-center">
              Contact
            </a>
          </div>
        )}
      </nav>

      {/* ============================================================
          01 — HERO
          ============================================================ */}
      <section className="pt-32 pb-20 sm:pt-44 sm:pb-32 lg:pt-52 lg:pb-40 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-green-700 mb-6 sm:mb-8">
            Dental Consulting Pioneer
          </p>
          <h1 className="text-[2.5rem] sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[1.1] tracking-tight text-gray-900 mb-8 sm:mb-10">
            訪問歯科の
            <br />
            「現場のリアル」から、
            <br />
            <span className="text-green-800">地域No.1医院</span>を創る。
          </h1>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed sm:leading-loose max-w-2xl mb-10 sm:mb-14">
            独自の現場ノウハウ・専用アプリ・BPO支援で、
            立ち上げからV字回復まで伴走。
            ランニングコストを抑え、収益最大化を実現します。
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="bg-gray-900 hover:bg-black text-white px-8 py-4 sm:py-5 rounded text-sm sm:text-base font-bold tracking-wider transition-colors flex items-center justify-center gap-3">
              無料オンライン相談
              <ArrowRight size={18} />
            </a>
            <a href="#service" className="border border-gray-200 hover:border-gray-400 text-gray-600 hover:text-gray-900 px-8 py-4 sm:py-5 rounded text-sm sm:text-base font-bold tracking-wider transition-colors flex items-center justify-center">
              事業内容を見る
            </a>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8"><div className="border-t border-gray-100"></div></div>

      {/* ============================================================
          02 — PICK UP
          ============================================================ */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex items-end justify-between mb-12 sm:mb-16">
            <div>
              <p className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-gray-300 mb-3">02</p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">Pick Up</h2>
              <p className="text-sm sm:text-base text-gray-400 mt-3 sm:mt-4">注目のコラム</p>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              { href: "/columns/broker-trap", cat: "業界の闘", title: "「施設を紹介しますよ」の甘い罠。悪質ブローカーの正体", desc: "売上の20〜40％を吸い取るブローカーの実態と、自立した経営の作り方。", bg: "bg-red-50" },
              { href: "/columns/document-hell", cat: "業務改善", title: "訪問歯科が陥る「書類地獄」。クレームを防ぐ唯一の解決策", desc: "書類管理のブラックボックス化を防ぐ仕組みづくり。", bg: "bg-amber-50" },
              { href: "/columns/profit-trap", cat: "経営改善", title: "一生懸命訪問しているのに「黒字化」しない医院の罠", desc: "KPIの不在と経費計算の甘さが「忙しいのに儲からない」の正体。", bg: "bg-green-50" },
            ].map((a) => (
              <Link key={a.href} href={a.href} className="group block">
                <div className={`${a.bg} aspect-[3/2] rounded-lg mb-5 flex items-end p-5 sm:p-6`}>
                  <span className="text-xs font-bold tracking-wider uppercase text-gray-400">{a.cat}</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold leading-relaxed mb-2 group-hover:text-green-700 transition-colors">
                  {a.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">{a.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          03 — SERVICE
          ============================================================ */}
      <section id="service" className="py-20 sm:py-28 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="mb-16 sm:mb-20">
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-gray-500 mb-3">03</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">Service</h2>
            <p className="text-sm sm:text-base text-gray-500 mt-3 sm:mt-4">事業内容</p>
          </div>

          <div className="space-y-0">
            {/* Service 1 */}
            <div className="border-t border-gray-800 py-10 sm:py-14 lg:grid lg:grid-cols-12 lg:gap-8 items-start">
              <div className="lg:col-span-1 mb-4 lg:mb-0">
                <span className="text-xs font-bold tracking-widest text-gray-600">01</span>
              </div>
              <div className="lg:col-span-4 mb-4 lg:mb-0">
                <h3 className="text-xl sm:text-2xl font-bold leading-snug">
                  医療介護特化型
                  <br />営業コンサルティング
                </h3>
              </div>
              <div className="lg:col-span-7">
                <p className="text-sm sm:text-base text-gray-400 leading-loose">
                  訪問歯科・訪問看護で培った泥臭いノウハウをベースに、戦略立案から同行営業での実地指導まで。元小学校教諭の代表だからこそできる「営業担当者の自己肯定感を高め、行動を変える」マインドセットからの伴走支援が特徴です。
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="border-t border-gray-800 py-10 sm:py-14 lg:grid lg:grid-cols-12 lg:gap-8 items-start">
              <div className="lg:col-span-1 mb-4 lg:mb-0">
                <span className="text-xs font-bold tracking-widest text-gray-600">02</span>
              </div>
              <div className="lg:col-span-4 mb-4 lg:mb-0">
                <h3 className="text-xl sm:text-2xl font-bold leading-snug">
                  独自アプリケーション
                  <br />提供
                </h3>
              </div>
              <div className="lg:col-span-7">
                <p className="text-sm sm:text-base text-gray-400 leading-loose">
                  現場の事務作業やルート調整の工数を激減させる、ARCH専用システム。導入医院の業務効率を飛躍的に改善し、スタッフがコア業務に集中できる環境を実現します。契約医院はすべて無料でご利用いただけます。
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="border-t border-gray-800 py-10 sm:py-14 lg:grid lg:grid-cols-12 lg:gap-8 items-start">
              <div className="lg:col-span-1 mb-4 lg:mb-0">
                <span className="text-xs font-bold tracking-widest text-gray-600">03</span>
              </div>
              <div className="lg:col-span-4 mb-4 lg:mb-0">
                <h3 className="text-xl sm:text-2xl font-bold leading-snug">
                  訪問歯科BPO
                  <br />（裏側事務代行）
                </h3>
              </div>
              <div className="lg:col-span-7">
                <p className="text-sm sm:text-base text-gray-400 leading-loose">
                  レセプト業務、書類作成、施設とのスケジュール調整など、煩雑なバックオフィス業務を丸ごと代行。少数精鋭の医院でも、診療に100%集中できる体制を構築します。月額プランで柔軟に対応可能です。
                </p>
              </div>
            </div>
            <div className="border-t border-gray-800"></div>
          </div>
        </div>
      </section>

      {/* ============================================================
          04 — PRICING
          ============================================================ */}
      <section id="pricing" className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="mb-16 sm:mb-20">
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-gray-300 mb-3">04</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">Pricing</h2>
            <p className="text-sm sm:text-base text-gray-400 mt-3 sm:mt-4">料金プラン</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {/* Light */}
            <div className="border border-gray-200 rounded-lg p-7 sm:p-9 flex flex-col">
              <div className="mb-6 sm:mb-8">
                <div className="flex items-center gap-2 mb-3">
                  <Zap className="text-gray-400" size={18} />
                  <span className="text-xs font-bold tracking-widest uppercase text-gray-400">Light</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">ライトプラン</h3>
                <p className="text-xs text-gray-400">まずは始めたい方に</p>
              </div>
              <div className="mb-8">
                <span className="text-4xl sm:text-5xl font-extrabold">10</span>
                <span className="text-base font-bold text-gray-400 ml-1">万円</span>
                <span className="text-sm text-gray-300 ml-1">/月</span>
              </div>
              <div className="border-t border-gray-100 pt-6 space-y-3.5 flex-1">
                {["訪問歯科の運営サポート", "月1回 Web/対面ミーティング", "ARCH独自アプリ使用可能", "LINE等での相談", "実地支援（別途3万円）"].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={15} />
                    <p className="text-sm text-gray-600">{item}</p>
                  </div>
                ))}
              </div>
              <a href="#contact" className="mt-8 block text-center border border-gray-200 hover:border-gray-400 text-gray-600 hover:text-gray-900 px-5 py-3.5 rounded text-sm font-bold tracking-wider transition-colors">
                お問い合わせ
              </a>
            </div>

            {/* Standard */}
            <div className="bg-gray-950 text-white rounded-lg p-7 sm:p-9 flex flex-col relative lg:-mt-4 lg:mb-[-16px]">
              <div className="absolute -top-3 left-6">
                <span className="bg-green-600 text-white text-[10px] font-bold px-3 py-1 rounded tracking-wider uppercase flex items-center gap-1">
                  <Star size={10} /> Most Popular
                </span>
              </div>
              <div className="mb-6 sm:mb-8 mt-2">
                <div className="flex items-center gap-2 mb-3">
                  <Star className="text-green-400" size={18} />
                  <span className="text-xs font-bold tracking-widest uppercase text-gray-500">Standard</span>
                </div>
                <h3 className="text-lg font-bold mb-1">スタンダードプラン</h3>
                <p className="text-xs text-gray-500">成長を加速させたい方に</p>
              </div>
              <div className="mb-8">
                <span className="text-4xl sm:text-5xl font-extrabold">30</span>
                <span className="text-base font-bold text-gray-500 ml-1">万円</span>
                <span className="text-sm text-gray-600 ml-1">/月</span>
              </div>
              <div className="border-t border-gray-800 pt-6 space-y-3.5 flex-1">
                {["ライトプランの全内容を含む", "月4回 Web/対面ミーティング", "経営相談", "BPO（内容要相談）", "実地支援（月1回無償 / 2回目以降別途2万円）"].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="text-green-400 shrink-0 mt-0.5" size={15} />
                    <p className="text-sm text-gray-300">{item}</p>
                  </div>
                ))}
              </div>
              <a href="#contact" className="mt-8 block text-center bg-white hover:bg-gray-100 text-gray-900 px-5 py-3.5 rounded text-sm font-bold tracking-wider transition-colors">
                お問い合わせ
              </a>
            </div>

            {/* Premium */}
            <div className="border border-gray-200 rounded-lg p-7 sm:p-9 flex flex-col relative">
              <div className="absolute -top-3 right-6">
                <span className="bg-yellow-500 text-white text-[10px] font-bold px-3 py-1 rounded tracking-wider uppercase flex items-center gap-1">
                  <Crown size={10} /> Premium
                </span>
              </div>
              <div className="mb-6 sm:mb-8 mt-2">
                <div className="flex items-center gap-2 mb-3">
                  <Crown className="text-yellow-500" size={18} />
                  <span className="text-xs font-bold tracking-widest uppercase text-gray-400">Premium</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">プレミアムプラン</h3>
                <p className="text-xs text-gray-400">圧倒的な成長を実現</p>
              </div>
              <div className="mb-8">
                <span className="text-4xl sm:text-5xl font-extrabold">50</span>
                <span className="text-base font-bold text-gray-400 ml-1">万円</span>
                <span className="text-sm text-gray-300 ml-1">/月</span>
              </div>
              <div className="border-t border-gray-100 pt-6 space-y-3.5 flex-1">
                {["スタンダードプランの全内容を含む", "医院オリジナルWebアプリ開発", "営業同行・代行", "経営層との会合セッティング"].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={15} />
                    <p className="text-sm text-gray-600">{item}</p>
                  </div>
                ))}
              </div>
              <a href="#contact" className="mt-8 block text-center bg-gray-900 hover:bg-black text-white px-5 py-3.5 rounded text-sm font-bold tracking-wider transition-colors">
                お問い合わせ
              </a>
            </div>
          </div>

          <p className="text-center text-xs text-gray-300 mt-10">
            ※ 別途初期費用 100,000円（税別）がかかります。料金はすべて税別表示です。
          </p>

          {/* ---- Trial ---- */}
          <div id="trial" className="mt-20 sm:mt-28 border-t border-gray-100 pt-16 sm:pt-20">
            <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-start">
              <div className="lg:col-span-5 mb-8 lg:mb-0">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-300 block mb-3">Trial Plan</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">お試しコンサルティング</h3>
                <span className="inline-block bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded tracking-wider">
                  初回限定・1ヶ月
                </span>
                <div className="mt-6">
                  <span className="text-4xl sm:text-5xl font-extrabold">70,000</span>
                  <span className="text-base font-bold text-gray-400 ml-1">円</span>
                  <span className="text-sm text-gray-300 ml-1">/月</span>
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    "訪問歯科の運営サポート", "月1回のWeb/対面ミーティング",
                    "ARCH独自アプリ使用可能", "経営相談",
                    "1日限定の実地支援", "訪問歯科事業立ち上げ相談",
                    "LINE等での相談", "月間レポート（簡易）",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={15} />
                      <p className="text-sm text-gray-600">{item}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 bg-gray-950 rounded-lg p-4 text-center">
                  <p className="text-gray-300 text-sm font-medium">まずは1ヶ月、訪問歯科コンサルティングの可能性を体感してください。</p>
                </div>
                <div className="mt-3 text-xs text-gray-300 space-y-0.5">
                  <p>※ お試し期間終了後、本契約される場合は初期費用を無償とさせていただきます。</p>
                  <p>※ お試しプランは初回契約時のみご利用いただけます。</p>
                </div>
                <a href="#contact" className="mt-5 inline-flex items-center gap-2 bg-gray-900 hover:bg-black text-white px-6 py-3 rounded text-sm font-bold tracking-wider transition-colors">
                  お試しプランについて相談する <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* ---- On-site ---- */}
          <div id="onsite" className="mt-16 sm:mt-20 border-t border-gray-100 pt-16 sm:pt-20">
            <div className="lg:grid lg:grid-cols-12 lg:gap-12 items-start">
              <div className="lg:col-span-5 mb-8 lg:mb-0">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-gray-300 block mb-3">On-site Support</span>
                <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">単発 実地支援サービス</h3>
                <span className="inline-block bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded tracking-wider">
                  単発プラン
                </span>
                <div className="mt-6">
                  <span className="text-4xl sm:text-5xl font-extrabold">50,000</span>
                  <span className="text-base font-bold text-gray-400 ml-1">円</span>
                  <span className="text-sm text-gray-300 ml-1">/1回</span>
                </div>
              </div>
              <div className="lg:col-span-7">
                <div className="space-y-6 sm:space-y-8">
                  {[
                    { num: "01", title: "訪問診療の同行", desc: "実際の訪問診療に同行し、現場のオペレーション・患者様対応・スタッフの動きを確認します。" },
                    { num: "02", title: "改善レポートの作成", desc: "同行後1週間を目処に詳細レポートを提出。改善すべきポイントを具体的なアクション付きでまとめます。" },
                    { num: "03", title: "算定可能な点数の提案", desc: "取りこぼしている算定項目を洗い出し。算定の最適化だけで月数万円〜数十万円の収益改善につながるケースも。" },
                  ].map((step) => (
                    <div key={step.num} className="flex gap-4">
                      <span className="text-xs font-bold tracking-widest text-gray-300 mt-1 shrink-0">{step.num}</span>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-1">{step.title}</h4>
                        <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 bg-gray-950 rounded-lg p-4 text-center">
                  <p className="text-gray-300 text-sm font-medium">「訪問歯科に興味はあるが、まずは現状を診てほしい」という医院様に最適です。</p>
                </div>
                <p className="text-xs text-gray-300 mt-3">※ 実地支援は単発でのご利用が可能です。料金は税別表示です。</p>
                <a href="#contact" className="mt-5 inline-flex items-center gap-2 bg-gray-900 hover:bg-black text-white px-6 py-3 rounded text-sm font-bold tracking-wider transition-colors">
                  実地支援について相談する <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          05 — COMPANY / VISION
          ============================================================ */}
      <section id="company" className="py-20 sm:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="mb-16 sm:mb-20">
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-gray-300 mb-3">05</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">Company</h2>
            <p className="text-sm sm:text-base text-gray-400 mt-3 sm:mt-4">代表ストーリー</p>
          </div>

          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-10 lg:mb-0">
              <div className="rounded-lg overflow-hidden bg-green-900 aspect-square sm:aspect-[4/3] flex items-center justify-center p-10 sm:p-16">
                <Image src="/images/logo.jpg" alt="合同会社ARCH" width={400} height={400} className="w-full max-w-[180px] sm:max-w-[220px] h-auto" />
              </div>
            </div>

            <div>
              <p className="text-base sm:text-lg text-gray-600 leading-loose sm:leading-loose mb-6">
                元小学校教諭が見た、訪問歯科のいびつな現実と挑戦——。
                「人の成長に寄り添う」経験を活かし、
                医療・介護の現場で働く方々が自信を持って事業を成長させられるよう伴走したい。
                そんな想いでARCHを立ち上げました。
              </p>
              <p className="text-base sm:text-lg text-gray-600 leading-loose sm:leading-loose mb-10">
                訪問歯科という成長市場で、現場力と収益力の両立は容易ではありません。
                だからこそ、机上の空論ではなく泥臭い現場主義で結果を出し続けます。
              </p>

              <div className="border-t border-gray-200 pt-6">
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-300 mb-1">CEO</p>
                <p className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">鈴木 集</p>
                <div className="space-y-1 text-sm text-gray-400">
                  <p>元小学校教諭 → 訪問歯科業界へ転身</p>
                  <p>訪問歯科コンサルティングの第一人者として活躍</p>
                </div>
              </div>

              <a href="#ceo-detail" className="mt-8 inline-flex items-center gap-2 text-sm font-bold tracking-wider text-gray-900 hover:text-green-700 transition-colors">
                代表ストーリーを読む <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          06 — LATEST COLUMNS
          ============================================================ */}
      <section id="columns" className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="mb-16 sm:mb-20">
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-gray-300 mb-3">06</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">Columns</h2>
            <p className="text-sm sm:text-base text-gray-400 mt-3 sm:mt-4">現場向けコラム</p>
          </div>

          <div className="space-y-0">
            {allColumns.map((col, i) => (
              <Link
                key={`${col.href}-${i}`}
                href={col.href}
                className="group block border-t border-gray-100 py-6 sm:py-8 lg:grid lg:grid-cols-12 lg:gap-6 items-start hover:bg-gray-50 transition-colors -mx-5 sm:-mx-8 px-5 sm:px-8"
              >
                <div className="lg:col-span-1 mb-2 lg:mb-0">
                  <span className="text-xs font-bold tracking-widest text-gray-300">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="lg:col-span-2 mb-2 lg:mb-0">
                  <span className="text-xs font-bold tracking-wider text-green-700 bg-green-50 px-2.5 py-0.5 rounded">{col.cat}</span>
                </div>
                <div className="lg:col-span-6 mb-2 lg:mb-0">
                  <h3 className="text-sm sm:text-base font-bold leading-relaxed group-hover:text-green-700 transition-colors">
                    {col.title}
                  </h3>
                </div>
                <div className="lg:col-span-3 flex items-start justify-between">
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed flex-1">{col.desc}</p>
                  <ArrowRight size={16} className="text-gray-300 group-hover:text-green-700 transition-colors shrink-0 ml-4 mt-0.5 hidden lg:block" />
                </div>
              </Link>
            ))}
            <div className="border-t border-gray-100"></div>
          </div>
        </div>
      </section>

      {/* ============================================================
          07 — CONTACT
          ============================================================ */}
      <section id="contact" className="py-20 sm:py-28 bg-gray-950 text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="mb-16 sm:mb-20">
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-gray-600 mb-3">07</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">Contact</h2>
            <p className="text-sm sm:text-base text-gray-500 mt-3 sm:mt-4">お問い合わせ</p>
          </div>

          <div className="max-w-2xl">
            <form
              action="https://formsubmit.co/50ee2f45d5bdcbfa397c1f5135d41780"
              method="POST"
              className="space-y-6"
            >
              <input type="hidden" name="_subject" value="ARCHホームページからのお問い合わせ" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://www.arch-yh.com/" />

              <div>
                <label htmlFor="name" className="block text-xs font-bold tracking-wider uppercase text-gray-500 mb-2">
                  お名前 <span className="text-red-400">*</span>
                </label>
                <input type="text" id="name" name="name" required placeholder="山田 太郎"
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-700 text-white placeholder-gray-600 focus:outline-none focus:border-white text-base transition-colors" />
              </div>

              <div>
                <label htmlFor="organization" className="block text-xs font-bold tracking-wider uppercase text-gray-500 mb-2">
                  医院・施設名
                </label>
                <input type="text" id="organization" name="organization" placeholder="○○歯科クリニック"
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-700 text-white placeholder-gray-600 focus:outline-none focus:border-white text-base transition-colors" />
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-bold tracking-wider uppercase text-gray-500 mb-2">
                  メールアドレス <span className="text-red-400">*</span>
                </label>
                <input type="email" id="email" name="email" required placeholder="info@example.com"
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-700 text-white placeholder-gray-600 focus:outline-none focus:border-white text-base transition-colors" />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold tracking-wider uppercase text-gray-500 mb-2">
                  お問い合わせ内容 <span className="text-red-400">*</span>
                </label>
                <textarea id="message" name="message" required rows={5} placeholder="ご相談内容をお書きください"
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-gray-700 text-white placeholder-gray-600 focus:outline-none focus:border-white text-base resize-none transition-colors"></textarea>
              </div>

              <div className="pt-4">
                <button type="submit" className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded text-sm font-bold tracking-wider transition-colors flex items-center gap-3">
                  <Send size={16} />
                  送信する
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ============================================================
          FOOTER
          ============================================================ */}
      <footer className="bg-white border-t border-gray-100 py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-5">
            <Image src="/images/logo.jpg" alt="合同会社ARCH" width={120} height={120} className="h-8 sm:h-10 w-auto" />
            <p className="text-xs text-gray-300">
              &copy; {new Date().getFullYear()} 合同会社ARCH All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
