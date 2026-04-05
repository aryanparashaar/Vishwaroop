import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

  @keyframes esFadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes esShimmer {
    0%   { background-position: -300% center; }
    100% { background-position:  300% center; }
  }
  @keyframes esLineGrow {
    from { height: 0; }
    to   { height: 100%; }
  }
  @keyframes esGlow {
    0%,100% { box-shadow: 0 0 0 0 rgba(212,175,55,0); }
    50%      { box-shadow: 0 0 24px 6px rgba(212,175,55,0.2); }
  }
`;

function useCountdown(target) {
  const calc = () => {
    const d = Math.max(0, new Date(target) - Date.now());
    return {
      days:    Math.floor(d / 86400000),
      hours:   Math.floor((d % 86400000) / 3600000),
      minutes: Math.floor((d % 3600000) / 60000),
      seconds: Math.floor((d % 60000) / 1000),
    };
  };
  const [t, setT] = useState(calc);
  useEffect(() => { const id = setInterval(() => setT(calc()), 1000); return () => clearInterval(id); }, []);
  return t;
}

const schedule = [
  {
    num: "01",
    event: "Last Date for Registration",
    date: "01 May 2026",
    iso: "2026-05-01",
    day: "Friday",
    icon: "📝",
    desc: "Individual registration with exam fee payment of ₹150 per student on the portal.",
    accent: "#D4AF37",
    accentBg: "rgba(212,175,55,0.08)",
  },
  {
    num: "02",
    event: "Round 1 — Relay Examination",
    date: "15 May 2026",
    iso: "2026-05-15",
    day: "Friday",
    icon: "🏁",
    desc: "Team-based relay competition featuring sequential problem-solving across three sets. Top 6 teams advance.",
    accent: "#1A3A6A",
    accentBg: "rgba(26,58,106,0.08)",
  },
  {
    num: "03",
    event: "Round 2 — Championship",
    date: "15 Jun 2026",
    iso: "2026-06-15",
    day: "Monday",
    icon: "🏆",
    desc: "Advanced-level questions for top 6 qualifying teams. Winners awarded ₹11,000 · ₹7,000 · ₹5,000 per class.",
    accent: "#c9a227",
    accentBg: "rgba(212,175,55,0.06)",
  },
];

export default function ExamSchedule() {
  const countdown = useCountdown("2026-05-01T00:00:00");
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{styles}</style>
      <div style={{
        minHeight: "100vh",
        background: "linear-gradient(160deg, #050c1e 0%, #0D2150 55%, #071530 100%)",
        fontFamily: "'DM Sans', sans-serif",
        padding: "clamp(80px, 12vw, 140px) clamp(20px, 5vw, 48px) clamp(48px, 8vw, 80px)",
      }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>

          {/* Back link */}
          <Link to="/" style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            color: "rgba(212,175,55,0.6)", textDecoration: "none",
            fontSize: 12, fontWeight: 600, letterSpacing: "0.06em",
            marginBottom: 40, transition: "color 0.2s",
          }}
            onMouseEnter={e => e.currentTarget.style.color = "#D4AF37"}
            onMouseLeave={e => e.currentTarget.style.color = "rgba(212,175,55,0.6)"}
          >
            ← Back to Home
          </Link>

          {/* Header */}
          <div style={{ marginBottom: "clamp(40px, 6vw, 64px)", animation: "esFadeUp 0.6s ease both" }}>
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(212,175,55,0.55)", marginBottom: 12 }}>
              ✦ Mathematics Relay · 2026
            </div>
            <h1 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(32px, 6vw, 56px)",
              fontWeight: 700, color: "#fffcf5", margin: "0 0 16px", lineHeight: 1.1,
            }}>
              <span style={{
                background: "linear-gradient(105deg, #fffcf5 20%, #D4AF37 50%, #fffcf5 80%)",
                backgroundSize: "300% auto",
                WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                animation: "esShimmer 5s linear infinite",
              }}>
                Exam Schedule
              </span>
            </h1>
            <p style={{ fontSize: 15, color: "rgba(255,252,245,0.5)", lineHeight: 1.7, fontWeight: 300, maxWidth: 520 }}>
              All timings are in IST. Exam fee: <strong style={{ color: "#D4AF37", fontWeight: 600 }}>₹150 per student</strong>.
              Registration is individual — teams are formed by Vishwaroop management after registration.
            </p>
          </div>

          {/* Countdown to registration deadline */}
          <div style={{
            background: "rgba(212,175,55,0.05)",
            border: "1px solid rgba(212,175,55,0.22)",
            borderRadius: 16, padding: "24px 28px",
            marginBottom: 48,
            animation: "esFadeUp 0.6s ease 0.15s both",
            position: "relative", overflow: "hidden",
          }}>
            <div style={{ position: "absolute", top: 0, left: "15%", right: "15%", height: 2, background: "linear-gradient(90deg, transparent, #D4AF37, transparent)" }} />
            <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(212,175,55,0.5)", marginBottom: 14 }}>
              Time until registration closes
            </div>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              {[
                { val: countdown.days,    label: "Days" },
                { val: countdown.hours,   label: "Hours" },
                { val: countdown.minutes, label: "Min" },
                { val: countdown.seconds, label: "Sec" },
              ].map(({ val, label }) => (
                <div key={label} style={{
                  background: "rgba(255,252,245,0.04)",
                  border: "1px solid rgba(212,175,55,0.2)",
                  borderRadius: 10, padding: "12px 10px",
                  minWidth: 64, textAlign: "center",
                }}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 34, fontWeight: 700, color: "#D4AF37", lineHeight: 1 }}>
                    {String(val).padStart(2, "0")}
                  </div>
                  <div style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(212,175,55,0.45)", marginTop: 4 }}>
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div ref={ref}>
            {schedule.map((item, i) => (
              <div key={item.num} style={{ display: "flex", gap: 20, marginBottom: i < schedule.length - 1 ? 0 : 0 }}>
                {/* Left: number + connector */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0, flexShrink: 0 }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: "50%",
                    background: item.accentBg,
                    border: `2px solid ${item.accent}55`,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 20, fontWeight: 700, color: item.accent,
                    flexShrink: 0,
                    opacity: visible ? 1 : 0,
                    animation: visible ? `esFadeUp 0.5s ease ${i * 0.15}s both` : "none",
                    transition: "box-shadow 0.3s",
                  }}>
                    {item.num}
                  </div>
                  {i < schedule.length - 1 && (
                    <div style={{
                      width: 2, flex: 1, minHeight: 40,
                      background: `linear-gradient(180deg, ${item.accent}60, rgba(212,175,55,0.1))`,
                      margin: "4px auto",
                      opacity: visible ? 1 : 0,
                      animation: visible ? `esLineGrow 0.5s ease ${0.2 + i * 0.15}s both` : "none",
                    }} />
                  )}
                </div>

                {/* Right: card */}
                <div style={{
                  flex: 1,
                  background: "rgba(255,252,245,0.03)",
                  border: `1px solid ${item.accent}30`,
                  borderRadius: 16,
                  padding: "clamp(20px, 3vw, 28px)",
                  marginBottom: 16,
                  opacity: visible ? 1 : 0,
                  animation: visible ? `esFadeUp 0.55s ease ${0.05 + i * 0.15}s both` : "none",
                  transition: "border-color 0.3s, background 0.3s",
                  cursor: "default",
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = `${item.accent}60`; e.currentTarget.style.background = "rgba(255,252,245,0.05)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = `${item.accent}30`; e.currentTarget.style.background = "rgba(255,252,245,0.03)"; }}
                >
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, flexWrap: "wrap", marginBottom: 12 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <span style={{ fontSize: 22 }}>{item.icon}</span>
                      <div>
                        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(18px, 2.5vw, 22px)", fontWeight: 700, color: "#fffcf5", lineHeight: 1.2 }}>
                          {item.event}
                        </div>
                        <div style={{ fontSize: 11, color: "rgba(255,252,245,0.35)", marginTop: 2 }}>{item.day}</div>
                      </div>
                    </div>
                    <div style={{
                      background: item.accentBg,
                      border: `1px solid ${item.accent}40`,
                      borderRadius: 8, padding: "6px 14px",
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 18, fontWeight: 700, color: item.accent,
                      whiteSpace: "nowrap",
                    }}>
                      {item.date}
                    </div>
                  </div>
                  <p style={{ fontSize: 13, color: "rgba(255,252,245,0.45)", lineHeight: 1.65, margin: 0, fontWeight: 300 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Fee + CTA */}
          <div style={{
            marginTop: 48,
            background: "linear-gradient(135deg, rgba(212,175,55,0.08), rgba(212,175,55,0.03))",
            border: "1px solid rgba(212,175,55,0.25)",
            borderRadius: 16, padding: "clamp(20px, 3vw, 32px)",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            gap: 20, flexWrap: "wrap",
            animation: "esFadeUp 0.6s ease 0.5s both",
            position: "relative", overflow: "hidden",
          }}>
            <div style={{ position: "absolute", top: 0, left: "20%", right: "20%", height: 2, background: "linear-gradient(90deg, transparent, #D4AF37, transparent)" }} />
            <div>
              <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(212,175,55,0.5)", marginBottom: 6 }}>Examination Fee</div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(24px, 4vw, 36px)", fontWeight: 700, color: "#D4AF37" }}>₹150 / Student</div>
              <div style={{ fontSize: 12, color: "rgba(255,252,245,0.4)", marginTop: 4 }}>Classes 6th to 12th · Individual registration</div>
            </div>
            <button
              onClick={() => window.open("https://relayexam.virtualprachar.com/login", "_blank")}
              style={{
                background: "linear-gradient(135deg, #D4AF37 0%, #f0d060 50%, #c9a227 100%)",
                backgroundSize: "200% auto",
                color: "#0D2150", fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700, fontSize: 13, letterSpacing: "0.06em",
                textTransform: "uppercase", border: "none",
                padding: "13px 28px", borderRadius: 8, cursor: "pointer",
                boxShadow: "0 6px 20px rgba(212,175,55,0.35)",
                transition: "background-position 0.4s, transform 0.2s, box-shadow 0.3s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundPosition = "right center"; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 10px 28px rgba(212,175,55,0.5)"; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundPosition = "left center"; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(212,175,55,0.35)"; }}
            >
              Register Now ↗
            </button>
          </div>
        </div>
      </div>
    </>
  );
}