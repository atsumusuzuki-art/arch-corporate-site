import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// TODO: 本番ドメインが決まったら "https://your-domain.com" を差し替えてください
const siteUrl = "https://arch-yh.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "訪問歯科コンサルティングの合同会社ARCH｜立ち上げ・営業・算定をワンストップ支援",
    template: "%s｜合同会社ARCH - 訪問歯科コンサルティング",
  },
  description:
    "訪問歯科の立ち上げ・営業・算定・運営改善なら合同会社ARCH。訪問歯科コンサルティングのパイオニアとして、独自アプリと現場主義の伴走支援で貴院の黒字化と成長を実現します。医療介護特化型営業コンサルティング・老人ホーム紹介事業も展開。",
  keywords: [
    "訪問歯科",
    "訪問歯科コンサルティング",
    "訪問歯科 立ち上げ",
    "訪問歯科 どうやる",
    "訪問歯科 始め方",
    "訪問歯科 算定",
    "訪問歯科 営業",
    "訪問歯科 コンサル",
    "訪問歯科 黒字化",
    "訪問歯科 運営",
    "訪問歯科 導入支援",
    "医療介護 営業コンサルティング",
    "老人ホーム 紹介",
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
    title: "訪問歯科コンサルティングの合同会社ARCH｜立ち上げ・営業・算定をワンストップ支援",
    description:
      "訪問歯科の立ち上げ・営業・算定・運営改善なら合同会社ARCH。独自アプリと現場主義の伴走支援で貴院の黒字化を実現。",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "合同会社ARCH - 訪問歯科コンサルティング",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "訪問歯科コンサルティングの合同会社ARCH",
    description:
      "訪問歯科の立ち上げ・営業・算定・運営改善なら合同会社ARCH。独自アプリと現場主義の伴走支援で貴院の黒字化を実現。",
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
        "訪問歯科コンサルティング・医療介護特化型営業コンサルティング・老人ホーム紹介事業を展開。訪問歯科の立ち上げから黒字化まで現場主義でワンストップ支援。",
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
      name: "訪問歯科コンサルティング",
      provider: { "@id": `${siteUrl}/#organization` },
      description:
        "訪問歯科診療の立ち上げ・営業・算定・運営改善をワンストップで支援。独自アプリケーションの提供、医院ネットワークの構築、BPO・経営改善まで対応。",
      areaServed: {
        "@type": "Country",
        name: "Japan",
      },
      serviceType: [
        "訪問歯科コンサルティング",
        "訪問歯科 立ち上げ支援",
        "訪問歯科 営業支援",
        "訪問歯科 算定支援",
        "医療介護 営業コンサルティング",
        "老人ホーム紹介",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "訪問歯科コンサルティング料金プラン",
        itemListElement: [
          {
            "@type": "Offer",
            name: "ライトプラン",
            price: "100000",
            priceCurrency: "JPY",
            description: "訪問歯科の基本サポート＋ARCH独自アプリケーション使用可能",
          },
          {
            "@type": "Offer",
            name: "スタンダードプラン",
            price: "300000",
            priceCurrency: "JPY",
            description: "ライトプラン全内容＋月2回の経営支援ミーティング",
          },
          {
            "@type": "Offer",
            name: "プレミアムプラン",
            price: "500000",
            priceCurrency: "JPY",
            description: "スタンダードプラン全内容＋週1回ミーティング＋医院オリジナルアプリ開発",
          },
        ],
      },
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
      <body className={`${geistSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
