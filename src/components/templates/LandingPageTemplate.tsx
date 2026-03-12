import ServiceVisualSection from "@/components/ServiceVisualSection";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import ProcessSection from "@/components/sections/ProcessSection";
import PackagesSection from "@/components/sections/PackagesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection, { FAQItem } from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import { getCommercialPageVisuals } from "@/lib/page-images";

interface ProblemCard {
  icon: string;
  title: string;
  description: string;
}

interface Package {
  name: string;
  price: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
  ctaHref?: string;
}

interface Testimonial {
  text: string;
  name: string;
  role: string;
  rating?: number;
}

interface LandingPageVisuals {
  pageKey: string;
  title?: string;
  description?: string;
  pageTitle?: string;
}

export interface LandingPageData {
  hero: {
    title: string;
    subtitle: string;
    ctaLabel?: string;
  };
  problem: {
    title?: string;
    cards: ProblemCard[];
  };
  solution: {
    title: string;
    description: string;
    features: string[];
    imagePlaceholder?: string;
  };
  packages: {
    title?: string;
    items: Package[];
  };
  testimonials: Testimonial[];
  faq: FAQItem[];
  cta: {
    title?: string;
    subtitle?: string;
    defaultService?: string;
  };
  visuals?: LandingPageVisuals;
}

interface LandingPageTemplateProps {
  data: LandingPageData;
}

export default function LandingPageTemplate({ data }: LandingPageTemplateProps) {
  const visualItems = data.visuals
    ? getCommercialPageVisuals(data.visuals.pageKey, data.visuals.pageTitle || data.hero.title)
    : [];

  return (
    <>
      <HeroSection
        title={data.hero.title}
        subtitle={data.hero.subtitle}
        ctaLabel={data.hero.ctaLabel}
      />
      <ProblemSection
        title={data.problem.title}
        cards={data.problem.cards}
      />
      <SolutionSection
        title={data.solution.title}
        description={data.solution.description}
        features={data.solution.features}
        imagePlaceholder={data.solution.imagePlaceholder}
      />
      {data.visuals ? (
        <ServiceVisualSection
          title={data.visuals.title || `${data.hero.title} için uygulama görselleri`}
          description={
            data.visuals.description ||
            `${data.hero.title} sayfasında teklif odaklı dönüşümü güçlendirmek için örnek kurulum, kullanım senaryosu, montaj süreci ve sistem şeması birlikte gösterilir.`
          }
          items={visualItems}
        />
      ) : null}
      <ProcessSection />
      <PackagesSection
        title={data.packages.title}
        packages={data.packages.items}
      />
      <TestimonialsSection testimonials={data.testimonials} />
      <FAQSection items={data.faq} />
      <CTASection
        title={data.cta.title}
        subtitle={data.cta.subtitle}
        defaultService={data.cta.defaultService}
      />
    </>
  );
}