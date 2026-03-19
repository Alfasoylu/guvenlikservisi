import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // ── Ana kural: tüm arama motorları ──────────────────────────────────
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",      // API endpoint'leri — indexlenmesin
          "/_next/",    // Next.js dahili — indexlenmesin
          "/admin/",    // Yönetim paneli — indexlenmesin
          // Not: /teklif/ ve alt sayfaları kasıtlı olarak burada yok.
          // Layout'ta noindex meta etiketi var; bot önce sayfayı okuyup
          // noindex'i görmeli ki doğru davranabilsin.
        ],
      },

      // ── Googlebot: özel izinler ──────────────────────────────────────────
      // Tüm SEO sayfaları + sitemap erişimi açık.
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },

      // ── AI içerik tarayıcıları: içerik çekme izni yok ──────────────────
      // Bu botlar arama sıralamana katkı sağlamaz; yalnızca crawl
      // bütçesi ve bant genişliği tüketir.
      {
        userAgent: "GPTBot",
        disallow: ["/"],
      },
      {
        userAgent: "Claude-Web",
        disallow: ["/"],
      },
      {
        userAgent: "anthropic-ai",
        disallow: ["/"],
      },
      {
        userAgent: "CCBot",
        disallow: ["/"],
      },
      {
        userAgent: "Google-Extended",
        disallow: ["/"],
      },
      {
        userAgent: "FacebookBot",
        disallow: ["/"],
      },
      {
        userAgent: "Bytespider",   // TikTok / ByteDance tarayıcısı
        disallow: ["/"],
      },
      {
        userAgent: "PetalBot",     // Huawei arama motoru
        disallow: ["/"],
      },

      // ── SEO araç botları: crawl bütçesi tüketenleri sınırla ─────────────
      // Analiz araçları olarak faydalılar ama sürekli tarama yapıyorlar.
      {
        userAgent: "AhrefsBot",
        disallow: ["/"],
      },
      {
        userAgent: "SemrushBot",
        disallow: ["/"],
      },
      {
        userAgent: "DotBot",
        disallow: ["/"],
      },
      {
        userAgent: "MJ12bot",
        disallow: ["/"],
      },
      {
        userAgent: "BLEXBot",
        disallow: ["/"],
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
