# ARCH Design System v2 — エディトリアル・コーポレート

**Date**: 2026-04-20
**Source**: Claude Designが作成した『NewARCH_東浅川歯科_外部事務長導入提案.pptx』（design-reference/claude-design-reference.pptx）
**Scope**: サイト全体（トップ + 5サービスページ + コラム + BPO + news）

---

## Design Philosophy

**エディトリアル・プレミアム・日本的静けさ**。

従来の「緑グラデーション＋ぼかし円＋ヒーロー画像的スペック」を全面廃止し、**高級経営誌の紙面**のような静かで余白豊かな設計へ移行する。

視覚コード：
- **クリーム×深緑** の2色主義
- **巨大な日本語タイポ**と**極小モノスペース英字**の対比
- **ページネーション風フッター**による"読み物"感
- **カテゴリタグ**による章立ての明快化

---

## Color Tokens

| Token | HEX | 用途 |
|---|---|---|
| `--arch-cream` | `#F3EDE0` | ページ背景（デフォルト） |
| `--arch-cream-raised` | `#FAF6EC` | カード・テーブル行の浮き |
| `--arch-ink` | `#0F1211` | 見出し・主要テキスト（ほぼ黒） |
| `--arch-ink-soft` | `#3A3C3A` | 本文 |
| `--arch-ink-muted` | `#7A7C78` | キャプション・補足 |
| `--arch-forest` | `#0D3B2E` | 全面背景の深緑セクション＋料金ハイライト列 |
| `--arch-forest-soft` | `#1E5A40` | green-900よりやや明るい緑 |
| `--arch-moss` | `#3B7A5F` | モノスペース英字ラベルの緑 |
| `--arch-sage` | `#9DBBA6` | 深緑背景上の補助テキスト（淡緑） |
| `--arch-gold` | `#B8944A` | 「一番人気」バッジ／BPOアクセント |
| `--arch-rule` | `#D8CFBC` | 水平罫線（クリーム上） |
| `--arch-rule-dark` | `#1C4A38` | 水平罫線（深緑上） |

**禁止**：`bg-gradient-to-br from-green-900 via-green-800 to-green-950`、`from-green-50`系の明るい緑、白100% (`#FFFFFF`) 背景。

---

## Typography

### フォントファミリー

- **日本語見出し**: `Noto Sans JP` Weight 900 (Black) — 現在の Geist だけでは再現できない重量感のため追加導入
- **日本語本文**: `Noto Sans JP` Weight 400-500
- **英数字大**: `Geist` または `Inter` Weight 700 （数字のプレゼンスを出す）
- **モノスペース**: `JetBrains Mono` または `Geist Mono` — カテゴリタグ・ページ番号・英小見出し専用

### スケール

| トークン | サイズ | Weight | Letter Spacing | 用途 |
|---|---|---|---|---|
| `display` | `clamp(3rem, 7vw, 6.5rem)` | 900 | `-0.04em` | ヒーローH1（「貴院の新たな事業の柱をつくる。」級） |
| `h1` | `clamp(2.25rem, 4.5vw, 4rem)` | 900 | `-0.03em` | ページタイトル |
| `h2` | `clamp(1.75rem, 3vw, 2.75rem)` | 900 | `-0.02em` | セクション見出し |
| `h3` | `1.5rem` | 700 | `-0.01em` | カード見出し |
| `body-lg` | `1.125rem` | 400 | `0` | 本文導入 |
| `body` | `1rem` | 400 | `0` | 通常本文 |
| `caption` | `0.875rem` | 400 | `0` | 補足 |
| `mono-label` | `0.75rem` | 500 | `0.18em` | モノスペース英字ラベル（`ARCH`, `PRICING — 04 / 料金プラン`） |
| `mono-micro` | `0.6875rem` | 500 | `0.25em` | ページ番号・コーナーマーカー |

### 日本語組版ルール

- 見出しは**2行以内**。3行になるなら文を削る。
- 句読点は `、` `。` を半角にしない。
- 行間：`line-height: 1.15` for display、`1.5` for body、`1.8` for column記事。

---

## Spatial System

### セクション垂直余白

| トークン | 値 | 用途 |
|---|---|---|
| `section-hero` | `py-32 md:py-48` | ヒーロー（広大） |
| `section-main` | `py-24 md:py-36` | 主要セクション |
| `section-sub` | `py-16 md:py-24` | サブセクション |
| `section-tight` | `py-10 md:py-16` | フッター直前・補足 |

### 水平コンテナ

- `container-narrow`: `max-w-4xl mx-auto px-6 md:px-10` （コラム本文用）
- `container-default`: `max-w-6xl mx-auto px-6 md:px-10` （通常セクション）
- `container-wide`: `max-w-7xl mx-auto px-6 md:px-10` （料金表・Stats）

### Gap

- カード間：`gap-6 md:gap-8`
- 見出し↔本文：`mt-6`
- セクション内ブロック：`mt-12 md:mt-16`

---

## Border Radius

