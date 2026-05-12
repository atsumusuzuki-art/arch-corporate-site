import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  display: "swap",
});

// TODO: 本番ドメインが決まったら "https://your-domain.com" を差し替えてください
const siteUrl = "https://arch-yh.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "合同会社ARCH｜歯科医院の外部事務長 — 外来・訪問・分院・運営・レセプト・DX",
    template: "%s｜合同会社ARCH - 歯科医院の外部事務長",
  },
  description:
    "歯科医院の運営・レセプト精度・施設連携・事務代行・業務DXを、外部事務長として現場実務まで入り込んで支援します。特に訪問歯科運営に強く、外来・分院展開まで医院運営全体を整理する伴走型パートナーです。",
  keywords: [
    "歯科医院 外部事務長",
    "歯科医院 運営支援",
    "歯科医院 運営改善",
    "歯科医院 分院展開",
    "歯科医院 レセプト",
    "歯科医院 事務代行",
    "歯科医院 DX",
    "歯科 開業支援",
    "歯科 ディーラー調整",
    "訪問歯科",
    "訪問歯科 外部事務長",
    "訪問歯科 運営",
    "訪問歯科 算定",
    "訪問歯科 施設連携",
    "訪問歯科 立ち上げ",
    "訪問歯科 黒字化",
    "歯科事務局",
    "合同会社ARCH",
    "ARCH アーチ",
  ],
  authors: [{ name: "合同会社ARCH" }],
  creator: "合同会社ARCH",
  publisher: "合同会社ARCH",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    url: siteUrl,
    siteName: "合同会社ARCH（アーチ）",
    title: "合同会社ARCH｜歯科医院の外部事務長",
    description:
      "歯科医院を「回り続ける組織」へ。外来・訪問歯科・分院・レセプト・事務・DX を現場実務まで入り込んで支援する外部事務長。特に訪問歯科運営に強い。",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "合同会社ARCH - 歯科医院の外部事務長",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "合同会社ARCH｜歯科医院の外部事務長",
    description:
      "歯科医院を「回り続ける組織」へ。外来・訪問・分院・レセプト・事務・DX を現場実務まで入り込んで支援。特に訪問歯科運営に強い。",
    images: ["/images/og-image.jpg"],
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
  alternates: {
    canonical: siteUrl,
  },
};

// 構造化データ (JSON-LD) — Google検索に企業情報・サービス情報を伝える
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "合同会社ARCH",
      alternateName: "アーチ",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/images/logo.jpg`,
      },
      description:
        "歯科医院の外部事務長として、外来・訪問歯科・分院・レセプト・施設連携・事務代行・DX を現場実務まで入り込んで支援する合同会社。元・歯科事務局長による現場主義の伴走で、特に訪問歯科運営に強い。歯科医院を「回り続ける組織」に。",
      foundingDate: "2024",
      founder: {
        "@type": "Person",
        name: "鈴木集",
        jobTitle: "代表",
      },
      contactPoint: {
        "@type": "ContactPoint",
        email: "atsumu.suzuki@arch-yh.com",
        contactType: "customer service",
        availableLanguage: "Japanese",
      },
      sameAs: [],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "合同会社ARCH（アーチ）",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "ja",
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#service`,
      name: "歯科医院の外部事務長",
      provider: { "@id": `${siteUrl}/#organization` },
      description:
        "歯科医院運営・レセプト精度改善・施設連携・事務代行・業務DXを、医院の外部事務長として現場実務まで入り込んで支援。特に訪問歯科運営に強い。",
      areaServed: {
        "@type": "Country",
        name: "Japan",
      },
      serviceType: [
        "歯科医院運営支援",
        "レセプト・算定改善支援",
        "施設連携・営業支援",
        "事務代行・BPO支援",
        "DX・業務改善支援",
        "訪問歯科運営支援",
        "分院立ち上げ支援",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} ${notoSansJP.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
