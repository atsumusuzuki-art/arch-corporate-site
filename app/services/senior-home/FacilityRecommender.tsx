"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Building,
  Heart,
  Shield,
  Activity,
  Stethoscope,
  Home,
  Info,
  CheckCircle2,
} from "lucide-react";

/* ──────────────────────────────────────────
   型定義
────────────────────────────────────────── */
type CareLevel =
  | "自立"
  | "要支援1・2"
  | "要介護1・2"
  | "要介護3"
  | "要介護4・5";

type MedicalCondition = "なし" | "ガン末期" | "指定難病";
type Dementia = "なし" | "軽度" | "中等度〜重度";

type Facility = {
  type: string;
  sampleName: string;
  icon: typeof Building;
  priceRange: [number, number]; // 月額 万円
  description: string;
  highlight: string; // 一言強み
  careLevels: CareLevel[];
  acceptMedical: MedicalCondition[]; // 対応可能な医療条件
  dementiaSupport: Dementia[]; // 対応可能な認知症状態
};

/* ──────────────────────────────────────────
   サンプル施設データベース
   （実際のご相談では全国の施設からご提案いたします）
────────────────────────────────────────── */
const FACILITIES: Facility[] = [
  {
    type: "介護付き有料老人ホーム",
    sampleName: "サンプル施設A",
    icon: Home,
    priceRange: [20, 32],
    description:
      "24時間介護スタッフ常駐。医療機関との連携も強く、手厚いケアが必要な方に。",
    highlight: "24時間の手厚いケア体制",
    careLevels: ["要支援1・2", "要介護1・2", "要介護3", "要介護4・5"],
    acceptMedical: ["なし", "ガン末期", "指定難病"],
    dementiaSupport: ["なし", "軽度", "中等度〜重度"],
  },
  {
    type: "住宅型有料老人ホーム",
    sampleName: "サンプル施設B",
    icon: Building,
    priceRange: [13, 22],
    description:
      "自立度が比較的高い方向け。必要な介護サービスを外部から個別に利用できます。",
    highlight: "自由度が高くコストを抑えやすい",
    careLevels: ["自立", "要支援1・2", "要介護1・2"],
    acceptMedical: ["なし"],
    dementiaSupport: ["なし", "軽度"],
  },
  {
    type: "サービス付き高齢者向け住宅",
    sampleName: "サンプル施設C",
    icon: Heart,
    priceRange: [12, 20],
    description:
      "安否確認と生活相談のみ付いた賃貸住宅。自由度の高い暮らしを重視される方に。",
    highlight: "自立した暮らしを続けたい方に",
    careLevels: ["自立", "要支援1・2", "要介護1・2"],
    acceptMedical: ["なし"],
    dementiaSupport: ["なし"],
  },
  {
    type: "グループホーム",
    sampleName: "サンプル施設D",
    icon: Shield,
    priceRange: [12, 18],
    description:
      "認知症の方が5〜9名の少人数で共同生活。家庭的な環境で穏やかに暮らせます。",
    highlight: "認知症ケアに特化した少人数制",
    careLevels: ["要支援1・2", "要介護1・2", "要介護3", "要介護4・5"],
    acceptMedical: ["なし"],
    dementiaSupport: ["軽度", "中等度〜重度"],
  },
  {
    type: "特別養護老人ホーム（特養）",
    sampleName: "サンプル施設E",
    icon: Stethoscope,
    priceRange: [8, 15],
    description:
      "公的施設で費用を抑えられる。要介護3以上が対象。入居待機が発生するエリアもあります。",
    highlight: "費用を抑えた長期入居向け",
    careLevels: ["要介護3", "要介護4・5"],
    acceptMedical: ["なし"],
    dementiaSupport: ["なし", "軽度", "中等度〜重度"],
  },
  {
    type: "介護老人保健施設（老健）",
    sampleName: "サンプル施設F",
    icon: Activity,
    priceRange: [10, 16],
    description:
      "医師・看護師が常駐し、リハビリ重点。在宅復帰を目指す方に適しています。",
    highlight: "リハビリ特化・在宅復帰支援",
    careLevels: ["要介護1・2", "要介護3", "要介護4・5"],
    acceptMedical: ["なし", "指定難病"],
    dementiaSupport: ["なし", "軽度"],
  },
  {
    type: "医療対応強化型ホーム（ホスピス型）",
    sampleName: "サンプル施設G",
    icon: Heart,
    priceRange: [22, 40],
    description:
      "24時間看護体制・緩和ケア対応。末期がんや難病の方の受け入れ実績が豊富な施設です。",
    highlight: "ガン末期・指定難病対応、緩和ケア体制",
    careLevels: ["要支援1・2", "要介護1・2", "要介護3", "要介護4・5"],
    acceptMedical: ["ガン末期", "指定難病"],
    dementiaSupport: ["なし", "軽度", "中等度〜重度"],
  },
];

