import type { Metadata } from "next";
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
import StepList from "@/components/ui/StepList";
import TwoLayers from "@/components/ui/TwoLayers";
import { BODY, CONTAINER, PROSE_W, SECTION_Y } from "@/lib/ui";
import { PHILOSOPHY, SITE_URL, absoluteUrl, OG_IMAGE } from "@/lib/site";

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

/* 1. 院長が一人で抱えている仕事 */
const BURDENS = [
  "採用と、スタッフの問題",
  "書類・届出・施設基準",
  "業者・ディーラーとの調整",
  "数字の確認と、それを踏まえた判断",
  "施設とのやりとり",
  "制度改定への対応",
  "分院・訪問・承継など、次の展開",
];

/* 4. 医院側が担う範囲（ARCHに依存させないための役割分担） */
const CLINIC_SIDE = [
  {
    title: "院長",
    body: "医院の方向と、最終的な経営判断。ARCHは判断の材料と選択肢を揃え、相手役を務めます。",
  },
  {
    title: "スタッフ",
    body: "決めた手順を日々まわすこと。ARCHは手順と確認方法をつくり、スタッフだけで回る状態まで伴走します。",
  },
  {
    title: "情報の開示",
    body: "数字・資料・現場の状況を共有していただくこと。確認できない状態で判断はしません。",
  },
  {
    title: "時間の確保",
    body: "定例の打ち合わせと、引き継ぎの時間。仕組みを医院に残すために必要な時間です。",
  },
];

/* 5. 進め方 */
const PROCESS = [
  {
    title: "初回適性相談",
    body: "医院の目的・現状・体制を伺い、ARCHが入るべきかどうかを判断します。",
  },
  {
    title: "現状の確認と、範囲の決定",
    body: "どこまでをARCHが担い、どこからを医院が担うかを、契約前に文書で決めます。",
  },
  {
    title: "仕組みづくり",
    body: "担当・手順・期限・確認方法を決め、現場で動く形にします。定例会で進み具合を確認します。",
  },
  {
    title: "医院への引き継ぎ",
    body: "手順書と判断基準を医院に渡し、スタッフだけで回ることを一緒に確認します。",
  },
  {
    title: "自走の確認と、その先の判断",
    body: "運営が回っていれば運営の支援は終了です。経営判断の相手役が必要な場合だけ、外部事務長として続けます。",
  },
];

