import QuoteForm from "@/components/forms/QuoteForm";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site-config";
import { Phone, ShieldCheck, Clock3, BadgeCheck, ArrowRight } from "lucide-react";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  defaultService?: string;
  bgClass?: string;
}

const guvenMaddeleri = [
  "Ücretsiz keşif ve ihtiyaç analizi",
  "24 saat içinde hızlı geri dönüş",
  "Anahtar teslim kurulum ve devreye alma",
  "Ürün ve işçilik desteği",
  "Satış sonrası teknik destek",
];

export default function CTASection({
  title = "Ücretsiz Keşif ve Teklif Alın",
  subtitle = "Alanınıza uygun güvenlik sistemi için formu doldurun. Ekibimiz sizi arayıp ihtiyaca göre doğru çözümü netleştirsin.",
  defaultService = "",
  bgClass = "bg-primary",
}: CTASectionProps) {
  return (
    <section id="quote-form" className={`py-16 md:py-24 ${bgClass}`}>
      <Container>
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
          <div className="text-white">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/90">
              <ShieldCheck size={14} />
              Hızlı teklif • Profesyonel keşif
            </div>

            <h2 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
              {title}
            </h2>

            <p className="mb-8 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
              {subtitle}
            </p>

            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="mb-2 flex items-center gap-2 text-white">
                  <Clock3 size={18} className="text-accent" />
                  <span className="font-semibold">Hızlı geri dönüş</span>
                </div>
                <p className="text-sm leading-6 text-white/75">
                  Talebinizi aldıktan sonra mümkün olan en kısa sürede dönüş yapıyoruz.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <div className="mb-2 flex items-center gap-2 text-white">
                  <BadgeCheck size={18} className="text-accent" />
                  <span className="font-semibold">Doğru sistem önerisi</span>
                </div>
                <p className="text-sm leading-6 text-white/75">
                  Gereksiz ürün değil, alanınıza uygun çalışan sistem öneriyoruz.
                </p>
              </div>
            </div>

            <ul className="mb-8 space-y-3">
              {guvenMaddeleri.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-white/90">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cta text-xs font-bold text-white">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-primary transition-colors hover:bg-white/90"
              >
                <Phone size={18} />
                Hemen Ara: {siteConfig.phone}
              </a>

              <a
                href="/iletisim"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10"
              >
                İletişim Sayfası
                <ArrowRight size={16} />
              </a>
            </div>

            <p className="mt-4 text-xs leading-6 text-white/60">
              Formu doldurmanız teklif almak için yeterlidir. İhtiyacınız net değilse sorun değil,
              birlikte belirleriz.
            </p>
          </div>

          <div className="lg:pl-4">
            <QuoteForm defaultService={defaultService} />
          </div>
        </div>
      </Container>
    </section>
  );
}
