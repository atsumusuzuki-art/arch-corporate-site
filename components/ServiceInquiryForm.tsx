/**
 * ServiceInquiryForm — サービス別 お申込みフォーム
 *
 * FormSubmit.co 経由で atsumu.suzuki@arch-yh.com に送信。
 * 他の「無料相談」と区別するため、_subject に明確な識別子を含める。
 * 医院名・院長名・所在地・メール・電話 の5項目を必須入力。
 */

import Link from "next/link";
import { ArrowRight } from "lucide-react";

type Props = {
  /** メール件名（FormSubmit _subject）。例：「【お試しコンサル申込】〜」 */
  subjectTag: string;
  /** フォーム見出し。例：「お試しコンサルの申込」 */
  heading: string;
  /** 補足説明（任意） */
  description?: string;
  /** 送信後に表示する追記（任意。単発実地支援の交通費注意書きなどに） */
  notes?: string[];
  /** 送信後に戻すURL。省略時は現在ページ */
  thankYouUrl?: string;
  /** 一意なID（同ページ内に複数フォームを置く際の name 衝突回避に使用） */
  idPrefix: string;
  /** 送信ボタン文言 */
  submitLabel?: string;
};

export default function ServiceInquiryForm({
  subjectTag,
  heading,
  description,
  notes,
  thankYouUrl = "https://arch-yh.com/#contact",
  idPrefix,
  submitLabel = "この内容で申込む",
}: Props) {
  return (
    <div className="bg-arch-cream border border-arch-forest/20 p-8 md:p-10">
      <div className="flex items-baseline justify-between border-b border-arch-rule pb-4 mb-8">
        <p className="mono-label text-arch-forest">APPLY / お申込みフォーム</p>
        <p className="mono-micro text-arch-ink-muted">5 FIELDS</p>
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
        <input type="hidden" name="_subject" value={subjectTag} />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="table" />
        <input type="hidden" name="_next" value={thankYouUrl} />
        {/* ハニーポット（スパム対策） */}
        <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

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
