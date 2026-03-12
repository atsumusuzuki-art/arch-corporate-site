import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "【2026年最新】訪問歯科の算定を徹底解説｜算定漏れゼロで収益最大化",
  description:
    "訪問歯科の算定方法を完全解説。歯科訪問診療料・各種加算・施設基準・レセプトの実務ポイントまで、訪問歯科の算定に必要な知識をプロが網羅的に解説します。算定漏れを防ぎ収益を最大化する方法がわかります。",
  keywords: [
    "訪問歯科 算定",
    "訪問歯科 算定方法",
    "歯科訪問診療料",
    "訪問歯科 レセプト",
    "訪問歯科 加算",
    "訪問歯科 点数",
    "訪問歯科 施設基準",
    "在宅療養支援歯科診療所",
    "歯援診",
    "訪問歯科 算定漏れ",
  ],
  alternates: {
    canonical: "/column/houmon-shika-santei",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "【2026年最新】訪問歯科の算定を徹底解説｜算定漏れゼロで収益最大化",
  author: { "@type": "Organization", name: "合同会社ARCH" },
  publisher: { "@type": "Organization", name: "合同会社ARCH" },
  datePublished: "2026-03-12",
  dateModified: "2026-03-12",
  description: "訪問歯科の算定方法を完全解説。算定漏れを防ぎ収益を最大化する方法をプロが網羅的に解説。",
};

