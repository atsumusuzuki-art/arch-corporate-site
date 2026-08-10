/**
 * ContactForm — 全ページ共通の問い合わせフォーム
 * ------------------------------------------------------------------
 * ・送信先は既存の FormSubmit.co（hello@arch-yh.com）のまま。壊さない。
 * ・トップ / 外部事務長 / 訪問歯科 / 支援実績 / コラム / 会社概要 のすべてで
 *   このコンポーネントだけを使う（フォーム設定の分裂を解消するため）。
 * ・送信後は /thanks へ遷移し、そこで受付完了を表示する。
 * ・料金プラン・予算・売上・患者数は聞かない。
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

/** 見出しの表示上の 2 行。トップのファーストビューと同じ意味の切れ目にそろえる */
const HEADING_LINES = ["院長が一人で抱え始めたとき", "ARCHが入る。"];

const STEPS = [
  "お問い合わせ",
  "原則2営業日以内にメール",
  "30分のオンライン初回相談（無料）",
];

const fieldClass =
  "w-full min-h-11 border border-arch-rule bg-arch-cream-raised px-4 py-3 text-base text-arch-ink outline-none transition-colors focus:border-arch-forest";

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
    <section id="contact" className="bg-arch-cream-raised border-t border-arch-rule">
      <div className="mx-auto max-w-[1200px] px-6 lg:px-10 py-24 md:py-36">
        <div className="grid gap-12 md:gap-16 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)]">
          {/* 左：見出しと流れ */}
          <div>
            {intro && (
              <p className="mb-6 max-w-[34rem] text-[0.95rem] leading-[1.9] text-arch-ink-soft">
                {intro}
              </p>
            )}
            {/* h2 は 1 つのまま。PC・スマホとも意味の切れ目で必ず 2 行にする */}
            <h2 className="display-jp text-[clamp(1.375rem,4.5vw,1.75rem)] leading-[1.45] text-arch-ink">
              {HEADING_LINES.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </h2>
            <p className="mt-8 max-w-[36rem] text-base leading-[1.9] text-arch-ink-soft">
              初回相談で、現在の業務とARCHが担う範囲を整理します。
              <br />
              送信後、原則2営業日以内にご連絡します。
            </p>

            <ol className="mt-10 border-t border-arch-rule">
              {STEPS.map((s, i) => (
                <li
                  key={s}
                  className="flex items-baseline gap-5 border-b border-arch-rule py-5"
                >
                  <span className="mono-micro text-arch-gold-deep tabular-nums">
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
              <fieldset className="sm:col-span-2 border border-arch-rule bg-arch-cream p-5 md:p-6">
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
                        className="h-5 w-5 accent-[#0D3B2E]"
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
                    className="mt-1 h-5 w-5 shrink-0 accent-[#0D3B2E]"
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
                  className="inline-flex min-h-14 w-full items-center justify-center bg-arch-forest px-10 text-base font-bold text-arch-cream transition-colors hover:bg-arch-forest-soft sm:w-auto"
                >
                  相談内容を送る
                </button>
                <p className="mt-4 text-sm text-arch-ink-muted">
                  送信内容は {""}
                  <span className="text-arch-ink-soft">hello@arch-yh.com</span> に届きます。
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
