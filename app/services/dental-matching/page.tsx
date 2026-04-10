import DentalMatchingClient from "./DentalMatchingClient";

export const metadata = {
  title: "訪問歯科・品質診断エンジン（施設向け歯科評価ツール） | 合同会社ARCH",
  description:
    "6項目×5段階のLikert尺度で、現在ご契約中の訪問歯科医院を品質診断。鈴木センサー・ロジックが「即刻変えるべき／相談すべき／継続推奨」を自動判定します。",
};

export default function DentalMatchingPage() {
  return <DentalMatchingClient />;
}
