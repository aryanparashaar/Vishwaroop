import { useEffect, useRef, useState } from "react";
import olympiadLogo from "../assets/logos/Olympiad.png";

// ── Registration link ──────────────────────────────────────────────
const REGISTRATION_LINK = "https://relayexam.virtualprachar.com/login";

// ── Exam target date — adjust as needed ───────────────────────────
const EXAM_DATE = new Date("2026-03-15T09:00:00");

// ── Styles injected once ──────────────────────────────────────────
const heroStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600&family=DM+Sans:wght@300;400;500;600&display=swap');

  @keyframes heroFadeUp {
    from { opacity: 0; transform: translateY(32px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes heroFadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
  @keyframes goldShimmer {
    0%   { background-position: -300% center; }
    100% { background-position: 300% center; }
  }
  @keyframes badgePulse {
    0%,100% { box-shadow: 0 0 0 0 rgba(212,175,55,0); }
    50%      { box-shadow: 0 0 18px 4px rgba(212,175,55,0.28); }
  }
  @keyframes dotPing {
    0%   { transform: scale(1); opacity: 0.8; }
    100% { transform: scale(2.4); opacity: 0; }
  }
  @keyframes cardFloat {
    0%,100% { transform: translateY(0px) rotate(0.5deg); }
    50%      { transform: translateY(-10px) rotate(-0.5deg); }
  }
  @keyframes tiltedFloat {
    0%,100% { transform: rotate(6deg) translateY(0px); }
    50%      { transform: rotate(6deg) translateY(-8px); }
  }
  @keyframes bounceArrow {
    0%,100% { transform: translateY(0); opacity: 0.6; }
    50%      { transform: translateY(6px); opacity: 1; }
  }
  @keyframes shimmerSweep {
    0%   { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
  @keyframes countdownPop {
    0%   { transform: scale(0.8); opacity: 0; }
    60%  { transform: scale(1.05); }
    100% { transform: scale(1); opacity: 1; }
  }
  @keyframes starTwinkle {
    0%,100% { opacity: 0.15; transform: scale(1); }
    50%      { opacity: 0.7; transform: scale(1.4); }
  }

  .hero-heading {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(42px, 7vw, 88px);
    font-weight: 700;
    line-height: 1.0;
    color: #fffcf5;
    letter-spacing: -0.02em;
    animation: heroFadeUp 0.9s ease 0.2s both;
  }
  .hero-gold-word {
    background: linear-gradient(105deg, #c9a227 0%, #D4AF37 30%, #f5d97a 55%, #D4AF37 75%, #b8911f 100%);
    background-size: 300% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: goldShimmer 5s linear infinite;
    display: inline-block;
  }
  .hero-subtext {
    font-family: 'DM Sans', sans-serif;
    font-size: clamp(15px, 2vw, 18px);
    color: rgba(255,252,245,0.72);
    line-height: 1.75;
    font-weight: 300;
    max-width: 500px;
    animation: heroFadeUp 0.9s ease 0.45s both;
  }
  .hero-badge {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(255,252,245,0.07);
    border: 1px solid rgba(212,175,55,0.45);
    border-radius: 99px;
    padding: 7px 18px;
    font-family: 'DM Sans', sans-serif;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.16em;
    text-transform: uppercase;
    color: #D4AF37;
    animation: heroFadeUp 0.9s ease 0.05s both, badgePulse 4s ease-in-out infinite;
    backdrop-filter: blur(8px);
  }
  .btn-primary-hero {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: linear-gradient(135deg, #D4AF37 0%, #f0d060 50%, #c9a227 100%);
    background-size: 200% auto;
    color: #0D2150;
    font-family: 'DM Sans', sans-serif;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    border: none;
    padding: 14px 32px;
    border-radius: 7px;
    cursor: pointer;
    transition: background-position 0.4s, transform 0.2s, box-shadow 0.3s;
    box-shadow: 0 8px 28px rgba(212,175,55,0.4);
    animation: heroFadeUp 0.9s ease 0.65s both;
  }
  .btn-primary-hero:hover {
    background-position: right center;
    transform: translateY(-3px) scale(1.02);
    box-shadow: 0 14px 36px rgba(212,175,55,0.55);
  }
  .btn-primary-hero:active { transform: scale(0.97); }

  .btn-ghost-hero {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: transparent;
    color: rgba(255,252,245,0.85);
    font-family: 'DM Sans', sans-serif;
    font-weight: 500;
    font-size: 14px;
    letter-spacing: 0.04em;
    border: 1px solid rgba(255,252,245,0.25);
    padding: 14px 32px;
    border-radius: 7px;
    cursor: pointer;
    transition: all 0.3s;
    animation: heroFadeUp 0.9s ease 0.75s both;
    backdrop-filter: blur(8px);
  }
  .btn-ghost-hero:hover {
    background: rgba(255,252,245,0.08);
    border-color: rgba(212,175,55,0.5);
    color: #D4AF37;
    transform: translateY(-2px);
  }

  .countdown-box {
    background: rgba(255,252,245,0.05);
    border: 1px solid rgba(212,175,55,0.3);
    border-radius: 10px;
    padding: 14px 10px 10px;
    text-align: center;
    backdrop-filter: blur(12px);
    min-width: 68px;
    animation: countdownPop 0.6s ease both;
  }
  .countdown-num {
    font-family: 'Cormorant Garamond', serif;
    font-size: 36px;
    font-weight: 700;
    color: #D4AF37;
    line-height: 1;
    display: block;
  }
  .countdown-label {
    font-family: 'DM Sans', sans-serif;
    font-size: 9px;
    font-weight: 600;
    letter-spacing: 0.14em;
    text-transform: uppercase;
    color: rgba(255,252,245,0.45);
    display: block;
    margin-top: 4px;
  }
  .stat-pill {
    display: flex;
    align-items: center;
    gap: 7px;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    color: rgba(255,252,245,0.65);
    font-weight: 400;
  }
  .stat-check {
    color: #D4AF37;
    font-size: 14px;
    line-height: 1;
  }
  .glass-card {
    background: rgba(255,252,245,0.04);
    border: 1px solid rgba(212,175,55,0.22);
    border-radius: 24px;
    padding: 12px;
    backdrop-filter: blur(24px);
    box-shadow: 0 30px 80px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,252,245,0.08);
    animation: heroFadeIn 1s ease 0.4s both, cardFloat 6s ease-in-out 1.5s infinite;
    position: relative;
  }
  .glass-inner {
    background: linear-gradient(145deg, rgba(13,33,80,0.9) 0%, rgba(5,12,32,0.95) 100%);
    border-radius: 16px;
    padding: 36px 28px;
    text-align: center;
    position: relative;
    overflow: hidden;
  }
  .inner-gold-top {
    position: absolute;
    top: 0; left: 20%; right: 20%;
    height: 1px;
    background: linear-gradient(90deg, transparent, #D4AF37, transparent);
  }
  .logo-ring {
    width: 110px;
    height: 110px;
    border-radius: 50%;
    border: 2px solid rgba(212,175,55,0.35);
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    position: relative;
    background: rgba(255,252,245,0.04);
    box-shadow: 0 0 30px rgba(212,175,55,0.15), inset 0 0 20px rgba(212,175,55,0.05);
    transition: box-shadow 0.4s;
  }
  .logo-ring:hover {
    box-shadow: 0 0 50px rgba(212,175,55,0.35), inset 0 0 20px rgba(212,175,55,0.1);
  }
  .stat-box-inner {
    background: rgba(255,252,245,0.04);
    border: 1px solid rgba(212,175,55,0.18);
    border-radius: 10px;
    padding: 10px 8px;
    flex: 1;
    transition: border-color 0.3s, background 0.3s;
    cursor: default;
  }
  .stat-box-inner:hover {
    border-color: rgba(212,175,55,0.5);
    background: rgba(212,175,55,0.06);
  }
  .tilted-layer {
    position: absolute;
    inset: 0;
    border: 1px solid rgba(212,175,55,0.15);
    border-radius: 24px;
    animation: tiltedFloat 6s ease-in-out infinite;
    pointer-events: none;
    z-index: -1;
    transform: rotate(6deg);
  }
  .scroll-indicator {
    animation: bounceArrow 2s ease-in-out infinite;
    cursor: pointer;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    color: rgba(212,175,55,0.6);
    font-family: 'DM Sans', sans-serif;
    font-size: 10px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    font-weight: 600;
    transition: color 0.2s;
  }
  .scroll-indicator:hover { color: #D4AF37; }

  /* Stars */
  .star {
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #D4AF37;
  }

  @media (max-width: 767px) {
    .hero-heading { text-align: center; }
    .hero-subtext { text-align: center; margin: 0 auto; }
    .hero-left { align-items: center !important; text-align: center; }
    .hero-btns { justify-content: center !important; }
    .hero-stats { justify-content: center !important; }
    .hero-countdown { justify-content: center !important; }
  }
`;

// ── Countdown hook ─────────────────────────────────────────────────
function useCountdown(target) {
  const calc = () => {
    const diff = Math.max(0, target - Date.now());
    return {
      days:    Math.floor(diff / 86400000),
      hours:   Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

// ── Star field ─────────────────────────────────────────────────────
const STARS = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  top:  `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  delay: `${Math.random() * 6}s`,
  dur:   `${2 + Math.random() * 4}s`,
}));

export default function Hero() {
  const countdown = useCountdown(EXAM_DATE);
  const canvasRef = useRef(null);

  // Subtle particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let W = canvas.width = canvas.offsetWidth;
    let H = canvas.height = canvas.offsetHeight;
    const particles = Array.from({ length: 55 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.4 + 0.3,
      vx: (Math.random() - 0.5) * 0.25,
      vy: -Math.random() * 0.3 - 0.1,
      a: Math.random(),
    }));
    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        p.a += 0.003;
        if (p.y < 0) { p.y = H; p.x = Math.random() * W; }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212,175,55,${0.12 + 0.1 * Math.sin(p.a)})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    const resize = () => {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <>
      <style>{heroStyles}</style>
      <section
        id="top"
        style={{
          position: "relative",
          overflow: "hidden",
          background: "linear-gradient(145deg, #050c1e 0%, #0D2150 45%, #0a1a3a 100%)",
          paddingTop: "clamp(96px, 12vw, 160px)",
          paddingBottom: "clamp(64px, 8vw, 100px)",
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {/* Particle canvas */}
        <canvas
          ref={canvasRef}
          style={{
            position: "absolute", inset: 0,
            width: "100%", height: "100%",
            pointerEvents: "none", zIndex: 0,
          }}
        />

        {/* Star field */}
        {STARS.map(s => (
          <span
            key={s.id}
            className="star"
            style={{
              top: s.top, left: s.left,
              animationName: "starTwinkle",
              animationDuration: s.dur,
              animationDelay: s.delay,
              animationIterationCount: "infinite",
            }}
          />
        ))}

        {/* Ambient blobs */}
        <div style={{
          position: "absolute", top: -120, left: -120,
          width: 600, height: 600, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(212,175,55,0.08) 0%, transparent 70%)",
          pointerEvents: "none", zIndex: 0,
        }} />
        <div style={{
          position: "absolute", bottom: -80, right: -80,
          width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(26,58,106,0.6) 0%, transparent 70%)",
          pointerEvents: "none", zIndex: 0,
        }} />

        {/* Content */}
        <div style={{
          position: "relative", zIndex: 2,
          maxWidth: 1280, margin: "0 auto",
          padding: "0 clamp(20px, 5vw, 48px)",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "clamp(40px, 6vw, 80px)",
        }}>

          {/* ── LEFT ── */}
          <div className="hero-left" style={{
            flex: "1 1 340px",
            display: "flex",
            flexDirection: "column",
            gap: 28,
            alignItems: "flex-start",
          }}>

            <div className="hero-badge">
              <span style={{ position: "relative", display: "inline-flex" }}>
                <span style={{
                  position: "absolute", inset: 0,
                  borderRadius: "50%",
                  background: "#D4AF37",
                  animation: "dotPing 1.8s ease-out infinite",
                }} />
                <span style={{
                  width: 8, height: 8, borderRadius: "50%",
                  background: "#D4AF37", display: "block", position: "relative",
                }} />
              </span>
              Vishwaroop International Relay
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <h1 className="hero-heading">
                Speed.{" "}
                <span className="hero-gold-word">Strategy.</span>
                <br />
                Teamwork.
              </h1>
              <p className="hero-subtext">
                India's first subject-wise Relay Olympiad — a high-energy team challenge
                where three students solve linked problems to win. Aligned with IKS &amp; NEP 2020.
              </p>
            </div>

            {/* Buttons */}
            <div className="hero-btns" style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              alignItems: "center",
            }}>
              <button
                className="btn-primary-hero"
                onClick={() => window.open(REGISTRATION_LINK, "_blank")}
              >
                Register Now ↗
              </button>
              <button
                className="btn-ghost-hero"
                onClick={() => document.getElementById("preparation")?.scrollIntoView({ behavior: "smooth" })}
              >
                View Syllabus →
              </button>
            </div>

            {/* Trust stats */}
            <div className="hero-stats" style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 20,
              paddingTop: 16,
              borderTop: "1px solid rgba(212,175,55,0.15)",
              marginTop: 4,
            }}>
              {["3 Students / Team", "Max. 30 Min Relay", "Online Mode"].map(s => (
                <span key={s} className="stat-pill">
                  <span className="stat-check">✦</span> {s}
                </span>
              ))}
            </div>

            {/* Countdown */}
            <div style={{ width: "100%" }}>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "rgba(212,175,55,0.55)",
                marginBottom: 10,
              }}>
                Exam Countdown
              </p>
              <div className="hero-countdown" style={{ display: "flex", gap: 8 }}>
                {[
                  { val: countdown.days,    label: "Days" },
                  { val: countdown.hours,   label: "Hours" },
                  { val: countdown.minutes, label: "Min" },
                  { val: countdown.seconds, label: "Sec" },
                ].map(({ val, label }, i) => (
                  <div
                    key={label}
                    className="countdown-box"
                    style={{ animationDelay: `${0.8 + i * 0.1}s` }}
                  >
                    <span className="countdown-num">
                      {String(val).padStart(2, "0")}
                    </span>
                    <span className="countdown-label">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT CARD ── */}
          <div style={{
            flex: "1 1 300px",
            display: "flex",
            justifyContent: "center",
            position: "relative",
            maxWidth: 400,
            margin: "0 auto",
          }}>
            {/* Tilted bg layer */}
            <div className="tilted-layer" style={{
              background: "linear-gradient(135deg, rgba(212,175,55,0.04), rgba(13,33,80,0.6))",
            }} />

            <div className="glass-card" style={{ width: "100%" }}>
              {/* Gold top shimmer */}
              <div style={{
                position: "absolute",
                top: -1, left: "10%", right: "10%",
                height: 2,
                background: "linear-gradient(90deg, transparent, #D4AF37 40%, #f5d97a 60%, transparent)",
                borderRadius: 2,
                animation: "shimmerSweep 3s linear infinite",
                backgroundSize: "200% auto",
              }} />

              <div className="glass-inner">
                <div className="inner-gold-top" />

                {/* Corner ornaments */}
                {[
                  { top: 12, left: 12 },
                  { top: 12, right: 12 },
                  { bottom: 12, left: 12 },
                  { bottom: 12, right: 12 },
                ].map((pos, i) => (
                  <div key={i} style={{
                    position: "absolute",
                    width: 16, height: 16,
                    borderColor: "rgba(212,175,55,0.35)",
                    borderStyle: "solid",
                    borderWidth: 0,
                    ...pos,
                    ...(pos.top !== undefined && pos.left !== undefined
                      ? { borderTopWidth: 1, borderLeftWidth: 1 }
                      : pos.top !== undefined
                      ? { borderTopWidth: 1, borderRightWidth: 1 }
                      : pos.left !== undefined
                      ? { borderBottomWidth: 1, borderLeftWidth: 1 }
                      : { borderBottomWidth: 1, borderRightWidth: 1 }),
                  }} />
                ))}

                {/* Logo */}
                <div className="logo-ring" style={{ marginBottom: 24 }}>
                  <img
                    src={olympiadLogo}
                    alt="Olympiad Logo"
                    style={{ height: 64, width: 64, objectFit: "contain" }}
                  />
                </div>

                {/* Title */}
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 24,
                  fontWeight: 700,
                  color: "#fffcf5",
                  letterSpacing: "-0.01em",
                  margin: "0 0 8px",
                }}>
                  Relay Format, 2026
                </h3>
                <div style={{
                  width: 40, height: 2,
                  background: "linear-gradient(90deg, #D4AF37, #f5d97a)",
                  margin: "0 auto 16px",
                  borderRadius: 2,
                }} />
                <p style={{
                  fontSize: 13,
                  color: "rgba(255,252,245,0.55)",
                  fontStyle: "italic",
                  lineHeight: 1.7,
                  margin: "0 0 24px",
                }}>
                  "One answer feeds the next. If Student 1 is wrong,
                  the entire chain collapses — teamwork is everything."
                </p>

                {/* Stat boxes */}
                <div style={{ display: "flex", gap: 8 }}>
                  {[
                    { label: "Class", value: "6–12" },
                    { label: "Format", value: "Linked" },
                    { label: "Focus", value: "Logic" },
                  ].map(({ label, value }) => (
                    <div key={label} className="stat-box-inner">
                      <div style={{
                        fontSize: 9, textTransform: "uppercase",
                        letterSpacing: "0.12em", color: "rgba(212,175,55,0.5)",
                        fontWeight: 700, marginBottom: 4,
                      }}>
                        {label}
                      </div>
                      <div style={{
                        fontSize: 15, fontWeight: 700,
                        color: "#D4AF37",
                        fontFamily: "'Cormorant Garamond', serif",
                      }}>
                        {value}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA inside card */}
                <button
                  onClick={() => window.open(REGISTRATION_LINK, "_blank")}
                  style={{
                    marginTop: 24,
                    width: "100%",
                    padding: "12px 0",
                    background: "linear-gradient(135deg, rgba(212,175,55,0.15), rgba(212,175,55,0.08))",
                    border: "1px solid rgba(212,175,55,0.4)",
                    borderRadius: 8,
                    color: "#D4AF37",
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 600,
                    fontSize: 12,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    transition: "background 0.3s, box-shadow 0.3s",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = "rgba(212,175,55,0.18)";
                    e.currentTarget.style.boxShadow = "0 0 20px rgba(212,175,55,0.2)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = "linear-gradient(135deg, rgba(212,175,55,0.15), rgba(212,175,55,0.08))";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  Secure Your Spot ↗
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{
          position: "absolute",
          bottom: 28, left: "50%",
          transform: "translateX(-50%)",
          zIndex: 2,
        }}>
          <button
            className="scroll-indicator"
            onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <span style={{ fontSize: 9, letterSpacing: "0.12em", color: "rgba(212,175,55,0.5)", fontFamily: "'DM Sans', sans-serif" }}>Scroll</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 3v10M4 9l4 4 4-4" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"/>
            </svg>
          </button>
        </div>
      </section>
    </>
  );
}