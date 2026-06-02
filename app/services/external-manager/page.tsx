import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import CornerMarkers, { SectionTag } from "@/components/CornerMarkers";

export const metadata = {
  title: "歯科医院の外部事務長とは｜院長の相談役・運営整理役・現場と経営のつなぎ役",
  description:
    "ARCHが取り組む「歯科医院の外部事務長」とは。単なる経営コンサルではなく、訪問歯科・分院・採用・算定・補助金まで横断的に医院運営を整理・伴走する役割です。",
};

/* ================================================================
   歯科医院の外部事務長とは（コンセプトページ）
   ================================================================ */

const ROLES = [
  {
    title: "院長の相談役",
    body:
      "院長が抱えがちな運営課題や判断の迷いを、利害関係のない外部の立場で受け止める。",
  },
  {
    title: "医院運営の整理役",
    body:
      "属人化しがちな業務、決まっていないルール、回りきらないオペレーションを構造化する。",
  },
  {
    title: "業者との橋渡し役",
    body:
      "歯科ディーラー、レセコン業者、HP制作、看板、社労士、税理士など、複数業者との調整を担う。",
  },
  {
    title: "現場と経営のつなぎ役",
    body:
      "院長が描く方向性と現場スタッフが見ている景色のズレを、両側に立って整える。",
  },
];

const DIFFERENCES = [
  {
    title: "提案だけで終わらない",
    body:
      "資料や戦略を出して終わりではなく、医院側で実行できる状態まで一緒に手を動かす。",
  },
  {
    title: "現場に入り込む",
    body:
      "院長の頭の中、スタッフの動き、書類の流れ、施設との関係を、現場で確認しながら整理する。",
  },
  {
    title: "横断的に見る",
    body:
      "訪問歯科、外来、採用、HP、算定、補助金、分院。領域を限定せず、医院全体の運営を俯瞰する。",
  },
  {
    title: "規模に合わせて関与する",
    body:
      "大型法人向けの経営コンサルではなく、院長＋スタッフ10名規模の医院で実務まで入り込める距離感。",
  },
];

const SUPPORT_AREAS = [
  "訪問歯科の立ち上げ・運営",
  "外来運営の整理",
  "分院展開の準備",
  "採用・人事支援",
  "算定・施設基準の整理",
  "HP・LP・パンフレット改善",
  "補助金申請支援",
  "DX・記録アプリ・シフト管理",
  "業者連携・ディーラー調整",
];

const RELATED = [
  {
    href: "/services/visit-dental-startup",
    title: "訪問歯科立ち上げ支援",
    desc: "施設連携・必要書類・スタッフ体制から、現場導入まで",
  },
  {
    href: "/services/facility-growth",
    title: "施設連携・利用者増加支援",
    desc: "施設はあるのに患者が増えない医院向けの導線設計",
  },
  {
    href: "/services/branch-startup",
    title: "分院立ち上げ支援",
    desc: "物件・機器・ディーラー・採用・HPまで横断的に",
  },
  {
    href: "/services/fee-standards",
    title: "算定・施設基準支援",
    desc: "施設基準の届出・診療報酬改定・レセコン確認",
  },
  {
    href: "/services/consulting",
    title: "料金プラン",
    desc: "関与度で選べる3つの月額プラン（顧問・ライト・外部事務長）",
  },
];

