import Section from "./Section";
import Link from "next/link";

export default function AboutSite() {
    return (
        <Section id="about-site">

            <h2 className="text-3xl font-bold mb-6">
                About this site
            </h2>

            <p className="max-w-3xl">
                This portfolio was built from scratch using Next.js,
                TypeScript, and Tailwind CSS. It is statically exported
                and hosted on my own infrastructure using nginx behind
                Cloudflare.
            </p>

            <Link
                href="/site"
                className="
                    mt-5
                    inline-block
                    font-medium
                    text-blue-600
                    hover:underline
                "
            >
                View technical details →
            </Link>

        </Section>
    );
}