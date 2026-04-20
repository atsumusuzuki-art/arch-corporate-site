/**
 * CornerMarkers — pptx編集資料風の4隅マーカー
 *
 * 左上: ARCH ロゴラベル
 * 右上: セクション番号・カテゴリ（CONFIDENTIAL風）
 * 左下: カテゴリ文字
 * 右下: ページネーション（NN / NN）
 *
 * 濃緑背景にも載るよう、theme="light" (クリーム用) / "dark" (深緑用) を切替。
 */

type Theme = "light" | "dark";

type Props = {
  topRight?: string;        // 例: "SERVICE — 04 / 料金"
  bottomLeft?: string;      // 例: "HOME"
  bottomRight?: string;     // 例: "01 / 07"
  theme?: Theme;
  fixed?: boolean;          // true なら position:fixed で常時表示
};

export default function CornerMarkers({
  topRight,
  bottomLeft,
  bottomRight,
  theme = "light",
  fixed = false,
}: Props) {
  const color = theme === "dark" ? "text-arch-sage" : "text-arch-moss";
  const dim = theme === "dark" ? "text-arch-sage/60" : "text-arch-moss/60";
  const position = fixed ? "fixed" : "absolute";

  return (
    <>
      {/* Top-left: ARCH */}
      <div className={`${position} top-6 left-6 md:top-8 md:left-10 z-40 pointer-events-none`}>
        <span className={`mono-label ${color}`}>ARCH</span>
      </div>

      {/* Top-right: category / section label */}
      {topRight && (
        <div className={`${position} top-6 right-6 md:top-8 md:right-10 z-40 pointer-events-none text-right`}>
          <span className={`mono-label ${dim}`}>{topRight}</span>
        </div>
      )}

      {/* Bottom-left: category word */}
      {bottomLeft && (
        <div className={`${position} bottom-6 left-6 md:bottom-8 md:left-10 z-40 pointer-events-none`}>
          <span className={`mono-label ${dim}`}>{bottomLeft}</span>
        </div>
      )}

      {/* Bottom-right: pagination */}
      {bottomRight && (
        <div className={`${position} bottom-6 right-6 md:bottom-8 md:right-10 z-40 pointer-events-none text-right`}>
          <span className={`mono-micro ${dim}`}>{bottomRight}</span>
        </div>
      )}
    </>
  );
}

/**
 * SectionTag — セクション冒頭に置くカテゴリタグ
 * 例: <SectionTag category="PRICING" number="04" label="料金プラン" />
 */
export function SectionTag({
  category,
  number,
  label,
  theme = "light",
}: {
  category: string;
  number?: string;
  label: string;
  theme?: Theme;
}) {
  const color = theme === "dark" ? "text-arch-sage" : "text-arch-moss";
  const dim = theme === "dark" ? "text-arch-sage/60" : "text-arch-moss/60";

  return (
    <p className={`mono-label ${color}`}>
      {category}
      {number && <span className={dim}> — {number}</span>}
      <span className={dim}> / {label}</span>
    </p>
  );
}
