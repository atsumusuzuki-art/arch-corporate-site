import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, Check } from "lucide-react";
import Reveal from "@/components/Reveal";
import { SITE_URL, absoluteUrl } from "@/lib/site";

/**
 * 訪問歯科を入口にしたサンプルLP
 * ------------------------------------------------------------------
 * ・営業施策を検討するための未公開サンプル。検索結果には出さない。
 * ・訪問歯科の「始め方」ではなく、医院内に運営の型を残す価値を伝える。
 * ・数字は lib/cases.ts と同じ確認済みの事実だけを使う。
 */

const PATH = "/services/visit-dental-consulting/lp-sample";

export const metadata: Metadata = {
  title: "訪問歯科を、始めるだけで終わらせない。｜LPサンプル",
  description:
    "訪問歯科の立ち上げを、体制設計・施設連携・院内フロー・書類・研修・数字確認まで支援する合同会社ARCHのサンプルLPです。",
  alternates: { canonical: absoluteUrl("/services/visit-dental-consulting") },
  robots: { index: false, follow: false },
  openGraph: {
    type: "website",
    url: absoluteUrl(PATH),
    title: "訪問歯科を、始めるだけで終わらせない。｜合同会社ARCH",
    description:
      "計画を渡して終わるのではなく、医院スタッフだけで回る状態まで。訪問歯科の立ち上げを実行から定着まで支援します。",
  },
};

const OPERATING_FLOW = [
  {
    number: "01",
    title: "決める",
    body: "地域、対象患者、曜日、人員、車両、器材。医院の条件に合わせて、最初に決めることを整理します。",
  },
  {
    number: "02",
    title: "現場で試す",
    body: "施設への説明、検診、診療、記録、報告、請求までを実際に動かし、机上では見えない詰まりを確認します。",
  },
  {
    number: "03",
    title: "型にする",
    body: "担当と順番を決め、説明資料・書式・確認表・数字の見方をそろえます。人が替わっても迷わない状態にします。",
  },
  {
    number: "04",
    title: "医院に引き継ぐ",
    body: "スタッフ研修と稼働後の修正を重ね、ARCHがいなくても医院内で運営を続けられる状態を目指します。",
  },
];

const ARCH_SCOPE = [
  "現状・地域性・既存の関係の整理",
  "対象患者と訪問体制の設計",
  "施設への説明資料と連携導線の整備",
  "検診から診療につなげる院内フローの設計",
  "記録・報告・請求までの書式整備",
  "スタッフ研修と稼働後の数字確認",
];

const CLINIC_SCOPE = [
  "患者さんに対する医療上の判断",
  "診療品質と安全管理",
  "院内での最終意思決定",
  "スタッフとの日々のコミュニケーション",
];

const fieldClass =
  "mt-2 min-h-12 w-full border border-arch-rule bg-arch-cream px-4 py-3 text-base text-arch-ink outline-none transition-colors focus:border-arch-forest";
const labelClass = "block text-[0.95rem] font-bold text-arch-ink";

function Required() {
  return <span className="ml-2 text-xs font-bold text-arch-forest">必須</span>;
}

