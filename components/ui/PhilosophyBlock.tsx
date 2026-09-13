/**
 * PhilosophyBlock — ARCHフィロソフィー Ver.2.0 の「迷ったときに戻る言葉」
 * ------------------------------------------------------------------
 * 文言は lib/site.ts の ARCH_PHILOSOPHY から取る（ページに直接書かない）。
 * 明朝体は、このブロック・HERO・代表のことばに限定して使う。
 */

import { ARCH_PHILOSOPHY } from "@/lib/site";

export default function PhilosophyBlock({ onDark = false }: { onDark?: boolean }) {
  return (
    <div>
      <p
        className={`serif-jp text-[clamp(1.5rem,3.2vw,2.375rem)] leading-[1.7] ${
          onDark ? "text-arch-white" : "text-arch-ink"
        }`}
      >
        {ARCH_PHILOSOPHY.main.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </p>
      <span
        aria-hidden="true"
        className={`arch-line mt-10 block h-px w-16 ${onDark ? "bg-arch-light" : "bg-arch-green"}`}
      />
      <p
        className={`serif-jp mt-8 text-[clamp(1.0625rem,1.8vw,1.25rem)] leading-[1.9] !font-medium ${
          onDark ? "text-arch-light" : "text-arch-ink-soft"
        }`}
      >
        {ARCH_PHILOSOPHY.sub.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </p>
    </div>
  );
}
