import type { MetadataRoute } from "next";

// TODO: 本番ドメインが決まったら差し替えてください
const siteUrl = "https://arch-yh.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
