export default function SubjectLayout({
  subject,
  title,
  description,
  children,
}) {
  return (
    <section className="bg-brand-cream min-h-screen">
      {/* Header */}
      <div className="border-b border-amber-200 bg-gradient-to-b from-[#fff7e6] to-white">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-brand-gold">
            {subject} Olympiad
          </p>
          <h1 className="mt-2 text-3xl font-semibold text-brand-navy md:text-4xl">
            {title}
          </h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-700">
            {description}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-amber-200/50">
          {children}
        </div>
      </div>
    </section>
  );
}
