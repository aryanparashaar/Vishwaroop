import React from 'react';

export default function Card({ className = "", children, hover = true }) {
  return (
    <div
      className={`
        /* 1. Base Shape & Border */
        rounded-2xl border border-slate-100 
        
        /* 2. Professional "Glass" Look */
        bg-white/80 backdrop-blur-md 
        
        /* 3. Modern Depth (Using your custom shadow-soft) */
        shadow-soft 
        
        /* 4. Interactive Hover (Only if 'hover' prop is true) */
        ${hover ? "transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-brand-gold/20" : ""}
        
        /* 5. Custom Overrides */
        ${className}
      `}
    >
      {children}
    </div>
  );
}