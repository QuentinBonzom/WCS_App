"use client";

import { Fragment, useRef } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import type { ProjectApp, ProjectCard } from "@/content/pages/projets";
import { cn } from "@/lib/utils";

type Labels = {
  eyebrow: string;
  titleLines: string[];
  text: string;
  hint: string;
  imageAlt: string;
  open: string;
  close: string;
  temporary: string;
  temporaryButton: string;
  visitButton: string;
  appBadge: string;
  appStoreButton: string;
};

/** Enough cards to close the ring even with few projects. */
const MIN_CARDS = 12;

/**
 * Projects laid out on a 3D cylinder that turns with the page scroll.
 * Each card opens a native <dialog> with the project in large; the dialogs are
 * server-rendered so the project copy stays in the HTML.
 */
export function ProjectsRing({
  projects,
  labels,
}: {
  projects: ProjectCard[];
  labels: Labels;
}) {
  const sectionRef = useRef<HTMLElement>(null);
  const dialogs = useRef<(HTMLDialogElement | null)[]>([]);

  const repeat = Math.max(1, Math.ceil(MIN_CARDS / projects.length));
  const cards = Array.from({ length: projects.length * repeat }, (_, i) => i % projects.length);
  const step = 360 / cards.length;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const rotation = useSpring(useTransform(scrollYProgress, [0, 1], [0, -360]), {
    stiffness: 140,
    damping: 30,
    mass: 0.4,
  });

  /** Keyboard users: bring the focused card to the front of the ring. */
  const focusCard = (slot: number) => {
    const section = sectionRef.current;
    if (!section) return;
    const travel = section.offsetHeight - window.innerHeight;
    const top = section.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: top + (slot / cards.length) * travel });
  };

  return (
    <>
      <section
        ref={sectionRef}
        className="relative h-[320vh] bg-fog text-ink"
      >
        <div className="sticky top-0 flex h-svh flex-col items-center overflow-clip">
          <header className="relative z-10 px-6 pt-24 text-center">
            <span className="mb-2 block text-xl font-semibold tracking-tight text-azure sm:text-2xl">
              {labels.eyebrow}
            </span>
            <h1 className="text-[clamp(36px,5.6vw,72px)] font-bold leading-[1.04] tracking-[-0.022em]">
              {labels.titleLines.map((line, index) => (
                <Fragment key={line}>
                  {index > 0 && " "}
                  {line}
                </Fragment>
              ))}
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base font-light text-graphite sm:text-lg">
              {labels.text}
            </p>
          </header>

          <div
            className="relative flex w-full flex-1 items-center justify-center pb-16 [perspective:2200px] [--w:clamp(250px,30vw,460px)]"
            style={{ ["--r" as string]: `calc(var(--w) * ${(cards.length * 0.172).toFixed(3)})` }}
          >
            <motion.ul
              className="relative aspect-[1440/913] w-[var(--w)] [transform-style:preserve-3d]"
              style={{
                rotateY: rotation,
                rotateX: -7,
                z: "calc(var(--r) * -1)",
              }}
            >
              {cards.map((projectIndex, slot) => (
                <RingCard
                  key={slot}
                  project={projects[projectIndex]}
                  angle={slot * step}
                  rotation={rotation}
                  primary={slot < projects.length}
                  label={`${labels.open} ${projects[projectIndex].title}`}
                  appBadge={labels.appBadge}
                  onOpen={() => dialogs.current[projectIndex]?.showModal()}
                  onFocus={() => focusCard(slot)}
                />
              ))}
            </motion.ul>
          </div>

          <p className="relative z-10 mb-8 inline-flex items-center gap-2.5 rounded-full bg-snow px-5 py-2.5 text-sm font-semibold text-ink shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)] ring-1 ring-black/5 sm:text-[15px]">
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              className="h-4 w-4 fill-none stroke-azure stroke-[2.5] motion-safe:animate-bounce"
            >
              <path d="M12 5v14M6 13l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {labels.hint}
          </p>
        </div>
      </section>

      {projects.map((p, i) => (
        <dialog
          key={p.slug}
          ref={(el) => {
            dialogs.current[i] = el;
          }}
          aria-labelledby={`project-${p.slug}-title`}
          onClick={(e) => {
            if (e.target === e.currentTarget) e.currentTarget.close();
          }}
          className="m-auto max-h-[calc(100svh-2rem)] w-[min(1100px,calc(100vw-2rem))] scale-95 overflow-y-auto rounded-[28px] bg-snow p-0 text-ink opacity-0 transition-[opacity,scale,display,overlay] transition-discrete duration-300 ease-out backdrop:bg-black/0 backdrop:transition-[background-color,display,overlay] backdrop:transition-discrete backdrop:duration-300 open:scale-100 open:opacity-100 open:backdrop:bg-black/75 starting:open:scale-95 starting:open:opacity-0 starting:open:backdrop:bg-black/0"
        >
          <div className="relative aspect-[1440/913] max-h-[62svh] w-full bg-silver">
            <Image
              src={p.img}
              alt={`${labels.imageAlt} ${p.title}`}
              fill
              sizes="(max-width: 1100px) 100vw, 1100px"
              className="object-cover object-top"
            />
            {p.mobileImg ? (
              <PhoneFrame
                src={p.mobileImg}
                sizes="240px"
                className="absolute bottom-[5%] right-[4%] w-[19%]"
              />
            ) : null}
            {p.app ? <AppBadge app={p.app} label={labels.appBadge} className="absolute bottom-4 left-4" /> : null}
          </div>
          <div className="flex flex-col gap-6 p-7 sm:flex-row sm:items-end sm:justify-between sm:p-10">
            <div>
              <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide">
                <span className="text-azure">{p.cat}</span>
                <span className="h-1 w-1 rounded-full bg-silver" />
                <span className="text-graphite">{p.location}</span>
                {p.temporary ? (
                  <>
                    <span className="h-1 w-1 rounded-full bg-silver" />
                    <span className="rounded-full bg-azure/10 px-2 py-1 text-[10px] text-cobalt">
                      {labels.temporary}
                    </span>
                  </>
                ) : null}
              </div>
              <h2
                id={`project-${p.slug}-title`}
                className="my-2 text-3xl font-semibold tracking-tight sm:text-4xl"
              >
                {p.title}
              </h2>
              <p className="max-w-2xl text-[17px] leading-relaxed text-graphite">{p.desc}</p>
            </div>
            <div className="flex shrink-0 flex-wrap gap-3">
              {p.app?.downloadUrl ? (
                <a
                  href={p.app.downloadUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-[17px] text-white transition-colors hover:bg-black"
                >
                  <AppleGlyph className="h-4 w-4" />
                  {labels.appStoreButton}
                </a>
              ) : null}
              <a
                href={p.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-azure px-6 py-3 text-[17px] text-white transition-colors hover:bg-[#0077ed]"
              >
                {p.temporary ? labels.temporaryButton : labels.visitButton}{" "}
                <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <form method="dialog">
            <button
              type="submit"
              aria-label={labels.close}
              className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-xl text-white backdrop-blur transition-colors hover:bg-black/80"
            >
              <span aria-hidden="true">×</span>
            </button>
          </form>
        </dialog>
      ))}
    </>
  );
}

function RingCard({
  project,
  angle,
  rotation,
  primary,
  label,
  appBadge,
  onOpen,
  onFocus,
}: {
  project: ProjectCard;
  angle: number;
  rotation: MotionValue<number>;
  primary: boolean;
  label: string;
  appBadge: string;
  onOpen: () => void;
  onFocus: () => void;
}) {
  // Cards facing the viewer are opaque, the far side of the ring fades out.
  const facing = useTransform(rotation, (r) => Math.cos(((angle + r) * Math.PI) / 180));
  // Rounded so the server-rendered style matches the client's first render.
  const opacity = useTransform(facing, (f) =>
    (f > 0 ? 0.55 + 0.45 * f : 0.55 + 0.35 * f).toFixed(2),
  );
  // Seen from behind, a card would show its site mirrored: flip it back.
  const flip = useTransform(facing, (f) => (f < 0 ? -1 : 1));

  return (
    <li
      // Phones: skip the far side of the ring, it halves the layers iOS has to keep.
      className="absolute inset-0 max-md:[backface-visibility:hidden]"
      style={{ transform: `rotateY(${angle}deg) translateZ(var(--r))` }}
      aria-hidden={primary ? undefined : true}
    >
      <motion.button
        type="button"
        onClick={onOpen}
        onFocus={primary ? onFocus : undefined}
        tabIndex={primary ? 0 : -1}
        aria-label={label}
        style={{ opacity }}
        className="group relative block h-full w-full cursor-pointer rounded-[18px] outline-offset-4 focus-visible:outline-2 focus-visible:outline-azure"
      >
        <motion.span className="absolute inset-0" style={{ scaleX: flip }}>
          <span className="absolute inset-0 overflow-hidden rounded-[18px] bg-silver shadow-[0_24px_50px_-24px_rgba(0,0,0,0.35)] ring-1 ring-black/5">
            <Image
              src={project.img}
              alt=""
              fill
              sizes="(max-width: 768px) 250px, 30vw"
              // Lazy loading never fires for cards parked behind the ring.
              loading="eager"
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          </span>
          {project.mobileImg ? (
            <PhoneFrame
              src={project.mobileImg}
              sizes="120px"
              eager
              className="absolute -bottom-[7%] right-[5%] w-[23%] transition-transform duration-500 group-hover:-translate-y-2"
            />
          ) : null}
          {project.app ? (
            <AppBadge app={project.app} label={appBadge} className="absolute left-[4%] top-[6%]" />
          ) : null}
        </motion.span>
      </motion.button>
    </li>
  );
}

/** iPhone frame around a phone-size screenshot, to show the responsive version. */
function PhoneFrame({
  src,
  sizes,
  eager = false,
  className,
}: {
  src: string;
  sizes: string;
  eager?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "relative block aspect-[430/700] rounded-[18%/11%] bg-[#1d1d1f] shadow-[0_18px_36px_-12px_rgba(0,0,0,0.55)] ring-1 ring-white/10",
        className,
      )}
    >
      {/* insets in % of the phone itself (padding % would follow the parent's width) */}
      <span className="absolute inset-x-[4.5%] inset-y-[2.8%] overflow-hidden rounded-[14%/8.5%] bg-snow">
        <Image
          src={src}
          alt=""
          fill
          sizes={sizes}
          loading={eager ? "eager" : "lazy"}
          className="object-cover object-top"
        />
        <span className="absolute left-1/2 top-[2.2%] h-[4.2%] w-[30%] -translate-x-1/2 rounded-full bg-[#1d1d1f]" />
      </span>
    </span>
  );
}

/** "iOS app" pill with the app icon, so an app project reads as one at a glance. */
function AppBadge({
  app,
  label,
  className,
}: {
  app: ProjectApp;
  label: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-ink py-1 pl-1 pr-3 text-[11px] font-semibold text-white shadow-lg sm:text-xs",
        className,
      )}
    >
      {app.icon ? (
        <Image
          src={app.icon}
          alt=""
          width={24}
          height={24}
          loading="eager"
          className="h-6 w-6 rounded-[7px] bg-white"
        />
      ) : null}
      <AppleGlyph className="h-3 w-3" />
      {label}
    </span>
  );
}

function AppleGlyph({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 384 512" aria-hidden="true" className={cn("fill-current", className)}>
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}
