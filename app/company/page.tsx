import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import SupportAreaList from "@/components/SupportAreaList";
import BrandSignature from "@/components/brand/BrandSignature";
import SectionHeader from "@/components/ui/SectionHeader";
import { BODY, CONTAINER, PROSE_W, SECTION_Y } from "@/lib/ui";
import {
  COMPANY,
  PHILOSOPHY,
  REPRESENTATIVE_ROLES,
  SITE_URL,
  absoluteUrl,
  OG_IMAGE,
} from "@/lib/site";

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

/* 会社情報（lib/site.ts の値と構造化データを一致させる）
   迷惑メール対策のため、受信用アドレスは載せず、問い合わせフォームへ誘導する。 */
const PROFILE = [
  { label: "会社名", value: COMPANY.name },
  { label: "設立", value: COMPANY.foundedLabel },
  { label: "代表", value: COMPANY.representative },
  { label: "所在地", value: COMPANY.addressLabel },
  { label: "対応地域", value: COMPANY.areaServed },
  { label: "事業内容", value: COMPANY.business },
  { label: "お問い合わせ", value: "初回適性相談のフォーム", href: "#contact" },
  { label: "公式サイト", value: SITE_URL },
];

/* 代表経歴 */
const CAREER = [
  "元小学校教員",
  "横浜市の広域医療法人で歯科事務局長",
  "北海道で訪問歯科を立ち上げ、6か月で黒字化",
  "合同会社ARCH設立",
];

