import Section from "../components/Section";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";
import Button from "../components/Button";

export default function Registration() {
  const registrationLink = "https://relayexam.virtualprachar.com/login";

  return (
    // FIX: py-0 removes the massive gaps to keep the site flow tight
    <Section id="registration" background="gray" className="py-0 md:py-0 lg:py-0">
      
      <div className="py-12 md:py-20">
        <SectionHeader
          eyebrow="Registration"
          title="Register for Vishwaroop International Relay"
          subtitle="Registration is open for all Government, Private, and Aided Schools and independent teams. A team leader can complete the registration on behalf of all three students."
          align="left"
        />

        <div className="grid gap-8 lg:grid-cols-12 items-start">
          
          {/* --- LEFT: ELIGIBILITY & FEES --- */}
          <Card className="lg:col-span-7 p-8 md:p-10 border-t-4 border-t-brand-navy">
            <h3 className="text-xl font-display font-bold text-brand-navy mb-6">
              Eligibility & Fee Structure
            </h3>

            <p className="text-slate-600 leading-relaxed mb-8 text-sm md:text-base">
              Registration is open for all <strong className="text-brand-navy">Government, Private,</strong> and <strong className="text-brand-navy">Aided schools</strong> as well as <strong className="text-brand-navy">independent teams</strong>. Teams must have three students who meet the level criteria.
            </p>

            <div className="grid gap-6 md:grid-cols-2">
              <FeeCard
                title="Schools within India"
                currency="INR"
                amountPerStudent="150"
                amountPerTeam="450"
                highlight="Domestic Category"
                isFeatured={true}
              />
              <FeeCard
                title="Schools outside India"
                currency="USD"
                amountPerStudent="5"
                amountPerTeam="15"
                highlight="International Category"
                isFeatured={false}
              />
            </div>

            <div className="mt-8 p-4 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-500 italic">
              Important: Registrations are considered valid only upon receipt of the prescribed fee within the stipulated time frame. Teams are encouraged to register early.
            </div>
          </Card>

          {/* --- RIGHT: PROCESS & CTA (FIXED VISIBILITY) --- */}
          <div className="lg:col-span-5">
            <Card className="p-8 md:p-10 bg-white border-slate-200 shadow-xl relative overflow-hidden" hover={false}>
               {/* Decorative Gradient Corner */}
               <div className="absolute top-0 right-0 w-24 h-24 bg-brand-gold/5 rounded-full blur-2xl -mr-10 -mt-10" />
               
               <h3 className="text-lg font-display font-bold text-brand-navy mb-8 relative z-10 border-b border-slate-100 pb-4">
                 Registration Process
               </h3>

               <ol className="space-y-8 relative z-10">
                 <li className="flex gap-4">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-brand-navy text-white text-xs font-bold flex items-center justify-center shadow-lg shadow-brand-navy/20">1</span>
                    <p className="text-sm text-slate-700 font-medium leading-relaxed">Teams shall be constituted only by Vishwaroop’s management.</p>
                 </li>
                 <li className="flex gap-4">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-brand-navy text-white text-xs font-bold flex items-center justify-center shadow-lg shadow-brand-navy/20">2</span>
                    <p className="text-sm text-slate-700 font-medium leading-relaxed">Team and school details shall be submitted accurately by students.</p>
                 </li>
                 <li className="flex gap-4">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-brand-navy text-white text-xs font-bold flex items-center justify-center shadow-lg shadow-brand-navy/20">3</span>
                    <p className="text-sm text-slate-700 font-medium leading-relaxed">Fees shall be paid only through the specified payment mode.</p>
                 </li>
                 <li className="flex gap-4">
                    <span className="flex-shrink-0 w-7 h-7 rounded-full bg-brand-navy text-white text-xs font-bold flex items-center justify-center shadow-lg shadow-brand-navy/20">4</span>
                    <p className="text-sm text-slate-700 font-medium leading-relaxed">Success confirmation will be sent via email/message.</p>
                 </li>
               </ol>

               <div className="mt-12 pt-8 border-t border-slate-100">
                  <Button 
                    variant="primary" 
                    className="w-full justify-center py-4 text-sm font-bold shadow-2xl shadow-brand-gold/30 hover:scale-[1.02] transition-transform"
                    onClick={() => window.open(registrationLink, "_blank")}
                  >
                    REGISTER TEAM NOW
                  </Button>
                  <p className="text-[10px] text-center mt-4 text-slate-400 uppercase tracking-[0.2em] font-bold">
                    Official Registration Portal
                  </p>
               </div>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* --- REFINED FEE CARD COMPONENT --- */

function FeeCard({ title, currency, amountPerStudent, amountPerTeam, highlight, isFeatured }) {
  return (
    <div className={`rounded-2xl p-6 border-2 transition-all duration-300 ${isFeatured ? 'bg-white border-brand-gold shadow-lg shadow-brand-gold/5' : 'bg-slate-50 border-slate-100'}`}>
      <span className="text-[10px] font-black text-brand-gold uppercase tracking-widest mb-1 block">
        {highlight}
      </span>
      <h4 className="text-sm font-bold text-brand-navy mb-4">{title}</h4>
      
      <div className="space-y-4">
        <div className="flex justify-between items-end border-b border-slate-100 pb-2">
           <span className="text-xs text-slate-500">Per Student</span>
           <span className="text-lg font-display font-black text-brand-navy">{currency} {amountPerStudent}</span>
        </div>
        <div className="flex justify-between items-end border-b border-slate-100 pb-2">
           <span className="text-xs text-slate-500">Per Team</span>
           <span className="text-lg font-display font-black text-brand-navy">{currency} {amountPerTeam}</span>
        </div>
      </div>
      
      <p className="mt-4 text-[10px] text-slate-400 font-medium">Standard entry fee applies</p>
    </div>
  );
}