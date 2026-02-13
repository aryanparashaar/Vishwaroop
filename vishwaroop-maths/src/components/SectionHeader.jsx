import React from 'react';

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = ""
}) {
  // Alignment logic that handles both the container and the text
  const isLeft = align === "left";
  const alignmentClass = isLeft ? "items-start text-left" : "items-center text-center mx-auto";

  return (
    <div className={`flex flex-col gap-3 ${alignmentClass} mb-12 md:mb-16 ${className}`}>
      
      {/* 1. THE EYEBROW (Tag style) */}
      {eyebrow && (
        <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] text-brand-gold border-b-2 border-brand-gold/20 pb-1">
          {eyebrow}
        </span>
      )}

      {/* 2. THE TITLE (Outfit Display) */}
      {title && (
        <h2 className="font-display text-3xl md:text-5xl font-extrabold text-brand-navy leading-tight tracking-tight">
          {title}
        </h2>
      )}

      {/* 3. THE DECORATIVE SEPARATOR */}
      {/* A gradient bar that anchors the text */}
      <div className={`h-1.5 w-20 rounded-full bg-gradient-to-r from-brand-gold to-amber-300 ${isLeft ? "" : "mx-auto"}`} />

      {/* 4. THE SUBTITLE */}
      {subtitle && (
        <p className={`max-w-2xl text-base md:text-lg leading-relaxed text-slate-600 font-light mt-2 ${isLeft ? "" : "mx-auto"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}