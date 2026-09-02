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
    <footer className="bg-azure pt-12 text-white">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-6 py-8 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <Image
            src="/logoWCSsansfond.png"
            alt="WebCode Studio"
            width={612}
            height={408}
            className="h-16 w-auto object-contain brightness-0 invert"
          />
          <p className="my-3 max-w-[40ch] text-xs leading-relaxed text-white/70">
            {t.description}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-white">
            {t.expertise}
          </h4>
          <Link
            href={localizedPath("/creation-site-internet-montbeliard", locale)}
            className="text-xs text-white/70 transition-colors hover:text-white"
          >
            {t.webCreation}
          </Link>
          <Link
            href={localizedPath("/services", locale)}
            className="text-xs text-white/70 transition-colors hover:text-white"
          >
            {t.mobileApps}
          </Link>
          <Link
            href={localizedPath("/services", locale)}
            className="text-xs text-white/70 transition-colors hover:text-white"
          >
            {t.uiUx}
          </Link>
          <Link
            href={localizedPath("/repere-audit", locale)}
            className="text-xs text-white/70 transition-colors hover:text-white"
          >
            {t.accessibility}
          </Link>
          <Link
            href={localizedPath("/projets", locale)}
            className="text-xs text-white/70 transition-colors hover:text-white"
          >
            {t.projects}
          </Link>
          <Link
            href={localizedPath("/blog", locale)}
            className="text-xs text-white/70 transition-colors hover:text-white"
          >
            Blog
          </Link>
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-white">
            {t.searches}
          </h4>
          <Link
            href={localizedPath("/creation-site-internet-montbeliard", locale)}
            className="text-xs text-white/70 transition-colors hover:text-white"
          >
            {t.localWebCreation}
          </Link>
          <Link
            href={localizedPath("/agence-web-montbeliard", locale)}
            className="text-xs text-white/70 transition-colors hover:text-white"
          >
            {t.localAgency}
          </Link>
          <Link
            href={localizedPath("/creation-site-vitrine", locale)}
            className="text-xs text-white/70 transition-colors hover:text-white"
          >
            {t.showcaseWebsite}
          </Link>
          <Link
            href={localizedPath("/refonte-site-internet-montbeliard", locale)}
            className="text-xs text-white/70 transition-colors hover:text-white"
          >
            {t.redesign}
          </Link>
          <Link
            href={localizedPath("/repere-audit", locale)}
            className="text-xs text-white/70 transition-colors hover:text-white"
          >
            {t.accessibilityAudit}
          </Link>
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="mb-2 text-xs font-semibold uppercase tracking-wide text-white">
            {t.contact}
          </h4>
          <span className="text-xs text-white/70">{t.internationalClients}</span>
          <a
            href="mailto:contact@webcodestudio.fr"
            className="text-xs text-white/70 transition-colors hover:text-white"
          >
            contact@webcodestudio.fr
          </a>
          <span className="text-xs text-white/70">{t.response}</span>
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] border-t border-white/15 px-6 py-5">
        <p className="text-xs text-white/70">
          © 2026 WebCode Studio. {t.rights}
        </p>
      </div>
    </footer>
  );
}
