import Image from "next/image";
import Section from "./Section";
import { SiGithub } from "@icons-pack/react-simple-icons";

export default function Hero() {
  return (
    <Section id="top" className="min-h-screen flex items-center pt-18">
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

            <div className="mt-8 flex gap-4">
              <a
                href="#projects"
                className="rounded-lg bg-gray-800 px-6 py-3 text-white"
              >
                Projects
              </a>

              <a
                href="#gallery"
                className="rounded-lg bg-gray-800 px-6 py-3 text-white"
              >
                Projects Gallery
              </a>

               <a
                href="#patents"
                className="rounded-lg bg-gray-800 px-6 py-3 text-white"
              >
                Patents
              </a>

            </div>
            <div className="mt-2 flex gap-4">
              <a
                href="/profile/resume.html"
                className="rounded-lg bg-gray-800 px-6 py-3 text-white"
              >
                Resume
              </a>
              <a
                href="https://github.com/timmeh87/personalpage"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-gray-800 px-6 py-3 text-white"
              >
                <SiGithub size={20} />
                Github
              </a>
         <a
  href="https://www.linkedin.com/in/tim-bernasch-06472487/"
  className="inline-flex items-center gap-2 rounded-lg bg-gray-800 px-6 py-3 text-white"
>
  <svg
    viewBox="0 0 24 24"
    aria-hidden="true"
    className="h-5 w-5 fill-current"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13M3.555 9h3.564v11.452H3.555zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" />
  </svg>
  LinkedIn
</a>
            </div>
          </div>

          <div>
            <Image
              src="/profile/images/portrait.webp"
              alt="Tim Bernasch"
              width={0}
              height={0}
              style={{"width":"500px"}}
              className="rounded-2xl"
              loading="eager"
            />
          </div>

        </div>
    </Section>
  );
}