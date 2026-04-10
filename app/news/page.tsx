import Link from "next/link";
import { ArrowRight, ArrowLeft, ExternalLink } from "lucide-react";
import { NEWS, formatNewsDate, categoryBadgeClasses } from "@/lib/news";

export const metadata = {
  title: "News｜合同会社ARCH",
  description:
    "合同会社ARCHからのお知らせ・サービス更新・リリース情報・プレスリリース一覧。",
};

export default function NewsPage() {
  return (
    <article className="min-h-screen bg-white">
      {/* ──────────────────────────────────────────
          HERO
      ────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-950 pt-24 pb-16 sm:pt-32 sm:pb-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-green-400 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-300 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4"></div>
        </div>
        <div className="relative max-w-5xl mx-auto px-5 sm:px-8">
          <p className="text-[10px] sm:text-xs font-bold tracking-[0.35em] uppercase text-green-300 mb-4">
            News
          </p>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
            お知らせ
          </h1>
          <p className="text-sm sm:text-base text-green-100/70 mt-5 sm:mt-6 max-w-2xl leading-relaxed">
            サービス更新・新規リリース・プレスリリースなど、合同会社ARCHからのお知らせ一覧です。
          </p>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          LIST
      ────────────────────────────────────────── */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          {NEWS.length === 0 ? (
            <p className="text-center text-sm text-gray-400 py-20">
              現在お知らせはありません。
            </p>
          ) : (
            <ul className="divide-y divide-gray-100 border-t border-gray-100">
              {NEWS.map((n, i) => {
                const isExternal = n.external ?? /^https?:\/\//.test(n.href);
                const badgeClass = categoryBadgeClasses(n.category);
                return (
                  <li key={`${n.date}-${i}`}>
                    <Link
                      href={n.href}
                      target={isExternal ? "_blank" : undefined}
                      rel={isExternal ? "noopener noreferrer" : undefined}
                      className="group block py-6 sm:py-7 lg:grid lg:grid-cols-12 lg:gap-6 items-start hover:bg-green-50/40 transition-colors -mx-5 sm:-mx-8 px-5 sm:px-8"
                    >
                      <div className="lg:col-span-2 mb-2 lg:mb-0">
                        <time
                          dateTime={n.date}
                          className="text-xs sm:text-sm font-bold tracking-wider text-gray-400"
                        >
                          {formatNewsDate(n.date)}
                        </time>
                      </div>
                      <div className="lg:col-span-2 mb-3 lg:mb-0">
                        <span
                          className={`inline-block text-[10px] sm:text-xs font-bold tracking-wider px-2.5 py-1 rounded ${badgeClass}`}
                        >
                          {n.category}
                        </span>
                      </div>
                      <div className="lg:col-span-7">
                        <h2 className="text-sm sm:text-base font-bold text-gray-900 leading-relaxed group-hover:text-green-700 transition-colors">
                          {n.title}
                          {isExternal && (
                            <ExternalLink
                              size={13}
                              className="inline ml-1.5 -mt-0.5 text-gray-300 group-hover:text-green-700 transition-colors"
                            />
                          )}
                        </h2>
                      </div>
                      <div className="lg:col-span-1 hidden lg:flex justify-end items-center">
                        <ArrowRight
                          size={16}
                          className="text-gray-300 group-hover:text-green-700 group-hover:translate-x-1 transition-all"
                        />
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          )}

          {/* Back to home */}
          <div className="mt-16 pt-10 border-t border-gray-100">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-bold tracking-wider text-green-800 hover:text-green-900 transition-colors"
            >
              <ArrowLeft size={16} />
              トップへ戻る
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
