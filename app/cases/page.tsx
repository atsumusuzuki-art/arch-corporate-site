import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { CASES } from "@/lib/cases";
import { AREAS, AREAS_NOTE, absoluteUrl, OG_IMAGE } from "@/lib/site";

export const metadata: Metadata = {
  title: "支援実績｜地域と、確認できた数字だけを載せています",
  description:
    "合同会社ARCHの支援実績です。医院名は掲載せず、地域・確認済みの数字・支援内容のみを載せています。北海道札幌市、東京都世田谷区、東京都八王子市の3件を掲載しています。",
  alternates: { canonical: absoluteUrl("/cases") },
  openGraph: {
    type: "website",
    url: absoluteUrl("/cases"),
    title: "支援実績｜合同会社ARCH",
    description:
      "医院名は掲載せず、地域・確認済みの数字・支援内容のみを載せています。",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "支援実績｜合同会社ARCH" }],
  },
};

export default function CasesIndex() {
  return (
    <>
      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "支援実績" }]} />

      <PageHero
        eyebrow="CASES"
        title="地域と、確認できた数字だけを載せています。"
        lead="医院名は一切掲載していません。数字は確認できたものだけを書き、ARCH単独の成果としては扱いません。"
      />

      <section aria-labelledby="cases-heading" className="bg-arch-cream">
        <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-36 lg:px-10">
          <h2 id="cases-heading" className="sr-only">
            支援実績の一覧
          </h2>

          <ul className="border-t border-arch-rule">
            {CASES.map((c, i) => (
              <Reveal as="li" key={c.slug} delay={i * 80}>
                <Link
                  href={`/cases/${c.slug}`}
                  className="group grid gap-5 border-b border-arch-rule py-10 md:grid-cols-12 md:gap-8 md:py-14"
                >
                  <div className="md:col-span-4">
                    <p className="display-jp text-[clamp(1.25rem,3vw,1.75rem)] text-arch-forest">
                      {c.area}
                    </p>
                    <p className="mt-2 text-[0.95rem] leading-[1.8] text-arch-ink-soft">
                      {c.summary}
                    </p>
                  </div>

                  <div className="md:col-span-7">
                    <dl className="space-y-2">
                      {c.facts.map((f) => (
                        <div key={f.label} className="flex flex-wrap gap-x-4">
                          <dt className="min-w-[9rem] text-[0.95rem] text-arch-ink-muted">
                            {f.label}
                          </dt>
                          <dd className="text-base text-arch-ink">{f.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                  <div className="flex items-start md:col-span-1 md:justify-end">
                    <span className="inline-flex items-center gap-2 text-[0.95rem] text-arch-forest group-hover:underline">
                      詳細
                      <ArrowRight size={16} aria-hidden="true" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ────────────── ARCHが関わる地域 ────────────── */}
      <section
        aria-labelledby="areas-heading"
        className="border-t border-arch-rule bg-arch-cream-raised"
      >
        <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-36 lg:px-10">
          <Reveal>
            <h2
              id="areas-heading"
              className="display-jp text-[clamp(1.75rem,5vw,3rem)] leading-[1.3] text-arch-ink"
            >
              ARCHが関わる地域
            </h2>
            <ul className="mt-12 border-t border-arch-rule">
              {AREAS.map((a) => (
                <li
                  key={a}
                  className="border-b border-arch-rule py-6 text-[clamp(1.0625rem,2.4vw,1.375rem)] leading-[1.8] text-arch-ink"
                >
                  {a}
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-[720px] text-[0.95rem] leading-[1.9] text-arch-ink-soft">
              ※ {AREAS_NOTE}
            </p>
          </Reveal>
        </div>
      </section>

      <ContactForm idPrefix="cases" />
    </>
  );
}
