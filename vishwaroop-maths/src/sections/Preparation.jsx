import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";

const items = [
  {
    title: "Practice Relay Sets",
    desc: "Curated practice relay sets with detailed solutions to help students understand the flow and logic of linked problems.",
    icon: "📝",
    color: "from-sky-50 to-sky-100 border-sky-100",
  },
  {
    title: "Mock Relay Rounds",
    desc: "Timed mock sessions that simulate the actual event experience, helping teams build comfort and pacing.",
    icon: "⏱️",
    color: "from-emerald-50 to-emerald-100 border-emerald-100",
  },
  {
    title: "Problem-Solving Workshops",
    desc: "Workshops led by experts focusing on strategies, common mistakes and best practices for relay-style competitions.",
    icon: "🎓",
    color: "from-indigo-50 to-indigo-100 border-indigo-100",
  },
];

export default function Preparation() {
  return (
    <Section
      id="prep"
      className="bg-brand-cream/80 border-b border-slate-200/80"
    >
      <SectionHeader
        eyebrow="Preparation"
        title="How Can Students Prepare?"
        subtitle="Vishwaroop plans to offer structured support so that students can experience the relay format confidently and effectively."
        align="left"
      />

      <div className="grid gap-5 md:grid-cols-3">
        {items.map((item) => (
          <PrepCard key={item.title} {...item} />
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-[11px] md:text-xs text-slate-700">
        <p>
          Availability and schedule of practice sets, mock rounds and workshops
          will be communicated to registered teams and partner schools.
        </p>
        <p className="font-medium text-brand-navy">
          Schools can also contact Vishwaroop to arrange dedicated preparation
          sessions.
        </p>
      </div>
    </Section>
  );
}

function PrepCard({ title, desc, icon, color }) {
  return (
    <Card
      className={`flex h-full flex-col gap-2 border bg-gradient-to-br ${color} p-4 md:p-5`}
    >
      <div className="flex items-center gap-2">
        <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-white/80 text-lg shadow-sm">
          {icon}
        </div>
        <h3 className="text-sm font-semibold text-brand-navy">{title}</h3>
      </div>
      <p className="text-xs md:text-sm leading-relaxed text-slate-700">
        {desc}
      </p>
    </Card>
  );
}
