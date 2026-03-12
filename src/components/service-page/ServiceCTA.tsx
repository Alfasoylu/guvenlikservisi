import { siteConfig } from "@/data/site-config";

interface ServiceCTAProps {
  title: string;
  description: string;
  primaryLabel: string;
  secondaryLabel: string;
}

export default function ServiceCTA({
  title,
  description,
  primaryLabel,
  secondaryLabel,
}: ServiceCTAProps) {
  return (
    <section
      id="teklif"
      style={{
        background: "#0F2B46",
        color: "#fff",
        padding: "36px",
        borderRadius: "18px",
        marginBottom: "40px",
      }}
    >
      <h2 style={{ fontSize: "32px", marginBottom: "14px" }}>{title}</h2>

      <p style={{ fontSize: "18px", lineHeight: 1.7, maxWidth: "850px", marginBottom: "22px" }}>
        {description}
      </p>

      <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
        <a
          href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
          style={{
            background: "#34A853",
            color: "#fff",
            padding: "16px 24px",
            borderRadius: "12px",
            textDecoration: "none",
            fontWeight: 700,
          }}
        >
          {primaryLabel}: {siteConfig.phone}
        </a>

        <a
          href="/iletisim"
          style={{
            background: "#fff",
            color: "#0F2B46",
            padding: "16px 24px",
            borderRadius: "12px",
            textDecoration: "none",
            fontWeight: 700,
          }}
        >
          {secondaryLabel}
        </a>
      </div>
    </section>
  );
}
