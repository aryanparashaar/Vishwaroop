import Button from "./Button";
import olympiadLogo from "../assets/logos/Olympiad.png";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-brand-navy/5 pt-24 pb-14 md:pt-36 md:pb-20 lg:pt-44"
    >
      {/* ===== Background Grid ===== */}
      <div
        className="absolute inset-0 z-0 opacity-[0.35]"
        style={{
          backgroundImage: "radial-gradient(#cbd5e1 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* ===== Ambient Lighting ===== */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-brand-navy/10 blur-3xl animate-pulse [animation-duration:10s]" />
      <div className="pointer-events-none absolute top-1/2 -right-32 h-[400px] w-[400px] rounded-full bg-brand-gold/20 blur-3xl animate-pulse [animation-duration:12s]" />

      {/* ===== Main Container ===== */}
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 flex flex-col md:flex-row items-center gap-14 lg:gap-24">

        {/* ================= LEFT CONTENT ================= */}
        <div className="flex-1 space-y-8 text-center md:text-left">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-navy/10 bg-white/80 px-4 py-2 text-[11px] font-bold uppercase tracking-widest text-brand-navy shadow-md backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-gold opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-gold"></span>
            </span>
            Vishwaroop International Relay
          </div>

          {/* Headlines */}
          <div className="space-y-5">
            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight text-brand-navy drop-shadow-[0_6px_25px_rgba(0,0,0,0.08)]">
              Speed. Strategy. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold via-amber-500 to-yellow-500">
                Teamwork.
              </span>
            </h1>

            <p className="mx-auto md:mx-0 max-w-lg text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed font-light">
              Experience India's first subject-wise Relay Olympiad. 
              A high-energy, team-based challenge where three students solve linked problems to win. 
              Built in alignment with the Indian Knowledge System (IKS) and National Education Policy (NEP), 2020.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-4 w-full sm:w-auto">
            <Button
              className="w-full sm:w-auto px-8 py-4 text-base shadow-2xl shadow-brand-gold/40 hover:shadow-brand-gold/60 hover:-translate-y-1 transition-all duration-300"
              onClick={() =>
                document
                  .getElementById("registration")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Register Now
            </Button>

            <Button
              variant="outline"
              className="w-full sm:w-auto px-8 py-4 text-base bg-white/60 backdrop-blur-md hover:bg-white transition-all duration-300"
              onClick={() =>
                document
                  .getElementById("preparation")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Syllabus
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 sm:gap-8 text-sm font-medium text-slate-500 border-t border-slate-200/70 mt-8">
            <div className="flex items-center gap-2">
              <span className="text-brand-gold text-lg">✓</span> 3 Students / Team
            </div>
            <div className="flex items-center gap-2">
              <span className="text-brand-gold text-lg">✓</span> Max. 30 Min Relay
            </div>
            <div className="flex items-center gap-2">
              <span className="text-brand-gold text-lg">✓</span> Online Mode
            </div>
          </div>
        </div>

        {/* ================= RIGHT GLASS CARD ================= */}
        <div className="flex-1 w-full relative flex justify-center md:justify-end">

          <div className="relative w-full max-w-sm rounded-3xl border border-white/60 bg-white/50 p-3 shadow-[0_30px_80px_rgba(0,0,0,0.18)] backdrop-blur-xl ring-1 ring-black/5 transform transition-all hover:scale-[1.03] hover:-translate-y-2 duration-500">

            <div className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-6 sm:p-8 text-center space-y-6 overflow-hidden relative shadow-inner">

              {/* Decorative Blob */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-brand-gold/10 rounded-full blur-3xl -mr-10 -mt-10"></div>

              {/* Logo */}
              <div className="relative z-10 flex justify-center">
                <div className="p-4 sm:p-5 bg-white rounded-full shadow-xl ring-1 ring-slate-100">
                  <img
                    src={olympiadLogo}
                    alt="Olympiad Logo"
                    className="h-20 w-20 sm:h-24 sm:w-24 object-contain"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-display font-bold text-brand-navy tracking-tight">
                  Relay Format, 2026
                </h3>
                <div className="h-1 w-12 bg-brand-gold/70 mx-auto my-3 rounded-full"></div>
                <p className="text-sm text-slate-500 italic leading-relaxed">
                  "One answer feeds the next. If Student 1 is wrong, the entire
                  chain collapses — teamwork is everything."
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-2">
                <StatBox label="Class" value="6-12" />
                <StatBox label="Format" value="Linked" />
                <StatBox label="Focus" value="Logic" />
              </div>
            </div>
          </div>

          {/* Decorative Tilted Layer */}
          <div className="hidden sm:block absolute -z-10 top-12 right-6 w-full max-w-sm h-full border-2 border-brand-gold/20 rounded-3xl rotate-6 bg-gradient-to-br from-brand-navy/5 to-brand-gold/10"></div>
        </div>
      </div>
    </section>
  );
}

/* ===== StatBox Component ===== */
function StatBox({ label, value }) {
  return (
    <div className="bg-white/70 rounded-xl p-3 border border-slate-200/70 backdrop-blur-sm shadow-sm hover:shadow-md transition-all duration-300">
      <div className="text-[10px] uppercase text-slate-400 font-bold tracking-wider">
        {label}
      </div>
      <div className="text-sm font-bold text-brand-navy">{value}</div>
    </div>
  );
}
