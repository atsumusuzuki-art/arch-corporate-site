import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import CornerMarkers, { SectionTag } from "@/components/CornerMarkers";

export const metadata = {
  title: "ARCH大学 営業学部（旧：医療介護特化型 営業支援） | 合同会社ARCH",
  description:
    "歯科医院・訪問クリニック・訪問薬局・訪問看護など、在宅医療介護の営業を「学問」として教える。元小学校教諭が開発した講義・演習・実地・卒業要件の4段階カリキュラム。",
};

/* ================================================================
   ARCH大学 営業学部 — editorial v2
   ================================================================ */

const TARGETS = [
  { title: "訪問歯科", desc: "歯科医院・訪問歯科診療所" },
  { title: "訪問クリニック", desc: "在宅医療・往診専門医院" },
  { title: "訪問薬局", desc: "在宅医療に関わる薬局" },
  { title: "訪問看護", desc: "訪問看護ステーション" },
];

const METHODS = [
  {
    num: "01",
    title: "小学校の学級経営ノウハウ",
    body:
      "30人の子どもを一つの方向に導く——この難題に取り組んだ経験が、スタッフ全員が主体的に動く組織づくりの土台になっています。",
  },
  {
    num: "02",
    title: "「指導案」で型を言語化",
    body:
      "教師は毎時間「指導案」を書きます。営業も同じ。なぜこの順番か、なぜこの問いかけか——全ての所作を言語化して再現性を担保します。",
  },
  {
    num: "03",
    title: "評価と振り返りの文化",
    body:
      "できた／できないを明確にし、次の授業に活かす。これが教育の本質です。営業も同じサイクルで、誰もが着実に成長できる設計にしています。",
  },
];

const PROBLEMS = [
  {
    title: "「営業テクニック」を学んでも、結果が出ない。",
    body:
      "セミナーで学んだトークスクリプトも、テンプレートの営業ツールも、現場では全く通用しない。人間関係は型にはめられない。",
  },
  {
    title: "「数字は上がったが、スタッフが疲弊している。」",
    body:
      "無理な営業ノルマでスタッフのモチベーションが下がり、離職につながっている。本末転倒だ。",
  },
  {
    title: "「紹介してもらった施設との関係が続かない。」",
    body:
      "ブローカー経由で繋がった施設は、お金の関係でしかない。信頼がないから、すぐに他に乗り換えられる。",
  },
];

type Feature = {
  num: "01" | "02" | "03";
  kicker: string;
  title: string;
  highlight: string;
  body: string;
  bullets: string[];
  cards: { title: string; desc: string }[];
};

