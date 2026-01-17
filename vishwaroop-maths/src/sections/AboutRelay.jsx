import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";

export default function AboutRelay() {
  return (
    <Section
      id="about"
      className="bg-gradient-to-b from-[#fdf6ea] via-brand-soft/70 to-brand-cream border-b border-slate-200/70"
    >
      <SectionHeader
        eyebrow="About Relay"
        title="What is Vishwaroop International Relay?"
        subtitle="A carefully designed, team-based academic relay where three students solve linked problems in sequence, combining speed, logic and collaboration."
        align="left"
      />

      <div className="space-y-8">
        {/* Top summary strip */}
        <Card className="relative overflow-hidden border-0 bg-gradient-to-r from-white via-[#fdf6ea] to-[#fef3c7] px-6 py-5 md:px-7 md:py-6">
          <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-amber-100 to-amber-300 opacity-40 blur-xl" />
          <div className="pointer-events-none absolute -left-16 bottom-0 h-28 w-28 rounded-full bg-gradient-to-tr from-sky-100 to-sky-300 opacity-40 blur-xl" />

          <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold">
                Relay at a glance
              </p>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-slate-700">
                Vishwaroop Relay moves beyond a typical Olympiad. It uses a{" "}
                <span className="font-medium">linked question chain</span> where
                each student&apos;s answer becomes the starting point for the
                next, making every role crucial.
              </p>
            </div>

            <div className="grid w-full max-w-md grid-cols-3 gap-3 text-center text-xs md:text-[11px]">
              <HighlightTile
                label="Team Format"
                value="3 students"
                note="Each solves a stage"
                color="from-sky-100 to-sky-200"
              />
              <HighlightTile
                label="Question Flow"
                value="Linked"
                note="Output → input"
                color="from-emerald-100 to-emerald-200"
              />
              <HighlightTile
                label="Focus"
                value="Logic + Speed"
                note="Under time pressure"
                color="from-amber-100 to-amber-200"
              />
            </div>
          </div>
        </Card>

        {/* Bottom content grid */}
        <div className="grid gap-8 md:grid-cols-[1.6fr,1.1fr]">
          {/* Left: main explanation */}
          <Card className="relative overflow-hidden p-6 md:p-7">
            <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-brand-gold via-amber-300 to-brand-gold/60" />
            <div className="relative pl-4 md:pl-5">
              <h3 className="text-sm font-semibold tracking-wide text-brand-navy">
                Where knowledge meets teamwork.
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                In traditional Olympiads, students compete as individuals. In
                <span className="font-medium"> Vishwaroop Relay</span>, they
                compete as a
                <span className="font-medium"> tightly connected team</span>.
                Each member receives a problem that depends on the previous
                answer, creating a logical chain.
              </p>

              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                If any link in the chain is weak or incorrect, the team must
                discover and fix it together. This encourages deeper
                understanding instead of guesswork, and builds real{" "}
                <span className="font-medium">accountability and trust</span>{" "}
                among students.
              </p>

              <p className="mt-3 text-sm leading-relaxed text-slate-700">
                The design of the relay blends{" "}
                <span className="font-medium">
                  academic rigour, time-bound execution and structured teamwork
                </span>
                , preparing participants for the kind of problem-solving
                expected in higher studies and professional environments.
              </p>

              {/* Unique aspects chips */}
              <div className="mt-4 flex flex-wrap gap-2 text-[11px] md:text-xs">
                <UniqueChip color="bg-sky-50 text-sky-800 border-sky-200">
                  Linked problem chain
                </UniqueChip>
                <UniqueChip color="bg-emerald-50 text-emerald-800 border-emerald-200">
                  Every student&apos;s answer matters
                </UniqueChip>
                <UniqueChip color="bg-amber-50 text-amber-900 border-amber-200">
                  Balanced speed &amp; depth
                </UniqueChip>
              </div>
            </div>
          </Card>

          {/* Right: core outcomes */}
          <Card className="p-6 md:p-7">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold">
              Core outcomes
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              Vishwaroop Relay is designed to cultivate three key dimensions in
              students:
            </p>

            <div className="mt-4 space-y-3">
              <OutcomeItem
                badgeColor="bg-sky-100 text-sky-900"
                title="Agility in Thinking"
                description="Students learn to move quickly from understanding to execution without losing accuracy."
              />
              <OutcomeItem
                badgeColor="bg-emerald-100 text-emerald-900"
                title="Collaborative Learning"
                description="Team decisions, corrections and explanations build communication and peer learning."
              />
              <OutcomeItem
                badgeColor="bg-amber-100 text-amber-900"
                title="Competitive Spirit"
                description="The relay structure motivates students to perform under healthy, structured competition."
              />
            </div>

            <p className="mt-4 text-[11px] leading-relaxed text-slate-500">
              Together, these outcomes ensure that participation is not just
              about winning medals, but about{" "}
              <span className="font-medium">holistic academic growth</span> and
              readiness for future challenges.
            </p>
          </Card>
        </div>
      </div>
    </Section>
  );
}

function HighlightTile({ label, value, note, color }) {
  return (
    <div
      className={`rounded-xl border border-white/60 bg-gradient-to-br ${color} px-3 py-3 shadow-sm`}
    >
      <dt className="text-[11px] font-medium text-slate-700">{label}</dt>
      <dd className="mt-0.5 text-sm font-semibold text-brand-navy">{value}</dd>
      <p className="mt-0.5 text-[10px] text-slate-600">{note}</p>
    </div>
  );
}

function UniqueChip({ color, children }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 ${color}`}
    >
      {children}
    </span>
  );
}

function OutcomeItem({ badgeColor, title, description }) {
  return (
    <div className="flex gap-3">
      <span
        className={`mt-0.5 inline-flex h-7 min-w-[7rem] items-center justify-center rounded-full px-2 text-[11px] font-semibold ${badgeColor}`}
      >
        {title}
      </span>
      <p className="flex-1 text-[11px] md:text-xs leading-relaxed text-slate-700">
        {description}
      </p>
    </div>
  );
}
