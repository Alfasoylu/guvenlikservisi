import { Container } from "@/components/ui/Container";
import FAQAccordionClient from "./FAQAccordionClient";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items: FAQItem[];
  title?: string;
  className?: string;
}

export default function FAQSection({
  items,
  title = "Sıkça Sorulan Sorular",
  className = "",
}: FAQSectionProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className={`py-16 md:py-24 bg-white ${className}`}>
      {/* JSON-LD Schema — rendered server-side to prevent duplicate output */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <Container>
        <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center mb-10">
          {title}
        </h2>
        <FAQAccordionClient items={items} />
      </Container>
    </section>
  );
}
