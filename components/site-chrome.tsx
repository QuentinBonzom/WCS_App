"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Home,
  Code2,
  FolderOpen,
  BookOpen,
  Mail,
  Languages,
} from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { HamburgerMenuOverlay } from "@/components/lightswind/HamburgerMenuOverlay";
import {
  getDictionary,
  getLocaleFromPathname,
  localizedPath,
  switchLocalePath,
  type Locale,
} from "@/lib/i18n";

function navItemsFor(locale: Locale) {
  const t = getDictionary(locale).nav;

  return [
    { name: t.home, url: localizedPath("/", locale), icon: Home },
    { name: t.services, url: localizedPath("/services", locale), icon: Code2 },
    {
      name: t.projects,
      url: localizedPath("/projets", locale),
      icon: FolderOpen,
    },
    { name: t.blog, url: localizedPath("/blog", locale), icon: BookOpen },
    { name: t.contact, url: localizedPath("/contact", locale), icon: Mail },
  ];
}

function SiteBrand({ locale }: { locale: Locale }) {
  const t = getDictionary(locale).nav;

  return (
    <Link
      href={localizedPath("/", locale)}
      className="fixed left-3 top-2 z-[60] inline-flex items-center sm:left-5 sm:top-1"
      aria-label={t.brandAria}
    >
      <Image
        src="/logoWCSsansfond.png"
        alt="WebCode Studio"
        width={612}
        height={408}
        priority
        className="h-16 w-auto object-contain sm:h-24 lg:h-28"
      />
    </Link>
  );
}

function LanguageSwitcher({
  locale,
  pathname,
}: {
  locale: Locale;
  pathname: string;
}) {
  const t = getDictionary(locale).nav;

  return (
    <div
      className="fixed right-[4.5rem] top-4 z-[65] rounded-full border border-silver bg-white/70 p-1 shadow-[0_6px_24px_rgba(0,0,0,0.06)] backdrop-blur-lg backdrop-saturate-150 sm:right-5"
      aria-label={t.language}
      role="group"
    >
      {(["fr", "en"] as const).map((targetLocale) => {
        const active = targetLocale === locale;

        return (
          <Link
            key={targetLocale}
            href={switchLocalePath(pathname, targetLocale)}
            aria-current={active ? "true" : undefined}
            className={`inline-flex h-9 min-w-10 items-center justify-center rounded-full px-3 text-sm font-semibold transition-colors ${
              active
                ? "bg-ink text-white"
                : "text-ink/70 hover:bg-silver hover:text-ink"
            }`}
          >
            {targetLocale.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}

export function SiteNav() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const t = getDictionary(locale).nav;
  const navItems = navItemsFor(locale);
  const otherLocale = locale === "fr" ? "en" : "fr";
  const mobileMenuItems = [
    ...navItems.map((item) => ({
      label: item.name,
      href: item.url,
      icon: <item.icon size={22} />,
    })),
    {
      label: otherLocale === "fr" ? "Français" : "English",
      href: switchLocalePath(pathname, otherLocale),
      icon: <Languages size={22} />,
    },
  ];

  return (
    <>
      <SiteBrand locale={locale} />
      <LanguageSwitcher locale={locale} pathname={pathname} />

      {/* Desktop / tablet: tubelight pill */}
      <div className="hidden sm:block">
        <NavBar items={navItems} />
      </div>

      {/* Mobile: hamburger overlay */}
      <div className="sm:hidden">
        <HamburgerMenuOverlay
          items={mobileMenuItems}
          overlayBackground="rgba(13, 22, 40, 0.97)"
          textColor="#ffffff"
          fontSize="xl"
          menuAlignment="center"
          enableBlur
          buttonColor="#1d1d1f"
          buttonTop="1rem"
          buttonRight="1rem"
          openLabel={t.openMenu}
          closeLabel={t.closeMenu}
        />
      </div>
    </>
  );
}
