import Link from "next/link";
import {
  ArrowRight,
  BadgeCheck,
  CheckCircle,
  Clock3,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import CTASection, { type CTASectionContent } from "@/components/sections/CTASection";
import FAQSection, { type FAQItem } from "@/components/sections/FAQSection";
import ProcessSection from "@/components/sections/ProcessSection";
import { Container } from "@/components/ui/Container";
import { cities } from "@/data/cities";
import { siteConfig } from "@/data/site-config";
import {
  generateBreadcrumbSchema,
  generateLocalBusinessSchema,
  generateServiceSchema,
} from "@/lib/schema";

interface RelatedPage {
  title: string;
  href: string;
  description: string;
  ctaLabel?: string;
}

interface ContextualLink {
  href: string;
  label: string;
  description?: string;
}

interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

type ServiceHubContentBlockType =
  | "service-fit"
  | "scope-details"
  | "pricing-factors"
  | "takeover-process"
  | "prep-checklist"
  | "issue-triage";

interface BaseServiceHubContentBlock {
  type: ServiceHubContentBlockType;
  title?: string;
  description?: string;
}

interface ServiceHubListContentBlock extends BaseServiceHubContentBlock {
  type: "service-fit" | "pricing-factors" | "takeover-process" | "prep-checklist";
  items: string[];
}

interface ServiceHubScopeContentBlock extends BaseServiceHubContentBlock {
  type: "scope-details";
  includedTitle?: string;
  includedItems: string[];
  additionalTitle?: string;
  additionalItems?: string[];
}

interface ServiceHubIssueTriageBlock extends BaseServiceHubContentBlock {
  type: "issue-triage";
  items: {
    title: string;
    description: string;
  }[];
}

export type ServiceHubContentBlock =
  | ServiceHubListContentBlock
  | ServiceHubScopeContentBlock
  | ServiceHubIssueTriageBlock;

export interface ServiceHubPageData {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  heroPrimaryCtaLabel?: string;
  heroPanel?: {
    title: string;
    intro?: string;
    points: string[];
  };
  detailSectionTitle?: string;
  heroBadge: string;
  heroHighlights: string[];
  featureSectionTitle?: string;
  features: string[];
  segmentsSectionTitle?: string;
  segmentsSectionDescription?: string;
  segments: {
    title: string;
    content: string;
    href: string;
  }[];
  authoritySection: {
    title: string;
    paragraphs: string[];
    noteTitle: string;
    noteText: string;
  };
  faq: FAQItem[];
  processSection?: {
    title: string;
    steps: ProcessStep[];
  };
  contentBlocks?: ServiceHubContentBlock[];
  sectionOrder?: Array<"segments" | "process" | "contentBlocks" | "cityLinks" | "relatedPages" | "faq">;
  relatedPages?: RelatedPage[];
  relatedPagesTitle?: string;
  relatedPagesDescription?: string;
  defaultService?: string;
  ctaContent?: CTASectionContent;
  cityLinksSection?: {
    title: string;
    description?: string;
    links: ContextualLink[];
  };
}

interface ServiceHubTemplateProps {
  data: ServiceHubPageData;
}

const contentBlockTitles: Record<ServiceHubContentBlockType, string> = {
  "service-fit": "Hangi Durumda Bu Hizmet Doğru Seçimdir?",
  "scope-details": "Neler Dahil, Neler Ayrıca Değerlendirilir?",
  "pricing-factors": "Bu Hizmette Fiyatı ve Süreyi Ne Etkiler?",
  "takeover-process": "Mevcut Sistemi Devralırken Nasıl İlerliyoruz?",
  "prep-checklist": "İlk Görüşmede Hangi Bilgileri Hazırlarsanız Süreç Hızlanır?",
  "issue-triage": "Arıza Türüne Göre Nasıl İlerliyoruz?",
};

const contentBlockBackgrounds: Record<ServiceHubContentBlockType, string> = {
  "service-fit": "bg-surface",
  "scope-details": "bg-white",
  "pricing-factors": "bg-surface",
  "takeover-process": "bg-white",
  "prep-checklist": "bg-surface",
  "issue-triage": "bg-white",
};

function renderContentBlock(block: ServiceHubContentBlock) {
  const title = block.title || contentBlockTitles[block.type];
  const sectionClass = contentBlockBackgrounds[block.type];

  if (block.type === "issue-triage") {
    return (
      <section key={`${block.type}-${title}`} className={`py-16 ${sectionClass}`}>
        <Container>
          <div className="max-w-5xl">
            <h2 className="mb-4 text-2xl font-bold text-primary">{title}</h2>
            {block.description ? (
              <p className="max-w-3xl text-sm leading-7 text-text-light">{block.description}</p>
            ) : null}
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            {block.items.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <h3 className="mb-3 text-lg font-bold text-primary">{item.title}</h3>
                <p className="text-sm leading-7 text-text-light">{item.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    );
  }

  if (block.type === "scope-details") {
    const hasAdditionalItems = Boolean(block.additionalItems?.length);

    return (
      <section key={`${block.type}-${title}`} className={`py-16 ${sectionClass}`}>
        <Container>
          <div className="max-w-5xl">
            <h2 className="mb-4 text-2xl font-bold text-primary">{title}</h2>
            {block.description ? (
              <p className="max-w-3xl text-sm leading-7 text-text-light">{block.description}</p>
            ) : null}
          </div>

          <div
            className={`mt-8 grid grid-cols-1 gap-6 ${
              hasAdditionalItems ? "lg:grid-cols-2" : "max-w-3xl"
            }`}
          >
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-lg font-bold text-primary">
                {block.includedTitle || "Dahil olan başlıklar"}
              </h3>
              <ul className="space-y-3">
                {block.includedItems.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle size={18} className="mt-0.5 shrink-0 text-cta" />
                    <span className="text-sm leading-6 text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {hasAdditionalItems ? (
              <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                <h3 className="mb-4 text-lg font-bold text-primary">
                  {block.additionalTitle || "Ayrıca değerlendirilen başlıklar"}
                </h3>
                <ul className="space-y-3">
                  {block.additionalItems?.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle size={18} className="mt-0.5 shrink-0 text-accent" />
                      <span className="text-sm leading-6 text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section key={`${block.type}-${title}`} className={`py-16 ${sectionClass}`}>
      <Container>
        <div className="max-w-5xl">
          <h2 className="mb-4 text-2xl font-bold text-primary">{title}</h2>
          {block.description ? (
            <p className="max-w-3xl text-sm leading-7 text-text-light">{block.description}</p>
          ) : null}
        </div>

        <div className="mt-8 rounded-3xl border border-gray-200 bg-white p-6">
          <ul className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {block.items.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-2xl bg-surface p-4">
                <CheckCircle size={18} className="mt-0.5 shrink-0 text-cta" />
                <span className="text-sm leading-6 text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default function ServiceHubTemplate({ data }: ServiceHubTemplateProps) {
  const heroPanel = data.heroPanel || {
    title: "Bu hizmette odak noktamız",
    intro: undefined,
    points: data.authoritySection.paragraphs.slice(0, 2),
  };
  const sectionOrder =
    data.sectionOrder || ["segments", "process", "contentBlocks", "cityLinks", "relatedPages", "faq"];

  const localBusinessSchema = generateLocalBusinessSchema();
  const serviceSchema = generateServiceSchema({
    name: data.title,
    description: data.subtitle,
    url: `/${data.slug}`,
  });
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Ana Sayfa", url: "/" },
    { name: data.title, url: `/${data.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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

      <section className="bg-gradient-to-br from-primary to-[#1A3A5C] py-16 text-white md:py-20">
        <Container>
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/90">
                <ShieldCheck size={14} />
                {data.heroBadge}
              </div>

              <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl">
                {data.title}
              </h1>

              <p className="mb-6 text-lg leading-relaxed text-white/80">{data.subtitle}</p>

              <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {data.heroHighlights.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/90"
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
                  {data.heroPrimaryCtaLabel || "Ücretsiz Teklif Al"}
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
              <div className="mb-5 rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="mb-3 flex items-center gap-2 text-white">
                  <BadgeCheck size={18} className="text-accent" />
                  <span className="font-semibold">{heroPanel.title}</span>
                </div>

                {heroPanel.intro ? (
                  <p className="mb-4 text-sm leading-7 text-white/80">{heroPanel.intro}</p>
                ) : null}

                <ul className="space-y-3">
                  {heroPanel.points.map((point, index) => (
                    <li key={point} className="flex items-start gap-3 text-sm leading-6 text-white/85">
                      {index === 0 ? (
                        <Clock3 size={18} className="mt-0.5 shrink-0 text-accent" />
                      ) : (
                        <BadgeCheck size={18} className="mt-0.5 shrink-0 text-accent" />
                      )}
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16">
        <Container>
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-4 text-2xl font-bold text-primary">
                {data.detailSectionTitle || "Hizmet Detayı"}
              </h2>

              <div className="max-w-none text-sm leading-7 text-text-light">
                {data.description.split("\n").map((paragraph, index) => (
                  <p key={index} className="mb-4">
                    {paragraph}
                  </p>
                ))}
              </div>

              <h3 className="mt-8 text-lg font-bold text-primary">
                {data.featureSectionTitle || "Hangi Sorunları Çözer"}
              </h3>

              <ul className="mt-4 space-y-3">
                {data.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle size={18} className="mt-0.5 shrink-0 text-cta" />
                    <span className="text-sm leading-6 text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-gray-200 bg-surface p-6">
              <h2 className="mb-4 text-2xl font-bold text-primary">
                {data.authoritySection.title}
              </h2>

              <div className="space-y-4 text-sm leading-7 text-text-light">
                {data.authoritySection.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-accent/15 bg-white p-5">
                <div className="mb-2 text-sm font-semibold text-primary">
                  {data.authoritySection.noteTitle}
                </div>
                <p className="text-sm leading-6 text-text-light">
                  {data.authoritySection.noteText}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {sectionOrder.map((sectionKey) => {
        if (sectionKey === "segments") {
          if (data.segments.length === 0) return null;

          return (
            <section key="segments" className="bg-surface py-16">
              <Container>
                <div className="mb-10 max-w-3xl">
                  <h2 className="mb-4 text-2xl font-bold text-primary">
                    {data.segmentsSectionTitle || "Bu Hizmet Kimler İçin Daha Uygun?"}
                  </h2>
                  <p className="text-sm leading-7 text-text-light">
                    {data.segmentsSectionDescription ||
                      "Hizmetin kapsamı kullanım alanına, operasyon riskine ve karar verici beklentisine göre değişir. Aşağıdaki sayfalardan ilgili senaryoya daha hızlı geçebilirsiniz."}
                  </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  {data.segments.map((segment) => (
                    <div
                      key={segment.title}
                      className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
                    >
                      <h3 className="mb-3 text-lg font-bold text-primary">{segment.title}</h3>
                      <p className="mb-4 text-sm leading-7 text-text-light">{segment.content}</p>
                      <Link
                        href={segment.href}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition-all hover:gap-3"
                      >
                        Detaylı bilgi
                        <ArrowRight size={14} />
                      </Link>
                    </div>
                  ))}
                </div>
              </Container>
            </section>
          );
        }

        if (sectionKey === "process") {
          return data.processSection ? (
            <ProcessSection
              key="process"
              title={data.processSection.title}
              steps={data.processSection.steps}
              bgClass="bg-surface"
            />
          ) : (
            <ProcessSection key="process" />
          );
        }

        if (sectionKey === "contentBlocks") {
          return data.contentBlocks?.map((block) => renderContentBlock(block)) || null;
        }

        if (sectionKey === "cityLinks") {
          if (data.cityLinksSection) {
            return (
              <section key="cityLinks" className="bg-white py-16">
                <Container>
                  <div className="max-w-3xl">
                    <h2 className="mb-4 text-2xl font-bold text-primary">
                      {data.cityLinksSection.title}
                    </h2>
                    {data.cityLinksSection.description ? (
                      <p className="text-sm leading-7 text-text-light">
                        {data.cityLinksSection.description}
                      </p>
                    ) : null}
                  </div>

                  <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
                    {data.cityLinksSection.links.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="rounded-2xl border border-gray-200 bg-surface p-6 transition hover:-translate-y-0.5 hover:shadow-md"
                      >
                        <div className="mb-3 flex items-center gap-2 text-accent">
                          <MapPin size={16} />
                          <span className="text-xs font-semibold uppercase tracking-[0.16em]">
                            Şehir hizmet sayfası
                          </span>
                        </div>
                        <h3 className="mb-2 text-lg font-bold text-primary">{link.label}</h3>
                        {link.description ? (
                          <p className="mb-4 text-sm leading-7 text-text-light">{link.description}</p>
                        ) : null}
                        <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
                          Şehir sayfasını inceleyin
                          <ArrowRight size={14} />
                        </span>
                      </Link>
                    ))}
                  </div>
                </Container>
              </section>
            );
          }

          return (
            <section key="cityLinksFallback" className="bg-white py-16">
              <Container>
                <h2 className="mb-4 text-center text-2xl font-bold text-primary">
                  Hizmet Verdiğimiz Şehirler
                </h2>
                <p className="mx-auto mb-10 max-w-3xl text-center text-sm leading-7 text-text-light">
                  Şu anda aktif olarak {siteConfig.serviceCityCount} şehirde hizmet veriyoruz. Gerçekten hizmet
                  verdiğimiz şehirleri gösteriyor, boş rota üretmiyoruz.
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
          );
        }

        if (sectionKey === "relatedPages") {
          if (!data.relatedPages || data.relatedPages.length === 0) return null;

          return (
            <section key="relatedPages" className="bg-surface py-16">
              <Container>
                <h2 className="mb-8 text-2xl font-bold text-primary">
                  {data.relatedPagesTitle || "İlgili Hizmet Sayfaları"}
                </h2>
                {data.relatedPagesDescription ? (
                  <p className="mb-8 max-w-3xl text-sm leading-7 text-text-light">
                    {data.relatedPagesDescription}
                  </p>
                ) : null}

                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {data.relatedPages.map((page) => (
                    <Link
                      key={page.href}
                      href={page.href}
                      className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-md"
                    >
                      <h3 className="mb-2 text-lg font-bold text-primary">{page.title}</h3>
                      <p className="mb-4 text-sm leading-7 text-text-light">{page.description}</p>
                      <span className="inline-flex items-center gap-2 text-sm font-semibold text-accent">
                        {page.ctaLabel || "Sayfaya git"}
                        <ArrowRight size={14} />
                      </span>
                    </Link>
                  ))}
                </div>
              </Container>
            </section>
          );
        }

        if (sectionKey === "faq") {
          return <FAQSection key="faq" items={data.faq} />;
        }

        return null;
      })}

      <CTASection
        content={data.ctaContent}
        defaultService={data.defaultService}
      />
    </>
  );
}
