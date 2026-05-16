import { useState, useEffect, useRef } from "react";
import eduLogo from "../assets/logos/Vishwaroop.png";
import { Link } from "react-router-dom";

/* ── Subject link config ─────────────────────────────────────────
   action types:
     "external"  → window.open(..., "_blank")
     "scroll"    → smooth scroll to section id on homepage
     "internal"  → React Router navigate
     "coming"    → Coming Soon — no navigation
────────────────────────────────────────────────────────────────── */
const subjects = [
  {
    name: "Science",
    slug: "science",
    icon: "⚗️",
    comingSoon: true,
    items: [
      { label: "About Science Relay",    action: "coming" },
      { label: "Registration",           action: "coming" },
      { label: "Brochure",               action: "coming" },
      { label: "Exam Schedule",          action: "coming" },
      { label: "Sample Papers",          action: "coming" },
      { label: "Result",                 action: "coming" },
      { label: "Download E-Certificate", action: "coming" },
    ],
  },
  {
    name: "Mathematics",
    slug: "maths",
    icon: "∑",
    comingSoon: false,
    items: [
      { label: "About Maths Relay",      action: "scroll",   target: "about" },
      { label: "Registration",           action: "external", target: "https://exam.vishwarooprelay.com/" },
      { label: "Brochure",               action: "external", target: "/brochure/maths-relay-brochure.pdf" },
      { label: "Exam Schedule",          action: "internal", target: "/subjects/maths/exam-schedule" },
      { label: "Sample Papers",          action: "coming" },
      { label: "Result",                 action: "external", target: "https://exam.vishwarooprelay.com/" },
      { label: "Download E-Certificate", action: "coming" },
    ],
  },
];

const navLinks = [
  { label: "About",           href: "#about" },
  { label: "Why Participate", href: "#why" },
  { label: "Rules",           href: "#rules" },
  { label: "Awards",          href: "#awards" },
  { label: "Preparation",     href: "#prep" },
  { label: "Contact",         href: "#contact" },
];

const REGISTRATION_LINK = "https://exam.vishwarooprelay.com/";

