"use client";

import { motion, useMotionValue, useSpring, useTransform, useScroll } from "motion/react";
import { useRef } from "react";
import { Icon, I, ease } from "./ui";

const LINES = [["Scroll-stopping"], ["UGC", "ads", "that"], ["actually"]];

function Phone({
  cls,
  img,
  alt,
  rotate,
  delay,
  floatY,
  floatDur,
  children,
}: {
  cls: string;
  img: string;
  alt: string;
  rotate: number;
  delay: number;
  floatY: number;
  floatDur: number;
  children?: React.ReactNode;
}) {
  return (
    <motion.div
      className={"phone " + cls}
      initial={{ opacity: 0, y: 160, rotate: rotate * 2.5, scale: 0.85 }}
      animate={{ opacity: 1, y: 0, rotate, scale: 1 }}
      transition={{ type: "spring", stiffness: 70, damping: 14, delay }}
    >
      <motion.div
        style={{ position: "absolute", inset: 0 }}
        animate={{ y: [0, floatY, 0] }}
        transition={{ duration: floatDur, repeat: Infinity, ease: "easeInOut", delay: delay + 1 }}
      >
        <motion.img
          src={img}
          alt={alt}
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        {children}
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-0.5, 0.5], [8, -8]), { stiffness: 80, damping: 18 });
  const ry = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), { stiffness: 80, damping: 18 });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const stageY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  let word = 0;

  return (
    <section
      id="top"
      className="hero"
      ref={ref}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width - 0.5);
        my.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onPointerLeave={() => {
        mx.set(0);
        my.set(0);
      }}
    >
      <motion.div
        className="glow-blob"
        style={{ width: 640, height: 640, right: -80, top: 40 }}
        animate={{ opacity: [0.22, 0.38, 0.22], scale: [1, 1.12, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="glow-blob" style={{ width: 420, height: 420, left: -200, top: 460, opacity: 0.16 }} />

      <div className="wrap hero-grid">
        <motion.div className="hero-copy" style={{ y: copyY, opacity: fade }}>
          <motion.span
            className="badge"
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, ease, delay: 0.3 }}
          >
            <Icon d={I.cam} size={16} stroke="#C9A8FF" />
            UGC CREATOR · AD EDITOR · [CITY], PAKISTAN
          </motion.span>

          <h1 className="h1">
            {LINES.map((ln, li) => (
              <span className="line" key={li}>
                {ln.map((w) => {
                  const d = 0.45 + word++ * 0.08;
                  return (
                    <motion.span
                      key={w}
                      initial={{ y: "110%", rotate: 6 }}
                      animate={{ y: "0%", rotate: 0 }}
                      transition={{ duration: 0.9, ease, delay: d }}
                      style={{ marginRight: "0.28em" }}
                    >
                      {w}
                    </motion.span>
                  );
                })}
                {li === 2 && (
                  <motion.span
                    className="accent"
                    initial={{ y: "110%", rotate: 6 }}
                    animate={{ y: "0%", rotate: 0 }}
                    transition={{ duration: 0.9, ease, delay: 0.45 + 5 * 0.08 }}
                  >
                    sell.
                    <svg viewBox="0 0 230 30" preserveAspectRatio="none" aria-hidden="true">
                      <motion.path
                        d="M4 20 C 50 6, 110 4, 160 12 S 215 22, 226 10"
                        fill="none"
                        stroke="#8A3BFF"
                        strokeWidth="8"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 0.9, ease, delay: 1.35 }}
                      />
                    </svg>
                  </motion.span>
                )}
              </span>
            ))}
          </h1>

          <motion.span
            className="script"
            style={{ fontSize: "clamp(24px, 2.3vw, 32px)", color: "#E9DEFF", alignSelf: "flex-start" }}
            initial={{ opacity: 0, rotate: -12, x: -20 }}
            animate={{ opacity: 1, rotate: -3, x: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 12, delay: 1.5 }}
          >
            real people · real reactions · real results
          </motion.span>

          <motion.p
            className="lead"
            style={{ fontSize: "clamp(16px, 1.4vw, 19px)", maxWidth: 600 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 1.2 }}
          >
            I script, film and edit short-form videos that feel like a friend&apos;s recommendation, not an ad. Built
            for TikTok, Instagram Reels, Meta and YouTube Shorts.
          </motion.p>

          <motion.div
            className="hero-ctas"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 1.35 }}
          >
            <motion.a href="#work" className="btn btn-primary" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Icon d={I.play} size={16} fill="#FFFFFF" />
              Watch my work
            </motion.a>
            <motion.a href="#packages" className="btn btn-ghost" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              See packages
            </motion.a>
          </motion.div>

          <motion.div
            className="hero-checks"
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1, delayChildren: 1.55 } } }}
          >
            {["Hook-first scripts", "Raw + edited files", "Ad-ready 9:16"].map((t) => (
              <motion.span
                key={t}
                variants={{ hidden: { opacity: 0, x: -14 }, show: { opacity: 1, x: 0, transition: { duration: 0.5, ease } } }}
              >
                <Icon d={I.check} size={18} stroke="#B98CFF" width={2.6} />
                {t}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        <motion.div className="stage" style={{ y: stageY }}>
          <motion.div className="stage-inner" style={{ rotateX: rx, rotateY: ry }}>
            <motion.div
              className="stage-ring"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="stage-logo"
              initial={{ opacity: 0, scale: 0.6, rotate: -40 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 60, damping: 14, delay: 0.2 }}
            >
              <motion.img
                src="/images/logo.webp"
                alt="Hasnain UGC logo"
                animate={{ boxShadow: ["0 0 60px rgba(155,77,255,.45)", "0 0 110px rgba(155,77,255,.8)", "0 0 60px rgba(155,77,255,.45)"] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </motion.div>

            <Phone cls="left" img="/images/skin-face.webp" alt="Skincare close-up from a UGC ad" rotate={-9} delay={0.75} floatY={-14} floatDur={5}>
              <span className="cap">POV: my skin after 14 days</span>
            </Phone>
            <Phone cls="right" img="/images/fit-move.webp" alt="Fitness creator mid-movement" rotate={8} delay={0.9} floatY={-18} floatDur={6}>
              <span className="cap">I tried it for 30 days…</span>
            </Phone>
            <Phone cls="center" img="/images/fash-friends.webp" alt="Two friends reacting to a shopping haul" rotate={0} delay={0.55} floatY={-10} floatDur={4.5}>
              <span className="ui-live">
                <i />
                UGC AD
              </span>
              <span className="ui-side">
                {[I.heart, I.comment, I.share].map((d, i) => (
                  <motion.span
                    key={i}
                    animate={i === 0 ? { scale: [1, 1.3, 1] } : undefined}
                    transition={{ duration: 1.2, repeat: Infinity, repeatDelay: 1.6 }}
                  >
                    <Icon d={d} size={26} fill="#FFFFFF" />
                  </motion.span>
                ))}
              </span>
              <span className="ui-meta">
                <b>@hasnain.ugc</b>
                <span>We ordered 5 fits and kept every single one</span>
              </span>
              <span className="ui-bar">
                <motion.i
                  initial={{ width: "0%" }}
                  animate={{ width: ["0%", "100%"] }}
                  transition={{ duration: 9, repeat: Infinity, ease: "linear", delay: 1.4 }}
                />
              </span>
            </Phone>

            <motion.span
              className="float-chip dark"
              style={{ left: 0, top: 130 }}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0, y: [0, -8, 0], rotate: -4 }}
              transition={{ opacity: { delay: 1.4 }, x: { delay: 1.4, duration: 0.7, ease }, y: { duration: 4, repeat: Infinity, ease: "easeInOut" } }}
            >
              <Icon d={I.bolt} size={18} stroke="#B98CFF" width={2.2} />3 hooks per video
            </motion.span>
            <motion.span
              className="float-chip purple"
              style={{ right: 0, top: 110 }}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0, y: [0, 10, 0], rotate: 5 }}
              transition={{ opacity: { delay: 1.6 }, x: { delay: 1.6, duration: 0.7, ease }, y: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
            >
              First cut in [X] days
            </motion.span>
            <motion.span
              className="tap-hint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2 }}
            >
              tap to watch ↓
            </motion.span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
