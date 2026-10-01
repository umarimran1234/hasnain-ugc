"use client";

import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { CATS, WORK, type WorkItem } from "@/lib/data";
import { Icon, I, SectionHead, ease } from "./ui";

function fmt(s: number) {
  return Math.floor(s / 60) + ":" + String(Math.floor(s % 60)).padStart(2, "0");
}

function Card({ w, playing, onToggle, i }: { w: WorkItem; playing: boolean; onToggle: () => void; i: number }) {
  const [t, setT] = useState(0);
  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => setT((v) => (v + 0.1 >= w.seconds ? 0 : v + 0.1)), 100);
    return () => clearInterval(id);
  }, [playing, w.seconds]);
  useEffect(() => {
    if (!playing) setT(0);
  }, [playing]);

  return (
    <motion.div
      layout
      className={"card" + (playing ? " playing" : "")}
      initial={{ opacity: 0, y: 40, scale: 0.94 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.25 } }}
      transition={{ duration: 0.6, ease, delay: i * 0.05 }}
      whileHover={{ y: -8 }}
    >
      <motion.div className="media" animate={{ scale: playing ? 1.12 : 1 }} transition={{ duration: playing ? w.seconds : 0.6, ease: "linear" }}>
        <img src={w.img} alt={w.alt} loading="lazy" />
      </motion.div>
      <div className="scrim" />
      <span className="type">{w.type}</span>
      <span className="dur">{playing ? fmt(t) + " / " + w.dur : w.dur}</span>
      <AnimatePresence>
        {playing && (
          <motion.span className="eq" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            {[0, 1, 2, 3].map((k) => (
              <motion.i
                key={k}
                animate={{ height: ["30%", "100%", "45%", "80%", "30%"] }}
                transition={{ duration: 0.9, repeat: Infinity, delay: k * 0.12 }}
              />
            ))}
          </motion.span>
        )}
      </AnimatePresence>
      <motion.button
        type="button"
        className="play"
        onClick={onToggle}
        aria-label={(playing ? "Pause " : "Play ") + w.hook}
        whileHover={{ scale: 1.12 }}
        whileTap={{ scale: 0.9 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={playing ? "pause" : "play"}
            initial={{ scale: 0, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 90 }}
            transition={{ duration: 0.2 }}
            style={{ display: "flex" }}
          >
            <Icon d={playing ? I.pause : I.play} size={26} fill="#FFFFFF" />
          </motion.span>
        </AnimatePresence>
      </motion.button>
      <div className="meta">
        <small>[Brand] · {w.cat}</small>
        <b>“{w.hook}”</b>
        <span className="bar">
          <i style={{ width: (t / w.seconds) * 100 + "%" }} />
        </span>
      </div>
    </motion.div>
  );
}

export default function Work() {
  const [cat, setCat] = useState("All");
  const [playing, setPlaying] = useState<string | null>(null);
  const list = cat === "All" ? WORK.slice(0, 8) : WORK.filter((w) => w.cat === cat);

  return (
    <section id="work" className="section alt" style={{ borderTop: "1px solid #1E1533" }}>
      <div className="wrap">
        <SectionHead eyebrow="Portfolio" title="Recent UGC work">
          <p className="lead">
            Press play on any video. Each one is shot vertically and edited with its own hook, captions and call to
            action.
          </p>
        </SectionHead>

        <motion.div
          className="filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease, delay: 0.2 }}
        >
          {CATS.map((c) => {
            const on = c === cat;
            const count = c === "All" ? 8 : WORK.filter((w) => w.cat === c).length;
            return (
              <motion.button
                key={c}
                type="button"
                className={"filter" + (on ? " on" : "")}
                aria-pressed={on}
                onClick={() => {
                  setCat(c);
                  setPlaying(null);
                }}
                whileTap={{ scale: 0.95 }}
              >
                {on && <motion.span layoutId="filter-pill" className="pill" transition={{ type: "spring", stiffness: 380, damping: 30 }} />}
                {c}
                <span className="count">{count}</span>
              </motion.button>
            );
          })}
        </motion.div>

        <motion.div layout className="work-grid">
          <AnimatePresence mode="popLayout">
            {list.map((w, i) => (
              <Card
                key={w.id}
                w={w}
                i={i}
                playing={playing === w.id}
                onToggle={() => setPlaying(playing === w.id ? null : w.id)}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
