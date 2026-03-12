import {
  gridClass,
  mutedCardClass,
  sectionClass,
  statLabelClass,
  statValueClass,
} from "@/components/service-page/styles";

export interface ServiceStatItem {
  label: string;
  value: string;
}

interface ServiceStatsProps {
  items: ServiceStatItem[];
}

export default function ServiceStats({ items }: ServiceStatsProps) {
  return (
    <section className={`${sectionClass} ${gridClass}`}>
      {items.map((item) => (
        <div key={item.label} className={mutedCardClass}>
          <div className={statValueClass}>{item.value}</div>
          <div className={statLabelClass}>{item.label}</div>
        </div>
      ))}
    </section>
  );
}
