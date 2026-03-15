import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { MapPin, CheckCircle } from "lucide-react";

export interface AreaSolutionItem {
  area: string;
  description: string;
  features: string[];
}

interface AreaSolutionsSectionProps {
  title?: string;
  subtitle?: string;
  items: AreaSolutionItem[];
  image?: {
    src: string;
    alt: string;
  };
}

export default function AreaSolutionsSection({
  title = "Alan Bazlı Çözüm Kurgusu",
  subtitle,
  items,
  image,
}: AreaSolutionsSectionProps) {
  return (
    <section className="bg-white py-16 md:py-20">
      <Container>
        <div className="mb-10 max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary">
            <MapPin size={14} />
            Alana özel çözümler
          </div>
          <h2 className="mb-4 text-2xl font-bold text-primary sm:text-3xl">
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm leading-7 text-text-light">{subtitle}</p>
          )}
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="space-y-5 lg:col-span-2">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {items.map((item) => (
                <div
                  key={item.area}
                  className="rounded-2xl border border-gray-200 bg-surface p-5 transition hover:shadow-md"
                >
                  <h3 className="mb-3 text-base font-bold text-primary">
                    {item.area}
                  </h3>
                  <p className="mb-3 text-sm leading-6 text-text-light">
                    {item.description}
                  </p>
                  <ul className="space-y-1.5">
                    {item.features.map((f) => (
                      <li
                        key={f}
                        className="flex items-start gap-2 text-xs leading-5 text-gray-600"
                      >
                        <CheckCircle
                          size={13}
                          className="mt-0.5 shrink-0 text-cta"
                        />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {image && (
            <div className="relative hidden overflow-hidden rounded-2xl border border-gray-200 lg:block">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 33vw, 0"
              />
            </div>
          )}

          {!image && <div className="hidden lg:block" />}
        </div>
      </Container>
    </section>
  );
}
