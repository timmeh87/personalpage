import Section from "./Section";
const jobs = [
  {
    company: "Trackgen Solutions",
    title: "Senior Software Engineer",
    period: "2010 - 2026",
    description:
      "Development of ISR360, a large cross-platform wxWidgets application for developing and evaluating tracking algorithms for industrial and defence applications.",
      
    anchor: "trackgen",
  },
  {
    company: "Dexlabs",
    title: "Hardware / Systems Engineer",
    period: "2016 - 2026",
    description:
      "PCB design, Embedded systems development, hardware prototyping, human interface devices",
    anchor: "dexlabs",
  },
];

export default function Experience() {
  return (
    <Section id="experience">
      <div className="max-w-3xl">
      <h2 className="text-3xl font-bold mb-8">
        Experience
      </h2>

      <div className="space-y-8">
        {jobs.map((job) => (
          <div className="rounded-xl border p-6" key={job.company}>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-3xl">{job.company}</h3>
                <p className="text-xl">{job.title}</p>
              </div>

              <span>{job.period}</span>
            </div>

            <p className="mt-4">
              {job.description}
            </p>
            <a className="mt-6 inline-block" href={"/profile/resume.html#" + job.anchor}>
              <u>View full responsibilities on resume →</u>
            </a>
          </div>
        ))}
      </div>
      </div>
    </Section>
  );
}