import Link from "next/link";
import {
  ArrowRight,
  Check,
  Briefcase,
  FileText,
  DollarSign,
  Megaphone,
  Users,
  ShieldCheck,
  BarChart3,
  ClipboardList,
  Search,
  Scale,
  MessageSquare,
  Palette,
  Cpu,
  Zap,
  Globe,
  ClipboardCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";

export const metadata = {
  title: "ARCH・外付け事務局（スポット型BPO） | 合同会社ARCH",
  description:
    "資料作成・ホームページ制作・カルテ/レセプトBPOなど、必要な業務を必要な分だけ。13体のエージェント活用で他社より圧倒的に早く・安く提供する、スポット型外付け事務局。",
};

/* 13体のエージェント定義 —— #4, #5, #7 を特に強調 */
const AGENTS = [
  { id: 1, name: "統括ディレクター", role: "全案件の進行管理と優先順位付け", icon: Briefcase, highlight: false },
  { id: 2, name: "ウェブマスター", role: "ホームページ・コード・デプロイの全工程管理", icon: Cpu, highlight: false },
  { id: 3, name: "マーケター", role: "SEO・コラム企画・アクセス解析", icon: BarChart3, highlight: false },
  { id: 4, name: "事務局長", role: "書類作成・請求管理・保険算定・レセプト補助", icon: FileText, highlight: true },
  { id: 5, name: "経理・資金繰り担当", role: "月次決算・キャッシュフロー・税理士連携", icon: DollarSign, highlight: true },
  { id: 6, name: "営業アシスタント", role: "施設宛の提案書・営業資料作成代行", icon: Megaphone, highlight: false },
  { id: 7, name: "人事・労務", role: "採用・就業規則・スタッフ面談記録管理", icon: Users, highlight: true },
  { id: 8, name: "コンプライアンス監査", role: "個人情報・法令遵守・リスクチェック", icon: ShieldCheck, highlight: false },
  { id: 9, name: "現場オペレーション", role: "訪問スケジュール・動線・備品管理", icon: ClipboardList, highlight: false },
  { id: 10, name: "リサーチャー", role: "制度改正・施設ニーズ・競合調査", icon: Search, highlight: false },
  { id: 11, name: "契約・法務", role: "契約書レビュー・覚書・同意書管理", icon: Scale, highlight: false },
  { id: 12, name: "カスタマーサポート", role: "施設・家族からの問い合わせ一次受け", icon: MessageSquare, highlight: false },
  { id: 13, name: "デザインディレクター", role: "パンフ・バナー・ブランド統一", icon: Palette, highlight: false },
];

export default function BpoServicePage() {
  return (
    <article>
      {/* ──────────────────────────────────────────
          HERO
      ────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-950 pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-32 lg:pb-36 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(255,255,255,0.1),transparent_55%)]"></div>
        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <span className="inline-block text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase text-green-200 bg-white/10 backdrop-blur px-4 py-1.5 rounded-full mb-6 border border-white/20">
            Service 05 — External Back Office
          </span>
          <h1 className="font-extrabold leading-[1.25] tracking-tight text-white mb-3 sm:mb-4">
            <span className="block text-[1.9rem] sm:text-[2.6rem] lg:text-[3rem]">
              ARCH・<span className="text-yellow-300">外付け事務局</span>
            </span>
            <span className="block text-[0.85rem] sm:text-sm font-medium text-green-300 mt-2 tracking-wider">
              （ 事務代行・BPO ）
            </span>
          </h1>
          <p className="text-lg sm:text-2xl lg:text-[1.65rem] font-bold text-green-100 leading-snug mt-6 mb-6 sm:mb-8">
            先生を<span className="text-yellow-300">事務から解放</span>し、<br className="hidden sm:block" />
            医院に「最強の外部エンジン」を装着する。
          </p>
          <p className="text-sm sm:text-base text-green-200/90 leading-relaxed max-w-2xl mx-auto mb-10 sm:mb-12">
            資料作成・ホームページ制作・カルテやレセプトのBPOまで、
            <strong className="text-white">必要なエージェントを、必要な分だけ</strong>。
            月額定期契約や定期ミーティングを前提としない <span className="text-yellow-300 font-bold">「スポット型BPO」</span> として、
            医院のご予算に合わせて柔軟にご利用いただけます。
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2.5 bg-white hover:bg-green-50 text-green-900 px-8 py-4 rounded-lg text-sm sm:text-base font-bold tracking-wider transition-colors shadow-lg shadow-black/20"
          >
            無料オンライン相談を予約する
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          課題セクション
      ────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <p className="text-center text-sm font-bold tracking-widest uppercase text-green-700 mb-4">
            Problem
          </p>
          <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-gray-900 mb-14 sm:mb-16">
            先生の時間、<span className="text-green-800">どこに溶けていますか？</span>
          </h2>

          <div className="grid sm:grid-cols-3 gap-5 sm:gap-6">
            {[
              {
                title: "書類地獄",
                body: "カルテ、報告書、同意書、請求書、レセプト。診療の合間に院長が深夜までPCに向かう毎日。",
              },
              {
                title: "労務の悩み",
                body: "採用、契約、面談記録、就業規則の更新。専門知識が必要なのに、誰も詳しくない。",
              },
              {
                title: "経理の煩雑さ",
                body: "月次決算、資金繰り、税理士との連携。数字が出てくる頃には手遅れになっている。",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 sm:p-8 border-l-4 border-red-400"
              >
                <h3 className="font-extrabold text-gray-900 text-base sm:text-lg mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          13体のエージェント・アーキテクチャ
      ────────────────────────────────────────── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <p className="text-center text-sm font-bold tracking-widest uppercase text-green-700 mb-4">
            The 13 Agents
          </p>
          <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
            医院の裏で、<span className="text-green-800">13体のエージェント</span>が動き続ける。
          </h2>
          <p className="text-center text-sm sm:text-base text-gray-500 leading-relaxed max-w-3xl mx-auto mb-14 sm:mb-16">
            ARCH・外付け事務局は、単なる「人の派遣」ではありません。
            役割ごとに特化した13体のエージェントが、ARCH統括ディレクターの指揮のもと連動します。
            医院のご予算と業務内容に合わせて、必要なエージェントを<strong>スポットで組み合わせて</strong>ご活用いただける設計です。
          </p>

          {/* Agent grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 mb-16">
            {AGENTS.map((a) => {
              const Icon = a.icon;
              return (
                <div
                  key={a.id}
                  className={`rounded-2xl p-5 sm:p-6 border transition-all ${
                    a.highlight
                      ? "bg-gradient-to-br from-green-800 to-green-900 border-yellow-300/30 text-white shadow-lg shadow-green-900/20"
                      : "bg-gray-50 border-gray-100 text-gray-900"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${
                        a.highlight ? "bg-yellow-300 text-green-900" : "bg-white text-green-700 border border-gray-200"
                      }`}
                    >
                      <Icon size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className={`text-[10px] font-bold tracking-widest ${a.highlight ? "text-yellow-300" : "text-green-700"}`}>
                          #{String(a.id).padStart(2, "0")}
                        </span>
                        {a.highlight && (
                          <span className="text-[9px] font-bold bg-yellow-300 text-green-900 px-1.5 py-0.5 rounded tracking-wider">
                            CORE
                          </span>
                        )}
                      </div>
                      <h3 className={`font-extrabold text-base mb-1 ${a.highlight ? "text-white" : "text-gray-900"}`}>
                        {a.name}
                      </h3>
                      <p className={`text-xs leading-relaxed ${a.highlight ? "text-green-100" : "text-gray-500"}`}>
                        {a.role}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Highlight card for #4/#5/#7 */}
          <div className="bg-green-50/70 rounded-3xl p-8 sm:p-10 border border-green-100">
            <p className="text-[10px] font-bold tracking-[0.25em] uppercase text-green-700 mb-3">
              特に強力なのは——
            </p>
            <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-5 leading-snug">
              「事務局長」「経理・資金繰り」「人事・労務」の<br className="hidden sm:block" />
              <span className="text-green-800">3体がCORE</span>として常時稼働
            </h3>
            <div className="grid sm:grid-cols-3 gap-5">
              {[
                { title: "#04 事務局長", body: "書類作成・請求管理・レセプト補助・行政対応。元 広域医療法人歯科事務局長の知見をフルに注入。" },
                { title: "#05 経理・資金繰り担当", body: "月次決算を月初5営業日までに。KPIとキャッシュの「見える化」で経営判断を加速。" },
                { title: "#07 人事・労務", body: "採用活動・就業規則・面談記録・給与計算補助まで、医院の「人に関わる全て」を一括引き受け。" },
              ].map((h) => (
                <div key={h.title} className="bg-white rounded-2xl p-5 sm:p-6 border border-green-100">
                  <p className="text-sm font-bold text-green-800 mb-2">{h.title}</p>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{h.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          導入効果
      ────────────────────────────────────────── */}
      <section className="bg-green-900 py-20 sm:py-28 text-white">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <p className="text-center text-sm font-bold tracking-widest uppercase text-green-300 mb-4">
            Impact
          </p>
          <h2 className="text-center text-2xl sm:text-3xl font-extrabold mb-14 sm:mb-16">
            導入医院が手に入れる、<span className="text-yellow-300">3つの"時間"</span>
          </h2>

          <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
            {[
              { num: "1", label: "診療に集中する時間", body: "書類と事務から解放され、1日あたり平均2.5時間の「考える余裕」が生まれます。" },
              { num: "2", label: "経営判断する時間", body: "リアルタイムKPIに基づき、施策の意思決定スピードが劇的に上がります。" },
              { num: "3", label: "家族と過ごす時間", body: "院長の深夜残業が減り、週末を取り戻せます。持続可能な経営に不可欠な要素です。" },
            ].map((item) => (
              <div
                key={item.num}
                className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/10"
              >
                <p className="text-5xl font-extrabold text-yellow-300 mb-4">{item.num}</p>
                <p className="text-lg font-bold mb-3">{item.label}</p>
                <p className="text-sm text-green-100 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          Pricing — Spot BPO 料金プラン
      ────────────────────────────────────────── */}
      <section id="pricing" className="bg-white py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <p className="text-center text-sm font-bold tracking-widest uppercase text-green-700 mb-4">
            Pricing — Spot BPO
          </p>
          <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
            必要な業務を、必要な分だけ。
            <br />
            <span className="text-green-800">スポット型BPOの料金体系</span>
          </h2>
          <p className="text-center text-sm sm:text-base text-gray-500 leading-loose max-w-3xl mx-auto mb-10 sm:mb-12">
            成果物に対してご費用をいただくため、費用対効果が明確です。
            <br className="hidden sm:block" />
            エージェント活用により、他社より
            <strong className="text-green-800">圧倒的に早く、圧倒的に安く</strong>ご提供できます。
          </p>

          {/* Budget Banner */}
          <div className="bg-gradient-to-r from-green-50 to-green-100/60 rounded-2xl p-6 sm:p-8 border border-green-200 mb-12 text-center">
            <p className="text-[11px] sm:text-xs font-bold tracking-[0.25em] uppercase text-green-700 mb-3">
              Budget Range — 目安予算
            </p>
            <p className="text-3xl sm:text-5xl font-extrabold text-green-900 leading-none">
              5万円
              <span className="text-xl sm:text-3xl text-green-700 font-bold mx-3">〜</span>
              30万円
            </p>
            <p className="text-xs sm:text-sm text-gray-500 mt-4 leading-relaxed max-w-xl mx-auto">
              ご予算に合わせて、
              <strong className="text-gray-700">複数のエージェントを組み合わせて</strong>
              ご活用いただけます。まずはお気軽にご相談ください。
            </p>
          </div>

          {/* 3 pricing cards */}
          <div className="grid md:grid-cols-3 gap-5 sm:gap-6 mb-10 items-stretch">
            {/* Card 1 — 施設・ご家族向け資料作成 */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-200 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-green-50 text-green-700 flex items-center justify-center mb-5">
                <FileText size={24} />
              </div>
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-green-700 mb-1">
                Spot — 成果物型
              </p>
              <h3 className="text-lg font-extrabold text-gray-900 mb-3">
                施設・ご家族向け資料作成
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-1">
                営業資料・ご家族向け説明資料・パンフレットなどを成果物単位でご依頼いただけます。
                エージェント活用により、納期は他社より
                <strong className="text-green-700">圧倒的に早く</strong>
                お届けします。
              </p>
              <div className="pt-5 border-t border-gray-100">
                <p className="text-[10px] tracking-widest text-gray-400 mb-1">料金</p>
                <p>
                  <span className="text-3xl font-extrabold text-green-800">5</span>
                  <span className="text-base font-bold text-gray-600 ml-1">万円〜</span>
                  <span className="text-xs text-gray-400 ml-2">/ 件</span>
                </p>
              </div>
            </div>

            {/* Card 2 — ホームページ作成 */}
            <div className="bg-gradient-to-br from-green-800 to-green-900 text-white rounded-2xl p-6 sm:p-7 border border-green-700 flex flex-col relative shadow-lg shadow-green-900/20">
              <div className="absolute -top-3 left-6 bg-yellow-300 text-green-900 text-[10px] font-bold px-3 py-1 rounded-full tracking-wider flex items-center gap-1">
                <Zap size={10} /> Best Value
              </div>
              <div className="w-12 h-12 rounded-xl bg-yellow-300/20 text-yellow-300 flex items-center justify-center mb-5 mt-2">
                <Globe size={24} />
              </div>
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-yellow-300 mb-1">
                Spot — 成果物型
              </p>
              <h3 className="text-lg font-extrabold mb-3">ホームページ作成</h3>
              <p className="text-sm text-green-100/90 leading-relaxed mb-5 flex-1">
                医院・クリニックの公式サイト構築。エージェント活用で、他社よりも
                <strong className="text-yellow-300">圧倒的に安く、そして早く</strong>
                完成します。
              </p>
              <div className="pt-5 border-t border-white/10">
                <p className="text-[10px] tracking-widest text-green-300 mb-1">料金</p>
                <p>
                  <span className="text-3xl font-extrabold text-white">30</span>
                  <span className="text-base font-bold text-green-200 ml-1">万円〜</span>
                  <span className="text-xs text-green-300 ml-2">/ 一式</span>
                </p>
              </div>
            </div>

            {/* Card 3 — カルテ・レセプトBPO */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-gray-200 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-green-50 text-green-700 flex items-center justify-center mb-5">
                <ClipboardCheck size={24} />
              </div>
              <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-green-700 mb-1">
                Continuous — 継続BPO
              </p>
              <h3 className="text-lg font-extrabold text-gray-900 mb-3">
                カルテ・レセプトBPO
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-1">
                カルテ作成補助・レセプト業務は継続的な運用が必要なため、月額の
                <strong className="text-gray-800">継続BPO契約</strong>
                でご対応します。業務量・医院規模によりお見積りいたします。
              </p>
              <div className="pt-5 border-t border-gray-100">
                <p className="text-[10px] tracking-widest text-gray-400 mb-1">料金</p>
                <p>
                  <span className="text-xl font-extrabold text-gray-700">要相談</span>
                  <span className="text-xs text-gray-400 ml-2">(月額)</span>
                </p>
              </div>
            </div>
          </div>

          <p className="text-center text-xs text-gray-400 leading-relaxed">
            ※ 上記以外にも、動画制作・採用支援・営業資料作成など、幅広いスポットBPOにご対応可能。
            <br className="hidden sm:block" />
            具体的な業務範囲と料金はヒアリングの上、医院ごとにお見積りいたします。
          </p>

          {/* 全体活用の場合 → 訪問歯科プロデューサー導線 */}
          <div className="mt-16 bg-gradient-to-br from-green-50 to-green-100/60 rounded-3xl p-8 sm:p-12 border border-green-200">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-6 lg:gap-8">
              <div className="w-16 h-16 rounded-2xl bg-green-800 text-white flex items-center justify-center shrink-0">
                <Stethoscope size={32} />
              </div>
              <div className="flex-1">
                <p className="text-xs font-bold tracking-[0.25em] uppercase text-green-700 mb-2">
                  For Full-Stack Engagement
                </p>
                <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-3 leading-snug">
                  13体のエージェントを
                  <span className="text-green-800">横断的・継続的に</span>
                  活用したい方へ
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  事業全体に深く入り込み、経営視点で13体のエージェントを統合運用したい場合は、
                  <strong className="text-gray-900">
                    「訪問歯科プロデューサー」（経営コンサルティング）
                  </strong>
                  をご検討ください。月額契約で、ARCHが経営パートナーとして常時伴走します。
                </p>
              </div>
              <Link
                href="/services/consulting"
                className="inline-flex items-center gap-2 bg-green-800 hover:bg-green-900 text-white px-6 py-3.5 rounded-lg text-sm font-bold tracking-wider transition-colors shadow-md shrink-0 w-full lg:w-auto justify-center"
              >
                訪問歯科プロデューサーを見る
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Coming Soon — AIエージェント発注システム teaser */}
          <div className="mt-10 bg-gray-900 text-white rounded-3xl p-8 sm:p-10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl"></div>
            <div className="relative flex flex-col sm:flex-row items-start gap-5 sm:gap-6">
              <div className="w-12 h-12 rounded-xl bg-yellow-400/20 text-yellow-300 flex items-center justify-center shrink-0">
                <Sparkles size={24} />
              </div>
              <div className="flex-1">
                <span className="inline-block text-[10px] font-bold tracking-[0.25em] uppercase text-yellow-300 bg-yellow-400/10 px-3 py-1 rounded-full mb-3">
                  Coming Soon
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold mb-3 leading-snug">
                  AIエージェント発注システム（開発中）
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed">
                  「資料作成」ボタンを押すと、必要な資料の種類をヒアリング。
                  ARCHの各エージェントがどの業務を、何日で、いくらで対応するかを自動見積りし、
                  そのままワンクリックで発注できる——そんなBPO体験を準備中です。リリース時にはご案内いたします。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          CTA
      ────────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-green-50/60 to-white py-20 sm:py-28">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-6 leading-snug">
            先生は「診療」に集中してください。<br />
            <span className="text-green-800">残りは、ARCHがまるごと巻き取ります。</span>
          </h2>
          <p className="text-sm sm:text-base text-gray-500 leading-relaxed mb-10 max-w-2xl mx-auto">
            無料オンライン相談では、現在の業務フローをヒアリングし、どのエージェントがどの業務を巻き取れるかを具体的にご提案します。
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2.5 bg-green-800 hover:bg-green-900 text-white px-8 py-4 sm:py-5 rounded-lg text-sm sm:text-base font-bold tracking-wider transition-colors shadow-lg shadow-green-900/20"
          >
            無料オンライン相談を予約する
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </article>
  );
}
