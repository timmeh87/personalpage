import Section from "./Section";

const projects = [
  {
    title: "ISR360 Multi-Target Tracking",
    tags: "C++ • Lidar • Computer Vision",
    description:
      "Real-time tracking software for maritime surveillance applications.",
  },
  {
    title: "Embedded Human Interface Devices",
    tags: "STM32 • USB • BLE • PCB Design",
    description:
      "Embedded controllers and custom hardware platforms.",
  },
  {
    title: "Homelab Infrastructure",
    tags: "TrueNAS • Linux • Networking",
    description:
      "Self-hosted storage, services, and networking infrastructure.",
  },
];

export default function Projects() {
  return (
    <Section id="projects">
      <h2 className="text-3xl font-bold mb-8">
        Projects
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-xl border p-6"
          >
            <h3 className="text-xl font-semibold">
              {project.title}
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              {project.tags}
            </p>

            <p className="mt-4">
              {project.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}