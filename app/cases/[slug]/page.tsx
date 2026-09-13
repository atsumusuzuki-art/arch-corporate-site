import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
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
import Cta from "@/components/ui/Cta";
import { CONTAINER, SECTION_Y } from "@/lib/ui";

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

      {/* ────────────── Situation → ARCHの関与 → 実装したこと → 確認できた結果 → 現在地 ────────────── */}
      <section aria-label="支援の内容" className="bg-arch-white">
        <div className={`${CONTAINER} ${SECTION_Y}`}>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* 大きな数字（確認済みの値だけ） */}
            <Reveal className="lg:col-span-4">
              <p className="mono-micro flex items-center gap-3 text-arch-green">
                <span>CASE</span>
                <span aria-hidden="true" className="h-px w-6 bg-arch-green/50" />
                <span>{item.code}</span>
              </p>
              <p className="mt-6">
                {item.headline.numeric ? (
                  <span className="flex items-baseline gap-1.5">
                    <span className="num-en text-[clamp(3.25rem,7vw,5rem)] font-medium leading-none text-arch-deep">
                      {item.headline.value}
                    </span>
                    <span className="text-xl font-bold text-arch-deep">{item.headline.unit}</span>
                  </span>
                ) : (
                  <span className="display-jp block text-[clamp(1.875rem,3.4vw,2.5rem)] leading-tight text-arch-deep">
                    {item.headline.value}
                  </span>
                )}
                <span className="mt-3 block text-[0.875rem] leading-[1.7] text-arch-ink-muted">
                  {item.headline.caption}
                </span>
              </p>
            </Reveal>

            <div className="lg:col-span-8">
              {(
                [
                  ["SITUATION", "状況", <p key="s">{item.story.problem}</p>],
                  ["INVOLVEMENT", "ARCHの関与", <p key="a">{item.story.action}</p>],
                  [
                    "IMPLEMENTED",
                    "実装したこと",
                    <ul key="w" className="border-t border-arch-line">
                      {item.work.map((w) => (
                        <li key={w} className="border-b border-arch-line py-3">
                          {w}
                        </li>
                      ))}
                    </ul>,
                  ],
                  [
                    "RESULT",
                    "確認できた結果",
                    <dl key="f" className="border-t border-arch-line">
                      {item.facts.map((f) => (
                        <div
                          key={f.label}
                          className="grid gap-1 border-b border-arch-line py-3 sm:grid-cols-12 sm:gap-6"
                        >
                          <dt className="text-[0.9rem] text-arch-ink-muted sm:col-span-5">{f.label}</dt>
                          <dd className="font-bold text-arch-ink sm:col-span-7">{f.value}</dd>
                        </div>
                      ))}
                    </dl>,
                  ],
                  ["NOW", "現在地", <p key="n">{item.status}</p>],
                ] as const
              ).map(([en, label, content], i) => (
                <Reveal key={en} delay={Math.min(i, 3) * 50}>
                  <div className={`grid gap-3 border-t border-arch-deep py-8 md:grid-cols-12 md:gap-8 ${i === 4 ? "border-b" : ""}`}>
                    <div className="md:col-span-4">
                      <p className="mono-micro text-arch-green">{en}</p>
                      <h2 className="display-jp mt-2 text-[1.125rem] text-arch-ink">{label}</h2>
                    </div>
                    <div className="text-[1.0rem] leading-[1.9] text-arch-ink-soft md:col-span-8">
                      {content}
                    </div>
                  </div>
                </Reveal>
              ))}

              {item.notes.length > 0 && (
                <Reveal>
                  <div className="mt-10 border-l-2 border-arch-deep bg-arch-pale px-6 py-5">
                    <p className="text-[0.875rem] font-bold text-arch-deep">数字の読み方について</p>
                    <ul className="mt-3 space-y-2">
                      {item.notes.map((n) => (
                        <li key={n} className="text-[0.95rem] leading-[1.9] text-arch-ink">
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
                  <figure className="mt-10 border-l-2 border-arch-green bg-arch-paper px-6 py-8">
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
                <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-arch-line pt-8">
                  <p className="text-sm text-arch-ink-muted">関連するサービス</p>
                  <Cta href={`/services/${item.service}`} variant="text">
                    {SERVICE_LABEL[item.service]}
                  </Cta>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────── ほかの支援実績 ────────────── */}
      <section
        aria-labelledby="others-heading"
        className="border-t border-arch-line bg-arch-paper"
      >
        <div className={`${CONTAINER} py-[64px] md:py-[96px]`}>
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
          <Cta href="/cases" variant="secondary" className="mt-10">
            支援実績の一覧へ
          </Cta>
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
