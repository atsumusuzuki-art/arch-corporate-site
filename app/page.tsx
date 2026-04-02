"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Menu,
  X,
  Stethoscope,
  ShieldCheck,
  HeartHandshake,
  Smartphone,
  Star,
  Zap,
  Crown,
  Send,
  Quote,
  Briefcase,
  Cpu,
  FileText,
} from "lucide-react";

/* ================================================================
   ARCH Corporate Site — Mobile-First B2B Redesign
   ================================================================ */

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /* ---------- Data ---------- */
  const pickupArticles = [
    {
      href: "/columns/broker-trap",
      cat: "業界の闇",
      title: "「施設を紹介しますよ」の甘い罠。悪質ブローカーの正体",
      desc: "売上の20〜40％を吸い取るブローカーの実態と、自立した経営の作り方。",
      color: "bg-red-50",
      accent: "text-red-700",
      border: "border-red-100",
    },
    {
      href: "/columns/document-hell",
      cat: "業務改善",
      title: "訪問歯科が陥る「書類地獄」。クレームを防ぐ唯一の解決策",
      desc: "書類管理のブラックボックス化を防ぐ仕組みづくり。",
      color: "bg-amber-50",
      accent: "text-amber-700",
      border: "border-amber-100",
    },
    {
      href: "/columns/profit-trap",
      cat: "経営改善",
      title: "一生懸命訪問しているのに「黒字化」しない医院の罠",
      desc: "KPIの不在と経費計算の甘さが「忙しいのに儲からない」の正体。",
      color: "bg-emerald-50",
      accent: "text-emerald-700",
      border: "border-emerald-100",
    },
  ];

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
    <div className="min-h-screen bg-white font-sans text-gray-800 selection:bg-green-200 selection:text-green-900 scroll-smooth">

      {/* ============================================================
          Navigation
          ============================================================ */}
      <nav className="fixed w-full bg-white/95 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 sm:h-20 items-center">
            <Link href="/" className="flex-shrink-0 flex items-center gap-2.5">
              <div className="w-9 h-9 bg-gradient-to-br from-green-700 to-green-900 rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-sm">
                A
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-xl tracking-wider text-gray-900">ARCH</span>
                <span className="text-[9px] font-semibold text-gray-400 tracking-[0.25em]">アーチ</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-7">
              <a href="#services" className="text-sm font-semibold text-gray-500 hover:text-green-700 transition-colors">事業内容</a>
              <a href="#pricing" className="text-sm font-semibold text-gray-500 hover:text-green-700 transition-colors">料金</a>
              <a href="#company" className="text-sm font-semibold text-gray-500 hover:text-green-700 transition-colors">会社概要</a>
              <a href="#columns" className="text-sm font-semibold text-gray-500 hover:text-green-700 transition-colors">コラム</a>
              <a
                href="#contact"
                className="bg-green-800 hover:bg-green-900 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-colors shadow-sm"
              >
                無料相談
              </a>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-gray-600 p-2 -mr-2"
              aria-label="メニューを開閉"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-5 py-6 space-y-5">
            {[
              { href: "#services", label: "事業内容" },
              { href: "#pricing", label: "料金" },
              { href: "#company", label: "会社概要" },
              { href: "#columns", label: "コラム" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-base font-semibold text-gray-700 hover:text-green-700 transition-colors py-1"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="block bg-green-800 hover:bg-green-900 text-white px-6 py-3 rounded-full text-base font-bold text-center transition-colors mt-2"
            >
              無料相談はこちら
            </a>
          </div>
        )}
      </nav>

      {/* ============================================================
          1. HERO
          ============================================================ */}
      <section className="pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-44 lg:pb-32 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center lg:text-left lg:mx-0">
            <p className="text-green-700 font-bold text-sm tracking-wide mb-4 sm:mb-6">
              訪問歯科コンサルティングのパイオニア
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight sm:leading-tight lg:leading-tight mb-6 sm:mb-8">
              訪問歯科の<br className="sm:hidden" />
              「現場のリアル」から、
              <br />
              <span className="text-green-800">
                圧倒的な地域No.1医院
              </span>
              を創る。
            </h1>
            <p className="text-base sm:text-lg text-gray-500 leading-relaxed sm:leading-loose mb-8 sm:mb-10 max-w-xl mx-auto lg:mx-0">
              独自の現場ノウハウ・専用アプリ・BPO支援で、
              立ち上げからV字回復まで伴走。
              ランニングコストを抑え、収益最大化を実現します。
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a
                href="#contact"
                className="bg-green-800 hover:bg-green-900 text-white px-7 py-4 rounded-full text-base font-bold transition-colors shadow-md flex items-center justify-center gap-2"
              >
                無料オンライン相談 <ArrowRight size={18} />
              </a>
              <a
                href="#services"
                className="border-2 border-gray-200 hover:border-green-200 text-gray-700 hover:text-green-800 px-7 py-4 rounded-full text-base font-bold transition-colors flex items-center justify-center gap-2"
              >
                事業内容を見る
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          2. PICK UP
          ============================================================ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="mb-10 sm:mb-12">
            <p className="text-green-700 font-bold text-xs tracking-widest uppercase mb-2">Pick Up</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">注目のコラム</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {pickupArticles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="group block rounded-2xl border border-gray-100 hover:border-green-200 shadow-sm hover:shadow-lg transition-all overflow-hidden"
              >
                {/* Image placeholder */}
                <div className={`h-40 sm:h-44 ${article.color} flex items-center justify-center`}>
                  <span className={`text-sm font-bold ${article.accent} opacity-60`}>{article.cat}</span>
                </div>
                <div className="p-5 sm:p-6">
                  <span className={`inline-block text-xs font-bold ${article.accent} ${article.color} px-3 py-1 rounded-full mb-3 border ${article.border}`}>
                    {article.cat}
                  </span>
                  <h3 className="text-base font-bold text-gray-900 leading-relaxed mb-2 group-hover:text-green-700 transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {article.desc}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          3. SERVICE
          ============================================================ */}
      <section id="services" className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="mb-10 sm:mb-14 text-center">
            <p className="text-green-700 font-bold text-xs tracking-widest uppercase mb-2">Service</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">事業内容</h2>
            <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
              訪問歯科コンサルティングを主軸に、医療介護業界の課題をワンストップで解決します。
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-700 mb-5">
                <Briefcase size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug">
                医療介護特化型
                <br />営業コンサルティング
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">
                訪問歯科・訪問看護で培った泥臭いノウハウをベースに、戦略立案から同行営業での実地指導まで。元小学校教諭の代表だからこそできる、マインドセットからの伴走支援。
              </p>
              <div className="flex items-center gap-2">
                <HeartHandshake className="text-green-600 shrink-0" size={16} />
                <span className="text-xs font-semibold text-green-700">現場主義の徹底支援</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-700 mb-5">
                <Cpu size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug">
                独自アプリケーション
                <br />提供
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">
                現場の事務作業やルート調整の工数を激減させる、ARCH専用システム。導入医院の業務効率を飛躍的に改善し、スタッフがコア業務に集中できる環境を実現します。
              </p>
              <div className="flex items-center gap-2">
                <Smartphone className="text-blue-600 shrink-0" size={16} />
                <span className="text-xs font-semibold text-blue-700">契約医院は無料利用可</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-700 mb-5">
                <FileText size={24} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug">
                訪問歯科BPO
                <br />（裏側事務代行）
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-5">
                レセプト業務、書類作成、施設とのスケジュール調整など、煩雑なバックオフィス業務を丸ごと代行。少数精鋭の医院でも、診療に100%集中できる体制を構築します。
              </p>
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-purple-600 shrink-0" size={16} />
                <span className="text-xs font-semibold text-purple-700">月額プランで対応可能</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          4. COMPANY & VISION
          ============================================================ */}
      <section id="company" className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="mb-10 sm:mb-14">
            <p className="text-green-700 font-bold text-xs tracking-widest uppercase mb-2">Company / Vision</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900">代表ストーリー</h2>
          </div>

          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            {/* Image area */}
            <div className="mb-8 lg:mb-0">
              <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-green-100 to-green-50 aspect-[4/3] flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/ceo.jpg"
                  alt="代表 鈴木 集"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    if (target.parentElement) {
                      target.parentElement.innerHTML =
                        '<div class="flex flex-col items-center justify-center h-full text-green-700 opacity-50"><p class="text-sm font-semibold">代表 鈴木 集</p><p class="text-xs mt-1">合同会社ARCH</p></div>';
                    }
                  }}
                />
              </div>
            </div>

            {/* Text area */}
            <div>
              <Quote className="text-green-200 mb-4" size={32} />
              <p className="text-base sm:text-lg text-gray-700 leading-loose mb-5">
                元小学校教諭が見た、訪問歯科のいびつな現実と挑戦——。
                「人の成長に寄り添う」経験を活かし、
                医療・介護の現場で働く方々が自信を持って事業を成長させられるよう伴走したい。
                そんな想いでARCHを立ち上げました。
              </p>
              <p className="text-base sm:text-lg text-gray-700 leading-loose mb-8">
                訪問歯科という成長市場で、現場力と収益力の両立は容易ではありません。
                だからこそ、机上の空論ではなく泥臭い現場主義で結果を出し続けます。
              </p>

              <div className="border-t border-gray-100 pt-6 mb-8">
                <p className="text-xs text-gray-400 font-semibold mb-1 tracking-wide">合同会社ARCH 代表</p>
                <p className="text-xl font-extrabold text-gray-900 mb-3">鈴木 集</p>
                <div className="space-y-1 text-sm text-gray-500">
                  <p>元小学校教諭 → 訪問歯科業界へ転身</p>
                  <p>訪問歯科コンサルティングの第一人者として活躍</p>
                </div>
              </div>

              <a
                href="#ceo-detail"
                className="inline-flex items-center gap-2 text-green-700 font-bold text-sm hover:text-green-900 transition-colors"
              >
                代表ストーリーを読む <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          5. LATEST COLUMNS
          ============================================================ */}
      <section id="columns" className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="mb-10 sm:mb-14 text-center">
            <p className="text-green-700 font-bold text-xs tracking-widest uppercase mb-2">Latest Columns</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">最新コラム</h2>
            <p className="text-gray-500 text-base leading-relaxed max-w-xl mx-auto">
              訪問歯科の「現場のリアル」を、経営・営業・運営の視点から発信しています。
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {allColumns.map((col, i) => (
              <Link
                key={`${col.href}-${i}`}
                href={col.href}
                className="group bg-white rounded-2xl border border-gray-100 hover:border-green-200 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col"
              >
                <div className="h-1.5 bg-gradient-to-r from-green-700 to-green-400"></div>
                <div className="p-5 sm:p-6 flex-1 flex flex-col">
                  <span className="inline-block text-xs font-bold text-green-700 bg-green-50 px-3 py-1 rounded-full mb-3 self-start">
                    {col.cat}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-2 leading-relaxed group-hover:text-green-700 transition-colors flex-1">
                    {col.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed mb-4">
                    {col.desc}
                  </p>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-green-700 group-hover:gap-2 transition-all">
                    続きを読む <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          6. PRICING
          ============================================================ */}
      <section id="pricing" className="py-16 sm:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-green-700 font-bold text-xs tracking-widest uppercase mb-2">Pricing</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">料金プラン</h2>
            <p className="text-gray-500 text-base leading-relaxed max-w-xl mx-auto">
              貴院のフェーズに合わせてお選びいただけます。
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-5 sm:gap-6 items-stretch">
            {/* ---- Light Plan ---- */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200 flex flex-col">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Zap className="text-gray-500" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">ライトプラン</h3>
                  <p className="text-xs text-gray-400">まずは始めたい方に</p>
                </div>
              </div>
              <div className="mb-5">
                <span className="text-3xl sm:text-4xl font-extrabold text-gray-900">10</span>
                <span className="text-base font-bold text-gray-400 ml-1">万円</span>
                <span className="text-sm text-gray-400 ml-1">/月額</span>
              </div>
              <div className="border-t border-gray-100 pt-5 space-y-3 flex-1">
                {["訪問歯科の運営サポート", "月1回 Web/対面ミーティング", "ARCH独自アプリ使用可能", "LINE等での相談", "実地支援（別途3万円）"].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={16} />
                    <p className="text-sm text-gray-600">{item}</p>
                  </div>
                ))}
              </div>
              <a href="#contact" className="mt-6 block text-center bg-gray-100 hover:bg-gray-200 text-gray-700 px-5 py-3 rounded-full text-sm font-bold transition-colors">
                お問い合わせ
              </a>
            </div>

            {/* ---- Standard Plan (Popular) ---- */}
            <div className="bg-gradient-to-b from-green-800 to-green-900 rounded-2xl p-6 sm:p-8 shadow-lg border-2 border-green-600 flex flex-col relative lg:-mt-2 lg:mb-[-8px]">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="bg-yellow-400 text-yellow-900 text-xs font-bold px-4 py-1 rounded-full shadow-sm flex items-center gap-1">
                  <Star size={10} /> 一番人気
                </span>
              </div>
              <div className="flex items-center gap-3 mb-5 mt-2">
                <div className="w-10 h-10 bg-green-700/50 rounded-lg flex items-center justify-center">
                  <Star className="text-yellow-300" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">スタンダードプラン</h3>
                  <p className="text-xs text-green-200">成長を加速させたい方に</p>
                </div>
              </div>
              <div className="mb-5">
                <span className="text-3xl sm:text-4xl font-extrabold text-white">30</span>
                <span className="text-base font-bold text-green-200 ml-1">万円</span>
                <span className="text-sm text-green-300 ml-1">/月額</span>
              </div>
              <div className="border-t border-green-700/50 pt-5 space-y-3 flex-1">
                {["ライトプランの全内容を含む", "月4回 Web/対面ミーティング", "経営相談", "BPO（内容要相談）", "実地支援（月1回無償 / 2回目以降別途2万円）"].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="text-yellow-300 shrink-0 mt-0.5" size={16} />
                    <p className="text-sm text-green-50">{item}</p>
                  </div>
                ))}
              </div>
              <a href="#contact" className="mt-6 block text-center bg-white hover:bg-green-50 text-green-900 px-5 py-3 rounded-full text-sm font-bold transition-colors shadow-sm">
                お問い合わせ
              </a>
            </div>

            {/* ---- Premium Plan ---- */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border-2 border-yellow-200 flex flex-col relative">
              <div className="absolute -top-3 right-5">
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 text-xs font-bold px-4 py-1 rounded-full shadow-sm flex items-center gap-1">
                  <Crown size={10} /> 最上位
                </span>
              </div>
              <div className="flex items-center gap-3 mb-5 mt-2">
                <div className="w-10 h-10 bg-yellow-50 rounded-lg flex items-center justify-center">
                  <Crown className="text-yellow-600" size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">プレミアムプラン</h3>
                  <p className="text-xs text-gray-400">圧倒的な成長を実現</p>
                </div>
              </div>
              <div className="mb-5">
                <span className="text-3xl sm:text-4xl font-extrabold text-gray-900">50</span>
                <span className="text-base font-bold text-gray-400 ml-1">万円</span>
                <span className="text-sm text-gray-400 ml-1">/月額</span>
              </div>
              <div className="border-t border-gray-100 pt-5 space-y-3 flex-1">
                {["スタンダードプランの全内容を含む", "医院オリジナルWebアプリ開発", "営業同行・代行", "経営層との会合セッティング"].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={16} />
                    <p className="text-sm text-gray-600">{item}</p>
                  </div>
                ))}
              </div>
              <a href="#contact" className="mt-6 block text-center bg-gray-900 hover:bg-gray-800 text-white px-5 py-3 rounded-full text-sm font-bold transition-colors shadow-sm">
                お問い合わせ
              </a>
            </div>
          </div>

          <p className="text-center text-xs sm:text-sm text-gray-400 mt-8">
            ※ 別途初期費用 100,000円（税別）がかかります。料金はすべて税別表示です。
          </p>

          {/* ---- お試しコンサルティングプラン ---- */}
          <div id="trial" className="mt-16 sm:mt-20">
            <div className="text-center mb-8">
              <p className="text-green-700 font-bold text-xs tracking-widest uppercase mb-2">Trial Plan</p>
              <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-3">お試しコンサルティングプラン</h3>
              <span className="inline-block bg-yellow-400 text-yellow-900 text-xs font-bold px-4 py-1 rounded-full">
                初回限定・1ヶ月
              </span>
            </div>
            <div className="max-w-2xl mx-auto bg-white rounded-2xl p-6 sm:p-8 shadow-sm border-2 border-green-200">
              <div className="text-center mb-6">
                <h4 className="text-base font-bold text-gray-700 mb-2">お試しコンサルティング</h4>
                <span className="text-4xl font-extrabold text-green-800">70,000</span>
                <span className="text-base font-bold text-gray-400 ml-1">円</span>
                <span className="text-sm text-gray-400 ml-1">/月</span>
              </div>
              <div className="border-t border-gray-100 pt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
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
                    <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={16} />
                    <p className="text-sm text-gray-600">{item}</p>
                  </div>
                ))}
              </div>
              <div className="mt-5 bg-green-800 rounded-xl p-3 sm:p-4 text-center">
                <p className="text-green-50 text-sm font-bold">
                  まずは1ヶ月、訪問歯科コンサルティングの可能性を体感してください。
                </p>
              </div>
              <div className="mt-3 space-y-0.5 text-xs text-gray-400">
                <p>※ お試し期間終了後、本契約される場合は初期費用を無償とさせていただきます。</p>
                <p>※ お試しプランは初回契約時のみご利用いただけます。料金は税別表示です。</p>
              </div>
              <a
                href="#contact"
                className="mt-5 block text-center bg-green-800 hover:bg-green-900 text-white px-5 py-3 rounded-full text-sm font-bold transition-colors shadow-sm"
              >
                お試しプランについて相談する
              </a>
            </div>
          </div>

          {/* ---- 単発 実地支援サービス ---- */}
          <div id="onsite" className="mt-16 sm:mt-20">
            <div className="text-center mb-8">
              <p className="text-green-700 font-bold text-xs tracking-widest uppercase mb-2">On-site Support</p>
              <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-3">単発 実地支援サービス</h3>
              <span className="inline-block bg-green-100 text-green-800 text-xs font-bold px-4 py-1 rounded-full">
                単発プラン
              </span>
            </div>
            <div className="max-w-3xl mx-auto bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-200">
              <div className="text-center mb-6">
                <h4 className="text-sm font-bold text-gray-500 mb-2">1日実地支援（訪問診療同行＋改善レポート）</h4>
                <span className="text-4xl font-extrabold text-green-800">50,000</span>
                <span className="text-base font-bold text-gray-400 ml-1">円</span>
                <span className="text-sm text-gray-400 ml-1">/1回</span>
              </div>
              <div className="border-t border-gray-100 pt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  { num: "01", title: "訪問診療の同行", desc: "実際の訪問診療に同行し、現場のオペレーション・患者様対応・スタッフの動きを確認します。" },
                  { num: "02", title: "改善レポートの作成", desc: "同行後1週間を目処に詳細レポートを提出。改善すべきポイントを具体的なアクション付きでまとめます。" },
                  { num: "03", title: "算定可能な点数の提案", desc: "取りこぼしている算定項目を洗い出し。算定の最適化だけで月数万円〜数十万円の収益改善につながるケースも。" },
                ].map((step) => (
                  <div key={step.num}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="w-7 h-7 bg-green-100 rounded-full flex items-center justify-center text-green-800 font-bold text-xs">{step.num}</span>
                      <h5 className="font-bold text-gray-900 text-sm">{step.title}</h5>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                  </div>
                ))}
              </div>
              <div className="mt-6 bg-green-800 rounded-xl p-3 sm:p-4 text-center">
                <p className="text-green-50 text-sm font-bold">
                  「訪問歯科に興味はあるが、まずは現状を診てほしい」という医院様に最適なプランです。
                </p>
              </div>
              <p className="text-xs text-gray-400 mt-3">※ 実地支援は単発でのご利用が可能です。料金は税別表示です。</p>
              <a
                href="#contact"
                className="mt-5 block text-center bg-green-800 hover:bg-green-900 text-white px-5 py-3 rounded-full text-sm font-bold transition-colors shadow-sm max-w-sm mx-auto"
              >
                実地支援について相談する
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          7. CONTACT
          ============================================================ */}
      <section id="contact" className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-green-700 font-bold text-xs tracking-widest uppercase mb-2">Contact</p>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">お問い合わせ</h2>
            <p className="text-gray-500 text-base leading-relaxed max-w-xl mx-auto">
              サービスに関するご質問・ご相談は、以下のフォームからお気軽にどうぞ。
            </p>
          </div>

          <div className="max-w-xl mx-auto">
            <form
              action="https://formsubmit.co/50ee2f45d5bdcbfa397c1f5135d41780"
              method="POST"
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 space-y-5"
            >
              <input type="hidden" name="_subject" value="ARCHホームページからのお問い合わせ" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://www.arch-yh.com/" />

              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-1.5">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="山田 太郎"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent text-base"
                />
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-bold text-gray-700 mb-1.5">
                  医院・施設名
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  placeholder="○○歯科クリニック"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent text-base"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1.5">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="info@example.com"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent text-base"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-1.5">
                  お問い合わせ内容 <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="ご相談内容をお書きください"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent text-base resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-800 hover:bg-green-900 text-white px-6 py-4 rounded-full text-base font-bold transition-colors shadow-md flex items-center justify-center gap-2"
              >
                <Send size={18} />
                送信する
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ============================================================
          FOOTER
          ============================================================ */}
      <footer className="bg-gray-900 text-gray-400 py-10 sm:py-12">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-5">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-green-800 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                A
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-base tracking-wider text-white">ARCH</span>
                <span className="text-[8px] font-semibold text-gray-500 tracking-[0.2em]">アーチ</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm">
              &copy; {new Date().getFullYear()} 合同会社ARCH All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
