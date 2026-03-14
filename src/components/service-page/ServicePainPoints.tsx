import {
  bodyTextClass,
  bodyTextSmallClass,
  cardClass,
  h3CompactClass,
  sectionClass,
  sectionIntroClass,
  sectionTitleClass,
  wideGridClass,
} from "@/components/service-page/styles";

interface ServicePainPointItem {
  slug: string;
  label: string;
  painStatement: string;
  businessImpact: string;
  recommendedCtaAngle: string;
}

interface ServicePainPointsProps {
  title: string;
  description: string;
  items: ServicePainPointItem[];
}

export default function ServicePainPoints({
  title,
  description,
  items,
}: ServicePainPointsProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section className={sectionClass}>
      <h2 className={sectionTitleClass}>{title}</h2>
      <p className={sectionIntroClass}>{description}</p>

      <div className={wideGridClass}>
        {items.map((item) => (
          <article key={item.slug} className={cardClass}>
            <h3 className={h3CompactClass}>{item.label}</h3>
            <p className={bodyTextClass}>{item.painStatement}</p>
            <p className={`${bodyTextSmallClass} mt-3`}>
              <strong>İş etkisi:</strong> {item.businessImpact}
            </p>
            <p className={`${bodyTextSmallClass} mt-2`}>
              <strong>Doğru yaklaşım:</strong> {item.recommendedCtaAngle}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
