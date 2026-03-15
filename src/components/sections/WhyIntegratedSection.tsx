import { Container } from "@/components/ui/Container";
import { ShieldCheck, CheckCircle } from "lucide-react";

export interface WhyIntegratedItem {
  title: string;
  description: string;
}

interface WhyIntegratedSectionProps {
  title?: string;
  subtitle?: string;
  items: WhyIntegratedItem[];
}

export default function WhyIntegratedSection({
  title = "Neden Tüm Bileşenleri Tek Elden Kurmalısınız?",
  subtitle,
  items,
}: WhyIntegratedSectionProps) {
  return (
    <section className="bg-gradient-to-br from-primary to-[#1A3A5C] py-16 text-white md:py-20">
      <Container>
        <div className="mb-10 max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-white/90">
            <ShieldCheck size={14} />
            Tek muhatap avantajı
          </div>
          <h2 className="mb-4 text-2xl font-bold sm:text-3xl">{title}</h2>
          {subtitle && (
            <p className="text-sm leading-7 text-white/75">{subtitle}</p>
          )}
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm"
            >
              <div className="mb-2 flex items-center gap-2">
                <CheckCircle size={16} className="shrink-0 text-accent" />
                <h3 className="text-base font-semibold">{item.title}</h3>
              </div>
              <p className="text-sm leading-6 text-white/75">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
