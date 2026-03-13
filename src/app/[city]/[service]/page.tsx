import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ServiceVisualSection from "@/components/ServiceVisualSection";
import CityHubSection from "@/components/service-page/CityHubSection";
import RelatedServicesSection from "@/components/service-page/RelatedServicesSection";
import ServiceCTA from "@/components/service-page/ServiceCTA";
import ServiceDistricts from "@/components/service-page/ServiceDistricts";
import ServiceFAQ from "@/components/service-page/ServiceFAQ";
import ServiceHero from "@/components/service-page/ServiceHero";
import ServicePackages from "@/components/service-page/ServicePackages";
import ServiceSEOContent from "@/components/service-page/ServiceSEOContent";
import ServiceStats from "@/components/service-page/ServiceStats";
import ServiceUseCases from "@/components/service-page/ServiceUseCases";
import { pageShellClass } from "@/components/service-page/styles";
import { cities } from "@/data/cities";
import { services } from "@/data/services";
import { siteConfig } from "@/data/site-config";
import { getCityServicePageVisuals } from "@/lib/page-images";
import {
  getCityCanonicalUrl,
  getCityPath,
  getCityServiceCanonicalUrl,
  getCityServiceStaticParams,
} from "@/lib/routes";
import { getServicePageFactoryData } from "@/lib/service-page-factory";

export const dynamic = "force-static";
export const dynamicParams = false;

interface PageProps {
  params: Promise<{
    city: string;
    service: string;
  }>;
}

