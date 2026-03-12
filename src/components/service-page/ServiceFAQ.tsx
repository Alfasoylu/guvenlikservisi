import {
  bodyTextClass,
  compactCardClass,
  faqGridClass,
  h3CompactClass,
  sectionClass,
  sectionTitleClass,
} from "@/components/service-page/styles";

export interface ServiceFAQItem {
  question: string;
  answer: string;
}

interface ServiceFAQProps {
  items: ServiceFAQItem[];
}

export default function ServiceFAQ({ items }: ServiceFAQProps) {
  return (
    <section className={sectionClass}>
      <h2 className={sectionTitleClass}>Sık Sorulan Sorular</h2>

      <div className={faqGridClass}>
        {items.map((item) => (
          <div key={item.question} className={compactCardClass}>
            <h3 className={h3CompactClass}>{item.question}</h3>
            <p className={bodyTextClass}>{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
