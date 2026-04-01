import { useState, useEffect, useRef } from "react";
import Button from "./Button";
import eduLogo from "../assets/logos/Vishwaroop.png";
import { Link } from "react-router-dom";

const subjects = [
  {
    name: "Science",
    slug: "science",
    icon: "⚗️",
    items: [
      { label: "About Science Relay", path: "" },
      { label: "Registration", path: "registration" },
      { label: "Brochure", path: "brochure" },
      { label: "Exam Schedule", path: "exam-schedule" },
      { label: "Sample Papers", path: "sample-papers" },
      { label: "Result", path: "result" },
      { label: "Download E-Certificate", path: "e-certificate" },
    ],
  },
  {
    name: "Mathematics",
    slug: "maths",
    icon: "∑",
    items: [
      { label: "About Maths Relay", path: "" },
      { label: "Registration", path: "registration" },
      { label: "Brochure", path: "brochure" },
      { label: "Exam Schedule", path: "exam-schedule" },
      { label: "Sample Papers", path: "sample-papers" },
      { label: "Result", path: "result" },
      { label: "Download E-Certificate", path: "e-certificate" },
    ],
  },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Why Participate", href: "#why" },
  { label: "Rules", href: "#rules" },
  { label: "Awards", href: "#awards" },
  { label: "Preparation", href: "#prep" },
  { label: "Contact", href: "#contact" },
];

const registrationLink = "https://relayexam.virtualprachar.com/login";

