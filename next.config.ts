import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // Enable static export for GitHub Pages
  images: {
    unoptimized: true, // Required for static export
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // GitHub Pages uses a base path if your repo name is not your username.github.io
  // Uncomment and set if needed:
  // basePath: '/lenzoel', // Replace 'lenzoel' with your repo name if not using custom domain
  trailingSlash: true, // Recommended for GitHub Pages
};

export default nextConfig;
