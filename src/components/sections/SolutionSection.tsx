import { CheckCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";

interface SolutionSectionProps {
  title: string;
  description: string;
  features: string[];
  imagePlaceholder?: string;
  imageAlt?: string;
  bgClass?: string;
  reverse?: boolean;
}

export default function SolutionSection({
  title,
  description,
  features,
  imagePlaceholder = "Montaj Görseli",
  imageAlt = "Güvenlik sistemi kurulumu",
  bgClass = "bg-white",
  reverse = false,
}: SolutionSectionProps) {
  return (
    <section className={`py-16 md:py-24 ${bgClass}`}>
      <Container>
        <div
          className={`flex flex-col ${
            reverse ? "lg:flex-row-reverse" : "lg:flex-row"
          } items-center gap-12`}
        >
          {/* Metin kısmı */}
          <div className="flex-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-5">
              {title}
            </h2>
            <p className="text-text-light leading-relaxed mb-6">{description}</p>
            <ul className="space-y-3">
              {features.map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle
                    size={20}
                    className="text-cta flex-shrink-0 mt-0.5"
                  />
                  <span className="text-gray-700 text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Görsel kısmı */}
          <div className="flex-1 w-full">
            <div
              aria-label={imageAlt}
              className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl flex items-center justify-center border-2 border-dashed border-accent/30"
            >
              <div className="text-center text-accent/60">
                <div className="text-5xl mb-3">📷</div>
                <p className="text-sm font-medium">{imagePlaceholder}</p>
                <p className="text-xs mt-1 text-gray-400">
                  Kullanıcı fotoğraf ekleyecek
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
