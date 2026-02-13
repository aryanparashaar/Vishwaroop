import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";

export default function RulesFormat() {
  return (
    // FIX: className="py-0" removes the gap to maintain the tight flow
    <Section id="rules" background="white" className="py-0 md:py-0 lg:py-0">
      
      <div className="py-12 md:py-16">
        <SectionHeader
          eyebrow="Rules & Format"
          title="How Does the Relay Work?"
          subtitle="Each relay is conducted under clear, transparent rules to ensure fairness while preserving the competitive rigour of the event."
          align="left"
        />

        <div className="grid gap-8 lg:grid-cols-12 items-start">
          
          {/* --- LEFT: RELAY FLOW (THE CHAIN) --- */}
          <Card className="lg:col-span-7 p-8 md:p-10 relative overflow-hidden">
            {/* Subtle background text for "Relay" */}
            <div className="absolute top-4 right-4 text-6xl font-display font-black text-slate-50 opacity-[0.03] select-none pointer-events-none">
              RELAY
            </div>

            <h3 className="text-xl font-display font-bold text-brand-navy mb-6 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-brand-gold"></span>
              Team Composition & Relay Flow
            </h3>

            <p className="text-slate-600 leading-relaxed mb-10">
              Each team consists of <strong className="text-brand-navy font-semibold">three students</strong>. Every student is responsible for one stage of the relay and receives a problem that depends on the previous teammate's result.
            </p>

            {/* The Visual Chain */}
            <div className="relative space-y-12">
              {/* Vertical Connector Line */}
              <div className="absolute left-[19px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-brand-gold via-brand-blue to-brand-navy opacity-20"></div>

              <RelayStep
                number={1}
                title="First Member"
                desc="Undertakes the initial problem and computes the first solution, which becomes the input or starting point for the second member."
                dotColor="bg-brand-gold"
              />
              <RelayStep
                number={2}
                title="Second Member"
                desc="Receives the outcome from the first member. Their problem is dependent on that value, and they must complete it accordingly."
                dotColor="bg-brand-blue"
              />
              <RelayStep
                number={3}
                title="Third Member"
                desc="Works with the result from the second member and resolves the concluding part of the relay, delivering the team’s final answer."
                dotColor="bg-brand-navy"
              />
            </div>

            <div className="mt-10 p-4 rounded-xl bg-slate-50 border border-slate-100 italic text-xs text-slate-500">
              This linked structure ensures that each student's performance is indispensable and encourages teams to verify and communicate clearly.
            </div>
          </Card>

          {/* --- RIGHT: TIMING & STRUCTURE --- */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Time & Evaluation */}
            <Card className="p-8 border-t-4 border-t-brand-gold">
              <h3 className="text-lg font-display font-bold text-brand-navy mb-6">
                Time Allocation & Evaluation
              </h3>

              <div className="space-y-6">
                <InfoRow
                  label="Time per relay round"
                  value="15–20 minutes"
                  icon="⏱️"
                />
                <InfoRow
                  label="Primary criteria"
                  value="Accuracy of solutions"
                  icon="✅"
                />
                <InfoRow
                  label="Secondary criteria"
                  value="Time efficiency, with merit for faster completion"
                  icon="⚡"
                />
              </div>

              <p className="mt-8 text-xs leading-relaxed text-slate-500 pt-6 border-t border-slate-100">
                Assessment is structured to reward both correctness and smart time management, in line with competitive exam expectations.
              </p>
            </Card>

            {/* Rounds & Structure */}
            <Card className="p-8 bg-slate-50 border-slate-200" hover={false}>
              <h3 className="text-lg font-display font-bold text-brand-navy mb-4">
                Rounds & Structure
              </h3>
              <p className="text-sm leading-relaxed text-slate-600 mb-6">
                The number and nature of rounds will be determined and communicated by Vishwaroop's management based on participation levels.
              </p>
              
              <ul className="space-y-3">
                <li className="flex gap-3 text-xs text-slate-600">
                  <span className="text-brand-gold">•</span>
                  Multiple relay rounds may be conducted for different levels.
                </li>
                <li className="flex gap-3 text-xs text-slate-600">
                  <span className="text-brand-gold">•</span>
                  Rules remain consistent across teams for fairness.
                </li>
                <li className="flex gap-3 text-xs text-slate-600">
                  <span className="text-brand-gold">•</span>
                  Detailed round-wise instructions are shared before the event.
                </li>
              </ul>
              
              <p className="mt-6 text-[11px] font-medium text-brand-navy/60 uppercase tracking-wider">
                Ensuring clarity, fairness and transparency.
              </p>
            </Card>

          </div>
        </div>
      </div>
    </Section>
  );
}

/* --- HELPER COMPONENTS --- */

function RelayStep({ number, title, desc, dotColor }) {
  return (
    <div className="relative z-10 flex gap-6 group">
      <div className={`flex-shrink-0 w-10 h-10 rounded-full ${dotColor} text-white flex items-center justify-center font-bold shadow-lg shadow-black/5 transform transition-transform group-hover:scale-110`}>
        {number}
      </div>
      <div className="pt-1">
        <h4 className="text-base font-bold text-brand-navy mb-1 group-hover:text-brand-blue transition-colors">
          {title}
        </h4>
        <p className="text-sm text-slate-500 leading-relaxed font-light">
          {desc}
        </p>
      </div>
    </div>
  );
}

function InfoRow({ label, value, icon }) {
  return (
    <div className="flex items-start gap-4 group">
      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-xl group-hover:border-brand-gold transition-colors">
        {icon}
      </div>
      <div>
        <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-0.5">{label}</div>
        <div className="text-sm font-semibold text-brand-navy">{value}</div>
      </div>
    </div>
  );
}