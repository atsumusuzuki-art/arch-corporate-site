import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "介護施設における「口腔ケアの序列」。歯医者が現場で煙たがられる本当の理由 | ARCH コラム",
  description:
    "介護現場における口腔ケアの優先順位のリアルと、施設から手放されない訪問歯科になるための「負担軽減」アプローチを解説します。",
};

export default function FacilityNeedsPage() {
  return (
    <article className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Category & Date */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-bold text-green-700 bg-green-50 px-3 py-1 rounded-full">
            施設の本音
          </span>
          <time className="text-xs text-gray-400 font-medium">2026.03.31</time>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-10 tracking-tight">
          介護施設における「口腔ケアの序列」。
          <br className="hidden md:block" />
          歯医者が現場で煙たがられる
          <br className="hidden md:block" />
          本当の理由
        </h1>

        {/* Lead */}
        <div className="border-l-4 border-green-700 pl-6 mb-12">
          <p className="text-lg text-gray-600 leading-relaxed font-medium italic">
            「口腔ケアは全身疾患の予防に直結する、極めて重要なケアです！」
          </p>
        </div>

        {/* Body */}
        <div className="prose-custom">
          <p>
            訪問歯科に熱心な先生ほど、施設への挨拶でこのように熱弁を振るいます。確かに医学的には大正解です。しかし、現場の介護スタッフたちの「本音」を代弁させてください。厳しい現実ですが、介護現場において、口腔ケアが意識される「序列」は極めて低いのが現状です。
          </p>

          <h2>介護現場の「圧倒的な優先順位」をご存知ですか？</h2>
          <p>
            介護スタッフの頭の中にある序列のトップは、常に「命の危険がないか」です。そして次に優先されるのが、施設で暮らす上での「当たり前のルーティン（食事、入浴、排泄、身体介護）」です。
          </p>
          <p>
            さらに、施設には様々な訪問サービスが入ります。ここにも明確な序列があります。
          </p>

          {/* Hierarchy Visual */}
          <div className="not-prose my-10">
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <p className="text-sm font-bold text-gray-500 mb-4 tracking-wider">
                訪問サービスの序列（現場のリアル）
              </p>
              <div className="flex flex-wrap items-center gap-3 text-base font-bold">
                <span className="bg-red-50 text-red-700 px-4 py-2 rounded-lg">
                  訪問診療（医科）
                </span>
                <span className="text-gray-400">&gt;</span>
                <span className="bg-amber-50 text-amber-700 px-4 py-2 rounded-lg">
                  訪問薬局
                </span>
                <span className="text-gray-400">&gt;</span>
                <span className="bg-gray-100 text-gray-600 px-4 py-2 rounded-lg">
                  訪問歯科 ＝ 訪問マッサージ
                </span>
              </div>
            </div>
          </div>

          <p>
            これが偽らざる現場のリアルです。命に関わる医科や、日々の生活を支えるルーティン業務に追われる中で、優先順位の低い口腔のこと「ばかり」を熱く語られても、介護スタッフからすれば正直「面倒くさい」のです。
          </p>

          <h2>なぜ「歯科」だけが負担に思われるのか？特殊な立ち位置</h2>
          <p>
            医科や薬局より、歯科の序列が低い決定的な理由があります。
          </p>
          <p>
            訪問診療（医科）は、医師が定期的に診察し、日々の対応は施設併設の看護師が行います。訪問薬局も、薬剤師と看護師が管理し、介護スタッフは「食後に薬を飲ませる」だけで済みます。
          </p>
          <p>
            しかし、歯科は違います。歯科医師が治療し、衛生士が週1回ケアに入ったとしても、残りの週6日の「日頃の歯磨き」は、すべて介護スタッフがやらなければならないのです。普通の人でも完璧な歯磨きは難しいのに、ご高齢で、時には認知症や拒食もある方々の口を開けさせ、しっかりとした口腔ケアを提供することがどれほど困難で、労力のいる作業か。想像してみてください。
          </p>

          <h2>大手介護スタッフがこぼした「切実な本音」</h2>

          <blockquote>
            「日頃の口腔ケアで、気をつけるべきポイント『だけ』を教えてほしいんです」
          </blockquote>

          <p>
            以前、大手介護事業所のスタッフさんとお話しした際、こう相談されました。理由を問うと、彼女は切実な顔でこう答えました。
          </p>

          <blockquote>
            「介護の時間が限られている中で、口腔ケアはどうしても『時短』にせざるを得ないんです。だから、効率的にケアを終わらせるためのポイントを知りたいんです」
          </blockquote>

          <p>
            これが、現在の介護施設を取り巻く事情であり、現場の真実です。30分かけて完璧なケアをする方法なんて求めていません。彼らが本当に求めているのは、「短い時間で、最低限ここだけ押さえればOK」という的確なポイント指導による『現場の負担軽減』なのです。
          </p>

          <h2>「負担を減らす歯科」だけが生き残る</h2>
          <p>
            「口腔ケアをしっかりやってください」と負担を押し付ける歯科は切られます。逆に、日頃の口腔ケアのポイントを的確に指導し、「施設側の負担を物理的・精神的に減らしてくれる訪問歯科」は、施設にとって手放せない存在になります。
          </p>
          <p>
            合同会社ARCHでは、この「施設側を楽にする」というアプローチを、属人的な指導スキルに頼るのではなく、【独自アプリケーション】というシステムに落とし込んで提供しています。忙しい介護スタッフを廊下で引き留めることなく、必要な「時短のポイント」だけを的確に共有し、施設の業務を裏側から支える仕組みです。
          </p>

          {/* CTA Block */}
          <div className="not-prose bg-gray-50 rounded-2xl p-8 my-12 border border-gray-200">
            <p className="text-lg font-bold text-gray-900 mb-3">
              現場のリアルを知らずして、訪問歯科の成功はありません。
            </p>
            <p className="text-gray-600 mb-0">
              今のやり方に少しでも違和感や限界を感じているなら、私たちにご相談ください。
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
