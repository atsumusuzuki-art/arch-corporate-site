import type { Metadata } from "next";
import { Inter, Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { COMPANY, OG_IMAGE, SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/site";
import { BRAND_LOGO } from "@/lib/brand";

/* 基本書体：Noto Sans JP（本文・ナビ・ボタン・基本の見出し） */
const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

/* 明朝：HERO・ARCH Philosophy・代表のことばなど、用途を限定して使う。
   ファーストビューの見出しにも使うが、本文には使わない */
const notoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  subsets: ["latin"],
  weight: ["500", "600"],
  display: "swap",
  preload: false,
});

/* 英字ラベル・番号・メタ情報（DENTAL OPERATIONS PARTNER / CASE 番号など） */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

/** GA4 測定 ID */
const GA_MEASUREMENT_ID = "G-RLJ2058GWZ";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "歯科医院の外部事務長／訪問歯科コンサルティング｜合同会社ARCH",
    template: `%s｜${SITE_NAME}`,
  },
  description:
    "合同会社ARCHは、訪問歯科を入口に、歯科医院の立ち上げ・運営・承継を支える外部事務長会社です。助言だけで終わらず、現場で機能する状態までつくり、仕組みとして医院に残します。",
  applicationName: SITE_NAME,
  authors: [{ name: `${SITE_NAME} 代表 ${COMPANY.representative}` }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: { email: false, address: false, telephone: false },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "歯科医院の外部事務長／訪問歯科コンサルティング｜合同会社ARCH",
    description:
      "訪問歯科を入口に、歯科医院の立ち上げ・運営・承継を支える外部事務長会社。助言だけで終わらず、現場で機能する状態までつくります。",
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: "合同会社ARCH" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "歯科医院の外部事務長／訪問歯科コンサルティング｜合同会社ARCH",
    description:
      "訪問歯科を入口に、歯科医院の立ち上げ・運営・承継を支える外部事務長会社。",
    images: [OG_IMAGE],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  // canonical はルートに置かない。
  // ここで指定すると全ページがトップの canonical を継承してしまうため、
  // 各ページの metadata.alternates.canonical で個別に指定する。
};

/**
 * サイト全体で共通の構造化データ
 * Organization / WebSite / Person の 3 つだけ。
 * サービスや記事はそれぞれのページ側で出す。
 */
const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: COMPANY.name,
      alternateName: COMPANY.nameKana,
      url: SITE_URL,
      logo: { "@type": "ImageObject", url: `${SITE_URL}${BRAND_LOGO.path}` },
      description:
        "訪問歯科を入口に、歯科医院の立ち上げ・運営・承継を支える外部事務長会社。助言だけで終わらず、現場で機能する状態までつくり、仕組みとして医院に残す。",
      foundingDate: COMPANY.founded,
      founder: { "@id": `${SITE_URL}/#atsumu-suzuki` },
      address: {
        "@type": "PostalAddress",
        addressCountry: "JP",
        addressRegion: COMPANY.addressRegion,
        addressLocality: COMPANY.addressLocality,
      },
      areaServed: { "@type": "Country", name: "日本" },
      contactPoint: {
        "@type": "ContactPoint",
        url: `${SITE_URL}/#contact`,
        contactType: "customer support",
        availableLanguage: ["ja"],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "ja",
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#atsumu-suzuki`,
      name: COMPANY.representative,
      alternateName: COMPANY.representativeEn,
      jobTitle: "代表",
      worksFor: { "@id": `${SITE_URL}/#organization` },
      url: absoluteUrl("/company"),
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <head>
        {/* JavaScript が無効な環境では、スクロール表示の要素を最初から見せる */}
        <noscript>
          <style>{`.arch-reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
      </head>
      <body
        className={`${notoSansJP.variable} ${notoSerifJP.variable} ${inter.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-arch-deep focus:px-5 focus:py-3 focus:text-arch-white"
        >
          本文へスキップ
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
      </body>
    </html>
  );
}
