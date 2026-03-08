"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  items: FAQItem[];
  title?: string;
  className?: string;
}

function FAQAccordionItem({ item, index }: { item: FAQItem; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-4 text-left bg-white hover:bg-surface transition-colors"
        aria-expanded={open}
        aria-controls={`faq-answer-${index}`}
      >
        <span className="font-semibold text-primary text-sm sm:text-base">
          {item.question}
        </span>
        <ChevronDown
          size={18}
          className={`flex-shrink-0 text-accent transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      {open && (
        <div
          id={`faq-answer-${index}`}
          className="px-6 py-4 text-text-light text-sm sm:text-base leading-relaxed border-t border-gray-100 bg-surface"
        >
          {item.answer}
        </div>
      )}
    </div>
  );
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
      <Container>
        <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center mb-10">
          {title}
        </h2>
        <div className="max-w-3xl mx-auto space-y-3">
          {items.map((item, i) => (
            <FAQAccordionItem key={i} item={item} index={i} />
          ))}
        </div>
      </Container>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </section>
  );
}
