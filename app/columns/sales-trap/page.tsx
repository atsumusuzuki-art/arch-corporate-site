import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "院長自らの飛び込み営業。そのパンフレット、実は「その他大勢」の束に埋もれています | ARCH コラム",
  description:
    "院長の貴重な診療時間を削っての営業活動、本当に成果が出ていますか？施設側のリアルと、選ばれる仕組みの作り方を解説します。",
};

export default function SalesTrapPage() {
  return (
    <article className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Category & Date */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-bold text-green-700 bg-green-50 px-3 py-1 rounded-full">
            営業の落とし穴
          </span>
          <time className="text-xs text-gray-400 font-medium">2026.03.31</time>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-10 tracking-tight">
          院長自らの飛び込み営業。
          <br className="hidden md:block" />
          そのパンフレット、実は
          <br className="hidden md:block" />
          「その他大勢」の束に埋もれています
        </h1>

        {/* Lead */}
        <div className="border-l-4 border-green-700 pl-6 mb-12">
          <p className="text-lg text-gray-600 leading-relaxed font-medium italic">
            「訪問歯科を伸ばすために、診療の合間を縫って私自身が施設へ挨拶に行っています」
          </p>
        </div>

        {/* Body */}
        <div className="prose-custom">
          <p>
            訪問歯科の立ち上げや立て直しのご相談を受ける際、このように語る院長先生がいます。まず、その姿勢には心から敬意を表します。待っているだけで営業にすら行こうとしない歯科医師も多い中、自ら窓口に立ち、挨拶をしてパンフレットを渡す。その行動力自体は大変素晴らしいものです。
          </p>
          <p>
            ただ、経営のプロとして、あえて非常に厳しい現実をお伝えしなければなりません。先生、その営業活動は「先生ご自身の腕で稼げる貴重な時間を削っている」という事実を、本当に理解されていますでしょうか？
          </p>

          <h2>施設側の「ウンザリする現実」をご存知ですか？</h2>
          <p>
            先生が足を運んでいる間、チェア（診療台）は空いています。本来なら数万円の価値を生み出せる高度な専門職の時間を削ってまで渡したそのパンフレット。施設側は、それをどう扱っているか想像してみてください。
          </p>
          <p>
            介護施設の窓口や施設長のデスクの様子を、現場目線でお話しします。彼らが日々受けている営業や、受け取るパンフレットは「訪問歯科」だけではありません。
          </p>
          <p>
            訪問診療（医科）、訪問薬局、訪問マッサージ、訪問入浴、給食会社、葬儀会社、介護タクシー……これらはほんの一部です。毎日毎日、あらゆる業者が「よろしくお願いします」とパンフレットを置いていきます。
          </p>
          <p>
            訪問歯科は、この「山のようなパンフレット」の中の、ほんの一つのジャンルに過ぎません。しかも、同じエリアの別の訪問歯科からも山のように営業を受けています。そんな中で、ただ窓口で挨拶をして綺麗なパンフレットを渡しただけで、「よし、今日は営業をやったぞ」と満足してしまっていませんか？
          </p>

          <h2>院長の時間を削らずに「選ばれる仕組み」を作る</h2>
          <p>
            誤解しないでいただきたいのは、「院長は施設に行くべきではない」と言っているわけではありません。行くべきタイミングと、やるべきアプローチが根本的に間違っている医院が多すぎるのです。その他大勢の業者と同じようにパンフレットの束に埋もれる営業は、今すぐやめてください。
          </p>
          <p>
            院長が本来集中すべきなのは「質の高い診療」です。そして、院長が診療室にこもっていても、施設側から「ぜひ先生のところにお願いしたい」と指名が入る【営業の仕組み】を作ることこそが、経営者の本当の仕事です。
          </p>
          <p>
            合同会社ARCHの「医療介護特化型 営業コンサルティング」では、まさにこの仕組みを提供しています。他の業者が絶対にやらない（気づいていない）施設へのアプローチ手法から、パンフレットではなく「圧倒的な実務のメリット」で契約を勝ち取るノウハウ。そして、契約後に爆発する事務作業を裏側で処理する「ARCH独自の専用アプリケーション」まで。
          </p>

          {/* CTA Block */}
          <div className="not-prose bg-gray-50 rounded-2xl p-8 my-12 border border-gray-200">
            <p className="text-lg font-bold text-gray-900 mb-3">
              「自分の時間を削って営業しているのに、一向に依頼が増えない」
            </p>
            <p className="text-gray-600 mb-0">
              もしそう感じているなら、やり方が間違っているサインです。手遅れになる前に、一度私と答え合わせをしませんか？
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
