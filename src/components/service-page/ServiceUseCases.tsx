import {
  gridClass,
  sectionClass,
  sectionIntroClass,
  sectionTitleClass,
  softCardClass,
  useCaseTextClass,
} from "@/components/service-page/styles";

interface ServiceUseCasesProps {
  title: string;
  description: string;
  items: string[];
}

export default function ServiceUseCases({ title, description, items }: ServiceUseCasesProps) {
  return (
    <section className={sectionClass}>
      <h2 className={sectionTitleClass}>{title}</h2>
      <p className={sectionIntroClass}>{description}</p>

      <div className={gridClass}>
        {items.map((item) => (
          <div key={item} className={softCardClass}>
            <div className={useCaseTextClass}>{item}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
