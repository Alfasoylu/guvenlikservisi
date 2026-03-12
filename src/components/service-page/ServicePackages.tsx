import { bodyStyle, cardStyle, gridStyle, headingStyle, sectionStyle } from "@/components/service-page/styles";

interface ServicePackageItem {
  title: string;
  description: string;
}

interface ServicePackagesProps {
  title: string;
  description: string;
  items: ServicePackageItem[];
}

export default function ServicePackages({ title, description, items }: ServicePackagesProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>{title}</h2>
      <p style={{ ...bodyStyle, marginBottom: "20px", maxWidth: "860px" }}>{description}</p>

      <div style={{ ...gridStyle, gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
        {items.map((item) => (
          <div key={item.title} style={cardStyle}>
            <h3 style={{ fontSize: "22px", color: "#0F2B46", marginBottom: "12px" }}>{item.title}</h3>
            <p style={bodyStyle}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
