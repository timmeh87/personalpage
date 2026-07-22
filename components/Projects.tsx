import Section from "./Section";

const projects = [
  {
    title: "ISR360 Multi-Target Tracking System",
    description:
      "At Trackgen, we developed a real-time sensor fusion and target tracking software for industrial and defense applications. I ported the entire application to Linux, developed software components in C++ and JavaScript, and created a build automation system from scratch. I also created a cloud-hosted version of ISR360, by containerizing the application and developing a web-based interface in React, deployed on AWS infrastructure for remote access and scalability.",
    tags: [
      "C++",
      "JavaScript",
      "Linux",
      "CMake",
      "vcpkg",
      "Build automation",
      "Debugging",
      "Optimization",
      "React",
      "AWS",
      "SQL",
      "Docker"
    ],
    link: "#",
  },
  {
    title: "Embedded Human Interface Devices",
    description:
      "Custom embedded hardware and firmware platforms including USB HID devices, wireless communication systems, and custom PCB designs.",
    tags: [
      "Schematic capture",
      "PCB Design",
      "PCB Manufacturing / assembly",
      "STM32",
      "Embedded C",
      "USB",
      "BLE",
      "3D Printing"
    ],
    link: "#",
  },
  {
    title: "Force Feedback Steering Wheel",
    description:
      "While working at Dexlabs we built a custom force feedback videogame controller combining electronics design, embedded firmware, and mechanical integration.",
    tags: [
      "Schematic capture",
      "PCB Design",
      "PCB Manufacturing / assembly",
      "STM32",
      "Embedded C",
      "USB",
      "CAN bus",
      "Motor Control"
    ],
    link: "#",
  },
  {
    title: "Personal Homelab Infrastructure",
    description:
      "Self-hosted infrastructure for storage, networking, development, and experimentation using enterprise server hardware.",
    tags: [
      "Linux",
      "Windows",
      "TrueNAS",
      "ZFS",
      "Docker",
      "Hyper-V",
      "Networking",
      "Cloudflare"
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

            <p className="mt-4 leading-relaxed">
              {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-1.5 w-fit shadow-sm"

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