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

interface ServiceSegmentFitItem {
  slug: string;
  name: string;
  summary: string;
  decisionMakerLabel: string;
  trustAngle: string;
  ctaAngle: string;
  commonServices: string[];
}

interface ServiceSegmentFitProps {
  title: string;
  description: string;
  items: ServiceSegmentFitItem[];
}

export default function ServiceSegmentFit({
  title,
  description,
  items,
}: ServiceSegmentFitProps) {
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
            <h3 className={h3CompactClass}>{item.name}</h3>
            <p className={bodyTextClass}>{item.summary}</p>
            <p className={`${bodyTextSmallClass} mt-3`}>
              <strong>Karar verici:</strong> {item.decisionMakerLabel}
            </p>
            <p className={`${bodyTextSmallClass} mt-2`}>
              <strong>Güven beklentisi:</strong> {item.trustAngle}
            </p>
            <p className={`${bodyTextSmallClass} mt-2`}>
              <strong>Teklif dili:</strong> {item.ctaAngle}
            </p>
            {item.commonServices.length > 0 ? (
              <p className={`${bodyTextSmallClass} mt-2`}>
                <strong>Yakın ihtiyaçlar:</strong> {item.commonServices.join(", ")}
              </p>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
