import Button from "./Button";
import olympiadLogo from "../assets/logos/Olympiad.png";

export default function Hero() {
  return (
    <section
      id="top"
      className="
        relative overflow-hidden
        bg-gradient-to-b
        from-[#fff6e3] via-[#fdf6ea] to-[#f9e7bf]
        border-b border-amber-200/50
      "
    >
      {/* Soft golden transition band (connects navbar → hero) */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-brand-gold/10 to-transparent" />

      {/* Decorative shapes (pushed DOWN so navbar stays calm) */}
      <div className="pointer-events-none absolute -left-16 top-32 h-56 w-56 rounded-full bg-gradient-to-br from-[#fef3c7] to-[#fde68a] opacity-60 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 top-48 h-44 w-44 rounded-full bg-gradient-to-br from-[#e0f2fe] to-[#bfdbfe] opacity-60 blur-3xl" />
      <div className="pointer-events-none absolute left-1/3 bottom-[-6rem] h-64 w-64 rounded-full bg-gradient-to-br from-[#fee2e2] to-[#fecaca] opacity-50 blur-3xl" />

      {/* CONTENT */}
      <div
        className="
          relative mx-auto max-w-6xl
          px-4
          pt-28   /* IMPORTANT: space for sticky navbar */
          pb-16
          flex flex-col gap-12
          md:flex-row md:items-center
        "
      >
        {/* LEFT CONTENT */}
        <div className="flex-1 space-y-6">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-600 shadow-sm ring-1 ring-slate-200/70">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Vishwaroop International Relay
          </p>

          <div>
            <p className="text-sm font-semibold tracking-wide text-brand-gold">
              Think Fast. Solve Smart. Win Together.
            </p>

            <h1 className="mt-2 font-display text-4xl font-semibold leading-tight text-brand-navy md:text-5xl">
              Speed. Strategy.
              <br className="hidden md:block" />
              Teamwork.
            </h1>

            <div className="mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-brand-gold to-amber-400" />
          </div>

          <p className="max-w-xl text-sm leading-relaxed text-slate-700">
            Experience India&apos;s first subject-wise Relay in{" "}
            <span className="font-medium">
              Maths, Chemistry, Physics &amp; Indian Knowledge System
            </span>
            — a high-energy, team-based academic challenge where three students
            solve linked problems in a time-bound relay format.
          </p>

          {/* SUBJECT TAGS */}
          <div className="flex flex-wrap gap-2 text-[11px]">
            <Tag>Maths</Tag>
            <Tag>Chemistry</Tag>
            <Tag>Physics</Tag>
            <Tag>Indian Knowledge System</Tag>
          </div>

          {/* CTA */}
          <div className="flex flex-wrap items-center gap-3">
            <Button
              onClick={() =>
                document
                  .getElementById("registration")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Register
            </Button>
            <Button
              variant="outline"
              onClick={() =>
                document
                  .getElementById("prep")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Syllabus
            </Button>
          </div>

          {/* META */}
          <div className="mt-4 flex flex-wrap gap-3 text-xs text-slate-700">
            <MetaPill label="3 students per team" />
            <MetaPill label="15–20 minute relay" />
            <MetaPill label="International platform" />
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex-1">
          <div className="mx-auto flex max-w-md flex-col items-center gap-5 md:items-end">
            {/* Olympiad seal */}
            <div className="relative">
              <img
                src={olympiadLogo}
                alt="Vishwaroop Olympiad"
                className="h-32 w-32 rounded-full border-4 border-brand-gold/80 shadow-soft md:h-36 md:w-36"
              />
              {/* <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 rounded-full bg-brand-gold px-3 py-0.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-navy shadow">
                Olympiad Relay
              </span> */}
            </div>

            {/* Snapshot card */}
            <div className="w-full rounded-2xl border border-amber-200/70 bg-white/90 p-6 shadow-soft backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold">
                Relay Snapshot
              </p>

              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                Each team member solves a linked problem and passes the result
                to the next. Accuracy and timing decide the final score.
              </p>

              <div className="mt-4 grid grid-cols-3 gap-3 text-center text-xs">
                <Stat label="Students" value="3" />
                <Stat label="Time" value="15–20 min" />
                <Stat label="Mode" value="Online / Offline" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- helpers ---------- */

function Tag({ children }) {
  return (
    <span className="inline-flex items-center rounded-full border border-amber-200 bg-white/70 px-3 py-1 text-slate-700">
      {children}
    </span>
  );
}

function MetaPill({ label }) {
  return (
    <span className="rounded-full bg-white/80 px-3 py-1 text-[11px] shadow-sm ring-1 ring-slate-200">
      {label}
    </span>
  );
}

function Stat({ label, value }) {
  return (
    <div className="rounded-xl bg-brand-cream/60 px-3 py-2">
      <p className="text-[11px] text-slate-500">{label}</p>
      <p className="text-sm font-semibold text-brand-navy">{value}</p>
    </div>
  );
}
