import Section from "@/components/Section";
import { FaGithub } from "react-icons/fa";

import Navbar from "@/components/Navbar";

export default function SitePage() {
    return (
        <>
            <Navbar />
            <Section className="py-24">

                <h1 className="text-4xl font-bold mb-6">
                    About this site
                </h1>

                <p className="max-w-3xl">
                    Technical details, for nerds.
                </p>

                <br></br>
                <img src="/profile/images/youarehere.webp" className="w-96"></img>

            </Section>

            <Section>

                <h2 className="text-3xl font-bold mb-4">
                    Source Code
                </h2>

                <p className="max-w-3xl mb-6">
                    The complete source code for this portfolio is available on GitHub.
                    It includes the Next.js application, gallery components, image
                    processing pipeline, and deployment configuration used to build and
                    host this site.
                </p>

                <a
                    href="https://github.com/timmeh87/personalpage"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                        inline-flex
                        items-center
                        gap-3
                        rounded-lg
                        border
                        px-5
                        py-3
                        transition-colors
                        hover:bg-gray-100
                        dark:hover:bg-gray-800
                    "
                >
                    <FaGithub className="h-6 w-6" />

                    <div>
                        <div className="font-semibold">
                            timmeh87/personalpage
                        </div>

                        <div className="text-sm text-gray-500 dark:text-gray-400">
                            View the source on GitHub
                        </div>
                    </div>

                </a>

            </Section>

            <Section>

                <h2 className="text-3xl font-bold mb-4">
                    Technology
                </h2>

                <ul className="text-xl list-disc pl-6 space-y-2">

                    <li>
                        Next.js with static export
                    </li>

                    <li>
                        React and TypeScript
                    </li>

                    <li>
                        Tailwind CSS for styling
                    </li>

                    <li>
                        WebP image processing with separate thumbnails and full-resolution images for custom gallery
                    </li>
                </ul>

            </Section>


            <Section>

                <h2 className="text-3xl font-bold mb-4">
                    Hosting
                </h2>

                <ul className="text-xl list-disc pl-6 space-y-2">

                    <li>
                        Static files generated locally
                    </li>

                    <li>
                        Served using nginx docker image with web root mapped to a NAS folder
                    </li>

                    <li>
                        Site updates performed by dropping files onto a network drive
                    </li>

                    <li>
                        Public access through Cloudflare Tunnel
                    </li>

                    <li>
                        Hosted on personal homelab infrastructure. Specifically a ThinkServer R650
                    </li>

                    <li>
                        Domain managed on Amazon Route53 (registrar) and Cloudflare
                    </li>

                </ul>

            </Section>


            <Section>

                <h2 className="text-3xl font-bold mb-4">
                    Image Pipeline
                </h2>

                <p className="max-w-3xl">
                    Gallery images are processed before deployment.
                    .jpg and .mp4 files are converted to .webp with ImageMagick and FFmpeg.
                    Full-resolution images and thumbnails generated seperately.
                    Image database is generated as a JSON array and embedded into site.
                </p>

            </Section>


            <Section>

                <h2 className="text-3xl font-bold mb-4">
                    Deployment Flow
                </h2>

                <pre className="
                    rounded-lg
                    border
                    p-6
                    overflow-x-auto
                ">
{`Images
  |
  v
Processing scripts
  |
  +--> thumbnails
  |
  +--> full resolution images
  |
  v
Next.js static export
  |
  v
nginx
  |
  v
Cloudflare Tunnel
  |
  v
Visitors`}
                </pre>

            </Section>

        </>
    );
}