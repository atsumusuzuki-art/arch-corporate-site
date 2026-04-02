import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "「施設を紹介しますよ」の甘い罠。コンサルを自称する悪質ブローカーの正体 | ARCH コラム",
  description:
    "売上の20〜40％を永久に吸い取る悪質ブローカーの実態。紹介に依存しない、自立した訪問歯科経営の作り方を解説します。",
};

export default function BrokerTrapPage() {
  return (
    <article className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Category & Date */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-bold text-green-700 bg-green-50 px-3 py-1 rounded-full">
            業界の闇
          </span>
          <time className="text-xs text-gray-400 font-medium">2026.04.02</time>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-10 tracking-tight">
          「施設を紹介しますよ」の甘い罠。
          <br className="hidden md:block" />
          コンサルを自称する
          <br className="hidden md:block" />
          悪質ブローカーの正体
        </h1>

        {/* Lead */}
        <div className="border-l-4 border-green-700 pl-6 mb-12">
          <p className="text-lg text-gray-600 leading-relaxed font-medium italic">
            訪問歯科の売上に悩んでいる院長先生。もし、「A施設に訪問できる権利を有しているので、一緒にやりませんか？」と甘い言葉で近づいてくる業者がいたら、今すぐ警戒してください。
          </p>
        </div>

        {/* Body */}
        <div className="prose-custom">
          <p>
            彼らは名刺に「コンサルタント」と刷っていますが、その実態は、ただ顧客（高齢者施設）を紹介するだけの【悪質ブローカー】であることが多々あります。
          </p>

          <h2>売上の20〜40％を永久に吸い取られる闇</h2>
          <p>
            彼らのビジネスモデルは極めて単純です。施設を紹介する見返りとして、医療・介護の売上の「20〜40％」を毎月、手数料として要求してきます。（※もし心当たりがあるなら、今すぐ契約書の有無と内容を確認してください）
          </p>
          <p>
            ただの「紹介屋」であるため、コンサルタントとしての役務提供（経営改善、スタッフ教育、システム構築など）はゼロです。
          </p>
          <p>
            もちろん、彼らと組む「利点」が全くないわけではありません。
          </p>
          <p>
            1つは、施設とトラブルが起きた時に仲介に入り、穏便に済ませてくれること。もう1つは、紹介によって「即座に売上が作れる」ことです。
          </p>
          <p>
            しかし、騙されないでください。それは「売上」であって「利益」ではありません。保険診療という上限が決まっている単価の中から、毎月30%近くをブローカーに中抜きされ続ければ、どれだけスタッフが汗水垂らして働いても、医院に利益が残るはずがないのです。
          </p>

          <h2>ブローカーが連れてくる「質の低い歯科」と、泣きを見る患者様</h2>
          <p>
            私自身、過去に所属していた医療法人で、本業が何なのか全く分からないこの手の自称コンサル（ブローカー）を目の当たりにしてきました。
          </p>
          <p>
            彼らの本音は、「毎月マージンを払ってくれる歯科医院なら、ぶっちゃけどこでもいい」のです。
          </p>
          <p>
            その結果どうなるか。技術も人柄も微妙な歯科医師が、ブローカーの力だけで施設に入り込みます。現場の介護スタッフは横柄な態度に振り回され、最も不利益を被るのは、質の低い治療やケアを受けざるを得ない【患者様】なのです。
          </p>
          <p>
            そんな形で得た売上に、医療従事者としての誇りはあるのでしょうか。
          </p>

          <h2>「紹介を買う」のではなく「選ばれる実力」を育てよ</h2>
          <p>
            訪問歯科において、お金で買った施設との関係は砂上の楼閣です。
          </p>
          <p>
            本当に必要なのは、自院のスタッフが施設から「ぜひ先生にお願いしたい」と指名されるための【圧倒的な営業力】と、それを裏で支える【システム（仕組み）】を自社内に構築することです。
          </p>
          <p>
            合同会社ARCHは、施設を紹介して中抜きするようなブローカー業は一切行いません。
          </p>
          <p>
            私たちが提供するのは、院長が自力で地域No.1の訪問歯科を創り上げるための「本物のコンサルティング」と「独自アプリケーション」のみです。
          </p>
          <p>
            甘い罠に引っかかり、利益と誇りを失う前に、まずは本当の専門家にご相談ください。
          </p>

          {/* CTA Block */}
          <div className="not-prose bg-gray-50 rounded-2xl p-8 my-12 border border-gray-200">
            <p className="text-lg font-bold text-gray-900 mb-3">
              【無料オンライン相談のご案内】
            </p>
            <p className="text-gray-600 mb-0">
              ブローカーに依存しない、自立した訪問歯科経営へ。圧倒的な営業戦略と、利益を最大化する仕組みづくりをご提案します。
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
