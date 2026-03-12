import {
  bodyTextClass,
  cardClass,
  h3TitleClass,
  sectionClass,
  sectionIntroClass,
  sectionTitleClass,
  wideGridClass,
} from "@/components/service-page/styles";

interface ServicePackageItem {
  title: string;
  description: string;
}

interface ServicePackagesProps {
  title: string;
  description: string;
  localContext?: string;
  items: ServicePackageItem[];
}

export default function ServicePackages({
  title,
  description,
  localContext,
  items,
}: ServicePackagesProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <section className={sectionClass}>
      <h2 className={sectionTitleClass}>{title}</h2>
      <p className={sectionIntroClass}>{description}</p>
      {localContext ? <p className={sectionIntroClass}>{localContext}</p> : null}

      <div className={wideGridClass}>
        {items.map((item) => (
          <div key={item.title} className={cardClass}>
            <h3 className={h3TitleClass}>{item.title}</h3>
            <p className={bodyTextClass}>{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
