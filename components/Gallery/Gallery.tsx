import Section from "../Section";
import GalleryCard from "./GalleryCard";
import { galleryCollections } from "./GalleryImages";

export default function Gallery() {
    return (
        <Section id="gallery">

            <h2 className="mb-8 text-3xl font-bold">
                Gallery
            </h2>

            <div className="grid gap-8 lg:grid-cols-2">

                {galleryCollections.map((collection) => (
                    <GalleryCard
                        key={collection.slug}
                        collection={collection}
                    />
                ))}

            </div>

        </Section>
    );
}