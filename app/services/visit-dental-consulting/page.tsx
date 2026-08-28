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

const PATH = "/services/visit-dental-consulting";

export const metadata: Metadata = {
  title: "訪問歯科コンサルティング｜立ち上げと、回り続ける構造づくり",
  description:
    "訪問歯科の新規立ち上げと、一度つくったが回っていない体制の再設計を、期間を区切った個別のプロジェクトとして支援します。施設連携の導線、訪問チーム、院内フロー、書類、スタッフ研修、稼働後の数字確認まで。",
  alternates: { canonical: absoluteUrl(PATH) },
  openGraph: {
    type: "website",
    url: absoluteUrl(PATH),
    title: "訪問歯科コンサルティング｜合同会社ARCH",
    description:
      "訪問歯科を始めることではなく、回り続ける構造をつくる。期間を区切った個別のプロジェクトとして支援します。",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "訪問歯科コンサルティング｜合同会社ARCH" }],
  },
};

/* 対象になる状況 */
const TARGETS = [
  {
    title: "訪問歯科の新規立ち上げ",
    body: "これから訪問歯科を始める。何から決めればよいかが定まっていない状態から入ります。",
  },
  {
    title: "一度つくったが回っていない体制の再設計",
    body: "始めたものの件数が伸びない、現場が疲弊している、記録や請求が追いついていない。構造から組み直します。",
  },
  {
    title: "ゼロからの施設連携導線",
    body: "紹介に頼らず、自院で施設と関係をつくるための入口を設計します。",
  },
  {
    title: "訪問チーム・院内フロー・書類・スタッフ研修",
    body: "誰が何をどの順番でやるかを決め、様式をそろえ、実際に動かせるところまで研修します。",
  },
  {
    title: "稼働開始後の数字確認と改善",
    body: "動き出した後、件数と収支を並べて確認し、詰まっている箇所を直します。",
  },
];

/* 基本工程 */
const STEPS = [
  {
    title: "現状と地域性の確認",
    body: "医院の現状、周辺の施設の状況、すでにある関係を確認します。地域によって取れる手が変わるため、ここから始めます。",
  },
  {
    title: "目標・対象患者・訪問体制の設計",
    body: "どこまで伸ばすのか、誰を対象にするのか、誰がどの曜日に動くのかを決めます。",
  },
  {
    title: "施設連携・無料検診などの入口づくり",
    body: "施設に説明する資料と、検診から診療につなげるまでの手順を用意します。",
  },
  {
    title: "院内フロー・書類・スタッフ研修",
    body: "記録、報告、請求までの流れを決め、様式をそろえ、スタッフが迷わず動ける状態にします。",
  },
  {
    title: "稼働開始後の確認と改善",
    body: "動き出した後の件数と収支を確認し、続けられる形に整えます。",
  },
];

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}${PATH}#service`,
  name: "訪問歯科コンサルティング",
  description:
    "訪問歯科の新規立ち上げと、回っていない体制の再設計を、期間を区切った個別のプロジェクトとして支援するサービス。支援期間と費用は医院の状況と支援範囲に応じて個別に見積もる。",
  url: absoluteUrl(PATH),
  provider: { "@id": `${SITE_URL}/#organization` },
  areaServed: { "@type": "Country", name: "日本" },
  audience: { "@type": "Audience", audienceType: "歯科医院" },
};

