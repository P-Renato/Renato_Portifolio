import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // ✅ Tells Next.js to produce static HTML files
  outputFileTracingRoot: __dirname,
  images: {
    domains: ["github.com", "user-images.githubusercontent.com"],
    unoptimized: true, // ✅ Needed when using static export (no image optimizer)
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; connect-src 'self' https://renato-portifolio-backend.onrender.com; style-src 'self' 'unsafe-inline';"
          },
        ],
      },
    ];
  }
};

export default nextConfig;