"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface HamburgerMenuItem {
  label: string;
  icon?: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

export interface HamburgerMenuOverlayProps {
  items: HamburgerMenuItem[];
  /** Background of the full-screen overlay (color or gradient). */
  overlayBackground?: string;
  /** Text/icon color inside the overlay. */
  textColor?: string;
  /** Label size. */
  fontSize?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl";
  /** Horizontal alignment of the menu items. */
  menuAlignment?: "left" | "center" | "right";
  /** Frosted-glass backdrop behind the overlay. */
  enableBlur?: boolean;
  /** Open/close animation duration in seconds. */
  animationDuration?: number;
  /** Toggle button position. */
  buttonTop?: string;
  buttonLeft?: string;
  buttonRight?: string;
  /** Color of the hamburger lines (closed state). */
  buttonColor?: string;
  className?: string;
  onOpen?: () => void;
  onClose?: () => void;
}

const fontSizeMap: Record<NonNullable<HamburgerMenuOverlayProps["fontSize"]>, string> = {
  sm: "text-xl",
  md: "text-2xl",
  lg: "text-3xl",
  xl: "text-4xl",
  "2xl": "text-5xl",
  "3xl": "text-6xl",
  "4xl": "text-7xl",
};

const alignMap = {
  left: "items-start text-left",
  center: "items-center text-center",
  right: "items-end text-right",
} as const;

export function HamburgerMenuOverlay({
  items,
  overlayBackground = "#0d1628",
  textColor = "#ffffff",
  fontSize = "xl",
  menuAlignment = "center",
  enableBlur = false,
  animationDuration = 0.5,
  buttonTop = "1rem",
  buttonLeft,
  buttonRight = "1rem",
  buttonColor = "#1d1d1f",
  className,
  onOpen,
  onClose,
}: HamburgerMenuOverlayProps) {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  const close = React.useCallback(() => {
    setOpen(false);
    onClose?.();
  }, [onClose]);

  const toggle = () => {
    setOpen((prev) => {
      const next = !prev;
      if (next) onOpen?.();
      else onClose?.();
      return next;
    });
  };

  // Close when the route changes.
  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll + close on Escape while open.
  React.useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  const lineColor = open ? textColor : buttonColor;

  return (
    <div className={className}>
      {/* Toggle button */}
      <button
        type="button"
        onClick={toggle}
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={open}
        className="fixed z-[80] flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white/70 shadow-[0_6px_24px_rgba(0,0,0,0.08)] backdrop-blur-lg backdrop-saturate-150"
        style={{ top: buttonTop, left: buttonLeft, right: buttonLeft ? undefined : buttonRight }}
      >
        <span className="relative block h-4 w-5" aria-hidden="true">
          <span
            className="absolute left-0 block h-0.5 w-5 rounded-full transition-all duration-300"
            style={{
              backgroundColor: lineColor,
              top: open ? "50%" : "2px",
              transform: open ? "translateY(-50%) rotate(45deg)" : "none",
            }}
          />
          <span
            className="absolute left-0 top-1/2 block h-0.5 w-5 -translate-y-1/2 rounded-full transition-all duration-200"
            style={{ backgroundColor: lineColor, opacity: open ? 0 : 1 }}
          />
          <span
            className="absolute left-0 block h-0.5 w-5 rounded-full transition-all duration-300"
            style={{
              backgroundColor: lineColor,
              bottom: open ? "50%" : "2px",
              transform: open ? "translateY(50%) rotate(-45deg)" : "none",
            }}
          />
        </span>
      </button>

      {/* Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: animationDuration * 0.6, ease: "easeInOut" }}
            className={cn(
              "fixed inset-0 z-[70] flex flex-col justify-center px-10",
              enableBlur && "backdrop-blur-md",
            )}
            style={{ background: overlayBackground, color: textColor }}
          >
            <motion.nav
              className={cn("mx-auto flex w-full max-w-xl flex-col gap-2", alignMap[menuAlignment])}
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
              }}
            >
              {items.map((item, index) => {
                const content = (
                  <span
                    className={cn(
                      "inline-flex items-center gap-4 font-semibold tracking-tight transition-opacity hover:opacity-70",
                      fontSizeMap[fontSize],
                    )}
                  >
                    {item.icon && (
                      <span className="opacity-80">{item.icon}</span>
                    )}
                    {item.label}
                  </span>
                );

                return (
                  <motion.div
                    key={`${item.label}-${index}`}
                    variants={{
                      hidden: { opacity: 0, y: 24 },
                      show: { opacity: 1, y: 0 },
                    }}
                    transition={{ duration: animationDuration * 0.8, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {item.href ? (
                      <Link
                        href={item.href}
                        onClick={() => {
                          item.onClick?.();
                          close();
                        }}
                      >
                        {content}
                      </Link>
                    ) : (
                      <button
                        type="button"
                        onClick={() => {
                          item.onClick?.();
                          close();
                        }}
                      >
                        {content}
                      </button>
                    )}
                  </motion.div>
                );
              })}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default HamburgerMenuOverlay;
