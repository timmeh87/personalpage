import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";

export default function Home() {
  return (
    <main>
      <Navbar />

      <Hero />

      <Section id="about">
        <h2 className="text-3xl font-bold">
          About
        </h2>
      </Section>

      <Section id="projects">
        <h2 className="text-3xl font-bold">
          Projects
        </h2>
      </Section>

      <Section id="experience">
        <h2 className="text-3xl font-bold">
          Experience
        </h2>
      </Section>

      <Section id="contact">
        <h2 className="text-3xl font-bold">
          Contact
        </h2>
      </Section>
    </main>
  );
}