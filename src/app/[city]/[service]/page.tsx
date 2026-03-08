import { cities } from "@/data/cities";
import { services } from "@/data/services";
import { notFound } from "next/navigation";

export const dynamic = "force-static";
export const dynamicParams = false;

interface PageProps {
  params: Promise<{
    city: string;
    service: string;
  }>;
}

export function generateStaticParams() {
  const paths = [];

  for (const city of cities) {
    for (const service of services) {
      paths.push({
        city: city.slug,
        service: service.slug,
      });
    }
  }

  return paths;
}

export default async function ServicePage({ params }: PageProps) {
  const { city: citySlug, service: serviceSlug } = await params;

  const city = cities.find((c) => c.slug === citySlug);
  const service = services.find((s) => s.slug === serviceSlug);

  if (!city || !service) notFound();

  return (
    <main style={{ padding: "60px", maxWidth: "900px", margin: "auto" }}>
      <h1>
        {city.name} {service.name}
      </h1>

      <p>
        {city.name} bölgesinde profesyonel {service.name.toLowerCase()} hizmeti
        sunuyoruz. Ücretsiz keşif ve anahtar teslim montaj ile güvenlik
        sistemlerinizi kuruyoruz.
      </p>

      <h2>Hizmetlerimiz</h2>

      <ul>
        <li>IP Kamera Kurulumu</li>
        <li>Kayıt Cihazı Kurulumu</li>
        <li>Mobil İzleme Kurulumu</li>
        <li>Uzaktan Erişim</li>
        <li>Bakım ve Servis</li>
      </ul>

      <h2>Ücretsiz Teklif Al</h2>

      <p>Bulunduğunuz şehir için hemen teklif alın.</p>
    </main>
  );
}
