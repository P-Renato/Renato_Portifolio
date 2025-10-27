import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // ✅ Tells Next.js to produce static HTML files
   outputFileTracingRoot: __dirname,
  images: {
    domains: ["github.com", "user-images.githubusercontent.com"],
    unoptimized: true, // ✅ Needed when using static export (no image optimizer)
  },
};

export default nextConfig;
