# ARCH 公式サイト改修レポート（2026-09）

作成日：2026年9月11日
状態：**ローカル実装のみ。コミット・push・Vercel デプロイはしていません。**
スクリーンショット：`artifacts/redesign/`

---

## 追記（2026-09-11）TOP HERO の見せ方を変更

- 「左テキスト／右に独立画像」の2カラムをやめ、`hero-arch-glass.png` を HERO 全面の背景にした（右側の独立画像コンテナは削除）。参考：`design-reference/hero-reference.png`（構図・レイヤー構造のみ参考。参考画像そのものは使っていない）
- PC：画像を HERO の右寄り（左端12%〜）に敷き、左から右へ Paper 色→透明のグラデーション（指示の目安どおり 0.98／0.95／0.72／0.12／0）を重ねた。画像の左端はマスクで Paper に溶かして境目を消した。HERO の高さは 740px。ARCH のガラスサインはグラデーションのかからない右側に見える
- スマホ（2026-09-11 再修正）：HERO の最上部（ヘッダー直下）から最下部まで画像で埋め、1枚のガラス空間に見えるようにした。
  - 画像1枚を全面に敷くと、画像の縦横比の都合で ARCH サインが本文の真後ろに来るか、画面幅いっぱいまで拡大されてしまう。そのため同じ画像を2つの範囲で重ねた：上半分＝窓・自然光・植物の範囲（コピーの後ろ）、下半分＝ARCH サインと会議室の範囲。境目はマスクで溶かし合わせている（同じファイルなので読み込みは1回）
  - ARCH サインは「ARCHを30秒で」の少し下（HERO の下半分）。下部で会議室と右の植物が見える。object-position は下半分 67%／上半分 18% 30%
  - Paper の重ね方は上から下へ 0.95 → 0.90（24%）→ 0.80（40%）→ 0.50（54%）→ 0.14（70%）→ 0.06（100%）
  - HERO の高さは 960px（640px 以上は 1000px）。見出しはスマホで3行（約44px・行間1.12）、英字ラベル11px、本文と余白を詰めた
  - 640〜1023px（タブレット）は上半分に画像の左半分だけを使い、ARCH サインが二重に写らないようにした
- 見出しの色を、参考画像に合わせて Forest（#2C4A3B）にした。見出し・本文・CTA はすべて HTML テキストのまま。画像は暗くしていない
- 表示位置は `lib/brand.ts` の `HERO_BACKGROUND` で管理

## 1. 変更の概要

「訪問歯科を入口に、歯科医院の立ち上げ・運営・人材・施設連携・経営判断・承継まで支える外部事務長会社」であることを、TOP を開いて30秒で分かる構成に作り直しました。

- ブランドディスクリプター **DENTAL OPERATIONS PARTNER** を導入（HERO・Footer・会社概要のブランド説明に限定）。日本語の「歯科医院の外部事務長」は HERO の肩書・ヘッダー・Footer に必ず併記。
- ブランド画像4点を「相談 → 判断 → 実装 → 仕組み化」の順で配置（下の3章）。
- TOP を指示の14構成に再編。
- 配色を Paper／White／Deep Green 中心に変更、ゴールドを廃止。書体に Noto Serif JP（HERO・思想・代表のことばに限定）と Inter（英字ラベル・番号）を追加。
- ロゴは現行の正式ロゴのまま。表示を `<BrandLogo />` に一本化し、`lib/brand.ts` の差し替えだけで全ページのロゴが変わる構造に。
- 下層（外部事務長・訪問歯科・支援実績・会社概要）を指示の情報順序に再構成。HERO画像を廃止し「大きな見出し → 短いリード → 内容」に統一。
- 相談導線を「初回適性相談」に統一し、無料の範囲に含めないものを明記。
- 料金・契約条件の表記は変更していません（`docs/CONTENT_DECISIONS_REQUIRED.md` に論点を整理）。

## 2. 変更したファイル

**新規**

