import React from 'react';

// 1. Base styles for all buttons (centering, transitions, fonts)
const base =
  "inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-bold tracking-wide transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95";

// 2. Variants for different use cases
const variants = {
  primary:
    // Gold Gradient with a glow effect
    "bg-gradient-to-r from-brand-gold to-yellow-500 text-brand-navy shadow-lg shadow-brand-gold/30 hover:shadow-brand-gold/50 hover:-translate-y-1 hover:brightness-110 border border-transparent",
  
  secondary:
    // Deep Blue for secondary actions
    "bg-brand-navy text-white shadow-md shadow-brand-navy/20 hover:bg-brand-blue hover:shadow-brand-blue/30 hover:-translate-y-1",
    
  outline:
    // Transparent with a border
    "bg-transparent border-2 border-brand-navy/20 text-brand-navy hover:border-brand-navy hover:bg-brand-navy/5",
    
  ghost:
    // No background, just text (good for 'Cancel' buttons)
    "bg-transparent text-gray-500 hover:text-brand-navy hover:bg-gray-100",
};

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  // Select the variant style, defaulting to primary if the variant name is wrong
  const variantStyles = variants[variant] || variants.primary;

  return (
    <button
      className={`${base} ${variantStyles} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}