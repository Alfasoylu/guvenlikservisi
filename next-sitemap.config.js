/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://guvenlikservisi.com",

  generateRobotsTxt: true,

  sitemapSize: 5000,

  exclude: [
    "/teklif/*",
    "/api/*",
  ],

  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/teklif/",
          "/api/",
        ],
      },
    ],
  },
};
