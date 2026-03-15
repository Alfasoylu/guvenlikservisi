import { Container } from "@/components/ui/Container";
import { Users, CheckCircle } from "lucide-react";

export interface TargetAudienceItem {
  title: string;
  description: string;
}

interface TargetAudienceSectionProps {
  title?: string;
  subtitle?: string;
  items: TargetAudienceItem[];
}

export default function TargetAudienceSection({
  title = "Bu Sayfa Kimler İçin?",
  subtitle,
  items,
}: TargetAudienceSectionProps) {
  return (
    <section className="bg-white py-16 md:py-20">
      <Container>
        <div className="mb-10 max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent">
            <Users size={14} />
            Hedef karar vericiler
          </div>
          <h2 className="mb-4 text-2xl font-bold text-primary sm:text-3xl">
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm leading-7 text-text-light">{subtitle}</p>
          )}
        </div>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-200 bg-surface p-6 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="mb-3 flex items-center gap-2">
                <CheckCircle size={18} className="shrink-0 text-cta" />
                <h3 className="text-base font-bold text-primary">
                  {item.title}
                </h3>
              </div>
              <p className="text-sm leading-6 text-text-light">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