const FEATURES: Feature[] = [
  {
    num: "01",
    kicker: "STRENGTH — 定着と質",
    title: "「人が辞めない医院」は、",
    highlight: "自然と選ばれる。",
    body:
      "営業テクニックより大切なのは、スタッフの定着と本当に良いケアです。スタッフが長く働き、ケアの質が高まれば、施設はそれを見て自然と紹介してくれます。最強の営業は、幸せなスタッフと質の高いケアです。",
    bullets: [
      "スタッフ定着が最強の営業になる仕組み",
      "質の高いケアが自然な口コミを生む",
      "組織力が信頼の源泉になる",
    ],
    cards: [
      {
        title: "スタッフ定着が最強の営業",
        desc:
          "人が辞めない医院には、必然的に優秀なスタッフが集まります。施設はそれを見て、信頼して依頼します。",
      },
      {
        title: "質の高いケアが口コミを生む",
        desc:
          "営業ツールより、実際のケアの質。良い対応をすれば、施設スタッフから自然と紹介が広がります。",
      },
      {
        title: "組織力が信頼の源泉",
        desc:
          "属人的ではなく、誰がやっても高品質。その安定感が、施設から選ばれ続ける理由になります。",
      },
    ],
  },
  {
    num: "02",
    kicker: "STRENGTH — 施設の困りごと",
    title: "施設の「本当の困りごと」を",
    highlight: "解決するコミュニケーション。",
    body:
      "営業ピッチではなく、施設側の業務負担を減らすことを考える。「何を売るか」ではなく「どう役に立つか」を伝えることで、ブローカーには作れない信用関係が生まれます。",
    bullets: [
      "施設の業務負担を減らす提案",
      "キーマンとの信頼構築",
      "紹介の連鎖を生む関係性",
    ],
    cards: [
      {
        title: "施設の業務負担を減らす提案",
        desc:
          "施設スタッフの時間と手間を減らす工夫を。実行支援が信頼を生み、ブローカーとの関係を超えます。",
      },
      {
        title: "キーマンとの信頼構築",
        desc:
          "介護士、ケアマネ、管理者など、本当に困っている人たちと向き合い、支援することで信頼を積み重ねます。",
      },
      {
        title: "紹介の連鎖を生む関係性",
        desc:
          "一度の信頼から、施設内や他の施設への紹介が自然に広がる。組織的な信用が生まれます。",
      },
    ],
  },
  {
    num: "03",
    kicker: "STRENGTH — 仕組み化",
    title: "院長が営業しなくていい",
    highlight: "「仕組み」をつくる。",
    body:
      "営業を院長だけに頼るのは限界があります。スタッフ誰もが施設との関係を育てられる仕組みを作ることで、持続可能で人間中心の営業が生まれます。院長の負担も軽減できます。",
    bullets: [
      "営業の属人化を解消",
      "スタッフ全員が関係構築できる仕組み",
      "院長の負担を軽減",
    ],
    cards: [
      {
        title: "営業の属人化を解消",
        desc:
          "院長だけが営業するのではなく、スタッフ誰もが施設との関係を育てられるプロセスを構築します。",
      },
      {
        title: "スタッフ全員が関係構築できる仕組み",
        desc:
          "研修やシステム、マニュアルを通じて、誰もが信頼を積み重ねるやり方を身に付けます。",
      },
      {
        title: "院長の負担を軽減",
        desc:
          "営業に奔走する必要がなくなり、院長は本来の医師としての役割に専念できます。",
      },
    ],
  },
];

const BEFORE_AFTER = [
  {
    before: "テクニック頼りの営業",
    after: "信頼で自然と選ばれる医院",
  },
  {
    before: "院長だけが営業に奔走",
    after: "スタッフ全員が施設との関係を育てる",
  },
  {
    before: "ブローカーへの依存",
    after: "自院のファンが紹介の連鎖を生む",
  },
];

