# arch-corporate-site - ARCHコーポレートサイト

## このプロジェクトの概要
- 目的：合同会社ARCHの公式ウェブサイト
- 主なユーザー：訪問歯科医院・介護施設の担当者（見込み客）
- ステータス：運用中

## ファイル構成
- app/page.tsx        # トップページ
- app/layout.tsx      # 全ページ共通のレイアウト
- app/globals.css     # 全体のスタイル
- app/column/        # コラム記事（houmon-shika-santei等）
- public/            # 画像・静的ファイル
- next.config.ts     # Next.jsの設定ファイル

## 技術構成
- Next.js（App Router）+ TypeScript
- スタイル：Tailwind CSS
- デプロイ：Vercel（予定）

## よく使うコマンド
```bash
# 開発サーバーを起動する（ブラウザで確認できる）
npm run dev

# 本番用にビルドする
npm run build

# ビルド結果を確認する
npm run start
```

## このプロジェクト固有のルール
- 訪問歯科・医療介護の専門家として信頼感を与えるデザインを維持する
- コラム記事はapp/column/以下にフォルダを作って追加する
- node_modulesは絶対にgitに追加しない（容量が巨大なため）

## 注意点
- .nextフォルダはビルド生成物。編集不要・gitに入れない
- ARCH_会社紹介.pptxはサイトの素材として参照用
- TypeScriptの型エラーはビルド時に必ず確認する
