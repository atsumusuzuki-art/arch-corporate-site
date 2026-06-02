import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowLeft, Check } from "lucide-react";

export const metadata = {
  title: "お問い合わせありがとうございます｜合同会社ARCH",
  description:
    "お問い合わせを承りました。鈴木より折り返しご連絡いたします。",
  robots: { index: false, follow: false },
};

const RECOMMENDED_NOTES = [
  {
    href: "/columns/turnover-strategy",
    cat: "現場運営",
    title: "「あの人が辞めたら終わる」状態から、抜け出せていますか？",
  },
  {
    href: "/columns/facility-collaboration",
    cat: "訪問歯科",
    title: "施設が本当に求めているのは「治療の腕」ではない。",
  },
  {
    href: "/columns/profit-trap",
    cat: "経営改善",
    title: "忙しいのに利益が残らない医院。現場が見落としている罠",
  },
];

const SERVICES = [
  { href: "/services/external-manager", title: "歯科医院の外部事務長とは", desc: "ARCHのコンセプト" },
  { href: "/services/visit-dental-startup", title: "訪問歯科立ち上げ支援", desc: "未経験から立ち上げまで" },
  { href: "/services/facility-growth", title: "施設連携・利用者増加支援", desc: "施設導線の作り直し" },
  { href: "/services/branch-startup", title: "分院立ち上げ支援", desc: "業者・採用・HP まで" },
  { href: "/services/fee-standards", title: "算定・施設基準支援", desc: "改定・届出・レセコン" },
  { href: "/services/consulting", title: "料金プラン", desc: "顧問〜外部事務長まで 3 プラン" },
];