export default function FacilityRecommender() {
  const [careLevel, setCareLevel] = useState<CareLevel | "">("");
  const [medical, setMedical] = useState<MedicalCondition | "">("");
  const [dementia, setDementia] = useState<Dementia | "">("");
  const [age, setAge] = useState<string>("");
  const [budget, setBudget] = useState<string>(""); // 月予算（万円）
  const [submitted, setSubmitted] = useState(false);

  const results = useMemo(() => {
    if (!submitted) return [];
    if (!careLevel || !medical || !dementia || !budget) return [];

    const budgetNum = Number(budget);
    if (Number.isNaN(budgetNum) || budgetNum <= 0) return [];

    return FACILITIES.filter((f) => {
      // 要介護度マッチ
      if (!f.careLevels.includes(careLevel as CareLevel)) return false;
      // 医療条件マッチ
      if (!f.acceptMedical.includes(medical as MedicalCondition)) return false;
      // 認知症マッチ
      if (!f.dementiaSupport.includes(dementia as Dementia)) return false;
      // 予算マッチ（予算が最低料金以上なら可。上限施設も表示したいので下限チェックのみ）
      if (budgetNum < f.priceRange[0]) return false;
      return true;
    }).sort((a, b) => a.priceRange[0] - b.priceRange[0]);
  }, [careLevel, medical, dementia, budget, submitted]);

  const allFilled = careLevel && medical && dementia && budget && age;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // スクロールして結果を見せる
    setTimeout(() => {
      const el = document.getElementById("facility-results");
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  return (
    <section
      id="facility-recommender"
      className="bg-gradient-to-b from-white to-green-50/60 py-20 sm:py-28"
    >
      <div className="max-w-4xl mx-auto px-5 sm:px-8">
        <p className="text-center text-sm font-bold tracking-widest uppercase text-green-700 mb-4">
          Sample Matching
        </p>
        <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-gray-900 mb-4">
          次の行き先がまだ決まっていない方へ
          <br />
          <span className="text-green-800">
            条件を入れると「合いそうな施設」のサンプルを提示します
          </span>
        </h2>
        <p className="text-center text-sm sm:text-base text-gray-500 leading-loose mb-12 sm:mb-14 max-w-2xl mx-auto">
          退院が迫っている、親の次の住まいが決まらない——そんな時、
          まずは「どんな選択肢があるのか」を知ることからご一緒します。<br className="hidden sm:block" />
          ※ こちらは参考サンプルです。実際のご紹介は全国ネットワークから個別にご提案します。
        </p>

        {/* ── 入力フォーム ── */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl p-6 sm:p-8 lg:p-10 border border-gray-200 shadow-sm"
        >
          <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
            {/* 年齢 */}
            <div>
              <label
                htmlFor="age"
                className="block text-xs font-bold tracking-wider uppercase text-gray-700 mb-2"
              >
                ご本人の年齢 <span className="text-red-500">*</span>
              </label>
              <input
                id="age"
                type="number"
                inputMode="numeric"
                min={40}
                max={120}
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="例：82"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-base focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-colors"
              />
            </div>

            {/* 月予算 */}
            <div>
              <label
                htmlFor="budget"
                className="block text-xs font-bold tracking-wider uppercase text-gray-700 mb-2"
              >
                月額ご予算（万円） <span className="text-red-500">*</span>
              </label>
              <input
                id="budget"
                type="number"
                inputMode="numeric"
                min={5}
                max={100}
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                placeholder="例：18"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-base focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-colors"
              />
            </div>

            {/* 要介護度 */}
            <div>
              <label className="block text-xs font-bold tracking-wider uppercase text-gray-700 mb-2">
                要介護度 <span className="text-red-500">*</span>
              </label>
              <select
                value={careLevel}
                onChange={(e) => setCareLevel(e.target.value as CareLevel)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-base bg-white focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-colors"
              >
                <option value="">選択してください</option>
                <option value="自立">自立</option>
                <option value="要支援1・2">要支援1・2</option>
                <option value="要介護1・2">要介護1・2</option>
                <option value="要介護3">要介護3</option>
                <option value="要介護4・5">要介護4・5</option>
              </select>
            </div>

            {/* 医療条件 */}
            <div>
              <label className="block text-xs font-bold tracking-wider uppercase text-gray-700 mb-2">
                主な医療状況 <span className="text-red-500">*</span>
              </label>
              <select
                value={medical}
                onChange={(e) => setMedical(e.target.value as MedicalCondition)}
                className="w-full px-4 py-3 border border-gray-200 rounded-lg text-base bg-white focus:outline-none focus:border-green-500 focus:ring-2 focus:ring-green-100 transition-colors"
              >
                <option value="">選択してください</option>
                <option value="なし">特になし</option>
                <option value="ガン末期">ガン末期（緩和ケア）</option>
                <option value="指定難病">指定難病</option>
              </select>
            </div>

            {/* 認知症 */}
            <div className="sm:col-span-2">
              <label className="block text-xs font-bold tracking-wider uppercase text-gray-700 mb-2">
                認知症の有無・程度 <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {(["なし", "軽度", "中等度〜重度"] as Dementia[]).map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setDementia(d)}
                    className={`py-3 px-3 rounded-lg text-sm font-bold border transition-all ${
                      dementia === d
                        ? "bg-green-800 text-white border-green-800"
                        : "bg-white text-gray-700 border-gray-200 hover:border-green-300"
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* 送信ボタン */}
          <div className="mt-8 pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-3 items-center justify-between">
            <p className="text-xs text-gray-400 flex items-start gap-1.5">
              <Info size={14} className="shrink-0 mt-0.5" />
              ご入力情報は送信されず、ブラウザ上で判定されます。
            </p>
            <button
              type="submit"
              disabled={!allFilled}
              className="inline-flex items-center gap-2.5 bg-green-800 hover:bg-green-900 disabled:bg-gray-300 disabled:cursor-not-allowed text-white px-7 py-3.5 rounded-lg text-sm font-bold tracking-wider transition-colors shadow-sm w-full sm:w-auto justify-center"
            >
              合いそうな施設を見る
              <ArrowRight size={16} />
            </button>
          </div>
        </form>

        {/* ── 結果表示 ── */}
        {submitted && (
          <div id="facility-results" className="mt-14 scroll-mt-24">
            <div className="flex items-baseline justify-between mb-6">
              <h3 className="text-xl sm:text-2xl font-extrabold text-gray-900">
                入力条件に合うサンプル施設
              </h3>
              <p className="text-xs sm:text-sm text-gray-400">
                {results.length} 件該当
              </p>
            </div>

            {results.length === 0 ? (
              <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 sm:p-8 text-center">
                <p className="text-base font-bold text-yellow-900 mb-2">
                  条件に合うサンプルが見つかりませんでした
                </p>
                <p className="text-sm text-yellow-800 leading-relaxed">
                  予算や要介護度などの条件によっては、このサンプルデータでは該当が出ない場合がございます。
                  <br />
                  実際のご紹介では全国の提携施設から個別にお探ししますので、ぜひ直接ご相談ください。
                </p>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 gap-5">
                {results.map((f, i) => {
                  const Icon = f.icon;
                  return (
                    <div
                      key={i}
                      className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-green-200 hover:shadow-md transition-all"
                    >
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-11 h-11 rounded-xl bg-green-50 text-green-700 flex items-center justify-center shrink-0">
                          <Icon size={22} />
                        </div>
                        <div className="flex-1">
                          <p className="text-[10px] font-bold tracking-widest text-green-700 mb-1">
                            {f.sampleName}
                          </p>
                          <h4 className="text-base sm:text-lg font-extrabold text-gray-900 leading-snug">
                            {f.type}
                          </h4>
                        </div>
                      </div>
                      <div className="mb-4">
                        <span className="inline-block bg-green-50 text-green-800 text-xs font-bold px-3 py-1 rounded-full">
                          {f.highlight}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 leading-relaxed mb-4">
                        {f.description}
                      </p>
                      <div className="flex items-baseline gap-1 pt-4 border-t border-gray-100">
                        <span className="text-xs text-gray-400">月額目安</span>
                        <span className="text-lg font-extrabold text-gray-900 ml-2">
                          {f.priceRange[0]}〜{f.priceRange[1]}
                        </span>
                        <span className="text-sm text-gray-500">万円</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* CTA：詳しくはご連絡ください */}
            <div className="mt-12 bg-gradient-to-br from-green-800 to-green-900 rounded-2xl p-8 sm:p-10 text-white">
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start lg:items-center">
                <div className="flex-1">
                  <p className="text-xs font-bold tracking-widest uppercase text-green-300 mb-2">
                    Next Step
                  </p>
                  <h4 className="text-xl sm:text-2xl font-extrabold mb-3 leading-snug">
                    こちらは<span className="text-green-300">参考サンプル</span>です。
                    <br className="hidden sm:block" />
                    実際の施設選びは、ぜひ直接ご相談ください。
                  </h4>
                  <p className="text-sm text-green-100/90 leading-relaxed">
                    現役看護師がADLや医療状況を丁寧にヒアリングし、全国ネットワークから
                    「本当にご本人とご家族に合う」施設だけをご提案いたします。ご相談・ご紹介は完全無料です。
                  </p>
                </div>
                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-2 bg-white hover:bg-green-50 text-green-900 px-7 py-4 rounded-lg text-sm font-bold tracking-wider transition-colors shadow-lg shrink-0 w-full lg:w-auto justify-center"
                >
                  詳しく相談する
                  <ArrowRight size={16} />
                </Link>
              </div>

              <ul className="mt-8 pt-6 border-t border-white/10 grid sm:grid-cols-3 gap-3 text-sm">
                {[
                  "ご相談・ご紹介は完全無料",
                  "現役看護師が医療面をサポート",
                  "病院の地域連携室との連携も可",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <CheckCircle2
                      size={16}
                      className="text-green-300 shrink-0 mt-0.5"
                    />
                    <span className="text-green-50">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
