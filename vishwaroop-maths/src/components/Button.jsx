// Reusable button component
const base =
  "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition duration-150 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2";

const variants = {
  primary:
    "bg-brand-gold text-brand-navy shadow-soft hover:-translate-y-0.5 hover:shadow-lg focus:ring-brand-gold focus:ring-offset-brand-cream",
  outline:
    "border border-brand-gold text-brand-navy hover:bg-brand-gold/10 focus:ring-brand-gold focus:ring-offset-brand-cream",
};

export default function Button({
  variant = "primary",
  className = "",
  ...props
}) {
  return (
    <button
      className={`${base} ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
