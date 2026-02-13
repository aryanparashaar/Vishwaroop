import Section from "../components/Section";

export default function ContactFooter() {
  return (
    <footer id="contact" className="relative border-t border-brand-gold/30 bg-white">
      
      {/* FIX: py-0 on Section keeps the tight flow. 
          We use a subtle off-white/gold tint for the background to separate it from the white section above.
      */}
      <Section id={undefined} className="py-0 md:py-0 lg:py-0 bg-gradient-to-b from-slate-50 to-brand-gold/5">
        
        <div className="py-12 md:py-16">
          <div className="grid gap-12 md:grid-cols-4 items-start">
            
            {/* --- 1. BRAND STORY --- */}
            <div className="space-y-4">
              <h3 className="text-lg font-display font-bold text-brand-navy flex items-center gap-2">
                <span className="w-6 h-[2px] bg-brand-gold"></span>
                Vishwaroop Relay
              </h3>
              <p className="text-xs md:text-sm leading-relaxed text-slate-500 font-light">
                An international academic relay designed to combine problem-solving, 
                collaboration, and healthy competition for school students globally.
              </p>
            </div>

            {/* --- 2. CONTACT INFO --- */}
            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-gold">
                Support Desk
              </h4>
              <ul className="space-y-3 text-xs md:text-sm">
                <li className="flex flex-col gap-1">
                   <span className="text-[10px] text-slate-400 font-bold uppercase">Email</span>
                   <a href="mailto:intlmathrelay@gmail.com" className="font-bold text-brand-navy hover:text-brand-blue transition-colors underline-offset-4">
                     intlmathrelay@gmail.com
                   </a>
                </li>
                <li className="flex flex-col gap-1">
                   <span className="text-[10px] text-slate-400 font-bold uppercase">Phone</span>
                   <span className="font-bold text-brand-navy">+91 89296 60722</span>
                </li>
              </ul>
            </div>

            {/* --- 3. TIMING & ADDRESS --- */}
            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-gold">
                Availability
              </h4>
              <div className="flex items-start gap-3">
                 <div className="mt-1 h-8 w-8 rounded-lg bg-white border border-slate-100 flex items-center justify-center shadow-sm">
                    <span className="text-brand-gold">⏱</span>
                 </div>
                 <div className="text-xs md:text-sm text-slate-600">
                    <p className="font-bold text-brand-navy">Monday – Friday</p>
                    <p>8:30 AM – 5:30 PM</p>
                    <p className="text-[10px] uppercase text-slate-400 font-black mt-1">Working Days Only</p>
                 </div>
              </div>
              
              <div className="pt-4 space-y-1">
                 <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-gold">HQ Address</h4>
                 <p className="text-xs text-slate-600">B-3/1, Model Town, Delhi – 110009</p>
              </div>
            </div>

            {/* --- 4. SOCIAL MEDIA --- */}
            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-brand-gold">
                Connect With Us
              </h4>
              <div className="flex items-center gap-3">
                <SocialLink 
                  href="https://www.facebook.com/share/1Crssa21Vm/" 
                  label="Facebook"
                  icon={<FacebookIcon />}
                />
                <SocialLink 
                  href="https://www.instagram.com/vishwaroopolympiad" 
                  label="Instagram"
                  icon={<InstagramIcon />}
                />
                <SocialLink 
                  href="https://youtube.com/@vishwaroopolympiad" 
                  label="YouTube"
                  icon={<YouTubeIcon />}
                />
              </div>
              <div className="p-3 rounded-xl bg-white border border-slate-100 shadow-inner">
                 <p className="text-[10px] text-slate-400 font-medium">Scan to join our official community updates.</p>
              </div>
            </div>
          </div>

          {/* --- BOTTOM BAR --- */}
          <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-4 border-t border-slate-200 pt-8 text-[10px] font-bold uppercase tracking-widest text-slate-400">
            <p>© {new Date().getFullYear()} Vishwaroop Education. All rights reserved.</p>
            <div className="flex gap-6">
               <a href="#" className="hover:text-brand-navy transition-colors">Privacy Policy</a>
               <a href="#" className="hover:text-brand-navy transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </Section>
    </footer>
  );
}

/* --- REFINED HELPER COMPONENTS --- */

function SocialLink({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="group flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm transition-all hover:border-brand-gold hover:shadow-brand-gold/20 hover:-translate-y-1"
    >
      <div className="h-5 w-5 text-slate-400 group-hover:text-brand-gold transition-colors">
        {icon}
      </div>
    </a>
  );
}

const FacebookIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24H12.82v-9.294H9.692V11.01h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.314h3.587l-.467 3.696h-3.12V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z" /></svg>
);

const InstagramIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.345 3.608 1.32.975.975 1.258 2.242 1.32 3.608.058 1.266.07 1.646.07 4.84s-.012 3.574-.07 4.84c-.062 1.366-.345 2.633-1.32 3.608-.975.975-2.242 1.258-3.608 1.32-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.345-3.608-1.32-.975-.975-1.258-2.242-1.32-3.608C2.175 15.574 2.163 15.194 2.163 12s.012-3.574.07-4.84c.062-1.366.345-2.633 1.32-3.608.975-.975 2.242-1.258 3.608-1.32C8.416 2.175 8.796 2.163 12 2.163zm0 3.675A6.162 6.162 0 1 0 18.162 12 6.168 6.168 0 0 0 12 5.838zm0 10.162A4 4 0 1 1 16 12a4.005 4.005 0 0 1-4 4zm6.406-11.845a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44z" /></svg>
);

const YouTubeIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.94 2.94 0 0 0-2.067-2.08C19.585 3.6 12 3.6 12 3.6s-7.585 0-9.431.506a2.94 2.94 0 0 0-2.067 2.08A30.02 30.02 0 0 0 0 12a30.02 30.02 0 0 0 .502 5.814 2.94 2.94 0 0 0 2.067 2.08C4.415 20.4 12 20.4 12 20.4s7.585 0 9.431-.506a2.94 2.94 0 0 0 2.067-2.08A30.02 30.02 0 0 0 24 12a30.02 30.02 0 0 0-.502-5.814zM9.6 15.6V8.4l6.4 3.6-6.4 3.6z" /></svg>
);