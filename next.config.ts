import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/drywash',
        destination: '/dashboard-drywash.html',
      },
      {
        source: '/softcut',
        destination: '/dashboard-softcut.html',
      },
    ]
  },
};

export default nextConfig;
