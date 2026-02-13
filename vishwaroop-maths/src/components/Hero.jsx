import Button from "./Button";
import olympiadLogo from "../assets/logos/Olympiad.png";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-slate-50 pt-32 pb-10 lg:pt-40 lg:pb-12"
    >
      {/* --- BACKGROUND EFFECTS --- */}
      
      {/* 1. Technical Grid Pattern - subtle academic look */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.4]" 
        style={{ 
          backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', 
          backgroundSize: '32px 32px' 
        }} 
      />

      {/* 2. Ambient Glow Blobs (Blue & Gold) */}
      <div className="pointer-events-none absolute -top-24 -left-20 h-[500px] w-[500px] rounded-full bg-brand-navy/5 blur-3xl" />
      <div className="pointer-events-none absolute top-1/2 -right-20 h-[400px] w-[400px] rounded-full bg-brand-gold/10 blur-3xl" />
      
      {/* --- MAIN CONTENT CONTAINER --- */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center gap-12 lg:gap-20">
        
        {/* --- LEFT SIDE: TEXT --- */}
        <div className="flex-1 space-y-8 text-center md:text-left">
          
          {/* Small Top Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-navy/10 bg-white/80 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-navy shadow-sm backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
            </span>
            Vishwaroop International Relay
          </div>

          {/* Headlines */}
          <div className="space-y-4">
            <h1 className="font-display text-5xl font-extrabold leading-[1.1] tracking-tight text-brand-navy md:text-7xl">
              Speed. Strategy. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold to-amber-600">
                Teamwork.
              </span>
            </h1>
            
            <p className="mx-auto md:mx-0 max-w-xl text-lg text-slate-600 leading-relaxed font-light">
              Experience India's first subject-wise Relay in 
              <strong className="text-brand-navy font-semibold"> Maths, Science & IKS</strong>. 
              A high-energy, team-based challenge where three students solve linked problems to win.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
            <Button
              className="px-8 py-4 text-base shadow-xl shadow-brand-gold/20"
              onClick={() => document.getElementById("registration")?.scrollIntoView({ behavior: "smooth" })}
            >
              Register Team
            </Button>
            <Button
              variant="outline"
              className="px-8 py-4 text-base bg-white/50 backdrop-blur-sm"
              onClick={() => document.getElementById("preparation")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Syllabus
            </Button>
          </div>

          {/* Trust Indicators (Checkmarks) */}
          <div className="pt-6 flex items-center justify-center md:justify-start gap-6 text-sm font-medium text-slate-500 border-t border-slate-200/60 mt-8">
             <div className="flex items-center gap-2">
                <span className="text-brand-gold text-lg">✓</span> 3 Students / Team
             </div>
             <div className="flex items-center gap-2">
                <span className="text-brand-gold text-lg">✓</span> 30 Min Relay
             </div>
             <div className="flex items-center gap-2">
                <span className="text-brand-gold text-lg">✓</span> Online Mode
             </div>
          </div>
        </div>

        {/* --- RIGHT SIDE: GLASS CARD --- */}
        <div className="flex-1 w-full relative flex justify-center md:justify-end">
          
          {/* Card Container with Hover Effect */}
          <div className="relative w-full max-w-sm rounded-3xl border border-white/60 bg-white/40 p-3 shadow-2xl backdrop-blur-md ring-1 ring-black/5 transform transition hover:scale-[1.02] duration-500">
             
             {/* Inner White Content Box */}
             <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-8 text-center space-y-6 overflow-hidden relative shadow-inner">
                
                {/* Background Decoration Blob */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-brand-gold/5 rounded-full blur-3xl -mr-10 -mt-10"></div>

                {/* Logo Section */}
                <div className="relative z-10 flex justify-center">
                   <div className="p-4 bg-white rounded-full shadow-lg ring-1 ring-slate-100/50">
                      <img src={olympiadLogo} alt="Logo" className="h-24 w-24 object-contain" />
                   </div>
                </div>

                {/* Text Content */}
                <div className="relative z-10">
                   <h3 className="text-2xl font-display font-bold text-brand-navy tracking-tight">Relay Format 2026</h3>
                   <div className="h-1 w-12 bg-brand-gold/50 mx-auto my-3 rounded-full"></div>
                   <p className="text-sm text-slate-500 italic">
                     "One answer feeds the next. If Student 1 is wrong, Student 2 cannot proceed."
                   </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-3 pt-2">
                   <StatBox label="Class" value="6-10" />
                   <StatBox label="Format" value="Linked" />
                   <StatBox label="Focus" value="Logic" />
                </div>
             </div>
          </div>
          
          {/* Decorative Tilted Backdrop (Behind the card) */}
          <div className="absolute -z-10 top-8 right-4 w-full max-w-sm h-full border-2 border-brand-navy/5 rounded-3xl rotate-6 bg-brand-navy/5"></div>
        </div>

      </div>
    </section>
  );
}

/* Helper Component for the Stats Grid */
function StatBox({ label, value }) {
  return (
    <div className="bg-slate-100/80 rounded-xl p-2.5 border border-slate-200">
      <div className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">{label}</div>
      <div className="text-sm font-bold text-brand-navy">{value}</div>
    </div>
  );
}