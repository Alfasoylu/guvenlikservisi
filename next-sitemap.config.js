/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://guvenlikservisi.com",
  generateRobotsTxt: true,
  sitemapSize: 5000,

  exclude: [
    "/teklif/*",
    "/api/*",
    "/404",
    "/500",
  ],

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/teklif/", "/api/"],
      },
    ],
  },

  transform: async (config, path) => {
    const now = new Date().toISOString();

    if (path === "/") {
      return {
        loc: path,
        changefreq: "daily",
        priority: 1.0,
        lastmod: now,
      };
    }

    if (path === "/istanbul") {
      return {
        loc: path,
        changefreq: "daily",
        priority: 0.95,
        lastmod: now,
      };
    }

    if (path === "/istanbul/kamera-sistemi-kurulumu") {
      return {
        loc: path,
        changefreq: "daily",
        priority: 0.95,
        lastmod: now,
      };
    }

    if (
      [
        "/istanbul/alarm-sistemi-kurulumu",
        "/istanbul/yangin-alarm-sistemi-kurulumu",
        "/istanbul/kartli-gecis-sistemi-kurulumu",
        "/istanbul/apartman-site-guvenlik-sistemi",
        "/istanbul/isyeri-guvenlik-sistemi",
        "/istanbul/fabrika-depo-guvenlik-sistemi",
        "/istanbul/bakim-servis-uzaktan-izleme",
      ].includes(path)
    ) {
      return {
        loc: path,
        changefreq: "weekly",
        priority: 0.9,
        lastmod: now,
      };
    }

    if (path.startsWith("/blog/")) {
      return {
        loc: path,
        changefreq: "monthly",
        priority: 0.8,
        lastmod: now,
      };
    }

    if (path.startsWith("/istanbul")) {
      return {
        loc: path,
        changefreq: "weekly",
        priority: 0.85,
        lastmod: now,
      };
    }

    if (path.startsWith("/kamera") || path.startsWith("/alarm") || path.startsWith("/yangin") || path.startsWith("/kartli") || path.startsWith("/bakim") || path.startsWith("/isyeri") || path.startsWith("/apartman") || path.startsWith("/fabrika")) {
      return {
        loc: path,
        changefreq: "weekly",
        priority: 0.8,
        lastmod: now,
      };
    }

    return {
      loc: path,
      changefreq: "monthly",
      priority: 0.7,
      lastmod: now,
    };
  },
};
