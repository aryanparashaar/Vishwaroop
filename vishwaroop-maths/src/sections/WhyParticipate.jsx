import { useEffect, useRef, useState } from "react";
import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";

/* ── Styles ─────────────────────────────────────────────────────── */
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

  @keyframes wpFadeUp {
    from { opacity: 0; transform: translateY(32px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes wpShimmer {
    0%   { background-position: -300% center; }
    100% { background-position: 300% center; }
  }
  @keyframes wpIconPop {
    0%   { transform: scale(1); }
    40%  { transform: scale(1.18) rotate(-4deg); }
    70%  { transform: scale(0.96) rotate(2deg); }
    100% { transform: scale(1) rotate(0); }
  }
  @keyframes wpGoldPulse {
    0%,100% { box-shadow: 0 0 0 0 rgba(212,175,55,0); }
    50%      { box-shadow: 0 0 24px 6px rgba(212,175,55,0.22); }
  }
  @keyframes lineExpand {
    from { transform: scaleX(0); }
    to   { transform: scaleX(1); }
  }

  .wp-card {
    background: #fffcf5;
    border: 1px solid rgba(212,175,55,0.18);
    border-radius: 20px;
    padding: clamp(24px, 3vw, 36px);
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 16px;
    opacity: 0;
    transition: transform 0.4s cubic-bezier(0.22,1,0.36,1),
                box-shadow 0.4s ease,
                border-color 0.3s ease;
    cursor: default;
    box-shadow: 0 2px 16px rgba(13,33,80,0.05);
  }
  .wp-card.visible {
    animation: wpFadeUp 0.6s cubic-bezier(0.22,1,0.36,1) forwards;
  }
  .wp-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 52px rgba(13,33,80,0.12), 0 0 0 1px rgba(212,175,55,0.35);
    border-color: rgba(212,175,55,0.45);
  }
  .wp-card:hover .wp-icon-box {
    animation: wpIconPop 0.45s ease forwards;
    background: #D4AF37 !important;
  }
  .wp-card:hover .wp-top-line {
    transform: scaleX(1);
  }
  .wp-card:hover .wp-bg-icon {
    opacity: 0.08;
    transform: scale(1.15) rotate(-5deg);
  }

  .wp-card-featured {
    background: linear-gradient(145deg, #0D2150 0%, #071530 100%);
    border: 1px solid rgba(212,175,55,0.28);
    box-shadow: 0 16px 48px rgba(13,33,80,0.3);
    animation: wpGoldPulse 5s ease-in-out infinite;
  }
  .wp-card-featured:hover {
    box-shadow: 0 24px 64px rgba(13,33,80,0.4), 0 0 0 1px rgba(212,175,55,0.5);
    border-color: rgba(212,175,55,0.55);
    animation: none;
  }

  .wp-icon-box {
    width: 52px;
    height: 52px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    flex-shrink: 0;
    transition: background 0.3s ease;
    position: relative;
    z-index: 1;
  }

  .wp-top-line {
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 2px;
    background: linear-gradient(90deg, #D4AF37, #f5d97a, rgba(212,175,55,0.3));
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.5s cubic-bezier(0.22,1,0.36,1);
  }
  .wp-card-featured .wp-top-line {
    transform: scaleX(1);
    background: linear-gradient(90deg, transparent, #D4AF37 40%, #f5d97a 60%, transparent);
  }

  .wp-bg-icon {
    position: absolute;
    right: -16px;
    bottom: -16px;
    font-size: 100px;
    opacity: 0.04;
    pointer-events: none;
    transition: opacity 0.4s ease, transform 0.5s ease;
    line-height: 1;
    z-index: 0;
  }

  .wp-title {
    font-family: 'Cormorant Garamond', serif;
    font-weight: 700;
    color: #0D2150;
    line-height: 1.15;
    margin: 0;
    position: relative;
    z-index: 1;
  }
  .wp-title-dark { color: #fffcf5; }

  .wp-desc {
    font-family: 'DM Sans', sans-serif;
    font-size: 13.5px;
    line-height: 1.7;
    color: #5a6a8a;
    font-weight: 300;
    margin: 0;
    position: relative;
    z-index: 1;
    flex: 1;
  }
  .wp-desc-dark { color: rgba(255,252,245,0.58); }

  .wp-gold-text {
    background: linear-gradient(105deg, #c9a227, #D4AF37 40%, #f5d97a 55%, #D4AF37 70%, #b8911f);
    background-size: 300% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: wpShimmer 5s linear infinite;
  }

  .wp-tag {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 5px 12px;
    border-radius: 99px;
    font-family: 'DM Sans', sans-serif;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    background: rgba(212,175,55,0.12);
    border: 1px solid rgba(212,175,55,0.35);
    color: #D4AF37;
    width: fit-content;
  }

  .wp-stat-row {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
    margin-top: auto;
    position: relative;
    z-index: 1;
  }
  .wp-stat-cell {
    background: rgba(255,252,245,0.05);
    border: 1px solid rgba(212,175,55,0.18);
    border-radius: 10px;
    padding: 10px 6px;
    text-align: center;
    transition: background 0.3s, border-color 0.3s;
  }
  .wp-stat-cell:hover {
    background: rgba(212,175,55,0.1);
    border-color: rgba(212,175,55,0.4);
  }

  /* Bento grid */
  .wp-bento {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-auto-rows: auto;
    gap: clamp(12px, 2vw, 20px);
  }
  @media (max-width: 900px) {
    .wp-bento { grid-template-columns: repeat(2, 1fr); }
    .wp-featured { grid-column: span 2 !important; }
    .wp-span3    { grid-column: span 1 !important; }
    .wp-span2    { grid-column: span 1 !important; }
  }
  @media (max-width: 540px) {
    .wp-bento { grid-template-columns: 1fr; }
    .wp-featured { grid-column: span 1 !important; }
    .wp-span3    { grid-column: span 1 !important; }
    .wp-span2    { grid-column: span 1 !important; }
  }
`;

let injected = false;
function useReveal(delay = 0) {
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
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible, delay];
}

/* ── Card components ─────────────────────────────────────────────── */

function FeaturedCard({ visible }) {
  return (
    <div
      className={`wp-card wp-card-featured wp-featured ${visible ? "visible" : ""}`}
      style={{
        gridColumn: "span 3",
        gridRow: "span 2",
        animationDelay: "0s",
        minHeight: 320,
      }}
    >
      <div className="wp-top-line" />
      <div className="wp-bg-icon" style={{ fontSize: 130, right: -24, bottom: -24 }}>🌍</div>

      {/* Ambient blob */}
      <div style={{
        position: "absolute", top: -40, right: -40,
        width: 200, height: 200, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(212,175,55,0.1), transparent)",
        pointerEvents: "none",
      }} />

      <span className="wp-tag" style={{ zIndex: 1 }}>
        <span>✦</span> Featured Benefit
      </span>

      <div className="wp-icon-box" style={{ background: "rgba(212,175,55,0.15)", fontSize: 28 }}>
        🌍
      </div>

      <h3
        className="wp-title wp-title-dark"
        style={{ fontSize: "clamp(24px, 3vw, 36px)", zIndex: 1 }}
      >
        <span className="wp-gold-text">International-Level</span>
        <br />Recognition
      </h3>

      <p className="wp-desc wp-desc-dark" style={{ fontSize: 14 }}>
        Participants gain exposure on an international platform and are eligible
        for medals, certificates and institutional accolades that stand out in any
        academic portfolio.
      </p>

      {/* Stats */}
      <div className="wp-stat-row">
        {[
          { val: "🥇", label: "Medals" },
          { val: "📜", label: "Certificates" },
          { val: "🏛️", label: "Recognition" },
        ].map(({ val, label }) => (
          <div key={label} className="wp-stat-cell">
            <div style={{ fontSize: 20, marginBottom: 4 }}>{val}</div>
            <div style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 9, fontWeight: 700,
              textTransform: "uppercase", letterSpacing: "0.1em",
              color: "rgba(212,175,55,0.6)",
            }}>
              {label}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom badge */}
      <div style={{
        marginTop: "auto",
        background: "rgba(212,175,55,0.08)",
        border: "1px solid rgba(212,175,55,0.25)",
        borderRadius: 12,
        padding: "14px 16px",
        zIndex: 1,
        position: "relative",
      }}>
        <div style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: 9, fontWeight: 700,
          textTransform: "uppercase", letterSpacing: "0.14em",
          color: "rgba(212,175,55,0.55)", marginBottom: 4,
        }}>
          Global Exposure
        </div>
        <div style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: 16, fontWeight: 700,
          color: "#fffcf5",
        }}>
          International Peer Comparison
        </div>
      </div>
    </div>
  );
}

function BenefitCard({ title, desc, icon, gridClass, delay, visible, iconBg }) {
  return (
    <div
      className={`wp-card ${gridClass} ${visible ? "visible" : ""}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="wp-top-line" />
      <div className="wp-bg-icon">{icon}</div>

      <div className="wp-icon-box" style={{ background: iconBg }}>
        {icon}
      </div>

      <h3 className="wp-title" style={{ fontSize: "clamp(16px, 2vw, 20px)" }}>
        {title}
      </h3>

      <p className="wp-desc">{desc}</p>
    </div>
  );
}

/* ── Main export ─────────────────────────────────────────────────── */
export default function WhyParticipate() {
  const [sectionRef, sectionVisible] = useReveal();

  const cards = [
    {
      title: "Teamwork & Communication",
      desc: "Students cultivate collaborative skills by engaging in structured team-based problem solving where every answer impacts the next.",
      icon: "🤝",
      gridClass: "wp-span3",
      gridStyle: { gridColumn: "span 3" },
      delay: 0.1,
      iconBg: "rgba(26,58,106,0.08)",
    },
    {
      title: "Enhancement of Problem-Solving Skills",
      desc: "The relay format strengthens speed, accuracy and logical reasoning by forcing students to work through connected problems under time constraints.",
      icon: "🧠",
      gridClass: "wp-span3",
      gridStyle: { gridColumn: "span 3" },
      delay: 0.18,
      iconBg: "rgba(212,175,55,0.08)",
    },
    {
      title: "Strategic Thinking",
      desc: "The time-bound, sequential nature demands decision-making, planning and strategic execution instead of random guessing.",
      icon: "♟️",
      gridClass: "wp-span2",
      gridStyle: { gridColumn: "span 2" },
      delay: 0.26,
      iconBg: "rgba(100,60,180,0.07)",
    },
    {
      title: "Distinctive Competition Format",
      desc: "Unlike conventional Olympiads, the relay emphasises interdependence, coordination and collective success.",
      icon: "🔗",
      gridClass: "wp-span2",
      gridStyle: { gridColumn: "span 2" },
      delay: 0.34,
      iconBg: "rgba(10,102,64,0.07)",
    },
    {
      title: "Holistic Academic Growth",
      desc: "Participation supports conceptual clarity, exam readiness, confidence and broad academic exposure.",
      icon: "🌱",
      gridClass: "wp-span2",
      gridStyle: { gridColumn: "span 2" },
      delay: 0.42,
      iconBg: "rgba(212,175,55,0.06)",
    },
  ];

  return (
    <Section id="why" background="gray">
      <div style={{ padding: "clamp(48px, 7vw, 88px) 0" }}>
        <SectionHeader
          eyebrow="Why Participate"
          title="Why Join Vishwaroop Relay?"
          highlight={["Vishwaroop Relay"]}
          subtitle="The relay is intentionally designed to benefit students far beyond just one competition day."
          align="left"
        />

        <div ref={sectionRef} className="wp-bento">
          {/* Featured card */}
          <FeaturedCard visible={sectionVisible} />

          {/* Regular cards */}
          {cards.map((card) => (
            <BenefitCard
              key={card.title}
              {...card}
              visible={sectionVisible}
              style={card.gridStyle}
            />
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div
          style={{
            marginTop: "clamp(32px, 4vw, 48px)",
            background: "linear-gradient(135deg, #0D2150 0%, #1A3A6A 100%)",
            border: "1px solid rgba(212,175,55,0.25)",
            borderRadius: 18,
            padding: "clamp(20px, 3vw, 32px) clamp(24px, 4vw, 48px)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 20,
            position: "relative",
            overflow: "hidden",
            opacity: sectionVisible ? 1 : 0,
            transform: sectionVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease 0.5s, transform 0.6s ease 0.5s",
          }}
        >
          <div style={{
            position: "absolute", top: 0, left: "20%", right: "20%",
            height: 2,
            background: "linear-gradient(90deg, transparent, #D4AF37, transparent)",
          }} />
          <div style={{
            position: "absolute", bottom: -60, right: -60,
            width: 200, height: 200, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(212,175,55,0.08), transparent)",
            pointerEvents: "none",
          }} />

          <div>
            <div style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 10, fontWeight: 700,
              letterSpacing: "0.18em", textTransform: "uppercase",
              color: "rgba(212,175,55,0.55)", marginBottom: 6,
            }}>
              Ready to compete?
            </div>
            <div style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(18px, 3vw, 26px)",
              fontWeight: 700, color: "#fffcf5",
            }}>
              Register your school today
            </div>
          </div>

          <button
            onClick={() => window.open("https://relayexam.virtualprachar.com/login", "_blank")}
            style={{
              background: "linear-gradient(135deg, #D4AF37 0%, #f0d060 50%, #c9a227 100%)",
              backgroundSize: "200% auto",
              color: "#0D2150",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              border: "none",
              padding: "12px 28px",
              borderRadius: 8,
              cursor: "pointer",
              transition: "background-position 0.4s, transform 0.2s, box-shadow 0.3s",
              boxShadow: "0 6px 20px rgba(212,175,55,0.35)",
              whiteSpace: "nowrap",
              zIndex: 1,
              position: "relative",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundPosition = "right center";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 10px 28px rgba(212,175,55,0.5)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundPosition = "left center";
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 6px 20px rgba(212,175,55,0.35)";
            }}
          >
            Register Now ↗
          </button>
        </div>
      </div>
    </Section>
  );
}