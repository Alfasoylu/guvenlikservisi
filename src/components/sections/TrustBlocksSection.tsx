import { Container } from "@/components/ui/Container";
import { BadgeCheck } from "lucide-react";

export interface TrustBlockItem {
  text: string;
}

interface TrustBlocksSectionProps {
  title?: string;
  subtitle?: string;
  items: TrustBlockItem[];
}

export default function TrustBlocksSection({
  title = "Somut Güvencelerimiz",
  subtitle,
  items,
}: TrustBlocksSectionProps) {
  return (
    <section className="bg-surface py-16 md:py-20">
      <Container>
        <div className="mb-10 max-w-3xl">
          <h2 className="mb-4 text-2xl font-bold text-primary sm:text-3xl">
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm leading-7 text-text-light">{subtitle}</p>
          )}
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.text}
              className="flex items-start gap-3 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <BadgeCheck size={20} className="mt-0.5 shrink-0 text-cta" />
              <span className="text-sm font-medium leading-6 text-gray-700">
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
