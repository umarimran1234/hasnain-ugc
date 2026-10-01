"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { ADDONS, BUDGETS, CONTACT, FAQS, NEEDS, PLANS } from "@/lib/data";
import { Icon, I, Reveal, SectionHead, ease, fadeUp, stagger } from "./ui";

export function Packages() {
  const [billing, setBilling] = useState<"project" | "monthly">("project");
  const monthly = billing === "monthly";
  return (
    <section id="packages" className="section alt" style={{ overflow: "hidden" }}>
      <motion.div
        className="glow-blob"
        style={{ width: 500, height: 500, left: "35%", top: 300 }}
        animate={{ opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <div className="wrap" style={{ position: "relative" }}>
        <SectionHead eyebrow="Packages" title="Pick your plan">
          <div className="toggle" role="group" aria-label="Billing">
            {(
              [
                ["project", "Per project"],
                ["monthly", "Monthly retainer"],
              ] as const
            ).map(([k, label]) => (
              <button key={k} type="button" className={billing === k ? "on" : ""} aria-pressed={billing === k} onClick={() => setBilling(k)}>
                {billing === k && <motion.span layoutId="bill-pill" className="pill" transition={{ type: "spring", stiffness: 380, damping: 30 }} />}
                {label}
              </button>
            ))}
          </div>
        </SectionHead>

        <motion.div className="plans" initial="hidden" whileInView="show" viewport={{ once: true, margin: "-60px" }} variants={stagger(0.12)}>
          {PLANS.map((p) => (
            <motion.div
              key={p.id}
              className={"plan" + (p.popular ? " hot" : "")}
              variants={{
                hidden: { opacity: 0, y: 60 },
                show: { opacity: 1, y: p.popular ? -14 : 0, transition: { duration: 0.8, ease } },
              }}
              whileHover={{ y: p.popular ? -22 : -8 }}
            >
              <div className="top">
                <span className="name">{p.name}</span>
                {p.popular && (
                  <motion.span className="tag" animate={{ scale: [1, 1.06, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                    MOST BOOKED
                  </motion.span>
                )}
              </div>
              <div className="price">
                <b>[PRICE]</b>
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span key={billing} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                    {monthly ? "/ month" : "/ project"}
                  </motion.span>
                </AnimatePresence>
              </div>
              <span className="desc">{p.desc}</span>
              <hr />
              <ul>
                {(monthly ? p.monthlyFeat : p.feat).map((f, i) => (
                  <motion.li key={billing + f} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.04 }}>
                    <Icon d={I.check} size={18} stroke={p.popular ? "#FFFFFF" : "#B98CFF"} width={2.8} />
                    {f}
                  </motion.li>
                ))}
              </ul>
              <motion.a href="#contact" className={"btn " + (p.popular ? "btn-primary" : "btn-ghost")} whileTap={{ scale: 0.97 }}>
                {monthly ? "Start retainer" : "Book " + p.name}
              </motion.a>
            </motion.div>
          ))}
        </motion.div>

        <Reveal className="addons" delay={0.1}>
          <span className="label">ADD-ONS</span>
          {ADDONS.map((a) => (
            <span key={a} className="a">
              {a}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="section">
      <div className="wrap about">
        <motion.div
          className="about-art"
          initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 60, damping: 14 }}
        >
          <motion.span className="ring" animate={{ rotate: -360 }} transition={{ duration: 50, repeat: Infinity, ease: "linear" }} />
          <img src="/images/logo.webp" alt="Hasnain UGC logo" />
          <motion.span
            className="note"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            Swap in your photo here
          </motion.span>
        </motion.div>
        <motion.div className="about-copy" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger(0.1)}>
          <motion.div className="eyebrow" variants={fadeUp}>
            About
          </motion.div>
          <motion.h2 className="h2" style={{ marginTop: 0 }} variants={fadeUp}>
            Hi, I&apos;m Hasnain.
          </motion.h2>
          <motion.p variants={fadeUp}>
            I&apos;m a UGC creator and video editor from [City], Pakistan. I make short videos for brands that want ads
            people actually watch: honest reviews, unboxings, demos and voiceovers, edited fast and ready to run.
          </motion.p>
          <motion.p variants={fadeUp}>I work in English and Urdu, with brands in Pakistan and abroad.</motion.p>
          <motion.div variants={fadeUp} style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 6 }}>
            <a href="#contact" className="btn btn-primary">
              Work with me
            </a>
            <a href="#about" className="btn btn-ghost">
              Download media kit
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section className="section alt">
      <div className="wrap faq">
        <Reveal>
          <div className="eyebrow">FAQ</div>
          <h2 className="h2" style={{ fontSize: "clamp(30px, 3.4vw, 46px)" }}>
            Good to know
          </h2>
          <p className="lead" style={{ marginTop: 16 }}>
            Still unsure? Send a message and I&apos;ll reply within one working day.
          </p>
        </Reveal>
        <motion.div className="faq-list" initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger(0.08)}>
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <motion.div key={f.q} className={"faq-item" + (isOpen ? " open" : "")} variants={fadeUp} layout>
                <button type="button" className="faq-q" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? -1 : i)}>
                  {f.q}
                  <motion.span className="sign" animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <Icon d={isOpen ? I.minus : I.plus} size={16} stroke="#FFFFFF" width={2.8} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease }}
                      style={{ overflow: "hidden" }}
                    >
                      <p className="faq-a">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}

