import Link from "next/link";
import { siteConfig } from "@/data/site-config";

export default function NotFound() {
  return (
    <main
      style={{
        maxWidth: "960px",
        margin: "0 auto",
        padding: "72px 20px",
        textAlign: "center",
      }}
    >
      <div
        style={{
          display: "inline-block",
          padding: "8px 14px",
          borderRadius: "999px",
          background: "#EEF4FF",
          color: "#0F2B46",
          fontWeight: 700,
          marginBottom: "18px",
        }}
      >
        404 • Sayfa Bulunamadı
      </div>

      <h1
        style={{
          fontSize: "44px",
          lineHeight: 1.15,
          color: "#0F2B46",
          marginBottom: "18px",
        }}
      >
        Aradığınız sayfa kaldırılmış, taşınmış veya yanlış yazılmış olabilir.
      </h1>

      <p
        style={{
          fontSize: "20px",
          lineHeight: 1.7,
          color: "#374151",
          maxWidth: "760px",
          margin: "0 auto 28px",
        }}
      >
        Güvenlik kamera sistemi kurulumu, alarm sistemi kurulumu, kartlı geçiş sistemi
        ve bakım hizmetleri için ana sayfaya dönebilir veya hemen bizimle iletişime
        geçebilirsiniz.
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "14px",
          flexWrap: "wrap",
          marginBottom: "42px",
        }}
      >
        <Link
          href="/"
          style={{
            background: "#34A853",
            color: "#fff",
            padding: "16px 24px",
            borderRadius: "12px",
            textDecoration: "none",
            fontWeight: 700,
          }}
        >
          Ana Sayfaya Dön
        </Link>

        <Link
          href="/iletisim"
          style={{
            border: "2px solid #0F2B46",
            color: "#0F2B46",
            padding: "14px 22px",
            borderRadius: "12px",
            textDecoration: "none",
            fontWeight: 700,
          }}
        >
          Teklif Al
        </Link>

        <a
          href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
          style={{
            border: "2px solid #e5e7eb",
            color: "#111827",
            padding: "14px 22px",
            borderRadius: "12px",
            textDecoration: "none",
            fontWeight: 700,
            background: "#fff",
          }}
        >
          Hemen Ara: {siteConfig.phone}
        </a>
      </div>

      <section
        style={{
          textAlign: "left",
          background: "#F8FAFB",
          border: "1px solid #e5e7eb",
          borderRadius: "18px",
          padding: "28px",
          maxWidth: "860px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: "28px",
            color: "#0F2B46",
            marginBottom: "18px",
          }}
        >
          Popüler Sayfalar
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "14px",
          }}
        >
          {[
            { href: "/kamera-sistemi-kurulumu", label: "Kamera Sistemi Kurulumu" },
            { href: "/alarm-sistemi-kurulumu", label: "Alarm Sistemi Kurulumu" },
            { href: "/kartli-gecis-sistemi-kurulumu", label: "Kartlı Geçiş Sistemi Kurulumu" },
            { href: "/bakim-servis-uzaktan-izleme", label: "Bakım, Servis ve Uzaktan İzleme" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                padding: "16px",
                borderRadius: "12px",
                background: "#fff",
                border: "1px solid #e5e7eb",
                textDecoration: "none",
                color: "#0F2B46",
                fontWeight: 600,
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
