export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "center",
}) {
  const alignment =
    align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <div className={`flex flex-col gap-2 ${alignment} mb-8`}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-gold">
          {eyebrow}
        </p>
      )}
      {title && (
        <h2 className="font-display text-2xl font-semibold text-brand-navy md:text-3xl">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="max-w-2xl text-sm leading-relaxed text-slate-700">
          {subtitle}
        </p>
      )}
      <div className="mt-1 h-0.5 w-16 bg-brand-gold/70" />
    </div>
  );
}
