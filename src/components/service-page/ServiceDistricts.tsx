import { headingStyle, sectionStyle } from "@/components/service-page/styles";

interface ServiceDistrictsProps {
  cityName: string;
  districts: string[];
}

export default function ServiceDistricts({ cityName, districts }: ServiceDistrictsProps) {
  if (districts.length === 0) {
    return null;
  }

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>{cityName} içinde hizmet verdiğimiz ilçeler</h2>

      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
        {districts.map((district) => (
          <span
            key={district}
            style={{
              padding: "10px 14px",
              background: "#EEF4FF",
              color: "#0F2B46",
              borderRadius: "999px",
              fontWeight: 600,
            }}
          >
            {district}
          </span>
        ))}
      </div>
    </section>
  );
}
