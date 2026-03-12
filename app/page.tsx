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
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo.jpg"
                alt="合同会社ARCH"
                className="h-12 w-auto rounded-lg"
              />
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
                  alt="訪問歯科コンサルティング - ARCH"
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
              訪問歯科コンサルティングの3つのプラン。貴院のフェーズに合わせてお選びいただけます。
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
                  <p className="text-sm text-gray-700 font-medium">訪問歯科の基本サポート</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={18} />
                  <p className="text-sm text-gray-700 font-medium">ARCH独自アプリケーション使用可能</p>
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
                  <p className="text-sm text-green-50 font-medium">月2回程度のWeb/対面ミーティングによる密な経営支援</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-yellow-300 shrink-0 mt-0.5" size={18} />
                  <p className="text-sm text-green-50 font-medium">ARCH独自アプリケーション使用可能</p>
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
                  <p className="text-xs text-gray-500 font-medium">圧倒的な成長を実現したい方に</p>
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
                  <p className="text-sm text-gray-700 font-medium">週1回程度のWeb/対面ミーティング</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={18} />
                  <p className="text-sm text-gray-700 font-medium">貴院専用「医院オリジナルアプリケーション等の開発」をフルサポート</p>
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
            ※ 料金はすべて税別表示です。詳細はお問い合わせください。
          </p>
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
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/ceo.jpg"
                  alt="代表 鈴木集"
                  className="w-full h-72 lg:h-full object-cover object-top"
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
              action="https://formsubmit.co/atsumu.suzuki@arch-yh.com"
              method="POST"
              className="bg-gray-50 rounded-3xl p-8 lg:p-12 shadow-lg shadow-gray-200/50 border border-gray-100 space-y-6"
            >
              {/* FormSubmit設定 (リダイレクト先などを後で変更可能) */}
              <input type="hidden" name="_subject" value="ARCHホームページからのお問い合わせ" />
              <input type="hidden" name="_captcha" value="false" />
              {/* TODO: サンクスページURLを設定する場合は以下を有効化 */}
              {/* <input type="hidden" name="_next" value="https://your-domain.com/thanks" /> */}

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
      {/* Column / SEO Articles Section  */}
      {/* ============================== */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-green-800 font-extrabold tracking-widest text-sm uppercase mb-3">
              Column
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">
              訪問歯科お役立ちコラム
            </h3>
            <p className="text-lg text-gray-600 font-medium">
              訪問歯科の始め方・算定・営業について、現場を知るプロが徹底解説するコラム集です。
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <a href="/column/houmon-shika-hajimekata" className="bg-white rounded-2xl p-8 shadow-lg shadow-gray-200/50 border border-gray-100 hover:border-green-200 hover:shadow-xl transition-all group">
              <span className="text-xs font-bold text-green-700 mb-3 block tracking-wider">訪問歯科 どうやる・始め方</span>
              <h4 className="text-xl font-extrabold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                訪問歯科の始め方を完全ガイド
              </h4>
              <p className="text-sm text-gray-600 font-medium leading-relaxed">
                届出・人員配置・機材・営業・算定まで、訪問歯科の立ち上げに必要な全ステップを解説します。
              </p>
            </a>
            <a href="/column/houmon-shika-santei" className="bg-white rounded-2xl p-8 shadow-lg shadow-gray-200/50 border border-gray-100 hover:border-green-200 hover:shadow-xl transition-all group">
              <span className="text-xs font-bold text-green-700 mb-3 block tracking-wider">訪問歯科 算定</span>
              <h4 className="text-xl font-extrabold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                訪問歯科の算定を徹底解説
              </h4>
              <p className="text-sm text-gray-600 font-medium leading-relaxed">
                歯科訪問診療料・各種加算・レセプトの実務ポイントまで、算定漏れゼロで収益を最大化する方法を解説。
              </p>
            </a>
            <a href="/column/houmon-shika-eigyo" className="bg-white rounded-2xl p-8 shadow-lg shadow-gray-200/50 border border-gray-100 hover:border-green-200 hover:shadow-xl transition-all group">
              <span className="text-xs font-bold text-green-700 mb-3 block tracking-wider">訪問歯科 営業</span>
              <h4 className="text-xl font-extrabold text-gray-900 mb-3 group-hover:text-green-700 transition-colors">
                訪問歯科の営業戦略を徹底解説
              </h4>
              <p className="text-sm text-gray-600 font-medium leading-relaxed">
                介護施設への営業アプローチ、ケアマネとの信頼関係構築、営業トークのコツまで網羅的に解説します。
              </p>
            </a>
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
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/logo.jpg"
                alt="合同会社ARCH"
                className="h-9 w-auto rounded-md"
              />
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