export function Contact() {
  const [needs, setNeeds] = useState<string[]>([]);
  const [budget, setBudget] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [sent, setSent] = useState(false);
  const [tried, setTried] = useState(false);
  const ok = needs.length > 0 && !!budget;

  return (
    <section id="contact" className="section" style={{ overflow: "hidden" }}>
      <div className="glow-blob" style={{ width: 500, height: 500, left: -120, top: 200, opacity: 0.22 }} />
      <div className="wrap contact" style={{ position: "relative" }}>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={stagger(0.1)} style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <motion.div className="eyebrow" variants={fadeUp}>
            Let&apos;s work
          </motion.div>
          <motion.h2 className="h2" style={{ marginTop: 0 }} variants={fadeUp}>
            Got a product? Let&apos;s make it go viral.
          </motion.h2>
          <motion.p className="lead" variants={fadeUp}>
            Tell me about your brand and I&apos;ll send ideas and a quote.
          </motion.p>
          <motion.div className="contact-links" variants={fadeUp}>
            <a className="contact-link" href={CONTACT.whatsappLink}>
              <span className="ico">
                <Icon d={I.whatsapp} stroke="#C9A8FF" />
              </span>
              WhatsApp · {CONTACT.whatsapp}
            </a>
            <a className="contact-link" href={CONTACT.instagramLink}>
              <span className="ico">
                <Icon d={I.insta} stroke="#C9A8FF" />
              </span>
              Instagram · {CONTACT.instagram}
            </a>
            <a className="contact-link" href={"mailto:" + CONTACT.email}>
              <span className="ico">
                <Icon d={I.mail} stroke="#C9A8FF" />
              </span>
              {CONTACT.email}
            </a>
          </motion.div>
        </motion.div>

        <Reveal className="form-card" delay={0.15}>
          <AnimatePresence mode="wait">
            {!sent ? (
              <motion.form
                key="form"
                className="form"
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
                onSubmit={(e) => {
                  e.preventDefault();
                  if (ok) setSent(true);
                  else setTried(true);
                }}
              >
                <div className="fields">
                  <label className="field">
                    Your name
                    <input type="text" placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} />
                  </label>
                  <label className="field">
                    Brand / website
                    <input type="text" placeholder="yourbrand.com" />
                  </label>
                  <label className="field">
                    Email
                    <input type="email" placeholder="you@brand.com" />
                  </label>
                  <label className="field">
                    WhatsApp (optional)
                    <input type="tel" placeholder="+92 3XX XXXXXXX" />
                  </label>
                </div>
                <div>
                  <span className="group-label">
                    What do you need? <em>(pick any)</em>
                  </span>
                  <div className="pick-row">
                    {NEEDS.map((n) => {
                      const on = needs.includes(n);
                      return (
                        <motion.button
                          key={n}
                          type="button"
                          className={"pick" + (on ? " on" : "")}
                          aria-pressed={on}
                          whileTap={{ scale: 0.92 }}
                          onClick={() => setNeeds(on ? needs.filter((x) => x !== n) : [...needs, n])}
                        >
                          {n}
                        </motion.button>
                      );
                    })}
                  </div>
                </div>
                <div>
                  <span className="group-label">Budget per month</span>
                  <div className="pick-row">
                    {BUDGETS.map((b) => (
                      <motion.button
                        key={b}
                        type="button"
                        className={"pick" + (budget === b ? " on" : "")}
                        aria-pressed={budget === b}
                        whileTap={{ scale: 0.92 }}
                        onClick={() => setBudget(b)}
                      >
                        {b}
                      </motion.button>
                    ))}
                  </div>
                </div>
                <label className="field">
                  Tell me about the product
                  <textarea placeholder="What is it, who is it for, and where will the videos run?" />
                </label>
                <div className="form-foot">
                  <motion.button type="submit" className="btn btn-primary" whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                    Send brief
                    <Icon d={I.arrow} size={18} stroke="#FFFFFF" width={2.6} />
                  </motion.button>
                  <AnimatePresence>
                    {tried && !ok && (
                      <motion.span
                        role="alert"
                        className="err"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: [0, -6, 6, -4, 4, 0] }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4 }}
                      >
                        Pick at least one service and a budget.
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>
              </motion.form>
            ) : (
              <motion.div key="sent" className="sent" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ type: "spring", stiffness: 120, damping: 14 }}>
                <motion.img src="/images/logo.webp" alt="" initial={{ rotate: -180, scale: 0 }} animate={{ rotate: 0, scale: 1 }} transition={{ type: "spring", stiffness: 90, damping: 12, delay: 0.1 }} />
                <h3>Brief received{name.trim() ? ", " + name.trim().split(" ")[0] : ""}!</h3>
                <p>
                  You asked for <b>{needs.join(", ").toLowerCase()}</b> with a budget of <b>{budget}</b>. I&apos;ll reply with
                  hook ideas and a quote within one working day.
                </p>
                <button
                  type="button"
                  className="btn btn-ghost"
                  onClick={() => {
                    setSent(false);
                    setTried(false);
                    setNeeds([]);
                    setBudget(null);
                    setName("");
                  }}
                >
                  Send another brief
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <motion.span
            className="footer-word"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease }}
          >
            Hasnain <span>UGC</span>
          </motion.span>
          <div className="footer-links">
            <a href="#work">Work</a>
            <a href="#packages">Packages</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Hasnain UGC · All videos shown with brand permission</span>
          <span>Instagram · TikTok · LinkedIn</span>
        </div>
      </div>
    </footer>
  );
}
