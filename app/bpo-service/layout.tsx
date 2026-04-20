import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const OTHER_SERVICES = [
  { num: "01", href: "/services/consulting", new: "訪問歯科プロデューサー", old: "（旧：歯科経営コンサルティング）" },
  { num: "02", href: "/services/sales", new: "ARCH大学 営業学部", old: "（旧：医療介護特化型 営業支援）" },
  { num: "03", href: "/services/senior-home", new: "ARCH 介護・暮らしの選択相談所", old: "（旧：老人ホーム紹介業）" },
  { num: "04", href: "/services/dental-matching", new: "訪問歯科・品質診断エンジン", old: "（旧：施設向け歯科評価ツール）" },
  { num: "05", href: "/bpo-service", new: "ARCH・外付け事務局", old: "— 事務代行・BPO" },
];

export default function BpoServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-arch-cream">
      {/* ──────────────────────────────────────────
          Header — editorial top bar, forest green
      ────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 bg-arch-forest border-b border-arch-rule-dark">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-3 md:py-4 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 mono-label text-arch-sage hover:text-white transition-colors"
          >
            <ArrowLeft size={14} strokeWidth={2} />
            <span>BACK / トップへ</span>
          </Link>
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.jpg"
              alt="合同会社ARCH"
              width={120}
              height={120}
              className="h-8 md:h-9 w-auto"
            />
          </Link>
        </div>
      </header>

      {/* Content */}
      <main>{children}</main>

      {/* ──────────────────────────────────────────
          共通 CTA — deep forest editorial band
      ────────────────────────────────────────── */}
      <section className="relative bg-arch-forest text-arch-cream py-24 md:py-32 overflow-hidden">
        <div className="absolute top-6 left-6 md:top-8 md:left-10 pointer-events-none">
          <span className="mono-label text-arch-sage/70">CONTACT — 無料オンライン相談</span>
        </div>
        <div className="absolute top-6 right-6 md:top-8 md:right-10 pointer-events-none text-right">
          <span className="mono-micro text-arch-sage/60">NEXT STEP</span>
        </div>

        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <p className="mono-label text-arch-gold mb-6">無料オンライン相談</p>
          <h2 className="display-jp text-3xl sm:text-4xl md:text-5xl text-arch-cream mb-6 leading-[1.25]">
            まずは、現場の業務を
            <br />
            そのまま聞かせてください。
          </h2>
          <p className="text-base md:text-lg text-arch-sage/90 leading-loose max-w-2xl mb-10">
            現在の業務フローをヒアリングし、どのエージェントがどの業務を巻き取れるかを具体的にご提案します。無理な営業は一切行いません。
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-3 bg-arch-cream text-arch-forest px-8 py-4 text-sm font-bold tracking-[0.15em] hover:bg-arch-gold hover:text-arch-ink transition-colors"
          >
            無料オンライン相談を予約する
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="absolute bottom-6 left-6 md:bottom-8 md:left-10 pointer-events-none">
          <span className="mono-label text-arch-sage/60">ARCH</span>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          その他のサービス — 5 cards, editorial list
      ────────────────────────────────────────── */}
      <section className="bg-arch-cream-raised py-20 md:py-24 border-t border-arch-rule">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-baseline justify-between mb-10 md:mb-12 border-b border-arch-rule pb-4">
            <p className="mono-label text-arch-moss">SERVICES — 全5事業</p>
            <p className="mono-micro text-arch-ink-muted hidden sm:block">RELATED</p>
          </div>
          <h2 className="display-jp text-2xl md:text-3xl text-arch-ink mb-10 md:mb-12">
            その他のサービス
          </h2>

          <ul className="divide-y divide-arch-rule border-t border-b border-arch-rule">
            {OTHER_SERVICES.map((s) => (
              <li key={s.href}>
                <Link
                  href={s.href}
                  className="group grid grid-cols-[auto_1fr_auto] items-center gap-5 md:gap-8 py-6 md:py-7 hover:bg-arch-cream transition-colors"
                >
                  <span className="mono-label text-arch-moss tabular-nums pl-1 md:pl-2">
                    {s.num}
                  </span>
                  <div>
                    <p className="display-jp text-base md:text-xl text-arch-ink group-hover:text-arch-forest transition-colors">
                      {s.new}
                    </p>
                    <p className="mono-micro text-arch-ink-muted mt-1">{s.old}</p>
                  </div>
                  <ArrowRight
                    size={18}
                    className="text-arch-moss group-hover:translate-x-1 transition-transform mr-1 md:mr-2"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          Footer — near-black editorial strip
      ────────────────────────────────────────── */}
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
              <p className="mono-micro text-arch-sage/60 mt-1">arch-yh.com</p>
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
