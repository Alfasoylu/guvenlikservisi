import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import InternalLinkSection from "@/components/InternalLinkSection";
import { cities } from "@/data/cities";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site-config";

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

const cityDistricts: Record<string, string[]> = {
  istanbul: ["Kadıköy", "Beşiktaş", "Şişli", "Üsküdar", "Pendik", "Bakırköy"],
  ankara: ["Çankaya", "Keçiören", "Yenimahalle", "Mamak", "Etimesgut", "Sincan"],
  izmir: ["Konak", "Karşıyaka", "Bornova", "Buca", "Bayraklı", "Çiğli"],
  bursa: ["Osmangazi", "Nilüfer", "Yıldırım", "İnegöl", "Gemlik", "Mudanya"],
  kocaeli: ["İzmit", "Gebze", "Darıca", "Körfez", "Gölcük", "Başiskele"],
  antalya: ["Muratpaşa", "Kepez", "Konyaaltı", "Alanya", "Manavgat", "Serik"],
  tekirdag: ["Çorlu", "Çerkezköy", "Süleymanpaşa", "Ergene", "Malkara", "Kapaklı"],
  sakarya: ["Adapazarı", "Serdivan", "Erenler", "Arifiye", "Sapanca", "Akyazı"],
  balikesir: ["Altıeylül", "Karesi", "Bandırma", "Edremit", "Ayvalık", "Burhaniye"],
  adana: ["Seyhan", "Yüreğir", "Çukurova", "Sarıçam", "Ceyhan", "Kozan"],
  konya: ["Selçuklu", "Meram", "Karatay", "Ereğli", "Akşehir", "Beyşehir"],
  gaziantep: ["Şehitkamil", "Şahinbey", "Nizip", "İslahiye", "Nurdağı", "Araban"],
  kayseri: ["Melikgazi", "Kocasinan", "Talas", "Develi", "Yahyalı", "İncesu"],
  eskisehir: ["Odunpazarı", "Tepebaşı", "Sivrihisar", "Çifteler", "Alpu", "Mahmudiye"],
  mersin: ["Akdeniz", "Mezitli", "Yenişehir", "Toroslar", "Tarsus", "Erdemli"],
};

const cityDescriptions: Record<string, string> = {
  istanbul:
    "İstanbul'da apartman, site, işyeri, mağaza ve depo projeleri için profesyonel kamera sistemi kurulumu yapıyoruz.",
  ankara:
    "Ankara'da konut, işyeri ve ticari alanlar için keşif, montaj ve devreye alma dahil kamera sistemi hizmeti sunuyoruz.",
  izmir:
    "İzmir'de iç ve dış mekan güvenlik ihtiyaçlarına uygun IP kamera sistemleri kuruyoruz.",
  bursa:
    "Bursa'da fabrika, depo, mağaza ve apartman projelerine uygun kamera sistemleri kurulum hizmeti veriyoruz.",
  kocaeli:
    "Kocaeli'de özellikle fabrika, depo ve sanayi tesisleri için profesyonel güvenlik kamera çözümleri sunuyoruz.",
  antalya:
    "Antalya'da villa, site, otel çevresi ve ticari alanlar için kamera sistemi kurulumu yapıyoruz.",
  tekirdag:
    "Tekirdağ'da sanayi bölgeleri, işyerleri ve apartmanlar için güvenlik kamera kurulumu gerçekleştiriyoruz.",
  sakarya:
    "Sakarya'da ev, işyeri ve site projelerinde anahtar teslim kamera sistemi kurulumu sunuyoruz.",
  balikesir:
    "Balıkesir'de apartman, mağaza, depo ve villa projeleri için güvenlik kamera sistemi kuruyoruz.",
  adana:
    "Adana'da sıcak hava ve dış ortam şartlarına uygun kamera sistemleriyle profesyonel kurulum yapıyoruz.",
  konya:
    "Konya'da işyeri, sanayi tesisi ve konut alanları için güvenlik kamera çözümleri sunuyoruz.",
  gaziantep:
    "Gaziantep'te üretim alanları, depolar ve ticari işletmeler için kamera sistemleri kuruyoruz.",
  kayseri:
    "Kayseri'de fabrika, işyeri ve apartman projelerinde keşif ve montaj dahil kamera kurulumu yapıyoruz.",
  eskisehir:
    "Eskişehir'de apartman, site ve ticari alanlar için uygun maliyetli kamera sistemleri kuruyoruz.",
  mersin:
    "Mersin'de konut, depo, mağaza ve dış mekanlar için güvenlik kamerası kurulumu hizmeti veriyoruz.",
};

