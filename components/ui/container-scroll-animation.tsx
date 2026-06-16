"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const ContainerScroll = ({
  titleComponent,
  children,
  backContent,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
  backContent?: React.ReactNode;
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
    isMobile ? [0.7, 0.9] : [1.05, 1];

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="relative flex h-[60rem] items-center justify-center p-2 md:h-[80rem] md:p-20"
      ref={containerRef}
    >
      <div
        className="relative w-full py-10 md:py-40"
        style={{ perspective: "1000px" }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card
          rotate={rotate}
          translate={translate}
          scale={scale}
          backContent={backContent}
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
      className="div mx-auto max-w-5xl text-center"
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
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
  backContent?: React.ReactNode;
}) => {
  const isInteractive = Boolean(backContent);

  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow:
          "0 0 #0000004d, 0 9px 20px #0000004a, 0 37px 37px #00000042, 0 84px 50px #00000026, 0 149px 60px #0000000a, 0 233px 65px #00000003",
      }}
      className="mx-auto mt-8 h-[30rem] w-full max-w-5xl md:mt-10 md:h-[40rem]"
    >
      <div className="relative h-full w-full">
        {isInteractive ? (
          <input
            type="checkbox"
            aria-label="Basculer entre le frontend et le backend du projet"
            className="peer absolute inset-0 z-40 h-full w-full cursor-pointer appearance-none rounded-[30px] outline-none"
          />
        ) : null}
        <div className="relative h-full w-full [transform-style:preserve-3d] transition-transform duration-700 ease-[cubic-bezier(.22,.61,.36,1)] peer-checked:[transform:rotateY(180deg)] peer-focus-visible:ring-4 peer-focus-visible:ring-azure/30 motion-reduce:transition-none">
          <TabletFace label="Cliquer pour voir le backend">
          {children}
          </TabletFace>
          {backContent ? (
            <TabletFace back label="Retour au frontend">
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
  back = false,
}: {
  children: React.ReactNode;
  label: string;
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
          <span className="sm:hidden">{back ? "Frontend" : "Backend"}</span>
        </span>
      </div>
    </div>
  );
}
