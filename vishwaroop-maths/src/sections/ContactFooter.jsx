import Section from "../components/Section";

export default function ContactFooter() {
  return (
    <footer
      id="contact"
      className="
        border-t border-amber-300/40
        bg-gradient-to-b from-[#f6e7c1] via-[#f2ddaa] to-[#e9cf8f]
        text-slate-800
      "
    >
      <Section id={undefined} className="py-12 md:py-14">
        <div className="grid gap-10 md:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="text-sm font-semibold text-brand-navy">
              Vishwaroop International Relay
            </h3>
            <p className="mt-3 text-xs md:text-sm leading-relaxed text-slate-800">
              A team-based academic relay designed by Vishwaroop Education to
              combine problem-solving, collaboration and healthy competition for
              school students.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-700">
              Contact
            </h4>
            <ul className="mt-3 space-y-1 text-xs md:text-sm text-slate-800">
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
              <li className="mt-2 flex items-start gap-2">
  {/* Clock Icon */}
  <svg
    className="mt-0.5 h-4 w-4 text-brand-gold"
    fill="currentColor"
    viewBox="0 0 24 24"
  >
    <path d="M12 1.75A10.25 10.25 0 1 0 22.25 12 10.262 10.262 0 0 0 12 1.75zm0 18.5A8.25 8.25 0 1 1 20.25 12 8.259 8.259 0 0 1 12 20.25z" />
    <path d="M12.75 7.5h-1.5v5.1l4.25 2.55.75-1.23-3.5-2.07z" />
  </svg>

  {/* Timing Text */}
  <div className="text-xs md:text-sm text-slate-800">
    <p className="font-medium">All Working Days</p>
    <p>Monday – Friday</p>
    <p>8:30 AM – 5:30 PM</p>
  </div>
</li>

            </ul>
          </div>


          {/* Address */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-700">
              Address
            </h4>
            <p className="mt-3 text-xs md:text-sm leading-relaxed text-slate-800">
              B-3/1, Model Town,
              <br />
              Delhi – 110009
            </p>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-700">
              Follow Us
            </h4>

            <div className="mt-4 flex items-center gap-4">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/1Crssa21Vm/?mibextid=wwXIfr"
                target="_blank"
                rel="noreferrer"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-amber-300/50 bg-white/90 backdrop-blur-sm shadow-md transition hover:border-brand-gold hover:bg-brand-gold/20"
              >
                <svg
                  className="h-4 w-4 text-slate-700 group-hover:text-brand-gold"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35C.597 0 0 .597 0 1.326v21.348C0 23.403.597 24 1.326 24H12.82v-9.294H9.692V11.01h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24h-1.918c-1.504 0-1.796.715-1.796 1.763v2.314h3.587l-.467 3.696h-3.12V24h6.116C23.403 24 24 23.403 24 22.674V1.326C24 .597 23.403 0 22.675 0z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/vishwaroopolympiad?igsh=ZTA5aGFic2tybHZq&utm_source=qr"
                target="_blank"
                rel="noreferrer"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-amber-300/50 bg-white/90 backdrop-blur-sm shadow-md transition hover:border-brand-gold hover:bg-brand-gold/20"
              >
                <svg
                  className="h-4 w-4 text-slate-700 group-hover:text-brand-gold"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.345 3.608 1.32.975.975 1.258 2.242 1.32 3.608.058 1.266.07 1.646.07 4.84s-.012 3.574-.07 4.84c-.062 1.366-.345 2.633-1.32 3.608-.975.975-2.242 1.258-3.608 1.32-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.345-3.608-1.32-.975-.975-1.258-2.242-1.32-3.608C2.175 15.574 2.163 15.194 2.163 12s.012-3.574.07-4.84c.062-1.366.345-2.633 1.32-3.608.975-.975 2.242-1.258 3.608-1.32C8.416 2.175 8.796 2.163 12 2.163zm0 3.675A6.162 6.162 0 1 0 18.162 12 6.168 6.168 0 0 0 12 5.838zm0 10.162A4 4 0 1 1 16 12a4.005 4.005 0 0 1-4 4zm6.406-11.845a1.44 1.44 0 1 1-1.44-1.44 1.44 1.44 0 0 1 1.44 1.44z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com/@vishwaroopolympiad?si=m0s4af9MDyVPaVoR"
                target="_blank"
                rel="noreferrer"
                className="group flex h-10 w-10 items-center justify-center rounded-full border border-amber-300/50 bg-white/90 backdrop-blur-sm shadow-md transition hover:border-brand-gold hover:bg-brand-gold/20"
              >
                <svg
                  className="h-4 w-4 text-slate-700 group-hover:text-brand-gold"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.498 6.186a2.94 2.94 0 0 0-2.067-2.08C19.585 3.6 12 3.6 12 3.6s-7.585 0-9.431.506a2.94 2.94 0 0 0-2.067 2.08A30.02 30.02 0 0 0 0 12a30.02 30.02 0 0 0 .502 5.814 2.94 2.94 0 0 0 2.067 2.08C4.415 20.4 12 20.4 12 20.4s7.585 0 9.431-.506a2.94 2.94 0 0 0 2.067-2.08A30.02 30.02 0 0 0 24 12a30.02 30.02 0 0 0-.502-5.814zM9.6 15.6V8.4l6.4 3.6-6.4 3.6z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 border-t border-amber-300/40 pt-4 text-[11px] text-slate-700">
          <p>
            © {new Date().getFullYear()} Vishwaroop Education. All rights reserved.
          </p>
          <p>Vishwaroop International Relay · Academic Team Event</p>
        </div>
      </Section>
    </footer>
  );
}
