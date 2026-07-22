import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Section from "@/components/Section";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Patents from "@/components/Patents";
import Gallery from "@/components/Gallery/Gallery";
import Homelab from "@/components/Homelab";
import Contact from "@/components/Contact";

export default function Home() {
 /* return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Gallery />
      <Homelab />
      <Patents />
      <Contact />
    </main>
  );*/

   return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Section>
        <p className="mt-6 text-md leading-relaxed">       
          <span style={{"display":"inline-block"}}><img src="/profile/images/yt.ico" style={{"height":"1em", "paddingTop":"4px"}}></img></span>
          <a href="https://www.youtube.com/watch?v=8fcSviC7cRM">  <u>"The key to success is developers"</u></a>
          &nbsp;- <i>Steve Ballmer, Former Microsoft CEO</i>
        </p>
      </Section>
    </main>
  );
}