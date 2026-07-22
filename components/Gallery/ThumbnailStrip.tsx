"use client";

import Image from "next/image";
import { GalleryImage } from "./GalleryImages";

interface ThumbnailStripProps {
    images: GalleryImage[];
    selectedIndex: number;
    onSelect: (index: number) => void;
}

export default function ThumbnailStrip({
    images,
    selectedIndex,
    onSelect,
}: ThumbnailStripProps) {
    return (
        <div className="grid grid-cols-3 gap-3">
            {images.map((image, index) => (
                <button
                    key={image.image + index}
                    onClick={() => onSelect(index)}
                    onMouseEnter={() => onSelect(index)}
                    className={`
                        overflow-hidden
                        rounded-lg
                        transition
                        ${
                            selectedIndex === index
                                ? "ring-2 ring-blue-500"
                                : "opacity-70 hover:opacity-100"
                        }
                    `}
                >
                    <Image
                        src={image.image}
                        alt={image.title}
                        width={300}
                        height={200}
                        className="
                            aspect-video
                            w-full
                            object-cover
                            transition-transform
                            duration-200
                            hover:scale-105
                        "
                    />
                </button>
            ))}
        </div>
    );
}