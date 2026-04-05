import { useEffect, useRef, useState } from "react";
import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";

/* ── Styles ─────────────────────────────────────────────────────── */
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,500&family=DM+Sans:wght@300;400;500;600&display=swap');

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeLeft {
    from { opacity: 0; transform: translateX(-24px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes fadeRight {
    from { opacity: 0; transform: translateX(24px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes countUp {
    from { opacity: 0; transform: translateY(10px) scale(0.9); }
    to   { opacity: 1; transform: translateY(0) scale(1); }
  }
  @keyframes lineGrow {
    from { width: 0; }
    to   { width: 100%; }
  }
  @keyframes shimmer {
    0%   { background-position: -300% center; }
    100% { background-position: 300% center; }
  }
  @keyframes chipPop {
    from { opacity: 0; transform: scale(0.85); }
    to   { opacity: 1; transform: scale(1); }
  }
  @keyframes dotBounce {
    0%,100% { transform: translateY(0); }
    50%      { transform: translateY(-4px); }
  }

  .about-main-card {
    background: #fffcf5;
    border: 1px solid rgba(212,175,55,0.2);
    border-left: 4px solid #D4AF37;
    border-radius: 16px;
    padding: clamp(24px, 4vw, 40px);
    box-shadow: 0 4px 24px rgba(13,33,80,0.06);
    transition: box-shadow 0.4s ease, transform 0.4s ease;
    height: 100%;
  }
  .about-main-card:hover {
    box-shadow: 0 12px 40px rgba(13,33,80,0.10);
    transform: translateY(-2px);
  }

  .about-glance-box {
    background: rgba(255,252,245,0.08);
    border: 1px solid rgba(212,175,55,0.2);
    border-radius: 12px;
    padding: 14px 8px;
    text-align: center;
    backdrop-filter: blur(8px);
    transition: background 0.3s, border-color 0.3s;
    cursor: default;
  }
  .about-glance-box:hover {
    background: rgba(212,175,55,0.12);
    border-color: rgba(212,175,55,0.5);
  }

  .about-outcome-item {
    display: flex;
    align-items: flex-start;
    gap: 14px;
    padding: 14px 0;
    border-bottom: 1px solid rgba(212,175,55,0.1);
    transition: padding-left 0.3s ease;
    cursor: default;
  }
  .about-outcome-item:last-child { border-bottom: none; }
  .about-outcome-item:hover { padding-left: 6px; }

  .about-chip {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 6px 14px;
    border-radius: 99px;
    font-family: 'DM Sans', sans-serif;
    font-size: 11px;
    font-weight: 600;
    background: rgba(212,175,55,0.08);
    border: 1px solid rgba(212,175,55,0.3);
    color: #9a7a20;
    letter-spacing: 0.02em;
    transition: background 0.25s, border-color 0.25s, color 0.25s;
    opacity: 0;
  }
  .about-chip:hover {
    background: rgba(212,175,55,0.16);
    border-color: #D4AF37;
    color: #7a5e10;
  }
  .about-chip.visible {
    animation: chipPop 0.4s ease forwards;
  }

  .gold-shimmer-text {
    background: linear-gradient(
      105deg,
      #0D2150 0%, #0D2150 30%,
      #D4AF37 50%,
      #0D2150 70%, #0D2150 100%
    );
    background-size: 300% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: shimmer 5s linear infinite;
  }

  .stat-counter {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(32px, 5vw, 48px);
    font-weight: 700;
    color: #D4AF37;
    line-height: 1;
    opacity: 0;
  }
  .stat-counter.visible {
    animation: countUp 0.6s cubic-bezier(0.22,1,0.36,1) forwards;
  }

  .about-step {
    display: flex;
    gap: 16px;
    align-items: flex-start;
    opacity: 0;
  }
  .about-step.visible {
    animation: fadeUp 0.55s cubic-bezier(0.22,1,0.36,1) forwards;
  }
  .step-dot {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 2px solid rgba(212,175,55,0.4);
    background: rgba(212,175,55,0.06);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Cormorant Garamond', serif;
    font-size: 16px;
    font-weight: 700;
    color: #D4AF37;
    flex-shrink: 0;
    margin-top: 2px;
    transition: background 0.3s, border-color 0.3s;
  }
  .about-step:hover .step-dot {
    background: rgba(212,175,55,0.15);
    border-color: #D4AF37;
  }
  .step-connector {
    width: 2px;
    background: linear-gradient(180deg, rgba(212,175,55,0.4), rgba(212,175,55,0.1));
    margin: 4px auto;
    flex-shrink: 0;
    height: 28px;
  }
`;

let injected = false;
function injectStyles() {
  if (injected) return;
  const tag = document.createElement("style");
  tag.textContent = styles;
  document.head.appendChild(tag);
  injected = true;
}

/* ── Scroll reveal hook ──────────────────────────────────────────── */
function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    injectStyles();
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

/* ── Animated counter ────────────────────────────────────────────── */
function AnimatedCount({ to, suffix = "" }) {
  const [ref, visible] = useReveal(0.3);
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const step = Math.ceil(to / 40);
    const id = setInterval(() => {
      start += step;
      if (start >= to) { setVal(to); clearInterval(id); }
      else setVal(start);
    }, 30);
    return () => clearInterval(id);
  }, [visible, to]);
  return (
    <span ref={ref} className={`stat-counter ${visible ? "visible" : ""}`}>
      {val}{suffix}
    </span>
  );
}

/* ── Main component ──────────────────────────────────────────────── */
export default function AboutRelay() {
  const [leftRef, leftVisible] = useReveal(0.1);
  const [rightRef, rightVisible] = useReveal(0.1);

  const chips = ["Linked problem chain", "Every student's answer matters", "Balanced speed & depth"];
  const outcomes = [
    {
      icon: "⚡",
      title: "Agility in Thinking",
      desc: "Move quickly from understanding to execution without losing accuracy.",
      color: "#1A3A6A",
      bg: "rgba(26,58,106,0.07)",
    },
    {
      icon: "🤝",
      title: "Collaborative Learning",
      desc: "Team decisions and corrections build communication and accountability skills.",
      color: "#0a6640",
      bg: "rgba(10,102,64,0.07)",
    },
    {
      icon: "🏆",
      title: "Competitive Spirit",
      desc: "Motivates students to perform under healthy, structured competition.",
      color: "#9a7a20",
      bg: "rgba(212,175,55,0.08)",
    },
  ];

  const steps = [
    { n: "1", title: "Student 1 solves", desc: "Receives the base problem, works under time pressure." },
    { n: "2", title: "Output becomes Input", desc: "Student 1's answer is passed directly as the starting value for Student 2." },
    { n: "3", title: "Chain completes", desc: "Student 3 receives the final linked problem — a wrong answer anywhere breaks the chain." },
  ];

  return (
    <Section id="about" background="white" className="py-0 md:py-0 lg:py-0">
      <div style={{ padding: "clamp(48px, 7vw, 88px) 0" }}>

        {/* Header */}
        <SectionHeader
          eyebrow="About the Relay"
          title="What is Vishwaroop International Relay?"
          highlight={["Vishwaroop", "International Relay"]}
          subtitle="A carefully designed, team-based academic relay where three students solve linked problems in sequence — combining speed, logic, and collaboration."
          align="left"
        />

        {/* Stats row */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: 16,
          marginBottom: "clamp(40px, 6vw, 64px)",
        }}>
          {[
            { val: 3,   suffix: "",   label: "Students per team" },
            { val: 30,  suffix: " min", label: "Maximum relay time" },
            { val: 6,   suffix: "–12", label: "Classes eligible" },
            { val: 100, suffix: "%",  label: "Online & accessible" },
          ].map(({ val, suffix, label }) => (
            <div
              key={label}
              style={{
                background: "#fffcf5",
                border: "1px solid rgba(212,175,55,0.2)",
                borderRadius: 14,
                padding: "20px 16px",
                display: "flex",
                flexDirection: "column",
                gap: 6,
              }}
            >
              <AnimatedCount to={val} suffix={suffix} />
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 12,
                color: "#5a6a8a",
                fontWeight: 500,
                letterSpacing: "0.02em",
              }}>
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Grid */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
          gap: "clamp(20px, 3vw, 32px)",
          alignItems: "start",
        }}>

          {/* ── LEFT: Main explanation ── */}
          <div
            ref={leftRef}
            style={{
              opacity: 0,
              animation: leftVisible ? "fadeLeft 0.65s cubic-bezier(0.22,1,0.36,1) forwards" : "none",
            }}
          >
            <div className="about-main-card">
              <h3 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(20px, 3vw, 26px)",
                fontWeight: 700,
                color: "#0D2150",
                marginBottom: 20,
                lineHeight: 1.2,
              }}>
                Where knowledge meets{" "}
                <span className="gold-shimmer-text">teamwork.</span>
              </h3>

              <div style={{
                display: "flex",
                flexDirection: "column",
                gap: 14,
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 15,
                lineHeight: 1.75,
                color: "#5a6a8a",
                fontWeight: 300,
                marginBottom: 28,
              }}>
                <p>
                  In traditional Olympiads, students compete as individuals. In{" "}
                  <strong style={{ color: "#0D2150", fontWeight: 600 }}>Vishwaroop Relay</strong>,
                  they compete as a{" "}
                  <strong style={{ color: "#0D2150", fontWeight: 600 }}>tightly connected team</strong>.
                  Each member receives a problem that depends on the previous answer, creating a logical chain.
                </p>
                <p>
                  If any link in the chain is incorrect, the entire team's answers collapse. This encourages
                  deeper understanding instead of guesswork, and builds real{" "}
                  <strong style={{ color: "#0D2150", fontWeight: 600 }}>accountability and trust</strong>.
                </p>
                <p>
                  The relay blends{" "}
                  <em style={{ color: "#4a5a7a" }}>academic rigour, time-bound execution,</em> and{" "}
                  <em style={{ color: "#4a5a7a" }}>structured teamwork</em> — preparing participants for
                  higher studies and professional environments.
                </p>
              </div>

              {/* Chips */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {chips.map((chip, i) => (
                  <span
                    key={chip}
                    className={`about-chip ${leftVisible ? "visible" : ""}`}
                    style={{ animationDelay: `${0.4 + i * 0.1}s` }}
                  >
                    <span style={{ color: "#D4AF37", fontSize: 10 }}>✦</span>
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT: Glance + Outcomes ── */}
          <div
            ref={rightRef}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 20,
              opacity: 0,
              animation: rightVisible ? "fadeRight 0.65s cubic-bezier(0.22,1,0.36,1) 0.15s forwards" : "none",
            }}
          >
            {/* Relay at a Glance */}
            <div style={{
              background: "linear-gradient(145deg, #0D2150 0%, #071530 100%)",
              borderRadius: 18,
              padding: "clamp(20px, 3vw, 32px)",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 16px 48px rgba(13,33,80,0.25)",
              border: "1px solid rgba(212,175,55,0.2)",
            }}>
              {/* Gold top shimmer */}
              <div style={{
                position: "absolute", top: 0, left: "15%", right: "15%",
                height: 2,
                background: "linear-gradient(90deg, transparent, #D4AF37, transparent)",
              }} />
              {/* Ambient blob */}
              <div style={{
                position: "absolute", top: -40, right: -40,
                width: 160, height: 160, borderRadius: "50%",
                background: "radial-gradient(circle, rgba(212,175,55,0.12), transparent)",
                pointerEvents: "none",
              }} />

              <h4 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 20,
                fontWeight: 700,
                color: "#fffcf5",
                marginBottom: 8,
                position: "relative", zIndex: 1,
              }}>
                Relay at a Glance
              </h4>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 13,
                color: "rgba(255,252,245,0.55)",
                marginBottom: 20,
                position: "relative", zIndex: 1,
                lineHeight: 1.6,
              }}>
                Vishwaroop moves beyond typical Olympiads with a{" "}
                <span style={{ color: "#D4AF37", fontWeight: 600 }}>linked question chain</span>.
              </p>

              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 8,
                position: "relative", zIndex: 1,
              }}>
                {[
                  { label: "Format", value: "3 Students", sub: "Team-based" },
                  { label: "Flow",   value: "Linked",     sub: "Output → Input" },
                  { label: "Focus",  value: "Logic",      sub: "Time Pressure" },
                ].map(({ label, value, sub }) => (
                  <div key={label} className="about-glance-box">
                    <div style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(212,175,55,0.55)", marginBottom: 6, fontFamily: "'DM Sans', sans-serif", fontWeight: 600 }}>
                      {label}
                    </div>
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, fontWeight: 700, color: "#D4AF37", lineHeight: 1 }}>
                      {value}
                    </div>
                    <div style={{ fontSize: 9, color: "rgba(255,252,245,0.4)", marginTop: 4, fontFamily: "'DM Sans', sans-serif" }}>
                      {sub}
                    </div>
                  </div>
                ))}
              </div>

              {/* Step chain */}
              <div style={{ marginTop: 24, position: "relative", zIndex: 1 }}>
                <div style={{
                  fontSize: 10, fontWeight: 700, letterSpacing: "0.14em",
                  textTransform: "uppercase", color: "rgba(212,175,55,0.45)",
                  fontFamily: "'DM Sans', sans-serif", marginBottom: 14,
                }}>
                  How it flows
                </div>
                {steps.map((step, i) => (
                  <div key={step.n}>
                    <div
                      className={`about-step ${rightVisible ? "visible" : ""}`}
                      style={{ animationDelay: `${0.3 + i * 0.15}s` }}
                    >
                      <div className="step-dot">{step.n}</div>
                      <div style={{ paddingTop: 6 }}>
                        <div style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: 13, fontWeight: 600,
                          color: "#fffcf5", marginBottom: 2,
                        }}>
                          {step.title}
                        </div>
                        <div style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: 12, color: "rgba(255,252,245,0.45)",
                          lineHeight: 1.5,
                        }}>
                          {step.desc}
                        </div>
                      </div>
                    </div>
                    {i < steps.length - 1 && (
                      <div style={{ display: "flex", paddingLeft: 17 }}>
                        <div className="step-connector" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Core Outcomes */}
            <div style={{
              background: "#fffcf5",
              border: "1px solid rgba(212,175,55,0.18)",
              borderRadius: 18,
              padding: "clamp(20px, 3vw, 28px)",
              boxShadow: "0 4px 20px rgba(13,33,80,0.05)",
            }}>
              <h4 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 22,
                fontWeight: 700,
                color: "#0D2150",
                marginBottom: 4,
              }}>
                Core Outcomes
              </h4>
              <div style={{
                width: 32, height: 2,
                background: "linear-gradient(90deg, #D4AF37, rgba(212,175,55,0.3))",
                borderRadius: 2, marginBottom: 20,
              }} />
              <div>
                {outcomes.map(({ icon, title, desc, color, bg }) => (
                  <div key={title} className="about-outcome-item">
                    <div style={{
                      width: 36, height: 36, borderRadius: 10,
                      background: bg, border: `1px solid ${color}22`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 16, flexShrink: 0,
                    }}>
                      {icon}
                    </div>
                    <div>
                      <div style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 14, fontWeight: 600,
                        color: "#0D2150", marginBottom: 3,
                      }}>
                        {title}
                      </div>
                      <div style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: 12, color: "#7a8aaa",
                        lineHeight: 1.6, fontWeight: 300,
                      }}>
                        {desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}