| トークン | 値 | 用途 |
|---|---|---|
| `radius-card` | `rounded-none` or `rounded-[2px]` | **原則なし**（エディトリアル＝角あり） |
| `radius-button` | `rounded-[2px]` | CTAボタン |
| `radius-logo` | `rounded-[12px]` | ロゴスクエア |
| `radius-pill` | `rounded-full` | 「一番人気」等のミニバッジ |

**重要**：従来の `rounded-xl` / `rounded-2xl` / `rounded-3xl` はすべて排除。プレゼン資料同様、**直線と余白で表現**する。

---

## Component Patterns

### 1. Corner Markers（全ページ共通）

全ページの最上部と最下部にpptxと同じ「ページマーカー」を常設する。

```
┌──────────────────────────────────────────────────────┐
│ ARCH                        CONFIDENTIAL · 2026.04   │
│                                                      │
│   [本文]                                             │
│                                                      │
│ HOME                                    01 / 07      │
└──────────────────────────────────────────────────────┘
```

- 左上：`ARCH` (`--arch-moss`, `mono-label`)
- 右上：セクション番号ラベル（例：`02 — 訪問歯科の市場環境`）
- 左下：カテゴリ（例：`PRICING`, `MARKET DATA`）
- 右下：`NN / NN` ページネーション（HP の場合はスクロール位置に連動でも可、静的でも可）

HPでは各サービスページの左下・右下にこのマーカーを固定ヘッダー／フッター的に常時表示する。

### 2. セクションタグ（カテゴリラベル）

```
PRICING — 04 / 料金プラン
```

セクション冒頭にこの形式のタグを**必ず**置く。

- 英大文字カテゴリ（`PRICING` `MARKET DATA` `SERVICE` `CASE` `COMPANY`）
- em-dash
- 2桁ゼロパディング番号（`01` `02` …）
- スラッシュ
- 日本語ラベル

HTML:
```tsx
<p className="font-mono text-xs tracking-[0.18em] text-arch-moss uppercase">
  PRICING <span className="opacity-60">— 04 / 料金プラン</span>
</p>
```

### 3. Stat Card（データ表示）

pptx slide 5 のスタイルを採用。

```
┌─────────────────────────┐
│ 八王子市 総人口          │ ← caption (mono-micro相当)
│                         │
│ 約54 万人                │ ← display number
│                         │
│ 東京都最大級の市         │ ← caption
└─────────────────────────┘
```

- 数字は `text-[4rem] md:text-[6rem] font-extrabold`、単位は `text-2xl opacity-70`
- カードは**枠だけ**（`border border-arch-rule` or `border-arch-rule-dark` on 深緑背景）
- **影なし、角丸なし、背景色なし**

### 4. Dark Forest Section（深緑全面セクション）

- `bg-[#0D3B2E]` （`--arch-forest`）
- テキストは `--arch-cream` / `--arch-sage`
- 区切り線は `border-arch-rule-dark` (`#1C4A38`)
- 強調数字は `text-arch-cream`、補助は `text-arch-sage`

pptx slide 5 のような「章の重さを変える」ときに使う。全ページで**最大1〜2セクションのみ**。多用禁止。

### 5. Pricing Table（比較表）

pptx slide 11 のスタイルに完全準拠。

- 外枠：`border border-arch-rule`
- 行区切り：`border-t border-arch-rule`（下罫線のみ）
- 列区切り：**なし**
- 推しプランの列のみ：背景 `bg-arch-forest` (headerセル) → `bg-arch-forest/5` (rowセル)
- 「一番人気」バッジ：`bg-arch-gold` の小さな四角（角丸極小）、テキスト白
- チェックマーク：`<Check>` (lucide) `className="text-arch-forest"` 中央寄せ
- 「—」は `text-arch-ink-muted`

### 6. CTA Buttons

**階層を3段に固定**：

| Level | 見た目 | クラス |
|---|---|---|
| Primary | 深緑背景＋クリームテキスト | `bg-arch-forest text-arch-cream px-8 py-4 tracking-wide hover:bg-arch-forest-soft` |
| Secondary | 透明背景＋深緑枠＋深緑テキスト | `border border-arch-forest text-arch-forest px-8 py-4 hover:bg-arch-forest hover:text-arch-cream` |
| Tertiary | テキストのみ＋右矢印 | `text-arch-forest hover:underline inline-flex items-center gap-2` with `<ArrowRight size={14} />` |

角丸は `rounded-[2px]`。**大きく角丸しない**。

### 7. News / Columns List

リスト形式に戻す。現行の水平3列（日付・カテゴリ・タイトル）を廃し、**タイトル主役**の垂直リストへ：

```
──────────────────────────────────────────
2026.04.15  COLUMN                        →
営業を"学ぶ"時代：ARCH大学 営業学部が目指すもの
──────────────────────────────────────────
2026.04.10  RELEASE                       →
新コラム4本を公開しました
──────────────────────────────────────────
```

- 上下水平線のみ
- 日付＋カテゴリは `mono-label`
- タイトルは `h3` サイズで `font-bold`

---

## Page-by-Page Direction

### Home (/)

