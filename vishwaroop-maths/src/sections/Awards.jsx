import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import olympiadLogo from "../assets/logos/Olympiad.png";

const awards = [
  {
    title: "Prize Money",
    desc: "Cash prizes will be awarded to top-performing teams in recognition of their excellence. Final prize slabs will be communicated by Vishwaroop management.",
    icon: "💰",
  },
  {
    title: "Medals",
    desc: "Gold, Silver and Bronze medals shall be presented to winning teams, acknowledging their position and performance in the relay.",
    icon: "🥇",
  },
  {
    title: "Certificates",
    desc: "Every participating student will receive an E-Participation Certificate, serving as an official record of their involvement.",
    icon: "📜",
  },
  {
    title: "Special School Awards",
    desc: "Institutions with the highest number of participating teams will receive special recognition and appreciation.",
    icon: "🏫",
  },
];

export default function Awards() {
  return (
    <Section
      id="awards"
      className="bg-gradient-to-b from-brand-soft/80 via-[#fdf6ea] to-brand-cream border-b border-slate-200/80"
    >
      <SectionHeader
        eyebrow="Awards & Recognition"
        title="What Do Participants Receive?"
        subtitle="Recognition is designed to honour individual effort, team performance and institutional encouragement."
        align="left"
      />

      <div className="grid gap-5 md:grid-cols-4">
        {awards.map((award) => (
          <AwardCard key={award.title} {...award} />
        ))}
      </div>

      {/* note + seal row */}
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <div className="flex-1 rounded-2xl border border-amber-200/80 bg-amber-50/70 px-4 py-3 text-[11px] md:text-sm text-amber-900">
          These awards are designed to acknowledge both the effort of individual
          students and the collective achievements of teams and schools,
          encouraging broad participation and academic excellence.
        </div>

        <div className="flex justify-end md:w-auto">
          <img
            src={olympiadLogo}
            alt="Vishwaroop Olympiad seal"
            className="h-20 w-20 rounded-full border-2 border-brand-gold/80 shadow-soft md:h-24 md:w-24"
          />
        </div>
      </div>
    </Section>
  );
}

function AwardCard({ title, desc, icon }) {
  return (
    <Card className="flex h-full flex-col gap-2 bg-gradient-to-br from-white via-white/90 to-amber-50/60 p-4 md:p-5">
      <div className="flex items-center gap-2">
        <div className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-brand-gold/15 text-lg">
          {icon}
        </div>
        <h3 className="text-sm font-semibold text-brand-navy">
          {title}
        </h3>
      </div>
      <p className="text-xs md:text-sm leading-relaxed text-slate-700">
        {desc}
      </p>
    </Card>
  );
}
