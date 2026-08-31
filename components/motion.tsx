"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useMotionValue,
  type Variants,
} from "framer-motion";
import { cn } from "@/lib/utils";

/* ---------------------------------------------------------------- Reveal */
type Dir = "up" | "down" | "left" | "right" | "zoom" | "blur";

const offset: Record<Dir, object> = {
  up: { y: 40 },
  down: { y: -40 },
  left: { x: -48 },
  right: { x: 48 },
  zoom: { scale: 0.9 },
  blur: { filter: "blur(16px)" },
};

export function Reveal({
  children,
  as = "div",
  dir = "up",
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  as?: keyof typeof motion;
  dir?: Dir;
  delay?: number;
  className?: string;
}) {
  const Tag = motion[as] as typeof motion.div;
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, ...offset[dir] }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {children}
    </Tag>
  );
}

/* ----------------------------------------------------------- Stagger group */
const groupVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] },
  },
};

export function StaggerGroup({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={groupVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------- Scroll progress bar */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 220,
    damping: 40,
    restDelta: 0.001,
  });
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed left-0 top-0 z-[120] h-[3px] w-full origin-left bg-azure"
    />
  );
}

/* --------------------------------------------------------- Magnetic wrapper */
export function Magnetic({
  children,
  strength = 0.4,
  className,
}: {
  children: React.ReactNode;
  strength?: number;
  className?: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.PointerEvent) => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const r = ref.current!.getBoundingClientRect();
    x.set((e.clientX - r.left - r.width / 2) * strength);
    y.set((e.clientY - r.top - r.height / 2) * strength);
  };
  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onPointerMove={onMove}
      onPointerLeave={reset}
      style={{ x, y }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn("inline-block", className)}
    >
      {children}
    </motion.div>
  );
}

/* --------------------------------------------------------------- Marquee */
export function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-silver bg-snow py-6">
      <motion.div
        className="flex w-max items-center gap-8"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 26, ease: "linear", repeat: Infinity }}
      >
        {row.map((t, i) => (
          <React.Fragment key={i}>
            <span className="whitespace-nowrap text-2xl font-bold tracking-tight text-ink">
              {t}
            </span>
            <span className="text-sm text-azure">✦</span>
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
}
