import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

/* ── Styles ─────────────────────────────────────────────────────── */
const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=DM+Sans:wght@300;400;500;600&display=swap');

  @keyframes cfFadeUp {
    from { opacity: 0; transform: translateY(24px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes cfShimmer {
    0%   { background-position: -300% center; }
    100% { background-position: 300% center; }
  }
  @keyframes cfGoldPulse {
    0%,100% { box-shadow: 0 0 0 0 rgba(212,175,55,0); }
    50%      { box-shadow: 0 0 20px 4px rgba(212,175,55,0.2); }
  }
  @keyframes cfLinkSlide {
    from { width: 0; }
    to   { width: 100%; }
  }
  @keyframes cfSocialPop {
    from { opacity: 0; transform: scale(0.7) translateY(10px); }
    to   { opacity: 1; transform: scale(1) translateY(0); }
  }

  .cf-footer {
    background: linear-gradient(160deg, #050c1e 0%, #0D2150 60%, #071530 100%);
    border-top: 2px solid rgba(212,175,55,0.3);
    position: relative;
    overflow: hidden;
    font-family: 'DM Sans', sans-serif;
  }

  .cf-gold-shimmer {
    background: linear-gradient(105deg, #fffcf5 0%, #fffcf5 30%, #D4AF37 50%, #fffcf5 70%, #fffcf5 100%);
    background-size: 300% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: cfShimmer 5s linear infinite;
  }

  .cf-col {
    opacity: 0;
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  .cf-col.visible {
    animation: cfFadeUp 0.6s cubic-bezier(0.22,1,0.36,1) forwards;
  }

  .cf-section-label {
    font-size: 9px;
    font-weight: 700;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: rgba(212,175,55,0.6);
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .cf-section-label::after {
    content: '';
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, rgba(212,175,55,0.3), transparent);
  }

  .cf-link {
    color: rgba(255,252,245,0.65);
    text-decoration: none;
    font-size: 14px;
    font-weight: 400;
    transition: color 0.25s;
    position: relative;
    display: inline-block;
  }
  .cf-link::after {
    content: '';
    position: absolute;
    left: 0; bottom: -2px;
    height: 1px;
    width: 0;
    background: #D4AF37;
    transition: width 0.3s ease;
  }
  .cf-link:hover {
    color: #D4AF37;
  }
  .cf-link:hover::after {
    width: 100%;
  }

  .cf-contact-item {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding: 12px 0;
    border-bottom: 1px solid rgba(212,175,55,0.08);
    transition: padding-left 0.3s;
    cursor: default;
  }
  .cf-contact-item:last-child { border-bottom: none; }
  .cf-contact-item:hover { padding-left: 6px; }

  .cf-social-btn {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    border: 1px solid rgba(212,175,55,0.2);
    background: rgba(255,252,245,0.04);
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(255,252,245,0.5);
    text-decoration: none;
    transition: background 0.3s, border-color 0.3s, color 0.3s, transform 0.3s;
    opacity: 0;
    cursor: pointer;
  }
  .cf-social-btn.visible {
    animation: cfSocialPop 0.4s cubic-bezier(0.22,1,0.36,1) forwards;
  }
  .cf-social-btn:hover {
    background: rgba(212,175,55,0.12);
    border-color: rgba(212,175,55,0.5);
    color: #D4AF37;
    transform: translateY(-4px);
    animation: cfGoldPulse 2s ease-in-out infinite;
  }

  .cf-timing-box {
    background: rgba(255,252,245,0.04);
    border: 1px solid rgba(212,175,55,0.15);
    border-radius: 12px;
    padding: 14px 16px;
    display: flex;
    gap: 12px;
    align-items: flex-start;
    transition: border-color 0.3s, background 0.3s;
    cursor: default;
  }
  .cf-timing-box:hover {
    border-color: rgba(212,175,55,0.35);
    background: rgba(212,175,55,0.04);
  }

  .cf-register-strip {
    background: linear-gradient(135deg, rgba(212,175,55,0.1) 0%, rgba(212,175,55,0.04) 100%);
    border: 1px solid rgba(212,175,55,0.25);
    border-radius: 14px;
    padding: 18px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
    flex-wrap: wrap;
    transition: border-color 0.3s, background 0.3s;
    cursor: pointer;
  }
  .cf-register-strip:hover {
    border-color: rgba(212,175,55,0.5);
    background: rgba(212,175,55,0.08);
  }

  .cf-bottom-link {
    color: rgba(255,252,245,0.35);
    text-decoration: none;
    font-size: 10px;
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    transition: color 0.25s;
  }
  .cf-bottom-link:hover { color: #D4AF37; }

  .cf-divider {
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(212,175,55,0.2) 30%, rgba(212,175,55,0.2) 70%, transparent);
    margin: 48px 0 28px;
  }

  /* Responsive grid */
  .cf-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: clamp(24px, 4vw, 48px);
    align-items: start;
  }
  @media (max-width: 900px) {
    .cf-grid { grid-template-columns: repeat(2, 1fr); }
  }
  @media (max-width: 540px) {
    .cf-grid { grid-template-columns: 1fr; }
  }
`;

let injected = false;
function useReveal(threshold = 0.1) {
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

/* ── Main export ─────────────────────────────────────────────────── */
export default function ContactFooter() {
  const [gridRef, gridVisible] = useReveal(0.05);

  const socials = [
    {
      href: "https://www.facebook.com/share/1Crssa21Vm/",
      label: "Facebook",
      icon: <FacebookIcon />,
      delay: "0.4s",
    },
    {
      href: "https://www.instagram.com/vishwaroopolympiad",
      label: "Instagram",
      icon: <InstagramIcon />,
      delay: "0.5s",
    },
    {
      href: "https://youtube.com/@vishwaroopolympiad",
      label: "YouTube",
      icon: <YouTubeIcon />,
      delay: "0.6s",
    },
  ];

  return (
    <footer id="contact" className="cf-footer">
      {/* Ambient blobs */}
      <div style={{
        position: "absolute", top: -80, left: -80,
        width: 400, height: 400, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(212,175,55,0.06), transparent 70%)",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", bottom: -60, right: -60,
        width: 300, height: 300, borderRadius: "50%",
        background: "radial-gradient(circle, rgba(26,58,106,0.5), transparent 70%)",
        pointerEvents: "none",
      }} />

      {/* Gold top shimmer line */}
      <div style={{
        position: "absolute", top: 0, left: "20%", right: "20%",
        height: 2,
        background: "linear-gradient(90deg, transparent, #D4AF37 40%, #f5d97a 60%, transparent)",
      }} />

      <div style={{
        maxWidth: 1280,
        margin: "0 auto",
        padding: "clamp(48px, 7vw, 80px) clamp(20px, 5vw, 48px) clamp(28px, 4vw, 48px)",
        position: "relative",
        zIndex: 1,
      }}>

        {/* ── Main grid ── */}
        <div ref={gridRef} className="cf-grid">

          {/* 1. Brand */}
          <div
            className={`cf-col ${gridVisible ? "visible" : ""}`}
            style={{ animationDelay: "0s" }}
          >
            <div>
              <div style={{
                fontSize: 9, fontWeight: 700,
                letterSpacing: "0.22em", textTransform: "uppercase",
                color: "rgba(212,175,55,0.5)", marginBottom: 10,
              }}>
                Vishwaroop
              </div>
              <h3
                className="cf-gold-shimmer"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 26, fontWeight: 700,
                  margin: "0 0 14px",
                  lineHeight: 1.15,
                }}
              >
                International Relay
              </h3>
              <p style={{
                fontSize: 13, color: "rgba(255,252,245,0.5)",
                lineHeight: 1.75, fontWeight: 300, margin: 0,
              }}>
                An international academic relay designed to combine problem-solving,
                collaboration, and healthy competition for school students globally.
              </p>
            </div>

            {/* Mini stat pills */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {[
                { icon: "🏆", text: "National Level Competition" },
                { icon: "📚", text: "Subjective Relay" },
                { icon: "🌐", text: "Online Mode · 2026" },
              ].map(({ icon, text }) => (
                <div key={text} style={{
                  display: "flex", alignItems: "center", gap: 8,
                  fontSize: 12, color: "rgba(255,252,245,0.45)", fontWeight: 400,
                }}>
                  <span style={{ fontSize: 13 }}>{icon}</span>
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* 2. Contact */}
          <div
            className={`cf-col ${gridVisible ? "visible" : ""}`}
            style={{ animationDelay: "0.1s" }}
          >
            <span className="cf-section-label">Support Desk</span>

            <div>
              <div className="cf-contact-item">
                <span style={{
                  fontSize: 9, fontWeight: 700,
                  textTransform: "uppercase", letterSpacing: "0.14em",
                  color: "rgba(212,175,55,0.45)",
                }}>
                  Email
                </span>
                <a
                  href="mailto:vishwarooprelay@gmail.com"
                  className="cf-link"
                  style={{ fontWeight: 500 }}
                >
                  vishwarooprelay@gmail.com
                </a>
              </div>
              <div className="cf-contact-item">
                <span style={{
                  fontSize: 9, fontWeight: 700,
                  textTransform: "uppercase", letterSpacing: "0.14em",
                  color: "rgba(212,175,55,0.45)",
                }}>
                  Phone
                </span>
                <span style={{
                  fontSize: 14, fontWeight: 500,
                  color: "rgba(255,252,245,0.75)",
                }}>
                  +91 89296 60722
                </span>
              </div>
              <div className="cf-contact-item">
                <span style={{
                  fontSize: 9, fontWeight: 700,
                  textTransform: "uppercase", letterSpacing: "0.14em",
                  color: "rgba(212,175,55,0.45)",
                }}>
                  Address
                </span>
                <span style={{
                  fontSize: 13, fontWeight: 400,
                  color: "rgba(255,252,245,0.55)", lineHeight: 1.6,
                }}>
                  B-3/1, Model Town<br />Delhi – 110009
                </span>
              </div>
            </div>
          </div>

          {/* 3. Availability */}
          <div
            className={`cf-col ${gridVisible ? "visible" : ""}`}
            style={{ animationDelay: "0.2s" }}
          >
            <span className="cf-section-label">Availability</span>

            <div className="cf-timing-box">
              <div style={{
                width: 36, height: 36, borderRadius: 10,
                background: "rgba(212,175,55,0.1)",
                border: "1px solid rgba(212,175,55,0.25)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 16, flexShrink: 0,
              }}>
                ⏱
              </div>
              <div>
                <div style={{
                  fontSize: 13, fontWeight: 600,
                  color: "#fffcf5", marginBottom: 3,
                }}>
                  Monday – Saturday
                </div>
                <div style={{
                  fontSize: 12, color: "rgba(255,252,245,0.5)", marginBottom: 3,
                }}>
                  10:00 AM – 7:00 PM
                </div>
                <div style={{
                  fontSize: 9, fontWeight: 700,
                  textTransform: "uppercase", letterSpacing: "0.12em",
                  color: "rgba(212,175,55,0.45)",
                }}>
                  Working Days Only
                </div>
              </div>
            </div>

            {/* Register CTA strip */}
            {/* Quick nav */}
            <div>
              <div style={{
                fontSize: 9, fontWeight: 700,
                textTransform: "uppercase", letterSpacing: "0.14em",
                color: "rgba(212,175,55,0.4)", marginBottom: 10,
              }}>
                Quick Links
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  { label: "About the Relay", href: "#about" },
                  { label: "Rules & Format", href: "#rules" },
                  { label: "Awards", href: "#awards" },
                  { label: "Registration", href: "https://relayexam.virtualprachar.com/login" },
                ].map(({ label, href }) => (
                  <a key={label} href={href} className="cf-link" style={{ fontSize: 13 }}>
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* 4. Social */}
          <div
            className={`cf-col ${gridVisible ? "visible" : ""}`}
            style={{ animationDelay: "0.3s" }}
          >
            <span className="cf-section-label">Connect With Us</span>

            <div style={{ display: "flex", gap: 10 }}>
              {socials.map(({ href, label, icon, delay }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className={`cf-social-btn ${gridVisible ? "visible" : ""}`}
                  style={{ animationDelay: delay }}
                >
                  <div style={{ width: 18, height: 18 }}>{icon}</div>
                </a>
              ))}
            </div>

            {/* Social description */}
            <div style={{
              background: "rgba(255,252,245,0.03)",
              border: "1px solid rgba(212,175,55,0.12)",
              borderRadius: 12,
              padding: "14px 16px",
            }}>
              <div style={{
                fontSize: 9, fontWeight: 700,
                textTransform: "uppercase", letterSpacing: "0.14em",
                color: "rgba(212,175,55,0.4)", marginBottom: 6,
              }}>
                Stay Updated
              </div>
              <p style={{
                fontSize: 12, color: "rgba(255,252,245,0.45)",
                lineHeight: 1.65, margin: 0, fontWeight: 300,
              }}>
                Follow us for exam updates, results, and community highlights
                across our official channels.
              </p>
            </div>

            
          </div>
        </div>

        {/* ── Divider ── */}
        <div className="cf-divider" />

        {/* ── Bottom bar ── */}
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
        }}>
          <p style={{
            fontSize: 10, fontWeight: 600,
            textTransform: "uppercase", letterSpacing: "0.1em",
            color: "rgba(255,252,245,0.28)", margin: 0,
          }}>
            © {new Date().getFullYear()} Vishwaroop Education. All rights reserved.
          </p>

          <div style={{ display: "flex", gap: 24, alignItems: "center" }}>
            <Link to="/privacy-policy" className="cf-bottom-link">
              Privacy Policy
            </Link>
            <span style={{ color: "rgba(212,175,55,0.2)", fontSize: 10 }}>|</span>
            <Link to="/terms-of-service" className="cf-bottom-link">
              Terms of Service
            </Link>
          </div>

          {/* Brand mark */}
          <div style={{
            fontSize: 10, fontWeight: 600,
            letterSpacing: "0.08em",
            color: "rgba(212,175,55,0.3)",
          }}>
            ✦ Vishwaroop · International Relay
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ── SVG Icons ───────────────────────────────────────────────────── */
const FacebookIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" width="18" height="18">
    <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24H12.82v-9.294H9.692V11.01h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.314h3.587l-.467 3.696h-3.12V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z" />
  </svg>
);

const InstagramIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" width="18" height="18">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.345 3.608 1.32.975.975 1.258 2.242 1.32 3.608.058 1.266.07 1.646.07 4.84s-.012 3.574-.07 4.84c-.062 1.366-.345 2.633-1.32 3.608-.975.975-2.242 1.258-3.608 1.32-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.345-3.608-1.32-.975-.975-1.258-2.242-1.32-3.608C2.175 15.574 2.163 15.194 2.163 12s.012-3.574.07-4.84c.062-1.366.345-2.633 1.32-3.608.975-.975 2.242-1.258 3.608-1.32C8.416 2.175 8.796 2.163 12 2.163zm0 3.675A6.162 6.162 0 1 0 18.162 12 6.168 6.168 0 0 0 12 5.838zm0 10.162A4 4 0 1 1 16 12a4.005 4.005 0 0 1-4 4zm6.406-11.845a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44z" />
  </svg>
);

const YouTubeIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24" width="18" height="18">
    <path d="M23.498 6.186a2.94 2.94 0 0 0-2.067-2.08C19.585 3.6 12 3.6 12 3.6s-7.585 0-9.431.506a2.94 2.94 0 0 0-2.067 2.08A30.02 30.02 0 0 0 0 12a30.02 30.02 0 0 0 .502 5.814 2.94 2.94 0 0 0 2.067 2.08C4.415 20.4 12 20.4 12 20.4s7.585 0 9.431-.506a2.94 2.94 0 0 0 2.067-2.08A30.02 30.02 0 0 0 24 12a30.02 30.02 0 0 0-.502-5.814zM9.6 15.6V8.4l6.4 3.6-6.4 3.6z" />
  </svg>
);