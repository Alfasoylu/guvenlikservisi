import Link from "next/link";
import { CheckCircle, ArrowRight, MapPin } from "lucide-react";
import ProcessSection from "@/components/sections/ProcessSection";
import FAQSection, { FAQItem } from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site-config";
import { generateLocalBusinessSchema, generateServiceSchema, generateBreadcrumbSchema, generateAggregateRatingSchema } from "@/lib/schema";

interface RelatedPage {
  title: string;
  href: string;
  description: string;
}

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
}

export interface ServicePageData {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  segments: {
    title: string;
    content: string;
    href: string;
  }[];
  faq: FAQItem[];
  relatedPages?: RelatedPage[];
  blogPosts?: BlogPost[];
  defaultService?: string;
  imagePlaceholder?: string;
  ctaTitle?: string;
  ctaSubtitle?: string;
}

interface ServicePageTemplateProps {
  data: ServicePageData;
}

export default function ServicePageTemplate({ data }: ServicePageTemplateProps) {
  const lbSchema = generateLocalBusinessSchema();
  const serviceSchema = generateServiceSchema({
    name: data.title,
    description: data.subtitle,
    url: `/${data.slug}`,
  });
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Ana Sayfa", url: "/" },
    { name: data.title, url: `/${data.slug}` },
  ]);
  const ratingSchema = generateAggregateRatingSchema();

  return (
    <>
      {/* Schema Markup */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(lbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ratingSchema) }} />

      {/* Breadcrumb */}
      <div className="bg-surface border-b border-gray-100 py-3">
        <Container>
          <nav className="flex items-center gap-2 text-sm text-text-light">
            <Link href="/" className="hover:text-primary">Ana Sayfa</Link>
            <span>/</span>
            <span className="text-primary font-medium">{data.title}</span>
          </nav>
        </Container>
      </div>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary to-[#1A3A5C] text-white py-16 md:py-20">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-bold mb-4">{data.title}</h1>
            <p className="text-white/80 text-lg mb-6 leading-relaxed">{data.subtitle}</p>
            <a
              href="#quote-form"
              className="inline-flex items-center gap-2 bg-cta hover:bg-cta-hover text-white font-bold px-8 py-4 rounded-xl transition-colors shadow-lg"
            >
              Ücretsiz Teklif Al
            </a>
          </div>
        </Container>
      </section>

      {/* Hizmet Detayı */}
      <section className="py-16 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl font-bold text-primary mb-4">Hizmetimiz</h2>
              <div className="prose prose-gray max-w-none text-text-light text-sm leading-relaxed">
                {data.description.split("\n").map((para, i) => (
                  <p key={i} className="mb-3">{para}</p>
                ))}
              </div>
              <ul className="mt-6 space-y-3">
                {data.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-cta flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center border-2 border-dashed border-accent/30">
              <div className="text-center text-accent/60">
                <div className="text-5xl mb-3">📷</div>
                <p className="text-sm font-medium">{data.imagePlaceholder || "Hizmet Görseli"}</p>
                <p className="text-xs mt-1 text-gray-400">Kullanıcı fotoğraf ekleyecek</p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Segment Alt Bölümleri */}
      {data.segments.map((segment, i) => (
        <section key={i} className={`py-12 ${i % 2 === 0 ? "bg-surface" : "bg-white"}`}>
          <Container>
            <h2 className="text-xl sm:text-2xl font-bold text-primary mb-4">{segment.title}</h2>
            <p className="text-text-light text-sm leading-relaxed mb-4 max-w-3xl">{segment.content}</p>
            <Link
              href={segment.href}
              className="inline-flex items-center gap-2 text-accent font-semibold text-sm hover:gap-3 transition-all"
            >
              Detaylı bilgi <ArrowRight size={14} />
            </Link>
          </Container>
        </section>
      ))}

      {/* Süreç */}
      <ProcessSection />

      {/* Hizmet Bölgeleri */}
      <section className="py-16 bg-white">
        <Container>
          <h2 className="text-2xl font-bold text-primary text-center mb-8">
            Hizmet Verdiğimiz Bölgeler
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {siteConfig.cities.map((city) => (
              <Link
                key={city.slug}
                href={`/${city.slug}-guvenlik-sistemi-kurulumu`}
                className="flex flex-col items-center gap-2 p-4 bg-surface rounded-xl hover:bg-accent/10 transition-colors text-center group"
              >
                <MapPin size={18} className="text-accent" />
                <span className="font-semibold text-primary text-sm group-hover:text-accent">{city.name}</span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <FAQSection items={data.faq} />

      {/* CTA + Form */}
      <CTASection
        title={data.ctaTitle}
        subtitle={data.ctaSubtitle}
        defaultService={data.defaultService}
      />
    </>
  );
}
