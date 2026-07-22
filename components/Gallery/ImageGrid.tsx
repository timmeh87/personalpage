"use client";

import Image from "next/image";
import { GalleryImage } from "./GalleryImages";

interface ImageGridProps {
    images: GalleryImage[];
    onSelect: (index: number) => void;
}

export default function ImageGrid({
    images,
    onSelect,
}: ImageGridProps) {
    return (
        <div
            className="
                grid
                grid-cols-2
                gap-0
                md:grid-cols-4
            "
        >
            {images.map((image, index) => (
                <button
                    key={image.image + index}
                    onClick={() => onSelect(index)}
                    className="
                        group
                        overflow-hidden
                        border-1
                        border-gray-300
                    "
                >
                    <Image
                        src={image.image}
                        alt={image.title}
                        width={800}
                        height={600}
                        className="
                            aspect-square
                            w-full
                            object-cover
                            transition-transform
                            duration-300
                            group-hover:scale-105
                        "
                    />
                </button>
            ))}
        </div>
    );
}