"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu, X, Send } from "lucide-react";
import { NEWS, formatNewsDate } from "@/lib/news";
import { SectionTag } from "@/components/CornerMarkers";

/* ================================================================
   合同会社ARCH — Corporate Site v4
   コンセプト：訪問歯科の外部事務長
   (2026-05-11 — 全面改修)
   ================================================================ */

/* 5 つの特徴（②ARCHについて） */
const STRENGTHS = [
  { label: "訪問歯科特化", body: "訪問診療に必要な業務だけを深く扱う。" },
  { label: "現場実務まで対応", body: "助言で止めず、医院の実務まで入り込む。" },
  { label: "レセプト精度改善", body: "算定漏れ・返戻を構造から減らす。" },
  { label: "施設連携支援", body: "施設対応導線と初診オペレーションを設計する。" },
  { label: "DX・業務改善", body: "記録・シフト・連絡をデジタルで軽くする。" },
];

/* 3 つの実績ケース（③実績） */
const CASES = [
  {
    num: "01",
    title: "月商700万円規模の訪問歯科運営支援",
    problem: "レセプト前チェックや月次分析が属人的になっていた。",
    action: "カルテチェック、算定漏れ確認、月次分析、営業戦略整理を継続支援。",
    result: "レセプト精度向上、算定漏れ減少、数値の可視化を実現。",
  },
  {
    num: "02",
    title: "訪問歯科部門の6ヶ月黒字化支援",
    problem: "施設導線と初診対応が整理されておらず、収益化できていなかった。",
    action: "施設対応導線、初診オペレーション、訪問ルート、算定設計を整理。",
    result: "訪問診療体制を安定化し、6ヶ月で黒字化。",
  },
  {
    num: "03",
    title: "スタッフ導線・シフト最適化支援",
    problem: "急な問い合わせ時に、誰がどこにいるか分からない。",
    action: "札幌特有の複数施設巡回型を踏まえたシフト構成を設計。",
    result: "問い合わせ対応スピード改善、現場確認効率向上。",
  },
];

/* 5 つのサービス（④サービス一覧） */
const SERVICES = [
  {
    num: "01",
    title: "訪問歯科運営コンサルティング",
    href: "/services/consulting",
    items: ["月次分析", "運営改善", "導線整理", "施設対応", "経営支援"],
  },
  {
    num: "02",
    title: "レセプト・算定改善支援",
    href: "/services/consulting#billing",
    items: ["算定漏れ確認", "カルテチェック", "返戻対策", "精度改善"],
  },
  {
    num: "03",
    title: "施設連携・営業支援",
    href: "/services/sales",
    items: ["施設対応", "営業導線", "初診導線", "トラブル防止"],
    note: "施設連携状況の確認ツールも必要に応じて活用",
    noteHref: "/services/dental-matching",
  },
  {
    num: "04",
    title: "事務代行・BPO支援",
    href: "/bpo-service",
    items: ["書類作成", "郵送業務", "業務整理", "事務フロー改善"],
  },
  {
    num: "05",
    title: "DX・業務改善支援",
    href: "/bpo-service#dx",
    items: ["訪問歯科記録アプリ", "シフト管理", "業務デジタル化", "実務効率改善"],
  },
];

