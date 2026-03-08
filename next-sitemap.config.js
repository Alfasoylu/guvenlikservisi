/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://guvenlikservisi.com",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: "/teklif/" },
      { userAgent: "*", disallow: "/api/" },
    ],
    additionalSitemaps: [
      "https://guvenlikservisi.com/sitemap.xml",
    ],
  },
  exclude: ["/teklif/*", "/api/*"],
};