/* 8. 自走・卒業・継続の条件 */
const EXIT_TERMS = [
  {
    title: "運営レイヤーは、完了させる",
    body: "医院スタッフだけで基本運営が回ることを確認したら、その支援は完了です。顧問料の名目で続けることはしません。",
  },
  {
    title: "経営レイヤーも担えるようになれば、卒業",
    body: "院長と医院の中で経営判断まで担えるようになれば、契約は終わります。ARCHはこれを失注ではなく「卒業」と呼びます。",
  },
  {
    title: "続けるのは、経営価値が残る場合だけ",
    body: "外部事務長として続けるのは、判断の相手役として価値が残る場合です。契約を続けること自体を目的にしません。",
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

      {/* ────────────── 1. 院長が抱えている負担 ────────────── */}
      <section aria-labelledby="burden-heading" className="bg-arch-white">
        <div className={`${CONTAINER} ${SECTION_Y}`}>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <SectionHeader
                no="01"
                label="BURDEN"
                id="burden-heading"
                title={
                  <>
                    <span className="block">院長が、</span>
                    <span className="block">一人で抱えている仕事</span>
                  </>
                }
                lead={<p>診療を続けながら、これらを一人で判断し続けるのは簡単ではありません。</p>}
              />
            </Reveal>
            <Reveal delay={60} className="lg:col-span-7">
              <ul className="border-t border-arch-deep">
                {BURDENS.map((b) => (
                  <li
                    key={b}
                    className="border-b border-arch-line py-4 text-[1.0625rem] leading-[1.7] text-arch-ink"
                  >
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ────────────── 2. ARCHの役割 ────────────── */}
      <section aria-labelledby="role-heading" className="border-t border-arch-line bg-arch-paper">
        <div className={`${CONTAINER} ${SECTION_Y}`}>
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <BrandPhoto
                name="meeting"
                ratio="aspect-[3/2]"
                sizes="(max-width: 1023px) 100vw, 50vw"
              />
            </Reveal>
            <Reveal delay={80}>
              <SectionHeader no="02" label="ROLE" id="role-heading" title="ARCHの役割" />
              <p className="serif-jp mt-8 text-[clamp(1.125rem,1.9vw,1.375rem)] leading-[1.8] text-arch-deep">
                {PHILOSOPHY.mainLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
              <p className={`mt-8 ${BODY}`}>
                {PHILOSOPHY.subLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ────────────── 3. ARCHが担う範囲 ────────────── */}
      <section aria-labelledby="scope-heading" className="border-t border-arch-line bg-arch-white">
        <div className={`${CONTAINER} ${SECTION_Y}`}>
          <Reveal>
            <SectionHeader
              no="03"
              label="SCOPE"
              id="scope-heading"
              title="ARCHが担う範囲"
              lead={
                <p>
                  どこまでをARCHが担うかは、契約前に文書で決めます。
                  「何でも頼める人」ではなく、担当と範囲が決まっている状態にすることが目的です。
                </p>
              }
            />
          </Reveal>

          <div className="mt-12 grid gap-x-12 border-t border-arch-deep md:mt-16 md:grid-cols-2">
            {SCOPE.map((s, i) => (
              <Reveal key={s.title} delay={Math.min(i, 3) * 50}>
                <div className="h-full border-b border-arch-line py-7">
                  <h3 className="display-jp text-[1.125rem] text-arch-ink">{s.title}</h3>
                  <p className="mt-3 max-w-[36rem] text-[0.98rem] leading-[1.9] text-arch-ink-soft">
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* 訪問歯科の切り分け */}
          <Reveal>
            <div className="mt-14 grid gap-8 border-t border-arch-line pt-10 md:grid-cols-2 md:gap-12">
              <div>
                <p className="mono-micro text-arch-green">VISIT DENTAL</p>
                <h3 className="display-jp mt-3 text-[1.125rem] text-arch-ink">
                  今ある訪問診療を良くする
                </h3>
                <p className="mt-3 text-[0.98rem] leading-[1.9] text-arch-ink-soft">
                  すでに訪問診療が動いている場合、記録・報告・施設との連絡・担当の決め方などの整理は、外部事務長の範囲で対応できます。
                </p>
              </div>
              <div>
                <p className="mono-micro text-arch-green">NEW PROJECT</p>
                <h3 className="display-jp mt-3 text-[1.125rem] text-arch-ink">
                  まだない訪問歯科をゼロからつくる
                </h3>
                <p className="mt-3 text-[0.98rem] leading-[1.9] text-arch-ink-soft">
                  期間を区切った個別のプロジェクトになり、外部事務長の契約には自動的に含みません。訪問歯科コンサルティングとして別途お見積もりします。
                </p>
                <Cta href="/services/visit-dental-consulting" variant="text" className="mt-4">
                  訪問歯科コンサルティングを見る
                </Cta>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ────────────── 4. 医院側が担う範囲 ────────────── */}
      <section aria-labelledby="clinic-heading" className="border-t border-arch-line bg-arch-paper">
        <div className={`${CONTAINER} ${SECTION_Y}`}>
          <Reveal>
            <SectionHeader
              no="04"
              label="CLINIC SIDE"
              id="clinic-heading"
              title="医院側が担う範囲"
              lead={
                <p>
                  ARCHが入っても、医院の主役は院長とスタッフです。
                  医院をARCHに依存させないために、最初から役割を分けておきます。
                </p>
              }
            />
          </Reveal>
          <div className="mt-12 md:mt-16">
            <StepList steps={CLINIC_SIDE} numbered={false} />
          </div>
        </div>
      </section>

      {/* ────────────── 5. 進め方 ────────────── */}
      <section aria-labelledby="process-heading" className="border-t border-arch-line bg-arch-white">
        <div className={`${CONTAINER} ${SECTION_Y}`}>
          <Reveal>
            <SectionHeader no="05" label="PROCESS" id="process-heading" title="進め方" />
          </Reveal>
          <div className="mt-12 md:mt-16">
            <StepList steps={PROCESS} />
          </div>
        </div>
      </section>

      {/* ────────────── 6・7. 運営レイヤー／経営レイヤー ────────────── */}
      <section aria-labelledby="layers-heading" className="border-t border-arch-line bg-arch-paper">
        <div className={`${CONTAINER} ${SECTION_Y}`}>
          <Reveal>
            <SectionHeader
              no="06"
              label="OPERATIONS / MANAGEMENT"
              id="layers-heading"
              title="運営レイヤーと、経営レイヤー"
              lead={
                <p>
                  外部事務長の仕事は二つの層に分かれます。
                  運営は仕組みにして医院へ渡し、経営判断は価値がある限り一緒に担います。
                </p>
              }
            />
          </Reveal>
          <div className="mt-12 md:mt-16">
            <TwoLayers withClosing={false} />
          </div>
        </div>
      </section>

      {/* ────────────── 8. 自走・卒業・継続の条件 ────────────── */}
      <section aria-labelledby="exit-heading" className="border-t border-arch-line bg-arch-white">
        <div className={`${CONTAINER} ${SECTION_Y}`}>
          <Reveal>
            <SectionHeader no="07" label="GRADUATION" id="exit-heading" title="自走・卒業・継続の条件" />
          </Reveal>
          <div className="mt-12 md:mt-16">
            <StepList steps={EXIT_TERMS} numbered={false} />
          </div>
          <Reveal>
            <p className="serif-jp mt-14 text-[clamp(1.375rem,3vw,2.125rem)] leading-[1.6] text-arch-ink">
              <span className="block">自走できれば卒業。</span>
              <span className="block">経営価値が残れば、外部事務長として続く。</span>
            </p>
          </Reveal>
        </div>
      </section>

      {/* ────────────── 9. 料金 ──────────────
          料金・契約条件の表記は 2026-08-22 改定のまま変更しない（変更は鈴木集の判断事項）。
          docs/CONTENT_DECISIONS_REQUIRED.md 参照 */}
      <section
        id="plans"
        aria-labelledby="plans-heading"
        className="scroll-mt-20 border-t border-arch-line bg-arch-paper"
      >
        <div className={`${CONTAINER} ${SECTION_Y}`}>
          <Reveal>
            <SectionHeader
              no="08"
              label="FEE"
              id="plans-heading"
              title="料金"
              lead={
                <p>
                  プランの違いは、作業量ではなく
                  <strong className="font-bold text-arch-ink">ARCHが扱う判断の範囲</strong>
                  です。15万円は医院が自走する運営の仕組みをつくるプラン、30万円はその運営に加えて院長の重要な経営判断まで一緒に担うプランです。
                </p>
              }
            />
          </Reveal>

          <div className="mt-12 grid border-t border-arch-deep md:mt-16 lg:grid-cols-2">
            {PLANS.map((p, i) => (
              <Reveal
                key={p.id}
                className={`py-10 md:py-12 ${
                  i === 0
                    ? "lg:pr-12"
                    : "border-t border-arch-line lg:border-l lg:border-t-0 lg:pl-12"
                }`}
              >
                <p className="text-[0.875rem] font-bold tracking-[0.04em] text-arch-green">{p.depth}</p>
                <h3 className="display-jp mt-2 text-[1.5rem] text-arch-ink">{p.name}</h3>

                {/* 狭い画面で金額が途中で折り返さないよう、単位を 1 行にまとめる */}
                <p className="mt-6">
                  <span className="block text-sm text-arch-ink-soft">月額</span>
                  <span className="mt-1 flex items-baseline gap-1.5 whitespace-nowrap">
                    <span className="num-en text-[2.25rem] font-medium text-arch-deep sm:text-[2.75rem]">
                      {p.price}
                    </span>
                    <span className="text-sm text-arch-ink-soft sm:text-base">円（税別）</span>
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

                <p className="mt-6 border-t border-arch-line pt-6 text-[1rem] leading-[1.9] text-arch-ink">
                  {p.body}
                </p>

                <ul className="mt-6 space-y-3">
                  {p.items.map((it) => (
                    <li
                      key={it}
                      className="flex items-baseline gap-3 text-[0.95rem] leading-[1.8] text-arch-ink-soft"
                    >
                      <span aria-hidden="true" className="h-px w-3 shrink-0 translate-y-[-0.3em] bg-arch-green" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>

          <p className={`mt-6 ${PROSE_W} text-[0.95rem] leading-[1.9] text-arch-ink-soft`}>
            両プランとも最低契約期間は6か月です。支援開始時に、現状把握・業務整理・設計にかかる初期費用を別途お見積もりします。
            月額料金・初期費用はいずれも税別です。
          </p>

          <Cta href="#contact" className="mt-10">
            {CONSULT_LABEL}
          </Cta>
        </div>
      </section>

      {/* ────────────── 関連ページへの内部リンク ────────────── */}
      <RelatedLinks
        links={[
          {
            href: "/cases/hachioji-external-manager",
            kind: "支援実績",
            title: "東京都八王子市｜補助金申請・施設基準の取得・分院展開の支援",
          },
          ...relatedColumns.map((c) => ({ href: columnHref(c), kind: "コラム", title: c.title })),
        ]}
      />

      {/* ────────────── 10. 初回適性相談 ────────────── */}
      <ContactForm idPrefix="external-manager" defaultTopic="外部事務長" />
    </>
  );
}
