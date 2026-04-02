import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "現場がドブに捨てている「見えない利益」。患者だけを診る歯医者は淘汰される | ARCH コラム",
  description:
    "患者様だけを見て仕事をしている医院は、莫大な見えない利益を失っています。施設スタッフやケアマネとの信用利益の築き方を解説。",
};

export default function InvisibleProfitPage() {
  return (
    <article className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Category & Date */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-bold text-green-700 bg-green-50 px-3 py-1 rounded-full">
            営業戦略
          </span>
          <time className="text-xs text-gray-400 font-medium">2026.04.02</time>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-10 tracking-tight">
          現場がドブに捨てている
          <br className="hidden md:block" />
          「見えない利益」。
          <br className="hidden md:block" />
          患者だけを診る歯医者は淘汰される
        </h1>

        {/* Lead */}
        <div className="border-l-4 border-green-700 pl-6 mb-12">
          <p className="text-lg text-gray-600 leading-relaxed font-medium italic">
            医療従事者にとって、目の前の患者様に向き合うことは本質であり、最も尊い仕事です。しかし、「訪問歯科」に限っては、それだけではもはや通用しません。
          </p>
        </div>

        {/* Body */}
        <div className="prose-custom">
          <p>
            患者様「だけ」を見て仕事をしている医院は、莫大な【見えない利益】をドブに捨てています。
          </p>

          <h2>患者の「手前」と「後ろ」にいるキーマンたち</h2>
          <p>
            訪問歯科において、患者様の手前には「施設スタッフ」や「ケアマネジャー」という強固なゲートキーパーが存在します。そして患者様の後ろには、「ご家族」や「後見人」がいます。
          </p>
          <p>
            この構造を理解し、彼らに対して適切な距離感でコミュニケーションを取れていない医院は、いつまで経っても単発の契約で終わります。
          </p>
          <p>
            私たちがコンサルティングで最重要視しているもの、それが【信用利益】です。
          </p>

          <h2>信用利益がもたらす爆発的な紹介の連鎖</h2>
          <p>
            施設スタッフやケアマネジャーとの間に「この先生なら安心して任せられる」「私たちの負担まで減らしてくれる」という信用利益が積み重なるとどうなるか。
          </p>
          <p>
            「ぜひ、先生のところで他の入居者様もお願いします」という、最強の紹介ルートが完成します。
          </p>
          <p>
            ご家族も同様です。私自身の祖母のところに訪問に来てくださる医療・介護サービスの方々の中で、家族とのコミュニケーションを大切にしてくれる担当者のことは、私自身が多方面で「あの事業所は本当に素晴らしい」と宣伝しています。これが人間の心理です。
          </p>
          <p>
            治療技術を磨くのは当然です。しかし、患者様の「周囲にいる方々」を味方につける戦略を持たなければ、地域No.1にはなれません。
          </p>

          {/* CTA Block */}
          <div className="not-prose bg-gray-50 rounded-2xl p-8 my-12 border border-gray-200">
            <p className="text-lg font-bold text-gray-900 mb-3">
              【無料オンライン相談のご案内】
            </p>
            <p className="text-gray-600 mb-0">
              施設やケアマネ、ご家族からの「信用利益」を意図的に積み上げる独自の営業戦略。ARCHだからこそお伝えできるノウハウがあります。
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
