import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

/* ================================================================
   ARCH NOTE — 共通レイアウト
   各 /columns/{slug} ページの上下に header / CTA / 関連メモ / footer
   ================================================================ */

/* 全ノートのナビゲーション用リスト（page.tsx と同期） */
const ALL_NOTES = [
  { slug: "waiting-room-visual", category: "現場運営", title: "その待合室、患者さんに「何も伝わっていない」かもしれない" },
  { slug: "sns-dx-recruitment", category: "実務改善・DX", title: "「ハローワークに出しておけば来る」時代は終わった" },
  { slug: "communication-timelag", category: "訪問歯科", title: "「返信は夕方になります」——その一言が信頼を削っている" },
  { slug: "facility-collaboration", category: "訪問歯科", title: "施設が本当に求めているのは「治療の腕」ではない" },
  { slug: "broker-trap", category: "経営改善", title: "「紹介しますよ」に依存した医院が崩れる理由" },
  { slug: "turnover-strategy", category: "現場運営", title: "「あの人が辞めたら終わる」状態から抜け出せていますか？" },
  { slug: "staff-role", category: "現場運営", title: "優秀なスタッフが辞めない医院の秘密「係活動」マネジメント" },
  { slug: "invisible-profit", category: "経営改善", title: "現場が見落としている「見えない利益」" },
  { slug: "profit-trap", category: "経営改善", title: "忙しいのに利益が残らない医院。現場が見落としている罠" },
  { slug: "document-hell", category: "実務改善・DX", title: "歯科医院が陥る「書類地獄」" },
  { slug: "facility-needs", category: "訪問歯科", title: "介護施設における「口腔ケアの序列」" },
  { slug: "communication", category: "訪問歯科", title: "介護現場で嫌われる衛生士の共通点" },
  { slug: "sales-trap", category: "訪問歯科", title: "院長自らの飛び込み営業の落とし穴" },
];

export default function ColumnsLayout({
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
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-3 md:py-4 flex items-center justify-between gap-4">
          <Link
            href="/columns"
            className="inline-flex items-center gap-2 mono-label text-arch-sage hover:text-white transition-colors min-w-0"
          >
            <ArrowLeft size={14} strokeWidth={2} />
            <span className="truncate">ARCH NOTE / 一覧</span>
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

      {/* Article Content */}
      <main>{children}</main>

      {/* ──────────────────────────────────────────
          CTA — deep forest editorial band
      ────────────────────────────────────────── */}
      <section className="relative bg-arch-forest text-arch-cream py-24 md:py-32 overflow-hidden border-t border-arch-rule-dark">
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

        <div className="absolute bottom-6 left-6 md:bottom-8 md:left-10 pointer-events-none">
          <span className="mono-label text-arch-sage/60">ARCH</span>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          関連ノート — editorial list
      ────────────────────────────────────────── */}
      <section className="bg-arch-cream-raised py-20 md:py-24 border-t border-arch-rule">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-baseline justify-between mb-10 md:mb-12 border-b border-arch-rule pb-4">
            <p className="mono-label text-arch-moss">ARCH NOTE — 現場メモ</p>
            <Link
              href="/columns"
              className="mono-label text-arch-forest hover:text-arch-forest-soft inline-flex items-center gap-2"
            >
              すべて読む <ArrowRight size={12} />
            </Link>
          </div>
          <h2 className="display-jp text-2xl md:text-3xl text-arch-ink mb-10 md:mb-12">
            他の現場メモも読む
          </h2>

          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-arch-rule">
            {ALL_NOTES.slice(0, 6).map((n) => (
              <li key={n.slug} className="border-b border-r border-arch-rule">
                <Link
                  href={`/columns/${n.slug}`}
                  className="group block py-7 md:py-8 px-5 md:px-6 h-full hover:bg-arch-cream transition-colors"
                >
                  <p className="mono-label text-arch-moss mb-3">{n.category}</p>
                  <h3 className="display-jp text-base md:text-lg text-arch-ink group-hover:text-arch-forest transition-colors leading-snug">
                    {n.title}
                  </h3>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          Footer
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
