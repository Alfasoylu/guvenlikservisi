import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  BadgeCheck,
  CheckCircle2,
  Clock3,
  MapPin,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import HeroCTAButtons from "@/components/HeroCTAButtons";
import IstanbulServiceQuoteForm from "@/components/IstanbulServiceQuoteForm";
import TrustSignals, {
  type TrustItem,
} from "@/components/sections/TrustSignals";
import FAQSection from "@/components/sections/FAQSection";
import FinalCTA from "@/components/sections/FinalCTA";
import IstanbulDistrictSupportSection from "@/components/sections/IstanbulDistrictSupportSection";
import {
  getDistrictProfile,
  getDistrictServiceContent,
  getServiceLevelContent,
} from "@/data/seo/istanbul-district-content";
import { getIstanbulDistrictSupportContent } from "@/data/seo/istanbul-district-support";
import { getSeoDistrictBySlug } from "@/data/seo/districts";
import { getSeoServiceBySlug } from "@/data/seo/services";
import { siteConfig } from "@/data/site-config";
import { getCanonicalUrlForKnownPath } from "@/lib/canonical";
import { getDistrictServiceStaticParams } from "@/lib/routes";

export const dynamic = "force-static";
export const dynamicParams = false;

interface PageProps {
  params: Promise<{
    city: string;
    district: string;
    service: string;
  }>;
}

export async function generateStaticParams() {
  return getDistrictServiceStaticParams();
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { city, district, service } = await params;

  const profile = getDistrictProfile(district);
  const content = getDistrictServiceContent(district, service);
  const seoService = getSeoServiceBySlug(service);

  if (!profile || !content || !seoService) return {};

  const pagePath = `/${city}/${district}/${service}`;
  const canonicalUrl = getCanonicalUrlForKnownPath(pagePath);
  const title = `${content.heroTitle} | ${siteConfig.name}`;
  const rawDesc = content.heroIntro;
  const description =
    rawDesc.length <= 155
      ? rawDesc
      : rawDesc.slice(0, 155).replace(/\s+\S*$/, "") + "…";

  return {
    title,
    description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: "tr_TR",
      type: "website",
    },
  };
}

// ---------------------------------------------------------------------------

const trustItems: TrustItem[] = [
  { icon: Clock3, label: "Aynı Gün Keşif" },
  { icon: MapPin, label: "İstanbul Geneli Hizmet" },
  { icon: ShieldCheck, label: "Garantili Kurulum" },
  { icon: BadgeCheck, label: "Uzman Teknik Ekip" },
  { icon: Wrench, label: "Ücretsiz Keşif" },
];

