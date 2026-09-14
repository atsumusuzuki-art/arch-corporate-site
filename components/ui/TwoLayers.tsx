/**
 * TwoLayers — 支援の二層（運営レイヤー／経営レイヤー）
 * ------------------------------------------------------------------
 * ARCHフィロソフィー Ver.2.0 の二層構造。TOP と外部事務長ページで共通。
 * 運営は「終わらせる仕事」、経営は「価値がある限り続ける仕事」。
 * 契約の継続そのものを成功として表現しない。
 */

import Reveal from "@/components/Reveal";
import { TWO_LAYERS } from "@/lib/site";

export default function TwoLayers() {
  return (
    <div className="grid border-t border-arch-deep md:grid-cols-2">
      {TWO_LAYERS.map((l, i) => (
        <Reveal
          key={l.en}
          delay={i * 80}
          className={`py-10 md:py-12 ${
            i === 0
              ? "md:pr-10 lg:pr-14"
              : "border-t border-arch-line md:border-l md:border-t-0 md:pl-10 lg:pl-14"
          }`}
        >
          <p className="mono-micro text-arch-green">{l.en}</p>
          <h3 className="display-jp mt-3 text-[clamp(1.5rem,2.6vw,1.875rem)] leading-[1.4] text-arch-ink">
            {l.name}
          </h3>
          <p className="serif-jp mt-3 text-[1.1875rem] text-arch-deep">
            {l.nature}
          </p>
          <ul className="mt-8 grid grid-cols-2 gap-x-6 border-t border-arch-line">
            {l.items.map((it) => (
              <li
                key={it}
                className="border-b border-arch-line py-3 text-[0.95rem] leading-[1.6] text-arch-ink"
              >
                {it}
              </li>
            ))}
          </ul>
          <p className="mt-7 text-[1rem] font-bold leading-[1.85] text-arch-ink">
            {l.goal}
          </p>
        </Reveal>
      ))}
    </div>
  );
}
