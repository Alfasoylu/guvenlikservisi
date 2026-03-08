import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import ProcessSection from "@/components/sections/ProcessSection";
import PackagesSection from "@/components/sections/PackagesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection, { FAQItem } from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";

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
}

interface LandingPageTemplateProps {
  data: LandingPageData;
}

export default function LandingPageTemplate({ data }: LandingPageTemplateProps) {
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