export function generateStaticParams() {
  return getCityServiceStaticParams();
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

  const canonical = getCityServiceCanonicalUrl(city.slug, service.slug);

  if (!canonical) {
    return {
      title: "Sayfa Bulunamadi | Guvenlik Servisi",
    };
  }

  const pageContent = getServicePageFactoryData(city, service);

  return {
    title: pageContent.meta.title,
    description: pageContent.meta.description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: pageContent.meta.title,
      description: pageContent.meta.description,
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

  if (!city || !service) {
    notFound();
  }

  const cityPath = getCityPath(city.slug);
  const cityCanonical = getCityCanonicalUrl(city.slug);
  const canonical = getCityServiceCanonicalUrl(city.slug, service.slug);

  if (!cityPath || !cityCanonical || !canonical) {
    notFound();
  }

  const pageContent = getServicePageFactoryData(city, service);
  const serviceVisuals = getCityServicePageVisuals(city.slug, service.slug);
  const isIpCameraPage = service.slug === "kamera-sistemi-kurulumu";
  const heroHeading = isIpCameraPage
    ? `${city.name} IP Kamera Kurulumu ve Montaj Hizmeti`
    : `${city.name} ${service.name} ve Montaj Hizmeti`;
  const heroDecisionIntro = isIpCameraPage
    ? `${city.name} içinde işletmeler, apartmanlar, depo ve fabrika alanları ile ev güvenliği ihtiyaçları için keşif, montaj ve mobil izleme odaklı IP kamera çözümleri sunuyoruz.`
    : `${city.name} içinde işletmeler, apartmanlar, depo ve fabrika alanları ile ev güvenliği ihtiyaçları için ${service.name.toLowerCase()} hizmeti sunuyoruz.`;

  const faqExtraItems = [
    {
      question: "IP kamera kurulumu kaç saat sürer?",
      answer:
        "Küçük ve orta ölçekli kurulumların çoğu aynı gün içinde tamamlanır. Kamera sayısı, kablolama mesafesi ve mekan yapısına göre net süre keşif sonrası belirlenir.",
    },
    {
      question: `${city.name}’da hangi ilçelerde hizmet veriyorsunuz?`,
      answer: `${city.name} genelinde ilçe bazlı hizmet veriyoruz. Proje kapsamına göre ücretsiz keşif planlaması yaparak uygun ekip yönlendirmesi sağlıyoruz.`,
    },
    {
      question: "Kamera sistemini telefondan izleyebilir miyim?",
      answer:
        "Evet. Kurulum tamamlandıktan sonra telefon ve tablet üzerinden canlı izleme, kayıt erişimi ve temel bildirim ayarları kullanıma hazır şekilde teslim edilir.",
    },
    {
      question: "Kurulumdan sonra bakım gerekiyor mu?",
      answer:
        "Periyodik bakım önerilir. Kamera açıları, kayıt cihazı, disk sağlığı ve uzaktan erişim ayarlarının düzenli kontrolü sistemin kesintisiz çalışmasını destekler.",
    },
    {
      question: "Ortalama kamera sistemi fiyatı nedir?",
      answer:
        "Ortalama maliyet kamera adedi, kayıt süresi, kablolama mesafesi, gece görüş veya ses özellikleri ve uzaktan izleme ihtiyacına göre değişir. Net fiyat keşif sonrası belirlenir.",
    },
  ];

  const mergedFaqItems = [
    ...pageContent.faq.items,
    ...faqExtraItems.filter(
      (candidate) =>
        !pageContent.faq.items.some(
          (existing) => existing.question.toLowerCase() === candidate.question.toLowerCase()
        )
    ),
  ];

  const relatedCoreServiceLinks = [
    { href: "/kamera-sistemi-kurulumu", label: "Kamera Sistemi Kurulumu" },
    { href: "/alarm-sistemi-kurulumu", label: "Alarm Sistemi Kurulumu" },
    { href: "/yangin-alarm-sistemi-kurulumu", label: "Yangın Alarm Sistemi Kurulumu" },
    { href: "/bakim-servis-uzaktan-izleme", label: "Bakım, Servis ve Uzaktan İzleme" },
  ];

  const nationwideCityHubLinks = ["istanbul", "ankara", "izmir"]
    .map((slug) => {
      const cityItem = cities.find((item) => item.slug === slug);
      const href = getCityPath(slug);

      if (!cityItem || !href) {
        return null;
      }

      return {
        href,
        label: cityItem.name,
      };
    })
    .filter((item): item is { href: string; label: string } => item !== null);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: pageContent.faq.items.map((item) => ({
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
        item: cityCanonical,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.name,
        item: canonical,
      },
    ],
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `${city.name} ${service.name} - ${siteConfig.name}`,
    url: canonical,
    telephone: siteConfig.phone,
    areaServed: city.name,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.city,
      streetAddress: siteConfig.address,
      addressCountry: "TR",
    },
    description: pageContent.meta.description,
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${city.name} ${service.name}`,
    serviceType: service.name,
    areaServed: {
      "@type": "City",
      name: city.name,
    },
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      telephone: siteConfig.phone,
      url: canonical,
      areaServed: city.name,
    },
  };

  return (
    <main className={pageShellClass}>
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <ServiceHero
        cityName={city.name}
        serviceName={service.name}
        cityDescription={pageContent.hero.cityDescription}
        intro={pageContent.hero.intro}
        localContext={pageContent.hero.localContext}
        benefits={pageContent.hero.benefits}
        process={pageContent.hero.process}
        image={pageContent.images.hero}
      />

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-black leading-tight text-slate-950 md:text-4xl">
              {heroHeading}
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">{heroDecisionIntro}</p>
          </div>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:flex-wrap">
            <a
              href="#teklif-formu"
              className="inline-flex items-center justify-center rounded-2xl bg-emerald-600 px-6 py-4 text-base font-bold text-white transition hover:bg-emerald-500"
            >
              Teklif Al
            </a>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              data-event="phone_click"
              className="inline-flex items-center justify-center rounded-2xl border border-slate-300 px-6 py-4 text-base font-bold text-slate-950 transition hover:bg-slate-50"
            >
              Hemen Ara
            </a>
            <a
              href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
                `${city.name} ${service.name} için bilgi ve fiyat almak istiyorum.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              data-event="whatsapp_click"
              className="inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-4 text-base font-bold text-white transition hover:bg-slate-800"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-black text-slate-950 md:text-4xl">
              {city.name}’de IP Kamera Kurulumu Nerelerde Kullanılır?
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Doğru kurulum senaryosu, kullanım alanına göre değişir. Aşağıdaki başlıklar en sık
              talep edilen kullanım alanlarını gösterir.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Apartman ve site güvenliği",
                items: [
                  "Bina girişleri ve ortak alanlar",
                  "Asansör ve merdiven çevresi",
                  "Site içi dolaşım noktaları",
                ],
              },
              {
                title: "İşyeri ve mağaza güvenliği",
                items: [
                  "Kasa ve satış alanı takibi",
                  "Giriş-çıkış kontrol noktaları",
                  "Personel ve müşteri hareket akışı",
                ],
              },
              {
                title: "Depo ve fabrika izleme",
                items: [
                  "Yükleme-boşaltma alanları",
                  "Üretim ve stok bölgesi gözlemi",
                  "Kritik giriş noktalarının kaydı",
                ],
              },
              {
                title: "Otopark ve bina çevresi",
                items: [
                  "Araç giriş-çıkış noktaları",
                  "Çevre hattı izleme",
                  "Gece görüş odaklı dış alan takibi",
                ],
              },
            ].map((group) => (
              <div key={group.title} className="rounded-3xl border border-slate-200 bg-white p-6">
                <h3 className="text-xl font-black text-slate-950">{group.title}</h3>
                <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-600">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 inline-block h-1.5 w-1.5 rounded-full bg-emerald-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-black text-slate-950 md:text-4xl">IP Kamera Kurulum Süreci</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Süreci adım adım planlayarak hem teknik doğruluğu hem de kullanım kolaylığını
              birlikte hedefliyoruz.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {[
              "Ücretsiz keşif",
              "Kamera noktalarının belirlenmesi",
              "Kablolama ve cihaz kurulumu",
              "Mobil uygulama bağlantısı",
              "Test ve teslim",
            ].map((step, index) => (
              <div key={step} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 text-sm font-black text-white">
                  {index + 1}
                </div>
                <p className="text-sm font-semibold leading-7 text-slate-800">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-black text-slate-950 md:text-4xl">
              IP Kamera Kurulumu Fiyatını Etkileyen Faktörler
            </h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Fiyat, yalnızca kamera adedine göre değil; kayıt ihtiyacı ve saha koşullarıyla
              birlikte değerlendirilir.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {[
              "Kamera sayısı",
              "Kayıt süresi",
              "Kablolama mesafesi",
              "Gece görüş / ses özellikleri",
              "Uzaktan izleme",
            ].map((item) => (
              <div key={item} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-base font-black text-slate-950">{item}</h3>
              </div>
            ))}
          </div>

          <p className="mt-8 text-sm leading-7 text-slate-600">
            Hizmet detayları için{" "}
            <Link href="/kamera-sistemi-kurulumu" className="font-bold text-slate-950 underline underline-offset-4">
              kamera sistemi kurulumu
            </Link>{" "}
            sayfasını, bakım desteği için{" "}
            <Link
              href="/bakim-servis-uzaktan-izleme"
              className="font-bold text-slate-950 underline underline-offset-4"
            >
              bakım servis uzaktan izleme
            </Link>{" "}
            sayfasını ve hızlı teklif için{" "}
            <Link
              href="/teklif/istanbul-ip-kamera-montaji"
              className="font-bold text-slate-950 underline underline-offset-4"
            >
              İstanbul IP kamera montajı teklif sayfasını
            </Link>{" "}
            inceleyebilirsiniz.
          </p>
        </div>
      </section>

      <ServiceStats
        title={pageContent.stats.title}
        description={pageContent.stats.description}
        items={pageContent.stats.items}
      />

      <ServiceSEOContent blocks={pageContent.seoContent.blocks} />

      <ServiceVisualSection
        title={pageContent.visuals.title}
        description={pageContent.visuals.description}
        items={serviceVisuals}
      />

      <CityHubSection cityName={city.name} cityPath={cityPath} />

      <RelatedServicesSection cityName={city.name} links={pageContent.relatedServices} />

      <ServiceUseCases
        title={pageContent.useCases.title}
        description={pageContent.useCases.description}
        localContext={pageContent.useCases.localContext}
        items={pageContent.useCases.items}
        supportImages={pageContent.images.support}
        useCaseImages={pageContent.images.useCases}
      />

      <ServicePackages
        title={pageContent.packages.title}
        description={pageContent.packages.description}
        localContext={pageContent.packages.localContext}
        items={pageContent.packages.items}
      />

      <ServiceDistricts cityName={city.name} districts={pageContent.districts} />

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
          <h2 className="text-2xl font-black text-slate-950">İlgili Güvenlik Sistemleri Hizmetleri</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
            Projenizi bütüncül planlamak için aşağıdaki temel hizmet sayfalarını da inceleyebilirsiniz.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {relatedCoreServiceLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ServiceFAQ title={pageContent.faq.title} items={mergedFaqItems} />

      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-10 md:px-6">
          <h2 className="text-2xl font-black text-slate-950">Türkiye Genelinde Kamera Kurulumu</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
            {service.name} hizmetini İstanbul başta olmak üzere birçok şehirde sunuyoruz. Şehir
            bazlı hizmet detaylarını aşağıdaki merkez sayfalardan inceleyebilirsiniz.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            {nationwideCityHubLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ServiceCTA
        title={pageContent.cta.title}
        description={pageContent.cta.description}
        primaryLabel={pageContent.cta.primaryLabel}
        secondaryLabel={pageContent.cta.secondaryLabel}
        image={pageContent.images.cta}
      />
    </main>
  );
}
