import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import InternalLinkSection from "@/components/InternalLinkSection";
import { cities } from "@/data/cities";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site-config";
import {
  getCityCanonicalUrl,
  getCityPath,
  getCityServicePath,
  getCityStaticParams,
} from "@/lib/routes";

export const dynamic = "force-static";
export const dynamicParams = false;

interface PageProps {
  params: Promise<{
    city: string;
  }>;
}

const cityIntroMap: Record<string, string> = {
  istanbul:
    "İstanbul içinde apartman, site, villa, mağaza, ofis, depo ve fabrika projeleri için profesyonel güvenlik sistemi kurulumu yapıyoruz.",
  ankara:
    "Ankara içinde ev, işyeri, apartman ve ticari alanlar için keşif, ürün seçimi, montaj ve devreye alma dahil güvenlik çözümleri sunuyoruz.",
  izmir:
    "İzmir içinde iç ve dış mekanlara uygun kamera, alarm ve geçiş kontrol sistemleri kuruyoruz.",
  bursa:
    "Bursa içinde fabrika, depo, mağaza, site ve apartman projeleri için profesyonel montaj hizmeti veriyoruz.",
  kocaeli:
    "Kocaeli içinde özellikle fabrika, depo ve sanayi tesisleri için güvenlik sistemi çözümleri sunuyoruz.",
  antalya:
    "Antalya içinde villa, site, otel çevresi ve ticari alanlar için güvenlik kamera ve alarm sistemleri kuruyoruz.",
  sakarya:
    "Sakarya içinde ev, işyeri, depo ve site projelerinde anahtar teslim güvenlik sistemi kurulumu sunuyoruz.",
  yalova:
    "Yalova içinde konut, site, villa, işyeri ve küçük işletmeler için profesyonel güvenlik sistemleri kurulumu yapıyoruz.",
  edirne:
    "Edirne içinde konut ve ticari projeler için kamera sistemi, alarm sistemi ve kartlı geçiş çözümleri sunuyoruz.",
  kirklareli:
    "Kırklareli içinde işyeri, depo, apartman ve açık alan güvenliği için profesyonel montaj hizmeti sağlıyoruz.",
};

const cityServiceAreasMap: Record<string, string[]> = {
  istanbul: ["Apartmanlar", "Siteler", "Mağazalar", "Ofisler", "Depolar", "Fabrikalar"],
  ankara: ["Daireler", "Villalar", "İşyerleri", "Apartman girişleri", "Depolar", "Mağazalar"],
  izmir: ["Evler", "Siteler", "Dükkanlar", "Ofisler", "Depolar", "Açık alanlar"],
  bursa: ["Fabrikalar", "Depolar", "Mağazalar", "Apartmanlar", "Siteler", "Atölyeler"],
  kocaeli: ["Sanayi tesisleri", "Depolar", "Fabrikalar", "Ofisler", "Apartmanlar", "Mağazalar"],
  antalya: ["Villalar", "Oteller", "Siteler", "Mağazalar", "Restoranlar", "Depolar"],
  sakarya: ["Evler", "İşyerleri", "Siteler", "Depolar", "Atölyeler", "Mağazalar"],
  yalova: ["Villalar", "Yazlıklar", "Apartmanlar", "Dükkanlar", "Ofisler", "Siteler"],
  edirne: ["Konutlar", "İşletmeler", "Apartmanlar", "Depolar", "Mağazalar", "Bahçeli alanlar"],
  kirklareli: ["Çiftlikler", "Depolar", "Apartmanlar", "İşyerleri", "Açık alanlar", "Mağazalar"],
};

