import { useEffect, useRef, useState } from "react";
import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";

/* ── Styles ─────────────────────────────────────────────────────── */
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,500&family=DM+Sans:wght@300;400;500;600&display=swap');

  @keyframes rfFadeUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes rfFadeLeft {
    from { opacity: 0; transform: translateX(-24px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes rfFadeRight {
    from { opacity: 0; transform: translateX(24px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes rfShimmer {
    0%   { background-position: -300% center; }
    100% { background-position: 300% center; }
  }
  @keyframes rfLineGrow {
    from { height: 0; opacity: 0; }
    to   { height: 100%; opacity: 1; }
  }
  @keyframes rfNumberPop {
    0%   { transform: scale(0.7) rotate(-8deg); opacity: 0; }
    60%  { transform: scale(1.12) rotate(2deg); opacity: 1; }
    100% { transform: scale(1) rotate(0); opacity: 1; }
  }
  @keyframes rfPulseGold {
    0%,100% { box-shadow: 0 0 0 0 rgba(212,175,55,0); }
    50%      { box-shadow: 0 0 20px 5px rgba(212,175,55,0.25); }
  }
  @keyframes rfChainFlow {
    0%   { stroke-dashoffset: 100; opacity: 0.3; }
    100% { stroke-dashoffset: 0;   opacity: 1; }
  }
  @keyframes rfBadgePop {
    from { opacity: 0; transform: scale(0.85) translateY(8px); }
    to   { opacity: 1; transform: scale(1) translateY(0); }
  }

  .rf-left-card {
    background: #fffcf5;
    border: 1px solid rgba(212,175,55,0.2);
    border-radius: 20px;
    padding: clamp(28px, 4vw, 44px);
    position: relative;
    overflow: hidden;
    box-shadow: 0 4px 28px rgba(13,33,80,0.07);
    opacity: 0;
    transition: box-shadow 0.4s ease;
  }
  .rf-left-card.visible {
    animation: rfFadeLeft 0.65s cubic-bezier(0.22,1,0.36,1) forwards;
  }
  .rf-left-card:hover {
    box-shadow: 0 12px 48px rgba(13,33,80,0.12);
  }

  .rf-step {
    display: flex;
    gap: 20px;
    align-items: flex-start;
    position: relative;
    opacity: 0;
  }
  .rf-step.visible {
    animation: rfFadeUp 0.55s cubic-bezier(0.22,1,0.36,1) forwards;
  }

  .rf-step-num {
    width: 52px;
    height: 52px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: 'Cormorant Garamond', serif;
    font-size: 22px;
    font-weight: 700;
    flex-shrink: 0;
    position: relative;
    z-index: 1;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    opacity: 0;
  }
  .rf-step-num.visible {
    animation: rfNumberPop 0.5s cubic-bezier(0.22,1,0.36,1) forwards;
  }
  .rf-step:hover .rf-step-num {
    transform: scale(1.1);
  }

  .rf-connector {
    width: 2px;
    margin: 0 auto;
    background: linear-gradient(180deg, rgba(212,175,55,0.6), rgba(212,175,55,0.15));
    border-radius: 2px;
    overflow: hidden;
    flex-shrink: 0;
    opacity: 0;
    height: 0;
  }
  .rf-connector.visible {
    animation: rfLineGrow 0.5s ease forwards;
  }

  .rf-step-content {
    flex: 1;
    padding-top: 10px;
    transition: padding-left 0.3s ease;
  }
  .rf-step:hover .rf-step-content { padding-left: 4px; }

  .rf-step-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: 19px;
    font-weight: 700;
    color: #0D2150;
    margin: 0 0 6px;
    transition: color 0.3s;
  }
  .rf-step:hover .rf-step-title { color: #D4AF37; }

  .rf-step-desc {
    font-family: 'DM Sans', sans-serif;
    font-size: 13.5px;
    color: #5a6a8a;
    line-height: 1.65;
    font-weight: 300;
    margin: 0;
  }

  .rf-info-card {
    background: #fffcf5;
    border: 1px solid rgba(212,175,55,0.18);
    border-radius: 18px;
    padding: clamp(22px, 3vw, 32px);
    opacity: 0;
    transition: box-shadow 0.4s, transform 0.4s;
    box-shadow: 0 2px 16px rgba(13,33,80,0.05);
  }
  .rf-info-card.visible {
    animation: rfFadeRight 0.6s cubic-bezier(0.22,1,0.36,1) forwards;
  }
  .rf-info-card:hover {
    box-shadow: 0 10px 36px rgba(13,33,80,0.1);
    transform: translateY(-3px);
  }

  .rf-info-row {
    display: flex;
    align-items: flex-start;
    gap: 14px;
    padding: 14px 0;
    border-bottom: 1px solid rgba(212,175,55,0.1);
    transition: padding-left 0.3s ease;
    cursor: default;
  }
  .rf-info-row:last-child { border-bottom: none; }
  .rf-info-row:hover { padding-left: 6px; }

  .rf-icon-box {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    flex-shrink: 0;
    transition: transform 0.3s, box-shadow 0.3s;
  }
  .rf-info-row:hover .rf-icon-box {
    transform: scale(1.1) rotate(-3deg);
  }

  .rf-bullet {
    display: flex;
    align-items: flex-start;
    gap: 12px;
    padding: 10px 0;
    font-family: 'DM Sans', sans-serif;
    font-size: 13.5px;
    color: #5a6a8a;
    line-height: 1.6;
    border-bottom: 1px solid rgba(212,175,55,0.08);
    transition: padding-left 0.3s;
    cursor: default;
  }
  .rf-bullet:last-child { border-bottom: none; }
  .rf-bullet:hover { padding-left: 6px; color: #0D2150; }

  .rf-bullet-dot {
    width: 22px;
    height: 22px;
    border-radius: 50%;
    background: linear-gradient(135deg, #D4AF37, #f5d97a);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-top: 1px;
    font-size: 10px;
    color: #0D2150;
    font-weight: 700;
    box-shadow: 0 2px 8px rgba(212,175,55,0.3);
    transition: transform 0.3s;
  }
  .rf-bullet:hover .rf-bullet-dot { transform: scale(1.15); }

  .rf-shimmer-text {
    background: linear-gradient(105deg, #0D2150 0%, #0D2150 30%, #D4AF37 50%, #0D2150 70%, #0D2150 100%);
    background-size: 300% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: rfShimmer 5s linear infinite;
  }

  .rf-quote-box {
    margin-top: 28px;
    padding: 18px 20px;
    border-radius: 14px;
    background: rgba(212,175,55,0.04);
    border: 1px solid rgba(212,175,55,0.18);
    border-left: 3px solid #D4AF37;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    font-style: italic;
    color: #5a6a8a;
    line-height: 1.7;
    position: relative;
  }
  .rf-quote-box::before {
    content: '"';
    font-family: 'Cormorant Garamond', serif;
    font-size: 48px;
    color: rgba(212,175,55,0.25);
    position: absolute;
    top: -8px;
    left: 12px;
    line-height: 1;
  }

  .rf-badge {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 5px 14px;
    border-radius: 99px;
    font-family: 'DM Sans', sans-serif;
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    background: rgba(212,175,55,0.08);
    border: 1px solid rgba(212,175,55,0.28);
    color: #9a7a20;
    opacity: 0;
  }
  .rf-badge.visible {
    animation: rfBadgePop 0.4s ease forwards;
  }
`;

let injected = false;
function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!injected) {
      const tag = document.createElement("style");
      tag.textContent = styles;
      document.head.appendChild(tag);
      injected = true;
    }
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

/* ── Steps data ─────────────────────────────────────────────────── */
const steps = [
  {
    num: "01",
    title: "First Member",
    desc: "Solves the initial problem independently and produces the base value — the foundation the entire team builds upon.",
    bg: "linear-gradient(135deg, #D4AF37, #f0d060)",
    color: "#0D2150",
    shadow: "0 6px 20px rgba(212,175,55,0.4)",
  },
  {
    num: "02",
    title: "Second Member",
    desc: "Receives the first member's output as the starting value and progresses the logical chain forward.",
    bg: "linear-gradient(135deg, #1A3A6A, #2a5499)",
    color: "#fffcf5",
    shadow: "0 6px 20px rgba(26,58,106,0.4)",
  },
  {
    num: "03",
    title: "Third Member",
    desc: "Resolves the final stage using the chain result and submits the team's concluding answer.",
    bg: "linear-gradient(135deg, #0D2150, #071530)",
    color: "#D4AF37",
    shadow: "0 6px 20px rgba(13,33,80,0.5)",
  },
];

const infoRows = [
  {
    icon: "⏱",
    label: "Time per relay round",
    value: "Maximum 30 minutes",
    bg: "rgba(212,175,55,0.08)",
    border: "rgba(212,175,55,0.2)",
  },
  {
    icon: "✦",
    label: "Primary criteria",
    value: "Accuracy of solutions",
    bg: "rgba(26,58,106,0.07)",
    border: "rgba(26,58,106,0.15)",
  },
  {
    icon: "⚡",
    label: "Secondary criteria",
    value: "Time efficiency & smart completion",
    bg: "rgba(10,102,64,0.07)",
    border: "rgba(10,102,64,0.12)",
  },
];

const bullets = [
  "Multiple relay rounds may be conducted for different levels.",
  "Rules remain consistent across all teams to ensure fairness.",
  "Detailed round-wise instructions are shared before the event.",
];

/* ── Main export ─────────────────────────────────────────────────── */
export default function RulesFormat() {
  const [leftRef, leftVisible] = useReveal(0.1);
  const [rightRef, rightVisible] = useReveal(0.1);
  const [stepsRef, stepsVisible] = useReveal(0.15);

  return (
    <Section id="rules" background="white" className="py-0">
      <div style={{ padding: "clamp(48px, 7vw, 88px) 0" }}>

        <SectionHeader
          eyebrow="Rules & Format"
          title="How Does the Relay Work?"
          highlight={["Relay"]}
          subtitle="Each relay is conducted under clear, transparent rules to ensure fairness while preserving competitive rigour."
          align="left"
        />

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 340px), 1fr))",
          gap: "clamp(18px, 3vw, 32px)",
          alignItems: "start",
        }}>

          {/* ── LEFT: Relay chain ── */}
          <div
            ref={leftRef}
            className={`rf-left-card ${leftVisible ? "visible" : ""}`}
          >
            {/* Gold top shimmer */}
            <div style={{
              position: "absolute", top: 0, left: "15%", right: "15%",
              height: 2,
              background: "linear-gradient(90deg, transparent, #D4AF37, transparent)",
            }} />

            {/* Ambient blob */}
            <div style={{
              position: "absolute", top: -60, right: -60,
              width: 200, height: 200, borderRadius: "50%",
              background: "radial-gradient(circle, rgba(212,175,55,0.08), transparent)",
              pointerEvents: "none",
            }} />

            {/* Header */}
            <div style={{ marginBottom: 28, position: "relative", zIndex: 1 }}>
              <span
                className={`rf-badge ${leftVisible ? "visible" : ""}`}
                style={{ marginBottom: 14, display: "inline-flex" }}
              >
                <span>✦</span> Team of 3 · Linked Chain
              </span>
              <h3 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(20px, 3vw, 26px)",
                fontWeight: 700,
                color: "#0D2150",
                margin: "0 0 12px",
                lineHeight: 1.2,
              }}>
                Team Composition &{" "}
                <span className="rf-shimmer-text">Relay Flow</span>
              </h3>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 14,
                color: "#5a6a8a",
                lineHeight: 1.7,
                fontWeight: 300,
                margin: 0,
              }}>
                Each team consists of{" "}
                <strong style={{ color: "#0D2150", fontWeight: 600 }}>three students</strong>.
                Every student handles one stage and receives a problem dependent on the previous result.
              </p>
            </div>

            {/* Step chain */}
            <div ref={stepsRef} style={{ position: "relative", zIndex: 1 }}>
              {steps.map((step, i) => (
                <div key={step.num}>
                  <div
                    className={`rf-step ${stepsVisible ? "visible" : ""}`}
                    style={{ animationDelay: `${0.1 + i * 0.18}s` }}
                  >
                    {/* Number badge */}
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}>
                      <div
                        className={`rf-step-num ${stepsVisible ? "visible" : ""}`}
                        style={{
                          background: step.bg,
                          color: step.color,
                          boxShadow: step.shadow,
                          animationDelay: `${0.2 + i * 0.18}s`,
                        }}
                      >
                        {step.num}
                      </div>
                    </div>

                    <div className="rf-step-content">
                      <h4 className="rf-step-title">{step.title}</h4>
                      <p className="rf-step-desc">{step.desc}</p>
                    </div>
                  </div>

                  {/* Connector line between steps */}
                  {i < steps.length - 1 && (
                    <div style={{ display: "flex", paddingLeft: 24, height: 36 }}>
                      <div
                        className={`rf-connector ${stepsVisible ? "visible" : ""}`}
                        style={{
                          width: 2,
                          height: 36,
                          animationDelay: `${0.3 + i * 0.18}s`,
                        }}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Quote */}
            <div className="rf-quote-box">
              Each member's accuracy directly influences the final outcome — precision
              and coordination are not optional.
            </div>
          </div>

          {/* ── RIGHT: Info + Rules ── */}
          <div
            ref={rightRef}
            style={{ display: "flex", flexDirection: "column", gap: 20 }}
          >
            {/* Time & Evaluation */}
            <div
              className={`rf-info-card ${rightVisible ? "visible" : ""}`}
              style={{ animationDelay: "0.1s" }}
            >
              {/* Top gold line */}
              <div style={{
                position: "absolute" /* none — card has no position:relative yet */,
              }} />
              <div style={{ position: "relative" }}>
                <div style={{
                  width: 36, height: 2,
                  background: "linear-gradient(90deg, #D4AF37, rgba(212,175,55,0.3))",
                  borderRadius: 2, marginBottom: 12,
                }} />
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 22,
                  fontWeight: 700,
                  color: "#0D2150",
                  margin: "0 0 20px",
                }}>
                  Time Allocation &amp; Evaluation
                </h3>

                <div>
                  {infoRows.map(({ icon, label, value, bg, border }) => (
                    <div key={label} className="rf-info-row">
                      <div
                        className="rf-icon-box"
                        style={{ background: bg, border: `1px solid ${border}` }}
                      >
                        <span style={{ fontSize: 18 }}>{icon}</span>
                      </div>
                      <div>
                        <div style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: 10, fontWeight: 700,
                          textTransform: "uppercase", letterSpacing: "0.12em",
                          color: "#9aa0b0", marginBottom: 4,
                        }}>
                          {label}
                        </div>
                        <div style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: 14, fontWeight: 600,
                          color: "#0D2150",
                        }}>
                          {value}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Rounds & Structure */}
            <div
              className={`rf-info-card ${rightVisible ? "visible" : ""}`}
              style={{ animationDelay: "0.22s" }}
            >
              <div style={{
                width: 36, height: 2,
                background: "linear-gradient(90deg, #1A3A6A, rgba(26,58,106,0.2))",
                borderRadius: 2, marginBottom: 12,
              }} />
              <h3 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 22,
                fontWeight: 700,
                color: "#0D2150",
                margin: "0 0 20px",
              }}>
                Rounds &amp; Structure
              </h3>

              <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
                {bullets.map((text) => (
                  <li key={text} className="rf-bullet">
                    <span className="rf-bullet-dot">✓</span>
                    {text}
                  </li>
                ))}
              </ul>

              <div style={{
                marginTop: 20,
                paddingTop: 16,
                borderTop: "1px solid rgba(212,175,55,0.12)",
                display: "flex",
                gap: 12,
                flexWrap: "wrap",
              }}>
                {["Clarity", "Fairness", "Transparency"].map((word) => (
                  <span key={word} style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: 10, fontWeight: 700,
                    textTransform: "uppercase", letterSpacing: "0.14em",
                    color: "#D4AF37",
                    padding: "4px 12px",
                    border: "1px solid rgba(212,175,55,0.25)",
                    borderRadius: 99,
                    background: "rgba(212,175,55,0.05)",
                  }}>
                    {word}
                  </span>
                ))}
              </div>
            </div>

            {/* Dark accent card */}
            <div
              className={`rf-info-card ${rightVisible ? "visible" : ""}`}
              style={{
                animationDelay: "0.34s",
                background: "linear-gradient(145deg, #0D2150 0%, #071530 100%)",
                border: "1px solid rgba(212,175,55,0.22)",
                boxShadow: "0 12px 36px rgba(13,33,80,0.25)",
              }}
            >
              {/* Shimmer top */}
              <div style={{
                height: 2,
                background: "linear-gradient(90deg, transparent, #D4AF37, transparent)",
                borderRadius: 2,
                marginBottom: 18,
              }} />

              <div style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 10, fontWeight: 700,
                letterSpacing: "0.16em", textTransform: "uppercase",
                color: "rgba(212,175,55,0.5)", marginBottom: 8,
              }}>
                ✦ Key principle
              </div>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(17px, 2.5vw, 21px)",
                fontWeight: 600,
                fontStyle: "italic",
                color: "#fffcf5",
                lineHeight: 1.55,
                margin: "0 0 16px",
              }}>
                "One wrong answer, and the entire chain collapses. Every student's
                contribution is equally critical."
              </p>
              <div style={{
                width: 32, height: 2,
                background: "linear-gradient(90deg, #D4AF37, rgba(212,175,55,0.3))",
                borderRadius: 2,
              }} />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}