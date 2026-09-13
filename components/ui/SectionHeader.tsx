/**
 * SectionHeader — 番号＋英字ラベル＋見出し（＋リード）
 * ------------------------------------------------------------------
 * カードで囲わず、番号・英字ラベル・罫線・余白だけでセクションの始まりを示す。
 */

import type { ReactNode } from "react";
import { H2, PROSE_W } from "@/lib/ui";

/** 小さな番号と英字ラベル（例：01 — IN 30 SECONDS） */
export function SectionNumber({
  no,
  label,
  onDark = false,
  className = "",
}: {
  no?: string;
  label: string;
  onDark?: boolean;
  className?: string;
}) {
  return (
    <p
      className={`mono-micro flex items-center gap-3 ${
        onDark ? "text-arch-light" : "text-arch-green"
      } ${className}`.trim()}
    >
      {no && <span className="tabular-nums">{no}</span>}
      {no && (
        <span
          aria-hidden="true"
          className={`h-px w-8 ${onDark ? "bg-arch-light/60" : "bg-arch-green/50"}`}
        />
      )}
      <span>{label}</span>
    </p>
  );
}

type Props = {
  no?: string;
  label: string;
  id: string;
  title: ReactNode;
  lead?: ReactNode;
  onDark?: boolean;
  className?: string;
};

export default function SectionHeader({
  no,
  label,
  id,
  title,
  lead,
  onDark = false,
  className = "",
}: Props) {
  return (
    <div className={className}>
      <SectionNumber no={no} label={label} onDark={onDark} />
      <h2 id={id} className={`${H2} mt-5 ${onDark ? "!text-arch-white" : ""}`}>
        {title}
      </h2>
      {lead && (
        <div
          className={`mt-6 ${PROSE_W} text-[1rem] leading-[1.95] md:text-[1.0625rem] ${
            onDark ? "text-arch-light" : "text-arch-ink-soft"
          }`}
        >
          {lead}
        </div>
      )}
    </div>
  );
}
