"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Light Apple-style 2-column feature split — matches the rest of the site.
 * Text on one side, device mock on a lifted card on the other, alternating.
 */
export function FeatureShowcase({
  index,
  eyebrow,
  title,
  sub,
  tags,
  href = "/contact",
  linkLabel = "En savoir plus",
  band = "snow",
  reverse = false,
  children,
}: {
  index: string;
  eyebrow: string;
  title: React.ReactNode;
  sub: string;
  tags: string[];
  href?: string;
  linkLabel?: string;
  band?: "snow" | "fog";
  reverse?: boolean;
  children: React.ReactNode; // device mock
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section
      ref={ref}
      className={cn(
        "w-full px-6 py-28",
        band === "fog" ? "bg-fog" : "bg-snow"
      )}
    >
      <div
        className={cn(
          "mx-auto grid w-full max-w-[1200px] grid-cols-1 items-center gap-12 md:grid-cols-2 md:gap-16",
          reverse && "md:[direction:rtl]"
        )}
      >
        {/* Text column */}
        <motion.div
          className="[direction:ltr]"
          initial={{ opacity: 0, x: reverse ? 40 : -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "0px 0px -15% 0px" }}
          transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <span className="mb-4 block text-sm font-medium tracking-[-0.01em] text-graphite">
            {index}
          </span>
          <span className="mb-3 block text-2xl font-semibold tracking-tight text-ink">
            {eyebrow}
          </span>
          <h2 className="text-[clamp(36px,5vw,56px)] font-bold leading-[1.07] tracking-[-0.018em] text-ink">
            {title}
          </h2>
          <p className="mt-5 max-w-md text-xl font-light leading-snug text-graphite">
            {sub}
          </p>
          <ul className="mt-6 flex flex-wrap gap-2.5">
            {tags.map((t) => (
              <li
                key={t}
                className="rounded-full border border-silver px-4 py-1.5 text-sm text-slate"
              >
                {t}
              </li>
            ))}
          </ul>
          <Link
            href={href}
            className="mt-7 inline-block text-[17px] text-cobalt transition-opacity hover:opacity-70"
          >
            {linkLabel} ›
          </Link>
        </motion.div>

        {/* Device column on a lifted card (opposite surface), with parallax */}
        <motion.div style={{ y }} className="flex justify-center [direction:ltr]">
          <div
            className={cn(
              "flex w-full items-center justify-center rounded-[28px] p-8 md:p-12",
              band === "fog" ? "bg-snow" : "bg-fog"
            )}
          >
            {children}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
