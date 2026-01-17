import { useState, useEffect } from "react";
import Button from "./Button";
import eduLogo from "../assets/logos/Vishwaroop.png";

const subjects = [
  {
    name: "Physics",
    slug: "physics",
    items: [
      { label: "About Physics Olympiad", path: "" },
      { label: "Syllabus", path: "syllabus" },
      { label: "Books & References", path: "books" },
      { label: "Sample / Model Papers", path: "sample-papers" },
      { label: "How to Prepare", path: "preparation" },
    ],
  },
  {
    name: "Chemistry",
    slug: "chemistry",
    items: [
      { label: "About Chemistry Olympiad", path: "" },
      { label: "Syllabus", path: "syllabus" },
      { label: "Books & References", path: "books" },
      { label: "Sample / Model Papers", path: "sample-papers" },
      { label: "How to Prepare", path: "preparation" },
    ],
  },
  {
    name: "Mathematics",
    slug: "maths",
    items: [
      { label: "About Maths Olympiad", path: "" },
      { label: "Syllabus", path: "syllabus" },
      { label: "Books & References", path: "books" },
      { label: "Sample / Model Papers", path: "sample-papers" },
      { label: "How to Prepare", path: "preparation" },
    ],
  },
  {
    name: "Indian Knowledge System",
    slug: "iks",
    items: [
      { label: "About IKS Olympiad", path: "" },
      { label: "Syllabus", path: "syllabus" },
      { label: "Reading Material", path: "books" },
      { label: "Sample Papers", path: "sample-papers" },
      { label: "How to Prepare", path: "preparation" },
    ],
  },
];

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Why Participate", href: "#why" },
  { label: "Rules", href: "#rules" },
  { label: "Awards", href: "#awards" },
  { label: "Preparation", href: "#prep" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [subjectsOpen, setSubjectsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);

      let current = "";
      document.querySelectorAll("section[id]").forEach((section) => {
        const top = section.offsetTop - 140;
        const bottom = top + section.offsetHeight;
        if (window.scrollY >= top && window.scrollY <= bottom) {
          current = section.getAttribute("id");
        }
      });
      setActive(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${
          scrolled
            ? "backdrop-blur-2xl bg-white/20 shadow-[0_20px_80px_rgba(15,23,42,0.18)]"
            : "backdrop-blur-xl bg-white/30"
        }
      `}
    >
      {/* Gold accent */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-brand-gold/80 to-transparent" />

      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between font-nav">
        {/* LOGO */}
        <a href="#top" className="flex items-center gap-3">
          <img src={eduLogo} alt="Vishwaroop" className="h-12 w-auto" />
          <div className="hidden sm:block leading-tight">
            <div className="text-[11px] uppercase tracking-[0.3em] text-slate-600">
              Vishwaroop
            </div>
            <div className="text-sm font-semibold text-brand-navy">
              International Relay
            </div>
          </div>
        </a>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex items-center gap-9 text-[14px] tracking-wide text-slate-700">
            <li className="relative group hidden md:block">
              <span className="cursor-pointer py-2 text-sm font-medium text-slate-700 hover:text-brand-navy">
                Subjects ▾
              </span>

              {/* Mega dropdown */}
              <div className="absolute left-1/2 top-full z-50 hidden w-[760px] -translate-x-1/2 rounded-2xl border border-amber-200/60 bg-white/90 p-6 shadow-xl backdrop-blur-xl group-hover:block">
                <div className="grid grid-cols-4 gap-6">
                  {subjects.map((subject) => (
                    <div key={subject.slug}>
                      <h4 className="mb-3 text-sm font-semibold text-brand-navy">
                        {subject.name}
                      </h4>

                      <ul className="space-y-2 text-sm">
                        {subject.items.map((item) => (
                          <li key={item.label}>
                            <a
                              href={`/subjects/${subject.slug}/${item.path}`}
                              className="block rounded-md px-2 py-1 text-slate-600 hover:bg-brand-cream hover:text-brand-navy"
                            >
                              {item.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </li>

            {navLinks.map((link) => {
              const isActive = active === link.href.replace("#", "");
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`relative pb-1 transition-all duration-300
                      ${
                        isActive
                          ? "text-brand-navy font-semibold"
                          : "hover:text-brand-navy"
                      }
                    `}
                  >
                    {link.label}
                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] rounded-full bg-gradient-to-r from-brand-gold to-amber-400 transition-all duration-300
                        ${isActive ? "w-full" : "w-0 hover:w-full"}
                      `}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* REGISTER AS BUTTON */}
          <Button
            className="px-7 text-[12px] tracking-[0.25em] uppercase"
            onClick={() =>
              document
                .getElementById("registration")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Register
          </Button>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden rounded-full border border-white/40 bg-white/70 backdrop-blur-md px-4 py-1.5 text-[12px] tracking-[0.25em] uppercase shadow-inner"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden backdrop-blur-2xl bg-white/85 border-t border-white/40 shadow-xl font-nav">
          <ul className="px-6 py-5 space-y-3 text-[14px]">
            <li>
              <button
                onClick={() => setSubjectsOpen(!subjectsOpen)}
                className="flex w-full items-center justify-between rounded-md px-2 py-2 text-left text-sm font-medium text-slate-700 hover:bg-brand-cream"
              >
                Subjects
                <span className="text-xs">{subjectsOpen ? "▲" : "▼"}</span>
              </button>

              {subjectsOpen && (
                <div className="mt-2 space-y-4 pl-3">
                  {subjects.map((subject) => (
                    <div key={subject.slug}>
                      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                        {subject.name}
                      </p>

                      <ul className="mt-1 space-y-1">
                        {subject.items.map((item) => (
                          <li key={item.label}>
                            <a
                              href={`/subjects/${subject.slug}/${item.path}`}
                              className="block rounded-md px-2 py-1 text-sm text-slate-600 hover:bg-brand-cream"
                            >
                              {item.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </li>

            {navLinks.map((link) => {
              const isActive = active === link.href.replace("#", "");
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between rounded-xl px-4 py-2 transition
                      ${
                        isActive
                          ? "bg-brand-gold/15 text-brand-navy"
                          : "hover:bg-brand-gold/10"
                      }
                    `}
                  >
                    {link.label}
                    <span className="text-xs opacity-60">→</span>
                  </a>
                </li>
              );
            })}

            <li>
              <Button
                className="w-full justify-center text-[12px] tracking-[0.25em] uppercase"
                onClick={() => {
                  setOpen(false);
                  document
                    .getElementById("registration")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Register
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
