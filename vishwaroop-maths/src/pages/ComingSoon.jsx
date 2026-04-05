import { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;0,700;1,600&family=DM+Sans:wght@300;400;500;600&display=swap');

  @keyframes csShimmer {
    0%   { background-position: -300% center; }
    100% { background-position:  300% center; }
  }
  @keyframes csFadeUp {
    from { opacity: 0; transform: translateY(28px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes csRotate {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  @keyframes csPulse {
    0%,100% { opacity: 0.15; transform: scale(1); }
    50%      { opacity: 0.35; transform: scale(1.08); }
  }
  @keyframes csDotBounce {
    0%,80%,100% { transform: translateY(0); }
    40%          { transform: translateY(-10px); }
  }
  @keyframes csGlow {
    0%,100% { box-shadow: 0 0 0 0 rgba(212,175,55,0); }
    50%      { box-shadow: 0 0 40px 8px rgba(212,175,55,0.2); }
  }
  @keyframes csStarTwinkle {
    0%,100% { opacity: 0.1; transform: scale(1); }
    50%      { opacity: 0.6; transform: scale(1.5); }
  }
`;

const STARS = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  top: `${Math.random() * 100}%`,
  left: `${Math.random() * 100}%`,
  delay: `${Math.random() * 5}s`,
  dur: `${2 + Math.random() * 3}s`,
}));

// Map route segments to human-readable labels
const LABEL_MAP = {
  "exam-schedule":   "Exam Schedule",
  "sample-papers":   "Sample Papers",
  "result":          "Result",
  "e-certificate":   "E-Certificate",
  "registration":    "Registration",
  "brochure":        "Brochure",
  "science":         "Science Relay",
};

export default function ComingSoon() {
  const { pathname } = useLocation();
  const canvasRef = useRef(null);

  // Derive a friendly label from the URL
  const segments = pathname.split("/").filter(Boolean);
  const lastSeg = segments[segments.length - 1] || "";
  const label = LABEL_MAP[lastSeg] || lastSeg.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase()) || "This Page";

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let W = canvas.width = canvas.offsetWidth;
    let H = canvas.height = canvas.offsetHeight;
    const pts = Array.from({ length: 40 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.3,
      vy: -Math.random() * 0.25 - 0.05,
      r: Math.random() * 1.2 + 0.3,
      a: Math.random(),
    }));
    let raf;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy; p.a += 0.004;
        if (p.y < 0) { p.y = H; p.x = Math.random() * W; }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212,175,55,${0.1 + 0.08 * Math.sin(p.a)})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    const resize = () => { W = canvas.width = canvas.offsetWidth; H = canvas.height = canvas.offsetHeight; };
    window.addEventListener("resize", resize);
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <>
      <style>{styles}</style>
      <div style={{
        minHeight: "100vh",
        background: "linear-gradient(160deg, #050c1e 0%, #0D2150 55%, #071530 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "clamp(40px, 8vw, 80px) clamp(20px, 5vw, 48px)",
        fontFamily: "'DM Sans', sans-serif",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}>
        {/* Canvas */}
        <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }} />

        {/* Stars */}
        {STARS.map(s => (
          <div key={s.id} style={{
            position: "absolute", top: s.top, left: s.left,
            width: 3, height: 3, borderRadius: "50%",
            background: "#D4AF37",
            animationName: "csStarTwinkle",
            animationDuration: s.dur,
            animationDelay: s.delay,
            animationIterationCount: "infinite",
            pointerEvents: "none",
          }} />
        ))}

        {/* Ambient blobs */}
        <div style={{ position: "absolute", top: -100, left: -100, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(212,175,55,0.07), transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -80, right: -80, width: 350, height: 350, borderRadius: "50%", background: "radial-gradient(circle, rgba(26,58,106,0.5), transparent 70%)", pointerEvents: "none" }} />

        {/* Content */}
        <div style={{ position: "relative", zIndex: 1, maxWidth: 560, width: "100%" }}>

          {/* Spinning ring */}
          <div style={{
            width: 90, height: 90, borderRadius: "50%",
            border: "2px solid transparent",
            borderTopColor: "#D4AF37",
            borderRightColor: "rgba(212,175,55,0.3)",
            margin: "0 auto 32px",
            animation: "csRotate 2.5s linear infinite, csGlow 3s ease-in-out infinite",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <div style={{
              width: 70, height: 70, borderRadius: "50%",
              border: "1px solid rgba(212,175,55,0.2)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 28,
            }}>
              ⏳
            </div>
          </div>

          {/* Eyebrow */}
          <div style={{
            fontSize: 10, fontWeight: 700, letterSpacing: "0.22em",
            textTransform: "uppercase", color: "rgba(212,175,55,0.6)",
            marginBottom: 16,
            animation: "csFadeUp 0.6s ease 0.1s both",
          }}>
            ✦ Coming Soon
          </div>

          {/* Title */}
          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(32px, 6vw, 56px)",
            fontWeight: 700,
            color: "#fffcf5",
            lineHeight: 1.1,
            margin: "0 0 12px",
            animation: "csFadeUp 0.6s ease 0.2s both",
          }}>
            <span style={{
              background: "linear-gradient(105deg, #fffcf5 20%, #D4AF37 50%, #fffcf5 80%)",
              backgroundSize: "300% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "csShimmer 5s linear infinite",
            }}>
              {label}
            </span>
          </h1>

          <p style={{
            fontSize: "clamp(14px, 2vw, 17px)",
            color: "rgba(255,252,245,0.5)",
            lineHeight: 1.7,
            fontWeight: 300,
            margin: "0 auto 40px",
            maxWidth: 420,
            animation: "csFadeUp 0.6s ease 0.3s both",
          }}>
            We're working hard to bring this to you. Check back soon or register
            now to stay ahead of the competition.
          </p>

          {/* Bouncing dots */}
          <div style={{
            display: "flex", justifyContent: "center", gap: 8,
            marginBottom: 48,
            animation: "csFadeUp 0.6s ease 0.4s both",
          }}>
            {[0, 1, 2].map(i => (
              <div key={i} style={{
                width: 8, height: 8, borderRadius: "50%",
                background: "#D4AF37",
                animationName: "csDotBounce",
                animationDuration: "1.2s",
                animationDelay: `${i * 0.2}s`,
                animationIterationCount: "infinite",
              }} />
            ))}
          </div>

          {/* Info cards */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
            gap: 12,
            marginBottom: 48,
            animation: "csFadeUp 0.6s ease 0.45s both",
          }}>
            {[
              { icon: "📅", label: "Registration Closes", val: "01 May 2026" },
              { icon: "🏁", label: "Round 1",             val: "15 May 2026" },
              { icon: "🏆", label: "Round 2",             val: "15 Jun 2026" },
            ].map(({ icon, label: l, val }) => (
              <div key={l} style={{
                background: "rgba(255,252,245,0.04)",
                border: "1px solid rgba(212,175,55,0.2)",
                borderRadius: 12,
                padding: "14px 12px",
                transition: "border-color 0.3s, background 0.3s",
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(212,175,55,0.45)"; e.currentTarget.style.background = "rgba(212,175,55,0.06)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(212,175,55,0.2)"; e.currentTarget.style.background = "rgba(255,252,245,0.04)"; }}
              >
                <div style={{ fontSize: 20, marginBottom: 6 }}>{icon}</div>
                <div style={{ fontSize: 9, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", color: "rgba(212,175,55,0.5)", marginBottom: 4 }}>{l}</div>
                <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 16, fontWeight: 700, color: "#D4AF37" }}>{val}</div>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div style={{
            display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap",
            animation: "csFadeUp 0.6s ease 0.55s both",
          }}>
            <button
              onClick={() => window.open("https://relayexam.virtualprachar.com/login", "_blank")}
              style={{
                background: "linear-gradient(135deg, #D4AF37 0%, #f0d060 50%, #c9a227 100%)",
                backgroundSize: "200% auto",
                color: "#0D2150",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700, fontSize: 13,
                letterSpacing: "0.06em", textTransform: "uppercase",
                border: "none", padding: "13px 28px", borderRadius: 7,
                cursor: "pointer",
                transition: "background-position 0.4s, transform 0.2s, box-shadow 0.3s",
                boxShadow: "0 6px 20px rgba(212,175,55,0.35)",
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundPosition = "right center"; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 10px 28px rgba(212,175,55,0.5)"; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundPosition = "left center"; e.currentTarget.style.transform = "none"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(212,175,55,0.35)"; }}
            >
              Register Now ↗
            </button>

            <Link
              to="/"
              style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                background: "transparent",
                color: "rgba(255,252,245,0.75)",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 500, fontSize: 13,
                border: "1px solid rgba(255,252,245,0.2)",
                padding: "13px 28px", borderRadius: 7,
                textDecoration: "none",
                transition: "border-color 0.3s, color 0.3s, background 0.3s",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(212,175,55,0.45)"; e.currentTarget.style.color = "#D4AF37"; e.currentTarget.style.background = "rgba(212,175,55,0.05)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(255,252,245,0.2)"; e.currentTarget.style.color = "rgba(255,252,245,0.75)"; e.currentTarget.style.background = "transparent"; }}
            >
              ← Back to Home
            </Link>
          </div>

          {/* Contact nudge */}
          <p style={{
            marginTop: 36, fontSize: 12,
            color: "rgba(255,252,245,0.3)",
            animation: "csFadeUp 0.6s ease 0.65s both",
          }}>
            Questions?{" "}
            <a href="mailto:vishwarooprelay@gmail.com" style={{ color: "rgba(212,175,55,0.6)", textDecoration: "none" }}>
              vishwarooprelay@gmail.com
            </a>
            {" "}· +91 89296 60722
          </p>
        </div>
      </div>
    </>
  );
}