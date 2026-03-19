import type { ServicePricingData } from "@/data/seo/istanbul-pricing";
import { siteConfig } from "@/data/site-config";

interface ServicePricingTiersSectionProps {
  pricing: ServicePricingData;
}

const CHECK = "✓";
const CROSS = "✗";

export default function ServicePricingTiersSection({
  pricing,
}: ServicePricingTiersSectionProps) {
  const whatsappBase = `https://wa.me/${siteConfig.phone.replace(/\D/g, "")}`;

  return (
    <section
      style={{
        background: "linear-gradient(180deg, #F0F4F8 0%, #fff 100%)",
        borderTop: "1px solid #e5e7eb",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "72px 20px" }}>
        {/* Başlık */}
        <div style={{ textAlign: "center", marginBottom: "52px" }}>
          <div
            style={{
              display: "inline-block",
              fontSize: "12px",
              fontWeight: 700,
              color: "#2563EB",
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              marginBottom: "12px",
            }}
          >
            Fiyat & Kapsam
          </div>
          <h2
            style={{
              fontSize: "clamp(22px, 3vw, 32px)",
              fontWeight: 800,
              color: "#0F2B46",
              margin: "0 0 16px",
            }}
          >
            {pricing.title}
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "#6B7280",
              maxWidth: "620px",
              margin: "0 auto",
              lineHeight: 1.65,
            }}
          >
            {pricing.description}
          </p>
        </div>

        {/* Tier kartlar */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "24px",
            alignItems: "start",
          }}
        >
          {pricing.tiers.map((tier, idx) => {
            const isHighlighted = !!tier.badge;
            return (
              <div
                key={idx}
                style={{
                  background: isHighlighted ? "#0F2B46" : "#fff",
                  border: isHighlighted ? "2px solid #2563EB" : "1px solid #E5E7EB",
                  borderRadius: "20px",
                  padding: "32px 28px",
                  position: "relative",
                  boxShadow: isHighlighted
                    ? "0 20px 48px rgba(15,43,70,0.18)"
                    : "0 2px 8px rgba(0,0,0,0.06)",
                  transform: isHighlighted ? "scale(1.03)" : "scale(1)",
                }}
              >
                {/* Badge */}
                {tier.badge && (
                  <div
                    style={{
                      position: "absolute",
                      top: "-14px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: "#2563EB",
                      color: "#fff",
                      fontSize: "11px",
                      fontWeight: 700,
                      padding: "4px 16px",
                      borderRadius: "99px",
                      whiteSpace: "nowrap",
                      letterSpacing: "0.5px",
                    }}
                  >
                    {tier.badge}
                  </div>
                )}

                {/* Tier başlık */}
                <div style={{ marginBottom: "20px" }}>
                  <div
                    style={{
                      fontSize: "12px",
                      fontWeight: 700,
                      color: isHighlighted ? "#93C5FD" : "#2563EB",
                      textTransform: "uppercase",
                      letterSpacing: "1px",
                      marginBottom: "6px",
                    }}
                  >
                    {tier.rangeLabel}
                  </div>
                  <div
                    style={{
                      fontSize: "24px",
                      fontWeight: 800,
                      color: isHighlighted ? "#fff" : "#0F2B46",
                      lineHeight: 1.15,
                      marginBottom: "8px",
                    }}
                  >
                    {tier.name}
                  </div>
                  <div
                    style={{
                      fontSize: "14px",
                      color: isHighlighted ? "#CBD5E1" : "#6B7280",
                      lineHeight: 1.5,
                    }}
                  >
                    {tier.tagline}
                  </div>
                </div>

                {/* Kapsam etiketi */}
                <div
                  style={{
                    background: isHighlighted
                      ? "rgba(37,99,235,0.25)"
                      : "#EFF6FF",
                    borderRadius: "10px",
                    padding: "10px 14px",
                    marginBottom: "24px",
                    fontSize: "13px",
                    color: isHighlighted ? "#93C5FD" : "#2563EB",
                    fontWeight: 600,
                  }}
                >
                  📦 {tier.priceNote}
                </div>

                {/* Özellik listesi */}
                <ul
                  style={{
                    listStyle: "none",
                    margin: "0 0 28px",
                    padding: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  {tier.features.map((f, fi) => (
                    <li
                      key={fi}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "10px",
                        fontSize: "13.5px",
                        color: f.included
                          ? isHighlighted
                            ? "#E2E8F0"
                            : "#374151"
                          : isHighlighted
                          ? "#64748B"
                          : "#9CA3AF",
                        opacity: f.included ? 1 : 0.65,
                      }}
                    >
                      <span
                        style={{
                          flexShrink: 0,
                          width: "18px",
                          height: "18px",
                          borderRadius: "50%",
                          background: f.included
                            ? isHighlighted
                              ? "#2563EB"
                              : "#DCFCE7"
                            : isHighlighted
                            ? "rgba(255,255,255,0.08)"
                            : "#F3F4F6",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: "10px",
                          fontWeight: 700,
                          color: f.included
                            ? isHighlighted
                              ? "#fff"
                              : "#16A34A"
                            : "#9CA3AF",
                          marginTop: "1px",
                        }}
                      >
                        {f.included ? CHECK : CROSS}
                      </span>
                      {f.text}
                    </li>
                  ))}
                </ul>

                {/* Hedef kitle */}
                <div
                  style={{
                    fontSize: "11px",
                    color: isHighlighted ? "#94A3B8" : "#9CA3AF",
                    marginBottom: "20px",
                    fontStyle: "italic",
                  }}
                >
                  {tier.targetAudience}
                </div>

                {/* CTA */}
                <a
                  href={`${whatsappBase}?text=${encodeURIComponent(tier.whatsappText)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "center",
                    background: isHighlighted ? "#2563EB" : "#0F2B46",
                    color: "#fff",
                    padding: "14px 20px",
                    borderRadius: "12px",
                    fontWeight: 700,
                    fontSize: "14px",
                    textDecoration: "none",
                    transition: "opacity 0.15s",
                    boxSizing: "border-box",
                  }}
                >
                  {tier.cta}
                </a>
              </div>
            );
          })}
        </div>

        {/* Disclaimer */}
        <p
          style={{
            textAlign: "center",
            fontSize: "12px",
            color: "#9CA3AF",
            marginTop: "32px",
            maxWidth: "540px",
            margin: "32px auto 0",
            lineHeight: 1.6,
          }}
        >
          * {pricing.disclaimer}
        </p>
      </div>
    </section>
  );
}
