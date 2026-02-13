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
      { label: "Sample Papers", path: "sample-papers" },
      { label: "Preparation Guide", path: "preparation" },
    ],
  },
  {
    name: "Chemistry",
    slug: "chemistry",
    items: [
      { label: "About Chemistry Olympiad", path: "" },
      { label: "Syllabus", path: "syllabus" },
      { label: "Books & References", path: "books" },
      { label: "Sample Papers", path: "sample-papers" },
      { label: "Preparation Guide", path: "preparation" },
    ],
  },
  {
    name: "Mathematics",
    slug: "maths",
    items: [
      { label: "About Maths Olympiad", path: "" },
      { label: "Syllabus", path: "syllabus" },
      { label: "Books & References", path: "books" },
      { label: "Sample Papers", path: "sample-papers" },
      { label: "Preparation Guide", path: "preparation" },
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
      { label: "Preparation Guide", path: "preparation" },
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
      setScrolled(window.scrollY > 20); // Trigger slightly later for smoothness

      // Active section logic
      let current = "";
      document.querySelectorAll("section[id]").forEach((section) => {
        const top = section.offsetTop - 150;
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b
        ${
          scrolled
            ? "bg-white/90 backdrop-blur-md shadow-md border-gray-200 py-2"
            : "bg-white/60 backdrop-blur-sm border-transparent py-4"
        }
      `}
    >
      {/* Top Gold Accent Line */}
      <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-brand-navy via-brand-gold to-brand-navy transition-opacity duration-300 ${scrolled ? 'opacity-100' : 'opacity-0'}`} />

      <nav className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        {/* LOGO */}
        <a href="#top" className="flex items-center gap-3 group">
          <img 
            src={eduLogo} 
            alt="Vishwaroop" 
            className="h-10 w-auto transition-transform duration-300 group-hover:scale-105" 
          />
          <div className="hidden sm:block leading-tight">
            <div className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-sans font-semibold">
              Vishwaroop
            </div>
            {/* Using our new 'font-display' (Outfit) for the brand name */}
            <div className="text-lg font-display font-bold text-brand-navy tracking-tight group-hover:text-brand-blue transition-colors">
              International Relay
            </div>
          </div>
        </a>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8 text-[15px] font-medium text-gray-600">
            {/* Subjects Dropdown */}
            <li className="relative group h-full py-2">
              <button className="flex items-center gap-1 hover:text-brand-blue transition-colors">
                Subjects 
                <span className="text-[10px] transition-transform group-hover:rotate-180">▼</span>
              </button>

              {/* Mega Dropdown */}
              <div className="absolute left-1/2 top-full mt-2 hidden w-[800px] -translate-x-1/2 rounded-xl border border-gray-100 bg-white p-8 shadow-2xl ring-1 ring-black/5 group-hover:block animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="grid grid-cols-4 gap-8">
                  {subjects.map((subject) => (
                    <div key={subject.slug} className="space-y-3">
                      <h4 className="text-sm font-display font-bold text-brand-navy uppercase tracking-wider border-b border-gray-100 pb-2">
                        {subject.name}
                      </h4>
                      <ul className="space-y-2">
                        {subject.items.map((item) => (
                          <li key={item.label}>
                            <a
                              href={`/subjects/${subject.slug}/${item.path}`}
                              className="block text-sm text-gray-500 hover:text-brand-blue hover:translate-x-1 transition-all"
                            >
                              {item.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
                {/* Decorative Bottom Bar in Menu */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-navy/10 via-brand-gold/50 to-brand-navy/10 rounded-b-xl" />
              </div>
            </li>

            {/* Standard Links */}
            {navLinks.map((link) => {
              const isActive = active === link.href.replace("#", "");
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className={`relative py-2 transition-colors duration-300
                      ${isActive ? "text-brand-navy font-semibold" : "hover:text-brand-blue"}
                    `}
                  >
                    {link.label}
                    {/* Animated Underline */}
                    <span
                      className={`absolute left-0 bottom-0 h-[2px] bg-brand-gold transition-all duration-300 rounded-full
                        ${isActive ? "w-full" : "w-0 hover:w-full"}
                      `}
                    />
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Call to Action */}
          <Button
            className="hidden md:flex shadow-lg shadow-brand-blue/20 hover:shadow-brand-blue/40 hover:-translate-y-0.5 transition-all"
            onClick={() =>
              document.getElementById("registration")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Register Now
          </Button>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-brand-navy"
        >
          <div className="space-y-1.5">
            <span className={`block h-0.5 w-6 bg-current transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-0.5 w-6 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`block h-0.5 w-6 bg-current transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </nav>

      {/* MOBILE MENU OVERLAY */}
      {open && (
        <div className="md:hidden absolute top-full left-0 right-0 h-screen bg-white/95 backdrop-blur-xl border-t border-gray-100 p-6 flex flex-col gap-6 shadow-2xl animate-in slide-in-from-top-5">
           <ul className="space-y-4">
             {/* Mobile Subjects Toggle */}
            <li>
                <button
                   onClick={() => setSubjectsOpen(!subjectsOpen)}
                   className="flex w-full items-center justify-between text-lg font-medium text-brand-navy border-b border-gray-100 pb-2"
                >
                  Subjects
                  <span className={`transition-transform ${subjectsOpen ? "rotate-180" : ""}`}>▼</span>
                </button>
                
                {subjectsOpen && (
                  <div className="mt-2 space-y-4 pl-4 border-l-2 border-brand-gold/30 my-4">
                    {subjects.map((subject) => (
                       <div key={subject.slug}>
                          <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">{subject.name}</p>
                          <div className="grid grid-cols-1 gap-2">
                             {subject.items.slice(0,3).map(item => (
                                <a key={item.label} href="#" className="text-sm text-gray-600 hover:text-brand-blue block py-1">{item.label}</a>
                             ))}
                          </div>
                       </div>
                    ))}
                  </div>
                )}
            </li>

            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block text-lg font-medium text-gray-600 hover:text-brand-navy hover:pl-2 transition-all"
                >
                  {link.label}
                </a>
              </li>
            ))}
           </ul>
           
           <Button className="w-full justify-center py-4 text-base shadow-xl">
              Register for Relay
           </Button>
        </div>
      )}
    </header>
  );
}