| ファイル | 役割 |
|---|---|
| `lib/brand.ts` | ロゴ・ディスクリプター・ブランド画像4点（パス・サイズ・alt・object-position）の一元管理 |
| `lib/ui.ts` | 外枠（最大1280px）・セクション余白・本文幅・見出しの共通クラス |
| `components/brand/BrandLogo.tsx` | 現行正式ロゴを表示する唯一の部品 |
| `components/brand/BrandWordmark.tsx` | 社名テキスト（合同会社ARCH／歯科医院の外部事務長） |
| `components/brand/BrandSignature.tsx` | ARCH／DENTAL OPERATIONS PARTNER／歯科医院の外部事務長 の署名（Footer・会社概要） |
| `components/ui/BrandPhoto.tsx` | ブランド画像の表示（PC・スマホで object-position を個別指定。実写への差し替えもここ経由） |
| `components/ui/SectionHeader.tsx` | 番号＋英字ラベル＋見出し（`SectionNumber` を含む） |
| `components/ui/Cta.tsx` | ボタン／テキストリンクの共通部品、`CONSULT_LABEL`（初回適性相談） |
| `components/ui/CaseRow.tsx` | 支援実績の行（CASE番号・地域・大きな数字・課題→関与→結果→現在地） |
| `components/ui/TwoLayers.tsx` | 支援の二層（TOP と外部事務長ページで共通） |
| `components/ui/PhilosophyBlock.tsx` | ARCH Philosophy の言葉 |
| `components/ui/StepList.tsx` | 番号・見出し・本文の罫線リスト（進め方・時間軸など） |
| `components/ui/RelatedLinks.tsx` | 「あわせて読む」 |
| `docs/WEB_REDESIGN_REPORT.md`／`docs/CONTENT_DECISIONS_REQUIRED.md` | 本レポート／判断事項 |
| `artifacts/redesign/*.png` | スクリーンショット |

**変更**

`app/globals.css`（配色トークン・書体クラス・動き）／`app/layout.tsx`（書体、JSON-LD のロゴ参照）／`app/page.tsx`（TOP 全面）／`app/services/external-manager/page.tsx`／`app/services/visit-dental-consulting/page.tsx`／`app/cases/page.tsx`／`app/cases/[slug]/page.tsx`／`app/company/page.tsx`／`app/thanks/page.tsx`（相談名称）／`app/columns/page.tsx`・`components/Breadcrumb.tsx`・`components/ArticleLayout.tsx`（最大幅・差し色）／`components/SiteHeader.tsx`／`components/SiteFooter.tsx`／`components/ContactForm.tsx`／`components/PageHero.tsx`／`components/Reveal.tsx`（コメント）／`components/SupportAreaList.tsx`／`lib/site.ts`（ナビ・HEROコピー・30秒・二層・代表の役割・サービス二方向・更新日）／`lib/cases.ts`（`code`・`headline`・`status` を追加。数字は変更なし）／`public/images/japan-support-areas.svg`（塗り色のみ新配色へ）

触っていないもの：コラム本文、旧SEO記事（`app/column/`）、転送済みの旧ページ、`lp-sample`（未コミットの作業中ファイル）、既存の未コミット変更、`next.config.ts` の転送設定。

## 3. 使用した画像

| 画像 | 場所 | 意味 | 表示の工夫 |
|---|---|---|---|
| `brand/hero-arch-glass.png` | TOP HERO 右 | ARCHを知る | PC は列の高さに合わせて表示（1024〜1279px は左右均等、1280px 以上は 56:44）。ARCH の文字を中心に置き、スマホは 4:3 |
| `brand/director-meeting.png` | TOP「院長と、同じ目線で考える」／外部事務長「ARCHの役割」 | 院長と一緒に考える | 両手と資料・ARCH のノートが残る位置。同一ページで重複使用なし |
| `brand/implementation-plan.png` | TOP「提案ではなく、実装まで。」／訪問歯科「考え方」 | 現場で実装する | PC は元の比率（切り取りなし）で 7/12 列。スマホは 4:3 にして工程表を大きく |
| `brand/arch-philosophy-books.png` | TOP「ARCH PHILOSOPHY」（深緑の帯） | 仕組みと思想として残す | サービス説明の後に置き、空気を切り替える。3冊の背表紙が切れない位置 |

- 画像の上にロゴ・文字は重ねていません。DENTAL OPERATIONS PARTNER・思想のことばは HTML テキストです。
- 4点は「本社」「当社オフィス」「所在地」などの説明と組み合わせていません。会社概要ページでは使っていません。
- すべて Next.js Image（`sizes` 指定、HERO のみ `priority`、それ以外は遅延読み込み。WebP/AVIF は Next.js の標準最適化）。原画像は削除していません。

## 4. 主要箇所から外した旧表現・旧画像

- TOP HERO の背景写真 `hero-clinic.jpg`（スーツの男性の後ろ姿）と深緑オーバーレイ → 使用停止（ファイルは残置）
- 訪問歯科ページの握手写真 `visit-dental-partnership.jpg` → 使用停止（ファイルは残置）
- ヘッダーの英字「DENTAL BACK OFFICE」→ 削除
- 相談導線「相談する」「初回相談」→「初回適性相談」
- フォーム見出し「院長が一人で抱え始めたとき ARCHが入る。」→「ARCHと組むべきかを、最初に整理します。」
- ARCHを30秒で の旧4項目（現場を知る／経営を考える／実行まで入る／紹介でつながる）と節点付きの図 → フィロソフィーの4項目に置き換え
- ゴールドの差し色、900 ウェイトの極太見出し、ヘッダーの半透明＋ぼかし → 廃止
- TOP の「制作」の文言（実行体制の補足）→ 削除

