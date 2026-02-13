import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";

const items = [
  {
    title: "Practice Relay Sets",
    desc: "Curated practice relay sets with detailed solutions to help students understand the flow and logic of linked problems.",
    icon: "📝",
    // Light tint and vibrant border colors
    colorClass: "bg-blue-50/50 border-blue-100 group-hover:border-blue-400 group-hover:shadow-blue-500/10",
    iconBg: "bg-blue-100 text-blue-600",
    accent: "bg-blue-500"
  },
  {
    title: "Mock Relay Rounds",
    desc: "Timed mock sessions that simulate the actual event experience, helping teams build comfort and pacing.",
    icon: "⏱️",
    colorClass: "bg-emerald-50/50 border-emerald-100 group-hover:border-emerald-400 group-hover:shadow-emerald-500/10",
    iconBg: "bg-emerald-100 text-emerald-600",
    accent: "bg-emerald-500"
  },
  {
    title: "Problem-Solving Workshops",
    desc: "Workshops led by experts focusing on strategies, common mistakes and best practices for relay-style competitions.",
    icon: "🎓",
    colorClass: "bg-indigo-50/50 border-indigo-100 group-hover:border-indigo-400 group-hover:shadow-indigo-500/10",
    iconBg: "bg-indigo-100 text-indigo-600",
    accent: "bg-indigo-500"
  },
];

export default function Preparation() {
  return (
    <Section id="prep" background="white" className="py-0 md:py-0 lg:py-0">
      
      <div className="py-12 md:py-20">
        <SectionHeader
          eyebrow="Preparation"
          title="How Can Students Prepare?"
          subtitle="Vishwaroop plans to offer structured support so that students can experience the relay format confidently and effectively."
          align="left"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {items.map((item) => (
            <PrepCard key={item.title} {...item} />
          ))}
        </div>

        {/* --- FOOTER INFO BAR --- */}
        <div className="mt-10 relative overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 p-6 md:p-8">
           <div className="absolute top-0 right-0 w-32 h-32 bg-brand-gold/5 rounded-full blur-3xl" />
           
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
              <p className="text-sm md:text-base text-slate-600 leading-relaxed max-w-2xl">
                Availability and schedule of practice sets, mock rounds and workshops 
                will be communicated to <span className="text-brand-navy font-bold">registered teams</span> and partner schools.
              </p>
              <div className="h-px w-full md:h-12 md:w-px bg-slate-200" />
              <p className="text-sm font-bold text-brand-navy text-center md:text-left md:max-w-[200px]">
                Schools can also contact Vishwaroop to arrange dedicated sessions.
              </p>
           </div>
        </div>
      </div>
    </Section>
  );
}

/* --- THE CORRECTED PREP CARD --- */

function PrepCard({ title, desc, icon, colorClass, iconBg, accent }) {
  return (
    <Card className={`group relative flex h-full flex-col p-6 md:p-8 border-2 transition-all duration-300 ${colorClass}`}>
      
      {/* Icon Circle - Stays visible, becomes more vibrant on hover */}
      <div className={`flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm text-3xl mb-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 ${iconBg}`}>
        {icon}
      </div>

      <div className="space-y-3 flex-1">
        {/* Title - Always Dark Navy for readability */}
        <h3 className="font-display text-xl font-bold text-brand-navy group-hover:text-brand-blue transition-colors">
          {title}
        </h3>
        
        {/* Description - Always Darker Slate for readability */}
        <p className="text-sm leading-relaxed text-slate-600">
          {desc}
        </p>
      </div>

      {/* Decorative Bottom Accent Bar - Grows on hover */}
      <div className={`mt-6 h-1.5 w-12 rounded-full transition-all duration-500 group-hover:w-full ${accent} opacity-20 group-hover:opacity-100`} />
      
    </Card>
  );
}