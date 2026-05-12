import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CornerMarkers, { SectionTag } from "@/components/CornerMarkers";

export const metadata = {
  title: "ARCH NOTE — 訪問歯科の現場メモ｜合同会社ARCH",
  description:
    "訪問歯科の現場で起きていることを、外部事務長の視点で書き留めた現場メモ。営業、施設連携、レセプト、採用、組織、業務改善まで、現場運営に必要なリアルを共有します。",
};

/* ================================================================
   ARCH NOTE — 訪問歯科の現場メモ
   ＝ /columns 一覧ページ（旧 SEO 記事色を弱め、現場メモの空気感に）
   ================================================================ */

type Note = {
  slug: string;
  category: string;
  title: string;
  // 公開日（あれば。なければ undefined）
  date?: string;
};

/* 新しい順（執筆日不明分は推定の並び。後で実日付に差し替え可） */
const NOTES: Note[] = [
  {
    slug: "waiting-room-visual",
    category: "現場運営",
    title: "その待合室、患者さんに「何も伝わっていない」かもしれない。モニターと掲示物を戦略資産に変える方法",
    date: "2026-04-18",
  },
  {
    slug: "sns-dx-recruitment",
    category: "実務改善・DX",
    title: "「ハローワークに出しておけば来る」時代は終わった。歯科医院の採用を変えるSNS×DX戦略",
    date: "2026-04-18",
  },
  {
    slug: "communication-timelag",
    category: "訪問歯科",
    title: "「返信は夕方になります」——その一言が、施設の信頼を静かに削っている",
    date: "2026-04-18",
  },
  {
    slug: "facility-collaboration",
    category: "訪問歯科",
    title: "施設が本当に求めているのは「治療の腕」ではない。訪問歯科の施設連携で選ばれる医院の条件",
    date: "2026-04-18",
  },
  {
    slug: "broker-trap",
    category: "経営改善",
    title: "「紹介しますよ」に依存した医院が崩れる理由",
  },
  {
    slug: "turnover-strategy",
    category: "現場運営",
    title: "「あの人が辞めたら終わる」状態から、抜け出せていますか？",
  },
  {
    slug: "staff-role",
    category: "現場運営",
    title: "優秀なスタッフが辞めない医院の秘密。元小学校教諭が教える「係活動」マネジメント",
  },
  {
    slug: "invisible-profit",
    category: "経営改善",
    title: "現場が見落としている「見えない利益」",
  },
  {
    slug: "profit-trap",
    category: "経営改善",
    title: "忙しいのに利益が残らない医院。現場が見落としている罠",
  },
  {
    slug: "document-hell",
    category: "実務改善・DX",
    title: "歯科医院が陥る「書類地獄」。ご家族からのクレームを防ぐ唯一の解決策",
  },
  {
    slug: "facility-needs",
    category: "訪問歯科",
    title: "介護施設における「口腔ケアの序列」。歯医者が現場で煙たがられる本当の理由",
  },
  {
    slug: "communication",
    category: "訪問歯科",
    title: "介護現場で嫌われる衛生士の共通点。良かれと思った「その指導」、実は大迷惑です。",
  },
  {
    slug: "sales-trap",
    category: "訪問歯科",
    title: "院長自らの飛び込み営業。そのパンフレット、実は「その他大勢」の束に埋もれています",
  },
];

/* 日付フォーマット（YYYY-MM-DD → YYYY.MM.DD） */
const fmt = (d?: string) => (d ? d.replace(/-/g, ".") : "—");

export default function ArchNoteIndex() {
  return (
    <article className="bg-arch-cream">
      {/* ──────────────────────────────────────────
          HERO — editorial cover, deep forest
      ────────────────────────────────────────── */}
      <section className="relative bg-arch-forest text-arch-cream overflow-hidden pt-24 md:pt-32 pb-20 md:pb-28">
        <CornerMarkers
          topRight="ARCH NOTE — 現場メモ"
          bottomLeft="ARCHIVE"
          bottomRight={`${String(NOTES.length).padStart(2, "0")} NOTES`}
          theme="dark"
        />
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <SectionTag category="ARCH NOTE" number="—" label="訪問歯科の現場メモ" theme="dark" />

          <div className="mt-8 md:mt-12 grid md:grid-cols-12 gap-8 md:gap-12 items-end">
            <div className="md:col-span-8">
              <h1 className="display-jp text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl text-arch-cream leading-[1.1]">
                現場から見える、
                <br />
                訪問歯科の<span className="text-arch-gold">リアル</span>。
              </h1>
            </div>
            <div className="md:col-span-4">
              <div className="border-l-2 border-arch-gold pl-5">
                <p className="mono-label text-arch-gold mb-3">ABOUT</p>
                <p className="text-base md:text-lg text-arch-sage leading-loose">
                  外部事務長の視点で
                  <br />
                  書き留めた、運営の現場メモ。
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14 md:mt-20 border-t border-arch-rule-dark pt-8">
            <p className="text-sm md:text-base text-arch-sage/90 leading-loose max-w-2xl">
              SEO 記事ではなく、医院の運営現場で実際に起きていることを、その都度書き留めた現場メモです。営業、施設連携、レセプト、採用、組織、業務改善——訪問歯科を回し続けるために必要なリアルを共有します。
            </p>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          NOTES — list
      ────────────────────────────────────────── */}
      <section className="bg-arch-cream py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-baseline justify-between border-b border-arch-rule pb-4 mb-12 md:mb-16">
            <p className="mono-label text-arch-moss">NOTES — すべての現場メモ</p>
            <p className="mono-micro text-arch-ink-muted hidden sm:block">
              {String(NOTES.length).padStart(2, "0")} ENTRIES
            </p>
          </div>

          <ul className="border-t border-arch-rule">
            {NOTES.map((n, i) => (
              <li key={n.slug} className="border-b border-arch-rule">
                <Link
                  href={`/columns/${n.slug}`}
                  className="group grid grid-cols-12 gap-4 md:gap-8 py-7 md:py-8 hover:bg-arch-cream-raised transition-colors -mx-3 px-3"
                >
                  <div className="col-span-2 md:col-span-1">
                    <span className="mono-micro text-arch-ink-muted tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="col-span-10 md:col-span-2">
                    <p className="mono-label text-arch-moss">{n.category}</p>
                  </div>
                  <div className="hidden md:block md:col-span-2">
                    <p className="mono-micro text-arch-ink-muted tabular-nums">{fmt(n.date)}</p>
                  </div>
                  <div className="col-span-12 md:col-span-6">
                    <h2 className="text-base md:text-lg font-bold leading-relaxed text-arch-ink group-hover:text-arch-forest transition-colors">
                      {n.title}
                    </h2>
                  </div>
                  <div className="hidden md:flex col-span-1 items-start justify-end pt-1">
                    <ArrowRight
                      size={16}
                      className="text-arch-ink-muted group-hover:text-arch-forest group-hover:translate-x-1 transition-all"
                    />
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          <p className="mono-micro text-arch-ink-muted mt-10 leading-loose max-w-2xl">
            ※ 現場で得られた手触りをそのまま書き留めたメモです。SEO の構造化記事ではなく、医院運営に役立つかどうかだけを基準にしています。
          </p>
        </div>
      </section>
    </article>
  );
}
