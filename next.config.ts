import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/franqueados',
        destination: '/dashboard-drywash.html',
      },
    ]
  },
};

export default nextConfig;
