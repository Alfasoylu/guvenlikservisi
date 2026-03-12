import Image from "next/image";
import type { PageVisualItem } from "@/lib/page-images";

interface ServiceVisualSectionProps {
  title: string;
  description: string;
  items: readonly PageVisualItem[];
}

export default function ServiceVisualSection({
  title,
  description,
  items,
}: ServiceVisualSectionProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section style={{ marginBottom: "50px" }}>
      <div style={{ maxWidth: "920px", marginBottom: "22px" }}>
        <h2 style={{ fontSize: "32px", color: "#0F2B46", marginBottom: "14px" }}>{title}</h2>
        <p style={{ fontSize: "17px", lineHeight: 1.75, color: "#374151", margin: 0 }}>
          {description}
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px",
        }}
      >
        {items.map((item, index) => (
          <article
            key={item.id}
            style={{
              overflow: "hidden",
              borderRadius: "18px",
              border: "1px solid #E5E7EB",
              background: "#FFFFFF",
              boxShadow: "0 10px 30px rgba(15, 43, 70, 0.06)",
            }}
          >
            <div style={{ background: "#F8FAFB" }}>
              <Image
                src={item.image.src}
                alt={item.alt}
                width={item.image.width}
                height={item.image.height}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={index === 0}
                style={{ display: "block", width: "100%", height: "auto", objectFit: "cover" }}
              />
            </div>

            <div style={{ padding: "20px" }}>
              <h3 style={{ fontSize: "21px", color: "#0F2B46", marginBottom: "10px" }}>{item.title}</h3>
              <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#4B5563", margin: 0 }}>
                {item.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}