## 5. デザイン上の判断

- **余白・罫線・番号で整理**：カードの背景は使わず、1px 罫線と `01 — LABEL` の番号で区切り。区切りの起点だけ Deep Green の罫線にした。
- **深緑の面は1か所**：ARCH Philosophy だけを深緑の帯にして、サイト後半で空気が切り替わる役割を持たせた。ほかはボタン・罫線・数字で緑を使う。深緑の面積は目安の2割よりやや少なめ（落ち着いた印象を優先）。
- **H1 の大きさ**：指示は PC で clamp(56px, 7vw, 100px) だが、左列（約640px）に「“回り続ける”組織へ。」を1行で収めるため、1440px で約58px（上限58px）とした。56px 以上は満たしている。
- **明朝の範囲**：HERO の見出し、「人を見て、最後は人が決める。」、代表のことば、二層の「終わらせる仕事。」等、ARCH Philosophy、二層の結びのみ。本文・ナビ・ボタンはすべて Noto Sans JP。
- **動き**：画面に入ったとき1回だけ、240ms のフェード＋8px、罫線が左から引かれる程度。`prefers-reduced-motion` で無効化。スクロール連動・パララックス・カウントアップなし。
- **角丸 2px・影なし・ガラス風 UI なし**。ガラスは写真の世界観だけ。

## 6. レスポンシブ確認（390／768／1024／1440px）

- 390px：英字ラベル → 肩書 → 見出し（2行固定）→ 本文 → CTA → 画像 の順。見出し約35px、リードは「施設連携・」の後で改行。HERO 画像 4:3 で ARCH の文字は中央付近に残る。サービス見出しの不自然な折り返しを修正済み。
- 768px：HERO は縦並び、画像 16:10。30秒の4項目は2列。
- 1024px：HERO は左右均等。最初の版で画像が縦長に切られすぎたため、この幅だけ列比率と最小の高さを調整した。
- 1440px：HERO は 56:44。画像の高さは約560px。
- 各画像の object-position は `lib/brand.ts` で PC／スマホ別に指定。

## 7. SEO

- URL・title・description・canonical・OGP・構造化データ・sitemap・robots・GA4 は維持（TOP の構造化データは同じ2サービスを出力）。
- 構造化データのロゴ URL は `lib/brand.ts` から参照（値は従来と同じ `/images/logo.jpg`）。
- `lib/site.ts` の `PAGE_DATES` で、今回変えたページの更新日を 2026-09-11 にした（sitemap の lastModified に反映）。公開日が大きくずれる場合は公開日に合わせて直してください。
- 転送設定（`next.config.ts`）は変更なし。

## 8. アクセシビリティ

- 見出し構造（h1 1つ → h2 → h3）、ランドマーク、パンくず、スキップリンクは維持。
- 画像の alt は指示の文言を使用（hero／meeting／implementation／philosophy）。
- コントラスト（WCAG AA）：Muted #6B716D／Paper 4.55:1、本文 #3D423F／Paper 9.3:1、Green #0F5C3E／Paper 7.3:1、Light Green／Deep Green 5.6:1、White／Deep Green 9.1:1。Pale Green の上には Muted の小さな文字を置いていない。
- タップ領域 44px 以上（ボタン 52px、テキストリンク 44px）。フォーカスリングは既存どおり表示。
- フォームは既存の必須表示・ラベル・説明（aria-describedby）を維持。

## 9. 品質チェックの結果

| 項目 | 結果 |
|---|---|
| `tsc --noEmit` | エラー 0 |
| `npm run lint`（eslint） | エラー 0／警告 1（既存の `app/bpo-service/page.tsx` の未使用変数。転送済みの旧ページで今回は未変更） |
| `next build` | 成功（49ページを静的生成） |
| リンク確認 | TOP から辿れる内部ページ 26件をクロール。404・画像切れ 0 |
| コンソール | エラー 0（撮影環境で GA4 の読み込みが遮断されることによるエラーのみ。本番では発生しない） |

