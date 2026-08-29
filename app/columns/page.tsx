import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { COLUMN_METAS, columnHref } from "@/lib/columns";
import { absoluteUrl, OG_IMAGE } from "@/lib/site";

export const metadata: Metadata = {
  title: "コラム｜歯科医院の運営と訪問歯科の現場から",
  description:
    "歯科医院の運営と訪問歯科の現場で実際に起きていることを、外部事務長の立場から書いています。書類、施設連携、採用、数字の見方など、院長が判断するときの材料になる記事をまとめました。",
  alternates: { canonical: absoluteUrl("/columns") },
  openGraph: {
    type: "website",
    url: absoluteUrl("/columns"),
    title: "コラム｜歯科医院の運営と訪問歯科の現場から",
    description:
      "歯科医院の運営と訪問歯科の現場で実際に起きていることを、外部事務長の立場から書いています。",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "コラム｜合同会社ARCH" }],
  },
};

function fmt(date: string) {
  const [y, m, d] = date.split("-");
  return `${y}.${m}.${d}`;
}

export default function ColumnsIndex() {
  return (
    <>
      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "コラム" }]} />

      <PageHero
        eyebrow="COLUMN"
        title="現場で起きたことを、そのまま書いています。"
        lead="歯科医院の運営と訪問歯科の現場で、実際に相談を受けたこと・確認したことを書いています。一般論ではなく、院長が判断するときの材料になることを基準にしています。"
      />

      <section className="bg-arch-cream">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-10 py-24 md:py-36">
          <ul className="border-t border-arch-rule">
            {COLUMN_METAS.map((c, i) => (
              <Reveal as="li" key={c.slug} delay={Math.min(i, 4) * 60}>
                <Link
                  href={columnHref(c)}
                  className="group grid gap-3 border-b border-arch-rule py-8 md:grid-cols-12 md:gap-8 md:py-10"
                >
                  <div className="md:col-span-3">
                    <p className="mono-micro text-arch-moss">{c.category}</p>
                    <p className="mono-micro mt-2 text-arch-ink-muted tabular-nums">
                      {fmt(c.published)}
                    </p>
                  </div>
                  <div className="md:col-span-9">
                    <h2 className="display-jp text-[1.125rem] leading-[1.6] text-arch-ink group-hover:text-arch-forest md:text-[1.375rem]">
                      {c.title}
                    </h2>
                    <p className="mt-3 text-[0.95rem] leading-[1.9] text-arch-ink-soft">
                      {c.conclusion}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </ul>

          {/* 2 本柱への内部リンク */}
          <div className="mt-16 grid gap-4 sm:grid-cols-2">
            <Link
              href="/services/external-manager"
              className="border border-arch-rule bg-arch-cream-raised p-8 hover:border-arch-forest"
            >
              <p className="mono-micro text-arch-ink-muted">SERVICE</p>
              <p className="display-jp mt-3 text-xl text-arch-forest">外部事務長</p>
              <p className="mt-3 text-[0.95rem] leading-[1.8] text-arch-ink-soft">
                院長が抱えている経営実務を整理し、医院が回り続ける体制をつくる。
              </p>
            </Link>
            <Link
              href="/services/visit-dental-consulting"
              className="border border-arch-rule bg-arch-cream-raised p-8 hover:border-arch-forest"
            >
              <p className="mono-micro text-arch-ink-muted">SERVICE</p>
              <p className="display-jp mt-3 text-xl text-arch-forest">
                訪問歯科コンサルティング
              </p>
              <p className="mt-3 text-[0.95rem] leading-[1.8] text-arch-ink-soft">
                訪問歯科を、回り続ける事業にする。
              </p>
            </Link>
          </div>
        </div>
      </section>

      <ContactForm idPrefix="columns" />
    </>
  );
}
