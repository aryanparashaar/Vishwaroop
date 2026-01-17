import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";

const benefits = [
  {
    title: "Enhancement of Problem-Solving Skills",
    desc: "The relay format strengthens speed, accuracy and logical reasoning by forcing students to work through connected problems under time constraints.",
    color: "from-sky-50 to-sky-100 border-sky-100",
    icon: "🧠",
  },
  {
    title: "Teamwork & Communication",
    desc: "Students cultivate collaborative and communication skills by engaging in structured team-based problem solving where every answer impacts the next.",
    color: "from-emerald-50 to-emerald-100 border-emerald-100",
    icon: "🤝",
  },
  {
    title: "Strategic Thinking",
    desc: "The time-bound, sequential nature of the relay demands decision-making, planning and strategic execution instead of random guessing.",
    color: "from-amber-50 to-amber-100 border-amber-100",
    icon: "♟️",
  },
  {
    title: "International-Level Recognition",
    desc: "Participants gain exposure on an international platform and are eligible for medals, certificates and institutional accolades.",
    color: "from-indigo-50 to-indigo-100 border-indigo-100",
    icon: "🌍",
  },
  {
    title: "Distinctive Competition Format",
    desc: "Unlike conventional Olympiads, the relay emphasises interdependence, coordination and collective success, making it a unique learning experience.",
    color: "from-rose-50 to-rose-100 border-rose-100",
    icon: "🔗",
  },
  {
    title: "Holistic Academic Growth",
    desc: "Participation supports conceptual clarity, exam readiness, confidence and exposure, all within a single, carefully structured competition.",
    color: "from-teal-50 to-teal-100 border-teal-100",
    icon: "🌱",
  },
];

export default function WhyParticipate() {
  return (
    <Section
      id="why"
      className="bg-brand-cream/80 border-b border-slate-200/70"
    >
      <SectionHeader
        eyebrow="Why Participate"
        title="Why Participate in Vishwaroop Relay?"
        subtitle="The relay is intentionally designed to benefit students far beyond just one competition day, combining skill-building, exposure and recognition."
        align="left"
      />

      <div className="grid gap-5 md:grid-cols-3">
        {benefits.map((item) => (
          <BenefitCard key={item.title} {...item} />
        ))}
      </div>
    </Section>
  );
}

function BenefitCard({ title, desc, color, icon }) {
  return (
    <Card
      className={`flex flex-col gap-3 border bg-gradient-to-br ${color} p-4 md:p-5`}
    >
      <div className="flex items-start gap-3">
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
