"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  getDictionary,
  getLocaleFromPathname,
  localizedPath,
} from "@/lib/i18n";

const linkCls =
  "text-xs text-white/80 transition-colors hover:text-white focus-visible:text-white";

export function Footer() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const t = getDictionary(locale).footer;
  const p = (path: string) => localizedPath(path, locale);

  const columns = [
    {
      title: t.expertise,
      links: [
        { href: p("/creation-site-internet-montbeliard"), label: t.webCreation },
        { href: p("/services"), label: t.mobileApps },
        { href: p("/services"), label: t.uiUx },
        { href: p("/repere-audit"), label: t.accessibility },
        { href: p("/projets"), label: t.projects },
        { href: p("/blog"), label: "Blog" },
      ],
    },
    {
      title: t.searches,
      links: [
        {
          href: p("/creation-site-internet-montbeliard"),
          label: t.localWebCreation,
        },
        { href: p("/agence-web-montbeliard"), label: t.localAgency },
        { href: p("/creation-site-vitrine"), label: t.showcaseWebsite },
        { href: p("/refonte-site-internet-montbeliard"), label: t.redesign },
        { href: p("/repere-audit"), label: t.accessibilityAudit },
      ],
    },
  ];

  return (
    <footer className="bg-[#00458c] pt-12 text-white">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-12 px-6 py-8 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <Image
            src="/logoWCSsansfond.png"
            alt="WebCode Studio"
            width={612}
            height={408}
            className="h-16 w-auto object-contain brightness-0 invert"
          />
          <p className="my-3 max-w-[40ch] text-xs leading-relaxed text-white/80">
            {t.description}
          </p>
        </div>

        {columns.map((col) => (
          <nav key={col.title} aria-label={col.title} className="flex flex-col">
            <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-white">
              {col.title}
            </h2>
            <ul className="flex flex-col gap-2">
              {col.links.map((link, i) => (
                <li key={`${link.href}-${i}`}>
                  <Link href={link.href} className={linkCls}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        <div className="flex flex-col gap-2">
          <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-white">
            {t.contact}
          </h2>
          <span className="text-xs text-white/80">{t.internationalClients}</span>
          <a href="mailto:contact@webcodestudio.fr" className={linkCls}>
            contact@webcodestudio.fr
          </a>
          <span className="text-xs text-white/80">{t.response}</span>
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] border-t border-white/20 px-6 py-5">
        <p className="text-xs text-white/80">
          © 2026 WebCode Studio. {t.rights}
        </p>
      </div>
    </footer>
  );
}
