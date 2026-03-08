import { CheckCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";

interface Package {
  name: string;
  price: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
  ctaHref?: string;
}

interface PackagesSectionProps {
  title?: string;
  packages: Package[];
  bgClass?: string;
}

export default function PackagesSection({
  title = "Paketler ve Fiyatlandırma",
  packages,
  bgClass = "bg-white",
}: PackagesSectionProps) {
  return (
    <section className={`py-16 md:py-24 ${bgClass}`}>
      <Container>
        <h2 className="text-2xl sm:text-3xl font-bold text-primary text-center mb-4">
          {title}
        </h2>
        <p className="text-center text-text-light mb-12 text-sm">
          Tüm paketlere ücretsiz keşif dahildir. Keşif sonrası net fiyat belirlenir.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-6 flex flex-col transition-shadow ${
                pkg.highlighted
                  ? "bg-primary text-white shadow-2xl scale-105"
                  : "bg-white border border-gray-200 shadow-md hover:shadow-lg"
              }`}
            >
              {pkg.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-warning text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap">
                    {pkg.badge}
                  </span>
                </div>
              )}

              <h3
                className={`text-xl font-bold mb-2 ${
                  pkg.highlighted ? "text-white" : "text-primary"
                }`}
              >
                {pkg.name}
              </h3>
              <p
                className={`text-2xl font-bold mb-6 ${
                  pkg.highlighted ? "text-accent" : "text-accent"
                }`}
              >
                {pkg.price}
              </p>

              <ul className="space-y-3 flex-1 mb-8">
                {pkg.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm">
                    <CheckCircle
                      size={16}
                      className={`flex-shrink-0 mt-0.5 ${
                        pkg.highlighted ? "text-cta" : "text-cta"
                      }`}
                    />
                    <span className={pkg.highlighted ? "text-white/90" : "text-gray-600"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href={pkg.ctaHref || "#quote-form"}
                className={`block text-center font-bold py-3 rounded-xl transition-colors text-sm ${
                  pkg.highlighted
                    ? "bg-cta hover:bg-cta-hover text-white"
                    : "border-2 border-primary text-primary hover:bg-primary hover:text-white"
                }`}
              >
                Bu Paketi Seç
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
