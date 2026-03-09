import type { Metadata } from "next";
import { cities } from "@/data/cities";
import { services } from "@/data/services";
import { notFound } from "next/navigation";
import Link from "next/link";
import { siteConfig } from "@/data/site-config";

export const dynamic = "force-static";
export const dynamicParams = false;

interface PageProps {
  params: Promise<{
    city: string;
  }>;
}

export function generateStaticParams() {
  return cities.map((city) => ({
    city: city.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = cities.find((c) => c.slug === citySlug);

  if (!city) {
    return {
      title: "Sayfa Bulunamadı | Güvenlik Servisi",
    };
  }

  return {
    title: `${city.name} Güvenlik Sistemleri | Kamera, Alarm ve Montaj`,
    description: `${city.name} içinde kamera sistemi kurulumu, alarm sistemi kurulumu ve profesyonel güvenlik çözümleri için teklif alın.`,
    alternates: {
      canonical: `${siteConfig.url}/${city.slug}`,
    },
  };
}

export default async function CityPage({ params }: PageProps) {
  const { city: citySlug } = await params;
  const city = cities.find((c) => c.slug === citySlug);

  if (!city) notFound();

  return (
    <main style={{ maxWidth: "1100px", margin: "0 auto", padding: "48px 20px" }}>
      <h1 style={{ fontSize: "40px", marginBottom: "20px", color: "#0F2B46" }}>
        {city.name} Güvenlik Sistemleri
      </h1>

      <p style={{ fontSize: "20px", marginBottom: "32px", lineHeight: 1.6 }}>
        {city.name} içinde kamera sistemi kurulumu, alarm sistemi kurulumu ve
        diğer güvenlik çözümleri için profesyonel montaj hizmeti sunuyoruz.
      </p>

      <h2 style={{ fontSize: "28px", marginBottom: "16px", color: "#0F2B46" }}>
        {city.name} İçin Hizmetlerimiz
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
              background: "#fff",
            }}
          >
            {city.name} {service.name}
          </Link>
        ))}
      </div>
    </main>
  );
}
