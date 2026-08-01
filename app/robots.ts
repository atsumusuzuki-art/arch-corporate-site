import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";

/**
 * robots.txt
 * ------------------------------------------------------------------
 * 検索エンジンと AI 検索のクローラが公開ページを読めるようにする。
 * 内容のない AI 専用ファイル（llms.txt など）は作らない。
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // すべてのクローラ
      { userAgent: "*", allow: "/" },
      // 検索エンジン
      { userAgent: "Googlebot", allow: "/" },
      { userAgent: "Googlebot-Image", allow: "/" },
      { userAgent: "Bingbot", allow: "/" },
      // AI 検索（回答内で参照されるためのクローラ）
      { userAgent: "OAI-SearchBot", allow: "/" },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
