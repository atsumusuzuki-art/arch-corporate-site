import { Building2, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "老人ホーム紹介事業 | 合同会社ARCH",
  description:
    "ご本人・ご家族に最適な老人ホーム選びを無料でサポート。医療介護の専門知識を活かした、ARCHならではの施設紹介サービス。",
};

export default function SeniorHomePage() {
  return (
    <article>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-900 text-white py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <div className="flex items-center gap-3 mb-6">
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-white/10">
              <Building2 className="text-green-300" size={24} />
            </span>
            <span className="text-green-300 text-sm font-bold tracking-widest uppercase">
              Service 03
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight mb-6">
            老人ホーム紹介事業
          </h1>
          <p className="text-lg sm:text-xl text-green-100 max-w-3xl leading-relaxed">
            ご本人・ご家族に寄り添い、最適な老人ホーム選びを無料でサポート。
            医療介護の専門知識を活かした、ARCHならではの施設紹介サービスです。
          </p>
        </div>
      </section>

      {/* 課題 */}
      <section className="py-16 sm:py-20 bg-green-50/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <h2 className="text-sm font-bold text-green-700 tracking-widest uppercase mb-3">
            Problem
          </h2>
          <p className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-10">
            老人ホーム選びでこんなお悩みはありませんか？
          </p>
          <div className="grid sm:grid-cols-2 gap-5">
            {[
              "老人ホームの種類が多すぎて、どこが合うのか分からない",
              "見学に行っても、良し悪しの判断基準がない",
              "入居費用や月額費用の相場が分からず不安",
              "医療対応が必要だが、受け入れ可能な施設が見つからない",
              "退院が迫っており、急いで施設を探す必要がある",
              "紹介会社によって紹介される施設が偏っていないか心配",
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-3 bg-white rounded-xl p-5 border border-gray-100 shadow-sm"
              >
                <span className="text-red-500 mt-0.5 font-bold text-lg">✕</span>
                <p className="text-gray-700 font-medium leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* サービス内容 */}
      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <h2 className="text-sm font-bold text-green-700 tracking-widest uppercase mb-3">
            Service
          </h2>
          <p className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-10">
            ARCHの老人ホーム紹介
          </p>

          <div className="space-y-8">
            {[
              {
                num: "01",
                title: "無料相談・ヒアリング",
                desc: "ご本人の身体状況・医療ニーズ・ご家族のご希望・予算などを丁寧にヒアリング。最適な施設タイプを一緒に検討します。",
              },
              {
                num: "02",
                title: "施設のご提案",
                desc: "ヒアリング内容を元に、条件に合った施設を厳選してご提案。施設の特徴・費用・医療対応力など、比較しやすい情報をお伝えします。",
              },
              {
                num: "03",
                title: "見学同行",
                desc: "施設見学に同行し、一般の方では気づきにくい医療体制・介護品質・生活環境のチェックポイントを専門家の視点でアドバイスします。",
              },
              {
                num: "04",
                title: "入居手続きサポート",
                desc: "契約書の確認・入居準備・必要書類の手配まで、入居完了までトータルでサポート。ご家族の負担を最小限に抑えます。",
              },
              {
                num: "05",
                title: "入居後フォロー",
                desc: "入居後も定期的にフォローアップ。施設との関係構築や、状態変化に応じた住み替えのご相談にも対応します。",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="flex gap-5 sm:gap-8 items-start border-b border-gray-100 pb-8"
              >
                <span className="text-3xl sm:text-4xl font-extrabold text-green-200 flex-shrink-0">
                  {item.num}
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 特徴 */}
      <section className="py-16 sm:py-20 bg-green-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <h2 className="text-sm font-bold text-green-300 tracking-widest uppercase mb-3">
            Why ARCH
          </h2>
          <p className="text-2xl sm:text-3xl font-extrabold mb-10">
            ARCHの紹介が選ばれる理由
          </p>
          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                title: "完全無料",
                desc: "ご相談から入居まで、すべてのサービスを無料でご提供。施設からの紹介手数料で運営しているため、ご家族の費用負担はありません。",
              },
              {
                title: "医療の専門知識",
                desc: "医療介護業界に精通したスタッフが対応。医療依存度の高い方の受け入れ施設選びも、専門的な視点でサポートします。",
              },
              {
                title: "中立・公平な提案",
                desc: "特定の施設に偏らない中立的な立場でご提案。ご本人・ご家族にとって本当に最適な施設選びを最優先にします。",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/10 rounded-xl p-8 border border-white/10"
              >
                <h3 className="font-extrabold text-lg mb-3">{item.title}</h3>
                <p className="text-green-100 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 対応施設タイプ */}
      <section className="py-16 sm:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <h2 className="text-sm font-bold text-green-700 tracking-widest uppercase mb-3">
            Facility Types
          </h2>
          <p className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-10">
            ご紹介可能な施設タイプ
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "介護付き有料老人ホーム",
              "住宅型有料老人ホーム",
              "サービス付き高齢者向け住宅",
              "グループホーム",
              "特別養護老人ホーム",
              "介護老人保健施設",
              "ケアハウス",
              "シニア向け分譲マンション",
              "その他高齢者向け施設",
            ].map((type, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-green-50/50 rounded-lg p-4 border border-green-100"
              >
                <CheckCircle2 size={18} className="text-green-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 流れ */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-8">
          <h2 className="text-sm font-bold text-green-700 tracking-widest uppercase mb-3">
            Flow
          </h2>
          <p className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-10">
            ご利用の流れ
          </p>
          <div className="space-y-6">
            {[
              { step: "STEP 1", title: "お問い合わせ", desc: "お電話またはフォームからお気軽にご相談ください。ご状況を簡単にお伺いします。" },
              { step: "STEP 2", title: "詳細ヒアリング", desc: "ご本人の状態・ご希望条件・予算などを詳しくお聞きし、最適な施設タイプをご提案します。" },
              { step: "STEP 3", title: "施設ご提案・見学", desc: "条件に合った施設をご提案し、見学に同行。専門家の視点でアドバイスします。" },
              { step: "STEP 4", title: "入居決定・手続き", desc: "ご納得いただいた施設への入居手続きをサポート。入居後のフォローも行います。" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex gap-5 items-start bg-white rounded-xl p-6 border border-gray-100 shadow-sm"
              >
                <span className="text-xs font-bold text-green-700 bg-green-100 px-3 py-1 rounded-full flex-shrink-0">
                  {item.step}
                </span>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 関連コラム */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <h2 className="text-xl font-extrabold text-gray-900 mb-8">関連コラム</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/columns/facility-needs" className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <span className="text-xs font-bold text-green-700 mb-2 block">施設の本音</span>
              <h3 className="font-bold text-gray-900 group-hover:text-green-700 transition-colors text-sm">介護施設における「口腔ケアの序列」。歯医者が現場で煙たがられる本当の理由</h3>
            </Link>
            <Link href="/columns/communication" className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <span className="text-xs font-bold text-green-700 mb-2 block">現場コミュニケーション</span>
              <h3 className="font-bold text-gray-900 group-hover:text-green-700 transition-colors text-sm">介護現場で嫌われる衛生士の共通点。良かれと思った「その指導」、実は大迷惑です。</h3>
            </Link>
            <Link href="/columns/staff-role" className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <span className="text-xs font-bold text-green-700 mb-2 block">組織マネジメント</span>
              <h3 className="font-bold text-gray-900 group-hover:text-green-700 transition-colors text-sm">優秀なスタッフが辞めない医院の秘密。元小学校教諭が教える「係活動」マネジメント</h3>
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
