import Section from "./Section";

const jobs = [
  {
    company: "Trackgen Solutions",
    period: "2021 - Present",
    description:
      "Development of ISR360 multi-target tracking systems using lidar, C++, and computer vision technologies.",
  },
  {
    company: "Dexlabs",
    period: "2011 - Present",
    description:
      "Embedded systems development, PCB design, hardware prototyping, and human interface devices.",
  },
];

export default function Experience() {
  return (
    <Section id="experience">
      <h2 className="text-3xl font-bold mb-8">
        Experience
      </h2>

      <div className="space-y-8">
        {jobs.map((job) => (
          <div
            key={job.company}
            className="border-l-2 pl-6"
          >
            <h3 className="text-xl font-semibold">
              {job.company}
            </h3>

            <p className="text-sm text-gray-500">
              {job.period}
            </p>

            <p className="mt-3">
              {job.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}