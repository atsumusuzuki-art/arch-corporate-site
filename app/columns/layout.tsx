import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ColumnsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      {/* Column Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-green-700 transition-colors">
            <ArrowLeft size={16} />
            トップページへ戻る
          </Link>
          <Link href="/" className="font-bold text-xl tracking-wider text-gray-900">
            ARCH
          </Link>
        </div>
      </header>

      {/* Article Content */}
      <main>{children}</main>

      {/* CTA */}
      <section className="bg-green-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
            訪問歯科のことなら、ARCHにご相談ください
          </h2>
          <p className="text-green-100 font-medium mb-8 max-w-2xl mx-auto">
            立ち上げ・営業・算定・運営改善まで、訪問歯科のあらゆる課題をワンストップで解決。まずは無料相談から。
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-white text-green-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-green-50 transition-all shadow-lg"
          >
            無料相談を予約する
          </Link>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-extrabold text-gray-900 mb-8">関連コラム</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/columns/sales-trap" className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <span className="text-xs font-bold text-green-700 mb-2 block">営業の落とし穴</span>
              <h3 className="font-bold text-gray-900 group-hover:text-green-700 transition-colors text-sm">院長自らの飛び込み営業。そのパンフレット、実は「その他大勢」の束に埋もれています</h3>
            </Link>
            <Link href="/columns/communication" className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <span className="text-xs font-bold text-green-700 mb-2 block">現場コミュニケーション</span>
              <h3 className="font-bold text-gray-900 group-hover:text-green-700 transition-colors text-sm">介護現場で嫌われる衛生士の共通点。良かれと思った「その指導」、実は大迷惑です。</h3>
            </Link>
            <Link href="/columns/facility-needs" className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <span className="text-xs font-bold text-green-700 mb-2 block">施設の本音</span>
              <h3 className="font-bold text-gray-900 group-hover:text-green-700 transition-colors text-sm">介護施設における「口腔ケアの序列」。歯医者が現場で煙たがられる本当の理由</h3>
            </Link>
            <Link href="/columns/document-hell" className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <span className="text-xs font-bold text-green-700 mb-2 block">業務改善</span>
              <h3 className="font-bold text-gray-900 group-hover:text-green-700 transition-colors text-sm">訪問歯科が陥る「書類地獄」。ご家族からのクレームを防ぐ唯一の解決策</h3>
            </Link>
            <Link href="/columns/profit-trap" className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <span className="text-xs font-bold text-green-700 mb-2 block">経営改善</span>
              <h3 className="font-bold text-gray-900 group-hover:text-green-700 transition-colors text-sm">一生懸命訪問しているのに「黒字化」しない医院。院長が見落としている罠</h3>
            </Link>
            <Link href="/columns/invisible-profit" className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <span className="text-xs font-bold text-green-700 mb-2 block">営業戦略</span>
              <h3 className="font-bold text-gray-900 group-hover:text-green-700 transition-colors text-sm">現場がドブに捨てている「見えない利益」。患者だけを診る歯医者は淘汰される</h3>
            </Link>
            <Link href="/columns/staff-role" className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <span className="text-xs font-bold text-green-700 mb-2 block">組織マネジメント</span>
              <h3 className="font-bold text-gray-900 group-hover:text-green-700 transition-colors text-sm">優秀なスタッフが辞めない医院の秘密。元小学校教諭が教える「係活動」マネジメント</h3>
            </Link>
            <Link href="/columns/turnover-strategy" className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <span className="text-xs font-bold text-green-700 mb-2 block">経営戦略</span>
              <h3 className="font-bold text-gray-900 group-hover:text-green-700 transition-colors text-sm">「スタッフの退職」に怯える院長へ。離職防止よりも優先すべき、たった一つの経営戦略</h3>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center text-sm font-medium">
        &copy; {new Date().getFullYear()} 合同会社ARCH All rights reserved.
      </footer>
    </div>
  );
}
