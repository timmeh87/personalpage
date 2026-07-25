"use client";

import { useState } from "react";
import Link from "next/link";

interface NavLink {
    name: string;
    href: string;
}

interface MobileMenuProps {
    links: NavLink[];
}

export default function MobileMenu({
    links,
}: MobileMenuProps) {

    const [open, setOpen] = useState(false);


    return (
        <div className="md:hidden">

            <button
                onClick={() => setOpen(!open)}
                className="
                    rounded
                    border
                    px-3
                    py-2
                "
                aria-label="Toggle menu"
            >
                ☰
            </button>


            {open && (

                <div
                    className="
                        absolute
                        left-0
                        right-0
                        top-full
                        border-b
                        bg-white
                        p-6
                        dark:bg-gray-900
                    "
                >

                    <div
                        className="
                            flex
                            flex-col
                            gap-4
                        "
                    >

                        {links.map((link) => (

                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                            >
                                {link.name}
                            </Link>

                        ))}

                    </div>

                </div>

            )}

        </div>
    );
}