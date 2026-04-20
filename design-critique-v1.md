# Design Critique: ARCH Corporate Site v1

**Date**: 2026-04-20
**Stage**: Post-content-refresh, pre-visual-modernization
**Scope**: トップ + 5サービスページ
**Direction**: グリーン維持でモダン化（鈴木さん選択）

---

## Overall Impression

B2Bコーポレートサイトとしての骨格は整っており、「医療介護特化型の事業体」という真面目さが伝わる。緑のブランドカラーと`Geist`フォントの組み合わせも落ち着いている。**最大の課題は「どのページも同じリズム」に見えること**——5サービスすべてで `bg-gradient-to-br from-green-900 via-green-800 to-green-950` のヒーロー → `bg-gray-50 py-20` のProblem → `bg-white` のSolution という同一テンプレートになっており、**サービスごとの個性・空気感が出ていない**。モダン化の一番大きなチャンスは、各サービスに「触ってわかる差別化」を持たせること。

---

## Usability

| Finding | Severity | Recommendation |
|---|---|---|
| サービスページ間のヒーローが視覚的にほぼ同一（同じグラデ・同じぼかし円・同じCTA形状）で、ユーザーが「今どのページにいるか」の認知コストが高い | 🟡 Moderate | 各サービスに固有のキービジュアル・アクセントカラー・レイアウトバリエーションを与える（例：BPOはゴールド・senior-homeは暖色オーバーレイ・salesはチョーク風エディトリアル） |
| トップ→サービスの導線は良いが、サービス間の横移動導線が footer のみ。関連サービス提案がサービスページ下部に無い | 🟡 Moderate | 各サービスページ最下部に「関連するサービス」3カード（例：consulting ページに sales / bpo / dental-matching のクロスリンク） |
| ContactフォームがトップページのFormSubmit埋め込み1種類のみ。サービス別に文脈を持たせられていない | 🟡 Moderate | `/#contact?service=consulting` のようなクエリでフォームに `hidden input` を仕込み、どのサービス経由かを自動判別してメール件名へ |
| `dental-matching` の診断エンジンと新設した `senior-home` の施設レコメンダーは、似た「入力→判定→CTA」のパターンだが、見た目・UIトーンが別物 | 🟢 Minor | 将来的に「診断UI共通コンポーネント」を作ってトーンを揃える |
| モバイルでヒーローの H1 と サブ H2 の2段組（例：consulting）が**2つの大見出しが重なって**見える | 🟡 Moderate | モバイルでは H1のみ大、H2は `text-base font-semibold` 程度に落として「主従」を明確化 |
| 全ページで同じ `inline-flex items-center gap-2.5 bg-white ... px-8 py-4 rounded-lg` のCTAボタン。**主CTA・副CTAの階層が無い** | 🟡 Moderate | Primary（solid）/ Secondary（outline）/ Tertiary（text-only）の3階層を定義 |

---

## Visual Hierarchy

- **何が最初に目に入るか**: ヒーローの日本語H2（例：「助言ではなく、事業そのものをプロデュースする。」）。これは正しい。ただし**フォントウェイト・サイズが `text-xl sm:text-2xl lg:text-3xl font-extrabold` で他の見出しと差がつきにくい**。
- **読み流し動線**: Hero → Problem → Solution → Results → Pricing の典型B2B構造だが、**セクション間の区切りが単なる `bg-color` 変更だけ**で、スクロール時の「章の変わり目」感が弱い。
- **強調対象**: 料金テーブル（consultingページ）は "一番人気" のStandardバッジ + `lg:-mt-4` で中央を浮かせる処理が効いている。これは良い。
- **数字の使い方**: consulting の `-65% 平均離職率改善` / `98% 院長満足度` のスタッツカードは強いが、**3枚とも同じスタイル**で視線が分散する。BPOの「3つの時間」も同様。1枚を主役、2枚を脇役に差をつけると効く。
- **トップページ News セクション**: `lg:grid-cols-12` の左ラベル右リストは現代的だが、日付・カテゴリバッジ・タイトルの視線フローが**水平3列**になっていて読みにくい。日付はラベルのように最小化し、タイトル主役にする方が良い。

---

## Consistency

| Element | Issue | Recommendation |
|---|---|---|
| **セクション余白** | 全セクション `py-20 sm:py-28` で単調。**章の重み**による差がない | 主力セクション（Pricing, Hero）は `py-28 sm:py-36`、導入的セクションは `py-14 sm:py-20` に差をつける |
| **Radius（角丸）** | `rounded-xl` / `rounded-2xl` / `rounded-3xl` / `rounded-lg` が混在 | トークン化：`card=rounded-2xl` / `pill=rounded-full` / `button=rounded-lg` / `hero-card=rounded-3xl` |
| **アイコンサイズ** | `size={14}` `size={16}` `size={18}` `size={20}` `size={22}` `size={28}` `size={32}` `size={48}` が全部登場 | 4段階に正規化：`xs=14 / sm=18 / md=24 / lg=32` |
| **Chip/Badge** | 上段ラベル（`text-xs font-bold tracking-[0.3em] uppercase text-green-700`）がページによって `0.25em` / `0.3em` で微妙に違う | `0.25em` で統一、tailwindで `tracking-arch` 等のカスタムクラス化 |
| **CTAバリエーション** | 白背景+green-900 / green-800+白 / outline の3種が混在するが、階層ルールが不明確 | Primary=`bg-green-800 hover:bg-green-900 text-white` / Secondary=`bg-white text-green-900 shadow` / Tertiary=`border border-green-200 text-green-800` で明示ルール化 |
| **サービスページのページ内リンク** | トップの `Nav` には Service/News/Company/Columns のみ。サービスページから戻ると「どのセクションを今見ているか」が分からない | 各サービスページに sub-nav（Problem → Solution → Pricing のスクロール内リンク）を sticky で |
| **旧名称の表記** | consulting `（旧：歯科経営コンサルティング）` はヒーロー中央にあるが、HomeのServiceカードでは `.mb-4` に配置。表示サイズもページごとに違う | 「旧：◯◯」コンポーネント化（text-[11px] tracking-[0.15em] text-green-300/70 で統一） |

