import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function ColumnLayout({
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-extrabold text-gray-900 mb-8">関連コラム</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/column/houmon-shika-hajimekata" className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <span className="text-xs font-bold text-green-700 mb-2 block">訪問歯科 どうやる</span>
              <h3 className="font-bold text-gray-900 group-hover:text-green-700 transition-colors">訪問歯科の始め方を完全ガイド</h3>
            </Link>
            <Link href="/column/houmon-shika-santei" className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <span className="text-xs font-bold text-green-700 mb-2 block">訪問歯科 算定</span>
              <h3 className="font-bold text-gray-900 group-hover:text-green-700 transition-colors">訪問歯科の算定を徹底解説</h3>
            </Link>
            <Link href="/column/houmon-shika-eigyo" className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <span className="text-xs font-bold text-green-700 mb-2 block">訪問歯科 営業</span>
              <h3 className="font-bold text-gray-900 group-hover:text-green-700 transition-colors">訪問歯科の営業戦略を徹底解説</h3>
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