const faqByCity = (cityName: string) => [
  {
    question: `${cityName} güvenlik sistemi kurulumu ne kadar sürer?`,
    answer:
      "Küçük projeler genelde aynı gün tamamlanır. Orta ve büyük projelerde keşif sonrası 1-3 gün içinde kurulum bitirilir.",
  },
  {
    question: `${cityName} içinde ücretsiz keşif yapıyor musunuz?`,
    answer:
      "Evet. Uygun projelerde ücretsiz keşif ile alanı analiz ediyor, gerekli kamera ve ekipman sayısını belirliyoruz.",
  },
  {
    question: `Telefondan uzaktan izleme kuruluyor mu?`,
    answer:
      "Evet. Kurulum sonrası mobil uygulama üzerinden canlı izleme, kayıt izleme ve temel bildirim ayarları yapılır.",
  },
  {
    question: `Kamera, kayıt cihazı ve hard disk dahil sistem kuruluyor mu?`,
    answer:
      "Evet. İhtiyaca göre kamera, NVR/DVR, hard disk, PoE switch, adaptör ve kablolama dahil komple sistem hazırlanır.",
  },
];

export function generateStaticParams() {
  return getCityStaticParams();
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: citySlug } = await params;
  const city = cities.find((c) => c.slug === citySlug);

  if (!city) {
    return {
      title: "Sayfa Bulunamadı | Güvenlik Servisi",
    };
  }

  const title = `${city.name} Güvenlik Sistemleri | Kamera, Alarm, Montaj ve Teklif`;
  const description = `${city.name} içinde kamera sistemi kurulumu, alarm sistemi kurulumu, kartlı geçiş ve bakım hizmetleri için hızlı teklif alın. Profesyonel montaj ve keşif desteği.`;
  const canonical = getCityCanonicalUrl(city.slug);

  if (!canonical) {
    return {
      title: "Sayfa Bulunamadi | Guvenlik Servisi",
    };
  }

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: "tr_TR",
      type: "website",
    },
  };
}

export default async function CityPage({ params }: PageProps) {
  const { city: citySlug } = await params;
  const city = cities.find((c) => c.slug === citySlug);

  if (!city) notFound();

  const intro =
    cityIntroMap[city.slug] ||
    `${city.name} içinde kamera sistemi kurulumu, alarm sistemi kurulumu ve diğer güvenlik çözümleri için profesyonel montaj hizmeti sunuyoruz.`;

  const serviceAreas = cityServiceAreasMap[city.slug] || [
    "Evler",
    "İşyerleri",
    "Apartmanlar",
    "Siteler",
    "Depolar",
    "Mağazalar",
  ];

  const cityPath = getCityPath(city.slug);
  const canonical = getCityCanonicalUrl(city.slug);

  if (!cityPath || !canonical) notFound();

  const faqItems = faqByCity(city.name);
  const cityServiceLinks = services.flatMap((service) => {
    const href = getCityServicePath(city.slug, service.slug);

    if (!href) {
      return [];
    }

    return {
      href,
      label: `${city.name} ${service.name}`,
      description: `${city.name} icindeki ${service.name.toLowerCase()} sayfasina gidin ve hizmet detaylarini inceleyin.`,
    };
  });

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: `${city.name} Güvenlik Sistemleri`,
        item: canonical,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${city.name} Güvenlik Sistemleri - ${siteConfig.name}`,
    url: canonical,
    telephone: siteConfig.phone,
    areaServed: city.name,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.city,
      streetAddress: siteConfig.address,
      addressCountry: "TR",
    },
    description: `${city.name} içinde kamera, alarm ve güvenlik sistemi kurulumu hizmeti.`,
  };

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
          <a
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
          </a>

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

      <InternalLinkSection
        title={`${city.name} için hizmet sayfaları`}
        description={`${city.name} içinde en fazla talep gören hizmet kombinasyonlarını aşağıda bir araya getirdik. Her bağlantı ilgili ${city.name} + hizmet intent'ine giden gerçek route'a açılır.`}
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
          ve uzaktan erişim ihtiyacını netleştirip ona göre sistem öneriyoruz. Bu yaklaşım satış da
          getirir çünkü kullanıcıyı ürünle değil çözümle ikna eder.
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
          <a
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
          </a>

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
