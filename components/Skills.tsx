import Section from "./Section";

const skillGroups = [
  {
    title: "Software Development",
    skills: [
      "C / C++",
      "GCC / MSVC Toolchains",
      "JavaScript / TypeScript",
      "Python",
      "React / Next.js",
      "vcpkg",
      "CMake",
      "Git",
      "REST APIs",
      "Windows / Linux",
      "Visual Studio / VSCode",
      "Keil"
    ],
  },
  {
    title: "Embedded Systems",
    skills: [
      "STM32 Microcontrollers",
      "PIC Microcontrollers",
      "Embedded C/C++",
      "ARM Cortex-M",
      "Bare-Metal Programming",
      "STM32CubeIDE",
      "USB HID",
      "Bluetooh / BLE",
      "UART / SPI / I2C / CAN",
      "PWM / DMA",
      "Hardware Bring-Up",
      "Firmware Debugging",
      "PCB design"
    ],
  },
  {
    title: "Hardware Design",
    skills: [
      "PCB Design & Layout",
      "KiCad",
      "Schematic design / capture",
      "DFM / DFA",
      "Soldering & PCB Rework",
      "Hardware Validation",
      "Oscilloscopes",
      "Logic Analyzers",
      "Power Supply Design",
      "BOM optimization",
      "PCB Fabrication"
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
              <div key={skill}  
                 className="rounded-lg border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-1.5 w-fit shadow-sm"
               >
                {skill}
              </div>
            ))}
          </div>
        </section>
      ))}
    </Section>
  );
}