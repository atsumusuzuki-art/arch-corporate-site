/**
 * ServiceInquiryForm — サービス別 お申込みフォーム
 *
 * FormSubmit.co 経由で atsumu.suzuki@arch-yh.com に送信。
 * 必須5項目: 医院名・院長名・所在地・メール・電話
 *
 * 申込種別の選択に対応（`types` プロップ）:
 *   `types` を渡すとラジオボタンが表示され、選んだ項目の `subjectTag` が
 *   そのままメール件名（_subject）になる。JSなしで件名を切り替えるため
 *   `name="_subject"` の value をラジオに直接束ねている。
 *
 *   `types` を省略した場合は従来通り単一の `subjectTag` を使う。
 */

import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ApplicationType = {
  /** ラジオのキー（フォーム内で一意） */
  value: string;
  /** 表示ラベル（日本語） */
  label: string;
  /** 補足説明（任意） */
  description?: string;
  /** 選択時にそのままメール件名になる文字列 */
  subjectTag: string;
  /** 初期選択にするか */
  defaultChecked?: boolean;
};

type Props = {
  /** ラジオで複数選択肢を出す場合に指定。未指定時は subjectTag を直接使う */
  types?: ApplicationType[];
  /** types 未指定時に使う固定件名 */
  subjectTag?: string;
  /** フォーム見出し */
  heading: string;
  /** 補足説明（任意） */
  description?: string;
  /** フォーム下部の注記（任意） */
  notes?: string[];
  /** 送信後に戻すURL */
  thankYouUrl?: string;
  /** 一意なID（同ページ内に複数フォームを置く際の name 衝突回避用） */
  idPrefix: string;
  /** 送信ボタン文言 */
  submitLabel?: string;
};

