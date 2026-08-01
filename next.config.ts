import type { NextConfig } from "next";

/**
 * 旧 URL の恒久転送（301）
 * ------------------------------------------------------------------
 * 過去に公開していたページは削除せず、ここで新しい URL へ恒久転送する。
 * Next.js は redirects をファイルルートより先に評価するため、
 * 旧ページのファイルが残っていても必ず新 URL へ飛ぶ。
 *
 * サイト内リンクはすべて新 URL を直接指すこと（転送を経由させない）。
 */
const nextConfig: NextConfig = {
  async redirects() {
    return [
      // ── 外部事務長に集約 ──
      { source: "/bpo-service", destination: "/services/external-manager", permanent: true },
      { source: "/services/consulting", destination: "/services/external-manager", permanent: true },
      { source: "/services/fee-standards", destination: "/services/external-manager", permanent: true },
      { source: "/services/branch-startup", destination: "/services/external-manager", permanent: true },

      // ── 訪問歯科コンサルティングに集約 ──
      { source: "/services/visit-dental-startup", destination: "/services/visit-dental-consulting", permanent: true },
      { source: "/services/facility-growth", destination: "/services/visit-dental-consulting", permanent: true },
      { source: "/services/sales", destination: "/services/visit-dental-consulting", permanent: true },
      { source: "/services/dental-matching", destination: "/services/visit-dental-consulting", permanent: true },

      // ── お知らせはコラムに集約 ──
      { source: "/news", destination: "/columns", permanent: true },

      // ── 支援実績 ──
      { source: "/cases/profitability", destination: "/cases/sapporo-visit-dental", permanent: true },
      { source: "/cases/visit-startup", destination: "/cases/setagaya-visit-dental", permanent: true },
      { source: "/cases/facility-growth", destination: "/cases/setagaya-visit-dental", permanent: true },
      { source: "/cases/fee-standards", destination: "/cases/hachioji-external-manager", permanent: true },
      { source: "/cases/branch-launch", destination: "/cases/hachioji-external-manager", permanent: true },
    ];
  },
};

export default nextConfig;
