import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  // Suppress hydration warnings caused by browser extensions (Bitwarden, etc.)
  // These extensions inject attributes like bis_skin_checked, bis_register
  onDemandEntries: {
    // Increase timeout to reduce hydration issues
    maxInactiveAge: 60 * 1000,
    pagesBufferLength: 5,
  },
};

export default nextConfig;
