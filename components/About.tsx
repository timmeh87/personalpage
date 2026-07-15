import Section from "./Section";

export default function About() {
  return (
    <Section id="about">
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold">
            About Me
          </h2>

          <p className="mt-6 text-lg leading-relaxed">
            I'm a computer engineer focused on building
            systems that bridge hardware and software.
            My experience spans embedded systems,
            C++ applications, PCB design, and cloud-based
            software development.
          </p>

          <p className="mt-4 text-lg leading-relaxed">
            I enjoy working across the entire stack —
            from designing electronics and firmware,
            to developing applications and infrastructure
            that bring those systems to life.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">
            Technical Focus
          </h3>

          <ul className="mt-6 space-y-3">
            <li>
              Embedded Systems & Firmware
            </li>

            <li>
              C++ / Python Development
            </li>

            <li>
              PCB Design & Hardware Prototyping
            </li>

            <li>
              Linux & Networking
            </li>

            <li>
              Modern Web Applications
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}