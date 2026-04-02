import { useEffect, useRef, useState } from "react";

const sectionHeaderStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=DM+Sans:wght@400;500;600&display=swap');

  @keyframes eyebrowSlide {
    from { opacity: 0; transform: translateY(10px) scaleX(0.92); }
    to   { opacity: 1; transform: translateY(0) scaleX(1); }
  }
  @keyframes titleReveal {
    from { opacity: 0; transform: translateY(18px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes lineExpand {
    from { width: 0; opacity: 0; }
    to   { width: var(--line-w, 64px); opacity: 1; }
  }
  @keyframes subtitleFade {
    from { opacity: 0; transform: translateY(10px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  @keyframes shimmerSweep {
    0%   { background-position: -300% center; }
    100% { background-position: 300% center; }
  }

  .sh-eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    font-family: 'DM Sans', sans-serif;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.22em;
    text-transform: uppercase;
    color: #D4AF37;
    opacity: 0;
  }
  .sh-eyebrow.visible {
    animation: eyebrowSlide 0.55s cubic-bezier(0.22,1,0.36,1) forwards;
  }
  .sh-eyebrow-dash {
    display: inline-block;
    width: 24px;
    height: 1px;
    background: linear-gradient(90deg, #D4AF37, rgba(212,175,55,0.3));
    border-radius: 1px;
    flex-shrink: 0;
  }

  .sh-title {
    font-family: 'Cormorant Garamond', serif;
    font-size: clamp(28px, 4.5vw, 52px);
    font-weight: 700;
    line-height: 1.1;
    letter-spacing: -0.02em;
    color: #0D2150;
    margin: 0;
    opacity: 0;
  }
  .sh-title.visible {
    animation: titleReveal 0.65s cubic-bezier(0.22,1,0.36,1) 0.12s forwards;
  }
  .sh-title-dark {
    color: #fffcf5;
  }

  .sh-title-highlight {
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
    animation: shimmerSweep 5s linear infinite;
  }
  .sh-title-dark .sh-title-highlight {
    background: linear-gradient(
      105deg,
      #fffcf5 0%, #fffcf5 30%,
      #D4AF37 50%,
      #fffcf5 70%, #fffcf5 100%
    );
    background-size: 300% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: shimmerSweep 5s linear infinite;
  }

  .sh-line-wrap {
    overflow: hidden;
    opacity: 0;
  }
  .sh-line-wrap.visible {
    animation: subtitleFade 0.5s ease 0.28s forwards;
  }
  .sh-line {
    height: 3px;
    border-radius: 3px;
    background: linear-gradient(90deg, #D4AF37 0%, #f5d97a 50%, rgba(212,175,55,0.3) 100%);
    animation: lineExpand 0.7s cubic-bezier(0.22,1,0.36,1) 0.3s both;
  }

  .sh-subtitle {
    font-family: 'DM Sans', sans-serif;
    font-size: clamp(14px, 1.8vw, 17px);
    line-height: 1.75;
    color: #5a6a8a;
    font-weight: 300;
    max-width: 600px;
    margin: 0;
    opacity: 0;
  }
  .sh-subtitle.visible {
    animation: subtitleFade 0.6s ease 0.4s forwards;
  }
  .sh-subtitle-dark {
    color: rgba(255,252,245,0.6);
  }
`;

let stylesInjected = false;

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  dark = false,
  highlight,        // word(s) in title to shimmer gold — string or array
  className = "",
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  // Inject styles once
  useEffect(() => {
    if (stylesInjected) return;
    const tag = document.createElement("style");
    tag.textContent = sectionHeaderStyles;
    document.head.appendChild(tag);
    stylesInjected = true;
  }, []);

  // Scroll-triggered reveal
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const isLeft = align === "left";

  // Render title with highlighted words in gold shimmer
  const renderTitle = () => {
    if (!highlight || !title) return title;
    const words = Array.isArray(highlight) ? highlight : [highlight];
    let result = title;
    words.forEach(word => {
      result = result.replace(
        new RegExp(`(${word})`, "gi"),
        `<span class="sh-title-highlight">$1</span>`
      );
    });
    return <span dangerouslySetInnerHTML={{ __html: result }} />;
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 12,
        alignItems: isLeft ? "flex-start" : "center",
        textAlign: isLeft ? "left" : "center",
        marginBottom: "clamp(40px, 6vw, 72px)",
      }}
    >
      {/* Eyebrow */}
      {eyebrow && (
        <span className={`sh-eyebrow ${visible ? "visible" : ""}`}>
          {!isLeft && <span className="sh-eyebrow-dash" />}
          {eyebrow}
          <span className="sh-eyebrow-dash" style={isLeft ? {} : { transform: "scaleX(-1)" }} />
        </span>
      )}

      {/* Title */}
      {title && (
        <h2 className={`sh-title ${dark ? "sh-title-dark" : ""} ${visible ? "visible" : ""}`}>
          {renderTitle()}
        </h2>
      )}

      {/* Gold line */}
      <div
        className={`sh-line-wrap ${visible ? "visible" : ""}`}
        style={{ alignSelf: isLeft ? "flex-start" : "center" }}
      >
        <div
          className="sh-line"
          style={{ "--line-w": "64px", width: 64 }}
        />
      </div>

      {/* Subtitle */}
      {subtitle && (
        <p
          className={`sh-subtitle ${dark ? "sh-subtitle-dark" : ""} ${visible ? "visible" : ""}`}
          style={{ textAlign: isLeft ? "left" : "center" }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}