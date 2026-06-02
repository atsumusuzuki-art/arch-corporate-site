import { ArrowRight } from "lucide-react";
import Link from "next/link";
import CornerMarkers, { SectionTag } from "@/components/CornerMarkers";
import Breadcrumb from "@/components/Breadcrumb";
import FaqSection from "@/components/FaqSection";

const FAQS = [
  {
    q: "施設基準の届出だけでも相談できますか？",
    a: "はい。新たに取得したい施設基準の要件確認・届出書類の準備・チェックリストの作成など、必要な部分のみ切り出してご相談いただけます。最終的な届出と判断は医療機関側で行っていただきます。",
  },
  {
    q: "診療報酬改定対応も可能ですか？",
    a: "可能です。改定の概要から、自院に必要な対応の絞り込み、レセコン設定変更依頼、スタッフ向け説明資料の作成までを整理します。改定情報を読み込む工数を医院側から外側に移すイメージです。",
  },
  {
    q: "レセコン会社とのやり取りも相談できますか？",
    a: "はい。レセコン業者との打合せに同席し、設定変更依頼の取りまとめ、業者からの回答整理を行います。医院側の窓口負担を減らすことができます。",
  },
  {
    q: "算定漏れチェックは可能ですか？",
    a: "可能です。カルテと請求のサンプル突合により、算定漏れの可能性がある項目を整理します。ただし、最終的な算定判断と請求責任は医療機関に帰属します。ARCH は確認支援を行う立場です。",
  },
];

export const metadata = {
  title: "歯科 算定・施設基準支援｜届出・診療報酬改定・レセコン整理｜ARCH",
  description:
    "施設基準の届出、診療報酬改定への対応、レセコン業者との確認、算定漏れの整理など。歯科医院の外部事務長として、運用整理と資料作成を支援します。",
};

/* ================================================================
   算定・施設基準支援
   ================================================================ */

const PROBLEMS = [
  { title: "施設基準の届出がわからない", body: "新たに取りたい施設基準があるが、要件・届出書類・期限が整理できていない。" },
  { title: "診療報酬改定への対応が遅れている", body: "改定の概要は読んだが、自院に必要な対応にまで落とし込めていない。" },
  { title: "レセコンの設定や業者確認が大変", body: "レセコン業者との打合せや設定変更を、院長が直接やる時間がない。" },
  { title: "算定漏れがある気がする", body: "請求はしているが、本当に必要な算定ができているか確証が持てない。" },
  { title: "スタッフに説明できる資料がない", body: "改定や運用変更を、スタッフが理解できる形に落とせていない。" },
];

const ACTIONS = [
  "施設基準の整理（取得可能性・要件・必要書類のリストアップ）",
  "届出準備支援（書類テンプレート・チェックリストの整備）",
  "診療報酬改定の要点整理（自院に必要な対応の絞り込み）",
  "レセコン業者との確認支援（打合せ同席・設定変更依頼の整理）",
  "算定漏れの確認（カルテと請求のサンプル突合）",
  "スタッフ向け資料作成（運用変更の説明資料）",
];

const CASE_STUDY = {
  problem:
    "診療報酬改定を控え、自院が取得済みの施設基準と新たに対応すべき項目の整理ができておらず、院長が一人で資料を読み込んでいた医院。",
  action:
    "現状の届出状況を一覧化し、改定後に必要な届出・運用変更・レセコン設定変更を整理。レセコン業者との打合せに同席し、設定変更依頼を ARCH 側で取りまとめ。スタッフ向けに「何が変わるか」を 1 枚にまとめた資料を作成。",
  result:
    "院長とスタッフが対応すべき事項が一覧化され、期限内に必要な準備を完了。改定対応の漏れと、スタッフへの説明工数を減らせた。",
};

const RELATED = [
  {
    href: "/services/external-manager",
    title: "歯科医院の外部事務長とは",
    desc: "ARCHの考える外部事務長の役割",
  },
  {
    href: "/services/visit-dental-startup",
    title: "訪問歯科立ち上げ支援",
    desc: "訪問特有の算定・施設基準を立ち上げ段階から整理",
  },
  {
    href: "/services/consulting",
    title: "料金プラン",
    desc: "顧問プラン（月5万〜）から相談可能",
  },
];

