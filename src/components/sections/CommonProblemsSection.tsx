import { Container } from "@/components/ui/Container";
import { AlertTriangle } from "lucide-react";

export interface CommonProblemItem {
  title: string;
  description: string;
}

interface CommonProblemsSectionProps {
  title?: string;
  subtitle?: string;
  items: CommonProblemItem[];
}

export default function CommonProblemsSection({
  title = "En Sık Yaşanan Sorunlar",
  subtitle,
  items,
}: CommonProblemsSectionProps) {
  return (
    <section className="bg-surface py-16 md:py-20">
      <Container>
        <div className="mb-10 max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-warning/10 px-4 py-1.5 text-xs font-semibold text-warning">
            <AlertTriangle size={14} />
            Gerçek satın alma sebepleri
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
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm"
            >
              <div className="mb-2 flex items-center gap-2">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-warning/10 text-xs font-bold text-warning">
                  !
                </span>
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
