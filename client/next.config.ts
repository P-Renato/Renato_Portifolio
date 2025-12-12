import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: __dirname,
  images: {
    domains: ["github.com", "user-images.githubusercontent.com"],
    unoptimized: true, // ✅ Needed when using static export (no image optimizer)
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            // Allow inline scripts and eval required by Next's development runtime.
            // NOTE: 'unsafe-inline' and 'unsafe-eval' weaken CSP significantly.
            // TODO: In production, consider using nonces or hashes instead.
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; connect-src 'self' https://renato-portifolio-backend.onrender.com; style-src 'self' 'unsafe-inline';"
          },
        ],
      },
    ];
  }
};

export default nextConfig;