import Link from "next/link";
import type { IstanbulDistrictProof } from "@/data/seo/istanbul-social-proof";

interface DistrictCoverageProofSectionProps {
  districts: IstanbulDistrictProof[];
  totalProjects: number;
  serviceSlug: string;
  citySlug: string;
  /** ilçe sayfası olan slug'lar — bu ilçeler link olarak render edilir */
  linkedDistrictSlugs?: Set<string>;
}

export default function DistrictCoverageProofSection({
  districts,
  totalProjects,
  serviceSlug,
  citySlug,
  linkedDistrictSlugs,
}: DistrictCoverageProofSectionProps) {
  if (!districts || districts.length === 0) return null;

  // Büyükten küçüğe sırala (proje sayısı)
  const sorted = [...districts].sort((a, b) => b.projectCount - a.projectCount);

  // Toplam ilçe ve en aktif ilçe
  const topDistrict = sorted[0];

  return (
    <section
      style={{
        background: "#0F2B46",
        color: "#fff",
      }}
    >
      <div
        style={{ maxWidth: "1180px", margin: "0 auto", padding: "60px 20px" }}
      >
        {/* Başlık */}
        <div style={{ marginBottom: "40px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(52,168,83,0.15)",
              border: "1px solid rgba(52,168,83,0.4)",
              borderRadius: "999px",
              padding: "6px 16px",
              fontSize: "12px",
              fontWeight: 700,
              color: "#34A853",
              marginBottom: "16px",
            }}
          >
            <span>📍</span>
            <span>İstanbul Geneli Kurulum Kanıtı</span>
          </div>

          <h2
            style={{
              fontSize: "30px",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.2,
              marginBottom: "12px",
            }}
          >
            İstanbul&apos;da Bu İlçelerde Kurulum Yaptık
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(255,255,255,0.65)", maxWidth: "700px" }}>
            {sorted.length} ilçede toplam{" "}
            <strong style={{ color: "#34A853" }}>{totalProjects}+ tamamlanan proje</strong> ile
            İstanbul&apos;un tüm bölgelerine hizmet götürüyoruz.
            En yoğun bölge: <strong style={{ color: "#fff" }}>{topDistrict?.name}</strong>.
          </p>
        </div>

        {/* İlçe Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(155px, 1fr))",
            gap: "10px",
            marginBottom: "36px",
          }}
        >
          {sorted.map((d) => {
            const districtServicePath = `/${citySlug}/${d.slug}/${serviceSlug}`;
            const hasPage = linkedDistrictSlugs?.has(d.slug);

            const cardContent = (
              <>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: "14px",
                    color: "#fff",
                    marginBottom: "4px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {d.name}
                </div>
                <div
                  style={{
                    fontSize: "12px",
                    color: "rgba(255,255,255,0.6)",
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  <span
                    style={{
                      display: "inline-block",
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "#34A853",
                      flexShrink: 0,
                    }}
                  />
                  {d.projectCount} proje
                </div>
              </>
            );

            const cardStyle: React.CSSProperties = {
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "14px",
              padding: "14px 16px",
              textDecoration: "none",
              display: "block",
              transition: "background 0.15s, border-color 0.15s",
            };

            if (hasPage) {
              return (
                <Link
                  key={d.slug}
                  href={districtServicePath}
                  style={cardStyle}
                  title={`${d.name} güvenlik sistemi kurulumu`}
                >
                  {cardContent}
                  <div
                    style={{
                      fontSize: "11px",
                      color: "#34A853",
                      marginTop: "6px",
                      fontWeight: 600,
                    }}
                  >
                    Hizmet sayfası →
                  </div>
                </Link>
              );
            }

            return (
              <div key={d.slug} style={cardStyle}>
                {cardContent}
              </div>
            );
          })}
        </div>

        {/* Alt bilgi satırı */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "24px",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingTop: "24px",
            alignItems: "center",
          }}
        >
          {[
            { value: `${totalProjects}+`, label: "Tamamlanan Proje" },
            { value: `${sorted.length}`, label: "Aktif İlçe" },
            { value: "Aynı Gün", label: "Keşif Cevap Süresi" },
            { value: "12 Yıl", label: "İstanbul Deneyimi" },
          ].map((stat) => (
            <div key={stat.label} style={{ minWidth: "120px" }}>
              <div
                style={{
                  fontSize: "22px",
                  fontWeight: 800,
                  color: "#34A853",
                  lineHeight: 1,
                  marginBottom: "4px",
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.55)" }}>
                {stat.label}
              </div>
            </div>
          ))}

          <div style={{ marginLeft: "auto" }}>
            <Link
              href="/iletisim"
              style={{
                display: "inline-flex",
                alignItems: "center",
                background: "#34A853",
                color: "#fff",
                padding: "12px 22px",
                borderRadius: "12px",
                textDecoration: "none",
                fontWeight: 700,
                fontSize: "14px",
                gap: "6px",
              }}
            >
              İlçenizde Keşif İsteyin →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
