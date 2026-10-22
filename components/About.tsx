import Section from "./Section";

const techFocus = [
  "C/C++ Software Development",
  "PCB Design & Hardware Prototyping",
  "Javascript, Typescript, Node.js, React - Modern Web Applications",
  "Embedded Systems & Firmware",
  "Cloud Infrastructure",
  "Build automation (Shell, CMake, Python)",
];

export default function About() {
  return (
    <Section id="about" >
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

          <p className="mt-6 text-lg leading-relaxed">
            I enjoy working across the entire stack —
            from designing electronics and firmware,
            to developing applications and infrastructure
            that bring those systems to life.
          </p>

        </div>

        <div className="md:mt-12 md:ml-12">
          <h3 className="text-xl font-semibold">
            Technical Focus
          </h3>

          <ul className="mt-3 space-y-3">
            {techFocus.map(focus_item =>(
              <li key={"tf_" + focus_item} className="flex items-start gap-3">
                <span className="mt-0.5 ml-4 dark:text-green-400 text-purple-700" aria-hidden="true">⏣</span>
                <span>{focus_item}</span>
              </li>
            ))}

          </ul>
        </div>
      </div>
    </Section>
  );
}