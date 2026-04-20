"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu, X, Send } from "lucide-react";
import { NEWS, formatNewsDate } from "@/lib/news";
import { SectionTag } from "@/components/CornerMarkers";

/* ================================================================
   ARCH Corporate Site — Editorial v2
   Based on Claude Design pptx direction (2026-04-20)
   ================================================================ */

const SERVICES = [
  {
    href: "/services/consulting",
    num: "01",
    tag: "PRODUCER",
    title: "訪問歯科プロデューサー",
    old: "旧：歯科経営コンサルティング",
    desc: "助言ではなく、訪問歯科事業をゼロからプロデュース。書類地獄の撤廃・黒字化の仕組み・組織づくりを一気通貫で。",
  },
  {
    href: "/services/sales",
    num: "02",
    tag: "SALES ACADEMY",
    title: "ARCH大学 営業学部",
    old: "旧：医療介護特化型 営業支援",
    desc: "営業マンは採用ではなく、育成する時代へ。歯科・訪問クリニック・訪問薬局・訪問看護の4業態に対応。",
  },
  {
    href: "/services/senior-home",
    num: "03",
    tag: "LIFE CHOICE",
    title: "ARCH 介護・暮らしの選択相談所",
    old: "旧：老人ホーム紹介業",
    desc: "退院後の暮らしを、ご本人とご家族の目線で。現役看護師パートナーとADL評価でワンストップ伴走。",
  },
  {
    href: "/services/dental-matching",
    num: "04",
    tag: "DIAGNOSTIC",
    title: "訪問歯科・品質診断エンジン",
    old: "旧：施設向け歯科評価ツール",
    desc: "6項目×5段階で、今の訪問歯科を診断。ARCHセンサー・ロジックが即刻変えるべき／相談／継続推奨を判定。",
  },
  {
    href: "/bpo-service",
    num: "05",
    tag: "BPO",
    title: "ARCH・外付け事務局",
    old: "事務代行・BPO",
    desc: "先生を事務から解放し、医院に「最強の外部エンジン」を装着する。13体のエージェントが裏側で連動。",
    gold: true,
  },
];

