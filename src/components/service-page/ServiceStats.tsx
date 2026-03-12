import {
  gridClass,
  mutedCardClass,
  sectionClass,
  sectionIntroClass,
  sectionTitleClass,
  statLabelClass,
  statValueClass,
} from "@/components/service-page/styles";

export interface ServiceStatItem {
  label: string;
  value: string;
}

interface ServiceStatsProps {
  title: string;
  description: string;
  items: ServiceStatItem[];
}

export default function ServiceStats({ title, description, items }: ServiceStatsProps) {
  return (
    <section className={sectionClass}>
      <h2 className={sectionTitleClass}>{title}</h2>
      {description ? <p className={sectionIntroClass}>{description}</p> : null}

      <div className={gridClass}>
        {items.map((item) => (
          <div key={item.label} className={mutedCardClass}>
            <div className={statValueClass}>{item.value}</div>
            <div className={statLabelClass}>{item.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
