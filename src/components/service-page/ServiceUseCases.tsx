import { cardStyle, bodyStyle, gridStyle, headingStyle, sectionStyle } from "@/components/service-page/styles";

interface ServiceUseCasesProps {
  title: string;
  description: string;
  items: string[];
}

export default function ServiceUseCases({ title, description, items }: ServiceUseCasesProps) {
  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>{title}</h2>
      <p style={{ ...bodyStyle, marginBottom: "20px", maxWidth: "860px" }}>{description}</p>

      <div style={gridStyle}>
        {items.map((item) => (
          <div key={item} style={{ ...cardStyle, background: "#F8FAFB", padding: "18px" }}>
            <div style={{ fontSize: "17px", color: "#111827" }}>{item}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
