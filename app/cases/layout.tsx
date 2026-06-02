import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const ALL_CASES = [
  { slug: "visit-startup", title: "訪問歯科未経験からのスタート", category: "訪問歯科立ち上げ" },
  { slug: "facility-growth", title: "施設には入れているのに利用者が増えない", category: "施設連携" },
  { slug: "branch-launch", title: "本院診療を止めずに分院開設準備を進める", category: "分院立ち上げ" },
  { slug: "fee-standards", title: "診療報酬改定と施設基準対応を整理", category: "算定・施設基準" },
  { slug: "profitability", title: "数字だけでなく現場運営から見直す", category: "訪問歯科黒字化" },
];

export default function CasesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-arch-cream">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-arch-forest border-b border-arch-rule-dark">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-3 md:py-4 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 mono-label text-arch-sage hover:text-white transition-colors"
          >
            <ArrowLeft size={14} strokeWidth={2} />
            <span>BACK / トップへ</span>
          </Link>
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <Image
              src="/images/logo.jpg"
              alt="合同会社ARCH"
              width={120}
              height={120}
              className="h-8 md:h-9 w-auto"
            />
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="display-jp text-arch-cream text-sm">合同会社ARCH</span>
              <span className="mono-micro text-arch-sage/70 tracking-[0.18em]">歯科医院の外部事務長</span>
            </span>
          </Link>
        </div>
      </header>

      <main>{children}</main>

      {/* 共通 CTA */}
      <section className="relative bg-arch-forest text-arch-cream py-24 md:py-32 overflow-hidden border-t border-arch-rule-dark">
        <div className="absolute top-6 left-6 md:top-8 md:left-10 pointer-events-none">
          <span className="mono-label text-arch-sage/70">CONTACT — 無料相談</span>
        </div>

        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <p className="mono-label text-arch-gold mb-6">無料相談</p>
          <h2 className="display-jp text-3xl sm:text-4xl md:text-5xl text-arch-cream mb-6 leading-[1.25]">
            まずは、
            <br />
            現在の状況をお聞かせください。
          </h2>
          <p className="text-base md:text-lg text-arch-sage/90 leading-loose max-w-2xl mb-10">
            医院ごとに課題は異なります。訪問歯科、施設連携、分院展開、算定、採用など、現在の状況を伺った上で最適な支援方法をご提案します。
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-3 bg-arch-cream text-arch-forest px-8 py-4 text-sm font-bold tracking-[0.15em] hover:bg-arch-gold hover:text-arch-ink transition-colors"
            >
              無料相談する
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-3 border border-arch-cream text-arch-cream px-8 py-4 text-sm font-bold tracking-[0.15em] hover:bg-arch-cream hover:text-arch-forest transition-colors"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </section>

      {/* 他の事例 */}
      <section className="bg-arch-cream-raised py-20 md:py-24 border-t border-arch-rule">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-baseline justify-between mb-10 md:mb-12 border-b border-arch-rule pb-4">
            <p className="mono-label text-arch-moss">OTHER CASES — 他の支援事例</p>
            <Link
              href="/"
              className="mono-micro text-arch-forest hover:text-arch-forest-soft inline-flex items-center gap-1.5"
            >
              トップへ <ArrowRight size={11} />
            </Link>
          </div>

          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-arch-rule">
            {ALL_CASES.map((c) => (
              <li key={c.slug} className="border-b border-r border-arch-rule">
                <Link
                  href={`/cases/${c.slug}`}
                  className="group block py-6 md:py-7 px-5 md:px-6 h-full hover:bg-arch-cream transition-colors"
                >
                  <p className="mono-label text-arch-moss mb-3">{c.category}</p>
                  <p className="display-jp text-base md:text-lg text-arch-ink group-hover:text-arch-forest transition-colors leading-snug">
                    {c.title}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <footer className="bg-arch-ink text-arch-sage py-10 md:py-12 border-t border-arch-rule-dark">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Image
              src="/images/logo.jpg"
              alt="合同会社ARCH"
              width={80}
              height={80}
              className="h-9 w-auto opacity-90"
            />
            <div>
              <p className="mono-label text-arch-sage">ARCH / 合同会社</p>
              <p className="mono-micro text-arch-sage/60 mt-1 tracking-[0.18em]">
                歯科医院の外部事務長
              </p>
            </div>
          </div>
          <p className="mono-micro text-arch-sage/50">
            &copy; {new Date().getFullYear()} 合同会社ARCH ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
}