export default function ThanksPage() {
  return (
    <div className="min-h-screen bg-arch-cream text-arch-ink">
      {/* ヘッダー */}
      <header className="bg-arch-forest border-b border-arch-rule-dark">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-3 md:py-4 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 mono-label text-arch-sage hover:text-white transition-colors"
          >
            <ArrowLeft size={14} strokeWidth={2} />
            <span>BACK / トップへ</span>
          </Link>
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.jpg"
              alt="合同会社ARCH"
              width={120}
              height={120}
              className="h-8 md:h-9 w-auto"
            />
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="display-jp text-arch-cream text-sm">合同会社ARCH</span>
              <span className="mono-micro text-arch-sage/70 tracking-[0.18em]">歯科医院の外部事務長</span>
            </span>
          </Link>
        </div>
      </header>

      {/* HERO — お問い合わせありがとうございます */}
      <section className="bg-arch-forest text-arch-cream py-20 md:py-32 border-b border-arch-rule-dark">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 border-2 border-arch-gold rounded-full mb-8 mx-auto">
            <Check size={28} strokeWidth={2.5} className="text-arch-gold" />
          </div>
          <p className="mono-label text-arch-gold mb-6">THANK YOU</p>
          <h1 className="display-jp text-3xl sm:text-4xl md:text-5xl text-arch-cream leading-[1.25] mb-8">
            お問い合わせ、
            <br />
            ありがとうございます。
          </h1>
          <p className="text-base md:text-lg text-arch-sage/90 leading-loose">
            内容を確認のうえ、鈴木より折り返しご連絡いたします。
            <br className="hidden sm:block" />
            通常、2 〜 3 営業日以内にお返事しております。
          </p>
        </div>
      </section>

      {/* ARCH について */}
      <section className="bg-arch-cream py-16 md:py-20 border-b border-arch-rule">
        <div className="max-w-3xl mx-auto px-5 sm:px-8">
          <p className="mono-label text-arch-moss mb-4">ABOUT ARCH</p>
          <h2 className="display-jp text-2xl md:text-3xl text-arch-ink mb-6 leading-snug">
            ご返信までの間に、
            <br />
            ARCH について知っていただければ。
          </h2>
          <p className="text-base text-arch-ink-soft leading-loose">
            ARCH は「歯科医院の外部事務長」として、訪問歯科、外来、分院展開、レセプト、採用、HP まで、医院運営に必要な実務を院長の隣で整理しています。経営コンサルでも、訪問歯科の専門家でもありません。院長が一人で抱えがちな課題を、外部の立場で受け止めて回す役割です。
          </p>
        </div>
      </section>

      {/* おすすめ記事 */}
      <section className="bg-arch-cream-raised py-16 md:py-20 border-b border-arch-rule">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="flex items-baseline justify-between border-b border-arch-rule pb-4 mb-10">
            <p className="mono-label text-arch-moss">ARCH NOTE — 現場メモ</p>
            <Link
              href="/columns"
              className="mono-micro text-arch-forest hover:text-arch-forest-soft inline-flex items-center gap-1.5"
            >
              すべて読む <ArrowRight size={11} />
            </Link>
          </div>

          <ul className="border-t border-arch-rule">
            {RECOMMENDED_NOTES.map((n) => (
              <li key={n.href} className="border-b border-arch-rule">
                <Link
                  href={n.href}
                  className="group grid grid-cols-12 gap-3 md:gap-6 py-5 md:py-6 hover:bg-arch-cream transition-colors -mx-3 px-3"
                >
                  <div className="col-span-12 md:col-span-2">
                    <span className="mono-label text-arch-moss">{n.cat}</span>
                  </div>
                  <div className="col-span-12 md:col-span-9">
                    <h3 className="text-sm md:text-base font-bold leading-relaxed text-arch-ink group-hover:text-arch-forest transition-colors">
                      {n.title}
                    </h3>
                  </div>
                  <div className="hidden md:flex col-span-1 items-start justify-end pt-1">
                    <ArrowRight
                      size={14}
                      className="text-arch-ink-muted group-hover:text-arch-forest group-hover:translate-x-1 transition-all"
                    />
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* サービス紹介 */}
      <section className="bg-arch-cream py-16 md:py-20 border-b border-arch-rule">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="flex items-baseline justify-between border-b border-arch-rule pb-4 mb-10">
            <p className="mono-label text-arch-moss">SERVICE — 課題別の詳しいページ</p>
          </div>

          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-arch-rule">
            {SERVICES.map((s) => (
              <li key={s.href} className="border-b border-r border-arch-rule">
                <Link
                  href={s.href}
                  className="group block py-5 md:py-6 px-5 md:px-6 h-full hover:bg-arch-cream-raised transition-colors"
                >
                  <p className="display-jp text-sm md:text-base text-arch-ink group-hover:text-arch-forest transition-colors mb-1.5">
                    {s.title}
                  </p>
                  <p className="text-xs text-arch-ink-soft leading-relaxed">{s.desc}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 代表紹介 */}
      <section className="bg-arch-cream-raised py-16 md:py-20 border-b border-arch-rule">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <div className="border-b border-arch-rule pb-4 mb-10">
            <p className="mono-label text-arch-moss">MESSAGE — 代表より</p>
          </div>

          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
            <div className="md:col-span-3">
              <div className="aspect-[3/4] max-w-[200px] md:max-w-none bg-arch-forest overflow-hidden">
                <Image
                  src="/images/ceo.jpg"
                  alt="代表 鈴木 集"
                  width={400}
                  height={533}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-9">
              <p className="text-sm md:text-base text-arch-ink-soft leading-loose mb-6">
                お問い合わせいただきありがとうございます。代表の鈴木です。
                <br />
                医院ごとに課題は異なりますので、まずは現在の状況を伺ったうえで、ARCH として何ができるか、また何をすべきでないかを率直にお伝えします。
              </p>
              <p className="display-jp text-arch-ink text-xl md:text-2xl mb-1">
                鈴木 集 <span className="mono-label text-arch-ink-muted ml-3">Atsumu Suzuki</span>
              </p>
              <p className="mono-label text-arch-moss">合同会社ARCH 代表</p>
            </div>
          </div>
        </div>
      </section>

      {/* フッターへの戻り */}
      <section className="bg-arch-ink text-arch-cream py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <p className="text-sm md:text-base text-arch-sage/80 leading-loose mb-6">
            メールが届かない場合は、迷惑メールフォルダもご確認ください。
            <br />
            ご返信に時間がかかる場合は、お手数ですが再度ご連絡いただけますと幸いです。
          </p>
          <Link
            href="/"
            className="inline-flex items-center gap-3 border border-arch-cream text-arch-cream px-7 py-3.5 text-sm font-bold tracking-[0.15em] hover:bg-arch-cream hover:text-arch-forest transition-colors"
          >
            <ArrowLeft size={16} />
            トップページへ戻る
          </Link>
        </div>
      </section>

      <footer className="bg-arch-ink text-arch-sage py-8 border-t border-arch-rule-dark">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 text-center">
          <p className="mono-micro text-arch-sage/50">
            &copy; {new Date().getFullYear()} 合同会社ARCH ALL RIGHTS RESERVED.
          </p>
        </div>
      </footer>
    </div>
  );
}