export default function ExternalManagerPage() {
  return (
    <article className="bg-arch-cream">
      {/* HERO */}
      <section className="relative bg-arch-forest text-arch-cream overflow-hidden pt-24 md:pt-32 pb-20 md:pb-28">
        <CornerMarkers
          topRight="CONCEPT — 外部事務長"
          bottomLeft="ABOUT"
          bottomRight="歯科医院の外部事務長とは"
          theme="dark"
        />
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <SectionTag category="CONCEPT" number="—" label="歯科医院の外部事務長とは" theme="dark" />

          <div className="mt-8 md:mt-12 grid md:grid-cols-12 gap-8 md:gap-12 items-end">
            <div className="md:col-span-8">
              <h1 className="display-jp text-[2rem] sm:text-4xl md:text-5xl lg:text-[3.5rem] text-arch-cream leading-[1.18] tracking-tight">
                院長の頭の中にある<span className="text-arch-gold font-black">課題</span>を、
                <br />
                医院が動ける形に整理する。
              </h1>
            </div>
            <div className="md:col-span-4">
              <div className="border-l-2 border-arch-gold pl-5">
                <p className="mono-label text-arch-gold mb-3">CORE MESSAGE</p>
                <p className="text-base md:text-lg text-arch-sage leading-loose">
                  単なるアドバイスではなく、
                  <br />
                  医院運営の整理役として伴走する。
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14 md:mt-20 grid md:grid-cols-12 gap-8 items-end border-t border-arch-rule-dark pt-8">
            <p className="md:col-span-8 text-sm md:text-base text-arch-sage/90 leading-loose max-w-2xl">
              ARCH が取り組むのは「歯科医院の外部事務長」という役割です。経営コンサルでも、訪問歯科だけの専門家でもありません。院長が一人で抱えがちな運営課題を、外部の立場で整理し、現場まで入り込んで一緒に回す存在です。
            </p>
            <div className="md:col-span-4 flex md:justify-end">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-3 bg-arch-cream text-arch-forest px-7 py-4 text-sm font-bold tracking-[0.15em] hover:bg-arch-gold transition-colors"
              >
                医院運営について相談する
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ROLES — 外部事務長の4つの役割 */}
      <section className="bg-arch-cream py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-baseline justify-between border-b border-arch-rule pb-4 mb-12 md:mb-16">
            <SectionTag category="ROLES" number="02" label="外部事務長の役割" />
            <p className="mono-micro text-arch-ink-muted hidden sm:block">04 ROLES</p>
          </div>

          <h2 className="display-jp text-3xl md:text-4xl text-arch-ink mb-12 md:mb-16 max-w-3xl leading-[1.2]">
            院長の隣で、
            <br />
            <span className="text-arch-forest font-black">医院運営を回す役割。</span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-0 border-t border-l border-arch-rule">
            {ROLES.map((r, i) => (
              <div key={r.title} className="border-b border-r border-arch-rule py-8 md:py-10 px-5 md:px-7">
                <p className="mono-label text-arch-moss mb-3 tabular-nums">
                  ROLE — {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="display-jp text-lg md:text-xl text-arch-ink mb-3 leading-snug">
                  {r.title}
                </h3>
                <p className="text-sm text-arch-ink-soft leading-loose">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DIFFERENCES — 一般的なコンサルとの違い */}
      <section className="bg-arch-cream-raised py-20 md:py-28 border-t border-arch-rule">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-baseline justify-between border-b border-arch-rule pb-4 mb-12 md:mb-16">
            <SectionTag category="DIFFERENCE" number="03" label="一般的なコンサルとの違い" />
            <p className="mono-micro text-arch-ink-muted hidden sm:block">04 POINTS</p>
          </div>

          <h2 className="display-jp text-3xl md:text-4xl text-arch-ink mb-12 md:mb-16 max-w-3xl leading-[1.2]">
            戦略提案ではなく、
            <br />
            <span className="text-arch-forest font-black">医院に残る仕組みづくり。</span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-0 border-t border-l border-arch-rule">
            {DIFFERENCES.map((d, i) => (
              <div key={d.title} className="border-b border-r border-arch-rule py-8 md:py-10 px-5 md:px-7">
                <p className="mono-label text-arch-moss mb-3 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="display-jp text-lg md:text-xl text-arch-ink mb-3 leading-snug">
                  {d.title}
                </h3>
                <p className="text-sm text-arch-ink-soft leading-loose">{d.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPORT_AREAS — ARCHができること */}
      <section className="bg-arch-cream py-20 md:py-28 border-t border-arch-rule">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-baseline justify-between border-b border-arch-rule pb-4 mb-12 md:mb-16">
            <SectionTag category="SCOPE" number="04" label="ARCHができること" />
            <p className="mono-micro text-arch-ink-muted hidden sm:block">
              {String(SUPPORT_AREAS.length).padStart(2, "0")} AREAS
            </p>
          </div>

          <h2 className="display-jp text-3xl md:text-4xl text-arch-ink mb-6 max-w-3xl leading-[1.2]">
            訪問・外来・分院・採用まで、
            <br />
            <span className="text-arch-forest font-black">医院運営を横断する。</span>
          </h2>
          <p className="text-base text-arch-ink-soft leading-loose max-w-3xl mb-12 md:mb-16">
            領域を限定せず、医院の状況に応じて必要な実務を組み合わせます。下記は ARCH が実際に手を動かしてきた領域です。
          </p>

          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-arch-rule">
            {SUPPORT_AREAS.map((area, i) => (
              <li
                key={area}
                className="border-b border-r border-arch-rule py-5 md:py-6 px-4 md:px-6 flex items-baseline gap-3"
              >
                <span className="mono-micro text-arch-moss tabular-nums shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-arch-ink leading-snug font-medium">{area}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* STORY — 代表ストーリー */}
      <section className="bg-arch-cream-raised py-20 md:py-28 border-t border-arch-rule">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-baseline justify-between border-b border-arch-rule pb-4 mb-12 md:mb-16">
            <SectionTag category="STORY" number="05" label="ARCHが外部事務長を始めた理由" />
            <p className="mono-micro text-arch-ink-muted hidden sm:block">BACKGROUND</p>
          </div>

          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
            <div className="md:col-span-7">
              <h2 className="display-jp text-2xl md:text-3xl text-arch-ink mb-8 leading-[1.3]">
                院長が、診療以外の課題を
                <br />
                <span className="text-arch-forest font-black">一人で抱え込みすぎている。</span>
              </h2>
              <div className="space-y-5 text-base text-arch-ink-soft leading-loose">
                <p>
                  ARCH 代表・鈴木はもともと小学校教員として、子どもたちが自分で動けるようになる仕組みづくりに取り組んでいました。人が動く仕組みや、現場との対話の重ね方は、教室で身につけた感覚です。
                </p>
                <p>
                  その後、横浜の医療法人で歯科事務局長として経営再建に関わり、北海道の医療グループで訪問歯科事業を単独で立ち上げ・6ヶ月で黒字化。歯科医院の運営現場に深く入り込む中で、ある共通点に気づきました。
                </p>
                <p className="text-arch-ink font-bold">
                  院長は、診療以外の課題を一人で抱え込みすぎている。
                </p>
                <p>
                  施設連携、算定、採用、業者調整、HP、補助金、分院。どれも院長以外に判断できる人がいないため、診療の合間や夜間に処理することになります。結果、現場が止まりやすく、院長の時間も削られていきます。
                </p>
                <p>
                  ARCH は、その「院長の頭の中で滞っているもの」を外から受け取り、医院が動ける形に整理する役割として外部事務長を始めました。提案だけで終わらず、現場に入り、業者とも話し、スタッフと一緒に手を動かす。それが、ARCH の考える外部事務長です。
                </p>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="border border-arch-rule-dark/20 bg-arch-cream p-7 md:p-9">
                <p className="mono-label text-arch-moss mb-5">BACKGROUND</p>
                <ul className="space-y-5">
                  <li>
                    <p className="mono-micro text-arch-moss mb-1">01 / 公教育</p>
                    <p className="text-sm text-arch-ink font-medium">元小学校教員</p>
                    <p className="text-xs text-arch-ink-soft leading-relaxed mt-1">
                      人が動く仕組みづくりを教室で実践
                    </p>
                  </li>
                  <li>
                    <p className="mono-micro text-arch-moss mb-1">02 / 医療経営</p>
                    <p className="text-sm text-arch-ink font-medium">広域医療法人 歯科事務局長</p>
                    <p className="text-xs text-arch-ink-soft leading-relaxed mt-1">
                      経営再建を主導
                    </p>
                  </li>
                  <li>
                    <p className="mono-micro text-arch-moss mb-1">03 / 訪問歯科</p>
                    <p className="text-sm text-arch-ink font-medium">医療グループで訪問歯科を単独立ち上げ</p>
                    <p className="text-xs text-arch-ink-soft leading-relaxed mt-1">
                      6ヶ月で黒字化を達成
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RELATED — 内部リンクカード */}
      <section className="bg-arch-cream py-16 md:py-20 border-t border-arch-rule">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-baseline justify-between border-b border-arch-rule pb-4 mb-10 md:mb-12">
            <p className="mono-label text-arch-moss">RELATED — 関連ページ</p>
            <p className="mono-micro text-arch-ink-muted hidden sm:block">FOR CLINICS</p>
          </div>

          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-arch-rule">
            {RELATED.map((r) => (
              <li key={r.href} className="border-b border-r border-arch-rule">
                <Link
                  href={r.href}
                  className="group block py-6 md:py-7 px-5 md:px-6 h-full hover:bg-arch-cream-raised transition-colors"
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
