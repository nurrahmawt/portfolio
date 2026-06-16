import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Allow hot module replacement from Android/mobile device */
  experimental: {
    allowedDevOrigins: ['192.168.100.12', 'localhost', '127.0.0.1'],
  },
};

export default nextConfig;
