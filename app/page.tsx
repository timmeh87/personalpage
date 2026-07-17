import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Patents from "@/components/Patents";
import Gallery from "@/components/Gallery";
import Homelab from "@/components/Homelab";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Patents />
      <Gallery />
      <Homelab />
      <Contact />
    </main>
  );
}