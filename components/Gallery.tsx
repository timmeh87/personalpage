import Image from "next/image";
import Section from "./Section";

const pcbImages = [
  {
    src: "/images/pcb/controller.jpg",
    alt: "Custom PCB controller board",
  },
  {
    src: "/images/pcb/render.png",
    alt: "PCB 3D render",
  },
  {
    src: "/images/pcb/prototype.jpg",
    alt: "Hardware prototype",
  },
];

const natureImages = [
  {
    src: "/images/nature/escarpment.jpg",
    alt: "Landscape photography",
  },
  {
    src: "/images/nature/bird.jpg",
    alt: "Wildlife photography",
  },
  {
    src: "/images/nature/sunset.jpg",
    alt: "Sunset photography",
  },
];

function ImageGrid({
  images,
}: {
  images: { src: string; alt: string }[];
}) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {images.map((image) => (
        <div
          key={image.src}
          className="overflow-hidden rounded-xl border"
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={600}
            height={400}
            className="h-64 w-full object-cover transition-transform hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
}

export default function Gallery() {
  return (
    <Section id="gallery">
      <h2 className="mb-8 text-3xl font-bold">
        Gallery
      </h2>

      <h3 className="mb-4 text-2xl font-semibold">
        PCB Design & Hardware
      </h3>

      <ImageGrid images={pcbImages} />

      <h3 className="mb-4 mt-12 text-2xl font-semibold">
        Photography
      </h3>

      <ImageGrid images={natureImages} />
    </Section>
  );
}