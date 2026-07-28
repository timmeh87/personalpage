"use client";

import { useState } from "react";
import Link from "next/link";

import FeaturedImage from "./FeaturedImage";
import ThumbnailStrip from "./ThumbnailStrip";
import { GalleryCollection } from "./GalleryImages";

interface GalleryCardProps {
    collection: GalleryCollection;
}

export default function GalleryCard({
    collection,
}: GalleryCardProps) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const previewImages = collection.images
        .filter((image) => image.featured)
        .slice(0, 3);

    const featuredImage =
        previewImages[selectedIndex] ?? collection.images[0];

    return (
        <div
            className="
                rounded-2xl
                border
                p-6
                shadow-sm
            "
        >
            <FeaturedImage
                collection={collection}
                image={featuredImage}
                href={`/gallery/${collection.slug}`}
            />

            <div className="mt-4">
            <ThumbnailStrip
                collection={collection}
                images={previewImages}
                selectedIndex={selectedIndex}
                onSelect={setSelectedIndex}
            />
            </div>

            <div className="mt-6 hidden">

                <h3 className="text-2xl font-bold">
                    {collection.title}
                </h3>

                <p className="mt-3 text-gray-600 ">
                    {collection.description}
                </p>

                <Link
                    href={`/gallery/${collection.slug}`}
                    className="
                        mt-5
                        inline-block
                        font-medium
                        text-blue-600
                        hover:underline
                        hidden
                    "
                >
                    View full gallery →
                </Link>

            </div>
        </div>
    );
}