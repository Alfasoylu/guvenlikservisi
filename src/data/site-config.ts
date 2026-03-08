export const siteConfig = {
  name: "Güvenlik Servisi",
  url: "https://guvenlikservisi.com",
  phone: "0850 XXX XX XX",          // KULLANICI DOLDURACAK
  whatsapp: "905XXXXXXXXX",          // KULLANICI DOLDURACAK
  email: "info@guvenlikservisi.com",
  address: "...",                    // KULLANICI DOLDURACAK
  city: "İstanbul",
  description:
    "Marmara Bölgesi genelinde profesyonel güvenlik kamera, " +
    "alarm ve yangın alarm sistemi kurulumu. Anahtar teslim montaj + " +
    "7/24 uzaktan izleme hizmeti.",
  ogImage: "/images/og-default.jpg",
  googleAnalyticsId: "G-XXXXXXXXXX", // KULLANICI DOLDURACAK
  gtmId: "GTM-XXXXXXX",             // KULLANICI DOLDURACAK

  // Marka renkleri
  colors: {
    primary: "#0F2B46",    // Koyu lacivert
    accent: "#1A73E8",     // Mavi
    cta: "#34A853",        // Yeşil (CTA butonları)
    ctaHover: "#2D8B4E",
    warning: "#E8710A",    // Turuncu (acil çağrı)
    bg: "#F8FAFB",
    text: "#1A1A1A",
    textLight: "#555555",
  },

  // Güven sinyalleri - KULLANICI GÜNCELLEYECEK
  stats: {
    projects: "500+",
    experience: "12 Yıl",
    satisfaction: "%100",
    cities: "6 Şehir",
  },

  // Hizmet bölgeleri
  cities: [
    { slug: "istanbul", name: "İstanbul", districts: "Avrupa + Anadolu Yakası" },
    { slug: "bursa", name: "Bursa", districts: "Osmangazi, Nilüfer, Yıldırım" },
    { slug: "kocaeli", name: "Kocaeli", districts: "İzmit, Gebze, Darıca" },
    { slug: "sakarya", name: "Sakarya", districts: "Serdivan, Adapazarı" },
    { slug: "tekirdag", name: "Tekirdağ", districts: "Çorlu, Çerkezköy, Süleymanpaşa" },
    { slug: "yalova", name: "Yalova", districts: "Merkez, Çiftlikköy" },
  ],
};
