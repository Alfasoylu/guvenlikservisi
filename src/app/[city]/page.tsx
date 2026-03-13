import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import InternalLinkSection from "@/components/InternalLinkSection";
import ServiceVisualSection from "@/components/ServiceVisualSection";
import { buildCityFaqItems } from "@/data/seo/faq-bank";
import { getSeoCityBySlug } from "@/data/seo/cities";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site-config";
import {
  getCityCanonicalUrl,
  getCityPath,
  getCityServicePath,
  getCityStaticParams,
} from "@/lib/routes";
import { getCityPageVisuals } from "@/lib/page-images";
import { buildNotFoundMetadata, buildSeoMetadata } from "@/lib/seo/metadata";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildLocalBusinessSchema,
  buildWebPageSchema,
} from "@/lib/seo/schema";

export const dynamic = "force-static";
export const dynamicParams = false;

interface PageProps {
  params: Promise<{
    city: string;
  }>;
}

export function generateStaticParams() {
  return getCityStaticParams();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = getSeoCityBySlug(citySlug);

  if (!city) {
    return buildNotFoundMetadata();
  }

  const title = `${city.name} Güvenlik Sistemleri | Kamera, Alarm, Montaj ve Teklif`;
  const description = `${city.name} içinde kamera sistemi kurulumu, alarm sistemi kurulumu, kartlı geçiş ve bakım hizmetleri için hızlı teklif alın. Profesyonel montaj ve keşif desteği.`;
  const canonical = getCityCanonicalUrl(city.slug);

  if (!canonical) {
    return buildNotFoundMetadata();
  }

  return buildSeoMetadata({
    title,
    description,
    canonical,
  });
}

