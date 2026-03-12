import { bodyStyle, cardStyle, headingStyle, sectionStyle } from "@/components/service-page/styles";

export interface ServiceFAQItem {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  items: ServiceFAQItem[];
}

export default function ServiceFAQ({ items }: ServiceFAQProps) {
  return (
    <section style={sectionStyle}>
      <h2 style={headingStyle}>Sık Sorulan Sorular</h2>

      <div style={{ display: "grid", gap: "18px" }}>
        {items.map((item) => (
          <div key={item.question} style={{ ...cardStyle, padding: "20px" }}>
            <h3 style={{ fontSize: "20px", color: "#0F2B46", marginBottom: "10px" }}>{item.question}</h3>
            <p style={bodyStyle}>{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
