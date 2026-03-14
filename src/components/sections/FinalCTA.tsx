import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site-config";
import { ArrowRight, MessageCircle, Phone, ShieldCheck } from "lucide-react";
import Link from "next/link";

interface FinalCTAProps {
  title?: string;
  subtitle?: string;
  formHref?: string;
  formLabel?: string;
  bgClass?: string;
}

export default function FinalCTA({
  title = "İstanbul'da Güvenlik Sistemi Kurulumu İçin Hemen İletişime Geçin",
  subtitle = "Ücretsiz keşif randevusu alın, alanınıza uygun sistemi birlikte belirleyelim. Profesyonel ekibimiz aynı gün dönüş yapıyor.",
  formHref = "#quote-form",
  formLabel = "Ücretsiz Teklif Al",
  bgClass = "bg-primary",
}: FinalCTAProps) {
  const phoneClean = siteConfig.phone.replace(/\s/g, "");
  const waLink = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Merhaba, güvenlik sistemi hakkında bilgi almak istiyorum.")}`;

  return (
    <section className={`py-16 md:py-20 ${bgClass}`}>
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold text-white/90">
            <ShieldCheck size={14} />
            Profesyonel kurulum • Aynı gün keşif
          </div>

          <h2 className="mb-4 text-2xl font-bold leading-tight text-white sm:text-3xl md:text-4xl">
            {title}
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-sm leading-7 text-white/80 sm:text-base">
            {subtitle}
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={`tel:${phoneClean}`}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-7 py-3.5 font-bold text-primary transition-colors hover:bg-white/90 sm:w-auto"
            >
              <Phone size={18} />
              Hemen Ara: {siteConfig.phone}
            </a>

            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-7 py-3.5 font-bold text-white transition-colors hover:bg-[#20BD5A] sm:w-auto"
            >
              <MessageCircle size={18} />
              WhatsApp ile Yazın
            </a>

            <Link
              href={formHref}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
            >
              {formLabel}
              <ArrowRight size={16} />
            </Link>
          </div>

          <p className="mt-6 text-xs text-white/50">
            Pazartesi – Cumartesi 08:00 – 19:00 arası ulaşabilirsiniz.
          </p>
        </div>
      </Container>
    </section>
  );
}
