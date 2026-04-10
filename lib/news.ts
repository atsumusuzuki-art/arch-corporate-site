/* ================================================================
   合同会社ARCH — News データソース

   ニュースを追加するには、下記 NEWS 配列の **先頭** に新しい
   オブジェクトを1行追加して git push するだけです。
   （新しい順＝先頭が最新、になるように書いてください）

   例：
   {
     date: "2026-05-01",
     category: "お知らせ",
     title: "ゴールデンウィーク休業のお知らせ",
     href: "/news",
   },
   ================================================================ */

export type NewsCategory = "お知らせ" | "更新" | "リリース" | "コラム" | "プレス";

export type NewsItem = {
  /** YYYY-MM-DD 形式 */
  date: string;
  category: NewsCategory;
  title: string;
  /** 内部リンク（/services/xxx）または外部URL */
  href: string;
  /** 外部リンクの場合は true を指定（新規タブで開く） */
  external?: boolean;
};

export const NEWS: NewsItem[] = [
  {
    date: "2026-04-10",
    category: "リリース",
    title: "新サービス「ARCH・外付け事務局（BPO）」を新設しました",
    href: "/bpo-service",
  },
  {
    date: "2026-04-10",
    category: "リリース",
    title: "「訪問歯科・品質診断エンジン」を公開しました",
    href: "/services/dental-matching",
  },
  {
    date: "2026-04-10",
    category: "リリース",
    title: "サービス名を全面刷新しました（v2.0）",
    href: "/#service",
  },
];

/** "2026-04-10" → "2026.04.10" */
export function formatNewsDate(date: string): string {
  return date.replace(/-/g, ".");
}

/** カテゴリ別のバッジ色（Tailwind クラス） */
export function categoryBadgeClasses(category: NewsCategory): string {
  switch (category) {
    case "リリース":
      return "text-green-800 bg-green-100";
    case "お知らせ":
      return "text-gray-700 bg-gray-100";
    case "更新":
      return "text-blue-800 bg-blue-50";
    case "コラム":
      return "text-amber-800 bg-amber-50";
    case "プレス":
      return "text-purple-800 bg-purple-50";
    default:
      return "text-gray-700 bg-gray-100";
  }
}
