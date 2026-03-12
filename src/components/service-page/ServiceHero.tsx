import Link from "next/link";
import { siteConfig } from "@/data/site-config";
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

interface ServiceHeroProps {
  cityName: string;
  serviceName: string;
  cityDescription: string;
  intro: string;
  trustBullets: string[];
  processSummary: {
    title: string;
    body: string;
  };
}

export default function ServiceHero({
  cityName,
  serviceName,
  cityDescription,
  intro,
  trustBullets,
  processSummary,
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

        <div className={actionRowClass}>
          <a href="#teklif" className={primaryButtonClass}>
            Ücretsiz Teklif Al
          </a>

          <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className={secondaryButtonClass}>
            {siteConfig.phone}
          </a>
        </div>
      </div>

      <aside className={`${cardClass} bg-[#F8FAFB]`}>
        <div className={heroEyebrowClass}>Kurulum yaklaşımımız</div>

        <h2 className="mb-3 text-[24px] text-[#0F2B46]">{processSummary.title}</h2>
        <p className={`${bodyTextClass} mb-[18px]`}>{processSummary.body}</p>

        <div className={trustGridClass}>
          {trustBullets.map((item) => (
            <div key={item} className={trustCardClass}>
              {item}
            </div>
          ))}
        </div>
      </aside>
    </section>
  );
}