function handleItemClick(item, e, closeMenu) {
  e.preventDefault();
  switch (item.action) {
    case "external":
      window.open(item.target, "_blank", "noopener,noreferrer");
      if (closeMenu) closeMenu();
      break;
    case "scroll": {
      if (closeMenu) closeMenu();
      const el = document.getElementById(item.target);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      else window.location.href = `/#${item.target}`;
      break;
    }
    case "internal":
      if (closeMenu) closeMenu();
      window.location.href = item.target;
      break;
    case "coming":
    default:
      break;
  }
}

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=DM+Sans:wght@400;500;600&display=swap');

  @keyframes shimmer {
    0%   { background-position: -200% center; }
    100% { background-position:  200% center; }
  }
  @keyframes goldPulse {
    0%,100% { box-shadow: 0 0 0 0 rgba(212,175,55,0); }
    50%      { box-shadow: 0 0 20px 4px rgba(212,175,55,0.35); }
  }
  @keyframes slideDown {
    from { opacity: 0; transform: translateY(-8px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes menuSlide {
    from { opacity: 0; transform: translateX(40px); }
    to   { opacity: 1; transform: translateX(0); }
  }
  @keyframes csBlink {
    0%,100% { opacity: 1; }
    50%      { opacity: 0.45; }
  }

  .nav-shimmer-text {
    background: linear-gradient(105deg, #0D2150 0%, #0D2150 35%, #D4AF37 50%, #0D2150 65%, #0D2150 100%);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: shimmer 4s linear infinite;
  }
  .register-btn {
    background: linear-gradient(135deg, #D4AF37 0%, #f0d060 50%, #D4AF37 100%);
    background-size: 200% auto;
    color: #0D2150;
    font-weight: 700;
    font-family: 'DM Sans', sans-serif;
    font-size: 13px;
    letter-spacing: 0.05em;
    border: none;
    padding: 10px 22px;
    border-radius: 6px;
    cursor: pointer;
    transition: background-position 0.4s ease, transform 0.2s ease, box-shadow 0.3s ease;
    animation: goldPulse 3s ease-in-out infinite;
    white-space: nowrap;
  }
  .register-btn:hover {
    background-position: right center;
    transform: translateY(-2px) scale(1.02);
    box-shadow: 0 8px 24px rgba(212,175,55,0.45);
    animation: none;
  }
  .register-btn:active { transform: scale(0.97); }

  .dropdown-panel   { animation: slideDown 0.2s ease forwards; }
  .mobile-menu-item { animation: menuSlide 0.3s ease forwards; }

  .nav-link-gold::after {
    content: '';
    position: absolute;
    left: 0; bottom: -2px;
    height: 2px; width: 0;
    background: linear-gradient(90deg, #D4AF37, #f0d060);
    border-radius: 2px;
    transition: width 0.3s ease;
  }
  .nav-link-gold:hover::after,
  .nav-link-gold.active::after { width: 100%; }

  .gold-line-top {
    background: linear-gradient(90deg, transparent, #D4AF37 30%, #f0d060 50%, #D4AF37 70%, transparent);
    height: 2px; width: 100%;
  }

  /* Coming Soon badges */
  .cs-inline-badge {
    display: inline-flex;
    align-items: center;
    font-size: 8px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 2px 6px;
    border-radius: 4px;
    background: rgba(212,175,55,0.1);
    border: 1px solid rgba(212,175,55,0.3);
    color: #9a7a20;
    margin-left: 6px;
    animation: csBlink 2.5s ease-in-out infinite;
    white-space: nowrap;
    flex-shrink: 0;
  }
  .cs-subject-pill {
    display: inline-flex;
    align-items: center;
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    padding: 2px 8px;
    border-radius: 99px;
    background: rgba(212,175,55,0.1);
    border: 1px solid rgba(212,175,55,0.28);
    color: #9a7a20;
    margin-left: 8px;
    animation: csBlink 2.5s ease-in-out infinite;
    flex-shrink: 0;
  }

  @media (min-width: 768px) { .md-nav { display: flex !important; } }
  @media (max-width: 767px) { .md-nav { display: none  !important; } }
`;

export default function Navbar() {
  const [open, setOpen]                   = useState(false);
  const [active, setActive]               = useState("");
  const [scrolled, setScrolled]           = useState(false);
  const [subjectsOpen, setSubjectsOpen]   = useState(false);
  const [subjectsHover, setSubjectsHover] = useState(false);
  const hoverTimeout = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      let current = "";
      document.querySelectorAll("section[id]").forEach((s) => {
        const top = s.offsetTop - 150;
        if (window.scrollY >= top && window.scrollY <= top + s.offsetHeight)
          current = s.getAttribute("id");
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleEnter = () => { clearTimeout(hoverTimeout.current); setSubjectsHover(true); };
  const handleLeave = () => { hoverTimeout.current = setTimeout(() => setSubjectsHover(false), 150); };

  return (
    <>
      <style>{styles}</style>
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        transition: "all 0.4s ease",
        fontFamily: "'DM Sans', sans-serif",
        background: scrolled ? "rgba(255,252,245,0.96)" : "rgba(255,252,245,0.75)",
        backdropFilter: "blur(16px)", WebkitBackdropFilter: "blur(16px)",
        borderBottom: scrolled ? "1px solid rgba(212,175,55,0.25)" : "1px solid transparent",
        boxShadow: scrolled ? "0 4px 32px rgba(13,33,80,0.10)" : "none",
      }}>
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, opacity: scrolled ? 1 : 0, transition: "opacity 0.4s ease" }}>
          <div className="gold-line-top" />
        </div>

        <nav style={{
          maxWidth: 1280, margin: "0 auto",
          padding: scrolled ? "10px 32px" : "16px 32px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          transition: "padding 0.4s ease",
        }}>
          {/* ── Logo ── */}
          <Link to="/" style={{ display: "flex", alignItems: "center", gap: 12, textDecoration: "none" }}>
            <img src={eduLogo} alt="Vishwaroop" style={{
              height: scrolled ? 38 : 44, width: "auto",
              transition: "height 0.4s ease",
              filter: "drop-shadow(0 2px 8px rgba(212,175,55,0.3))",
            }} />
            <div style={{ lineHeight: 1.2 }}>
              <div style={{ fontSize: 9, textTransform: "uppercase", letterSpacing: "0.22em", color: "#9a8040", fontWeight: 600, marginBottom: 2 }}>
                Vishwaroop
              </div>
              <div className="nav-shimmer-text" style={{ fontSize: 17, fontFamily: "'Cormorant Garamond', serif", fontWeight: 700 }}>
                International Relay
              </div>
            </div>
          </Link>

          {/* ── Desktop nav ── */}
          <div className="md-nav" style={{ display: "none", alignItems: "center", gap: 32 }}>
            <ul style={{ display: "flex", alignItems: "center", gap: 28, listStyle: "none", margin: 0, padding: 0 }}>

              {/* Subjects dropdown */}
              <li style={{ position: "relative" }} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
                <button style={{
                  display: "flex", alignItems: "center", gap: 5,
                  background: "none", border: "none", cursor: "pointer",
                  color: subjectsHover ? "#D4AF37" : "#0D2150",
                  fontWeight: 600, fontSize: 14, fontFamily: "'DM Sans', sans-serif",
                  padding: "4px 0", transition: "color 0.2s", letterSpacing: "0.01em",
                }}>
                  Subjects
                  <span style={{ fontSize: 9, transition: "transform 0.25s ease", transform: subjectsHover ? "rotate(180deg)" : "none", color: "#D4AF37" }}>▼</span>
                </button>

                {subjectsHover && (
                  <div
                    className="dropdown-panel"
                    onMouseEnter={handleEnter}
                    onMouseLeave={handleLeave}
                    style={{
                      position: "absolute", left: "50%", top: "calc(100% + 12px)",
                      transform: "translateX(-50%)", width: 580,
                      background: "#fffcf5",
                      border: "1px solid rgba(212,175,55,0.3)", borderRadius: 14,
                      padding: "28px 32px",
                      boxShadow: "0 20px 60px rgba(13,33,80,0.18)",
                    }}
                  >
                    {/* Top shimmer line */}
                    <div style={{ position: "absolute", top: 0, left: 20, right: 20, height: 2, background: "linear-gradient(90deg, transparent, #D4AF37, transparent)" }} />

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
                      {subjects.map((subject) => (
                        <div key={subject.slug}>
                          {/* Subject heading */}
                          <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14, paddingBottom: 10, borderBottom: "1px solid rgba(212,175,55,0.2)" }}>
                            <span style={{ fontSize: 16 }}>{subject.icon}</span>
                            <h4 style={{ margin: 0, fontSize: 11, fontWeight: 700, color: "#0D2150", textTransform: "uppercase", letterSpacing: "0.12em" }}>
                              {subject.name}
                            </h4>
                            {subject.comingSoon && <span className="cs-subject-pill">⏳ Soon</span>}
                          </div>

                          {/* Items */}
                          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 6 }}>
                            {subject.items.map((item) => {
                              const isCS = item.action === "coming";
                              return (
                                <li key={item.label}>
                                  <a
                                    href="#"
                                    onClick={(e) => handleItemClick(item, e)}
                                    title={isCS ? "Coming Soon" : undefined}
                                    style={{
                                      fontSize: 13,
                                      color: isCS ? "#b8c0cc" : "#4a5568",
                                      textDecoration: "none",
                                      display: "flex", alignItems: "center", gap: 6,
                                      padding: "3px 0",
                                      cursor: isCS ? "default" : "pointer",
                                      transition: "color 0.2s, transform 0.2s",
                                      fontWeight: 400,
                                    }}
                                    onMouseEnter={(e) => {
                                      if (!isCS) {
                                        e.currentTarget.style.color = "#D4AF37";
                                        e.currentTarget.style.transform = "translateX(4px)";
                                      }
                                    }}
                                    onMouseLeave={(e) => {
                                      e.currentTarget.style.color = isCS ? "#b8c0cc" : "#4a5568";
                                      e.currentTarget.style.transform = "translateX(0)";
                                    }}
                                  >
                                    <span style={{ color: isCS ? "#d8dde5" : "#D4AF37", fontSize: 10, flexShrink: 0 }}>›</span>
                                    {item.label}
                                    {isCS && <span className="cs-inline-badge">Soon</span>}
                                  </a>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      ))}
                    </div>

                    {/* Bottom strip */}
                    <div style={{ marginTop: 20, paddingTop: 16, borderTop: "1px solid rgba(212,175,55,0.15)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                      <span style={{ fontSize: 11, color: "#9a8040", fontWeight: 500 }}>🏆 National Level Competition · 2026</span>
                      <a href={REGISTRATION_LINK} target="_blank" rel="noreferrer" style={{ fontSize: 11, color: "#D4AF37", fontWeight: 600, textDecoration: "none" }}>
                        Register Now →
                      </a>
                    </div>
                  </div>
                )}
              </li>

              {navLinks.map((link) => {
                const isActive = active === link.href.replace("#", "");
                return (
                  <li key={link.href} style={{ position: "relative" }}>
                    <a
                      href={link.href}
                      className={`nav-link-gold ${isActive ? "active" : ""}`}
                      style={{
                        position: "relative", textDecoration: "none",
                        color: isActive ? "#D4AF37" : "#0D2150",
                        fontWeight: isActive ? 600 : 500,
                        fontSize: 14, padding: "4px 0",
                        transition: "color 0.2s", letterSpacing: "0.01em",
                      }}
                      onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = "#D4AF37"; }}
                      onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = "#0D2150"; }}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            <button className="register-btn" onClick={() => window.open(REGISTRATION_LINK, "_blank")}>
              Register Now ↗
            </button>
          </div>

          {/* ── Hamburger ── */}
          <button onClick={() => setOpen(!open)} style={{ background: "none", border: "none", cursor: "pointer", padding: 8, display: "flex", flexDirection: "column", gap: 5 }} aria-label="Toggle menu">
            {[0, 1, 2].map((i) => (
              <span key={i} style={{
                display: "block", height: 2,
                width: i === 1 ? (open ? 0 : 24) : 24,
                background: "#D4AF37", borderRadius: 2, transition: "all 0.3s ease",
                transform: open
                  ? i === 0 ? "rotate(45deg) translate(5px,5px)"
                  : i === 2 ? "rotate(-45deg) translate(5px,-5px)"
                  : "scaleX(0)"
                  : "none",
              }} />
            ))}
          </button>
        </nav>

        {/* ── Mobile menu ── */}
        {open && (
          <div style={{
            position: "absolute", top: "100%", left: 0, right: 0,
            background: "rgba(13,33,80,0.97)", backdropFilter: "blur(20px)",
            borderTop: "2px solid #D4AF37",
            padding: "24px 28px 36px",
            display: "flex", flexDirection: "column",
            minHeight: "calc(100vh - 70px)",
            animation: "slideDown 0.3s ease",
            overflowY: "auto",
          }}>
            <div style={{ height: 1, background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.4), transparent)", marginBottom: 24 }} />

            {/* Subjects accordion */}
            <div style={{ marginBottom: 8 }}>
              <button
                onClick={() => setSubjectsOpen(!subjectsOpen)}
                style={{
                  display: "flex", width: "100%", alignItems: "center", justifyContent: "space-between",
                  background: "none", border: "none", cursor: "pointer",
                  color: "#fffcf5", fontSize: 17, fontWeight: 600,
                  fontFamily: "'DM Sans', sans-serif",
                  padding: "12px 0", borderBottom: "1px solid rgba(212,175,55,0.2)",
                }}
              >
                Subjects
                <span style={{ color: "#D4AF37", fontSize: 11, transition: "transform 0.3s", transform: subjectsOpen ? "rotate(180deg)" : "none" }}>▼</span>
              </button>

              {subjectsOpen && (
                <div style={{ padding: "16px 0 8px 16px", borderLeft: "2px solid rgba(212,175,55,0.4)", marginTop: 8, marginBottom: 8, animation: "slideDown 0.2s ease" }}>
                  {subjects.map((subject) => (
                    <div key={subject.slug} style={{ marginBottom: 20 }}>
                      {/* Subject label row */}
                      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                        <span style={{ fontSize: 10, fontWeight: 700, color: "#D4AF37", textTransform: "uppercase", letterSpacing: "0.15em" }}>
                          {subject.icon} {subject.name}
                        </span>
                        {subject.comingSoon && <span className="cs-subject-pill">⏳ Soon</span>}
                      </div>

                      {/* Items */}
                      {subject.items.map((item) => {
                        const isCS = item.action === "coming";
                        return (
                          <a
                            key={item.label}
                            href="#"
                            onClick={(e) => handleItemClick(item, e, () => setOpen(false))}
                            style={{
                              display: "flex", alignItems: "center", gap: 6,
                              color: isCS ? "rgba(255,252,245,0.28)" : "rgba(255,252,245,0.7)",
                              textDecoration: "none", fontSize: 14,
                              padding: "6px 0",
                              cursor: isCS ? "default" : "pointer",
                              transition: "color 0.2s",
                            }}
                            onMouseEnter={(e) => { if (!isCS) e.currentTarget.style.color = "#D4AF37"; }}
                            onMouseLeave={(e) => { e.currentTarget.style.color = isCS ? "rgba(255,252,245,0.28)" : "rgba(255,252,245,0.7)"; }}
                          >
                            {item.label}
                            {isCS && <span className="cs-inline-badge">Soon</span>}
                          </a>
                        );
                      })}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Nav links */}
            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="mobile-menu-item"
                style={{
                  display: "block",
                  color: active === link.href.replace("#", "") ? "#D4AF37" : "rgba(255,252,245,0.85)",
                  textDecoration: "none", fontSize: 17, fontWeight: 500,
                  padding: "12px 0", borderBottom: "1px solid rgba(212,175,55,0.1)",
                  transition: "color 0.2s, padding-left 0.2s",
                  animationDelay: `${i * 0.05}s`, fontFamily: "'DM Sans', sans-serif",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#D4AF37"; e.currentTarget.style.paddingLeft = "8px"; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,252,245,0.85)"; e.currentTarget.style.paddingLeft = "0"; }}
              >
                {link.label}
              </a>
            ))}

            <div style={{ marginTop: 32 }}>
              <button
                className="register-btn"
                style={{ width: "100%", padding: "14px 22px", fontSize: 15, borderRadius: 8 }}
                onClick={() => window.open(REGISTRATION_LINK, "_blank")}
              >
                Register for Relay ↗
              </button>
              <p style={{ textAlign: "center", marginTop: 12, fontSize: 11, color: "rgba(212,175,55,0.5)", letterSpacing: "0.05em" }}>
                National Level · Science & Mathematics
              </p>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
