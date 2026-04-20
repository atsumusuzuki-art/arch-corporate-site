# 合同会社ARCH — エージェント共通ビジネス定義（v3.0）

このドキュメントは、ARCHの13体エージェント（Claude Code + Cowork + Design + BPO 等）が
共通の語彙でクライアント業務にあたるための「正」の定義です。

最終更新：2026-04-20（技術アーキテクチャ・サイト構成節を追記 v3.0）

---

## 1. 会社概要

- **社名**：合同会社ARCH（アーチ）
- **代表**：鈴木 集（Atsumu Suzuki）
- **ドメイン**：arch-yh.com
- **経歴**：元小学校教員 → 広域医療法人 歯科事務局長（経営再建を主導） → 北海道の医療グループで新規事業推進
- **ビジョン**：現場の『想い』と経営の『現実』をつなぐ架け橋になりたい

---

## 2. 事業ラインナップ（新名称／旧名称対応表）

**重要：旧名称は、顧客混乱を避けるため「（旧：〇〇）」の形で小さく併記すること。エージェントは必ず新名称をファーストネームとして使うこと。**

| No. | 新名称 | 旧名称 | ルート | 一言で言うと |
|---|---|---|---|---|
| 01 | **訪問歯科プロデューサー** | 歯科経営コンサルティング | `/services/consulting` | 助言ではなく、訪問歯科事業をゼロからプロデュースする |
| 02 | **ARCH大学 営業学部** | 医療介護特化型 営業支援 | `/services/sales` | 「営業マン」は採用ではなく、育成する時代へ |
| 03 | **ARCH 介護・暮らしの選択相談所** | 老人ホーム紹介業 | `/services/senior-home` | 退院後の暮らしを、ご本人とご家族の目線で選ぶ場所 |
| 04 | **訪問歯科・品質診断エンジン** | 施設向け歯科評価ツール／介護施設向け訪問歯科マッチング | `/services/dental-matching` | 6項目×5段階で、今の訪問歯科を"診断"する |
| 05 | **ARCH・外付け事務局** | — （新規） | `/bpo-service` | 先生を事務から解放し、医院に「最強の外部エンジン」を装着する |

### 2.1 サービス詳細 — キーメッセージ

#### 01. 訪問歯科プロデューサー（旧：歯科経営コンサルティング）
- 中核メッセージ：助言ではなく、**事業そのものをプロデュース**する
- 3つの強み：書類地獄の完全撤廃 / 黒字化の仕組み / 自己肯定感を高める組織づくり
- 料金：Light 10万 / Standard 30万 / Premium 50万 + 初回限定お試し 7万 / 単発実地支援 5万

#### 02. ARCH大学 営業学部（旧：医療介護特化型 営業支援）
- 中核メッセージ：「営業マン」は採用ではなく **育成する時代** へ
- 「学部」の比喩：講義・演習・実地・卒業要件という構造で営業の型を教え込む
- ブローカー依存・パンフレット配りからの脱却

#### 03. ARCH 介護・暮らしの選択相談所（旧：老人ホーム紹介業）
- 中核メッセージ：**ご本人とご家族の目線**で選ぶ場所
- 「紹介して終わり」ではなく「どう暮らすか」を一緒に考える
- 現役看護師パートナー / ADL評価 / ワンストップ伴走

#### 04. 訪問歯科・品質診断エンジン（旧：施設向け歯科評価ツール）
- 中核メッセージ：今の歯科医院、本当に**施設の味方**ですか？
- 6項目：対応スピード／報告書の質／接遇・現場マナー／現場との連携／コンプライアンス／継続性・体制
- スコア判定（ARCHセンサー・ロジック）
  - **LOW（平均 1.0–2.4）**：⚠️ 即刻変えるべき！→ 切り替えプロデュース・パッケージを提示
  - **MID（平均 2.5–3.9）**：💬 現在の歯科医院と相談しましょう → 低スコア項目を相談項目化
  - **HIGH（平均 4.0–5.0）**：✅ 素晴らしい歯科医院です → 長期継続のコツを提示
