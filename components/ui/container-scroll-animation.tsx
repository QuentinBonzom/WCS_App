"use client";

import React, { useRef } from "react";
import {
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  useReducedMotion,
  motion,
  MotionValue,
} from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
  backContent,
  labels = {
    toggle: "Basculer entre le frontend et le backend du projet",
    front: "Cliquer pour voir le backend",
    back: "Retour au frontend",
    frontShort: "Frontend",
    backShort: "Backend",
  },
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
  backContent?: React.ReactNode;
  labels?: {
    toggle: string;
    front: string;
    back: string;
    frontShort: string;
    backShort: string;
  };
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scaleDimensions = (): [number, number] =>
    isMobile ? [0.9, 1] : [1.05, 1];

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="relative flex h-auto items-center justify-center px-2 pb-10 pt-28 md:h-[80rem] md:p-20"
      ref={containerRef}
    >
      <div
        className="relative w-full md:py-40"
        style={{ perspective: "1000px" }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card
          rotate={rotate}
          translate={translate}
          scale={scale}
          backContent={backContent}
          labels={labels}
        >
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({
  translate,
  titleComponent,
}: {
  translate: MotionValue<number>;
  titleComponent: React.ReactNode;
}) => {
  return (
    <motion.div
      style={{ translateY: translate }}
      className="mx-auto w-full max-w-5xl text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
  backContent,
  labels,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
  backContent?: React.ReactNode;
  labels: {
    toggle: string;
    front: string;
    back: string;
    frontShort: string;
    backShort: string;
  };
}) => {
  const isInteractive = Boolean(backContent);
  const cardRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  // Cursor-reactive 3D tilt. Raw pointer offsets are smoothed by springs so the
  // device follows the mouse with a soft, premium feel.
  const tiltXRaw = useMotionValue(0);
  const tiltYRaw = useMotionValue(0);
  const tiltX = useSpring(tiltXRaw, { stiffness: 150, damping: 18, mass: 0.6 });
  const tiltY = useSpring(tiltYRaw, { stiffness: 150, damping: 18, mass: 0.6 });

  // Combine the scroll-driven rotateX with the cursor tilt.
  const rotateX = useTransform(
    [rotate, tiltX] as MotionValue<number>[],
    ([scrollRot, mouseTilt]: number[]) => scrollRot + mouseTilt
  );

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (reduceMotion || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5; // -0.5 → 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    tiltYRaw.set(px * 16); // horizontal mouse → rotateY
    tiltXRaw.set(-py * 10); // vertical mouse → rotateX
  };

  const handlePointerLeave = () => {
    tiltXRaw.set(0);
    tiltYRaw.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      style={{
        rotateX,
        rotateY: tiltY,
        scale,
        transformStyle: "preserve-3d",
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      animate={reduceMotion ? undefined : { y: [0, -14, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      className="mx-auto mt-8 h-[30rem] w-full max-w-5xl rounded-[30px] md:mt-10 md:h-[40rem]"
    >
      <div className="relative h-full w-full">
        {isInteractive ? (
          <input
            type="checkbox"
            aria-label={labels.toggle}
            className="peer absolute inset-0 z-40 h-full w-full cursor-pointer appearance-none rounded-[30px] outline-none"
          />
        ) : null}
        <div className="relative h-full w-full [transform-style:preserve-3d] transition-transform duration-700 ease-[cubic-bezier(.22,.61,.36,1)] peer-checked:[transform:rotateY(180deg)] peer-focus-visible:ring-4 peer-focus-visible:ring-azure/30 motion-reduce:transition-none">
          <TabletFace label={labels.front} shortLabel={labels.backShort}>
          {children}
          </TabletFace>
          {backContent ? (
            <TabletFace back label={labels.back} shortLabel={labels.frontShort}>
              {backContent}
            </TabletFace>
          ) : null}
        </div>
      </div>
    </motion.div>
  );
};

function TabletFace({
  children,
  label,
  shortLabel,
  back = false,
}: {
  children: React.ReactNode;
  label: string;
  shortLabel: string;
  back?: boolean;
}) {
  return (
    <div
      className="absolute inset-0 rounded-[30px] border-4 border-[#6c6c6c] bg-[#222] p-2 shadow-2xl md:p-3"
      style={{
        backfaceVisibility: "hidden",
        WebkitBackfaceVisibility: "hidden",
        transform: back ? "rotateY(180deg)" : undefined,
      }}
    >
      <div className="relative h-full w-full overflow-hidden rounded-2xl bg-fog">
        {children}
        <span className="pointer-events-none absolute bottom-3 right-3 z-20 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-[#0d1628]/90 px-3 py-1.5 text-[9px] font-semibold text-white shadow-lg backdrop-blur sm:text-[10px]">
          <span aria-hidden="true">↻</span>
          <span className="hidden sm:inline">{label}</span>
          <span className="sm:hidden">{shortLabel}</span>
        </span>
      </div>
    </div>
  );
}
