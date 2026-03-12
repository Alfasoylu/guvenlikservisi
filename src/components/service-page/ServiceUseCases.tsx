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
  localContext?: string;
  items: string[];
}

export default function ServiceUseCases({
  title,
  description,
  localContext,
  items,
}: ServiceUseCasesProps) {
  return (
    <section className={sectionClass}>
      <h2 className={sectionTitleClass}>{title}</h2>
      <p className={sectionIntroClass}>{description}</p>
      {localContext ? <p className={sectionIntroClass}>{localContext}</p> : null}

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