- 共通CTA：「詳細な改善プランを鈴木に相談する」

#### 05. ARCH・外付け事務局（事務代行・BPO）【NEW】
- 中核メッセージ：先生を事務から解放し、医院に **「最強の外部エンジン」** を装着する
- 13体のエージェントが裏側で稼働し、ARCH統括ディレクターの指揮で連動
- **特に強力な3体のCORE**：
  - **#04 事務局長**（書類・請求・レセプト補助）
  - **#05 経理・資金繰り担当**（月次決算・キャッシュフロー）
  - **#07 人事・労務**（採用・就業規則・面談記録）

---

## 3. 13体エージェント構成

| # | 役割 | 主担当領域 | Tier |
|---|---|---|---|
| 01 | 統括ディレクター | 全案件の進行管理・優先順位付け | MANAGE |
| 02 | ウェブマスター | HP・コード・デプロイ | TECH |
| 03 | マーケター | SEO・コラム企画・アクセス解析 | GROWTH |
| **04** | **事務局長** | **書類・請求・レセプト補助・行政対応** | **CORE** |
| **05** | **経理・資金繰り担当** | **月次決算・CF・税理士連携** | **CORE** |
| 06 | 営業アシスタント | 提案書・営業資料作成代行 | GROWTH |
| **07** | **人事・労務** | **採用・就業規則・面談記録** | **CORE** |
| 08 | コンプライアンス監査 | 個人情報・法令遵守・リスクチェック | GOVERN |
| 09 | 現場オペレーション | 訪問スケジュール・動線・備品 | OPS |
| 10 | リサーチャー | 制度改正・施設ニーズ・競合 | RESEARCH |
| 11 | 契約・法務 | 契約書・覚書・同意書 | GOVERN |
| 12 | カスタマーサポート | 施設・家族問い合わせ一次受け | OPS |
| 13 | デザインディレクター | パンフ・バナー・ブランド統一 | DESIGN |

---

## 4. エージェント共通ルール

1. **サービス名はかならず新名称をファーストネームで使う**。旧名称は（旧：〇〇）の形で小さく併記のみ。
2. **コピー／原稿執筆時**は、各サービスの「中核メッセージ」（2.1節）を必ず含めること。
3. **デザイン時**（Agent #13）は、新名称と旧名称のタイポグラフィ階層を守る：
   - 新名称：Primary（大）／Extrabold
   - 旧名称：Secondary（小・カッコ書き）／Medium・Tracking wider
4. **診断エンジン**（Service #04）は、必ずARCHセンサー・ロジック（LOW / MID / HIGH の閾値）を正確に実装すること。
5. **BPOページ**（Service #05）では、CORE 3体（#04/#05/#07）を視覚的に強調（ゴールドアクセント or ハイライトカード）。
6. **conversion CTA** は全ページで統一：「無料オンライン相談を予約する」 or 「詳細な改善プランを鈴木に相談する」
7. **問い合わせ先**：`/#contact`（ホームページの Contact フォーム）

---

## 5. News 追加ワークフロー

ユーザー（鈴木集）から「News に○○を追加して」「お知らせに○○を入れて」等の依頼があった場合、エージェントは下記の手順を**必ず厳守**すること。探索や推測をせず、このワークフロー通りに実行する。

### 5.1 データソースの場所

News データは `lib/news.ts` の `NEWS` 配列に一元管理されている。データ構造は以下：

