import type { NextConfig } from "next";
import { cities } from "./src/data/cities";

const nextConfig: NextConfig = {
  experimental: {
    cpus: 2,
  },
  async redirects() {

    // eski şehir url formatı
    const legacyCityRedirects = cities.map((city) => ({
      source: `/${city.slug}-guvenlik-sistemi-kurulumu`,
      destination: `/${city.slug}`,
      permanent: true,
    }));

    // eski hizmet url formatı
    const legacyServiceRedirects = [
      {
        source: "/hizmetler/guvenlik-kamera-kurulumu",
        destination: "/kamera-sistemi-kurulumu",
        permanent: true,
      },
      {
        source: "/hizmetler/alarm-sistemi-kurulumu",
        destination: "/alarm-sistemi-kurulumu",
        permanent: true,
      },
      {
        source: "/hizmetler/yangin-alarm-sistemi-kurulumu",
        destination: "/yangin-alarm-sistemi-kurulumu",
        permanent: true,
      },
      {
        source: "/hizmetler/kartli-gecis-sistemi-kurulumu",
        destination: "/kartli-gecis-sistemi-kurulumu",
        permanent: true,
      },
      {
        source: "/hizmetler/apartman-site-guvenlik-sistemi",
        destination: "/apartman-site-guvenlik-sistemi",
        permanent: true,
      },
      {
        source: "/hizmetler/isyeri-guvenlik-sistemi",
        destination: "/isyeri-guvenlik-sistemi",
        permanent: true,
      },
      {
        source: "/hizmetler/fabrika-depo-guvenlik-sistemi",
        destination: "/fabrika-depo-guvenlik-sistemi",
        permanent: true,
      },
      {
        source: "/hizmetler/bakim-servis-uzaktan-izleme",
        destination: "/bakim-servis-uzaktan-izleme",
        permanent: true,
      },
    ];

    return [
      ...legacyCityRedirects,
      ...legacyServiceRedirects,
    ];
  },
};

export default nextConfig;
