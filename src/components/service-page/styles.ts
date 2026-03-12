import type { CSSProperties } from "react";

export const pageShellStyle: CSSProperties = {
  maxWidth: "1200px",
  margin: "0 auto",
  padding: "48px 20px",
};

export const sectionStyle: CSSProperties = {
  marginBottom: "48px",
};

export const headingStyle: CSSProperties = {
  fontSize: "30px",
  color: "#0F2B46",
  marginBottom: "18px",
};

export const bodyStyle: CSSProperties = {
  fontSize: "17px",
  lineHeight: 1.75,
  color: "#374151",
  margin: 0,
};

export const gridStyle: CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "16px",
};

export const cardStyle: CSSProperties = {
  border: "1px solid #e5e7eb",
  borderRadius: "16px",
  padding: "24px",
  background: "#fff",
};
