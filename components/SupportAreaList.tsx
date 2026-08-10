/**
 * SupportAreaList — 支援エリアの表示（トップ／支援実績／会社概要で共通）
 * ------------------------------------------------------------------
 * 方針：支援実績と、相談をいただいている地域を混ぜない。
 *  ・一覧に載せるのは、実際に支援した地域だけ
 *  ・相談段階の地域は、枠を分けて別に示す
 * 「ネットワークを含む」といった、実績と区別のつかない注記は使わない。
 */

import { CONSULTATION_AREA_NOTE, SUPPORT_AREAS } from "@/lib/site";

export default function SupportAreaList() {
  return (
    <>
      <dl className="mt-10 border-t border-arch-rule">
        {SUPPORT_AREAS.map((a) => (
          <div
            key={a.pref}
            className="grid gap-1 border-b border-arch-rule py-5 sm:grid-cols-12 sm:gap-6"
          >
            <dt className="display-jp text-[1.0625rem] text-arch-forest sm:col-span-4">
              {a.pref}
            </dt>
            <dd className="text-[1.0625rem] leading-[1.8] text-arch-ink sm:col-span-8">
              {a.cities}
            </dd>
          </div>
        ))}
      </dl>

      {/* 相談段階の地域は、支援実績と枠を分けて示す */}
      <div className="mt-10 border-l-4 border-arch-gold bg-arch-cream-raised px-6 py-5">
        <p className="text-sm text-arch-ink-muted">ご相談をいただいている範囲</p>
        <p className="mt-2 text-[1.0625rem] leading-[1.8] text-arch-ink">
          {CONSULTATION_AREA_NOTE}
        </p>
      </div>
    </>
  );
}
