import React from 'react';

// Define standard backgrounds to ensure consistency across the site
const backgrounds = {
  white: "bg-white",
  gray: "bg-slate-50 border-y border-slate-200/60", // Adds a subtle border for separation
  navy: "bg-brand-navy text-white", // High contrast (Good for Call-to-Action)
  pattern: "bg-slate-50 relative overflow-hidden", // For technical sections
};

export default function Section({ 
  id, 
  className = "", 
  children, 
  background = "white" // Default to white
}) {
  return (
    <section 
      id={id} 
      className={`
        py-15 md:py-32 
        ${backgrounds[background] || backgrounds.white} 
        ${className}
      `}
    >
      {/* If background is 'pattern', we add the grid overlay automatically.
        This keeps your main code clean!
      */}
      {background === "pattern" && (
        <div 
          className="absolute inset-0 opacity-[0.4] pointer-events-none" 
          style={{ 
            backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', 
            backgroundSize: '24px 24px' 
          }} 
        />
      )}

      {/* Updated to max-w-7xl to match Navbar & Hero 
        Added 'relative z-10' so content sits ABOVE any background patterns
      */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {children}
      </div>
    </section>
  );
}