export default function HoumonShikaSantei() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="max-w-4xl mx-auto px-4 sm:px-6 py-12 lg:py-20">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-8 font-medium">
          <Link href="/" className="hover:text-green-700">トップ</Link>
          <span className="mx-2">/</span>
          <span>コラム</span>
          <span className="mx-2">/</span>
          <span className="text-gray-900">訪問歯科の算定</span>
        </nav>

        <div className="mb-12">
          <div className="flex gap-2 mb-4">
            <span className="bg-green-50 text-green-800 text-xs font-bold px-3 py-1 rounded-full border border-green-100">訪問歯科</span>
            <span className="bg-green-50 text-green-800 text-xs font-bold px-3 py-1 rounded-full border border-green-100">算定</span>
            <span className="bg-green-50 text-green-800 text-xs font-bold px-3 py-1 rounded-full border border-green-100">レセプト</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            訪問歯科の算定を<br className="hidden sm:block" />徹底解説
          </h1>
          <p className="text-lg text-gray-600 font-medium leading-relaxed">
            訪問歯科の算定は複雑で、多くの歯科医院が「算定漏れ」により本来の収益を得られていません。
            この記事では、訪問歯科の算定に必要な知識を体系的に解説し、収益を最大化する方法をお伝えします。
          </p>
          <p className="text-sm text-gray-400 mt-4">最終更新: 2026年3月</p>
        </div>

        {/* TOC */}
        <div className="bg-gray-50 rounded-2xl p-6 lg:p-8 mb-12 border border-gray-100">
          <h2 className="font-extrabold text-lg text-gray-900 mb-4">この記事の目次</h2>
          <ol className="space-y-2 text-sm font-medium text-gray-700 list-decimal list-inside">
            <li><a href="#basic" className="hover:text-green-700">訪問歯科の算定 — 基本構造を理解する</a></li>
            <li><a href="#shinryoryo" className="hover:text-green-700">歯科訪問診療料の算定ルール</a></li>
            <li><a href="#kasan" className="hover:text-green-700">算定漏れしやすい加算項目一覧</a></li>
            <li><a href="#shisetsu" className="hover:text-green-700">在宅療養支援歯科診療所（歯援診）の施設基準</a></li>
            <li><a href="#eisei" className="hover:text-green-700">訪問歯科衛生指導料の算定ポイント</a></li>
            <li><a href="#receipt" className="hover:text-green-700">レセプト作成の実務と注意点</a></li>
            <li><a href="#arch" className="hover:text-green-700">ARCHの算定支援で収益最大化</a></li>
          </ol>
        </div>

        {/* Article Body */}
        <div className="prose prose-lg prose-gray max-w-none">
          <section id="basic" className="mb-16">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6 pb-3 border-b-2 border-green-600">
              1. 訪問歯科の算定 — 基本構造を理解する
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>訪問歯科の算定</strong>は外来診療とは根本的に異なります。
              訪問歯科の収益構造は「<strong>歯科訪問診療料 ＋ 各種加算 ＋ 処置・指導料</strong>」の3層で成り立っており、
              各項目を正確に算定することが収益最大化の鍵です。
            </p>
            <p className="text-gray-700 leading-relaxed">
              特に訪問歯科においては、外来では存在しない加算が多数あるため、
              これらを把握しきれていない歯科医院が多く、<strong>月に数十万円の算定漏れ</strong>が発生しているケースも珍しくありません。
            </p>
          </section>

          <section id="shinryoryo" className="mb-16">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6 pb-3 border-b-2 border-green-600">
              2. 歯科訪問診療料の算定ルール
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              歯科訪問診療料は、訪問先の患者数と診療形態によって区分されます。
              <strong>歯科訪問診療1（患者1人に対する診療）</strong>が最も高い点数で算定でき、
              1回あたり1,100点（11,000円）が基本です。
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              同一施設で複数の患者様を診療する場合は、歯科訪問診療2（同一建物で2〜9人）や歯科訪問診療3（10人以上）となり、
              1人あたりの点数は下がりますが、効率よく収益を上げることが可能です。
            </p>
            <p className="text-gray-700 leading-relaxed">
              <strong>重要なポイント</strong>：1日の訪問診療で診る患者数のバランスと、施設へのアプローチ計画を最適化することで、
              トータルの収益を最大化できます。
            </p>
          </section>

          <section id="kasan" className="mb-16">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6 pb-3 border-b-2 border-green-600">
              3. 算定漏れしやすい加算項目一覧
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              訪問歯科で見逃されがちな加算項目を整理します。
            </p>
            <ul className="space-y-3 mb-4">
              <li className="flex items-start gap-3 text-gray-700">
                <span className="text-green-600 font-bold mt-1">&#10003;</span>
                <span><strong>在宅患者等急性歯科疾患対応加算</strong>——急性症状への対応時に算定可能</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="text-green-600 font-bold mt-1">&#10003;</span>
                <span><strong>歯科疾患在宅療養管理料</strong>——継続的な管理計画に基づく指導・管理</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="text-green-600 font-bold mt-1">&#10003;</span>
                <span><strong>在宅患者歯科治療時医療管理料</strong>——全身疾患を有する患者様への管理</span>
              </li>
              <li className="flex items-start gap-3 text-gray-700">
                <span className="text-green-600 font-bold mt-1">&#10003;</span>
                <span><strong>小児在宅患者訪問口腔リハビリテーション指導管理料</strong>——該当患者がいれば算定漏れ注意</span>
              </li>
            </ul>
            <p className="text-gray-700 leading-relaxed">
              これらの加算を1つでも見逃すと、月単位で大きな収益差が生まれます。
              ARCHでは<strong>全算定項目のチェックリスト</strong>を用いて算定漏れゼロを実現しています。
            </p>
          </section>

          <section id="shisetsu" className="mb-16">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6 pb-3 border-b-2 border-green-600">
              4. 在宅療養支援歯科診療所（歯援診）の施設基準
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>歯援診</strong>の届出を行うことで、訪問歯科の算定における加算や点数が大幅にアップします。
              歯援診1と歯援診2があり、それぞれ施設基準が異なります。
            </p>
            <p className="text-gray-700 leading-relaxed">
              歯援診の取得は訪問歯科の収益性を左右する重要な施設基準です。
              ARCHでは施設基準の取得支援から、取得後の算定最適化まで一貫してサポートします。
            </p>
          </section>

          <section id="eisei" className="mb-16">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6 pb-3 border-b-2 border-green-600">
              5. 訪問歯科衛生指導料の算定ポイント
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              歯科衛生士による口腔ケア・口腔リハビリは、<strong>訪問歯科衛生指導料</strong>として算定できます。
              この項目は歯科医師の診療とは別に算定できるため、収益の柱の一つになります。
            </p>
            <p className="text-gray-700 leading-relaxed">
              適切に算定するためには、指導内容の記録と計画書の作成が不可欠です。
              ARCHでは、テンプレートの提供と記録方法の指導を行い、漏れなく算定できる体制構築を支援します。
            </p>
          </section>

          <section id="receipt" className="mb-16">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6 pb-3 border-b-2 border-green-600">
              6. レセプト作成の実務と注意点
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              訪問歯科のレセプトは、外来診療と比べて算定項目が多く複雑です。
              レセプト返戻・査定を防ぐためには、<strong>摘要欄の記載ルール</strong>を正確に把握しておく必要があります。
            </p>
            <p className="text-gray-700 leading-relaxed">
              特に、訪問先の区分（居宅・施設）や患者数による診療料の区分、加算の併算定可否など、
              細かいルールを正確に反映させることが重要です。
            </p>
          </section>

          <section id="arch" className="mb-8">
            <h2 className="text-2xl font-extrabold text-gray-900 mb-6 pb-3 border-b-2 border-green-600">
              7. ARCHの算定支援で収益最大化
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              合同会社ARCHの訪問歯科コンサルティングでは、<strong>精緻な算定支援</strong>をサービスの中核に位置づけています。
              独自のチェックリストと算定分析ツールにより、算定漏れを徹底的に洗い出し、収益を最大化します。
            </p>
            <p className="text-gray-700 leading-relaxed">
              訪問歯科の算定でお悩みの方は、<Link href="/#contact" className="text-green-700 font-bold hover:underline">無料相談</Link>からお気軽にご連絡ください。
              貴院の算定状況を無料で診断いたします。
            </p>
          </section>
        </div>
      </article>
    </>
  );
}
