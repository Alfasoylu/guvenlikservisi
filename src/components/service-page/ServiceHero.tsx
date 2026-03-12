import Link from "next/link";
import { siteConfig } from "@/data/site-config";
import { bodyStyle, cardStyle, sectionStyle } from "@/components/service-page/styles";

interface ServiceHeroProps {
  cityName: string;
  serviceName: string;
  cityDescription: string;
  intro: string;
  trustBullets: string[];
  processSummary: {
    title: string;
    body: string;
  };
}

export default function ServiceHero({
  cityName,
  serviceName,
  cityDescription,
  intro,
  trustBullets,
  processSummary,
}: ServiceHeroProps) {
  return (
    <section
      style={{
        ...sectionStyle,
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
        gap: "24px",
        alignItems: "start",
      }}
    >
      <div>
        <div style={{ fontSize: "14px", marginBottom: "12px", color: "#666" }}>
          <Link href="/" style={{ color: "#666", textDecoration: "none" }}>
            Ana Sayfa
          </Link>
          {" / "}
          <span>{cityName}</span>
          {" / "}
          <span>{serviceName}</span>
        </div>

        <h1 style={{ fontSize: "42px", lineHeight: 1.15, marginBottom: "16px", color: "#0F2B46" }}>
          {cityName} {serviceName}
        </h1>

        <p style={{ fontSize: "22px", lineHeight: 1.5, maxWidth: "900px", marginBottom: "16px", color: "#1f2937" }}>
          {cityDescription}
        </p>

        <p style={{ ...bodyStyle, fontSize: "18px", marginBottom: "28px" }}>{intro}</p>

        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <a
            href="#teklif"
            style={{
              background: "#34A853",
              color: "#fff",
              padding: "16px 28px",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            Ücretsiz Teklif Al
          </a>

          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            style={{
              border: "2px solid #0F2B46",
              color: "#0F2B46",
              padding: "14px 24px",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            {siteConfig.phone}
          </a>
        </div>
      </div>

      <aside style={{ ...cardStyle, background: "#F8FAFB" }}>
        <div
          style={{
            fontSize: "13px",
            fontWeight: 800,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            color: "#1D4ED8",
            marginBottom: "14px",
          }}
        >
          Kurulum yaklaşımımız
        </div>

        <h2 style={{ fontSize: "24px", color: "#0F2B46", marginBottom: "12px" }}>
          {processSummary.title}
        </h2>
        <p style={{ ...bodyStyle, marginBottom: "18px" }}>{processSummary.body}</p>

        <div style={{ display: "grid", gap: "12px" }}>
          {trustBullets.map((item) => (
            <div
              key={item}
              style={{
                borderRadius: "14px",
                padding: "16px",
                background: "#fff",
                border: "1px solid #dbeafe",
                fontSize: "15px",
                lineHeight: 1.7,
                color: "#1f2937",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </aside>
    </section>
  );
}
