import Section from "./Section";

const projects = [
  {
    title: "ISR360 Multi-Target Tracking System",
    description:
      "Real-time tracking software for maritime surveillance applications. Developed software components for lidar-based tracking, visualization, and sensor processing.",
    tags: [
      "C++",
      "Computer Vision",
      "Lidar",
      "Linux",
    ],
    link: "#",
  },
  {
    title: "Embedded Human Interface Devices",
    description:
      "Custom embedded hardware and firmware platforms including USB HID devices, wireless communication systems, and custom PCB designs.",
    tags: [
      "STM32",
      "Embedded C",
      "USB",
      "BLE",
      "PCB Design",
    ],
    link: "#",
  },
  {
    title: "Force Feedback Steering Wheel",
    description:
      "Custom force feedback controller combining electronics design, embedded firmware, and mechanical integration.",
    tags: [
      "PCB Design",
      "Motor Control",
      "Embedded Systems",
    ],
    link: "#",
  },
  {
    title: "Personal Homelab Infrastructure",
    description:
      "Self-hosted infrastructure for storage, networking, development, and experimentation using enterprise server hardware.",
    tags: [
      "TrueNAS",
      "ZFS",
      "Docker",
      "Networking",
    ],
    link: "#",
  },
];

export default function Projects() {
  return (
    <Section id="projects">
      <h2 className="mb-8 text-3xl font-bold">
        Projects
      </h2>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.title}
            className="rounded-2xl border p-8 shadow-sm"
          >
            <h3 className="text-2xl font-bold">
              {project.title}
            </h3>

            <p className="mt-4 leading-relaxed text-gray-600">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border px-3 py-1 text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}