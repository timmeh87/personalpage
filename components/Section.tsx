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
      className={`py-10 ${className}`}
    >
      <div className="mx-auto max-w-6xl px-6">
        {children}
      </div>
    </section>
  );
}