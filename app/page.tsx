"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Building2,
  Users,
  ArrowRight,
  CheckCircle2,
  Menu,
  X,
  Stethoscope,
  ShieldCheck,
  HeartHandshake,
  Smartphone,
  Network,
  Crown,
  Star,
  Zap,
  Send,
  Quote,
} from "lucide-react";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 selection:bg-green-200 selection:text-green-900 scroll-smooth">
      {/* ============================== */}
      {/* Navigation                     */}
      {/* ============================== */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 border-b border-gray-100 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* ---------- Logo ---------- */}
            <Link href="/" className="flex-shrink-0 flex items-center gap-3">
              {/*
                TODO: 会社のロゴ画像が用意できたら、以下のコメントを解除し
                <div> ブロックと <span> を削除してください。
                <img
                  src="/images/logo.png"
                  alt="合同会社ARCH"
                  className="h-10 w-auto"
                />
              */}
              <div className="w-10 h-10 bg-gradient-to-br from-green-700 to-green-900 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-green-900/20">
                A
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-2xl tracking-wider text-gray-900">
                  ARCH
                </span>
                <span className="text-[10px] font-semibold text-gray-400 tracking-[0.25em]">
                  アーチ
                </span>
              </div>
            </Link>

            {/* ---------- Desktop Nav ---------- */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-sm font-bold text-gray-600 hover:text-green-700 transition-colors">
                ARCHについて
              </a>
              <a href="#services" className="text-sm font-bold text-gray-600 hover:text-green-700 transition-colors">
                事業内容
              </a>
              <a href="#pricing" className="text-sm font-bold text-gray-600 hover:text-green-700 transition-colors">
                料金プラン
              </a>
              <a href="#ceo" className="text-sm font-bold text-gray-600 hover:text-green-700 transition-colors">
                代表メッセージ
              </a>
              <a href="#columns" className="text-sm font-bold text-gray-600 hover:text-green-700 transition-colors">
                コラム
              </a>
              <a
                href="#contact"
                className="bg-green-800 hover:bg-green-900 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                お問い合わせ
              </a>
            </div>

            {/* ---------- Mobile Hamburger ---------- */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600"
                aria-label="メニューを開閉"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* ---------- Mobile Menu ---------- */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 py-6 space-y-4">
            <a href="#about" onClick={() => setIsMenuOpen(false)} className="block text-sm font-bold text-gray-600 hover:text-green-700 transition-colors">
              ARCHについて
            </a>
            <a href="#services" onClick={() => setIsMenuOpen(false)} className="block text-sm font-bold text-gray-600 hover:text-green-700 transition-colors">
              事業内容
            </a>
            <a href="#pricing" onClick={() => setIsMenuOpen(false)} className="block text-sm font-bold text-gray-600 hover:text-green-700 transition-colors">
              料金プラン
            </a>
            <a href="#ceo" onClick={() => setIsMenuOpen(false)} className="block text-sm font-bold text-gray-600 hover:text-green-700 transition-colors">
              代表メッセージ
            </a>
            <a href="#columns" onClick={() => setIsMenuOpen(false)} className="block text-sm font-bold text-gray-600 hover:text-green-700 transition-colors">
              コラム
            </a>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="block bg-green-800 hover:bg-green-900 text-white px-6 py-2.5 rounded-full text-sm font-bold text-center transition-all duration-300"
            >
              お問い合わせ
            </a>
          </div>
        )}
      </nav>

      {/* ============================== */}
      {/* Hero Section                   */}
      {/* ============================== */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3">
          <div className="w-[800px] h-[800px] rounded-full bg-gradient-to-br from-green-50 to-green-100/50 blur-3xl opacity-60"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
            <div className="lg:col-span-7 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-100 text-green-800 font-bold text-sm mb-6">
                <span className="flex h-2 w-2 rounded-full bg-green-600 animate-pulse"></span>
                訪問歯科・医療介護のフロンティアへ
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 mb-6 leading-[1.2]">
                医療・介護事業の
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-green-500">
                  「現場力」と「収益力」
                </span>
                <br />
                を最大化する。
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-10 leading-relaxed font-medium">
                圧倒的な実務ノウハウと、最新の独自システム。
                <br className="hidden sm:block" />
                現場の想いと経営の現実をつなぐ架け橋として、
                <br className="hidden sm:block" />
                貴院の事業を確実な黒字化と成長へ導きます。
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#contact"
                  className="bg-green-800 hover:bg-green-900 text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  無料相談を予約する <ArrowRight size={20} />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 mt-16 lg:mt-0 hidden lg:block">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/5]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/hero.jpg"
                  alt="訪問歯科コンサルティング"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <p className="font-bold text-2xl mb-2">現場を知るプロの伴走</p>
                  <p className="text-green-50 font-medium">導入・営業・運営・算定までワンストップ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== */}
      {/* Services Section               */}
      {/* ============================== */}
      <section id="services" className="py-24 bg-gray-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-green-800 font-extrabold tracking-widest text-sm uppercase mb-3">
              Core &amp; Synergy Businesses
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              事業内容
            </h3>
            <p className="text-lg text-gray-600 font-medium">
              「訪問歯科コンサルティング」を主軸に、そこから派生した圧倒的な現場ノウハウで、医療介護業界全体の課題を解決します。
            </p>
          </div>

          {/* Main Service (Big Card) */}
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl shadow-gray-200/50 border border-green-50 mb-12 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-bl-full -z-10 transition-transform group-hover:scale-110"></div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-green-800 rounded-2xl flex items-center justify-center text-white shadow-lg">
                <Stethoscope size={36} />
              </div>
              <div>
                <span className="text-green-700 font-bold text-sm tracking-wider">主事業 (MAIN BUSINESS)</span>
                <h4 className="text-3xl font-extrabold text-gray-900">訪問歯科コンサルティング</h4>
              </div>
            </div>
            <p className="text-xl text-gray-700 font-medium leading-relaxed mb-8 max-w-4xl">
              訪問歯科分野のフロンティアとして、未経験からの立ち上げから、既存事業のV字回復までを強力に牽引します。
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h5 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                  <Smartphone className="text-green-600" size={20} /> 独自アプリの提供
                </h5>
                <p className="text-gray-600 text-sm font-medium">
                  現場の事務作業やルート調整の工数を激減させる、ARCH専用のシステムをご利用いただけます。
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h5 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                  <Network className="text-green-600" size={20} /> 医院ネットワーク
                </h5>
                <p className="text-gray-600 text-sm font-medium">
                  弊社の取引先医院様同士をつなぎ、有益な情報共有や意見交換ができるコミュニティを提供します。
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <h5 className="font-bold text-lg text-gray-900 mb-3 flex items-center gap-2">
                  <CheckCircle2 className="text-green-600" size={20} /> 全方位サポート
                </h5>
                <p className="text-gray-600 text-sm font-medium">
                  導入支援、営業支援、運営支援、精緻な算定支援、さらにはBPOや経営改善までワンストップで対応。
                </p>
              </div>
            </div>
          </div>

          {/* Sub Services (2 Cards Grid) */}
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50 border border-gray-100 hover:border-green-200 transition-colors">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center text-green-800 mb-6">
                <Users size={28} />
              </div>
              <h4 className="text-2xl font-extrabold text-gray-900 mb-4">
                医療介護特化型<br />営業コンサルティング
              </h4>
              <p className="text-gray-600 font-medium leading-relaxed mb-6">
                訪問歯科・訪問看護で培った泥臭いノウハウをベースに、戦略立案から同行営業での実地指導まで行います。
              </p>
              <div className="bg-orange-50 rounded-xl p-4 border border-orange-100">
                <p className="text-sm text-gray-800 font-bold flex items-start gap-2">
                  <HeartHandshake className="text-orange-500 shrink-0" size={18} />
                  <span>
                    【ARCHの強み】元小学校教諭の代表だからこそできる、「営業担当者の自己肯定感を高め、行動を変える」マインドセットからの伴走支援が特徴です。
                  </span>
                </p>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50 border border-gray-100 hover:border-green-200 transition-colors">
              <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center text-green-800 mb-6">
                <Building2 size={28} />
              </div>
              <h4 className="text-2xl font-extrabold text-gray-900 mb-4">
                老人ホーム紹介事業<br />
                <span className="text-lg text-gray-500 font-bold">（完全中立なマッチング）</span>
              </h4>
              <p className="text-gray-600 font-medium leading-relaxed mb-6">
                利益優先の悪質な紹介業者とは一線を画します。弊社は別でメイン事業の基盤があるため、施設様からの紹介手数料の高低で患者様を斡旋することは一切ありません。
              </p>
              <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                <p className="text-sm text-gray-800 font-bold flex items-start gap-2">
                  <ShieldCheck className="text-blue-600 shrink-0" size={18} />
                  <span>
                    純粋に患者様（利用者様）が望まれる環境面・費用面を重視します。また、スタッフに看護師が在籍しているため、医療的観点からも最適な施設選びをお約束します。
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== */}
      {/* Pricing Section                */}
      {/* ============================== */}
      <section id="pricing" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2">
          <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-br from-green-50 to-green-100/30 blur-3xl opacity-50"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-green-800 font-extrabold tracking-widest text-sm uppercase mb-3">
              Pricing
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              料金プラン
            </h3>
            <p className="text-lg text-gray-600 font-medium">
              貴院のフェーズに合わせてお選びいただけます。
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-stretch">
            {/* ---- Light Plan ---- */}
            <div className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50 border border-gray-200 flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gray-100 rounded-xl flex items-center justify-center">
                  <Zap className="text-gray-600" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-extrabold text-gray-900">ライトプラン</h4>
                  <p className="text-xs text-gray-500 font-medium">まずは始めたい方に</p>
                </div>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-gray-900">10</span>
                <span className="text-lg font-bold text-gray-500 ml-1">万円</span>
                <span className="text-sm text-gray-400 ml-1">/月額</span>
              </div>
              <div className="border-t border-gray-100 pt-6 space-y-4 flex-1">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={18} />
                  <p className="text-sm text-gray-700 font-medium">訪問歯科の運営サポート</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={18} />
                  <p className="text-sm text-gray-700 font-medium">月1回 Web/対面ミーティング</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={18} />
                  <p className="text-sm text-gray-700 font-medium">ARCH独自アプリ使用可能</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={18} />
                  <p className="text-sm text-gray-700 font-medium">LINE等での相談</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={18} />
                  <p className="text-sm text-gray-700 font-medium">実地支援（別途3万円）</p>
                </div>
              </div>
              <a
                href="#contact"
                className="mt-8 block text-center bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3.5 rounded-full text-sm font-bold transition-all"
              >
                お問い合わせ
              </a>
            </div>

            {/* ---- Standard Plan (Popular) ---- */}
            <div className="bg-gradient-to-b from-green-800 to-green-900 rounded-3xl p-8 shadow-2xl shadow-green-900/30 border-2 border-green-600 flex flex-col relative lg:-mt-4 lg:mb-[-16px]">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <span className="bg-yellow-400 text-yellow-900 text-xs font-extrabold px-4 py-1.5 rounded-full shadow-md flex items-center gap-1">
                  <Star size={12} /> 一番人気
                </span>
              </div>
              <div className="flex items-center gap-3 mb-6 mt-2">
                <div className="w-12 h-12 bg-green-700/50 rounded-xl flex items-center justify-center">
                  <Star className="text-yellow-300" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-extrabold text-white">スタンダードプラン</h4>
                  <p className="text-xs text-green-200 font-medium">成長を加速させたい方に</p>
                </div>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-white">30</span>
                <span className="text-lg font-bold text-green-200 ml-1">万円</span>
                <span className="text-sm text-green-300 ml-1">/月額</span>
              </div>
              <div className="border-t border-green-700/50 pt-6 space-y-4 flex-1">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-yellow-300 shrink-0 mt-0.5" size={18} />
                  <p className="text-sm text-green-50 font-medium">ライトプランの全内容を含む</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-yellow-300 shrink-0 mt-0.5" size={18} />
                  <p className="text-sm text-green-50 font-medium">月4回 Web/対面ミーティング</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-yellow-300 shrink-0 mt-0.5" size={18} />
                  <p className="text-sm text-green-50 font-medium">経営相談</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-yellow-300 shrink-0 mt-0.5" size={18} />
                  <p className="text-sm text-green-50 font-medium">BPO（内容要相談）</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-yellow-300 shrink-0 mt-0.5" size={18} />
                  <p className="text-sm text-green-50 font-medium">実地支援（月1回無償 / 2回目以降別途2万円）</p>
                </div>
              </div>
              <a
                href="#contact"
                className="mt-8 block text-center bg-white hover:bg-green-50 text-green-900 px-6 py-3.5 rounded-full text-sm font-bold transition-all shadow-lg"
              >
                お問い合わせ
              </a>
            </div>

            {/* ---- Premium Plan ---- */}
            <div className="bg-white rounded-3xl p-8 shadow-lg shadow-gray-200/50 border-2 border-yellow-300 flex flex-col relative">
              <div className="absolute -top-4 right-6">
                <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-yellow-900 text-xs font-extrabold px-4 py-1.5 rounded-full shadow-md flex items-center gap-1">
                  <Crown size={12} /> 最上位
                </span>
              </div>
              <div className="flex items-center gap-3 mb-6 mt-2">
                <div className="w-12 h-12 bg-yellow-50 rounded-xl flex items-center justify-center">
                  <Crown className="text-yellow-600" size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-extrabold text-gray-900">プレミアムプラン</h4>
                  <p className="text-xs text-gray-500 font-medium">圧倒的な成長を実現</p>
                </div>
              </div>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-gray-900">50</span>
                <span className="text-lg font-bold text-gray-500 ml-1">万円</span>
                <span className="text-sm text-gray-400 ml-1">/月額</span>
              </div>
              <div className="border-t border-gray-100 pt-6 space-y-4 flex-1">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={18} />
                  <p className="text-sm text-gray-700 font-medium">スタンダードプランの全内容を含む</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={18} />
                  <p className="text-sm text-gray-700 font-medium">医院オリジナルWebアプリ開発</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={18} />
                  <p className="text-sm text-gray-700 font-medium">営業同行・代行</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={18} />
                  <p className="text-sm text-gray-700 font-medium">経営層との会合セッティング</p>
                </div>
              </div>
              <a
                href="#contact"
                className="mt-8 block text-center bg-gray-900 hover:bg-gray-800 text-white px-6 py-3.5 rounded-full text-sm font-bold transition-all shadow-lg"
              >
                お問い合わせ
              </a>
            </div>
          </div>

          <p className="text-center text-sm text-gray-400 mt-10 font-medium">
            ※ 別途初期費用 100,000円（税別）がかかります。料金はすべて税別表示です。
          </p>

          {/* ---- お試しコンサルティングプラン ---- */}
          <div id="trial" className="mt-20">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-green-800 font-extrabold tracking-widest text-sm uppercase mb-3">
                Trial Plan
              </h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                お試しコンサルティングプラン
              </h3>
              <span className="inline-block bg-yellow-400 text-yellow-900 text-sm font-extrabold px-5 py-1.5 rounded-full">
                初回限定・1ヶ月
              </span>
            </div>
            <div className="max-w-3xl mx-auto bg-white rounded-3xl p-8 md:p-10 shadow-lg shadow-gray-200/50 border-2 border-green-200">
              <div className="text-center mb-8">
                <h4 className="text-xl font-extrabold text-gray-900 mb-2">お試しコンサルティング</h4>
                <div>
                  <span className="text-5xl font-extrabold text-green-800">70,000</span>
                  <span className="text-lg font-bold text-gray-500 ml-1">円</span>
                  <span className="text-sm text-gray-400 ml-1">/月</span>
                </div>
              </div>
              <div className="border-t border-gray-100 pt-6 grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={18} />
                  <p className="text-sm text-gray-700 font-medium">訪問歯科の運営サポート</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={18} />
                  <p className="text-sm text-gray-700 font-medium">月1回のWeb/対面ミーティング</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={18} />
                  <p className="text-sm text-gray-700 font-medium">ARCH独自アプリ使用可能</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={18} />
                  <p className="text-sm text-gray-700 font-medium">経営相談</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={18} />
                  <p className="text-sm text-gray-700 font-medium">1日限定の実地支援</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={18} />
                  <p className="text-sm text-gray-700 font-medium">訪問歯科事業立ち上げ相談</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={18} />
                  <p className="text-sm text-gray-700 font-medium">LINE等での相談</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={18} />
                  <p className="text-sm text-gray-700 font-medium">月間レポート（簡易）</p>
                </div>
              </div>
              <p className="text-center text-xs text-gray-500 mt-6 font-medium">
                ライトプラン（10万円）の内容＋スタンダードプランの一部を含む充実のお試し内容
              </p>
              <div className="mt-6 bg-green-800 rounded-xl p-4 text-center">
                <p className="text-green-50 text-sm font-bold">
                  まずは1ヶ月、訪問歯科コンサルティングの可能性を体感してください。
                </p>
              </div>
              <div className="mt-4 space-y-1 text-xs text-gray-400">
                <p>※ お試し期間終了後、本契約される場合は初期費用を無償とさせていただきます。</p>
                <p>※ お試しプランは初回契約時のみご利用いただけます。料金は税別表示です。</p>
              </div>
              <a
                href="#contact"
                className="mt-6 block text-center bg-green-800 hover:bg-green-900 text-white px-6 py-3.5 rounded-full text-sm font-bold transition-all shadow-lg"
              >
                お試しプランについて相談する
              </a>
            </div>
          </div>

          {/* ---- 単発 実地支援サービス ---- */}
          <div id="onsite" className="mt-20">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-green-800 font-extrabold tracking-widest text-sm uppercase mb-3">
                On-site Support
              </h2>
              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
                単発 実地支援サービス
              </h3>
              <span className="inline-block bg-green-100 text-green-800 text-sm font-extrabold px-5 py-1.5 rounded-full">
                単発プラン
              </span>
            </div>
            <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-10 shadow-lg shadow-gray-200/50 border border-gray-200">
              <div className="text-center mb-8">
                <h4 className="text-lg font-bold text-gray-700 mb-2">1日実地支援（訪問診療同行＋改善レポート）</h4>
                <div>
                  <span className="text-5xl font-extrabold text-green-800">50,000</span>
                  <span className="text-lg font-bold text-gray-500 ml-1">円</span>
                  <span className="text-sm text-gray-400 ml-1">/1回</span>
                </div>
              </div>
              <div className="border-t border-gray-100 pt-8 grid md:grid-cols-3 gap-8">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-800 font-extrabold text-sm">01</span>
                    <h5 className="font-bold text-gray-900">訪問診療の同行</h5>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">実際の訪問診療に同行し、現場のオペレーション・患者様対応・スタッフの動きを確認します。</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-800 font-extrabold text-sm">02</span>
                    <h5 className="font-bold text-gray-900">改善レポートの作成</h5>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">同行後1週間を目処に詳細レポートを提出。伸ばすべきポイント・改善すべきポイントを具体的なアクション付きでまとめます。</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-800 font-extrabold text-sm">03</span>
                    <h5 className="font-bold text-gray-900">算定可能な点数の提案</h5>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">医院のスタッフ数・診療内容をヒアリングし、取りこぼしている算定項目を洗い出し。算定の最適化だけで月数万円〜数十万円の収益改善につながるケースもあります。</p>
                </div>
              </div>
              <div className="mt-8 bg-green-800 rounded-xl p-4 text-center">
                <p className="text-green-50 text-sm font-bold">
                  「訪問歯科に興味はあるが、まずは現状を診てほしい」という医院様に最適なプランです。
                </p>
              </div>
              <p className="text-xs text-gray-400 mt-4">※ 実地支援は単発でのご利用が可能です。料金は税別表示です。</p>
              <a
                href="#contact"
                className="mt-6 block text-center bg-green-800 hover:bg-green-900 text-white px-6 py-3.5 rounded-full text-sm font-bold transition-all shadow-lg max-w-md mx-auto"
              >
                実地支援について相談する
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== */}
      {/* CEO Message Section            */}
      {/* ============================== */}
      <section id="ceo" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-green-800 font-extrabold tracking-widest text-sm uppercase mb-3">
              Message from CEO
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900">
              代表メッセージ
            </h3>
          </div>

          <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 overflow-hidden">
            <div className="lg:grid lg:grid-cols-5">
              {/* Photo */}
              <div className="lg:col-span-2 relative">
                {/*
                  TODO: 代表の顔写真が用意できたら、以下の <img> の src を差し替えてください。
                  例: src="/images/ceo.jpg"
                */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/ceo.jpg"
                  alt="代表 鈴木 集"
                  className="w-full h-72 lg:h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-transparent"></div>
              </div>

              {/* Message */}
              <div className="lg:col-span-3 p-8 lg:p-12 flex flex-col justify-center">
                <Quote className="text-green-200 mb-4" size={40} />
                <p className="text-lg text-gray-700 font-medium leading-relaxed mb-6">
                  {/* TODO: 代表メッセージの本文を差し替えてください */}
                  私は元小学校教諭として「人の成長に寄り添う」仕事をしてきました。その経験を活かし、
                  医療・介護の現場で働く方々が、自信を持って事業を成長させられるよう伴走したい——
                  そんな想いでARCHを立ち上げました。
                </p>
                <p className="text-lg text-gray-700 font-medium leading-relaxed mb-8">
                  {/* TODO: 代表メッセージの続きを差し替えてください */}
                  訪問歯科という成長市場において、現場力と収益力の両立は決して簡単ではありません。
                  だからこそ、私たちは机上の空論ではなく、泥臭い現場主義で結果を出し続けます。
                  医療と介護の未来を、ともにつくりましょう。
                </p>

                <div className="border-t border-gray-100 pt-6">
                  <p className="text-sm text-gray-500 font-medium mb-1">合同会社ARCH 代表</p>
                  <p className="text-2xl font-extrabold text-gray-900">鈴木 集</p>
                  {/* TODO: 経歴を差し替えてください */}
                  <div className="mt-4 space-y-1 text-sm text-gray-500 font-medium">
                    <p>元小学校教諭 → 訪問歯科業界へ転身</p>
                    <p>訪問歯科コンサルティングの第一人者として活躍</p>
                    <p>合同会社ARCH設立、医療介護業界の課題解決に取り組む</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== */}
      {/* Latest Columns Section         */}
      {/* ============================== */}
      <section id="columns" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 -translate-x-1/3 -translate-y-1/3">
          <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-br from-green-50 to-green-100/30 blur-3xl opacity-50"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-green-800 font-extrabold tracking-widest text-sm uppercase mb-3">
              Columns
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              現場向けコラム
            </h3>
            <p className="text-gray-500 text-lg font-medium leading-relaxed">
              訪問歯科の「現場のリアル」を、経営・営業・運営の視点から発信しています。
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { href: "/columns/turnover-strategy", cat: "経営戦略", title: "「スタッフの退職」に怯える院長へ。離職防止よりも優先すべき、たった一つの経営戦略", desc: "属人化を排除し、誰が来ても回る強固な組織の作り方。" },
              { href: "/columns/staff-role", cat: "組織マネジメント", title: "優秀なスタッフが辞めない医院の秘密。元小学校教諭が教える「係活動」マネジメント", desc: "スタッフの定着に必要なのは技術研修ではなくマインド教育。" },
              { href: "/columns/invisible-profit", cat: "営業戦略", title: "現場がドブに捨てている「見えない利益」。患者だけを診る歯医者は淘汰される", desc: "施設スタッフやケアマネとの「信用利益」の築き方。" },
              { href: "/columns/profit-trap", cat: "経営改善", title: "一生懸命訪問しているのに「黒字化」しない医院。院長が見落としている罠", desc: "KPIの不在と経費計算の甘さが「忙しいのに儲からない」の正体。" },
              { href: "/columns/document-hell", cat: "業務改善", title: "訪問歯科が陥る「書類地獄」。ご家族からのクレームを防ぐ唯一の解決策", desc: "書類管理のブラックボックス化を防ぐ仕組みづくり。" },
              { href: "/columns/sales-trap", cat: "営業の落とし穴", title: "院長自らの飛び込み営業。そのパンフレット、実は「その他大勢」の束に埋もれています", desc: "施設側のリアルと、選ばれる仕組みの作り方。" },
              { href: "/columns/communication", cat: "現場コミュニケーション", title: "介護現場で嫌われる衛生士の共通点。良かれと思った「その指導」、実は大迷惑です。", desc: "施設に選ばれ続けるための「適切な距離感」とは。" },
              { href: "/columns/facility-needs", cat: "施設の本音", title: "介護施設における「口腔ケアの序列」。歯医者が現場で煙たがられる本当の理由", desc: "介護現場における口腔ケアの優先順位と、手放されない訪問歯科になる方法。" },
            ].map((col) => (
              <Link
                key={col.href}
                href={col.href}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="h-2 bg-gradient-to-r from-green-700 to-green-500"></div>
                <div className="p-6">
                  <span className="inline-block text-xs font-bold text-green-700 bg-green-50 px-3 py-1 rounded-full mb-3">
                    {col.cat}
                  </span>
                  <h4 className="text-sm font-extrabold text-gray-900 mb-2 group-hover:text-green-700 transition-colors leading-snug">
                    {col.title}
                  </h4>
                  <p className="text-xs text-gray-500 leading-relaxed mb-4">
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

      {/* ============================== */}
      {/* Contact Form Section           */}
      {/* ============================== */}
      <section id="contact" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3">
          <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-br from-green-50 to-green-100/30 blur-3xl opacity-50"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-green-800 font-extrabold tracking-widest text-sm uppercase mb-3">
              Contact
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              お問い合わせ
            </h3>
            <p className="text-lg text-gray-600 font-medium">
              サービスに関するご質問・ご相談は、以下のフォームからお気軽にお問い合わせください。
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <form
              action="https://formsubmit.co/50ee2f45d5bdcbfa397c1f5135d41780"
              method="POST"
              className="bg-gray-50 rounded-3xl p-8 lg:p-12 shadow-lg shadow-gray-200/50 border border-gray-100 space-y-6"
            >
              <input type="hidden" name="_subject" value="ARCHホームページからのお問い合わせ" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://www.arch-yh.com/" />

              <div>
                <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                  お名前 <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="山田 太郎"
                  className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all text-sm"
                />
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-bold text-gray-700 mb-2">
                  医院・施設名
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  placeholder="○○歯科クリニック"
                  className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all text-sm"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                  メールアドレス <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="info@example.com"
                  className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all text-sm"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                  お問い合わせ内容 <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="ご相談内容をお書きください"
                  className="w-full px-4 py-3.5 bg-white border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all text-sm resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-green-800 hover:bg-green-900 text-white px-8 py-4 rounded-full text-lg font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                送信する
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ============================== */}
      {/* Footer                         */}
      {/* ============================== */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-green-800 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                A
              </div>
              <div className="flex flex-col leading-tight">
                <span className="font-bold text-lg tracking-wider text-white">ARCH</span>
                <span className="text-[9px] font-semibold text-gray-500 tracking-[0.2em]">アーチ</span>
              </div>
            </div>
            <p className="text-sm font-medium">
              &copy; {new Date().getFullYear()} 合同会社ARCH All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
