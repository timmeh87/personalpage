"use client";

import { useState } from "react";

import ImageGrid from "./ImageGrid";
import Lightbox from "./Lightbox";
import { GalleryImage } from "./GalleryImages";

interface GalleryViewerProps {
    images: GalleryImage[];
}

export default function GalleryViewer({
    images,
}: GalleryViewerProps) {

    const [selectedIndex, setSelectedIndex] =
        useState<number | null>(null);


    return (
        <>
            <ImageGrid
                images={images}
                onSelect={(index) => setSelectedIndex(index)}
            />


            {selectedIndex !== null && (

                <Lightbox
                    images={images}
                    selectedIndex={selectedIndex}

                    onClose={() =>
                        setSelectedIndex(null)
                    }

                    onPrevious={() =>
                        setSelectedIndex(
                            selectedIndex === 0
                                ? images.length - 1
                                : selectedIndex - 1
                        )
                    }

                    onNext={() =>
                        setSelectedIndex(
                            selectedIndex === images.length - 1
                                ? 0
                                : selectedIndex + 1
                        )
                    }
                />

            )}
        </>
    );
}