```ts
// lib/news.ts
export type NewsCategory = "お知らせ" | "更新" | "リリース" | "コラム" | "プレス";

export type NewsItem = {
  date: string;        // YYYY-MM-DD 形式（必須）
  category: NewsCategory; // 5種類から選択（必須）
  title: string;       // 「〇〇を更新しました」等（必須）
  href: string;        // 内部リンク "/services/xxx" or 外部URL "https://..."（必須）
  external?: boolean;  // 省略可。https:// で始まる場合は自動判定されるため通常不要
};

export const NEWS: NewsItem[] = [
  // 先頭が最新。新しい記事はここに追記する
  { date: "2026-04-10", category: "リリース", title: "...", href: "..." },
  // ...
];
```

### 5.2 追加手順（5ステップ）

1. **`lib/news.ts` を Read** し、現在の配列構造とインデントを確認する
2. **配列の先頭（`NEWS: NewsItem[] = [` の直後）に1オブジェクト追記** する。既存エントリより上に置くこと（新しい順を維持）
3. **TypeScript 型チェック** を実施（`npx tsc --noEmit -p tsconfig.json`）。`.next/types/validator.ts` の既存警告は無視して可
4. **`git add lib/news.ts && git commit`** でコミット作成。コミットメッセージは `news: <タイトル要約>` の形式
5. **ユーザーに `git push origin main` の実行を依頼** する（VM からは HTTPプロキシ制限で push 不可）

### 5.3 必須フィールドの決定ルール

- **date**：ユーザーが明示しなければ「今日」を使う。`date` コマンドで実際の日付を取得し、YYYY-MM-DD 形式で記載すること
- **category**：ユーザーが明示しなければ文脈から自動判定
  - 新サービス・新機能・新ページ公開 → `"リリース"`
  - 既存ページ・コンテンツの更新 → `"更新"`
  - 休業・営業時間変更・その他通知 → `"お知らせ"`
  - 新コラム記事公開 → `"コラム"`
  - メディア掲載・プレスリリース → `"プレス"`
- **title**：ユーザーが言った文言を尊重しつつ、句読点や体裁を整える。末尾は体言止めor「〜しました」で統一
- **href**：内部リンクの場合は `/` 始まりの絶対パス。外部リンクは `https://` 始まりのフル URL（`external: true` の明示は不要、自動判定される）

### 5.4 禁止事項

- ❌ 配列の**末尾**に追記すること（古い順になってしまう）
- ❌ `date` を適当に決めること（必ず `date` コマンドで今日の日付を取得するか、ユーザー指定に従う）
- ❌ `git push` を VM から試みること（403 で失敗する。必ずユーザーに手動プッシュを依頼）
- ❌ `lib/news.ts` 以外のファイル（`app/news/page.tsx`, `app/page.tsx`）を編集すること。**これらは `lib/news.ts` を import しているだけなので、データを変えれば自動で反映される**
- ❌ カテゴリを勝手に新設すること（`NewsCategory` 型の5種類から選ぶ。新カテゴリが必要な場合はユーザーに確認）

### 5.5 依頼例とエージェントの反応

**例1：** 「News に『訪問歯科プロデューサー』のページを更新したって入れて」
→ date: 今日 / category: "更新" / title: 「『訪問歯科プロデューサー』ページを更新しました」 / href: "/services/consulting"

**例2：** 「日経メディカルに記事が載ったから News に追加。URL は https://...」
→ date: 今日（またはユーザー指定日） / category: "プレス" / title: 「日経メディカルに掲載されました」 / href: URL

**例3：** 「5月1日からGW休業のお知らせを News に」
→ date: 今日 / category: "お知らせ" / title: 「ゴールデンウィーク休業のお知らせ（5/1〜5/6）」 / href: "/news"（内部で詳細ページが無ければ自ページを指す）

---

---

## 6. 技術アーキテクチャ・サイト構成

### 6.1 技術スタック

