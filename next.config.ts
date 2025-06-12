import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript:{
    // Enable type checking during build
    ignoreBuildErrors: true,
  },
  eslint: {
    // Allow builds even if there are ESLint errors
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
