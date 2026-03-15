import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { CheckCircle, ArrowUpRight, Layers } from "lucide-react";

export interface SolutionTier {
  name: string;
  targetAudience: string;
  solves: string;
  components: string[];
  upgradeNote: string;
}

interface SolutionTiersSectionProps {
  title?: string;
  subtitle?: string;
  tiers: SolutionTier[];
  ctaHref?: string;
  ctaLabel?: string;
}

export default function SolutionTiersSection({
  title = "Çözüm Seviyeleri",
  subtitle,
  tiers,
  ctaHref = "#quote-form",
  ctaLabel = "Size Uygun Seviyeyi Belirleyelim",
}: SolutionTiersSectionProps) {
  return (
    <section className="bg-surface py-16 md:py-20">
      <Container>
        <div className="mb-10 max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-cta/10 px-4 py-1.5 text-xs font-semibold text-cta">
            <Layers size={14} />
            İhtiyaca göre kademe
          </div>
          <h2 className="mb-4 text-2xl font-bold text-primary sm:text-3xl">
            {title}
          </h2>
          {subtitle && (
            <p className="text-sm leading-7 text-text-light">{subtitle}</p>
          )}
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <div
              key={tier.name}
              className={`relative rounded-2xl border p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${
                i === 1
                  ? "border-accent bg-white ring-2 ring-accent/20"
                  : "border-gray-200 bg-white"
              }`}
            >
              {i === 1 && (
                <span className="absolute -top-3 left-5 rounded-full bg-accent px-3 py-0.5 text-xs font-bold text-white">
                  En çok tercih edilen
                </span>
              )}
              <h3 className="mb-4 text-lg font-bold text-primary">
                {tier.name}
              </h3>

              <div className="mb-3">
                <span className="text-xs font-semibold uppercase tracking-wide text-accent">
                  Kim için uygun
                </span>
                <p className="mt-1 text-sm leading-6 text-text-light">
                  {tier.targetAudience}
                </p>
              </div>

              <div className="mb-3">
                <span className="text-xs font-semibold uppercase tracking-wide text-accent">
                  Hangi sorunu çözer
                </span>
                <p className="mt-1 text-sm leading-6 text-text-light">
                  {tier.solves}
                </p>
              </div>

              <div className="mb-4">
                <span className="text-xs font-semibold uppercase tracking-wide text-accent">
                  Bileşenler
                </span>
                <ul className="mt-2 space-y-1.5">
                  {tier.components.map((c) => (
                    <li
                      key={c}
                      className="flex items-start gap-2 text-sm leading-5 text-gray-700"
                    >
                      <CheckCircle
                        size={14}
                        className="mt-0.5 shrink-0 text-cta"
                      />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-accent/10 bg-accent/5 p-3">
                <p className="text-xs leading-5 text-accent">
                  <strong>Bir üst seviye ne zaman gerekir?</strong>{" "}
                  {tier.upgradeNote}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 rounded-xl bg-cta px-8 py-4 font-bold text-white shadow-lg transition-colors hover:bg-ctaHover"
          >
            {ctaLabel}
            <ArrowUpRight size={18} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