/* 厳選コラム3本（⑤ARCH NOTE） */
const NOTES = [
  {
    href: "/columns/facility-collaboration",
    num: "01",
    cat: "施設連携",
    title: "施設が本当に求めているのは「治療の腕」ではない。",
  },
  {
    href: "/columns/communication-timelag",
    num: "02",
    cat: "現場運営",
    title: "返信は夕方になります——施設の信頼を削るタイムラグ。",
  },
  {
    href: "/columns/turnover-strategy",
    num: "03",
    cat: "経営戦略",
    title: "「スタッフの退職」に怯える院長へ。離職防止より優先すべきこと。",
  },
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#cases", label: "Cases" },
    { href: "#service", label: "Service" },
    { href: "#note", label: "Note" },
  ];

  return (
    <div className="min-h-screen bg-arch-cream text-arch-ink selection:bg-arch-forest selection:text-arch-cream scroll-smooth">

      {/* ============================================================
          NAVIGATION
          ============================================================ */}
      <nav className="fixed w-full bg-arch-forest/95 backdrop-blur-md z-50 border-b border-arch-rule-dark">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10">
          <div className="flex justify-between h-16 md:h-20 items-center">
            <Link href="/" className="flex items-center gap-3" aria-label="合同会社ARCH">
              <Image
                src="/images/logo.jpg"
                alt="合同会社ARCH"
                width={160}
                height={160}
                className="h-10 md:h-11 w-auto"
                priority
              />
              <span className="hidden sm:block">
                <span className="display-jp text-arch-cream text-base leading-none block">合同会社ARCH</span>
                <span className="mono-micro text-arch-sage/70 tracking-[0.18em] mt-1 block">訪問歯科の外部事務長</span>
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-9">
              {navLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="mono-label text-arch-sage hover:text-arch-cream transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                className="bg-arch-cream text-arch-forest px-5 py-2.5 rounded-[2px] mono-label !text-arch-forest hover:bg-arch-gold transition-colors"
              >
                無料相談
              </a>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-arch-cream p-2 -mr-2"
              aria-label="メニュー"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-arch-forest border-t border-arch-rule-dark px-5 py-7 space-y-5">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="block mono-label text-arch-sage hover:text-arch-cream"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="block bg-arch-cream text-arch-forest px-6 py-3.5 rounded-[2px] mono-label !text-arch-forest text-center"
            >
              無料相談はこちら
            </a>
          </div>
        )}
      </nav>

      {/* ============================================================
          ① HERO — first view
          ============================================================ */}
      <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 md:pt-44 md:pb-32 bg-arch-cream">
        <div className="absolute top-24 md:top-32 right-5 sm:right-8 md:right-10 text-right z-10">
          <span className="mono-micro text-arch-moss/60">ARCH · 訪問歯科の外部事務長</span>
        </div>

        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10">
          <div className="grid md:grid-cols-12 gap-10 md:gap-12 items-center">
            <div className="md:col-span-7">
              <p className="mono-label text-arch-moss mb-8 md:mb-10">
                Homecare Dentistry / External Office Director
              </p>

              {/* メインコピー */}
              <h1 className="display-jp text-arch-ink text-[clamp(2.5rem,7vw,5.5rem)] leading-[1.12] mb-10 md:mb-12">
                訪問歯科を、
                <br />
                <span className="text-arch-forest">&ldquo;続けられる事業&rdquo;</span>へ。
              </h1>

              {/* サブコピー */}
              <p className="text-base sm:text-lg text-arch-ink-soft leading-loose max-w-2xl mb-10 md:mb-12">
                営業、施設連携、算定、事務、スタッフ導線、DX。
                <br className="hidden sm:block" />
                訪問歯科は、始めるよりも、回し続ける方が難しい。
                <br className="hidden sm:block" />
                ARCHは、訪問歯科の外部事務長として、現場と経営の両面から医院を支えます。
              </p>

              {/* CTAボタン */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="#contact"
                  className="bg-arch-forest text-arch-cream px-8 py-4 rounded-[2px] text-sm font-bold tracking-wider hover:bg-arch-forest-soft transition-colors inline-flex items-center justify-center gap-3"
                >
                  無料相談はこちら <ArrowRight size={16} />
                </a>
                <a
                  href="#service"
                  className="border border-arch-forest text-arch-forest px-8 py-4 rounded-[2px] text-sm font-bold tracking-wider hover:bg-arch-forest hover:text-arch-cream transition-colors inline-flex items-center justify-center gap-3"
                >
                  サービスを見る
                </a>
              </div>
            </div>

            {/* ヒーロー画像 */}
            <div className="md:col-span-5 mt-2 md:mt-0">
              <div className="relative aspect-[4/3] md:aspect-[3/4] overflow-hidden border border-arch-rule-dark/30">
                <Image
                  src="/images/image01.png"
                  alt="ARCH オフィスのデスク。ロゴ入りのカード、ノートPC、コーヒー、都市の窓"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-arch-forest/[0.06]" />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 mt-16 md:mt-24 flex justify-between">
          <span className="mono-micro text-arch-moss/60">HOME</span>
          <span className="mono-micro text-arch-moss/60">01 / 07</span>
        </div>
      </section>

      {/* ============================================================
          ② ABOUT — ARCHについて
          ============================================================ */}
      <section
        id="about"
        className="relative py-20 md:py-32 bg-arch-cream-raised border-t border-arch-rule"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10">
          <SectionTag category="ABOUT" number="02" label="ARCHについて" />

          <h2 className="display-jp text-arch-ink text-[clamp(2rem,5vw,4rem)] leading-[1.18] mt-6 mb-10 md:mb-12">
            &ldquo;助言だけ&rdquo;では、
            <br />
            訪問歯科は<span className="text-arch-forest">回らない。</span>
          </h2>

          <div className="max-w-3xl text-base md:text-lg text-arch-ink-soft leading-loose mb-16 md:mb-20">
            <p className="mb-6">
              訪問歯科では、算定、レセプト、施設対応、スタッフ配置、診療導線、営業、患者家族対応、
              すべてが同時に動いています。
            </p>
            <p>
              ARCHは、単なるコンサルティングではなく、医院の外部事務長として、
              実務レベルまで入り込みながら支援します。
            </p>
          </div>

          {/* 5 特徴 */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-0 border-t border-l border-arch-rule">
            {STRENGTHS.map((s, i) => (
              <div
                key={s.label}
                className="border-b border-r border-arch-rule py-8 md:py-10 px-5 md:px-6"
              >
                <p className="mono-label text-arch-moss mb-4 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="display-jp text-arch-ink text-lg md:text-xl mb-3 leading-snug">
                  {s.label}
                </h3>
                <p className="text-sm text-arch-ink-soft leading-loose">{s.body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 mt-16 md:mt-20 flex justify-between">
          <span className="mono-micro text-arch-moss/60">ABOUT</span>
          <span className="mono-micro text-arch-moss/60">02 / 07</span>
        </div>
      </section>

      {/* ============================================================
          ③ CASES — 実績セクション
          ============================================================ */}
      <section id="cases" className="py-20 md:py-32 bg-arch-cream">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10">
          <SectionTag category="CASES" number="03" label="支援実績" />

          <div className="mt-6 grid md:grid-cols-12 gap-8 md:gap-12 items-end mb-12 md:mb-16">
            <div className="md:col-span-7">
              <h2 className="display-jp text-arch-ink text-[clamp(2rem,5vw,4rem)] leading-[1.18] mb-3">
                現場で、
                <br />
                <span className="text-arch-forest">&ldquo;回る仕組み&rdquo;</span>を作る。
              </h2>
              <p className="mono-micro text-arch-ink-muted">
                ※ 医院名は匿名化しています
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="relative aspect-[16/10] overflow-hidden border border-arch-rule-dark/30">
                <Image
                  src="/images/image02.png"
                  alt="訪問スケジュールに付箋とメモ、月次グラフをノートPCに表示しながら確認している手元"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="space-y-px bg-arch-rule">
            {CASES.map((c) => (
              <article key={c.num} className="bg-arch-cream-raised py-10 md:py-14 px-6 md:px-12">
                <div className="grid md:grid-cols-12 gap-6 md:gap-10">
                  <div className="md:col-span-3">
                    <p className="mono-label text-arch-moss mb-3 tabular-nums">CASE — {c.num}</p>
                    <h3 className="display-jp text-arch-ink text-xl md:text-2xl leading-snug">
                      {c.title}
                    </h3>
                  </div>
                  <dl className="md:col-span-9 grid sm:grid-cols-3 gap-6 md:gap-8">
                    <div>
                      <dt className="mono-micro text-arch-ink-muted mb-2">課題</dt>
                      <dd className="text-sm text-arch-ink leading-loose">{c.problem}</dd>
                    </div>
                    <div>
                      <dt className="mono-micro text-arch-ink-muted mb-2">支援内容</dt>
                      <dd className="text-sm text-arch-ink leading-loose">{c.action}</dd>
                    </div>
                    <div>
                      <dt className="mono-micro text-arch-gold mb-2">結果</dt>
                      <dd className="text-sm text-arch-forest font-bold leading-loose">{c.result}</dd>
                    </div>
                  </dl>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 mt-16 md:mt-20 flex justify-between">
          <span className="mono-micro text-arch-moss/60">CASES</span>
          <span className="mono-micro text-arch-moss/60">03 / 07</span>
        </div>
      </section>

      {/* ============================================================
          ④ SERVICES — サービス一覧（deep forest）
          ============================================================ */}
      <section
        id="service"
        className="relative py-20 md:py-32 bg-arch-forest text-arch-cream"
      >
        <div className="absolute top-8 md:top-10 right-5 sm:right-8 md:right-10">
          <span className="mono-micro text-arch-sage/60">04 — SERVICE</span>
        </div>

        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10">
          <SectionTag category="SERVICE" number="04" label="サービス" theme="dark" />

          <div className="mt-6 grid md:grid-cols-12 gap-8 md:gap-12 items-end mb-14 md:mb-20">
            <div className="md:col-span-7">
              <h2 className="display-jp text-arch-cream text-[clamp(2rem,5vw,4rem)] leading-[1.18]">
                訪問歯科運営を、
                <br />
                <span className="text-arch-gold">実務から支える。</span>
              </h2>
            </div>
            <div className="md:col-span-5">
              <div className="relative aspect-[16/10] overflow-hidden border border-arch-rule-dark">
                <Image
                  src="/images/image04.png"
                  alt="ARCH のノート、月次業務レポート、訪問スケジュール表が整然と並ぶデスク"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-arch-forest/10" />
              </div>
            </div>
          </div>

          <div className="border-t border-arch-rule-dark">
            {SERVICES.map((s) => (
              <Link
                key={s.num}
                href={s.href}
                className="group relative grid grid-cols-12 gap-4 md:gap-8 py-10 md:py-14 border-b border-arch-rule-dark transition-colors hover:bg-arch-gold/[0.06]"
              >
                <div className="col-span-2 md:col-span-2 flex items-start pl-0 md:pl-2">
                  <span className="display-jp leading-none tabular-nums text-[2.75rem] sm:text-[3.5rem] md:text-[5rem] text-arch-gold/50 group-hover:text-arch-gold transition-colors">
                    {s.num}
                  </span>
                </div>

                <div className="col-span-10 md:col-span-6">
                  <h3 className="font-display font-black leading-[1.15] text-2xl sm:text-3xl md:text-[2.5rem] text-arch-cream group-hover:text-arch-gold transition-colors">
                    {s.title}
                  </h3>
                  {s.note && (
                    <p className="mono-micro text-arch-sage/60 mt-4 tracking-wider">
                      {s.note}
                    </p>
                  )}
                </div>

                <ul className="col-span-12 md:col-span-3 md:pt-6 text-arch-sage/80 text-sm leading-loose space-y-1.5">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-baseline gap-2">
                      <span className="text-arch-gold/60">·</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>

                <div className="hidden md:flex col-span-1 items-end justify-end pb-2">
                  <ArrowRight
                    size={22}
                    className="text-arch-gold group-hover:translate-x-2 transition-transform"
                  />
                </div>
              </Link>
            ))}
          </div>

          <p className="mono-micro text-arch-sage/50 mt-10 max-w-2xl leading-loose">
            ※ 業務内容や規模に応じて、必要なサービスだけを必要な分だけ組み合わせてご利用いただけます。
          </p>
        </div>

        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 mt-16 md:mt-24 flex justify-between">
          <span className="mono-micro text-arch-sage/60">SERVICE</span>
          <span className="mono-micro text-arch-sage/60">04 / 07</span>
        </div>
      </section>

      {/* ============================================================
          ⑤ CEO MESSAGE — 代表メッセージ
          ============================================================ */}
      <section id="company" className="py-20 md:py-32 bg-arch-cream-raised border-t border-arch-rule">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10">
          <SectionTag category="MESSAGE" number="05" label="代表メッセージ" />

          <div className="mt-6 grid md:grid-cols-12 gap-8 md:gap-14 items-end mb-14 md:mb-20">
            <div className="md:col-span-7">
              <h2 className="display-jp text-arch-ink text-[clamp(2rem,5vw,4rem)] leading-[1.18]">
                現場を知っているから、
                <br />
                <span className="text-arch-forest">実務まで入れる。</span>
              </h2>
            </div>
            <div className="md:col-span-5">
              <div className="relative aspect-[4/5] sm:aspect-[3/4] md:aspect-[3/4] overflow-hidden border border-arch-rule-dark/30 max-w-[280px] md:max-w-none">
                <Image
                  src="/images/image03.png"
                  alt="医院の廊下で資料を確認している ARCH 代表"
                  fill
                  sizes="(max-width: 768px) 60vw, 30vw"
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            <div className="md:col-span-4">
              <div className="aspect-[3/4] max-w-[240px] md:max-w-none bg-arch-forest overflow-hidden">
                <Image
                  src="/images/ceo.jpg"
                  alt="代表 鈴木 集"
                  width={480}
                  height={640}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-3 flex items-baseline justify-between max-w-[240px] md:max-w-none">
                <p className="mono-label text-arch-moss">CEO</p>
                <p className="mono-micro text-arch-ink-muted">2024 —</p>
              </div>
            </div>

            <div className="md:col-span-8">
              <div className="space-y-6 text-base md:text-lg text-arch-ink-soft leading-loose mb-10">
                <p>
                  訪問歯科は、始めることよりも、続けることの方が難しい。
                </p>
                <p>
                  施設との関係、スタッフ配置、算定、事務、患者家族対応。
                  どれか一つ崩れるだけで、現場はすぐに回らなくなります。
                </p>
                <p className="text-arch-ink font-bold">
                  ARCHは、単なるアドバイスではなく、医院の外部事務長として、
                  実務に入り込みながら支援しています。
                </p>
              </div>

              <div className="border-t border-arch-rule pt-8">
                <p className="mono-label text-arch-moss mb-2">合同会社ARCH 代表</p>
                <p className="display-jp text-arch-ink text-2xl md:text-3xl">
                  鈴木 集
                  <span className="mono-label text-arch-ink-muted ml-4">Atsumu Suzuki</span>
                </p>
                <p className="text-sm text-arch-ink-soft leading-loose mt-5 max-w-2xl">
                  元小学校教員。横浜市の広域医療法人にて歯科事務局として経営再建を主導。
                  その後、北海道の医療グループにて訪問歯科事業を単独で立ち上げ、6ヶ月で黒字化。
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 mt-16 md:mt-20 flex justify-between">
          <span className="mono-micro text-arch-moss/60">MESSAGE</span>
          <span className="mono-micro text-arch-moss/60">05 / 07</span>
        </div>
      </section>

      {/* ============================================================
          ⑥ ARCH NOTE — 厳選コラム
          ============================================================ */}
      <section id="note" className="py-20 md:py-32 bg-arch-cream border-t border-arch-rule">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10">
          <SectionTag category="ARCH NOTE" number="06" label="現場メモ" />

          <div className="mt-6 grid md:grid-cols-12 gap-8 md:gap-12 items-end mb-8 md:mb-10">
            <div className="md:col-span-7">
              <h2 className="display-jp text-arch-ink text-[clamp(2rem,5vw,4rem)] leading-[1.18]">
                現場から見える、
                <br />
                <span className="text-arch-forest">訪問歯科のリアル。</span>
              </h2>
              <p className="text-base text-arch-ink-soft leading-loose max-w-2xl mt-8">
                訪問歯科の現場で起きる課題、施設連携、算定、採用、運営改善について、実務目線でまとめた記録です。
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="relative aspect-[16/11] overflow-hidden border border-arch-rule-dark/30">
                <Image
                  src="/images/image06.png"
                  alt="付箋・地図・ノート・スケジュール表が机に広がる、現場メモの作業風景"
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div className="mt-3 flex justify-end">
                <Link
                  href="/columns"
                  className="mono-label text-arch-forest hover:text-arch-forest-soft inline-flex items-center gap-2"
                >
                  すべて読む <ArrowRight size={12} />
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-arch-rule">
            {NOTES.map((col) => (
              <Link
                key={col.href}
                href={col.href}
                className="group grid grid-cols-12 gap-4 md:gap-8 py-6 md:py-8 border-b border-arch-rule hover:bg-arch-cream-raised transition-colors -mx-3 px-3"
              >
                <div className="col-span-2 md:col-span-1">
                  <span className="mono-micro text-arch-ink-muted">{col.num}</span>
                </div>
                <div className="col-span-10 md:col-span-2">
                  <span className="mono-label text-arch-moss">{col.cat}</span>
                </div>
                <div className="col-span-12 md:col-span-8">
                  <h3 className="text-base md:text-lg font-bold leading-relaxed text-arch-ink group-hover:text-arch-forest transition-colors">
                    {col.title}
                  </h3>
                </div>
                <div className="hidden md:flex col-span-1 items-start justify-end">
                  <ArrowRight
                    size={16}
                    className="text-arch-ink-muted group-hover:text-arch-forest group-hover:translate-x-1 transition-all"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10 mt-16 md:mt-20 flex justify-between">
          <span className="mono-micro text-arch-moss/60">NOTE</span>
          <span className="mono-micro text-arch-moss/60">06 / 07</span>
        </div>
      </section>

      {/* ============================================================
          NEWS — コンパクトお知らせ帯（番号セクション外）
          ============================================================ */}
      <section id="news" className="py-12 md:py-16 bg-arch-cream-raised border-t border-arch-rule">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10">
          <div className="flex items-baseline justify-between border-b border-arch-rule pb-3 mb-4">
            <p className="mono-label text-arch-moss">NEWS — お知らせ</p>
            <Link
              href="/news"
              className="mono-micro text-arch-forest hover:text-arch-forest-soft inline-flex items-center gap-1.5"
            >
              一覧 <ArrowRight size={11} />
            </Link>
          </div>

          {NEWS.length === 0 ? (
            <p className="text-sm text-arch-ink-muted py-3">現在お知らせはありません。</p>
          ) : (
            <ul>
              {NEWS.slice(0, 3).map((n, i) => {
                const isExternal = n.external ?? /^https?:\/\//.test(n.href);
                return (
                  <li key={`${n.date}-${i}`} className="border-b border-arch-rule last:border-b-0">
                    <Link
                      href={n.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="group flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 py-3.5 md:py-4 hover:bg-arch-cream transition-colors -mx-2 px-2"
                    >
                      <time
                        dateTime={n.date}
                        className="mono-label text-arch-ink-muted shrink-0 sm:w-24 tabular-nums text-xs"
                      >
                        {formatNewsDate(n.date)}
                      </time>
                      <span className="mono-micro text-arch-moss shrink-0 sm:w-20">
                        {n.category}
                      </span>
                      <span className="flex-1 text-sm text-arch-ink group-hover:text-arch-forest transition-colors">
                        {n.title}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </section>

      {/* ============================================================
          ⑦ FINAL CTA + CONTACT
          ============================================================ */}
      <section id="contact" className="relative py-20 md:py-36 bg-arch-forest text-arch-cream overflow-hidden">
        {/* Background image with overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/image05.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-arch-forest/85 via-arch-forest/80 to-arch-ink/90"></div>
        </div>

        <div className="absolute top-8 md:top-10 right-5 sm:right-8 md:right-10 z-10">
          <span className="mono-micro text-arch-sage/60">07 — CONTACT</span>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 md:px-10">
          <SectionTag category="CONTACT" number="07" label="お問い合わせ" theme="dark" />

          <h2 className="display-jp text-arch-cream text-[clamp(2.25rem,6vw,4.5rem)] leading-[1.18] mt-6 mb-8">
            まずは、
            <br />
            <span className="text-arch-gold">訪問歯科の状況</span>をお聞かせください。
          </h2>
          <p className="text-arch-sage text-base md:text-lg leading-loose max-w-2xl mb-14 md:mb-20">
            レセプト、施設連携、スタッフ導線、事務負担、売上改善。
            どこから整えるべきか、医院の状況に合わせて一緒に整理します。
          </p>

          <div className="max-w-2xl">
            <form
              action="https://formsubmit.co/50ee2f45d5bdcbfa397c1f5135d41780"
              method="POST"
              className="space-y-7"
            >
              <input type="hidden" name="_subject" value="ARCHホームページからのお問い合わせ" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://www.arch-yh.com/" />

              <FormField id="name" label="お名前" required placeholder="山田 太郎" />
              <FormField id="organization" label="医院名" placeholder="○○歯科クリニック" />
              <FormField id="email" label="メールアドレス" type="email" required placeholder="info@example.com" />

              <div>
                <label htmlFor="message" className="mono-label text-arch-sage mb-3 block">
                  ご相談内容 <span className="text-arch-gold">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="ご相談内容をお書きください"
                  className="w-full px-0 py-3 bg-transparent border-0 border-b border-arch-rule-dark text-arch-cream placeholder-arch-sage/50 focus:outline-none focus:border-arch-cream text-base resize-none transition-colors"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="bg-arch-cream text-arch-forest px-8 py-4 rounded-[2px] text-sm font-bold tracking-wider hover:bg-arch-gold transition-colors inline-flex items-center gap-3"
                >
                  <Send size={16} /> 無料相談はこちら
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 md:px-10 mt-20 md:mt-28 flex justify-between">
          <span className="mono-micro text-arch-sage/60">CONTACT</span>
          <span className="mono-micro text-arch-sage/60">07 / 07</span>
        </div>
      </section>

      {/* ============================================================
          FOOTER
          ============================================================ */}
      <footer className="bg-arch-ink text-arch-sage pt-16 md:pt-20 pb-10 border-t border-arch-rule-dark">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-10">
          <div className="grid md:grid-cols-12 gap-10 md:gap-12 mb-14">
            <div className="md:col-span-5">
              <Image
                src="/images/logo.jpg"
                alt="合同会社ARCH"
                width={200}
                height={200}
                className="w-16 h-16 md:w-20 md:h-20 rounded-[8px] mb-6"
              />
              <p className="text-arch-cream font-bold text-base mb-2">合同会社ARCH（アーチ）</p>
              <p className="mono-micro text-arch-sage/70 mb-5 tracking-[0.18em]">
                訪問歯科の外部事務長
              </p>
              <div className="space-y-1 text-sm">
                <p>Mail: atsumu.suzuki@arch-yh.com</p>
              </div>
            </div>

            <div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
              <div>
                <h4 className="mono-label text-arch-cream mb-5">Service</h4>
                <ul className="space-y-3 text-sm">
                  {SERVICES.map((s) => (
                    <li key={s.num}>
                      <Link
                        href={s.href}
                        className="hover:text-arch-cream transition-colors"
                      >
                        {s.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="mono-label text-arch-cream mb-5">About</h4>
                <ul className="space-y-3 text-sm">
                  <li><a href="#about" className="hover:text-arch-cream transition-colors">ARCHについて</a></li>
                  <li><a href="#cases" className="hover:text-arch-cream transition-colors">支援実績</a></li>
                  <li><a href="#company" className="hover:text-arch-cream transition-colors">代表メッセージ</a></li>
                </ul>
              </div>
              <div>
                <h4 className="mono-label text-arch-cream mb-5">Contents</h4>
                <ul className="space-y-3 text-sm">
                  <li><Link href="/news" className="hover:text-arch-cream transition-colors">お知らせ</Link></li>
                  <li><a href="#note" className="hover:text-arch-cream transition-colors">ARCH NOTE</a></li>
                  <li><a href="#contact" className="hover:text-arch-cream transition-colors">お問い合わせ</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-arch-rule-dark pt-7 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="mono-micro text-arch-sage/60">
              © {new Date().getFullYear()} ARCH LLC · ALL RIGHTS RESERVED
            </p>
            <span className="mono-micro text-arch-sage/60">ARCH-YH.COM</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ================================================================
   FormField helper
   ================================================================ */
function FormField({
  id,
  label,
  type = "text",
  required = false,
  placeholder,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="mono-label text-arch-sage mb-3 block">
        {label} {required && <span className="text-arch-gold">*</span>}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full px-0 py-3 bg-transparent border-0 border-b border-arch-rule-dark text-arch-cream placeholder-arch-sage/50 focus:outline-none focus:border-arch-cream text-base transition-colors"
      />
    </div>
  );
}
