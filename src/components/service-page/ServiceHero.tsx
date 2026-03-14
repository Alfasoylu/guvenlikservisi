import Link from "next/link";
import ServiceImageBlock from "@/components/service-page/ServiceImageBlock";
import { siteConfig } from "@/data/site-config";
import type { ServicePageImage } from "@/lib/service-page-factory";
import {
  actionRowClass,
  breadcrumbClass,
  breadcrumbLinkClass,
  bodyTextClass,
  bodyTextLeadClass,
  cardClass,
  heroEyebrowClass,
  heroGridClass,
  heroIntroClass,
  heroTitleClass,
  primaryButtonClass,
  secondaryButtonClass,
  sectionClass,
  trustCardClass,
  trustGridClass,
} from "@/components/service-page/styles";

interface HeroTrackingContext {
  pagePath: string;
  city: string;
  service: string;
  intentType: string;
}

interface ServiceHeroProps {
  cityName: string;
  serviceName: string;
  cityDescription: string;
  intro: string;
  localContext: string;
  benefits: string[];
  process: string[];
  image?: ServicePageImage | null;
  trackingContext?: HeroTrackingContext;
  phoneCtaSlot?: string;
}

function getPhoneTrackingProps(
  trackingContext: HeroTrackingContext | undefined,
  ctaSlot: string | undefined
) {
  if (!trackingContext || !ctaSlot) {
    return {};
  }

  return {
    "data-page-path": trackingContext.pagePath,
    "data-city": trackingContext.city,
    "data-service": trackingContext.service,
    "data-cta-slot": ctaSlot,
    "data-lead-channel": "phone",
    "data-intent-type": trackingContext.intentType,
    "data-page-template": "city_service",
  } as const;
}

export default function ServiceHero({
  cityName,
  serviceName,
  cityDescription,
  intro,
  localContext,
  benefits,
  process,
  image,
  trackingContext,
  phoneCtaSlot,
}: ServiceHeroProps) {
  return (
    <section className={`${sectionClass} ${heroGridClass}`}>
      <div>
        <div className={breadcrumbClass}>
          <Link href="/" className={breadcrumbLinkClass}>
            Ana Sayfa
          </Link>
          {" / "}
          <span>{cityName}</span>
          {" / "}
          <span>{serviceName}</span>
        </div>

        <h1 className={heroTitleClass}>
          {cityName} {serviceName}
        </h1>

        <p className={heroIntroClass}>{cityDescription}</p>
        <p className={bodyTextLeadClass}>{intro}</p>
        {localContext ? <p className={`${bodyTextClass} mb-7`}>{localContext}</p> : null}

        <div className={actionRowClass}>
          <a href="#teklif" className={primaryButtonClass}>
            Ücretsiz Teklif Al
          </a>

          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            className={secondaryButtonClass}
            {...getPhoneTrackingProps(trackingContext, phoneCtaSlot)}
          >
            {siteConfig.phone}
          </a>
        </div>
      </div>

      <aside className={`${cardClass} bg-[#F8FAFB]`}>
        {image ? (
          <div className="mb-5">
            <ServiceImageBlock
              src={image.src}
              alt={image.alt}
              title={image.title}
              caption={image.caption}
              aspect="hero"
              priority
            />
          </div>
        ) : null}

        <div className={heroEyebrowClass}>Neden tercih ediliyoruz?</div>

        <h2 className="mb-3 text-[24px] text-[#0F2B46]">Öne çıkan faydalar</h2>
        <div className={`${trustGridClass} mb-[18px]`}>
          {benefits.map((item) => (
            <div key={item} className={trustCardClass}>
              {item}
            </div>
          ))}
        </div>

        {process.length > 0 ? (
          <>
            <h3 className="mb-3 text-[20px] text-[#0F2B46]">Kurulum süreci</h3>
            <div className={trustGridClass}>
              {process.map((item, index) => (
                <div key={item} className={trustCardClass}>
                  {index + 1}. {item}
                </div>
              ))}
            </div>
          </>
        ) : null}
      </aside>
    </section>
  );
}
