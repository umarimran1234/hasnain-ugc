"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { MARQUEE, NICHES, PROCESS, SERVICES, TOOLS, WHY } from "@/lib/data";
import { Icon, I, Reveal, SectionHead, ease, fadeUp, stagger } from "./ui";

export function Marquee() {
  const group = (k: string) => (
    <div className="marquee-group" key={k} aria-hidden={k === "b"}>
      {MARQUEE.map((m) => (
        <span key={m} style={{ display: "flex", alignItems: "center", gap: 30 }}>
          {m}
          <Icon d={I.star} size={22} fill="#07050D" />
        </span>
      ))}
    </div>
  );
  return (
    <div className="marquee-clip">
      <motion.div
        className="marquee"
        initial={{ opacity: 0, rotate: -6 }}
        whileInView={{ opacity: 1, rotate: -1.2 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease }}
      >
        <div className="marquee-track">
          {group("a")}
          {group("b")}
        </div>
      </motion.div>
    </div>
  );
}

export function Niches() {
  return (
    <div className="wrap niches">
      <Reveal className="group">
        <span className="label">I CREATE FOR</span>
        <motion.div className="row" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger(0.07)}>
          {NICHES.map((n) => (
            <motion.span key={n} className="chip" variants={fadeUp} whileHover={{ y: -3, borderColor: "#8A3BFF" }}>
              {n}
            </motion.span>
          ))}
        </motion.div>
      </Reveal>
      <Reveal className="group" delay={0.15}>
        <span className="label">BRANDS I&apos;VE MADE CONTENT FOR</span>
        <div className="row">
          {[1, 2, 3, 4].map((n) => (
            <span key={n} className="brand-slot">
              [BRAND]
            </span>
          ))}
        </div>
      </Reveal>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="section">
      <div className="wrap">
        <SectionHead eyebrow="Services" title="Everything your ad needs">
          <a href="#packages" style={{ fontSize: 17, fontWeight: 800, color: "#C9A8FF" }}>
            Compare packages →
          </a>
        </SectionHead>
        <motion.div
          className="services-grid"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger(0.08)}
        >
          {SERVICES.map((s) => (
            <motion.div
              key={s.title}
              className="svc"
              variants={fadeUp}
              whileHover={{ y: -6 }}
              onPointerMove={(e) => {
                const r = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty("--mx", e.clientX - r.left + "px");
                e.currentTarget.style.setProperty("--my", e.clientY - r.top + "px");
              }}
            >
              <motion.span className="ico" whileHover={{ rotate: -8, scale: 1.08 }}>
                <Icon d={s.icon} size={26} stroke="#C9A8FF" />
              </motion.span>
              <b>{s.title}</b>
              <span>{s.text}</span>
            </motion.div>
          ))}
        </motion.div>
        <Reveal className="tools" delay={0.1}>
          <span className="label">EDITED IN</span>
          {TOOLS.map((t) => (
            <span key={t} className="tool">
              {t}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export function Why() {
  return (
    <section className="section alt">
      <div className="wrap why">
        <Reveal>
          <div className="eyebrow">Why it works</div>
          <h2 className="h2" style={{ fontSize: "clamp(30px, 3.4vw, 46px)" }}>
            People trust people, not banners.
          </h2>
          <motion.span
            className="script"
            style={{ fontSize: 32, marginTop: 18 }}
            initial={{ opacity: 0, rotate: -10 }}
            whileInView={{ opacity: 1, rotate: -3 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120, damping: 12, delay: 0.3 }}
          >
            so I make ads that don&apos;t look like ads
          </motion.span>
        </Reveal>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} variants={stagger(0.15)}>
          {WHY.map((w) => (
            <motion.div key={w.n} className="why-row" variants={fadeUp}>
              <motion.span
                className="num"
                variants={{ hidden: { opacity: 0, scale: 0.4 }, show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 160, damping: 12 } } }}
              >
                {w.n}
              </motion.span>
              <div>
                <b>{w.title}</b>
                <span>{w.text}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 55%"] });
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <section id="process" className="section">
      <div className="wrap">
        <SectionHead eyebrow="Process" title="From brief to posted" />
        <motion.div
          ref={ref}
          className="process"
          style={{ marginTop: 72 }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          variants={stagger(0.12)}
        >
          <span className="process-line">
            <motion.i style={{ scaleX }} />
          </span>
          {PROCESS.map((p, i) => (
            <motion.div key={p.n} className={"step" + (i === PROCESS.length - 1 ? " last" : "")} variants={fadeUp} whileHover={{ y: -6 }}>
              <span className="n">{p.n}</span>
              <b>{p.title}</b>
              <span>{p.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
