import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";

export default function RulesFormat() {
  return (
    <Section id="rules" background="white" className="py-0">
      <div className="py-12 md:py-14">
        <SectionHeader
          eyebrow="Rules & Format"
          title="How Does the Relay Work?"
          subtitle="Each relay is conducted under clear, transparent rules to ensure fairness while preserving competitive rigour."
          align="left"
        />

        <div className="grid gap-8 lg:grid-cols-12 items-start">

          {/* ================= LEFT CARD ================= */}
          <Card className="lg:col-span-7 p-8 md:p-10 relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-brand-navy/5 shadow-xl">

            {/* Ambient Glow */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-brand-gold/20 blur-3xl opacity-60 animate-pulse" />

            <h3 className="text-xl font-display font-bold text-brand-navy mb-8 flex items-center gap-3">
              <span className="w-10 h-[3px] bg-gradient-to-r from-brand-gold to-brand-blue"></span>
              Team Composition & Relay Flow
            </h3>

            <p className="text-slate-600 leading-relaxed mb-10">
              Each team consists of <strong className="text-brand-navy font-semibold">three students</strong>. 
              Every student handles one stage of the relay and receives a problem dependent on the previous result.
            </p>

            <div className="space-y-10">
              <RelayStep
                number="01"
                title="First Member"
                desc="Solves the initial problem and produces the base value for the team."
                color="gold"
              />
              <RelayStep
                number="02"
                title="Second Member"
                desc="Works using the first member’s output and progresses the chain."
                color="blue"
              />
              <RelayStep
                number="03"
                title="Third Member"
                desc="Resolves the final stage and submits the team’s concluding answer."
                color="navy"
              />
            </div>

            <div className="mt-10 p-5 rounded-2xl bg-white/70 backdrop-blur-md border border-brand-gold/20 italic text-xs text-slate-600 shadow-sm">
              Each member’s accuracy directly influences the final outcome — precision and coordination are essential.
            </div>
          </Card>

          {/* ================= RIGHT SIDE ================= */}
          <div className="lg:col-span-5 space-y-6">

            {/* Time Card */}
            <Card className="p-8 rounded-3xl bg-gradient-to-br from-brand-gold/10 via-white to-white border border-brand-gold/20 shadow-lg">
              <h3 className="text-lg font-display font-bold text-brand-navy mb-6">
                Time Allocation & Evaluation
              </h3>

              <div className="space-y-6">
                <InfoRow
                  label="Time per relay round"
                  value="Max. 30 minutes"
                  icon="⏱️"
                  accent="gold"
                />
                <InfoRow
                  label="Primary criteria"
                  value="Accuracy of solutions"
                  icon="✅"
                  accent="blue"
                />
                <InfoRow
                  label="Secondary criteria"
                  value="Time efficiency & smart completion"
                  icon="⚡"
                  accent="navy"
                />
              </div>
            </Card>

            {/* Rounds Card */}
            <Card className="p-8 rounded-3xl bg-gradient-to-br from-brand-blue/10 via-white to-white border border-brand-blue/20 shadow-lg">

              <h3 className="text-lg font-display font-bold text-brand-navy mb-6">
                Rounds & Structure
              </h3>

              <ul className="space-y-4">
                <Bullet text="Multiple relay rounds may be conducted for different levels." />
                <Bullet text="Rules remain consistent across teams for fairness." />
                <Bullet text="Detailed round-wise instructions are shared before the event." />
              </ul>

              <p className="mt-8 text-[11px] font-medium text-brand-navy/60 uppercase tracking-wider">
                Clarity • Fairness • Transparency
              </p>
            </Card>

          </div>
        </div>
      </div>
    </Section>
  );
}

/* ================= COMPONENTS ================= */

function RelayStep({ number, title, desc, color }) {
  const colors = {
    gold: "bg-brand-gold text-white",
    blue: "bg-brand-blue text-white",
    navy: "bg-brand-navy text-white",
  };

  return (
    <div className="flex gap-6 items-start group">
      <div className={`flex-shrink-0 w-14 h-14 rounded-2xl ${colors[color]} flex items-center justify-center font-bold text-lg shadow-xl transition-transform duration-300 group-hover:scale-110`}>
        {number}
      </div>

      <div>
        <h4 className="text-base font-bold text-brand-navy mb-2 group-hover:text-brand-blue transition-colors">
          {title}
        </h4>
        <p className="text-sm text-slate-600 leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  );
}

function InfoRow({ label, value, icon, accent }) {
  const accents = {
    gold: "bg-brand-gold/20 text-brand-gold",
    blue: "bg-brand-blue/20 text-brand-blue",
    navy: "bg-brand-navy/20 text-brand-navy",
  };

  return (
    <div className="flex items-start gap-4 group">
      <div className={`flex-shrink-0 w-12 h-12 rounded-xl ${accents[accent]} flex items-center justify-center text-xl shadow-md transition-transform group-hover:scale-110`}>
        {icon}
      </div>
      <div>
        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">
          {label}
        </div>
        <div className="text-sm font-semibold text-brand-navy">
          {value}
        </div>
      </div>
    </div>
  );
}

function Bullet({ text }) {
  return (
    <li className="flex gap-4 items-start text-sm text-slate-700">
      <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-brand-gold to-brand-blue text-white flex items-center justify-center text-xs shadow-md">
        ✓
      </span>
      {text}
    </li>
  );
}