export default function VisitDentalLpSamplePage() {
  return (
    <>
      {/* ファーストビュー：1画面で対象・提供価値・次の行動を伝える */}
      <section className="relative overflow-hidden bg-arch-forest text-arch-cream on-forest">
        <div className="mx-auto grid min-h-[calc(100svh-4rem)] max-w-[1200px] items-center gap-14 px-6 py-20 md:min-h-[760px] md:grid-cols-12 md:py-24 lg:px-10">
          <div className="md:col-span-7">
            <p className="mono-label text-arch-gold-on-dark">
              VISIT DENTAL STARTUP
            </p>
            <h1 className="display-jp mt-7 text-[clamp(2.35rem,7vw,5.25rem)] leading-[1.16] tracking-[-0.035em]">
              訪問歯科を、
              <br />
              始めるだけで
              <br />
              終わらせない。
            </h1>
            <p className="mt-8 max-w-[42rem] text-[clamp(1rem,2vw,1.25rem)] leading-[2] text-arch-sage">
              院長が診療を続けながら、施設連携、訪問体制、書類、研修、数字確認までを一人で抱える必要はありません。
              ARCHは、訪問歯科を医院の中で“回り続ける事業”にするところまで入ります。
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="#contact"
                className="inline-flex min-h-14 items-center justify-center gap-4 bg-arch-cream px-8 text-base font-bold text-arch-forest transition-colors hover:bg-arch-cream-raised"
              >
                訪問歯科の立ち上げを相談する
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
              <Link
                href="#case"
                className="inline-flex min-h-12 items-center justify-center gap-3 px-2 text-[0.95rem] font-bold text-arch-cream underline decoration-arch-gold underline-offset-8"
              >
                支援実績を見る
                <ArrowDown size={16} aria-hidden="true" />
              </Link>
            </div>
            <p className="mt-7 text-sm leading-[1.8] text-arch-sage">
              初回相談30分・オンライン ／ 全国対応
            </p>
          </div>

          <div className="border-y border-arch-rule-dark py-8 md:col-span-5 md:border-y-0 md:border-l md:py-0 md:pl-10 lg:pl-14">
            <p className="mono-micro text-arch-gold-on-dark">ARCH MAKES THE SYSTEM</p>
            <ol className="mt-7">
              {OPERATING_FLOW.map((step, index) => (
                <li
                  key={step.number}
                  className="grid grid-cols-[2.75rem_1fr] gap-4 border-t border-arch-rule-dark py-5 first:border-t-0 first:pt-0"
                >
                  <span className="mono-micro text-arch-gold-on-dark">{step.number}</span>
                  <div>
                    <p className="font-bold text-arch-cream">{step.title}</p>
                    {index < OPERATING_FLOW.length - 1 && (
                      <p className="mt-1 text-sm text-arch-sage">次の工程へつなぐ</p>
                    )}
                    {index === OPERATING_FLOW.length - 1 && (
                      <p className="mt-1 text-sm text-arch-sage">医院内に運営の型を残す</p>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* 「始める」と決めた後に発生する実務を、現場の順番で示す */}
      <section aria-labelledby="after-decision" className="bg-arch-cream">
        <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-36 lg:px-10">
          <Reveal>
            <p className="mono-micro text-arch-gold-deep">THE WORK STARTS HERE — 01</p>
            <h2
              id="after-decision"
              className="display-jp mt-6 max-w-[850px] text-[clamp(1.9rem,5vw,3.5rem)] leading-[1.35] text-arch-ink"
            >
              「訪問歯科をやる」と決めたあとに、
              <br className="hidden md:block" />
              本当の実務が始まります。
            </h2>
            <p className="mt-8 max-w-[760px] text-[1.0625rem] leading-[2] text-arch-ink-soft">
              届出を出し、器材をそろえるだけでは、事業は回りません。患者さんとの入口、施設との連携、診療日の動き、院内の記録と請求が一本につながって、初めて続けられる体制になります。
            </p>
          </Reveal>

          <div className="mt-16 border-t border-arch-rule">
            {[
              ["入口をつくる", "誰に、どの地域で、どう知ってもらうか。施設への説明と、検診から利用開始までの道筋を決める。"],
              ["診療を動かす", "誰が、何曜日に、どの順番で回るか。器材、車両、ルート、急な変更への対応まで決める。"],
              ["院内につなぐ", "記録、施設への報告、家族連絡、請求を、外来とぶつからない流れにする。"],
              ["数字で直す", "件数と収支を確認し、現場が止まっている場所を見つけ、次の稼働に反映する。"],
            ].map(([title, body], index) => (
              <Reveal key={title} delay={Math.min(index, 3) * 60}>
                <div className="grid gap-4 border-b border-arch-rule py-8 md:grid-cols-12 md:gap-8">
                  <p className="mono-micro text-arch-gold-deep md:col-span-1">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3 className="display-jp text-xl leading-[1.5] text-arch-forest md:col-span-4">
                    {title}
                  </h3>
                  <p className="text-base leading-[1.95] text-arch-ink-soft md:col-span-7">
                    {body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LP全体の中心メッセージ */}
      <section className="bg-arch-cream-raised border-y border-arch-rule">
        <div className="mx-auto max-w-[960px] px-6 py-24 text-center md:py-32 lg:px-10">
          <Reveal>
            <p className="mono-micro text-arch-gold-deep">ARCH&apos;S ROLE</p>
            <p className="display-jp mt-7 text-[clamp(1.75rem,5vw,3.25rem)] leading-[1.5] text-arch-forest">
              ARCHがつくるのは、
              <br />
              訪問歯科の計画書ではなく、
              <br />
              医院の中で回る型です。
            </p>
          </Reveal>
        </div>
      </section>

      {/* 支援の進め方 */}
      <section aria-labelledby="process-heading" className="bg-arch-cream-raised">
        <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-36 lg:px-10">
          <Reveal>
            <p className="mono-micro text-arch-gold-deep">HOW WE WORK — 02</p>
            <h2
              id="process-heading"
              className="display-jp mt-6 text-[clamp(1.9rem,5vw,3.5rem)] leading-[1.35] text-arch-ink"
            >
              助言で終わらず、
              <br />
              現場で試し、医院に残す。
            </h2>
          </Reveal>

          <ol className="mt-16 grid border-t border-arch-rule md:grid-cols-4">
            {OPERATING_FLOW.map((step, index) => (
              <Reveal
                as="li"
                key={step.number}
                delay={Math.min(index, 3) * 70}
                className="border-b border-arch-rule py-8 md:border-r md:px-7 md:last:border-r-0"
              >
                <p className="mono-micro text-arch-gold-deep">{step.number}</p>
                <h3 className="display-jp mt-5 text-xl text-arch-forest">{step.title}</h3>
                <p className="mt-4 text-[0.95rem] leading-[1.9] text-arch-ink-soft">
                  {step.body}
                </p>
              </Reveal>
            ))}
          </ol>

          <Reveal>
            <p className="mt-10 max-w-[760px] border-l-4 border-arch-gold pl-6 text-[1.0625rem] leading-[2] text-arch-ink">
              完了の基準は、資料を納品した日ではありません。医院のスタッフが、自分たちで訪問歯科を動かせるようになったかどうかです。
            </p>
          </Reveal>
        </div>
      </section>

      {/* 確認済みの支援実績 */}
      <section id="case" aria-labelledby="case-heading" className="bg-arch-forest text-arch-cream on-forest">
        <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-36 lg:px-10">
          <Reveal>
            <p className="mono-micro text-arch-gold-on-dark">CASE — 03</p>
            <div className="mt-6 grid gap-8 md:grid-cols-12 md:items-end">
              <div className="md:col-span-8">
                <p className="text-[0.95rem] font-bold text-arch-sage">東京都世田谷区</p>
                <h2
                  id="case-heading"
                  className="display-jp mt-3 text-[clamp(2rem,5vw,3.75rem)] leading-[1.3]"
                >
                  訪問歯科を、
                  <br />
                  ゼロから立ち上げ。
                </h2>
              </div>
              <p className="text-base leading-[1.9] text-arch-sage md:col-span-4">
                訪問体制、施設への入口、検診から診療への院内フロー、書類、スタッフ研修までを一式で設計しました。
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid border-t border-arch-rule-dark sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["4か月", "立ち上げからの経過"],
              ["1施設", "連携した施設"],
              ["36名", "検診を実施"],
              ["15名", "訪問歯科の利用を開始"],
            ].map(([value, label], index) => (
              <Reveal
                key={label}
                delay={Math.min(index, 3) * 70}
                className="border-b border-arch-rule-dark py-8 sm:px-7 sm:[&:nth-child(odd)]:border-r lg:border-r lg:last:border-r-0"
              >
                <p className="display-jp text-[clamp(2.1rem,5vw,3.25rem)] text-arch-cream">
                  {value}
                </p>
                <p className="mt-3 text-sm leading-[1.7] text-arch-sage">{label}</p>
              </Reveal>
            ))}
          </div>

          <p className="mt-8 max-w-[850px] text-sm leading-[1.9] text-arch-sage">
            1施設・立ち上げ4か月時点の確認済み実績です。検診36名のうち15名が利用を開始しました。地域、施設、医院の体制によって結果は変わります。
          </p>
          <Link
            href="/cases/setagaya-visit-dental"
            className="mt-8 inline-flex min-h-12 items-center gap-3 font-bold text-arch-cream underline decoration-arch-gold underline-offset-8"
          >
            支援実績の詳細を見る
            <ArrowRight size={17} aria-hidden="true" />
          </Link>
        </div>
      </section>

      {/* 実績を混同しないよう、支援実績と代表者経歴を分けて示す */}
      <section aria-labelledby="proof-heading" className="bg-arch-cream">
        <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-36 lg:px-10">
          <Reveal>
            <p className="mono-micro text-arch-gold-deep">PROOF — 04</p>
            <h2
              id="proof-heading"
              className="display-jp mt-6 max-w-[800px] text-[clamp(1.9rem,5vw,3.5rem)] leading-[1.35] text-arch-ink"
            >
              現場と数字の両方を見て、
              <br />
              次の一手を決める。
            </h2>
          </Reveal>

          <div className="mt-16 grid gap-12 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-7">
              <div className="border-y border-arch-rule py-8">
                <p className="text-sm font-bold text-arch-moss">支援実績｜北海道札幌市</p>
                <p className="display-jp mt-4 text-[clamp(2rem,5vw,3.5rem)] text-arch-forest">
                  医院全体で月商800万円
                </p>
                <p className="mt-5 text-base leading-[1.95] text-arch-ink-soft">
                  2024年1月開業。訪問歯科を中心とした医院運営で、2026年6月時点の医院全体の月商は800万円。売上の大半を訪問歯科が占めています。
                </p>
                <p className="mt-5 text-sm leading-[1.85] text-arch-ink-muted">
                  ※800万円は訪問歯科だけではなく、医院全体の月商です。この数字は医院・スタッフ・関係者それぞれの取り組みによるもので、ARCH単独の成果ではありません。
                </p>
              </div>

              <div className="mt-10 border-b border-arch-rule pb-8">
                <p className="text-sm font-bold text-arch-moss">代表者経歴｜ARCH設立前</p>
                <p className="display-jp mt-4 text-[clamp(1.5rem,4vw,2.5rem)] leading-[1.45] text-arch-forest">
                  横浜市の広域医療法人で、訪問歯科を単独立ち上げ。6か月で黒字化。
                </p>
                <p className="mt-5 text-sm leading-[1.85] text-arch-ink-muted">
                  ※合同会社ARCH設立後の支援実績ではなく、代表・鈴木集の在籍時の経験です。
                </p>
              </div>
            </Reveal>

            <Reveal className="lg:col-span-5">
              <figure>
                <Image
                  src="/images/representative-atsumu-suzuki-2026.jpg"
                  alt="合同会社ARCH 代表 鈴木集"
                  width={1086}
                  height={1448}
                  sizes="(min-width: 1024px) 38vw, 100vw"
                  className="aspect-[3/4] w-full object-cover object-top"
                />
                <figcaption className="mt-5 border-l-2 border-arch-gold pl-4">
                  <p className="font-bold text-arch-forest">合同会社ARCH 代表　鈴木 集</p>
                  <p className="mt-2 text-sm leading-[1.8] text-arch-ink-muted">
                    元小学校教員。歯科事務局長として現場と経営の両方を経験し、現在は医院の外から実行に入る外部事務長として活動。
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ARCHと医院の役割の境界線 */}
      <section aria-labelledby="roles-heading" className="border-y border-arch-rule bg-arch-cream-raised">
        <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-36 lg:px-10">
          <Reveal>
            <p className="mono-micro text-arch-gold-deep">ROLE DESIGN — 05</p>
            <h2
              id="roles-heading"
              className="display-jp mt-6 text-[clamp(1.9rem,5vw,3.5rem)] leading-[1.35] text-arch-ink"
            >
              医療は医院に。
              <br />
              運営設計と実行はARCHに。
            </h2>
            <p className="mt-7 max-w-[760px] text-[1.0625rem] leading-[2] text-arch-ink-soft">
              役割を混ぜないことが、院長を事務作業から解放し、訪問歯科を長く続ける土台になります。
            </p>
          </Reveal>

          <div className="mt-14 grid border-t border-arch-rule lg:grid-cols-2">
            <Reveal className="border-b border-arch-rule py-8 lg:border-r lg:px-8">
              <p className="mono-micro text-arch-gold-deep">ARCH</p>
              <h3 className="display-jp mt-4 text-2xl text-arch-forest">仕組みをつくり、実行に入る</h3>
              <ul className="mt-7 space-y-4">
                {ARCH_SCOPE.map((item) => (
                  <li key={item} className="flex gap-3 text-[0.95rem] leading-[1.8] text-arch-ink-soft">
                    <Check className="mt-1 shrink-0 text-arch-moss" size={17} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="border-b border-arch-rule py-8 lg:px-8">
              <p className="mono-micro text-arch-gold-deep">CLINIC</p>
              <h3 className="display-jp mt-4 text-2xl text-arch-forest">医院にしかできない仕事に集中する</h3>
              <ul className="mt-7 space-y-4">
                {CLINIC_SCOPE.map((item) => (
                  <li key={item} className="flex gap-3 text-[0.95rem] leading-[1.8] text-arch-ink-soft">
                    <Check className="mt-1 shrink-0 text-arch-moss" size={17} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 契約条件は一律に見せず、個別設計であることを明示する */}
      <section aria-labelledby="offer-heading" className="bg-arch-cream">
        <div className="mx-auto max-w-[960px] px-6 py-24 md:py-36 lg:px-10">
          <Reveal>
            <p className="mono-micro text-arch-gold-deep">PROJECT DESIGN — 06</p>
            <h2
              id="offer-heading"
              className="display-jp mt-6 text-[clamp(1.9rem,5vw,3.5rem)] leading-[1.35] text-arch-ink"
            >
              支援期間と費用は、
              <br />
              医院ごとに設計します。
            </h2>
            <p className="mt-8 max-w-[760px] text-[1.0625rem] leading-[2] text-arch-ink-soft">
              ゼロから立ち上げる医院と、すでに動いている体制を組み直す医院では、必要な工程が違います。初回相談で現状とゴールを整理し、支援範囲・期間・費用を個別にお見積もりします。
            </p>

            <dl className="mt-12 border-t border-arch-rule">
              {[
                ["契約形態", "期間を区切ったプロジェクト"],
                ["支援期間", "医院の現状と支援範囲に応じて個別に設定"],
                ["費用", "個別見積もり"],
                ["対応地域", "全国（オンラインと現地支援を組み合わせます）"],
              ].map(([term, value]) => (
                <div key={term} className="grid gap-2 border-b border-arch-rule py-6 sm:grid-cols-[10rem_1fr] sm:gap-8">
                  <dt className="text-sm font-bold text-arch-moss">{term}</dt>
                  <dd className="text-base leading-[1.8] text-arch-ink">{value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* LP専用の短い問い合わせフォーム。メールアドレスは画面上に表示しない */}
      <section id="contact" aria-labelledby="consult-heading" className="bg-arch-cream-raised border-t border-arch-rule">
        <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-36 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-5">
              <p className="mono-micro text-arch-gold-deep">CONSULTATION — 07</p>
              <h2
                id="consult-heading"
                className="display-jp mt-6 text-[clamp(1.9rem,5vw,3.25rem)] leading-[1.4] text-arch-ink"
              >
                まず、今の状況を
                <br />
                30分で整理する。
              </h2>
              <p className="mt-7 text-base leading-[1.95] text-arch-ink-soft">
                何から始めるべきか、今の体制のどこを直すべきか。初回相談で、医院が次に決めることを整理します。
              </p>
              <ol className="mt-9 border-t border-arch-rule">
                {[
                  "フォームから相談内容を送信",
                  "原則2営業日以内にご連絡",
                  "30分のオンライン初回相談",
                ].map((item, index) => (
                  <li key={item} className="flex gap-5 border-b border-arch-rule py-5">
                    <span className="mono-micro text-arch-gold-deep">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[0.95rem] leading-[1.8] text-arch-ink">{item}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-7 text-sm leading-[1.85] text-arch-ink-muted">
                患者さんやスタッフ個人を特定できる情報は送らないでください。
              </p>
            </Reveal>

            <Reveal className="lg:col-span-7">
              <form
                action="https://formsubmit.co/hello@arch-yh.com"
                method="POST"
                className="grid grid-cols-1 gap-6 sm:grid-cols-2"
              >
                {/* 既存サイトと同じ送信基盤を使い、送信後は受付完了ページへ移動する */}
                <input type="hidden" name="_subject" value="【ARCH】訪問歯科LPからの相談" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_next" value={`${SITE_URL}/thanks`} />
                <input type="hidden" name="相談種別" value="訪問歯科コンサルティング" />
                <input
                  type="text"
                  name="_honey"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  className="hidden"
                />

                <div>
                  <label htmlFor="lp-name" className={labelClass}>
                    お名前
                    <Required />
                  </label>
                  <input id="lp-name" name="お名前" type="text" required autoComplete="name" className={fieldClass} />
                </div>

                <div>
                  <label htmlFor="lp-clinic" className={labelClass}>
                    医院・法人名
                    <Required />
                  </label>
                  <input id="lp-clinic" name="医院・法人名" type="text" required autoComplete="organization" className={fieldClass} />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="lp-email" className={labelClass}>
                    メールアドレス
                    <Required />
                  </label>
                  <input id="lp-email" name="メールアドレス" type="email" required autoComplete="email" className={fieldClass} />
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="lp-message" className={labelClass}>
                    現在の状況
                    <Required />
                  </label>
                  <textarea
                    id="lp-message"
                    name="ご相談内容"
                    required
                    rows={6}
                    placeholder="例：これから訪問歯科を始めたい／一度始めたが院内の流れが定まっていない"
                    className={`${fieldClass} resize-y leading-[1.8]`}
                  />
                </div>

                <div className="sm:col-span-2 border-t border-arch-rule pt-6">
                  <label htmlFor="lp-consent" className="flex min-h-11 cursor-pointer items-start gap-3 text-[0.95rem] leading-[1.8] text-arch-ink">
                    <input
                      id="lp-consent"
                      name="プライバシーポリシーへの同意"
                      type="checkbox"
                      value="同意する"
                      required
                      className="mt-1 h-5 w-5 shrink-0 accent-[#0D3B2E]"
                    />
                    <span>
                      <Link href="/privacy" className="underline underline-offset-4 hover:text-arch-forest">
                        プライバシーポリシー
                      </Link>
                      に同意します
                      <Required />
                    </span>
                  </label>
                </div>

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    className="inline-flex min-h-14 w-full items-center justify-center gap-4 bg-arch-forest px-10 text-base font-bold text-arch-cream transition-colors hover:bg-arch-forest-soft sm:w-auto"
                  >
                    訪問歯科について相談する
                    <ArrowRight size={18} aria-hidden="true" />
                  </button>
                </div>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
