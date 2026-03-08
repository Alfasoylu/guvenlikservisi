import { Container, Section } from "@/components/ui/Container";

interface ProblemCard {
  icon: string;
  title: string;
  description: string;
}

interface ProblemSectionProps {
  title?: string;
  cards: ProblemCard[];
  bgClass?: string;
}

export default function ProblemSection({
  title = "İşyeriniz veya Eviniz Gerçekten Güvende mi?",
  cards,
  bgClass = "bg-surface",
}: ProblemSectionProps) {
  return (
    <section className={`py-16 md:py-24 ${bgClass}`}>
      <Container>
        <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center mb-10">
          {title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-4">{card.icon}</div>
              <h3 className="text-lg font-bold text-primary mb-3">{card.title}</h3>
              <p className="text-text-light text-sm leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
