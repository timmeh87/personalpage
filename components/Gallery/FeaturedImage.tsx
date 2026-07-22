"use client";

import Image from "next/image";
import Link from "next/link";
import { GalleryImage } from "./GalleryImages";

interface FeaturedImageProps {
    image: GalleryImage;
    href: string;
}

export default function FeaturedImage({
    image,
    href,
}: FeaturedImageProps) {
    return (
        <Link
            href={href}
            className="group relative block overflow-hidden rounded-xl"
        >
            <Image
                src={image.image}
                alt={image.title}
                width={1200}
                height={800}
                className="
                    aspect-video
                    w-full
                    object-cover
                    transition-transform
                    duration-300
                    group-hover:scale-105
                "
            />

            {/* Gradient overlay */}

            <div
                className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-black/60
                    via-transparent
                    to-transparent
                "
            />

            {/* Bottom text */}

            <div
                className="
                    absolute
                    bottom-0
                    left-0
                    right-0
                    flex
                    items-center
                    justify-between
                    p-5
                    text-white
                "
            >
                <div>
                    <h3 className="text-xl font-semibold">
                        {image.title}
                    </h3>

                    <p className="text-sm text-white/80">
                        {image.description}
                    </p>
                </div>

                <span
                    className="
                        rounded-full
                        bg-white/20
                        px-3
                        py-1
                        text-sm
                        backdrop-blur
                    "
                >
                    View Gallery →
                </span>
            </div>
        </Link>
    );
}