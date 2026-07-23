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


    return (
        <>
            <ImageGrid
                collection={collection}
                onSelect={(index) => setSelectedIndex(index)}
            />


            {selectedIndex !== null && (

                <Lightbox
                    collection={collection}
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