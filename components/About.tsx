import Section from "./Section";

const techFocus = [
  "C/C++ Software Development",
  "Javascript, Modern Web Applications",
  "PCB Design & Hardware Prototyping",
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

          
          <p className="mt-6 text-md leading-relaxed">       
              <span style={{"display":"inline-block"}}><img src="/profile/images/yt.ico" style={{"height":"1em", "paddingTop":"4px"}}></img></span>
              <a href="https://www.youtube.com/watch?v=8fcSviC7cRM">  <u>"The key to success is developers"</u></a>
              &nbsp;- <i>Steve Ballmer, Former Microsoft CEO</i>
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold">
            Technical Focus
          </h3>

          <ul className="mt-6 space-y-3">
            {techFocus.map(focus_item =>(
              <li key={"tf_"+focus_item}>
                  {focus_item}
              </li>
            ))}

          </ul>
        </div>
      </div>
    </Section>
  );
}