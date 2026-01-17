import Section from "../components/Section";

export default function ContactFooter() {
  return (
    <footer id="contact" className="border-t border-slate-200 bg-brand-cream">
      <Section id={undefined} className="py-10 md:py-12">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold text-brand-navy">
              Vishwaroop International Relay
            </h3>
            <p className="mt-2 text-xs md:text-sm leading-relaxed text-slate-700">
              A team-based academic relay designed by Vishwaroop Education to
              combine problem-solving, collaboration and healthy competition for
              school students.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
              Contact
            </h4>
            <ul className="mt-2 space-y-1 text-xs md:text-sm text-slate-700">
              <li>
                Email:{" "}
                <a
                  href="mailto:intlmathrelay@gmail.com"
                  className="font-medium text-brand-navy underline-offset-2 hover:underline"
                >
                  intlmathrelay@gmail.com
                </a>
              </li>
              <li>Phone: 8929660722</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-600">
              Address
            </h4>
            <p className="mt-2 text-xs md:text-sm leading-relaxed text-slate-700">
              B-3/1, Model Town,
              <br />
              Delhi – 110009
            </p>
            <p className="mt-3 text-[11px] text-slate-500">
              Social media links and additional contact details can be added
              here when finalised.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200 pt-4 text-[11px] text-slate-500">
          <p>
            © {new Date().getFullYear()} Vishwaroop Education. All rights
            reserved.
          </p>
          <p>Vishwaroop International Relay · Academic Team Event</p>
        </div>
      </Section>
    </footer>
  );
}
