import Section from "./Section";

export default function Skills() {
  return (
    <Section id="skills">
      <h2 className="text-3xl font-bold mb-8">
        Skills
      </h2>

      <div className="grid gap-4 md:grid-cols-3">
        {[
          "C++",
          "Python",
          "TypeScript",
          "React / Next.js",
          "Linux",
          "Embedded Systems",
          "PCB Design",
          "Networking",
          "Docker",
        ].map((skill) => (
          <div
            key={skill}
            className="rounded-lg border p-4"
          >
            {skill}
          </div>
        ))}
      </div>
    </Section>
  );
}