**確認環境についての注意**：作業用のクラウド環境から Google Fonts に接続できないため、ローカル確認のビルドでは同じ書体を `@fontsource` から読み込む Next.js 標準のテスト用設定（`NEXT_FONT_GOOGLE_MOCKED_RESPONSES`）と webpack ビルドを使いました。リポジトリには何も追加していません。Vercel では通常どおり Google Fonts から取得されます。お手元の Mac で `npm run build` → `npm run start` を一度実行してから公開してください。

## 10. スクリーンショット（`artifacts/redesign/`）

`home-desktop.png`（1440）／`home-mobile.png`（390）／`home-tablet-768.png`／`home-1024.png`／`home-desktop-firstview.png`／`home-mobile-firstview.png`／`home-1024-firstview.png`／`external-manager-desktop.png`／`visit-dental-mobile.png`／`cases-desktop.png`／`company-desktop.png`

全体撮影では、sticky ヘッダーが途中に写り込むのを避けるため撮影時だけヘッダーを通常配置にしています（実際のサイトではヘッダーは上部に固定されます）。

## 11. セルフレビュー（20項目）

| # | 観点 | 評価 | メモ |
|---|---|---|---|
| 1 | 30秒で何者か分かるか | YES | HERO の肩書＋見出し＋リード、直下に一文の定義 |
| 2 | 訪問歯科コンサルだけに見えないか | YES | 立ち上げ〜承継までを HERO で明示。サービスは二方向 |
| 3 | 患者紹介会社に見えないか | YES | 訪問歯科ページで「患者を紹介する仕事ではありません」。会社概要に「引き受けない仕事」 |
| 4 | AI会社に見えないか | YES | AI への言及は「院長と同じ目線」の補足と代表の役割の中だけ。テック演出なし |
| 5 | 制作会社に見えないか | YES | TOP から「制作」を外した |
| 6 | 外部事務長だと分かるか | YES | HERO・ヘッダー・Footer に日本語で常に表示 |
| 7 | DENTAL OPERATIONS PARTNER が自然か | YES | HERO の小ラベル、写真のサイン、Footer の署名で一貫。多用していない |
| 8 | 院長と同じ目線に見えるか | YES | 打ち合わせ写真＋「人を見て、最後は人が決める。」 |
| 9 | 現場で実装する会社に見えるか | YES | 工程表の写真と「提案ではなく、実装まで。」、訪問歯科の時間軸10段階 |
| 10 | 離れても仕組みが残るか | YES | 30秒の04、二層、自走・卒業の条件 |
| 11 | 依存させる会社に見えないか | YES | 「卒業」「契約を続けること自体を目的にしない」「医院側が担う範囲」 |
| 12 | 鈴木集の役割が明確か | YES | 「担うこと／仕組みへ移すこと」を並記。一人で全部とは見せていない |
| 13 | 実績が証拠として見えるか | YES | 数字は既存の確認済みの値のみ、時点と意味を併記、ARCH単独の成果ではない旨を明記 |
| 14 | 写真が装飾になっていないか | YES | 4点それぞれがセクションの意味（知る→考える→実装→残す）を担う |
| 15 | 現行ロゴと矛盾しないか | YES | ロゴは現行のまま。新ロゴ案・新マークは不使用、写真の上にロゴを重ねていない |
| 16 | ロゴ変更に耐えられるか | YES | `lib/brand.ts` の `BRAND_LOGO` を差し替えるだけで全体に反映 |
| 17 | スマホで読みやすいか | YES | 390px で改行位置・画像の切り取りを確認・修正済み |
| 18 | 大企業・高級コンサルに見えないか | YES | 写真は4点に抑え、白と罫線中心。金色・光沢表現なし |
| 19 | 医療としての誠実さ | YES | 数字の注記、紹介に頼らない、無料相談の範囲を明示 |
| 20 | フィロソフィーが感じられるか | YES | 30秒・二層・Philosophy・フォーム（相談は開く。責任は有料）で繰り返し表現 |

## 12. 残っている課題

1. 料金・商品構成・契約条件の整理（`CONTENT_DECISIONS_REQUIRED.md` 1〜3章）
2. 支援実績の「現在地」の文言確認、代表経歴の表記ゆれの統一
3. 新しく書いた文言の確認（同 5章）
4. ブランド画像に「イメージです」の注記を入れるか
5. OGP 画像の作り直し（現在は旧画像）
6. 承認後、`CLAUDE.md` と `docs/arch-hp-baseline-spec-2026-08-10.md` を今回の方針に合わせて改定
7. 実写（院長との打合せ、医院内確認、研修、施設打合せ等）が揃ったら `lib/brand.ts` の `BRAND_IMAGES` を差し替え
8. コラム記事の本文にある「初回相談」という表記（本文は触らない方針のため未変更）
