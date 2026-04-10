import { ArrowRight, Check, Heart, Shield, UserCheck, Building, Stethoscope, ClipboardList, Phone, Home, Activity } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "ARCH 介護・暮らしの選択相談所（旧：老人ホーム紹介業） | 合同会社ARCH",
  description:
    "退院後の暮らしを、ご本人とご家族の目線で選ぶ場所。現役看護師パートナー・ADL評価・ワンストップ伴走で、「紹介して終わり」ではなく「どう暮らすか」を一緒に考えます。",
};

export default function SeniorHomePage() {
  return (
    <article>
      {/* ──────────────────────────────────────────
          HERO
      ────────────────────────────────────────── */}
      <section className="relative bg-gradient-to-br from-green-900 via-green-800 to-green-950 pt-24 pb-20 sm:pt-32 sm:pb-28 lg:pt-40 lg:pb-36 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-400 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-green-300 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <span className="inline-block text-xs font-bold tracking-[0.25em] uppercase text-green-300 border border-green-600 px-4 py-1.5 rounded-full mb-6">
            Life Choice — 03
          </span>
          <div className="mb-8">
            <h1 className="text-[1.75rem] sm:text-4xl lg:text-[2.75rem] font-extrabold leading-[1.35] tracking-tight text-white mb-2">
              ARCH 介護・暮らしの選択相談所
            </h1>
            <p className="text-[11px] sm:text-xs tracking-[0.15em] text-green-300/70 font-medium">
              （旧：老人ホーム紹介業）
            </p>
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold leading-[1.4] tracking-tight text-white mb-6 sm:mb-8">
            退院後の暮らしを、
            <br className="hidden sm:block" />
            <span className="text-green-300">ご本人とご家族の目線</span>で選ぶ場所。
          </h2>
          <p className="text-base sm:text-lg text-green-100/80 leading-relaxed max-w-2xl mx-auto mb-10 sm:mb-12">
            病院からの退院が決まった方、ご高齢のご家族の住まいをお探しの方へ。現在のご病気やお身体の状態（ADL）から、最適な老人ホームをご提案します。パートナーに現役の看護師がいるから、医療的な視点でも安心してお任せいただけます。
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2.5 bg-white hover:bg-green-50 text-green-900 px-8 py-4 rounded-lg text-sm sm:text-base font-bold tracking-wider transition-colors shadow-lg"
          >
            まずは無料相談する
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          こんな方へ
      ────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <p className="text-center text-sm font-bold tracking-widest uppercase text-green-700 mb-4">
            For You
          </p>
          <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-gray-900 mb-14 sm:mb-16">
            こんなお悩みありませんか？
          </h2>

          <div className="space-y-5 sm:space-y-6">
            {[
              {
                title: "退院が迫っているのに、次の住まいが決まらない。",
                body: "病院から退院日を告げられたけれど、自宅に戻るのは難しい。でも老人ホームの選び方がわからない。時間だけが過ぎていく焦りを感じている。",
              },
              {
                title: "パンフレットだけでは、本当に合う施設かわからない。",
                body: "たくさんの施設を比較しても、写真や料金だけでは判断できない。医療対応や介護体制、雰囲気まで含めて、本当にこの人に合う場所を選びたい。",
              },
              {
                title: "持病がある。医療面で安心できる施設を探したい。",
                body: "透析や認知症、がん治療後のケアなど、医療的なサポートが必要。医療の知識がある人に相談しながら決めたい。",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 border-l-4 border-l-red-400"
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
          ARCHの強み
      ────────────────────────────────────────── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <p className="text-center text-sm font-bold tracking-widest uppercase text-green-700 mb-4">
            Why ARCH
          </p>
          <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6">
            ARCHの老人ホーム紹介が<span className="text-green-800">選ばれる理由</span>
          </h2>
          <p className="text-center text-sm sm:text-base text-gray-400 mb-16 sm:mb-20 max-w-2xl mx-auto">
            料金比較だけの紹介ではありません。お身体の状態を深く理解した上で、本当に合う施設だけをご提案します。
          </p>
        </div>

        {/* Feature 01 */}
        <div className="bg-green-50/60 py-16 sm:py-24">
          <div className="max-w-5xl mx-auto px-5 sm:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <span className="text-green-700 text-sm font-bold tracking-widest">01</span>
                <h3 className="text-xl sm:text-2xl lg:text-[1.75rem] font-extrabold text-gray-900 leading-snug mt-3 mb-5">
                  <span className="border-b-2 border-green-300">現役看護師</span>がパートナー。
                  <br />
                  <span className="text-green-800">医療の視点で選ぶ安心。</span>
                </h3>
                <p className="text-sm sm:text-base text-gray-500 leading-loose mb-6">
                  ARCHには現役の看護師がパートナーとして在籍しています。ご病気の状態、必要な医療処置、日常生活動作（ADL）の程度を正確に把握した上で、医療体制が整った施設をご提案します。「この病気でも受け入れてもらえるの？」という不安に、専門知識でお答えします。
                </p>
                <div className="space-y-3">
                  {["現在のご病気・治療状況を正確に把握", "必要な医療体制がある施設のみをご提案", "入居後の医療面のフォローアップも安心"].map((t) => (
                    <div key={t} className="flex items-start gap-2.5">
                      <Check className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                      <p className="text-sm text-gray-600 font-medium">{t}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden lg:flex items-center justify-center">
                <div className="w-full max-w-sm aspect-[4/3] bg-white rounded-2xl border border-gray-200 shadow-sm flex items-center justify-center p-10">
                  <div className="text-center">
                    <Stethoscope className="text-green-700 mx-auto mb-4" size={48} />
                    <p className="text-sm text-gray-600 font-bold mb-1">現役看護師が在籍</p>
                    <p className="text-xs text-gray-400">医療の専門知識で施設選びをサポート</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 02 */}
        <div className="bg-white py-16 sm:py-24">
          <div className="max-w-5xl mx-auto px-5 sm:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <div className="hidden lg:flex items-center justify-center order-first">
                <div className="w-full max-w-sm aspect-[4/3] bg-gray-50 rounded-2xl border border-gray-200 flex items-center justify-center p-10">
                  <div className="text-center">
                    <Activity className="text-green-700 mx-auto mb-4" size={48} />
                    <p className="text-sm text-gray-600 font-bold mb-1">ADL評価に基づく提案</p>
                    <p className="text-xs text-gray-400">お身体の状態から最適な施設を選定</p>
                  </div>
                </div>
              </div>
              <div>
                <span className="text-green-700 text-sm font-bold tracking-widest">02</span>
                <h3 className="text-xl sm:text-2xl lg:text-[1.75rem] font-extrabold text-gray-900 leading-snug mt-3 mb-5">
                  <span className="border-b-2 border-green-300">お身体の状態（ADL）</span>から
                  <br />
                  <span className="text-green-800">最適な施設をご提案</span>
                </h3>
                <p className="text-sm sm:text-base text-gray-500 leading-loose mb-6">
                  食事、入浴、移動、排泄など日常生活の自立度を丁寧にヒアリングし、その方に本当に必要なケアレベルの施設をご提案します。「今は自立しているけど将来が不安」「車椅子生活になった」など、現在と将来の両方を見据えた施設選びをサポートします。
                </p>
                <div className="space-y-3">
                  {["日常生活動作（ADL）を丁寧にヒアリング", "現在の状態と将来の変化を見据えた提案", "過剰でも不足でもない、ちょうど良い施設を"].map((t) => (
                    <div key={t} className="flex items-start gap-2.5">
                      <Check className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                      <p className="text-sm text-gray-600 font-medium">{t}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Feature 03 */}
        <div className="bg-green-50/60 py-16 sm:py-24">
          <div className="max-w-5xl mx-auto px-5 sm:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <span className="text-green-700 text-sm font-bold tracking-widest">03</span>
                <h3 className="text-xl sm:text-2xl lg:text-[1.75rem] font-extrabold text-gray-900 leading-snug mt-3 mb-5">
                  <span className="border-b-2 border-green-300">退院から入居まで</span>
                  <br />
                  <span className="text-green-800">ワンストップで伴走</span>
                </h3>
                <p className="text-sm sm:text-base text-gray-500 leading-loose mb-6">
                  病院の地域連携室やケアマネジャーとも連携し、退院日に間に合うスケジュールで施設見学から入居手続きまでサポートします。ご家族だけで抱え込む必要はありません。ARCHが退院後の暮らしの設計を一緒に行います。
                </p>
                <div className="space-y-3">
                  {["病院の地域連携室と連携", "見学の手配から入居手続きまで一括サポート", "ご相談・ご紹介は完全無料"].map((t) => (
                    <div key={t} className="flex items-start gap-2.5">
                      <Check className="text-green-600 flex-shrink-0 mt-0.5" size={16} />
                      <p className="text-sm text-gray-600 font-medium">{t}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden lg:flex items-center justify-center">
                <div className="w-full max-w-sm aspect-[4/3] bg-white rounded-2xl border border-gray-200 shadow-sm flex items-center justify-center p-10">
                  <div className="text-center">
                    <div className="text-5xl font-extrabold text-green-800 mb-2">無料</div>
                    <p className="text-sm text-gray-400 font-medium">ご相談・ご紹介の費用は一切いただきません</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          ご紹介可能な施設タイプ
      ────────────────────────────────────────── */}
      <section className="bg-white py-20 sm:py-28">
        <div className="max-w-5xl mx-auto px-5 sm:px-8">
          <p className="text-center text-sm font-bold tracking-widest uppercase text-green-700 mb-4">
            Facility Types
          </p>
          <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-gray-900 mb-14 sm:mb-16">
            ご紹介可能な施設
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Home, title: "介護付き有料老人ホーム", desc: "24時間介護スタッフが常駐。手厚いケアが必要な方に。" },
              { icon: Building, title: "住宅型有料老人ホーム", desc: "自立度が高い方向け。外部の介護サービスを利用可能。" },
              { icon: Heart, title: "サービス付き高齢者向け住宅", desc: "見守りと生活相談が付いた、自由度の高い暮らし。" },
              { icon: Shield, title: "グループホーム", desc: "認知症の方が少人数で共同生活。家庭的な環境。" },
              { icon: Activity, title: "介護老人保健施設", desc: "リハビリに重点を置いた施設。在宅復帰を目指す方に。" },
              { icon: Stethoscope, title: "特別養護老人ホーム", desc: "要介護3以上の方。費用を抑えたい方にも。" },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-200">
                <item.icon className="text-green-700 mb-4" size={28} />
                <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ──────────────────────────────────────────
          ご利用の流れ
      ────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-5 sm:px-8">
          <p className="text-center text-sm font-bold tracking-widest uppercase text-green-700 mb-4">
            Flow
          </p>
          <h2 className="text-center text-2xl sm:text-3xl font-extrabold text-gray-900 mb-14 sm:mb-16">
            ご利用の流れ
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { step: "01", title: "無料相談", desc: "お電話・メールでお気軽に。退院日やご希望をお聞きします。" },
              { step: "02", title: "状態のヒアリング", desc: "現在のご病気、ADL、ご予算、エリアのご希望を詳しく伺います。" },
              { step: "03", title: "施設のご提案・見学", desc: "条件に合う施設を厳選してご紹介。見学の手配もお任せください。" },
              { step: "04", title: "入居・アフターフォロー", desc: "入居手続きをサポート。入居後も気になることがあればいつでもご連絡を。" },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-2xl p-6 border border-gray-200 text-center"
              >
                <span className="text-3xl font-extrabold text-green-100 block mb-3">
                  {item.step}
                </span>
                <h3 className="font-extrabold text-gray-900 text-base mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
