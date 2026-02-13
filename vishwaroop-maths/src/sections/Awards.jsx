import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import olympiadLogo from "../assets/logos/Olympiad.png";

const awards = [
  {
    title: "Prize Money",
    desc: "Cash prizes will be awarded to top-performing teams in recognition of their excellence. Final prize slabs will be communicated by Vishwaroop management.",
    icon: "💰",
    color: "border-t-brand-gold"
  },
  {
    title: "Medals",
    desc: "Gold, Silver and Bronze medals shall be presented to winning teams, acknowledging their position and performance in the relay.",
    icon: "🥇",
    color: "border-t-slate-300"
  },
  {
    title: "Certificates",
    desc: "Every participating student will receive an E-Participation Certificate, serving as an official record of their involvement.",
    icon: "📜",
    color: "border-t-amber-600"
  },
  {
    title: "Special School Awards",
    desc: "Institutions with the highest number of participating teams will receive special recognition and appreciation.",
    icon: "🏫",
    color: "border-t-brand-blue"
  },
];

export default function Awards() {
  return (
    // background="gray" provides a subtle distinction from the white section above
    <Section id="awards" background="gray" className="py-0 md:py-0 lg:py-0">
      
      <div className="py-12 md:py-20">
        <SectionHeader
          eyebrow="Awards & Recognition"
          title="What Do Participants Receive?"
          subtitle="Recognition is designed to honour individual effort, team performance and institutional encouragement."
          align="left"
        />

        {/* --- AWARDS GRID --- */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {awards.map((award) => (
            <AwardCard key={award.title} {...award} />
          ))}
        </div>

        {/* --- BOTTOM INFO BAR & SEAL --- */}
        <div className="mt-12 flex flex-col md:flex-row items-center gap-8 border-t border-slate-200 pt-10">
          
          {/* Note Box */}
          <div className="flex-1 relative p-6 rounded-2xl bg-white border border-slate-100 shadow-sm overflow-hidden group">
            {/* Decorative Gold Corner */}
            <div className="absolute top-0 left-0 w-2 h-full bg-brand-gold opacity-70" />
            
            <p className="relative z-10 text-sm md:text-base leading-relaxed text-slate-600 italic">
              "These awards are designed to acknowledge both the effort of individual students and the collective achievements of teams and schools, encouraging broad participation and academic excellence."
            </p>
          </div>

          {/* Official Seal Section */}
          <div className="flex flex-col items-center gap-3 md:min-w-[200px]">
            <div className="relative">
               {/* Pulsing background for the seal */}
               <div className="absolute inset-0 rounded-full bg-brand-gold/10 animate-ping opacity-20" />
               <img
                 src={olympiadLogo}
                 alt="Vishwaroop Olympiad seal"
                 className="relative z-10 h-24 w-24 rounded-full border-4 border-white shadow-xl md:h-28 md:w-28 object-contain bg-white p-2"
               />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-navy/40">Official Seal</span>
          </div>

        </div>
      </div>
    </Section>
  );
}

/* --- REFINED AWARD CARD --- */

function AwardCard({ title, desc, icon, color }) {
  return (
    <Card className={`group flex h-full flex-col p-6 md:p-8 border-t-4 ${color}`}>
      
      {/* Icon Circle */}
      <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-slate-50 border border-slate-100 text-3xl mb-6 shadow-inner group-hover:bg-brand-navy group-hover:text-white transition-all duration-500 transform group-hover:rotate-6">
        {icon}
      </div>

      <div className="space-y-3">
        <h3 className="font-display text-lg font-bold text-brand-navy leading-tight">
          {title}
        </h3>
        <p className="text-sm leading-relaxed text-slate-500 font-light">
          {desc}
        </p>
      </div>

      {/* Subtle Bottom Accent */}
      <div className="mt-auto pt-6 opacity-0 group-hover:opacity-100 transition-opacity">
         <span className="text-[10px] font-bold text-brand-gold uppercase tracking-[0.2em]">Recognition 2026</span>
      </div>
      
    </Card>
  );
}