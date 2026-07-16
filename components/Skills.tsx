import Section from "./Section";

const skillGroups = [
  {
    title: "Embedded Systems",
    skills: [
      "ARM Cortex-M",
      "STM32 Microcontrollers",
      "Embedded C/C++",
      "Bare-Metal Programming",
      "RTOS",
      "STM32CubeIDE",
      "HAL / CMSIS",
      "USB HID",
      "BLE",
      "UART / SPI / I2C / CAN",
      "PWM / DMA",
      "Hardware Bring-Up",
      "Firmware Debugging",
    ],
  },
  {
    title: "Software Development",
    skills: [
      "C++",
      "Python",
      "JavaScript / TypeScript",
      "React / Next.js",
      "OpenCV",
      "CMake",
      "vcpkg",
      "GCC / MSVC Toolchains",
      "GDB Debugging",
      "Git",
      "REST APIs",
    ],
  },
  {
    title: "Hardware Design",
    skills: [
      "PCB Design & Layout",
      "KiCad",
      "Schematic Design",
      "DFM / DFA",
      "Hardware Validation",
      "Oscilloscopes",
      "Logic Analyzers",
      "Soldering & PCB Rework",
      "Power Supply Design",
      "ESD Handling",
    ],
  },
  {
    title: "Systems & Infrastructure",
    skills: [
      "Linux",
      "Ubuntu",
      "Docker",
      "Nginx",
      "TrueNAS / ZFS",
      "Networking",
      "TCP/IP",
      "MQTT",
      "Cloudflare",
      "Self-Hosted Infrastructure",
    ],
  },
];
export default function Skills() {
  return (
    <Section id="skills">
      <h2 className="text-3xl font-bold mb-8">
        Skills
      </h2>
      {skillGroups.map(group => (
        <section key={group.title} className="mb-6">
          <h3 className="mb-2 font-semibold">{group.title}</h3>
          <div className="flex flex-wrap gap-2">
            {group.skills.map(skill => (
              <div key={skill}   className="rounded-lg border border-white/40 bg-gradient-to-b from-white/60 to-black/5 px-4 py-1.5 w-fit shadow-sm">
                {skill}
              </div>
            ))}
          </div>
        </section>
      ))}
    </Section>
  );
}