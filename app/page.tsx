"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Menu,
  X,
  Send,
  Stethoscope,
  Users,
  Building2,
  Gauge,
  Briefcase,
} from "lucide-react";
import { NEWS, formatNewsDate, categoryBadgeClasses } from "@/lib/news";

/* ================================================================
   ARCH Corporate Site — Hierarchical Green B2B Design
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
    { href: "/columns/facility-collaboration", cat: "施設連携", title: "施設が本当に求めているのは「治療の腕」ではない。訪問歯科の施設連携で選ばれる医院の条件", desc: "家族対応のワンストップ体制と施設置き去りファイルで連携の質を変える。" },
    { href: "/columns/communication-timelag", cat: "施設連携", title: "「返信は夕方になります」——その一言が、施設の信頼を静かに削っている", desc: "CCに1人加えるだけで、施設評価が激変するARCHの即レス仲介。" },
    { href: "/columns/sns-dx-recruitment", cat: "採用・DX", title: "「ハローワークに出しておけば来る」時代は終わった。訪問歯科の採用を変えるSNS×DX戦略", desc: "SNSで「入口」を、WEBアプリで「居場所」を作る二刀流。" },
    { href: "/columns/waiting-room-visual", cat: "院内マーケティング", title: "その待合室、患者さんに「何も伝わっていない」かもしれない。モニターと掲示物を戦略資産に変える方法", desc: "サイネージと掲示物の「動」×「静」二刀流で待合室を経営資産に。" },
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
              <Image src="/images/logo.jpg" alt="合同会社ARCH" width={80} height={80} className="h-7 sm:h-8 w-auto" priority />
            </Link>

            <div className="hidden md:flex items-center gap-8">
              {[
                { href: "#service", label: "Service" },
                { href: "#news", label: "News" },
                { href: "#company", label: "Company" },
                { href: "#columns", label: "Columns" },
              ].map((item) => (
                <a key={item.href} href={item.href} className="text-xs font-semibold tracking-widest uppercase text-gray-400 hover:text-green-700 transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="bg-green-800 hover:bg-green-900 text-white px-5 py-2.5 rounded text-xs font-bold tracking-wider uppercase transition-colors">
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
              { href: "#news", label: "News" },
              { href: "#company", label: "Company" },
              { href: "#columns", label: "Columns" },
            ].map((item) => (
              <a key={item.href} href={item.href} onClick={() => setIsMenuOpen(false)} className="block text-sm font-semibold tracking-widest uppercase text-gray-400 hover:text-green-700 transition-colors">
                {item.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block bg-green-800 text-white px-6 py-3.5 rounded text-sm font-bold tracking-wider uppercase text-center">
              Contact
            </a>
          </div>
        )}
      </nav>

      {/* ============================================================
          01 — HERO
          ============================================================ */}
      <section className="pt-32 pb-20 sm:pt-44 sm:pb-32 lg:pt-52 lg:pb-40 bg-gradient-to-b from-green-50/60 to-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-green-700 mb-6 sm:mb-8">
            Dental Consulting Pioneer
          </p>
          <h1 className="text-[2.5rem] sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[1.1] tracking-tight text-gray-900 mb-8 sm:mb-10">
            医療・介護事業の
            <br />
            <span className="text-green-800">「現場力」と「収益力」</span>
            <br />
            の最大化へ
          </h1>
          <p className="text-base sm:text-lg text-gray-400 leading-relaxed sm:leading-loose max-w-2xl mb-10 sm:mb-14">
            現場の想いと経営の現実をつなぐ、戦略的パートナーシップ。
            独自の現場ノウハウ・専用アプリ・BPO支援で、
            立ち上げからV字回復まで伴走します。
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="bg-green-800 hover:bg-green-900 text-white px-8 py-4 sm:py-5 rounded text-sm sm:text-base font-bold tracking-wider transition-colors flex items-center justify-center gap-3">
              無料オンライン相談
              <ArrowRight size={18} />
            </a>
            <a href="#service" className="border border-gray-200 hover:border-green-300 text-gray-600 hover:text-green-800 px-8 py-4 sm:py-5 rounded text-sm sm:text-base font-bold tracking-wider transition-colors flex items-center justify-center">
              事業内容を見る
            </a>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8"><div className="border-t border-gray-100"></div></div>

      {/* ============================================================
          02 — NEWS (compact strip)
          ============================================================ */}
      <section id="news" className="py-14 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-10">
            {/* Left label */}
            <div className="lg:col-span-3 mb-8 lg:mb-0">
              <p className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-green-700 mb-3">02</p>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">News</h2>
              <p className="text-xs sm:text-sm text-gray-400 mt-3">お知らせ</p>
              <Link
                href="/news"
                className="hidden lg:inline-flex mt-8 items-center gap-2 text-xs font-bold tracking-wider text-green-800 hover:text-green-900 border border-green-200 hover:border-green-300 px-5 py-2.5 rounded transition-colors"
              >
                一覧を見る <ArrowRight size={14} />
              </Link>
            </div>

            {/* Right list */}
            <div className="lg:col-span-9">
              {NEWS.length === 0 ? (
                <p className="text-sm text-gray-400 py-6">現在お知らせはありません。</p>
              ) : (
                <ul className="divide-y divide-gray-100 border-t border-gray-100">
                  {NEWS.slice(0, 4).map((n, i) => {
                    const isExternal = n.external ?? /^https?:\/\//.test(n.href);
                    return (
                      <li key={`${n.date}-${i}`}>
                        <Link
                          href={n.href}
                          target={isExternal ? "_blank" : undefined}
                          rel={isExternal ? "noopener noreferrer" : undefined}
                          className="group flex items-start sm:items-center gap-4 sm:gap-6 py-4 sm:py-5 hover:bg-green-50/40 transition-colors -mx-3 sm:-mx-4 px-3 sm:px-4 rounded"
                        >
                          <time dateTime={n.date} className="shrink-0 text-xs sm:text-sm font-bold tracking-wider text-gray-400 w-20 sm:w-24 pt-0.5 sm:pt-0">
                            {formatNewsDate(n.date)}
                          </time>
                          <span className={`shrink-0 hidden sm:inline-block text-[10px] sm:text-xs font-bold tracking-wider px-2.5 py-1 rounded ${categoryBadgeClasses(n.category)}`}>
                            {n.category}
                          </span>
                          <h3 className="flex-1 text-sm sm:text-base font-bold leading-relaxed text-gray-900 group-hover:text-green-700 transition-colors">
                            {n.title}
                          </h3>
                          <ArrowRight size={16} className="shrink-0 text-gray-300 group-hover:text-green-700 group-hover:translate-x-1 transition-all hidden sm:block" />
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}

              {/* Mobile "view all" button */}
              <div className="mt-8 lg:hidden">
                <Link
                  href="/news"
                  className="inline-flex items-center gap-2 text-xs font-bold tracking-wider text-green-800 hover:text-green-900 border border-green-200 hover:border-green-300 px-5 py-2.5 rounded transition-colors"
                >
                  一覧を見る <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8"><div className="border-t border-gray-100"></div></div>

      {/* ============================================================
          03 — PICK UP
          ============================================================ */}
      <section className="py-20 sm:py-28 bg-gray-50/70">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="mb-12 sm:mb-16">
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-green-700 mb-3">03</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">Pick Up</h2>
            <p className="text-sm sm:text-base text-gray-400 mt-3 sm:mt-4">注目のコラム</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                href: "/columns/broker-trap",
                cat: "業界の闇",
                num: "01",
                title: "「施設を紹介しますよ」の甘い罠。悪質ブローカーの正体",
                desc: "売上の20〜40％を吸い取るブローカーの実態と、自立した経営の作り方。",
              },
              {
                href: "/columns/turnover-strategy",
                cat: "経営戦略",
                num: "02",
                title: "「スタッフの退職」に怯える院長へ。離職防止より優先すべき経営戦略",
                desc: "属人化を排除し、誰が来ても回る強固な組織の作り方。",
              },
              {
                href: "/columns/facility-collaboration",
                cat: "施設連携",
                num: "03",
                title: "施設が本当に求めているのは「治療の腕」ではない。選ばれる医院の条件",
                desc: "家族対応のワンストップ体制と施設置き去りファイルで連携の質を変える。",
              },
            ].map((a) => (
              <Link key={a.href} href={a.href} className="group block bg-white rounded-xl border border-gray-100 hover:border-green-200 hover:shadow-lg transition-all duration-300 p-6 sm:p-8">
                <div className="flex items-center justify-between mb-5">
                  <span className="text-xs font-bold tracking-wider text-green-700 bg-green-50 px-3 py-1 rounded-full">{a.cat}</span>
                  <span className="text-3xl font-extrabold text-gray-100 group-hover:text-green-100 transition-colors">{a.num}</span>
                </div>
                <h3 className="text-base sm:text-lg font-bold leading-relaxed mb-3 group-hover:text-green-700 transition-colors">
                  {a.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-4">{a.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-green-700 group-hover:gap-2.5 transition-all">
                  続きを読む <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          04 — SERVICE
          ============================================================ */}
      <section id="service" className="py-20 sm:py-28 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="mb-16 sm:mb-20">
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-green-400 mb-3">04</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">Service</h2>
            <p className="text-sm sm:text-base text-green-300 mt-3 sm:mt-4">ARCHの5つの柱</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Service 1 */}
            <a href="/services/consulting" className="group bg-white/10 hover:bg-white/15 border border-white/10 rounded-xl p-7 sm:p-9 transition-colors block">
              <div className="w-14 h-14 bg-green-700 rounded-xl flex items-center justify-center mb-6">
                <Stethoscope className="text-green-200" size={28} />
              </div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-green-400 block mb-2">01 — Producer</span>
              <h3 className="text-xl sm:text-2xl font-bold leading-snug mb-2">
                訪問歯科
                <br />プロデューサー
              </h3>
              <p className="text-[10px] tracking-wider text-green-300/60 mb-4">（旧：歯科経営コンサルティング）</p>
              <p className="text-sm text-green-200/70 leading-relaxed mb-6">
                助言ではなく、訪問歯科事業をゼロからプロデュース。書類地獄の撤廃・黒字化の仕組み・自己肯定感を高める組織づくりを一気通貫で。
              </p>
              <span className="inline-flex items-center gap-2 text-xs font-bold text-green-300 group-hover:text-white group-hover:gap-3 transition-all">
                詳しく見る <ArrowRight size={14} />
              </span>
            </a>

            {/* Service 2 */}
            <a href="/services/sales" className="group bg-white/10 hover:bg-white/15 border border-white/10 rounded-xl p-7 sm:p-9 transition-colors block">
              <div className="w-14 h-14 bg-green-700 rounded-xl flex items-center justify-center mb-6">
                <Users className="text-green-200" size={28} />
              </div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-green-400 block mb-2">02 — Sales Academy</span>
              <h3 className="text-xl sm:text-2xl font-bold leading-snug mb-2">
                ARCH大学
                <br />営業学部
              </h3>
              <p className="text-[10px] tracking-wider text-green-300/60 mb-4">（旧：医療介護特化型 営業支援）</p>
              <p className="text-sm text-green-200/70 leading-relaxed mb-6">
                「営業マン」は採用ではなく育成する時代へ。講義・演習・実地・卒業要件の4段階カリキュラムで営業の型を教え込みます。
              </p>
              <span className="inline-flex items-center gap-2 text-xs font-bold text-green-300 group-hover:text-white group-hover:gap-3 transition-all">
                詳しく見る <ArrowRight size={14} />
              </span>
            </a>

            {/* Service 3 */}
            <a href="/services/senior-home" className="group bg-white/10 hover:bg-white/15 border border-white/10 rounded-xl p-7 sm:p-9 transition-colors block">
              <div className="w-14 h-14 bg-green-700 rounded-xl flex items-center justify-center mb-6">
                <Building2 className="text-green-200" size={28} />
              </div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-green-400 block mb-2">03 — Life Choice</span>
              <h3 className="text-xl sm:text-2xl font-bold leading-snug mb-2">
                ARCH 介護・
                <br />暮らしの選択相談所
              </h3>
              <p className="text-[10px] tracking-wider text-green-300/60 mb-4">（旧：老人ホーム紹介業）</p>
              <p className="text-sm text-green-200/70 leading-relaxed mb-6">
                退院後の暮らしを、ご本人とご家族の目線で選ぶ場所。現役看護師パートナー・ADL評価・ワンストップ伴走で安心を。
              </p>
              <span className="inline-flex items-center gap-2 text-xs font-bold text-green-300 group-hover:text-white group-hover:gap-3 transition-all">
                詳しく見る <ArrowRight size={14} />
              </span>
            </a>

            {/* Service 4 */}
            <a href="/services/dental-matching" className="group bg-white/10 hover:bg-white/15 border border-white/10 rounded-xl p-7 sm:p-9 transition-colors block">
              <div className="w-14 h-14 bg-green-700 rounded-xl flex items-center justify-center mb-6">
                <Gauge className="text-green-200" size={28} />
              </div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-green-400 block mb-2">04 — Diagnostic</span>
              <h3 className="text-xl sm:text-2xl font-bold leading-snug mb-2">
                訪問歯科・
                <br />品質診断エンジン
              </h3>
              <p className="text-[10px] tracking-wider text-green-300/60 mb-4">（旧：施設向け歯科評価ツール）</p>
              <p className="text-sm text-green-200/70 leading-relaxed mb-6">
                6項目×5段階で、今の訪問歯科を「診断」する。ARCHセンサー・ロジックが即刻変えるべき／相談／継続推奨を自動判定。
              </p>
              <span className="inline-flex items-center gap-2 text-xs font-bold text-green-300 group-hover:text-white group-hover:gap-3 transition-all">
                診断を受ける <ArrowRight size={14} />
              </span>
            </a>

            {/* Service 5 — BPO */}
            <a href="/bpo-service" className="group bg-gradient-to-br from-yellow-500/15 to-yellow-600/5 hover:from-yellow-500/25 hover:to-yellow-600/10 border border-yellow-400/30 rounded-xl p-7 sm:p-9 transition-colors block sm:col-span-2 lg:col-span-1">
              <div className="w-14 h-14 bg-yellow-600/30 rounded-xl flex items-center justify-center mb-6">
                <Briefcase className="text-yellow-200" size={28} />
              </div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-yellow-300 block mb-2">05 — BPO</span>
              <h3 className="text-xl sm:text-2xl font-bold leading-snug mb-2">
                ARCH・
                <br />外付け事務局
              </h3>
              <p className="text-[10px] tracking-wider text-yellow-200/70 mb-4">（事務代行・BPO）</p>
              <p className="text-sm text-green-100/80 leading-relaxed mb-6">
                先生を事務から解放し、医院に「最強の外部エンジン」を装着する。13体のエージェントが裏側で連動する次世代バックオフィス。
              </p>
              <span className="inline-flex items-center gap-2 text-xs font-bold text-yellow-200 group-hover:text-white group-hover:gap-3 transition-all">
                詳しく見る <ArrowRight size={14} />
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ============================================================
          05 — COMPANY / VISION
          ============================================================ */}
      <section id="company" className="py-20 sm:py-28 bg-green-50/50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="mb-16 sm:mb-20">
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-green-700 mb-3">05</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">Company</h2>
            <p className="text-sm sm:text-base text-gray-400 mt-3 sm:mt-4">代表・会社概要</p>
          </div>

          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div className="mb-10 lg:mb-0">
              <div className="rounded-xl overflow-hidden bg-gray-100 aspect-square sm:aspect-[4/3]">
                <Image src="/images/ceo.jpg" alt="代表 鈴木 集" width={676} height={676} className="w-full h-full object-cover" />
              </div>
            </div>

            <div>
              <div className="bg-green-100/60 rounded-lg p-5 sm:p-6 mb-8 border-l-4 border-green-700">
                <p className="text-base sm:text-lg text-green-900 font-medium leading-relaxed italic">
                  現場の『想い』と経営の『現実』をつなぐ架け橋になりたい
                </p>
              </div>

              <div className="mb-8">
                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-green-700 mb-1">合同会社ARCH 代表</p>
                <p className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">鈴木 集 <span className="text-lg font-medium text-gray-400 ml-2">Atsumu Suzuki</span></p>
              </div>

              <div className="space-y-3 text-sm sm:text-base text-gray-600 leading-relaxed mb-8">
                <p><span className="font-bold text-gray-900">経歴：</span>元小学校教員。その後、横浜市の広域医療法人にて歯科事務局として経営再建を主導。北海道の医療グループにて新規事業を推進。</p>
                <p><span className="font-bold text-gray-900">実績：</span>医療グループにて訪問歯科事業を単独で立ち上げ。徹底した営業強化と運営効率化により、わずか6ヶ月で黒字化を達成。</p>
              </div>

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
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-green-700 mb-3">06</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">Columns</h2>
            <p className="text-sm sm:text-base text-gray-400 mt-3 sm:mt-4">現場向けコラム</p>
          </div>

          <div className="space-y-0">
            {allColumns.slice(0, 3).map((col, i) => (
              <Link
                key={`${col.href}-${i}`}
                href={col.href}
                className="group block border-t border-gray-100 py-6 sm:py-8 lg:grid lg:grid-cols-12 lg:gap-6 items-start hover:bg-green-50/50 transition-colors -mx-5 sm:-mx-8 px-5 sm:px-8"
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
          <div className="mt-10 text-center">
            <Link href="/columns/broker-trap" className="inline-flex items-center gap-2 text-sm font-bold tracking-wider text-green-800 hover:text-green-900 border border-green-200 hover:border-green-300 px-8 py-3.5 rounded transition-colors">
              コラム一覧を見る <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* ============================================================
          07 — CONTACT
          ============================================================ */}
      <section id="contact" className="py-20 sm:py-28 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="mb-16 sm:mb-20">
            <p className="text-[10px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-green-400 mb-3">07</p>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">Contact</h2>
            <p className="text-sm sm:text-base text-green-300 mt-3 sm:mt-4">お問い合わせ</p>
          </div>

          <div className="max-w-2xl">
            <form action="https://formsubmit.co/50ee2f45d5bdcbfa397c1f5135d41780" method="POST" className="space-y-6">
              <input type="hidden" name="_subject" value="ARCHホームページからのお問い合わせ" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://www.arch-yh.com/" />

              <div>
                <label htmlFor="name" className="block text-xs font-bold tracking-wider uppercase text-green-300 mb-2">お名前 <span className="text-red-400">*</span></label>
                <input type="text" id="name" name="name" required placeholder="山田 太郎" className="w-full px-0 py-3 bg-transparent border-0 border-b border-green-700 text-white placeholder-green-600 focus:outline-none focus:border-green-300 text-base transition-colors" />
              </div>
              <div>
                <label htmlFor="organization" className="block text-xs font-bold tracking-wider uppercase text-green-300 mb-2">医院・施設名</label>
                <input type="text" id="organization" name="organization" placeholder="○○歯科クリニック" className="w-full px-0 py-3 bg-transparent border-0 border-b border-green-700 text-white placeholder-green-600 focus:outline-none focus:border-green-300 text-base transition-colors" />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-bold tracking-wider uppercase text-green-300 mb-2">メールアドレス <span className="text-red-400">*</span></label>
                <input type="email" id="email" name="email" required placeholder="info@example.com" className="w-full px-0 py-3 bg-transparent border-0 border-b border-green-700 text-white placeholder-green-600 focus:outline-none focus:border-green-300 text-base transition-colors" />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-bold tracking-wider uppercase text-green-300 mb-2">お問い合わせ内容 <span className="text-red-400">*</span></label>
                <textarea id="message" name="message" required rows={5} placeholder="ご相談内容をお書きください" className="w-full px-0 py-3 bg-transparent border-0 border-b border-green-700 text-white placeholder-green-600 focus:outline-none focus:border-green-300 text-base resize-none transition-colors"></textarea>
              </div>
              <div className="pt-4">
                <button type="submit" className="bg-white hover:bg-green-50 text-green-900 px-8 py-4 rounded text-sm font-bold tracking-wider transition-colors flex items-center gap-3">
                  <Send size={16} /> 送信する
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* ============================================================
          FOOTER — circus-group.jp style multi-column
          ============================================================ */}
      <footer className="bg-gray-950 text-gray-400 pt-16 sm:pt-20 pb-8">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-12 mb-16">
            {/* Logo + Address */}
            <div className="lg:col-span-4 mb-10 lg:mb-0">
              <Image src="/images/logo.jpg" alt="合同会社ARCH" width={80} height={80} className="h-8 w-auto mb-6 brightness-200" />
              <div className="space-y-1 text-sm">
                <p>合同会社ARCH（アーチ）</p>
                <p>TEL: 090-7247-3013</p>
                <p>Mail: atsumu.suzuki@arch-yh.com</p>
              </div>
            </div>

            {/* Links columns */}
            <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
              <div>
                <h4 className="text-xs font-bold tracking-widest uppercase text-white mb-4">Service</h4>
                <ul className="space-y-3 text-sm">
                  <li><a href="/services/consulting" className="hover:text-white transition-colors">訪問歯科プロデューサー</a></li>
                  <li><a href="/services/sales" className="hover:text-white transition-colors">ARCH大学 営業学部</a></li>
                  <li><a href="/services/senior-home" className="hover:text-white transition-colors">ARCH 介護・暮らしの選択相談所</a></li>
                  <li><a href="/services/dental-matching" className="hover:text-white transition-colors">訪問歯科・品質診断エンジン</a></li>
                  <li><a href="/bpo-service" className="hover:text-white transition-colors">ARCH・外付け事務局（BPO）</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-bold tracking-widest uppercase text-white mb-4">Company</h4>
                <ul className="space-y-3 text-sm">
                  <li><a href="#company" className="hover:text-white transition-colors">代表メッセージ</a></li>
                  <li><a href="#company" className="hover:text-white transition-colors">会社概要</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-xs font-bold tracking-widest uppercase text-white mb-4">Contents</h4>
                <ul className="space-y-3 text-sm">
                  <li><Link href="/news" className="hover:text-white transition-colors">お知らせ（News）</Link></li>
                  <li><a href="#columns" className="hover:text-white transition-colors">コラム</a></li>
                  <li><a href="#contact" className="hover:text-white transition-colors">お問い合わせ</a></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-gray-800 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} 合同会社ARCH All rights reserved.</p>
            <a href="#" className="text-xs text-gray-500 hover:text-white transition-colors">プライバシーポリシー</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
