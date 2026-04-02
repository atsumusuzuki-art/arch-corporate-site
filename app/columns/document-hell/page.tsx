import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "訪問歯科が陥る「書類地獄」。ご家族からのクレームを防ぐ唯一の解決策 | ARCH コラム",
  description:
    "施設からの依頼増加と同時に襲いかかる書類管理の罠。ヒューマンエラーによるクレームを防ぐ仕組みづくりを、実体験をもとに解説します。",
};

export default function DocumentHellPage() {
  return (
    <article className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Category & Date */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-bold text-green-700 bg-green-50 px-3 py-1 rounded-full">
            業務改善
          </span>
          <time className="text-xs text-gray-400 font-medium">2026.04.02</time>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-10 tracking-tight">
          訪問歯科が陥る「書類地獄」。
          <br className="hidden md:block" />
          ご家族からのクレームを防ぐ
          <br className="hidden md:block" />
          唯一の解決策
        </h1>

        {/* Lead */}
        <div className="border-l-4 border-green-700 pl-6 mb-12">
          <p className="text-lg text-gray-600 leading-relaxed font-medium italic">
            訪問歯科において、施設からの依頼が増えた瞬間にほとんどの医院が陥る罠があります。それが「ルート調整」と「書類地獄」です。
          </p>
        </div>

        {/* Body */}
        <div className="prose-custom">
          <p>
            特に書類管理は最たるもので、「誰に、いつ、どの書類を提出したか」が完全にブラックボックス化し、現場は大混乱に陥ります。
          </p>

          <h2>「書類が届いていない！」ある医療法人での大失敗</h2>
          <p>
            私自身、過去に在籍していた医療法人で苦い経験があります。
          </p>
          <p>
            ご家族宛に契約書を郵送したものの、一向に返送されませんでした。私は「まだ届いていないのか、あるいは紛失されたのだろう」と判断し、再度同じ書類を郵送しました。
          </p>
          <p>
            すると後日、ご家族から大変なお叱りのお電話をいただきました。
          </p>
          <blockquote>
            「先日すでに記入して返送しましたよ！こんな重要な書類なのに、そちらはどういう管理をしているんですか！？」
          </blockquote>
          <p>
            原因は単純なヒューマンエラーでした。事務スタッフが、書類到着のチェック欄（手書きのリスト）にチェックを入れ忘れたまま、別のファイルに保管してしまっていたのです。加えて、医院側に「提出した書類の控え（コピー）」が残っておらず、ご家族からの質問に即答できないという最悪のケースでした。
          </p>

          <h2>ヒューマンエラーは「仕組み」でしか防げない</h2>
          <p>
            電子契約が当たり前になりつつある昨今ですが、医療介護の現場ではまだまだ紙の文化が根強く残っています。
          </p>
          <p>
            せっかく医院の複雑なルールを覚えた事務員も、こうしたミスの連続や業務過多をきっかけに辞めてしまうことは珍しくありません。
          </p>
          <p>
            この書類地獄とヒューマンエラーを防ぐには、「人の注意力」に頼るのをやめるしかありません。
          </p>
          <p>
            合同会社ARCHでは、この面倒な裏側の事務作業をシステム化する【独自アプリケーション】の提供はもちろん、事務作業そのものを私たちが巻き取る「BPO（業務代行）」サービスも推奨しています。
          </p>
          <p>
            院長やスタッフが「書類探し」に時間を奪われているようでは、健全な経営はできません。
          </p>

          {/* CTA Block */}
          <div className="not-prose bg-gray-50 rounded-2xl p-8 my-12 border border-gray-200">
            <p className="text-lg font-bold text-gray-900 mb-3">
              【無料オンライン相談のご案内】
            </p>
            <p className="text-gray-600 mb-0">
              アナログな書類管理から脱却し、ヒューマンエラーをゼロにする仕組みづくり。ARCHのシステムとBPO支援について、お気軽にご相談ください。
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
