import { ArrowRight, Check } from "lucide-react";
import Link from "next/link";
import CornerMarkers, { SectionTag } from "@/components/CornerMarkers";

export const metadata = {
  title: "施設連携・営業支援｜訪問歯科の信頼関係を、ブローカーに頼らずつくる",
  description:
    "施設対応導線・初診オペレーション・トラブル防止まで、訪問歯科の営業を仕組み化。ブローカー依存から、自院で関係資産を積み上げる体制へ。施設の歯科品質診断ツールも内包。",
};

/* ================================================================
   施設連携・営業支援
   訪問歯科に特化。施設との信頼関係を院内の仕組みに変える。
   ================================================================ */

const PROBLEMS = [
  {
    title: "ブローカー経由の施設は、続かない。",
    body:
      "紹介料で繋がった施設は、お金の関係。条件の良い他院が現れたら、すぐに乗り換えられる。信頼の資産が自院に残らない。",
  },
  {
    title: "院長一人が、営業に走り続けている。",
    body:
      "施設対応も初診対応もすべて院長判断。倒れたら止まる。スタッフが関わる仕組みがないから、いつまでも院長が抜けられない。",
  },
  {
    title: "施設からの問い合わせに、レスが遅い。",
    body:
      "「返信は夕方になります」が積み重なって、施設側の信頼が静かに落ちている。タイムラグが、紹介の連鎖を止めている。",
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
    kicker: "STRENGTH — 施設対応導線",
    title: "施設からの一報を、",
    highlight: "落とさない仕組みに。",
    body:
      "誰が、何分以内に、何を返すか。施設からの問い合わせを取りこぼさない窓口設計と、レスポンス基準を医院に持ち込みます。タイムラグが信頼を削るのは、訪問歯科で最も多い見過ごしです。",
    bullets: [
      "問い合わせ窓口の一元化",
      "レスポンス基準（時間・内容）の明文化",
      "施設別の対応履歴を全員で共有",
    ],
    cards: [
      {
        title: "窓口の一元化",
        desc:
          "施設からの連絡が「電話」「LINE」「FAX」に散らからないよう、入口を整理して履歴を残します。",
      },
      {
        title: "レス基準の明文化",
        desc:
          "「何分以内に、誰が、どこまで答えるか」を運用ルールに。スタッフが代わっても品質が落ちません。",
      },
      {
        title: "対応履歴の共有",
        desc:
          "誰がどの施設に何を返したかが見える化。施設対応の属人化を構造から解消します。",
      },
    ],
  },
  {
    num: "02",
    kicker: "STRENGTH — 初診オペレーション",
    title: "初診の流れを、",
    highlight: "誰がやっても同品質に。",
    body:
      "初診依頼から訪問・記録・請求までの流れをフロー化。スタッフが代わっても、施設にとって体験が変わらない品質を担保します。トラブルは「人」ではなく「仕組みの穴」で起きます。",
    bullets: [
      "初診フロー（依頼受付→訪問→請求）の標準化",
      "必要書類・同意書テンプレートの整備",
      "ご家族説明のスクリプト化",
    ],
    cards: [
      {
        title: "初診フローの標準化",
        desc:
          "依頼受付から初回訪問・記録・請求まで、誰がやっても同じ手順で流せる運用に整えます。",
      },
      {
        title: "書類テンプレートの整備",
        desc:
          "同意書、ご家族向け説明資料、施設提出書類。毎回ゼロから書かない仕組みを残します。",
      },
      {
        title: "ご家族説明のスクリプト",
        desc:
          "初診時のご家族説明を型化。スタッフの不安と説明のばらつきを同時に減らします。",
      },
    ],
  },
  {
    num: "03",
    kicker: "STRENGTH — 営業の仕組み化",
    title: "院長が走り続けなくても、",
    highlight: "関係が続く体制に。",
    body:
      "営業を院長個人の能力に依存しない設計に。スタッフ全員が施設との関係を育てられるよう、訪問前後の所作・キーマンとの距離感・紹介の連鎖を仕組みに落とします。",
    bullets: [
      "施設キーマン台帳の運用",
      "訪問前後の所作・接遇の標準化",
      "紹介の連鎖を生む関係性設計",
    ],
    cards: [
      {
        title: "キーマン台帳",
        desc:
          "施設ごとの管理者・ケアマネ・介護士の関係性を可視化。担当が抜けても情報が継承されます。",
      },
      {
        title: "訪問前後の所作",
        desc:
          "誰がどんな顔で訪問し、何を残して帰るか。施設側に好かれる所作をスタッフ全員に身につけてもらいます。",
      },
      {
        title: "紹介の連鎖設計",
        desc:
          "一施設の信頼から、施設内の他フロアや系列施設への紹介が広がる関係性のつくり方を共有します。",
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
          HERO
      ────────────────────────────────────────── */}
      <section className="relative bg-arch-forest text-arch-cream overflow-hidden pt-24 md:pt-32 pb-20 md:pb-28">
        <CornerMarkers
          topRight="FACILITY — 02 / 施設連携・営業"
          bottomLeft="SERVICE"
          bottomRight="02 / 03"
          theme="dark"
        />
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <SectionTag
            category="FACILITY"
            number="02"
            label="施設連携・営業支援"
            theme="dark"
          />

          <div className="mt-8 md:mt-12 grid md:grid-cols-12 gap-8 md:gap-12 items-end">
            <div className="md:col-span-8">
              <h1 className="display-jp text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl text-arch-cream leading-[1.1]">
                施設との信頼を、
                <br />
                <span className="text-arch-gold">院内の仕組み</span>に。
              </h1>
            </div>
            <div className="md:col-span-4">
              <div className="border-l-2 border-arch-gold pl-5">
                <p className="mono-label text-arch-gold mb-3">CORE MESSAGE</p>
                <p className="text-base md:text-lg text-arch-sage leading-loose">
                  ブローカー依存から、
                  <br />
                  自院で積み上げる関係資産へ。
                </p>
              </div>
            </div>
          </div>

          <div className="mt-14 md:mt-20 grid md:grid-cols-12 gap-8 items-end border-t border-arch-rule-dark pt-8">
            <p className="md:col-span-8 text-sm md:text-base text-arch-sage/90 leading-loose max-w-2xl">
              施設対応導線、初診オペレーション、訪問前後の所作、キーマン管理。訪問歯科に特化した営業支援を、外部事務長として実務レベルで一緒に組み立てます。営業テクニックではなく、信頼が積み上がる「医院側の仕組み」を残します。
            </p>
            <div className="md:col-span-4 flex md:justify-end">
              <Link
                href="/#contact"
                className="inline-flex items-center gap-3 bg-arch-cream text-arch-forest px-7 py-4 text-sm font-bold tracking-[0.15em] hover:bg-arch-gold transition-colors"
              >
                現場の状況を相談する
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          PROBLEM
      ────────────────────────────────────────── */}
      <section className="relative bg-arch-cream py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-baseline justify-between border-b border-arch-rule pb-4 mb-12 md:mb-16">
            <SectionTag category="PROBLEM" number="02" label="こんな営業課題はありませんか" />
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
                <p className="text-sm text-arch-ink-soft leading-loose">{item.body}</p>
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
            <SectionTag category="SOLUTION" number="03" label="施設連携・営業支援の 3 機能" />
            <p className="mono-micro text-arch-ink-muted hidden sm:block">03 STRENGTHS</p>
          </div>

          <h2 className="display-jp text-3xl md:text-4xl text-arch-ink mb-6 max-w-3xl leading-[1.2]">
            営業テクニックではなく、
            <br />
            <span className="text-arch-forest">医院側の仕組みを整える。</span>
          </h2>
          <p className="text-base text-arch-ink-soft leading-loose max-w-2xl">
            施設対応・初診オペレーション・営業の属人化解消。3つの機能で、信頼が積み上がる体制を残します。
          </p>
        </div>

        {FEATURES.map((f, idx) => (
          <div
            key={f.num}
            className={`${idx % 2 === 0 ? "bg-arch-cream" : "bg-arch-cream-raised"} border-t border-arch-rule py-16 md:py-24`}
          >
            <div className="max-w-6xl mx-auto px-5 sm:px-8">
              <div className="grid md:grid-cols-12 gap-8 md:gap-14 items-start">
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
                    <p className="text-sm text-arch-ink-soft leading-loose">{card.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* ──────────────────────────────────────────
          TOOL — 施設の歯科対応 簡易診断（補助ツール）
      ────────────────────────────────────────── */}
      <section className="bg-arch-cream py-20 md:py-28 border-t border-arch-rule">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-baseline justify-between border-b border-arch-rule pb-4 mb-12 md:mb-16">
            <SectionTag category="TOOL" number="04" label="施設の歯科品質を診断する補助ツール" />
            <p className="mono-micro text-arch-ink-muted hidden sm:block">FREE</p>
          </div>

          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
            <div className="md:col-span-7">
              <h2 className="display-jp text-3xl md:text-4xl text-arch-ink leading-[1.2] mb-6">
                施設側の視点で、
                <br />
                <span className="text-arch-forest">今の歯科対応を採点する。</span>
              </h2>
              <p className="text-base text-arch-ink-soft leading-loose mb-6 max-w-2xl">
                施設連携の現場では、「今の歯科医院に不満はあるけれど、何が問題か言語化できない」というケースが多くあります。本ツールは、対応スピード・報告書の質・現場マナー・現場との連携・コンプライアンス・継続性の6項目で、施設側が今の歯科を5段階で評価できる簡易診断です。
              </p>
              <p className="text-sm text-arch-ink-soft leading-loose max-w-2xl mb-8">
                ご相談の中で「現状の歯科対応はどうですか？」という会話の入口に使うこともでき、施設連携支援の補助ツールとして無料でご利用いただけます。
              </p>
              <Link
                href="/services/dental-matching"
                className="inline-flex items-center gap-3 border border-arch-forest text-arch-forest px-6 py-3.5 text-sm font-bold tracking-[0.15em] hover:bg-arch-forest hover:text-arch-cream transition-colors"
              >
                診断ツールを使ってみる
                <ArrowRight size={16} />
              </Link>
            </div>

            <div className="md:col-span-5">
              <div className="border border-arch-rule-dark/20 bg-arch-cream-raised p-8 md:p-10">
                <p className="mono-micro text-arch-moss mb-4">6 ITEMS / 確認項目</p>
                <ul className="space-y-3">
                  {[
                    "対応スピード",
                    "報告書の質",
                    "接遇・現場マナー",
                    "現場との連携",
                    "コンプライアンス",
                    "継続性・体制",
                  ].map((item, i) => (
                    <li key={item} className="flex items-baseline gap-3 border-b border-arch-rule pb-2.5 last:border-b-0 last:pb-0">
                      <span className="mono-micro text-arch-moss tabular-nums w-6">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-sm text-arch-ink font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mono-micro text-arch-ink-muted mt-6 leading-loose">
                  各項目 1〜5 段階。平均スコアから「即時切り替え／相談／継続推奨」の3段階で判定します。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          WHY ARCH — 元小学校教諭の信用要素を控えめに
      ────────────────────────────────────────── */}
      <section className="bg-arch-cream-raised py-20 md:py-28 border-t border-arch-rule">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="flex items-baseline justify-between border-b border-arch-rule pb-4 mb-12 md:mb-16">
            <SectionTag category="WHY" number="05" label="なぜ ARCH なのか" />
            <p className="mono-micro text-arch-ink-muted hidden sm:block">BACKGROUND</p>
          </div>

          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-start">
            <div className="md:col-span-7">
              <h2 className="display-jp text-3xl md:text-4xl text-arch-ink mb-8 leading-[1.25]">
                「型を残す」プロが、
                <br />
                <span className="text-arch-forest">医院に仕組みを置いていく。</span>
              </h2>
              <p className="text-base text-arch-ink-soft leading-loose mb-6 max-w-2xl">
                代表・鈴木集は元小学校教員。「人がどうすれば学び、再現できるか」を仕事にしてきたバックグラウンドが、医院側にスタッフ誰もが回せる仕組みを残す設計に活きています。
              </p>
              <p className="text-base text-arch-ink-soft leading-loose max-w-2xl">
                その後、横浜の広域医療法人にて歯科事務局長として経営再建を主導、北海道の医療グループで訪問歯科を単独立ち上げ・6ヶ月で黒字化。教育出身×歯科事務局×訪問歯科立ち上げの実務経験を、医院に持ち込みます。
              </p>
            </div>

            <div className="md:col-span-5">
              <div className="border border-arch-rule-dark/20 bg-arch-cream p-8 md:p-10">
                <p className="mono-micro text-arch-moss mb-4">BACKGROUND</p>
                <ul className="space-y-4">
                  <li>
                    <p className="mono-label text-arch-moss mb-1">01</p>
                    <p className="text-sm text-arch-ink font-medium">元小学校教員（公教育）</p>
                  </li>
                  <li>
                    <p className="mono-label text-arch-moss mb-1">02</p>
                    <p className="text-sm text-arch-ink font-medium">広域医療法人 歯科事務局長</p>
                  </li>
                  <li>
                    <p className="mono-label text-arch-moss mb-1">03</p>
                    <p className="text-sm text-arch-ink font-medium">医療グループ 訪問歯科立ち上げ・6ヶ月黒字化</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          BEFORE / AFTER
      ────────────────────────────────────────── */}
      <section className="relative bg-arch-forest text-arch-cream py-20 md:py-28 overflow-hidden">
        <div className="absolute top-6 left-6 md:top-8 md:left-10 pointer-events-none">
          <span className="mono-label text-arch-sage/70">TRANSFORMATION — 06 / 変化</span>
        </div>
        <div className="absolute top-6 right-6 md:top-8 md:right-10 pointer-events-none text-right">
          <span className="mono-micro text-arch-sage/60">BEFORE × AFTER</span>
        </div>

        <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
          <p className="mono-label text-arch-gold mb-6">BEFORE &amp; AFTER</p>
          <h2 className="display-jp text-4xl md:text-6xl text-arch-cream mb-6 max-w-3xl leading-[1.1]">
            導入医院に起きる、
            <br />
            <span className="text-arch-gold">3つの変化。</span>
          </h2>
          <p className="text-base md:text-lg text-arch-sage/80 leading-loose max-w-2xl mb-16 md:mb-20">
            営業をテクニックではなく<strong className="text-arch-cream">「医院側の仕組み」</strong>に置き換えた時、現場は静かに、しかし確実に変わります。
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
