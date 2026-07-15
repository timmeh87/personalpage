import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      <section
        id="about"
        className="min-h-screen px-6 py-24"
      >
        <h2 className="text-3xl font-bold">
          About
        </h2>
      </section>

      <section
        id="projects"
        className="min-h-screen px-6 py-24"
      >
        <h2 className="text-3xl font-bold">
          Projects
        </h2>
      </section>

      <section
        id="experience"
        className="min-h-screen px-6 py-24"
      >
        <h2 className="text-3xl font-bold"
        >
          Experience
        </h2>
      </section>

      <section
        id="contact"
        className="min-h-screen px-6 py-24"
      >
        <h2 className="text-3xl font-bold">
          Contact
        </h2>
      </section>
    </main>
  );
}