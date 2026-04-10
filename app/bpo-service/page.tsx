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
} from "lucide-react";

export const metadata = {
  title: "ARCH・外付け事務局（事務代行・BPO） | 合同会社ARCH",
  description:
    "先生を事務から解放し、医院に『最強の外部エンジン』を装着する。13体のエージェントが裏側で動き続ける、次世代バックオフィス・BPO。",
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
            書類地獄も、労務の悩みも、経理の煩雑さも——全部、ARCHの裏側で動き続ける13体のエージェントにお任せください。
            先生は「診療」と「経営判断」だけに集中できる、次世代のバックオフィスをご提供します。
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
            役割ごとに特化した13体のエージェント（専門担当）が、ARCH統括ディレクターの指揮のもと連動し、
            医院に必要なバックオフィス機能を<strong>フルスタックで</strong>装着します。
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
          What's included
      ────────────────────────────────────────── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <p className="text-center text-sm font-bold tracking-widest uppercase text-green-700 mb-4">
            Included
          </p>
          <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-gray-900 mb-14 sm:mb-16">
            ARCH・外付け事務局に<span className="text-green-800">含まれるもの</span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
            {[
              "カルテ・報告書の作成補助",
              "請求・レセプト業務の補助",
              "月次決算・KPIレポート",
              "採用業務の代行（求人票作成・面接調整）",
              "就業規則・労務書類の整備",
              "契約書・覚書のレビュー・管理",
              "施設・ご家族向け資料の作成代行",
              "営業用パンフ・提案書のデザイン",
              "コンプライアンス監査・リスクチェック",
              "月次オンラインミーティング",
              "ARCH独自アプリの使用権",
              "制度改正・業界動向のレポート",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 bg-green-50/60 rounded-xl p-4 border border-green-100">
                <Check className="text-green-600 shrink-0 mt-0.5" size={18} />
                <p className="text-sm sm:text-base text-gray-700 font-medium">{item}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-gray-400 mt-10">
            ※ 具体的な業務範囲と料金はヒアリングの上、医院ごとにカスタマイズしてご提案します。
          </p>
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
