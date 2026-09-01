"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  url: string;
  icon: LucideIcon;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
}

export function NavBar({ items, className }: NavBarProps) {
  const pathname = usePathname();
  // Match the deepest nav item that prefixes the current path, so landing pages
  // outside the nav simply highlight nothing rather than defaulting to "Home".
  const matchName = (path: string) => {
    const home = items.find((i) => i.url === path);
    if (home) return home.name;
    return (
      [...items]
        .filter((i) => i.url !== "/" && i.url !== "/en")
        .sort((a, b) => b.url.length - a.url.length)
        .find((i) => path === i.url || path.startsWith(`${i.url}/`))?.name ?? ""
    );
  };
  const [activeTab, setActiveTab] = useState(() => matchName(pathname));

  useEffect(() => {
    setActiveTab(matchName(pathname));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, items]);

  return (
    <div
      className={cn(
        "fixed bottom-0 left-1/2 z-[65] mb-6 -translate-x-1/2 sm:bottom-auto sm:top-4 sm:mb-0",
        className
      )}
    >
      <div className="flex items-center gap-1 rounded-full border border-silver bg-white/70 px-1.5 py-1.5 shadow-[0_6px_24px_rgba(0,0,0,0.06)] backdrop-blur-lg backdrop-saturate-150">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.name;

          return (
            <Link
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer rounded-full px-5 py-2 text-sm font-semibold tracking-tight transition-colors",
                "text-ink/70 hover:text-azure",
                isActive && "text-azure"
              )}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <Icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 -z-10 w-full rounded-full bg-azure/[0.06]"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div className="absolute -top-2 left-1/2 h-1 w-8 -translate-x-1/2 rounded-t-full bg-azure">
                    <div className="absolute -left-2 -top-2 h-6 w-12 rounded-full bg-azure/20 blur-md" />
                    <div className="absolute -top-1 h-6 w-8 rounded-full bg-azure/20 blur-md" />
                    <div className="absolute left-2 top-0 h-4 w-4 rounded-full bg-azure/20 blur-sm" />
                  </div>
                </motion.div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
