import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { COLUMN_METAS, columnHref } from "@/lib/columns";
import { SITE_URL, absoluteUrl, OG_IMAGE } from "@/lib/site";

const PATH = "/services/external-manager";

export const metadata: Metadata = {
  title: "外部事務長｜院長の経営実務を整理し、医院が回り続ける体制をつくる",
  description:
    "歯科医院の外部事務長として、院長が抱えている経営実務を整理します。医院の自走をつくる運営伴走（月額15万円）と、重要な経営判断まで扱う経営伴走（月額30万円）の2プランです。いずれも最低契約期間は6か月で、初期費用は別途お見積もりします。",
  alternates: { canonical: absoluteUrl(PATH) },
  openGraph: {
    type: "website",
    url: absoluteUrl(PATH),
    title: "外部事務長｜合同会社ARCH",
    description:
      "院長が抱えている経営実務を整理し、医院が回り続ける体制をつくる。運営伴走と経営伴走の2つのプラン。",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "外部事務長｜合同会社ARCH" }],
  },
};

/**
 * 料金プラン
 * ARCHフィロソフィー Ver.2.0 の二層構造に合わせ、
 * 「医院を自走させる運営レイヤー」と「重要判断を扱う経営レイヤー」で分ける。
 */
const PLANS = [
  {
    id: "operations",
    name: "外部事務長｜運営伴走",
    depth: "運営レイヤー｜医院が自走する仕組みをつくる",
    price: "150,000",
    priceNum: 150000,
    priceNote: "月額（税別）",
    terms: ["最低契約期間 6か月", "初期費用あり（支援範囲に応じて別途お見積もり）"],
    body:
      "日々の運営課題を整理し、医院のスタッフだけで基本運営が回る状態をつくります。担当・手順・期限を明確にし、ARCHが抜けても止まらない仕組みへ変えていくプランです。",
    items: [
      "現状の診断と、整える順番の決定",
      "記録・請求・採用・施設連携など、対象業務の仕組み化",
      "役割分担・手順書・確認方法の整備",
      "定例会と進捗確認",
      "6か月を一区切りとした引き継ぎと、自走できる状態の確認",
    ],
  },
  {
    id: "management",
    name: "外部事務長｜経営伴走",
    depth: "経営レイヤー｜院長の重要な判断まで一緒に担う",
    price: "300,000",
    priceNum: 300000,
    priceNote: "月額（税別）",
    terms: ["最低契約期間 6か月", "初期費用あり（支援範囲に応じて別途お見積もり）"],
    body:
      "運営の仕組み化に加え、院長が抱えている重要な経営判断まで一緒に扱います。作業量ではなく、判断の重さと関与する範囲に対して設計するプランです。",
    items: [
      "運営伴走プランの支援内容",
      "経営判断の相手役と、経営会議への参加",
      "数字を経営判断に変える月次確認",
      "制度改定・人の問題・組織課題への対応",
      "分院・訪問・承継など、次の展開の経営設計（個別プロジェクトの実行は別途）",
    ],
  },
];

/* 外部事務長が引き受ける実務の範囲 */
const SCOPE = [
  {
    title: "院内の事務と書類",
    body: "誰が何をいつ出すのかを決め、様式と保管場所をそろえます。院長の手元に残っている事務作業を引き取ります。",
  },
  {
    title: "採用",
    body: "求人を出す前に、任せる仕事の範囲と受け入れ後の流れを決めます。募集から入職後の定着までを見ます。",
  },
  {
    title: "業者・ディーラー対応",
    body: "見積もりの比較、導入時期の調整、立会いまで。院長が一人で判断していた部分に入ります。",
  },
  {
    title: "数字の確認",
    body: "月次で数字を並べ、どこを見て判断するかを決めます。数字が出せていない場合は、出せる状態にするところから始めます。",
  },
  {
    title: "既存の訪問診療の運営",
    body: "すでに動いている訪問診療について、記録・報告・施設との連絡の流れを整理します。",
  },
  {
    title: "分院展開の実務",
    body: "分院を考え始めた段階での準備、現場での立会い、院内の導線の確認まで対応します。",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}${PATH}#service`,
  name: "歯科医院の外部事務長",
  description:
    "歯科医院の外部事務長として、院長が抱えている経営実務を整理し、医院が回り続ける体制をつくるサービス。運営伴走と経営伴走の2つのプランがある。",
  url: absoluteUrl(PATH),
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: { "@type": "Country", name: "日本" },
  audience: { "@type": "Audience", audienceType: "歯科医院" },
  offers: PLANS.map((p) => ({
    "@type": "Offer",
    name: p.name,
    price: p.priceNum,
    priceCurrency: "JPY",
    description: `${p.body} ${p.priceNote}。最低契約期間6か月。初期費用は別途お見積もり。`,
  })),
};

