import { cardStyle, gridStyle, sectionStyle } from "@/components/service-page/styles";

export interface ServiceStatItem {
  label: string;
  value: string;
}

interface ServiceStatsProps {
  items: ServiceStatItem[];
}

export default function ServiceStats({ items }: ServiceStatsProps) {
  return (
    <section style={{ ...sectionStyle, ...gridStyle }}>
      {items.map((item) => (
        <div key={item.label} style={{ ...cardStyle, background: "#F8FAFB" }}>
          <div style={{ fontSize: "30px", fontWeight: 800, color: "#0F2B46", marginBottom: "6px" }}>
            {item.value}
          </div>
          <div style={{ color: "#555" }}>{item.label}</div>
        </div>
      ))}
    </section>
  );
}
