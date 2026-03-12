import Link from "next/link";
import {
  actionRowCompactClass,
  ctaSectionClass,
  ctaTextClass,
  ctaTitleClass,
  inverseButtonClass,
  primaryButtonClass,
} from "@/components/service-page/styles";
import { siteConfig } from "@/data/site-config";

interface ServiceCTAProps {
  title: string;
  description: string;
  primaryLabel: string;
  secondaryLabel: string;
}

export default function ServiceCTA({
  title,
  description,
  primaryLabel,
  secondaryLabel,
}: ServiceCTAProps) {
  return (
    <section id="teklif" className={ctaSectionClass}>
      <h2 className={ctaTitleClass}>{title}</h2>

      <p className={ctaTextClass}>{description}</p>

      <div className={actionRowCompactClass}>
        <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className={primaryButtonClass}>
          {primaryLabel}: {siteConfig.phone}
        </a>

        <Link href="/iletisim" className={inverseButtonClass}>
          {secondaryLabel}
        </Link>
      </div>
    </section>
  );
}
