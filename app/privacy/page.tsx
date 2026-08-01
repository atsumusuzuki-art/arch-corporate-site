import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import PageHero from "@/components/PageHero";
import { COMPANY, absoluteUrl, OG_IMAGE } from "@/lib/site";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description:
    "合同会社ARCHのプライバシーポリシーです。お問い合わせフォームで取得する情報の扱い、Google Analytics と Cookie の利用、第三者提供、開示等の請求について記載しています。",
  alternates: { canonical: absoluteUrl("/privacy") },
  openGraph: {
    type: "website",
    url: absoluteUrl("/privacy"),
    title: "プライバシーポリシー｜合同会社ARCH",
    description: "取得する情報の扱い、Cookie と Google Analytics の利用について。",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "プライバシーポリシー｜合同会社ARCH" }],
  },
};

export default function PrivacyPage() {
  return (
    <>
      <Breadcrumb
        items={[{ label: "ホーム", href: "/" }, { label: "プライバシーポリシー" }]}
      />

      <PageHero
        eyebrow="PRIVACY"
        title="プライバシーポリシー"
        lead="合同会社ARCH（以下「当社」）は、当サイトでお預かりする情報を以下のとおり取り扱います。"
      />

      <article className="bg-arch-cream">
        <div className="mx-auto max-w-[720px] px-6 py-24 md:py-36 lg:px-10">
          <div className="prose-custom">
            <h2>1. 取得する情報</h2>
            <p>
              当サイトのお問い合わせフォームでは、次の情報を取得します。
            </p>
            <ul>
              <li>お名前</li>
              <li>医院・法人名</li>
              <li>所在地（市区町村まで）</li>
              <li>メールアドレス</li>
              <li>電話番号（任意）</li>
              <li>相談種別</li>
              <li>ご相談内容</li>
            </ul>
            <p>
              フォームには、患者さん・スタッフなど個人を特定できる情報を入力しないようお願いしています。
              万一そうした情報が含まれていた場合、当社は対応に必要な範囲を超えて保存・利用しません。
            </p>

            <h2>2. 利用目的</h2>
            <ul>
              <li>お問い合わせへの回答および初回相談の日程調整のため</li>
              <li>ご依頼いただいた業務の遂行および連絡のため</li>
              <li>当社サービスに関するご案内のため</li>
            </ul>
            <p>上記の目的以外には利用しません。</p>

            <h2>3. お問い合わせフォームの送信について</h2>
            <p>
              当サイトのお問い合わせフォームは、外部サービス「FormSubmit」（https://formsubmit.co）を利用して、
              入力内容を当社のメールアドレス（{COMPANY.email}）へ送信しています。
              送信の過程で入力内容が同サービスを経由します。
            </p>

            <h2>4. Cookie と Google Analytics の利用</h2>
            <p>
              当サイトでは、サイトの利用状況を把握し改善するために、Google LLC が提供する
              アクセス解析ツール「Google Analytics 4」を利用しています。
              Google Analytics は Cookie を使用して、閲覧されたページ、滞在時間、参照元、
              おおまかな地域といった情報を、個人を特定しない形で収集します。
            </p>
            <p>
              当サイトでは、お問い合わせフォームの送信が完了したこと（送信完了ページの表示）も、
              個人を特定しない形で計測しています。フォームに入力された内容そのものを
              Google Analytics に送信することはありません。
            </p>
            <p>
              Cookie の受け入れは、ブラウザの設定で拒否することができます。
              また、Google が提供するオプトアウト用のアドオンを利用して、
              Google Analytics による収集を停止することもできます。
              収集される情報の取り扱いについては、Google のプライバシーポリシーをご確認ください。
            </p>

            <h2>5. 第三者への提供</h2>
            <p>
              当社は、法令に基づく場合を除き、ご本人の同意なく個人情報を第三者に提供しません。
              業務の遂行に必要な範囲で外部に委託する場合は、委託先に適切な監督を行います。
            </p>

            <h2>6. 情報の管理</h2>
            <p>
              お預かりした情報は、漏えい・滅失・毀損の防止に必要な措置を講じて管理します。
              利用目的を達成し、保存の必要がなくなった情報は、適切な方法で消去します。
            </p>

            <h2>7. 開示・訂正・削除の請求</h2>
            <p>
              ご本人からの求めにより、当社が保有する個人情報の開示・訂正・利用停止・削除に応じます。
              下記の連絡先までご連絡ください。
            </p>

            <h2>8. 本ポリシーの変更</h2>
            <p>
              内容を変更する場合は、当ページに掲載します。変更後の内容は、掲載した時点から適用されます。
            </p>

            <h2>9. お問い合わせ先</h2>
            <p>
              {COMPANY.name}
              <br />
              所在地：{COMPANY.addressLabel}
              <br />
              メール：{COMPANY.email}
            </p>
            <p>
              制定日：2026年8月1日
            </p>
            <p>
              サービスの内容については
              <Link href="/services/external-manager">外部事務長</Link>
              および
              <Link href="/services/visit-dental-consulting">訪問歯科コンサルティング</Link>
              をご覧ください。
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
