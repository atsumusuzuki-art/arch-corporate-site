import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

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
            className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-green-700 transition-colors"
          >
            <ArrowLeft size={16} />
            トップページへ戻る
          </Link>
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.jpg"
              alt="合同会社ARCH"
              width={64}
              height={64}
              className="h-7 w-auto"
            />
          </Link>
        </div>
      </header>

      {/* Content */}
      <main>{children}</main>

      {/* ──────────────────────────────────────────
          共通 CTA
      ────────────────────────────────────────── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-gray-900 leading-snug mb-5">
            まずは無料オンライン相談で、
            <br className="hidden sm:block" />
            貴院（貴施設）の課題をお聞かせください。
          </h2>
          <p className="text-sm sm:text-base text-gray-500 leading-relaxed max-w-xl mx-auto mb-10">
            業界のリアルを知り尽くしたARCHが、現状の課題分析から具体的な解決策のロードマップまでをご提案します。無理な営業は一切行いません。
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2.5 bg-green-800 hover:bg-green-900 text-white px-8 py-4 rounded-lg text-sm sm:text-base font-bold tracking-wider transition-colors shadow-lg shadow-green-800/20"
          >
            無料オンライン相談を予約する
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          その他のサービス
      ────────────────────────────────────────── */}
      <section className="bg-gray-50 py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <h2 className="text-lg font-extrabold text-gray-900 mb-8">
            その他のサービス
          </h2>
          <div className="grid md:grid-cols-3 gap-5">
            <Link
              href="/services/consulting"
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
            >
              <span className="text-[10px] font-bold tracking-widest text-green-700 block mb-2">
                Service 01
              </span>
              <h3 className="font-bold text-gray-900 group-hover:text-green-700 transition-colors text-sm sm:text-base">
                経営コンサルティング
              </h3>
            </Link>
            <Link
              href="/services/sales"
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
            >
              <span className="text-[10px] font-bold tracking-widest text-green-700 block mb-2">
                Service 02
              </span>
              <h3 className="font-bold text-gray-900 group-hover:text-green-700 transition-colors text-sm sm:text-base">
                営業コンサルティング
              </h3>
            </Link>
            <Link
              href="/services/senior-home"
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow group"
            >
              <span className="text-[10px] font-bold tracking-widest text-green-700 block mb-2">
                Service 03
              </span>
              <h3 className="font-bold text-gray-900 group-hover:text-green-700 transition-colors text-sm sm:text-base">
                介護事業者様向け
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
