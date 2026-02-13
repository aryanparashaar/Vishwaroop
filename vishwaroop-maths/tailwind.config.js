export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Changed from muted Navy to a Deep Royal Blue (More energetic)
          navy: "#1e3a8a",    
          // Keep Gold, but make it brighter (Medal Gold)
          gold: "#fbbf24",    
          // Changed from Yellow/Cream to Crisp Slate-50 (Modern Tech look)
          cream: "#f8fafc",   
          // Pure white for cards to pop against the slate background
          soft: "#ffffff",    
          // Add a secondary blue for gradients
          blue: "#3b82f6",
        },
      },
      fontFamily: {
        // 'Inter' is the standard for modern UIs (replaces Poppins)
        sans: ["Inter", "system-ui", "sans-serif"],
        // 'Outfit' is bold and geometric (replaces Playfair Display)
        display: ["Outfit", "sans-serif"], 
        // Use 'Outfit' for nav too
        nav: ["Outfit", "sans-serif"],
      },
      boxShadow: {
        // A tighter, more modern shadow
        soft: "0 10px 40px -10px rgba(0,0,0,0.08)",
        // A glow effect for buttons
        glow: "0 0 20px rgba(59, 130, 246, 0.5)",
      },
      borderRadius: {
        xl2: "1rem", // Slightly tighter corners looks more professional
      },
    },
  },
  plugins: [],
};