---

## Accessibility

- **コントラスト**: `text-green-300/70` `text-green-200/80` `text-gray-400` など **透過＋淡色の多用でWCAG AA (4.5:1) を下回る箇所が多い可能性**。特に緑背景上の `text-green-300/60` はほぼ読めない。→ 透過を外し、階調を明示的に選ぶ。
- **フォーカスリング**: フォーム要素以外（CTAボタン、カードLinkなど）にキーボード操作時のフォーカスリングが定義されていない。→ グローバルで `focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2` を適用。
- **タッチターゲット**: モバイルで `text-xs` + `px-3 py-1` のバッジがリンク化されている箇所（News のカテゴリバッジ等）は44×44px未満の可能性。
- **aria-label**: `<button>メニュー</button>` 等にaria-labelはあるが、ヒーローの装飾ぼかし円（`<div>`）は `aria-hidden="true"` を明示すべき。
- **ランドマーク**: `<article>` は使われているが、`<main>` タグが見当たらない（app/services/layout.tsx 確認要）。スクリーンリーダーのナビゲーション体験が損なわれる。
- **動きの配慮**: `transition-all` が多用されているが `prefers-reduced-motion` の考慮なし。

---

## What Works Well

- ブランド軸の一貫性（緑＋ゴールド）が取れており、BPOカードのみゴールドアクセントで特別感を演出できているのは秀逸
- `prose-custom` によるコラム本文の型統一
- 料金テーブルの `lg:-mt-4 lg:mb-[-16px]` によるPlan浮上は実装・見た目ともに良い
- 「旧：◯◯」を括弧書きで残す配慮が、ブランド刷新期の顧客混乱を抑えている（CLAUDE.mdルール通り）
- 新規追加した施設レコメンダーのUXフロー（入力→判定→CTA）は明快

---

## Priority Recommendations — モダン化への3ステップ

### 1. デザイントークンを確立する（最優先・工数小・影響大）
**なぜ**: 現状の不整合（radius / icon size / tracking / CTA階層）は、トークン未整備が原因。これを直すとその後のあらゆる調整が速くなる。
**どう**: `app/globals.css` に CSS 変数を定義 or `tailwind.config.ts` に extends:
- `spacing`: section-xs/sm/md/lg/xl の 5段
- `borderRadius`: button/card/hero の 3段
- `fontSize + lineHeight`: display/h1/h2/h3/body/caption の 6段
- `color tokens`: `arch-green-primary` / `arch-gold-accent` / `arch-ink-*` を名前で定義

### 2. セクションリズムを導入する（工数中・体感差大）
**なぜ**: 全ページ `py-20 sm:py-28` の単調が、ページ全体の「読みごたえ無さ」を生んでいる。章の重みに差をつけるだけで別物に見える。
**どう**: 
- Hero は広い `py-32 sm:py-44`
- Problem/Solution は `py-24 sm:py-32`
- 補助的セクション（お申し込みまでの流れ等）は `py-14 sm:py-20`
- セクション境界に「編集的区切り」（細いrule線 + キャプション番号 + 一文メッセージ）を挿入

### 3. サービスごとの空気感を差別化する（工数大・ブランド体験に直結）
**なぜ**: 5サービスすべて同じヒーローテンプレートでは、「ARCHがやっているすべてが同じに見える」問題がある。
**どう**: 各サービスに「1つの固有視覚コード」を与える：
- **Consulting (Producer)**: 院長の"精神的参謀" → 手紙風の静かなセリフ体、緑単色、写真・人物なし
- **Sales Academy**: 学部比喩 → チョーク風タイポ、ルーズリーフの罫線、黒板の緑
- **Senior-home**: ご家族目線 → 柔らかいベージュ+緑、手書きライン、写真入りトーン
- **Dental-matching**: 診断エンジン → データビジュアル強め、ダッシュボード風、濃緑+グレー
- **BPO**: 13体エージェント → "システム" を感じさせるグリッド、ゴールドアクセント強化、モノスペースフォントの部分使用

---

## 次のアクション提案

上記3つの優先度で、**次は #1 (トークン確立) を実装**し、その後 #2 (セクションリズム) でトップと主力サービスに適用していくのが投資対効果が高いです。

#3 のサービス別差別化は工数が大きいので、まず1ページ（例：consulting）でプロトタイプし、気に入ったら他ページへ横展開するのが安全です。
