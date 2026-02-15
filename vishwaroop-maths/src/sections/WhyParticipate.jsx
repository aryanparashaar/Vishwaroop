import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";

const benefits = [
  {
    title: "International-Level Recognition",
    desc: "Participants gain exposure on an international platform and are eligible for medals, certificates and institutional accolades.",
    icon: "🌍",
    className: "md:col-span-3 md:row-span-2",
    featured: true,
  },
  {
    title: "Teamwork & Communication",
    desc: "Students cultivate collaborative and communication skills by engaging in structured team-based problem solving where every answer impacts the next.",
    icon: "🤝",
    className: "md:col-span-3",
  },
  {
    title: "Enhancement of Problem-Solving Skills",
    desc: "The relay format strengthens speed, accuracy and logical reasoning by forcing students to work through connected problems under time constraints.",
    icon: "🧠",
    className: "md:col-span-3",
  },
  {
    title: "Strategic Thinking",
    desc: "The time-bound, sequential nature of the relay demands decision-making, planning and strategic execution instead of random guessing.",
    icon: "♟️",
    className: "md:col-span-2",
  },
  {
    title: "Distinctive Competition Format",
    desc: "Unlike conventional Olympiads, the relay emphasises interdependence, coordination and collective success.",
    icon: "🔗",
    className: "md:col-span-2",
  },
  {
    title: "Holistic Academic Growth",
    desc: "Participation supports conceptual clarity, exam readiness, confidence and exposure.",
    icon: "🌱",
    className: "md:col-span-2",
  },
];

export default function WhyParticipate() {
  return (
    <Section id="why" background="gray">
      <div className="py-8 md:py-5">
        <SectionHeader
          eyebrow="Why Participate"
          title="Why Participate in Vishwaroop Relay?"
          subtitle="The relay is intentionally designed to benefit students far beyond just one competition day."
          align="left"
        />

        <div className="grid gap-8 md:grid-cols-6 auto-rows-fr">
          {benefits.map((item, index) => (
            <BenefitCard key={item.title} {...item} index={index} />
          ))}
        </div>
      </div>
    </Section>
  );
}

function BenefitCard({ title, desc, icon, className, featured, index }) {
  const gradients = [
    "from-brand-navy/15 to-brand-gold/10",
    "from-indigo-500/15 to-sky-500/10",
    "from-amber-500/15 to-orange-500/10",
    "from-purple-500/15 to-pink-500/10",
    "from-emerald-500/15 to-teal-500/10",
    "from-blue-500/15 to-indigo-500/10",
  ];

  return (
    <Card
      className={`group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 md:p-8 flex flex-col justify-between 
      shadow-md md:shadow-lg transition-all duration-500 
      md:hover:shadow-2xl md:hover:-translate-y-2 ${className}`}
    >
      {/* Always Visible Soft Gradient (Mobile Friendly) */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${
          gradients[index % gradients.length]
        } opacity-70 md:opacity-30 md:group-hover:opacity-100 transition-opacity duration-500`}
      />

      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-brand-gold to-amber-500 opacity-60" />

      {/* Decorative Soft Blob */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-gold/20 blur-3xl opacity-60 md:opacity-0 md:group-hover:opacity-100 transition duration-700" />

      {/* Background Icon */}
      <div className="absolute -right-6 -bottom-6 text-[100px] opacity-5 md:opacity-5 md:group-hover:opacity-10 transition-all duration-700 transform md:group-hover:scale-110 pointer-events-none">
        {icon}
      </div>

      <div className="relative z-10 flex flex-col h-full">
        {/* Icon */}
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-md text-2xl 
        transition-all duration-300 mb-6 
        md:group-hover:bg-brand-gold md:group-hover:text-white md:group-hover:shadow-xl">
          {icon}
        </div>

        <h3
          className={`font-display font-bold text-brand-navy mb-4 ${
            featured ? "text-xl md:text-3xl" : "text-lg md:text-xl"
          }`}
        >
          {title}
        </h3>

        <p className="text-sm md:text-base leading-relaxed text-slate-700 font-light">
          {desc}
        </p>

        {featured && (
          <div className="mt-auto pt-8">
            <div className="inline-flex flex-col rounded-2xl bg-white/80 backdrop-blur-md p-4 border border-brand-gold/20 shadow-md">
              <span className="text-brand-gold font-bold text-[10px] uppercase tracking-widest mb-1">
                Global Exposure
              </span>
              <p className="text-brand-navy font-bold text-sm">
                International Peer Comparison
              </p>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}

