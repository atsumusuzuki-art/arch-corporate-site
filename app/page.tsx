import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import JapanMap from "@/components/JapanMap";
import JsonLd from "@/components/JsonLd";
import SupportAreaList from "@/components/SupportAreaList";
import Reveal from "@/components/Reveal";
import BrandPhoto from "@/components/ui/BrandPhoto";
import CaseRow from "@/components/ui/CaseRow";
import Cta, { CONSULT_LABEL } from "@/components/ui/Cta";
import PhilosophyBlock from "@/components/ui/PhilosophyBlock";
import SectionHeader, { SectionNumber } from "@/components/ui/SectionHeader";
import TwoLayers from "@/components/ui/TwoLayers";
import { COLUMN_METAS, columnHref } from "@/lib/columns";
import { CASES } from "@/lib/cases";
import { BRAND_IMAGES, BRAND_NAME, HERO_BACKGROUND } from "@/lib/brand";
import { BODY, CONTAINER, H2, PROSE_W, SECTION_Y } from "@/lib/ui";
import {
  BRAND,
  COMPANY,
  PILLARS,
  REPRESENTATIVE_QUOTE,
  REPRESENTATIVE_ROLES,
  SITE_URL,
  THIRTY_SECONDS,
  TIMELINE,
  absoluteUrl,
} from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "歯科医院の外部事務長／訪問歯科支援｜合同会社ARCH" },
  description:
    "合同会社ARCHは、訪問歯科を入口に、歯科医院の立ち上げ・運営・承継を支える外部事務長会社です。助言だけで終わらず、現場で機能する状態までつくり、仕組みとして医院に残します。",
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

/* 「院長と、同じ目線で考える」— 鈴木集が担う判断 */
const DIRECTOR_OWNS = [
  "院長の本音を聞くこと。",
  "人物と案件を見極めること。",
  "重要な交渉。",
  "事業の方向づけ。",
  "最終判断。",
];

/* HERO の背景画像（パス・サイズは lib/brand.ts で一元管理） */
const heroImage = BRAND_IMAGES[HERO_BACKGROUND.image];

