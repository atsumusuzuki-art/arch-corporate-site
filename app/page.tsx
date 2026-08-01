import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import Reveal from "@/components/Reveal";
import { COLUMN_METAS, columnHref } from "@/lib/columns";
import { BRAND, COMPANY, PILLARS, SITE_URL, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "歯科医院の外部事務長／訪問歯科コンサルティング",
  description:
    "助言だけでは医院は回らない。合同会社ARCHは、歯科医院の外部事務長として院長が抱える経営実務を整理し、医院が回り続ける体制をつくります。訪問歯科の立ち上げと立て直しは、個別のコンサルティングとして支援します。",
  alternates: { canonical: SITE_URL },
};

/* トップに載せる支援実績（数字は確認済みのものだけ） */
const CASES = [
  {
    href: "/cases/sapporo-visit-dental",
    area: "北海道札幌市",
    summary: "訪問歯科を中心とした医院運営",
    facts: ["2024年1月開業", "2026年6月実績：医院全体で月商800万円"],
  },
  {
    href: "/cases/setagaya-visit-dental",
    area: "東京都世田谷区",
    summary: "訪問歯科をゼロから立ち上げ",
    facts: ["立ち上げ4か月", "施設1件・検診36名／うち15名が訪問歯科の利用を開始"],
  },
  {
    href: "/cases/hachioji-external-manager",
    area: "東京都八王子市",
    summary: "外部事務長として院長の実務を引き受け",
    facts: ["補助金申請", "施設基準の取得に向けた研修会／分院展開の支援"],
  },
];

/* 2 本柱のサービスを構造化データにも出す（画面の表示内容と一致させる） */
const servicesJsonLd = {
  "@context": "https://schema.org",
  "@graph": PILLARS.map((p) => ({
    "@type": "Service",
    "@id": `${SITE_URL}${p.href}#service`,
    name: p.label,
    description: p.seoDescription,
    url: absoluteUrl(p.href),
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "日本" },
    audience: { "@type": "Audience", audienceType: "歯科医院" },
  })),
};

