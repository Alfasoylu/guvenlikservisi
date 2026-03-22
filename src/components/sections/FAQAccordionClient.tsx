"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FAQItem } from "./FAQSection";

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

export default function FAQAccordionClient({ items }: { items: FAQItem[] }) {
  return (
    <div className="max-w-3xl mx-auto space-y-3">
      {items.map((item, i) => (
        <FAQAccordionItem key={i} item={item} index={i} />
      ))}
    </div>
  );
}