const PICK_UP = [
  {
    href: "/columns/broker-trap",
    num: "01",
    cat: "業界の闇",
    title: "「施設を紹介しますよ」の甘い罠。悪質ブローカーの正体",
  },
  {
    href: "/columns/turnover-strategy",
    num: "02",
    cat: "経営戦略",
    title: "「スタッフの退職」に怯える院長へ。離職防止より優先すべき経営戦略",
  },
  {
    href: "/columns/facility-collaboration",
    num: "03",
    cat: "施設連携",
    title: "施設が本当に求めているのは「治療の腕」ではない。選ばれる医院の条件",
  },
];

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#service", label: "Service" },
    { href: "#news", label: "News" },
    { href: "#company", label: "Company" },
    { href: "#columns", label: "Columns" },
  ];

  return (
    <div className="min-h-screen bg-arch-cream text-arch-ink selection:bg-arch-forest selection:text-arch-cream scroll-smooth">

      {/* ============================================================
          NAVIGATION — deep forest, fixed
          ============================================================ */}
      <nav className="fixed w-full bg-arch-forest/95 backdrop-blur-md z-50 border-b border-arch-rule-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex justify-between h-16 md:h-20 items-center">
            <Link href="/" className="flex items-center" aria-label="合同会社ARCH">
              <Image
                src="/images/logo.jpg"
                alt="合同会社ARCH"
                width={160}
                height={160}
                className="h-10 md:h-12 w-auto"
                priority
              />
            </Link>

            <div className="hidden md:flex items-center gap-10">
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
                className="bg-arch-cream text-arch-forest px-5 py-2.5 rounded-[2px] mono-label !text-arch-forest hover:bg-arch-cream-raised transition-colors"
              >
                Contact
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
          <div className="md:hidden bg-arch-forest border-t border-arch-rule-dark px-6 py-8 space-y-6">
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
              Contact
            </a>
          </div>
        )}
      </nav>

      {/* ============================================================
          01 — HERO (cream, editorial)
          ============================================================ */}
      <section className="relative pt-36 pb-24 md:pt-52 md:pb-40 bg-arch-cream">
        {/* Top-right marker */}
        <div className="absolute top-24 md:top-32 right-6 md:right-10 text-right">
          <span className="mono-micro text-arch-moss/60">CONFIDENTIAL · 2026.04</span>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-10">
          {/* ARCH logo mark — slide 1 style */}
          <div className="mb-16 md:mb-20">
            <Image
              src="/images/logo.jpg"
              alt="合同会社ARCH"
              width={240}
              height={240}
              className="w-24 h-24 md:w-32 md:h-32 rounded-[12px]"
              priority
            />
          </div>

          {/* Kicker */}
          <p className="mono-label text-arch-moss mb-6 md:mb-8">
            Homecare Dentistry Consulting <span className="opacity-60">— by ARCH</span>
          </p>

          {/* Display headline */}
          <h1 className="display-jp text-arch-ink text-[clamp(2.75rem,7vw,6rem)] mb-10 md:mb-14">
            現場の想いと、
            <br />
            経営の現実を、
            <br />
            <span className="text-arch-forest">架け橋する。</span>
          </h1>

          <p className="text-base md:text-lg text-arch-ink-soft leading-relaxed max-w-2xl mb-12 md:mb-16">
            医療介護の最前線を、5つの事業で支える合同会社ARCH。
            訪問歯科のプロデュース、営業の育成、施設選びの相談、品質診断、外付け事務局まで
            ——現場と経営の両輪を動かすための、戦略的パートナーシップ。
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="#contact"
              className="bg-arch-forest text-arch-cream px-8 py-4 rounded-[2px] text-sm font-bold tracking-wider hover:bg-arch-forest-soft transition-colors inline-flex items-center justify-center gap-3"
            >
              無料オンライン相談を予約 <ArrowRight size={16} />
            </a>
            <a
              href="#service"
              className="border border-arch-forest text-arch-forest px-8 py-4 rounded-[2px] text-sm font-bold tracking-wider hover:bg-arch-forest hover:text-arch-cream transition-colors inline-flex items-center justify-center gap-3"
            >
              5つの事業を見る
            </a>
          </div>
        </div>

        {/* Bottom corner markers */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 mt-24 md:mt-32 flex justify-between">
          <span className="mono-micro text-arch-moss/60">HOME</span>
          <span className="mono-micro text-arch-moss/60">01 / 07</span>
        </div>
      </section>

      {/* ============================================================
          02 — NEWS (cream with inset raised panel)
          ============================================================ */}
      <section id="news" className="py-20 md:py-28 bg-arch-cream-raised border-t border-arch-rule">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <SectionTag category="NEWS" number="02" label="お知らせ" />
          <div className="mt-6 mb-12 md:mb-16 flex items-end justify-between gap-6 flex-wrap">
            <h2 className="display-jp text-arch-ink text-[clamp(2rem,4vw,3.5rem)]">
              最新のお知らせ
            </h2>
            <Link
              href="/news"
              className="mono-label text-arch-forest hover:text-arch-forest-soft inline-flex items-center gap-2 self-start md:self-end"
            >
              View All <ArrowRight size={12} />
            </Link>
          </div>

          {NEWS.length === 0 ? (
            <p className="text-sm text-arch-ink-muted py-6">現在お知らせはありません。</p>
          ) : (
            <ul className="border-t border-arch-rule">
              {NEWS.slice(0, 4).map((n, i) => {
                const isExternal = n.external ?? /^https?:\/\//.test(n.href);
                return (
                  <li key={`${n.date}-${i}`} className="border-b border-arch-rule">
                    <Link
                      href={n.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="group flex flex-col md:flex-row md:items-center gap-2 md:gap-8 py-5 md:py-6 hover:bg-arch-cream transition-colors -mx-3 px-3"
                    >
                      <time
                        dateTime={n.date}
                        className="mono-label text-arch-ink-muted shrink-0 md:w-28"
                      >
                        {formatNewsDate(n.date)}
                      </time>
                      <span className="mono-label text-arch-moss shrink-0 md:w-24">
                        {n.category}
                      </span>
                      <h3 className="flex-1 text-base md:text-lg font-bold leading-relaxed text-arch-ink group-hover:text-arch-forest transition-colors">
                        {n.title}
                      </h3>
                      <ArrowRight
                        size={16}
                        className="hidden md:block shrink-0 text-arch-ink-muted group-hover:text-arch-forest group-hover:translate-x-1 transition-all"
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </section>

      {/* ============================================================
          03 — PICK UP (cream)
          ============================================================ */}
      <section className="py-20 md:py-28 bg-arch-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <SectionTag category="COLUMN PICK UP" number="03" label="注目のコラム" />
          <h2 className="display-jp text-arch-ink text-[clamp(2rem,4vw,3.5rem)] mt-6 mb-12 md:mb-16">
            いま読まれている、
            <br />3本のコラム。
          </h2>

          <div className="border-t border-arch-rule">
            {PICK_UP.map((a) => (
              <Link
                key={a.href}
                href={a.href}
                className="group grid grid-cols-12 gap-4 md:gap-8 py-8 md:py-10 border-b border-arch-rule hover:bg-arch-cream-raised transition-colors -mx-3 px-3"
              >
                <div className="col-span-2 md:col-span-1">
                  <span className="mono-micro text-arch-ink-muted">{a.num}</span>
                </div>
                <div className="col-span-10 md:col-span-2">
                  <span className="mono-label text-arch-moss">{a.cat}</span>
                </div>
                <div className="col-span-12 md:col-span-8">
                  <h3 className="text-lg md:text-xl font-bold leading-relaxed text-arch-ink group-hover:text-arch-forest transition-colors">
                    {a.title}
                  </h3>
                </div>
                <div className="hidden md:flex col-span-1 items-start justify-end pt-1">
                  <ArrowRight
                    size={16}
                    className="text-arch-ink-muted group-hover:text-arch-forest group-hover:translate-x-1 transition-all"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          04 — SERVICE (deep forest — main green moment)
          ============================================================ */}
      <section id="service" className="relative py-24 md:py-36 bg-arch-forest text-arch-cream">
        {/* Top-right marker */}
        <div className="absolute top-8 md:top-10 right-6 md:right-10">
          <span className="mono-micro text-arch-sage/60">04 — SERVICE</span>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <SectionTag category="SERVICE" number="04" label="ARCHの5つの柱" theme="dark" />
          <h2 className="display-jp text-arch-cream text-[clamp(2.25rem,5vw,4.5rem)] mt-6 mb-16 md:mb-20 max-w-4xl">
            医療介護の現場を、
            <br />5つの事業で支える。
          </h2>

          <div className="border-t border-arch-rule-dark">
            {SERVICES.map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group grid grid-cols-12 gap-4 md:gap-8 py-8 md:py-12 border-b border-arch-rule-dark hover:bg-arch-forest-soft/40 transition-colors -mx-3 px-3"
              >
                {/* Number */}
                <div className="col-span-2 md:col-span-1 pt-1">
                  <span
                    className={`mono-micro ${
                      s.gold ? "text-arch-gold" : "text-arch-sage/70"
                    }`}
                  >
                    {s.num}
                  </span>
                </div>

                {/* Tag + Title */}
                <div className="col-span-10 md:col-span-5">
                  <p
                    className={`mono-label ${
                      s.gold ? "text-arch-gold" : "text-arch-sage"
                    }`}
                  >
                    {s.tag}
                  </p>
                  <h3
                    className={`font-display font-black text-2xl md:text-3xl leading-tight mt-2 ${
                      s.gold
                        ? "text-arch-cream group-hover:text-arch-gold"
                        : "text-arch-cream group-hover:text-arch-sage"
                    } transition-colors`}
                  >
                    {s.title}
                  </h3>
                  <p className="mono-micro text-arch-sage/50 mt-2">（{s.old}）</p>
                </div>

                {/* Description */}
                <div className="col-span-12 md:col-span-5 text-arch-sage text-sm md:text-base leading-relaxed">
                  {s.desc}
                </div>

                {/* Arrow */}
                <div className="hidden md:flex col-span-1 items-start justify-end pt-2">
                  <ArrowRight
                    size={18}
                    className={`${
                      s.gold ? "text-arch-gold" : "text-arch-sage"
                    } group-hover:translate-x-1 transition-transform`}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom corner markers */}
        <div className="max-w-7xl mx-auto px-6 md:px-10 mt-16 md:mt-24 flex justify-between">
          <span className="mono-micro text-arch-sage/60">SERVICE</span>
          <span className="mono-micro text-arch-sage/60">04 / 07</span>
        </div>
      </section>

      {/* ============================================================
          05 — COMPANY (split: left cream, right inked portrait)
          ============================================================ */}
      <section id="company" className="py-24 md:py-36 bg-arch-cream">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <SectionTag category="COMPANY" number="05" label="代表・会社概要" />
          <h2 className="display-jp text-arch-ink text-[clamp(2rem,4vw,3.5rem)] mt-6 mb-16 md:mb-20">
            現場の想いと、
            <br />経営の現実を。
          </h2>

          <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-start">
            {/* Portrait — compact editorial style (slide 14) */}
            <div className="md:col-span-3">
              <div className="aspect-[3/4] max-w-[200px] md:max-w-none bg-arch-forest overflow-hidden">
                <Image
                  src="/images/ceo.jpg"
                  alt="代表 鈴木 集"
                  width={400}
                  height={533}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="mt-3 flex items-baseline justify-between max-w-[200px] md:max-w-none">
                <p className="mono-label text-arch-moss">CEO</p>
                <p className="mono-micro text-arch-ink-muted">2024 —</p>
              </div>
            </div>

            {/* Text */}
            <div className="md:col-span-9">
              <blockquote className="border-l-2 border-arch-forest pl-6 mb-10">
                <p className="text-xl md:text-2xl font-display font-black leading-snug text-arch-ink">
                  現場の『想い』と経営の『現実』をつなぐ架け橋になりたい。
                </p>
              </blockquote>

              <div className="mb-8">
                <p className="mono-label text-arch-moss">合同会社ARCH 代表</p>
                <p className="display-jp text-arch-ink text-3xl md:text-4xl mt-2">
                  鈴木 集
                  <span className="mono-label text-arch-ink-muted ml-4">Atsumu Suzuki</span>
                </p>
              </div>

              <div className="space-y-5 text-arch-ink-soft leading-relaxed">
                <p>
                  <span className="mono-label text-arch-moss block mb-1">経歴</span>
                  元小学校教員。その後、横浜市の広域医療法人にて歯科事務局として経営再建を主導。
                  北海道の医療グループにて新規事業を推進。
                </p>
                <p>
                  <span className="mono-label text-arch-moss block mb-1">実績</span>
                  医療グループにて訪問歯科事業を単独で立ち上げ。徹底した営業強化と運営効率化により、
                  わずか6ヶ月で黒字化を達成。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          06 — COLUMNS (cream)
          ============================================================ */}
      <section id="columns" className="py-20 md:py-28 bg-arch-cream-raised border-t border-arch-rule">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <SectionTag category="COLUMN" number="06" label="現場向けコラム" />
          <div className="mt-6 mb-12 md:mb-16 flex items-end justify-between gap-6 flex-wrap">
            <h2 className="display-jp text-arch-ink text-[clamp(2rem,4vw,3.5rem)]">
              現場と経営、
              <br />両方の視点から。
            </h2>
            <Link
              href="/columns/broker-trap"
              className="mono-label text-arch-forest hover:text-arch-forest-soft inline-flex items-center gap-2"
            >
              View All Columns <ArrowRight size={12} />
            </Link>
          </div>

          <div className="border-t border-arch-rule">
            {PICK_UP.map((col) => (
              <Link
                key={col.href}
                href={col.href}
                className="group grid grid-cols-12 gap-4 md:gap-8 py-6 md:py-8 border-b border-arch-rule hover:bg-arch-cream transition-colors -mx-3 px-3"
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
      </section>

      {/* ============================================================
          07 — CONTACT (deep forest)
          ============================================================ */}
      <section id="contact" className="relative py-24 md:py-36 bg-arch-forest text-arch-cream">
        <div className="absolute top-8 md:top-10 right-6 md:right-10">
          <span className="mono-micro text-arch-sage/60">07 — CONTACT</span>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <SectionTag category="CONTACT" number="07" label="お問い合わせ" theme="dark" />
          <h2 className="display-jp text-arch-cream text-[clamp(2.25rem,5vw,4.5rem)] mt-6 mb-6">
            まずは、
            <br />お話しさせてください。
          </h2>
          <p className="text-arch-sage text-base md:text-lg leading-relaxed max-w-2xl mb-16 md:mb-20">
            オンラインでの無料相談を受け付けています。
            貴院・貴施設の状況に合わせて、最適なARCHサービスの組み合わせをご提案します。
          </p>

          <div className="max-w-2xl">
            <form
              action="https://formsubmit.co/50ee2f45d5bdcbfa397c1f5135d41780"
              method="POST"
              className="space-y-8"
            >
              <input type="hidden" name="_subject" value="ARCHホームページからのお問い合わせ" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="https://www.arch-yh.com/" />

              <FormField id="name" label="お名前" required placeholder="山田 太郎" />
              <FormField id="organization" label="医院・施設名" placeholder="○○歯科クリニック" />
              <FormField id="email" label="メールアドレス" type="email" required placeholder="info@example.com" />

              <div>
                <label
                  htmlFor="message"
                  className="mono-label text-arch-sage mb-3 block"
                >
                  お問い合わせ内容 <span className="text-arch-gold">*</span>
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

              <div className="pt-6">
                <button
                  type="submit"
                  className="bg-arch-cream text-arch-forest px-8 py-4 rounded-[2px] text-sm font-bold tracking-wider hover:bg-arch-cream-raised transition-colors inline-flex items-center gap-3"
                >
                  <Send size={16} /> 送信する
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 mt-20 md:mt-28 flex justify-between">
          <span className="mono-micro text-arch-sage/60">CONTACT</span>
          <span className="mono-micro text-arch-sage/60">07 / 07</span>
        </div>
      </section>

      {/* ============================================================
          FOOTER (even deeper)
          ============================================================ */}
      <footer className="bg-arch-ink text-arch-sage pt-20 pb-10 border-t border-arch-rule-dark">
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid md:grid-cols-12 gap-10 md:gap-12 mb-16">
            <div className="md:col-span-4">
              <Image
                src="/images/logo.jpg"
                alt="合同会社ARCH"
                width={200}
                height={200}
                className="w-20 h-20 md:w-24 md:h-24 rounded-[8px] mb-6"
              />
              <div className="space-y-1 text-sm">
                <p className="text-arch-cream font-bold">合同会社ARCH（アーチ）</p>
                <p>TEL: 090-7247-3013</p>
                <p>Mail: atsumu.suzuki@arch-yh.com</p>
              </div>
            </div>

            <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
              <div>
                <h4 className="mono-label text-arch-cream mb-5">Service</h4>
                <ul className="space-y-3 text-sm">
                  {SERVICES.map((s) => (
                    <li key={s.href}>
                      <a href={s.href} className="hover:text-arch-cream transition-colors">
                        {s.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="mono-label text-arch-cream mb-5">Company</h4>
                <ul className="space-y-3 text-sm">
                  <li><a href="#company" className="hover:text-arch-cream transition-colors">代表メッセージ</a></li>
                  <li><a href="#company" className="hover:text-arch-cream transition-colors">会社概要</a></li>
                </ul>
              </div>
              <div>
                <h4 className="mono-label text-arch-cream mb-5">Contents</h4>
                <ul className="space-y-3 text-sm">
                  <li><Link href="/news" className="hover:text-arch-cream transition-colors">お知らせ</Link></li>
                  <li><a href="#columns" className="hover:text-arch-cream transition-colors">コラム</a></li>
                  <li><a href="#contact" className="hover:text-arch-cream transition-colors">お問い合わせ</a></li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-arch-rule-dark pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
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
   Small helpers
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
