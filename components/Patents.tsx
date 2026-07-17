import Section from "./Section";

const patents = [
  {
    key: "pat1",
    title: "Computer mouse with integrated hinged hand rest",
    image: "/profile/images/mouse_patent.webp",
    link: "https://patents.google.com/patent/US12197662B2/en?q=(tim)&inventor=bernasch&oq=tim+bernasch"
  },
  {
    key: "pat2",
    title: "Adjustment system for hinged mouse wrist rests",
    image: "/profile/images/mouse_patent2.webp",
    link: "https://patents.google.com/patent/US20250190062A1/en?q=(tim)&inventor=bernasch&oq=tim+bernasch"    
  },
  {
    key: "pat3",
    title: "Steering wheel control device with integral legs",
    image: "/profile/images/wheel_patent.webp",
    link: "https://patents.google.com/patent/US11179629B1/en?q=(tim)&inventor=bernasch&oq=tim+bernasch",
  },
  {
    key: "pat4",
    title: "Keyboard with movable rows of keys",
    image: "/profile/images/keyboard_patent.webp",
    link: "https://patents.google.com/patent/US20250329506A1/en?q=(tim)&inventor=bernasch&oq=tim+bernasch"    
  }
 
];

export default function Patents() {
  return (
    <Section id="patents">
      <h2 className="mb-2 text-3xl font-bold">
        Patents
      </h2>
      <p className="mt-2 mb-8 text-lg leading-relaxed">I am a named inventor on several US patents. Click to view on google patents.</p>

      <div className="grid gap-8 md:grid-cols-2">
        {patents.map((patent) => (
          <a href={patent.link} key={patent.key}>
            <div       
              className="rounded-2xl border p-8 shadow-sm"
            >
              <h3 className="text-2xl font-bold">
                {patent.title}
              </h3>

              <img src={patent.image} className="p-4 h-64 w-full object-contain"></img>

              
            </div>
          </a>
        ))}
      </div>
    </Section>
  );
}