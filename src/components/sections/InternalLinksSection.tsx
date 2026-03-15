import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ArrowRight, Link2 } from "lucide-react";

export interface InternalLinkItem {
  href: string;
  label: string;
  description: string;
}

interface InternalLinksSectionProps {
  title?: string;
  subtitle?: string;
  links: InternalLinkItem[];
}

export default function InternalLinksSection({
  title = "İlgili Hizmet ve Çözüm Sayfaları",
  subtitle,
  links,
}: InternalLinksSectionProps) {
  return (
    <section className="border-t border-gray-100 bg-white py-16 md:py-20">
      <Container>
        <div className="mb-10 max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent">
            <Link2 size={14} />
            Detaylı hizmet sayfaları
          </div>
          <h2 className="mb-4 text-2xl font-bold text-primary">{title}</h2>
          {subtitle && (
            <p className="text-sm leading-7 text-text-light">{subtitle}</p>
          )}
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex items-start gap-4 rounded-2xl border border-gray-200 bg-surface p-5 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex-1">
                <h3 className="mb-1 text-sm font-bold text-primary group-hover:text-accent">
                  {link.label}
                </h3>
                <p className="text-xs leading-5 text-text-light">
                  {link.description}
                </p>
              </div>
              <ArrowRight
                size={16}
                className="mt-1 shrink-0 text-accent opacity-0 transition-opacity group-hover:opacity-100"
              />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
