import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "「スタッフの退職」に怯える院長へ。離職防止よりも優先すべき、たった一つの経営戦略 | ARCH コラム",
  description:
    "スタッフが辞めることに怯えない経営へ。属人化を排除し、誰が来ても回る強固な組織の作り方を解説します。",
};

export default function TurnoverStrategyPage() {
  return (
    <article className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Category & Date */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-bold text-green-700 bg-green-50 px-3 py-1 rounded-full">
            経営戦略
          </span>
          <time className="text-xs text-gray-400 font-medium">2026.04.02</time>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-10 tracking-tight">
          「スタッフの退職」に怯える院長へ。
          <br className="hidden md:block" />
          離職防止よりも優先すべき、
          <br className="hidden md:block" />
          たった一つの経営戦略
        </h1>

        {/* Lead */}
        <div className="border-l-4 border-green-700 pl-6 mb-12">
          <p className="text-lg text-gray-600 leading-relaxed font-medium italic">
            手塩にかけて育てたスタッフから「退職したい」と切り出される。院長にとってこれほど寂しく、また「採用コストと時間が飛んでいく」と頭を抱える瞬間はないでしょう。
          </p>
        </div>

        {/* Body */}
        <div className="prose-custom">
          <p>
            離職を防ぐ施策は当然重要です。しかし、経営者として一つの事実を割り切る必要があります。
          </p>
          <p>
            それは、「転職が容易な現代において、人が離れていくのはごく自然なことである」という現実です。
          </p>

          <h2>なぜ、スタッフはあなたの医院に入職したのか？</h2>
          <p>
            スタッフがあなたの医院で働く「本当の理由」をご存知でしょうか。
          </p>
          <p>
            「医院のコンセプトに共感したから」「最先端の技術を学べるから」といった理想的な理由で入職する人は、ほんの一握りです。極端な話、「家から近いから」「前の職場より少し給料が良いから」「働きやすそう（ぬるそう）だから」といった理由が大半です。
          </p>
          <p>
            では、その理由で入職したスタッフは、一生あなたの医院で働くでしょうか？
          </p>
          <p>
            答えはNoです。通勤電車のスマホで、同じような理由（もっと近い、もっと給料が良い）で次の職場を探しています。一つの職場で一生勤め上げるという、かつての日本の特殊な環境はすでに終わりました。
          </p>

          <h2>「辞めないこと」を前提とした経営からの脱却</h2>
          <p>
            スタッフの入れ替わりは「常にあるもの」として前提を書き換えてください。
          </p>
          <p>
            その上で経営者が本当にやるべきことは、離職防止に過剰なエネルギーを注ぎ、スタッフの顔色を伺うことではありません。【誰が入れ替わっても、現場の業務が一切停滞しない仕組み】を作ることです。
          </p>
          <p>
            「あのベテラン衛生士が辞めたら、施設のルートが回らなくなる」
          </p>
          <p>
            「あの事務員がいなくなったら、書類の場所が誰にも分からなくなる」
          </p>
          <p>
            この【属人化】こそが、経営の最大のリスクであり、残されたスタッフを苦しめる原因になります。属人化を徹底的に排除し、誰でもすぐに即戦力になれる教育体制とITシステム（アプリ）を敷いてください。
          </p>

          <h2>システム化は「冷たい」ことではありません</h2>
          <p>
            マニュアル化やシステム化と聞くと、「スタッフを歯車のように扱う冷たい経営だ」と感じるかもしれません。しかし、実は逆です。
          </p>
          <p>
            業務がシステム化され、誰かが休んでも・辞めても回る強固な土台があるからこそ、スタッフは安心して有給を取ることができます。そして、スタッフがいよいよ次のライフステージへ旅立つ時、院長であるあなたは「今まで本当にありがとう！」と、心から笑顔で送り出してあげることができるのです。
          </p>
          <p>
            人が辞めることに怯えない。そして、縁あって働いてくれる期間は、全力で彼らの自己肯定感を高める。その強靭で温かい医院経営の第一歩は、業務のシステム化から始まります。
          </p>

          {/* CTA Block */}
          <div className="not-prose bg-gray-50 rounded-2xl p-8 my-12 border border-gray-200">
            <p className="text-lg font-bold text-gray-900 mb-3">
              【無料オンライン相談のご案内】
            </p>
            <p className="text-gray-600 mb-0">
              属人化を排除し、誰が来ても回る強固な組織づくり。マニュアル化からアプリによる業務の標準化まで、次世代の歯科医院経営をサポートします。
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
