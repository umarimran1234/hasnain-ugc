"use client";

import { AnimatePresence, motion, useMotionValue, useScroll, useSpring } from "motion/react";
import { useEffect, useState } from "react";
import { Icon, I, ease } from "./ui";

const LINKS = [
  ["Work", "#work"],
  ["Services", "#services"],
  ["Packages", "#packages"],
  ["Process", "#process"],
  ["About", "#about"],
] as const;

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.3 });
  return <motion.div className="progress" style={{ scaleX }} />;
}

export function CursorGlow() {
  const x = useMotionValue(-500);
  const y = useMotionValue(-500);
  const sx = useSpring(x, { stiffness: 120, damping: 20 });
  const sy = useSpring(y, { stiffness: 120, damping: 20 });
  useEffect(() => {
    const move = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [x, y]);
  return <motion.div className="cursor-glow" style={{ x: sx, y: sy }} aria-hidden="true" />;
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <>
      <motion.nav
        className={"nav" + (scrolled ? " scrolled" : "")}
        initial={{ y: -90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease, delay: 0.1 }}
      >
        <div className="wrap nav-inner">
          <a href="#top" className="brand" aria-label="Hasnain UGC home">
            <img src="/images/logo.webp" alt="" width={52} height={52} />
            <span>
              <b>HASNAIN</b>
              <small>UGC CREATOR</small>
            </span>
          </a>
          <div className="nav-links">
            {LINKS.map(([l, h]) => (
              <a key={h} href={h}>
                {l}
              </a>
            ))}
          </div>
          <div className="nav-right">
            <span className="avail">
              <i />
              Booking [Month] projects
            </span>
            <a href="#contact" className="btn btn-primary">
              Book a call
            </a>
            <button className="menu-btn" aria-label="Open menu" onClick={() => setOpen(true)}>
              <Icon d={I.menu} size={20} width={2.2} />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button className="menu-btn close" aria-label="Close menu" onClick={() => setOpen(false)}>
              <Icon d={I.close} size={20} width={2.2} />
            </button>
            {[...LINKS, ["Contact", "#contact"] as const].map(([l, h], i) => (
              <motion.a
                key={h}
                href={h}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 + i * 0.06, duration: 0.5, ease }}
              >
                {l}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
