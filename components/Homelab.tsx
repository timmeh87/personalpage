import Section from "./Section";

const services = [
  {
    title: "Storage & Virtualization",
    description:
      "Self-hosted storage platform built around TrueNAS SCALE, ZFS pools, and enterprise server hardware.",
    tags: [
      "TrueNAS",
      "ZFS",
      "RAIDZ2",
      "Linux",
    ],
  },
  {
    title: "Networking Infrastructure",
    description:
      "Managed home network with VLANs, routing, firewall rules, and secure remote access.",
    tags: [
      "Networking",
      "WireGuard",
      "VLANs",
      "Switching",
    ],
  },
  {
    title: "Self-Hosted Services",
    description:
      "Running personal services and development infrastructure using containers and Linux.",
    tags: [
      "Docker",
      "Nginx",
      "Cloudflare",
      "Web Hosting",
    ],
  },
];

export default function Homelab() {
  return (
    <Section id="homelab">
      <h2 className="mb-8 text-3xl font-bold">
        Homelab
      </h2>

      <div className="max-w-3xl">
        <p className="text-lg leading-relaxed">
          A personal infrastructure lab used for experimenting
          with storage, networking, virtualization, and
          self-hosted applications.
        </p>

        <p className="mt-4 text-lg leading-relaxed">
          The environment provides a platform for testing
          technologies that overlap with my professional work:
          Linux systems, networking, automation, and software
          deployment.
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-2xl border p-6 shadow-sm"
          >
            <h3 className="text-xl font-bold">
              {service.title}
            </h3>

            <p className="mt-3">
              {service.description}
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              {service.tags.map((tag) => (
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