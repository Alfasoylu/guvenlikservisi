import { cities } from "@/data/cities";

export const siteConfig = {
  name: "Güvenlik Servisi",
  url: "https://guvenlikservisi.com",

  phone: "+90 542 593 49 00",
  whatsapp: "908503077397",
  email: "info@guvenlikservisi.com",

  address:
    "Perpa Ticaret Merkezi A Blok Kat:8 No:758 Okmeydanı Şişli İstanbul Türhkiye",

  city: "İstanbul",

  serviceCityCount: cities.length,
  serviceCities: cities.map((city) => city.name),

  description:
    "Marmara Bölgesi genelinde profesyonel güvenlik kamera, alarm ve yangın alarm sistemi kurulumu. Anahtar teslim montaj ve uzaktan izleme hizmeti.",

  ogImage: "/images/og-default.jpg",

    googleAnalyticsId: "G-JFWFY99M23",
    gtmId: "GTM-MPZG39C6",

  colors: {
    primary: "#0F2B46",
    accent: "#1A73E8",
    cta: "#34A853",
    ctaHover: "#2D8B4E",
    warning: "#E8710A",
    bg: "#F8FAFB",
    text: "#1A1A1A",
    textLight: "#555555",
  },

  stats: {
    projects: "500+",
    experience: "12 Yıl",
    satisfaction: "%100",
  },
};