export default function VisitDentalConsultingPage() {
  const relatedColumns = COLUMN_METAS.filter(
    (c) => c.service === "visit-dental-consulting"
  ).slice(0, 3);

  return (
    <>
      <JsonLd data={serviceJsonLd} />
      <Breadcrumb
        items={[{ label: "ホーム", href: "/" }, { label: "訪問歯科コンサルティング" }]}
      />

      <PageHero
        eyebrow="VISIT DENTAL"
        title={
          <>
            訪問歯科を始めることではなく、
            <br className="hidden md:block" />
            回り続ける構造をつくる。
          </>
        }
        lead="期間を区切った個別のプロジェクトとして、立ち上げ、または一度つくった体制の再設計をご一緒します。"
        image={{
          src: "/images/visit-dental-partnership.jpg",
          // 握手が文字の下に隠れないよう、画像の下寄りを見せる
          position: "object-[50%_70%]",
        }}
      />

      {/* ────────────── 対象 ────────────── */}
      <section aria-labelledby="targets-heading" className="bg-arch-cream">
        <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-36 lg:px-10">
          <Reveal>
            <h2
              id="targets-heading"
              className="display-jp text-[clamp(1.75rem,5vw,3rem)] leading-[1.3] text-arch-ink"
            >
              対象になる状況
            </h2>
          </Reveal>

          <div className="mt-14 border-t border-arch-rule">
            {TARGETS.map((t, i) => (
              <Reveal key={t.title} delay={Math.min(i, 3) * 60}>
                <div className="grid gap-3 border-b border-arch-rule py-8 md:grid-cols-12 md:gap-8">
                  <h3 className="display-jp text-lg leading-[1.6] text-arch-forest md:col-span-5">
                    {t.title}
                  </h3>
                  <p className="text-base leading-[1.9] text-arch-ink-soft md:col-span-7">
                    {t.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────── 基本工程 ────────────── */}
      <section
        aria-labelledby="steps-heading"
        className="border-t border-arch-rule bg-arch-cream-raised"
      >
        <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-36 lg:px-10">
          <Reveal>
            <h2
              id="steps-heading"
              className="display-jp text-[clamp(1.75rem,5vw,3rem)] leading-[1.3] text-arch-ink"
            >
              基本工程
            </h2>
            <p className="mt-6 max-w-[720px] text-base leading-[1.9] text-arch-ink-soft">
              医院の状況によって順番と重さは変わりますが、進め方の骨格は同じです。
            </p>
          </Reveal>

          <ol className="mt-14 border-t border-arch-rule">
            {STEPS.map((s, i) => (
              <Reveal as="li" key={s.title} delay={Math.min(i, 3) * 60}>
                <div className="grid gap-3 border-b border-arch-rule py-8 md:grid-cols-12 md:gap-8">
                  <p className="mono-micro text-arch-gold-deep tabular-nums md:col-span-1">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="display-jp text-lg leading-[1.6] text-arch-forest md:col-span-4">
                    {s.title}
                  </h3>
                  <p className="text-base leading-[1.9] text-arch-ink-soft md:col-span-7">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ────────────── 費用と範囲 ────────────── */}
      <section
        aria-labelledby="fee-heading"
        className="border-t border-arch-rule bg-arch-cream"
      >
        <div className="mx-auto max-w-[720px] px-6 py-24 md:py-36 lg:px-10">
          <Reveal>
            <h2
              id="fee-heading"
              className="display-jp text-[clamp(1.75rem,5vw,3rem)] leading-[1.3] text-arch-ink"
            >
              支援期間と費用
            </h2>
            <p className="mt-10 border-l-4 border-arch-gold bg-arch-cream-raised px-6 py-6 text-[1.0625rem] leading-[1.9] text-arch-ink">
              支援期間・費用は、医院の状況と支援範囲に応じて個別にお見積もりします。
            </p>
            <p className="mt-8 border-l-4 border-arch-rule bg-arch-cream-raised px-6 py-6 text-[1.0625rem] leading-[1.9] text-arch-ink">
              施設への営業、面談同行などの実行支援は、
              <br className="hidden sm:block" />
              地域や支援内容に応じて別途ご相談・お見積もりとなります。
            </p>
            <p className="mt-10 text-base leading-[1.9] text-arch-ink-soft">
              すでに訪問診療が動いていて、その運営を整理したいだけの場合は、
              <Link
                href="/services/external-manager"
                className="underline underline-offset-4 hover:text-arch-forest"
              >
                外部事務長
              </Link>
              の範囲で対応できることがあります。どちらに当てはまるか分からない場合も、初回相談で切り分けます。
            </p>
          </Reveal>
        </div>
      </section>

      {/* ────────────── 関連ページへの内部リンク ────────────── */}
      <section
        aria-labelledby="related-heading"
        className="border-t border-arch-rule bg-arch-cream-raised"
      >
        <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28 lg:px-10">
          <h2 id="related-heading" className="display-jp text-xl text-arch-ink">
            あわせて読む
          </h2>
          <ul className="mt-8 border-t border-arch-rule">
            <li className="border-b border-arch-rule">
              <Link
                href="/cases/setagaya-visit-dental"
                className="block py-5 text-[0.95rem] leading-[1.8] text-arch-ink hover:text-arch-forest"
              >
                <span className="mr-3 text-sm text-arch-moss">支援実績</span>
                東京都世田谷区｜訪問歯科をゼロから立ち上げ、4か月で施設1件・検診36名
              </Link>
            </li>
            <li className="border-b border-arch-rule">
              <Link
                href="/cases/sapporo-visit-dental"
                className="block py-5 text-[0.95rem] leading-[1.8] text-arch-ink hover:text-arch-forest"
              >
                <span className="mr-3 text-sm text-arch-moss">支援実績</span>
                北海道札幌市｜訪問歯科を中心とした医院運営
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
          <Link
            href="/services/external-manager"
            className="mt-10 inline-flex min-h-14 items-center gap-4 border border-arch-forest px-8 text-base font-bold text-arch-forest transition-colors hover:bg-arch-forest hover:text-arch-cream"
          >
            外部事務長を見る
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <ContactForm
        idPrefix="visit-dental"
        defaultTopic="訪問歯科コンサルティング"
      />
    </>
  );
}
