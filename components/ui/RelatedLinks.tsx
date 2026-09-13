/**
 * RelatedLinks — 「あわせて読む」の一覧（下層ページ共通）
 */

import Link from "next/link";
import { CONTAINER } from "@/lib/ui";

export type RelatedLink = { href: string; kind: string; title: string };

export default function RelatedLinks({
  links,
  headingId = "related-heading",
  children,
}: {
  links: RelatedLink[];
  headingId?: string;
  children?: React.ReactNode;
}) {
  return (
    <section aria-labelledby={headingId} className="border-t border-arch-line bg-arch-paper">
      <div className={`${CONTAINER} py-[64px] md:py-[96px]`}>
        <h2 id={headingId} className="display-jp text-[1.25rem] text-arch-ink">
          あわせて読む
        </h2>
        <ul className="mt-6 border-t border-arch-deep">
          {links.map((l) => (
            <li key={l.href} className="border-b border-arch-line">
              <Link
                href={l.href}
                className="flex flex-col gap-1 py-5 text-[0.98rem] leading-[1.8] text-arch-ink hover:text-arch-green sm:flex-row sm:gap-5"
              >
                <span className="shrink-0 text-[0.8125rem] font-bold text-arch-moss sm:w-20">{l.kind}</span>
                <span>{l.title}</span>
              </Link>
            </li>
          ))}
        </ul>
        {children}
      </div>
    </section>
  );
}
