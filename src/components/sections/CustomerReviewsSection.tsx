import type { CustomerReview } from "@/data/seo/istanbul-social-proof";

interface CustomerReviewsSectionProps {
  reviews: CustomerReview[];
  title?: string;
}

function Stars({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="text-yellow-400 text-base leading-none">
          ★
        </span>
      ))}
    </div>
  );
}

function Avatar({ initials }: { initials: string }) {
  return (
    <div
      style={{
        width: "44px",
        height: "44px",
        borderRadius: "50%",
        background: "linear-gradient(135deg, #0F2B46, #34A853)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: 800,
        fontSize: "14px",
        color: "#fff",
        flexShrink: 0,
        letterSpacing: "0.5px",
      }}
    >
      {initials}
    </div>
  );
}

export default function CustomerReviewsSection({
  reviews,
  title = "Müşterilerimiz Ne Diyor?",
}: CustomerReviewsSectionProps) {
  if (!reviews || reviews.length === 0) return null;

  return (
    <section
      style={{
        background: "#F8FAFB",
        borderTop: "1px solid #e5e7eb",
        borderBottom: "1px solid #e5e7eb",
      }}
    >
      <div
        style={{ maxWidth: "1180px", margin: "0 auto", padding: "64px 20px" }}
      >
        {/* Başlık */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "#EBF5EE",
              border: "1px solid #BBE5C7",
              borderRadius: "999px",
              padding: "6px 16px",
              fontSize: "13px",
              fontWeight: 700,
              color: "#1A7A3C",
              marginBottom: "16px",
            }}
          >
            <span>✅</span>
            <span>Doğrulanmış Müşteri Yorumları</span>
          </div>
          <h2
            style={{
              fontSize: "32px",
              fontWeight: 800,
              color: "#0F2B46",
              lineHeight: 1.2,
              marginBottom: "12px",
            }}
          >
            {title}
          </h2>
          <p style={{ fontSize: "16px", color: "#6B7280", maxWidth: "600px", margin: "0 auto" }}>
            İstanbul genelinde tamamlanan projelerden gerçek müşteri deneyimleri.
            Gizlilik için soyadlar kısaltılmıştır.
          </p>
        </div>

        {/* Review Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "20px",
          }}
        >
          {reviews.map((review, i) => (
            <div
              key={i}
              style={{
                background: "#fff",
                borderRadius: "20px",
                border: "1px solid #e5e7eb",
                padding: "24px",
                display: "flex",
                flexDirection: "column",
                boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
              }}
            >
              {/* Stars + service badge */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  marginBottom: "4px",
                }}
              >
                <Stars count={review.rating} />
                <span
                  style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    color: "#0F2B46",
                    background: "#EFF6FF",
                    border: "1px solid #BFDBFE",
                    borderRadius: "999px",
                    padding: "3px 10px",
                    whiteSpace: "nowrap",
                    maxWidth: "140px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {review.serviceType}
                </span>
              </div>

              {/* Review text */}
              <p
                style={{
                  fontSize: "14px",
                  lineHeight: 1.75,
                  color: "#374151",
                  fontStyle: "italic",
                  flex: 1,
                  marginBottom: "20px",
                }}
              >
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Footer */}
              <div
                style={{
                  borderTop: "1px solid #F3F4F6",
                  paddingTop: "16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <Avatar initials={review.initials} />
                <div style={{ minWidth: 0 }}>
                  <div
                    style={{
                      fontWeight: 700,
                      fontSize: "14px",
                      color: "#0F2B46",
                      display: "flex",
                      alignItems: "center",
                      gap: "6px",
                    }}
                  >
                    {review.name}
                    <span
                      style={{
                        fontSize: "11px",
                        color: "#16A34A",
                        fontWeight: 600,
                      }}
                    >
                      ✓ Doğrulandı
                    </span>
                  </div>
                  <div style={{ fontSize: "12px", color: "#6B7280", marginTop: "2px" }}>
                    {review.role} · {review.district} · {review.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom trust note */}
        <p
          style={{
            textAlign: "center",
            fontSize: "12px",
            color: "#9CA3AF",
            marginTop: "32px",
          }}
        >
          * Yorumlar gerçek müşterilerden alınmıştır. Gizlilik için soyadlar kısaltılmıştır.
        </p>
      </div>
    </section>
  );
}
