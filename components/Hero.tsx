import Image from "next/image";
import Section from "./Section";

export default function Hero() {
  return (
    <Section id="top" className="min-h-screen flex items-center pt-3">
        <div className="grid items-center gap-12 md:grid-cols-2">

          <div>

            <h1 className="mt-4 text-6xl font-bold">
              Tim Bernasch
            </h1>

            <h3 className="heading-lg">
              Computer Engineer
            </h3>

            <h2 className="heading-md">
              Building hardware and software systems
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              Embedded systems, C++, PCB design,
              software development, and infrastructure.
            </p>

            <div className="mt-10 flex gap-4">
              <a
                href="#projects"
                className="rounded-lg bg-black px-6 py-3 text-white"
              >
                Projects
              </a>

              <a
                href="/profile/resume.html"
                className="rounded-lg border px-6 py-3"
              >
                Resume
              </a>
            </div>
          </div>

          <div>
            <Image
              src="/profile/images/portrait.webp"
              alt="Tim Bernasch"
              width={500}
              height={500}
              className="rounded-2xl"
            />
          </div>

        </div>
    </Section>
  );
}