export default function FeeStandardsPage() {
  return (
    <article className="bg-arch-cream">
      <Breadcrumb
        items={[
          { label: "HOME", href: "/" },
          { label: "サービス", href: "/services/consulting" },
          { label: "算定・施設基準支援" },
        ]}
      />
      {/* HERO */}
      <section className="relative bg-arch-forest text-arch-cream overflow-hidden pt-24 md:pt-32 pb-20 md:pb-28">
        <CornerMarkers
          topRight="FEE & STANDARDS — 算定・施設基準"
          bottomLeft="SUPPORT"
          bottomRight="算定・施設基準支援"
          theme="dark"
        />
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <SectionTag category="FEE" number="—" label="算定・施設基準支援" theme="dark" />

          <div className="mt-8 md:mt-12 grid md:grid-cols-12 gap-8 md:gap-12 items-end">
            <div className="md:col-span-8">
              <h1 className="display-jp text-[1.875rem] sm:text-3xl md:text-[2.75rem] lg:text-[3.25rem] text-arch-cream leading-[1.2] tracking-tight">
                算定・施設基準・診療報酬改定。
                <br />
                院長だけで<span className="text-arch-gold font-black">抱え込んでいませんか</span>。
              </h1>
            </div>
            <div className="md:col-span-4">
              <div className="border-l-2 border-arch-gold pl-5">
                <p className="mono-label text-arch-gold mb-3">CORE MESSAGE</p>
                <p className="text-base md:text-lg text-arch-sage leading-loose">
                  制度理解・届出準備・運用整理を、
                  <br />
                  外部から手伝う立場で。
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14 md:mt-20 grid md:grid-cols-12 gap-8 items-end border-t border-arch-rule-dark pt-8">
            <p className="md:col-span-8 text-sm md:text-base text-arch-sage/90 leading-loose max-w-2xl">
              施設基準の届出、診療報酬改定への対応、レセコン業者との確認、算定漏れの整理。診療しながら制度資料を読み込むのは負担が大きい領域です。ARCH は外部事務長として、運用整理・資料作成・業者連携を支援します。
            </p>
            <div className="md:col-span-4 flex md:justify-end">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-3 bg-arch-cream text-arch-forest px-7 py-4 text-sm font-bold tracking-[0.15em] hover:bg-arch-gold transition-colors"
              >
                算定・施設基準について相談する
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEMS */}
      <section className="bg-arch-cream py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-baseline justify-between border-b border-arch-rule pb-4 mb-12 md:mb-16">
            <SectionTag category="PROBLEM" number="02" label="よくある悩み" />
            <p className="mono-micro text-arch-ink-muted hidden sm:block">05 CONCERNS</p>
          </div>

          <h2 className="display-jp text-3xl md:text-4xl text-arch-ink mb-12 md:mb-16 max-w-3xl leading-[1.2]">
            制度対応は、
            <br />
            <span className="text-arch-forest font-black">院長一人で読み解けない。</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-arch-rule">
            {PROBLEMS.map((p, i) => (
              <div key={p.title} className="border-b border-r border-arch-rule py-7 md:py-9 px-5 md:px-6">
                <p className="mono-label text-arch-moss mb-3 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="display-jp text-base md:text-lg text-arch-ink mb-3 leading-snug">
                  {p.title}
                </h3>
                <p className="text-sm text-arch-ink-soft leading-loose">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACTIONS */}
      <section className="bg-arch-cream-raised py-20 md:py-28 border-t border-arch-rule">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-baseline justify-between border-b border-arch-rule pb-4 mb-12 md:mb-16">
            <SectionTag category="SUPPORT" number="03" label="ARCHが支援すること" />
            <p className="mono-micro text-arch-ink-muted hidden sm:block">
              {String(ACTIONS.length).padStart(2, "0")} TASKS
            </p>
          </div>

          <h2 className="display-jp text-3xl md:text-4xl text-arch-ink mb-12 md:mb-16 max-w-3xl leading-[1.2]">
            読み解き・整理・業者連携を、
            <br />
            <span className="text-arch-forest font-black">外側から手伝う。</span>
          </h2>

          <ul className="grid sm:grid-cols-2 gap-0 border-t border-l border-arch-rule">
            {ACTIONS.map((a, i) => (
              <li
                key={a}
                className="border-b border-r border-arch-rule py-5 md:py-6 px-4 md:px-6 flex items-baseline gap-3"
              >
                <span className="mono-micro text-arch-moss tabular-nums shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm md:text-base text-arch-ink leading-snug font-medium">
                  {a}
                </span>
              </li>
            ))}
          </ul>

          {/* 注意書き */}
          <div className="mt-10 md:mt-12 border-l-4 border-arch-gold bg-arch-cream p-6 md:p-7">
            <p className="mono-label text-arch-moss mb-3">NOTICE — 業務範囲について</p>
            <p className="text-sm md:text-base text-arch-ink-soft leading-loose">
              最終的な診療判断、算定判断、届出内容の確認および責任は医療機関に帰属します。
              <strong className="text-arch-ink">
                ARCH は運用整理・資料作成・業者連携の支援を行う立場
              </strong>
              であり、診療判断や請求責任を代行するものではありません。
            </p>
          </div>
        </div>
      </section>

      {/* CASE */}
      <section className="bg-arch-cream py-20 md:py-28 border-t border-arch-rule">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-baseline justify-between border-b border-arch-rule pb-4 mb-12 md:mb-16">
            <SectionTag category="CASE" number="04" label="支援事例" />
            <p className="mono-micro text-arch-ink-muted hidden sm:block">※ 医院名は匿名化</p>
          </div>

          <h2 className="display-jp text-3xl md:text-4xl text-arch-ink mb-12 md:mb-16 max-w-3xl leading-[1.2]">
            改定対応を、
            <br />
            <span className="text-arch-forest font-black">期限内に整理した医院。</span>
          </h2>

          <div className="bg-arch-cream-raised py-10 md:py-14 px-6 md:px-12 border border-arch-rule">
            <div className="grid md:grid-cols-3 gap-6 md:gap-10">
              <div>
                <p className="mono-micro text-arch-ink-muted mb-2">課題</p>
                <p className="text-sm text-arch-ink leading-loose">{CASE_STUDY.problem}</p>
              </div>
              <div>
                <p className="mono-micro text-arch-ink-muted mb-2">支援内容</p>
                <p className="text-sm text-arch-ink leading-loose">{CASE_STUDY.action}</p>
              </div>
              <div>
                <p className="mono-micro text-arch-gold mb-2">結果</p>
                <p className="text-sm text-arch-forest font-bold leading-loose">{CASE_STUDY.result}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqSection number="05" items={FAQS} />

      {/* RELATED */}
      <section className="bg-arch-cream-raised py-16 md:py-20 border-t border-arch-rule">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-baseline justify-between border-b border-arch-rule pb-4 mb-10 md:mb-12">
            <p className="mono-label text-arch-moss">RELATED — 関連ページ</p>
          </div>

          <ul className="grid sm:grid-cols-3 gap-0 border-t border-l border-arch-rule">
            {RELATED.map((r) => (
              <li key={r.href} className="border-b border-r border-arch-rule">
                <Link
                  href={r.href}
                  className="group block py-6 md:py-7 px-5 md:px-6 h-full hover:bg-arch-cream transition-colors"
                >
                  <p className="display-jp text-base md:text-lg text-arch-ink group-hover:text-arch-forest transition-colors mb-2">
                    {r.title}
                  </p>
                  <p className="text-xs md:text-sm text-arch-ink-soft leading-relaxed">{r.desc}</p>
                  <p className="mono-micro text-arch-moss mt-3 inline-flex items-center gap-1.5">
                    詳しく見る <ArrowRight size={11} />
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}
