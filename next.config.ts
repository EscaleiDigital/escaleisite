import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/franqueados',
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
