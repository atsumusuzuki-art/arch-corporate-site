import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // macOS が外付けディスク上に作る付随ファイル（._page.tsx など）。
    // 中身はバイナリのため、解析対象から外す。
    "**/._*",
    // 削除待ちの退避フォルダ。
    "_to_delete/**",
  ]),
]);

export default eslintConfig;