export default function ExternalManagerPage() {
  const relatedColumns = COLUMN_METAS.filter(
    (c) => c.service === "external-manager"
  ).slice(0, 3);

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "外部事務長" }]} />

      <PageHero
        eyebrow="EXTERNAL MANAGER"
        title={
          <>
            院長が抱えている経営実務を整理し、
            <br className="hidden md:block" />
            医院が回り続ける体制をつくる。
          </>
        }
        lead="助言だけでは医院は回りません。外部事務長として、決めるところから実際に手を動かすところまで入ります。"
      />

      {/* ────────────── 何をするのか ────────────── */}
      <section aria-labelledby="scope-heading" className="bg-arch-cream">
        <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-36 lg:px-10">
          <Reveal>
            <h2
              id="scope-heading"
              className="display-jp text-[clamp(1.75rem,5vw,3rem)] leading-[1.3] text-arch-ink"
            >
              引き受ける実務
            </h2>
            <p className="mt-6 max-w-[720px] text-base leading-[1.9] text-arch-ink-soft">
              どこまでを ARCH が担うかは、契約前に文書で決めます。
              「何となく相談できる人」ではなく、担当が決まっている状態にすることが目的です。
            </p>
          </Reveal>

          <div className="mt-14 grid gap-x-10 gap-y-0 border-t border-arch-rule md:grid-cols-2">
            {SCOPE.map((s, i) => (
              <Reveal key={s.title} delay={Math.min(i, 3) * 60}>
                <div className="border-b border-arch-rule py-8">
                  <h3 className="display-jp text-lg text-arch-forest">{s.title}</h3>
                  <p className="mt-3 max-w-[36rem] text-base leading-[1.9] text-arch-ink-soft">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────── 料金 ────────────── */}
      <section
        id="plans"
        aria-labelledby="plans-heading"
        className="scroll-mt-20 border-t border-arch-rule bg-arch-cream-raised"
      >
        <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-36 lg:px-10">
          <Reveal>
            <h2
              id="plans-heading"
              className="display-jp text-[clamp(1.75rem,5vw,3rem)] leading-[1.3] text-arch-ink"
            >
              料金
            </h2>
            <p className="mt-6 max-w-[720px] text-base leading-[1.9] text-arch-ink-soft">
              プランの違いは、作業量ではなく<strong className="font-bold text-arch-ink">ARCHが扱う判断の範囲</strong>です。
              15万円は医院が自走する運営の仕組みをつくるプラン、30万円はその運営に加えて院長の重要な経営判断まで一緒に担うプランです。
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            {PLANS.map((p) => (
              <Reveal key={p.id}>
                <div className="flex h-full flex-col border border-arch-rule bg-arch-cream p-8 md:p-10">
                  <p className="text-sm tracking-wider text-arch-moss">{p.depth}</p>
                  <h3 className="display-jp mt-2 text-2xl text-arch-forest">{p.name}</h3>

                  {/* 狭い画面で金額が途中で折り返さないよう、単位を 1 行にまとめる */}
                  <p className="mt-6">
                    <span className="block text-sm text-arch-ink-soft">月額</span>
                    <span className="mt-1 flex items-baseline gap-1 whitespace-nowrap">
                      <span className="display-jp text-[2rem] tabular-nums text-arch-ink sm:text-4xl">
                        {p.price}
                      </span>
                      <span className="text-sm text-arch-ink-soft sm:text-base">
                        円（税別）
                      </span>
                    </span>
                  </p>

                  {p.terms.length > 0 && (
                    <ul className="mt-4 space-y-1">
                      {p.terms.map((t) => (
                        <li key={t} className="text-sm leading-[1.8] text-arch-ink-soft">
                          {t}
                        </li>
                      ))}
                    </ul>
                  )}

                  <p className="mt-6 border-t border-arch-rule pt-6 text-base leading-[1.9] text-arch-ink">
                    {p.body}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {p.items.map((it) => (
                      <li
                        key={it}
                        className="flex gap-3 text-[0.95rem] leading-[1.8] text-arch-ink-soft"
                      >
                        <span aria-hidden="true" className="text-arch-gold">
                          —
                        </span>
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mt-10 max-w-[720px] text-[0.95rem] leading-[1.9] text-arch-ink-soft">
            両プランとも最低契約期間は6か月です。支援開始時に、現状把握・業務整理・設計にかかる初期費用を別途お見積もりします。
            月額料金・初期費用はいずれも税別です。
          </p>
        </div>
      </section>

      {/* ────────────── 境界線 ────────────── */}
      <section
        aria-labelledby="boundary-heading"
        className="border-t border-arch-rule bg-arch-cream"
      >
        <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-36 lg:px-10">
          <Reveal>
            <h2
              id="boundary-heading"
              className="display-jp text-[clamp(1.75rem,5vw,3rem)] leading-[1.3] text-arch-ink"
            >
              訪問歯科は、どちらで対応するか
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="h-full border border-arch-rule bg-arch-cream-raised p-8 md:p-10">
                <p className="display-jp text-xl leading-[1.6] text-arch-forest">
                  今ある訪問診療を良くする
                </p>
                <p className="mt-6 text-base leading-[1.9] text-arch-ink-soft">
                  すでに訪問診療が動いている場合、その運営の整理は外部事務長の範囲で対応できます。
                  記録、報告、施設との連絡、担当の決め方などが対象です。
                </p>
                <p className="mt-8 text-base font-bold text-arch-ink">
                  → 外部事務長で対応可能
                </p>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="h-full border-2 border-arch-forest bg-arch-cream-raised p-8 md:p-10">
                <p className="display-jp text-xl leading-[1.6] text-arch-forest">
                  まだない訪問歯科をゼロからつくる
                </p>
                <p className="mt-6 text-base leading-[1.9] text-arch-ink-soft">
                  訪問歯科をこれから立ち上げる場合は、期間を区切った個別のプロジェクトになります。
                  外部事務長の契約には自動的に含みません。
                </p>
                <p className="mt-8 text-base font-bold text-arch-ink">
                  → 訪問歯科コンサルティングとして別途お見積もり
                </p>
                <Link
                  href="/services/visit-dental-consulting"
                  className="mt-8 inline-flex min-h-11 items-center gap-3 text-base font-bold text-arch-forest underline underline-offset-8"
                >
                  訪問歯科コンサルティングを見る
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ────────────── 関連ページへの内部リンク ────────────── */}
      <section
        aria-labelledby="related-heading"
        className="border-t border-arch-rule bg-arch-cream"
      >
        <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28 lg:px-10">
          <h2 id="related-heading" className="display-jp text-xl text-arch-ink">
            あわせて読む
          </h2>
          <ul className="mt-8 border-t border-arch-rule">
            <li className="border-b border-arch-rule">
              <Link
                href="/cases/hachioji-external-manager"
                className="block py-5 text-[0.95rem] leading-[1.8] text-arch-ink hover:text-arch-forest"
              >
                <span className="mr-3 text-sm text-arch-moss">支援実績</span>
                東京都八王子市｜補助金申請・施設基準の取得・分院展開の支援
              </Link>
            </li>
            {relatedColumns.map((c) => (
              <li key={c.slug} className="border-b border-arch-rule">
                <Link
                  href={columnHref(c)}
                  className="block py-5 text-[0.95rem] leading-[1.8] text-arch-ink hover:text-arch-forest"
                >
                  <span className="mr-3 text-sm text-arch-moss">コラム</span>
                  {c.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactForm idPrefix="external-manager" defaultTopic="外部事務長" />
    </>
  );
}
