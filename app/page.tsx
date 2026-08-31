import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import JapanMap from "@/components/JapanMap";
import JsonLd from "@/components/JsonLd";
import SupportAreaList from "@/components/SupportAreaList";
import Reveal from "@/components/Reveal";
import { COLUMN_METAS, columnHref } from "@/lib/columns";
import { CASES } from "@/lib/cases";
import {
  BRAND,
  COMPANY,
  PHILOSOPHY,
  PILLARS,
  REPRESENTATIVE_QUOTE,
  SITE_URL,
  THIRTY_SECONDS,
  TIMELINE,
  absoluteUrl,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "歯科医院の外部事務長／訪問歯科コンサルティング",
  description:
    "助言だけでは医院は回らない。合同会社ARCHは、歯科医院の外部事務長として院長が抱える経営実務を整理し、医院が回り続ける体制をつくります。訪問歯科の立ち上げと立て直しは、個別のコンサルティングとして支援します。",
  alternates: { canonical: SITE_URL },
};

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

/** セクション見出しの共通クラス */
const H2 = "display-jp text-[clamp(1.5rem,4.5vw,2.5rem)] leading-[1.35] text-arch-ink";

export default function Home() {
  const latestColumns = COLUMN_METAS.slice(0, 3);

  return (
    <>
      <JsonLd data={servicesJsonLd} />

      {/* ══════════ 1. HERO（深緑 1／2） ══════════ */}
      {/* 背景は雰囲気を伝えるためのイメージ画像。内容の理解には不要なので alt は空にする。
          画像の左側が暗いので object-left で固定し、文字が主に暗部に乗るようにしている。
          その上に深緑の単色を 72% で重ねる（グラデーションは使わない）。
          72% は、この画像で最も明るいピクセル（純白）の上でもクリーム文字が
          4.5:1 以上になる値。画面幅が変わって文字が明るい側にかかっても
          コントラストが不足しないようにしている。 */}
      <section className="on-forest relative flex min-h-[100svh] flex-col justify-center overflow-hidden bg-arch-forest text-arch-cream">
        <Image
          src="/images/hero-clinic.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-[60%_50%] md:object-left"
        />
        <div aria-hidden="true" className="absolute inset-0 bg-arch-forest/72" />

        <div className="relative mx-auto w-full max-w-[1200px] px-6 py-24 lg:px-10">
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

          <div className="mt-14 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex min-h-14 items-center justify-center gap-4 bg-arch-cream px-8 text-base font-bold text-arch-forest transition-colors hover:bg-arch-gold hover:text-arch-ink"
            >
              相談する
              <ArrowRight size={18} aria-hidden="true" />
            </a>
            <Link
              href="/company"
              className="inline-flex min-h-14 items-center justify-center gap-4 border border-arch-cream bg-arch-forest/80 px-8 text-base font-bold text-arch-cream transition-colors hover:bg-arch-cream hover:text-arch-forest"
            >
              ARCHについて
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ══════════ 2. ARCHを30秒で ══════════ */}
      <section aria-labelledby="in30s" className="bg-arch-cream">
        <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-32 lg:px-10">
          <Reveal>
            <h2 id="in30s" className={H2}>
              ARCHを30秒で
            </h2>
          </Reveal>

          {/* 「知る → 考える → 実行 → 広がる」の流れを 1 本の線でつなぐ図解。
              PC は横 1 本、スマートフォンは左の縦 1 本になる。 */}
          <ol className="relative mt-14 grid gap-10 md:mt-20 md:grid-cols-4 md:gap-8">
            {/* 連結線 */}
            <span
              aria-hidden="true"
              className="absolute left-[5px] top-2 bottom-2 w-px bg-arch-rule md:left-0 md:right-0 md:top-[5px] md:bottom-auto md:h-px md:w-auto"
            />
            {THIRTY_SECONDS.map((item, i) => (
              <Reveal as="li" key={item.no} delay={i * 70} className="relative pl-8 md:pl-0">
                {/* 節点 */}
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-1.5 h-[11px] w-[11px] rounded-full bg-arch-forest md:top-0"
                />
                <p className="mono-micro text-arch-gold-deep md:mt-8">{item.no}</p>
                <h3 className="display-jp mt-3 text-[1.25rem] leading-[1.5] text-arch-forest md:text-[1.375rem]">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-[22rem] text-[0.95rem] leading-[1.9] text-arch-ink-soft">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ══════════ 3. 鈴木集という人 ══════════ */}
      <section
        aria-labelledby="person"
        className="border-t border-arch-rule bg-arch-cream-raised"
      >
        <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-32 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            {/* 写真とことば */}
            <div className="lg:col-span-5">
              <Reveal>
                {/* width / height は元画像の実寸。切り取らずに全体を見せる */}
                <Image
                  src="/images/ceo.jpg"
                  alt={`合同会社ARCH 代表 ${COMPANY.representative}`}
                  width={1086}
                  height={1448}
                  sizes="(max-width: 1023px) 100vw, 40vw"
                  className="w-full object-cover"
                />
                <p className="mt-5 text-[0.95rem] leading-[1.8] text-arch-ink-soft">
                  合同会社ARCH 代表 {COMPANY.representative}
                </p>
              </Reveal>
            </div>

            {/* タイムライン */}
            <div className="lg:col-span-7">
              <Reveal delay={80}>
                <h2 id="person" className={H2}>
                  鈴木集という人
                </h2>
                <p className="display-jp mt-8 max-w-[30ch] text-[clamp(1.25rem,3.4vw,1.75rem)] leading-[1.6] text-arch-forest">
                  「{REPRESENTATIVE_QUOTE}」
                </p>

                <ol className="relative mt-12 border-l border-arch-rule pl-8">
                  {TIMELINE.map((t, i) => (
                    <li key={t.label} className={i === 0 ? "relative" : "relative mt-7"}>
                      <span
                        aria-hidden="true"
                        className={`absolute -left-[calc(2rem+5px)] top-2 h-[11px] w-[11px] rounded-full ${
                          t.year ? "bg-arch-forest" : "bg-arch-rule"
                        }`}
                      />
                      {t.year && (
                        <p className="mono-micro text-arch-gold-deep tabular-nums">{t.year}</p>
                      )}
                      <p className="text-[1.0625rem] leading-[1.8] text-arch-ink">{t.label}</p>
                    </li>
                  ))}
                </ol>

                <Link
                  href="/company"
                  className="mt-12 inline-flex min-h-11 items-center gap-3 text-base font-bold text-arch-forest underline underline-offset-8"
                >
                  経歴と会社概要を見る
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ 4. 代表的な支援実績 ══════════ */}
      <section
        aria-labelledby="cases-heading"
        className="border-t border-arch-rule bg-arch-cream"
      >
        <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-32 lg:px-10">
          <Reveal>
            <h2 id="cases-heading" className={H2}>
              代表的な支援実績
            </h2>
            <p className="mt-6 max-w-[38rem] text-base leading-[1.9] text-arch-ink-soft">
              医院名は掲載していません。地域と、確認できた数字だけを載せています。
            </p>
          </Reveal>

          <ul className="mt-14 border-t border-arch-rule">
            {CASES.map((c, i) => (
              <Reveal as="li" key={c.slug} delay={i * 70}>
                <Link
                  href={`/cases/${c.slug}`}
                  className="group grid gap-6 border-b border-arch-rule py-10 md:grid-cols-12 md:gap-8 md:py-12"
                >
                  <div className="md:col-span-4">
                    <p className="mono-micro text-arch-gold-deep tabular-nums">
                      CASE {String(i + 1).padStart(2, "0")}
                    </p>
                    <p className="display-jp mt-3 text-[clamp(1.25rem,3vw,1.625rem)] text-arch-forest">
                      {c.area}
                    </p>
                  </div>

                  {/* 課題 → ARCHの関与 → 結果 */}
                  <dl className="md:col-span-7">
                    {(
                      [
                        ["課題", c.story.problem],
                        ["ARCHの関与", c.story.action],
                        ["結果", c.story.result],
                      ] as const
                    ).map(([label, value], j) => (
                      <div
                        key={label}
                        className={`grid gap-1 sm:grid-cols-12 sm:gap-5 ${j > 0 ? "mt-4" : ""}`}
                      >
                        <dt className="text-sm text-arch-ink-muted sm:col-span-3">{label}</dt>
                        <dd
                          className={`text-[1.0625rem] leading-[1.8] sm:col-span-9 ${
                            label === "結果" ? "font-bold text-arch-ink" : "text-arch-ink-soft"
                          }`}
                        >
                          {value}
                        </dd>
                      </div>
                    ))}
                  </dl>

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

      {/* ══════════ 5. ARCHが入る場所（二本柱） ══════════ */}
      <section
        id="pillars"
        aria-labelledby="pillars-heading"
        className="scroll-mt-20 border-t border-arch-rule bg-arch-cream-raised"
      >
        <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-32 lg:px-10">
          <Reveal>
            <h2 id="pillars-heading" className={H2}>
              ARCHが入る場所
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-px border-t border-arch-rule md:grid-cols-2 md:border-l md:border-arch-rule">
            {PILLARS.map((p, i) => (
              <Reveal key={p.href} delay={i * 80}>
                <div className="flex h-full flex-col border-b border-arch-rule bg-arch-cream-raised py-10 md:border-r md:px-8 md:py-12">
                  {/* h3 は 1 つのまま。スマートフォンでは意味の切れ目で改行する */}
                  <h3 className="display-jp text-[clamp(1.5rem,4.5vw,2.25rem)] leading-[1.3] text-arch-forest">
                    {p.labelLines.map((line) => (
                      <span key={line} className="block md:inline">
                        {line}
                      </span>
                    ))}
                  </h3>
                  <p className="mt-6 text-[clamp(1.0625rem,2.2vw,1.25rem)] leading-[1.7] text-arch-ink">
                    {p.body}
                  </p>
                  {"sub" in p && (
                    <p className="mt-4 text-[0.95rem] leading-[1.8] text-arch-ink-soft">
                      {p.sub}
                    </p>
                  )}
                  <Link
                    href={p.href}
                    className="mt-auto inline-flex min-h-11 items-center gap-3 pt-10 text-base font-bold text-arch-forest underline underline-offset-8"
                  >
                    詳しく見る
                    <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mt-10 max-w-[38rem] text-base leading-[1.9] text-arch-ink-soft">
            必要に応じて、採用・業者連携・制作・DXまで実行体制を組みます。
          </p>
        </div>
      </section>

      {/* ══════════ 6. 支援エリア ══════════ */}
      <section
        aria-labelledby="areas-heading"
        className="border-t border-arch-rule bg-arch-cream"
      >
        <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-32 lg:px-10">
          <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="order-2 lg:order-1 lg:col-span-6">
              <Reveal>
                <h2 id="areas-heading" className={H2}>
                  支援エリア
                </h2>
                <p className="mt-6 max-w-[34rem] text-base leading-[1.9] text-arch-ink-soft">
                  紹介をきっかけに、地域が広がっています。
                </p>

                <SupportAreaList />
              </Reveal>
            </div>

            <div className="order-1 lg:order-2 lg:col-span-6">
              <Reveal delay={80}>
                <JapanMap className="mx-auto h-auto w-full max-w-[420px]" />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ 7. ARCHの考え方（深緑 2／2） ══════════ */}
      <section
        aria-labelledby="philosophy"
        className="on-forest flex min-h-[70svh] items-center bg-arch-forest text-arch-cream"
      >
        <div className="mx-auto w-full max-w-[1200px] px-6 py-24 md:py-32 lg:px-10">
          <Reveal>
            <h2 id="philosophy" className="sr-only">
              ARCHの考え方
            </h2>
            <p className="display-jp text-[clamp(1.25rem,3.8vw,2.375rem)] leading-[1.55] text-arch-cream">
              {PHILOSOPHY.mainLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
            <p className="mt-12 text-[clamp(1.0625rem,2.4vw,1.375rem)] leading-[1.9] text-arch-sage">
              {PHILOSOPHY.subLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══════════ 8. 最新コラム（補助） ══════════ */}
      <section aria-labelledby="columns-heading" className="bg-arch-cream">
        <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-24 lg:px-10">
          <div className="flex flex-wrap items-baseline justify-between gap-4 border-b border-arch-rule pb-5">
            <h2 id="columns-heading" className="display-jp text-xl text-arch-ink">
              コラム
            </h2>
            <Link
              href="/columns"
              className="inline-flex min-h-11 items-center text-[0.95rem] text-arch-forest underline underline-offset-4"
            >
              すべて見る
            </Link>
          </div>

          <ul>
            {latestColumns.map((c) => (
              <li key={c.slug} className="border-b border-arch-rule">
                <Link
                  href={columnHref(c)}
                  className="group grid gap-1 py-5 md:grid-cols-12 md:gap-8"
                >
                  <div className="flex items-baseline gap-4 md:col-span-3">
                    <span className="text-sm tracking-wider text-arch-moss">{c.category}</span>
                    <span className="mono-micro text-arch-ink-muted tabular-nums">
                      {c.published.replace(/-/g, ".")}
                    </span>
                  </div>
                  <p className="text-[0.95rem] leading-[1.8] text-arch-ink group-hover:text-arch-forest md:col-span-9">
                    {c.title}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ══════════ 9. 相談する ══════════ */}
      <ContactForm
        idPrefix="top"
        intro="「何を頼めばいいか分からない」という段階でも大丈夫です。現状を伺い、ARCHが入るべきかどうかから一緒に整理します。"
      />
    </>
  );
}
