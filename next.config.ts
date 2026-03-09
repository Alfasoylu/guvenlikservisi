import type { NextConfig } from "next";

const legacyCityRedirects = [
  "istanbul",
  "ankara",
] as const;

const nextConfig: NextConfig = {
  async redirects() {
    return legacyCityRedirects.map((city) => ({
      source: `/${city}-guvenlik-sistemi-kurulumu`,
      destination: `/${city}/kamera-sistemi-kurulumu`,
      permanent: true,
    }));
  },
};

export default nextConfig;
