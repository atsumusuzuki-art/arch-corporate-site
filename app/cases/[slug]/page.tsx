import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import {
  CASES,
  HACHIOJI_COMMENT,
  HACHIOJI_COMMENT_APPROVED,
  getCase,
} from "@/lib/cases";
import { OG_IMAGE, absoluteUrl } from "@/lib/site";

export function generateStaticParams() {
  return CASES.map((c) => ({ slug: c.slug }));
}

export const dynamicParams = false;

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const item = getCase(slug);
  if (!item) return {};

  const path = `/cases/${item.slug}`;
  return {
    title: item.title,
    description: item.description,
    alternates: { canonical: absoluteUrl(path) },
    openGraph: {
      type: "article",
      url: absoluteUrl(path),
      title: item.title,
      description: item.description,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: item.title }],
    },
  };
}

const SERVICE_LABEL = {
  "external-manager": "外部事務長",
  "visit-dental-consulting": "訪問歯科コンサルティング",
} as const;

export default async function CasePage({ params }: Params) {
  const { slug } = await params;
  const item = getCase(slug);
  if (!item) notFound();

  const others = CASES.filter((c) => c.slug !== item.slug);
  const showComment = item.slug === "hachioji-external-manager" && HACHIOJI_COMMENT_APPROVED;

  return (
    <>
      <Breadcrumb
        items={[
          { label: "ホーム", href: "/" },
          { label: "支援実績", href: "/cases" },
          { label: item.area },
        ]}
      />

      <PageHero eyebrow="CASE" title={item.area} lead={item.summary} />

      {/* ────────────── 確認できた数字 ────────────── */}
      <section aria-labelledby="facts-heading" className="bg-arch-cream">
        <div className="mx-auto max-w-[720px] px-6 py-24 md:py-36 lg:px-10">
          <Reveal>
            <h2
              id="facts-heading"
              className="display-jp text-[clamp(1.5rem,4.5vw,2.25rem)] leading-[1.3] text-arch-ink"
            >
              確認できた内容
            </h2>
            <dl className="mt-10 border-t border-arch-rule">
              {item.facts.map((f) => (
                <div
                  key={f.label}
                  className="grid gap-1 border-b border-arch-rule py-5 sm:grid-cols-12 sm:gap-6"
                >
                  <dt className="text-[0.95rem] text-arch-ink-muted sm:col-span-5">
                    {f.label}
                  </dt>
                  <dd className="text-[1.0625rem] leading-[1.8] text-arch-ink sm:col-span-7">
                    {f.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal>
            <h2 className="display-jp mt-20 text-[clamp(1.5rem,4.5vw,2.25rem)] leading-[1.3] text-arch-ink">
              支援内容
            </h2>
            <ul className="mt-10 border-t border-arch-rule">
              {item.work.map((w) => (
                <li
                  key={w}
                  className="border-b border-arch-rule py-5 text-[1.0625rem] leading-[1.8] text-arch-ink"
                >
                  {w}
                </li>
              ))}
            </ul>
          </Reveal>

          {item.notes.length > 0 && (
            <Reveal>
              <div className="mt-16 border-l-4 border-arch-rule bg-arch-cream-raised px-6 py-6">
                <p className="text-sm text-arch-ink-muted">数字の読み方について</p>
                <ul className="mt-3 space-y-3">
                  {item.notes.map((n) => (
                    <li key={n} className="text-base leading-[1.9] text-arch-ink-soft">
                      {n}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          )}

          {/* 院長コメント：公開承認が取れている場合のみ表示する */}
          {showComment && (
            <Reveal>
              <figure className="mt-16 border-l-4 border-arch-gold bg-arch-cream-raised px-6 py-8">
                <blockquote className="text-[1.0625rem] leading-[1.9] text-arch-ink">
                  {HACHIOJI_COMMENT}
                </blockquote>
                <figcaption className="mt-4 text-[0.95rem] text-arch-ink-muted">
                  {item.area}／院長
                </figcaption>
              </figure>
            </Reveal>
          )}

          <Reveal>
            <div className="mt-16 border border-arch-rule bg-arch-cream-raised p-6 md:p-8">
              <p className="text-sm text-arch-ink-muted">関連するサービス</p>
              <Link
                href={`/services/${item.service}`}
                className="display-jp mt-3 inline-flex min-h-11 items-center text-xl text-arch-forest underline underline-offset-8 hover:text-arch-forest-soft"
              >
                {SERVICE_LABEL[item.service]}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ────────────── ほかの支援実績 ────────────── */}
      <section
        aria-labelledby="others-heading"
        className="border-t border-arch-rule bg-arch-cream-raised"
      >
        <div className="mx-auto max-w-[1200px] px-6 py-20 md:py-28 lg:px-10">
          <h2 id="others-heading" className="display-jp text-xl text-arch-ink">
            ほかの支援実績
          </h2>
          <ul className="mt-8 border-t border-arch-rule">
            {others.map((o) => (
              <li key={o.slug} className="border-b border-arch-rule">
                <Link
                  href={`/cases/${o.slug}`}
                  className="flex flex-wrap items-baseline gap-x-4 py-5 text-[0.95rem] leading-[1.8] text-arch-ink hover:text-arch-forest"
                >
                  <span className="display-jp text-lg text-arch-forest">{o.area}</span>
                  <span>{o.summary}</span>
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="/cases"
            className="mt-10 inline-flex min-h-14 items-center gap-4 border border-arch-forest px-8 text-base font-bold text-arch-forest transition-colors hover:bg-arch-forest hover:text-arch-cream"
          >
            支援実績の一覧へ
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </section>

      <ContactForm
        idPrefix="case"
        defaultTopic={
          item.service === "external-manager" ? "外部事務長" : "訪問歯科コンサルティング"
        }
      />
    </>
  );
}
