import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

const OTHER_SERVICES = [
  { num: "01", href: "/services/external-manager", title: "歯科医院の外部事務長とは", desc: "ARCHが取り組む役割と一般的なコンサルとの違い" },
  { num: "02", href: "/services/visit-dental-startup", title: "訪問歯科立ち上げ支援", desc: "施設連携・必要書類・スタッフ体制から現場導入まで" },
  { num: "03", href: "/services/facility-growth", title: "施設連携・利用者増加支援", desc: "施設はあるのに患者が増えない医院向け" },
  { num: "04", href: "/services/branch-startup", title: "分院立ち上げ支援", desc: "物件・機器・採用・HPまで横断的に" },
  { num: "05", href: "/services/fee-standards", title: "算定・施設基準支援", desc: "施設基準の届出・診療報酬改定・レセコン整理" },
  { num: "06", href: "/services/consulting", title: "料金プラン（月額3プラン）", desc: "顧問・外部事務長ライト・外部事務長" },
  { num: "07", href: "/services/sales", title: "施設連携・営業支援", desc: "施設対応導線・初診オペレーション" },
  { num: "08", href: "/bpo-service", title: "事務代行・BPO支援", desc: "書類・郵送・HP制作・業務DX" },
];

export default function ServicesLayout({
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
        {/* corner labels */}
        <div className="absolute top-6 left-6 md:top-8 md:left-10 pointer-events-none">
          <span className="mono-label text-arch-sage/70">CONTACT — 現場の状況をお聞かせください</span>
        </div>
        <div className="absolute top-6 right-6 md:top-8 md:right-10 pointer-events-none text-right">
          <span className="mono-micro text-arch-sage/60">NEXT STEP</span>
        </div>

        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <p className="mono-label text-arch-gold mb-6">無料相談</p>
          <h2 className="display-jp text-3xl sm:text-4xl md:text-5xl text-arch-cream mb-6 leading-[1.25]">
            医院の課題を、
            <br />
            まずは一度お聞かせください。
          </h2>
          <p className="text-base md:text-lg text-arch-sage/90 leading-loose max-w-2xl mb-10">
            訪問歯科、分院展開、算定、採用、HP改善など、医院ごとに必要な支援は異なります。現在の状況を伺った上で、最適な関わり方をご提案します。
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

        {/* bottom mono rule */}
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
            <p className="mono-label text-arch-moss">SERVICES — 歯科医院の外部事務長</p>
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
                      {s.title}
                    </p>
                    <p className="mono-micro text-arch-ink-muted mt-1">{s.desc}</p>
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
