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

interface ServiceCommercialHighlightsProps {
  title: string;
  description: string;
  audienceItems: string[];
  includedItems: string[];
  urgencyTitle: string;
  urgencyBody: string;
  trustTitle: string;
  trustItems: string[];
}

export default function ServiceCommercialHighlights({
  title,
  description,
  audienceItems,
  includedItems,
  urgencyTitle,
  urgencyBody,
  trustTitle,
  trustItems,
}: ServiceCommercialHighlightsProps) {
  return (
    <section className={sectionClass}>
      <h2 className={sectionTitleClass}>{title}</h2>
      <p className={sectionIntroClass}>{description}</p>

      <div className={wideGridClass}>
        <div className={cardClass}>
          <h3 className={h3CompactClass}>Kimler için uygun?</h3>
          <ul className="space-y-2">
            {audienceItems.map((item) => (
              <li key={item} className={bodyTextSmallClass}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className={cardClass}>
          <h3 className={h3CompactClass}>Hizmete neler dahil?</h3>
          <ul className="space-y-2">
            {includedItems.map((item) => (
              <li key={item} className={bodyTextSmallClass}>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className={cardClass}>
          <h3 className={h3CompactClass}>{urgencyTitle}</h3>
          <p className={bodyTextClass}>{urgencyBody}</p>
        </div>

        <div className={cardClass}>
          <h3 className={h3CompactClass}>{trustTitle}</h3>
          <ul className="space-y-2">
            {trustItems.map((item) => (
              <li key={item} className={bodyTextSmallClass}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
