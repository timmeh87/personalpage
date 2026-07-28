import { notFound } from "next/navigation";
import Section from "@/components/Section";
import GalleryViewer from "@/components/Gallery/GalleryViewer";
import {
    galleryCollections,
} from "@/components/Gallery/GalleryImages";
import Navbar from "@/components/Navbar";


interface PageProps {
    params: Promise<{
        category: string;
    }>;
}

export function generateStaticParams() {
    return galleryCollections.map((gallery) => ({
        category: gallery.slug,
    }));
}

export default async function GalleryPage({
    params,
}: PageProps) {

    const { category } = await params;


    const collection =
        galleryCollections.find(
            (gallery) =>
                gallery.slug === category
        );


    if (!collection) {
        notFound();
    }


    return (
        <>
        <Navbar/>
        <Section className="pt-24">

            <h1 className="text-4xl font-bold">
                {collection.title}
            </h1>


            <p className="mt-4 max-w-3xl text-gray-600 dark:text-gray-300">
                {collection.description}
            </p>


            <div className="mt-10">

                <GalleryViewer
                    collection={collection}
                />

            </div>

        </Section>
        </>
    );
}