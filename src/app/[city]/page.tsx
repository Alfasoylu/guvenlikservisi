import { cities } from "@/data/cities";
import { services } from "@/data/services";
import { notFound } from "next/navigation";
import Link from "next/link";

interface PageProps {
  params: {
    city: string;
  };
}

export function generateStaticParams() {
  return cities.map((city) => ({
    city: city.slug,
  }));
}

export default function CityPage({ params }: PageProps) {
  const city = cities.find((c) => c.slug === params.city);

  if (!city) notFound();

  return (
    <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 20px" }}>
      <h1 style={{ fontSize: "40px", marginBottom: "20px" }}>
        {city.name} Güvenlik Sistemleri
      </h1>

      <p style={{ fontSize: "20px", marginBottom: "32px" }}>
        {city.name} içinde kamera sistemi kurulumu, alarm sistemi kurulumu ve
        güvenlik çözümleri için profesyonel montaj hizmeti sunuyoruz.
      </p>

      <h2 style={{ fontSize: "28px", marginBottom: "16px" }}>
        Hizmetlerimiz
      </h2>

      <div style={{ display: "grid", gap: "14px" }}>
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/${city.slug}/${service.slug}`}
            style={{
              padding: "16px",
              border: "1px solid #e5e7eb",
              borderRadius: "12px",
              textDecoration: "none",
              color: "#111",
            }}
          >
            {city.name} {service.name}
          </Link>
        ))}
      </div>
    </main>
  );
}
