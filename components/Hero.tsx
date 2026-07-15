export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20">
      <h1 className="text-5xl font-bold">
        Tim Bernasch
      </h1>

      <h2 className="mt-4 text-2xl text-gray-600">
        Computer Engineer
      </h2>

      <p className="mt-6 max-w-xl text-center text-lg">
        Embedded systems, software development, PCB design,
        and engineering projects.
      </p>

      <div className="mt-8 flex gap-4">
        <a
          href="/resume"
          className="rounded-lg bg-black px-6 py-3 text-white"
        >
          Resume
        </a>

        <a
          href="/projects"
          className="rounded-lg border px-6 py-3"
        >
          Projects
        </a>
      </div>
    </section>
  );
}