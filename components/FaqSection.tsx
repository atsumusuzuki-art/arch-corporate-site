import { Plus } from "lucide-react";
import { SectionTag } from "@/components/CornerMarkers";

export type Faq = {
  q: string;
  a: string;
};

type Props = {
  /** 番号付き SectionTag。例 "06" */
  number: string;
  items: Faq[];
};

/**
 * editorial v2 の FAQ セクション
 * - 表示：<details>/<summary> ネイティブのアコーディオン
 * - SEO：FAQPage JSON-LD を同梱（表示テキストと完全一致）
 * - prefers-reduced-motion 配慮：アニメーションなしのトグル
 */
export default function FaqSection({ number, items }: Props) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: it.a,
      },
    })),
  };

  return (
    <section className="bg-arch-cream py-20 md:py-28 border-t border-arch-rule">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <div className="flex items-baseline justify-between border-b border-arch-rule pb-4 mb-10 md:mb-14">
          <SectionTag category="FAQ" number={number} label="よくある質問" />
          <p className="mono-micro text-arch-ink-muted hidden sm:block tabular-nums">
            {String(items.length).padStart(2, "0")} QUESTIONS
          </p>
        </div>

        <h2 className="display-jp text-2xl md:text-3xl text-arch-ink mb-10 md:mb-12 max-w-3xl leading-snug">
          ご相談前に、
          <br className="sm:hidden" />
          よくいただく<span className="text-arch-forest font-black">質問</span>。
        </h2>

        <ul className="border-t border-arch-rule">
          {items.map((it, i) => (
            <li key={i} className="border-b border-arch-rule">
              <details className="group">
                <summary className="flex items-start gap-4 py-5 md:py-6 cursor-pointer list-none hover:bg-arch-cream-raised transition-colors -mx-3 px-3">
                  <span className="mono-micro text-arch-moss tabular-nums shrink-0 mt-1">
                    Q{String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-base md:text-lg font-bold text-arch-ink leading-snug">
                    {it.q}
                  </span>
                  <Plus
                    size={18}
                    className="shrink-0 mt-1 text-arch-moss transition-transform duration-300 group-open:rotate-45"
                  />
                </summary>
                <div className="pb-6 md:pb-8 pl-12 md:pl-14 pr-3 -mx-3 px-3">
                  <p className="text-sm md:text-[15px] text-arch-ink-soft leading-loose">
                    {it.a}
                  </p>
                </div>
              </details>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
