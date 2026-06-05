import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "drjadhavpileslaser.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "sunrisepileshospital.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "gz0.googleusercontent.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
