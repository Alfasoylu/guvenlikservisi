import Link from "next/link";
import { bodyStyle, sectionStyle } from "@/components/service-page/styles";

interface CityHubSectionProps {
  cityName: string;
  cityPath: string;
}

export default function CityHubSection({ cityName, cityPath }: CityHubSectionProps) {
  return (
    <section
      style={{
        ...sectionStyle,
        padding: "22px",
        borderRadius: "16px",
        background: "#EFF6FF",
        border: "1px solid #BFDBFE",
      }}
    >
      <div style={{ fontSize: "14px", fontWeight: 700, color: "#1D4ED8", marginBottom: "10px" }}>
        Şehir genel sayfası
      </div>
      <Link
        href={cityPath}
        style={{
          fontSize: "20px",
          fontWeight: 700,
          color: "#0F2B46",
          textDecoration: "none",
        }}
      >
        {cityName} güvenlik sistemleri sayfasına dön
      </Link>
      <p style={{ ...bodyStyle, fontSize: "15px", marginTop: "10px" }}>
        {cityName} hub sayfasında bu şehirdeki tüm hizmet kombinasyonlarına, diğer servis sayfalarına
        ve keşif odaklı bağlantılara geri dönebilirsiniz.
      </p>
    </section>
  );
}
