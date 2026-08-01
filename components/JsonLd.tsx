/**
 * JsonLd — 構造化データを 1 つの <script> として出力する小さなヘルパー
 * ------------------------------------------------------------------
 * 表示している内容と一致する範囲だけを渡すこと。
 * 画面にない情報を構造化データにだけ足さない。
 */

export default function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
