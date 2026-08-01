/**
 * ヘッダー・フッターはルートレイアウト（app/layout.tsx）で共通化したため、
 * このレイアウトは子をそのまま通すだけにしている。
 */
export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
