interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({
  id,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 border-t border-gray-400/70 py-5 ${className}`}
    >
      <div className="mx-auto max-w-6xl px-6">
        {children}
      </div>
    </section>
  );
}