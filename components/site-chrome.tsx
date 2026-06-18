"use client";

import Link from "next/link";
import Image from "next/image";
import { Home, Code2, FolderOpen, BookOpen, Mail } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";
import { HamburgerMenuOverlay } from "@/components/lightswind/HamburgerMenuOverlay";

const navItems = [
  { name: "Accueil", url: "/", icon: Home },
  { name: "Services", url: "/services", icon: Code2 },
  { name: "Projets", url: "/projets", icon: FolderOpen },
  { name: "Blog", url: "/blog", icon: BookOpen },
  { name: "Contact", url: "/contact", icon: Mail },
];

const mobileMenuItems = navItems.map((item) => ({
  label: item.name,
  href: item.url,
  icon: <item.icon size={22} />,
}));

export function SiteBrand() {
  return (
    <Link
      href="/"
      className="fixed left-3 top-2 z-[60] inline-flex items-center sm:left-5 sm:top-1"
      aria-label="WebCode Studio - accueil"
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

export function SiteNav() {
  return (
    <>
      <SiteBrand />

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
        />
      </div>
    </>
  );
}
