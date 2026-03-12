import Link from "next/link";
import { filterValidInternalLinks } from "@/lib/routes";

export interface InternalLinkItem {
  href: string;
  label: string;
  description?: string;
}

interface InternalLinkSectionProps {
  title: string;
  description?: string;
  links: InternalLinkItem[];
}

export default function InternalLinkSection({
  title,
  description,
  links,
}: InternalLinkSectionProps) {
  const validLinks = filterValidInternalLinks(links);

  if (validLinks.length === 0) {
    return null;
  }

  return (
    <section style={{ marginBottom: "48px" }}>
      <h2 style={{ fontSize: "30px", color: "#0F2B46", marginBottom: "14px" }}>
        {title}
      </h2>

      {description ? (
        <p style={{ fontSize: "17px", lineHeight: 1.75, marginBottom: "20px", color: "#374151" }}>
          {description}
        </p>
      ) : null}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "14px",
        }}
      >
        {validLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            style={{
              display: "block",
              padding: "18px",
              border: "1px solid #e5e7eb",
              borderRadius: "14px",
              background: "#F8FAFB",
              textDecoration: "none",
            }}
          >
            <div style={{ fontSize: "18px", fontWeight: 700, color: "#0F2B46", marginBottom: "8px" }}>
              {link.label}
            </div>

            {link.description ? (
              <div style={{ fontSize: "14px", lineHeight: 1.6, color: "#4b5563" }}>
                {link.description}
              </div>
            ) : null}
          </Link>
        ))}
      </div>
    </section>
  );
}
