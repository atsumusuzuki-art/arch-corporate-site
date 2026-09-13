import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { COLUMN_METAS, columnHref } from "@/lib/columns";
import BrandPhoto from "@/components/ui/BrandPhoto";
import Cta, { CONSULT_LABEL } from "@/components/ui/Cta";
import RelatedLinks from "@/components/ui/RelatedLinks";
import SectionHeader from "@/components/ui/SectionHeader";
import StepList, { type Step } from "@/components/ui/StepList";
import { BODY, CONTAINER, PROSE_W, SECTION_Y } from "@/lib/ui";
import { SITE_URL, absoluteUrl, OG_IMAGE } from "@/lib/site";

const PATH = "/services/visit-dental-consulting";

export const metadata: Metadata = {
  title: "訪問歯科コンサルティング｜訪問歯科を、回り続ける事業にする",
  description:
    "訪問歯科の新規立ち上げと、一度つくったが回っていない体制の再設計を、期間を区切った個別のプロジェクトとして支援します。施設連携の導線、訪問チーム、院内フロー、書類、スタッフ研修、稼働後の数字確認まで。",
  alternates: { canonical: absoluteUrl(PATH) },
  openGraph: {
    type: "website",
    url: absoluteUrl(PATH),
    title: "訪問歯科コンサルティング｜合同会社ARCH",
    description:
      "訪問歯科を、回り続ける事業にする。立ち上げも、一度つくった体制の再設計も、期間を区切った個別のプロジェクトとして支援します。",
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

/**
 * 時間軸（現状確認 → 終了または経営レイヤーへ）
 * 「患者を紹介する」ことを中心価値にしない。医院の中に体制をつくり、自院で施設との関係を積み上げる。
 */
const TIMELINE_STEPS: Step[] = [
  {
    phase: "判断する",
    title: "現状確認",
    body: "医院の体制・数字、周辺の施設の状況、すでにある関係を確認します。地域によって取れる手が変わるため、ここから始めます。",
  },
  {
    title: "適性判断",
    body: "訪問歯科に取り組むべきか、今始めるべきかを判断します。向いていない場合は、そうお伝えします。",
  },
  {
    phase: "設計する",
    title: "体制設計",
    body: "目標、対象、担当、曜日、移動を決めます。誰が何をどの順番でやるかを先に決めます。",
  },
  {
    title: "機材・制度・導線",
    body: "必要な機材、届出や施設基準、院内から訪問先までの動き方を整えます。",
  },
  {
    title: "施設連携",
    body: "施設への説明資料と、検診から診療につなげる手順をつくります。紹介に頼らず、自院で関係を積み上げる入口を設計します。",
  },
  {
    phase: "動かす",
    title: "院内運用",
    body: "記録・報告・請求までの流れと様式をそろえ、スタッフが迷わず動ける状態まで研修します。",
  },
  {
    title: "稼働",
    body: "実際の訪問を始めます。立ち上がりの時期は、現場で詰まっている箇所を一緒に確認します。",
  },
  {
    title: "改善",
    body: "件数と収支を並べて確認し、続けられる形に直します。",
  },
  {
    phase: "残す",
    title: "自走化",
    body: "医院のスタッフだけで回ることを確認し、手順と判断基準を医院に引き継ぎます。",
  },
  {
    title: "終了、または経営レイヤーへ",
    body: "自走できれば支援は終了です。経営判断の相手役が必要な場合は、外部事務長として続けることもできます。",
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
            {/* PC・スマートフォンとも必ずこの 2 行にする */}
            <span className="block">訪問歯科を、</span>
            <span className="block">回り続ける事業にする。</span>
          </>
        }
        lead="立ち上げも、一度つくった体制の再設計も、期間を区切った個別のプロジェクトとしてご一緒します。"
      />

      {/* ────────────── 考え方 ────────────── */}
      <section aria-labelledby="approach-heading" className="bg-arch-white">
        <div className={`${CONTAINER} ${SECTION_Y}`}>
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
            <Reveal className="lg:order-2 lg:col-span-7">
              <BrandPhoto
                name="implementation"
                ratio="aspect-[4/3] sm:aspect-[3/2]"
                sizes="(max-width: 1023px) 100vw, 58vw"
              />
            </Reveal>
            <Reveal delay={80} className="lg:order-1 lg:col-span-5">
              <SectionHeader
                no="01"
                label="APPROACH"
                id="approach-heading"
                title={
                  <>
                    <span className="block">患者を紹介する仕事では</span>
                    <span className="block">ありません。</span>
                  </>
                }
              />
              <div className={`mt-8 ${PROSE_W} space-y-5 ${BODY}`}>
                <p>
                  訪問歯科は、医院の中に体制をつくり、施設との関係を自院で積み上げていく事業です。
                </p>
                <p>
                  ARCHは、体制・書類・施設連携・院内運用を現場で動く状態までつくり、最後は医院だけで回る形にして引き継ぎます。
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ────────────── 対象 ────────────── */}
      <section aria-labelledby="targets-heading" className="border-t border-arch-line bg-arch-paper">
        <div className={`${CONTAINER} ${SECTION_Y}`}>
          <Reveal>
            <SectionHeader no="02" label="FOR" id="targets-heading" title="対象になる状況" />
          </Reveal>
          <div className="mt-12 md:mt-16">
            <StepList steps={TARGETS} numbered={false} />
          </div>
        </div>
      </section>

      {/* ────────────── 時間軸 ────────────── */}
      <section aria-labelledby="steps-heading" className="border-t border-arch-line bg-arch-white">
        <div className={`${CONTAINER} ${SECTION_Y}`}>
          <Reveal>
            <SectionHeader
              no="03"
              label="TIMELINE"
              id="steps-heading"
              title="進め方（時間軸）"
              lead={
                <p>
                  医院の状況によって順番と重さは変わりますが、進め方の骨格は同じです。
                  最後は、医院だけで回る状態にして終わります。
                </p>
              }
            />
          </Reveal>
          <div className="mt-12 md:mt-16">
            <StepList steps={TIMELINE_STEPS} />
          </div>
        </div>
      </section>

      {/* ────────────── 費用と範囲（表記は変更しない） ────────────── */}
      <section aria-labelledby="fee-heading" className="border-t border-arch-line bg-arch-paper">
        <div className={`${CONTAINER} ${SECTION_Y}`}>
          <div className="max-w-[44rem]">
            <Reveal>
              <SectionHeader no="04" label="FEE" id="fee-heading" title="支援期間と費用" />
              <p className="mt-10 border-l-2 border-arch-deep bg-arch-white px-6 py-5 text-[1.0625rem] leading-[1.9] text-arch-ink">
                支援期間・費用は、医院の状況と支援範囲に応じて個別にお見積もりします。
              </p>
              <p className="mt-5 border-l-2 border-arch-line bg-arch-white px-6 py-5 text-[1.0625rem] leading-[1.9] text-arch-ink">
                施設への営業、面談同行などの実行支援は、
                <br className="hidden sm:block" />
                地域や支援内容に応じて別途ご相談・お見積もりとなります。
              </p>
              <p className="mt-10 text-base leading-[1.9] text-arch-ink-soft">
                すでに訪問診療が動いていて、その運営を整理したいだけの場合は、
                <Link
                  href="/services/external-manager"
                  className="underline underline-offset-4 hover:text-arch-green"
                >
                  外部事務長
                </Link>
                の範囲で対応できることがあります。どちらに当てはまるか分からない場合も、初回適性相談で切り分けます。
              </p>
              <Cta href="#contact" className="mt-10">
                {CONSULT_LABEL}
              </Cta>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ────────────── 関連ページへの内部リンク ────────────── */}
      <RelatedLinks
        links={[
          {
            href: "/cases/setagaya-visit-dental",
            kind: "支援実績",
            title: "東京都世田谷区｜訪問歯科をゼロから立ち上げ、4か月で施設1件・検診36名",
          },
          {
            href: "/cases/sapporo-visit-dental",
            kind: "支援実績",
            title: "北海道札幌市｜訪問歯科を中心とした医院運営",
          },
          ...relatedColumns.map((c) => ({ href: columnHref(c), kind: "コラム", title: c.title })),
        ]}
      >
        <Cta href="/services/external-manager" variant="secondary" className="mt-10">
          外部事務長を見る
        </Cta>
      </RelatedLinks>

      <ContactForm idPrefix="visit-dental" defaultTopic="訪問歯科コンサルティング" />
    </>
  );
}
