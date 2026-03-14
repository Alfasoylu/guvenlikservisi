import Link from "next/link";
import QuoteForm from "@/components/forms/QuoteForm";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/site-config";
import {
  ArrowRight,
  BadgeCheck,
  Clock3,
  Phone,
  ShieldCheck,
} from "lucide-react";

interface CTASupportCard {
  title: string;
  text: string;
}

export interface CTASectionContent {
  badge?: string;
  title?: string;
  subtitle?: string;
  primaryLabel?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  helperText?: string;
  helperTone?: "direct" | "calm";
  preFormNote?: string;
  intentTag?: string;
  trustItems?: string[];
  supportCards?: CTASupportCard[];
}

interface CTASectionProps {
  content?: CTASectionContent;
  title?: string;
  subtitle?: string;
  defaultService?: string;
  bgClass?: string;
}

const defaultContent: Required<CTASectionContent> = {
  badge: "Hızlı teklif • Profesyonel keşif",
  title: "Ücretsiz Keşif ve Teklif Alın",
  subtitle:
    "Alanınıza uygun güvenlik sistemi için formu doldurun. Ekibimiz sizi arayıp ihtiyaca göre doğru çözümü netleştirsin.",
  primaryLabel: `Hemen Ara: ${siteConfig.phone}`,
  secondaryLabel: "İletişim Sayfası",
  secondaryHref: "/iletisim",
  helperText:
    "Formu doldurmanız teklif almak için yeterlidir. İhtiyacınız net değilse sorun değil, birlikte belirleriz.",
  helperTone: "calm",
  preFormNote: "",
  intentTag: "",
  trustItems: [
    "Ücretsiz keşif ve ihtiyaç analizi",
    "24 saat içinde hızlı geri dönüş",
    "Anahtar teslim kurulum ve devreye alma",
    "Ürün ve işçilik desteği",
    "Satış sonrası teknik destek",
  ],
  supportCards: [
    {
      title: "Hızlı geri dönüş",
      text: "Talebinizi aldıktan sonra mümkün olan en kısa sürede dönüş yapıyoruz.",
    },
    {
      title: "Doğru sistem önerisi",
      text: "Gereksiz ürün değil, alanınıza uygun çalışan sistem öneriyoruz.",
    },
  ],
};

export default function CTASection({
  content,
  title,
  subtitle,
  defaultService = "",
  bgClass = "bg-primary",
}: CTASectionProps) {
  const mergedContent = {
    ...defaultContent,
    ...(title ? { title } : {}),
    ...(subtitle ? { subtitle } : {}),
    ...content,
    trustItems: content?.trustItems || defaultContent.trustItems,
    supportCards: (content?.supportCards?.length
      ? content.supportCards
      : defaultContent.supportCards
    ).slice(0, 2),
  };

  return (
    <section
      id="quote-form"
      className={`scroll-mt-24 py-16 md:py-24 ${bgClass}`}
    >
      <Container>
        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2">
          <div className="text-white">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/90">
              <ShieldCheck size={14} />
              {mergedContent.badge}
            </div>

            <h2 className="mb-4 text-2xl font-bold leading-tight sm:text-3xl md:text-4xl">
              {mergedContent.title}
            </h2>

            <p className="mb-8 max-w-xl text-sm leading-7 text-white/80 sm:text-base">
              {mergedContent.subtitle}
            </p>

            <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {mergedContent.supportCards.map((card, index) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="mb-2 flex items-center gap-2 text-white">
                    {index === 0 ? (
                      <Clock3 size={18} className="text-accent" />
                    ) : (
                      <BadgeCheck size={18} className="text-accent" />
                    )}
                    <span className="font-semibold">{card.title}</span>
                  </div>
                  <p className="text-sm leading-6 text-white/75">{card.text}</p>
                </div>
              ))}
            </div>

            <ul className="mb-8 space-y-3">
              {mergedContent.trustItems.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-white/90"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cta text-xs font-bold text-white">
                    ✓
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-bold text-primary transition-colors hover:bg-white/90 sm:w-auto"
              >
                <Phone size={18} />
                {mergedContent.primaryLabel}
              </a>

              <Link
                href={mergedContent.secondaryHref}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-3 font-semibold text-white transition-colors hover:bg-white/10 sm:w-auto"
              >
                {mergedContent.secondaryLabel}
                <ArrowRight size={16} />
              </Link>
            </div>

            <p
              className={`mt-4 text-xs leading-6 ${
                mergedContent.helperTone === "direct"
                  ? "text-white/75"
                  : "text-white/60"
              }`}
            >
              {mergedContent.helperText}
            </p>
          </div>

          <div className="lg:pl-4">
            {mergedContent.preFormNote ? (
              <div className="mb-4 rounded-2xl border border-white/10 bg-white/5 p-4 text-white">
                {mergedContent.intentTag ? (
                  <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent">
                    {mergedContent.intentTag}
                  </div>
                ) : null}
                <p className="text-sm leading-6 text-white/80">
                  {mergedContent.preFormNote}
                </p>
              </div>
            ) : null}
            <QuoteForm defaultService={defaultService} />
          </div>
        </div>
      </Container>
    </section>
  );
}
