import Image from "next/image";
import { CheckCircle, Phone } from "lucide-react";
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
  imageSrc?: string;
  imageAlt?: string;
  imagePriority?: boolean;
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
  imageSrc,
  imageAlt = "",
  imagePriority = false,
}: HeroSectionProps) {
  return (
    <section className={`${bgClass} py-20 text-white md:py-28`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div
          className={`grid items-center gap-10 ${
            imageSrc ? "lg:grid-cols-[1.05fr_0.95fr]" : ""
          }`}
        >
          <div
            className={
              imageSrc ? "text-center lg:text-left" : "mx-auto max-w-3xl text-center"
            }
          >
            <h1 className="mb-5 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              {title}
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-white/80 sm:text-xl">
              {subtitle}
            </p>

            <div
              className={`flex flex-col gap-4 ${
                imageSrc ? "sm:flex-row lg:justify-start" : "justify-center sm:flex-row"
              }`}
            >
              <a
                href={ctaHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-cta px-8 py-4 text-base font-bold text-white shadow-lg transition-colors hover:bg-cta-hover hover:shadow-xl"
              >
                <CheckCircle size={18} />
                {ctaLabel}
              </a>
              <a
                href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white px-8 py-4 text-base font-bold text-white transition-colors hover:bg-white hover:text-primary"
              >
                <Phone size={18} />
                {siteConfig.phone}
              </a>
            </div>

            {stats.length > 0 && (
              <div
                className={`mt-12 flex flex-wrap items-center gap-6 sm:gap-10 ${
                  imageSrc ? "justify-center lg:justify-start" : "justify-center"
                }`}
              >
                {stats.map((stat, index) => (
                  <div key={index} className="flex items-center gap-2 text-white/90">
                    <span className="text-2xl">{stat.icon}</span>
                    <span className="text-sm font-semibold sm:text-base">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {imageSrc ? (
            <div className="relative hidden overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl lg:block">
              <div className="absolute inset-0 z-10 bg-gradient-to-tr from-slate-950/30 via-transparent to-slate-950/10" />
              <Image
                src={imageSrc}
                alt={imageAlt}
                width={2048}
                height={1152}
                priority={imagePriority}
                className="h-full w-full object-cover"
              />
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