- **フレームワーク**：Next.js 16.1.6（App Router）
- **言語**：TypeScript
- **React**：19.2.3
- **スタイリング**：Tailwind CSS（`globals.css` に `prose-custom` 等のカスタムクラス定義あり）
- **アイコン**：lucide-react
- **ホスティング**：Vercel（GitHub `main` ブランチへの push で自動デプロイ）
- **ドメイン**：arch-yh.com
- **リポジトリ**：github.com/atsumusuzuki-art/arch-corporate-site
- **ローカル作業ディレクトリ**：`/Volumes/ARCH_SSD/arch-corporate-site`（鈴木氏の Mac 上の外部 SSD）

### 6.2 デザイン規約

- **メインカラー**：green-900 / green-800 / green-700（グラデーション `from-green-900 via-green-800 to-green-950`）
- **BPO カード強調色**：yellow-500/yellow-600 系（ゴールドアクセント）
- **ヒーローセクション**：全サービスページ共通で `bg-gradient-to-br from-green-900 via-green-800 to-green-950` + 装飾的なぼかし円
- **本文スタイル**：コラム記事は `prose-custom` クラス（`globals.css` で定義）を `<div>` に当てる
- **CTA ボタン**：白背景 + green-900 テキスト or green-800 背景 + 白テキスト
- **フォント**：Geist（Google Fonts、`layout.tsx` で読み込み）

### 6.3 ファイル構成

```
app/
├── layout.tsx              # ルートレイアウト（metadata, JSON-LD, Geist フォント）
├── page.tsx                # トップページ（"use client" — Nav/Hero/News/PickUp/Service/Company/Columns/Contact/Footer）
├── globals.css             # Tailwind + prose-custom 等カスタムスタイル
├── sitemap.ts              # SEO サイトマップ
├── robots.ts               # robots.txt
├── news/page.tsx           # /news — お知らせ一覧（Server Component）
├── bpo-service/page.tsx    # /bpo-service — ARCH・外付け事務局（13体エージェント）
├── services/
│   ├── layout.tsx          # サービスページ共通レイアウト（ヘッダー・CTA・フッター）
│   ├── consulting/page.tsx # 訪問歯科プロデューサー
│   ├── sales/page.tsx      # ARCH大学 営業学部
│   ├── senior-home/page.tsx# ARCH 介護・暮らしの選択相談所
│   └── dental-matching/
│       ├── page.tsx            # Server wrapper（metadata のみ）
│       └── DentalMatchingClient.tsx  # Client Component（診断エンジン UI + ARCHセンサー・ロジック）
├── columns/
│   ├── layout.tsx          # コラム共通レイアウト（ヘッダー・CTA・関連コラム・フッター）
│   ├── broker-trap/        # 既存9本 + 新規4本 = 計13本
│   ├── facility-collaboration/  # ★ 新規：施設連携で選ばれる医院の条件
│   ├── communication-timelag/   # ★ 新規：タイムラグ問題とARCH即レス仲介
│   ├── sns-dx-recruitment/      # ★ 新規：SNS×DX採用戦略
│   ├── waiting-room-visual/     # ★ 新規：待合室サイネージ＋掲示物
│   └── ...
├── column/                 # 旧 SEO 記事3本（/column/houmon-shika-*）別レイアウト
│   ├── layout.tsx
│   └── houmon-shika-*/
lib/
└── news.ts                 # News データソース（型定義 + NEWS 配列 + ユーティリティ関数）
public/images/
├── logo.jpg                # 会社ロゴ
├── ceo.jpg                 # 代表写真
└── hero.jpg                # ヒーロー画像（現在未使用）
```

### 6.4 トップページ（`app/page.tsx`）のセクション構成

`"use client"` コンポーネント。Nav → Hero → **News（02）** → Pick Up（03）→ **Service（04・5カード）** → Company（05）→ Columns（06）→ Contact（07）→ Footer。

- Service セクション：`grid sm:grid-cols-2 lg:grid-cols-3` で5カード。BPO カードのみゴールドアクセント
- News セクション：`lib/news.ts` の `NEWS` 配列から最新4件を表示。`/news` へ「一覧を見る」リンク
- Columns セクション：`allColumns` 配列から先頭3件をリスト表示
- Contact セクション：FormSubmit.co 経由のメールフォーム

