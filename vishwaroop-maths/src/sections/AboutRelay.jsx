import Section from "../components/Section";
import Card from "../components/Card";

export default function AboutRelay() {
  return (
    // FIX APPLIED: added className="py-0 md:py-0 lg:py-0" to remove the gap
    <Section id="about" background="white" className="py-0 md:py-0 lg:py-0">
      
      {/* Added a small top padding wrapper so the text doesn't touch the very edge, 
          but the SECTION gap is gone. */}
      <div className="pt-10 pb-10"> 
      
        {/* --- HEADER SECTION --- */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <span className="text-brand-gold font-bold uppercase tracking-widest text-xs mb-2 block">
            About Relay
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-brand-navy mb-6">
            What is Vishwaroop International Relay?
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            A carefully designed, team-based academic relay where three students solve linked problems in sequence, combining <strong className="text-brand-navy">speed, logic, and collaboration</strong>.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12">
          
          {/* --- LEFT COLUMN: MAIN EXPLANATION (Span 7) --- */}
          <div className="lg:col-span-7 space-y-6">
             <Card className="h-full border-l-4 border-l-brand-gold p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-display font-bold text-brand-navy mb-4">
                  Where knowledge meets teamwork.
                </h3>
                
                <div className="space-y-4 text-slate-600 leading-relaxed">
                  <p>
                    In traditional Olympiads, students compete as individuals. In <strong className="text-brand-navy">Vishwaroop Relay</strong>, they compete as a <strong className="text-brand-navy">tightly connected team</strong>. Each member receives a problem that depends on the previous answer, creating a logical chain.
                  </p>
                  <p>
                    If any link in the chain is weak or incorrect, the team must discover and fix it together. This encourages deeper understanding instead of guesswork, and builds real <strong className="text-brand-navy">accountability and trust</strong>.
                  </p>
                  <p>
                    The design of the relay blends <span className="italic text-slate-800">academic rigour, time-bound execution and structured teamwork</span>, preparing participants for higher studies and professional environments.
                  </p>
                </div>

                {/* Feature Chips */}
                <div className="flex flex-wrap gap-3 mt-8">
                   <FeatureChip>Linked problem chain</FeatureChip>
                   <FeatureChip>Every student's answer matters</FeatureChip>
                   <FeatureChip>Balanced speed & depth</FeatureChip>
                </div>
             </Card>
          </div>

          {/* --- RIGHT COLUMN: INFO & OUTCOMES (Span 5) --- */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* 1. RELAY AT A GLANCE (The colorful box) */}
            <div className="bg-gradient-to-br from-brand-navy to-blue-900 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden">
               {/* Background Decoration */}
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
               
               <h4 className="font-display font-bold text-lg mb-4 relative z-10">Relay at a Glance</h4>
               <p className="text-blue-100 text-sm mb-6 relative z-10">
                 Vishwaroop Relay moves beyond a typical Olympiad using a <span className="text-brand-gold font-bold">linked question chain</span>.
               </p>

               <div className="grid grid-cols-3 gap-2 relative z-10">
                  <GlanceBox label="Format" value="3 Students" sub="Team-based" />
                  <GlanceBox label="Flow" value="Linked" sub="Output → Input" />
                  <GlanceBox label="Focus" value="Logic" sub="Time Pressure" />
               </div>
            </div>

            {/* 2. CORE OUTCOMES */}
            <Card className="p-6 bg-slate-50 border border-slate-200">
               <h4 className="font-display font-bold text-brand-navy text-lg mb-4">Core Outcomes</h4>
               <div className="space-y-4">
                  <OutcomeItem 
                    title="Agility in Thinking" 
                    desc="Move quickly from understanding to execution without losing accuracy." 
                    color="bg-blue-100 text-blue-700"
                  />
                  <OutcomeItem 
                    title="Collaborative Learning" 
                    desc="Team decisions and corrections build communication skills." 
                    color="bg-green-100 text-green-700"
                  />
                  <OutcomeItem 
                    title="Competitive Spirit" 
                    desc="Motivates students to perform under healthy, structured competition." 
                    color="bg-amber-100 text-amber-700"
                  />
               </div>
            </Card>

          </div>
        </div>
      </div>
    </Section>
  );
}

/* --- HELPER COMPONENTS --- */

function FeatureChip({ children }) {
  return (
    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200">
      {children}
    </span>
  );
}

function GlanceBox({ label, value, sub }) {
  return (
    <div className="bg-white/10 rounded-lg p-3 backdrop-blur-sm border border-white/10 text-center">
       <div className="text-[10px] uppercase text-blue-200 mb-1">{label}</div>
       <div className="font-bold text-white text-sm leading-tight">{value}</div>
       <div className="text-[9px] text-blue-200 mt-1">{sub}</div>
    </div>
  );
}

function OutcomeItem({ title, desc, color }) {
  return (
    <div className="flex gap-3 items-start">
       <div className={`mt-1 h-2 w-2 rounded-full flex-shrink-0 ${color.replace('text', 'bg').split(' ')[0]}`}></div>
       <div>
         <h5 className="text-sm font-bold text-brand-navy">{title}</h5>
         <p className="text-xs text-slate-500 leading-relaxed mt-1">{desc}</p>
       </div>
    </div>
  );
}