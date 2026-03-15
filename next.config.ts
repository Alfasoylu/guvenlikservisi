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

    const legacyIstanbulMoneyPageRedirects = [
      {
        source: "/istanbul-kamera-sistemi-kurulumu",
        destination: "/istanbul/kamera-sistemi-kurulumu",
        permanent: true,
      },
      {
        source: "/istanbul-alarm-sistemi",
        destination: "/istanbul/alarm-sistemi-kurulumu",
        permanent: true,
      },
      {
        source: "/istanbul-yangin-alarm-sistemi",
        destination: "/istanbul/yangin-alarm-sistemi-kurulumu",
        permanent: true,
      },
      {
        source: "/istanbul-kartli-gecis-sistemi",
        destination: "/istanbul/kartli-gecis-sistemi-kurulumu",
        permanent: true,
      },
      {
        source: "/istanbul-ip-kamera-montaji",
        destination: "/istanbul/kamera-sistemi-kurulumu",
        permanent: true,
      },
      {
        source: "/istanbul-kamera-bakim-servisi",
        destination: "/istanbul/kamera-sistemi-bakim-sozlesmesi",
        permanent: true,
      },
      {
        source: "/istanbul-kamera-teknik-servis",
        destination: "/istanbul/guvenlik-sistemi-teknik-servis",
        permanent: true,
      },
    ];

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
      ...legacyIstanbulMoneyPageRedirects,
      ...legacyCityRedirects,
      ...legacyServiceRedirects,
    ];
  },
};

export default nextConfig;
