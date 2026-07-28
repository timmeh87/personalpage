import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/profile",
  trailingSlash: true,
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