export default function SalesPage() {
  return (
    <article className="bg-arch-cream">
      {/* ──────────────────────────────────────────
          HERO — editorial cover, deep forest
      ────────────────────────────────────────── */}
      <section className="relative bg-arch-forest text-arch-cream overflow-hidden pt-24 md:pt-32 pb-20 md:pb-28">
        <CornerMarkers
          topRight="ACADEMY — 02 / 営業学部"
          bottomLeft="SERVICE"
          bottomRight="02 / 05"
          theme="dark"
        />
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <SectionTag category="ACADEMY" number="02" label="ARCH大学 営業学部" theme="dark" />

          <div className="mt-8 md:mt-12 grid md:grid-cols-12 gap-8 md:gap-12 items-end">
            <div className="md:col-span-8">
              <h1 className="display-jp text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl text-arch-cream leading-[1.1]">
                営業は、
                <br />
                <span className="text-arch-gold">育成する</span>時代へ。
              </h1>
              <p className="mono-micro text-arch-sage/70 mt-6">
                （旧：医療介護特化型 営業支援）
              </p>
            </div>
            <div className="md:col-span-4">
              <div className="border-l-2 border-arch-gold pl-5">
                <p className="mono-label text-arch-gold mb-3">CORE MESSAGE</p>
                <p className="text-base md:text-lg text-arch-sage leading-loose">
                  「営業マン」は採用ではなく、<br />育成する時代へ。
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14 md:mt-20 grid md:grid-cols-12 gap-8 items-end border-t border-arch-rule-dark pt-8">
            <p className="md:col-span-8 text-sm md:text-base text-arch-sage/90 leading-loose max-w-2xl">
              歯科医院・訪問クリニック・訪問薬局・訪問看護ステーションなど、在宅医療介護のすべての事業体が対象。
              営業テクニックや営業ツールはいりません。スタッフが定着し、ケアが本当に良くなれば、施設や地域から自然と選ばれます。
            </p>
            <div className="md:col-span-4 flex md:justify-end">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-3 bg-arch-cream text-arch-forest px-7 py-4 text-sm font-bold tracking-[0.15em] hover:bg-arch-gold transition-colors"
              >
                無料相談を予約する
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          WHY ARCH — 元小学校教諭 × 営業を学問に
      ────────────────────────────────────────── */}
      <section className="relative bg-arch-cream py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-baseline justify-between border-b border-arch-rule pb-4 mb-12 md:mb-16">
            <SectionTag category="WHY" number="02" label="なぜ ARCH大学 なのか" />
            <p className="mono-micro text-arch-ink-muted hidden sm:block">TEACHING LINEAGE</p>
          </div>

          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
            <div className="md:col-span-7">
              <h2 className="display-jp text-3xl md:text-4xl text-arch-ink mb-8 leading-[1.25]">
                「教える」プロフェッショナルが設計した、
                <br />
                <span className="text-arch-forest">在宅医療介護の営業カリキュラム。</span>
              </h2>
              <p className="text-base text-arch-ink-soft leading-loose mb-6 max-w-2xl">
                ARCH代表・鈴木集は<strong className="text-arch-ink">元小学校教諭</strong>。
                「どうすれば人は学び、身につけ、再現できるのか」——教育現場で磨いた技術を、
                医療介護の営業に応用しました。
              </p>
              <p className="text-base text-arch-ink-soft leading-loose max-w-2xl">
                属人的なセンスに頼らない、体系化された<strong className="text-arch-forest">「学問」としての営業教育</strong>を提供します。
              </p>
            </div>

            <div className="md:col-span-5">
              <div className="border border-arch-rule-dark/20 bg-arch-cream-raised p-8 md:p-10">
                <p className="mono-micro text-arch-moss mb-4">DESIGNED BY</p>
                <p className="display-jp text-2xl md:text-3xl text-arch-ink leading-snug mb-4">
                  元小学校教諭が<br />
                  営業を<span className="text-arch-forest">“学問”</span>として体系化。
                </p>
                <div className="h-px bg-arch-rule my-6"></div>
                <p className="mono-label text-arch-moss mb-2">CURRICULUM</p>
                <p className="text-sm text-arch-ink-soft leading-loose">
                  講義・演習・実地・卒業要件——4段階のカリキュラムで、営業の「型」を誰もが再現できる形に落とし込みます。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          TARGETS — 対象となる4業態
      ────────────────────────────────────────── */}
      <section className="bg-arch-cream-raised py-20 md:py-28 border-t border-arch-rule">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-baseline justify-between border-b border-arch-rule pb-4 mb-12 md:mb-16">
            <SectionTag category="TARGETS" number="03" label="対象となる4業態" />
            <p className="mono-micro text-arch-ink-muted hidden sm:block">04 CATEGORIES</p>
          </div>

          <h2 className="display-jp text-3xl md:text-4xl text-arch-ink mb-12 md:mb-16 max-w-3xl leading-[1.2]">
            在宅医療介護の<span className="text-arch-forest">すべての事業体</span>が、
            <br />
            ARCH大学の教室です。
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-arch-rule">
            {TARGETS.map((t, i) => (
              <div
                key={t.title}
                className={`border-b border-arch-rule lg:border-b-0 ${i < TARGETS.length - 1 ? "lg:border-r" : ""} py-8 md:py-10 md:px-8 ${i === 0 ? "lg:pl-0" : ""}`}
              >
                <p className="mono-label text-arch-moss mb-4 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="display-jp text-lg md:text-xl text-arch-ink mb-3 leading-snug">
                  {t.title}
                </h3>
                <p className="text-sm text-arch-ink-soft leading-loose">
                  {t.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          METHODS — 教育メソッド3つの柱
      ────────────────────────────────────────── */}
      <section className="bg-arch-cream py-20 md:py-28 border-t border-arch-rule">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-baseline justify-between border-b border-arch-rule pb-4 mb-12 md:mb-16">
            <SectionTag category="METHOD" number="04" label="教育メソッドの3本柱" />
            <p className="mono-micro text-arch-ink-muted hidden sm:block">03 PILLARS</p>
          </div>

          <h2 className="display-jp text-3xl md:text-4xl text-arch-ink mb-12 md:mb-16 max-w-3xl leading-[1.2]">
            教室で人を動かした技術を、
            <br />
            <span className="text-arch-forest">営業の現場に。</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-0 border-t border-arch-rule">
            {METHODS.map((m, i) => (
              <div
                key={m.num}
                className={`border-b border-arch-rule md:border-b-0 ${i < METHODS.length - 1 ? "md:border-r" : ""} py-8 md:py-10 md:px-8 ${i === 0 ? "md:pl-0" : ""}`}
              >
                <p className="mono-label text-arch-moss mb-4 tabular-nums">
                  METHOD — {m.num}
                </p>
                <h3 className="display-jp text-lg md:text-xl text-arch-ink mb-4 leading-snug">
                  {m.title}
                </h3>
                <p className="text-sm text-arch-ink-soft leading-loose">
                  {m.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          PROBLEM — こんなお悩みありませんか
      ────────────────────────────────────────── */}
      <section className="bg-arch-cream-raised py-20 md:py-28 border-t border-arch-rule">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-baseline justify-between border-b border-arch-rule pb-4 mb-12 md:mb-16">
            <SectionTag category="PROBLEM" number="05" label="こんなお悩みありませんか" />
            <p className="mono-micro text-arch-ink-muted hidden sm:block">03 CASES</p>
          </div>

          <h2 className="display-jp text-3xl md:text-4xl text-arch-ink mb-12 md:mb-16 max-w-3xl leading-[1.2]">
            テクニックの先にある、
            <br />
            <span className="text-arch-forest">本当の営業課題。</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-0 border-t border-arch-rule">
            {PROBLEMS.map((item, i) => (
              <div
                key={i}
                className={`border-b border-arch-rule md:border-b-0 ${i < PROBLEMS.length - 1 ? "md:border-r" : ""} py-8 md:py-10 md:px-8 ${i === 0 ? "md:pl-0" : ""}`}
              >
                <p className="mono-label text-arch-moss mb-4 tabular-nums">
                  CASE — {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="display-jp text-lg md:text-xl text-arch-ink mb-4 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-arch-ink-soft leading-loose">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          SOLUTION — 3つの強み
      ────────────────────────────────────────── */}
      <section className="bg-arch-cream-raised border-t border-arch-rule">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 pt-20 md:pt-28 pb-16 md:pb-20">
          <div className="flex items-baseline justify-between border-b border-arch-rule pb-4 mb-12 md:mb-16">
            <SectionTag category="SOLUTION" number="06" label="ARCH大学の3つの強み" />
            <p className="mono-micro text-arch-ink-muted hidden sm:block">03 STRENGTHS</p>
          </div>

          <h2 className="display-jp text-3xl md:text-4xl text-arch-ink mb-6 max-w-3xl leading-[1.2]">
            営業テクニックではなく、
            <br />
            <span className="text-arch-forest">信頼を基盤とした組織づくり。</span>
          </h2>
          <p className="text-base text-arch-ink-soft leading-loose max-w-2xl">
            スタッフが定着し、ケアの質が上がれば、施設からの指名と紹介は自然に生まれます。
          </p>
        </div>

        {FEATURES.map((f, idx) => (
          <div
            key={f.num}
            className={`${idx % 2 === 0 ? "bg-arch-cream" : "bg-arch-cream-raised"} border-t border-arch-rule py-16 md:py-24`}
          >
            <div className="max-w-6xl mx-auto px-5 sm:px-8">
              <div className="grid md:grid-cols-12 gap-8 md:gap-14 items-start">
                {/* Left — copy */}
                <div className={`md:col-span-7 ${idx === 1 ? "md:order-2" : ""}`}>
                  <p className="mono-label text-arch-moss mb-4">{f.kicker}</p>
                  <div className="flex items-baseline gap-4 mb-6">
                    <span className="display-jp text-6xl md:text-7xl text-arch-forest/30 tabular-nums leading-none">
                      {f.num}
                    </span>
                    <div className="h-px flex-1 bg-arch-rule mt-auto mb-3"></div>
                  </div>
                  <h3 className="display-jp text-2xl md:text-3xl text-arch-ink leading-snug mb-6">
                    {f.title}
                    <br />
                    <span className="text-arch-forest">{f.highlight}</span>
                  </h3>
                  <p className="text-sm md:text-base text-arch-ink-soft leading-loose mb-8">
                    {f.body}
                  </p>
                  <ul className="space-y-3 border-t border-arch-rule pt-6">
                    {f.bullets.map((t) => (
                      <li key={t} className="flex items-start gap-3">
                        <Check size={16} className="text-arch-moss mt-1 shrink-0" />
                        <span className="text-sm text-arch-ink font-medium">{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right — editorial stat card */}
                <div className={`md:col-span-5 ${idx === 1 ? "md:order-1" : ""}`}>
                  <div className="border border-arch-rule-dark/20 p-8 md:p-10 bg-arch-cream-raised">
                    <p className="mono-micro text-arch-moss mb-4">KEY IDEA / {f.num}</p>
                    <p className="display-jp text-2xl md:text-3xl text-arch-ink leading-snug">
                      {f.title}
                      <br />
                      <span className="text-arch-forest">{f.highlight}</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* Sub-cards */}
              <div className="grid md:grid-cols-3 gap-0 mt-12 md:mt-16 border-t border-arch-rule">
                {f.cards.map((card, i) => (
                  <div
                    key={i}
                    className={`border-b md:border-b-0 ${i < f.cards.length - 1 ? "md:border-r" : ""} border-arch-rule py-6 md:py-8 md:px-8 ${i === 0 ? "md:pl-0" : ""}`}
                  >
                    <p className="mono-micro text-arch-moss mb-3 tabular-nums">
                      {f.num} — {String(i + 1).padStart(2, "0")}
                    </p>
                    <h4 className="display-jp text-base md:text-lg text-arch-ink mb-3">
                      {card.title}
                    </h4>
                    <p className="text-sm text-arch-ink-soft leading-loose">
                      {card.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ──────────────────────────────────────────
          BEFORE / AFTER — deep forest
      ────────────────────────────────────────── */}
      <section className="relative bg-arch-forest text-arch-cream py-20 md:py-28 overflow-hidden">
        <div className="absolute top-6 left-6 md:top-8 md:left-10 pointer-events-none">
          <span className="mono-label text-arch-sage/70">TRANSFORMATION — 07 / 変化</span>
        </div>
        <div className="absolute top-6 right-6 md:top-8 md:right-10 pointer-events-none text-right">
          <span className="mono-micro text-arch-sage/60">BEFORE × AFTER</span>
        </div>

        <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
          <p className="mono-label text-arch-gold mb-6">BEFORE &amp; AFTER</p>
          <h2 className="display-jp text-4xl md:text-6xl text-arch-cream mb-6 max-w-3xl leading-[1.1]">
            ARCH大学 導入で
            <br />
            <span className="text-arch-gold">変わること。</span>
          </h2>
          <p className="text-base md:text-lg text-arch-sage/80 leading-loose max-w-2xl mb-16 md:mb-20">
            営業を「テクニック」ではなく<strong className="text-arch-cream">「学問」と「組織力」</strong>に置き換えた時、現場は静かに、しかし確実に変わります。
          </p>

          <div className="border-t border-arch-rule-dark/60">
            {BEFORE_AFTER.map((item, i) => (
              <div
                key={i}
                className="grid md:grid-cols-12 gap-4 md:gap-8 items-center py-8 md:py-10 border-b border-arch-rule-dark/60"
              >
                <div className="md:col-span-1 flex md:justify-start">
                  <span className="display-jp text-2xl md:text-3xl text-arch-gold/70 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="md:col-span-5">
                  <p className="mono-micro text-arch-sage/50 mb-2">BEFORE</p>
                  <p className="text-base md:text-lg text-arch-sage/80 line-through decoration-arch-sage/30">
                    {item.before}
                  </p>
                </div>
                <div className="md:col-span-1 flex md:justify-center">
                  <ArrowRight size={22} className="text-arch-gold" />
                </div>
                <div className="md:col-span-5">
                  <p className="mono-micro text-arch-gold/80 mb-2">AFTER</p>
                  <p className="display-jp text-lg md:text-xl text-arch-cream leading-snug">
                    {item.after}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