export default async function DistrictServicePage({ params }: PageProps) {
  const { city, district, service } = await params;

  const profile = getDistrictProfile(district);
  const content = getDistrictServiceContent(district, service);
  const seoService = getSeoServiceBySlug(service);
  const seoDistrict = getSeoDistrictBySlug(city, district);
  const serviceLvl = getServiceLevelContent(service);

  if (!profile || !content || !seoService || !seoDistrict) {
    notFound();
  }

  const pagePath = `/${city}/${district}/${service}`;
  const canonicalUrl = getCanonicalUrlForKnownPath(pagePath);
  const phoneHref = `tel:${siteConfig.phone.replace(/\s/g, "")}`;
  const waHref = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(content.whatsappMessage)}`;

  // --- Parent Istanbul money page mapping ---
  const istanbulMoneyPageMap: Record<string, { href: string; label: string }> =
    {
      "kamera-sistemi-kurulumu": {
        href: "/istanbul/kamera-sistemi-kurulumu",
        label: "İstanbul Kamera Sistemi Kurulumu",
      },
      "alarm-sistemi-kurulumu": {
        href: "/istanbul/alarm-sistemi-kurulumu",
        label: "İstanbul Alarm Sistemi",
      },
      "kartli-gecis-sistemi-kurulumu": {
        href: "/istanbul/kartli-gecis-sistemi-kurulumu",
        label: "İstanbul Kartlı Geçiş Sistemi",
      },
    };

  // --- Same district, other services ---
  const sameDistrictLinks = Object.entries(profile.services)
    .filter(([slug]) => slug !== service)
    .map(([slug, svc]) => ({
      href: `/${city}/${district}/${slug}`,
      label: `${profile.name} ${svc.heroTitle.replace(`${profile.name} `, "")}`,
    }));

  // --- Same service, nearby districts ---
  const nearbyLinks = profile.nearbyDistricts
    .filter((nd) => {
      const ndProfile = getDistrictProfile(nd);
      return ndProfile?.services[service];
    })
    .map((nd) => {
      const ndProfile = getDistrictProfile(nd)!;
      return {
        href: `/${city}/${nd}/${service}`,
        label: `${ndProfile.name} ${seoService.name}`,
      };
    });

  const parentLink = istanbulMoneyPageMap[service];
  const districtSupportContent = getIstanbulDistrictSupportContent(
    profile,
    seoDistrict,
    seoService,
  );

  // --- Schema ---
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: content.heroTitle,
    serviceType: seoService.name,
    areaServed: {
      "@type": "AdministrativeArea",
      name: profile.name,
      containedInPlace: { "@type": "City", name: "İstanbul" },
    },
    provider: {
      "@type": "LocalBusiness",
      name: siteConfig.name,
      telephone: siteConfig.phone,
      url: canonicalUrl,
      areaServed: `${profile.name}, İstanbul`,
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    url: canonicalUrl,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    areaServed: {
      "@type": "AdministrativeArea",
      name: profile.name,
      containedInPlace: { "@type": "City", name: "İstanbul" },
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressLocality: siteConfig.city,
      addressCountry: "TR",
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
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
        name: "İstanbul",
        item: `${siteConfig.url}/istanbul`,
      },
      ...(parentLink
        ? [
            {
              "@type": "ListItem",
              position: 3,
              name: parentLink.label,
              item: `${siteConfig.url}${parentLink.href}`,
            },
            {
              "@type": "ListItem",
              position: 4,
              name: content.heroTitle,
              item: canonicalUrl,
            },
          ]
        : [
            {
              "@type": "ListItem",
              position: 3,
              name: content.heroTitle,
              item: canonicalUrl,
            },
          ]),
    ],
  };

  return (
    <main className="bg-white text-slate-950">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-14 md:px-6 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:py-20">
          <div>
            <div className="mb-5 flex flex-wrap gap-2 text-sm font-semibold">
              <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1">
                {profile.name}, İstanbul
              </span>
              <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1">
                Profesyonel kurulum
              </span>
            </div>
            <h1 className="max-w-2xl text-4xl font-black leading-tight md:text-5xl">
              {content.heroTitle}
            </h1>
            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">
              {content.heroIntro}
            </p>
            <HeroCTAButtons
              formLabel={`${profile.name} İçin Teklif Al`}
              phoneHref={phoneHref}
              phoneDisplay={siteConfig.phone}
              waHref={waHref}
              pagePath={pagePath}
            />
          </div>
          <IstanbulServiceQuoteForm
            pagePath={pagePath}
            formSource={`istanbul_${district}_${service.replace(/-/g, "_")}`}
            serviceType={service}
            title={`${profile.locative} Ücretsiz Keşif ve Teklif`}
            subtitle={`${profile.name} bölgesinde ${seoService.name.toLocaleLowerCase("tr-TR")} ihtiyacınızı belirtin.`}
            submitLabel={`${profile.name} İçin Teklif Al`}
            whatsappMessage={content.whatsappMessage}
          />
        </div>
      </section>

      {/* TRUST SIGNALS */}
      <TrustSignals
        items={trustItems}
        bgClass="border-b border-slate-200 bg-white"
      />

      {/* DISTRICT INTRO & COMMERCIAL ANGLE */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="text-center text-3xl font-black md:text-4xl">
            {profile.locative} {seoService.name} Neden Önemli?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-8 text-slate-600">
            {profile.districtIntro}
          </p>
          <div className="mx-auto mt-6 max-w-3xl rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <h3 className="mb-3 text-lg font-bold text-slate-900">
              Bölge Talebi
            </h3>
            <p className="text-sm leading-7 text-slate-600">
              {content.commercialAngle}
            </p>
          </div>
        </div>
      </section>

      {/* NOTABLE AREAS */}
      <section className="bg-slate-50 py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="text-center text-3xl font-black md:text-4xl">
            {profile.locative} Hizmet Verilen Bölgeler
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-8 text-slate-600">
            {profile.name} genelinde aşağıdaki mahalle ve bölgelerde profesyonel{" "}
            {seoService.name.toLocaleLowerCase("tr-TR")} hizmeti sunuyoruz.
          </p>
          <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-2">
            {profile.landmarks.map((area) => (
              <span
                key={area}
                className="rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-700"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE VALUE PROPS */}
      <section className="bg-white py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="text-center text-3xl font-black md:text-4xl">
            {profile.locative} {seoService.name} Nasıl Çalışır?
          </h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Ücretsiz Keşif",
                items: [
                  `${profile.name} bölgesinde yerinde inceleme`,
                  "İhtiyaç analizi ve ekipman planlaması",
                  "Net fiyat teklifi oluşturma",
                ],
              },
              {
                title: "Profesyonel Kurulum",
                items: [
                  "Uzman ekip ile temiz montaj",
                  "Kablolama ve altyapı düzeni",
                  "Aynı gün devreye alma",
                ],
              },
              {
                title: "Kullanıma Hazır Teslim",
                items: [
                  "Mobil uygulama kurulumu",
                  "Temel kullanım eğitimi",
                  "Kurulum sonrası destek",
                ],
              },
            ].map((block) => (
              <div
                key={block.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
              >
                <h3 className="mb-4 text-lg font-bold text-slate-900">
                  {block.title}
                </h3>
                <ul className="space-y-2">
                  {block.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm leading-7 text-slate-600"
                    >
                      <CheckCircle2 className="mt-1 h-4 w-4 shrink-0 text-emerald-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICE FACTORS */}
      {serviceLvl && (
        <section className="bg-slate-50 py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <h2 className="text-center text-3xl font-black md:text-4xl">
              {serviceLvl.priceHeading}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-base leading-8 text-slate-600">
              {serviceLvl.priceSubtitle}
            </p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {serviceLvl.priceFactors.map((f, i) => (
                <div
                  key={f.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <div className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 text-sm font-bold text-white">
                    {i + 1}
                  </div>
                  <h3 className="font-bold text-slate-900">{f.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {f.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SUITABLE FOR */}
      {serviceLvl && (
        <section className="bg-white py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-4 md:px-6">
            <h2 className="text-center text-3xl font-black md:text-4xl">
              {serviceLvl.venueHeading}
            </h2>
            <div className="mt-10 grid gap-6 lg:grid-cols-3">
              {serviceLvl.venueTypes.map((v) => (
                <div
                  key={v.title}
                  className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm"
                >
                  <h3 className="text-xl font-bold">{v.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <IstanbulDistrictSupportSection content={districtSupportContent} />

      {/* FAQ */}
      <FAQSection
        items={content.faqs}
        title={`${content.heroTitle} — Sıkça Sorulan Sorular`}
      />

      {/* INTERNAL LINKS */}
      <section className="border-t border-slate-200 bg-white py-12 md:py-14">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <h2 className="mb-6 text-center text-2xl font-bold">
            İlgili Hizmetlerimiz
          </h2>

          <div className="flex flex-wrap justify-center gap-3">
            {/* Parent Istanbul money page */}
            {parentLink && (
              <Link
                href={parentLink.href}
                className="rounded-xl border border-emerald-200 bg-emerald-50 px-5 py-3 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-100"
              >
                ← {parentLink.label}
              </Link>
            )}

            {/* Same district, different service */}
            {sameDistrictLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
              >
                {link.label}
              </Link>
            ))}

            {/* Same service, nearby districts */}
            {nearbyLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl border border-slate-200 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:bg-slate-100"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <FinalCTA
        title={content.ctaTitle}
        subtitle={content.ctaSubtitle}
        formHref="#teklif-formu"
        formLabel={`${profile.name} İçin Teklif Al`}
        whatsappMessage={content.whatsappMessage}
      />
    </main>
  );
}
