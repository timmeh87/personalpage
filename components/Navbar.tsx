"use client"

import Link from "next/link";
import MobileMenu from "./MobileMenu";

const links = [
    { name: "About Me", href: "/#about" },
    { name: "Experience", href: "/#experience" },
    { name: "Projects", href: "/#projects" },
    { name: "Gallery", href: "/#gallery" },
    { name: "Skills", href: "/#skills" },
    { name: "Site", href: "/site" },
];

const handleAnchorClick = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
) => {
    if (href.startsWith("/#")) {
        event.preventDefault();

        const id = href.substring(2);
        const element = document.getElementById(id);

        element?.scrollIntoView({
            behavior: "smooth",
        });
    }
};

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
                            onClick={(e) => handleAnchorClick(e, link.href)}
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