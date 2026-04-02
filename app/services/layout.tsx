import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-bold text-gray-600 hover:text-green-700 transition-colors"
          >
            <ArrowLeft size={16} />
            トップページへ戻る
          </Link>
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.jpg"
              alt="合同会社ARCH"
              width={80}
              height={80}
              className="h-8 w-auto"
            />
          </Link>
        </div>
      </header>

      {/* Content */}
      <main>{children}</main>

      {/* CTA */}
      <section className="bg-green-800 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4">
            まずは無料相談から
          </h2>
          <p className="text-green-100 font-medium mb-8 max-w-2xl mx-auto">
            ARCHは訪問歯科・医療介護業界に特化した経営コンサルティング会社です。お気軽にご相談ください。
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 bg-white text-green-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-green-50 transition-all shadow-lg"
          >
            無料相談を予約する
          </Link>
        </div>
      </section>

      {/* Other Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-extrabold text-gray-900 mb-8">
            その他のサービス
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link
              href="/services/consulting"
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
            >
              <span className="text-xs font-bold text-green-700 mb-2 block">
                Service 01
              </span>
              <h3 className="font-bold text-gray-900 group-hover:text-green-700 transition-colors">
                訪問歯科コンサルティング
              </h3>
            </Link>
            <Link
              href="/services/sales"
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
            >
              <span className="text-xs font-bold text-green-700 mb-2 block">
                Service 02
              </span>
              <h3 className="font-bold text-gray-900 group-hover:text-green-700 transition-colors">
                医療介護特化型営業コンサルティング
              </h3>
            </Link>
            <Link
              href="/services/senior-home"
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group"
            >
              <span className="text-xs font-bold text-green-700 mb-2 block">
                Service 03
              </span>
              <h3 className="font-bold text-gray-900 group-hover:text-green-700 transition-colors">
                老人ホーム紹介事業
              </h3>
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
