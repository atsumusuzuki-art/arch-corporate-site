import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SupportAreaList from "@/components/SupportAreaList";
import { COMPANY, SITE_URL, absoluteUrl, OG_IMAGE } from "@/lib/site";

export const metadata: Metadata = {
  title: "会社概要｜合同会社ARCHと代表 鈴木 集について",
  description:
    "合同会社ARCHの会社概要と代表紹介です。2024年2月設立、代表は鈴木 集。元小学校教員から歯科事務局長を経て、訪問歯科の立ち上げに携わり、合同会社ARCHを設立しました。",
  alternates: { canonical: absoluteUrl("/company") },
  openGraph: {
    type: "website",
    url: absoluteUrl("/company"),
    title: "会社概要｜合同会社ARCH",
    description: "合同会社ARCHの会社概要と、代表 鈴木 集の経歴です。",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "会社概要｜合同会社ARCH" }],
  },
};

/* 会社情報（lib/site.ts の値と構造化データを一致させる） */
const PROFILE = [
  { label: "会社名", value: COMPANY.name },
  { label: "設立", value: COMPANY.foundedLabel },
  { label: "代表", value: COMPANY.representative },
  { label: "所在地", value: COMPANY.addressLabel },
  { label: "対応地域", value: COMPANY.areaServed },
  { label: "事業内容", value: COMPANY.business },
  { label: "メール", value: COMPANY.email },
  { label: "公式サイト", value: SITE_URL },
];

/* 代表経歴 */
const CAREER = [
  "元小学校教員",
  "横浜市の広域医療法人で歯科事務局長",
  "北海道で訪問歯科を立ち上げ、6か月で黒字化",
  "合同会社ARCH設立",
];

export default function CompanyPage() {
  return (
    <>
      <Breadcrumb items={[{ label: "ホーム", href: "/" }, { label: "会社概要" }]} />

      <PageHero
        eyebrow="COMPANY"
        title="現場を知っているから、助言だけで終わらせない。"
        lead="歯科医院の外部事務長として、院長が一人で抱えている経営実務を整理し、医院が回り続けるところまで一緒に動きます。"
      />

      {/* ────────────── 代表紹介 ────────────── */}
      <section aria-labelledby="representative-heading" className="bg-arch-cream">
        <div className="mx-auto max-w-[1200px] px-6 py-24 md:py-36 lg:px-10">
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <Image
                  src="/images/ceo.jpg"
                  alt={`合同会社ARCH 代表 ${COMPANY.representative}`}
                  width={720}
                  height={900}
                  sizes="(max-width: 1023px) 100vw, 40vw"
                  className="w-full object-cover"
                />
                <p className="mt-5 text-[0.95rem] leading-[1.8] text-arch-ink-soft">
                  合同会社ARCH 代表 {COMPANY.representative}（{COMPANY.representativeEn}）
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={80}>
                <h2
                  id="representative-heading"
                  className="display-jp text-[clamp(1.5rem,4.5vw,2.25rem)] leading-[1.4] text-arch-ink"
                >
                  代表 {COMPANY.representative}
                </h2>

                <div className="mt-10 max-w-[720px] space-y-7 text-[1.0625rem] leading-[1.9] text-arch-ink-soft">
                  <p>
                    小学校教員から、歯科医院の経営実務へ。医療法人の歯科事務局長として、院内運営、訪問歯科、施設連携、スタッフ、数字の管理に携わってきました。
                  </p>
                  <p>
                    歯科医院では、院長が診療以外の仕事まで一人で抱えています。その仕事を整理し、医院が回り続けるところまで一緒に動くため、合同会社ARCHを設立しました。
                  </p>
                </div>

                <h3 className="display-jp mt-14 text-xl text-arch-ink">経歴</h3>
                <ol className="mt-6 border-t border-arch-rule">
                  {CAREER.map((c) => (
                    <li
                      key={c}
                      className="border-b border-arch-rule py-5 text-base leading-[1.8] text-arch-ink"
                    >
                      {c}
                    </li>
                  ))}
                </ol>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────── 会社情報 ────────────── */}
      <section
        aria-labelledby="profile-heading"
        className="border-t border-arch-rule bg-arch-cream-raised"
      >
        <div className="mx-auto max-w-[720px] px-6 py-24 md:py-36 lg:px-10">
          <Reveal>
            <h2
              id="profile-heading"
              className="display-jp text-[clamp(1.5rem,4.5vw,2.25rem)] leading-[1.3] text-arch-ink"
            >
              会社概要
            </h2>
            <dl className="mt-10 border-t border-arch-rule">
              {PROFILE.map((p) => (
                <div
                  key={p.label}
                  className="grid gap-1 border-b border-arch-rule py-5 sm:grid-cols-12 sm:gap-6"
                >
                  <dt className="text-[0.95rem] text-arch-ink-muted sm:col-span-4">
                    {p.label}
                  </dt>
                  <dd className="text-[1.0625rem] leading-[1.8] text-arch-ink sm:col-span-8">
                    {p.label === "メール" ? (
                      <a
                        href={`mailto:${p.value}`}
                        className="underline underline-offset-4 hover:text-arch-forest"
                      >
                        {p.value}
                      </a>
                    ) : (
                      p.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ────────────── 関わる地域 ────────────── */}
      <section
        aria-labelledby="areas-heading"
        className="border-t border-arch-rule bg-arch-cream"
      >
        <div className="mx-auto max-w-[720px] px-6 py-24 md:py-36 lg:px-10">
          <Reveal>
            <h2
              id="areas-heading"
              className="display-jp text-[clamp(1.5rem,4.5vw,2.25rem)] leading-[1.3] text-arch-ink"
            >
              支援エリア
            </h2>
            <SupportAreaList />
            <p className="mt-10 text-base leading-[1.9] text-arch-ink-soft">
              実際にどのような支援をしているかは
              <Link
                href="/cases"
                className="underline underline-offset-4 hover:text-arch-forest"
              >
                支援実績
              </Link>
              をご覧ください。
            </p>
          </Reveal>
        </div>
      </section>

      <ContactForm idPrefix="company" />
    </>
  );
}
