import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";

export default function RulesFormat() {
  return (
    <Section
      id="rules"
      className="bg-brand-soft/70 border-b border-slate-200/80"
    >
      <SectionHeader
        eyebrow="Rules & Format"
        title="How Does the Relay Work?"
        subtitle="Each relay is conducted under clear, transparent rules to ensure fairness while preserving the competitive rigour of the event."
        align="left"
      />

      <div className="grid gap-8 md:grid-cols-[1.3fr,1.1fr]">
        {/* Left: relay flow */}
        <Card className="p-6 md:p-7">
          <h3 className="text-sm font-semibold text-brand-navy">
            Team Composition & Relay Flow
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            Each team consists of{" "}
            <span className="font-medium">three students</span>. Every student
            is responsible for one stage of the relay and receives a problem
            that depends on the previous teammate&apos;s result.
          </p>

          <ol className="mt-5 space-y-3 text-sm">
            <RelayStep
              number={1}
              title="First Member"
              desc="Undertakes the initial problem and computes the first solution, which becomes the input or starting point for the second member."
              color="bg-sky-100 text-sky-900"
            />
            <RelayStep
              number={2}
              title="Second Member"
              desc="Receives the outcome from the first member. Their problem is dependent on that value, and they must complete it accordingly."
              color="bg-emerald-100 text-emerald-900"
            />
            <RelayStep
              number={3}
              title="Third Member"
              desc="Works with the result from the second member and resolves the concluding part of the relay, delivering the team’s final answer."
              color="bg-amber-100 text-amber-900"
            />
          </ol>

          <p className="mt-4 text-xs leading-relaxed text-slate-600">
            This linked structure ensures that each student&apos;s performance
            is indispensable and encourages teams to verify and communicate
            clearly.
          </p>
        </Card>

        {/* Right: timing, evaluation, rounds */}
        <div className="space-y-4">
          <Card className="p-6">
            <h3 className="text-sm font-semibold text-brand-navy">
              Time Allocation & Evaluation
            </h3>

            <div className="mt-3 space-y-3 text-sm">
              <InfoRow
                label="Time per relay round"
                value="15–20 minutes"
                badge="⏱️"
              />
              <InfoRow
                label="Primary criteria"
                value="Accuracy of solutions"
                badge="✅"
              />
              <InfoRow
                label="Secondary criteria"
                value="Time efficiency, with merit for faster completion"
                badge="⚡"
              />
            </div>

            <p className="mt-4 text-xs leading-relaxed text-slate-600">
              Assessment is structured to reward both correctness and smart time
              management, in line with competitive exam expectations.
            </p>
          </Card>

          <Card className="p-6">
            <h3 className="text-sm font-semibold text-brand-navy">
              Rounds & Structure
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-700">
              The number and nature of rounds will be determined and
              communicated by Vishwaroop&apos;s management based on
              participation levels and categories.
            </p>
            <ul className="mt-3 space-y-1.5 text-xs leading-relaxed text-slate-700">
              <li>
                • Multiple relay rounds may be conducted for different levels.
              </li>
              <li>• Rules remain consistent across teams for fairness.</li>
              <li>
                • Detailed round-wise instructions are shared before the event.
              </li>
            </ul>
            <p className="mt-3 text-[11px] text-slate-500">
              This ensures clarity, fairness and transparency for all
              participating schools and independent teams.
            </p>
          </Card>
        </div>
      </div>
    </Section>
  );
}

function RelayStep({ number, title, desc, color }) {
  return (
    <li className="flex gap-3">
      <div
        className={`mt-1 flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full text-xs font-semibold ${color}`}
      >
        {number}
      </div>
      <div>
        <div className="text-sm font-semibold text-brand-navy">{title}</div>
        <p className="text-xs md:text-sm leading-relaxed text-slate-700">
          {desc}
        </p>
      </div>
    </li>
  );
}

function InfoRow({ label, value, badge }) {
  return (
    <div className="flex items-start gap-2">
      <span className="mt-0.5 inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-brand-cream text-xs">
        {badge}
      </span>
      <div>
        <p className="text-xs font-semibold text-slate-700">{label}</p>
        <p className="text-xs text-slate-600">{value}</p>
      </div>
    </div>
  );
}
