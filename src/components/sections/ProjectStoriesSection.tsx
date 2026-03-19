import type { ProjectStory } from "@/data/seo/istanbul-case-studies";

interface ProjectStoriesSectionProps {
  stories: ProjectStory[];
  title?: string;
}

export default function ProjectStoriesSection({
  stories,
  title = "Gerçek Proje Hikayeleri",
}: ProjectStoriesSectionProps) {
  if (!stories || stories.length === 0) return null;

  return (
    <section
      style={{
        background: "#fff",
        borderTop: "1px solid #e5e7eb",
      }}
    >
      <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "72px 20px" }}>
        {/* Başlık */}
        <div style={{ marginBottom: "48px" }}>
          <div
            style={{
              fontSize: "12px",
              fontWeight: 700,
              color: "#D97706",
              textTransform: "uppercase",
              letterSpacing: "1.5px",
              marginBottom: "10px",
            }}
          >
            Vaka Çalışmaları
          </div>
          <h2
            style={{
              fontSize: "clamp(22px, 3vw, 30px)",
              fontWeight: 800,
              color: "#0F2B46",
              margin: "0 0 12px",
            }}
          >
            {title}
          </h2>
          <p style={{ fontSize: "15px", color: "#6B7280", margin: 0 }}>
            İstanbul genelindeki gerçek projelerden alınmış problem → çözüm → sonuç hikayeleri.
            Adres ve kişisel bilgiler mahremiyete göre anonimleştirilmiştir.
          </p>
        </div>

        {/* Story kartlar */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "28px",
          }}
        >
          {stories.map((story, idx) => (
            <article
              key={story.id}
              style={{
                border: "1px solid #E5E7EB",
                borderRadius: "18px",
                overflow: "hidden",
                background: "#FAFBFC",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Kart başlığı */}
              <div
                style={{
                  background: "#0F2B46",
                  padding: "20px 24px",
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                }}
              >
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "12px",
                    background: "rgba(255,255,255,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                    flexShrink: 0,
                  }}
                >
                  {idx === 0 ? "🏗️" : idx === 1 ? "🔧" : "⚡"}
                </div>
                <div>
                  <div
                    style={{
                      fontSize: "15px",
                      fontWeight: 700,
                      color: "#fff",
                      lineHeight: 1.3,
                    }}
                  >
                    {story.district} — {story.clientType}
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      color: "#94A3B8",
                      marginTop: "3px",
                    }}
                  >
                    {story.scope} · {story.year}
                  </div>
                </div>
              </div>

              {/* Kart içeriği */}
              <div style={{ padding: "24px", flex: 1, display: "flex", flexDirection: "column", gap: "18px" }}>
                {/* Problem */}
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "8px",
                    }}
                  >
                    <span
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "6px",
                        background: "#FEE2E2",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "11px",
                        flexShrink: 0,
                      }}
                    >
                      ⚠
                    </span>
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 700,
                        color: "#DC2626",
                        textTransform: "uppercase",
                        letterSpacing: "0.8px",
                      }}
                    >
                      Sorun
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: "13.5px",
                      color: "#374151",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {story.problem}
                  </p>
                </div>

                {/* Divider */}
                <div style={{ borderTop: "1px dashed #E5E7EB" }} />

                {/* Çözüm */}
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "8px",
                    }}
                  >
                    <span
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "6px",
                        background: "#DBEAFE",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "11px",
                        flexShrink: 0,
                      }}
                    >
                      🔧
                    </span>
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 700,
                        color: "#2563EB",
                        textTransform: "uppercase",
                        letterSpacing: "0.8px",
                      }}
                    >
                      Çözüm
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: "13.5px",
                      color: "#374151",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {story.solution}
                  </p>
                </div>

                {/* Divider */}
                <div style={{ borderTop: "1px dashed #E5E7EB" }} />

                {/* Sonuç */}
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "8px",
                    }}
                  >
                    <span
                      style={{
                        width: "20px",
                        height: "20px",
                        borderRadius: "6px",
                        background: "#DCFCE7",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "11px",
                        flexShrink: 0,
                      }}
                    >
                      ✓
                    </span>
                    <span
                      style={{
                        fontSize: "11px",
                        fontWeight: 700,
                        color: "#16A34A",
                        textTransform: "uppercase",
                        letterSpacing: "0.8px",
                      }}
                    >
                      Sonuç
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: "13.5px",
                      color: "#374151",
                      lineHeight: 1.65,
                      margin: 0,
                    }}
                  >
                    {story.result}
                  </p>
                </div>

                {/* Tags + Süre */}
                <div
                  style={{
                    marginTop: "auto",
                    paddingTop: "16px",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px",
                    alignItems: "center",
                  }}
                >
                  <span
                    style={{
                      fontSize: "11px",
                      background: "#F0FDF4",
                      color: "#16A34A",
                      border: "1px solid #BBF7D0",
                      borderRadius: "99px",
                      padding: "3px 10px",
                      fontWeight: 600,
                      whiteSpace: "nowrap",
                    }}
                  >
                    ⏱ {story.duration}
                  </span>
                  {story.tags.map((tag, ti) => (
                    <span
                      key={ti}
                      style={{
                        fontSize: "11px",
                        background: "#F1F5F9",
                        color: "#475569",
                        borderRadius: "99px",
                        padding: "3px 10px",
                        fontWeight: 500,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
