/**
 * ContactForm — 全ページ共通の問い合わせフォーム
 * ------------------------------------------------------------------
 * ・送信先は既存の FormSubmit.co のまま。壊さない。
 *   受信用アドレスは画面に出さない（迷惑メール対策）。ただし form の action には
 *   まだアドレスが含まれるため、HTML を見れば読める。完全に隠すには
 *   FormSubmit のランダムなエンドポイントへの差し替えが必要。
 * ・トップ / 外部事務長 / 訪問歯科 / 支援実績 / コラム / 会社概要 のすべてで
 *   このコンポーネントだけを使う（フォーム設定の分裂を解消するため）。
 * ・送信後は /thanks へ遷移し、そこで受付完了を表示する。
 * ・料金プラン・予算・売上・患者数は聞かない。
 * ・見出しは「初回適性相談」。ARCHと組むべきかを最初に整理する場であり、
 *   「何でも無料で相談できる場」には見せない（無料の範囲に含めないものを明示する）。
 *
 * JavaScript なしで動く素の form なので Server Component のまま置ける。
 * 同一ページに複数置く場合に id が衝突しないよう idPrefix を必ず変える。
 */

import Link from "next/link";
import { SITE_URL } from "@/lib/site";

type Props = {
  /** 同一ページ内で id が衝突しないようにする接頭辞 */
  idPrefix?: string;
  /** 見出しの上に置く一言（トップページなど、営業色を弱めたい場所で使う） */
  intro?: string;
  /** 相談種別の初期選択（ページごとに変える） */
  defaultTopic?: "外部事務長" | "訪問歯科コンサルティング" | "どちらに当てはまるか相談したい";
};

const TOPICS = [
  "外部事務長",
  "訪問歯科コンサルティング",
  "どちらに当てはまるか相談したい",
] as const;

/** 見出しの表示上の 2 行 */
const HEADING_LINES = ["ARCHと組むべきかを、", "最初に整理します。"];

/** 初回適性相談で確認すること */
const CHECKS = ["医院の目的", "現状", "体制", "資金", "訪問歯科との適性", "ARCHとの相性"];

/** 初回適性相談（無料）には含めないもの。ARCHフィロソフィー「相談は開く。責任は有料」 */
const NOT_INCLUDED = ["詳細な診断書", "実行計画書", "資料の作成", "同行", "実装の責任"];

const STEPS = [
  "フォームから送信",
  "原則2営業日以内にメールでご連絡",
  "30分のオンライン初回適性相談（無料）",
];

const fieldClass =
  "w-full min-h-11 rounded-[2px] border border-arch-rule bg-arch-paper px-4 py-3 text-base text-arch-ink outline-none transition-colors focus:border-arch-deep focus:bg-arch-white";

const labelClass = "block text-[0.95rem] font-bold text-arch-ink";

/** 必須マーク。色だけに頼らず「必須」の文字も併記する */
function Required() {
  return (
    <span className="ml-2 align-middle text-xs font-bold text-arch-forest">必須</span>
  );
}

function Optional() {
  return (
    <span className="ml-2 align-middle text-xs font-bold text-arch-ink-muted">任意</span>
  );
}

