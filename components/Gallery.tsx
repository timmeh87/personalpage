import Section from "./Section";

export default function Gallery() {
  return (
    <Section id="gallery">
      <h2 className="text-3xl font-bold mb-8">
        Gallery
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        <div className="border rounded-xl p-8">
          PCB Designs
        </div>

        <div className="border rounded-xl p-8">
          Photography
        </div>
      </div>
    </Section>
  );
}