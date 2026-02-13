import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";

const benefits = [
  {
    title: "Enhancement of Problem-Solving Skills",
    desc: "The relay format strengthens speed, accuracy and logical reasoning by forcing students to work through connected problems under time constraints. It builds the mental stamina required for high-pressure academic environments.",
    icon: "🧠",
    className: "md:col-span-3 md:row-span-2", // The tall card
    featured: true, // Custom flag to trigger extra design
  },
  {
    title: "Teamwork & Communication",
    desc: "Students cultivate collaborative skills by engaging in structured team-based problem solving where every answer impacts the next.",
    icon: "🤝",
    className: "md:col-span-3",
  },
  {
    title: "Strategic Thinking",
    desc: "The sequential nature demands decision-making, planning and strategic execution instead of random guessing.",
    icon: "♟️",
    className: "md:col-span-3",
  },
  {
    title: "International-Level Recognition",
    desc: "Participants gain exposure on an international platform and are eligible for medals, certificates and accolades.",
    icon: "🌍",
    className: "md:col-span-2",
  },
  {
    title: "Distinctive Competition Format",
    desc: "Unlike conventional Olympiads, the relay emphasises interdependence and coordination.",
    icon: "🔗",
    className: "md:col-span-2",
  },
  {
    title: "Holistic Academic Growth",
    desc: "Participation supports conceptual clarity, exam readiness, and confidence within a single competition.",
    icon: "🌱",
    className: "md:col-span-2",
  },
];

export default function WhyParticipate() {
  return (
    <Section id="why" background="gray" className="py-0 md:py-0 lg:py-0">
      <div className="py-12 md:py-16">
        <SectionHeader
          eyebrow="Benefits"
          title="Why Participate in Vishwaroop Relay?"
          subtitle="The relay is intentionally designed to benefit students far beyond just one competition day, combining skill-building, exposure and recognition."
          align="left"
        />

        <div className="grid gap-6 md:grid-cols-6 auto-rows-fr">
          {benefits.map((item) => (
            <BenefitCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </Section>
  );
}

function BenefitCard({ title, desc, icon, className, featured }) {
  return (
    <Card
      className={`group relative overflow-hidden p-6 md:p-8 flex flex-col justify-between ${className}`}
    >
      {/* 1. Large Faint Background Icon */}
      <div className="absolute -right-4 -bottom-4 text-8xl opacity-5 grayscale group-hover:grayscale-0 group-hover:opacity-10 transition-all duration-500 transform group-hover:-rotate-12 group-hover:scale-110 pointer-events-none">
        {icon}
      </div>

      <div className="relative z-10 flex flex-col h-full">
        {/* Icon Container */}
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-navy/5 text-2xl group-hover:bg-brand-gold group-hover:shadow-lg group-hover:shadow-brand-gold/30 transition-all duration-300 mb-6">
          {icon}
        </div>
        
        <h3 className={`font-display font-bold text-brand-navy mb-3 group-hover:text-brand-blue transition-colors ${featured ? 'text-2xl' : 'text-lg'}`}>
          {title}
        </h3>
        
        <p className="text-sm md:text-base leading-relaxed text-slate-500 font-light">
          {desc}
        </p>

        {/* 2. FILLER ELEMENT: Only for the featured/empty card */}
        {featured && (
          <div className="mt-auto pt-8">
            <div className="inline-flex flex-col rounded-2xl bg-brand-gold/10 p-4 border border-brand-gold/20">
              <span className="text-brand-gold font-bold text-xs uppercase tracking-widest mb-1">Impact Goal</span>
              <p className="text-brand-navy font-bold text-sm">3x Faster Cognitive Processing</p>
            </div>
          </div>
        )}
      </div>

      {/* Hover accent bar */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-brand-gold transition-all duration-500 group-hover:w-full" />
    </Card>
  );
}