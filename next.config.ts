import type { NextConfig } from "next";

// Built as plain static files and published to GitHub Pages at
// https://spicyfalcon619.github.io (see .github/workflows/deploy.yml).
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true }, // GitHub Pages has no image optimisation server
};

export default nextConfig;