### 6.5 診断エンジン（`dental-matching/DentalMatchingClient.tsx`）

- 6項目×5段階のLikert尺度。useState で回答管理
- **ARCHセンサー・ロジック**（閾値は v2.0 で確定）:
  - LOW（平均 < 2.5）：⚠️ 即刻変えるべき
  - MID（2.5 ≤ 平均 < 4.0）：💬 現在の歯科医院と相談
  - HIGH（平均 ≥ 4.0）：✅ 素晴らしい歯科医院
- Server Component（`page.tsx`）で metadata を export し、Client Component を import する分離構造

### 6.6 Git ワークフロー・制約

- **VM（Cowork）からの `git push` は不可**（HTTP プロキシ 403）。VM 側で `git add` + `git commit` まで行い、ユーザー（鈴木氏）に `git push origin main` を依頼する
- ユーザーの push 手順：`cd /Volumes/ARCH_SSD/arch-corporate-site && git push origin main`
- push 後は Vercel が自動デプロイ（通常2〜3分）
- `npm run build`（`next build`）は VM 内では SWC バイナリ欠落により実行不可。`npx tsc --noEmit -p tsconfig.json` で型チェックのみ実施。`.next/types/validator.ts` の既存警告（`/columns` vs `/column` ルート不一致）は無視して可
- `.git/index.lock` が macOS Finder 由来で残ることがあるため、git 操作前に `rm -f .git/index.lock` を入れると安全

### 6.7 コラム記事の追加パターン

1. `app/columns/<slug>/page.tsx` を作成。既存記事（例：`broker-trap`）をテンプレートとして使用
2. `export const metadata: Metadata` で title / description を定義
3. 本文は `<article className="py-16 md:py-24">` → `<div className="max-w-3xl mx-auto px-4 sm:px-6">` → `<div className="prose-custom">` の入れ子構造
4. `app/columns/layout.tsx` の関連コラムグリッドに `<Link>` を1つ追加
5. `app/page.tsx` の `allColumns` 配列に1エントリ追加
6. `lib/news.ts` の `NEWS` 配列先頭にコラム公開エントリを追加（News 追加ワークフロー＝第5章に従う）
7. `app/sitemap.ts` に URL 追加

### 6.8 最近のコミット履歴（参考）

```
1327eda feat: 新コラム4本を公開（施設連携×2 / 採用DX / 院内マーケティング）
b5af458 docs: CLAUDE.md v2.1 — News 追加ワークフロー節を追記
18c4c39 feat: News 欄を新設（トップページ + 専用ページ /news）
3841fcb refactor: 「鈴木センサー」→「ARCHセンサー」へブランド名統一
e287a41 feat: 全サービス名刷新 (v2.0) + BPOページ新設 + 品質診断エンジン
746f3ce design: AI風ストック写真を排除しプレミアムなデザインに刷新
```

---

## 7. 変更履歴

- **v3.0 (2026-04-20)**：技術アーキテクチャ・サイト構成節（第6章）を追記。新規セッションへの引き継ぎ用に、技術スタック・デザイン規約・ファイル構成・Git ワークフロー・コラム追加パターンを明文化。
- **v2.1 (2026-04-11)**：News 追加ワークフロー節（第5章）を追記。新規チャットでもエージェントが迷わず News 追加を実行できるよう手順を明文化。
- **v2.0 (2026-04-10)**：サービス名全面刷新。訪問歯科プロデューサー、ARCH大学 営業学部、ARCH 介護・暮らしの選択相談所、訪問歯科・品質診断エンジン、ARCH・外付け事務局（新規）の5事業体制に移行。
- **v1.0**：初版リリース。訪問歯科コンサル／営業コンサル／老人ホーム紹介の3事業体制。