export default function ContactForm({
  idPrefix = "contact",
  intro,
  defaultTopic = "どちらに当てはまるか相談したい",
}: Props) {
  const id = (name: string) => `${idPrefix}-${name}`;

  return (
    <section
      id="contact"
      aria-label="初回適性相談"
      className="scroll-mt-20 border-t border-arch-rule bg-arch-white"
    >
      <div className="mx-auto max-w-[1280px] px-5 py-[76px] sm:px-6 md:py-[112px] lg:px-10 lg:py-[136px]">
        <div className="grid gap-12 md:gap-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          {/* 左：見出しと流れ */}
          <div>
            <p className="mono-micro flex items-center gap-3 text-arch-green">
              <span>FIRST CONSULTATION</span>
            </p>
            {intro && (
              <p className="mt-6 max-w-[34rem] text-[0.95rem] leading-[1.9] text-arch-ink-soft">
                {intro}
              </p>
            )}
            {/* h2 は 1 つのまま。PC・スマホとも意味の切れ目で必ず 2 行にする */}
            <h2 className="display-jp mt-5 text-[clamp(1.5rem,3.2vw,2.25rem)] leading-[1.5] text-arch-ink">
              {HEADING_LINES.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <p className="mt-7 max-w-[36rem] text-base leading-[1.95] text-arch-ink-soft">
              {CHECKS.join("、")}を確認します。
              <br />
              支援をお受けするかどうかも、ここで判断します。
            </p>

            <div className="mt-8 border-l-2 border-arch-deep bg-arch-pale px-5 py-5">
              <p className="text-[0.875rem] font-bold text-arch-deep">
                初回適性相談（無料）に含まれないもの
              </p>
              <p className="mt-2 text-[0.9375rem] leading-[1.9] text-arch-ink">
                {NOT_INCLUDED.join("・")}
              </p>
              <p className="mt-2 text-[0.8125rem] leading-[1.8] text-arch-ink-soft">
                これらは、支援の範囲を決めたうえで有料でお引き受けします。
              </p>
            </div>

            <ol className="mt-10 border-t border-arch-rule">
              {STEPS.map((s, i) => (
                <li
                  key={s}
                  className="flex items-baseline gap-5 border-b border-arch-rule py-4"
                >
                  <span className="mono-micro text-arch-green tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[0.95rem] leading-[1.8] text-arch-ink">{s}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* 右：フォーム本体 */}
          <div>
            <form
              action="https://formsubmit.co/hello@arch-yh.com"
              method="POST"
              className="grid grid-cols-1 gap-6 sm:grid-cols-2"
            >
              {/* FormSubmit.co の設定（既存の送信先をそのまま使う） */}
              <input type="hidden" name="_subject" value="【ARCH】サイトからの相談" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value={`${SITE_URL}/thanks`} />
              {/* ハニーポット（スパム対策）。スクリーンリーダーからも隠す */}
              <input
                type="text"
                name="_honey"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                style={{ display: "none" }}
              />

              {/* 相談種別 */}
              <fieldset className="sm:col-span-2 rounded-[2px] border border-arch-rule bg-arch-paper p-5 md:p-6">
                <legend className="px-2 text-[0.95rem] font-bold text-arch-ink">
                  相談種別
                  <Required />
                </legend>
                <div className="mt-2 space-y-1">
                  {TOPICS.map((t) => (
                    <label
                      key={t}
                      className="flex min-h-11 cursor-pointer items-center gap-3 text-[0.95rem] text-arch-ink"
                    >
                      <input
                        type="radio"
                        name="相談種別"
                        value={t}
                        required
                        defaultChecked={t === defaultTopic}
                        className="h-5 w-5 accent-[#08533C]"
                      />
                      <span>{t}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <div>
                <label htmlFor={id("name")} className={labelClass}>
                  お名前
                  <Required />
                </label>
                <input
                  id={id("name")}
                  name="お名前"
                  type="text"
                  required
                  autoComplete="name"
                  className={`${fieldClass} mt-2`}
                />
              </div>

              <div>
                <label htmlFor={id("clinic")} className={labelClass}>
                  医院・法人名
                  <Required />
                </label>
                <input
                  id={id("clinic")}
                  name="医院・法人名"
                  type="text"
                  required
                  autoComplete="organization"
                  className={`${fieldClass} mt-2`}
                />
              </div>

              <div>
                <label htmlFor={id("area")} className={labelClass}>
                  所在地
                  <Required />
                </label>
                <input
                  id={id("area")}
                  name="所在地"
                  type="text"
                  required
                  aria-describedby={id("area-hint")}
                  className={`${fieldClass} mt-2`}
                />
                <p id={id("area-hint")} className="mt-2 text-sm text-arch-ink-muted">
                  市区町村までご記入ください。
                </p>
              </div>

              <div>
                <label htmlFor={id("email")} className={labelClass}>
                  メールアドレス
                  <Required />
                </label>
                <input
                  id={id("email")}
                  name="メールアドレス"
                  type="email"
                  required
                  autoComplete="email"
                  className={`${fieldClass} mt-2`}
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor={id("tel")} className={labelClass}>
                  電話番号
                  <Optional />
                </label>
                <input
                  id={id("tel")}
                  name="電話番号"
                  type="tel"
                  autoComplete="tel"
                  className={`${fieldClass} mt-2 sm:max-w-xs`}
                />
              </div>

              <div className="sm:col-span-2">
                <label htmlFor={id("message")} className={labelClass}>
                  ご相談内容
                  <Required />
                </label>
                <textarea
                  id={id("message")}
                  name="ご相談内容"
                  required
                  rows={7}
                  aria-describedby={id("message-hint")}
                  className={`${fieldClass} mt-2 resize-y leading-[1.8]`}
                />
                <p id={id("message-hint")} className="mt-2 text-sm text-arch-ink-soft">
                  患者さんやスタッフ個人を特定できる情報は入力しないでください。
                </p>
              </div>

              <div className="sm:col-span-2 border-t border-arch-rule pt-6">
                <label
                  htmlFor={id("consent")}
                  className="flex min-h-11 cursor-pointer items-start gap-3 text-[0.95rem] leading-[1.8] text-arch-ink"
                >
                  <input
                    id={id("consent")}
                    name="プライバシーポリシーへの同意"
                    type="checkbox"
                    value="同意する"
                    required
                    className="mt-1 h-5 w-5 shrink-0 accent-[#08533C]"
                  />
                  <span>
                    <Link
                      href="/privacy"
                      className="underline underline-offset-4 hover:text-arch-forest"
                    >
                      プライバシーポリシー
                    </Link>
                    に同意します
                    <Required />
                  </span>
                </label>
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="inline-flex min-h-14 w-full items-center justify-center rounded-[2px] bg-arch-deep px-10 text-base font-bold text-arch-white transition-colors hover:bg-arch-green sm:w-auto"
                >
                  初回適性相談を申し込む
                </button>
                {/* 迷惑メール対策のため、受信用アドレスは画面に出さない */}
                <p className="mt-4 text-sm text-arch-ink-muted">
                  原則2営業日以内に、担当よりメールでご連絡します。
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