// Shimmer keyframes injected once
const shimmerStyle = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=DM+Sans:wght@400;500;600&display=swap');

  @keyframes shimmer {
    0% { background-position: -200% center; }
    100% { background-position: 200% center; }
  }
  @keyframes goldPulse {
    0%, 100% { box-shadow: 0 0 0 0 rgba(212,175,55,0); }
    50% { box-shadow: 0 0 20px 4px rgba(212,175,55,0.35); }
  }
  @keyframes slideDown {
    from { opacity: 0; transform: translateY(-8px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }
  @keyframes menuSlide {
    from { opacity: 0; transform: translateX(40px); }
    to { opacity: 1; transform: translateX(0); }
  }
  .nav-shimmer-text {
    background: linear-gradient(
      105deg,
      #0D2150 0%,
      #0D2150 35%,
      #D4AF37 50%,
      #0D2150 65%,
      #0D2150 100%
    );
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
  .register-btn:active {
    transform: scale(0.97);
  }
  .dropdown-panel {
    animation: slideDown 0.2s ease forwards;
  }
  .mobile-menu-item {
    animation: menuSlide 0.3s ease forwards;
  }
  .nav-link-gold::after {
    content: '';
    position: absolute;
    left: 0; bottom: -2px;
    height: 2px;
    width: 0;
    background: linear-gradient(90deg, #D4AF37, #f0d060);
    border-radius: 2px;
    transition: width 0.3s ease;
  }
  .nav-link-gold:hover::after,
  .nav-link-gold.active::after {
    width: 100%;
  }
  .gold-line-top {
    background: linear-gradient(90deg, transparent, #D4AF37 30%, #f0d060 50%, #D4AF37 70%, transparent);
    height: 2px;
    width: 100%;
  }
`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [subjectsOpen, setSubjectsOpen] = useState(false);
  const [subjectsHover, setSubjectsHover] = useState(false);
  const hoverTimeout = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      let current = "";
      document.querySelectorAll("section[id]").forEach((section) => {
        const top = section.offsetTop - 150;
        const bottom = top + section.offsetHeight;
        if (window.scrollY >= top && window.scrollY <= bottom) {
          current = section.getAttribute("id");
        }
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSubjectsEnter = () => {
    clearTimeout(hoverTimeout.current);
    setSubjectsHover(true);
  };
  const handleSubjectsLeave = () => {
    hoverTimeout.current = setTimeout(() => setSubjectsHover(false), 150);
  };

  return (
    <>
      <style>{shimmerStyle}</style>
      <header
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 50,
          transition: "all 0.4s ease",
          fontFamily: "'DM Sans', sans-serif",
          background: scrolled
            ? "rgba(255,252,245,0.96)"
            : "rgba(255,252,245,0.75)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: scrolled
            ? "1px solid rgba(212,175,55,0.25)"
            : "1px solid transparent",
          boxShadow: scrolled
            ? "0 4px 32px rgba(13,33,80,0.10)"
            : "none",
        }}
      >
        {/* Gold top accent line — only visible when scrolled */}
        <div
          style={{
            position: "absolute",
            top: 0, left: 0, right: 0,
            opacity: scrolled ? 1 : 0,
            transition: "opacity 0.4s ease",
          }}
        >
          <div className="gold-line-top" />
        </div>

        <nav
          style={{
            maxWidth: 1280,
            margin: "0 auto",
            padding: scrolled ? "10px 32px" : "16px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            transition: "padding 0.4s ease",
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              textDecoration: "none",
            }}
          >
            <div style={{ position: "relative" }}>
              <img
                src={eduLogo}
                alt="Vishwaroop"
                style={{
                  height: scrolled ? 38 : 44,
                  width: "auto",
                  transition: "height 0.4s ease",
                  filter: "drop-shadow(0 2px 8px rgba(212,175,55,0.3))",
                }}
              />
            </div>
            <div style={{ lineHeight: 1.2 }}>
              <div
                style={{
                  fontSize: 9,
                  textTransform: "uppercase",
                  letterSpacing: "0.22em",
                  color: "#9a8040",
                  fontWeight: 600,
                  marginBottom: 2,
                }}
              >
                Vishwaroop
              </div>
              <div
                className="nav-shimmer-text"
                style={{
                  fontSize: 17,
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 700,
                  letterSpacing: "-0.01em",
                }}
              >
                International Relay
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div
            style={{
              display: "none",
              alignItems: "center",
              gap: 32,
            }}
            className="md-nav"
          >
            <ul
              style={{
                display: "flex",
                alignItems: "center",
                gap: 28,
                listStyle: "none",
                margin: 0,
                padding: 0,
                fontSize: 14,
                fontWeight: 500,
              }}
            >
              {/* Subjects Dropdown */}
              <li
                style={{ position: "relative" }}
                onMouseEnter={handleSubjectsEnter}
                onMouseLeave={handleSubjectsLeave}
              >
                <button
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 5,
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: subjectsHover ? "#D4AF37" : "#0D2150",
                    fontWeight: 600,
                    fontSize: 14,
                    fontFamily: "'DM Sans', sans-serif",
                    padding: "4px 0",
                    transition: "color 0.2s",
                    letterSpacing: "0.01em",
                  }}
                >
                  Subjects
                  <span
                    style={{
                      fontSize: 9,
                      marginTop: 1,
                      transition: "transform 0.25s ease",
                      transform: subjectsHover ? "rotate(180deg)" : "rotate(0)",
                      color: "#D4AF37",
                    }}
                  >
                    ▼
                  </span>
                </button>

                {subjectsHover && (
                  <div
                    className="dropdown-panel"
                    onMouseEnter={handleSubjectsEnter}
                    onMouseLeave={handleSubjectsLeave}
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: "calc(100% + 12px)",
                      transform: "translateX(-50%)",
                      width: 560,
                      background: "#fffcf5",
                      border: "1px solid rgba(212,175,55,0.3)",
                      borderRadius: 14,
                      padding: "28px 32px",
                      boxShadow: "0 20px 60px rgba(13,33,80,0.18), 0 0 0 1px rgba(212,175,55,0.1)",
                    }}
                  >
                    {/* Gold top border */}
                    <div
                      style={{
                        position: "absolute",
                        top: 0, left: 20, right: 20,
                        height: 2,
                        background: "linear-gradient(90deg, transparent, #D4AF37, transparent)",
                        borderRadius: 2,
                      }}
                    />
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
                      {subjects.map((subject) => (
                        <div key={subject.slug}>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 8,
                              marginBottom: 14,
                              paddingBottom: 10,
                              borderBottom: "1px solid rgba(212,175,55,0.2)",
                            }}
                          >
                            <span style={{ fontSize: 16 }}>{subject.icon}</span>
                            <h4
                              style={{
                                margin: 0,
                                fontSize: 11,
                                fontWeight: 700,
                                color: "#0D2150",
                                textTransform: "uppercase",
                                letterSpacing: "0.12em",
                              }}
                            >
                              {subject.name}
                            </h4>
                          </div>
                          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                            {subject.items.map((item) => (
                              <li key={item.label}>
                                <a
                                  href={`/subjects/${subject.slug}/${item.path}`}
                                  style={{
                                    fontSize: 13,
                                    color: "#4a5568",
                                    textDecoration: "none",
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 6,
                                    padding: "3px 0",
                                    transition: "color 0.2s, transform 0.2s",
                                    fontWeight: 400,
                                  }}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.color = "#D4AF37";
                                    e.currentTarget.style.transform = "translateX(4px)";
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.color = "#4a5568";
                                    e.currentTarget.style.transform = "translateX(0)";
                                  }}
                                >
                                  <span style={{ color: "#D4AF37", fontSize: 10 }}>›</span>
                                  {item.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    {/* Bottom badge */}
                    <div
                      style={{
                        marginTop: 20,
                        paddingTop: 16,
                        borderTop: "1px solid rgba(212,175,55,0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <span style={{ fontSize: 11, color: "#9a8040", fontWeight: 500 }}>
                        🏆 National Level Competition · Since 2020
                      </span>
                      <a
                        href="/subjects"
                        style={{
                          fontSize: 11,
                          color: "#D4AF37",
                          fontWeight: 600,
                          textDecoration: "none",
                          letterSpacing: "0.04em",
                        }}
                      >
                        View All →
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
                        position: "relative",
                        textDecoration: "none",
                        color: isActive ? "#D4AF37" : "#0D2150",
                        fontWeight: isActive ? 600 : 500,
                        fontSize: 14,
                        padding: "4px 0",
                        transition: "color 0.2s",
                        letterSpacing: "0.01em",
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) e.currentTarget.style.color = "#D4AF37";
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) e.currentTarget.style.color = "#0D2150";
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
            </ul>

            <button
              className="register-btn"
              onClick={() => window.open(registrationLink, "_blank")}
            >
              Register Now ↗
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 8,
              display: "flex",
              flexDirection: "column",
              gap: 5,
            }}
            aria-label="Toggle menu"
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  height: 2,
                  width: i === 1 ? (open ? 0 : 24) : 24,
                  background: "#D4AF37",
                  borderRadius: 2,
                  transition: "all 0.3s ease",
                  transform:
                    open
                      ? i === 0
                        ? "rotate(45deg) translate(5px, 5px)"
                        : i === 2
                        ? "rotate(-45deg) translate(5px, -5px)"
                        : "scaleX(0)"
                      : "none",
                }}
              />
            ))}
          </button>
        </nav>

        {/* Mobile Menu */}
        {open && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              background: "rgba(13,33,80,0.97)",
              backdropFilter: "blur(20px)",
              borderTop: "2px solid #D4AF37",
              padding: "24px 28px 36px",
              display: "flex",
              flexDirection: "column",
              gap: 0,
              minHeight: "calc(100vh - 70px)",
              animation: "slideDown 0.3s ease",
            }}
          >
            {/* Gold decorative line */}
            <div
              style={{
                height: 1,
                background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.4), transparent)",
                marginBottom: 24,
              }}
            />

            {/* Subjects accordion */}
            <div style={{ marginBottom: 8 }}>
              <button
                onClick={() => setSubjectsOpen(!subjectsOpen)}
                style={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  color: "#fffcf5",
                  fontSize: 17,
                  fontWeight: 600,
                  fontFamily: "'DM Sans', sans-serif",
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(212,175,55,0.2)",
                }}
              >
                Subjects
                <span
                  style={{
                    color: "#D4AF37",
                    fontSize: 11,
                    transition: "transform 0.3s",
                    transform: subjectsOpen ? "rotate(180deg)" : "rotate(0)",
                  }}
                >
                  ▼
                </span>
              </button>

              {subjectsOpen && (
                <div
                  style={{
                    padding: "16px 0 8px 16px",
                    borderLeft: "2px solid rgba(212,175,55,0.4)",
                    marginTop: 8,
                    marginBottom: 8,
                    animation: "slideDown 0.2s ease",
                  }}
                >
                  {subjects.map((subject) => (
                    <div key={subject.slug} style={{ marginBottom: 16 }}>
                      <p
                        style={{
                          margin: "0 0 8px",
                          fontSize: 10,
                          fontWeight: 700,
                          color: "#D4AF37",
                          textTransform: "uppercase",
                          letterSpacing: "0.15em",
                        }}
                      >
                        {subject.icon} {subject.name}
                      </p>
                      {subject.items.slice(0, 4).map((item) => (
                        <a
                          key={item.label}
                          href={`/subjects/${subject.slug}/${item.path}`}
                          style={{
                            display: "block",
                            color: "rgba(255,252,245,0.7)",
                            textDecoration: "none",
                            fontSize: 14,
                            padding: "6px 0",
                            transition: "color 0.2s",
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = "#D4AF37")}
                          onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,252,245,0.7)")}
                        >
                          {item.label}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {navLinks.map((link, i) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="mobile-menu-item"
                style={{
                  display: "block",
                  color: active === link.href.replace("#", "") ? "#D4AF37" : "rgba(255,252,245,0.85)",
                  textDecoration: "none",
                  fontSize: 17,
                  fontWeight: 500,
                  padding: "12px 0",
                  borderBottom: "1px solid rgba(212,175,55,0.1)",
                  transition: "color 0.2s, padding-left 0.2s",
                  animationDelay: `${i * 0.05}s`,
                  fontFamily: "'DM Sans', sans-serif",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#D4AF37";
                  e.currentTarget.style.paddingLeft = "8px";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "rgba(255,252,245,0.85)";
                  e.currentTarget.style.paddingLeft = "0";
                }}
              >
                {link.label}
              </a>
            ))}

            <div style={{ marginTop: 32 }}>
              <button
                className="register-btn"
                style={{ width: "100%", padding: "14px 22px", fontSize: 15, borderRadius: 8 }}
                onClick={() => window.open(registrationLink, "_blank")}
              >
                Register for Relay ↗
              </button>
              <p
                style={{
                  textAlign: "center",
                  marginTop: 12,
                  fontSize: 11,
                  color: "rgba(212,175,55,0.5)",
                  letterSpacing: "0.05em",
                }}
              >
                National Level · Science & Mathematics
              </p>
            </div>
          </div>
        )}
      </header>

      {/* Inline responsive override — desktop nav visible ≥768px */}
      <style>{`
        @media (min-width: 768px) {
          .md-nav { display: flex !important; }
        }
        @media (max-width: 767px) {
          .md-nav { display: none !important; }
        }
      `}</style>
    </>
  );
}