/* ARCHが引き受けない仕事（ARCHフィロソフィー Ver.2.0「断る方向」より） */
const NOT_ARCH = [
  "患者の紹介・囲い込み",
  "成果の保証",
  "単発の作業代行・便利屋としての仕事",
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

      {/* ────────────── 1. ARCHの存在意義 ────────────── */}
      <section aria-labelledby="purpose-heading" className="bg-arch-white">
        <div className={`${CONTAINER} ${SECTION_Y}`}>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-4">
              <SectionHeader no="01" label="PURPOSE" id="purpose-heading" title="ARCHの存在意義" />
            </Reveal>
            <Reveal delay={60} className="lg:col-span-8">
              <p className="serif-jp text-[clamp(1.375rem,2.8vw,2rem)] leading-[1.75] text-arch-ink">
                <span className="block">地域の歯科医院が、</span>
                <span className="block">正しい訪問歯科と医院運営を</span>
                <span className="block">続けられる状態をつくる。</span>
              </p>
              <p className={`mt-8 ${PROSE_W} ${BODY}`}>
                ARCHは、訪問歯科を立ち上げること自体を目的にしていません。患者さん・ご家族・施設・地域医療にとって正しい形で、医院が続けられることを目的にしています。
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ────────────── 2. ARCHの正体 ────────────── */}
      <section aria-labelledby="identity-heading" className="border-t border-arch-line bg-arch-paper">
        <div className={`${CONTAINER} ${SECTION_Y}`}>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <Reveal className="lg:col-span-4">
              <SectionHeader no="02" label="IDENTITY" id="identity-heading" title="ARCHの正体" />
            </Reveal>
            <Reveal delay={60} className="lg:col-span-8">
              <BrandSignature />
              <p className="display-jp mt-10 text-[clamp(1.1875rem,2.2vw,1.5rem)] leading-[1.75] text-arch-ink">
                訪問歯科を入口に、歯科医院の立ち上げ・運営・人材・施設連携・経営判断・承継を支える、外部事務長の会社です。
              </p>
              <div className={`mt-8 ${PROSE_W} space-y-5 ${BODY}`}>
                <p>
                  DENTAL OPERATIONS PARTNER は、社名やサービス名ではありません。
                  助言だけでなく、医院の経営と運営を実際に動かすパートナーであるという、ARCHの立ち位置を表す言葉です。日本語では「歯科医院の外部事務長」と名乗っています。
                </p>
                <p>
                  {PHILOSOPHY.mainLines.join("")}
                </p>
              </div>

              <div className="mt-10 border-t border-arch-line pt-8">
                <h3 className="display-jp text-[1.0625rem] text-arch-ink">ARCHが引き受けない仕事</h3>
                <ul className="mt-4 border-t border-arch-line">
                  {NOT_ARCH.map((n) => (
                    <li key={n} className="border-b border-arch-line py-3 text-[0.98rem] text-arch-ink">
                      {n}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ────────────── 3. 代表 ────────────── */}
      <section aria-labelledby="representative-heading" className="border-t border-arch-line bg-arch-white">
        <div className={`${CONTAINER} ${SECTION_Y}`}>
          <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                {/* width / height は元画像の実寸。切り取らずに全体を見せる */}
                <Image
                  src="/images/ceo.jpg"
                  alt={`合同会社ARCH 代表 ${COMPANY.representative}`}
                  width={1086}
                  height={1448}
                  sizes="(max-width: 1023px) 100vw, 40vw"
                  className="w-full rounded-[2px] object-cover"
                />
                <p className="mt-4 text-[0.875rem] leading-[1.8] text-arch-ink-muted">
                  合同会社ARCH 代表 {COMPANY.representative}（{COMPANY.representativeEn}）
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={80}>
                <SectionHeader
                  no="03"
                  label="REPRESENTATIVE"
                  id="representative-heading"
                  title={`代表 ${COMPANY.representative}`}
                />

                <div className={`mt-8 ${PROSE_W} space-y-6 ${BODY}`}>
                  <p>
                    小学校教員から、歯科医院の経営実務へ。医療法人の歯科事務局長として、院内運営、訪問歯科、施設連携、スタッフ、数字の管理に携わってきました。
                  </p>
                  <p>
                    歯科医院では、院長が診療以外の仕事まで一人で抱えています。その仕事を整理し、医院が回り続けるところまで一緒に動くため、合同会社ARCHを設立しました。
                  </p>
                </div>

                <h3 className="display-jp mt-12 text-[1.125rem] text-arch-ink">経歴</h3>
                <ol className="mt-4 border-t border-arch-deep">
                  {CAREER.map((c) => (
                    <li
                      key={c}
                      className="border-b border-arch-line py-4 text-base leading-[1.8] text-arch-ink"
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

      {/* ────────────── 4. 代表の役割 ────────────── */}
      <section aria-labelledby="role-heading" className="border-t border-arch-line bg-arch-paper">
        <div className={`${CONTAINER} ${SECTION_Y}`}>
          <Reveal>
            <SectionHeader
              no="04"
              label="ROLE"
              id="role-heading"
              title="代表の役割"
              lead={
                <p>
                  代表の時間は、代表にしかできない仕事に使います。
                  繰り返し発生する実務は、仕組みとして次の担い手へ移していきます。
                </p>
              }
            />
          </Reveal>
          <div className="mt-12 grid gap-12 md:mt-16 md:grid-cols-2">
            <Reveal>
              <h3 className="display-jp text-[1.0625rem] text-arch-ink">代表が担うこと</h3>
              <ul className="mt-4 border-t border-arch-deep">
                {REPRESENTATIVE_ROLES.owns.map((r) => (
                  <li key={r} className="border-b border-arch-line py-3.5 text-[0.98rem] text-arch-ink">
                    {r}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={60}>
              <h3 className="display-jp text-[1.0625rem] text-arch-ink">仕組みで支えること</h3>
              <p className={`mt-4 border-t border-arch-deep pt-5 ${BODY}`}>
                調査・整理・資料の下書き・記録の型などは、テンプレート、業務の手順書、パートナー、医院のスタッフ、そしてAIを含む社内の仕組みで支えています。判断と責任は代表が持ちます。
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ────────────── 5. 会社情報 ────────────── */}
      <section aria-labelledby="profile-heading" className="border-t border-arch-line bg-arch-white">
        <div className={`${CONTAINER} ${SECTION_Y}`}>
          <div className="max-w-[44rem]">
            <Reveal>
              <SectionHeader no="05" label="PROFILE" id="profile-heading" title="会社情報" />
              <dl className="mt-10 border-t border-arch-deep">
                {PROFILE.map((p) => (
                  <div
                    key={p.label}
                    className="grid gap-1 border-b border-arch-line py-4 sm:grid-cols-12 sm:gap-6"
                  >
                    <dt className="text-[0.9rem] text-arch-ink-muted sm:col-span-4">{p.label}</dt>
                    <dd className="text-[1rem] leading-[1.8] text-arch-ink sm:col-span-8">
                      {p.href ? (
                        <Link
                          href={p.href}
                          className="underline underline-offset-4 hover:text-arch-green"
                        >
                          {p.value}
                        </Link>
                      ) : (
                        p.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ────────────── 6. 支援地域 ────────────── */}
      <section aria-labelledby="areas-heading" className="border-t border-arch-line bg-arch-paper">
        <div className={`${CONTAINER} ${SECTION_Y}`}>
          <div className="max-w-[44rem]">
            <Reveal>
              <SectionHeader no="06" label="AREAS" id="areas-heading" title="支援地域" />
              <SupportAreaList />
              <p className="mt-10 text-base leading-[1.9] text-arch-ink-soft">
                実際にどのような支援をしているかは
                <Link href="/cases" className="underline underline-offset-4 hover:text-arch-green">
                  支援実績
                </Link>
                をご覧ください。
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <ContactForm idPrefix="company" />
    </>
  );
}
