import ServiceImageGrid from "@/components/service-page/ServiceImageGrid";
import {
  gridClass,
  sectionClass,
  sectionIntroClass,
  sectionTitleClass,
  softCardClass,
  useCaseTextClass,
} from "@/components/service-page/styles";
import type { ServicePageImage } from "@/lib/service-page-factory";

interface ServiceUseCasesProps {
  title: string;
  description: string;
  localContext?: string;
  items: string[];
  supportImages?: ServicePageImage[];
  useCaseImages?: ServicePageImage[];
}

export default function ServiceUseCases({
  title,
  description,
  localContext,
  items,
  supportImages = [],
  useCaseImages = [],
}: ServiceUseCasesProps) {
  return (
    <section className={sectionClass}>
      <h2 className={sectionTitleClass}>{title}</h2>
      <p className={sectionIntroClass}>{description}</p>
      {localContext ? <p className={sectionIntroClass}>{localContext}</p> : null}

      {supportImages.length > 0 ? (
        <div className="mt-6">
          <ServiceImageGrid images={supportImages.slice(0, 2)} priorityFirst />
        </div>
      ) : null}

      <div className={gridClass}>
        {items.map((item) => (
          <div key={item} className={softCardClass}>
            <div className={useCaseTextClass}>{item}</div>
          </div>
        ))}
      </div>

      {useCaseImages.length > 0 ? (
        <div className="mt-6">
          <ServiceImageGrid images={useCaseImages.slice(0, 2)} />
        </div>
      ) : null}
    </section>
  );
}
