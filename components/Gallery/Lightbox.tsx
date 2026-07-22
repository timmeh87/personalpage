"use client";

import Image from "next/image";
import { GalleryImage } from "./GalleryImages";

interface LightboxProps {
    images: GalleryImage[];
    selectedIndex: number;
    onClose: () => void;
    onPrevious: () => void;
    onNext: () => void;
}

export default function Lightbox({
    images,
    selectedIndex,
    onClose,
    onPrevious,
    onNext,
}: LightboxProps) {

    const image = images[selectedIndex];

    return (
        <div
            className="
                fixed
                inset-0
                z-50
                flex
                items-center
                justify-center
                bg-black/90
                p-6
            "
            onClick={onClose}
        >

            <div
                className="
                    flex
                    h-full
                    w-full
                    flex-col
                    items-center
                    justify-center
                "
                onClick={(e) => e.stopPropagation()}
            >

                <Image
                    src={image.image}
                    alt={image.title}
                    width={1600}
                    height={1200}
                    className="
                        max-h-[90vh]
                        max-w-[90vw]
                        rounded-lg
                        object-contain
                    "
                />


                <button
                    onClick={onClose}
                    className="
                        absolute
                        right-3
                        top-3
                        rounded-full
                        bg-black/50
                        px-3
                        py-1
                        text-xl
                        text-white
                    "
                >
                    ×
                </button>


                <button
                    onClick={onPrevious}
                    className="
                        absolute
                        left-3
                        top-1/2
                        -translate-y-1/2
                        rounded-full
                        bg-black/50
                        px-4
                        py-2
                        text-2xl
                        text-white
                    "
                >
                    ←
                </button>


                <button
                    onClick={onNext}
                    className="
                        absolute
                        right-3
                        top-1/2
                        -translate-y-1/2
                        rounded-full
                        bg-black/50
                        px-4
                        py-2
                        text-2xl
                        text-white
                    "
                >
                    →
                </button>


                <div
                    className="
                        mt-3
                        text-center
                        text-white
                    "
                >
                    {image.title}
                    <br />
                    {selectedIndex + 1} / {images.length}
                </div>

            </div>

        </div>
    );
}	