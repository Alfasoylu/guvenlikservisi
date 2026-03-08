import Link from "next/link";
import { Phone, CheckCircle } from "lucide-react";
import { siteConfig } from "@/data/site-config";

interface StatItem {
  icon: string;
  label: string;
}

interface HeroSectionProps {
  title: string;
  subtitle: string;
  ctaLabel?: string;
  ctaHref?: string;
  stats?: StatItem[];
  bgClass?: string;
}

const defaultStats: StatItem[] = [
  { icon: "📷", label: `${siteConfig.stats.projects} Proje` },
  { icon: "⭐", label: `${siteConfig.stats.experience} Tecrübe` },
  { icon: "✅", label: `${siteConfig.stats.satisfaction} Memnuniyet` },
];

export default function HeroSection({
  title,
  subtitle,
  ctaLabel = "Ücretsiz Keşif ve Teklif Al",
  ctaHref = "#quote-form",
  stats = defaultStats,
  bgClass = "bg-gradient-to-br from-primary to-[#1A3A5C]",
}: HeroSectionProps) {
  return (
    <section className={`${bgClass} text-white py-20 md:py-28`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-5">
            {title}
          </h1>
          <p className="text-lg sm:text-xl text-white/80 mb-8 leading-relaxed">
            {subtitle}
          </p>

          {/* CTA Butonları */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={ctaHref}
              className="inline-flex items-center justify-center gap-2 bg-cta hover:bg-cta-hover text-white font-bold px-8 py-4 rounded-xl text-base transition-colors shadow-lg hover:shadow-xl"
            >
              <CheckCircle size={18} />
              {ctaLabel}
            </a>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-primary font-bold px-8 py-4 rounded-xl text-base transition-colors"
            >
              <Phone size={18} />
              {siteConfig.phone}
            </a>
          </div>

          {/* Güven barı */}
          {stats.length > 0 && (
            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 sm:gap-10">
              {stats.map((stat, i) => (
                <div key={i} className="flex items-center gap-2 text-white/90">
                  <span className="text-2xl">{stat.icon}</span>
                  <span className="font-semibold text-sm sm:text-base">{stat.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