export default function Home() {
  const latestColumns = COLUMN_METAS.slice(0, 3);

  return (
    <>
      <JsonLd data={servicesJsonLd} />

      {/* ────────────── 1. ファーストビュー ────────────── */}
      <section className="on-forest relative isolate flex min-h-[100svh] flex-col justify-center overflow-hidden bg-arch-forest text-arch-cream">
        {/* 実写撮影までの仮ヒーロー画像。差し替え時は同じ構図の画像を使う。 */}
        <Image
          src="/images/hero-ai-sample.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="-z-20 object-cover object-[68%_center] md:object-center"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(9,42,33,0.96)_0%,rgba(9,42,33,0.82)_48%,rgba(9,42,33,0.36)_100%)] max-md:bg-[linear-gradient(90deg,rgba(9,42,33,0.94)_0%,rgba(9,42,33,0.78)_100%)]"
        />

        <div className="mx-auto w-full max-w-[1200px] px-6 py-24 lg:px-10">
          {/* h1 は 1 つのまま。span を block にして PC・スマホとも必ず 2 行にする */}
          <h1 className="display-jp text-[clamp(1.75rem,8vw,5rem)] leading-[1.25] text-arch-cream">
            {BRAND.headlineLines.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p className="mt-10 max-w-[34rem] text-[clamp(1.0625rem,2.6vw,1.5rem)] leading-[1.9] text-arch-sage">
            <span className="block">{BRAND.lead1}</span>
            {/* スマートフォンだけ意味の切れ目で 2 行にする。PC は 1 行 */}
            <span className="block md:inline">
              {BRAND.lead2Lines[0]}
              <span className="hidden md:inline">、</span>
            </span>
            <span className="block md:inline">{BRAND.lead2Lines[1]}</span>
          </p>

          <a
            href="#pillars"
            className="mt-14 inline-flex min-h-14 items-center gap-4 border border-arch-cream px-8 text-base font-bold text-arch-cream transition-colors hover:bg-arch-cream hover:text-arch-forest"
          >
            ARCHの支援を見る
            <ArrowDown size={18} aria-hidden="true" />
          </a>
        </div>
      </section>

      {/* ────────────── 2. 二本柱 ────────────── */}
      <section id="pillars" aria-label="ARCHの支援" className="scroll-mt-20">
        {PILLARS.map((p, i) => (
          <div
            key={p.href}
            className={`flex min-h-[80svh] items-center border-b border-arch-rule ${
              i % 2 === 0 ? "bg-arch-cream" : "bg-arch-cream-raised"
            }`}
          >
            <div className="mx-auto w-full max-w-[1200px] px-6 py-24 md:py-36 lg:px-10">
              <Reveal>
                {/* h2 は 1 つのまま。スマートフォンでは意味の切れ目で改行し、
                    PC では 1 行に戻す（語中での改行を起こさない） */}
                <h2 className="display-jp text-[clamp(2rem,7vw,4rem)] leading-[1.25] text-arch-forest">
                  {p.labelLines.map((line) => (
                    <span key={line} className="block md:inline">
                      {line}
                    </span>
                  ))}
                </h2>
                <p className="mt-10 max-w-[38rem] text-[clamp(1.0625rem,2.6vw,1.5rem)] leading-[1.6] text-arch-ink">
                  {p.body}
                </p>
                {"sub" in p && (
                  <p className="mt-5 max-w-[38rem] text-[clamp(0.9375rem,1.9vw,1.125rem)] leading-[1.8] text-arch-ink-soft">
                    {p.sub}
                  </p>
                )}
                <Link
                  href={p.href}
                  className="mt-12 inline-flex min-h-14 items-center gap-4 bg-arch-forest px-8 text-base font-bold text-arch-cream transition-colors hover:bg-arch-forest-soft"
                >
                  {p.label}について
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </Reveal>
            </div>
          </div>
        ))}
      </section>

      {/* ────────────── 3. 支援実績 ────────────── */}
      <section aria-labelledby="cases-heading" className="bg-arch-cream">
        <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-36 lg:px-10">
          <Reveal>
            <h2
              id="cases-heading"
              className="display-jp text-[clamp(1.75rem,5vw,3rem)] leading-[1.3] text-arch-ink"
            >
              支援実績
            </h2>
            <p className="mt-6 max-w-[38rem] text-base leading-[1.9] text-arch-ink-soft">
              医院名は掲載していません。地域と、確認できた数字だけを載せています。
            </p>
          </Reveal>

          <ul className="mt-14 border-t border-arch-rule">
            {CASES.map((c, i) => (
              <Reveal as="li" key={c.href} delay={i * 80}>
                <Link
                  href={c.href}
                  className="group grid gap-4 border-b border-arch-rule py-10 md:grid-cols-12 md:gap-8"
                >
                  <div className="md:col-span-4">
                    <p className="display-jp text-xl text-arch-forest">{c.area}</p>
                    <p className="mt-2 text-[0.95rem] text-arch-ink-soft">{c.summary}</p>
                  </div>
                  <div className="md:col-span-7">
                    <ul className="space-y-2">
                      {c.facts.map((f) => (
                        <li key={f} className="text-base leading-[1.9] text-arch-ink">
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-start md:col-span-1 md:justify-end">
                    <span className="inline-flex items-center gap-2 text-[0.95rem] text-arch-forest group-hover:underline">
                      詳細
                      <ArrowRight size={16} aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </ul>

          <Link
            href="/cases"
            className="mt-12 inline-flex min-h-14 items-center gap-4 border border-arch-forest px-8 text-base font-bold text-arch-forest transition-colors hover:bg-arch-forest hover:text-arch-cream"
          >
            支援実績をすべて見る
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* ────────────── 4. ARCHと代表者について ────────────── */}
      <section
        aria-labelledby="about-heading"
        className="on-forest bg-arch-forest text-arch-cream"
      >
        <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-36 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-7">
              <Reveal>
                <h2
                  id="about-heading"
                  className="display-jp text-[clamp(1.75rem,5vw,3rem)] leading-[1.35] text-arch-cream"
                >
                  現場を知っているから、
                  <br />
                  助言だけで終わらせない。
                </h2>
                <div className="mt-10 max-w-[38rem] space-y-7 text-base leading-[1.9] text-arch-sage md:text-[1.0625rem]">
                  <p>
                    小学校教員から、歯科医院の経営実務へ。医療法人の歯科事務局長として、院内運営、訪問歯科、施設連携、スタッフ、数字の管理に携わってきました。
                  </p>
                  <p>
                    歯科医院では、院長が診療以外の仕事まで一人で抱えています。その仕事を整理し、医院が回り続けるところまで一緒に動くため、合同会社ARCHを設立しました。
                  </p>
                </div>
                <Link
                  href="/company"
                  className="mt-12 inline-flex min-h-14 items-center gap-4 border border-arch-cream px-8 text-base font-bold text-arch-cream transition-colors hover:bg-arch-cream hover:text-arch-forest"
                >
                  会社概要と代表について
                  <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={120}>
                <Image
                  src="/images/representative-atsumu-suzuki-2026.jpg"
                  alt={`合同会社ARCH 代表 ${COMPANY.representative}`}
                  width={1086}
                  height={1448}
                  sizes="(max-width: 1023px) 100vw, 40vw"
                  className="w-full object-cover"
                />
                <p className="mt-5 text-[0.95rem] leading-[1.8] text-arch-sage">
                  合同会社ARCH 代表 {COMPANY.representative}
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────── 5. 最新コラム ────────────── */}
      <section aria-labelledby="columns-heading" className="bg-arch-cream">
        <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-36 lg:px-10">
          <Reveal>
            <h2
              id="columns-heading"
              className="display-jp text-[clamp(1.75rem,5vw,3rem)] leading-[1.3] text-arch-ink"
            >
              コラム
            </h2>
          </Reveal>

          <ul className="mt-14 border-t border-arch-rule">
            {latestColumns.map((c, i) => (
              <Reveal as="li" key={c.slug} delay={i * 80}>
                <Link
                  href={columnHref(c)}
                  className="group grid gap-3 border-b border-arch-rule py-8 md:grid-cols-12 md:gap-8"
                >
                  <div className="md:col-span-3">
                    <p className="text-sm tracking-wider text-arch-moss">{c.category}</p>
                    <p className="mono-micro mt-2 text-arch-ink-muted tabular-nums">
                      {c.published.replace(/-/g, ".")}
                    </p>
                  </div>
                  <h3 className="display-jp text-[1.125rem] leading-[1.6] text-arch-ink group-hover:text-arch-forest md:col-span-9 md:text-[1.375rem]">
                    {c.title}
                  </h3>
                </Link>
              </Reveal>
            ))}
          </ul>

          <Link
            href="/columns"
            className="mt-12 inline-flex min-h-14 items-center gap-4 border border-arch-forest px-8 text-base font-bold text-arch-forest transition-colors hover:bg-arch-forest hover:text-arch-cream"
          >
            コラムをすべて見る
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* ────────────── 6. 共通問い合わせフォーム ────────────── */}
      <ContactForm idPrefix="top" />
    </>
  );
}
