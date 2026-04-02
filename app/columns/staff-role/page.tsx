import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "優秀なスタッフが辞めない医院の秘密。元小学校教諭が教える「係活動」マネジメント | ARCH コラム",
  description:
    "スタッフの定着に本当に必要なのは技術研修ではなくマインド教育。小学校の係活動に隠されたモチベーションの秘密を解説します。",
};

export default function StaffRolePage() {
  return (
    <article className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Category & Date */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-bold text-green-700 bg-green-50 px-3 py-1 rounded-full">
            組織マネジメント
          </span>
          <time className="text-xs text-gray-400 font-medium">2026.04.02</time>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-10 tracking-tight">
          優秀なスタッフが辞めない医院の秘密。
          <br className="hidden md:block" />
          元小学校教諭が教える
          <br className="hidden md:block" />
          「係活動」マネジメント
        </h1>

        {/* Lead */}
        <div className="border-l-4 border-green-700 pl-6 mb-12">
          <p className="text-lg text-gray-600 leading-relaxed font-medium italic">
            「スタッフの教育＝知識や手技の向上」だと思い込んでいませんか？
          </p>
        </div>

        {/* Body */}
        <div className="prose-custom">
          <p>
            もちろんスキルアップは必須ですが、それだけではスタッフは定着しません。本当に必要なのは、医院の理念（MVV）を理解させ、「一緒に目標を達成する仲間なのだ」という意識を持たせる【マインド教育】です。
          </p>

          <h2>小学校の「係活動」に隠されたモチベーションの秘密</h2>
          <p>
            私は元小学校教諭です。学校現場では、クラスの児童一人ひとりに必ず「役割」を与えます。
          </p>
          <p>
            これを大人の仕事に置き換えると、日々の授業が「やらなければならない業務」です。しかし、学校の1日は授業だけではありません。クラスには様々な「係」があり、高学年になれば「委員会」に所属します。
          </p>
          <p>
            思い出してみてください。係活動や委員会は、「自ら選んで、自ら進んで行う活動」だったはずです。そして、人は自ら進んで行う活動にこそ、最も強い楽しさとやりがいを感じます。
          </p>

          <h2>「やらされ仕事」から「自分の居場所」へ</h2>
          <p>
            この仕組みを、医院の職場環境に活用すべきです。
          </p>
          <p>
            「給料をもらいながら、自ら進んで楽しい活動ができる」。これほどスタッフのモチベーションを上げるものはありません。
          </p>
          <p>
            日々の「やらなければならない診療業務」のほかに、例えば「院内SNS広報係」「レクリエーション企画係」「新人メンター係」など、スタッフ一人ひとりが主役になれる【活躍の場面（役割）】を意図的に用意してあげるのです。
          </p>
          <p>
            自分の役割があり、頼りにされていると実感できる職場を、人はそう簡単に辞めません。これが結果として、最強の離職防止策になります。
          </p>

          {/* CTA Block */}
          <div className="not-prose bg-gray-50 rounded-2xl p-8 my-12 border border-gray-200">
            <p className="text-lg font-bold text-gray-900 mb-3">
              【無料オンライン相談のご案内】
            </p>
            <p className="text-gray-600 mb-0">
              単なる技術指導ではない、スタッフの自己肯定感を高め、組織へのエンゲージメントを劇的に引き上げる「元教員ならではの組織マネジメント」。お気軽にご相談ください。
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
