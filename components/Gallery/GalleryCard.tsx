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

    const previewImages =
        collection.images.slice(0, 3);

    const featuredImage =
        previewImages[selectedIndex];

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
                image={featuredImage}
                href={`/gallery/${collection.slug}`}
            />

            <div className="mt-4">
                <ThumbnailStrip
                images={previewImages}
                selectedIndex={selectedIndex}
                onSelect={setSelectedIndex}
            />
            </div>

            <div className="mt-6">

                <h3 className="text-2xl font-bold">
                    {collection.title}
                </h3>

                <p className="mt-3 text-gray-600">
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
                    "
                >
                    View full gallery →
                </Link>

            </div>
        </div>
    );
}