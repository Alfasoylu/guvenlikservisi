import Link from "next/link";
import ServiceImageBlock from "@/components/service-page/ServiceImageBlock";
import {
  actionRowCompactClass,
  ctaSectionClass,
  ctaTextClass,
  ctaTitleClass,
  heroGridClass,
  inverseButtonClass,
  primaryButtonClass,
} from "@/components/service-page/styles";
import { siteConfig } from "@/data/site-config";
import type { ServicePageImage } from "@/lib/service-page-factory";

interface ServiceCTAProps {
  title: string;
  description: string;
  primaryLabel: string;
  secondaryLabel: string;
  image?: ServicePageImage | null;
}

export default function ServiceCTA({
  title,
  description,
  primaryLabel,
  secondaryLabel,
  image,
}: ServiceCTAProps) {
  return (
    <section id="teklif" className={ctaSectionClass}>
      <div className={image ? heroGridClass : ""}>
        <div>
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
        </div>

        {image ? (
          <div className="self-center">
            <ServiceImageBlock
              src={image.src}
              alt={image.alt}
              title={image.title}
              caption={image.caption}
              aspect={image.aspect}
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
