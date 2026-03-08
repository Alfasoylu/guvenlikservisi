import QuoteForm from "@/components/forms/QuoteForm";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site-config";
import { Phone } from "lucide-react";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  defaultService?: string;
  bgClass?: string;
}

export default function CTASection({
  title = "Ücretsiz Keşif ve Teklif Alın",
  subtitle = "Uzman ekibimiz en kısa sürede sizi arayacak.",
  defaultService = "",
  bgClass = "bg-primary",
}: CTASectionProps) {
  return (
    <section id="quote-form" className={`py-16 md:py-24 ${bgClass}`}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Sol: Bilgi */}
          <div className="text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">{title}</h2>
            <p className="text-white/80 mb-8 leading-relaxed">{subtitle}</p>

            <ul className="space-y-4 mb-8">
              {[
                "Ücretsiz keşif ve yerinde analiz",
                "24 saat içinde teklif",
                "Anahtar teslim montaj",
                "1-3 yıl garanti",
                "7/24 teknik destek",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/90 text-sm">
                  <span className="w-5 h-5 rounded-full bg-cta flex items-center justify-center flex-shrink-0 text-white text-xs font-bold">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 bg-white text-primary font-bold px-6 py-3 rounded-xl hover:bg-white/90 transition-colors"
            >
              <Phone size={18} />
              Hemen Ara: {siteConfig.phone}
            </a>
          </div>

          {/* Sağ: Form */}
          <QuoteForm defaultService={defaultService} />
        </div>
      </Container>
    </section>
  );
}
