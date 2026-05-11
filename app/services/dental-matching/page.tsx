import DentalMatchingClient from "./DentalMatchingClient";

export const metadata = {
  title: "施設の歯科対応 簡易診断ツール｜合同会社ARCH（施設連携・営業支援の補助ツール）",
  description:
    "対応スピード・報告書の質・接遇マナー・現場連携・コンプライアンス・継続性の6項目で、現在ご契約中の訪問歯科を5段階評価。「即時切り替え／相談／継続推奨」を自動判定する無料の簡易診断ツールです。",
};

export default function DentalMatchingPage() {
  return <DentalMatchingClient />;
}
