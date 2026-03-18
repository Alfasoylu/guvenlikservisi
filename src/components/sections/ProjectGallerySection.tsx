import Image from "next/image";
import type { ProjectGalleryItem } from "@/data/seo/istanbul-social-proof";

interface ProjectGallerySectionProps {
  items: ProjectGalleryItem[];
  totalProjects?: number;
  title?: string;
}

export default function ProjectGallerySection({
  items,
  totalProjects,
  title = "Tamamlanan Projelerden Görseller",
}: ProjectGallerySectionProps) {
  if (!items || items.length === 0) return null;

  // SVG'leri hariç tut — next/image SVG için sizes/optimizasyon sorun çıkarabilir
  const photoItems = items.filter(
    (img) => !img.src.endsWith(".svg"),
  );
  if (photoItems.length === 0) return null;

  return (
    <section
      style={{
        background: "#fff",
        borderTop: "1px solid #e5e7eb",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      <div
        style={{ maxWidth: "1180px", margin: "0 auto", padding: "60px 20px" }}
      >
        {/* Başlık bandı */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
            marginBottom: "36px",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "12px",
                fontWeight: 700,
                color: "#34A853",
                textTransform: "uppercase",
                letterSpacing: "1px",
                marginBottom: "8px",
              }}
            >
              Gerçek Proje Fotoğrafları
            </div>
            <h2
              style={{
                fontSize: "28px",
                fontWeight: 800,
                color: "#0F2B46",
                lineHeight: 1.2,
                margin: 0,
              }}
            >
              {title}
            </h2>
          </div>

          {totalProjects ? (
            <div
              style={{
                background: "#0F2B46",
                color: "#fff",
                borderRadius: "16px",
                padding: "14px 24px",
                textAlign: "center",
                flexShrink: 0,
              }}
            >
              <div
                style={{ fontSize: "28px", fontWeight: 800, lineHeight: 1 }}
              >
                {totalProjects}+
              </div>
              <div style={{ fontSize: "12px", marginTop: "4px", opacity: 0.8 }}>
                Tamamlanan Proje
              </div>
            </div>
          ) : null}
        </div>

        {/* Masonry-style grid — CSS columns */}
        <div
          style={{
            columns: "2",
            columnGap: "14px",
            WebkitColumns: "2",
          } as React.CSSProperties}
          className="sm-columns-3 lg-columns-4"
        >
          <style>{`
            @media (min-width: 640px) { .sm-columns-3 { columns: 3 !important; } }
            @media (min-width: 1024px) { .lg-columns-4 { columns: 4 !important; } }
          `}</style>

          {photoItems.map((img, i) => (
            <div
              key={i}
              style={{
                breakInside: "avoid",
                marginBottom: "14px",
                borderRadius: "14px",
                overflow: "hidden",
                border: "1px solid #e5e7eb",
                background: "#F8FAFB",
                position: "relative",
              }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                width={600}
                height={400}
                style={{
                  width: "100%",
                  height: "auto",
                  display: "block",
                  objectFit: "cover",
                }}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              {/* Label overlay */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background:
                    "linear-gradient(to top, rgba(15,43,70,0.85) 0%, transparent 100%)",
                  padding: "24px 12px 10px",
                }}
              >
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    color: "#fff",
                    display: "block",
                  }}
                >
                  {img.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <p
          style={{
            fontSize: "12px",
            color: "#9CA3AF",
            textAlign: "center",
            marginTop: "24px",
          }}
        >
          * Görüntüler gerçek saha kurulumlarından derlenmiştir.
          Müşteri mahremiyeti kapsamında adres bilgileri paylaşılmamaktadır.
        </p>
      </div>
    </section>
  );
}
