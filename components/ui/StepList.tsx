/**
 * StepList — 番号・見出し・本文を罫線で区切って並べる（進め方・時間軸・範囲の一覧）
 * ------------------------------------------------------------------
 * カードを並べず、番号と罫線で順序を示す。phase を渡すと、区切りの小見出しを挟む。
 */

import Reveal from "@/components/Reveal";

export type Step = {
  title: string;
  body: string;
  /** この行から始まる段階の名前（任意） */
  phase?: string;
};

export default function StepList({
  steps,
  numbered = true,
  className = "",
}: {
  steps: readonly Step[];
  numbered?: boolean;
  className?: string;
}) {
  return (
    <ol className={`border-t border-arch-deep ${className}`.trim()}>
      {steps.map((s, i) => (
        <Reveal as="li" key={s.title} delay={Math.min(i, 3) * 50}>
          {s.phase && (
            <p className="mono-micro border-b border-arch-line bg-arch-pale/60 px-1 py-2.5 text-arch-deep">
              {s.phase}
            </p>
          )}
          <div className="grid gap-2 border-b border-arch-line py-7 md:grid-cols-12 md:gap-8 md:py-8">
            {numbered && (
              <p className="num-en text-[0.875rem] font-medium text-arch-green tabular-nums md:col-span-1">
                {String(i + 1).padStart(2, "0")}
              </p>
            )}
            <h3
              className={`display-jp text-[1.125rem] leading-[1.6] text-arch-ink ${
                numbered ? "md:col-span-4" : "md:col-span-5"
              }`}
            >
              {s.title}
            </h3>
            <p className="text-[0.98rem] leading-[1.9] text-arch-ink-soft md:col-span-7">
              {s.body}
            </p>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}
