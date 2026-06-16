"use client";

import Link from "next/link";
import Image from "next/image";
import { Home, Code2, FolderOpen, Mail } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";

const navItems = [
  { name: "Accueil", url: "/", icon: Home },
  { name: "Services", url: "/services", icon: Code2 },
  { name: "Projets", url: "/projets", icon: FolderOpen },
  { name: "Contact", url: "/contact", icon: Mail },
];

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
      <NavBar items={navItems} />
    </>
  );
}