export default function Home() {
  const latestColumns = COLUMN_METAS.slice(0, 3);

  return (
    <>
      <JsonLd data={servicesJsonLd} />

      {/* ══════════ 1. HERO ══════════
          hero-arch-glass.png を HERO 全面の背景として敷き、Paper 色の半透明グラデーションを重ねる。
          「背景写真の上の文字」ではなく、ガラス越しの ARCH の空間の中にコピーがある見せ方にする。
          ・画像の上にロゴや文字を焼き込まない／重ねない（見出し・本文・CTA は HTML テキスト）
          ・画像そのものは暗くしない
          ・PC：左が明るい Paper、右へ行くほどガラス空間と ARCH サインが見える
          ・スマホ：文章の後ろに最初からガラス空間があり、画像が別ブロックとして出てこない */}
      <section
        aria-labelledby="hero-title"
        className="relative isolate overflow-hidden bg-arch-paper"
      >
        {/* 背景画像（HERO の最上部から最下部まで。ヘッダー直下から始まる）
            ・スマホ：同じ画像を 2 つの範囲で重ねて、HERO 全体を 1 枚のガラス空間にする
                上半分 … 窓・自然光・植物の範囲（コピーの後ろにガラスの気配を出す。640px 以上は画像の左半分だけを使い、ARCH サインが二重に写らないようにする）
                下半分 … ARCH サインと会議室の範囲（ARCH サインが CTA の少し下に来る）
              2 つの境目は .hero-photo-top / .hero-photo のマスクで溶かし合わせる（同じファイルなので読み込みは 1 回）
              ※ 画像 1 枚だけを全面に敷くと、ARCH サインが本文の真後ろに来るか、画面幅いっぱいまで拡大されるため
            ・PC：右寄り（左端 12%〜）に 1 枚で敷き、左端は .hero-photo のマスクで Paper に溶かす */}
        <div aria-hidden="true" className="hero-photo-top absolute inset-x-0 top-0 h-[64%] -z-30 sm:right-auto sm:w-[200%] lg:hidden">
          <Image
            src={heroImage.src}
            alt=""
            fill
            sizes="300vw"
            className="object-cover"
            style={{ objectPosition: HERO_BACKGROUND.posMobileTop }}
          />
        </div>
        <div className="hero-photo absolute inset-x-0 bottom-0 top-[340px] -z-20 lg:inset-y-0 lg:left-[12%] lg:right-0 lg:top-0">
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            priority
            sizes="(max-width: 1023px) 300vw, 90vw"
            style={
              {
                "--pos-m": HERO_BACKGROUND.posMobile,
                "--pos-d": HERO_BACKGROUND.posDesktop,
              } as CSSProperties
            }
            className="brand-img"
          />
        </div>
        <div aria-hidden="true" className="hero-wash absolute inset-0 -z-10" />

        <div
          className={`${CONTAINER} flex min-h-[960px] flex-col justify-start pb-16 pt-9 sm:min-h-[1000px] sm:pt-14 lg:min-h-[740px] lg:justify-center lg:py-24`}
        >
          <div className="max-w-[40rem]">
            <p className="mono-micro flex items-center gap-3 !text-[0.6875rem] !tracking-[0.16em] text-arch-green sm:!text-[0.75rem] sm:!tracking-[0.18em]">
              <span aria-hidden="true" className="h-px w-8 bg-arch-green/60" />
              {BRAND_NAME.descriptor}
            </p>
            <p className="display-jp mt-4 text-[0.9375rem] tracking-[0.08em] text-arch-deep sm:mt-5 md:text-[1.0625rem]">
              {BRAND_NAME.descriptorJa}
            </p>

            {/* h1 は 1 つのまま。スマホは 3 行（歯科医院を、／“回り続ける”／組織へ。）、640px 以上は 2 行 */}
            <h1
              id="hero-title"
              className="serif-jp mt-5 text-[clamp(2.375rem,11.4vw,3.25rem)] leading-[1.12] text-arch-moss sm:mt-7 sm:leading-[1.2] lg:text-[clamp(2.75rem,4.1vw,3.75rem)] lg:leading-[1.18]"
            >
              <span className="block whitespace-nowrap">{BRAND.headlineLines[0]}</span>
              <span className="block whitespace-nowrap">
                {BRAND.headlineLines[1].replace("組織へ。", "")}
                <br className="sm:hidden" />
                組織へ。
              </span>
            </h1>

            <div className={`mt-6 ${PROSE_W} space-y-2.5 text-[0.9375rem] leading-[1.85] text-arch-ink-soft sm:mt-9 sm:space-y-4 sm:text-[1rem] sm:leading-[1.95] md:text-[1.0625rem]`}>
              <p>
                <span className="block">{BRAND.leadLines[0]}</span>
                <span className="block sm:inline">{BRAND.leadLines[1]}</span>
                <span className="block sm:inline">{BRAND.leadLines[2]}</span>
              </p>
              <p>
                {BRAND.lead2Lines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </div>

            <div className="mt-7 flex flex-col items-stretch gap-1 sm:mt-10 sm:flex-row sm:items-center sm:gap-8">
              <Cta href="#contact" className="w-full sm:w-auto">
                {CONSULT_LABEL}
              </Cta>
              <Cta href="#in30s" variant="text" arrow={false} className="self-start sm:self-auto">
                ARCHを30秒で
              </Cta>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ 2. ARCHを30秒で ══════════ */}
      <section
        id="in30s"
        aria-labelledby="in30s-heading"
        className="scroll-mt-20 border-t border-arch-line bg-arch-white"
      >
        <div className={`${CONTAINER} ${SECTION_Y}`}>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-10">
            <Reveal className="lg:col-span-4">
              <SectionNumber no="01" label="ARCH IN 30 SECONDS" />
              <h2 id="in30s-heading" className={`${H2} mt-5`}>
                ARCHを30秒で
              </h2>
            </Reveal>
            <Reveal delay={60} className="lg:col-span-8">
              <p className="display-jp text-[clamp(1.1875rem,2.4vw,1.625rem)] leading-[1.75] text-arch-ink">
                {BRAND.definition}
              </p>
            </Reveal>
          </div>

          {/* 番号・見出し・短文・罫線だけで並べる（カード背景は使わない） */}
          <ol className="mt-14 grid gap-x-10 md:mt-20 md:grid-cols-2 lg:grid-cols-4">
            {THIRTY_SECONDS.map((item, i) => (
              <Reveal as="li" key={item.no} delay={i * 60} className="pb-10 lg:pb-0">
                <span aria-hidden="true" className="arch-line block h-px w-full bg-arch-deep" />
                <p className="num-en mt-6 text-[0.875rem] font-medium text-arch-green">{item.no}</p>
                <h3 className="display-jp mt-3 text-[1.25rem] leading-[1.5] text-arch-ink">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-[20rem] text-[0.95rem] leading-[1.9] text-arch-ink-soft">
                  {item.body}
                </p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ══════════ 3. 院長と、同じ目線で考える ══════════
          写真は「同じ資料を見て、同じテーブルで経営を考える」場面として使う（売り込みの場面にしない） */}
      <section aria-labelledby="director-heading" className="border-t border-arch-line bg-arch-paper">
        <div className={`${CONTAINER} ${SECTION_Y}`}>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <BrandPhoto
                name="meeting"
                ratio="aspect-[3/2] lg:aspect-[5/4]"
                sizes="(max-width: 1023px) 100vw, 50vw"
              />
            </Reveal>

            <Reveal delay={80}>
              <SectionNumber no="02" label="WITH THE DIRECTOR" />
              <h2 id="director-heading" className={`${H2} mt-5`}>
                <span className="block">院長と、</span>
                <span className="block">同じ目線で考える。</span>
              </h2>
              <p className="serif-jp mt-8 text-[clamp(1.375rem,2.6vw,1.875rem)] leading-[1.6] text-arch-deep">
                <span className="block">人を見て、</span>
                <span className="block">最後は人が決める。</span>
              </p>
              <div className={`mt-8 ${PROSE_W} space-y-5 ${BODY}`}>
                <p>ARCHは、数字だけで医院を判断しません。</p>
                <p>
                  院長が何に悩み、何を背負い、これから医院をどうしていきたいのか。
                  <br className="hidden sm:block" />
                  そこから一緒に考えます。
                </p>
              </div>

              <div className="mt-10 border-t border-arch-line pt-8">
                <p className="text-[0.9375rem] leading-[1.9] text-arch-ink-muted">
                  調査・整理・資料化は、AIや仕組みへ移していく。
                </p>
                <ul className="mt-5 space-y-2.5">
                  {DIRECTOR_OWNS.map((t) => (
                    <li key={t} className="flex items-baseline gap-4 text-[1rem] leading-[1.8] text-arch-ink">
                      <span aria-hidden="true" className="h-px w-4 shrink-0 translate-y-[-0.3em] bg-arch-green" />
                      {t}
                    </li>
                  ))}
                </ul>
                <p className="display-jp mt-6 text-[1.0625rem] text-arch-deep">
                  そこは鈴木集が担います。
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════ 4. 代表・鈴木集 ══════════
          代表者紹介で終わらせず、ARCHの中での役割（担うこと／仕組みへ移すこと）まで示す */}
      <section aria-labelledby="person-heading" className="border-t border-arch-line bg-arch-white">
        <div className={`${CONTAINER} ${SECTION_Y}`}>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                {/* width / height は元画像の実寸。切り取らずに全体を見せる */}
                <Image
                  src="/images/ceo.jpg"
                  alt={`合同会社ARCH 代表 ${COMPANY.representative}`}
                  width={1086}
                  height={1448}
                  sizes="(max-width: 1023px) 100vw, 40vw"
                  className="w-full rounded-[2px] object-cover"
                />
                <p className="mt-4 text-[0.875rem] leading-[1.8] text-arch-ink-muted">
                  合同会社ARCH 代表 {COMPANY.representative}
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={80}>
                <SectionNumber no="03" label="REPRESENTATIVE" />
                <h2 id="person-heading" className={`${H2} mt-5`}>
                  代表・鈴木集
                </h2>
                <p className="serif-jp mt-8 max-w-[28ch] text-[clamp(1.25rem,2.6vw,1.625rem)] leading-[1.7] text-arch-deep">
                  「{REPRESENTATIVE_QUOTE}」
                </p>

                <ol className="relative mt-10 border-l border-arch-line pl-7">
                  {TIMELINE.map((t, i) => (
                    <li key={t.label} className={i === 0 ? "relative" : "relative mt-5"}>
                      <span
                        aria-hidden="true"
                        className={`absolute -left-[calc(1.75rem+4px)] top-[0.7em] h-[9px] w-[9px] rounded-full ${
                          t.year ? "bg-arch-deep" : "bg-arch-line"
                        }`}
                      />
                      {t.year && (
                        <p className="mono-micro text-arch-green tabular-nums">{t.year}</p>
                      )}
                      <p className="text-[1rem] leading-[1.8] text-arch-ink">{t.label}</p>
                    </li>
                  ))}
                </ol>
              </Reveal>

              {/* ARCHにおける役割 */}
              <Reveal delay={120}>
                <div className="mt-14 grid gap-10 border-t border-arch-line pt-10 md:grid-cols-2 md:gap-10">
                  <div>
                    <h3 className="display-jp text-[1.0625rem] text-arch-ink">鈴木集が担うこと</h3>
                    <ul className="mt-4 border-t border-arch-line">
                      {REPRESENTATIVE_ROLES.owns.map((r) => (
                        <li
                          key={r}
                          className="border-b border-arch-line py-3 text-[0.95rem] leading-[1.7] text-arch-ink"
                        >
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="display-jp text-[1.0625rem] text-arch-ink">
                      繰り返しの実務は、仕組みへ移す
                    </h3>
                    <p className="mt-4 text-[0.95rem] leading-[1.9] text-arch-ink-soft">
                      一度経験した判断は、次もゼロから繰り返さない。書類・記録・資料の下書きなどの繰り返し業務は、次の担い手へ移していきます。
                    </p>
                    <p className="mt-5 flex flex-wrap gap-x-3 gap-y-2">
                      {REPRESENTATIVE_ROLES.delegatedTo.map((d) => (
                        <span
                          key={d}
                          className="border-b border-arch-green/40 pb-0.5 text-[0.9375rem] text-arch-deep"
                        >
                          {d}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>

                <Cta href="/company" variant="text" className="mt-10">
                  経歴と会社概要を見る
                </Cta>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ 5. 支援実績 ══════════ */}
      <section aria-labelledby="cases-heading" className="border-t border-arch-line bg-arch-paper">
        <div className={`${CONTAINER} ${SECTION_Y}`}>
          <Reveal>
            <SectionHeader
              no="04"
              label="CASES"
              id="cases-heading"
              title="支援実績"
              lead={
                <p>
                  医院名は掲載していません。地域と、確認できた数字だけを載せています。
                  数字は医院・スタッフ・関係者の取り組みによるもので、ARCH単独の成果ではありません。
                </p>
              }
            />
          </Reveal>

          <div className="mt-12 border-t border-arch-deep md:mt-16">
            {CASES.map((c, i) => (
              <Reveal key={c.slug} delay={i * 60}>
                <CaseRow item={c} index={i} />
              </Reveal>
            ))}
          </div>

          <Cta href="/cases" variant="secondary" className="mt-12">
            支援実績をすべて見る
          </Cta>
        </div>
      </section>

      {/* ══════════ 6. 現場で実装する ══════════
          画像内の「ARCH」「訪問歯科運営ガイドライン」「プロジェクト実行計画」「工程表」が
          読み取れる大きさで表示する。画像の上に文字を重ねない。 */}
      <section aria-labelledby="implement-heading" className="border-t border-arch-line bg-arch-white">
        <div className={`${CONTAINER} ${SECTION_Y}`}>
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:order-2 lg:col-span-7">
              {/* スマートフォンは 4:3 にして工程表を大きく見せる。PC は元の比率（切り取らない） */}
              <BrandPhoto
                name="implementation"
                ratio="aspect-[4/3] sm:aspect-[3/2]"
                sizes="(max-width: 1023px) 100vw, 58vw"
              />
            </Reveal>

            <Reveal delay={80} className="lg:order-1 lg:col-span-5">
              <SectionNumber no="05" label="IMPLEMENT" />
              <h2 id="implement-heading" className={`${H2} mt-5`}>
                <span className="block">提案ではなく、</span>
                <span className="block">実装まで。</span>
              </h2>
              <div className={`mt-8 ${PROSE_W} space-y-5 ${BODY}`}>
                <p>資料を提出して終わりではありません。</p>
                <p>
                  体制を決め、工程をつくり、スタッフへ落とし込み、
                  診療と施設連携が実際に動く状態まで支援します。
                </p>
              </div>
              <p className="mt-10 border-l-2 border-arch-deep pl-5 text-[0.98rem] font-bold leading-[1.85] text-arch-deep">
                一度つくった仕組みは、
                <br />
                次の案件でゼロからつくらない。
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════ 7. 支援の二層 ══════════
          運営は「終わらせる仕事」、経営は「価値がある限り続ける仕事」。
          契約の継続そのものを成功として表現しない。 */}
      <section aria-labelledby="layers-heading" className="border-t border-arch-line bg-arch-paper">
        <div className={`${CONTAINER} ${SECTION_Y}`}>
          <Reveal>
            <SectionHeader
              no="06"
              label="TWO LAYERS"
              id="layers-heading"
              title="支援の二層"
              lead={
                <p>
                  ARCHの支援は、終わらせる仕事と、続ける価値がある仕事に分かれています。
                  どちらも、医院をARCHに依存させないことが前提です。
                </p>
              }
            />
          </Reveal>

          <div className="mt-12 md:mt-16">
            <TwoLayers />
          </div>
        </div>
      </section>

      {/* ══════════ 8. サービス ══════════
          TOP では二方向だけを示す。細かいサービスは並べない（詳細は下層ページ） */}
      <section
        id="pillars"
        aria-labelledby="pillars-heading"
        className="scroll-mt-20 border-t border-arch-line bg-arch-white"
      >
        <div className={`${CONTAINER} ${SECTION_Y}`}>
          <Reveal>
            <SectionHeader no="07" label="SERVICES" id="pillars-heading" title="サービス" />
          </Reveal>

          <ul className="mt-12 border-t border-arch-deep md:mt-16">
            {PILLARS.map((p, i) => (
              <Reveal as="li" key={p.href} delay={i * 80}>
                <Link
                  href={p.href}
                  className="group grid gap-5 border-b border-arch-line py-10 md:grid-cols-12 md:items-baseline md:gap-8 md:py-14"
                >
                  <p className="num-en text-[0.875rem] font-medium text-arch-green md:col-span-1">
                    {p.no}
                  </p>
                  <div className="md:col-span-6">
                    <h3 className="display-jp text-[clamp(1.1875rem,3vw,2.125rem)] leading-[1.45] text-arch-ink group-hover:text-arch-deep">
                      {p.direction}
                    </h3>
                    <p className="mt-3 text-[0.95rem] font-bold tracking-[0.04em] text-arch-green">
                      {p.shortLabel}
                    </p>
                  </div>
                  <p className="text-[0.98rem] leading-[1.9] text-arch-ink-soft md:col-span-4">
                    {p.body}
                  </p>
                  <span className="inline-flex min-h-11 items-center gap-2 text-[0.9rem] font-bold text-arch-green md:col-span-1 md:justify-end">
                    <span className="md:sr-only">詳しく見る</span>
                    <ArrowRight size={18} aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </ul>

          <p className="mt-8 max-w-[40rem] text-[0.95rem] leading-[1.9] text-arch-ink-soft">
            必要に応じて、採用・業者連携・DXなどの実行体制も組みます。
          </p>
        </div>
      </section>

      {/* ══════════ 9. ARCH Philosophy ══════════
          サービスの説明を終えたあと「ARCHはなぜこういう仕事をするのか」へ移る場所。
          サイト後半で空気を切り替えるため、ここだけ深緑の面にする。 */}
      <section
        aria-labelledby="philosophy-heading"
        className="on-forest bg-arch-deep text-arch-white"
      >
        <div className={`${CONTAINER} ${SECTION_Y}`}>
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-7">
              <BrandPhoto
                name="philosophy"
                ratio="aspect-[4/3] lg:aspect-[7/5]"
                sizes="(max-width: 1023px) 100vw, 58vw"
              />
            </Reveal>
            <Reveal delay={80} className="lg:col-span-5">
              <SectionNumber label="ARCH PHILOSOPHY" onDark />
              <h2 id="philosophy-heading" className="sr-only">
                ARCHの考え方
              </h2>
              <div className="mt-8">
                <PhilosophyBlock onDark />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ══════════ 10. 支援地域 ══════════ */}
      <section aria-labelledby="areas-heading" className="bg-arch-paper">
        <div className={`${CONTAINER} ${SECTION_Y}`}>
          <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="order-2 lg:order-1 lg:col-span-6">
              <Reveal>
                <SectionHeader
                  no="08"
                  label="AREAS"
                  id="areas-heading"
                  title="支援地域"
                  lead={<p>紹介をきっかけに、地域が広がっています。</p>}
                />
                <SupportAreaList />
              </Reveal>
            </div>

            <div className="order-1 lg:order-2 lg:col-span-6">
              <Reveal delay={80}>
                <JapanMap className="mx-auto h-auto w-full max-w-[400px]" />
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ 11. コラム ══════════ */}
      <section aria-labelledby="columns-heading" className="border-t border-arch-line bg-arch-paper">
        <div className={`${CONTAINER} py-[64px] md:py-[96px]`}>
          <div className="flex flex-wrap items-end justify-between gap-4 border-b border-arch-deep pb-5">
            <div>
              <SectionNumber no="09" label="COLUMN" />
              <h2 id="columns-heading" className="display-jp mt-4 text-[1.375rem] text-arch-ink">
                コラム
              </h2>
            </div>
            <Link
              href="/columns"
              className="inline-flex min-h-11 items-center text-[0.9rem] font-bold text-arch-green underline decoration-arch-green/40 underline-offset-[6px]"
            >
              すべて見る
            </Link>
          </div>

          <ul>
            {latestColumns.map((c) => (
              <li key={c.slug} className="border-b border-arch-line">
                <Link href={columnHref(c)} className="group grid gap-1 py-5 md:grid-cols-12 md:gap-8">
                  <div className="flex items-baseline gap-4 md:col-span-3">
                    <span className="text-[0.8125rem] tracking-wider text-arch-moss">{c.category}</span>
                    <span className="mono-micro text-arch-ink-muted tabular-nums">
                      {c.published.replace(/-/g, ".")}
                    </span>
                  </div>
                  <p className="text-[0.98rem] leading-[1.8] text-arch-ink group-hover:text-arch-green md:col-span-9">
                    {c.title}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ══════════ 12. 初回適性相談 ══════════ */}
      <ContactForm idPrefix="top" />
    </>
  );
}
