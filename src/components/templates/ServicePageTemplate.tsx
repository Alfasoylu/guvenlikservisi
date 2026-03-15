import Link from "next/link";
import {
  CheckCircle,
  ArrowRight,
  MapPin,
  Phone,
  ShieldCheck,
  BadgeCheck,
  Clock3,
} from "lucide-react";
import ProcessSection from "@/components/sections/ProcessSection";
import FAQSection, { FAQItem } from "@/components/sections/FAQSection";
import CTASection, {
  type CTASectionContent,
} from "@/components/sections/CTASection";
import TrustSignals from "@/components/sections/TrustSignals";
import FinalCTA from "@/components/sections/FinalCTA";
import TargetAudienceSection, {
  type TargetAudienceItem,
} from "@/components/sections/TargetAudienceSection";
import CommonProblemsSection, {
  type CommonProblemItem,
} from "@/components/sections/CommonProblemsSection";
import AreaSolutionsSection, {
  type AreaSolutionItem,
} from "@/components/sections/AreaSolutionsSection";
import SolutionTiersSection, {
  type SolutionTier,
} from "@/components/sections/SolutionTiersSection";
import WhyIntegratedSection, {
  type WhyIntegratedItem,
} from "@/components/sections/WhyIntegratedSection";
import DiscoveryProcessSection, {
  type DiscoveryStep,
} from "@/components/sections/DiscoveryProcessSection";
import MidPageCta from "@/components/sections/MidPageCta";
import TrustBlocksSection, {
  type TrustBlockItem,
} from "@/components/sections/TrustBlocksSection";
import InternalLinksSection, {
  type InternalLinkItem,
} from "@/components/sections/InternalLinksSection";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site-config";
import { cities } from "@/data/cities";
import {
  generateLocalBusinessSchema,
  generateServiceSchema,
  generateBreadcrumbSchema,
  generateAggregateRatingSchema,
} from "@/lib/schema";

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

interface DecisionBlock {
  title: string;
  description?: string;
  items: string[];
}

interface ScopeDetails {
  title?: string;
  description?: string;
  includedTitle?: string;
  includedItems: string[];
  additionalTitle?: string;
  additionalItems?: string[];
}

interface PricingFactors {
  title?: string;
  description?: string;
  items: string[];
}

interface VenueType {
  title: string;
  description: string;
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
  ctaContent?: CTASectionContent;
  heroBadge?: string;
  heroTrustItems?: string[];
  heroAdvantages?: { title: string; text: string }[];
  heroPanel?: {
    title: string;
    body: string[];
  };
  authorityTitle?: string;
  authorityBody?: string[];
  authorityNote?: {
    title: string;
    body: string;
  };
  decisionBlocks?: DecisionBlock[];
  scopeDetails?: ScopeDetails;
  pricingFactors?: PricingFactors;
  venueTypes?: VenueType[];
  finalCtaTitle?: string;
  finalCtaSubtitle?: string;
  whatsappMessage?: string;
  heroCtaLabel?: string;
  authorityBeforeFaq?: {
    title: string;
    description?: string;
    links: {
      href: string;
      label: string;
    }[];
  };
  authorityAfterFaq?: {
    title: string;
    description?: string;
    links: {
      href: string;
      label: string;
    }[];
  };
  /* ──── Money-page segment sections ──── */
  targetAudience?: {
    title?: string;
    subtitle?: string;
    items: TargetAudienceItem[];
  };
  commonProblems?: {
    title?: string;
    subtitle?: string;
    items: CommonProblemItem[];
  };
  areaSolutions?: {
    title?: string;
    subtitle?: string;
    items: AreaSolutionItem[];
    image?: { src: string; alt: string };
  };
  solutionTiers?: {
    title?: string;
    subtitle?: string;
    tiers: SolutionTier[];
    ctaLabel?: string;
  };
  whyIntegrated?: {
    title?: string;
    subtitle?: string;
    items: WhyIntegratedItem[];
  };
  discoveryProcess?: {
    title?: string;
    subtitle?: string;
    steps?: DiscoveryStep[];
  };
  midPageCta?: {
    title: string;
    subtitle: string;
    ctaLabel?: string;
  };
  trustBlocks?: {
    title?: string;
    subtitle?: string;
    items: TrustBlockItem[];
  };
  internalLinks?: {
    title?: string;
    subtitle?: string;
    links: InternalLinkItem[];
  };
}

