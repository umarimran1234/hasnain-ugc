"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

export const ease = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease } },
};

export const stagger = (gap = 0.08, delay = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren: gap, delayChildren: delay } },
});

export function Reveal({
  children,
  className,
  delay = 0,
  y = 40,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: "div" | "section" | "span";
}) {
  const M = motion[as];
  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease, delay }}
    >
      {children}
    </M>
  );
}

export function SectionHead({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <motion.div
      className="head-row"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={stagger(0.1)}
    >
      <div>
        <motion.div className="eyebrow" variants={fadeUp}>
          {eyebrow}
        </motion.div>
        <motion.h2 className="h2" variants={fadeUp}>
          {title}
        </motion.h2>
      </div>
      {children ? <motion.div variants={fadeUp}>{children}</motion.div> : null}
    </motion.div>
  );
}

export function Icon({
  d,
  size = 20,
  stroke = "currentColor",
  width = 2,
  fill = "none",
}: {
  d: string;
  size?: number;
  stroke?: string;
  width?: number;
  fill?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill}
      stroke={fill === "none" ? stroke : "none"}
      strokeWidth={width}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}

export const I = {
  check: "M5 12l5 5L20 7",
  play: "M8 5l12 7-12 7z",
  pause: "M7 5h4v14H7zM13 5h4v14h-4z",
  arrow: "M5 12h14M13 6l6 6-6 6",
  bolt: "M13 2L4 14h7l-1 8 9-12h-7z",
  cam: "M3 6h13v12H3zM16 10l5-3v10l-5-3",
  star: "M12 2l2.6 7.4L22 12l-7.4 2.6L12 22l-2.6-7.4L2 12l7.4-2.6z",
  heart: "M12 21s-7.5-4.6-9.5-9.3C1 8 3.6 4.5 7.1 4.5c2 0 3.4 1 4.9 2.8 1.5-1.8 2.9-2.8 4.9-2.8 3.5 0 6.1 3.5 4.6 7.2C19.5 16.4 12 21 12 21z",
  comment: "M4 5h16v11H8l-4 4z",
  share: "M14 4l7 7-7 7v-4c-5 0-8 1.5-10 5 0-6 3-10 10-11z",
  plus: "M12 5v14M5 12h14",
  minus: "M5 12h14",
  menu: "M4 8h16M4 16h10",
  close: "M6 6l12 12M18 6L6 18",
  whatsapp: "M4 20l1.4-4A8 8 0 1 1 8 18.6z",
  mail: "M3 5h18v14H3zM3 7l9 6 9-6",
  insta: "M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8zM17.5 6.5h0",
};
