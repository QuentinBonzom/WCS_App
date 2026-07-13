"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  getDictionary,
  getLocaleFromPathname,
  localizedPath,
} from "@/lib/i18n";

export function Footer() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const t = getDictionary(locale).footer;

  return (
    <footer className="border-t border-silver bg-fog pt-12">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-6 py-8 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <Image
            src="/logoWCSsansfond.png"
            alt="WebCode Studio"
            width={612}
            height={408}
            className="h-16 w-auto object-contain"
          />
          <p className="my-3 max-w-[40ch] text-xs leading-relaxed text-graphite">
            {t.description}
          </p>
          <span className="inline-flex items-center gap-2 rounded-full bg-silver px-4 py-2 text-sm text-slate">
            <span className="h-2 w-2 rounded-full bg-[#34c759]" /> {t.available}
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink">
            {t.expertise}
          </h4>
          <Link
            href={localizedPath("/creation-site-web-montbeliard", locale)}
            className="text-xs text-graphite transition-colors hover:text-ink"
          >
            {t.webCreation}
          </Link>
          <Link
            href={localizedPath("/services", locale)}
            className="text-xs text-graphite transition-colors hover:text-ink"
          >
            {t.mobileApps}
          </Link>
          <Link
            href={localizedPath("/services", locale)}
            className="text-xs text-graphite transition-colors hover:text-ink"
          >
            {t.uiUx}
          </Link>
          <Link
            href={localizedPath("/repere-audit", locale)}
            className="text-xs text-graphite transition-colors hover:text-ink"
          >
            {t.accessibility}
          </Link>
          <Link
            href={localizedPath("/projets", locale)}
            className="text-xs text-graphite transition-colors hover:text-ink"
          >
            {t.projects}
          </Link>
          <Link
            href={localizedPath("/blog", locale)}
            className="text-xs text-graphite transition-colors hover:text-ink"
          >
            Blog
          </Link>
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink">
            {t.searches}
          </h4>
          <Link
            href={localizedPath("/creation-site-web-montbeliard", locale)}
            className="text-xs text-graphite transition-colors hover:text-ink"
          >
            {t.localWebCreation}
          </Link>
          <Link
            href={localizedPath("/agence-web-montbeliard", locale)}
            className="text-xs text-graphite transition-colors hover:text-ink"
          >
            {t.localAgency}
          </Link>
          <Link
            href={localizedPath("/creation-site-vitrine", locale)}
            className="text-xs text-graphite transition-colors hover:text-ink"
          >
            {t.showcaseWebsite}
          </Link>
          <Link
            href={localizedPath("/repere-audit", locale)}
            className="text-xs text-graphite transition-colors hover:text-ink"
          >
            {t.accessibilityAudit}
          </Link>
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-ink">
            {t.contact}
          </h4>
          <span className="text-xs text-graphite">{t.internationalClients}</span>
          <a
            href="mailto:contact@webcodestudio.fr"
            className="text-xs text-graphite transition-colors hover:text-ink"
          >
            contact@webcodestudio.fr
          </a>
          <span className="text-xs text-graphite">{t.response}</span>
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] border-t border-silver px-6 py-5">
        <p className="text-xs text-graphite">
          © 2026 WebCode Studio. {t.rights}
        </p>
      </div>
    </footer>
  );
}
