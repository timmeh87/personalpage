"use client"

import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { navigateToSection, links } from "./navigation";



function scrollToSection(id: string) {
    const element = document.getElementById(id);

    if (!element) {
        return;
    }

    const navbar = document.querySelector("nav");
    const navbarHeight = navbar?.getBoundingClientRect().height ?? 0;

    const y =
        element.getBoundingClientRect().top +
        window.scrollY -
        navbarHeight -
        224; // extra padding

    window.scrollTo({
        top: y,
        behavior: "smooth",
    });
}

export default function Navbar() {
    return (
        <nav
            className="
                fixed
                top-0
                left-0
                right-0
                z-50
                border-b
                bg-white/80
                backdrop-blur
                dark:bg-gray-900/80
            "
        >
            <div
                className="
                    mx-auto
                    flex
                    max-w-5xl
                    items-center
                    justify-between
                    px-6
                    py-4
                "
            >

                <Link
                    href="/#top"
                    className="font-bold text-xl"
                    onClick={(e) => {e.preventDefault(); navigateToSection("/#top")}}
                >
                    Tim Bernasch
                </Link>


                {/* Desktop */}
                <div
                    className="
                        hidden
                        items-center
                        gap-6
                        md:flex
                    "
                >
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            onClick={(e) => {e.preventDefault(); navigateToSection(link.href)}}
                            className="
                                hover:underline
                            "
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>


                {/* Mobile */}
                <MobileMenu links={links} />

            </div>
        </nav>
    );
}