export default function ServiceInquiryForm({
  types,
  subjectTag,
  heading,
  description,
  notes,
  thankYouUrl = "https://arch-yh.com/#contact",
  idPrefix,
  submitLabel = "この内容で申込む",
}: Props) {
  const useRadio = types && types.length > 0;

  return (
    <div className="bg-arch-cream border border-arch-forest/20 p-8 md:p-10">
      <div className="flex items-baseline justify-between border-b border-arch-rule pb-4 mb-8">
        <p className="mono-label text-arch-forest">APPLY / お申込みフォーム</p>
        <p className="mono-micro text-arch-ink-muted">
          {useRadio ? `${5 + 1} FIELDS` : "5 FIELDS"}
        </p>
      </div>

      <h4 className="display-jp text-xl md:text-2xl text-arch-ink mb-3">{heading}</h4>
      {description && (
        <p className="text-sm text-arch-ink-soft leading-loose mb-8 max-w-2xl">
          {description}
        </p>
      )}

      <form
        action="https://formsubmit.co/atsumu.suzuki@arch-yh.com"
        method="POST"
        className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5"
      >
        {/* FormSubmit.co 設定 */}
        {!useRadio && subjectTag && (
          <input type="hidden" name="_subject" value={subjectTag} />
        )}
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_next" value={thankYouUrl} />
        {/* ハニーポット（スパム対策） */}
        <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

        {/* Radio: 申込種別 */}
        {useRadio && (
          <fieldset className="md:col-span-2 border border-arch-rule bg-arch-cream-raised p-5 md:p-6">
            <legend className="mono-micro text-arch-ink-muted px-2">
              お申込み内容 <span className="text-arch-forest">*</span>
            </legend>
            <div className="grid sm:grid-cols-2 gap-4 mt-3">
              {types!.map((t, i) => (
                <label
                  key={t.value}
                  className="flex items-start gap-3 cursor-pointer p-4 border border-arch-rule bg-arch-cream hover:bg-arch-cream-raised transition-colors"
                >
                  <input
                    type="radio"
                    name="_subject"
                    value={t.subjectTag}
                    defaultChecked={t.defaultChecked ?? i === 0}
                    required
                    className="mt-1"
                  />
                  <div className="flex-1">
                    <span className="display-jp text-base text-arch-ink block">
                      {t.label}
                    </span>
                    {t.description && (
                      <span className="mono-micro text-arch-ink-muted block mt-1">
                        {t.description}
                      </span>
                    )}
                  </div>
                </label>
              ))}
            </div>
          </fieldset>
        )}

        <div className="md:col-span-2">
          <label
            htmlFor={`${idPrefix}-clinic`}
            className="mono-micro text-arch-ink-muted block mb-2"
          >
            医院名 <span className="text-arch-forest">*</span>
          </label>
          <input
            id={`${idPrefix}-clinic`}
            type="text"
            name="医院名"
            required
            className="w-full bg-arch-cream-raised border border-arch-rule focus:border-arch-forest px-4 py-3 text-sm text-arch-ink outline-none transition-colors"
            placeholder="〇〇歯科医院"
          />
        </div>

        <div>
          <label
            htmlFor={`${idPrefix}-director`}
            className="mono-micro text-arch-ink-muted block mb-2"
          >
            院長名 <span className="text-arch-forest">*</span>
          </label>
          <input
            id={`${idPrefix}-director`}
            type="text"
            name="院長名"
            required
            className="w-full bg-arch-cream-raised border border-arch-rule focus:border-arch-forest px-4 py-3 text-sm text-arch-ink outline-none transition-colors"
            placeholder="山田 太郎"
          />
        </div>

        <div>
          <label
            htmlFor={`${idPrefix}-address`}
            className="mono-micro text-arch-ink-muted block mb-2"
          >
            所在地 <span className="text-arch-forest">*</span>
          </label>
          <input
            id={`${idPrefix}-address`}
            type="text"
            name="所在地"
            required
            className="w-full bg-arch-cream-raised border border-arch-rule focus:border-arch-forest px-4 py-3 text-sm text-arch-ink outline-none transition-colors"
            placeholder="東京都世田谷区〜"
          />
        </div>

        <div>
          <label
            htmlFor={`${idPrefix}-email`}
            className="mono-micro text-arch-ink-muted block mb-2"
          >
            メールアドレス <span className="text-arch-forest">*</span>
          </label>
          <input
            id={`${idPrefix}-email`}
            type="email"
            name="メールアドレス"
            required
            className="w-full bg-arch-cream-raised border border-arch-rule focus:border-arch-forest px-4 py-3 text-sm text-arch-ink outline-none transition-colors"
            placeholder="name@example.com"
          />
        </div>

        <div>
          <label
            htmlFor={`${idPrefix}-tel`}
            className="mono-micro text-arch-ink-muted block mb-2"
          >
            電話番号 <span className="text-arch-forest">*</span>
          </label>
          <input
            id={`${idPrefix}-tel`}
            type="tel"
            name="電話番号"
            required
            className="w-full bg-arch-cream-raised border border-arch-rule focus:border-arch-forest px-4 py-3 text-sm text-arch-ink outline-none transition-colors"
            placeholder="03-0000-0000"
          />
        </div>

        <div className="md:col-span-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-4 border-t border-arch-rule mt-2">
          <p className="mono-micro text-arch-ink-muted">
            送信内容は <span className="text-arch-forest">atsumu.suzuki@arch-yh.com</span> に届きます
          </p>
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-3 bg-arch-forest text-arch-cream px-7 py-3.5 text-sm font-bold tracking-[0.15em] hover:bg-arch-gold hover:text-arch-ink transition-colors"
          >
            {submitLabel}
            <ArrowRight size={16} />
          </button>
        </div>
      </form>

      {notes && notes.length > 0 && (
        <ul className="mono-micro text-arch-ink-muted mt-6 space-y-1 border-t border-arch-rule pt-6">
          {notes.map((n, i) => (
            <li key={i}>※ {n}</li>
          ))}
        </ul>
      )}

      <p className="mono-micro text-arch-ink-muted mt-6">
        別のご相談をご希望の方は{" "}
        <Link href="/#contact" className="underline hover:text-arch-forest transition-colors">
          トップページの一般問い合わせフォーム
        </Link>
        {" "}をご利用ください。
      </p>
    </div>
  );
}
