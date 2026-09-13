import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { CASES } from "@/lib/cases";
import SupportAreaList from "@/components/SupportAreaList";
import CaseRow from "@/components/ui/CaseRow";
import SectionHeader from "@/components/ui/SectionHeader";
import { CONTAINER, SECTION_Y } from "@/lib/ui";
import { absoluteUrl, OG_IMAGE } from "@/lib/site";

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

      <section aria-labelledby="cases-heading" className="bg-arch-white">
        <div className={`${CONTAINER} ${SECTION_Y}`}>
          <h2 id="cases-heading" className="sr-only">
            支援実績の一覧
          </h2>
          <p className="max-w-[40rem] text-[0.95rem] leading-[1.9] text-arch-ink-soft">
            数字は医院・スタッフ・関係者それぞれの取り組みによるもので、ARCH単独の成果ではありません。
            各ケースの詳細に、数字の読み方を載せています。
          </p>

          <div className="mt-10 border-t border-arch-deep">
            {CASES.map((c, i) => (
              <Reveal key={c.slug} delay={i * 60}>
                <CaseRow item={c} index={i} headingLevel="h3" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────── 支援地域 ────────────── */}
      <section aria-labelledby="areas-heading" className="border-t border-arch-line bg-arch-paper">
        <div className={`${CONTAINER} ${SECTION_Y}`}>
          <div className="max-w-[44rem]">
            <Reveal>
              <SectionHeader label="AREAS" id="areas-heading" title="支援地域" />
              <SupportAreaList />
            </Reveal>
          </div>
        </div>
      </section>

      <ContactForm idPrefix="cases" />
    </>
  );
}
