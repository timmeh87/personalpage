"use client";

import { useState } from "react";

import ImageGrid from "./ImageGrid";
import Lightbox from "./Lightbox";
import { GalleryCollection } from "./GalleryImages";

interface GalleryViewerProps {
    collection: GalleryCollection;
}

export default function GalleryViewer({
    collection,
}: GalleryViewerProps) {

    const [selectedIndex, setSelectedIndex] =
        useState<number | null>(null);

    const sortedImages =
        [...collection.images].sort(
            (a, b) =>
                a.sortOrder - b.sortOrder
        );

    return (
        <>
            <ImageGrid
                collection={{
                    ...collection,
                    images: sortedImages,
                }}
                onSelect={setSelectedIndex}
            />


            {selectedIndex !== null && (

                <Lightbox
                    collection={{
                        ...collection,
                        images: sortedImages,
                    }}
                    selectedIndex={selectedIndex}

                    onClose={() =>
                        setSelectedIndex(null)
                    }

                    onPrevious={() =>
                        setSelectedIndex(
                            selectedIndex === 0
                                ? collection.images.length - 1
                                : selectedIndex - 1
                        )
                    }

                    onNext={() =>
                        setSelectedIndex(
                            selectedIndex === collection.images.length - 1
                                ? 0
                                : selectedIndex + 1
                        )
                    }
                />

            )}
        </>
    );
}