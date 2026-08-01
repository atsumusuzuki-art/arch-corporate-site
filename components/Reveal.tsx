"use client";

/**
 * Reveal — 画面に入ったとき 1 回だけフェードインさせる小さなラッパー
 * ------------------------------------------------------------------
 * ・下から 16px の移動 ＋ フェード / 520ms / ease-out
 * ・一度表示したら監視を解除する（往復させない）
 * ・prefers-reduced-motion: reduce では最初から表示する
 *
 * 再レンダリングを起こさないよう、状態ではなく DOM の class を直接付け替えている。
 * ページ全体を Client Component にしないため、動きが必要な箇所だけこれで包む。
 */

import { useEffect, useRef, type ElementType, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  /** 出力タグ（既定: div）。li などにしたい場合に指定 */
  as?: ElementType;
  /** 表示開始を少し遅らせる（ms）。0〜240 程度で使う */
  delay?: number;
  className?: string;
};

export default function Reveal({ children, as, delay = 0, className = "" }: Props) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // 動きを減らす設定、または監視に対応していない環境ではそのまま表示する
    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      el.classList.add("is-visible");
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.disconnect(); // 1 回だけ
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`arch-reveal ${className}`.trim()}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
