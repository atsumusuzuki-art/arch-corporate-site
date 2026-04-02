import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "一生懸命訪問しているのに「黒字化」しない医院。院長が見落としている罠 | ARCH コラム",
  description:
    "毎日訪問に回っているのに利益が残らない。その原因はKPIの不在と経費計算の甘さにあります。黒字化のロードマップを解説。",
};

export default function ProfitTrapPage() {
  return (
    <article className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Category & Date */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-bold text-green-700 bg-green-50 px-3 py-1 rounded-full">
            経営改善
          </span>
          <time className="text-xs text-gray-400 font-medium">2026.04.02</time>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-10 tracking-tight">
          一生懸命訪問しているのに
          <br className="hidden md:block" />
          「黒字化」しない医院。
          <br className="hidden md:block" />
          院長が見落としている罠
        </h1>

        {/* Lead */}
        <div className="border-l-4 border-green-700 pl-6 mb-12">
          <p className="text-lg text-gray-600 leading-relaxed font-medium italic">
            「毎日スタッフと一緒に一生懸命訪問に回っているのに、なぜか利益が残らないんです」
          </p>
        </div>

        {/* Body */}
        <div className="prose-custom">
          <p>
            コンサルティングの現場で、院長先生からよく飛び出すご相談です。結論から言います。とりあえず訪問に行っているだけの医院は、絶対に利益は上がりません。
          </p>

          <h2>「単価のアッパー」と「基準の不在」</h2>
          <p>
            黒字化しない医院には明確な共通点があります。それは、歯科医師および歯科衛生士に対して「1日あたりの診療数・ケア数」の基準（KPI）を作っていないことです。
          </p>
          <p>
            訪問歯科は保険診療が大半を占めるため、当然ながら「単価のアッパー（上限）」が決まっています。この大前提を理解していない院長が多すぎます。
          </p>
          <p>
            単価に上限がある以上、利益を出すには「患者数（稼働数）」を増やすしかありません。無理に単価を上げる施策（算定の工夫など）を取ったとしても、診療報酬改定のたびに見直しを迫られますし、何より個別指導のターゲットになるリスクが跳ね上がります。
          </p>

          <h2>衛生士の「言うがまま」に経費を使っていませんか？</h2>
          <p>
            さらに利益を圧迫しているのが「経費計算の甘さ」です。
          </p>
          <p>
            一診療あたり、一口腔ケアあたりにどれだけの経費がかかっているか、即答できますか？過去にお取引したある医院では、院長が「便利そうだから」と原価計算もせずに、歯科衛生士の言うがままにケア用品等の物品を次々と購入していました。
          </p>
          <p>
            当たり前ですが、口腔ケアで算定できる点数は一律です。経費をかければかけるほど、ケア1回あたりの利益はみるみる減っていきます（もちろん、単純に経費を削ればいいという話ではありません）。
          </p>
          <p>
            基準なき訪問と、どんぶり勘定の経費。これらが「忙しいのに儲からない」の正体です。
          </p>

          {/* CTA Block */}
          <div className="not-prose bg-gray-50 rounded-2xl p-8 my-12 border border-gray-200">
            <p className="text-lg font-bold text-gray-900 mb-3">
              【無料オンライン相談のご案内】
            </p>
            <p className="text-gray-600 mb-0">
              単価の限界を見据えた上で、どうやって確実に利益を残すのか。精緻な経費計算から最適なKPIの設計まで、ARCHが黒字化のロードマップを引きます。
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
