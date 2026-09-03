"use client";

import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  type MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Magnetic } from "@/components/motion";

export type ParallaxProject = {
  title: string;
  /** subtitle shown under the title on hover (category, location…) */
  tagline?: string;
  href: string;
  /** true → open in a new tab (external live site) */
  external?: boolean;
  thumbnail: string;
};

export type HeroParallaxCopy = {
  titleLines: string[];
  /** the word in titleLines rendered in the accent gradient */
  highlight?: string;
  intro: string;
  primaryCta: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  visitLabel: string;
};

/**
 * 3D parallax hero — three rows of project cards drift in opposite directions
 * as the page scrolls. Adapted from the Aceternity "Hero Parallax" block to the
 * WebCode Studio light palette. Needs ~15 projects (duplicate to fill).
 */
export function HeroParallax({
  projects,
  copy,
}: {
  projects: ParallaxProject[];
  copy: HeroParallaxCopy;
}) {
  const firstRow = projects.slice(0, 5);
  const secondRow = projects.slice(5, 10);
  const thirdRow = projects.slice(10, 15);
  const ref = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 420]),
    springConfig,
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -420]),
    springConfig,
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [12, 0]),
    springConfig,
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.45, 1]),
    springConfig,
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.3], [14, 0]),
    springConfig,
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [-250, 180]),
    springConfig,
  );

  return (
    <div
      ref={ref}
      className="relative flex h-[135vh] flex-col self-auto overflow-hidden bg-fog py-20 antialiased [perspective:1000px] [transform-style:preserve-3d] sm:h-[150vh] sm:py-28"
    >
      <Header copy={copy} />
      {/* Decorative project montage — real projects live on /projets (hero CTA). */}
      <motion.div
        aria-hidden="true"
        style={{ rotateX, rotateZ, translateY, opacity }}
        className="pointer-events-none"
      >
        <motion.div className="mb-6 flex flex-row-reverse space-x-6 space-x-reverse sm:mb-16 sm:space-x-16">
          {firstRow.map((project, i) => (
            <ProjectCard
              project={project}
              translate={translateX}
              visitLabel={copy.visitLabel}
              key={`row1-${i}`}
            />
          ))}
        </motion.div>
        <motion.div className="mb-6 flex flex-row space-x-6 sm:mb-16 sm:space-x-16">
          {secondRow.map((project, i) => (
            <ProjectCard
              project={project}
              translate={translateXReverse}
              visitLabel={copy.visitLabel}
              key={`row2-${i}`}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-6 space-x-reverse sm:space-x-16">
          {thirdRow.map((project, i) => (
            <ProjectCard
              project={project}
              translate={translateX}
              visitLabel={copy.visitLabel}
              key={`row3-${i}`}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

function Header({ copy }: { copy: HeroParallaxCopy }) {
  return (
    <div className="relative z-20 mx-auto w-full max-w-7xl rounded-3xl bg-fog/85 px-6 py-14 backdrop-blur-sm sm:bg-transparent sm:py-24 sm:backdrop-blur-0 md:py-28">
      <h1 className="text-[clamp(40px,8vw,88px)] font-bold leading-[1.02] tracking-[-0.022em] text-ink">
        {copy.titleLines.map((line, index) => (
          <React.Fragment key={line}>
            {index > 0 && <br />}
            {copy.highlight && line.includes(copy.highlight) ? (
              <>
                {line.split(copy.highlight)[0]}
                <span className="text-azure">{copy.highlight}</span>
                {line.split(copy.highlight)[1]}
              </>
            ) : (
              line
            )}
          </React.Fragment>
        ))}
      </h1>
      <p className="mt-7 max-w-2xl text-lg font-light leading-relaxed text-graphite md:text-xl">
        {copy.intro}
      </p>
      <div className="mt-9 flex flex-wrap items-center gap-4">
        <Magnetic>
          <Link
            href={copy.primaryCta.href}
            className="inline-flex rounded-full bg-azure px-6 py-3 text-lg text-white transition-colors hover:bg-[#0077ed]"
          >
            {copy.primaryCta.label}
          </Link>
        </Magnetic>
        {copy.secondaryCta && (
          <Link
            href={copy.secondaryCta.href}
            className="inline-flex rounded-full border border-silver bg-snow px-6 py-3 text-lg text-ink transition-colors hover:border-ink"
          >
            {copy.secondaryCta.label}
          </Link>
        )}
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  translate,
  visitLabel,
}: {
  project: ParallaxProject;
  translate: MotionValue<number>;
  visitLabel: string;
}) {
  return (
    <motion.div
      style={{ x: translate }}
      whileHover={{ y: -20 }}
      className="group/product pointer-events-auto relative h-56 w-[17rem] shrink-0 overflow-hidden rounded-[28px] border border-silver bg-snow shadow-[0_20px_60px_-30px_rgba(29,29,31,0.35)] sm:h-96 sm:w-[30rem]"
    >
      <Link
        href={project.href}
        target={project.external ? "_blank" : undefined}
        rel={project.external ? "noreferrer" : undefined}
        tabIndex={-1}
        className="block h-full w-full"
      >
        <Image
          src={project.thumbnail}
          height={600}
          width={600}
          className="absolute inset-0 h-full w-full object-cover object-left-top"
          alt={
            project.tagline
              ? `Site réalisé pour ${project.title} — ${project.tagline}`
              : `Site réalisé pour ${project.title}`
          }
          sizes="(max-width: 640px) 22rem, 30rem"
        />
        <div className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover/product:bg-ink/70" />
        <div className="absolute inset-x-6 bottom-6 translate-y-2 opacity-0 transition-all duration-300 group-hover/product:translate-y-0 group-hover/product:opacity-100">
          <span className="block text-2xl font-semibold tracking-tight text-white">
            {project.title}
          </span>
          {project.tagline && (
            <span className="mt-1 block text-sm text-white/70">
              {project.tagline}
            </span>
          )}
          <span className="mt-3 inline-flex items-center gap-1.5 text-[15px] text-white">
            {visitLabel} <span aria-hidden="true">↗</span>
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