export default async function CityPage({ params }: PageProps) {
  const { city: citySlug } = await params;
  const city = getSeoCityBySlug(citySlug);

  if (!city) notFound();

  const intro = city.shortIntro;
  const serviceAreas = city.serviceAreas;

  const cityPath = getCityPath(city.slug);
  const canonical = getCityCanonicalUrl(city.slug);

  if (!cityPath || !canonical) notFound();

  const faqItems = buildCityFaqItems(city.name);
  const cityVisuals = getCityPageVisuals(city.slug);
  const cityServiceLinks = services.flatMap((service) => {
    const href = getCityServicePath(city.slug, service.slug);

    if (!href) {
      return [];
    }

    return {
      href,
      label: `${city.name} ${service.name}`,
      description: `${city.name} içindeki ${service.name.toLowerCase()} sayfasına gidin ve hizmet detaylarını inceleyin.`,
    };
  });

  const breadcrumbSchema = buildBreadcrumbSchema([
    { name: "Ana Sayfa", url: "/" },
    { name: `${city.name} Güvenlik Sistemleri`, url: canonical },
  ]);
  const faqSchema = buildFaqSchema(faqItems);
  const localBusinessSchema = buildLocalBusinessSchema({
    name: `${city.name} Güvenlik Sistemleri - Güvenlik Servisi`,
    url: canonical,
    areaServed: city.areaServedLabel,
    description: `${city.name} içinde kamera, alarm ve güvenlik sistemi kurulumu hizmeti.`,
  });
  const webPageSchema = buildWebPageSchema({
    name: `${city.name} Güvenlik Sistemleri`,
    description: `${city.name} içinde güvenlik kamera, alarm, geçiş kontrol ve bakım hizmetleri.`,
    url: canonical,
  });

  return (
    <main style={{ maxWidth: "1180px", margin: "0 auto", padding: "48px 20px 64px" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <section style={{ marginBottom: "40px" }}>
        <div style={{ fontSize: "14px", marginBottom: "14px", color: "#666" }}>
          <Link href="/" style={{ color: "#666", textDecoration: "none" }}>
            Ana Sayfa
          </Link>
          {" / "}
          <span>{city.name}</span>
        </div>

        <h1
          style={{
            fontSize: "44px",
            lineHeight: 1.12,
            marginBottom: "18px",
            color: "#0F2B46",
          }}
        >
          {city.name} Güvenlik Sistemleri
        </h1>

        <p
          style={{
            fontSize: "22px",
            lineHeight: 1.55,
            maxWidth: "980px",
            marginBottom: "28px",
            color: "#1f2937",
          }}
        >
          {intro} Ücretsiz keşif, doğru ürün seçimi, profesyonel montaj ve sistem devreye alma
          desteği sunuyoruz.
        </p>

        <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginBottom: "18px" }}>
          <Link
            href="/iletisim"
            style={{
              background: "#34A853",
              color: "#fff",
              padding: "16px 26px",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            Ücretsiz Teklif Al
          </Link>

          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            style={{
              border: "2px solid #0F2B46",
              color: "#0F2B46",
              padding: "14px 24px",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            {siteConfig.phone}
          </a>
        </div>

        <p style={{ fontSize: "15px", color: "#555", margin: 0 }}>
          Hızlı teklif, keşif planlaması ve ihtiyaca uygun sistem önerisi için hemen iletişime geçin.
        </p>
      </section>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "16px",
          marginBottom: "50px",
        }}
      >
        {[
          { label: "Tamamlanan Proje", value: "500+" },
          { label: "Sektör Deneyimi", value: "12 Yıl" },
          { label: "Memnuniyet", value: "%100" },
          { label: "Hızlı Teklif", value: "Aynı Gün" },
        ].map((item) => (
          <div
            key={item.label}
            style={{
              background: "#F8FAFB",
              padding: "24px",
              borderRadius: "16px",
              border: "1px solid #e5e7eb",
            }}
          >
            <div style={{ fontSize: "30px", fontWeight: 800, color: "#0F2B46", marginBottom: "8px" }}>
              {item.value}
            </div>
            <div style={{ color: "#555", fontSize: "16px" }}>{item.label}</div>
          </div>
        ))}
      </section>

      <ServiceVisualSection
        title={`${city.name} için kurulum görselleri ve sistem akışı`}
        description={`${city.name} bölgesindeki kurulum çalışmalarından görseller; keşif süreci, montaj uygulaması ve sistem bileşen akışını birlikte aktarmaktadır.`}
        items={cityVisuals}
      />

      <InternalLinkSection
        title={`${city.name} için hizmet sayfaları`}
        description={`${city.name} bölgesinde en çok tercih edilen güvenlik sistemi hizmetlerini aşağıda bulabilirsiniz. İlgili hizmet sayfasına giderek detayları inceleyebilirsiniz.`}
        links={cityServiceLinks}
      />

      <section style={{ marginBottom: "50px" }}>
        <h2 style={{ fontSize: "32px", color: "#0F2B46", marginBottom: "18px" }}>
          Hangi Alanlara Kurulum Yapıyoruz?
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "14px",
          }}
        >
          {serviceAreas.map((item) => (
            <div
              key={item}
              style={{
                padding: "18px",
                borderRadius: "14px",
                background: "#fff",
                border: "1px solid #e5e7eb",
                fontSize: "17px",
                color: "#111827",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginBottom: "50px" }}>
        <h2 style={{ fontSize: "32px", color: "#0F2B46", marginBottom: "18px" }}>
          {city.name} Güvenlik Sistemi Kurulumu Neden Profesyonel Yapılmalı?
        </h2>

        <p style={{ fontSize: "18px", lineHeight: 1.8, marginBottom: "18px", color: "#374151" }}>
          Güvenlik sistemlerinde en büyük hata ürünü değil, planlamayı yanlış yapmaktır. Kör nokta
          bırakılan alanlar, düşük kayıt süresi, yanlış lens seçimi, yetersiz gece görüşü ve kötü
          kablolama yüzünden sistem çalışıyor gibi görünür ama olay anında işe yaramaz.
        </p>

        <p style={{ fontSize: "18px", lineHeight: 1.8, color: "#374151" }}>
          Biz keşif aşamasında giriş-çıkış noktalarını, izlenecek kritik alanları, kayıt beklentisini
          ve uzaktan erişim ihtiyacını netleştirip ona göre sistem öneriyoruz. Bu sayede kurulum
          sonrasında sistem gerçekten işe yarar; kör nokta kalmaz, kayıt süresi yeterli olur.
        </p>
      </section>

      <section style={{ marginBottom: "50px" }}>
        <h2 style={{ fontSize: "32px", color: "#0F2B46", marginBottom: "18px" }}>
          Sık Sorulan Sorular
        </h2>

        <div style={{ display: "grid", gap: "18px" }}>
          {faqItems.map((faq) => (
            <div
              key={faq.question}
              style={{
                border: "1px solid #e5e7eb",
                borderRadius: "14px",
                padding: "20px",
                background: "#fff",
              }}
            >
              <h3 style={{ fontSize: "21px", color: "#0F2B46", marginBottom: "10px" }}>
                {faq.question}
              </h3>
              <p style={{ fontSize: "17px", lineHeight: 1.75, color: "#374151", margin: 0 }}>
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        style={{
          background: "#0F2B46",
          color: "#fff",
          padding: "38px",
          borderRadius: "18px",
        }}
      >
        <h2 style={{ fontSize: "34px", marginBottom: "14px" }}>
          {city.name} İçin Hızlı Teklif Alın
        </h2>

        <p
          style={{
            fontSize: "18px",
            lineHeight: 1.75,
            maxWidth: "900px",
            marginBottom: "24px",
          }}
        >
          {city.name} içinde kamera sistemi, alarm sistemi, kartlı geçiş sistemi veya bakım hizmeti
          için hemen iletişime geçin. İhtiyacınıza göre doğru sistemi belirleyelim, gereksiz ürün
          satmayalım, doğru projeyi kuralım.
        </p>

        <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
          <Link
            href="/iletisim"
            style={{
              background: "#34A853",
              color: "#fff",
              padding: "16px 24px",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            Teklif Formuna Git
          </Link>

          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            style={{
              background: "#fff",
              color: "#0F2B46",
              padding: "16px 24px",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: 700,
            }}
          >
            Hemen Ara: {siteConfig.phone}
          </a>
        </div>
      </section>
    </main>
  );
}