interface ServicePageTemplateProps {
  data: ServicePageData;
}

const defaultTrustItems = [
  "Ücretsiz keşif ve ihtiyaç analizi",
  "Doğru ürün seçimi ve sistem planlaması",
  "Anahtar teslim montaj ve devreye alma",
  "Mobil izleme ve temel kullanıcı kurulumu",
];

const defaultAdvantages = [
  {
    title: "Hızlı teklif",
    text: "Temel ihtiyacınızı öğrendikten sonra en kısa sürede uygun çözüm yapısını çıkarıyoruz.",
  },
  {
    title: "Doğru sistem",
    text: "Gereksiz ürün satmak yerine alanınıza gerçekten uygun sistem öneriyoruz.",
  },
];

export default function ServicePageTemplate({
  data,
}: ServicePageTemplateProps) {
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

  const trustItems = data.heroTrustItems || defaultTrustItems;
  const advantages = data.heroAdvantages || defaultAdvantages;
  const heroBadge = data.heroBadge || "Profesyonel kurulum • Hızlı teklif";
  const authorityTitle =
    data.authorityTitle || "Neden Profesyonel Kurulum Önemlidir?";
  const authorityBody = data.authorityBody || [
    "Yanlış keşif, eksik kapsama, kötü kablolama ve yanlış cihaz seçimi yüzünden birçok sistem ilk bakışta çalışıyor gibi görünür ama olay anında yetersiz kalır.",
    "Profesyonel kurulumda amaç sadece cihazı monte etmek değil, alanı gerçekten güvenli hale getirmektir. Bu yüzden planlama, kurulum kadar kritiktir.",
    "Kör noktaları azaltan, kayıt süresini doğru planlayan ve mobil izlemeyi düzgün kuran sistemler uzun vadede çok daha az sorun çıkarır.",
  ];
  const authorityNote = data.authorityNote || {
    title: "Hızlı teklif almak için",
    body: "Bize şehir, mekan tipi ve temel ihtiyacınızı iletin. En kısa sürede size uygun sistem yapısını netleştirelim.",
  };
  const heroPanel = data.heroPanel;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ratingSchema) }}
      />

      <div className="border-b border-gray-100 bg-surface py-3">
        <Container>
          <nav className="flex items-center gap-2 text-sm text-text-light">
            <Link href="/" className="hover:text-primary">
              Ana Sayfa
            </Link>
            <span>/</span>
            <span className="font-medium text-primary">{data.title}</span>
          </nav>
        </Container>
      </div>

      <section className="bg-gradient-to-br from-primary to-[#1A3A5C] py-16 text-white md:py-24">
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div className="max-w-3xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-white/90">
                <ShieldCheck size={14} />
                {heroBadge}
              </div>

              <h1 className="mb-5 text-3xl font-bold leading-tight sm:text-4xl md:text-[2.75rem]">
                {data.title}
              </h1>

              <p className="mb-8 text-lg leading-relaxed text-white/80">
                {data.subtitle}
              </p>

              <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {trustItems.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm leading-snug text-white/90"
                  >
                    <CheckCircle size={16} className="shrink-0 text-accent" />
                    {item}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <a
                  href="#quote-form"
                  className="inline-flex items-center gap-2 rounded-xl bg-cta px-8 py-4 font-bold text-white shadow-lg transition-colors hover:bg-ctaHover"
                >
                  {data.heroCtaLabel || "Ücretsiz Teklif Al"}
                </a>

                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-4 font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <Phone size={18} />
                  {siteConfig.phone}
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              {heroPanel ? (
                <div className="mb-5 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="mb-3 flex items-center gap-2 text-white">
                    <BadgeCheck size={18} className="text-accent" />
                    <span className="font-semibold">{heroPanel.title}</span>
                  </div>
                  <ul className="space-y-3">
                    {heroPanel.body.map((point, index) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-sm leading-6 text-white/85"
                      >
                        {index === 0 ? (
                          <Clock3
                            size={18}
                            className="mt-0.5 shrink-0 text-accent"
                          />
                        ) : (
                          <BadgeCheck
                            size={18}
                            className="mt-0.5 shrink-0 text-accent"
                          />
                        )}
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <div className="mb-5 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <div className="mb-3 flex items-center gap-2 text-white">
                    <BadgeCheck size={18} className="text-accent" />
                    <span className="font-semibold">
                      Bu hizmette odak noktamız
                    </span>
                  </div>
                  <div className="space-y-4 text-sm leading-7 text-white/80">
                    <p>
                      Doğru sistem seçimi, temiz montaj ve gerçek ihtiyaca göre
                      planlama. Amacımız ürün satmak değil, çalışan ve sorunsuz
                      kullanılan sistem kurmak.
                    </p>
                    <p>
                      Kamera açısı, kayıt süresi, uzaktan erişim, altyapı ve
                      kullanıcı kolaylığı birlikte düşünülerek çözüm üretiyoruz.
                    </p>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {advantages.map((item, index) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <div className="mb-2 flex items-center gap-2 text-white">
                      {index === 0 ? (
                        <Clock3 size={18} className="text-accent" />
                      ) : (
                        <BadgeCheck size={18} className="text-accent" />
                      )}
                      <span className="font-semibold">{item.title}</span>
                    </div>
                    <p className="text-sm leading-6 text-white/75">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      <TrustSignals />

      {/* ── Target Audience ── */}
      {data.targetAudience && (
        <TargetAudienceSection
          title={data.targetAudience.title}
          subtitle={data.targetAudience.subtitle}
          items={data.targetAudience.items}
        />
      )}

      {/* ── Common Problems ── */}
      {data.commonProblems && (
        <CommonProblemsSection
          title={data.commonProblems.title}
          subtitle={data.commonProblems.subtitle}
          items={data.commonProblems.items}
        />
      )}

      <section className="bg-white py-16 md:py-20">
        <Container>
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-5 text-2xl font-bold text-primary">
                Hizmet Detayı
              </h2>

              <div className="max-w-none text-sm leading-7 text-text-light">
                {data.description.split("\n").map((para, i) => (
                  <p key={i} className="mb-4">
                    {para}
                  </p>
                ))}
              </div>

              <ul className="mt-8 space-y-3">
                {data.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle
                      size={18}
                      className="mt-0.5 shrink-0 text-cta"
                    />
                    <span className="text-sm leading-6 text-gray-700">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-gray-100 bg-surface p-7 shadow-sm">
              <h2 className="mb-5 text-2xl font-bold text-primary">
                {authorityTitle}
              </h2>

              <div className="space-y-4 text-sm leading-7 text-text-light">
                {authorityBody.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-accent/15 bg-white p-5">
                <div className="mb-2 text-sm font-semibold text-primary">
                  {authorityNote.title}
                </div>
                <p className="text-sm leading-6 text-text-light">
                  {authorityNote.body}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Area Solutions ── */}
      {data.areaSolutions && (
        <AreaSolutionsSection
          title={data.areaSolutions.title}
          subtitle={data.areaSolutions.subtitle}
          items={data.areaSolutions.items}
          image={data.areaSolutions.image}
        />
      )}

      {/* ── Mid-page CTA ── */}
      {data.midPageCta && (
        <MidPageCta
          title={data.midPageCta.title}
          subtitle={data.midPageCta.subtitle}
          ctaLabel={data.midPageCta.ctaLabel}
          whatsappMessage={data.whatsappMessage}
        />
      )}

      {/* ── Solution Tiers ── */}
      {data.solutionTiers && (
        <SolutionTiersSection
          title={data.solutionTiers.title}
          subtitle={data.solutionTiers.subtitle}
          tiers={data.solutionTiers.tiers}
          ctaLabel={data.solutionTiers.ctaLabel}
        />
      )}

      {/* ── Why Integrated ── */}
      {data.whyIntegrated && (
        <WhyIntegratedSection
          title={data.whyIntegrated.title}
          subtitle={data.whyIntegrated.subtitle}
          items={data.whyIntegrated.items}
        />
      )}

      {/* ── Discovery Process ── */}
      {data.discoveryProcess && (
        <DiscoveryProcessSection
          title={data.discoveryProcess.title}
          subtitle={data.discoveryProcess.subtitle}
          steps={data.discoveryProcess.steps ?? []}
        />
      )}

      {data.decisionBlocks && data.decisionBlocks.length > 0 && (
        <section className="bg-surface py-16 md:py-20">
          <Container>
            <div className="space-y-10">
              {data.decisionBlocks.map((block, i) => (
                <div key={i} className="max-w-5xl">
                  <h2 className="mb-4 text-2xl font-bold text-primary">
                    {block.title}
                  </h2>
                  {block.description && (
                    <p className="mb-6 max-w-3xl text-sm leading-7 text-text-light">
                      {block.description}
                    </p>
                  )}
                  <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
                    <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      {block.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-3 rounded-2xl bg-surface p-4"
                        >
                          <CheckCircle
                            size={18}
                            className="mt-0.5 shrink-0 text-cta"
                          />
                          <span className="text-sm leading-6 text-gray-700">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {data.scopeDetails && (
        <section className="bg-white py-16 md:py-20">
          <Container>
            <div className="max-w-5xl">
              <h2 className="mb-4 text-2xl font-bold text-primary">
                {data.scopeDetails.title ||
                  "Neler Dahil, Neler Ayrıca Değerlendirilir?"}
              </h2>
              {data.scopeDetails.description && (
                <p className="max-w-3xl text-sm leading-7 text-text-light">
                  {data.scopeDetails.description}
                </p>
              )}
            </div>
            <div
              className={`mt-8 grid grid-cols-1 gap-6 ${data.scopeDetails.additionalItems?.length ? "lg:grid-cols-2" : "max-w-3xl"}`}
            >
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-lg font-bold text-primary">
                  {data.scopeDetails.includedTitle || "Dahil olan başlıklar"}
                </h3>
                <ul className="space-y-3">
                  {data.scopeDetails.includedItems.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle
                        size={18}
                        className="mt-0.5 shrink-0 text-cta"
                      />
                      <span className="text-sm leading-6 text-gray-700">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
              {data.scopeDetails.additionalItems &&
                data.scopeDetails.additionalItems.length > 0 && (
                  <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                    <h3 className="mb-4 text-lg font-bold text-primary">
                      {data.scopeDetails.additionalTitle ||
                        "Ayrıca değerlendirilen başlıklar"}
                    </h3>
                    <ul className="space-y-3">
                      {data.scopeDetails.additionalItems.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle
                            size={18}
                            className="mt-0.5 shrink-0 text-accent"
                          />
                          <span className="text-sm leading-6 text-gray-700">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
            </div>
          </Container>
        </section>
      )}

      {data.pricingFactors && (
        <section className="bg-surface py-16 md:py-20">
          <Container>
            <div className="mb-8 max-w-5xl">
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-warning/10 px-4 py-1.5 text-xs font-semibold text-warning">
                Fiyatı etkileyen {data.pricingFactors.items.length} ana faktör
              </div>
              <h2 className="mb-4 text-2xl font-bold text-primary">
                {data.pricingFactors.title || "Fiyatı Etkileyen 5 Ana Faktör"}
              </h2>
              {data.pricingFactors.description && (
                <p className="max-w-3xl text-sm leading-7 text-text-light">
                  {data.pricingFactors.description}
                </p>
              )}
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
              {data.pricingFactors.items.map((item, i) => (
                <div
                  key={item}
                  className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="text-sm leading-6 text-gray-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {data.venueTypes && data.venueTypes.length > 0 && (
        <section className="bg-white py-16 md:py-20">
          <Container>
            <div className="mb-10 max-w-5xl">
              <h2 className="mb-4 text-2xl font-bold text-primary">
                Hangi Mekanlar İçin Uygun?
              </h2>
              <p className="max-w-3xl text-sm leading-7 text-text-light">
                Bu hizmet farklı mekan türlerine göre özelleştirilerek
                uygulanır. İhtiyacınıza en uygun senaryoyu aşağıda
                bulabilirsiniz.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {data.venueTypes.map((venue) => (
                <div
                  key={venue.title}
                  className="rounded-2xl border border-gray-200 bg-surface p-5 transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <h3 className="mb-2 text-base font-bold text-primary">
                    {venue.title}
                  </h3>
                  <p className="text-sm leading-6 text-text-light">
                    {venue.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {data.segments.length > 0 && (
        <section className="border-t border-gray-100 bg-surface py-16 md:py-20">
          <Container>
            <div className="mb-10 max-w-3xl">
              <h2 className="mb-4 text-2xl font-bold text-primary">
                Alt Hizmet ve Uygulama Alanları
              </h2>
              <p className="text-sm leading-7 text-text-light">
                İhtiyaçlar kullanım alanına göre değişir. Aşağıdaki
                bağlantılardan ilgili senaryoya daha net bakabilirsiniz.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {data.segments.map((segment, i) => (
                <div
                  key={i}
                  className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <h3 className="mb-3 text-lg font-bold text-primary">
                    {segment.title}
                  </h3>
                  <p className="mb-5 text-sm leading-7 text-text-light">
                    {segment.content}
                  </p>
                  <Link
                    href={segment.href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-all group-hover:gap-3"
                  >
                    Detaylı bilgi
                    <ArrowRight size={14} />
                  </Link>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* ── Trust Blocks ── */}
      {data.trustBlocks && (
        <TrustBlocksSection
          title={data.trustBlocks.title}
          subtitle={data.trustBlocks.subtitle}
          items={data.trustBlocks.items}
        />
      )}

      {/* ── Internal Links ── */}
      {data.internalLinks && (
        <InternalLinksSection
          title={data.internalLinks.title}
          subtitle={data.internalLinks.subtitle}
          links={data.internalLinks.links}
        />
      )}

      {!data.discoveryProcess && <ProcessSection />}

      <section className="bg-white py-16 md:py-20">
        <Container>
          <h2 className="mb-4 text-center text-2xl font-bold text-primary">
            Hizmet Verdiğimiz Şehirler
          </h2>

          <p className="mx-auto mb-10 max-w-3xl text-center text-sm leading-7 text-text-light">
            Şu anda aktif olarak {siteConfig.serviceCityCount} şehirde hizmet
            veriyoruz. Gerçekten hizmet verdiğimiz şehirleri gösteriyoruz; boş
            vaat vermiyoruz.
          </p>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/${city.slug}`}
                className="group flex flex-col items-center gap-2 rounded-xl bg-surface p-4 text-center transition-colors hover:bg-accent/10"
              >
                <MapPin size={18} className="text-accent" />
                <span className="text-sm font-semibold text-primary group-hover:text-accent">
                  {city.name}
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {data.relatedPages && data.relatedPages.length > 0 && (
        <section className="bg-surface py-16">
          <Container>
            <h2 className="mb-8 text-2xl font-bold text-primary">
              İlgili Hizmet Sayfaları
            </h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {data.relatedPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <h3 className="mb-2 text-lg font-bold text-primary">
                    {page.title}
                  </h3>
                  <p className="mb-4 text-sm leading-7 text-text-light">
                    {page.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
                    Sayfaya git
                    <ArrowRight size={14} />
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {data.blogPosts && data.blogPosts.length > 0 && (
        <section className="bg-white py-16">
          <Container>
            <h2 className="mb-8 text-2xl font-bold text-primary">
              Faydalı İçerikler
            </h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {data.blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="rounded-2xl border border-gray-200 bg-surface p-6 transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <h3 className="mb-3 text-lg font-bold text-primary">
                    {post.title}
                  </h3>
                  <p className="mb-4 text-sm leading-7 text-text-light">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
                    Yazıyı oku
                    <ArrowRight size={14} />
                  </span>
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      {data.authorityBeforeFaq && data.authorityBeforeFaq.links.length > 0 && (
        <section className="bg-white py-12">
          <Container>
            <h2 className="text-2xl font-bold text-primary">
              {data.authorityBeforeFaq.title}
            </h2>
            {data.authorityBeforeFaq.description ? (
              <p className="mt-3 max-w-3xl text-sm leading-7 text-text-light">
                {data.authorityBeforeFaq.description}
              </p>
            ) : null}
            <div className="mt-5 flex flex-wrap gap-3">
              {data.authorityBeforeFaq.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-xl border border-gray-200 bg-surface px-4 py-2 text-sm font-semibold text-primary transition hover:bg-accent/10"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <FAQSection items={data.faq} />

      {data.authorityAfterFaq && data.authorityAfterFaq.links.length > 0 && (
        <section className="bg-surface py-12">
          <Container>
            <h2 className="text-2xl font-bold text-primary">
              {data.authorityAfterFaq.title}
            </h2>
            {data.authorityAfterFaq.description ? (
              <p className="mt-3 max-w-3xl text-sm leading-7 text-text-light">
                {data.authorityAfterFaq.description}
              </p>
            ) : null}
            <div className="mt-5 flex flex-wrap gap-3">
              {data.authorityAfterFaq.links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-semibold text-primary transition hover:bg-accent/10"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CTASection
        content={data.ctaContent}
        title={data.ctaTitle}
        subtitle={data.ctaSubtitle}
        defaultService={data.defaultService}
      />

      <FinalCTA
        title={data.finalCtaTitle}
        subtitle={data.finalCtaSubtitle}
        whatsappMessage={data.whatsappMessage}
      />
    </>
  );
}