function getCameraPackageText(cityName: string) {
  return [
    {
      title: "Küçük Alan Paketi",
      desc: `${cityName} içinde daire, küçük ofis ve butik işletmeler için 2-4 kameralı sistem kurulumu.`,
    },
    {
      title: "Orta Ölçek Paket",
      desc: `${cityName} bölgesinde apartman, mağaza ve orta ölçekli işletmeler için 4-8 kameralı sistem.`,
    },
    {
      title: "Profesyonel Paket",
      desc: `${cityName} içinde depo, fabrika ve büyük alanlar için 8-16 kameralı profesyonel çözüm.`,
    },
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city: citySlug, service: serviceSlug } = await params;

  const city = cities.find((c) => c.slug === citySlug);
  const service = services.find((s) => s.slug === serviceSlug);

  if (!city || !service) {
    return {
      title: "Sayfa Bulunamadı | Güvenlik Servisi",
    };
  }

  const title = `${city.name} ${service.name} | Ücretsiz Keşif ve Montaj`;
  const description = `${city.name} için profesyonel ${service.name.toLowerCase()} hizmeti. Ücretsiz keşif, anahtar teslim montaj, mobil izleme kurulumu ve hızlı teklif alın.`;
  const canonical = `${siteConfig.url}/${city.slug}/${service.slug}`;

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

export default async function ServicePage({ params }: PageProps) {
  const { city: citySlug, service: serviceSlug } = await params;

  const city = cities.find((c) => c.slug === citySlug);
  const service = services.find((s) => s.slug === serviceSlug);

  if (!city || !service) notFound();

  const isCameraPage = service.slug === "kamera-sistemi-kurulumu";
  const districts = cityDistricts[city.slug] || [];
  const cityDescription =
    cityDescriptions[city.slug] ||
    `${city.name} bölgesinde profesyonel ${service.name.toLowerCase()} hizmeti sunuyoruz.`;

  const packages = getCameraPackageText(city.name);
  const sameCityOtherServices = services
    .filter((item) => item.slug !== service.slug)
    .map((item) => ({
      href: `/${city.slug}/${item.slug}`,
      label: `${city.name} ${item.name}`,
      description: `${city.name} içinde ${item.name.toLowerCase()} sayfasını da inceleyin.`,
    }));
  const sameServiceOtherCities = cities
    .filter((item) => item.slug !== city.slug)
    .slice(0, 12)
    .map((item) => ({
      href: `/${item.slug}/${service.slug}`,
      label: `${item.name} ${service.name}`,
      description: `${service.name} hizmetinin ${item.name} sayfasına geçin.`,
    }));

  const faqItems = isCameraPage
    ? [
        {
          question: `${city.name} kamera sistemi kurulumu ne kadar sürer?`,
          answer:
            "Küçük projelerde aynı gün, orta ve büyük projelerde 1-3 gün arasında tamamlanır.",
        },
        {
          question: "Kaç kamera gerektiğini nasıl belirliyorsunuz?",
          answer:
            "Alan büyüklüğü, giriş-çıkış noktaları, kör alanlar ve kayıt beklentisine göre keşifte belirliyoruz.",
        },
        {
          question: "Uzaktan telefondan izleme kuruluyor mu?",
          answer:
            "Evet. Mobil uygulama ile canlı izleme ve kayıt erişimi kurulum sırasında aktif edilir.",
        },
        {
          question: "Kayıt cihazı ve hard disk dahil mi?",
          answer:
            "Evet. Sistem ihtiyacına göre NVR, hard disk ve gerekiyorsa PoE switch dahil çözüm hazırlanır.",
        },
      ]
    : [
        {
          question: `${city.name} ${service.name.toLowerCase()} hizmeti veriyor musunuz?`,
          answer: `Evet, ${city.name} içinde profesyonel ${service.name.toLowerCase()} hizmeti sunuyoruz.`,
        },
      ];

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
        name: city.name,
        item: `${siteConfig.url}/${city.slug}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.name,
        item: `${siteConfig.url}/${city.slug}/${service.slug}`,
      },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${city.name} ${service.name} - ${siteConfig.name}`,
    url: `${siteConfig.url}/${city.slug}/${service.slug}`,
    telephone: siteConfig.phone,
    areaServed: city.name,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.city,
      streetAddress: siteConfig.address,
      addressCountry: "TR",
    },
    description: `${city.name} için ${service.name.toLowerCase()} hizmeti.`,
  };

  return (
    <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "48px 20px" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />

      <section style={{ marginBottom: "40px" }}>
        <div style={{ fontSize: "14px", marginBottom: "12px", color: "#666" }}>
          <Link href="/" style={{ color: "#666", textDecoration: "none" }}>
            Ana Sayfa
          </Link>
          {" / "}
          <span>{city.name}</span>
          {" / "}
          <span>{service.name}</span>
        </div>

        <h1 style={{ fontSize: "42px", lineHeight: 1.15, marginBottom: "16px", color: "#0F2B46" }}>
          {city.name} {service.name}
        </h1>

        <p style={{ fontSize: "22px", lineHeight: 1.5, maxWidth: "900px", marginBottom: "28px" }}>
          {cityDescription} Ücretsiz keşif, ürün seçimi, montaj ve sistem devreye alma hizmeti
          sunuyoruz.
        </p>

        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <a
            href="#teklif"
            style={{
              background: "#34A853",
              color: "#fff",
              padding: "16px 28px",
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
      </section>

      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "16px",
          marginBottom: "48px",
        }}
      >
        {[
          { label: "Tamamlanan Proje", value: "500+" },
          { label: "Sektör Deneyimi", value: "12 Yıl" },
          { label: "Memnuniyet", value: "%100" },
          { label: "Hizmet Bölgeleri", value: "15 Şehir" },
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
            <div style={{ fontSize: "30px", fontWeight: 800, color: "#0F2B46", marginBottom: "6px" }}>
              {item.value}
            </div>
            <div style={{ color: "#555" }}>{item.label}</div>
          </div>
        ))}
      </section>

      <section
        style={{
          marginBottom: "32px",
          padding: "22px",
          borderRadius: "16px",
          background: "#EFF6FF",
          border: "1px solid #BFDBFE",
        }}
      >
        <div style={{ fontSize: "14px", fontWeight: 700, color: "#1D4ED8", marginBottom: "10px" }}>
          �zehir hub bağlantısı
        </div>
        <Link
          href={`/${city.slug}`}
          style={{
            fontSize: "20px",
            fontWeight: 700,
            color: "#0F2B46",
            textDecoration: "none",
          }}
        >
          {city.name} güvenlik sistemleri sayfasına dön
        </Link>
        <p style={{ marginTop: "10px", marginBottom: 0, fontSize: "15px", lineHeight: 1.7, color: "#374151" }}>
          {city.name} hub sayfasında bu şehirdeki tüm hizmet kombinasyonlarına, diğer servis sayfalarına ve
          keşif odaklı bağlantılara geri dönebilirsiniz.
        </p>
      </section>

      <InternalLinkSection
        title={`${city.name} içinde ilgili diğer hizmetler`}
        description={`${city.name} içinde aynı üst niyete hitap eden diğer hizmet sayfalarına geçerek aynı şehirdeki servis ağını keşfedebilirsiniz.`}
        links={sameCityOtherServices}
      />

      {isCameraPage ? (
        <>
          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "30px", color: "#0F2B46", marginBottom: "18px" }}>
              {city.name} Kamera Sistemi Kurulumu Hizmetimiz
            </h2>

            <p style={{ fontSize: "18px", lineHeight: 1.8, marginBottom: "18px" }}>
              {city.name} içinde apartman, site, daire, mağaza, ofis, depo ve fabrika gibi farklı
              alanlar için IP kamera sistemleri kuruyoruz. İhtiyaca göre gece görüş, uzaktan mobil
              izleme, ses kayıt desteği, kayıt cihazı ve disk seçimi dahil tüm sistemi anahtar
              teslim devreye alıyoruz.
            </p>

            <p style={{ fontSize: "18px", lineHeight: 1.8 }}>
              Kurulum öncesi keşif yapıyor, alan büyüklüğüne ve kör noktalara göre kamera sayısını
              belirliyor, ardından uygun NVR, hard disk ve gerekiyorsa PoE switch ile sistemi
              tamamlıyoruz.
            </p>
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "30px", color: "#0F2B46", marginBottom: "18px" }}>
              Hangi Alanlara Kurulum Yapıyoruz?
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "14px",
              }}
            >
              {[
                "Daire ve müstakil ev",
                "Apartman girişleri",
                "Site çevresi ve ortak alanlar",
                "Mağaza ve dükkanlar",
                "Ofis ve işyerleri",
                "Depo ve fabrika alanları",
                "Otopark ve açık alanlar",
                "Villa çevre güvenliği",
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    padding: "18px",
                    borderRadius: "14px",
                    background: "#F8FAFB",
                    border: "1px solid #e5e7eb",
                    fontSize: "17px",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "30px", color: "#0F2B46", marginBottom: "18px" }}>
              Örnek Sistem Paketleri
            </h2>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "18px",
              }}
            >
              {packages.map((item) => (
                <div
                  key={item.title}
                  style={{
                    border: "1px solid #e5e7eb",
                    borderRadius: "16px",
                    padding: "24px",
                    background: "#fff",
                  }}
                >
                  <h3 style={{ fontSize: "22px", color: "#0F2B46", marginBottom: "12px" }}>
                    {item.title}
                  </h3>
                  <p style={{ fontSize: "17px", lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "30px", color: "#0F2B46", marginBottom: "18px" }}>
              {city.name} İçinde Hizmet Verdiğimiz İlçeler
            </h2>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              {districts.map((district) => (
                <span
                  key={district}
                  style={{
                    padding: "10px 14px",
                    background: "#EEF4FF",
                    color: "#0F2B46",
                    borderRadius: "999px",
                    fontWeight: 600,
                  }}
                >
                  {district}
                </span>
              ))}
            </div>
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2 style={{ fontSize: "30px", color: "#0F2B46", marginBottom: "18px" }}>
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
                  <h3 style={{ fontSize: "20px", color: "#0F2B46", marginBottom: "10px" }}>
                    {faq.question}
                  </h3>
                  <p style={{ fontSize: "17px", lineHeight: 1.7 }}>{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>

          <InternalLinkSection
            title={`${service.name} hizmetinin diğer şehir sayfaları`}
            description={`${service.name} hizmetinin diğer şehirlerdeki karşılık sayfalarını aşağıda listeledik. Bu blok aynı hizmet kümesindeki city/service sayfaları arasında yatay crawl yolu açar.`}
            links={sameServiceOtherCities}
          />

          <section
            id="teklif"
            style={{
              background: "#0F2B46",
              color: "#fff",
              padding: "36px",
              borderRadius: "18px",
              marginBottom: "40px",
            }}
          >
            <h2 style={{ fontSize: "32px", marginBottom: "14px" }}>
              {city.name} İçin Ücretsiz Keşif ve Teklif Alın
            </h2>

            <p style={{ fontSize: "18px", lineHeight: 1.7, maxWidth: "850px", marginBottom: "22px" }}>
              {city.name} içinde kamera sistemi kurulumu için hemen bizimle iletişime geçin.
              İhtiyacınıza göre uygun kamera sayısını, kayıt cihazını ve sistem maliyetini netleştirelim.
            </p>

            <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                style={{
                  background: "#34A853",
                  color: "#fff",
                  padding: "16px 24px",
                  borderRadius: "12px",
                  textDecoration: "none",
                  fontWeight: 700,
                }}
              >
                Hemen Ara: {siteConfig.phone}
              </a>

              <a
                href="/iletisim"
                style={{
                  background: "#fff",
                  color: "#0F2B46",
                  padding: "16px 24px",
                  borderRadius: "12px",
                  textDecoration: "none",
                  fontWeight: 700,
                }}
              >
                İletişim Formuna Git
              </a>
            </div>
          </section>
        </>
      ) : (
        <>
          <section style={{ marginBottom: "40px" }}>
            <h2 style={{ fontSize: "28px", color: "#0F2B46", marginBottom: "18px" }}>
              {city.name} {service.name} Hizmeti
            </h2>

            <p style={{ fontSize: "18px", lineHeight: 1.8, marginBottom: "18px" }}>
              {city.name} içinde profesyonel {service.name.toLowerCase()} hizmeti sunuyoruz.
              Ücretsiz keşif, montaj ve devreye alma ile güvenlik sistemlerinizi kuruyoruz.
            </p>

            <a
              href="/iletisim"
              style={{
                background: "#34A853",
                color: "#fff",
                padding: "14px 22px",
                borderRadius: "12px",
                textDecoration: "none",
                fontWeight: 700,
              }}
            >
              Teklif Al
            </a>
          </section>

          <InternalLinkSection
            title={`${service.name} hizmetinin diğer şehir sayfaları`}
            description={`${service.name} için oluşturulan diğer city/service sayfalarını aşağıdaki listeden inceleyebilirsiniz.`}
            links={sameServiceOtherCities}
          />
        </>
      )}
    </main>
  );
}