- ヒーロー：クリーム背景。巨大日本語H1「現場の想いと、経営の現実を、架け橋する。」＋ 英文字「ARCH — Architect of Healthcare Operations」
- Services：5カード → **縦並び長リスト**へ。左にNo+英名、右に日本語タイトル+説明+`→`
- News：上記6のリスト形式
- Company：深緑全面セクション1つ（ヒーローとの対比）
- Contact：クリーム＋枠だけの質素なフォーム

### /services/consulting（訪問歯科プロデューサー）

- ヒーロー：白紙の手紙のような超余白＋中央H1「助言ではなく、事業そのものをプロデュースする。」
- Problem→Solution：slide 7 の「訪問歯科コンサルティングとは」スタイルで2列×2行のナンバー項目
- 3つの強み：Stat Card形式
- 料金：上記5のPricing Tableを完全実装
- お試し：slide 12 スタイルの深緑カード

### /services/sales（ARCH大学 営業学部）

- ヒーロー：クリーム。H1「営業マンは、育成する時代へ。」
- 対象4業態（歯科・訪問クリニック・訪問薬局・訪問看護）：4カード横並び、枠だけ
- 元小学校教諭の段：slide 14 スタイル（著者ポートレートページ）で鈴木集の略歴を物語的に

### /services/senior-home（介護・暮らしの選択相談所）

- ヒーロー：H1「退院後の暮らしを、ご本人とご家族の目線で。」
- **FacilityRecommender**：現行のTailwindコンポーネントを新トークンに置換（白→クリーム、緑グラデ→深緑ソリッド）
- 現役看護師パートナー：slide 14 スタイルの引用調

### /services/dental-matching（品質診断エンジン）

- ヒーロー：H1「6項目×5段階で、今の訪問歯科を診断する。」
- 6項目：slide 8「ARCHが選ばれる理由」のようなナンバー＋短文の6セル
- 判定結果カード：LOW/MID/HIGH ごとに3色（`#B04040` / `#B8944A` / `--arch-forest`）

### /bpo-service（ARCH・外付け事務局）

- ヒーロー：H1「先生を事務から解放し、医院に最強の外部エンジンを装着する。」
- 13エージェント：slide 8 スタイルの「3×5グリッド」で番号+役割名+Tier
- CORE 3体：ゴールドアクセント（`--arch-gold` 枠）で強調
- 料金（スポット構造）：Pricing Tableではなく、3カードの横並び（5万円・30万円・要相談）

### /news と /columns

- 全記事 prose は `prose-custom` を改修して Noto Sans JP に合わせ直す
- ヘッダ：モノラベル＋display H1＋日付

---

## Implementation Plan

### Phase 1 — Tokens & Global (所要：半日〜1日)

1. `app/layout.tsx` で Noto Sans JP (weights 400/500/900) + Geist Mono を追加読み込み
2. `tailwind.config.ts` に `colors.arch.*`、`fontFamily.display/mono`、`fontSize.display/etc`、`spacing.section-*` を定義
3. `app/globals.css` のbody背景を `--arch-cream` に変更、`prose-custom` を新インクカラーに調整
4. 共通 `CornerMarkers` コンポーネントを `components/` に新設

### Phase 2 — Home (所要：1日)

1. `app/page.tsx` のNav、Hero、News、Services、Company、Contact、Footer を新デザインで書き直し
2. ナンバーリスト式Services、縦リスト式Newsに置換
3. CornerMarkers を全ページに適用

### Phase 3 — Services (所要：2〜3日)

1. consulting → sales → bpo-service → dental-matching → senior-home の順で移行
2. 各ページでカテゴリタグ・StatCard・PricingTable（該当ページのみ）を実装
3. FacilityRecommenderと診断エンジンの**中身はそのまま、外観だけ刷新**

### Phase 4 — Columns & Cleanup (所要：半日)

1. `app/columns/layout.tsx` を新デザインに
2. 既存13記事は `prose-custom` 更新で自動反映
3. old columns (`app/column/`) も同様に

---

## Do's and Don'ts

### ✅ Do

- 深緑は「ここぞ」の1〜2セクションだけ使う
- 見出しの直前には必ずモノスペースのカテゴリタグを置く
- 数字は大きく、単位は小さく、caption はさらに小さく
- ページの左右端に ARCH / CONFIDENTIAL / ページ番号を常設
- 余白をケチらない

### ❌ Don't

- 緑のグラデーション（現行の`from-green-900 via-green-800 to-green-950`）を使わない
- ぼかし円（`blur-3xl rounded-full bg-green-*`）を使わない
- `rounded-2xl` / `rounded-3xl` を使わない
- `shadow-xl` 等の強い影を使わない
- `<main>` タグ無しの状態で放置しない（A11y）
- 1ページに深緑セクションを3つ以上置かない
- 英字見出しの装飾下線を引かない

---

## References

- 参考pptx：`design-reference/claude-design-reference.pptx`
- スライド画像（全15枚）：workspaceへ配置予定
- 批評v1（旧）：`design-critique-v1.md`
